<template>
<div class="page page2">
    <nav class='fHead fHead2'>
        <a>
          <img src='../assets/frame/icon-37.png'>
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
                    <img src="../assets/images/img-17.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/img-17.jpg">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>

    <div class='name'>
        <div class='i1'>
            <span>DripDrop ORS 液盐口服剂</span>
            <a><img src='../assets/frame/icon-16.png'></a>
        </div>
        <div class='i2'>
            <img src='../assets/frame/icon-27.png'>
            <span>商品名: DripDrop</span>
        </div>
        <div class='i2'>
            <img src='../assets/frame/icon-26.png'>
            <span>化学名: Electrolyte Hydration</span>
        </div>
    </div>

    <div class='price'>
        <div class='item'>
            <div class='left'>
                <span>4mg*20片</span>
            </div>
            <div class='right'>
                <span class='i1'>€3260.00</span>
                <span class='i2'>人民币约27,000元</span>
            </div>
        </div>
        <div class='item'>
            <div class='left'>
                <span>4mg*20片</span>
            </div>
            <div class='right'>
                <span class='i1'>€3260.00</span>
                <span class='i2'>人民币约27,000元</span>
            </div>
        </div>
    </div>

    <div class='info'>
        <div class='i1'>
            <span>产地: 德国</span>
            <span>销售地: 香港</span>
        </div>
        <div class='i2'>
            <span>生产厂家: Echai Pharmaceutical</span>
            <span class='tip'>原厂药品</span>
        </div>
    </div>

    <div class='content'>
        <div class='box'>
            <span class='i1'>适应症</span>
            <span class='i2'>适应证和用途:</span>
            <span class='i2'>LENVIMA是适用为有局部地复发或转移，进展性，放射性碘-难治性分化型甲状腺癌(DTC)患者的治疗。</span>
        </div>
        <div class='box'>
            <span class='i1'>预期效果</span>
            <span class='i2'>FDA的药品评价和研究中心血液学和肿瘤产品室主任说新治疗的开发帮助有难治性疾病患者:</span>
            <span class='i2'>今天批准给予患者和卫生保健专业人员一种新治疗有助于减慢DTC的进展。” 优先审评和孤儿产品指定</span>
        </div>
        <div class='box'>
            <span class='i1'>副作用及禁忌</span>
            <span class='i3'>高血压：用LENVIMA治疗前控制血压。对尽管优化高血压治疗的3级高血压不给LENVIMA。对危及生命高血压终止药物:</span>
            <span class='i3'>心力衰竭：监视心脏代偿失调的临床症状和体征。对3级不给LENVIMA心功能不全。对4级心功能不全终止药物</span>
            <span class='i3'>动脉血栓栓塞事件：一次动脉血栓栓塞事</span>
            <span class='i3'>肝毒性：LENVIMA开始前和治疗自始至终定期地监视肝功能检验. 对3级或更大肝受损不给LENVIMA</span>
        </div>
    </div>

    <div class='other'>
        <div class='title'>
          <img src='../assets/frame/icon-17.png'>
          <span>其他国家或厂家生产的同化学名药品</span>
          <a><img src='../assets/frame/icon-16.png'></a>
        </div>
      <div class='list'>
          <div class='item'>
              <div class='left'>
                <span class='i1'>Opdivo-100mg</span>
                <span class='i2'>注射液:40 mg/4 mL与100 mg/10 mL</span>
                <div class='i3'>
                    <img src='../assets/frame/icon-6.png'>
                    <span>德国</span>
                    <img src='../assets/frame/icon-7.png'>
                    <span>16500港币</span>
                </div>
              </div>
              <div class='right'>
                  <img src='../assets/images/img-9.jpg' mode='scaleToFill'>
              </div>
          </div>
        
        <div class='item'>
            <div class='left'>
                <span class='i1'>Opdivo-100mg</span>
                <span class='i2'>注射液:40 mg/4 mL与100 mg/10 mL</span>
                <div class='i3'>
                    <img src='../assets/frame/icon-6.png'>
                    <span>德国</span>
                    <img src='../assets/frame/icon-7.png'>
                    <span>16500港币</span>
                </div>
            </div>
            <div class='right'>
                <img src='../assets/images/img-9.jpg' mode='scaleToFill'>
            </div>
          </div>

      </div>
    </div> 

    <a class='ask'>
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
    </a>


</div>
</template>

<script type="text/babel">
  import {medicineData} from '../vuex/getters'
  import {getMedicineDetail} from '../vuex/actions'

  export default {
    vuex: {
      getters: {
        product: medicineData,
        items: medicineData.ortherMdicines
      },
      actions: {
         getProduct: getMedicineDetail,
      }
    },
    created () {
    //  this.getMedicine(this.$route.params.id)
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