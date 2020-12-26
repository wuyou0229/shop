// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
    case 1: 
     return parseInt(Math.random()*minNum+1); 
    break; 
    case 2: 
     return parseInt(Math.random()*(maxNum-minNum+1)+minNum); 
    break; 
    default: 
     return 0; 
    break; 
    } 
   } 
const navPhoto=function( ){
    let begin= randomNum(1,9);
    var tem;
    var carouselItems=new Array();
    var activity=new Array();
    for(let i=0;i<5;i++)
    {    tem=begin+i;
        if(tem>9)
            tem-=9;
        carouselItems.push('static/img/nav/'+tem+'.jpg'); 
    }
    let begin2= randomNum(1,4);
    var tem=0;
    for(let i=0;i<2;i++){
      tem=begin2+i;
      if(tem>4)
          tem-=4;
          activity.push('static/img/nav/nav_showimg'+tem+'.jpg'); 
    }

   return {
       carouselItems:carouselItems,
       activity:activity
        };
}
const GoodsInfo=function(){
  let i=2;
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
          intro: '38豆沙色',
          price: 28.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/2.jpg',
          intro: '38米色',
          price: 29.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/3.jpg',
          intro: '38褐色',
          price: 28.5
        }
      ],
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/4.jpg',
          intro: '38黑色',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/5.jpg',
          intro: '38白色',
          price: 32.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/6.jpg',
          intro: '39豆沙色',
          price: 35.0
        }
      ],
      [
        {
          img: 'static/img/goodsDetail'+i+'/pack/7.jpg',
          intro: '39米色',
          price: 26.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/8.jpg',
          intro: '39褐色',
          price: 25.0
        },
        {
          img: 'static/img/goodsDetail'+i+'/pack/9.jpg',
          intro: '39黑色',
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
          goods: 'x-如意',
          create_at: '2018-05-05 12:25'
        },
        {
          username: 'gd****c',
          values: 3.5,
          content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
          goods: 'x-灼灼',
          create_at: '2018-04-06 16:23'
        },
      
      ]
    }
  }

  const data1 = {
    goodsImg: [
      'static/img/goodsDetail/item-detail-1.jpg',
      'static/img/goodsDetail/item-detail-2.jpg',
      'static/img/goodsDetail/item-detail-3.jpg',
      'static/img/goodsDetail/item-detail-4.jpg'
    ],
    title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳',
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
          intro: '苹果11初霁',
          price: 25.0
        },
        {
          img: 'static/img/goodsDetail/pack/9.jpg',
          intro: '苹果11启明',
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
        content: 'iPhoneX手机壳'
      },
      {
        title: '商品编号',
        content: '1123457778'
      },
      {
        title: '店铺',
        content: 'Our Shop'
      },
      {
        title: '商品毛重',
        content: '123.00g'
      },
      {
        title: '商品产地',
        content: '中国大陆'
      },
      {
        title: '机型',
        content: 'iPhone X'
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
      goodAnalyse:99,
      remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
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
          goods: 'x-启明',
          create_at: '2018-05-05 12:25'
        },
        {
          username: 'gd****c',
          values: 3.5,
          content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
          goods: 'x-平安喜乐',
          create_at: '2018-04-06 16:23'
        },
      
      ]
    }
  };
}
const Segoods=function(){
  const sData = [
    {
      intro: '超大号鼠标垫电脑垫学生家用写字台桌面垫书桌垫游戏键盘垫子办公笔记本电脑橡胶',
      img: 'static/img/index/seckill/seckill-item1.jpg',
      price: 71.9,
      realPrice: 89.6
    },
    {
      intro: '【剑网3正版同人授权】剑三周边手机壳适用ipone11苹果x门派兔子',
      img: 'static/img/index/seckill/seckill-item2.jpg',
      price: 989.0,
      realPrice: 1299.0
    },
    {
      intro: '【百草味-糯米锅巴110g】咸蛋黄原味海鲜味糯米锅巴食品零食',
      img: 'static/img/index/seckill/seckill-item3.jpg',
      price: 21.8,
      realPrice: 49.0
    },
    {
      intro: '美丽工匠 洗脸巾女一次性洁面巾纯棉卷滚筒式洗面巾擦脸专用美容5包',
      img: 'static/img/index/seckill/seckill-item4.jpg',
      price: 49.9,
      realPrice: 59.0
    },
    {
      intro: '笔记本电脑包双肩包女背包男13 14 15 15.6寸适用苹果macbook pro华为小米联想戴尔华硕',
      img: 'static/img/index/seckill/seckill-item5.jpg',
      price: 559.9,
      realPrice: 759.9
    },
    {
      intro: '北欧陶瓷水杯创意带盖勺过滤茶漏杯子个性潮流马克杯咖啡杯茶杯 ',
      img: 'static/img/index/seckill/seckill-item6.jpg',
      price:  3699.99,
      realPrice: 3299.9
    },
    {
      intro: '圣诞节 萌可爱陶瓷摆件装饰零食碗茶壶收纳罐调味瓶盘子 雪人餐具 ',
      img: 'static/img/index/seckill/seckill-item7.jpg',
      price:  9999.9,
      realPrice:  8999.9
    },  
    {
      intro: '猫咪硅胶热水袋女灌注水小号型随身女学生暖手宝脚床上可爱便携式 ',
      img: 'static/img/index/seckill/seckill-item8.jpg',
      price:   1249.99,
      realPrice:  1399.9
    },
    {
      intro: '零下40度东北漠河雪乡哈尔滨黑龙江旅游装备加厚保暖女加绒防寒袜',
      img: 'static/img/index/seckill/seckill-item9.jpg',
      price:   98.99,
      realPrice:  119.9
    }
  ]
  let begin= randomNum(1,8);
    var tem;
    let data=new Array();
    for(let i=0;i<5;i++)
    {    tem=begin+i;
        if(tem>8)
            tem-=8;
            data.push(sData[tem]); 
    }
    let hour= randomNum(1,6);
    let minute=hour+ randomNum(0,40);
    let seconds=randomNum(0,60);
    let deadline = {
      hours: hour,
      minute: minute,
      seconds: seconds
    }
   
   return {
    data:data,
    deadline:deadline

        };
}

 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/navBar/index', 'post', navPhoto);
Mock.mock('/seckill/index', 'post', Segoods);
Mock.mock('/goodsSearch/index', 'post', GoodsInfo);
