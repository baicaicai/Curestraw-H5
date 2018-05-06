import {GET_MYHELLO, GET_MYHELLO_FAILURE, CLEAR_MYHELLO} from '../mutation-types'

const state = {
  //content: '',
 //title: '',
  hello: 'ffff'
}

const mutations = {

  [GET_MYHELLO] (state, data) {
   // state.content = data.content
    //state.title = data.title
    state.hello = data.hello
  },
  [GET_MYHELLO_FAILURE] (state) {
    return state
  },
  [CLEAR_MYHELLO] (state) {
    //state.content = ''
    //state.title = ''
    state.hello = ''
  }
}

export default {
  state,
  mutations
}
