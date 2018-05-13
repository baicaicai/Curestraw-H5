/**
 * 每位工程师都有保持代码优雅的义务
 * Each engineer has a duty to keep the code elegant
 *
 * @author wangxiao
 */

// 所有 API 的路由

'use strict';

const router = require('express').Router();

// 添加一个模块
const hello = require('./hello');
const content = require('./content')

// 一个 API 路由下的 hello 接口，访问 /api/hello
router.get('/hello', hello.hello);
router.get('/content-list', content.contentList)
router.get('/content-hello', hello.hello)
router.get('/medicine-list/:manufactor/:cName/:limitCount', content.medicineList)
router.get('/medicine-list', content.medicineList)
router.get('/medicine-detail/:medicineId', content.medicineDetail)


// 测试 async/await 支持
const f = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(123);
    }, 2000);
  });
};

const testAsync = async () => {
  const t = await f();
  console.log(t);
};

testAsync();

module.exports = router;
