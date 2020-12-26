// 获取秒杀数据
import api from './../axios/api.js'
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
   
    
    
    api.gain('/seckill/index','').then(res =>{   
      const data=res.data;
       const  deadline=res.deadline
     commit('SET_SECKILLS_INFO', [data,deadline]);
   })
   
   
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {

   
     const data = {
      carouselItems: [''],
      activity: []
    };
   api.gain('/navBar/index','').then(res =>{   
    data.carouselItems=res.carouselItems;
    data.activity=res.activity;
    commit('SET_CAROUSELITEMS_INFO', data);
  })
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '电脑数码',
      link: [ '电脑馆', '游戏极品', '装机大师', '职场焕新', '女神频道', '虚拟现实', '二合一平板', '电子教育', '万物周刊' ],
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              title: '电脑馆',
              intro: '笔记本999元限量秒！',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              title: '外设装备',
              intro: '1000减618',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              title: '电脑配件',
              intro: '联合满减最高省618',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              title: '办公生活',
              intro: '5折神券 精品文具',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemFour: [
            {
              title: '平板电脑',
              intro: '爆款平板12期免息',
              img: 'static/img/index/computer/item-computer-2-2.jpg'
            },
            {
              title: '智能酷玩',
              intro: '抢999减666神券',
              img: 'static/img/index/computer/item-computer-2-3.jpg'
            },
            {
              title: '娱乐影音',
              intro: '大牌耳机低至5折',
              img: 'static/img/index/computer/item-computer-2-4.jpg'
            },
            {
              title: '摄影摄像',
              intro: '大牌相机5折抢',
              img: 'static/img/index/computer/item-computer-2-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载爱吃专栏数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '爱吃',
      link: [ '休闲零食', '坚果', '牛奶', '饮料冲调', '食用油', '大米', '白酒', '红酒', '烧烤食材', '牛排', '樱桃' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit },intro) => {
  console.log(intro)
  
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let i=1;
      if(intro=='潮流女鞋，白色'){
        i=2
    }
    else if(intro=='潮流男鞋，冬季加绒'){
      i=3
    }
    else if(intro=='复古潮流new Balance'){
      i=4;
    }
    if(i==1){
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '中国风 苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
        tags: [ ],
        discount: ['满20减10', '满40减22', '满59减35'],
        promotion: ['跨店满减200-20', '多买优惠'],
        remarksNum: 6000,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'x-初霁',
              price: 28.0
            },
            {
              img: 'static/img/goodsDetail/pack/2.jpg',
              intro: 'x-灼灼',
              price: 29.0
            },
            {
              img: 'static/img/goodsDetail/pack/3.jpg',
              intro: 'x-启明',
              price: 28.5
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/4.jpg',
              intro: 'x-无恙',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail/pack/5.jpg',
              intro: 'x-如意',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail/pack/6.jpg',
              intro: 'x-缘',
              price: 35.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail/pack/7.jpg',
              intro: 'x-平安喜乐',
              price: 26.0
            },
            {
              img: 'static/img/goodsDetail/pack/8.jpg',
              intro: '苹果11-初霁',
              price: 25.0
            },
            {
              img: 'static/img/goodsDetail/pack/9.jpg',
              intro: '苹果11-无恙',
              price: 28.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail/hot/5.jpg',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail/hot/6.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg',
          'static/img/goodsDetail/intro/3.jpg',
          'static/img/goodsDetail/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: 'iPhone 7手机壳'
          },
          {
            title: '商品编号',
            content: '10435663237'
          },
          {
            title: '店铺',
            content: 'Gavin Shop'
          },
          {
            title: '商品毛重',
            content: '100.00g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '机型',
            content: 'iPhone 7'
          },
          {
            title: '材质',
            content: 'PC/塑料'
          },
          {
            title: '款式',
            content: '软壳'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
              goods: 'x-初霁',
              create_at: '2018-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
              goods: 'x-灼灼',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
              goods: 'x-如意',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
              goods: 'x-缘',
              create_at: '2018-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
              goods: 'x-初霁',
              create_at: '2018-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
              goods: 'x-平安喜乐',
              create_at: '2018-03-10 10:13'
            }
          ]
        }
     
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }
    else{
      const data2={
        goodsImg: [
          'static/img/goodsDetail'+i+'/item-detail-1.jpg',
          'static/img/goodsDetail'+i+'/item-detail-2.jpg',
          'static/img/goodsDetail'+i+'/item-detail-3.jpg',
          'static/img/goodsDetail'+i+'/item-detail-4.jpg'
        ],
        title: '潮流小白/黑鞋',
        tags: [ ],
        discount: ['满99减10', '满198减22', '满290减35'],
        promotion: ['跨店满减200-20', ],
        remarksNum: 5800,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/1.jpg',
              intro: '38码潮流舒适',
              price: 28.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
              intro: '38码潮流撞色舒适',
              price: 29.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
              intro: '38码潮撞色',
              price: 28.5
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/4.jpg',
              intro: '38码潮流撞色舒适',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/5.jpg',
              intro: '38码潮流撞色舒适',
              price: 32.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/6.jpg',
              intro: '39码潮流撞色舒适',
              price: 35.0
            }
          ],
          [
            {
              img: 'static/img/goodsDetail'+i+'/pack/7.jpg',
              intro: '39码潮流撞色舒适',
              price: 26.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/8.jpg',
              intro: '39码潮流撞色舒适',
              price: 25.0
            },
            {
              img: 'static/img/goodsDetail'+i+'/pack/9.jpg',
              intro: '39码潮流撞色舒适',
              price: 28.0
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail'+i+'/hot/1.jpg',
            price: 28.0,
            sale: 165076
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/2.jpg',
            price: 36.0,
            sale: 135078
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/3.jpg',
            price: 38.0,
            sale: 105073
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/4.jpg',
            price: 39.0,
            sale: 95079
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/5.jpg',
            price: 25.0,
            sale: 5077
          },
          {
            img: 'static/img/goodsDetail'+i+'/hot/6.jpg',
            price: 20.0,
            sale: 3077
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail'+i+'/intro/1.jpg',
          'static/img/goodsDetail'+i+'/intro/2.jpg',
          'static/img/goodsDetail'+i+'/intro/3.jpg',
          'static/img/goodsDetail'+i+'/intro/4.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '潮流小白鞋'
          },
          {
            title: '商品编号',
            content: '11234573278'
          },
          {
            title: '店铺',
            content: 'Our Shop'
          },
          {
            title: '商品毛重',
            content: '233g'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '鞋型',
            content: '小白鞋'
          },
          {
            title: '材质',
            content: '真皮'
          },
          {
            title: '款式',
            content: '潮流'
          },
          {
            title: '适用人群',
            content: '通用'
          }
        ],
        remarks: {
          goodAnalyse:99,
          remarksTags: [ '颜色可人', '实惠优选', '严丝合缝',  , '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', ,   ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            
            {
              username: '13****1',
              values: 5,
              content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
              goods: 'x-初霁',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
              goods: '苹果11 初霁',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
              goods: 'x-启明',
              create_at: '2018-04-06 16:23'
            },
          
          ]
        }
      
      
      
      
      }
      commit('SET_GOODS_INFO', data2);
      commit('SET_LOAD_STATUS', false);
    }
     
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 39.9,
            intro: '重生 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-3.jpg',
            price: 39.9,
            intro: '小王子 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 3140,
            sale: 9000
          },
          
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '创意插画 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-4.jpg',
            price: 38.6,
            intro: '肖战卡通 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-5.jpg',
            price: 35.6,
            intro: '夏目友人帐 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: '软壳硅胶 苹果8手机壳8PRO保护套男女',
            remarks: 6160,
            shopName: ' 淘工厂直营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: ' 朱一龙X手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: '808SP',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: '国货古风 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: '苏迅数码专营店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '复古中国风 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '红团数码科技',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-9.jpg',
            price: 48.00,
            intro: '美雁 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: '美雁数码旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-10.jpg',
            price: 15.00,
            intro: '高级感 苹果6/6s手机壳 苹果iphone6s 4.7英寸钢化玻璃手机套 清爽系列',
            remarks: 2800,
            shopName: '玩物上智',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-11.jpg',
            price: 29.90,
            intro: '日落油画 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '零七五三数码专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: '国风山海经 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: '含溪插画原创馆',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '原野趣侧边日式面包小动物 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '原野趣',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: '文豪野犬 苹果8手机壳 苹果8P英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: '花语数码手机壳',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '圆圆君幻色星球 苹果12手机壳全包防摔磨砂软保护套男女 ',
            remarks: 6080,
            shopName: '卡绮旗舰店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-12.jpg',
            price: 29.90,
            intro: '恩爱情侣手机壳 苹果12手机壳全包防摔磨砂软保护套男女 ',
            remarks: 6080,
            shopName: '黔人行DIY数码',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-13.jpg',
            price: 29.90,
            intro: '金箔银杏叶流沙 苹果12手机壳全包防摔磨砂软保护套男女 ',
            remarks: 6080,
            shopName: '豪通旗舰店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/9.jpg',
            price: 128,
            intro: '潮流男鞋，冬季加绒',
            remarks: 6160,
            shopName: '酷跑专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/10.jpg',
            price: 128,
            intro: '潮流女鞋，白色',
            remarks: 6160,
            shopName: '酷跑专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/11.jpg',
            price: 448,
            intro: '复古潮流new Balance',
            remarks: 6160,
            shopName: '酷跑专营店',
            sale: 9900
          }
          
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 获取用户推荐
export const loadRecommend = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      [
        {
          img: 'static/img/otherBuy/1.jpg',
          intro: 'iPhone7/6s/8钢化膜苹果7Plus全屏全覆盖3D抗蓝',
          price: 29.00
        },
        {
          img: 'static/img/otherBuy/2.jpg',
          intro: '苹果数据线 苹果iPhoneX/6s/7plus/8充电线',
          price: 36.00
        },
        {
          img: 'static/img/otherBuy/3.jpg',
          intro: '苹果8/7/6/6s钢化膜 iphone8/7/6s/6钢化玻璃',
          price: 19.00
        },
        {
          img: 'static/img/otherBuy/4.jpg',
          intro: 'iPhone6s/7钢化膜苹果8 Plus手机膜抗蓝光非全屏',
          price: 28.00
        }
      ],
      [
        {
          img: 'static/img/otherBuy/5.jpg',
          intro: '苹果6s手机壳iPhone6s Plus保护壳防摔全',
          price: 28.00
        },
        {
          img: 'static/img/otherBuy/6.jpg',
          intro: 'iPhone7/8手机壳手机套防摔磨砂保护壳星空黑☆全包保护',
          price: 30.00
        },
        {
          img: 'static/img/otherBuy/7.jpg',
          intro: '数据线 适用于苹果iPhone 6s/6plus/7plus/8/X',
          price: 18.00
        },
        {
          img: 'static/img/otherBuy/8.jpg',
          intro: 'iPhone8/7/6S/6钢化膜 苹果8/7/6s/6玻璃膜 手机高',
          price: 15.00
        }
      ]
    ];
    commit('SET_RECOMMEND_INFO', data);
  });
};

export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'chris',
        province: '江苏省',
        city: '苏州市',
        area: '常熟市',
        address: '常熟理工学院东南校区',
        phone: '158****5948',
        postalcode: ''
      },
      {
        addressId: '123458',
        name: 'velding',
        province: '上海市',
        city: '上海市',
        area: '嘉定区',
        address: '上海大学嘉定地区',
        phone: '138****7749',
        postalcode: ''
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: 'x-初霁',
      price: 28,
      title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
    }];
   
    console.log(localStorage.getItem('shopCar'))
    var content= JSON.parse(localStorage.getItem('shopCar'))
    if (content != null) {
      commit('SET_SHOPPING_CART',content);
  }
    
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Maoyanfei' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        console.log(item)
        console.log(data)
        if (item.username === data.username ||item.phone==data.username ) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
        
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
  else 
  return 0;
};
