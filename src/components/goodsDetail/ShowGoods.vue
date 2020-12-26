<template>
  <div>
    <div class="item-detail-show">
      <div id="bigBox" class="bigBox"></div>
      <div class="item-detail-left">
        <div class="item-detail-big-img">
            
             <img :src="goodsInfo.goodsImg[imgIndex]" alt="">
             <!-- 遮罩层 玻璃板 superMarks -->
              <div v-show="isShow" class="marks" :style="{top:top+435+'px',left:left+300+'px'}"></div>
                
                <div v-if="isPC==false" @touchstart.prevent="enter" @touchend.prevent="leave"  @touchmove.prevent="marks" @click.prevent="sub()" class="superMarks" ></div>

                <div v-if="isPC==true" @mouseenter="enter" @mouseleave="leave"  @mousemove="marks" @click.prevent="sub()" class="superMarks" ></div>

                <div v-show="isShow" class="lgImg">
                    <img :src="goodsInfo.goodsImg[imgIndex]" alt="" :style="{top:topLgImg+'px',left:leftLgImg+'px'}">
                </div>
                <!--  -->
        </div>
        
        <div  id="smallBox" class="item-detail-img-row">
          <div  class="smallBox item-detail-img-small" v-for="(item, index) in goodsInfo.goodsImg" :key="index" @mouseover="showBigImg(index)">
           <div>
              
            <img  :src="item" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="item-detail-right">
        <div class="item-detail-title">
          <p>
            <span class="item-detail-express">校园配送</span> {{goodsInfo.title}}</p>
        </div>
        <div class="item-detail-tag">
          <p>
            <span v-for="(item,index) in goodsInfo.tags" :key="index">【{{item}}】</span>
          </p>
        </div>
        <div class="item-detail-price-row">
          <div class="item-price-left">
            <div class="item-price-row">
              <p>
                <span class="item-price-title">钜 惠 价</span>
                <span class="item-price">￥{{price.toFixed(2)}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">优 惠 券</span>
                <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.discount" :key="index">{{item}}</span>
              </p>
            </div>
            <div class="item-price-row">
              <p>
                <span class="item-price-title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                <span class="item-price-full-cut" v-for="(item,index) in goodsInfo.promotion" :key="index">{{item}}</span>
              </p>
            </div>
          </div>
          <div class="item-price-right">
            <div class="item-remarks-sum">
              <p>累计评价</p>
              <p>
                <span class="item-remarks-num">{{goodsInfo.remarksNum}} 条</span>
              </p>
            </div>
          </div>
        </div>
         <div class="item-select">
          <div class="item-select-title">
            <p>选择款式</p>
          </div>
          <div class="item-select-column">
            <div class="item-select-row" v-for="(items, index) in goodsInfo.setMeal" :key="index">
              <div class="item-select-box" v-for="(item, index1) in items" :key="index1" @click="select(index, index1)" :class="{'item-select-box-active': ((index * 3) + index1) === selectBoxIndex}">
                <div class="item-select-img">
                  <img :src="item.img" alt="">
                </div>
                <div class="item-select-intro">
                  <p>{{item.intro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
        <br>
        <div class="add-buy-car-box">
          <div class="add-buy-car">
            <InputNumber :min="1" v-model="count" size="large"></InputNumber>
            <Button type="error" size="large" @click="addShoppingCartBtn()">加入购物车</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>





import store from '@/vuex/store';

import { mapMutations,mapState, mapActions } from 'vuex';
export default {
  name: 'ShowGoods',
  data () {
    return {
      price: 0,
      count: 1,
      selectBoxIndex: 0,
      imgIndex: 0,
       configs: {
             width:350,
             height:350,
             maskWidth:100,
             maskHeight:100,
             maskColor:'red',
             maskOpacity:0.2
           },

 isPC:true,
                // 大图片
                qall: ' ',
                qallBig: ' ',
                isShow:false,   //控制遮罩层marks和大图片是否显示"
                left:0,       //marks左移位置
                top:0,         //marks下移位置
                leftLgImg:0,       //大图lgImg移动的位置
                topLgImg:0    

    };
  },
  computed: {
    ...mapState(['goodsInfo']),
    hirePurchase () {
      const three = this.price * this.count / 3;
      const sex = this.price * this.count / 6;
      const twelve = this.price * this.count / 12 * 1.0025;
      const twentyFour = this.price * this.count / 24 * 1.005;
      return [
        
      ];
    }
  },
  methods: {
//

 enter(){
            this.isShow=true;
        },
        leave(){
            this.isShow=false;
        },
        marks(e){
             var marksWidth=80;//marks的宽
            var marksHeight=80;//marks的高
           if(this.isPC==true){
            //PC端
               
               
                // 
                this.leftLgImg=(-this.left+300)*320/160;
                this.topLgImg=(-this.top+415)*181/91;
                this.left=e.offsetX-marksWidth/2;   
                this.top= e.offsetY-marksHeight/2;
                if(this.left<0){
                    this.left=0;
                }else if(this.left>270){
                    this.left=270;
                }
                if(this.top<0){
                    this.top=0;
                }else if(this.top>272){
                    this.top=272;
                }
                
                //大的图片除以小的图片的宽高
                this.leftLgImg=-this.left*320/300;
                this.topLgImg=-this.top*181/150;
            }else{
                //移动端
                this.left=e.changedTouches[0].clientX-marksWidth/2;   
                this.top=e.changedTouches[0].clientY-marksHeight/2;
                if(this.left<300){
                    this.left=300;
                }else if(this.left>650){
                    this.left=650;
                }
                if(this.top<415){
                    this.top=415;
                }else if(this.top>765){ 
　　　　　　　　　　　　//45就是小图片的高度的一半，91/2
                    this.top=765;
                }   
                //大d图片除以小的图片的宽高
                this.leftLgImg=(-this.left+300)*320/160;
                this.topLgImg=(-this.top+s415)*181/91;
            }

            
        },
    ...mapActions(['addShoppingCart']),
     ...mapActions(['isLogin']),
    ...mapMutations(['SET_USER_LOGIN_INFO']),
    select (index1, index2) {
      this.selectBoxIndex = index1 * 3 + index2;
      this.price = this.goodsInfo.setMeal[index1][index2].price;
    },
    showBigImg (index) {
      this.imgIndex = index;
    },
    addShoppingCartBtn () {
         const father = this;
        this.isLogin().then( res=>{
        console.log(res)
        if(res==0){
      father.$router.push('/login');
    }
    else{
      const index1 = parseInt(this.selectBoxIndex / 3);
      const index2 = this.selectBoxIndex % 3;
      const date = new Date();
      const goodsId = date.getTime();
      const data = {
        goods_id: goodsId,
        title: this.goodsInfo.title,
        count: this.count,
        package: this.goodsInfo.setMeal[index1][index2]
      };
      this.addShoppingCart(data);
      this.$router.push('/shoppingCart');
    }
      })
    
    }
  },
  mounted () {
//    
if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,)) {
        this.isPC = false; 
      
    } else {
        console.log('PC端')

    }
//
    const father = this;
    setTimeout(() => {
      father.price = father.goodsInfo.setMeal[0][0].price || 0;
    }, 300);
  },
  store
};
</script>

<style scoped>
/******************商品图片及购买详情开始******************/
.bigBox{
  width: 430px;
  height: 430px;
  position: absolute;
  left:550px;
  display: none;
  background-color: #111111;
}
#mask {
	width:175px;
	height:175px;
	background:rgba(255,255,0,0.4);
	position:absolute;
	top:0;
	left:0;
	cursor:move;
	display:none;
}
.item-detail-show {

  width: 80%;
  margin: 80px 300px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
   width: 350px;
  height: 350px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 100%;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 100%;
}
/*商品选购详情*/
.item-detail-right {
  margin-left: 60px;
  display: flex;
  flex-direction: column;
}
.item-detail-title p {
  color: #666;
  font-size: 20px;
}
.item-detail-express {
  font-size: 14px;
  padding: 2px 3px;
  border-radius: 3px;
  background-color: #e4393c;
  color: #fff;
}
/*商品标签*/
.item-detail-tag {
  font-size: 12px;
  color: #e4393c;
}
/*价格详情等*/
.item-detail-price-row {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #FFF2E8;
}
.item-price-left {
  display: flex;
  flex-direction: column;
}
.item-price-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-price-row {
  margin: 5px 0px;
}
.item-price {
  color: #FF4400;
  font-size: 23px;
  cursor: pointer;
}
.item-price-full-cut {
  margin-right: 5px;
  padding: 3px;
  color: #e4393c;
  font-size: 12px;
  background-color: #ffdedf;
  border: 1px dotted #e4393c;
  cursor: pointer;
}
.item-remarks-sum {
  padding-left: 8px;
  border-left: 1px solid #ccc;
}
.item-remarks-sum p {
  color: #999999;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
}
.item-remarks-num {
  line-height: 18px;
  color: #005eb7;
}
.item-select {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.item-select-title {
  color: #999999;
  font-size: 14px;
  margin-right: 15px;
}
.item-select-column {
  display: flex;
  flex-direction: column;
}
.item-select-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}
.item-select-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item-select-img {
  width: 36px;
}
.item-select-box {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border:2px solid #ccc;
  cursor: pointer;
}
.item-select-box:hover {
  border: 2px solid #FF0036;
}
.item-select-box-active {
  border: 2px solid #FF0036;
}
.item-select-img img {
  width: 100%;
}
.item-select-intro p {
  margin: 0px;
  padding: 5px;
}
.item-select-class {
  padding: 5px;
  margin-right: 8px;
  background-color: #f7f7f7;
  border: 0.5px solid #ccc;
  cursor: pointer;
}
.item-select-class:hover {
  border: 0.5px solid #e3393c;
}
.add-buy-car-box {
  padding-left: 100px;
  width: 100%;
  margin-top: 15px;
  border-top: 1px dotted #ccc;
}
.add-buy-car {
  margin-top: 15px;
}
/******************商品图片及购买详情结束******************/
/* 放大镜 */


    
    /*遮罩层superMarks */
    .superMarks{
        width:350px;
        height:380px;
        background-color:rgba(220, 220, 220, 0);
        position:absolute;
        top:415px;
        left:300px;

    }
    /* 遮罩层 */
    .marks{
        width:80px;
        height:80px;
        position:absolute;
        background-color:rgba(254, 209, 148, 0.5);
      
        /*top:0px;  //内联设置了动态的top，left
        left:0px;*/
    }
    
    /* 左侧隐藏大图 */
    .lgImg{
        width:400px;
        height:400px;
        overflow: hidden;
        position:absolute;
        top:360px;
        left:700px;
        border:1px solid #D1D1D1;
        background-color:#fff;
    }
    .lgImg img{
       width:700px;
        height:700px;
        position:absolute;
        /*top:100px;
        left:100px;*/
    }

</style>
