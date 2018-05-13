<template>
  <nav class='fHead fHead2'>
        <span>首页</span>
    </nav>
    <div class="gdImg">
        <div class="swiper-container" v-model="headSwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/images/img-8.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/img-8.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="../assets/images/img-8.jpg">
                </div>
            </div>
        </div>
    </div>
</template>

 export default {
     ready () {
        console.log("header ready")
     // this.autoplaySwiper()
    },
    methods: {
      console.log("header ready")
      autoplaySwiper () {
         // document.body.height=window.height;
        //  this.headSwiper=new Swiper('.swiper-container',{
        //     loop: true,
        //     autoplay: 3000,
        //     pagination: '.swiper-pagination',
        //  });
    }
  }

<!--<style scoped>
    .page {
            background: #ebf2f1;
            padding-bottom: calc(20rem / 75);
        }
        .more{
          display: flex;
          align-items: center;
          padding:calc( 25rem / 75 ) ;
          position: relative;
          background: #fff;
        }
        .more .i1 {
          width: calc( 40rem / 75 );
          height: calc( 40rem / 75 );
        }
        .more .i2 {
          font-size: calc( 30rem / 75 );
        }
        .more .i3 {
          position: absolute;
          right: calc( 25rem / 75 );
          top: 0;
          bottom: 0;
          margin: auto;
          display: flex;
          align-items: center;
          height: calc( 40rem / 75 );
        }
        .more .i3 span{
          color: #888;
          font-size: calc( 28rem / 75 );
        }
        .more .i3 img{
          width: calc( 30rem / 75 );
          height: calc( 40rem / 75 );
        }

        .list{
          padding: 0 calc( 25rem / 75 );
          background: #fff;
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
          height: calc( 130rem / 75 );
          width: 100%;
          display: flex;
          align-items: center;
          margin-bottom: calc( 20rem / 75 );
          border-radius: calc( 20rem / 75 ) calc( 20rem / 75 ) 0 0;
          margin-top: calc( -20rem / 75 );
          position: relative;
          z-index: 9;
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
          position: relative;
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
          font-size: calc( 34rem / 75 );
          font-weight: bold;
          color: #eb2936;
          margin-left: calc( 20rem / 75 );
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
        }
        .ask .left .i2 {
          font-size: calc( 26rem / 75 );
          height: calc( 40rem / 75 );
          line-height: calc( 40rem / 75 );
          display: block;
        }
        .ask .left .i2 span{
          float: left;
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
</style>-->
