<template>


  <div class="page page2">
   <Vheader></Vheader>
    <a class='ask'>
        <div class='left'>
            <div class='i1'>
                <div>
                    <img src='../assets/frame/icon-28.png'>
                </div>
                <span>印度仿制药用药咨询</span>
                <span class='tip'>¥99</span>
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

    <div class='fSearch'>
      <div>
        <img src='../assets/frame/icon-4.png'>
        <input></input>
        <button><img src='../assets/frame/icon-5.png'></button>
      </div>
    </div>

    <div class='more'>
        <img src='../assets/frame/icon-21.png' class='i1'>
        <span class='i2'>海外药品价格信息</span>
        <a class='i3'>
            <span>更多</span>
            <img src='../assets/frame/icon-22.png'>
        </a>
    </div>

      <!-- <div class='list'>
         <input type="button" value="按钮1" v-on:click="gotoMedicineDetail('123')">
        <div class='item' v-on:click="gotoMedicineDetail('123')">

            <div class='left'>
                <span class='i1'>6666666666666666</span>
            </div>
      </div>
    </div>-->

    <div class='list'>
        <div class='item' v-for="item in items" v-on:click="gotoMedicineDetail(item.objectId)">
      <!-- <input type="button" value="{{item.objectId}}" v-on:click="gotoMedicineDetail(item.objectId)">-->

        <!--  <a v-link="{ name: 'showproduct', params: {id: item.objectId}}">-->
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
       <!-- </a>-->
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Vheader from '../components/Vheader'
  import {medicineList} from '../vuex/getters'
  import {getMedicineList,getMedicineDetail} from '../vuex/actions'

  export default {
    components: {
      Vheader
    },
    vuex: {
      getters: {
         items: medicineList
      },
      actions: {
         getList: getMedicineList,
         getDetail:getMedicineDetail
      }
    },
    created () {
       //console.log("home created")
      this.getList()
    },
    mounted: {
    },
     methods: {
       gotoMedicineDetail:function(objId){
           // console.log("gotoMedicineDetail"+objId)
           this.$router.go({path:'/medicineDetail/'+objId})
          }
     }
  }

</script>


<style socped>
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
</style>
