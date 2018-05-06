import {REQUEST_MEDICINE_LIST, GET_MEDICINE_LIST, GET_MEDICINE_LIST_FAILURE} from '../mutation-types'

const state = {
  isFetching: false,
  medicineList: []
}

const mutations = {
  [REQUEST_MEDICINE_LIST] (state) {
    state.isFetching = true
  },
  [GET_MEDICINE_LIST] (state, items) {
    state.isFetching = false
    state.medicineList = items
  },
  [GET_MEDICINE_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
