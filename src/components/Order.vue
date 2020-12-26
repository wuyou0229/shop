<template>
  <div>
    <Search></Search>
    <GoodsListNav></GoodsListNav>
    <div class="goods-list-container">
      <Alert show-icon class="tips-box">
        小提示
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">请点击商品前的选择框，选择购物车中的商品，点击付款即可。</template>
      </Alert>
      
      <Table border ref="selection" :columns="columns" :data="shoppingCart" size="large" @on-selection-change="select" no-data-text="您的购物车没有商品，请先添加商品到购物车再点击购买"></Table>
       <span style="font-size:20px;">请选择物流方式:</span> 
       <Row>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show=1" :class="{'active':show==1}">  <img width="130px" src="../../static/img/pay/st.jpg" alt=""> </div> </i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show=2" :class="{'active':show==2}">  <img width="130px" src="../../static/img/pay/sf.jpg" alt=""> </div> </i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show=3" :class="{'active':show==3}">  <img width="130px" src="../../static/img/pay/yt.jpg" alt=""> </div> </i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show=4" :class="{'active':show==4}">  <img width="130px" src="../../static/img/pay/zt.jpg" alt=""> </div></i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show=5" :class="{'active':show==5}">  <img width="130px" src="../../static/img/pay/bs.jpg" alt=""> </div></i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show=6" :class="{'active':show==6}">  <img width="130px" src="../../static/img/pay/yz.jpg" alt=""> </div></i-Col>

    </Row>
     <div style="margin-top:30px; font-size:20px;">
     <span >请选择付款方式:</span> 
       <Row>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show2=1" :class="{'active':show2==1}">  <img width="130px" src="../../static/img/pay/zfb.jpg" alt=""> </div> </i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show2=2" :class="{'active':show2==2}">  <img width="130px" src="../../static/img/pay/wx.png" alt=""> </div> </i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show2=3" :class="{'active':show2==3}">  <img width="130px" src="../../static/img/pay/yl.jpg" alt=""> </div> </i-Col>
        <i-Col span="4"> <div style="text-align:center; margin:0 auto" @click="show2=4" :class="{'active':show2==4}">  <img width="130px" src="../../static/img/pay/jd.jpg" alt=""> </div></i-Col>
    </Row>
 </div> 
      <div class="address-container">
        <h3>收货人信息</h3>
        <div class="address-box">
          <div class="address-check">
            <div class="address-check-name">
              <span><Icon type="ios-checkmark-outline"></Icon> {{checkAddress.name}}</span>
            </div>
            <div class="address-detail">
              <p>{{checkAddress.address}}</p>
            </div>
          </div>
          <Collapse>
            <Panel>
                选择地址
                <p slot="content">
                  <RadioGroup vertical size="large" @on-change="changeAddress">
                    <Radio :label="item.addressId" v-for="(item, index) in address" :key="index">
                      <span>{{item.name}} {{item.province}} {{item.city}} {{item.address}} {{item.phone}} {{item.postalcode}}</span>
                    </Radio>
                  </RadioGroup>
                </p>
            </Panel>
          </Collapse>
         <router-link to="/home/myAddress"> <Button style="margin-top:50px;"  size="large">新建地址</Button></router-link>

        </div>
      </div>
      <div class="remarks-container">
        <h3>备注</h3>
        <i-input v-model="remarks" size="large" placeholder="在这里填写备注信息" class="remarks-input"></i-input>
      </div>
      <div class="invoices-container">
        <h3>发票信息</h3>
        <p>该商品不支持开发票</p>
      </div>
      <div class="pay-container">
        <div class="pay-box">
          <p><span>提交订单应付总额：</span> <span class="money"><Icon type="social-yen"></Icon> {{totalPrice.toFixed(2)}}</span></p>
          <div class="pay-btn">
            <router-link to="/pay"><Button type="error" size="large">支付订单</Button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import GoodsListNav from '@/components/nav/GoodsListNav';
import store from '@/vuex/store';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Order',
  beforeRouteEnter (to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
  created () {
    this.loadAddress();
  },
  data () {
    return {
      show:0,
      show2:0,
      goodsCheckList: [],
      columns: [
        {
          type: 'selection',
          width: 58,
          align: 'center'
        },
        {
          title: '图片',
          key: 'img',
          width: 86,
          render: (h, params) => {
            return h('div', [
              h('img', {
                attrs: {
                  src: params.row.img
                }
              })
            ]);
          },
          align: 'center'
        },
        {
          title: '标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '套餐',
          width: 198,
          key: 'package',
          align: 'center'
        },
        {
          title: '数量',
          key: 'count',
          width: 68,
          align: 'center'
        },
        {
          title: '价格',
          width: 68,
          key: 'price',
          align: 'center'
        }
      ],
      checkAddress: {
        name: '未选择',
        address: '请选择地址'
      },
      remarks: ''
    };
  },
  computed: {
    ...mapState(['address', 'shoppingCart']),
    totalPrice () {
      let price = 0;
      this.goodsCheckList.forEach(item => {
        price += item.price * item.count;
      });
      return price;
    }
  },
  methods: {
    ...mapActions(['loadAddress']),
    select (selection, row) {
      console.log(selection);
      this.goodsCheckList = selection;
    },
    changeAddress (data) {
      const father = this;
      this.address.forEach(item => {
        if (item.addressId === data) {
          father.checkAddress.name = item.name;
          father.checkAddress.address = `${item.name} ${item.province} ${item.city} ${item.address} ${item.phone} ${item.postalcode}`;
        }
      });
    }
  },
  mounted () {
    setTimeout(() => {
      this.$refs.selection.selectAll(true);
    }, 500);
  },
  components: {
    Search,
    GoodsListNav
  },
  store
};
</script>

<style scoped>
.goods-list-container {
  margin: 15px auto;
  width: 80%;
}
.tips-box {
  margin-bottom: 15px;
}
.address-container {
  margin-top: 15px;
}
.address-box {
  margin-top: 15px;
  padding: 15px;
  border: 1px #ccc dotted;
}
.address-check {
  margin: 15px 0px;
  height: 36px;
  display: flex;
  align-items: center;
}
.address-check-name {
  width: 120px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
}
.address-check-name span {
  width: 120px;
  height: 36px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: #f90013;
}
.address-detail {
  padding-left: 15px;
  font-size: 14px;
  color: #999999;
}
.remarks-container {
  margin: 15px 0px;
}
.remarks-input {
  margin-top: 15px;
}
.invoices-container p{
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.pay-container {
  margin: 15px;
  display: flex;
  justify-content: flex-end;
}
.pay-box {
  font-size: 18px;
  font-weight: bolder;
  color: #495060;
}
.money {
  font-size: 26px;
  color: #f90013;
}
.pay-btn {
  margin: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
.active{
  border: 2px solid #C22F30;
}
</style>
