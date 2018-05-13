import {GET_MEDICINEDATA, GET_MEDICINEDATA_FAILURE, CLEAR_MEDICINEDATA} from '../mutation-types'

const state = {
  imageUrl: '',
  title: '',
  cName: '',
  eName: '',
  packageSize1: '',
  price1: '',
  currency: '',
  manufactor: '',
  origin: '',
  result: '',
  desc: '',
  createdAt: '',
  ortherMdicines: []
}

const mutations = {

  [GET_MEDICINEDATA] (state, data) {
    state.imageUrl = data.imageUrl
    state.title = data.title
    state.cName = data.cName
    state.eName = data.eName
    state.packageSize1 = data.packageSize1
    state.price1 = data.price1
    state.currency = data.currency
    state.manufactor = data.manufactor
    state.origin = data.origin
    state.result = data.result
    state.desc = data.desc
    state.createdAt = data.createdAt
    state.ortherMdicines = data.ortherMdicines
  },
  [GET_MEDICINEDATA_FAILURE] (state) {
    return state
  },
  [CLEAR_MEDICINEDATA] (state) {
     state.imageUrl = ''
    state.title = ''
    state.cName = ''
    state.eName = ''
    state.packageSize1 = ''
    state.price1 = ''
    state.currency = ''
    state.manufactor = ''
    state.origin = ''
    state.result = ''
    state.desc = ''
    state.createdAt = ''
    state.ortherMdicines = []
  }
}

export default {
  state,
  mutations
}
