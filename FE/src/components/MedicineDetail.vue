<template>
<div class="page page2">
    <nav class='fHead fHead2'>
        <a>
          <img src='../assets/frame/icon-37.png' v-link="{name: 'myHome'}">
        </a>
        <span>药物详情</span>
    </nav>    
    <div class="gdImg">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/images/img-17.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="{{product.imageUrl}}">
                </div>
                <div class="swiper-slide">
                    <img src="{{product.imageUrl}}">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>

    <div class='name'>
        <div class='i1'>
            <span>{{product.title}}</span>
            <a><img src='../assets/frame/icon-16.png'></a>
        </div>
        <div class='i2'>
            <img src='../assets/frame/icon-27.png'>
            <span>商品名: {{product.cName}}</span>
        </div>
        <div class='i2'>
            <img src='../assets/frame/icon-26.png'>
            <span>化学名: {{product.eName}}</span>
        </div>
    </div>

    <div class='price'>
        <div class='item'>
            <div class='left'>
                <span>{{product.packageSize1}}</span>
            </div>
            <div class='right'>
                <span class='i1'>€{{product.price1}}</span>
                <span class='i2'>人民币约{{product.price1}}{{product.currency}}</span>
            </div>
        </div>
        <div class='item'>
            <div class='left'>
                <span>4mg*20片</span>
            </div>
            <div class='right'>
                <span class='i1'>€暂无</span>
                <span class='i2'>人民币 暂无</span>
            </div>
        </div>
    </div>

    <div class='info'>
        <div class='i1'>
          <span>产地: {{product.manufactor}}</span>
            <span>销售地: {{product.origin}}</span>
        </div>
        <div class='i2'>
            <span>生产厂家: {{product.manufactor}}</span>
            <span class='tip'>原厂药品</span>
        </div>
    </div>

    <div class='content'>
        <div class='box'>
            <span class='i1'>适应症</span>
            <span class='i2'>适应证和用途:</span>
            <span class='i3'>L{{product.desc}}</span>
            <span class='i3'>{{product.disease}}</span>
        </div>
        <div class='box'>
            <span class='i1'>预期效果</span>
            <span class='i2'>{{product.result}}</span>
        </div>
        <div class='box'>
            <span class='i1'>副作用及禁忌</span>
            <span class='i3'>{{product.sideEffect}}</span>
        </div>
    </div>

   <!-- <div class='other'>
        <div class='title'>
          <img src='../assets/frame/icon-17.png'>
          <span>其他国家或厂家生产的同化学名药品</span>
          <a><img src='../assets/frame/icon-16.png'></a>
        </div>
      <div class='list'>
          <div class='item'v-for="item in product.ortherMdicines" v-on:click="gotoMedicineDetail(item.objectId)">
              <div class='left'>
               <span class='i1'>{{item.title}}</span>
                <span class='i2'>{{item.origin}} {{item.packageSize1}}</span>
                <div class='i3'>
                    <img src='../assets/frame/icon-6.png'>
                     <span>{{item.manufactor}}</span>
                    <img src='../assets/frame/icon-7.png'>
                     <span>{{item.price1}}{{item.currency}}</span>
                </div>
              </div>
              <div class='right'>
                   <img src="{{item.thumbImageUrl}}" mode='scaleToFill'>
              </div>
          </div>
    </div> -->

   <!-- <a class='ask'>
        <div class='left'>
          <div class='i1'>
              <div>
                  <img src='../assets/frame/icon-28.png'>
              </div>
              <span>印度仿制药用药咨询</span>
              <span class='tip'>免费</span>
          </div>
          <span class='i2'>
              <span class='guo'>印度</span>
              <span>12小时内响应，完整用药建议及正规药品处方</span>
          </span>
        </div>
        <div class='right'>
            <img src='../assets/frame/icon-22.png'>
        </div>
    </a>-->


</div>
</template>

<script type="text/babel">
  import {medicineData} from '../vuex/getters'
  import {getMedicineDetail} from '../vuex/actions'

  export default {
     data () {
      return {
        finalProduct: []
      }
    },
    vuex: {
      getters: {
        product: medicineData
        //items: medicineData.ortherMdicines
      },
      actions: {
         getProduct: getMedicineDetail,
      }
    },
    created () {
       console.log("MedicineDetail created")
      this.getProduct(this.$route.params.medicineId)
    },
      methods: {
       gotoMedicineDetail:function(objId){
           this.$router.go({path:'/medicineDetail/'+objId})
            this.getProduct(objId)
            scrollTo(0,0)
          }
     }
  }

</script>


<style socped>
    .page {
            background: #ebf2f1;
            padding-bottom: calc(20rem / 75);
        }
    .name {
      padding: 0 calc( 25rem / 75 );
      background: #fff;
      padding-top: calc( 35rem / 75 );
      border-radius: calc( 20rem / 75 ) calc( 20rem / 75 ) 0 0;
      margin-top: calc( -20rem / 75 );
      z-index: 9;
      position: relative
      
    }
    .name .i1{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: calc( 15rem / 75 );
    }
    .name .i1 span{
      font-size: calc( 36rem / 75 );
      font-weight: bold;
    }
    .name .i1 a{
      width: calc( 40rem / 75 );
      height: calc( 40rem / 75 );
      background: #30c4b6;
      border-radius: 50%;
      box-shadow: 0px calc( 8rem / 75 ) calc( 8rem / 75 ) 0px rgba(48, 196, 182, 0.3);

    }
    .name .i1 a img {
      width: calc( 40rem / 75 );
      height: calc( 40rem / 75 );
    }
    .name .i2{
      display: flex;
      align-items: center;
      height: calc( 50rem / 75 );
    }
    .name .i2 span{
      font-size: calc( 26rem / 75 );
      color: #666;
    }
    .name .i2 img {
      width: calc( 35rem / 75 );
      height: calc( 35rem / 75 );
      margin-right: calc( 10rem / 75 );
    }

    .price {
    padding: 0 calc( 25rem / 75 );
    background: #fff;
    }
    .price .item{
      display: flex;
      padding: calc( 20rem / 75 ) 0;
      border-bottom: calc( 1rem / 75 ) dashed #e3e3e3;
    }
    .price .item:last-child{
      border-bottom: none;
    }
    .price .item .left{
      width: 50%;
      display: flex;
      align-items: center;
    }
    .price .item .left span{
      font-size: calc( 30rem / 75 );
    }
    .price .item .right{
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: right;
    }
    .price .item .right .i1{
      font-size: calc( 34rem / 75 );
      color: #e62929;
      margin-bottom: calc( 15rem / 75 );
      display: flex;
      justify-content: flex-end;
    }
    .price .item .right .i2{
      font-size: calc( 26rem / 75 );
      color: #888;
    }

    .info {
      background: #fff;
      padding:0 calc( 25rem / 75 );
      margin-top: calc( 20rem / 75 );

    }
    .info .i1{
      display: flex;
      padding: calc( 25rem / 75 ) 0;
      border-bottom: calc( 1rem / 75 ) dashed #e3e3e3;
    } 
    .info .i1 span{
      width: 50%;
      font-size: calc( 28rem / 75 );
      display: flex;
    }
    .info .i1 span:last-child{
      padding-left: calc( 25rem / 75 );
      border-left: calc( 1rem / 75 ) solid #e3e3e3;
      display: flex;
    }
    .info .i2{
      padding: calc( 25rem / 75 ) 0;
    }
    .info .i2 span{
      font-size: calc( 28rem / 75 );
    }
    .info .i2 span.tip{
        font-size: calc( 24rem / 75 );
      color: #30c4b6;
      border: calc( 1rem / 75 ) solid #30c4b6;
      border-radius: calc( 5rem / 75 );
      padding: calc( 2rem / 75 ) calc( 5rem / 75 );
      margin-left: calc( 10rem / 75 );
    }



    .content{
      background: #fff;
      margin-top: calc( 20rem / 75 );
      padding: 0 calc( 25rem / 75 );
      padding-bottom: calc( 20rem / 75 );
    }
    .content .box{
      padding-bottom: calc( 15rem / 75 );
    }
    .content .box .i1{
      font-size: calc( 38rem / 75 );
      font-weight: bold;
      display: flex;
      padding: calc( 25rem / 75 ) 0 calc( 15rem / 75 ) 0;
    }
    .content .box .i2{
      font-size: calc( 28rem / 75 );
      display: block;
      margin-bottom: calc( 15rem / 75 );
    }
    .content .box .i2:last-child{
      margin-bottom: 0;
    }
    .content .box .i3{
      font-size: calc( 28rem / 75 );
      display: block;
      position: relative;
      padding-left: calc( 20rem / 75 );
      line-height: calc( 36rem / 75 );
      margin-bottom: calc( 15rem / 75 );
    }
    .content .box .i3:last-child{
      margin-bottom: 0;
    }
    .content .box .i3::before{
      content: '';
      display: inline-block;
      position: absolute;
      top: calc( 14rem / 75 );
      left:0;
      width: calc( 8rem / 75 );
      height: calc( 8rem / 75 );
      border-radius: 50%;
      background: #000;
    }

    .other {
      background: #fff;
      margin-top: calc( 20rem / 75 );
    }
    .other .title {
      display: flex;
      align-items: center;
      padding:calc( 25rem / 75 ) ;
      position: relative;
    }
    .other .title img{
      width: calc( 40rem / 75 );
      height: calc( 40rem / 75 );
      }
      .other .title span{
        flex: 1;
        font-size: calc( 30rem / 75 );
      }
      .other .title a{
        width: calc( 40rem / 75 );
        height: calc( 40rem / 75 );
        background: #30c4b6;
        border-radius: 50%;
        box-shadow: 0px calc( 8rem / 75 ) calc( 8rem / 75 ) 0px rgba(48, 196, 182, 0.3);
      }
      .other .title a img{
        width: calc( 40rem / 75 );
        height: calc( 40rem / 75 );
      }

      .list{
        padding: 0 calc( 25rem / 75 );
      }
      .list .item{
        display: flex;
        align-items: center;
        padding: calc( 30rem / 75 ) 0;
        border-bottom: calc( 1rem / 75 ) solid #e3e3e3;
      }
      .list .item:last-child{
        border-bottom: none;
      }
      .list .item .left{
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .list .item .left .i1{
        font-size: calc( 34rem / 75 );
        font-weight: bold;
        display: flex;
        padding-bottom: calc( 15rem / 75 );
      }
      .list .item .left .i2{
        font-size: calc( 26rem / 75 );
        color: #888888;
        display: block;
        padding-bottom: calc( 35rem / 75 );
      }
      .list .item .left .i3{
        display: flex;
        align-items: center;
      }
      .list .item .left .i3 img {
        width: calc( 30rem / 75 );
        height: calc( 30rem / 75 );
        margin-right: calc( 10rem / 75 );
      }
      .list .item .left .i3 span{
        font-size: calc( 26rem / 75 );
        width: calc( 170rem / 75 );
        display: block;
      }
      .list .item .right{
        width: calc( 200rem / 75 );
        height: calc( 160rem / 75 );
      }
      .list .item .right img {
        width: 100%;
        height: 100%;
      }

      .ask {
        background: #fff;
        position: fixed;
        height: calc( 130rem / 75 );
        width: 100%;
        display: flex;
        bottom: 0;
        align-items: center;
      }
      .ask .left{
          flex: 1;
          padding-left: calc( 25rem / 75 );
      }
      .ask .left .i1{
        display: flex;
        align-items: center;
        height: calc( 45rem / 75 );
        margin-bottom: calc( 10rem / 75 );
      }
      .ask .left .i1 div{
        width: calc( 75rem / 75 );
        text-align: center;
        height: calc( 45rem / 75 );
        margin-right: calc( 35rem / 75 );
      }
      .ask .left .i1 img{
        width: calc( 45rem / 75 );
        height: calc( 45rem / 75 );
      }
      .ask .left .i1 span{
        font-size: calc( 34rem / 75 );
        font-weight: bold;
      }
      .ask .left .i1 .tip{
        font-size: calc( 24rem / 75 );
        font-weight: bold;
        color: #30c43a;
        border: calc( 1rem / 75 ) solid #30c43a;
        border-radius: calc( 5rem / 75 );
        padding: calc( 5rem / 75 ) calc( 10rem / 75 );
        margin-left: calc( 20rem / 75 );
      }
      .ask .left .i2 {
        font-size: calc( 26rem / 75 );
        height: calc( 40rem / 75 );
        line-height: calc( 40rem / 75 );
        display: block;
      }
      .ask .left .i2 span{

      }
      .ask .left .i2 .guo {
        width: calc( 75rem / 75 );
        text-align: center;
        display: inline-block;
        margin-right: calc( 35rem / 75 );
      }
      .ask .right{
        width: calc( 30rem / 75 );
        height: calc( 40rem / 75 );
        margin-right: calc( 25rem / 75 );
      }
      .ask .right img{
        width: calc( 30rem / 75 );
        height: calc( 40rem / 75 );
      }
</style>