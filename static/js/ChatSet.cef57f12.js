(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ChatSet"],{"0544d":function(e,t,o){"use strict";o("e0a6")},"1b41":function(e,t,o){"use strict";o("73e9")},"4b36":function(e,t,o){"use strict";o("889d")},"73e9":function(e,t,o){},"889d":function(e,t,o){},b04f:function(e,t,o){"use strict";var n=o("7a23"),i={class:"popup-title"};function c(e,t,o,c,r,a){var l=this,s=Object(n["resolveComponent"])("van-radio"),u=Object(n["resolveComponent"])("van-radio-group"),d=Object(n["resolveComponent"])("van-field"),b=Object(n["resolveComponent"])("van-datetime-picker"),p=Object(n["resolveComponent"])("van-popup"),m=Object(n["resolveComponent"])("van-button"),h=Object(n["resolveComponent"])("van-form");return Object(n["openBlock"])(),Object(n["createBlock"])(p,{show:a.dialogVisible,"onUpdate:show":t[5]||(t[5]=function(e){return a.dialogVisible=e}),class:"popup-container",closeable:!0,"close-on-click-overlay":!1,"close-on-popstate":!1,round:"",position:"center",teleport:"#app",style:{width:"90%","min-height":"20vh"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h3",i,Object(n["toDisplayString"])(e.$t("banTimeLimitSetting")),1),Object(n["createVNode"])(h,{class:"popup-content",onSubmit:a.confirmSubmit},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(u,{modelValue:r.checked,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.checked=e})},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{class:"mb_10",name:2},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("permanentBan")),1)]})),_:1}),Object(n["createVNode"])(s,{class:"mb_10",name:1},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("banUntil")),1)]})),_:1})]})),_:1},8,["modelValue"]),1===r.checked?(Object(n["openBlock"])(),Object(n["createBlock"])(d,{key:0,modelValue:a.content,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.content=e}),class:"b-filed mb_10","is-link":"",readonly:"",name:"datetimePicker",label:"",placeholder:e.$t("selectTime"),rules:[{required:!0,message:l.$t("pSelectTime")}],onClick:t[2]||(t[2]=function(e){return r.showPicker=!0})},null,8,["modelValue","placeholder","rules"])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(p,{show:r.showPicker,"onUpdate:show":t[4]||(t[4]=function(e){return r.showPicker=e}),teleport:"#app",position:"bottom"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{type:"datetime","min-date":r.minDate,onConfirm:a.onConfirm,onCancel:t[3]||(t[3]=function(e){return r.showPicker=!1})},null,8,["min-date","onConfirm"])]})),_:1},8,["show"]),Object(n["createVNode"])(m,{class:"form-submit",block:"",round:"","native-type":"submit",type:"primary",loading:r.loading},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("confirm1")),1)]})),_:1},8,["loading"])]})),_:1},8,["onSubmit"])]})),_:1},8,["show"])}var r={name:"Mute",props:{visible:Boolean},emits:["update:visible","onSubmit"],data:function(){return{time:"",checked:2,loading:!1,placeholder:this.$t("pSelectBanExpirationTime"),showPicker:!1,minDate:new Date}},computed:{dialogVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},content:function(){return this.time?this.$f.formatDate(this.time,"YYYY-MM-DD HH:mm"):""}},watch:{},methods:{onConfirm:function(e){this.time=Date.parse(e)/1e3,this.showPicker=!1},confirmSubmit:function(){var e={user_status:this.checked};1===this.checked&&(e.banned_expired=this.time),this.$emit("onSubmit",e)}}},a=(o("0544d"),o("6b0d")),l=o.n(a);const s=l()(r,[["render",c],["__scopeId","data-v-32a8ad0a"]]);t["a"]=s},d3f0:function(e,t,o){"use strict";o.r(t);o("a4d3"),o("e01a"),o("99af"),o("fb6a");var n=o("7a23"),i=function(e){return Object(n["pushScopeId"])("data-v-59eff5b2"),e=e(),Object(n["popScopeId"])(),e},c={class:"chatSet-container"},r={class:"section-1"},a={class:"image-box"},l={class:"s1"},s={class:"s2"},u={class:"s3"},d={class:"s4"},b={key:0,style:{color:"red"}},p=i((function(){return Object(n["createElementVNode"])("svg",{class:"icon-svg",style:{"margin-left":"0.1rem"},"aria-hidden":"true"},[Object(n["createElementVNode"])("use",{"xlink:href":"#icon-renzheng"})],-1)})),m={style:{position:"relative"}},h={key:2,class:"icon-svg icon-renzheng",style:{"margin-left":"0.1rem"},"aria-hidden":"true"},f=i((function(){return Object(n["createElementVNode"])("use",{"xlink:href":"#icon-renzheng"},null,-1)})),g=[f],v={class:"chat-item-title-container"},O={class:"chat-item-title van-ellipsis"},j={key:0,style:{color:"#3F80F7"}},k={key:1},C={class:"chat-item-status"},$={key:0,class:"status"},y={key:1,class:"status"},V={class:"exit-chat-btn"};function N(e,t,i,f,N,w){var x,S,B,_,I=Object(n["resolveComponent"])("van-nav-bar"),D=Object(n["resolveComponent"])("van-image"),E=Object(n["resolveComponent"])("van-button"),M=Object(n["resolveComponent"])("van-cell"),L=Object(n["resolveComponent"])("van-cell-group"),G=Object(n["resolveComponent"])("van-swipe-cell"),T=Object(n["resolveComponent"])("van-list"),F=Object(n["resolveComponent"])("h5-cropper"),U=Object(n["resolveComponent"])("Edit"),z=Object(n["resolveComponent"])("Mute"),A=Object(n["resolveDirective"])("copy");return Object(n["openBlock"])(),Object(n["createElementBlock"])("section",c,[Object(n["createVNode"])(I,{"left-text":"","left-arrow":"",onClickLeft:t[0]||(t[0]=function(t){return e.$f.goBack()}),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("chatSettings")},null,8,["title"]),Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("div",a,[Object(n["createVNode"])(D,{round:"",width:"1.6rem",height:"1.6rem","icon-size":"1.6rem","lazy-load":"","show-loading":"",src:(null===(x=w.groupInfo)||void 0===x?void 0:x.image)||e.$f.formatIcon(w.groupId),"error-icon":o("aecc")},null,8,["src","error-icon"])]),Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])((null===(S=w.groupInfo)||void 0===S?void 0:S.nickname)||""),1)]),Object(n["createElementVNode"])("div",s,Object(n["toDisplayString"])(w.total)+" "+Object(n["toDisplayString"])(e.$t("members")),1),Object(n["createElementVNode"])("div",u,Object(n["toDisplayString"])(e.$t("introduction"))+": "+Object(n["toDisplayString"])((null===(B=w.groupInfo)||void 0===B?void 0:B.description)||""),1),Object(n["createElementVNode"])("div",d,[Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])(E,{class:"btn",round:""},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("copyGroupLink")),1)]})),_:1})),[[A,"https://m.ave.ai/chat/".concat(w.groupId)]]),(null===(_=w.groupInfo)||void 0===_?void 0:_.manager_count)<5&&0===w.role&&e.$store.state.chat.groupMemberInfo.group_id?(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:0,class:"btn",round:"",type:"primary",to:{name:"ChatBurn",params:{id:w.groupId}}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("becomeAnAdmin")),1)]})),_:1},8,["to"])):Object(n["createCommentVNode"])("",!0)])]),Object(n["createVNode"])(L,{class:"mb_10"},{default:Object(n["withCtx"])((function(){var t;return[Object(n["createVNode"])(M,{class:"cell-title-2",title:e.$t("nicknameAndAvatarSettings"),value:"","is-link":"",to:{name:"UserInfo"}},null,8,["title"]),Object(n["createVNode"])(M,{title:e.$t("groupViolationHandling"),onClick:w.goPenaltyInfo,"is-link":(null===(t=N.penaltyList)||void 0===t?void 0:t.length)>0},{default:Object(n["withCtx"])((function(){var t;return[(null===(t=N.penaltyList)||void 0===t?void 0:t.length)>0?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",b,Object(n["toDisplayString"])(e.$t("penaltyGoDeal")),1)):(Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:1},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("noViolation")),1)],64))]})),_:1},8,["title","onClick","is-link"])]})),_:1}),Object(n["createVNode"])(L,{class:"mb_10"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{label:"",value:"","is-link":"",class:"cell-title-4",to:{name:"ChatOfficial"}},{title:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.$t("projectOfficial")),1),p])]})),_:1})]})),_:1}),Object(n["createVNode"])(L,{class:"mb_10"},{default:Object(n["withCtx"])((function(){var o,i;return[Object(n["createVNode"])(M,{class:"cell-title-2",title:"".concat(e.$t("members1"),"(").concat(w.total||(null===(o=w.groupInfo)||void 0===o?void 0:o.total_members)||(null===(i=N.groupMember)||void 0===i?void 0:i.length)||0,")"),value:e.$t("viewBanList"),"is-link":"",to:{name:"ChatBanned",params:{id:w.groupId}}},null,8,["title","value","to"]),Object(n["createVNode"])(T,{loading:N.loading,"onUpdate:loading":t[1]||(t[1]=function(e){return N.loading=e}),finished:N.finished,error:N.error,"onUpdate:error":t[2]||(t[2]=function(e){return N.error=e}),offset:"200","error-text":e.$t("errorText"),onLoad:w.getChatGroupMember,"loading-text":e.$t("loading"),"finished-text":""},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(N.groupMember,(function(t,o){return Object(n["openBlock"])(),Object(n["createBlock"])(G,{key:o,class:"group-item",disabled:0===w.role||w.role<=t.role||w.role<=t.user_role},{right:Object(n["withCtx"])((function(){return[0===t.status?(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:0,square:"",color:"#FAAB0C",text:e.$t("ban"),onClick:function(e){return w.handleMute(t)},style:{height:"100%",width:"1.3rem"}},null,8,["text","onClick"])):1===t.status||2===t.status?(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:1,square:"",type:"success",text:e.$t("unban2"),onClick:function(e){return w.handleUnMute(t)},style:{height:"100%",width:"1.3rem"}},null,8,["text","onClick"])):Object(n["createCommentVNode"])("",!0)]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:Object(n["normalizeClass"])(["cell-title-lh-1",{ban:1===t.status||2===t.status}]),center:"",label:""},{icon:Object(n["withCtx"])((function(){var o,i,c,r;return[Object(n["createElementVNode"])("div",m,[t.image?(Object(n["openBlock"])(),Object(n["createBlock"])(D,{key:0,class:"chat-avatar",round:"",width:"0.72rem",height:"0.72rem","icon-size":"0.72rem","lazy-load":"","show-loading":"",src:t.image},null,8,["src"])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:1,class:"chat-avatar",style:Object(n["normalizeStyle"])({backgroundColor:"#"+t.user_address.slice(-6),color:e.$f.formatAvatarColor(null===(o=t.user_address)||void 0===o||null===(i=o.slice)||void 0===i?void 0:i.call(o,-4))})},Object(n["toDisplayString"])(null===t||void 0===t||null===(c=t.user_address)||void 0===c||null===(r=c.slice)||void 0===r?void 0:r.call(c,-2)),5)),2===t.role?(Object(n["openBlock"])(),Object(n["createElementBlock"])("svg",h,g)):Object(n["createCommentVNode"])("",!0)])]})),title:Object(n["withCtx"])((function(){var o,i;return[Object(n["createElementVNode"])("div",v,[w.formatRole(t)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:0,class:"role-tag",style:Object(n["normalizeStyle"])({backgroundColor:w.formatRole(t,"color")})},Object(n["toDisplayString"])(w.formatRole(t)),5)):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",O,Object(n["toDisplayString"])((null===t||void 0===t?void 0:t.nickname)||(null===(o=(i=e.$f).formatAddress)||void 0===o?void 0:o.call(i,t.user_address,4))||""),1)])]})),label:Object(n["withCtx"])((function(){return[1===t.is_online?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",j,Object(n["toDisplayString"])(e.$t("online")),1)):0===t.is_online?(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",k,Object(n["toDisplayString"])(e.$t("offline")),1)):Object(n["createCommentVNode"])("",!0)]})),default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",C,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(e.$t("joined"))+" "+Object(n["toDisplayString"])(e.$dayjs(1e3*t.created_time).fromNow(!0)),1),1===t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",$,Object(n["toDisplayString"])(e.$t("bannedUntil"))+" "+Object(n["toDisplayString"])(e.$f.formatDate(t.banned_expired_time)),1)):2===t.status?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",y,Object(n["toDisplayString"])(e.$t("permanentlyBanned")),1)):Object(n["createCommentVNode"])("",!0)])]})),_:2},1032,["class"])]})),_:2},1032,["disabled"])})),128))]})),_:1},8,["loading","finished","error","error-text","onLoad","loading-text"])]})),_:1}),Object(n["createElementVNode"])("div",V,[Object(n["createVNode"])(E,{class:"btn",onClick:Object(n["withModifiers"])(w.leaveChatGroup,["stop"]),block:"",plain:"",color:"#F6465D",style:{border:"none"}},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("exitChat")),1)]})),_:1},8,["onClick"])]),Object(n["createVNode"])(F,{class:"cropper-group-logo",ref:"cropper",option:N.option,onGetFile:w.getFile},null,8,["option","onGetFile"]),Object(n["createVNode"])(U,{ref:"editName",visible:N.visible1,"onUpdate:visible":t[3]||(t[3]=function(e){return N.visible1=e}),title:e.$t("editGroupName"),maxlength:"20",placeholder:e.$t("pleaseEnterGroupName"),onOnSubmit:w.updateChatGroupNickname},null,8,["visible","title","placeholder","onOnSubmit"]),Object(n["createVNode"])(U,{ref:"editDescription",visible:N.visible2,"onUpdate:visible":t[4]||(t[4]=function(e){return N.visible2=e}),title:e.$t("editIntroduction"),placeholder:e.$t("pleaseEnterIntroduction"),onOnSubmit:w.updateChatGroupDescription},null,8,["visible","title","placeholder","onOnSubmit"]),Object(n["createVNode"])(z,{ref:"mute",visible:N.visible3,"onUpdate:visible":t[5]||(t[5]=function(e){return N.visible3=e}),onOnSubmit:w.mute},null,8,["visible","onOnSubmit"])])}o("d3b7");var w=o("25a4"),x=o("365c"),S={class:"popup-title"};function B(e,t,o,i,c,r){var a=Object(n["resolveComponent"])("van-field"),l=Object(n["resolveComponent"])("van-button"),s=Object(n["resolveComponent"])("van-form"),u=Object(n["resolveComponent"])("van-popup");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{show:r.dialogVisible,"onUpdate:show":t[1]||(t[1]=function(e){return r.dialogVisible=e}),class:"popup-container",closeable:!0,"close-on-click-overlay":!1,"close-on-popstate":!1,round:"",position:"center",teleport:"#app",style:{width:"90%","min-height":"20vh"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("h3",S,Object(n["toDisplayString"])(o.title),1),Object(n["createVNode"])(s,{class:"popup-content",onSubmit:r.confirmSubmit},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(a,{class:"b-filed",modelValue:c.content,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.content=e}),rows:"1",autosize:"",label:"",type:"textarea",placeholder:o.placeholder,clearable:"",maxlength:o.maxlength,"show-word-limit":"-"!==o.maxlength,rules:[{required:!0,message:o.placeholder}]},null,8,["modelValue","placeholder","maxlength","show-word-limit","rules"]),Object(n["createVNode"])(l,{class:"form-submit",block:"",round:"","native-type":"submit",type:"primary",loading:c.loading},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.$t("confirm1")),1)]})),_:1},8,["loading"])]})),_:1},8,["onSubmit"])]})),_:1},8,["show"])}var _={name:"edit",props:{title:String,placeholder:String,visible:Boolean,maxlength:{type:String,default:"-"}},emits:["update:visible","onSubmit"],data:function(){return{content:"",loading:!1}},computed:{dialogVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},watch:{},methods:{confirmSubmit:function(){this.$emit("onSubmit",this.content)}}},I=(o("1b41"),o("6b0d")),D=o.n(I);const E=D()(_,[["render",B],["__scopeId","data-v-3fd90bb5"]]);var M=E,L=o("b04f"),G={name:"ChatSet",components:{H5Cropper:w["a"],Edit:M,Mute:L["a"]},data:function(){return{slowMode:"0",groupMember:[],pageNo:0,pageSize:20,loading:!1,finished:!1,error:!1,option:{cancelButtonText:this.$t("cancel"),confirmButtonText:this.$t("confirm"),cancelButtonBackgroundColor:"#fff",confirmButtonBackgroundColor:"#558BED",cancelButtonTextColor:"#323233",confirmButtonTextColor:"#fff"},updateLogoLoading:!1,visible1:!1,visible2:!1,visible3:!1,penaltyList:[],curItem:{}}},computed:{groupInfo:function(){var e,t;return(null===(e=this.$store.state)||void 0===e||null===(t=e.chat)||void 0===t?void 0:t.groupInfo)||{id:"",name:"",nickname:""}},memberCount:function(){var e,t;return null===(e=this.$store.state)||void 0===e||null===(t=e.chat)||void 0===t?void 0:t.memberCount},online:function(){var e;return(null===(e=this.groupInfo)||void 0===e?void 0:e.online_members)||0},total:function(){var e;return(null===(e=this.groupInfo)||void 0===e?void 0:e.total_members)||0},role:function(){if(""===this.$store.state.chat.groupMemberInfo.role||""===this.$store.state.chat.groupMemberInfo.user_role)return"";var e=2===this.$store.state.chat.groupMemberInfo.role?1.5:this.$store.state.chat.groupMemberInfo.role,t=Math.max(e,this.$store.state.chat.groupMemberInfo.user_role);return t},groupId:function(){return this.$store.state.chat.groupId}},watch:{groupId:function(e){e&&this.init()},"$store.state.chat.chatToken":function(e){e&&this.init()}},activated:function(){this.init()},methods:{init:function(){this.resetLoad(),this.getChatGroupIllegal()},getChatGroupIllegal:function(){var e=this;Object(x["Q"])(this.groupId).then((function(t){e.penaltyList=t||[]}))},getChatGroupMember:function(){var e=this;this.loading=!0,Object(x["R"])(this.groupId,this.pageNo,this.pageSize).then((function(t){e.finished=t.length<e.pageSize,0===e.pageNo?e.groupMember=t:e.groupMember=e.groupMember.concat(t),e.pageNo++})).catch((function(){e.error=!0})).finally((function(){setTimeout((function(){e.loading=!1}),1e3)}))},resetLoad:function(){this.pageNo=0,this.loading=!1,this.finished=!1,this.error=!1,this.getChatGroupMember()},onUpdateSlowMode:function(e){this.slowMode=e},formatRole:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",o=2===e.role?1.5:e.role,n=Math.max(o,e.user_role),i={0:{name:"",role:0,color:"#1FD0A3"},1:{name:this.$t("admin"),role:1,color:"#1FD0A3"},1.5:{name:this.$t("projectParty"),role:1.5,color:"#3F80F7"},2:{name:this.$t("inspector"),role:2,color:"#FFC800"},3:{name:this.$t("superAdmin"),role:3,color:"#1FD0A3"}};return i[n][t]},getFile:function(e){var t=this;if(!this.updateLogoLoading){console.log(e);var o=this.$toast.loading({forbidClick:!1,duration:0});this.updateLogoLoading=!0,Object(x["Fc"])(this.groupId,e).then((function(e){console.log(e),t.$toast.success(t.$t("success")),t.$store.dispatch("getChatGroupSettings")})).catch((function(e){console.log(e),t.$toast.fail(e)})).finally((function(){o.clear(),t.updateLogoLoading=!1}))}},handleUpload:function(){document.querySelector(".cropper-group-logo input[type=file]").click()},handleEditName:function(){var e;this.visible1=!0,this.$refs.editName.content=(null===(e=this.groupInfo)||void 0===e?void 0:e.nickname)||""},updateChatGroupNickname:function(e){var t=this;this.$refs.editName.loading=!0,Object(x["Hc"])(this.groupId,e).then((function(e){console.log(e),t.$toast.success(t.$t("success")),t.visible1=!1,t.$store.dispatch("getChatGroupSettings")})).catch((function(e){console.log(e),t.$toast.fail(e)})).finally((function(){t.$refs.editName.loading=!1}))},handleEditDescription:function(){var e;this.visible2=!0,this.$refs.editDescription.content=(null===(e=this.groupInfo)||void 0===e?void 0:e.description)||""},updateChatGroupDescription:function(e){var t=this;this.$refs.editDescription.loading=!0,Object(x["Ec"])(this.groupId,e).then((function(e){console.log(e),t.$toast.success(t.$t("success")),t.visible2=!1,t.$store.dispatch("getChatGroupSettings")})).catch((function(e){console.log(e),t.$toast.fail(e)})).finally((function(){t.$refs.editDescription.loading=!1}))},handleMute:function(e){this.curItem=e,this.visible3=!0},mute:function(e){var t=this;this.$refs.mute.loading=!0;var o=this.curItem;Object(x["Gc"])(this.groupId,o.user_address,o.user_chain,e.user_status,e.banned_expired).then((function(e){e&&(t.$toast.success(t.$t("bannedSuccessfully")),t.visible3=!1,t.resetLoad())})).catch((function(e){console.log(e),t.$toast.fail(e)})).finally((function(){t.$refs.mute.loading=!1}))},handleUnMute:function(e){var t=this;this.$dialog.confirm({message:this.$t("banLifted"),confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then((function(){t.$toast.loading({forbidClick:!0,duration:0}),Object(x["Gc"])(t.groupId,e.user_address,e.user_chain,0).then((function(e){e&&(t.$toast.success(t.$t("unbanSuccessfully")),t.resetLoad())})).catch((function(e){console.log(e),t.$toast.fail(e)})).finally((function(){}))})).catch((function(){}))},goPenaltyInfo:function(){var e;(null===(e=this.penaltyList)||void 0===e?void 0:e.length)>0&&this.$router.push({name:"ChatPenaltyInfo",params:{id:this.groupId}})},leaveChatGroup:function(){var e=this;this.$dialog.confirm({message:this.$t("confirmLeaveChat"),allowHtml:!1,messageAlign:"center",closeOnPopstate:!0,confirmButtonText:this.$t("confirm"),confirmButtonColor:"#3F80F7",cancelButtonText:this.$t("cancel")}).then((function(){var t=e.$toast.loading({forbidClick:!0,duration:0});Object(x["cc"])(e.groupId).then((function(o){t.clear(),e.$store.dispatch("getChatGroupMemberInfo",e.groupId),e.$router.push({name:"Chat",params:{id:e.$route.params.id}})})).catch((function(t){e.$toast({message:t,position:"top"})}))})).catch((function(){e.$store.state.chat.checkAuthVisible=!1}))}}};o("4b36");const T=D()(G,[["render",N],["__scopeId","data-v-59eff5b2"]]);t["default"]=T},e0a6:function(e,t,o){}}]);