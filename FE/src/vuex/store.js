import Vue from 'vue'
import Vuex from 'vuex'
import contentList from './modules/contentList'
import myHello from './modules/myHello'
import medicineList from './modules/medicineList'
import medicineData from './modules/medicineData'


Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    contentList,
    myHello,
    medicineList,
    medicineData
  }
})
