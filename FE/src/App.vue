<template>
  <div id="myapp">
  <router-view></router-view>  
  </div>
   <!--
    <div id="mydiv">
      <router-view class="main-wrapper" transition="fade" transition-mode="out-in"></router-view>
    </div>
  </div>-->
   
</template>

<script>
//import Hello from './components/Hello'
//import MedicineDetail from './components/MedicineDetail'
//import Home from './components/Homeu'
import Store from './vuex/store'

export default {
//  components: {
      //Hello,
      //MedicineDetail,
    //  Home
  //  },
    store: Store
}
</script>


