"use strict";(self["webpackChunkvue_store"]=self["webpackChunkvue_store"]||[]).push([[39],{6039:function(t,a,s){s.r(a),s.d(a,{default:function(){return o}});var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"noticebar bg-lightgrey mb-20"},[t._v("주문번호: "+t._s(t.tid))]),""!=t.tid?a("div",{staticClass:"card light order-info"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("가맹점명")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.sname))]),a("div",{staticClass:"t-header col-2"},[t._v("주문번호")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.orderNo))])]),a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("주문자명")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.payerName))]),a("div",{staticClass:"t-header col-2"},[t._v("상품명")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.productName))])]),a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("주소")]),a("div",{staticClass:"t-data col-10"},[t._v(t._s(t.traDet.payerAddress))])])])])]):t._e(),""!=t.tid?a("div",{staticClass:"card light order-info"},[t._m(1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("결제상태")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.tstatus))]),a("div",{staticClass:"t-header col-2"},[t._v("결제수단")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.paymentMethods))])]),a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("결제기관")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.bankName))]),a("div",{staticClass:"t-header col-2"},[t._v("결제자명")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.uname))])]),a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("전화번호")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.payerName.slice(-12,-1).replace("(","")))]),a("div",{staticClass:"t-header col-2"},[t._v("이메일")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.email))])]),a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("결제일시")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.adate))]),a("div",{staticClass:"t-header col-2"},[t._v("결제금액")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.paymentAmount))])]),a("div",{staticClass:"row table-row"},[a("div",{staticClass:"t-header col-2"},[t._v("결제취소일시")]),a("div",{staticClass:"t-data col-4"},[t._v(t._s(t.traDet.canceledTimestamp))]),a("div",{staticClass:"t-header col-2"},[t._v("취소(환불)금액")]),a("div",{staticClass:"t-data col-4"})])])])]):t._e()])},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title"},[t._v("주문정보")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title"},[t._v("결제정보")])])}],d=(s(7658),s(629)),c={name:"TraDetail",data(){return{}},computed:{...(0,d.Se)({tid:"curTid",traDet:"curTra"})},created(){console.log("created",this.tid),""==this.tid&&(alert("데이터를 조회할 수 없습니다."),this.$router.push("/tras")),this.$emit("viewMode","detail")}},l=c,r=s(1001),v=(0,r.Z)(l,i,e,!1,null,"09212522",null),o=v.exports}}]);
//# sourceMappingURL=39.259f5214.js.map