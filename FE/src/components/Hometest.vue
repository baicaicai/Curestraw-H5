<template>
  <div class="list-wrapper">
    <p>
      HOMEHOMEHOMEHOME!
    </p>
   
     <p>
      myhello={{myHello.hello}}
    </p>
    
    <ul class="list-container" id="list-ul">
      <li v-for="item in items">
        <!--  <a v-link="{ name: 'showproduct', params: {id: item.objectId}}">-->
           <h3><p class="list-title">{{item.title}}</p></h3>
          <p class="list-updated">{{item.description}}</p>
        <!--   <p class="list-updated">价格：{{item.price}}</p>
          <p class="list-updated">状态：{{item.state}}</p>
          <p class="list-updated">收件人：{{item.receiveName}}  {{item.receivePhone}}</p>
          <p class="list-updated">地址：{{item.receiveAddress}}</p>
          <p class="list-updated">来自：{{item.ownerUsername}}</p>
          <p class="list-updated">发布时间：{{item.createTime}}</p>
          <p class="list-updated">最后更新：{{item.updateTime}}</p>-->
       <!-- </a>-->
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import {myHello,contentList} from '../vuex/getters'
  import {getContentList, getHello} from '../vuex/actions'

  export default {
    vuex: {
      getters: {
         items: contentList,
         myHello: myHello
      },
      actions: {
         getList: getContentList,
         getMyHello: getHello
      }
    },
    created () {
      //console.log("config NODE_ENV="+process.env.NODE_ENV);
      // console.log("start myHello")
      this.getMyHello()
       //console.log("end myHello")
      this.getList()
     // console.log(myHello)
     // console.log(items)
    }
  }
</script>

<style>
  .list-container li {
    border-bottom: 1px solid #eee;
  }

  .list-title {
    font-size: 2.6rem;
    font-weight: 400;
    color: #404040;
    margin-top: 0;
  }

  .list-abstract {
    font-size: 1.6rem;
    color: #919191;
    font-weight: 300;
  }

  .list-updated {
    font-family: "Comic Sans MS", curslve, sans-serif;
    font-size: 1.8rem;
    color: #8b8b8b;
    padding: 5px 0;
  }

  .list-container li a {
    padding: 1rem 1.5rem;
    display: block;
    transition: all .3s;
    margin:0;
  }

  .list-container li a:hover {
    background-color: Rgba(0, 0, 0, .02);
  }

  @media screen and (max-width: 768px) {
    .list-title {
      font-size: 2.2rem;
    }

    .list-updated {
      font-size: 1.6rem;
    }
  }
</style>
