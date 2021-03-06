/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 一些工具方法

'use strict';

const tool = require('./tool');
const AV = require('leanengine')

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

let pub = {};

pub.hello = (req, res) => {
  tool.l('It works.');
  res.send({
    hello: 'It works.'
  });
};

// 获取文章列表
pub.contentList = async (req, res) => {
  //tool.l('contentList');
  const queryContentList = () => {
    var query = new AV.Query('order_info')
    query.include('owner')
    query.descending('createdAt')
    return query.find()
  }
  try {
    //await 好喜欢!
    const products = await queryContentList()
    console.log("products=" + products)
    if (products) {
      let arr = []
      for (let product of products) {
        let result = {}
        result.obj_id = product.get('objectId')
        result.title = product.get('title')
        result.price = product.get('price')
        result.description = product.get('description')
        result.createTime = product.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        result.updateTime = product.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        let state = product.get('state');
        if (state == 0) state = "待付款";
        else if (state == 10) result.state = "待发货";
        else if (state == 20) result.state = "待收货";
        else if (state == 99) result.state = "已完成";
        result.ownerUsername = product.get('owner').get('username');
        result.receiveName = product.get('receive_name');
        result.receivePhone = product.get('receive_phone');
        result.receiveAddress = product.get('receive_address');

        arr.push(result)
      }

      res.send(arr)
    } else {
      throw new Error('Can not find.');
    }
  }
  catch (error) {
    tool.l(error)
  }
}

pub.medicineList = async (req, res) => {
  const manufactor = req.params.manufactor
  const cName = req.params.cName
  const limitCount = req.params.limitCount
  const queryMdicineList = () => {
    var query = new AV.Query('Products') 
    if ((manufactor === ''||manufactor === undefined) && (cName === ''||cName === undefined) ) {
      query.descending('createdAt');
      if (limitCount === ''||limitCount === undefined) {
        query.limit(5)// 返回 10 条数据
      }
      else {
        query.limit(limitCount)// 返回 10 条数据
      }
    }
    else {
      if (!(manufactor === ''||manufactor === undefined)) {
        query.notEqualTo("manufactor", manufactor);
      }
      if (!(cName === ''||cName === undefined)) {
        query.equalTo("cName", cName);
      }
      query.descending('createdAt');
      if (limitCount === ''||limitCount === undefined) {
        query.limit(5)// 返回 10 条数据
      }
      else {
        query.limit(limitCount)// 返回 10 条数据
      }
    }
    return query.find()
  }
  let arr = []
  try {
    const mdicines = await queryMdicineList()
    if (mdicines) {

      for (let mdicine of mdicines) {
        let result = {}
        result.objectId = mdicine.get('objectId')
        result.title = mdicine.get('title')
        result.origin = mdicine.get('origin')
        result.packageSize1 = mdicine.get('packageSize1')
        result.manufactor = mdicine.get('manufactor')
        result.price1 = mdicine.get('price1')
        result.currency = mdicine.get('currency')
        result.thumbImageUrl = mdicine.get('thumbImageUrl')
        result.createTime = mdicine.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        result.updateTime = mdicine.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        //  tool.l( result.objectId);
        arr.push(result)
      }
      res.send(arr)
    } else {
      throw new Error('Can not find.');
    }
  }
  catch (error) {
    tool.l(error)
  }
}


// 根据 id 获取 comments 列表
pub.medicineDetail = async (req, res) => {
  const medicineId = req.params.medicineId
   //tool.l('medicineDetail='+medicineId);
  if (medicineId === '' || medicineId === undefined) {
    res.status(500).send('id is empty')
  }
  const queryMedicineData = () => {
    var query = new AV.Query('Products');
    return query.get(medicineId)
  }
  try {
    const data = await queryMedicineData()
    if (data) {
      let arr = []
      let result = {}
      result.objectId = data.get('objectId')
      result.imageUrl = data.get('imageUrl')
      result.title = data.get('title')
      result.cName = data.get('cName')
      result.eName = data.get('eName')
      result.packageSize1 = data.get('packageSize1')
      result.price1 = data.get('price1')
      result.currency = data.get('currency')
      result.manufactor = data.get('manufactor')
      result.origin = data.get('origin')
      result.manufactor = data.get('manufactor')
      result.result = data.get('result')
      result.desc = data.get('desc')
      result.sideEffect = data.get('sideEffect')
      result.disease = data.get('disease')
      result.createdAt = data.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
      //arr = await queryOrtherMedicineList('','',3)//暂时去掉查关联的需求
      //arr = await queryOrtherMedicineList(result.manufactor,result.cName,3)
      //arr = queryMedicineList(result.manufactor,result.cName,2)
      result.ortherMdicines = arr
      res.send(result)
    } else {
      throw new Error('Can not find.');
    }
  }
  catch (error) {
    tool.l(error)
  }
}

const testqueue = (msg) => {
  tool.l(msg)
}

const queryOrtherMedicineList = async (reqmanufactor, reqcName, reqlimitCount) => {
  //tool.l(reqmanufactor)
  const manufactor = reqmanufactor
  const cName = reqcName
  const limitCount = reqlimitCount
  const queryMdicineList = () => {
    var query = new AV.Query('Products')
    if (manufactor === '' && cName === '') {
      query.descending('createdAt');
      if (limitCount === '') {
        query.limit(2)// 返回 10 条数据
      }
      else {
        query.limit(limitCount)// 返回 10 条数据
      }
    }
    else {
      if (manufactor === '') {
        query.notEqualTo("manufactor", manufactor);
      }
      if (cName === '') {
        query.equalTo("cName", cName);
      }
      query.descending('createdAt');
      if (limitCount === '') {
        query.limit(2)// 返回 10 条数据
      }
      else {
        query.limit(limitCount)// 返回 10 条数据
      }
    }
    return query.find()
  }
  let arr = []
  try {
    const mdicines = await queryMdicineList()
    if (mdicines) {

      for (let mdicine of mdicines) {
        let result = {}
        result.objectId = mdicine.get('objectId')
        testqueue( result.objectId)
        result.title = mdicine.get('title')
        result.origin = mdicine.get('origin')
        result.packageSize1 = mdicine.get('packageSize1')
        result.manufactor = mdicine.get('manufactor')
        result.price1 = mdicine.get('price1')
        result.currency = mdicine.get('currency')
        result.thumbImageUrl = mdicine.get('thumbImageUrl')
        result.createTime = mdicine.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        result.updateTime = mdicine.get('createdAt').Format("yyyy-MM-dd hh:mm:ss")
        //  tool.l( result.objectId);
        arr.push(result)
      }
     return arr
    } else {
      throw new Error('Can not find.');
    }
  }
  catch (error) {
    tool.l(error)
  }
}


//  获取指定 id 的文章信息
pub.article = async (req, res) => {
  const id = req.params.id

  const queryArticle = (id) => {
    const query = new AV.Query('ContentList')
    return query.get(id)
  }

  try {
    const data = await queryArticle(id)

    let result = {}
    if (data) {
      result.content = data.get('content')
      result.title = data.get('title')
      res.send(result)
    } else {
      throw new Error('article can not found')
    }
  } catch (error) {
    tool.l(error)
  }


}

module.exports = pub;
