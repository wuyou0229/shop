<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="container">
      <div class="bread-crumb">
        <Breadcrumb>
          <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> 首页
          </BreadcrumbItem>
          <BreadcrumbItem to="/goodsList?sreachData=">
            <Icon type="bag"></Icon> {{searchItem}}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <!-- 商品标签导航 -->
      <GoodsClassNav></GoodsClassNav>
      <!-- 商品展示容器 -->
      <div class="goods-box">
       
        <div class="goods-list-box">
          <div class="goods-list-tool">
            <ul>
              <li  v-for="(item,index) in goodsTool" :key="index" @click="orderBy(item.en, index)"><span class="sequence" :class="{ 'goods-list-tool-active': isAction[index]}">{{item.title}} <Icon :type="icon[index]"></Icon></span></li>
            </ul>
          </div>
          <div class="goods-list">
            <div class="goods-show-info" v-for="(item, index) in orderGoodsList" :key="index">
              <div @click="toDetail(item.intro)" class="goods-show-img">
               <img width="220px" :src="item.img"/> 
              </div>
              <div class="goods-show-price">
                <span>
                  <Icon type="social-yen  orange "></Icon>
                  <span class="seckill-price orange ">{{item.price}}</span>
                </span>
              </div>
              <div class="goods-show-detail">
                <span>{{item.intro}}</span>
              </div>
              <div class="goods-show-num">
                评价数：<span>{{item.remarks}}</span>
              </div>
              <div class="goods-show-seller">
                <span>{{item.shopName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="as-box">
          <div class="item-as-title">
            <span>商品精选</span>
            <span>广告</span>
          </div>
          <div class="item-as" v-for="(item,index) in asItems" :key="index">
            <div class="item-as-img">
              <img :src="item.img" alt="">
            </div>
            <div class="item-as-price">
              <span>
                <Icon type="social-yen     orange "></Icon>
                <span class="seckill-price orange ">{{item.price}}</span>
              </span>
            </div>
            <div class="item-as-intro">
              <span>{{item.intro}}</span>
            </div>
            <div class="item-as-selled">
              已有<span>{{item.num}}</span>人评价
            </div>
          </div>
        </div>
      </div>
      <div class="goods-page">
        <Page :total="100" show-sizer></Page>
      </div>
    </div>
    <Spin size="large" fix v-if="isLoading"></Spin>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import GoodsClassNav from '@/components/nav/GoodsClassNav';
import store from '@/vuex/store';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'GoodsList',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  data () {
    return {
      searchItem: '',
      isAction: [ true, false, false ],
      icon: [ 'arrow-up-a', 'arrow-down-a', 'arrow-down-a' ],
      goodsTool: [
        {title: '综合', en: 'sale'},
        {title: '评论数', en: 'remarks'},
        {title: '价格', en: 'price'}
      ]
    };
  },
  computed: {
    ...mapState(['asItems', 'isLoading']),
    ...mapGetters(['orderGoodsList'])
  },
  methods: {
    ...mapActions(['loadGoodsList']),
    ...mapMutations(['SET_GOODS_ORDER_BY']),
    toDetail(intro){
      this.$router.push({
          path:`/goodsDetail/${intro}`,
        
        })}
        ,
    orderBy (data, index) {
      console.log(data);
      this.icon = [ 'arrow-down-a', 'arrow-down-a', 'arrow-down-a' ];
      this.isAction = [ false, false, false ];
      this.isAction[index] = true;
      this.icon[index] = 'arrow-up-a';
      this.SET_GOODS_ORDER_BY(data);
    }
  },
  created () {
    this.loadGoodsList();
  },
  mounted () {
    this.searchItem = this.$route.query.sreachData;
  },
  components: {
    Search,
    GoodsListNav,
    GoodsClassNav
  },
  store
};
</script>

<style scoped>
.container {
  margin: 15px auto;
  width: 93%;
  min-width: 1000px;
}
.text-danger {
  color: #A94442;
}
.seckill-price{
  margin-right: 5px;
  font-size: 25px;
  font-weight: bold;
}
.goods-box {
  display: flex;
}
/* ---------------侧边广告栏开始------------------- */
.as-box {
  margin-left: 20px;
  width: 200px;
  border: 1px solid #ccc;
}
.item-as-title{
  width: 100%;
  height: 36px;
  color: #E83936;
  line-height: 36px;
  font-size: 18px;
}
.orange{
  color: #E75B28;
}
.item-as-title span:first-child{
  margin-left: 20px;
}
.item-as-title span:last-child{
  float: right;
  margin-right: 15px;
  font-size: 10px;
  color: #ccc;
}
.item-as{
  width: 160px;
  margin: 18px auto;
}
.item-as-img{
  width: 160px;
  height: 160px;
  margin: 0px auto;
}
.item-as-price span{
  font-size: 18px;
}
.item-as-intro{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled{
  margin-top: 5px;
  font-size: 12px;
}
.item-as-selled span{
  color: #005AA0;
}
/* ---------------侧边广告栏结束------------------- */

/* ---------------商品栏开始------------------- */
.goods-list-box {
  margin-left: 15px;
  width: calc(100% - 215px);
}
.goods-list-tool{
  width: 100%;
  height: 70px;
  border: 1px solid #ccc;
  background-color: #F1F1F1;
}
.goods-list-tool ul{
  padding-left: 15px;
  list-style: none;
}
.goods-list-tool li{
  cursor: pointer;
  float: left;
  padding-top: 15px;
}
 
.goods-list-tool span{
   padding:15px;
   border-left: none;
  line-height: 36px;
  background-color: #fff;
}
.goods-list-tool span:hover{

  border: 1px solid #E4393C;
}
.goods-list-tool i:hover{
  color: #E4393C;
}
.sequence{
  width: 200px;
  height: 50px;
}
.goods-list-tool-active {
  color: #FF4400;
  border-left: 1px solid #ccc;
  background-color: #fff !important;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-show-info{
  width: 240px;
  padding: 10px;
  margin: 15px 0px;
  border: 1px solid #fff;
  cursor: pointer;
}
.goods-show-info:hover{
  border: 1px solid #E73C34;
  box-shadow: 0px 0px 20px #ccc;
}
.goods-show-price{
  margin-top: 6px;
}
.goods-show-detail{
  font-size: 12px;
  margin: 6px 0px;
}
.goods-show-detail:hover{
  color: #E75B28;
  text-decoration: underline;
  
}
.goods-show-num{
  font-size: 12px;
  margin-bottom: 6px;
  color: #009688;
}
.goods-show-num span{
  color: #005AA0;
  font-weight: bold;
}
.goods-show-seller{
  font-size: 12px;
  color:#E4393C;
}
.goods-page {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
/* ---------------商品栏结束------------------- */
</style>
