(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-378b03ca"],{"0e44":function(t,n,e){var i=e("88dd"),o=e("a013"),a=function(t,n){if(o(t),!i(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,i){try{i=e("01f5")(Function.call,e("acb9").f(Object.prototype,"__proto__").set,2),i(t,[]),n=!(t instanceof Array)}catch(o){n=!0}return function(t,e){return a(t,e),n?t.__proto__=e:i(t,e),t}}({},!1):void 0),check:a}},"23d6":function(t,n,e){},"35fb":function(t,n,e){"use strict";function i(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return i(t)||o(t)||a()}e.d(n,"a",(function(){return r}))},3813:function(t,n,e){"use strict";var i=e("23d6"),o=e.n(i);o.a},"44de":function(t,n,e){var i=e("88dd"),o=e("0e44").set;t.exports=function(t,n,e){var a,r=n.constructor;return r!==e&&"function"==typeof r&&(a=r.prototype)!==e.prototype&&i(a)&&o&&o(t,a),t}},"487c":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("van-pull-refresh",{attrs:{"pulling-text":"不要再拉我啦,生气了哦","loosing-text":"释放本宝宝要刷新了哦","loading-text":"玩命加载中..."},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多数据啦"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},[i("div",{staticClass:"listcontainer"},t._l(t.list,(function(n,o){return i("div",{key:o,staticClass:"listitem"},[i("div",{staticClass:"listitem-time"},[t._v(t._s(t.dayjs(n.createtime).format("YYYY-MM-DD HH:mm:ss")))]),i("div",{staticClass:"listitem-tourists"},[i("div",{staticClass:"listitem-photo"},[i("img",{attrs:{src:e("7584")("./"+n.avater)}})]),i("div",[t._v(t._s(n.touristname))])]),i("div",{staticClass:"triangleleft"}),i("div",{staticClass:"list-content",domProps:{innerHTML:t._s(n.sentence.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi,t.emotion))}}),t._l(n.reply,(function(n,o){return i("div",{key:o,staticClass:"replycontainer"},[i("div",{staticClass:"listitem-time"},[t._v(t._s(t.dayjs(n.createtime).format("YYYY-MM-DD HH:mm:ss")))]),i("div",{staticClass:"listitem-tourists"},[i("div",[t._v("jackie")]),i("div",{staticClass:"listitem-photo"},[i("img",{attrs:{src:e("89bc")}})])]),i("div",{staticClass:"arrowright"},[i("span",{staticClass:"triangleright"})]),i("div",{staticClass:"list-content",domProps:{innerHTML:t._s(n.sentence.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi,t.emotion))}})])}))],2)})),0)])],1),i("div",{staticClass:"inputcontainer"},[i("Emotion",{directives:[{name:"show",rawName:"v-show",value:t.showEmotion,expression:"showEmotion"}],on:{emotion:t.handleEmotion}}),i("van-cell-group",[i("van-field",{attrs:{center:"",clearable:"",placeholder:"请输入你想说的话"},model:{value:t.content,callback:function(n){t.content="string"===typeof n?n.trim():n},expression:"content"}},[i("div",{attrs:{slot:"left-icon"},slot:"left-icon"},[t.avater?i("img",{staticStyle:{width:"30px","border-radius":"50%"},attrs:{src:e("7584")("./"+t.avater),alt:""}}):t._e()]),i("span",{attrs:{slot:"right-icon"},on:{click:function(n){t.showEmotion=!t.showEmotion}},slot:"right-icon"},[i("img",{attrs:{src:"https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/0.gif"}})]),i("van-button",{attrs:{slot:"button",size:"small",type:"primary"},on:{click:t.sendwords},slot:"button"},[t._v("发送")])],1)],1)],1),i("van-dialog",{attrs:{title:"选择头像","show-confirm-button":!1},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[i("van-grid",{attrs:{border:!1,"column-num":3}},t._l(t.avaterList,(function(n,o){return i("van-grid-item",{key:o,class:[t.cAvater===o?"cAvater":""],on:{click:function(e){return t.selectAvater(n,o)}}},[i("van-image",{attrs:{src:e("7584")("./"+n.name),alt:""}})],1)})),1)],1)],1)},o=[],a=(e("34a3"),e("35fb")),r=(e("7364"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"emotion-box",style:{height:t.height+"px"}},t._l(t.list,(function(n,i){return e("div",{key:i,staticClass:"emotion-box-line"},t._l(n,(function(n,i){return e("emotion",{key:i,staticClass:"emotion-item",nativeOn:{click:function(e){return t.clickHandler(n)}}},[t._v(t._s(n))])})),1)})),0)])}),s=[],c=(e("d4d5"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ly-emotion"},[t._t("default")],2)}),l=[],u={name:"ly-emotion",mounted:function(){var t=this,n=this.$el.innerHTML,e=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"],i=e.indexOf(n),o='<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'.concat(i,'.gif">');this.$nextTick((function(){t.$el.innerHTML=o}))}},f=u,p=(e("9f5a"),e("6691")),d=Object(p["a"])(f,c,l,!1,null,"3ef38134",null),m=d.exports,g={props:{height:{type:Number,default:200}},data:function(){return{list:[["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴"],["睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过"]["傲慢"],["饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂"],["疑问","嘘","晕","折磨","衰","骷髅","敲打","再见"],["擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠"],["鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀"],["西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰"],["凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀"],["足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强"],["弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你"],["NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈"],["磕头","回头","跳绳","挥手","激动","街舞","左太极","右太极"]]}},methods:{clickHandler:function(t){var n="#".concat(t,";");this.$emit("emotion",n)}},components:{Emotion:m}},h=g,v=(e("3813"),Object(p["a"])(h,r,s,!1,null,"53638d66",null)),b=v.exports,y={name:"chat",components:{Emotion:b},data:function(){return{keywords:"",list:[],page:1,pageSize:5,isLoading:!1,loading:!1,finished:!1,content:"",type:1,showEmotion:!1,show:!1,cAvater:0,avater:"",touristname:"天线宝宝",avaterList:[{name:"tianxian.jpg"},{name:"boy.png"},{name:"girl.jpg"},{name:"jie.jpg"},{name:"meng.jpg"},{name:"tiao.png"}]}},methods:{selectAvater:function(t,n){this.cAvater=n,this.avater=t.name,this.show=!1},sendwords:function(){var t=this;this.avater?this.content&&this.$http.post("/pc/addcomments",{touristname:this.touristname,type:this.type,sentence:this.content,avater:this.avater}).then((function(n){t.content="",t.onRefresh()})):this.show=!0},onRefresh:function(){var t=this;this.page=1,this.$http.get("/pc/readcomments",{params:{keywords:this.keywords,page:this.page,pageSize:this.pageSize}}).then((function(n){t.list=n.data,t.isLoading=!1,t.finished=n.count===t.list.length,t.page++}))},onLoad:function(){var t=this;this.$http.get("/pc/readcomments",{params:{keywords:this.keywords,page:this.page,pageSize:this.pageSize}}).then((function(n){t.list=[].concat(Object(a["a"])(t.list),Object(a["a"])(n.data)),t.loading=!1,t.finished=n.count===t.list.length,t.page++}))},handleEmotion:function(t){this.content+=t},emotion:function(t){var n=t.replace(/\#|\;/gi,""),e=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"],i=e.indexOf(n);return'<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'.concat(i,'.gif" align="middle">')}}},_=y,w=(e("addc"),Object(p["a"])(_,i,o,!1,null,"0ccf9808",null));n["default"]=w.exports},"539d":function(t,n,e){var i=e("b2f5"),o=e("f01a"),a=e("b6f1"),r=e("c9ea4"),s="["+r+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(t,n,e){var o={},s=a((function(){return!!r[t]()||c[t]()!=c})),l=o[t]=s?n(p):r[t];e&&(o[e]=l),i(i.P+i.F*s,"String",o)},p=f.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(l,"")),2&n&&(t=t.replace(u,"")),t};t.exports=f},7364:function(t,n,e){var i=e("ddf7").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in o||e("dad2")&&i(o,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},7584:function(t,n,e){var i={"./boy.png":"980c","./girl.jpg":"8889","./jie.jpg":"ba43","./me.png":"89bc","./meng.jpg":"f97f","./tianxian.jpg":"8331","./tiao.png":"7d3f"};function o(t){var n=a(t);return e(n)}function a(t){if(!e.o(i,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id="7584"},7617:function(t,n,e){},"7d3f":function(t,n,e){t.exports=e.p+"img/tiao.3e4a67f9.png"},8331:function(t,n,e){t.exports=e.p+"img/tianxian.6c7b966e.jpg"},8889:function(t,n,e){t.exports=e.p+"img/girl.76ae5538.jpg"},"89bc":function(t,n,e){t.exports=e.p+"img/me.39b106a2.png"},"980c":function(t,n,e){t.exports=e.p+"img/boy.e3de3d45.png"},"9f5a":function(t,n,e){"use strict";var i=e("f7d2"),o=e.n(i);o.a},addc:function(t,n,e){"use strict";var i=e("7617"),o=e.n(i);o.a},ba43:function(t,n,e){t.exports=e.p+"img/jie.db3bc06c.jpg"},c9ea4:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},d4d5:function(t,n,e){"use strict";var i=e("3754"),o=e("03b3"),a=e("94ac"),r=e("44de"),s=e("5325"),c=e("b6f1"),l=e("a891").f,u=e("acb9").f,f=e("ddf7").f,p=e("539d").trim,d="Number",m=i[d],g=m,h=m.prototype,v=a(e("a7b8")(h))==d,b="trim"in String.prototype,y=function(t){var n=s(t,!1);if("string"==typeof n&&n.length>2){n=b?n.trim():p(n,3);var e,i,o,a=n.charCodeAt(0);if(43===a||45===a){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+n}for(var r,c=n.slice(2),l=0,u=c.length;l<u;l++)if(r=c.charCodeAt(l),r<48||r>o)return NaN;return parseInt(c,i)}}return+n};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof m&&(v?c((function(){h.valueOf.call(e)})):a(e)!=d)?r(new g(y(n)),e,m):y(n)};for(var _,w=e("dad2")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;w.length>x;x++)o(g,_=w[x])&&!o(m,_)&&f(m,_,u(g,_));m.prototype=h,h.constructor=m,e("e5ef")(i,d,m)}},f7d2:function(t,n,e){},f97f:function(t,n,e){t.exports=e.p+"img/meng.ad6235f8.jpg"}}]);