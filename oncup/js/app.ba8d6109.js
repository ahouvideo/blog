(function(e){function n(n){for(var t,c,r=n[0],o=n[1],d=n[2],f=0,h=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&h.push(u[c][0]),u[c]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);i&&i(n);while(h.length)h.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,n=0;n<s.length;n++){for(var a=s[n],t=!0,c=1;c<a.length;c++){var r=a[c];0!==u[r]&&(t=!1)}t&&(s.splice(n--,1),e=o(o.s=a[0]))}return e}var t={},c={app:0},u={app:0},s=[];function r(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-06ad056e":"d245dc64","chunk-0a2d9c51":"60c17e8e","chunk-135d022f":"87bd147b","chunk-1a89d8a8":"706b68e4","chunk-21a0b482":"b4b12f02","chunk-2da7efac":"903ccc9e","chunk-31bff5bb":"874efe2d","chunk-365e205e":"fe5f001f","chunk-414ce662":"54ebbb64","chunk-41b4a408":"4a2c6c82","chunk-46fe4a0a":"c173a7ec","chunk-477cdcde":"814fd83b","chunk-50c9151c":"de2356db","chunk-542db296":"43af7355","chunk-5936c790":"ec96fe0b","chunk-5d508054":"cf8c8b4b","chunk-70bdbfdd":"786608c4","chunk-7d0ce65d":"215e37e5","chunk-7fb3c080":"aa729322","chunk-a0e54330":"b9dccc0d"}[e]+".js"}function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var n=[],a={"chunk-06ad056e":1,"chunk-0a2d9c51":1,"chunk-135d022f":1,"chunk-1a89d8a8":1,"chunk-21a0b482":1,"chunk-2da7efac":1,"chunk-31bff5bb":1,"chunk-365e205e":1,"chunk-414ce662":1,"chunk-41b4a408":1,"chunk-477cdcde":1,"chunk-50c9151c":1,"chunk-542db296":1,"chunk-5936c790":1,"chunk-5d508054":1,"chunk-70bdbfdd":1,"chunk-7d0ce65d":1,"chunk-7fb3c080":1,"chunk-a0e54330":1};c[e]?n.push(c[e]):0!==c[e]&&a[e]&&n.push(c[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-06ad056e":"a239a289","chunk-0a2d9c51":"d7a64cf0","chunk-135d022f":"d7a64cf0","chunk-1a89d8a8":"a8276939","chunk-21a0b482":"e6375fd9","chunk-2da7efac":"2a08d2df","chunk-31bff5bb":"91874d7e","chunk-365e205e":"30adc81d","chunk-414ce662":"f65fe7fa","chunk-41b4a408":"cf60eb53","chunk-46fe4a0a":"31d6cfe0","chunk-477cdcde":"a7e5a7a9","chunk-50c9151c":"426ba6be","chunk-542db296":"a5ac68af","chunk-5936c790":"d5ec94ac","chunk-5d508054":"9318856a","chunk-70bdbfdd":"efc5bf6f","chunk-7d0ce65d":"bc070164","chunk-7fb3c080":"c6a52fed","chunk-a0e54330":"30adc81d"}[e]+".css",u=o.p+t,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var d=s[r],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===t||f===u))return n()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){d=h[r],f=d.getAttribute("data-href");if(f===t||f===u)return n()}var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onload=n,i.onerror=function(n){var t=n&&n.target&&n.target.src||u,s=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=t,delete c[e],i.parentNode.removeChild(i),a(s)},i.href=u;var b=document.getElementsByTagName("head")[0];b.appendChild(i)})).then((function(){c[e]=0})));var t=u[e];if(0!==t)if(t)n.push(t[2]);else{var s=new Promise((function(n,a){t=u[e]=[n,a]}));n.push(t[2]=s);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.src=r(e);var h=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(i);var a=u[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",h.name="ChunkLoadError",h.type=t,h.request=c,a[1](h)}u[e]=void 0}};var i=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,a){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(a,t,function(n){return e[n]}.bind(null,t));return a},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var i=f;s.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"0746":function(e,n,a){},2395:function(e,n,a){},4678:function(e,n,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=u(e);return a(n)}function u(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=u,e.exports=c,c.id="4678"},"56d7":function(e,n,a){"use strict";a.r(n);a("4de4"),a("fb6a"),a("5246");var t=a("6b41"),c=(a("38d5"),a("772a")),u=(a("be7f"),a("565f")),s=(a("66b9"),a("b650")),r=(a("e7e5"),a("d399")),o=(a("537a"),a("ac28")),d=(a("a52c"),a("2ed4")),f=(a("7844"),a("5596")),h=(a("4b0a"),a("2bb1")),i=(a("66cf"),a("343b")),b=(a("91d5"),a("f0ca")),l=(a("f06a"),a("20fb")),p=(a("93ac"),a("bb33")),j=(a("591c"),a("7713")),m=(a("ef6f"),a("82a8")),k=(a("4467"),a("c36e")),y=(a("c194"),a("7744")),v=(a("0653"),a("34e9")),g=(a("3c32"),a("417e")),w=(a("be39"),a("efa0")),z=(a("869a"),a("6869")),S=(a("2994"),a("2bdd")),O=(a("acb7"),a("67bb")),x=(a("29ea"),a("df1a")),C=(a("8a58"),a("e41f")),E=(a("bda7"),a("5e46")),P=(a("da3c"),a("0b33")),_=(a("c3a6"),a("ad06")),A=(a("e930"),a("8f80")),M=(a("d356"),a("48bd")),T=(a("5852"),a("d961")),L=(a("480b"),a("a37c")),N=(a("e17f"),a("2241")),D=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),q=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},B=[],F=(a("7c55"),a("2877")),U={},Y=Object(F["a"])(U,q,B,!1,null,null,null),R=Y.exports,H=a("8c4f"),J=[{path:"/register",name:"Register",component:function(e){return a.e("chunk-1a89d8a8").then(function(){var n=[a("73cf")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/login",name:"Login",component:function(e){return a.e("chunk-21a0b482").then(function(){var n=[a("a55b")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/main",name:"Main",component:function(e){return a.e("chunk-7fb3c080").then(function(){var n=[a("cd56")];e.apply(null,n)}.bind(this)).catch(a.oe)},children:[{path:"home",name:"Home",component:function(e){return a.e("chunk-7d0ce65d").then(function(){var n=[a("b611")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"menu",name:"Menu",component:function(e){return a.e("chunk-50c9151c").then(function(){var n=[a("da40")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"cart",name:"Cart",component:function(e){return a.e("chunk-414ce662").then(function(){var n=[a("7031")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"my",name:"My",component:function(e){return a.e("chunk-542db296").then(function(){var n=[a("c3451")];e.apply(null,n)}.bind(this)).catch(a.oe)}}]},{path:"order",name:"Order",component:function(e){return a.e("chunk-365e205e").then(function(){var n=[a("dbf5")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/address/:aid?",name:"Address",component:function(e){return a.e("chunk-46fe4a0a").then(function(){var n=[a("a821")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/myaddress",name:"Myaddress",component:function(e){return a.e("chunk-0a2d9c51").then(function(){var n=[a("9d1b")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/details",name:"Details",component:function(e){return a.e("chunk-70bdbfdd").then(function(){var n=[a("9f52")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/pay",name:"Pay",component:function(e){return a.e("chunk-5936c790").then(function(){var n=[a("76a1")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/myAccount",name:"myAccount",component:function(e){return a.e("chunk-477cdcde").then(function(){var n=[a("e5b2")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/mycollect",name:"myCollect",component:function(e){return a.e("chunk-2da7efac").then(function(){var n=[a("4e00")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/myLists",name:"myLists",component:function(e){return a.e("chunk-a0e54330").then(function(){var n=[a("ec87")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/myAaddress",name:"myAaddress",component:function(e){return a.e("chunk-135d022f").then(function(){var n=[a("818f")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/mysecure",name:"mySecure",component:function(e){return a.e("chunk-31bff5bb").then(function(){var n=[a("ab1b")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/guide",name:"guide",component:function(e){return a.e("chunk-06ad056e").then(function(){var n=[a("231f")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/adv",name:"adv",component:function(e){return a.e("chunk-5d508054").then(function(){var n=[a("273c")];e.apply(null,n)}.bind(this)).catch(a.oe)},beforeEnter:function(e,n,a){localStorage.advertise?a():(localStorage.advertise=!0,a("/guide"))}},{path:"/search",name:"Search",component:function(e){return a.e("chunk-41b4a408").then(function(){var n=[a("44e1")];e.apply(null,n)}.bind(this)).catch(a.oe)}},{path:"/",redirect:"/adv"}];D["a"].use(H["a"]);var V=H["a"].prototype.push;H["a"].prototype.push=function(e){return V.call(this,e).catch((function(e){return e}))};var $=new H["a"]({routes:J}),G=a("2f62"),I={bannerState:[],asideState:[],productsState:{},height:0},K={changeData:function(e,n){e[n.key]=n.value},changeProducts:function(e,n){e.productsState[n.type]=n.value}},Q={namespaced:!0,state:I,mutations:K};D["a"].use(G["b"]);var W=new G["b"].Store({state:{bottomTabbar:!0},modules:{menuModule:Q}}),X=(a("1f54"),a("0746"),a("bbe3"),a("c1df")),Z=a.n(X),ee=(a("499a"),a("bc3a")),ne=a.n(ee),ae=a("a7fe"),te=a.n(ae);D["a"].filter("dateFormat",(function(e){return Z()(e).format("YYYY-MM-DD hh:mm:ss")})),D["a"].use(t["a"]).use(c["a"]).use(u["a"]).use(s["a"]).use(r["a"]).use(o["a"]).use(d["a"]).use(f["a"]).use(h["a"]).use(i["a"]).use(b["a"]).use(l["a"]).use(p["a"]).use(j["a"]).use(m["a"]).use(k["a"]).use(y["a"]).use(v["a"]).use(g["a"]).use(w["a"]).use(z["a"]).use(S["a"]).use(O["a"]).use(x["a"]).use(C["a"]).use(E["a"]).use(P["a"]).use(_["a"]).use(A["a"]).use(M["a"]).use(T["a"]).use(L["a"]).use(N["a"]),D["a"].use(te.a,ne.a),ne.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",ne.a.interceptors.request.use((function(e){if("post"==e.method){var n="";for(var a in e.data)n+=a+"="+e.data[a]+"&";e.data=n.slice(0,-1)}return e})),D["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",ne.a.defaults.baseURL="http://www.kangliuyong.com:10002",D["a"].config.productionTip=!1,new D["a"]({router:$,store:W,render:function(e){return e(R)}}).$mount("#app")},"7c55":function(e,n,a){"use strict";var t=a("2395"),c=a.n(t);c.a}});
//# sourceMappingURL=app.ba8d6109.js.map