(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["WhaleTracking"],{"0544":function(e,t,n){e.exports=n.p+"static/img/平均成本.f88c135c.svg"},"3db8":function(e,t,n){},"43f5":function(e,t,n){"use strict";n("3db8")},"590a":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("fb6a");var o=n("7a23"),r=n("c501"),a=n.n(r),i=n("8604"),l=n.n(i),c=n("0544"),s=n.n(c),d=n("5bd8"),u=n.n(d),m=function(e){return Object(o["pushScopeId"])("data-v-32c5ab1d"),e=e(),Object(o["popScopeId"])(),e},b={class:"whale-container"},f={class:"section-1"},p={class:"top"},h=["src"],O={class:"address"},j=m((function(){return Object(o["createElementVNode"])("span",{style:{flex:"1"}},null,-1)})),v={class:"iconfont icon-copy-o"},g={class:"grid-container"},y={class:"grid-item"},N=m((function(){return Object(o["createElementVNode"])("img",{class:"icon-left",src:a.a,alt:"",srcset:""},null,-1)})),E={class:"value"},V={class:"label"},$={class:"grid-item"},w=m((function(){return Object(o["createElementVNode"])("img",{class:"icon-left",src:l.a,alt:"",srcset:""},null,-1)})),_={class:"value"},D={class:"label"},k={class:"grid-item"},S=m((function(){return Object(o["createElementVNode"])("img",{class:"icon-left",src:s.a,alt:"",srcset:""},null,-1)})),x={class:"value"},C={class:"label"},L={class:"grid-item"},B=m((function(){return Object(o["createElementVNode"])("img",{class:"icon-left",src:u.a,alt:"",srcset:""},null,-1)})),A={class:"font-12"},I=Object(o["createTextVNode"])("+"),T={class:"label"},F={class:"tabs-container"},U={class:"tabs"},z=["id","value"],M=["for"],q={class:"section-tx"},P={class:"title"},Y={style:{padding:"0 0.1rem 1rem 0.1rem"}},R={class:"card-item up"},W={class:"card-item down"},H={class:"txs-table"},X=["onClick"],G={class:"card-item up"},J={class:"card-item down"},Z=["onClick"],K={class:"icon-svg icon-left","aria-hidden":"true"},Q=["xlink:href"],ee={class:"content"},te={class:"content_top"},ne={class:"content_bottom"},oe=m((function(){return Object(o["createElementVNode"])("div",{style:{flex:"1"}},null,-1)})),re=Object(o["createTextVNode"])("+"),ae=Object(o["createTextVNode"])("-"),ie={key:0,style:{color:"#ff646d","font-size":"12px"}},le={style:{padding:"0 0.1rem 1rem 0.1rem"}},ce={class:"card-item up"},se={class:"card-item down"},de={class:"txs-table"},ue={style:{"text-align":"center"}},me=["onClick"],be={style:{"line-height":"1.3"}},fe=m((function(){return Object(o["createElementVNode"])("br",null,null,-1)})),pe={style:{color:"#999999"}},he={style:{"text-align":"center"}},Oe={class:"table-center"},je={class:"font-14",style:{color:"#1E2329"}},ve=m((function(){return Object(o["createElementVNode"])("br",null,null,-1)})),ge={class:"amm-box"};function ye(e,t,r,a,i,l){var c,s,d,u,m,ye,Ne,Ee,Ve,$e,we,_e,De,ke=Object(o["resolveComponent"])("van-nav-bar"),Se=Object(o["resolveComponent"])("Chip"),xe=Object(o["resolveComponent"])("Flow"),Ce=Object(o["resolveComponent"])("van-tab"),Le=Object(o["resolveComponent"])("van-tabs"),Be=Object(o["resolveComponent"])("van-empty"),Ae=Object(o["resolveComponent"])("van-image"),Ie=Object(o["resolveDirective"])("copy");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",b,[Object(o["createVNode"])(ke,{"left-text":"","left-arrow":"",onClickLeft:t[0]||(t[0]=function(t){return e.$f.goBack()}),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:l.symbol+e.$t("whaleTracking")},null,8,["title"]),Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("img",{class:"icon-chain",src:"https://www.avestorage.cloud/chain/".concat(l.chain,".png"),alt:"",srcset:""},null,8,h),Object(o["createElementVNode"])("span",O,Object(o["toDisplayString"])(l.addressOmit),1),j,Object(o["withDirectives"])(Object(o["createElementVNode"])("i",v,null,512),[[Ie,e.$route.params.address]])]),Object(o["createElementVNode"])("ul",g,[Object(o["createElementVNode"])("li",y,[N,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",E,Object(o["toDisplayString"])(e.$f.formatNumber2(l.amountCur,2)),1),Object(o["createElementVNode"])("div",V,Object(o["toDisplayString"])(e.$t("currentPosition")),1)])]),Object(o["createElementVNode"])("li",$,[w,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",_,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2(l.volumeCur,2)),1),Object(o["createElementVNode"])("div",D,Object(o["toDisplayString"])(e.$t("positionVolume")),1)])]),Object(o["createElementVNode"])("li",k,[S,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",x,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2(l.avgBuyPrice)),1),Object(o["createElementVNode"])("div",C,Object(o["toDisplayString"])(e.$t("buyCost")),1)])]),Object(o["createElementVNode"])("li",L,[B,Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",{class:"value",style:Object(o["normalizeStyle"])({color:l.profit>=0?e.$store.getters.upColor[3]:e.$store.getters.downColor[3]})},[Object(o["createElementVNode"])("span",null,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2(l.profit,2)),1),Object(o["createElementVNode"])("span",A,[l.profitChange>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[I],64)):Object(o["createCommentVNode"])("",!0),Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(e.$f.formatPercent(l.profitChange)),1)])],4),Object(o["createElementVNode"])("div",T,Object(o["toDisplayString"])(e.$t("profit2")),1)])])])]),Object(o["createElementVNode"])("div",F,[Object(o["createElementVNode"])("div",U,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.tabs,(function(e,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:n,class:"tab-item"},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"radio",id:"tab-item-".concat(e.id),"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.tabActive=e}),value:e.id,class:"tab-radio-input"},null,8,z),[[o["vModelRadio"],i.tabActive]]),Object(o["createElementVNode"])("label",{for:"tab-item-".concat(e.id),class:Object(o["normalizeClass"])("tab-item-label ".concat(e.id))},Object(o["toDisplayString"])(e.name),11,M)])})),128))])]),Object(o["withDirectives"])(Object(o["createVNode"])(Se,{dataList:i.chipList,loading:i.loadingChip},null,8,["dataList","loading"]),[[o["vShow"],"chip"===i.tabActive]]),Object(o["withDirectives"])(Object(o["createVNode"])(xe,{ref:"flow",dataList:i.flowList,loading:i.loadingFlow,onTabChange:l.getNetInFlow},null,8,["dataList","loading","onTabChange"]),[[o["vShow"],"flow"===i.tabActive]]),Object(o["createElementVNode"])("div",q,[Object(o["createElementVNode"])("div",P,[Object(o["createVNode"])(Le,{active:i.tabActive1,"onUpdate:active":t[2]||(t[2]=function(e){return i.tabActive1=e}),shrink:"",color:"#3F80F7",style:{"--van-tabs-nav-background-color":"#fff"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(Ce,{name:"transfer",title:e.$t("transfer")},null,8,["title"]),Object(o["createVNode"])(Ce,{name:"tx",title:e.$t("swap1")},null,8,["title"]),Object(o["createVNode"])(Ce,{name:"liquidity",title:e.$t("liquidity1")},null,8,["title"])]})),_:1},8,["active"])]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",Y,[Object(o["createElementVNode"])("div",{class:"card-container",style:Object(o["normalizeStyle"])({"--upColor":e.$store.getters.upColor[3],"--downColor":e.$store.getters.downColor[3],"--upBgColor":"0"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3","--downBgColor":"1"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3"})},[Object(o["createElementVNode"])("table",R,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("totalBuy")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("buy2")),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$f.formatNumber2((null===(c=l.stats)||void 0===c?void 0:c.buy_amount_cur)||0,2)),1),Object(o["createElementVNode"])("td",null,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2((null===(s=l.stats)||void 0===s?void 0:s.buy_volume_cur)||0,2)),1)])]),Object(o["createElementVNode"])("table",W,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("totalSell")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("sell2")),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$f.formatNumber2((null===(d=l.stats)||void 0===d?void 0:d.sell_amount_cur)||0,2)),1),Object(o["createElementVNode"])("td",null,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2((null===(u=l.stats)||void 0===u?void 0:u.sell_volume_cur)||0,2)),1)])])],4),Object(o["createElementVNode"])("table",H,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("time")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("swapPrice"))+"($)",1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("amountB")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("amountU"))+"($)",1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("txId")),1)]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.txs,(function(t,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:n,onClick:Object(o["withModifiers"])((function(e){return l.goTxLink(t)}),["stop"]),class:"tx-item"},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$f.formatDate(t.time,"MM-DD")),1),Object(o["createElementVNode"])("td",{style:Object(o["normalizeStyle"])({color:l.isBuy(t)?e.$store.getters.upColor[3]:e.$store.getters.downColor[3]})},Object(o["toDisplayString"])(e.$f.formatNumber2(l.getPrice(t))),5),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$f.formatNumber2(l.getAmount(t))),1),Object(o["createElementVNode"])("td",{style:Object(o["normalizeStyle"])({color:l.isBuy(t)?e.$store.getters.upColor[3]:e.$store.getters.downColor[3]})},Object(o["toDisplayString"])(e.$f.formatNumber2(l.getAmountUSD(t))),5),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.transaction.slice(0,2)+"..."+t.transaction.slice(-4)),1)],8,X)})),128))]),Object(o["withDirectives"])(Object(o["createVNode"])(Be,{class:"empty",image:e.emptyNoDataLight,description:e.$t("empty")},null,8,["image","description"]),[[o["vShow"],l.txs&&0===l.txs.length]])],512),[[o["vShow"],"tx"===i.tabActive1]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",{class:"card-container",style:Object(o["normalizeStyle"])({"--upColor":e.$store.getters.upColor[3],"--downColor":e.$store.getters.downColor[3],"--upBgColor":"0"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3","--downBgColor":"1"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3"})},[Object(o["createElementVNode"])("table",G,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("transferIn")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("inVolume")),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$f.formatNumber2((null===(m=i.userTransfer)||void 0===m||null===(ye=m.stats)||void 0===ye?void 0:ye.transfer_in_amount_cur)||0,2)),1),Object(o["createElementVNode"])("td",null,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2((null===(Ne=i.userTransfer)||void 0===Ne||null===(Ee=Ne.stats)||void 0===Ee?void 0:Ee.transfer_in_volume_cur)||0,2)),1)])]),Object(o["createElementVNode"])("table",J,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("transferOut")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("outVolume")),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(e.$f.formatNumber2((null===(Ve=i.userTransfer)||void 0===Ve||null===($e=Ve.stats)||void 0===$e?void 0:$e.transfer_out_amount_cur)||0,2)),1),Object(o["createElementVNode"])("td",null,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2((null===(we=i.userTransfer)||void 0===we||null===(_e=we.stats)||void 0===_e?void 0:_e.transfer_out_volume_cur)||0,2)),1)])])],4),Object(o["createElementVNode"])("ul",{class:"transfer-ul",style:Object(o["normalizeStyle"])({"--upColor":e.$store.getters.upColor[3],"--downColor":e.$store.getters.downColor[3],"--upBgColor":"0"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3","--downBgColor":"1"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3"})},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])((null===(De=i.userTransfer)||void 0===De?void 0:De.transfers)||[],(function(n,r){var a,i,c,s,d;return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:r,class:"transfer-li-item",onClick:Object(o["withModifiers"])((function(e){return l.goTxLink(n)}),["stop"])},[(Object(o["openBlock"])(),Object(o["createElementBlock"])("svg",K,[Object(o["createElementVNode"])("use",{"xlink:href":l.transferIcon(n)},null,8,Q)])),Object(o["createElementVNode"])("div",ee,[Object(o["createElementVNode"])("div",te,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])((null===(a=l.transferFromAddress(n))||void 0===a||null===(i=a.slice)||void 0===i?void 0:i.call(a,0,6))+"..."+(null===(c=l.transferFromAddress)||void 0===c||null===(s=c.call(l,n))||void 0===s||null===(d=s.slice)||void 0===d?void 0:d.call(s,-4))),1),Object(o["withDirectives"])(Object(o["createElementVNode"])("i",{class:"iconfont icon-copy-o",onClick:t[3]||(t[3]=Object(o["withModifiers"])((function(){}),["stop"]))},null,512),[[Ie,l.transferFromAddress(n)]])]),Object(o["createElementVNode"])("div",ne,Object(o["toDisplayString"])(e.$f.formatDate(n.time)),1)]),oe,Object(o["createElementVNode"])("div",{class:"amount flex-end",style:Object(o["normalizeStyle"])({color:l.isTransferIn(n)?"var(--upColor)":"var(--downColor)"})},[Object(o["createElementVNode"])("span",null,[l.isTransferIn(n)?(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:0},[re],64)):(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],{key:1},[ae],64)),Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(0==n.status?0:e.$f.formatNumber2(n.amount))+" "+Object(o["toDisplayString"])((null===n||void 0===n?void 0:n.token_symbol)||""),1)]),0==n.status?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",ie,Object(o["toDisplayString"])(e.$t("transferFailed")),1)):Object(o["createCommentVNode"])("",!0)],4)],8,Z)})),128))],4)],512),[[o["vShow"],"transfer"===i.tabActive1]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",le,[Object(o["createElementVNode"])("div",{class:"card-container",style:Object(o["normalizeStyle"])({"--upColor":e.$store.getters.upColor[3],"--downColor":e.$store.getters.downColor[3],"--upBgColor":"0"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3","--downBgColor":"1"===e.$store.state.typeUpDown?"#ddf0e7":"#fbe2e3"})},[Object(o["createElementVNode"])("table",ce,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("add1")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("value1")),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(i.add_amount_cur>0?e.$f.formatNumber2(i.add_amount_cur||0,2):"--"),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(i.add_volume_cur>0?"$"+e.$f.formatNumber2(i.add_volume_cur||0,2):"--"),1)])]),Object(o["createElementVNode"])("table",se,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("remove2")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("value1")),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(i.remove_volume_cur>0?e.$f.formatNumber2(i.remove_amount_cur||0,2):"--"),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(i.remove_volume_cur>0?"$"+e.$f.formatNumber2(i.remove_volume_cur||0,2):"--"),1)])])],4),Object(o["createElementVNode"])("table",de,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("type")),1),Object(o["createElementVNode"])("th",ue,Object(o["toDisplayString"])(e.$t("amount"))+"/"+Object(o["toDisplayString"])(e.$t("token1")),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("value"))+"/AMM",1)]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(i.userLiq,(function(t,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:r,onClick:Object(o["withModifiers"])((function(e){return l.goTxLink(t)}),["stop"]),class:"tx-item"},[Object(o["createElementVNode"])("td",be,[Object(o["createElementVNode"])("span",{style:Object(o["normalizeStyle"])({color:"addLiquidity"===t.type?e.$store.getters.upColor[3]:e.$store.getters.downColor[3]}),class:"font-14"},Object(o["toDisplayString"])("addLiquidity"===t.type?e.$t("add"):e.$t("remove1")),5),fe,Object(o["createElementVNode"])("span",pe,Object(o["toDisplayString"])(e.$f.formatDate(t.time,"MM-DD HH-mm")),1)]),Object(o["createElementVNode"])("td",he,[Object(o["createElementVNode"])("table",Oe,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])("addLiquidity"===t.type?"+":"-")+Object(o["toDisplayString"])(e.$f.formatNumber2(t.amount0)),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.token0_symbol),1)]),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])("addLiquidity"===t.type?"+":"-")+Object(o["toDisplayString"])(e.$f.formatNumber2(t.amount1)),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.token1_symbol),1)])])]),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("span",je,"$"+Object(o["toDisplayString"])(e.$f.formatNumber2(t.amount0*t.token0_price_usd+t.amount1*t.token1_price_usd)),1),ve,Object(o["createElementVNode"])("div",ge,[t.amm&&"unknown"!==t.amm?(Object(o["openBlock"])(),Object(o["createBlock"])(Ae,{key:0,class:"icon-logo","lazy-load":"","show-loading":"",round:"",src:"https://www.avestorage.cloud/swap/".concat(t.amm,".jpeg"),"error-icon":n("aecc")},null,8,["src","error-icon"])):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.show_name||t.amm),1)])])],8,me)})),128))]),Object(o["withDirectives"])(Object(o["createVNode"])(Be,{class:"empty",image:e.emptyNoDataLight,description:e.$t("empty")},null,8,["image","description"]),[[o["vShow"],i.userLiq&&0===i.userLiq.length]])],512),[[o["vShow"],"liquidity"===i.tabActive1]])])])}var Ne=n("3835"),Ee=n("1da1"),Ve=(n("96cf"),n("ac1f"),n("1276"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("a9e3"),n("365c")),$e={class:"chart-container"},we=["id"];function _e(e,t,n,r,a,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",$e,[Object(o["createElementVNode"])("div",{id:a.chartId,style:{height:"200px",width:"100vw"}},null,8,we)])}n("d81d");var De=n("313e"),ke=n("ec26"),Se={name:"ChipDistribution",props:{dataList:Array,loading:Boolean},data:function(){return{chartId:"chart-".concat(Object(ke["a"])()),myChart:null}},computed:{option:function(){return[{color:"#333FFF",label:this.$t("position"),value:"amount"},{color:"#58CFFF",label:this.$t("buyCost"),value:"cost"}]},dataX:function(){return this.dataList.map((function(e){return e.time}))},series:function(){var e=this;return this.option.map((function(t,n){return{name:t.label,type:"line",smooth:!0,symbol:"none",itemStyle:{color:t.color},lineStyle:{width:2},areaStyle:{color:t.color,opacity:.2},emphasis:{disabled:!0,focus:"series"},tooltip:{valueFormatter:function(n){return"cost"===t.value?"$"+e.$f.formatNumber2(n||0,2):e.$f.formatNumber2(n||0,2)},textStyle:{fontSize:10,color:"#333333"}},yAxisIndex:n,data:e.dataList.map((function(e){return(null===e||void 0===e?void 0:e[t.value])||0}))}}))}},watch:{loading:function(e){var t=De["a"](document.getElementById(this.chartId));t||(t=De["b"](document.getElementById(this.chartId))),e?(t.hideLoading(),t.showLoading({maskColor:"rgba(255, 255, 255, 0)",text:""})):t.hideLoading()},dataList:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var e=this;if(document.getElementById(this.chartId)){var t=De["a"](document.getElementById(this.chartId));t||(t=De["b"](document.getElementById(this.chartId))),t.hideLoading(),t.showLoading({maskColor:"rgba(255, 255, 255, 0)",text:""});var n={legend:{x:"center",y:"bottom",textStyle:{color:"#878FBC",fontSize:12}},tooltip:{trigger:"axis",textStyle:{fontSize:10,color:"#333333"},formatter:function(t){var n=t[0].name;n=e.$f.formatDate(Number(n),"YYYY-MM-DD");for(var o=0;o<t.length;o++){var r=t[o].seriesName;n+=0===o?"<br>"+t[o].marker+r+"："+e.$f.formatNumUnit(t[o].data):"<br>"+t[o].marker+r+"：$ "+e.$f.formatNumUnit(t[o].data)}return'<div style="line-height: 1.5">'.concat(n,"</div>")}},grid:{left:"5px",right:"5%",top:"5%",bottom:"20%",containLabel:!0},xAxis:{type:"category",data:this.dataX,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{formatter:function(t){return e.$f.formatDate(t,"MM-DD")}},nameTextStyle:{fontSize:12}},yAxis:[{type:"value",name:"",nameTextStyle:{fontSize:12,align:"left"},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{},splitLine:{show:!1}},{type:"value",name:"",nameTextStyle:{fontSize:12,align:"left"},position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{},splitLine:{show:!1}}],series:this.series};t.setOption(n),this.dataList&&this.dataList.length>0&&t.hideLoading()}}}},xe=(n("a195"),n("6b0d")),Ce=n.n(xe);const Le=Ce()(Se,[["render",_e],["__scopeId","data-v-4cbe81bc"]]);var Be=Le,Ae={class:"flow-container"},Ie={class:"tabs"},Te=["id","value"],Fe=["for"],Ue={class:"chart-container"},ze=["id"];function Me(e,t,n,r,a,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Ae,[Object(o["createElementVNode"])("div",Ie,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(i.tabs,(function(e,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:n,class:"tab-item"},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"radio",id:"whale-tab-item-".concat(e.id),"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.tabActive=e}),value:e.id,class:"tab-radio-input"},null,8,Te),[[o["vModelRadio"],a.tabActive]]),Object(o["createElementVNode"])("label",{for:"whale-tab-item-".concat(e.id),class:"tab-item-label"},Object(o["toDisplayString"])(e.name),9,Fe)])})),128))]),Object(o["createElementVNode"])("div",Ue,[Object(o["createElementVNode"])("div",{id:a.chartId,style:{height:"200px",width:"100vw"}},null,8,ze)])])}var qe={name:"Flow",props:{dataList:Array,loading:Boolean},emits:["tabChange"],data:function(){return{chartId:"chart-".concat(Object(ke["a"])()),myChart:null,tabActive:"3d"}},computed:{tabs:function(){return[{name:this.$t("1h"),id:"1h"},{name:this.$t("4h"),id:"4h"},{name:this.$t("1d"),id:"1d"},{name:this.$t("3d"),id:"3d"},{name:this.$t("1w"),id:"1w"},{name:this.$t("1m"),id:"1m"}]},option:function(){return[{color:"#677ff4",label:this.$t("netInflow"),value:"net_inflow"}]},dataX:function(){return this.dataList.map((function(e){return e.time}))},series:function(){var e=this;return this.option.map((function(t){return{name:t.label,type:"line",smooth:!0,symbol:"none",itemStyle:{color:t.color},lineStyle:{width:2},areaStyle:{color:t.color,opacity:.2},emphasis:{disabled:!0,focus:"series"},tooltip:{textStyle:{fontSize:10,color:"#333333"}},data:e.dataList.map((function(e){return(null===e||void 0===e?void 0:e[t.value])||0}))}}))}},watch:{loading:function(e){var t=De["a"](document.getElementById(this.chartId));t||(t=De["b"](document.getElementById(this.chartId))),e?(t.hideLoading(),t.showLoading({maskColor:"rgba(255, 255, 255, 0)",text:""})):t.hideLoading()},dataList:function(){this.init()},tabActive:function(e){this.$emit("tabChange",e)}},mounted:function(){this.init()},methods:{init:function(){var e=this;if(document.getElementById(this.chartId)){var t=De["a"](document.getElementById(this.chartId));t||(t=De["b"](document.getElementById(this.chartId))),t.hideLoading(),t.showLoading({maskColor:"rgba(255, 255, 255, 0)",text:""});var n={legend:{x:"center",y:"bottom",textStyle:{color:"#878FBC",fontSize:12}},tooltip:{trigger:"axis",textStyle:{fontSize:10,color:"#333333"},formatter:function(t){var n=t[0].name;n=e.$f.formatDate(Number(n),"YYYY-MM-DD");for(var o=0;o<t.length;o++){var r=t[o].seriesName;n+=0===o?"<br>"+t[o].marker+r+"："+e.$f.formatNumUnit(t[o].data):"<br>"+t[o].marker+r+"：$ "+e.$f.formatNumUnit(t[o].data)}return'<div style="line-height: 1.5">'.concat(n,"</div>")}},grid:{left:"5px",right:"5%",top:"5%",bottom:"20%",containLabel:!0},xAxis:{type:"category",data:this.dataX,boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#878EBE",formatter:function(t){var n="HH:mm";return"1w"!==e.tabActive&&"1m"!==e.tabActive||(n="MM-DD"),e.$f.formatDate(t,n)}},nameTextStyle:{fontSize:12}},yAxis:{type:"value",name:"",nameTextStyle:{fontSize:12},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#878EBE"},splitLine:{show:!1}},series:this.series};t.setOption(n),this.dataList&&this.dataList.length>0&&t.hideLoading()}}}};n("855b");const Pe=Ce()(qe,[["render",Me],["__scopeId","data-v-e02408e4"]]);var Ye=Pe,Re={name:"WhaleTracking",components:{Chip:Be,Flow:Ye},data:function(){return{tabActive:"chip",whaleDetail:{stats:{},txs:[]},balance:0,chipList:[],loadingChip:!1,flowList:[],loadingFlow:!1,userTransfer:{stats:{},transfers:[]},tabActive1:"transfer",userLiq:[],add_amount_cur:0,add_volume_cur:0,remove_amount_cur:0,remove_volume_cur:0}},computed:{symbol:function(){return this.$route.params.symbol?this.$route.params.symbol+" ":""},chain:function(){var e=this.$route.params.id;if(e&&"-"!==e){var t,n,o,r=null!==(t=null===e||void 0===e||null===(n=e.split)||void 0===n||null===(o=n.call(e,"-"))||void 0===o?void 0:o[1])&&void 0!==t?t:"";return r||""}return""},addressOmit:function(){var e=this.$route.params.address;return e.slice(0,12)+"..."+e.slice(-12)},tabs:function(){return[{name:this.$t("chipDistribution"),id:"chip"},{name:this.$t("capitalFlow"),id:"flow"}]},stats:function(){var e;return(null===(e=this.whaleDetail)||void 0===e?void 0:e.stats)||{}},txs:function(){var e;return(null===(e=this.whaleDetail)||void 0===e?void 0:e.txs)||[]},tokenAddress:function(){var e=this.$route.params.id;return e?e.split("-")[0]:""},avgBuyPrice:function(){var e=this.whaleDetail.stats||{},t=(null===e||void 0===e?void 0:e.buy_volume_cur)||0,n=(null===e||void 0===e?void 0:e.buy_amount_cur)||0;return 0!==n?t/n:0},amountCur:function(){var e;return this.balance||(null===(e=this.stats)||void 0===e?void 0:e.amount_cur)||0},volumeCur:function(){return this.amountCur*this.curPrice},curPrice:function(){var e;return this.$store.state.tokenPrice||(null===(e=this.whaleDetail)||void 0===e?void 0:e.cur_token_price)||0},profit:function(){var e=this.whaleDetail.stats||{},t=this.curPrice,n=e.amount_cur,o=e.sell_volume_cur,r=e.buy_volume_cur;return n=this.balance||n,n*t+o-r},profitChange:function(){var e,t=(null===(e=this.stats)||void 0===e?void 0:e.buy_volume_cur)||0;return t>0?this.profit/t:0}},created:function(){this.init()},methods:{init:function(){var e=this;Promise.all([this.getWhaleDetail(),this.getTokenBalance()]).then((function(t){e.getWhaleInFlow()})),this.getNetInFlow(),this.getUserTransfer(),this.getUserLiq()},getWhaleDetail:function(){var e=this;return Object(Ve["Zb"])(this.$route.params.id,this.$route.params.address).then(function(){var t=Object(Ee["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.whaleDetail=n,t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getTokenBalance:function(){var e=this,t=this.$route.params.id.split("-"),n=Object(Ne["a"])(t,2),o=n[0],r=n[1];return Object(Ve["Fb"])(o,r,this.$route.params.address).then(function(){var t=Object(Ee["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.balance=n,t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getWhaleInFlow:function(){var e=this;this.loadingChip=!0,Object(Ve["ac"])(this.$route.params.id,this.$route.params.address).then((function(t){var n=t.slice();if(n.length>0)for(var o=n.length-1;o>=0;o--){var r=n[o],a=r.amount;if(o===n.length-1){if(r.has_balance_data&&(0!==a||0===e.amountCur))break;n[o].amount=e.amountCur}else n[o].amount=n[o+1].amount-n[o+1].net_inflow}e.chipList=n})).finally((function(){e.loadingChip=!1}))},getNetInFlow:function(){var e,t,n=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(null===(e=this.$refs)||void 0===e||null===(t=e.flow)||void 0===t?void 0:t.tabActive)||"3d";this.loadingFlow=!0,Object(Ve["ac"])(this.$route.params.id,this.$route.params.address,o).then((function(e){n.flowList=e})).finally((function(){n.loadingFlow=!1}))},getUserTransfer:function(){var e=this;Object(Ve["Vb"])(this.$route.params.id,this.$route.params.address).then((function(t){e.userTransfer=t}))},getUserLiq:function(){var e=this;Object(Ve["Pb"])(this.$route.params.id,this.$route.params.address).then((function(t){e.userLiq=t||[],e.userLiq.forEach((function(t){"addLiquidity"===t.type?(t.token0_address===e.tokenAddress?e.add_amount_cur+=t.amount0:e.add_amount_cur+=t.amount1,e.add_volume_cur+=t.amount0*t.token0_price_usd+t.amount1*t.token1_price_usd):(t.token0_address===e.tokenAddress?e.remove_amount_cur+=t.amount0:e.remove_amount_cur+=t.amount1,e.remove_volume_cur+=t.amount0*t.token0_price_usd+t.amount1*t.token1_price_usd)}))}))},isBuy:function(e){if(e.from_address&&e.from_address===this.tokenAddress)return!1;if(e.to_address&&e.to_address===this.tokenAddress)return!0;var t=e.amount0In>0?e.token0Address:e.token1Address;return t!==this.tokenAddress},getPrice:function(e){if(e.from_address&&e.from_address===this.tokenAddress)return this.$f.formatNumber(e.from_price_usd);if(e.to_address&&e.to_address===this.tokenAddress)return this.$f.formatNumber(e.to_price_usd);var t=0;return t=this.tokenAddress===e.token0Address?e.token0PriceUSD||0:e.token1PriceUSD||0,this.$f.formatNumber(t)},getAmountUSD:function(e){return e.from_address&&e.from_address===this.tokenAddress?Number(e.from_amount)*Number(e.from_price_usd):e.to_address&&e.to_address===this.tokenAddress?Number(e.to_amount)*Number(e.to_price_usd):e.amountUSD},getAmount:function(e){if(e.from_address&&e.from_address===this.tokenAddress)return e.from_amount;if(e.to_address&&e.to_address===this.tokenAddress)return e.to_amount;var t=0;return t=e.amount0In>0?this.tokenAddress===e.token0Address?e.amount0In:e.amount1Out:this.tokenAddress===e.token1Address?e.amount1In:e.amount0Out,t},isTransferIn:function(e){var t,n,o,r,a=null===(t=this.$route.params)||void 0===t?void 0:t.address;return(null===(n=e.to_address)||void 0===n||null===(o=n.toLowerCase)||void 0===o?void 0:o.call(n))===(null===a||void 0===a||null===(r=a.toLowerCase)||void 0===r?void 0:r.call(a))},transferFromAddress:function(e){return this.isTransferIn(e)?e.from_address:e.to_address},transferIcon:function(e){return"0"===this.$store.state.typeUpDown&&this.isTransferIn(e)?"#icon-transferIn-g":"1"===this.$store.state.typeUpDown&&this.isTransferIn(e)?"#icon-transferIn-r":"0"!==this.$store.state.typeUpDown||this.isTransferIn(e)?"1"!==this.$store.state.typeUpDown||this.isTransferIn(e)?void 0:"#icon-transferOut-g":"#icon-transferOut-r"},goTxLink:function(e){window.open(this.$f.formatExplorerUrl(e.chain,e.transaction,"tx"))}}};n("43f5");const We=Ce()(Re,[["render",ye],["__scopeId","data-v-32c5ab1d"]]);t["default"]=We},"5a3b":function(e,t,n){},"5bd8":function(e,t,n){e.exports=n.p+"static/img/盈亏情况.db853751.svg"},6356:function(e,t,n){},"855b":function(e,t,n){"use strict";n("6356")},8604:function(e,t,n){e.exports=n.p+"static/img/持仓金额.6dca0cfc.svg"},a195:function(e,t,n){"use strict";n("5a3b")},c501:function(e,t,n){e.exports=n.p+"static/img/当前持仓.f64f0105.svg"}}]);