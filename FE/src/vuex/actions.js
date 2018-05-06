import * as types from './mutation-types'
import { API_ROOT } from '../config'

export const getContentList = function ({ dispatch }) {
  dispatch(types.REQUEST_CONTENT_LIST)
  this.$http.get(API_ROOT + 'api/content-list').then(response => {
    dispatch(types.GET_CONTENT_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_CONTENT_LIST_FAILURE, error)
  })
}


export const getHello = function ({ dispatch }) {
  this.$http.get(API_ROOT + 'api/content-hello').then(response => {
      console.log(response)
    dispatch(types.GET_MYHELLO, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_MYHELLO_FAILURE, error)
  })
}

export const getMedicineList = function ({ dispatch }) {
 dispatch(types.REQUEST_MEDICINE_LIST)
  this.$http.get(API_ROOT + 'api/medicine-list').then(response => {
    dispatch(types.GET_MEDICINE_LIST, JSON.parse(response.body))
  }, error => {
    dispatch(types.GET_MEDICINE_LIST_FAILURE, error)
  })
}

