(this["webpackJsonpcra-space"]=this["webpackJsonpcra-space"]||[]).push([[0],{132:function(e,t,n){e.exports={scope:"AnimatableRoutes_scope__1Guik"}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return g}));var r=n(66),a=n(12),c=n(0),i=n.n(c),o=n(57),u=n(51),s=n(86),l=n(87),p=n(163),f=n(136),d=n(74),b=n(121),h=n(16),m=n(75),v=0;function y(e,t){for(var n=arguments.length,c=new Array(n>2?n-2:0),o=2;o<n;o++)c[o-2]=arguments[o];var f=i.a.useMemo((function(){return new s.a(1)}),[]),y=i.a.useMemo(t,[t]),j=i.a.useMemo((function(){return c.map((function(){return new l.a(null)}))}),[c]),O=i.a.useState(y.initialState),g=Object(a.a)(O,2),_=g[0],w=g[1],x=i.a.useMemo((function(){var t=Object(u.d)(e,Object.assign(Object.assign({},y),{name:y.name+"."+v++}));e.sliceStore(t).pipe(d.a(),b.b(p.a),h.a((function(e){return w(e)})),m.a(f)).subscribe();var n,a=Object(r.a)(j);try{for(a.s();!(n=a.n()).done;){var i=n.value;t.addEpic$(i)}}catch(o){a.e(o)}finally{a.f()}return c.forEach((function(e,t){return j[t].next(e)})),t}),[]);return i.a.useEffect((function(){c.forEach((function(e,t){return j[t].next(e)}))}),c),i.a.useEffect((function(){return function(){f.next(),f.complete(),x.destroy()}}),[]),[_,x]}function j(e,t){var n=i.a.useCallback((function(){var t=e();return Object.assign(Object.assign({},t),{reducers:O(t.reducers)})}),[]);Object(c.useEffect)((function(){s[1].actionDispatcher._syncComponentProps(t)}),Object.values(t)),Object(c.useEffect)((function(){return function(){s[1].actionDispatcher._willUnmount()}}),[]);for(var r=arguments.length,a=new Array(r>2?r-2:0),u=2;u<r;u++)a[u-2]=arguments[u];var s=y.apply(void 0,[o.a,n].concat(a));return s}function O(e){return Object.assign({_syncComponentProps:function(e,t){var n=t.payload;e.componentProps=Object.assign({},n)},_willUnmount:function(e){}},e)}function g(e){var t=Object(c.useState)(void 0),n=Object(a.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){e.store$.subscribe({next:function(e){i(e)}})}),[e.store$]),r}var _=Object(u.c)({hellow:function(e,t){}});Object(u.d)(o.a,{name:"_internal_",initialState:{},reducers:O(_)}).addEpic((function(e){return function(t){e.actionDispatcher._willUnmount();var n=Object(u.b)(e.actions,t);return f.a(n.hellow,n._syncComponentProps)}}))},152:function(e,t,n){},153:function(e,t,n){e.exports={MediaMatch:"MediaMatch_MediaMatch__J4SRp"}},166:function(e,t,n){},181:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);n(166),n(167);var r=n(17),a=n(66),c=n(12),i=n(0),o=n.n(i),u=n(29),s=n.n(u),l=n(132),p=n.n(l),f=n(35),d=n.n(f),b=n(64),h=n(63),m=n.n(h),v=n(22),y=n.n(v),j=n(73),O=n.n(j),g=n(79),_=n(78),w=n(188),x=n(197),S=n(198),E=n(161),D=n(189),R=n(199),L=n(164),k=n(138),C=n(1),T=m.a.bind(O.a),N=0,A={setBaseOptions:function(e,t){Object.assign(e,t)},contentRerendered:function(e,t){if(e.keyOfEntering&&e.contentByKey[e.keyOfEntering])e.contentByKey[e.keyOfEntering]=Object(r.a)(Object(r.a)({},e.contentByKey[e.keyOfEntering]),{},{renderable:t});else if(e.contentKeys.length>0){var n=e.contentKeys[e.contentKeys.length-1];e.contentByKey[n]=Object(r.a)(Object(r.a)({},e.contentByKey[n]),{},{renderable:t})}return Object(r.a)({},e)},switchContent:function(e,t){},enterStart:function(e,t){var n=""+N++;e.keyOfEntering=n,e.contentByKey[n]={renderable:t.node,key:n,clsName:t.anim?T("enterStart"):"",onContainerReady:function(t){t&&(e.contentByKey[n]=Object(r.a)(Object(r.a)({},e.contentByKey[n]),{},{dom:t}))}},Object.freeze(e.contentByKey[n]),e.contentKeys.push(n)},leaving:function(e){if(e.contentKeys.length>1){e.keyOfLeaving=e.contentKeys[0];var t=e.contentByKey[e.keyOfLeaving];if(t.clsName=O.a.leaving,t.dom){var n=t.dom.style;n.width=t.dom.clientWidth+"px",n.height=t.dom.clientHeight+"px",n.top="0px",n.left="0px"}}return e},entering:function(e){return e.contentByKey[e.keyOfEntering].clsName=T("enterStart","entering"),Object(r.a)({},e)},removeOldContent:function(e){if(e.keyOfLeaving){var t=e.keyOfLeaving;delete e.contentByKey[t];var n=e.contentKeys.indexOf(t);e.contentKeys.splice(n,1),e.keyOfLeaving=void 0}return Object(r.a)({},e)},switchContentDone:function(e){return e.contentByKey[e.keyOfEntering].clsName="",e.keyOfEntering=void 0,Object(r.a)({},e)}},B=function(e,t){return function(n,r){return L.a(n.pipe(t("switchContent"),w.a((function(e){var a=e.payload;return null!=r.getValue().keyOfEntering?n.pipe(t("switchContentDone"),x.a(1),S.a(a)):k.a(a)})),E.a((function(t){var n=r.getValue().contentKeys.length>0;e.actionDispatcher.enterStart({node:t,anim:r.getValue().animFirstContent||n})})),D.a()),n.pipe(Object(g.c)(e.actions.enterStart),R.a(function(){var t=Object(b.a)(d.a.mark((function t(n){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.type,n.payload,(a=r.getValue().contentKeys.length>0)&&(e.actionDispatcher.leaving(),setTimeout((function(){e.actionDispatcher.removeOldContent()}),400)),!r.getValue().animFirstContent&&!a){t.next=11;break}return c=r.getValue().type,t.next=7,new Promise((function(e){return setTimeout(e,"translateY"===c||null==c?200:20)}));case 7:return e.actionDispatcher.entering(),t.next=10,new Promise((function(e){return setTimeout(e,400)}));case 10:e.actionDispatcher.switchContentDone();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),D.a()))}},P=function(e){var t=Object(_.a)((function(){return{name:"SwitchAnim",initialState:{size:"fit",contentKeys:[],contentByKey:{}},reducers:A,debug:!!e.debug}}),B),n=Object(c.a)(t,2),r=n[0],a=n[1];o.a.useEffect((function(){e.children&&a&&a.actionDispatcher.switchContent(e.children)}),[e.contentHash,a]),o.a.useEffect((function(){e.children&&a&&a.actionDispatcher.contentRerendered(e.children)}),[e.children,a]),o.a.useEffect((function(){a&&a.actionDispatcher.setBaseOptions(e)}),[e.animFirstContent,e.size,a,e.type,e.className]),o.a.useEffect((function(){e.parentDom&&(e.parentDom.className=s()(e.parentDom.className,O.a.scope,null==e.size?"fit":O.a[e.size]))}),[e.parentDom,e.size]);var i=r.contentKeys.map((function(e,t){var n=r.contentByKey[e];return Object(C.jsx)("div",{className:y()(O.a.movingBox,n.clsName),ref:n.onContainerReady,children:n.renderable},e)})),u=y()(e.className||"",T(null==e.size?"fit":e.size,"scope","opacity"===e.type?"animate-opacity":""));return null!=e.parentDom?Object(C.jsx)(C.Fragment,{children:i}):Object(C.jsx)("div",{className:u,children:i})},M=n(11),K=n(46),$=o.a.createContext(null),z=function(e,t){return t.payload(e)},V=function(e){var t=o.a.useReducer(z,{matchedIdx:void 0,routeMatch:null}),n=Object(c.a)(t,2),i=n[0],u=n[1],l=Object(M.f)(),f=o.a.useRef(null),d=Object(K.d)();o.a.useEffect((function(){var t,n=0,c=!1,i=Object(a.a)(e.routes);try{var o=function(){var e=t.value,a=Object(M.e)(l.pathname,e);if(a){var i=n;return u({type:"setMatched",payload:function(e){return Object(r.a)(Object(r.a)({},e),{},{matchedIdx:i,routeMatch:a})}}),c=!0,"break"}n++};for(i.s();!(t=i.n()).done;){if("break"===o())break}}catch(s){i.e(s)}finally{i.f()}c||u({type:"clearMatchedIdx",payload:function(e){return Object(r.a)(Object(r.a)({},e),{},{matchedIdx:void 0,routeMatch:null})}})}),[l.pathname,e.routes]),o.a.useEffect((function(){null!=i.matchedIdx&&d&&d.actionDispatcher.scrollTo([0,0])}),[d,i.matchedIdx]),o.a.useEffect((function(){e.parentDom&&(e.parentDom.className=s()(e.parentDom.className,p.a.scope,e.className))}),[e.className,e.parentDom]);var b=Object(C.jsx)($.Provider,{value:i.routeMatch,children:null!=i.matchedIdx?Object(C.jsx)(P,{debug:!1,size:"full",parentDom:null==e.parentDom?f.current:e.parentDom,contentHash:i.matchedIdx,children:e.routes[i.matchedIdx].children}):e.children?e.children:Object(C.jsx)(C.Fragment,{})});return e.parentDom?b:Object(C.jsx)("div",{ref:f,className:s()(p.a.scope,e.className),children:b})};var H=n(58),I=n.n(H),F=n(152),W=n.n(F),U=n(200),q=n(191),J=n(180),Y=m.a.bind(W.a),G={standard:{header:"",main:"mdc-top-app-bar--fixed-adjust"},fixed:{header:"mdc-top-app-bar--fixed",main:"mdc-top-app-bar--fixed-adjust"},prominent:{header:"mdc-top-app-bar--prominent",main:"mdc-top-app-bar--prominent-fixed-adjust"},dense:{header:"mdc-top-app-bar--dense",main:"mdc-top-app-bar--dense-fixed-adjust"},short:{header:"mdc-top-app-bar--short",main:"mdc-top-app-bar--short-fixed-adjust"}},Q=function(e,t){var n=o.a.useMemo((function(){return new q.a(null)}),[]),r=o.a.useCallback((function(t){if(e._onHeaderRef&&e._onHeaderRef(t),null!=t){var r=new U.a(t);n.next(r),e.getMdcRef&&e.getMdcRef(r)}else n.getValue()&&(n.getValue().destroy(),n.next(null))}),[]);o.a.useImperativeHandle(t,(function(){return n.pipe(J.a((function(e){return null!=e})),x.a(1)).toPromise()}),[n]),o.a.useEffect((function(){return function(){n.getValue()&&n.getValue().destroy()}}),[n]);var a=e.type?G[e.type].header:G.standard.header,c=e.type?G[e.type].main:G.standard.main;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("header",{className:y()(e.classNameHeader||"",Y("mdc-top-app-bar",a)),ref:r,children:[Object(C.jsxs)("div",{className:"mdc-top-app-bar__row",children:[Object(C.jsxs)("section",{className:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start",children:[e.left||null,Object(C.jsx)("span",{className:"mdc-top-app-bar__title",children:Object(C.jsx)(P,{type:"opacity",contentHash:e.title,children:e.title})})]}),Object(C.jsx)("section",{className:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",role:"toolbar",children:e.right||null})]}),e.belowHeader?e.belowHeader:null]}),e.renderMain?e.renderMain(y()(e.classNameMain||"",Y(c))):Object(C.jsx)("main",{className:y()(e.classNameMain||"",Y(c)),children:e.children})]})},Z=o.a.forwardRef(Q),X=n(201),ee=(n(181),n(192)),te=function(e,t){var n=o.a.useMemo((function(){return new ee.a(1)}),[]),r=o.a.useCallback((function(e){if(e){var t=new X.a(e);n.next(t)}}),[]);return o.a.useEffect((function(){return function(){n.pipe(E.a((function(e){return e.destroy()})),x.a(1)).subscribe()}}),[]),o.a.useImperativeHandle(t,(function(){return n.pipe(x.a(1)).toPromise()})),o.a.useEffect((function(){n.subscribe({next:function(t){t.determinate=!!e.determinate}})}),[e.determinate]),o.a.useEffect((function(){n.subscribe({next:function(t){e.open?t.open():t.close()}})}),[e.open]),Object(C.jsxs)("div",{ref:r,className:y()(e.className,"LinearProgress","mdc-linear-progress"),role:"progressbar","aria-label":"Progress Bar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":0,children:[Object(C.jsxs)("div",{className:"mdc-linear-progress__buffer",children:[Object(C.jsx)("div",{className:"mdc-linear-progress__buffer-bar"}),Object(C.jsx)("div",{className:"mdc-linear-progress__buffer-dots"})]}),Object(C.jsx)("div",{className:"mdc-linear-progress__bar mdc-linear-progress__primary-bar",children:Object(C.jsx)("span",{className:"mdc-linear-progress__bar-inner"})}),Object(C.jsx)("div",{className:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar",children:Object(C.jsx)("span",{className:"mdc-linear-progress__bar-inner"})})]})},ne=o.a.forwardRef(te),re=n(92),ae=n(165),ce=n(202),ie=n(153),oe=n.n(ie),ue=function(e){var t=o.a.useRef(null);return o.a.useEffect((function(){var n=new re.a,r=n.pipe(ce.a(500),R.a((function(){return ae.a(20).pipe(x.a(1))})),E.a((function(){if(t.current){var n=window.getComputedStyle(t.current,"::before").content;e.onChange(n.replace(/^["']|["']$/g,""))}}))).subscribe();function a(){n.next()}return window.addEventListener("resize",a),a(),function(){window.removeEventListener("resize",a),r.unsubscribe()}}),[e.onChange]),Object(C.jsx)("div",{ref:t,className:oe.a.MediaMatch})},se=(n(178),m.a.bind(I.a)),le=function(e){var t=o.a.useRef(null),n=o.a.useMemo((function(){return new re.a}),[]),r=Object(_.a)(K.c,K.b),a=Object(c.a)(r,2),i=a[0],u=a[1];o.a.useEffect((function(){e.parentDom&&(e.parentDom.className=s()(e.className||void 0,se("container"),e.parentDom.className))}),[e.parentDom,e.className]),o.a.useEffect((function(){t.current&&(t.current.className=s()(e.className||void 0,se("container"),t.current.className))}),[t.current,e.className]);var l=o.a.useCallback((function(e){n.next(e)}),[n]);o.a.useEffect((function(){var e=n.pipe(ce.a(300,void 0,{trailing:!0}),E.a((function(e){return u.actionDispatcher._onScroll(e)}))).subscribe();return function(){return e.unsubscribe()}}),[n,u.actionDispatcher]);var p=Object(C.jsx)(Z,{ref:u.actionDispatcher._setTopBarRef,classNameHeader:se("app-bar-header",i.frontLayerClassName),classNameMain:se("app-bar-main"),title:i.barTitle,type:i.topAppBarType,renderMain:function(t){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:y()(I.a.backLayer,"mdc-layout-size-"+i.deviceSize),children:[Object(C.jsx)("div",{className:I.a.progressBarContainer,ref:u.actionDispatcher._setLoadingBarRef,children:Object(C.jsx)(ne,{className:I.a.routeProgressBar,determinate:!1,open:i.showTopLoading})}),Object(C.jsxs)("div",{ref:u.actionDispatcher._setFrontLayerRef,className:y()(I.a.frontLayer,t),onScroll:l,children:[e.children,Object(C.jsx)("footer",{className:I.a.footer,children:i.footer})]})]})})},_onHeaderRef:u.actionDispatcher._setTopAppBarDomRef});return Object(C.jsxs)(K.a.Provider,{value:u,children:[Object(C.jsx)(ue,{onChange:u.actionDispatcher._setDeviceSize}),null==e.parentDom?Object(C.jsx)("div",{className:e.className||void 0,ref:t,children:p}):p]})},pe=n(137),fe=n(57),de=n(81),be=n.n(de),he=n(149),me=n(128),ve=n(157),ye=function(e){var t=Object(K.d)();return o.a.useEffect((function(){return t&&t.actionDispatcher.setLoadingVisible(!0),function(){t&&t.actionDispatcher.setLoadingVisible(!1)}}),[t]),Object(C.jsx)(C.Fragment,{})},je=Object(ve.a)(Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.bind(null,234));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)}))),{fallback:Object(C.jsx)(ye,{})}),Oe=[{path:"/",children:Object(C.jsx)(je,{})}],ge=document.getElementById("root");/\WWindows\W/.test(navigator.userAgent)&&(document.body.className=s()(document.body.className,"is-windows"));var _e=function(){return Object(C.jsx)(le,{parentDom:ge,children:Object(C.jsx)(me.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1,REACT_APP_cra_build:'{"cmd":"cra-build","buildType":"app","buildTarget":"@wfh/aw-main","watch":false,"devMode":false,"includes":[],"webpackEnv":"production"}'}).REACT_APP_routeBasename,children:Object(C.jsx)(V,{routes:Oe,children:Object(C.jsx)(M.c,{children:Object(C.jsx)(M.a,{from:"/",exact:!0,to:"/"})})})})})};fe.a.configureStore();var we=function(){var e=Object(pe.b)(fe.a);return null==e?Object(C.jsx)(C.Fragment,{}):Object(C.jsx)(he.a,{store:e,children:Object(C.jsx)(_e,{})})};var xe,Se=document.getElementById("root");xe=Se,be.a.render(Object(C.jsx)(we,{}),xe)},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return _}));var r=n(35),a=n.n(r),c=n(64),i=n(79),o=n(161),u=n(188),s=n(61),l=n(162),p=n(180),f=n(84),d=n(189),b=n(164),h=n(165),m=n(0),v=n.n(m),y=v.a.createContext(null);function j(){return v.a.useContext(y)}var O={updateBarTitle:function(e,t){e.barTitle=t?t.toUpperCase():""},updateFooter:function(e,t){e.footer=t},setLoadingVisible:function(e,t){t?e.showTopLoadingReqsCount++:!t&&e.showTopLoadingReqsCount>0&&e.showTopLoadingReqsCount--},scrollTo:function(e,t){},_setLoadingVisible:function(e,t){e.showTopLoading=t},_setFrontLayerRef:function(e,t){t&&(e.frontLayer=t)},_setTopBarRef:function(e,t){e.topAppBarRef=t},_onScroll:function(e,t){e.frontLayer&&e.topAppBarDomRef&&e.frontLayer.scrollTop+e.topAppBarDomRef.getBoundingClientRect().top>1?e.frontLayerClassName="withShadow":e.frontLayerClassName=""},_setLoadingBarRef:function(e,t){t&&(e.topLoadingBarRef=t)},_setDeviceSize:function(e,t){e.deviceSize=t},_setTopbarType:function(e,t){e.topAppBarType=t},_setTopAppBarDomRef:function(e,t){e.topAppBarDomRef=t}};function g(){return{name:"AppLayout",initialState:{showTopLoading:!1,frontLayerClassName:"",showTopLoadingReqsCount:0,deviceSize:"phone"},reducers:O,debug:!1}}var _=function(e,t){return function(t,n){var r=Object(i.a)(e.actions,t);return b.a(r._setDeviceSize.pipe(o.a((function(t){var n=t.payload;e.actionDispatcher._setTopbarType("desktop"===n?"standard":"dense")}))),r.scrollTo.pipe(u.a((function(t){var n,r=t.payload;return null===(n=e.getState().frontLayer)||void 0===n||n.scrollTo(r[0],r[1]),h.a(0)})),s.a((function(){e.actionDispatcher._onScroll(null)}))),n.pipe(s.a((function(e){return e.showTopLoadingReqsCount})),l.a(),o.a((function(t){t>0?e.actionDispatcher._setLoadingVisible(!0):t<=0&&e.actionDispatcher._setLoadingVisible(!1)}))),n.pipe(l.a((function(e,t){return e.topAppBarRef===t.topAppBarRef&&e.frontLayer===t.frontLayer})),p.a((function(e){return null!=e.frontLayer&&null!=e.topAppBarRef})),f.a(function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.topAppBarRef;case 2:e.sent.setScrollTarget(t.frontLayer);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))).pipe(d.a())}}},51:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"a",(function(){return w}));var r=n(118),a=n(119),c=n(12),i=n(27),o=n(4),u=n(25),s=n(122),l=n(158),p=n(16),f=n(160),d=n(74),b=n(123),h=n(75),m=n(159),v=n(39),y=n(14);function j(e,t){var n=e.newSlice(t),r=e.bindActionCreators(n),a=new i.a,c=new i.a;function l(n){var r=n.pipe(d.a(),b.a((function(n){if(n){var r=n(m);if(r)return new o.a((function(){return e.addEpic(r,t.name)}))}return u.a})),h.a(a)).subscribe();return function(){return r.unsubscribe()}}new o.a((function(){return e.addEpic((function(e){return e.pipe(p.a((function(e){return c.next(e)})),f.a())}),t.name)})).subscribe();var m=Object.assign(Object.assign({},n),{action$:c.asObservable(),actionDispatcher:r,addEpic:function(e){return l(Object(s.a)(e))},addEpic$:l,destroy$:a.asObservable(),destroy:function(){a.next(),a.complete(),e.removeSlice(n)},getStore:function(){return e.sliceStore(n)},getState:function(){return e.sliceState(n)}});return m}function O(e){for(var t={},n=function(){var e=Object(c.a)(a[r],2),n=e[0],i=e[1];t[n]=function(e,t){var n=t.payload;return i(e,n)}},r=0,a=Object.entries(e);r<a.length;r++)n();return t}function g(e,t){for(var n,r=0,a={},c={},o=function(){var t=s[u],o=a[e[t].type]=new i.a;c[t]=Object(l.a)((function(){return 0===r++&&(n=p.subscribe()),o.asObservable()})).pipe(m.a((function(){0===--r&&n&&(n.unsubscribe(),n=void 0)})))},u=0,s=Object.keys(e);u<s.length;u++)o();var p=t.pipe(v.a((function(e){var t=a[e.type];t&&t.next(e)})));return c}function _(e,t){return e.type===t.type}var w=function(){function e(t){Object(r.a)(this,e),this.ref=t,Object.freeze(this)}return Object(a.a)(e,[{key:"creatNewIfNoEqual",value:function(t){return this.ref!==t?new e(t):this}},{key:"getRef",value:function(){return this.ref}}]),e}();w[y.e]=!1},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(34),a=n(80),c=n(14),i=n(16);Object(c.c)(),Object(c.d)();var o=new a.a({});Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1,REACT_APP_cra_build:'{"cmd":"cra-build","buildType":"app","buildTarget":"@wfh/aw-main","watch":false,"devMode":false,"includes":[],"webpackEnv":"production"}'}).REACT_APP_env&&"prod"!==Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1,REACT_APP_cra_build:'{"cmd":"cra-build","buildType":"app","buildTarget":"@wfh/aw-main","watch":false,"devMode":false,"includes":[],"webpackEnv":"production"}'}).REACT_APP_env&&o.log$.pipe(Object(i.a)((function(e){var t,n,a;"state"===e[0]?(t=console).log.apply(t,["%c redux:state ","font-weight: bold; color: black; background: #44c2fd;"].concat(Object(r.a)(e.slice(1)))):"action"===e[0]?(n=console).log.apply(n,["%c redux:action ","font-weight: bold; color: white; background: #8c61ff;"].concat(Object(r.a)(e.slice(1)))):(a=console).log.apply(a,Object(r.a)(e))}))).subscribe()},58:function(e,t,n){e.exports={"app-bar-header":"AppLayout_app-bar-header__1I8eY",withShadow:"AppLayout_withShadow__3psPI","app-bar-main":"AppLayout_app-bar-main__1X8Sh",container:"AppLayout_container__1smc9",backLayer:"AppLayout_backLayer__eTQiN",frontLayer:"AppLayout_frontLayer__1GYKB",progressBarContainer:"AppLayout_progressBarContainer__2LAC6",routeProgressBar:"AppLayout_routeProgressBar__32FLZ",footer:"AppLayout_footer__TQ9z3"}},73:function(e,t,n){e.exports={scope:"SwitchAnim_scope__24V-j",full:"SwitchAnim_full__3ClDN",movingBox:"SwitchAnim_movingBox__2GNSL","animate-opacity":"SwitchAnim_animate-opacity__39ENY",enterStart:"SwitchAnim_enterStart__1WF_m",entering:"SwitchAnim_entering__1JAL8",leaving:"SwitchAnim_leaving__32ZVo"}},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return v}));var r=n(66),a=n(12),c=n(0),i=n.n(c),o=n(79),u=n(74),s=n(121),l=n(16),p=n(75),f=n(86),d=n(87),b=n(163);function h(e){return Object.assign({_syncComponentProps:function(e,t){e.componentProps=Object.assign({},t)},_willUnmount:function(e){}},e)}function m(e,t){var n=i.a.useCallback((function(){var t=e();return Object.assign(Object.assign({},t),{reducers:h(t.reducers)})}),[]);i.a.useEffect((function(){return function(){o[1].actionDispatcher._willUnmount()}}),[]);for(var r=arguments.length,a=new Array(r>2?r-2:0),c=2;c<r;c++)a[c-2]=arguments[c];var o=v.apply(void 0,[n].concat(a));return i.a.useEffect((function(){o[1].actionDispatcher._syncComponentProps(t)}),Object.values(t)),o}function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];var h=i.a.useMemo((function(){return new f.a(1)}),[]),m=i.a.useMemo(e,[e]),v=i.a.useMemo((function(){return n.map((function(){return new d.a(null)}))}),[]),y=i.a.useState(m.initialState),j=Object(a.a)(y,2),O=j[0],g=j[1],_=i.a.useMemo((function(){var e=Object(o.b)(m);e.state$.pipe(u.a(),s.b(b.a),l.a((function(e){return g(e)})),p.a(h)).subscribe();var t,a=Object(r.a)(v);try{for(a.s();!(t=a.n()).done;){var c=t.value;e.addEpic$(c)}}catch(i){a.e(i)}finally{a.f()}return n.forEach((function(e,t){return v[t].next(e)})),e}),[]);return i.a.useEffect((function(){n.forEach((function(e,t){return v[t].next(e)}))}),[v,n]),i.a.useEffect((function(){return function(){h.next(),h.complete(),_.destroy()}}),[]),[O,_]}},79:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return x}));var r=n(107),a=n(12),c=n(27),i=n(158),o=n(87),u=n(136),s=n(25),l=n(122),p=(n(4),n(59)),f=n(39),d=n(159),b=n(16),h=n(135),m=n(74),v=n(123),y=n(75),j=n(88),O=n(160);function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return e.pipe(p.a((function(e){return t.some((function(t){return e.type===t.type}))})))}}function _(e,t){for(var n,r={},a={},o=0,u=t.pipe(f.a((function(e){var t=r[e.type];t&&t.next(e)}))),s=function(){var t=p[l],s=r[e[t].type]=new c.a;a[t]=i.a((function(){return 0===o++&&(n=u.subscribe()),s.asObservable()})).pipe(d.a((function(){0===--o&&n&&(n.unsubscribe(),n=void 0)})))},l=0,p=Object.keys(e);l<p.length;l++)s();return a}var w={};function x(e){var t=e.name;void 0!==e.generateId&&!0!==e.generateId||(null==w[t]&&(w[t]=0),e.name=t=t+"."+ ++w[t]);for(var n={},i={},f=function(){var e=Object(a.a)(O[d],2),r=e[0],c=e[1],o=t+"/"+r,u=function(e){return{type:o,payload:e,reducer:c}};u.type=o,n[r]=u,i[r]=function(e){var t=u(e);return E(t),t},i[r].type=u.type},d=0,O=Object.entries(e.reducers);d<O.length;d++)f();var g=new o.a(e.initialState),_=new c.a,x=new c.a;function S(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){return e.pipe(p.a((function(e){return n.some((function(n){return e.type===t+"/"+n}))})))}}function E(e){_.next(e)}var D=0,R=!1,L=!1,k=u.a(_.pipe(b.a((function(n){e.debug&&console.log("%c ".concat(t," internal:action "),"color: black; background: #fae4fc;",n.type)})),b.a((function(e){if(e.reducer){var t,n=g.getValue(),r=Object.assign(Object.assign({},n),{__ac:++D});if(R=!0,L)throw new Error("Do not dispatch action inside a reducer! (action: ".concat(e.type,")"));L=!0;try{t=e.reducer(r,e.payload)}finally{L=!1,R=!1}var a=t||r;g.next(a)}x.next(e)})),h.a((function(e,t){return console.error(e),E({type:"reducer error",reducer:function(t){return Object.assign(Object.assign({},t),{error:e})}}),t}))),g.pipe(b.a((function(n){e.debug&&console.log("%c ".concat(t," internal:state "),"color: black; background: #e98df5;",n)}))),e.rootStore?g.pipe(b.a((function(t){var n;return e.rootStore.next(Object.assign(Object.assign({},null===(n=e.rootStore)||void 0===n?void 0:n.getValue()),Object(r.a)({},e.name,t)))}))):s.a).subscribe();function C(e){var t=e.pipe(m.a(),v.a((function(e){if(e){var t=e(T,S);if(t)return t(x,g)}return s.a})),y.a(_.pipe(p.a((function(e){return"__OnDestroy"===e.type})),j.a(1))),b.a((function(e){return E(e)})),h.a((function(e,t){return console.error(e),E({type:"epic error",reducer:function(t){return Object.assign(Object.assign({},t),{error:e})}}),t}))).subscribe();return function(){return t.unsubscribe()}}var T={name:t,state$:g,action$:x,actions:n,dispatch:E,actionDispatcher:i,destroy:function(){E({type:"__OnDestroy"}),k.unsubscribe()},destroy$:_.pipe(p.a((function(e){return"__OnDestroy"===e.type})),j.a(1)),addEpic:function(e){return C(l.a(e))},addEpic$:C,getStore:function(){return g},getState:function(){if(R)throw new Error("To be consistent with Redux's behaviour, slice.getState() is not allowed to be invoked inside a reducer");return g.getValue()}};return T}x({name:"demo",initialState:{},reducers:{hellow:function(e,t){},world:function(e){}}}).addEpic((function(e,t){return function(n,r){var a=_(e.actions,n);return u.a(a.hellow.pipe(),n.pipe(t("hellow","hellow"),f.a((function(t){return e.actions.world()}))),n.pipe(t("world"),b.a((function(t){return e.actionDispatcher.hellow({data:"yes"})}))),n.pipe(g(e.actions.hellow),b.a((function(e){return"string"===typeof e.payload.data}))),n.pipe(g(e.actions.world),b.a((function(t){return e.actionDispatcher.hellow({data:"yes"})}))),n.pipe(g(e.actionDispatcher.hellow,e.actionDispatcher.world),b.a((function(e){return e.payload})))).pipe(O.a())}}))},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(12),a=n(118),c=n(119),i=n(34),o=n(134),u=n(33),s=n(120),l=n(190),p=n(87),f=n(86),d=n(27),b=n(59),h=n(88),m=n(74),v=n(16),y=n(129),j=n(75),O=n(39),g=n(135);var _={_change:function(e,t){t.payload(e)}},w=function(){function e(t){var n=this;Object(a.a)(this,e),this.preloadedState=t,this.store$=new p.a(void 0),this.actionsToDispatch=new f.a(20),this.epicSeq=0,this.debugLog=new f.a(15),this.errorHandleMiddleware=function(e){return function(e){return function(t){try{return n.debugLog.next(["action",null!=t?t.type:t]),e(t)}catch(r){throw console.error("[redux-toolkit-observable] failed action",t),console.error("[redux-toolkit-observable] action dispatch error",r),n.reportActionError(r),r}}}},this.realtimeState$=new p.a(t),this.epicWithUnsub$=new f.a,this.log$=this.debugLog.asObservable(),this.reducerMap={},this.rootStoreReady=this.store$.pipe(Object(b.a)((function(e){return null!=e})),Object(h.a)(1)).toPromise();var r=this.newSlice(x);this.errorSlice=r,this.reportActionError=this.bindActionCreators(r).reportActionError}return Object(c.a)(e,[{key:"configureStore",value:function(e){var t=this;if(this.store$.getValue())return this;var n=this.createRootReducer(),a=Object(l.a)(),c=e,u=[this.errorHandleMiddleware,a];if(c)if(c.reducer=n,c.devTools=!1,c.middleware){var p=c.middleware;c.middleware="function"===typeof p?function(e){return[].concat(Object(i.a)(p(e)),u)}:[].concat(Object(i.a)(p),u)}else c.middleware=function(e){return[].concat(Object(i.a)(e({serializableCheck:!1,immutableCheck:!1})),u)};else c={reducer:n,middleware:function(e){return[].concat(Object(i.a)(e({serializableCheck:!1,immutableCheck:!1})),u)},devTools:!1};var f=Object(o.a)(c);return this.store$.next(f),f.subscribe((function(){var e=f.getState();t.realtimeState$.next(e)})),this.realtimeState$.pipe(Object(m.a)(),Object(v.a)((function(e){return t.debugLog.next(["state",e])}))).subscribe(),a.run((function(e,n,a){return t.epicWithUnsub$.pipe(Object(v.a)((function(e){var n=Object(r.a)(e,3),a=(n[0],n[1]);n[2];t.debugLog.next(["[redux-toolkit-obs] ".concat(a," is about to be subscribed")])})),Object(y.a)((function(c){var i=Object(r.a)(c,3),o=i[0],u=(i[1],i[2]);return o(e,n,a).pipe(Object(j.a)(u.pipe(Object(h.a)(1),Object(O.a)((function(e){t.debugLog.next(["[redux-toolkit-obs]","unsubscribe from ".concat(e)])})))),Object(g.a)((function(e,n){return t.reportActionError(e),console.error(e),n})))})),Object(j.a)(e.pipe(Object(s.a)("STOP_EPIC"),Object(v.a)((function(){return t.debugLog.next(["[redux-toolkit-obs]","Stop all epics"])})))))})),this.addEpic((function(e){return t.actionsToDispatch}),"internalDispatcher"),this}},{key:"newSlice",value:function(e){var t=this,n=e,r=n.reducers;null==r._change&&Object.assign(n.reducers,_),null==r._init&&(r._init=function(n,r){t.debugLog.next(["[redux-toolkit-obs]",'slice "'.concat(e.name,'" is created ').concat(r.payload.isLazy?"lazily":"")])}),this.preloadedState&&this.preloadedState[e.name]&&Object.assign(e.initialState,this.preloadedState[e.name]);var a=Object(o.b)(e);return this.addSliceMaybeReplaceReducer(a),a}},{key:"removeSlice",value:function(e){if(delete this.reducerMap[e.name],this.getRootStore()){this.debugLog.next(["[redux-toolkit-obs]","remove slice "+e.name]);var t=this.createRootReducer();this.getRootStore().replaceReducer(t)}}},{key:"addEpic",value:function(e,t){var n="Epic-"+(t||++this.epicSeq),r=new d.a;return this.debugLog.next(["[redux-toolkit-obs] ".concat(n," is added")]),this.epicWithUnsub$.next([e,n,r]),function(){r.next(n),r.complete()}}},{key:"sliceState",value:function(e){var t=this.getRootStore();return t?t.getState()[e.name]:{}}},{key:"sliceStore",value:function(e){return this.realtimeState$.pipe(Object(O.a)((function(t){return t[e.name]})),Object(b.a)((function(e){return null!=e})),Object(m.a)())}},{key:"getErrorState",value:function(){return this.sliceState(this.errorSlice)}},{key:"getErrorStore",value:function(){return this.sliceStore(this.errorSlice)}},{key:"dispatch",value:function(e){this.actionsToDispatch.next(e)}},{key:"bindActionCreators",value:function(e){for(var t=this,n={},a=function(){var e=Object(r.a)(i[c],2),a=e[0],o=e[1],u=function(){var e=o.apply(void 0,arguments);return t.dispatch(e),e};u.type=o.type,n[a]=u},c=0,i=Object.entries(e.actions);c<i.length;c++)a();return n}},{key:"stopAllEpics",value:function(){this.store$.pipe(Object(v.a)((function(e){e&&e.dispatch({payload:null,type:"STOP_EPIC"})})),Object(h.a)(1)).subscribe()}},{key:"getRootStore",value:function(){return this.store$.getValue()}},{key:"addSliceMaybeReplaceReducer",value:function(e){if(this.reducerMap[e.name]=e.reducer,this.getRootStore()){var t=this.createRootReducer();this.getRootStore().replaceReducer(t),this.dispatch(e.actions._init({isLazy:!0}))}else this.dispatch(e.actions._init({isLazy:!1}));return e}},{key:"createRootReducer",value:function(){return Object(u.b)(this.reducerMap)}}]),e}();var x={initialState:{},name:"error",reducers:{reportActionError:function(e,t){var n=t.payload;e.actionError=n}}}}},[[187,1,2]]]);
//# sourceMappingURL=main-794abbbc.chunk.js.map