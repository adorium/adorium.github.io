"use strict";(self["webpackChunkvue_store"]=self["webpackChunkvue_store"]||[]).push([[678],{6787:function(t,e,s){s.r(e),s.d(e,{default:function(){return k}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-content"},[e("div",{staticClass:"form-wrapper"},[e("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmitQuery.apply(null,arguments)}}},[e("div",{staticClass:"d-grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3"},[e("div",{staticClass:"form-group"},[e("flat-pickr",{staticClass:"form-control",attrs:{id:"date_from",config:t.config,placeholder:"기간 설정(7일 이내)"},model:{value:t.fromDate,callback:function(e){t.fromDate=e},expression:"fromDate"}})],1),e("div",{staticClass:"form-group"},[e("flat-pickr",{staticClass:"form-control",attrs:{id:"date_to",config:t.config2,placeholder:"기간 설정(7일 이내)"},model:{value:t.toDate,callback:function(e){t.toDate=e},expression:"toDate"}})],1),e("div",{staticClass:"grid-colspan-2 d-flex gap-3"},[e("button",{attrs:{type:"submit"}},[t._v("Get")]),e("div",{staticClass:"btn-group"},[e("div",{staticClass:"button",on:{click:function(e){return t.onFormattedQuery("1d")}}},[t._v("당일")]),e("div",{staticClass:"button",on:{click:function(e){return t.onFormattedQuery("3d")}}},[t._v("3일")]),e("div",{staticClass:"button",on:{click:function(e){return t.onFormattedQuery("1w")}}},[t._v("일주일")]),e("div",{staticClass:"button",on:{click:function(e){return t.onFormattedQuery("1m")}}},[t._v("1개월")]),e("div",{staticClass:"button",on:{click:function(e){return t.onFormattedQuery("3m")}}},[t._v("3개월")])])])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{id:"loader_1"}}),e("result-btras",{directives:[{name:"show",rawName:"v-show",value:t.showResults,expression:"showResults"}],on:{authorized:t.setAuthorized}})],1)},i=[],o=s(3704),r=s(629),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"result-wrapper"},[e("div",{staticClass:"card light result mt-20"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"card-title summary"},[t._v("거래내역 "),e("span",[t._v(t._s(t.countsOfTras))]),t._v("건")]),t.logStatus.downEx?e("JsonExcel",{staticClass:"btn outline btn-excel",attrs:{data:t.resultData,fields:t.orderFields,name:t.dnExcelName,beforeGenerate:t.setDownloadName,stringifyLongNum:t.sln}},[e("i",{staticClass:"fas fa-download"}),t._v(" ")]):e("button",{staticClass:"btn outline btn-excel",attrs:{type:"button"},on:{click:t.auth4ExcelDownload}},[e("i",{staticClass:"fas fa-download"}),t._v(" ")])],1),e("div",{staticClass:"card-body"},[t.countsOfTras>0?e("table",[t._m(0),t._l(t.resultData,(function(s){return e("tr",{key:s.tid,staticClass:"hoverable"},[e("td",[t._v(t._s(s.gname))]),e("td",{on:{click:function(e){return t.auth4ViewDetail(s.tid)}}},[t._v(t._s(s.name_m))]),e("td",[t._v(t._s(s.tsum))]),e("td",[t._v(t._s(s.coupon))]),e("td",[t._v(t._s(s.publisher))]),e("td",{on:{click:function(e){return t.auth4ViewDetail(s.tid)}}},[t._v(t._s(s.tid.slice(-9).toUpperCase()))]),e("td",{on:{click:function(e){return t.auth4ViewDetail(s.tid)}}},[t._v(t._s(s.adate))]),e("td",{on:{click:function(e){return t.auth4ViewDetail(s.tid)}}},[e("i",{staticClass:"fas fa-angle-right"})])])}))],2):0==t.countsOfTras?e("p",[t._v("해당하는 결과가 없습니다.")]):e("p",[t._v("결과를 불러오지 못했습니다.")])])]),e("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],on:{close:t.closeModal}},[e("div",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[t._v(" 사용자 확인 ")]),e("template",{slot:"body"},[e("p",{staticClass:"guide-text"},[t._v(t._s(t.guideText))]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.passwd,expression:"passwd"}],attrs:{type:"password",id:"modal_pw"},domProps:{value:t.passwd},on:{input:function(e){e.target.composing||(t.passwd=e.target.value)}}})])]),e("template",{slot:"footer"},[e("button",{staticClass:"block primary",attrs:{type:"submit"}},[t._v("확인")])])],2)],1)])},l=[function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("결제건명")]),e("th",[t._v("이용자명")]),e("th",[t._v("결제금액")]),e("th",[t._v("할인율")]),e("th",[t._v("출판사")]),e("th",[t._v("주문번호")]),e("th",[t._v("결제일시")]),e("th")])}],u=(s(7658),s(6540)),d=s(1339),c={name:"ResultBtras",components:{JsonExcel:u.Z,Modal:d.Z},data(){return{isVisible:!1,guideText:"",passwd:"",curTid:"",dnExcelName:"order.xls",orderFields:{"확인내용":1,"기준일자":1,"주문일자":"adate",ZIP:"zip","주소":{callback:t=>`${t.fixed} ${t.detail}`},"수취인명":"jtitle","연락처":"tel","주문번호":"tid",ISBN:"isbn13","품목명":"gname","출판사":"publisher","총판":1,"수량":1,"정가":"cost"},sln:!0}},computed:{countsOfTras(){return this.$parent.countsOfTras},resultData(){return this.$parent.results},authorized4Det(){return this.$parent.reAuthorized.auth},logStatus(){return{downEx:this.$parent.reAuthorized.downEx,viewDet:this.$parent.reAuthorized.viewDet,purpose:this.$parent.reAuthorized.purpose}}},methods:{submitForm(){let t=this.logStatus;o.Z.login({userid:localStorage.getItem("instapay_id"),password:this.passwd}).then((e=>{"ok"===e.data.result&&(localStorage.setItem("instapay_token",e.data.token),o.Z.updateToken(),console.log("instapay_token",e.data.token),"viewDet"==t.purpose?(this.viewTras(this.curTid),t.viewDet=!0,this.isVisible=!1):(t.downEx=!0,this.isVisible=!1),o.Z.writeLogPurpose("bookorder",t),t.auth=!0,this.$emit("authorized",t))})).catch((e=>{console.log(e.message),t.auth=!1,this.$emit("authorized",t)}))},auth4ViewDetail(t){let e=this.logStatus;if(e.purpose="viewDet",this.authorized4Det)return e.viewDet||(o.Z.writeLogPurpose("bookorder",e),e.viewDet=!0),this.$emit("authorized",{auth:!0,...e}),void this.viewTras(t);this.guideText="로그인 비밀번호를 입력해 주십시오.",this.curTid=t,this.isVisible=!0},auth4ExcelDownload(){let t=this.logStatus;t.purpose="downExcel",this.$emit("authorized",{auth:this.authorized4Det,...t}),this.guideText="로그인 비밀번호를 입력하여 로그인 후 다시 다운로드 버튼을 눌러 주십시오.",this.isVisible=!0},closeModal(){this.isVisible=!1},viewTras(t){this.$router.push("/btras/detail"),this.$store.commit("setCurTid",t)},setDownloadName(){this.dnExcelName="order"+(new Date).toISOString()+".xls"}}},h=c,m=s(1001),p=(0,m.Z)(h,n,l,!1,null,"24a47b39",null),v=p.exports,f=s(6945),g=s.n(f),w=s(1844),D={name:"SearchBtras",components:{ResultBtras:v,flatPickr:g()},data(){return{fromDate:new Date,toDate:new Date,config:{locale:w.Korean,maxDate:"today",minDate:null,dateFormat:"Y-m-d"},config2:{locale:w.Korean,maxDate:"today",dateFormat:"Y-m-d",enable:["today"]},loading:!1}},methods:{setMinDate:function(t){const e=new Date(t);let s=new Date;s.setFullYear(e.getFullYear()),s.setMonth(e.getMonth()),s.setDate(e.getDate()-6),this.config.minDate=s},getPeriod(){const t=new Date(this.toDate).getTime()-new Date(this.fromDate).getTime();return console.log(t,Math.abs(t/864e5)),Math.abs(t/864e5)+1},maskName:t=>t.length<=2?t.replace(t.substring(0,1),"*"):t[0]+"*".repeat(t.substring(1,t.length-1).length)+t[t.length-1],onSubmitQuery:async function(){this.$store.commit("setResults",!1),this.loading=!0;try{let t=await o.Z.btras(this.getPeriod()+"d");console.log(t.data),"denial"!=t.data.result&&t.data.tras.forEach((t=>{t.name_m=this.maskName(t.urname)})),this.$store.dispatch("loadTransactions",t.data),this.$store.commit("setResults",!0),this.loading=!1}catch(t){this.loading=!1,console.log(t.message)}},onFormattedQuery:async function(t){this.$store.commit("setResults",!1),this.loading=!0;try{let e=await o.Z.btras(t);console.log(e.data),"denial"!=e.data.result&&e.data.tras.forEach((t=>{t.name_m=this.maskName(t.urname)})),this.$store.dispatch("loadTransactions",e.data),this.$store.commit("setResults",!0),this.loading=!1}catch(e){this.loading=!1,console.log(e.message)}},setAuthorized(t){this.$emit("authorized",t)}},mounted(){if(this.$emit("viewMode","search"),this.showResults)this.toDate=this.$parent.toDate,this.fromDate=this.$parent.fromDate;else{const t=new Date;this.toDate=t.getFullYear().toString()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2),this.fromDate=this.toDate}this.setMinDate(this.toDate)},computed:{...(0,r.Se)({countsOfTras:"getCounts",results:"tras",showResults:"keepResults"}),reAuthorized(){return this.$parent.reAuthorized}},watch:{fromDate(t){this.$emit("setPeriod",{from:t,to:this.toDate})},toDate(t){this.$emit("setPeriod",{from:this.fromDate,to:t}),this.fromDate=t,this.config.maxDate=this.fromDate,this.setMinDate(t)}}},_=D,b=(0,m.Z)(_,a,i,!1,null,"743bc810",null),k=b.exports}}]);
//# sourceMappingURL=678.db649848.js.map