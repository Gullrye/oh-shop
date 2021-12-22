(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order-detail"],{"0eaf":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simple-header"},[n("i",{staticClass:"iconfont icon-back",on:{click:t.goBack}}),n("div",{staticClass:"simple-header-name"},[t._v(t._s(t.name))]),n("i",{staticClass:"iconfont icon-menu"})])},r=[],i={props:{name:{type:String,default:""},back:{type:String,default:""}},methods:{goBack:function(){this.back?this.$router.push({path:this.back}):this.$router.go(-1),this.$emit("callback")}}},c=i,o=(n("ed0b"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"123edaf7",null);e["a"]=s.exports},"606c":function(t,e,n){},"99c5":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"c",(function(){return u}));var a=n("a27e");function r(t){return a["a"].get("/order",{params:t})}function i(t){return a["a"].get("/order/".concat(t))}function c(t){return a["a"].put("/order/".concat(t,"/cancel"))}function o(t){return a["a"].put("/order/".concat(t,"/finish"))}function s(t){return a["a"].get("/paySuccess",{params:t})}function u(t){return a["a"].post("/saveOrder",t)}},a5b5:function(t,e,n){"use strict";n("bd75")},bd75:function(t,e,n){},d3bb:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-detail-box"},[n("s-header",{attrs:{name:"订单详情"},on:{callback:t.close}}),n("div",{staticClass:"order-status"},[n("div",{staticClass:"status-item"},[n("label",[t._v("订单状态：")]),n("span",[t._v(t._s(t.detail.orderStatusString))])]),n("div",{staticClass:"status-item"},[n("label",[t._v("订单编号：")]),n("span",[t._v(t._s(t.detail.orderNo))])]),n("div",{staticClass:"status-item"},[n("label",[t._v("下单时间：")]),n("span",[t._v(t._s(t.detail.createTime))])]),0==t.detail.orderStatus?n("van-button",{staticStyle:{"margin-bottom":"10px"},attrs:{color:"#1baeae",block:""},on:{click:t.showPayFn}},[t._v("去支付")]):t._e(),t.detail.orderStatus<0||4==t.detail.orderStatus?t._e():n("van-button",{attrs:{block:""},on:{click:function(e){return t.cancelOrder(t.detail.orderNo)}}},[t._v("取消订单")])],1),n("div",{staticClass:"order-price"},[n("div",{staticClass:"price-item"},[n("label",[t._v("商品金额：")]),n("span",[t._v("¥ "+t._s(t.detail.totalPrice))])]),t._m(0)]),t._l(t.detail.newBeeMallOrderItemVOS,(function(e){return n("van-card",{key:e.goodsId,staticStyle:{background:"#fff"},attrs:{num:e.goodsCount,price:e.sellingPrice,desc:"全场包邮",title:e.goodsName,thumb:t.getRealImg(e.goodsCoverImg)}})})),n("van-popup",{style:{height:"24%"},attrs:{position:"bottom"},model:{value:t.showPay,callback:function(e){t.showPay=e},expression:"showPay"}},[n("div",{style:{width:"90%",margin:"0 auto",padding:"20px 0"}},[n("van-button",{style:{marginBottom:"10px"},attrs:{color:"#1989fa",block:""},on:{click:function(e){return t.payOrder(t.detail.orderNo,1)}}},[t._v("支付宝支付")]),n("van-button",{attrs:{color:"#4fc08d",block:""},on:{click:function(e){return t.payOrder(t.detail.orderNo,2)}}},[t._v("微信支付")])],1)])],2)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price-item"},[n("label",[t._v("配送方式：")]),n("span",[t._v("普通快递")])])}],i=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e3b3"),n("bc1b"),n("1175"),n("4cf9"),n("2fcb"),n("2241")),c=n("1da1"),o=(n("96cf"),n("0eaf")),s=n("99c5"),u={components:{sHeader:o["a"]},data:function(){return{detail:{},showPay:!1}},mounted:function(){this.init()},methods:{init:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$toast.loading({message:"加载中...",forbidClick:!0}),n=t.$route.query.id,e.next=4,Object(s["d"])(n);case 4:a=e.sent,r=a.data,t.detail=r,t.$toast.clear();case 8:case"end":return e.stop()}}),e)})))()},cancelOrder:function(t){var e=this;i["a"].confirm({title:"确认取消订单？"}).then((function(){Object(s["a"])(t).then((function(t){200===t.resultCode&&(e.$toast("删除成功"),e.init())}))})).catch((function(){}))},confirmOrder:function(t){var e=this;i["a"].confirm({title:"是否确认订单？"}).then((function(){Object(s["b"])(t).then((function(t){200===t.resultCode&&(e.$toast("确认成功"),e.init())}))})).catch((function(){}))},showPayFn:function(){this.showPay=!0},payOrder:function(t,e){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["f"])({orderNo:t,payType:e});case 2:n.showPay=!1,n.init();case 4:case"end":return a.stop()}}),a)})))()},close:function(){i["a"].close()}}},l=u,d=(n("a5b5"),n("2877")),f=Object(d["a"])(l,a,r,!1,null,"f0baff9e",null);e["default"]=f.exports},ed0b:function(t,e,n){"use strict";n("606c")}}]);