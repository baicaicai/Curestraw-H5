webpackJsonp([4,2],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var u=n(20),o=i(u),a=n(59),c=i(a),r=n(63),E=i(r),l=n(62),f=i(l);o.default.use(f.default),o.default.use(E.default),o.default.http.options.emulateJSON=!0;var d=new E.default({history:!0,hashbang:!1});d.map({"/home":{title:"首页",component:function(e){n.e(1,function(t){var n=[t(60)];e.apply(null,n)}.bind(this))}},"/medicineDetail/:medicineId":{title:"药物详情",name:"medicineDetail",component:function(e){n.e(0,function(t){var n=[t(19)];e.apply(null,n)}.bind(this))}},"/medicineShowList":{title:"药物列表",component:function(e){n.e(0,function(t){var n=[t(19)];e.apply(null,n)}.bind(this))}}}),d.afterEach(function(e){e.to.title&&(document.title=e.to.title)}),d.redirect({"/":"/home"}),d.start(c.default,"#app")},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.REQUEST_CONTENT_LIST="REQUEST_CONTENT_LIST",t.GET_CONTENT_LIST="GET_CONTENT_LIST",t.GET_CONTENT_LIST_FAILURE="GET_CONTENT_LIST_FAILURE",t.GET_MYHELLO="GET_MYHELLO",t.GET_MYHELLO_FAILURE="GET_MYHELLO_FAILURE",t.CLEAR_MYHELLO="CLEAR_MYHELLO",t.REQUEST_MEDICINE_LIST="REQUEST_MEDICINE_LIST",t.GET_MEDICINE_LIST="GET_MEDICINE_LIST",t.GET_MEDICINE_LIST_FAILURE="GET_MEDICINE_LIST_FAILURE",t.GET_MEDICINEDATA="GET_MEDICINEDATA",t.GET_MEDICINEDATA_FAILURE="GET_MEDICINEDATA_FAILURE",t.CLEAR_MEDICINEDATA="CLEAR_MEDICINEDATA"},21:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(2),a=i(o),c=n(1),r={isFetching:!1,contentList:[]},E=(u={},(0,a.default)(u,c.REQUEST_CONTENT_LIST,function(e){e.isFetching=!0}),(0,a.default)(u,c.GET_CONTENT_LIST,function(e,t){e.isFetching=!1,e.contentList=t}),(0,a.default)(u,c.GET_CONTENT_LIST_FAILURE,function(e){e.isFetching=!1}),u);t.default={state:r,mutations:E}},22:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(2),a=i(o),c=n(1),r={imageUrl:"",title:"",cName:"",eName:"",packageSize1:"",price1:"",currency:"",manufactor:"",origin:"",result:"",desc:"",createdAt:"",ortherMdicines:[]},E=(u={},(0,a.default)(u,c.GET_MEDICINEDATA,function(e,t){e.imageUrl=t.imageUrl,e.title=t.title,e.cName=t.cName,e.eName=t.eName,e.packageSize1=t.packageSize1,e.price1=t.price1,e.currency=t.currency,e.manufactor=t.manufactor,e.origin=t.origin,e.result=t.result,e.desc=t.desc,e.createdAt=t.createdAt,e.ortherMdicines=t.ortherMdicines}),(0,a.default)(u,c.GET_MEDICINEDATA_FAILURE,function(e){return e}),(0,a.default)(u,c.CLEAR_MEDICINEDATA,function(e){e.imageUrl="",e.title="",e.cName="",e.eName="",e.packageSize1="",e.price1="",e.currency="",e.manufactor="",e.origin="",e.result="",e.desc="",e.createdAt="",e.ortherMdicines=[]}),u);t.default={state:r,mutations:E}},23:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(2),a=i(o),c=n(1),r={isFetching:!1,medicineList:[]},E=(u={},(0,a.default)(u,c.REQUEST_MEDICINE_LIST,function(e){e.isFetching=!0}),(0,a.default)(u,c.GET_MEDICINE_LIST,function(e,t){e.isFetching=!1,e.medicineList=t}),(0,a.default)(u,c.GET_MEDICINE_LIST_FAILURE,function(e){e.isFetching=!1}),u);t.default={state:r,mutations:E}},24:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,o=n(2),a=i(o),c=n(1),r={hello:"ffff"},E=(u={},(0,a.default)(u,c.GET_MYHELLO,function(e,t){e.hello=t.hello}),(0,a.default)(u,c.GET_MYHELLO_FAILURE,function(e){return e}),(0,a.default)(u,c.CLEAR_MYHELLO,function(e){e.hello=""}),u);t.default={state:r,mutations:E}},25:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(20),o=i(u),a=n(64),c=i(a),r=n(21),E=i(r),l=n(24),f=i(l),d=n(23),_=i(d),s=n(22),T=i(s);o.default.use(c.default),o.default.config.debug=!0;var I=!1;t.default=new c.default.Store({strict:I,modules:{contentList:E.default,myHello:f.default,medicineList:_.default,medicineData:T.default}})},26:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(25),o=i(u);t.default={store:o.default}},55:function(e,t){e.exports=" <div id=myapp> <router-view></router-view> </div> "},59:function(e,t,n){var i,u,o={};i=n(26),u=n(55),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;u&&(a.template=u),a.computed||(a.computed={}),Object.keys(o).forEach(function(e){var t=o[e];a.computed[e]=function(){return t}})}});
//# sourceMappingURL=app.8c08be93afe5db51f285.js.map