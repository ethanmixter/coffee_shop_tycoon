(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function US(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var nd={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function NS(){if(Fg)return Vo;Fg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var Hg;function LS(){return Hg||(Hg=1,nd.exports=NS()),nd.exports}var bt=LS(),id={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function OS(){if(Gg)return ue;Gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function y(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,M={};function v(C,H,lt){this.props=C,this.context=H,this.refs=M,this.updater=lt||T}v.prototype.isReactComponent={},v.prototype.setState=function(C,H){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,H,"setState")},v.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function w(){}w.prototype=v.prototype;function B(C,H,lt){this.props=C,this.context=H,this.refs=M,this.updater=lt||T}var O=B.prototype=new w;O.constructor=B,U(O,v.prototype),O.isPureReactComponent=!0;var V=Array.isArray;function L(){}var I={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function N(C,H,lt){var K=lt.ref;return{$$typeof:o,type:C,key:H,ref:K!==void 0?K:null,props:lt}}function j(C,H){return N(C.type,H,C.props)}function z(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function Z(C){var H={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(lt){return H[lt]})}var ct=/\/+/g;function dt(C,H){return typeof C=="object"&&C!==null&&C.key!=null?Z(""+C.key):H.toString(36)}function q(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(L,L):(C.status="pending",C.then(function(H){C.status==="pending"&&(C.status="fulfilled",C.value=H)},function(H){C.status==="pending"&&(C.status="rejected",C.reason=H)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function P(C,H,lt,K,yt){var $=typeof C;($==="undefined"||$==="boolean")&&(C=null);var gt=!1;if(C===null)gt=!0;else switch($){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(C.$$typeof){case o:case e:gt=!0;break;case S:return gt=C._init,P(gt(C._payload),H,lt,K,yt)}}if(gt)return yt=yt(C),gt=K===""?"."+dt(C,0):K,V(yt)?(lt="",gt!=null&&(lt=gt.replace(ct,"$&/")+"/"),P(yt,H,lt,"",function(Gt){return Gt})):yt!=null&&(z(yt)&&(yt=j(yt,lt+(yt.key==null||C&&C.key===yt.key?"":(""+yt.key).replace(ct,"$&/")+"/")+gt)),H.push(yt)),1;gt=0;var xt=K===""?".":K+":";if(V(C))for(var Ct=0;Ct<C.length;Ct++)K=C[Ct],$=xt+dt(K,Ct),gt+=P(K,H,lt,$,yt);else if(Ct=y(C),typeof Ct=="function")for(C=Ct.call(C),Ct=0;!(K=C.next()).done;)K=K.value,$=xt+dt(K,Ct++),gt+=P(K,H,lt,$,yt);else if($==="object"){if(typeof C.then=="function")return P(q(C),H,lt,K,yt);throw H=String(C),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return gt}function F(C,H,lt){if(C==null)return C;var K=[],yt=0;return P(C,K,"","",function($){return H.call(lt,$,yt++)}),K}function ot(C){if(C._status===-1){var H=C._result;H=H(),H.then(function(lt){(C._status===0||C._status===-1)&&(C._status=1,C._result=lt)},function(lt){(C._status===0||C._status===-1)&&(C._status=2,C._result=lt)}),C._status===-1&&(C._status=0,C._result=H)}if(C._status===1)return C._result.default;throw C._result}var vt=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},Et={map:F,forEach:function(C,H,lt){F(C,function(){H.apply(this,arguments)},lt)},count:function(C){var H=0;return F(C,function(){H++}),H},toArray:function(C){return F(C,function(H){return H})||[]},only:function(C){if(!z(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return ue.Activity=x,ue.Children=Et,ue.Component=v,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=B,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ue.__COMPILER_RUNTIME={__proto__:null,c:function(C){return I.H.useMemoCache(C)}},ue.cache=function(C){return function(){return C.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(C,H,lt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var K=U({},C.props),yt=C.key;if(H!=null)for($ in H.key!==void 0&&(yt=""+H.key),H)!E.call(H,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&H.ref===void 0||(K[$]=H[$]);var $=arguments.length-2;if($===1)K.children=lt;else if(1<$){for(var gt=Array($),xt=0;xt<$;xt++)gt[xt]=arguments[xt+2];K.children=gt}return N(C.type,yt,K)},ue.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:u,_context:C},C},ue.createElement=function(C,H,lt){var K,yt={},$=null;if(H!=null)for(K in H.key!==void 0&&($=""+H.key),H)E.call(H,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(yt[K]=H[K]);var gt=arguments.length-2;if(gt===1)yt.children=lt;else if(1<gt){for(var xt=Array(gt),Ct=0;Ct<gt;Ct++)xt[Ct]=arguments[Ct+2];yt.children=xt}if(C&&C.defaultProps)for(K in gt=C.defaultProps,gt)yt[K]===void 0&&(yt[K]=gt[K]);return N(C,$,yt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(C){return{$$typeof:p,render:C}},ue.isValidElement=z,ue.lazy=function(C){return{$$typeof:S,_payload:{_status:-1,_result:C},_init:ot}},ue.memo=function(C,H){return{$$typeof:h,type:C,compare:H===void 0?null:H}},ue.startTransition=function(C){var H=I.T,lt={};I.T=lt;try{var K=C(),yt=I.S;yt!==null&&yt(lt,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(L,vt)}catch($){vt($)}finally{H!==null&&lt.types!==null&&(H.types=lt.types),I.T=H}},ue.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ue.use=function(C){return I.H.use(C)},ue.useActionState=function(C,H,lt){return I.H.useActionState(C,H,lt)},ue.useCallback=function(C,H){return I.H.useCallback(C,H)},ue.useContext=function(C){return I.H.useContext(C)},ue.useDebugValue=function(){},ue.useDeferredValue=function(C,H){return I.H.useDeferredValue(C,H)},ue.useEffect=function(C,H){return I.H.useEffect(C,H)},ue.useEffectEvent=function(C){return I.H.useEffectEvent(C)},ue.useId=function(){return I.H.useId()},ue.useImperativeHandle=function(C,H,lt){return I.H.useImperativeHandle(C,H,lt)},ue.useInsertionEffect=function(C,H){return I.H.useInsertionEffect(C,H)},ue.useLayoutEffect=function(C,H){return I.H.useLayoutEffect(C,H)},ue.useMemo=function(C,H){return I.H.useMemo(C,H)},ue.useOptimistic=function(C,H){return I.H.useOptimistic(C,H)},ue.useReducer=function(C,H,lt){return I.H.useReducer(C,H,lt)},ue.useRef=function(C){return I.H.useRef(C)},ue.useState=function(C){return I.H.useState(C)},ue.useSyncExternalStore=function(C,H,lt){return I.H.useSyncExternalStore(C,H,lt)},ue.useTransition=function(){return I.H.useTransition()},ue.version="19.2.5",ue}var Vg;function zh(){return Vg||(Vg=1,id.exports=OS()),id.exports}var xe=zh();const PS=US(xe);var ad={exports:{}},ko={},sd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function BS(){return kg||(kg=1,(function(o){function e(P,F){var ot=P.length;P.push(F);t:for(;0<ot;){var vt=ot-1>>>1,Et=P[vt];if(0<l(Et,F))P[vt]=F,P[ot]=Et,ot=vt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var F=P[0],ot=P.pop();if(ot!==F){P[0]=ot;t:for(var vt=0,Et=P.length,C=Et>>>1;vt<C;){var H=2*(vt+1)-1,lt=P[H],K=H+1,yt=P[K];if(0>l(lt,ot))K<Et&&0>l(yt,lt)?(P[vt]=yt,P[K]=ot,vt=K):(P[vt]=lt,P[H]=ot,vt=H);else if(K<Et&&0>l(yt,ot))P[vt]=yt,P[K]=ot,vt=K;else break t}}return F}function l(P,F){var ot=P.sortIndex-F.sortIndex;return ot!==0?ot:P.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],S=1,x=null,_=3,y=!1,T=!1,U=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var F=i(h);F!==null;){if(F.callback===null)s(h);else if(F.startTime<=P)s(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(h)}}function V(P){if(U=!1,O(P),!T)if(i(m)!==null)T=!0,L||(L=!0,Z());else{var F=i(h);F!==null&&q(V,F.startTime-P)}}var L=!1,I=-1,E=5,N=-1;function j(){return M?!0:!(o.unstable_now()-N<E)}function z(){if(M=!1,L){var P=o.unstable_now();N=P;var F=!0;try{t:{T=!1,U&&(U=!1,w(I),I=-1),y=!0;var ot=_;try{e:{for(O(P),x=i(m);x!==null&&!(x.expirationTime>P&&j());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,_=x.priorityLevel;var Et=vt(x.expirationTime<=P);if(P=o.unstable_now(),typeof Et=="function"){x.callback=Et,O(P),F=!0;break e}x===i(m)&&s(m),O(P)}else s(m);x=i(m)}if(x!==null)F=!0;else{var C=i(h);C!==null&&q(V,C.startTime-P),F=!1}}break t}finally{x=null,_=ot,y=!1}F=void 0}}finally{F?Z():L=!1}}}var Z;if(typeof B=="function")Z=function(){B(z)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,dt=ct.port2;ct.port1.onmessage=z,Z=function(){dt.postMessage(null)}}else Z=function(){v(z,0)};function q(P,F){I=v(function(){P(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(P){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var ot=_;_=F;try{return P()}finally{_=ot}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ot=_;_=P;try{return F()}finally{_=ot}},o.unstable_scheduleCallback=function(P,F,ot){var vt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?vt+ot:vt):ot=vt,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=ot+Et,P={id:S++,callback:F,priorityLevel:P,startTime:ot,expirationTime:Et,sortIndex:-1},ot>vt?(P.sortIndex=ot,e(h,P),i(m)===null&&P===i(h)&&(U?(w(I),I=-1):U=!0,q(V,ot-vt))):(P.sortIndex=Et,e(m,P),T||y||(T=!0,L||(L=!0,Z()))),P},o.unstable_shouldYield=j,o.unstable_wrapCallback=function(P){var F=_;return function(){var ot=_;_=F;try{return P.apply(this,arguments)}finally{_=ot}}}})(rd)),rd}var Xg;function IS(){return Xg||(Xg=1,sd.exports=BS()),sd.exports}var od={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function zS(){if(Wg)return Fn;Wg=1;var o=zh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,h,S){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:h,implementation:S}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,S)},Fn.flushSync=function(m){var h=d.T,S=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=S,s.d.f()}},Fn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:y}):S==="script"&&s.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Fn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Fn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,x=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Fn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,h){return m(h)},Fn.useFormState=function(m,h,S){return d.H.useFormState(m,h,S)},Fn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Fn.version="19.2.5",Fn}var qg;function FS(){if(qg)return od.exports;qg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),od.exports=zS(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function HS(){if(Yg)return ko;Yg=1;var o=IS(),e=zh(),i=FS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,R=c.child;R;){if(R===a){g=!0,a=c,r=f;break}if(R===r){g=!0,r=c,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,r=c;break}if(R===r){g=!0,r=f,a=c;break}R=R.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),B=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),j=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ct?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case B:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var q=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},vt=[],Et=-1;function C(t){return{current:t}}function H(t){0>Et||(t.current=vt[Et],vt[Et]=null,Et--)}function lt(t,n){Et++,vt[Et]=t.current,t.current=n}var K=C(null),yt=C(null),$=C(null),gt=C(null);function xt(t,n){switch(lt($,n),lt(yt,t),lt(K,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?lg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=lg(n),t=cg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(K),lt(K,t)}function Ct(){H(K),H(yt),H($)}function Gt(t){t.memoizedState!==null&&lt(gt,t);var n=K.current,a=cg(n,t.type);n!==a&&(lt(yt,t),lt(K,a))}function kt(t){yt.current===t&&(H(K),H(yt)),gt.current===t&&(H(gt),zo._currentValue=ot)}var Yt,wt;function Zt(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",wt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+wt}var $t=!1;function Wt(t,n){if(!t||$t)return"";$t=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Mt=function(){throw Error()};if(Object.defineProperty(Mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Mt,[])}catch(ft){var rt=ft}Reflect.construct(t,[],Mt)}else{try{Mt.call()}catch(ft){rt=ft}t.call(Mt.prototype)}}else{try{throw Error()}catch(ft){rt=ft}(Mt=t())&&typeof Mt.catch=="function"&&Mt.catch(function(){})}}catch(ft){if(ft&&rt&&typeof ft.stack=="string")return[ft.stack,rt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var G=g.split(`
`),nt=R.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===nt.length)for(r=G.length-1,c=nt.length-1;1<=r&&0<=c&&G[r]!==nt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==nt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==nt[c]){var mt=`
`+G[r].replace(" at new "," at ");return t.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",t.displayName)),mt}while(1<=r&&0<=c);break}}}finally{$t=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zt(a):""}function ne(t,n){switch(t.tag){case 26:case 27:case 5:return Zt(t.type);case 16:return Zt("Lazy");case 13:return t.child!==n&&n!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return Zt("Activity");default:return""}}function fe(t){try{var n="",a=null;do n+=ne(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var De=Object.prototype.hasOwnProperty,X=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,he=o.unstable_shouldYield,Ee=o.unstable_requestPaint,Dt=o.unstable_now,tn=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,b=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,_t=o.unstable_LowPriority,At=o.unstable_IdlePriority,Nt=o.log,Pt=o.unstable_setDisableYieldValue,ut=null,ht=null;function Bt(t){if(typeof Nt=="function"&&Pt(t),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ut,t)}catch{}}var It=Math.clz32?Math.clz32:le,Lt=Math.log,Ut=Math.LN2;function le(t){return t>>>=0,t===0?32:31-(Lt(t)/Ut|0)|0}var ie=256,ve=262144,k=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?c=Rt(r):(g&=R,g!==0?c=Rt(g):a||(a=R&~t,a!==0&&(c=Rt(a))))):(R=r&~f,R!==0?c=Rt(R):g!==0?c=Rt(g):a||(a=r&~t,a!==0&&(c=Rt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ft(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Kt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function re(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function je(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,nt=t.hiddenUpdates;for(a=g&~a;0<a;){var mt=31-It(a),Mt=1<<mt;R[mt]=0,G[mt]=-1;var rt=nt[mt];if(rt!==null)for(nt[mt]=null,mt=0;mt<rt.length;mt++){var ft=rt[mt];ft!==null&&(ft.lane&=-536870913)}a&=~Mt}r!==0&&Ue(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ue(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-It(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function pn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-It(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function mn(t,n){var a=n&-n;return a=(a&42)!==0?1:$i(a),(a&(t.suspendedLanes|n))!==0?0:a}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ms(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ti(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Ng(t.type))}function Qr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var In=Math.random().toString(36).slice(2),un="__reactFiber$"+In,Dn="__reactProps$"+In,ta="__reactContainer$"+In,wa="__reactEvents$"+In,sl="__reactListeners$"+In,Ys="__reactHandles$"+In,Jr="__reactResources$"+In,Da="__reactMarker$"+In;function $r(t){delete t[un],delete t[Dn],delete t[wa],delete t[sl],delete t[Ys]}function Ua(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ta]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=gg(t);t!==null;){if(a=t[un])return a;t=gg(t)}return n}t=a,a=t.parentNode}return null}function Na(t){if(t=t[un]||t[ta]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function La(t){var n=t[Jr];return n||(n=t[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Da]=!0}var rl=new Set,A={};function Y(t,n){st(t,n),st(t+"Capture",n)}function st(t,n){for(A[t]=n,t=0;t<n.length;t++)rl.add(n[t])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Ht={};function qt(t){return De.call(Ht,t)?!0:De.call(at,t)?!1:it.test(t)?Ht[t]=!0:(at[t]=!0,!1)}function zt(t,n,a){if(qt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Qt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function jt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ee(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Oe(t){if(!t._valueTracker){var n=pe(t)?"checked":"value";t._valueTracker=ee(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=pe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var He=/[\n"\\]/g;function Ge(t){return t.replace(He,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xt(t,n,a,r,c,f,g,R){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ae(n)):t.value!==""+ae(n)&&(t.value=""+ae(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Me(t,g,ae(n)):a!=null?Me(t,g,ae(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ae(R):t.removeAttribute("name")}function zn(t,n,a,r,c,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(t);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Oe(t)}function Me(t,n,a){n==="number"&&Je(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ei(t,n,a){if(n!=null&&(n=""+ae(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ae(a):""}function Ai(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(q(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ae(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Oe(t)}function ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ve=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Ve.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ri(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&sn(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&sn(t,f,n[f])}function Fe(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _s(t){return Oa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var js=null,Zs=null;function op(t){var n=Na(t);if(n&&(t=n.stateNode)){var a=t[Dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Xt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ge(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Dn]||null;if(!c)throw Error(s(90));Xt(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&an(r)}break t;case"textarea":ei(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var tu=!1;function lp(t,n,a){if(tu)return t(n,a);tu=!0;try{var r=t(n);return r}finally{if(tu=!1,(js!==null||Zs!==null)&&(Yl(),js&&(n=js,t=Zs,Zs=js=null,op(n),t)))for(n=0;n<t.length;n++)op(t[n])}}function to(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(na)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){eu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{eu=!1}var Pa=null,nu=null,ol=null;function cp(){if(ol)return ol;var t,n=nu,a=n.length,r,c="value"in Pa?Pa.value:Pa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return ol=c.slice(t,1<r?1-r:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function cl(){return!0}function up(){return!1}function qn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cl:up,this.isPropagationStopped=up,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=qn(vs),no=x({},vs,{view:0,detail:0}),wv=qn(no),iu,au,io,fl=x({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(iu=t.screenX-io.screenX,au=t.screenY-io.screenY):au=iu=0,io=t),iu)},movementY:function(t){return"movementY"in t?t.movementY:au}}),fp=qn(fl),Dv=x({},fl,{dataTransfer:0}),Uv=qn(Dv),Nv=x({},no,{relatedTarget:0}),su=qn(Nv),Lv=x({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=qn(Lv),Pv=x({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bv=qn(Pv),Iv=x({},vs,{data:0}),dp=qn(Iv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hv[t])?!!n[t]:!1}function ru(){return Gv}var Vv=x({},no,{key:function(t){if(t.key){var n=zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kv=qn(Vv),Xv=x({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=qn(Xv),Wv=x({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),qv=qn(Wv),Yv=x({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jv=qn(Yv),Zv=x({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kv=qn(Zv),Qv=x({},vs,{newState:0,oldState:0}),Jv=qn(Qv),$v=[9,13,27,32],ou=na&&"CompositionEvent"in window,ao=null;na&&"documentMode"in document&&(ao=document.documentMode);var tx=na&&"TextEvent"in window&&!ao,pp=na&&(!ou||ao&&8<ao&&11>=ao),mp=" ",gp=!1;function _p(t,n){switch(t){case"keyup":return $v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function ex(t,n){switch(t){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(gp=!0,mp);case"textInput":return t=n.data,t===mp&&gp?null:t;default:return null}}function nx(t,n){if(Ks)return t==="compositionend"||!ou&&_p(t,n)?(t=cp(),ol=nu=Pa=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return pp&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ix[t.type]:n==="textarea"}function Sp(t,n,a,r){js?Zs?Zs.push(r):Zs=[r]:js=r,n=tc(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var so=null,ro=null;function ax(t){ng(t,0)}function dl(t){var n=gs(t);if(an(n))return t}function Mp(t,n){if(t==="change")return n}var yp=!1;if(na){var lu;if(na){var cu="oninput"in document;if(!cu){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),cu=typeof bp.oninput=="function"}lu=cu}else lu=!1;yp=lu&&(!document.documentMode||9<document.documentMode)}function Ep(){so&&(so.detachEvent("onpropertychange",Tp),ro=so=null)}function Tp(t){if(t.propertyName==="value"&&dl(ro)){var n=[];Sp(n,ro,t,$c(t)),lp(ax,n)}}function sx(t,n,a){t==="focusin"?(Ep(),so=n,ro=a,so.attachEvent("onpropertychange",Tp)):t==="focusout"&&Ep()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(ro)}function ox(t,n){if(t==="click")return dl(n)}function lx(t,n){if(t==="input"||t==="change")return dl(n)}function cx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:cx;function oo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!De.call(n,c)||!ii(t[c],n[c]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,n){var a=Ap(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ap(a)}}function Cp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Cp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Je(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Je(t.document)}return n}function uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ux=na&&"documentMode"in document&&11>=document.documentMode,Qs=null,fu=null,lo=null,du=!1;function Dp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||Qs==null||Qs!==Je(r)||(r=Qs,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&oo(lo,r)||(lo=r,r=tc(fu,"onSelect"),0<r.length&&(n=new ul("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Qs)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Js={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},hu={},Up={};na&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function Ss(t){if(hu[t])return hu[t];if(!Js[t])return t;var n=Js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Up)return hu[t]=n[a];return t}var Np=Ss("animationend"),Lp=Ss("animationiteration"),Op=Ss("animationstart"),fx=Ss("transitionrun"),dx=Ss("transitionstart"),hx=Ss("transitioncancel"),Pp=Ss("transitionend"),Bp=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function Ci(t,n){Bp.set(t,n),Y(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],$s=0,mu=0;function pl(){for(var t=$s,n=mu=$s=0;n<t;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var c=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&Ip(a,c,f)}}function ml(t,n,a,r){pi[$s++]=t,pi[$s++]=n,pi[$s++]=a,pi[$s++]=r,mu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function gu(t,n,a,r){return ml(t,n,a,r),gl(t)}function Ms(t,n){return ml(t,null,null,n),gl(t)}function Ip(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-It(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<Uo)throw Uo=0,Af=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function px(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,a,r){return new px(t,n,a,r)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=ai(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")_u(t)&&(g=1);else if(typeof t=="string")g=xS(t,a,K.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case N:return t=ai(31,a,n,c),t.elementType=N,t.lanes=f,t;case U:return ys(a.children,c,f,n);case M:g=8,c|=24;break;case v:return t=ai(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case V:return t=ai(13,a,n,c),t.elementType=V,t.lanes=f,t;case L:return t=ai(19,a,n,c),t.elementType=L,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:g=10;break t;case w:g=9;break t;case O:g=11;break t;case I:g=14;break t;case E:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ai(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ys(t,n,a,r){return t=ai(7,t,r,n),t.lanes=a,t}function vu(t,n,a){return t=ai(6,t,null,n),t.lanes=a,t}function Fp(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function xu(t,n,a){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hp=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Hp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:fe(n)},Hp.set(t,n),n)}return{value:t,source:n,stack:fe(n)}}var er=[],nr=0,vl=null,co=0,gi=[],_i=0,Ba=null,Fi=1,Hi="";function aa(t,n){er[nr++]=co,er[nr++]=vl,vl=t,co=n}function Gp(t,n,a){gi[_i++]=Fi,gi[_i++]=Hi,gi[_i++]=Ba,Ba=t;var r=Fi;t=Hi;var c=32-It(r)-1;r&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Fi=1<<32-It(n)+c|a<<c|r,Hi=f+t}else Fi=1<<f|a<<c|r,Hi=t}function Su(t){t.return!==null&&(aa(t,1),Gp(t,1,0))}function Mu(t){for(;t===vl;)vl=er[--nr],er[nr]=null,co=er[--nr],er[nr]=null;for(;t===Ba;)Ba=gi[--_i],gi[_i]=null,Hi=gi[--_i],gi[_i]=null,Fi=gi[--_i],gi[_i]=null}function Vp(t,n){gi[_i++]=Fi,gi[_i++]=Hi,gi[_i++]=Ba,Fi=n.id,Hi=n.overflow,Ba=t}var Un=null,en=null,Re=!1,Ia=null,vi=!1,yu=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(mi(n,t)),yu}function kp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[un]=t,n[Dn]=r,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)be(Lo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),zn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),Ai(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||rg(n.textContent,a)?(r.popover!=null&&(be("beforetoggle",n),be("toggle",n)),r.onScroll!=null&&be("scroll",n),r.onScrollEnd!=null&&be("scrollend",n),r.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||za(t,!0)}function Xp(t){for(Un=t.return;Un;)switch(Un.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Un=Un.return}}function ir(t){if(t!==Un)return!1;if(!Re)return Xp(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Gf(t.type,t.memoizedProps)),a=!a),a&&en&&za(t),Xp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=mg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));en=mg(t)}else n===27?(n=en,Ja(t.type)?(t=qf,qf=null,en=t):en=n):en=Un?Si(t.stateNode.nextSibling):null;return!0}function bs(){en=Un=null,Re=!1}function bu(){var t=Ia;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Ia=null),t}function uo(t){Ia===null?Ia=[t]:Ia.push(t)}var Eu=C(null),Es=null,sa=null;function Fa(t,n,a){lt(Eu,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Eu.current,H(Eu)}function Tu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Au(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var G=0;G<n.length;G++)if(R.context===n[G]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Tu(f.return,a,t),r||(g=null);break t}f=R.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Tu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function ar(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var R=c.type;ii(c.pendingProps.value,g.value)||(t!==null?t.push(R):t=[R])}}else if(c===gt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}c=c.return}t!==null&&Au(n,t,a,r),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Es=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Wp(Es,t)}function Sl(t,n){return Es===null&&Ts(t),Wp(t,n)}function Wp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(s(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gx=o.unstable_scheduleCallback,_x=o.unstable_NormalPriority,_n={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ru(){return{controller:new mx,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&gx(_x,function(){t.controller.abort()})}var ho=null,Cu=0,sr=0,rr=null;function vx(t,n){if(ho===null){var a=ho=[];Cu=0,sr=Nf(),rr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cu++,n.then(qp,qp),n}function qp(){if(--Cu===0&&ho!==null){rr!==null&&(rr.status="fulfilled");var t=ho;ho=null,sr=0,rr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Yp=P.S;P.S=function(t,n){D0=Dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(t,n),Yp!==null&&Yp(t,n)};var As=C(null);function wu(){var t=As.current;return t!==null?t:$e.pooledCache}function Ml(t,n){n===null?lt(As,As.current):lt(As,n.pool)}function jp(){var t=wu();return t===null?null:{parent:_n._currentValue,pool:t}}var or=Error(s(460)),Du=Error(s(474)),yl=Error(s(542)),bl={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=$e,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t}throw Cs=n,or}}function Rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,or):a}}var Cs=null;function Qp(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function Jp(t){if(t===or||t===yl)throw Error(s(483))}var lr=null,po=0;function El(t){var n=po;return po+=1,lr===null&&(lr=[]),Kp(lr,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Tl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $p(t){function n(Q,W){if(t){var tt=Q.deletions;tt===null?(Q.deletions=[W],Q.flags|=16):tt.push(W)}}function a(Q,W){if(!t)return null;for(;W!==null;)n(Q,W),W=W.sibling;return null}function r(Q){for(var W=new Map;Q!==null;)Q.key!==null?W.set(Q.key,Q):W.set(Q.index,Q),Q=Q.sibling;return W}function c(Q,W){return Q=ia(Q,W),Q.index=0,Q.sibling=null,Q}function f(Q,W,tt){return Q.index=tt,t?(tt=Q.alternate,tt!==null?(tt=tt.index,tt<W?(Q.flags|=67108866,W):tt):(Q.flags|=67108866,W)):(Q.flags|=1048576,W)}function g(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function R(Q,W,tt,St){return W===null||W.tag!==6?(W=vu(tt,Q.mode,St),W.return=Q,W):(W=c(W,tt),W.return=Q,W)}function G(Q,W,tt,St){var se=tt.type;return se===U?mt(Q,W,tt.props.children,St,tt.key):W!==null&&(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===E&&Rs(se)===W.type)?(W=c(W,tt.props),mo(W,tt),W.return=Q,W):(W=_l(tt.type,tt.key,tt.props,null,Q.mode,St),mo(W,tt),W.return=Q,W)}function nt(Q,W,tt,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=xu(tt,Q.mode,St),W.return=Q,W):(W=c(W,tt.children||[]),W.return=Q,W)}function mt(Q,W,tt,St,se){return W===null||W.tag!==7?(W=ys(tt,Q.mode,St,se),W.return=Q,W):(W=c(W,tt),W.return=Q,W)}function Mt(Q,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=vu(""+W,Q.mode,tt),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return tt=_l(W.type,W.key,W.props,null,Q.mode,tt),mo(tt,W),tt.return=Q,tt;case T:return W=xu(W,Q.mode,tt),W.return=Q,W;case E:return W=Rs(W),Mt(Q,W,tt)}if(q(W)||Z(W))return W=ys(W,Q.mode,tt,null),W.return=Q,W;if(typeof W.then=="function")return Mt(Q,El(W),tt);if(W.$$typeof===B)return Mt(Q,Sl(Q,W),tt);Tl(Q,W)}return null}function rt(Q,W,tt,St){var se=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return se!==null?null:R(Q,W,""+tt,St);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:return tt.key===se?G(Q,W,tt,St):null;case T:return tt.key===se?nt(Q,W,tt,St):null;case E:return tt=Rs(tt),rt(Q,W,tt,St)}if(q(tt)||Z(tt))return se!==null?null:mt(Q,W,tt,St,null);if(typeof tt.then=="function")return rt(Q,W,El(tt),St);if(tt.$$typeof===B)return rt(Q,W,Sl(Q,tt),St);Tl(Q,tt)}return null}function ft(Q,W,tt,St,se){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return Q=Q.get(tt)||null,R(W,Q,""+St,se);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case y:return Q=Q.get(St.key===null?tt:St.key)||null,G(W,Q,St,se);case T:return Q=Q.get(St.key===null?tt:St.key)||null,nt(W,Q,St,se);case E:return St=Rs(St),ft(Q,W,tt,St,se)}if(q(St)||Z(St))return Q=Q.get(tt)||null,mt(W,Q,St,se,null);if(typeof St.then=="function")return ft(Q,W,tt,El(St),se);if(St.$$typeof===B)return ft(Q,W,tt,Sl(W,St),se);Tl(W,St)}return null}function Jt(Q,W,tt,St){for(var se=null,Pe=null,te=W,ge=W=0,Ae=null;te!==null&&ge<tt.length;ge++){te.index>ge?(Ae=te,te=null):Ae=te.sibling;var Be=rt(Q,te,tt[ge],St);if(Be===null){te===null&&(te=Ae);break}t&&te&&Be.alternate===null&&n(Q,te),W=f(Be,W,ge),Pe===null?se=Be:Pe.sibling=Be,Pe=Be,te=Ae}if(ge===tt.length)return a(Q,te),Re&&aa(Q,ge),se;if(te===null){for(;ge<tt.length;ge++)te=Mt(Q,tt[ge],St),te!==null&&(W=f(te,W,ge),Pe===null?se=te:Pe.sibling=te,Pe=te);return Re&&aa(Q,ge),se}for(te=r(te);ge<tt.length;ge++)Ae=ft(te,Q,ge,tt[ge],St),Ae!==null&&(t&&Ae.alternate!==null&&te.delete(Ae.key===null?ge:Ae.key),W=f(Ae,W,ge),Pe===null?se=Ae:Pe.sibling=Ae,Pe=Ae);return t&&te.forEach(function(is){return n(Q,is)}),Re&&aa(Q,ge),se}function oe(Q,W,tt,St){if(tt==null)throw Error(s(151));for(var se=null,Pe=null,te=W,ge=W=0,Ae=null,Be=tt.next();te!==null&&!Be.done;ge++,Be=tt.next()){te.index>ge?(Ae=te,te=null):Ae=te.sibling;var is=rt(Q,te,Be.value,St);if(is===null){te===null&&(te=Ae);break}t&&te&&is.alternate===null&&n(Q,te),W=f(is,W,ge),Pe===null?se=is:Pe.sibling=is,Pe=is,te=Ae}if(Be.done)return a(Q,te),Re&&aa(Q,ge),se;if(te===null){for(;!Be.done;ge++,Be=tt.next())Be=Mt(Q,Be.value,St),Be!==null&&(W=f(Be,W,ge),Pe===null?se=Be:Pe.sibling=Be,Pe=Be);return Re&&aa(Q,ge),se}for(te=r(te);!Be.done;ge++,Be=tt.next())Be=ft(te,Q,ge,Be.value,St),Be!==null&&(t&&Be.alternate!==null&&te.delete(Be.key===null?ge:Be.key),W=f(Be,W,ge),Pe===null?se=Be:Pe.sibling=Be,Pe=Be);return t&&te.forEach(function(DS){return n(Q,DS)}),Re&&aa(Q,ge),se}function Qe(Q,W,tt,St){if(typeof tt=="object"&&tt!==null&&tt.type===U&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case y:t:{for(var se=tt.key;W!==null;){if(W.key===se){if(se=tt.type,se===U){if(W.tag===7){a(Q,W.sibling),St=c(W,tt.props.children),St.return=Q,Q=St;break t}}else if(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===E&&Rs(se)===W.type){a(Q,W.sibling),St=c(W,tt.props),mo(St,tt),St.return=Q,Q=St;break t}a(Q,W);break}else n(Q,W);W=W.sibling}tt.type===U?(St=ys(tt.props.children,Q.mode,St,tt.key),St.return=Q,Q=St):(St=_l(tt.type,tt.key,tt.props,null,Q.mode,St),mo(St,tt),St.return=Q,Q=St)}return g(Q);case T:t:{for(se=tt.key;W!==null;){if(W.key===se)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){a(Q,W.sibling),St=c(W,tt.children||[]),St.return=Q,Q=St;break t}else{a(Q,W);break}else n(Q,W);W=W.sibling}St=xu(tt,Q.mode,St),St.return=Q,Q=St}return g(Q);case E:return tt=Rs(tt),Qe(Q,W,tt,St)}if(q(tt))return Jt(Q,W,tt,St);if(Z(tt)){if(se=Z(tt),typeof se!="function")throw Error(s(150));return tt=se.call(tt),oe(Q,W,tt,St)}if(typeof tt.then=="function")return Qe(Q,W,El(tt),St);if(tt.$$typeof===B)return Qe(Q,W,Sl(Q,tt),St);Tl(Q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(a(Q,W.sibling),St=c(W,tt),St.return=Q,Q=St):(a(Q,W),St=vu(tt,Q.mode,St),St.return=Q,Q=St),g(Q)):a(Q,W)}return function(Q,W,tt,St){try{po=0;var se=Qe(Q,W,tt,St);return lr=null,se}catch(te){if(te===or||te===yl)throw te;var Pe=ai(29,te,null,Q.mode);return Pe.lanes=St,Pe.return=Q,Pe}finally{}}}var ws=$p(!0),tm=$p(!1),Ha=!1;function Uu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=gl(t),Ip(t,null,a),n}return ml(t,r,n,a),gl(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,pn(t,a)}}function Lu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ou=!1;function _o(){if(Ou){var t=rr;if(t!==null)throw t}}function vo(t,n,a,r){Ou=!1;var c=t.updateQueue;Ha=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var G=R,nt=G.next;G.next=null,g===null?f=nt:g.next=nt,g=G;var mt=t.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==g&&(R===null?mt.firstBaseUpdate=nt:R.next=nt,mt.lastBaseUpdate=G))}if(f!==null){var Mt=c.baseState;g=0,mt=nt=G=null,R=f;do{var rt=R.lane&-536870913,ft=rt!==R.lane;if(ft?(Te&rt)===rt:(r&rt)===rt){rt!==0&&rt===sr&&(Ou=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Jt=t,oe=R;rt=n;var Qe=a;switch(oe.tag){case 1:if(Jt=oe.payload,typeof Jt=="function"){Mt=Jt.call(Qe,Mt,rt);break t}Mt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=oe.payload,rt=typeof Jt=="function"?Jt.call(Qe,Mt,rt):Jt,rt==null)break t;Mt=x({},Mt,rt);break t;case 2:Ha=!0}}rt=R.callback,rt!==null&&(t.flags|=64,ft&&(t.flags|=8192),ft=c.callbacks,ft===null?c.callbacks=[rt]:ft.push(rt))}else ft={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(nt=mt=ft,G=Mt):mt=mt.next=ft,g|=rt;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ft=R,R=ft.next,ft.next=null,c.lastBaseUpdate=ft,c.shared.pending=null}}while(!0);mt===null&&(G=Mt),c.baseState=G,c.firstBaseUpdate=nt,c.lastBaseUpdate=mt,f===null&&(c.shared.lanes=0),Ya|=g,t.lanes=g,t.memoizedState=Mt}}function em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function nm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}var cr=C(null),Al=C(0);function im(t,n){t=ma,lt(Al,t),lt(cr,n),ma=t|n.baseLanes}function Pu(){lt(Al,ma),lt(cr,cr.current)}function Bu(){ma=Al.current,H(cr),H(Al)}var si=C(null),xi=null;function ka(t){var n=t.alternate;lt(fn,fn.current&1),lt(si,t),xi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(xi=t)}function Iu(t){lt(fn,fn.current),lt(si,t),xi===null&&(xi=t)}function am(t){t.tag===22?(lt(fn,fn.current),lt(si,t),xi===null&&(xi=t)):Xa()}function Xa(){lt(fn,fn.current),lt(si,si.current)}function ri(t){H(si),xi===t&&(xi=null),H(fn)}var fn=C(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,me=null,Ze=null,vn=null,Cl=!1,ur=!1,Ds=!1,wl=0,xo=0,fr=null,Sx=0;function on(){throw Error(s(321))}function zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Fu(t,n,a,r,c,f){return oa=f,me=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Gm:tf,Ds=!1,f=a(r,c),Ds=!1,ur&&(f=rm(n,a,r,c)),sm(t),f}function sm(t){P.H=yo;var n=Ze!==null&&Ze.next!==null;if(oa=0,vn=Ze=me=null,Cl=!1,xo=0,fr=null,n)throw Error(s(300));t===null||xn||(t=t.dependencies,t!==null&&xl(t)&&(xn=!0))}function rm(t,n,a,r){me=t;var c=0;do{if(ur&&(fr=null),xo=0,ur=!1,25<=c)throw Error(s(301));if(c+=1,vn=Ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Vm,f=n(a,r)}while(ur);return f}function Mx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(Ze!==null?Ze.memoizedState:null)!==t&&(me.flags|=1024),n}function Hu(){var t=wl!==0;return wl=0,t}function Gu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Vu(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}oa=0,vn=Ze=me=null,ur=!1,xo=wl=0,fr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?me.memoizedState=vn=t:vn=vn.next=t,vn}function dn(){if(Ze===null){var t=me.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var n=vn===null?me.memoizedState:vn.next;if(n!==null)vn=n,Ze=t;else{if(t===null)throw me.alternate===null?Error(s(467)):Error(s(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},vn===null?me.memoizedState=vn=t:vn=vn.next=t}return vn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=xo;return xo+=1,fr===null&&(fr=[]),t=Kp(fr,t,n),n=me,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Gm:tf),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===B)return Nn(t)}throw Error(s(438,String(t)))}function ku(t){var n=null,a=me.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=me.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),me.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=j;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function Nl(t){var n=dn();return Xu(n,Ze,t)}function Xu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var R=g=null,G=null,nt=n,mt=!1;do{var Mt=nt.lane&-536870913;if(Mt!==nt.lane?(Te&Mt)===Mt:(oa&Mt)===Mt){var rt=nt.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Mt===sr&&(mt=!0);else if((oa&rt)===rt){nt=nt.next,rt===sr&&(mt=!0);continue}else Mt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=Mt,g=f):G=G.next=Mt,me.lanes|=rt,Ya|=rt;Mt=nt.action,Ds&&a(f,Mt),f=nt.hasEagerState?nt.eagerState:a(f,Mt)}else rt={lane:Mt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(R=G=rt,g=f):G=G.next=rt,me.lanes|=Mt,Ya|=Mt;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?g=f:G.next=R,!ii(f,t.memoizedState)&&(xn=!0,mt&&(a=rr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=G,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Wu(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);ii(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function om(t,n,a){var r=me,c=dn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ii((Ze||c).memoizedState,a);if(g&&(c.memoizedState=a,xn=!0),c=c.queue,ju(um.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||vn!==null&&vn.memoizedState.tag&1){if(r.flags|=2048,dr(9,{destroy:void 0},cm.bind(null,r,c,a,n),null),$e===null)throw Error(s(349));f||(oa&127)!==0||lm(r,n,a)}return a}function lm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=me.updateQueue,n===null?(n=Dl(),me.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function cm(t,n,a,r){n.value=a,n.getSnapshot=r,fm(n)&&dm(t)}function um(t,n,a){return a(function(){fm(n)&&dm(t)})}function fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function dm(t){var n=Ms(t,2);n!==null&&Qn(n,t,2)}function qu(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ds){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function hm(t,n,a,r){return t.baseState=a,Xu(t,Ze,typeof r=="function"?r:la)}function yx(t,n,a,r,c){if(Pl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,pm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function pm(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var R=a(c,r),G=P.S;G!==null&&G(g,R),mm(t,n,R)}catch(nt){Yu(t,n,nt)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(c,r),mm(t,n,f)}catch(nt){Yu(t,n,nt)}}function mm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){gm(t,n,r)},function(r){return Yu(t,n,r)}):gm(t,n,a)}function gm(t,n,a){n.status="fulfilled",n.value=a,_m(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,pm(t,a)))}function Yu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_m(n),n=n.next;while(n!==r)}t.action=null}function _m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function vm(t,n){return n}function xm(t,n){if(Re){var a=$e.formState;if(a!==null){t:{var r=me;if(Re){if(en){e:{for(var c=en,f=vi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){en=Si(c.nextSibling),r=c.data==="F!";break t}}za(r)}r=!1}r&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=r,a=zm.bind(null,me,r),r.dispatch=a,r=qu(!1),f=$u.bind(null,me,!1,r.queue),r=kn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=yx.bind(null,me,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Sm(t){var n=dn();return Mm(n,Ze,t)}function Mm(t,n,a){if(n=Xu(t,n,vm)[0],t=Nl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=So(n)}catch(g){throw g===or?yl:g}else r=n;n=dn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(me.flags|=2048,dr(9,{destroy:void 0},bx.bind(null,c,a),null)),[r,f,t]}function bx(t,n){t.action=n}function ym(t){var n=dn(),a=Ze;if(a!==null)return Mm(n,a,t);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function dr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=me.updateQueue,n===null&&(n=Dl(),me.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function bm(){return dn().memoizedState}function Ll(t,n,a,r){var c=kn();me.flags|=t,c.memoizedState=dr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ol(t,n,a,r){var c=dn();r=r===void 0?null:r;var f=c.memoizedState.inst;Ze!==null&&r!==null&&zu(r,Ze.memoizedState.deps)?c.memoizedState=dr(n,f,a,r):(me.flags|=t,c.memoizedState=dr(1|n,f,a,r))}function Em(t,n){Ll(8390656,8,t,n)}function ju(t,n){Ol(2048,8,t,n)}function Ex(t){me.flags|=4;var n=me.updateQueue;if(n===null)n=Dl(),me.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Tm(t){var n=dn().memoizedState;return Ex({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Am(t,n){return Ol(4,2,t,n)}function Rm(t,n){return Ol(4,4,t,n)}function Cm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function wm(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,Cm.bind(null,n,t),a)}function Zu(){}function Dm(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&zu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Um(t,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&zu(n,r[1]))return r[0];if(r=t(),Ds){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[r,n],r}function Ku(t,n,a){return a===void 0||(oa&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=N0(),me.lanes|=t,Ya|=t,a)}function Nm(t,n,a,r){return ii(a,n)?a:cr.current!==null?(t=Ku(t,a,r),ii(t,n)||(xn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(Te&261930)===0?(xn=!0,t.memoizedState=a):(t=N0(),me.lanes|=t,Ya|=t,n)}function Lm(t,n,a,r,c){var f=F.p;F.p=f!==0&&8>f?f:8;var g=P.T,R={};P.T=R,$u(t,!1,n,a);try{var G=c(),nt=P.S;if(nt!==null&&nt(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=xx(G,r);Mo(t,n,mt,ci(t))}else Mo(t,n,r,ci(t))}catch(Mt){Mo(t,n,{then:function(){},status:"rejected",reason:Mt},ci())}finally{F.p=f,g!==null&&R.types!==null&&(g.types=R.types),P.T=g}}function Tx(){}function Qu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Om(t).queue;Lm(t,c,n,ot,a===null?Tx:function(){return Pm(t),a(r)})}function Om(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Pm(t){var n=Om(t);n.next===null&&(n=t.alternate.memoizedState),Mo(t,n.next.queue,{},ci())}function Ju(){return Nn(zo)}function Bm(){return dn().memoizedState}function Im(){return dn().memoizedState}function Ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Ga(a);var r=Va(n,t,a);r!==null&&(Qn(r,n,a),go(r,n,a)),n={cache:Ru()},t.payload=n;return}n=n.return}}function Rx(t,n,a){var r=ci();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Fm(n,a):(a=gu(t,n,a,r),a!==null&&(Qn(a,t,r),Hm(a,n,r)))}function zm(t,n,a){var r=ci();Mo(t,n,a,r)}function Mo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Fm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(c.hasEagerState=!0,c.eagerState=R,ii(R,g))return ml(t,n,c,0),$e===null&&pl(),!1}catch{}finally{}if(a=gu(t,n,c,r),a!==null)return Qn(a,t,r),Hm(a,n,r),!0}return!1}function $u(t,n,a,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(s(479))}else n=gu(t,a,r,2),n!==null&&Qn(n,t,2)}function Pl(t){var n=t.alternate;return t===me||n!==null&&n===me}function Fm(t,n){ur=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Hm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,pn(t,a)}}var yo={readContext:Nn,use:Ul,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};yo.useEffectEvent=on;var Gm={readContext:Nn,use:Ul,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:Em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,Cm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ll(4194308,4,t,n)},useInsertionEffect:function(t,n){Ll(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var r=t();if(Ds){Bt(!0);try{t()}finally{Bt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=kn();if(a!==void 0){var c=a(n);if(Ds){Bt(!0);try{a(n)}finally{Bt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=Rx.bind(null,me,t),[r.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=qu(t);var n=t.queue,a=zm.bind(null,me,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(t,n){var a=kn();return Ku(a,t,n)},useTransition:function(){var t=qu(!1);return t=Lm.bind(null,me,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=me,c=kn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$e===null)throw Error(s(349));(Te&127)!==0||lm(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Em(um.bind(null,r,f,t),[t]),r.flags|=2048,dr(9,{destroy:void 0},cm.bind(null,r,f,a,n),null),a},useId:function(){var t=kn(),n=$e.identifierPrefix;if(Re){var a=Hi,r=Fi;a=(r&~(1<<32-It(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Sx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ju,useFormState:xm,useActionState:xm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,me,!0,a),a.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return kn().memoizedState=Ax.bind(null,me)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},tf={readContext:Nn,use:Ul,useCallback:Dm,useContext:Nn,useEffect:ju,useImperativeHandle:wm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Um,useReducer:Nl,useRef:bm,useState:function(){return Nl(la)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=dn();return Nm(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Nl(la)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:om,useId:Bm,useHostTransitionStatus:Ju,useFormState:Sm,useActionState:Sm,useOptimistic:function(t,n){var a=dn();return hm(a,Ze,t,n)},useMemoCache:ku,useCacheRefresh:Im};tf.useEffectEvent=Tm;var Vm={readContext:Nn,use:Ul,useCallback:Dm,useContext:Nn,useEffect:ju,useImperativeHandle:wm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Um,useReducer:Wu,useRef:bm,useState:function(){return Wu(la)},useDebugValue:Zu,useDeferredValue:function(t,n){var a=dn();return Ze===null?Ku(a,t,n):Nm(a,Ze.memoizedState,t,n)},useTransition:function(){var t=Wu(la)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:om,useId:Bm,useHostTransitionStatus:Ju,useFormState:ym,useActionState:ym,useOptimistic:function(t,n){var a=dn();return Ze!==null?hm(a,Ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:Im};Vm.useEffectEvent=Tm;function ef(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ci(),c=Ga(r);c.payload=n,a!=null&&(c.callback=a),n=Va(t,c,r),n!==null&&(Qn(n,t,r),go(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ci(),c=Ga(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Va(t,c,r),n!==null&&(Qn(n,t,r),go(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),r=Ga(a);r.tag=2,n!=null&&(r.callback=n),n=Va(t,r,a),n!==null&&(Qn(n,t,a),go(n,t,a))}};function km(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!oo(a,r)||!oo(c,f):!0}function Xm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nf.enqueueReplaceState(n,n.state,null)}function Us(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Wm(t){hl(t)}function qm(t){console.error(t)}function Ym(t){hl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function jm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function af(t,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function Zm(t){return t=Ga(t),t.tag=3,t}function Km(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){jm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){jm(n,a,r),typeof c!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Cx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,c,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return xi===null?jl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),wf(t,r,c)),!1;case 22:return a.flags|=65536,r===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),wf(t,r,c)),!1}throw Error(s(435,a.tag))}return wf(t,r,c),jl(),!1}if(Re)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==yu&&(t=Error(s(422),{cause:r}),uo(mi(t,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),uo(mi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=mi(r,a),c=af(t.stateNode,r,c),Lu(t,c),ln!==4&&(ln=2)),!1;var f=Error(s(520),{cause:r});if(f=mi(f,a),Do===null?Do=[f]:Do.push(f),ln!==4&&(ln=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=af(a.stateNode,r,t),Lu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ja===null||!ja.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Zm(c),Km(c,t,a,r),Lu(a,c),!1}a=a.return}while(a!==null);return!1}var sf=Error(s(461)),xn=!1;function Ln(t,n,a,r){n.child=t===null?tm(n,null,a,r):ws(n,t.child,a,r)}function Qm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var R in r)R!=="ref"&&(g[R]=r[R])}else g=r;return Ts(n),r=Fu(t,n,a,g,f,c),R=Hu(),t!==null&&!xn?(Gu(t,n,c),ca(t,n,c)):(Re&&R&&Su(n),n.flags|=1,Ln(t,n,r,c),n.child)}function Jm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,$m(t,n,f,r,c)):(t=_l(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hf(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(g,r)&&t.ref===n.ref)return ca(t,n,c)}return n.flags|=1,t=ia(f,r),t.ref=n.ref,t.return=n,n.child=t}function $m(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(oo(f,r)&&t.ref===n.ref)if(xn=!1,n.pendingProps=r=f,hf(t,c))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,ca(t,n,c)}return rf(t,n,a,r,c)}function t0(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return e0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?im(n,f):Pu(),am(n);else return r=n.lanes=536870912,e0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Ml(n,f.cachePool),im(n,f),Xa(),n.memoizedState=null):(t!==null&&Ml(n,null),Pu(),Xa());return Ln(t,n,c,a),n.child}function bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function e0(t,n,a,r,c){var f=wu();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ml(n,null),Pu(),am(n),t!==null&&ar(t,n,r,!0),n.childLanes=c,null}function Il(t,n){return n=Fl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function n0(t,n,a){return ws(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function wx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Re){if(r.mode==="hidden")return t=Il(n,r),n.lanes=536870912,bo(null,t);if(Iu(n),(t=en)?(t=pg(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Fp(t),a.return=n,n.child=a,Un=n,en=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return Il(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Iu(n),c)if(n.flags&256)n.flags&=-257,n=n0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||ar(t,n,a,!1),c=(a&t.childLanes)!==0,xn||c){if(r=$e,r!==null&&(g=mn(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ms(t,g),Qn(r,t,g),sf;jl(),n=n0(t,n,a)}else t=f.treeContext,en=Si(g.nextSibling),Un=n,Re=!0,Ia=null,vi=!1,t!==null&&Vp(n,t),n=Il(n,r),n.flags|=4096;return n}return t=ia(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rf(t,n,a,r,c){return Ts(n),a=Fu(t,n,a,r,void 0,c),r=Hu(),t!==null&&!xn?(Gu(t,n,c),ca(t,n,c)):(Re&&r&&Su(n),n.flags|=1,Ln(t,n,a,c),n.child)}function i0(t,n,a,r,c,f){return Ts(n),n.updateQueue=null,a=rm(n,r,a,c),sm(t),r=Hu(),t!==null&&!xn?(Gu(t,n,f),ca(t,n,f)):(Re&&r&&Su(n),n.flags|=1,Ln(t,n,a,f),n.child)}function a0(t,n,a,r,c){if(Ts(n),n.stateNode===null){var f=tr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Nn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Uu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Nn(g):tr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(ef(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&nf.enqueueReplaceState(f,f.state,null),vo(n,r,f,c),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,G=Us(a,R);f.props=G;var nt=f.context,mt=a.contextType;g=tr,typeof mt=="object"&&mt!==null&&(g=Nn(mt));var Mt=a.getDerivedStateFromProps;mt=typeof Mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||nt!==g)&&Xm(n,f,r,g),Ha=!1;var rt=n.memoizedState;f.state=rt,vo(n,r,f,c),_o(),nt=n.memoizedState,R||rt!==nt||Ha?(typeof Mt=="function"&&(ef(n,a,Mt,r),nt=n.memoizedState),(G=Ha||km(n,a,G,r,rt,nt,g))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=g,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Nu(t,n),g=n.memoizedProps,mt=Us(a,g),f.props=mt,Mt=n.pendingProps,rt=f.context,nt=a.contextType,G=tr,typeof nt=="object"&&nt!==null&&(G=Nn(nt)),R=a.getDerivedStateFromProps,(nt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==Mt||rt!==G)&&Xm(n,f,r,G),Ha=!1,rt=n.memoizedState,f.state=rt,vo(n,r,f,c),_o();var ft=n.memoizedState;g!==Mt||rt!==ft||Ha||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof R=="function"&&(ef(n,a,R,r),ft=n.memoizedState),(mt=Ha||km(n,a,mt,r,rt,ft,G)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ft,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ft,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ft),f.props=r,f.state=ft,f.context=G,r=mt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&rt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ws(n,t.child,null,c),n.child=ws(n,null,a,c)):Ln(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ca(t,n,c),t}function s0(t,n,a,r){return bs(),n.flags|=256,Ln(t,n,a,r),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(t){return{baseLanes:t,cachePool:jp()}}function cf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function r0(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(fn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?ka(n):Xa(),(t=en)?(t=pg(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Fp(t),a.return=n,n.child=a,Un=n,en=null)):t=null,t===null)throw za(n);return Wf(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,c?(Xa(),c=n.mode,R=Fl({mode:"hidden",children:R},c),r=ys(r,c,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,g,a),n.memoizedState=of,bo(null,r)):(ka(n),uf(n,R))}var G=t.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(f)n.flags&256?(ka(n),n.flags&=-257,n=ff(t,n,a)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,n=null):(Xa(),R=r.fallback,c=n.mode,r=Fl({mode:"visible",children:r.children},c),R=ys(R,c,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,ws(n,t.child,null,a),r=n.child,r.memoizedState=lf(a),r.childLanes=cf(t,g,a),n.memoizedState=of,n=bo(null,r));else if(ka(n),Wf(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var nt=g.dgst;g=nt,r=Error(s(419)),r.stack="",r.digest=g,uo({value:r,source:null,stack:null}),n=ff(t,n,a)}else if(xn||ar(t,n,a,!1),g=(a&t.childLanes)!==0,xn||g){if(g=$e,g!==null&&(r=mn(g,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,Ms(t,r),Qn(g,t,r),sf;Xf(R)||jl(),n=ff(t,n,a)}else Xf(R)?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,en=Si(R.nextSibling),Un=n,Re=!0,Ia=null,vi=!1,t!==null&&Vp(n,t),n=uf(n,r.children),n.flags|=4096);return n}return c?(Xa(),R=r.fallback,c=n.mode,G=t.child,nt=G.sibling,r=ia(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,nt!==null?R=ia(nt,R):(R=ys(R,c,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,bo(null,r),r=n.child,R=t.child.memoizedState,R===null?R=lf(a):(c=R.cachePool,c!==null?(G=_n._currentValue,c=c.parent!==G?{parent:G,pool:G}:c):c=jp(),R={baseLanes:R.baseLanes|a,cachePool:c}),r.memoizedState=R,r.childLanes=cf(t,g,a),n.memoizedState=of,bo(t.child,r)):(ka(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function uf(t,n){return n=Fl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Fl(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function ff(t,n,a){return ws(n,t.child,null,a),t=uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function o0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Tu(t.return,n,a)}function df(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function l0(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=fn.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,lt(fn,g),Ln(t,n,r,a),r=Re?co:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,a,n);else if(t.tag===19)o0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),df(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Rl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}df(n,!0,a,null,f,r);break;case"together":df(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function Dx(t,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),Fa(n,_n,t.memoizedState.cache),bs();break;case 27:case 5:Gt(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?r0(t,n,a):(ka(n),t=ca(t,n,a),t!==null?t.sibling:null);ka(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ar(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return l0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),lt(fn,fn.current),r)break;return null;case 22:return n.lanes=0,t0(t,n,a,n.pendingProps);case 24:Fa(n,_n,t.memoizedState.cache)}return ca(t,n,a)}function c0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return xn=!1,Dx(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Re&&(n.flags&1048576)!==0&&Gp(n,co,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Rs(n.elementType),n.type=t,typeof t=="function")_u(t)?(r=Us(t,r),n.tag=1,n=a0(null,n,t,r,a)):(n.tag=0,n=rf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=Qm(null,n,t,r,a);break t}else if(c===I){n.tag=14,n=Jm(null,n,t,r,a);break t}}throw n=dt(t)||t,Error(s(306,n,""))}}return n;case 0:return rf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Us(r,n.pendingProps),a0(t,n,r,c,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Nu(t,n),vo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Fa(n,_n,r),r!==f.cache&&Au(n,[_n],a,!0),_o(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=s0(t,n,r,a);break t}else if(r!==c){c=mi(Error(s(424)),n),uo(c),n=s0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Si(t.firstChild),Un=n,Re=!0,Ia=null,vi=!0,a=tm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bs(),r===c){n=ca(t,n,a);break t}Ln(t,n,r,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=Sg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,r=ec($.current).createElement(a),r[un]=n,r[Dn]=t,On(r,a,t),gn(r),n.stateNode=r):n.memoizedState=Sg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Gt(n),t===null&&Re&&(r=n.stateNode=_g(n.type,n.pendingProps,$.current),Un=n,vi=!0,c=en,Ja(n.type)?(qf=c,en=Si(r.firstChild)):en=c),Ln(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=r=en)&&(r=rS(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,Un=n,en=Si(r.firstChild),vi=!1,c=!0):c=!1),c||za(n)),Gt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Gf(c,f)?r=null:g!==null&&Gf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Fu(t,n,Mx,null,null,a),zo._currentValue=c),zl(t,n),Ln(t,n,r,a),n.child;case 6:return t===null&&Re&&((t=a=en)&&(a=oS(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Un=n,en=null,t=!0):t=!1),t||za(n)),null;case 13:return r0(t,n,a);case 4:return xt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ws(n,null,r,a):Ln(t,n,r,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Fa(n,n.type,r.value),Ln(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Ts(n),c=Nn(c),r=r(c),n.flags|=1,Ln(t,n,r,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return $m(t,n,n.type,n.pendingProps,a);case 19:return l0(t,n,a);case 31:return wx(t,n,a);case 22:return t0(t,n,a,n.pendingProps);case 24:return Ts(n),r=Nn(_n),t===null?(c=wu(),c===null&&(c=$e,f=Ru(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Uu(n),Fa(n,_n,c)):((t.lanes&a)!==0&&(Nu(t,n),vo(n,null,null,a),_o()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Fa(n,_n,r)):(r=f.cache,Fa(n,_n,r),r!==c.cache&&Au(n,[_n],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(t){t.flags|=4}function pf(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(B0())t.flags|=8192;else throw Cs=bl,Du}else t.flags&=-16777217}function u0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tg(n))if(B0())t.flags|=8192;else throw Cs=bl,Du}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tt():536870912,t.lanes|=n,gr|=n)}function Eo(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Ux(t,n,a){var r=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ra(_n),Ct(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ir(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bu())),nn(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ua(n),f!==null?(nn(n),u0(n,f)):(nn(n),pf(n,c,null,r,a))):f?f!==t.memoizedState?(ua(n),nn(n),u0(n,f)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ua(n),nn(n),pf(n,c,t,r,a)),null;case 27:if(kt(n),a=$.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),null}t=K.current,ir(n)?kp(n):(t=_g(c,r,a),n.stateNode=t,ua(n))}return nn(n),null;case 5:if(kt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),null}if(f=K.current,ir(n))kp(n);else{var g=ec($.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[un]=n,f[Dn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(On(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ua(n)}}return nn(n),pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ua(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,ir(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Un,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||rg(t.nodeValue,a)),t||za(n,!0)}else t=ec(t).createTextNode(r),t[un]=n,n.stateNode=t}return nn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ir(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[un]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else a=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ir(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[un]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),c=!1}else c=bu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),nn(n),null);case 4:return Ct(),t===null&&Bf(n.stateNode.containerInfo),nn(n),null;case 10:return ra(n.type),nn(n),null;case 19:if(H(fn),r=n.memoizedState,r===null)return nn(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Eo(r,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rl(t),f!==null){for(n.flags|=128,Eo(r,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return lt(fn,fn.current&1|2),Re&&aa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Dt()>Wl&&(n.flags|=128,c=!0,Eo(r,!1),n.lanes=4194304)}else{if(!c)if(t=Rl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),Eo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Re)return nn(n),null}else 2*Dt()-r.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,c=!0,Eo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Dt(),t.sibling=null,a=fn.current,lt(fn,c?a&1|2:a&1),Re&&aa(n,r.treeForkCount),t):(nn(n),null);case 22:case 23:return ri(n),Bu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&H(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(_n),nn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Nx(t,n){switch(Mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(_n),Ct(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return H(fn),null;case 4:return Ct(),null;case 10:return ra(n.type),null;case 22:case 23:return ri(n),Bu(),t!==null&&H(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(_n),null;case 25:return null;default:return null}}function f0(t,n){switch(Mu(n),n.tag){case 3:ra(_n),Ct();break;case 26:case 27:case 5:kt(n);break;case 4:Ct();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:H(fn);break;case 10:ra(n.type);break;case 22:case 23:ri(n),Bu(),t!==null&&H(As);break;case 24:ra(_n)}}function To(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(R){Xe(n,n.return,R)}}function Wa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,c=n;var G=a,nt=R;try{nt()}catch(mt){Xe(c,G,mt)}}}r=r.next}while(r!==f)}}catch(mt){Xe(n,n.return,mt)}}function d0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{nm(n,a)}catch(r){Xe(t,t.return,r)}}}function h0(t,n,a){a.props=Us(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(t,n,r)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Xe(t,n,c)}}function Gi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Xe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(t,n,c)}else a.current=null}function p0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Xe(t,t.return,c)}}function mf(t,n,a){try{var r=t.stateNode;tS(r,t.type,a,n),r[Dn]=n}catch(c){Xe(t,t.return,c)}}function m0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ja(t.type)||t.tag===4}function gf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _f(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(r!==4&&(r===27&&Ja(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(_f(t,n,a),t=t.sibling;t!==null;)_f(t,n,a),t=t.sibling}function Gl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ja(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function g0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,r,a),n[un]=t,n[Dn]=a}catch(f){Xe(t,t.return,f)}}var fa=!1,Sn=!1,vf=!1,_0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function Lx(t,n){if(t=t.containerInfo,Ff=lc,t=wp(t),uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,R=-1,G=-1,nt=0,mt=0,Mt=t,rt=null;e:for(;;){for(var ft;Mt!==a||c!==0&&Mt.nodeType!==3||(R=g+c),Mt!==f||r!==0&&Mt.nodeType!==3||(G=g+r),Mt.nodeType===3&&(g+=Mt.nodeValue.length),(ft=Mt.firstChild)!==null;)rt=Mt,Mt=ft;for(;;){if(Mt===t)break e;if(rt===a&&++nt===c&&(R=g),rt===f&&++mt===r&&(G=g),(ft=Mt.nextSibling)!==null)break;Mt=rt,rt=Mt.parentNode}Mt=ft}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:t,selectionRange:a},lc=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Jt=Us(a.type,c);t=r.getSnapshotBeforeUpdate(Jt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(oe){Xe(a,a.return,oe)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function v0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),r&4&&To(5,a);break;case 1:if(ha(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Xe(a,a.return,g)}else{var c=Us(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Xe(a,a.return,g)}}r&64&&d0(a),r&512&&Ao(a,a.return);break;case 3:if(ha(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{nm(t,n)}catch(g){Xe(a,a.return,g)}}break;case 27:n===null&&r&4&&g0(a);case 26:case 5:ha(t,a),n===null&&r&4&&p0(a),r&512&&Ao(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),r&4&&M0(t,a);break;case 13:ha(t,a),r&4&&y0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vx.bind(null,a),lS(t,a))));break;case 22:if(r=a.memoizedState!==null||fa,!r){n=n!==null&&n.memoizedState!==null||Sn,c=fa;var f=Sn;fa=r,(Sn=n)&&!f?pa(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),fa=c,Sn=f}break;case 30:break;default:ha(t,a)}}function x0(t){var n=t.alternate;n!==null&&(t.alternate=null,x0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Yn=!1;function da(t,n,a){for(a=a.child;a!==null;)S0(t,n,a),a=a.sibling}function S0(t,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:Sn||Gi(a,n),da(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Sn||Gi(a,n);var r=rn,c=Yn;Ja(a.type)&&(rn=a.stateNode,Yn=!1),da(t,n,a),Po(a.stateNode),rn=r,Yn=c;break;case 5:Sn||Gi(a,n);case 6:if(r=rn,c=Yn,rn=null,da(t,n,a),rn=r,Yn=c,rn!==null)if(Yn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Xe(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Xe(a,n,f)}break;case 18:rn!==null&&(Yn?(t=rn,dg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Er(t)):dg(rn,a.stateNode));break;case 4:r=rn,c=Yn,rn=a.stateNode.containerInfo,Yn=!0,da(t,n,a),rn=r,Yn=c;break;case 0:case 11:case 14:case 15:Wa(2,a,n),Sn||Wa(4,a,n),da(t,n,a);break;case 1:Sn||(Gi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&h0(a,n,r)),da(t,n,a);break;case 21:da(t,n,a);break;case 22:Sn=(r=Sn)||a.memoizedState!==null,da(t,n,a),Sn=r;break;default:da(t,n,a)}}function M0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Er(t)}catch(a){Xe(n,n.return,a)}}}function y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Er(t)}catch(a){Xe(n,n.return,a)}}function Ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _0),n;default:throw Error(s(435,t.tag))}}function Vl(t,n){var a=Ox(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=kx.bind(null,t,r);r.then(c,c)}})}function jn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,R=g;t:for(;R!==null;){switch(R.tag){case 27:if(Ja(R.type)){rn=R.stateNode,Yn=!1;break t}break;case 5:rn=R.stateNode,Yn=!1;break t;case 3:case 4:rn=R.stateNode.containerInfo,Yn=!0;break t}R=R.return}if(rn===null)throw Error(s(160));S0(f,g,c),rn=null,Yn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)b0(n,t),n=n.sibling}var wi=null;function b0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:jn(n,t),Zn(t),r&4&&(Wa(3,t,t.return),To(3,t),Wa(5,t,t.return));break;case 1:jn(n,t),Zn(t),r&512&&(Sn||a===null||Gi(a,a.return)),r&64&&fa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=wi;if(jn(n,t),Zn(t),r&512&&(Sn||a===null||Gi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Da]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),On(f,r,a),f[un]=t,gn(f),r=f;break t;case"link":var g=bg("link","href",c).get(r+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(f=g[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break e}}f=c.createElement(r),On(f,r,a),c.head.appendChild(f);break;case"meta":if(g=bg("meta","content",c).get(r+(a.content||""))){for(R=0;R<g.length;R++)if(f=g[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break e}}f=c.createElement(r),On(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[un]=t,gn(f),r=f}t.stateNode=r}else Eg(c,t.type,t.stateNode);else t.stateNode=yg(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Eg(c,t.type,t.stateNode):yg(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:jn(n,t),Zn(t),r&512&&(Sn||a===null||Gi(a,a.return)),a!==null&&r&4&&mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,t),Zn(t),r&512&&(Sn||a===null||Gi(a,a.return)),t.flags&32){c=t.stateNode;try{ni(c,"")}catch(Jt){Xe(t,t.return,Jt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,mf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(vf=!0);break;case 6:if(jn(n,t),Zn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Jt){Xe(t,t.return,Jt)}}break;case 3:if(ac=null,c=wi,wi=nc(n.containerInfo),jn(n,t),wi=c,Zn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Jt){Xe(t,t.return,Jt)}vf&&(vf=!1,E0(t));break;case 4:r=wi,wi=nc(t.stateNode.containerInfo),jn(n,t),Zn(t),wi=r;break;case 12:jn(n,t),Zn(t);break;case 31:jn(n,t),Zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Vl(t,r)));break;case 13:jn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=Dt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Vl(t,r)));break;case 22:c=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=fa,mt=Sn;if(fa=nt||c,Sn=mt||G,jn(n,t),Sn=mt,fa=nt,Zn(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||G||fa||Sn||Ns(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=G.stateNode;var Mt=G.memoizedProps.style,rt=Mt!=null&&Mt.hasOwnProperty("display")?Mt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Jt){Xe(G,G.return,Jt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(Jt){Xe(G,G.return,Jt)}}}else if(n.tag===18){if(a===null){G=n;try{var ft=G.stateNode;c?hg(ft,!0):hg(G.stateNode,!1)}catch(Jt){Xe(G,G.return,Jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Vl(t,a))));break;case 19:jn(n,t),Zn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Vl(t,r)));break;case 30:break;case 21:break;default:jn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(m0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=gf(t);Gl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(ni(g,""),a.flags&=-33);var R=gf(t);Gl(t,R,g);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=gf(t);_f(t,nt,G);break;default:throw Error(s(161))}}catch(mt){Xe(t,t.return,mt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function E0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;E0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)v0(t,n.alternate,n),n=n.sibling}function Ns(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Ns(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&h0(n,n.return,a),Ns(n);break;case 27:Po(n.stateNode);case 26:case 5:Gi(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:pa(c,f,a),To(4,f);break;case 1:if(pa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){Xe(r,r.return,nt)}if(r=f,c=r.updateQueue,c!==null){var R=r.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)em(G[c],R)}catch(nt){Xe(r,r.return,nt)}}a&&g&64&&d0(f),Ao(f,f.return);break;case 27:g0(f);case 26:case 5:pa(c,f,a),a&&r===null&&g&4&&p0(f),Ao(f,f.return);break;case 12:pa(c,f,a);break;case 31:pa(c,f,a),a&&g&4&&M0(c,f);break;case 13:pa(c,f,a),a&&g&4&&y0(c,f);break;case 22:f.memoizedState===null&&pa(c,f,a),Ao(f,f.return);break;case 30:break;default:pa(c,f,a)}n=n.sibling}}function xf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function Sf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Di(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)T0(t,n,a,r),n=n.sibling}function T0(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,r),c&2048&&To(9,n);break;case 1:Di(t,n,a,r);break;case 3:Di(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(c&2048){Di(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,R=f.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Xe(n,n.return,G)}}else Di(t,n,a,r);break;case 31:Di(t,n,a,r);break;case 13:Di(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Di(t,n,a,r):Ro(t,n):f._visibility&2?Di(t,n,a,r):(f._visibility|=2,hr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&xf(g,n);break;case 24:Di(t,n,a,r),c&2048&&Sf(n.alternate,n);break;default:Di(t,n,a,r)}}function hr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,R=a,G=r,nt=g.flags;switch(g.tag){case 0:case 11:case 15:hr(f,g,R,G,c),To(8,g);break;case 23:break;case 22:var mt=g.stateNode;g.memoizedState!==null?mt._visibility&2?hr(f,g,R,G,c):Ro(f,g):(mt._visibility|=2,hr(f,g,R,G,c)),c&&nt&2048&&xf(g.alternate,g);break;case 24:hr(f,g,R,G,c),c&&nt&2048&&Sf(g.alternate,g);break;default:hr(f,g,R,G,c)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:Ro(a,r),c&2048&&xf(r.alternate,r);break;case 24:Ro(a,r),c&2048&&Sf(r.alternate,r);break;default:Ro(a,r)}n=n.sibling}}var Co=8192;function pr(t,n,a){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)A0(t,n,a),t=t.sibling}function A0(t,n,a){switch(t.tag){case 26:pr(t,n,a),t.flags&Co&&t.memoizedState!==null&&SS(a,wi,t.memoizedState,t.memoizedProps);break;case 5:pr(t,n,a);break;case 3:case 4:var r=wi;wi=nc(t.stateNode.containerInfo),pr(t,n,a),wi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Co,Co=16777216,pr(t,n,a),Co=r):pr(t,n,a));break;default:pr(t,n,a)}}function R0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,w0(r,t)}R0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)C0(t),t=t.sibling}function C0(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,kl(t)):wo(t);break;default:wo(t)}}function kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,w0(r,t)}R0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,kl(n));break;default:kl(n)}t=t.sibling}}function w0(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Rn=r;else t:for(a=t;Rn!==null;){r=Rn;var c=r.sibling,f=r.return;if(x0(r),r===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var Px={getCacheForType:function(t){var n=Nn(_n),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(_n).controller.signal}},Bx=typeof WeakMap=="function"?WeakMap:Map,ze=0,$e=null,ye=null,Te=0,ke=0,oi=null,qa=!1,mr=!1,Mf=!1,ma=0,ln=0,Ya=0,Ls=0,yf=0,li=0,gr=0,Do=null,Kn=null,bf=!1,Xl=0,D0=0,Wl=1/0,ql=null,ja=null,En=0,Za=null,_r=null,ga=0,Ef=0,Tf=null,U0=null,Uo=0,Af=null;function ci(){return(ze&2)!==0&&Te!==0?Te&-Te:P.T!==null?Nf():Ti()}function N0(){if(li===0)if((Te&536870912)===0||Re){var t=ve;ve<<=1,(ve&3932160)===0&&(ve=262144),li=t}else li=536870912;return t=si.current,t!==null&&(t.flags|=32),li}function Qn(t,n,a){(t===$e&&(ke===2||ke===9)||t.cancelPendingCommit!==null)&&(vr(t,0),Ka(t,Te,li,!1)),re(t,a),((ze&2)===0||t!==$e)&&(t===$e&&((ze&2)===0&&(Ls|=a),ln===4&&Ka(t,Te,li,!1)),Vi(t))}function L0(t,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ft(t,n),c=r?Fx(t,n):Cf(t,n,!0),f=r;do{if(c===0){mr&&!r&&Ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ix(a)){c=Cf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=t;c=Do;var G=R.current.memoizedState.isDehydrated;if(G&&(vr(R,g).flags|=256),g=Cf(R,g,!1),g!==2){if(Mf&&!G){R.errorRecoveryDisabledLanes|=f,Ls|=f,c=4;break t}f=Kn,Kn=c,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){vr(t,0),Ka(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ka(r,n,li,!qa);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Xl+300-Dt(),10<c)){if(Ka(r,n,li,!qa),pt(r,0,!0)!==0)break t;ga=n,r.timeoutHandle=ug(O0.bind(null,r,a,Kn,ql,bf,n,li,Ls,gr,qa,f,"Throttled",-0,0),c);break t}O0(r,a,Kn,ql,bf,n,li,Ls,gr,qa,f,null,-0,0)}}break}while(!0);Vi(t)}function O0(t,n,a,r,c,f,g,R,G,nt,mt,Mt,rt,ft){if(t.timeoutHandle=-1,Mt=n.subtreeFlags,Mt&8192||(Mt&16785408)===16785408){Mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},A0(n,f,Mt);var Jt=(f&62914560)===f?Xl-Dt():(f&4194048)===f?D0-Dt():0;if(Jt=MS(Mt,Jt),Jt!==null){ga=f,t.cancelPendingCommit=Jt(V0.bind(null,t,n,f,a,r,c,g,R,G,mt,Mt,null,rt,ft)),Ka(t,f,g,!nt);return}}V0(t,n,f,a,r,c,g,R,G)}function Ix(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!ii(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ka(t,n,a,r){n&=~yf,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-It(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&Ue(t,a,n)}function Yl(){return(ze&6)===0?(No(0),!1):!0}function Rf(){if(ye!==null){if(ke===0)var t=ye.return;else t=ye,sa=Es=null,Vu(t),lr=null,po=0,t=ye;for(;t!==null;)f0(t.alternate,t),t=t.return;ye=null}}function vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,Rf(),$e=t,ye=a=ia(t.current,null),Te=n,ke=0,oi=null,qa=!1,mr=Ft(t,n),Mf=!1,gr=li=yf=Ls=Ya=ln=0,Kn=Do=null,bf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-It(r),f=1<<c;n|=t[c],r&=~f}return ma=n,pl(),a}function P0(t,n){me=null,P.H=yo,n===or||n===yl?(n=Qp(),ke=3):n===Du?(n=Qp(),ke=4):ke=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,ye===null&&(ln=1,Bl(t,mi(n,t.current)))}function B0(){var t=si.current;return t===null?!0:(Te&4194048)===Te?xi===null:(Te&62914560)===Te||(Te&536870912)!==0?t===xi:!1}function I0(){var t=P.H;return P.H=yo,t===null?yo:t}function z0(){var t=P.A;return P.A=Px,t}function jl(){ln=4,qa||(Te&4194048)!==Te&&si.current!==null||(mr=!0),(Ya&134217727)===0&&(Ls&134217727)===0||$e===null||Ka($e,Te,li,!1)}function Cf(t,n,a){var r=ze;ze|=2;var c=I0(),f=z0();($e!==t||Te!==n)&&(ql=null,vr(t,n)),n=!1;var g=ln;t:do try{if(ke!==0&&ye!==null){var R=ye,G=oi;switch(ke){case 8:Rf(),g=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var nt=ke;if(ke=0,oi=null,xr(t,R,G,nt),a&&mr){g=0;break t}break;default:nt=ke,ke=0,oi=null,xr(t,R,G,nt)}}zx(),g=ln;break}catch(mt){P0(t,mt)}while(!0);return n&&t.shellSuspendCounter++,sa=Es=null,ze=r,P.H=c,P.A=f,ye===null&&($e=null,Te=0,pl()),g}function zx(){for(;ye!==null;)F0(ye)}function Fx(t,n){var a=ze;ze|=2;var r=I0(),c=z0();$e!==t||Te!==n?(ql=null,Wl=Dt()+500,vr(t,n)):mr=Ft(t,n);t:do try{if(ke!==0&&ye!==null){n=ye;var f=oi;e:switch(ke){case 1:ke=0,oi=null,xr(t,n,f,1);break;case 2:case 9:if(Zp(f)){ke=0,oi=null,H0(n);break}n=function(){ke!==2&&ke!==9||$e!==t||(ke=7),Vi(t)},f.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Zp(f)?(ke=0,oi=null,H0(n)):(ke=0,oi=null,xr(t,n,f,7));break;case 5:var g=null;switch(ye.tag){case 26:g=ye.memoizedState;case 5:case 27:var R=ye;if(g?Tg(g):R.stateNode.complete){ke=0,oi=null;var G=R.sibling;if(G!==null)ye=G;else{var nt=R.return;nt!==null?(ye=nt,Zl(nt)):ye=null}break e}}ke=0,oi=null,xr(t,n,f,5);break;case 6:ke=0,oi=null,xr(t,n,f,6);break;case 8:Rf(),ln=6;break t;default:throw Error(s(462))}}Hx();break}catch(mt){P0(t,mt)}while(!0);return sa=Es=null,P.H=r,P.A=c,ze=a,ye!==null?0:($e=null,Te=0,pl(),ln)}function Hx(){for(;ye!==null&&!he();)F0(ye)}function F0(t){var n=c0(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Zl(t):ye=n}function H0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=i0(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=i0(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Vu(n);default:f0(a,n),n=ye=zp(n,ma),n=c0(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?Zl(t):ye=n}function xr(t,n,a,r){sa=Es=null,Vu(n),lr=null,po=0;var c=n.return;try{if(Cx(t,c,n,a,Te)){ln=1,Bl(t,mi(a,t.current)),ye=null;return}}catch(f){if(c!==null)throw ye=c,f;ln=1,Bl(t,mi(a,t.current)),ye=null;return}n.flags&32768?(Re||r===1?t=!0:mr||(Te&536870912)!==0?t=!1:(qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=si.current,r!==null&&r.tag===13&&(r.flags|=16384))),G0(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){G0(n,qa);return}t=n.return;var a=Ux(n.alternate,n,ma);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=t}while(n!==null);ln===0&&(ln=5)}function G0(t,n){do{var a=Nx(t.alternate,t);if(a!==null){a.flags&=32767,ye=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ye=t;return}ye=t=a}while(t!==null);ln=6,ye=null}function V0(t,n,a,r,c,f,g,R,G){t.cancelPendingCommit=null;do Kl();while(En!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=mu,je(t,a,f,g,R,G),t===$e&&(ye=$e=null,Te=0),_r=n,Za=t,ga=a,Ef=f,Tf=c,U0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xx(J,function(){return Y0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=F.p,F.p=2,g=ze,ze|=4;try{Lx(t,n,a)}finally{ze=g,F.p=c,P.T=r}}En=1,k0(),X0(),W0()}}function k0(){if(En===1){En=0;var t=Za,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=F.p;F.p=2;var c=ze;ze|=4;try{b0(n,t);var f=Hf,g=wp(t.containerInfo),R=f.focusedElem,G=f.selectionRange;if(g!==R&&R&&R.ownerDocument&&Cp(R.ownerDocument.documentElement,R)){if(G!==null&&uu(R)){var nt=G.start,mt=G.end;if(mt===void 0&&(mt=nt),"selectionStart"in R)R.selectionStart=nt,R.selectionEnd=Math.min(mt,R.value.length);else{var Mt=R.ownerDocument||document,rt=Mt&&Mt.defaultView||window;if(rt.getSelection){var ft=rt.getSelection(),Jt=R.textContent.length,oe=Math.min(G.start,Jt),Qe=G.end===void 0?oe:Math.min(G.end,Jt);!ft.extend&&oe>Qe&&(g=Qe,Qe=oe,oe=g);var Q=Rp(R,oe),W=Rp(R,Qe);if(Q&&W&&(ft.rangeCount!==1||ft.anchorNode!==Q.node||ft.anchorOffset!==Q.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var tt=Mt.createRange();tt.setStart(Q.node,Q.offset),ft.removeAllRanges(),oe>Qe?(ft.addRange(tt),ft.extend(W.node,W.offset)):(tt.setEnd(W.node,W.offset),ft.addRange(tt))}}}}for(Mt=[],ft=R;ft=ft.parentNode;)ft.nodeType===1&&Mt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Mt.length;R++){var St=Mt[R];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}lc=!!Ff,Hf=Ff=null}finally{ze=c,F.p=r,P.T=a}}t.current=n,En=2}}function X0(){if(En===2){En=0;var t=Za,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=F.p;F.p=2;var c=ze;ze|=4;try{v0(t,n.alternate,n)}finally{ze=c,F.p=r,P.T=a}}En=3}}function W0(){if(En===4||En===3){En=0,Ee();var t=Za,n=_r,a=ga,r=U0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?En=5:(En=0,_r=Za=null,q0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ja=null),ms(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=F.p,F.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var R=r[g];f(R.value,{componentStack:R.stack})}}finally{P.T=n,F.p=c}}(ga&3)!==0&&Kl(),Vi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Af?Uo++:(Uo=0,Af=t):Uo=0,No(0)}}function q0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function Kl(){return k0(),X0(),W0(),Y0()}function Y0(){if(En!==5)return!1;var t=Za,n=Ef;Ef=0;var a=ms(ga),r=P.T,c=F.p;try{F.p=32>a?32:a,P.T=null,a=Tf,Tf=null;var f=Za,g=ga;if(En=0,_r=Za=null,ga=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,C0(f.current),T0(f,f.current,g,a),ze=R,No(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{F.p=c,P.T=r,q0(t,n)}}function j0(t,n,a){n=mi(a,n),n=af(t.stateNode,n,2),t=Va(t,n,2),t!==null&&(re(t,2),Vi(t))}function Xe(t,n,a){if(t.tag===3)j0(t,t,a);else for(;n!==null;){if(n.tag===3){j0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){t=mi(a,t),a=Zm(2),r=Va(n,a,2),r!==null&&(Km(a,r,n,t),re(r,2),Vi(r));break}}n=n.return}}function wf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Bx;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Mf=!0,c.add(a),t=Gx.bind(null,t,n,a),n.then(t,t))}function Gx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$e===t&&(Te&a)===a&&(ln===4||ln===3&&(Te&62914560)===Te&&300>Dt()-Xl?(ze&2)===0&&vr(t,0):yf|=a,gr===Te&&(gr=0)),Vi(t)}function Z0(t,n){n===0&&(n=Tt()),t=Ms(t,n),t!==null&&(re(t,n),Vi(t))}function Vx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Z0(t,a)}function kx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Z0(t,a)}function Xx(t,n){return X(t,n)}var Ql=null,Sr=null,Df=!1,Jl=!1,Uf=!1,Qa=0;function Vi(t){t!==Sr&&t.next===null&&(Sr===null?Ql=Sr=t:Sr=Sr.next=t),Jl=!0,Df||(Df=!0,qx())}function No(t,n){if(!Uf&&Jl){Uf=!0;do for(var a=!1,r=Ql;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-It(42|t)+1)-1,f&=c&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,$0(r,f))}else f=Te,f=pt(r,r===$e?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ft(r,f)||(a=!0,$0(r,f));r=r.next}while(a);Uf=!1}}function Wx(){K0()}function K0(){Jl=Df=!1;var t=0;Qa!==0&&nS()&&(t=Qa);for(var n=Dt(),a=null,r=Ql;r!==null;){var c=r.next,f=Q0(r,n);f===0?(r.next=null,a===null?Ql=c:a.next=c,c===null&&(Sr=a)):(a=r,(t!==0||(f&3)!==0)&&(Jl=!0)),r=c}En!==0&&En!==5||No(t),Qa!==0&&(Qa=0)}function Q0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-It(f),R=1<<g,G=c[g];G===-1?((R&a)===0||(R&r)!==0)&&(c[g]=Ot(R,n)):G<=n&&(t.expiredLanes|=R),f&=~R}if(n=$e,a=Te,a=pt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ke===2||ke===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ft(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ye(r),ms(a)){case 2:case 8:a=b;break;case 32:a=J;break;case 268435456:a=At;break;default:a=J}return r=J0.bind(null,t),a=X(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ye(r),t.callbackPriority=2,t.callbackNode=null,2}function J0(t,n){if(En!==0&&En!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var r=Te;return r=pt(t,t===$e?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(L0(t,r,n),Q0(t,Dt()),t.callbackNode!=null&&t.callbackNode===a?J0.bind(null,t):null)}function $0(t,n){if(Kl())return null;L0(t,n,!0)}function qx(){aS(function(){(ze&6)!==0?X(D,Wx):K0()})}function Nf(){if(Qa===0){var t=sr;t===0&&(t=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Qa=t}return Qa}function tg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_s(""+t)}function eg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yx(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=tg((c[Dn]||null).action),g=r.submitter;g&&(n=(n=g[Dn]||null)?tg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new ul("action","action",null,r,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Qa!==0){var G=g?eg(c,g):new FormData(c);Qu(a,{pending:!0,data:G,method:c.method,action:f},null,G)}}else typeof f=="function"&&(R.preventDefault(),G=g?eg(c,g):new FormData(c),Qu(a,{pending:!0,data:G,method:c.method,action:f},f,G))},currentTarget:c}]})}}for(var Lf=0;Lf<pu.length;Lf++){var Of=pu[Lf],jx=Of.toLowerCase(),Zx=Of[0].toUpperCase()+Of.slice(1);Ci(jx,"on"+Zx)}Ci(Np,"onAnimationEnd"),Ci(Lp,"onAnimationIteration"),Ci(Op,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(fx,"onTransitionRun"),Ci(dx,"onTransitionStart"),Ci(hx,"onTransitionCancel"),Ci(Pp,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function ng(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var R=r[g],G=R.instance,nt=R.currentTarget;if(R=R.listener,G!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=nt;try{f(c)}catch(mt){hl(mt)}c.currentTarget=null,f=G}else for(g=0;g<r.length;g++){if(R=r[g],G=R.instance,nt=R.currentTarget,R=R.listener,G!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=nt;try{f(c)}catch(mt){hl(mt)}c.currentTarget=null,f=G}}}}function be(t,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var r=t+"__bubble";a.has(r)||(ig(n,t,2,!1),a.add(r))}function Pf(t,n,a){var r=0;n&&(r|=4),ig(a,t,r,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Bf(t){if(!t[$l]){t[$l]=!0,rl.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Pf(a,!1,t),Pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,Pf("selectionchange",!1,n))}}function ig(t,n,a,r){switch(Ng(n)){case 2:var c=ES;break;case 8:c=TS;break;default:c=Qf}a=c.bind(null,n,a,t),c=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function If(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var R=r.stateNode.containerInfo;if(R===c)break;if(g===4)for(g=r.return;g!==null;){var G=g.tag;if((G===3||G===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;R!==null;){if(g=Ua(R),g===null)return;if(G=g.tag,G===5||G===6||G===26||G===27){r=f=g;continue t}R=R.parentNode}}r=r.return}lp(function(){var nt=f,mt=$c(a),Mt=[];t:{var rt=Bp.get(t);if(rt!==void 0){var ft=ul,Jt=t;switch(t){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":ft=kv;break;case"focusin":Jt="focus",ft=su;break;case"focusout":Jt="blur",ft=su;break;case"beforeblur":case"afterblur":ft=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=qv;break;case Np:case Lp:case Op:ft=Ov;break;case Pp:ft=jv;break;case"scroll":case"scrollend":ft=wv;break;case"wheel":ft=Kv;break;case"copy":case"cut":case"paste":ft=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=hp;break;case"toggle":case"beforetoggle":ft=Jv}var oe=(n&4)!==0,Qe=!oe&&(t==="scroll"||t==="scrollend"),Q=oe?rt!==null?rt+"Capture":null:rt;oe=[];for(var W=nt,tt;W!==null;){var St=W;if(tt=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||tt===null||Q===null||(St=to(W,Q),St!=null&&oe.push(Oo(W,St,tt))),Qe)break;W=W.return}0<oe.length&&(rt=new ft(rt,Jt,null,a,mt),Mt.push({event:rt,listeners:oe}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",ft=t==="mouseout"||t==="pointerout",rt&&a!==Jc&&(Jt=a.relatedTarget||a.fromElement)&&(Ua(Jt)||Jt[ta]))break t;if((ft||rt)&&(rt=mt.window===mt?mt:(rt=mt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ft?(Jt=a.relatedTarget||a.toElement,ft=nt,Jt=Jt?Ua(Jt):null,Jt!==null&&(Qe=u(Jt),oe=Jt.tag,Jt!==Qe||oe!==5&&oe!==27&&oe!==6)&&(Jt=null)):(ft=null,Jt=nt),ft!==Jt)){if(oe=fp,St="onMouseLeave",Q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(oe=hp,St="onPointerLeave",Q="onPointerEnter",W="pointer"),Qe=ft==null?rt:gs(ft),tt=Jt==null?rt:gs(Jt),rt=new oe(St,W+"leave",ft,a,mt),rt.target=Qe,rt.relatedTarget=tt,St=null,Ua(mt)===nt&&(oe=new oe(Q,W+"enter",Jt,a,mt),oe.target=tt,oe.relatedTarget=Qe,St=oe),Qe=St,ft&&Jt)e:{for(oe=Qx,Q=ft,W=Jt,tt=0,St=Q;St;St=oe(St))tt++;St=0;for(var se=W;se;se=oe(se))St++;for(;0<tt-St;)Q=oe(Q),tt--;for(;0<St-tt;)W=oe(W),St--;for(;tt--;){if(Q===W||W!==null&&Q===W.alternate){oe=Q;break e}Q=oe(Q),W=oe(W)}oe=null}else oe=null;ft!==null&&ag(Mt,rt,ft,oe,!1),Jt!==null&&Qe!==null&&ag(Mt,Qe,Jt,oe,!0)}}t:{if(rt=nt?gs(nt):window,ft=rt.nodeName&&rt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&rt.type==="file")var Pe=Mp;else if(xp(rt))if(yp)Pe=lx;else{Pe=rx;var te=sx}else ft=rt.nodeName,!ft||ft.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Fe(nt.elementType)&&(Pe=Mp):Pe=ox;if(Pe&&(Pe=Pe(t,nt))){Sp(Mt,Pe,a,mt);break t}te&&te(t,rt,nt),t==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Me(rt,"number",rt.value)}switch(te=nt?gs(nt):window,t){case"focusin":(xp(te)||te.contentEditable==="true")&&(Qs=te,fu=nt,lo=null);break;case"focusout":lo=fu=Qs=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Dp(Mt,a,mt);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Dp(Mt,a,mt)}var ge;if(ou)t:{switch(t){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Ks?_p(t,a)&&(Ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(pp&&a.locale!=="ko"&&(Ks||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ks&&(ge=cp()):(Pa=mt,nu="value"in Pa?Pa.value:Pa.textContent,Ks=!0)),te=tc(nt,Ae),0<te.length&&(Ae=new dp(Ae,t,null,a,mt),Mt.push({event:Ae,listeners:te}),ge?Ae.data=ge:(ge=vp(a),ge!==null&&(Ae.data=ge)))),(ge=tx?ex(t,a):nx(t,a))&&(Ae=tc(nt,"onBeforeInput"),0<Ae.length&&(te=new dp("onBeforeInput","beforeinput",null,a,mt),Mt.push({event:te,listeners:Ae}),te.data=ge)),Yx(Mt,t,nt,a,mt)}ng(Mt,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=to(t,a),c!=null&&r.unshift(Oo(t,c,f)),c=to(t,n),c!=null&&r.push(Oo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Qx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ag(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var R=a,G=R.alternate,nt=R.stateNode;if(R=R.tag,G!==null&&G===r)break;R!==5&&R!==26&&R!==27||nt===null||(G=nt,c?(nt=to(a,f),nt!=null&&g.unshift(Oo(a,nt,G))):c||(nt=to(a,f),nt!=null&&g.push(Oo(a,nt,G)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function rg(t,n){return n=sg(n),sg(t)===n}function Ke(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||ni(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&ni(t,""+r);break;case"className":Qt(t,"class",r);break;case"tabIndex":Qt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(t,a,r);break;case"style":Ri(t,r,f);break;case"data":if(n!=="object"){Qt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=_s(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ke(t,n,"name",c.name,c,null),Ke(t,n,"formEncType",c.formEncType,c,null),Ke(t,n,"formMethod",c.formMethod,c,null),Ke(t,n,"formTarget",c.formTarget,c,null)):(Ke(t,n,"encType",c.encType,c,null),Ke(t,n,"method",c.method,c,null),Ke(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=_s(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ea);break;case"onScroll":r!=null&&be("scroll",t);break;case"onScrollEnd":r!=null&&be("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=_s(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":be("beforetoggle",t),be("toggle",t),zt(t,"popover",r);break;case"xlinkActuate":jt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":jt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":jt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":jt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":jt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":jt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":jt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":jt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":jt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":zt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,zt(t,a,r))}}function zf(t,n,a,r,c,f){switch(a){case"style":Ri(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?ni(t,r):(typeof r=="number"||typeof r=="bigint")&&ni(t,""+r);break;case"onScroll":r!=null&&be("scroll",t);break;case"onScrollEnd":r!=null&&be("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):zt(t,a,r)}}}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",t),be("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(t,n,f,g,a,null)}}c&&Ke(t,n,"srcSet",a.srcSet,a,null),r&&Ke(t,n,"src",a.src,a,null);return;case"input":be("invalid",t);var R=f=g=c=null,G=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var mt=a[r];if(mt!=null)switch(r){case"name":c=mt;break;case"type":g=mt;break;case"checked":G=mt;break;case"defaultChecked":nt=mt;break;case"value":f=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Ke(t,n,r,mt,a,null)}}zn(t,f,R,G,nt,g,c,!1);return;case"select":be("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":r=R;default:Ke(t,n,c,R,a,null)}n=f,a=g,t.multiple=!!r,n!=null?bn(t,!!r,n,!1):a!=null&&bn(t,!!r,a,!0);return;case"textarea":be("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":r=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ke(t,n,g,R,a,null)}Ai(t,r,c,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ke(t,n,G,r,a,null)}return;case"dialog":be("beforetoggle",t),be("toggle",t),be("cancel",t),be("close",t);break;case"iframe":case"object":be("load",t);break;case"video":case"audio":for(r=0;r<Lo.length;r++)be(Lo[r],t);break;case"image":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"embed":case"source":case"link":be("error",t),be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ke(t,n,nt,r,a,null)}return;default:if(Fe(n)){for(mt in a)a.hasOwnProperty(mt)&&(r=a[mt],r!==void 0&&zf(t,n,mt,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ke(t,n,R,r,a,null))}function tS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,R=null,G=null,nt=null,mt=null;for(ft in a){var Mt=a[ft];if(a.hasOwnProperty(ft)&&Mt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=Mt;default:r.hasOwnProperty(ft)||Ke(t,n,ft,null,r,Mt)}}for(var rt in r){var ft=r[rt];if(Mt=a[rt],r.hasOwnProperty(rt)&&(ft!=null||Mt!=null))switch(rt){case"type":f=ft;break;case"name":c=ft;break;case"checked":nt=ft;break;case"defaultChecked":mt=ft;break;case"value":g=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==Mt&&Ke(t,n,rt,ft,r,Mt)}}Xt(t,g,R,G,nt,mt,f,c);return;case"select":ft=g=R=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ft=G;default:r.hasOwnProperty(f)||Ke(t,n,f,null,r,G)}for(c in r)if(f=r[c],G=a[c],r.hasOwnProperty(c)&&(f!=null||G!=null))switch(c){case"value":rt=f;break;case"defaultValue":R=f;break;case"multiple":g=f;default:f!==G&&Ke(t,n,c,f,r,G)}n=R,a=g,r=ft,rt!=null?bn(t,!!a,rt,!1):!!r!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":ft=rt=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ke(t,n,R,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":rt=c;break;case"defaultValue":ft=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ke(t,n,g,c,r,f)}ei(t,rt,ft);return;case"option":for(var Jt in a)if(rt=a[Jt],a.hasOwnProperty(Jt)&&rt!=null&&!r.hasOwnProperty(Jt))switch(Jt){case"selected":t.selected=!1;break;default:Ke(t,n,Jt,null,r,rt)}for(G in r)if(rt=r[G],ft=a[G],r.hasOwnProperty(G)&&rt!==ft&&(rt!=null||ft!=null))switch(G){case"selected":t.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ke(t,n,G,rt,r,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)rt=a[oe],a.hasOwnProperty(oe)&&rt!=null&&!r.hasOwnProperty(oe)&&Ke(t,n,oe,null,r,rt);for(nt in r)if(rt=r[nt],ft=a[nt],r.hasOwnProperty(nt)&&rt!==ft&&(rt!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ke(t,n,nt,rt,r,ft)}return;default:if(Fe(n)){for(var Qe in a)rt=a[Qe],a.hasOwnProperty(Qe)&&rt!==void 0&&!r.hasOwnProperty(Qe)&&zf(t,n,Qe,void 0,r,rt);for(mt in r)rt=r[mt],ft=a[mt],!r.hasOwnProperty(mt)||rt===ft||rt===void 0&&ft===void 0||zf(t,n,mt,rt,r,ft);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!r.hasOwnProperty(Q)&&Ke(t,n,Q,null,r,rt);for(Mt in r)rt=r[Mt],ft=a[Mt],!r.hasOwnProperty(Mt)||rt===ft||rt==null&&ft==null||Ke(t,n,Mt,rt,r,ft)}function og(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,R=c.duration;if(f&&R&&og(g)){for(g=0,R=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],nt=G.startTime;if(nt>R)break;var mt=G.transferSize,Mt=G.initiatorType;mt&&og(Mt)&&(G=G.responseEnd,g+=mt*(G<R?1:(R-nt)/(G-nt)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ff=null,Hf=null;function ec(t){return t.nodeType===9?t:t.ownerDocument}function lg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Gf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function nS(){var t=window.event;return t&&t.type==="popstate"?t===Vf?!1:(Vf=t,!0):(Vf=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(sS)}:ug;function sS(t){setTimeout(function(){throw t})}function Ja(t){return t==="head"}function dg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Er(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[Da]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Po(t.ownerDocument.body);a=c}while(a);Er(n)}function hg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),$r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function rS(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Da])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function oS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function pg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function Wf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var qf=null;function mg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function gg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function _g(t,n,a){switch(n=ec(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$r(t)}var Mi=new Map,vg=new Set;function nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=F.d;F.d={f:cS,r:uS,D:fS,C:dS,L:hS,m:pS,X:gS,S:mS,M:_S};function cS(){var t=_a.f(),n=Yl();return t||n}function uS(t){var n=Na(t);n!==null&&n.tag===5&&n.type==="form"?Pm(n):_a.r(t)}var Mr=typeof document>"u"?null:document;function xg(t,n,a){var r=Mr;if(r&&typeof n=="string"&&n){var c=Ge(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),vg.has(c)||(vg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),On(n,"link",t),gn(n),r.head.appendChild(n)))}}function fS(t){_a.D(t),xg("dns-prefetch",t,null)}function dS(t,n){_a.C(t,n),xg("preconnect",t,n)}function hS(t,n,a){_a.L(t,n,a);var r=Mr;if(r&&t&&n){var c='link[rel="preload"][as="'+Ge(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ge(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ge(a.imageSizes)+'"]')):c+='[href="'+Ge(t)+'"]';var f=c;switch(n){case"style":f=yr(t);break;case"script":f=br(t)}Mi.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Bo(f))||n==="script"&&r.querySelector(Io(f))||(n=r.createElement("link"),On(n,"link",t),gn(n),r.head.appendChild(n)))}}function pS(t,n){_a.m(t,n);var a=Mr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ge(r)+'"][href="'+Ge(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=br(t)}if(!Mi.has(f)&&(t=x({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}r=a.createElement("link"),On(r,"link",t),gn(r),a.head.appendChild(r)}}}function mS(t,n,a){_a.S(t,n,a);var r=Mr;if(r&&t){var c=La(r).hoistableStyles,f=yr(t);n=n||"default";var g=c.get(f);if(!g){var R={loading:0,preload:null};if(g=r.querySelector(Bo(f)))R.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&Yf(t,a);var G=g=r.createElement("link");gn(G),On(G,"link",t),G._p=new Promise(function(nt,mt){G.onload=nt,G.onerror=mt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ic(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:R},c.set(f,g)}}}function gS(t,n){_a.X(t,n);var a=Mr;if(a&&t){var r=La(a).hoistableScripts,c=br(t),f=r.get(c);f||(f=a.querySelector(Io(c)),f||(t=x({src:t,async:!0},n),(n=Mi.get(c))&&jf(t,n),f=a.createElement("script"),gn(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function _S(t,n){_a.M(t,n);var a=Mr;if(a&&t){var r=La(a).hoistableScripts,c=br(t),f=r.get(c);f||(f=a.querySelector(Io(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=Mi.get(c))&&jf(t,n),f=a.createElement("script"),gn(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function Sg(t,n,a,r){var c=(c=$.current)?nc(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=La(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=yr(a.href);var f=La(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Bo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),f||vS(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=La(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function yr(t){return'href="'+Ge(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function Mg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function vS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),On(n,"link",a),gn(n),t.head.appendChild(n))}function br(t){return'[src="'+Ge(t)+'"]'}function Io(t){return"script[async]"+t}function yg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Ge(a.href)+'"]');if(r)return n.instance=r,gn(r),r;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),gn(r),On(r,"style",c),ic(r,a.precedence,t),n.instance=r;case"stylesheet":c=yr(a.href);var f=t.querySelector(Bo(c));if(f)return n.state.loading|=4,n.instance=f,gn(f),f;r=Mg(a),(c=Mi.get(c))&&Yf(r,c),f=(t.ownerDocument||t).createElement("link"),gn(f);var g=f;return g._p=new Promise(function(R,G){g.onload=R,g.onerror=G}),On(f,"link",r),n.state.loading|=4,ic(f,a.precedence,t),n.instance=f;case"script":return f=br(a.src),(c=t.querySelector(Io(f)))?(n.instance=c,gn(c),c):(r=a,(c=Mi.get(f))&&(r=x({},a),jf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),gn(c),On(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ic(r,a.precedence,t));return n.instance}function ic(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var R=r[g];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ac=null;function bg(t,n,a){if(ac===null){var r=new Map,c=ac=new Map;c.set(a,r)}else c=ac,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Da]||f[un]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var R=r.get(g);R?R.push(f):r.set(g,[f])}}return r}function Eg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function SS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=yr(r.href),f=n.querySelector(Bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,gn(f);return}f=n.ownerDocument||n,r=Mg(r),(c=Mi.get(c))&&Yf(r,c),f=f.createElement("link"),gn(f);var g=f;g._p=new Promise(function(R,G){g.onload=R,g.onerror=G}),On(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Zf=0;function MS(t,n){return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Zf===0&&(Zf=62500*eS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var rc=null;function oc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,rc=new Map,n.forEach(yS,t),rc=null,sc.call(t))}function yS(t,n){if(!(n.state.loading&4)){var a=rc.get(t);if(a)var r=a.get(null);else{a=new Map,rc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=sc.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:B,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function bS(t,n,a,r,c,f,g,R,G){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.hiddenUpdates=Kt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Ag(t,n,a,r,c,f,g,R,G,nt,mt,Mt){return t=new bS(t,n,a,g,G,nt,mt,Mt,R),n=1,f===!0&&(n|=24),f=ai(3,null,null,n),t.current=f,f.stateNode=t,n=Ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Uu(f),t}function Rg(t){return t?(t=tr,t):tr}function Cg(t,n,a,r,c,f){c=Rg(c),r.context===null?r.context=c:r.pendingContext=c,r=Ga(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Va(t,r,n),a!==null&&(Qn(a,t,n),go(a,t,n))}function wg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Kf(t,n){wg(t,n),(t=t.alternate)&&wg(t,n)}function Dg(t){if(t.tag===13||t.tag===31){var n=Ms(t,67108864);n!==null&&Qn(n,t,67108864),Kf(t,67108864)}}function Ug(t){if(t.tag===13||t.tag===31){var n=ci();n=$i(n);var a=Ms(t,n);a!==null&&Qn(a,t,n),Kf(t,n)}}var lc=!0;function ES(t,n,a,r){var c=P.T;P.T=null;var f=F.p;try{F.p=2,Qf(t,n,a,r)}finally{F.p=f,P.T=c}}function TS(t,n,a,r){var c=P.T;P.T=null;var f=F.p;try{F.p=8,Qf(t,n,a,r)}finally{F.p=f,P.T=c}}function Qf(t,n,a,r){if(lc){var c=Jf(r);if(c===null)If(t,n,r,cc,a),Lg(t,r);else if(RS(c,t,n,a,r))r.stopPropagation();else if(Lg(t,r),n&4&&-1<AS.indexOf(t)){for(;c!==null;){var f=Na(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Rt(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var G=1<<31-It(g);R.entanglements[1]|=G,g&=~G}Vi(f),(ze&6)===0&&(Wl=Dt()+500,No(0))}}break;case 31:case 13:R=Ms(f,2),R!==null&&Qn(R,f,2),Yl(),Kf(f,2)}if(f=Jf(r),f===null&&If(t,n,r,cc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else If(t,n,r,null,a)}}function Jf(t){return t=$c(t),$f(t)}var cc=null;function $f(t){if(cc=null,t=Ua(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return cc=t,null}function Ng(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tn()){case D:return 2;case b:return 8;case J:case _t:return 32;case At:return 268435456;default:return 32}default:return 32}}var td=!1,$a=null,ts=null,es=null,Fo=new Map,Ho=new Map,ns=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(t,n){switch(t){case"focusin":case"focusout":$a=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Na(n),n!==null&&Dg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function RS(t,n,a,r,c){switch(n){case"focusin":return $a=Go($a,t,n,a,r,c),!0;case"dragenter":return ts=Go(ts,t,n,a,r,c),!0;case"mouseover":return es=Go(es,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Fo.set(f,Go(Fo.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ho.set(f,Go(Ho.get(f)||null,t,n,a,r,c)),!0}return!1}function Og(t){var n=Ua(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Qr(t.priority,function(){Ug(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Qr(t.priority,function(){Ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jc=r,a.target.dispatchEvent(r),Jc=null}else return n=Na(a),n!==null&&Dg(n),t.blockedOn=a,!1;n.shift()}return!0}function Pg(t,n,a){uc(t)&&a.delete(n)}function CS(){td=!1,$a!==null&&uc($a)&&($a=null),ts!==null&&uc(ts)&&(ts=null),es!==null&&uc(es)&&(es=null),Fo.forEach(Pg),Ho.forEach(Pg)}function fc(t,n){t.blockedOn===n&&(t.blockedOn=null,td||(td=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,CS)))}var dc=null;function Bg(t){dc!==t&&(dc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){dc===t&&(dc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if($f(r||a)===null)continue;break}var f=Na(a);f!==null&&(t.splice(n,3),n-=3,Qu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Er(t){function n(G){return fc(G,t)}$a!==null&&fc($a,t),ts!==null&&fc(ts,t),es!==null&&fc(es,t),Fo.forEach(n),Ho.forEach(n);for(var a=0;a<ns.length;a++){var r=ns[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ns.length&&(a=ns[0],a.blockedOn===null);)Og(a),a.blockedOn===null&&ns.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[Dn]||null;if(typeof f=="function")g||Bg(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[Dn]||null)R=g.formAction;else if($f(c)!==null)continue}else R=g.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Bg(a)}}}function Ig(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ed(t){this._internalRoot=t}hc.prototype.render=ed.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ci();Cg(a,r,t,n,null,null)},hc.prototype.unmount=ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Cg(t.current,2,null,t,null,null),Yl(),n[ta]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ti();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ns.length&&n!==0&&n<ns[a].priority;a++);ns.splice(a,0,t),a===0&&Og(t)}};var zg=e.version;if(zg!=="19.2.5")throw Error(s(527,zg,"19.2.5"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ut=pc.inject(wS),ht=pc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=Wm,f=qm,g=Ym;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Ag(t,1,!1,null,null,a,r,null,c,f,g,Ig),t[ta]=n.current,Bf(t),new ed(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=Wm,g=qm,R=Ym,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=Ag(t,1,!0,n,a??null,r,c,G,f,g,R,Ig),n.context=Rg(null),a=n.current,r=ci(),r=$i(r),c=Ga(r),c.callback=null,Va(a,c,r),a=r,n.current.lanes=a,re(n,a),Vi(n),t[ta]=n.current,Bf(t),new hc(n)},ko.version="19.2.5",ko}var jg;function GS(){if(jg)return ad.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ad.exports=HS(),ad.exports}var VS=GS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="184",kS=0,Zg=1,XS=2,Ic=1,WS=2,Qo=3,hs=0,ti=1,ba=2,Ta=0,Vr=1,Kg=2,Qg=3,Jg=4,qS=5,Hs=100,YS=101,jS=102,ZS=103,KS=104,QS=200,JS=201,$S=202,tM=203,Wd=204,qd=205,eM=206,nM=207,iM=208,aM=209,sM=210,rM=211,oM=212,lM=213,cM=214,Yd=0,jd=1,Zd=2,Xr=3,Kd=4,Qd=5,Jd=6,$d=7,j_=0,uM=1,fM=2,ji=0,Z_=1,K_=2,Q_=3,Hh=4,J_=5,$_=6,tv=7,ev=300,Xs=301,Wr=302,ld=303,cd=304,Zc=306,th=1e3,Ea=1001,eh=1002,Pn=1003,dM=1004,mc=1005,Vn=1006,ud=1007,Vs=1008,hi=1009,nv=1010,iv=1011,$o=1012,Gh=1013,Qi=1014,qi=1015,Ra=1016,Vh=1017,kh=1018,tl=1020,av=35902,sv=35899,rv=1021,ov=1022,Bi=1023,Ca=1026,ks=1027,lv=1028,Xh=1029,Ws=1030,Wh=1031,qh=1033,zc=33776,Fc=33777,Hc=33778,Gc=33779,nh=35840,ih=35841,ah=35842,sh=35843,rh=36196,oh=37492,lh=37496,ch=37488,uh=37489,kc=37490,fh=37491,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,_h=37813,vh=37814,xh=37815,Sh=37816,Mh=37817,yh=37818,bh=37819,Eh=37820,Th=37821,Ah=36492,Rh=36494,Ch=36495,wh=36283,Dh=36284,Xc=36285,Uh=36286,hM=3200,Nh=0,pM=1,fs="",di="srgb",Wc="srgb-linear",qc="linear",qe="srgb",Tr=7680,$g=519,mM=512,gM=513,_M=514,Yh=515,vM=516,xM=517,jh=518,SM=519,t_=35044,e_="300 es",Yi=2e3,el=2001;function MM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yM(){const o=Yc("canvas");return o.style.display="block",o}const n_={};function i_(...o){const e="THREE."+o.shift();console.log(e,...o)}function cv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ce(...o){o=cv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ne(...o){o=cv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Lh(...o){const e=o.join(" ");e in n_||(n_[e]=!0,ce(...o))}function bM(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const EM={[Yd]:jd,[Zd]:Jd,[Kd]:$d,[Xr]:Qd,[jd]:Yd,[Jd]:Zd,[$d]:Kd,[Qd]:Xr};class qs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fd=Math.PI/180,Oh=180/Math.PI;function nl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function we(o,e,i){return Math.max(e,Math.min(i,o))}function TM(o,e){return(o%e+e)%e}function dd(o,e,i){return(1-i)*o+i*e}function Xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const np=class np{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(we(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};np.prototype.isVector2=!0;let Ie=np;class Zr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,p){let m=s[l+0],h=s[l+1],S=s[l+2],x=s[l+3],_=u[d+0],y=u[d+1],T=u[d+2],U=u[d+3];if(x!==U||m!==_||h!==y||S!==T){let M=m*_+h*y+S*T+x*U;M<0&&(_=-_,y=-y,T=-T,U=-U,M=-M);let v=1-p;if(M<.9995){const w=Math.acos(M),B=Math.sin(w);v=Math.sin(v*w)/B,p=Math.sin(p*w)/B,m=m*v+_*p,h=h*v+y*p,S=S*v+T*p,x=x*v+U*p}else{m=m*v+_*p,h=h*v+y*p,S=S*v+T*p,x=x*v+U*p;const w=1/Math.sqrt(m*m+h*h+S*S+x*x);m*=w,h*=w,S*=w,x*=w}}e[i]=m,e[i+1]=h,e[i+2]=S,e[i+3]=x}static multiplyQuaternionsFlat(e,i,s,l,u,d){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],x=u[d],_=u[d+1],y=u[d+2],T=u[d+3];return e[i]=p*T+S*x+m*y-h*_,e[i+1]=m*T+S*_+h*x-p*y,e[i+2]=h*T+S*y+p*_-m*x,e[i+3]=S*T-p*x-m*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),x=p(u/2),_=m(s/2),y=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=_*S*x+h*y*T,this._y=h*y*x-_*S*T,this._z=h*S*T+_*y*x,this._w=h*S*x-_*y*T;break;case"YXZ":this._x=_*S*x+h*y*T,this._y=h*y*x-_*S*T,this._z=h*S*T-_*y*x,this._w=h*S*x+_*y*T;break;case"ZXY":this._x=_*S*x-h*y*T,this._y=h*y*x+_*S*T,this._z=h*S*T+_*y*x,this._w=h*S*x-_*y*T;break;case"ZYX":this._x=_*S*x-h*y*T,this._y=h*y*x+_*S*T,this._z=h*S*T-_*y*x,this._w=h*S*x+_*y*T;break;case"YZX":this._x=_*S*x+h*y*T,this._y=h*y*x+_*S*T,this._z=h*S*T-_*y*x,this._w=h*S*x-_*y*T;break;case"XZY":this._x=_*S*x-h*y*T,this._y=h*y*x-_*S*T,this._z=h*S*T+_*y*x,this._w=h*S*x+_*y*T;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],p=i[5],m=i[9],h=i[2],S=i[6],x=i[10],_=s+p+x;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(S-m)*y,this._y=(u-h)*y,this._z=(d-l)*y}else if(s>p&&s>x){const y=2*Math.sqrt(1+s-p-x);this._w=(S-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+h)/y}else if(p>x){const y=2*Math.sqrt(1+p-s-x);this._w=(u-h)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+x-s-p);this._w=(d-l)/y,this._x=(u+h)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(we(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+d*p+l*h-u*m,this._y=l*S+d*m+u*p-s*h,this._z=u*S+d*h+s*m-l*p,this._w=d*S-s*p-l*m-u*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ip=class ip{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(a_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(a_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),S=2*(p*i-u*l),x=2*(u*s-d*i);return this.x=i+m*h+d*x-p*S,this.y=s+m*S+p*h-u*x,this.z=l+m*x+u*S-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-u*p,this.y=u*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(we(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ip.prototype.isVector3=!0;let et=ip;const hd=new et,a_=new Zr,ap=class ap{constructor(e,i,s,l,u,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h)}set(e,i,s,l,u,d,p,m,h){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=d,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],S=s[4],x=s[7],_=s[2],y=s[5],T=s[8],U=l[0],M=l[3],v=l[6],w=l[1],B=l[4],O=l[7],V=l[2],L=l[5],I=l[8];return u[0]=d*U+p*w+m*V,u[3]=d*M+p*B+m*L,u[6]=d*v+p*O+m*I,u[1]=h*U+S*w+x*V,u[4]=h*M+S*B+x*L,u[7]=h*v+S*O+x*I,u[2]=_*U+y*w+T*V,u[5]=_*M+y*B+T*L,u[8]=_*v+y*O+T*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8];return i*d*S-i*p*h-s*u*S+s*p*m+l*u*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],x=S*d-p*h,_=p*m-S*u,y=h*u-d*m,T=i*x+s*_+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/T;return e[0]=x*U,e[1]=(l*h-S*s)*U,e[2]=(p*s-l*d)*U,e[3]=_*U,e[4]=(S*i-l*m)*U,e[5]=(l*u-p*i)*U,e[6]=y*U,e[7]=(s*m-h*i)*U,e[8]=(d*i-s*u)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,p){const m=Math.cos(u),h=Math.sin(u);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(pd.makeScale(e,i)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ap.prototype.isMatrix3=!0;let de=ap;const pd=new de,s_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function AM(){const o={enabled:!0,workingColorSpace:Wc,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===qe&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(l.r=kr(l.r),l.g=kr(l.g),l.b=kr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Lh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Lh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Wc]:{primaries:e,whitePoint:s,transfer:qc,toXYZ:s_,fromXYZ:r_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:s_,fromXYZ:r_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Ce=AM();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function kr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ar;class RM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ar===void 0&&(Ar=Yc("canvas")),Ar.width=e.width,Ar.height=e.height;const l=Ar.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Aa(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:e.width,height:e.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CM=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?u.push(md(l[d].image)):u.push(md(l[d]))}else u=md(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function md(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?RM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let wM=0;const gd=new et;class Wn extends qs{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Ea,l=Ea,u=Vn,d=Vs,p=Bi,m=hi,h=Wn.DEFAULT_ANISOTROPY,S=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=nl(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gd).x}get height(){return this.source.getSize(gd).y}get depth(){return this.source.getSize(gd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ev)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case th:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case th:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ev;Wn.DEFAULT_ANISOTROPY=1;const sp=class sp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,h=m[0],S=m[4],x=m[8],_=m[1],y=m[5],T=m[9],U=m[2],M=m[6],v=m[10];if(Math.abs(S-_)<.01&&Math.abs(x-U)<.01&&Math.abs(T-M)<.01){if(Math.abs(S+_)<.1&&Math.abs(x+U)<.1&&Math.abs(T+M)<.1&&Math.abs(h+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(h+1)/2,O=(y+1)/2,V=(v+1)/2,L=(S+_)/4,I=(x+U)/4,E=(T+M)/4;return B>O&&B>V?B<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(B),l=L/s,u=I/s):O>V?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=L/l,u=E/l):V<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(V),s=I/u,l=E/u),this.set(s,l,u,i),this}let w=Math.sqrt((M-T)*(M-T)+(x-U)*(x-U)+(_-S)*(_-S));return Math.abs(w)<.001&&(w=1),this.x=(M-T)/w,this.y=(x-U)/w,this.z=(_-S)/w,this.w=Math.acos((h+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this.w=we(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this.w=we(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(we(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sp.prototype.isVector4=!0;let cn=sp;class DM extends qs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Wn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends DM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class uv extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class UM extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,i,s,l,u,d,p,m,h,S,x,_,y,T,U,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,p,m,h,S,x,_,y,T,U,M)}set(e,i,s,l,u,d,p,m,h,S,x,_,y,T,U,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=S,v[10]=x,v[14]=_,v[3]=y,v[7]=T,v[11]=U,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),u=1/Rr.setFromMatrixColumn(e,1).length(),d=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const _=d*S,y=d*x,T=p*S,U=p*x;i[0]=m*S,i[4]=-m*x,i[8]=h,i[1]=y+T*h,i[5]=_-U*h,i[9]=-p*m,i[2]=U-_*h,i[6]=T+y*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*S,y=m*x,T=h*S,U=h*x;i[0]=_+U*p,i[4]=T*p-y,i[8]=d*h,i[1]=d*x,i[5]=d*S,i[9]=-p,i[2]=y*p-T,i[6]=U+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*S,y=m*x,T=h*S,U=h*x;i[0]=_-U*p,i[4]=-d*x,i[8]=T+y*p,i[1]=y+T*p,i[5]=d*S,i[9]=U-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*S,y=d*x,T=p*S,U=p*x;i[0]=m*S,i[4]=T*h-y,i[8]=_*h+U,i[1]=m*x,i[5]=U*h+_,i[9]=y*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,y=d*h,T=p*m,U=p*h;i[0]=m*S,i[4]=U-_*x,i[8]=T*x+y,i[1]=x,i[5]=d*S,i[9]=-p*S,i[2]=-h*S,i[6]=y*x+T,i[10]=_-U*x}else if(e.order==="XZY"){const _=d*m,y=d*h,T=p*m,U=p*h;i[0]=m*S,i[4]=-x,i[8]=h*S,i[1]=_*x+U,i[5]=d*S,i[9]=y*x-T,i[2]=T*x-y,i[6]=p*S,i[10]=U*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NM,e,LM)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),as.crossVectors(s,ui),as.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),as.crossVectors(s,ui)),as.normalize(),gc.crossVectors(ui,as),l[0]=as.x,l[4]=gc.x,l[8]=ui.x,l[1]=as.y,l[5]=gc.y,l[9]=ui.y,l[2]=as.z,l[6]=gc.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],S=s[1],x=s[5],_=s[9],y=s[13],T=s[2],U=s[6],M=s[10],v=s[14],w=s[3],B=s[7],O=s[11],V=s[15],L=l[0],I=l[4],E=l[8],N=l[12],j=l[1],z=l[5],Z=l[9],ct=l[13],dt=l[2],q=l[6],P=l[10],F=l[14],ot=l[3],vt=l[7],Et=l[11],C=l[15];return u[0]=d*L+p*j+m*dt+h*ot,u[4]=d*I+p*z+m*q+h*vt,u[8]=d*E+p*Z+m*P+h*Et,u[12]=d*N+p*ct+m*F+h*C,u[1]=S*L+x*j+_*dt+y*ot,u[5]=S*I+x*z+_*q+y*vt,u[9]=S*E+x*Z+_*P+y*Et,u[13]=S*N+x*ct+_*F+y*C,u[2]=T*L+U*j+M*dt+v*ot,u[6]=T*I+U*z+M*q+v*vt,u[10]=T*E+U*Z+M*P+v*Et,u[14]=T*N+U*ct+M*F+v*C,u[3]=w*L+B*j+O*dt+V*ot,u[7]=w*I+B*z+O*q+V*vt,u[11]=w*E+B*Z+O*P+V*Et,u[15]=w*N+B*ct+O*F+V*C,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],p=e[5],m=e[9],h=e[13],S=e[2],x=e[6],_=e[10],y=e[14],T=e[3],U=e[7],M=e[11],v=e[15],w=m*y-h*_,B=p*y-h*x,O=p*_-m*x,V=d*y-h*S,L=d*_-m*S,I=d*x-p*S;return i*(U*w-M*B+v*O)-s*(T*w-M*V+v*L)+l*(T*B-U*V+v*I)-u*(T*O-U*L+M*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],p=e[5],m=e[6],h=e[7],S=e[8],x=e[9],_=e[10],y=e[11],T=e[12],U=e[13],M=e[14],v=e[15],w=i*p-s*d,B=i*m-l*d,O=i*h-u*d,V=s*m-l*p,L=s*h-u*p,I=l*h-u*m,E=S*U-x*T,N=S*M-_*T,j=S*v-y*T,z=x*M-_*U,Z=x*v-y*U,ct=_*v-y*M,dt=w*ct-B*Z+O*z+V*j-L*N+I*E;if(dt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/dt;return e[0]=(p*ct-m*Z+h*z)*q,e[1]=(l*Z-s*ct-u*z)*q,e[2]=(U*I-M*L+v*V)*q,e[3]=(_*L-x*I-y*V)*q,e[4]=(m*j-d*ct-h*N)*q,e[5]=(i*ct-l*j+u*N)*q,e[6]=(M*O-T*I-v*B)*q,e[7]=(S*I-_*O+y*B)*q,e[8]=(d*Z-p*j+h*E)*q,e[9]=(s*j-i*Z-u*E)*q,e[10]=(T*L-U*O+v*w)*q,e[11]=(x*O-S*L-y*w)*q,e[12]=(p*N-d*z-m*E)*q,e[13]=(i*z-s*N+l*E)*q,e[14]=(U*B-T*V-M*w)*q,e[15]=(S*V-x*B+_*w)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,p=e.y,m=e.z,h=u*d,S=u*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*d,0,h*m-l*p,S*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,p=i._z,m=i._w,h=u+u,S=d+d,x=p+p,_=u*h,y=u*S,T=u*x,U=d*S,M=d*x,v=p*x,w=m*h,B=m*S,O=m*x,V=s.x,L=s.y,I=s.z;return l[0]=(1-(U+v))*V,l[1]=(y+O)*V,l[2]=(T-B)*V,l[3]=0,l[4]=(y-O)*L,l[5]=(1-(_+v))*L,l[6]=(M+w)*L,l[7]=0,l[8]=(T+B)*I,l[9]=(M-w)*I,l[10]=(1-(_+U))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();u<0&&(d=-d),Ui.copy(this);const h=1/d,S=1/p,x=1/m;return Ui.elements[0]*=h,Ui.elements[1]*=h,Ui.elements[2]*=h,Ui.elements[4]*=S,Ui.elements[5]*=S,Ui.elements[6]*=S,Ui.elements[8]*=x,Ui.elements[9]*=x,Ui.elements[10]*=x,i.setFromRotationMatrix(Ui),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,u,d,p=Yi,m=!1){const h=this.elements,S=2*u/(i-e),x=2*u/(s-l),_=(i+e)/(i-e),y=(s+l)/(s-l);let T,U;if(m)T=u/(d-u),U=d*u/(d-u);else if(p===Yi)T=-(d+u)/(d-u),U=-2*d*u/(d-u);else if(p===el)T=-d/(d-u),U=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=U,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,u,d,p=Yi,m=!1){const h=this.elements,S=2/(i-e),x=2/(s-l),_=-(i+e)/(i-e),y=-(s+l)/(s-l);let T,U;if(m)T=1/(d-u),U=d/(d-u);else if(p===Yi)T=-2/(d-u),U=-(d+u)/(d-u);else if(p===el)T=-1/(d-u),U=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=x,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=T,h[14]=U,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};jc.prototype.isMatrix4=!0;let hn=jc;const Rr=new et,Ui=new hn,NM=new et(0,0,0),LM=new et(1,1,1),as=new et,gc=new et,ui=new et,o_=new hn,l_=new Zr;class ps{constructor(e=0,i=0,s=0,l=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],p=l[8],m=l[1],h=l[5],S=l[9],x=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-we(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-we(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(we(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,y),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return o_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return l_.setFromEuler(this),this.setFromQuaternion(l_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OM=0;const c_=new et,Cr=new Zr,va=new hn,_c=new et,Wo=new et,PM=new et,BM=new Zr,u_=new et(1,0,0),f_=new et(0,1,0),d_=new et(0,0,1),h_={type:"added"},IM={type:"removed"},wr={type:"childadded",child:null},_d={type:"childremoved",child:null};class Bn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new et,i=new ps,s=new Zr,l=new et(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new de}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(u_,e)}rotateY(e){return this.rotateOnAxis(f_,e)}rotateZ(e){return this.rotateOnAxis(d_,e)}translateOnAxis(e,i){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u_,e)}translateY(e){return this.translateOnAxis(f_,e)}translateZ(e){return this.translateOnAxis(d_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_c.copy(e):_c.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Wo,_c,this.up):va.lookAt(_c,Wo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(va),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h_),wr.child=e,this.dispatchEvent(wr),wr.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(IM),_d.child=e,this.dispatchEvent(_d),_d.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),va.multiply(e.parent.matrixWorld)),e.applyMatrix4(va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h_),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,PM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,BM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const x=m[h];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(u(e.materials,this.material[m]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(u(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),S=d(e.images),x=d(e.shapes),_=d(e.skeletons),y=d(e.animations),T=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),x.length>0&&(s.shapes=x),_.length>0&&(s.skeletons=_),y.length>0&&(s.animations=y),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new et(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $n extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zM={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const U of e.hand.values()){const M=i.getJointPose(U,s),v=this._getHandJoint(h,U);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const S=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],_=S.position.distanceTo(x.position),y=.02,T=.005;h.inputState.pinching&&_>y+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(zM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new $n;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},vc={h:0,s:0,l:0};function xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=TM(e,1),i=we(i,0,1),s=we(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=xd(d,u,e+1/3),this.g=xd(d,u,e),this.b=xd(d,u,e-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function s(u){u!==void 0&&parseFloat(u)<1&&ce("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ce("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=dv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Ce.workingToColorSpace(Gn.copy(this),e),Math.round(we(Gn.r*255,0,255))*65536+Math.round(we(Gn.g*255,0,255))*256+Math.round(we(Gn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,u=Gn.b,d=Math.max(s,l,u),p=Math.min(s,l,u);let m,h;const S=(p+d)/2;if(p===d)m=0,h=0;else{const x=d-p;switch(h=S<=.5?x/(d+p):x/(2-d-p),d){case s:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-s)/x+2;break;case u:m=(s-l)/x+4;break}m/=6}return e.h=m,e.s=h,e.l=S,e}getRGB(e,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=di){Ce.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,s=Gn.g,l=Gn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+i,ss.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ss),e.getHSL(vc);const s=dd(ss.h,vc.h,i),l=dd(ss.s,vc.s,i),u=dd(ss.l,vc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Le;Le.NAMES=dv;class FM extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new et,xa=new et,Sd=new et,Sa=new et,Dr=new et,Ur=new et,p_=new et,Md=new et,yd=new et,bd=new et,Ed=new cn,Td=new cn,Ad=new cn;class Pi{constructor(e=new et,i=new et,s=new et){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){Ni.subVectors(l,i),xa.subVectors(s,i),Sd.subVectors(e,i);const d=Ni.dot(Ni),p=Ni.dot(xa),m=Ni.dot(Sd),h=xa.dot(xa),S=xa.dot(Sd),x=d*h-p*p;if(x===0)return u.set(0,0,0),null;const _=1/x,y=(h*m-p*S)*_,T=(d*S-p*m)*_;return u.set(1-y-T,T,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,u,d,p,m){return this.getBarycoord(e,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Sa.x),m.addScaledVector(d,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(e,i,s,l,u,d){return Ed.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(e,i),Td.fromBufferAttribute(e,s),Ad.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ed,u.x),d.addScaledVector(Td,u.y),d.addScaledVector(Ad,u.z),d}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),xa.subVectors(e,i),Ni.cross(xa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ni.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Pi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,p;Dr.subVectors(l,s),Ur.subVectors(u,s),Md.subVectors(e,s);const m=Dr.dot(Md),h=Ur.dot(Md);if(m<=0&&h<=0)return i.copy(s);yd.subVectors(e,l);const S=Dr.dot(yd),x=Ur.dot(yd);if(S>=0&&x<=S)return i.copy(l);const _=m*x-S*h;if(_<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Dr,d);bd.subVectors(e,u);const y=Dr.dot(bd),T=Ur.dot(bd);if(T>=0&&y<=T)return i.copy(u);const U=y*h-m*T;if(U<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Ur,p);const M=S*T-y*x;if(M<=0&&x-S>=0&&y-T>=0)return p_.subVectors(u,l),p=(x-S)/(x-S+(y-T)),i.copy(l).addScaledVector(p_,p);const v=1/(M+U+_);return d=U*v,p=_*v,i.copy(s).addScaledVector(Dr,d).addScaledVector(Ur,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=u.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Li):Li.fromBufferAttribute(u,d),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xc.copy(s.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),Sc.subVectors(this.max,qo),Nr.subVectors(e.a,qo),Lr.subVectors(e.b,qo),Or.subVectors(e.c,qo),rs.subVectors(Lr,Nr),os.subVectors(Or,Lr),Os.subVectors(Nr,Or);let i=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Os.z,Os.y,rs.z,0,-rs.x,os.z,0,-os.x,Os.z,0,-Os.x,-rs.y,rs.x,0,-os.y,os.x,0,-Os.y,Os.x,0];return!Rd(i,Nr,Lr,Or,Sc)||(i=[1,0,0,0,1,0,0,0,1],!Rd(i,Nr,Lr,Or,Sc))?!1:(Mc.crossVectors(rs,os),i=[Mc.x,Mc.y,Mc.z],Rd(i,Nr,Lr,Or,Sc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new et,new et,new et,new et,new et,new et,new et,new et],Li=new et,xc=new il,Nr=new et,Lr=new et,Or=new et,rs=new et,os=new et,Os=new et,qo=new et,Sc=new et,Mc=new et,Ps=new et;function Rd(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){Ps.fromArray(o,u);const p=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),m=e.dot(Ps),h=i.dot(Ps),S=s.dot(Ps);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const Mn=new et,yc=new Ie;let HM=0;class Ki extends qs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:HM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=t_,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),u=Jn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hv extends Ki{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class pv extends Ki{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class wn extends Ki{constructor(e,i,s){super(new Float32Array(e),i,s)}}const GM=new il,Yo=new et,Cd=new et;class Kh{constructor(e=new et,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):GM.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(Cd)),this.expandByPoint(Yo.copy(e.center).sub(Cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let VM=0;const yi=new hn,wd=new Bn,Pr=new et,fi=new il,jo=new il,Cn=new et;class Ei extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(MM(e)?pv:hv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,i,s){return yi.makeTranslation(e,i,s),this.applyMatrix4(yi),this}scale(e,i,s){return yi.makeScale(e,i,s),this.applyMatrix4(yi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new wn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];fi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const p=i[u];jo.setFromBufferAttribute(p),this.morphTargetsRelative?(Cn.addVectors(fi.min,jo.min),fi.expandByPoint(Cn),Cn.addVectors(fi.max,jo.max),fi.expandByPoint(Cn)):(fi.expandByPoint(jo.min),fi.expandByPoint(jo.max))}fi.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)Cn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(Cn));if(i)for(let u=0,d=i.length;u<d;u++){const p=i[u],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)Cn.fromBufferAttribute(p,h),m&&(Pr.fromBufferAttribute(e,h),Cn.add(Pr)),l=Math.max(l,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ki(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new et,m[E]=new et;const h=new et,S=new et,x=new et,_=new Ie,y=new Ie,T=new Ie,U=new et,M=new et;function v(E,N,j){h.fromBufferAttribute(s,E),S.fromBufferAttribute(s,N),x.fromBufferAttribute(s,j),_.fromBufferAttribute(u,E),y.fromBufferAttribute(u,N),T.fromBufferAttribute(u,j),S.sub(h),x.sub(h),y.sub(_),T.sub(_);const z=1/(y.x*T.y-T.x*y.y);isFinite(z)&&(U.copy(S).multiplyScalar(T.y).addScaledVector(x,-y.y).multiplyScalar(z),M.copy(x).multiplyScalar(y.x).addScaledVector(S,-T.x).multiplyScalar(z),p[E].add(U),p[N].add(U),p[j].add(U),m[E].add(M),m[N].add(M),m[j].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,N=w.length;E<N;++E){const j=w[E],z=j.start,Z=j.count;for(let ct=z,dt=z+Z;ct<dt;ct+=3)v(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const B=new et,O=new et,V=new et,L=new et;function I(E){V.fromBufferAttribute(l,E),L.copy(V);const N=p[E];B.copy(N),B.sub(V.multiplyScalar(V.dot(N))).normalize(),O.crossVectors(L,N);const z=O.dot(m[E])<0?-1:1;d.setXYZW(E,B.x,B.y,B.z,z)}for(let E=0,N=w.length;E<N;++E){const j=w[E],z=j.start,Z=j.count;for(let ct=z,dt=z+Z;ct<dt;ct+=3)I(e.getX(ct+0)),I(e.getX(ct+1)),I(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,y=s.count;_<y;_++)s.setXYZ(_,0,0,0);const l=new et,u=new et,d=new et,p=new et,m=new et,h=new et,S=new et,x=new et;if(e)for(let _=0,y=e.count;_<y;_+=3){const T=e.getX(_+0),U=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,U),d.fromBufferAttribute(i,M),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,U),h.fromBufferAttribute(s,M),p.add(S),m.add(S),h.add(S),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),S.subVectors(d,u),x.subVectors(l,u),S.cross(x),s.setXYZ(_+0,S.x,S.y,S.z),s.setXYZ(_+1,S.x,S.y,S.z),s.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(p,m){const h=p.array,S=p.itemSize,x=p.normalized,_=new h.constructor(m.length*S);let y=0,T=0;for(let U=0,M=m.length;U<M;U++){p.isInterleavedBufferAttribute?y=m[U]*p.data.stride+p.offset:y=m[U]*S;for(let v=0;v<S;v++)_[T++]=h[y++]}return new Ki(_,S,x)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ei,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const u=this.morphAttributes;for(const p in u){const m=[],h=u[p];for(let S=0,x=h.length;S<x;S++){const _=h[S],y=e(_,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let x=0,_=h.length;x<_;x++){const y=h[x];S.push(y.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const u=e.morphAttributes;for(const h in u){const S=[],x=u[h];for(let _=0,y=x.length;_<y;_++)S.push(x[_].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,S=d.length;h<S;h++){const x=d[h];this.addGroup(x.start,x.count,x.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let kM=0;class al extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=Vr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wd,this.blendDst=qd,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Wd&&(s.blendSrc=this.blendSrc),this.blendDst!==qd&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const p in u){const m=u[p];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new et,Dd=new et,bc=new et,ls=new et,Ud=new et,Ec=new et,Nd=new et;class XM{constructor(e=new et,i=new et(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Dd.copy(e).add(i).multiplyScalar(.5),bc.copy(i).sub(e).normalize(),ls.copy(this.origin).sub(Dd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(bc),p=ls.dot(this.direction),m=-ls.dot(bc),h=ls.lengthSq(),S=Math.abs(1-d*d);let x,_,y,T;if(S>0)if(x=d*m-p,_=d*p-m,T=u*S,x>=0)if(_>=-T)if(_<=T){const U=1/S;x*=U,_*=U,y=x*(x+d*_+2*p)+_*(d*x+_+2*m)+h}else _=u,x=Math.max(0,-(d*_+p)),y=-x*x+_*(_+2*m)+h;else _=-u,x=Math.max(0,-(d*_+p)),y=-x*x+_*(_+2*m)+h;else _<=-T?(x=Math.max(0,-(-d*u+p)),_=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+_*(_+2*m)+h):_<=T?(x=0,_=Math.min(Math.max(-u,-m),u),y=_*(_+2*m)+h):(x=Math.max(0,-(d*u+p)),_=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+_*(_+2*m)+h);else _=d>0?-u:u,x=Math.max(0,-(d*_+p)),y=-x*x+_*(_+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Dd).addScaledVector(bc,_),y}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,p,m;const h=1/this.direction.x,S=1/this.direction.y,x=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),S>=0?(u=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(u=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),x>=0?(p=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(p=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,s,l,u){Ud.subVectors(i,e),Ec.subVectors(s,e),Nd.crossVectors(Ud,Ec);let d=this.direction.dot(Nd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ls.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(ls,Ec));if(m<0)return null;const h=p*this.direction.dot(Ud.cross(ls));if(h<0||m+h>d)return null;const S=-p*ls.dot(Nd);return S<0?null:this.at(S/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qh extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const m_=new hn,Bs=new XM,Tc=new Kh,g_=new et,Ac=new et,Rc=new et,Cc=new et,Ld=new et,wc=new et,__=new et,Dc=new et;class _e extends Bn{constructor(e=new Ei,i=new Qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){wc.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const S=p[m],x=u[m];S!==0&&(Ld.fromBufferAttribute(x,e),d?wc.addScaledVector(Ld,S):wc.addScaledVector(Ld.sub(i),S))}i.add(wc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(u),Bs.copy(e.ray).recast(e.near),!(Tc.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Tc,g_)===null||Bs.origin.distanceToSquared(g_)>(e.far-e.near)**2))&&(m_.copy(u).invert(),Bs.copy(e.ray).applyMatrix4(m_),!(s.boundingBox!==null&&Bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Bs)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,p=u.index,m=u.attributes.position,h=u.attributes.uv,S=u.attributes.uv1,x=u.attributes.normal,_=u.groups,y=u.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,U=_.length;T<U;T++){const M=_[T],v=d[M.materialIndex],w=Math.max(M.start,y.start),B=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let O=w,V=B;O<V;O+=3){const L=p.getX(O),I=p.getX(O+1),E=p.getX(O+2);l=Uc(this,v,e,s,h,S,x,L,I,E),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),U=Math.min(p.count,y.start+y.count);for(let M=T,v=U;M<v;M+=3){const w=p.getX(M),B=p.getX(M+1),O=p.getX(M+2);l=Uc(this,d,e,s,h,S,x,w,B,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,U=_.length;T<U;T++){const M=_[T],v=d[M.materialIndex],w=Math.max(M.start,y.start),B=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let O=w,V=B;O<V;O+=3){const L=O,I=O+1,E=O+2;l=Uc(this,v,e,s,h,S,x,L,I,E),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),U=Math.min(m.count,y.start+y.count);for(let M=T,v=U;M<v;M+=3){const w=M,B=M+1,O=M+2;l=Uc(this,d,e,s,h,S,x,w,B,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function WM(o,e,i,s,l,u,d,p){let m;if(e.side===ti?m=s.intersectTriangle(d,u,l,!0,p):m=s.intersectTriangle(l,u,d,e.side===hs,p),m===null)return null;Dc.copy(p),Dc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Dc);return h<i.near||h>i.far?null:{distance:h,point:Dc.clone(),object:o}}function Uc(o,e,i,s,l,u,d,p,m,h){o.getVertexPosition(p,Ac),o.getVertexPosition(m,Rc),o.getVertexPosition(h,Cc);const S=WM(o,e,i,s,Ac,Rc,Cc,__);if(S){const x=new et;Pi.getBarycoord(__,Ac,Rc,Cc,x),l&&(S.uv=Pi.getInterpolatedAttribute(l,p,m,h,x,new Ie)),u&&(S.uv1=Pi.getInterpolatedAttribute(u,p,m,h,x,new Ie)),d&&(S.normal=Pi.getInterpolatedAttribute(d,p,m,h,x,new et),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new et,materialIndex:0};Pi.getNormal(Ac,Rc,Cc,_.normal),S.face=_,S.barycoord=x}return S}class qM extends Wn{constructor(e=null,i=1,s=1,l,u,d,p,m,h=Pn,S=Pn,x,_){super(null,d,p,m,h,S,l,u,x,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Od=new et,YM=new et,jM=new de;class Fs{constructor(e=new et(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Od.subVectors(s,i).cross(YM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Od),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/u;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||jM.getNormalMatrix(e),l=this.coplanarPoint(Od).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Kh,ZM=new Ie(.5,.5),Nc=new et;class Jh{constructor(e=new Fs,i=new Fs,s=new Fs,l=new Fs,u=new Fs,d=new Fs){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Yi,s=!1){const l=this.planes,u=e.elements,d=u[0],p=u[1],m=u[2],h=u[3],S=u[4],x=u[5],_=u[6],y=u[7],T=u[8],U=u[9],M=u[10],v=u[11],w=u[12],B=u[13],O=u[14],V=u[15];if(l[0].setComponents(h-d,y-S,v-T,V-w).normalize(),l[1].setComponents(h+d,y+S,v+T,V+w).normalize(),l[2].setComponents(h+p,y+x,v+U,V+B).normalize(),l[3].setComponents(h-p,y-x,v-U,V-B).normalize(),s)l[4].setComponents(m,_,M,O).normalize(),l[5].setComponents(h-m,y-_,v-M,V-O).normalize();else if(l[4].setComponents(h-m,y-_,v-M,V-O).normalize(),i===Yi)l[5].setComponents(h+m,y+_,v+M,V+O).normalize();else if(i===el)l[5].setComponents(m,_,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const i=ZM.distanceTo(e.center);return Is.radius=.7071067811865476+i,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Nc.x=l.normal.x>0?e.max.x:e.min.x,Nc.y=l.normal.y>0?e.max.y:e.min.y,Nc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mv extends Wn{constructor(e=[],i=Xs,s,l,u,d,p,m,h,S){super(e,i,s,l,u,d,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qr extends Wn{constructor(e,i,s=Qi,l,u,d,p=Pn,m=Pn,h,S=Ca,x=1){if(S!==Ca&&S!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:x};super(_,l,u,d,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class KM extends qr{constructor(e,i=Qi,s=Xs,l,u,d=Pn,p=Pn,m,h=Ca){const S={width:e,height:e,depth:1},x=[S,S,S,S,S,S];super(e,e,i,s,l,u,d,p,m,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gv extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yn extends Ei{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const p=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],h=[],S=[],x=[];let _=0,y=0;T("z","y","x",-1,-1,s,i,e,d,u,0),T("z","y","x",1,-1,s,i,-e,d,u,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,u,4),T("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(S,3)),this.setAttribute("uv",new wn(x,2));function T(U,M,v,w,B,O,V,L,I,E,N){const j=O/I,z=V/E,Z=O/2,ct=V/2,dt=L/2,q=I+1,P=E+1;let F=0,ot=0;const vt=new et;for(let Et=0;Et<P;Et++){const C=Et*z-ct;for(let H=0;H<q;H++){const lt=H*j-Z;vt[U]=lt*w,vt[M]=C*B,vt[v]=dt,h.push(vt.x,vt.y,vt.z),vt[U]=0,vt[M]=0,vt[v]=L>0?1:-1,S.push(vt.x,vt.y,vt.z),x.push(H/I),x.push(1-Et/E),F+=1}}for(let Et=0;Et<E;Et++)for(let C=0;C<I;C++){const H=_+C+q*Et,lt=_+C+q*(Et+1),K=_+(C+1)+q*(Et+1),yt=_+(C+1)+q*Et;m.push(H,lt,yt),m.push(lt,K,yt),ot+=6}p.addGroup(y,ot,N),y+=ot,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oi extends Ei{constructor(e=1,i=1,s=1,l=32,u=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),u=Math.floor(u);const S=[],x=[],_=[],y=[];let T=0;const U=[],M=s/2;let v=0;w(),d===!1&&(e>0&&B(!0),i>0&&B(!1)),this.setIndex(S),this.setAttribute("position",new wn(x,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(y,2));function w(){const O=new et,V=new et;let L=0;const I=(i-e)/s;for(let E=0;E<=u;E++){const N=[],j=E/u,z=j*(i-e)+e;for(let Z=0;Z<=l;Z++){const ct=Z/l,dt=ct*m+p,q=Math.sin(dt),P=Math.cos(dt);V.x=z*q,V.y=-j*s+M,V.z=z*P,x.push(V.x,V.y,V.z),O.set(q,I,P).normalize(),_.push(O.x,O.y,O.z),y.push(ct,1-j),N.push(T++)}U.push(N)}for(let E=0;E<l;E++)for(let N=0;N<u;N++){const j=U[N][E],z=U[N+1][E],Z=U[N+1][E+1],ct=U[N][E+1];(e>0||N!==0)&&(S.push(j,z,ct),L+=3),(i>0||N!==u-1)&&(S.push(z,Z,ct),L+=3)}h.addGroup(v,L,0),v+=L}function B(O){const V=T,L=new Ie,I=new et;let E=0;const N=O===!0?e:i,j=O===!0?1:-1;for(let Z=1;Z<=l;Z++)x.push(0,M*j,0),_.push(0,j,0),y.push(.5,.5),T++;const z=T;for(let Z=0;Z<=l;Z++){const dt=Z/l*m+p,q=Math.cos(dt),P=Math.sin(dt);I.x=N*P,I.y=M*j,I.z=N*q,x.push(I.x,I.y,I.z),_.push(0,j,0),L.x=q*.5+.5,L.y=P*.5*j+.5,y.push(L.x,L.y),T++}for(let Z=0;Z<l;Z++){const ct=V+Z,dt=z+Z;O===!0?S.push(dt,dt+1,ct):S.push(dt+1,dt,ct),E+=3}h.addGroup(v,E,O===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yr extends Ei{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,x=e/p,_=i/m,y=[],T=[],U=[],M=[];for(let v=0;v<S;v++){const w=v*_-d;for(let B=0;B<h;B++){const O=B*x-u;T.push(O,-w,0),U.push(0,0,1),M.push(B/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<p;w++){const B=w+h*v,O=w+h*(v+1),V=w+1+h*(v+1),L=w+1+h*v;y.push(B,O,L),y.push(O,V,L)}this.setIndex(y),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(U,3)),this.setAttribute("uv",new wn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gr extends Ei{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const S=[],x=new et,_=new et,y=[],T=[],U=[],M=[];for(let v=0;v<=s;v++){const w=[],B=v/s;let O=0;v===0&&d===0?O=.5/i:v===s&&m===Math.PI&&(O=-.5/i);for(let V=0;V<=i;V++){const L=V/i;x.x=-e*Math.cos(l+L*u)*Math.sin(d+B*p),x.y=e*Math.cos(d+B*p),x.z=e*Math.sin(l+L*u)*Math.sin(d+B*p),T.push(x.x,x.y,x.z),_.copy(x).normalize(),U.push(_.x,_.y,_.z),M.push(L+O,1-B),w.push(h++)}S.push(w)}for(let v=0;v<s;v++)for(let w=0;w<i;w++){const B=S[v][w+1],O=S[v][w],V=S[v+1][w],L=S[v+1][w+1];(v!==0||d>0)&&y.push(B,O,L),(v!==s-1||m<Math.PI)&&y.push(O,V,L)}this.setIndex(y),this.setAttribute("position",new wn(T,3)),this.setAttribute("normal",new wn(U,3)),this.setAttribute("uv",new wn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $h extends Ei{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u,thetaStart:d,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],h=[],S=[],x=[],_=new et,y=new et,T=new et;for(let U=0;U<=s;U++){const M=d+U/s*p;for(let v=0;v<=l;v++){const w=v/l*u;y.x=(e+i*Math.cos(M))*Math.cos(w),y.y=(e+i*Math.cos(M))*Math.sin(w),y.z=i*Math.sin(M),h.push(y.x,y.y,y.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),T.subVectors(y,_).normalize(),S.push(T.x,T.y,T.z),x.push(v/l),x.push(U/s)}}for(let U=1;U<=s;U++)for(let M=1;M<=l;M++){const v=(l+1)*U+M-1,w=(l+1)*(U-1)+M-1,B=(l+1)*(U-1)+M,O=(l+1)*U+M;m.push(v,w,O),m.push(w,B,O)}this.setIndex(m),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(S,3)),this.setAttribute("uv",new wn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function jr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(v_(l))l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(v_(l[0])){const u=[];for(let d=0,p=l.length;d<p;d++)u[d]=l[d].clone();e[i][s]=u}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const s=jr(o[i]);for(const l in s)e[l]=s[l]}return e}function v_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function QM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function _v(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const JM={clone:jr,merge:Xn};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class ey extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class We extends al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iy extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tp extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class ay extends tp{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Pd=new hn,x_=new et,S_=new et;class sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jh,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;x_.setFromMatrixPosition(e.matrixWorld),i.position.copy(x_),S_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(S_),i.updateMatrixWorld(),Pd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===el||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new et,Oc=new Zr,ki=new et;class vv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Oc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Oc,ki.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Lc,Oc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Oc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cs=new et,M_=new Ie,y_=new Ie;class bi extends vv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,i){return this.getViewBounds(e,M_,y_),i.subVectors(y_,M_)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ep extends vv{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ry extends sy{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oy extends tp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new ry}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ly extends tp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Br=-90,Ir=1;class cy extends Bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Br,Ir,e,i);l.layers=this.layers,this.add(l);const u=new bi(Br,Ir,e,i);u.layers=this.layers,this.add(u);const d=new bi(Br,Ir,e,i);d.layers=this.layers,this.add(d);const p=new bi(Br,Ir,e,i);p.layers=this.layers,this.add(p);const m=new bi(Br,Ir,e,i);m.layers=this.layers,this.add(m);const h=new bi(Br,Ir,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,p,m]=i;for(const h of i)this.remove(h);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===el)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,p,m,h,S]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(x,_,y),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class uy extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const rp=class rp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=s,u[3]=l,this}};rp.prototype.isMatrix2=!0;let b_=rp;function E_(o,e,i,s){const l=fy(s);switch(i){case rv:return o*e;case lv:return o*e/l.components*l.byteLength;case Xh:return o*e/l.components*l.byteLength;case Ws:return o*e*2/l.components*l.byteLength;case Wh:return o*e*2/l.components*l.byteLength;case ov:return o*e*3/l.components*l.byteLength;case Bi:return o*e*4/l.components*l.byteLength;case qh:return o*e*4/l.components*l.byteLength;case zc:case Fc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(o,16)*Math.max(e,8)/4;case nh:case ah:return Math.max(o,8)*Math.max(e,8)/2;case rh:case oh:case ch:case uh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case lh:case kc:case fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case vh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ah:case Rh:case Ch:return Math.ceil(o/4)*Math.ceil(e/4)*16;case wh:case Dh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xc:case Uh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fy(o){switch(o){case hi:case nv:return{byteLength:1,components:1};case $o:case iv:case Ra:return{byteLength:2,components:1};case Vh:case kh:return{byteLength:2,components:4};case Qi:case Gh:case qi:return{byteLength:4,components:1};case av:case sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function dy(o){const e=new WeakMap;function i(p,m){const h=p.array,S=p.usage,x=h.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,h,S),p.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:x}}function s(p,m,h){const S=m.array,x=m.updateRanges;if(o.bindBuffer(h,p),x.length===0)o.bufferSubData(h,0,S);else{x.sort((y,T)=>y.start-T.start);let _=0;for(let y=1;y<x.length;y++){const T=x[_],U=x[y];U.start<=T.start+T.count+1?T.count=Math.max(T.count,U.start+U.count-T.start):(++_,x[_]=U)}x.length=_+1;for(let y=0,T=x.length;y<T;y++){const U=x[y];o.bufferSubData(h,U.start*S.BYTES_PER_ELEMENT,S,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:u,update:d}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,By=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ob=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,db=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ab=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ME=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:Sy,batching_pars_vertex:My,batching_vertex:yy,begin_vertex:by,beginnormal_vertex:Ey,bsdfs:Ty,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Uy,color_fragment:Ny,color_pars_fragment:Ly,color_pars_vertex:Oy,color_vertex:Py,common:By,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:zy,displacementmap_pars_vertex:Fy,displacementmap_vertex:Hy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Vy,colorspace_fragment:ky,colorspace_pars_fragment:Xy,envmap_fragment:Wy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Yy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:sb,envmap_vertex:Zy,fog_vertex:Ky,fog_pars_vertex:Qy,fog_fragment:Jy,fog_pars_fragment:$y,gradientmap_pars_fragment:tb,lightmap_pars_fragment:eb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:ab,lights_toon_fragment:rb,lights_toon_pars_fragment:ob,lights_phong_fragment:lb,lights_phong_pars_fragment:cb,lights_physical_fragment:ub,lights_physical_pars_fragment:fb,lights_fragment_begin:db,lights_fragment_maps:hb,lights_fragment_end:pb,lightprobes_pars_fragment:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:xb,map_fragment:Sb,map_pars_fragment:Mb,map_particle_fragment:yb,map_particle_pars_fragment:bb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:Ab,morphcolor_vertex:Rb,morphnormal_vertex:Cb,morphtarget_pars_vertex:wb,morphtarget_vertex:Db,normal_fragment_begin:Ub,normal_fragment_maps:Nb,normal_pars_fragment:Lb,normal_pars_vertex:Ob,normal_vertex:Pb,normalmap_pars_fragment:Bb,clearcoat_normal_fragment_begin:Ib,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Fb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Vb,premultiplied_alpha_fragment:kb,project_vertex:Xb,dithering_fragment:Wb,dithering_pars_fragment:qb,roughnessmap_fragment:Yb,roughnessmap_pars_fragment:jb,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Qb,shadowmask_pars_fragment:Jb,skinbase_vertex:$b,skinning_pars_vertex:tE,skinning_vertex:eE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:aE,tonemapping_fragment:sE,tonemapping_pars_fragment:rE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:fE,worldpos_vertex:dE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:_E,cube_frag:vE,depth_vert:xE,depth_frag:SE,distance_vert:ME,distance_frag:yE,equirect_vert:bE,equirect_frag:EE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:RE,meshbasic_frag:CE,meshlambert_vert:wE,meshlambert_frag:DE,meshmatcap_vert:UE,meshmatcap_frag:NE,meshnormal_vert:LE,meshnormal_frag:OE,meshphong_vert:PE,meshphong_frag:BE,meshphysical_vert:IE,meshphysical_frag:zE,meshtoon_vert:FE,meshtoon_frag:HE,points_vert:GE,points_frag:VE,shadow_vert:kE,shadow_frag:XE,sprite_vert:WE,sprite_frag:qE},Vt={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new et},probesMax:{value:new et},probesResolution:{value:new et}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Wi={basic:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Xn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Xn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Xn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Le(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Xn([Vt.points,Vt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Xn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Xn([Vt.common,Vt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Xn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Xn([Vt.sprite,Vt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Xn([Vt.common,Vt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Xn([Vt.lights,Vt.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Wi.physical={uniforms:Xn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Pc={r:0,b:0,g:0},YE=new hn,Sv=new de;Sv.set(-1,0,0,0,1,0,0,0,1);function jE(o,e,i,s,l,u){const d=new Le(0);let p=l===!0?0:1,m,h,S=null,x=0,_=null;function y(w){let B=w.isScene===!0?w.background:null;if(B&&B.isTexture){const O=w.backgroundBlurriness>0;B=e.get(B,O)}return B}function T(w){let B=!1;const O=y(w);O===null?M(d,p):O&&O.isColor&&(M(O,1),B=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function U(w,B){const O=y(B);O&&(O.isCubeTexture||O.mapping===Zc)?(h===void 0&&(h=new _e(new yn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:jr(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=O,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(B.backgroundRotation)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Sv),h.material.toneMapped=Ce.getTransfer(O.colorSpace)!==qe,(S!==O||x!==O.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,S=O,x=O.version,_=o.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new _e(new Yr(2,2),new Ji({name:"BackgroundMaterial",uniforms:jr(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(O.colorSpace)!==qe,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(S!==O||x!==O.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,S=O,x=O.version,_=o.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function M(w,B){w.getRGB(Pc,_v(o)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,B,u)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,B=1){d.set(w),p=B,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,M(d,p)},render:T,addToRenderList:U,dispose:v}}function ZE(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let u=l,d=!1;function p(z,Z,ct,dt,q){let P=!1;const F=x(z,dt,ct,Z);u!==F&&(u=F,h(u.object)),P=y(z,dt,ct,q),P&&T(z,dt,ct,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,O(z,Z,ct,dt),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return o.createVertexArray()}function h(z){return o.bindVertexArray(z)}function S(z){return o.deleteVertexArray(z)}function x(z,Z,ct,dt){const q=dt.wireframe===!0;let P=s[Z.id];P===void 0&&(P={},s[Z.id]=P);const F=z.isInstancedMesh===!0?z.id:0;let ot=P[F];ot===void 0&&(ot={},P[F]=ot);let vt=ot[ct.id];vt===void 0&&(vt={},ot[ct.id]=vt);let Et=vt[q];return Et===void 0&&(Et=_(m()),vt[q]=Et),Et}function _(z){const Z=[],ct=[],dt=[];for(let q=0;q<i;q++)Z[q]=0,ct[q]=0,dt[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ct,attributeDivisors:dt,object:z,attributes:{},index:null}}function y(z,Z,ct,dt){const q=u.attributes,P=Z.attributes;let F=0;const ot=ct.getAttributes();for(const vt in ot)if(ot[vt].location>=0){const C=q[vt];let H=P[vt];if(H===void 0&&(vt==="instanceMatrix"&&z.instanceMatrix&&(H=z.instanceMatrix),vt==="instanceColor"&&z.instanceColor&&(H=z.instanceColor)),C===void 0||C.attribute!==H||H&&C.data!==H.data)return!0;F++}return u.attributesNum!==F||u.index!==dt}function T(z,Z,ct,dt){const q={},P=Z.attributes;let F=0;const ot=ct.getAttributes();for(const vt in ot)if(ot[vt].location>=0){let C=P[vt];C===void 0&&(vt==="instanceMatrix"&&z.instanceMatrix&&(C=z.instanceMatrix),vt==="instanceColor"&&z.instanceColor&&(C=z.instanceColor));const H={};H.attribute=C,C&&C.data&&(H.data=C.data),q[vt]=H,F++}u.attributes=q,u.attributesNum=F,u.index=dt}function U(){const z=u.newAttributes;for(let Z=0,ct=z.length;Z<ct;Z++)z[Z]=0}function M(z){v(z,0)}function v(z,Z){const ct=u.newAttributes,dt=u.enabledAttributes,q=u.attributeDivisors;ct[z]=1,dt[z]===0&&(o.enableVertexAttribArray(z),dt[z]=1),q[z]!==Z&&(o.vertexAttribDivisor(z,Z),q[z]=Z)}function w(){const z=u.newAttributes,Z=u.enabledAttributes;for(let ct=0,dt=Z.length;ct<dt;ct++)Z[ct]!==z[ct]&&(o.disableVertexAttribArray(ct),Z[ct]=0)}function B(z,Z,ct,dt,q,P,F){F===!0?o.vertexAttribIPointer(z,Z,ct,q,P):o.vertexAttribPointer(z,Z,ct,dt,q,P)}function O(z,Z,ct,dt){U();const q=dt.attributes,P=ct.getAttributes(),F=Z.defaultAttributeValues;for(const ot in P){const vt=P[ot];if(vt.location>=0){let Et=q[ot];if(Et===void 0&&(ot==="instanceMatrix"&&z.instanceMatrix&&(Et=z.instanceMatrix),ot==="instanceColor"&&z.instanceColor&&(Et=z.instanceColor)),Et!==void 0){const C=Et.normalized,H=Et.itemSize,lt=e.get(Et);if(lt===void 0)continue;const K=lt.buffer,yt=lt.type,$=lt.bytesPerElement,gt=yt===o.INT||yt===o.UNSIGNED_INT||Et.gpuType===Gh;if(Et.isInterleavedBufferAttribute){const xt=Et.data,Ct=xt.stride,Gt=Et.offset;if(xt.isInstancedInterleavedBuffer){for(let kt=0;kt<vt.locationSize;kt++)v(vt.location+kt,xt.meshPerAttribute);z.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let kt=0;kt<vt.locationSize;kt++)M(vt.location+kt);o.bindBuffer(o.ARRAY_BUFFER,K);for(let kt=0;kt<vt.locationSize;kt++)B(vt.location+kt,H/vt.locationSize,yt,C,Ct*$,(Gt+H/vt.locationSize*kt)*$,gt)}else{if(Et.isInstancedBufferAttribute){for(let xt=0;xt<vt.locationSize;xt++)v(vt.location+xt,Et.meshPerAttribute);z.isInstancedMesh!==!0&&dt._maxInstanceCount===void 0&&(dt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let xt=0;xt<vt.locationSize;xt++)M(vt.location+xt);o.bindBuffer(o.ARRAY_BUFFER,K);for(let xt=0;xt<vt.locationSize;xt++)B(vt.location+xt,H/vt.locationSize,yt,C,H*$,H/vt.locationSize*xt*$,gt)}}else if(F!==void 0){const C=F[ot];if(C!==void 0)switch(C.length){case 2:o.vertexAttrib2fv(vt.location,C);break;case 3:o.vertexAttrib3fv(vt.location,C);break;case 4:o.vertexAttrib4fv(vt.location,C);break;default:o.vertexAttrib1fv(vt.location,C)}}}}w()}function V(){N();for(const z in s){const Z=s[z];for(const ct in Z){const dt=Z[ct];for(const q in dt){const P=dt[q];for(const F in P)S(P[F].object),delete P[F];delete dt[q]}}delete s[z]}}function L(z){if(s[z.id]===void 0)return;const Z=s[z.id];for(const ct in Z){const dt=Z[ct];for(const q in dt){const P=dt[q];for(const F in P)S(P[F].object),delete P[F];delete dt[q]}}delete s[z.id]}function I(z){for(const Z in s){const ct=s[Z];for(const dt in ct){const q=ct[dt];if(q[z.id]===void 0)continue;const P=q[z.id];for(const F in P)S(P[F].object),delete P[F];delete q[z.id]}}}function E(z){for(const Z in s){const ct=s[Z],dt=z.isInstancedMesh===!0?z.id:0,q=ct[dt];if(q!==void 0){for(const P in q){const F=q[P];for(const ot in F)S(F[ot].object),delete F[ot];delete q[P]}delete ct[dt],Object.keys(ct).length===0&&delete s[Z]}}}function N(){j(),d=!0,u!==l&&(u=l,h(u.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:j,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:U,enableAttribute:M,disableUnusedAttributes:w}}function KE(o,e,i){let s;function l(m){s=m}function u(m,h){o.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,S){S!==0&&(o.drawArraysInstanced(s,m,h,S),i.update(h,s,S))}function p(m,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,S);let _=0;for(let y=0;y<S;y++)_+=h[y];i.update(_,s,1)}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function QE(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Bi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const E=I===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==hi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==qi&&!E)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(ce("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:T,maxTextureSize:U,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:w,maxVaryings:B,maxFragmentUniforms:O,maxSamples:V,samples:L}}function JE(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new Fs,p=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const y=x.length!==0||_||s!==0||l;return l=_,s=x.length,y},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,_){i=S(x,_,0)},this.setState=function(x,_,y){const T=x.clippingPlanes,U=x.clipIntersection,M=x.clipShadows,v=o.get(x);if(!l||T===null||T.length===0||u&&!M)u?S(null):h();else{const w=u?0:s,B=w*4;let O=v.clippingState||null;m.value=O,O=S(T,_,B,y);for(let V=0;V!==B;++V)O[V]=i[V];v.clippingState=O,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=w}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(x,_,y,T){const U=x!==null?x.length:0;let M=null;if(U!==0){if(M=m.value,T!==!0||M===null){const v=y+U*4,w=_.matrixWorldInverse;p.getNormalMatrix(w),(M===null||M.length<v)&&(M=new Float32Array(v));for(let B=0,O=y;B!==U;++B,O+=4)d.copy(x[B]).applyMatrix4(w,p),d.normal.toArray(M,O),M[O+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,M}}const ds=4,T_=[.125,.215,.35,.446,.526,.582],Gs=20,$E=256,Zo=new ep,A_=new Le;let Bd=null,Id=0,zd=0,Fd=!1;const t1=new et;class R_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:d=256,position:p=t1}=u;Bd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,Id,zd),this._renderer.xr.enabled=Fd,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Xs||e.mapping===Wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),Id=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Ra,format:Bi,colorSpace:Wc,depthBuffer:!1},l=C_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e1(u)),this._blurMaterial=i1(u,e,i),this._ggxMaterial=n1(u,e,i)}return l}_compileMaterial(e){const i=new _e(new Ei,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,s,l,u){const m=new bi(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(A_),x.toneMapping=ji,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _e(new yn,new Qh({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,M=U.material;let v=!1;const w=e.background;w?w.isColor&&(M.color.copy(w),e.background=null,v=!0):(M.color.copy(A_),v=!0);for(let B=0;B<6;B++){const O=B%3;O===0?(m.up.set(0,h[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[B],u.y,u.z)):O===1?(m.up.set(0,0,h[B]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[B],u.z)):(m.up.set(0,h[B],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[B]));const V=this._cubeSize;zr(l,O*V,B>2?V:0,V,V),x.setRenderTarget(l),v&&x.render(U,m),x.render(e,m)}x.toneMapping=y,x.autoClear=_,e.background=w}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Xs||e.mapping===Wr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=D_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const p=u.uniforms;p.envMap.value=e;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Zo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),x=Math.sqrt(h*h-S*S),_=0+h*1.25,y=x*_,{_lodMax:T}=this,U=this._sizeLods[s],M=3*U*(s>T-ds?s-T+ds:0),v=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=T-i,zr(u,M,v,3*U,2*U),l.setRenderTarget(u),l.render(p,Zo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-s,zr(e,M,v,3*U,2*U),l.setRenderTarget(e),l.render(p,Zo)}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const S=3,x=this._lodMeshes[l];x.material=h;const _=h.uniforms,y=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Gs-1),U=u/T,M=isFinite(u)?1+Math.floor(S*U):Gs;M>Gs&&ce(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Gs}`);const v=[];let w=0;for(let I=0;I<Gs;++I){const E=I/U,N=Math.exp(-E*E/2);v.push(N),I===0?w+=N:I<M&&(w+=2*N)}for(let I=0;I<v.length;I++)v[I]=v[I]/w;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:B}=this;_.dTheta.value=T,_.mipInt.value=B-s;const O=this._sizeLods[l],V=3*O*(l>B-ds?l-B+ds:0),L=4*(this._cubeSize-O);zr(i,V,L,3*O,2*O),m.setRenderTarget(i),m.render(x,Zo)}}function e1(o){const e=[],i=[],s=[];let l=o;const u=o-ds+1+T_.length;for(let d=0;d<u;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-ds?m=T_[d-o+ds-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,x=1+h,_=[S,S,x,S,x,x,S,S,x,x,S,x],y=6,T=6,U=3,M=2,v=1,w=new Float32Array(U*T*y),B=new Float32Array(M*T*y),O=new Float32Array(v*T*y);for(let L=0;L<y;L++){const I=L%3*2/3-1,E=L>2?0:-1,N=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];w.set(N,U*T*L),B.set(_,M*T*L);const j=[L,L,L,L,L,L];O.set(j,v*T*L)}const V=new Ei;V.setAttribute("position",new Ki(w,U)),V.setAttribute("uv",new Ki(B,M)),V.setAttribute("faceIndex",new Ki(O,v)),s.push(new _e(V,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function C_(o,e,i){const s=new Zi(o,e,i);return s.texture.mapping=Zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function n1(o,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$E,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function i1(o,e,i){const s=new Float32Array(Gs),l=new et(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function w_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function D_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mv extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new mv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new yn(5,5,5),u=new Ji({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ti,blending:Ta});u.uniforms.tEquirect.value=i;const d=new _e(l,u),p=i.minFilter;return i.minFilter===Vs&&(i.minFilter=Vn),new cy(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}function a1(o){let e=new WeakMap,i=new WeakMap,s=null;function l(_,y=!1){return _==null?null:y?d(_):u(_)}function u(_){if(_&&_.isTexture){const y=_.mapping;if(y===ld||y===cd)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const U=new Mv(T.height);return U.fromEquirectangularTexture(o,_),e.set(_,U),_.addEventListener("dispose",h),p(U.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const y=_.mapping,T=y===ld||y===cd,U=y===Xs||y===Wr;if(T||U){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return s===null&&(s=new R_(o)),M=T?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const w=_.image;return T&&w&&w.height>0||U&&w&&m(w)?(s===null&&(s=new R_(o)),M=T?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",S),M.texture):null}}}return _}function p(_,y){return y===ld?_.mapping=Xs:y===cd&&(_.mapping=Wr),_}function m(_){let y=0;const T=6;for(let U=0;U<T;U++)_[U]!==void 0&&y++;return y===T}function h(_){const y=_.target;y.removeEventListener("dispose",h);const T=e.get(y);T!==void 0&&(e.delete(y),T.dispose())}function S(_){const y=_.target;y.removeEventListener("dispose",S);const T=i.get(y);T!==void 0&&(i.delete(y),T.dispose())}function x(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:x}}function s1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Lh("WebGLRenderer: "+s+" extension not supported."),l}}}function r1(o,e,i,s){const l={},u=new WeakMap;function d(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete l[_.id];const y=u.get(_);y&&(e.remove(y),u.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(x,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function h(x){const _=[],y=x.index,T=x.attributes.position;let U=0;if(T===void 0)return;if(y!==null){const w=y.array;U=y.version;for(let B=0,O=w.length;B<O;B+=3){const V=w[B+0],L=w[B+1],I=w[B+2];_.push(V,L,L,I,I,V)}}else{const w=T.array;U=T.version;for(let B=0,O=w.length/3-1;B<O;B+=3){const V=B+0,L=B+1,I=B+2;_.push(V,L,L,I,I,V)}}const M=new(T.count>=65535?pv:hv)(_,1);M.version=U;const v=u.get(x);v&&e.remove(v),u.set(x,M)}function S(x){const _=u.get(x);if(_){const y=x.index;y!==null&&_.version<y.version&&h(x)}else h(x);return u.get(x)}return{get:p,update:m,getWireframeAttribute:S}}function o1(o,e,i){let s;function l(x){s=x}let u,d;function p(x){u=x.type,d=x.bytesPerElement}function m(x,_){o.drawElements(s,_,u,x*d),i.update(_,s,1)}function h(x,_,y){y!==0&&(o.drawElementsInstanced(s,_,u,x*d,y),i.update(_,s,y))}function S(x,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,u,x,0,y);let U=0;for(let M=0;M<y;M++)U+=_[M];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S}function l1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ne("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function c1(o,e,i){const s=new WeakMap,l=new cn;function u(d,p,m){const h=d.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,x=S!==void 0?S.length:0;let _=s.get(p);if(_===void 0||_.count!==x){let j=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",j)};var y=j;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],w=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let O=0;T===!0&&(O=1),U===!0&&(O=2),M===!0&&(O=3);let V=p.attributes.position.count*O,L=1;V>e.maxTextureSize&&(L=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const I=new Float32Array(V*L*4*x),E=new uv(I,V,L,x);E.type=qi,E.needsUpdate=!0;const N=O*4;for(let z=0;z<x;z++){const Z=v[z],ct=w[z],dt=B[z],q=V*L*4*z;for(let P=0;P<Z.count;P++){const F=P*N;T===!0&&(l.fromBufferAttribute(Z,P),I[q+F+0]=l.x,I[q+F+1]=l.y,I[q+F+2]=l.z,I[q+F+3]=0),U===!0&&(l.fromBufferAttribute(ct,P),I[q+F+4]=l.x,I[q+F+5]=l.y,I[q+F+6]=l.z,I[q+F+7]=0),M===!0&&(l.fromBufferAttribute(dt,P),I[q+F+8]=l.x,I[q+F+9]=l.y,I[q+F+10]=l.z,I[q+F+11]=dt.itemSize===4?l.w:1)}}_={count:x,texture:E,size:new Ie(V,L)},s.set(p,_),p.addEventListener("dispose",j)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const U=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",U),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function u1(o,e,i,s,l){let u=new WeakMap;function d(h){const S=l.render.frame,x=h.geometry,_=e.get(h,x);if(u.get(_)!==S&&(e.update(_),u.set(_,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),u.get(h)!==S&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),u.set(h,S))),h.isSkinnedMesh){const y=h.skeleton;u.get(y)!==S&&(y.update(),u.set(y,S))}return _}function p(){u=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:p}}const f1={[Z_]:"LINEAR_TONE_MAPPING",[K_]:"REINHARD_TONE_MAPPING",[Q_]:"CINEON_TONE_MAPPING",[Hh]:"ACES_FILMIC_TONE_MAPPING",[$_]:"AGX_TONE_MAPPING",[tv]:"NEUTRAL_TONE_MAPPING",[J_]:"CUSTOM_TONE_MAPPING"};function d1(o,e,i,s,l){const u=new Zi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new qr(e,i):void 0}),d=new Zi(e,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),p=new Ei;p.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new wn([0,2,0,0,2,0],2));const m=new ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new _e(p,m),S=new ep(-1,1,1,-1,0,1);let x=null,_=null,y=!1,T,U=null,M=[],v=!1;this.setSize=function(w,B){u.setSize(w,B),d.setSize(w,B);for(let O=0;O<M.length;O++){const V=M[O];V.setSize&&V.setSize(w,B)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;const B=u.width,O=u.height;for(let V=0;V<M.length;V++){const L=M[V];L.setSize&&L.setSize(B,O)}},this.begin=function(w,B){if(y||w.toneMapping===ji&&M.length===0)return!1;if(U=B,B!==null){const O=B.width,V=B.height;(u.width!==O||u.height!==V)&&this.setSize(O,V)}return v===!1&&w.setRenderTarget(u),T=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return v},this.end=function(w,B){w.toneMapping=T,y=!0;let O=u,V=d;for(let L=0;L<M.length;L++){const I=M[L];if(I.enabled!==!1&&(I.render(w,V,O,B),I.needsSwap!==!1)){const E=O;O=V,V=E}}if(x!==w.outputColorSpace||_!==w.toneMapping){x=w.outputColorSpace,_=w.toneMapping,m.defines={},Ce.getTransfer(x)===qe&&(m.defines.SRGB_TRANSFER="");const L=f1[_];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,w.setRenderTarget(U),w.render(h,S),U=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),p.dispose(),m.dispose()}}const yv=new Wn,Ph=new qr(1,1),bv=new uv,Ev=new UM,Tv=new mv,U_=[],N_=[],L_=new Float32Array(16),O_=new Float32Array(9),P_=new Float32Array(4);function Kr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=U_[l];if(u===void 0&&(u=new Float32Array(l),U_[l]=u),e!==0){s.toArray(u,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(u,p)}return u}function Tn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function An(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Qc(o,e){let i=N_[e];i===void 0&&(i=new Int32Array(e),N_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function h1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2fv(this.addr,e),An(i,e)}}function m1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;o.uniform3fv(this.addr,e),An(i,e)}}function g1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4fv(this.addr,e),An(i,e)}}function _1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;P_.set(s),o.uniformMatrix2fv(this.addr,!1,P_),An(i,s)}}function v1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;O_.set(s),o.uniformMatrix3fv(this.addr,!1,O_),An(i,s)}}function x1(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;L_.set(s),o.uniformMatrix4fv(this.addr,!1,L_),An(i,s)}}function S1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function M1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2iv(this.addr,e),An(i,e)}}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3iv(this.addr,e),An(i,e)}}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4iv(this.addr,e),An(i,e)}}function E1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2uiv(this.addr,e),An(i,e)}}function A1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3uiv(this.addr,e),An(i,e)}}function R1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4uiv(this.addr,e),An(i,e)}}function C1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ph.compareFunction=i.isReversedDepthBuffer()?jh:Yh,u=Ph):u=yv,i.setTexture2D(e||u,l)}function w1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Ev,l)}function D1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Tv,l)}function U1(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||bv,l)}function N1(o){switch(o){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return y1;case 35669:case 35673:return b1;case 5125:return E1;case 36294:return T1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return U1}}function L1(o,e){o.uniform1fv(this.addr,e)}function O1(o,e){const i=Kr(e,this.size,2);o.uniform2fv(this.addr,i)}function P1(o,e){const i=Kr(e,this.size,3);o.uniform3fv(this.addr,i)}function B1(o,e){const i=Kr(e,this.size,4);o.uniform4fv(this.addr,i)}function I1(o,e){const i=Kr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function z1(o,e){const i=Kr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function F1(o,e){const i=Kr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function H1(o,e){o.uniform1iv(this.addr,e)}function G1(o,e){o.uniform2iv(this.addr,e)}function V1(o,e){o.uniform3iv(this.addr,e)}function k1(o,e){o.uniform4iv(this.addr,e)}function X1(o,e){o.uniform1uiv(this.addr,e)}function W1(o,e){o.uniform2uiv(this.addr,e)}function q1(o,e){o.uniform3uiv(this.addr,e)}function Y1(o,e){o.uniform4uiv(this.addr,e)}function j1(o,e,i){const s=this.cache,l=e.length,u=Qc(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Ph:d=yv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,u[p])}function Z1(o,e,i){const s=this.cache,l=e.length,u=Qc(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Ev,u[d])}function K1(o,e,i){const s=this.cache,l=e.length,u=Qc(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Tv,u[d])}function Q1(o,e,i){const s=this.cache,l=e.length,u=Qc(i,l);Tn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||bv,u[d])}function J1(o){switch(o){case 5126:return L1;case 35664:return O1;case 35665:return P1;case 35666:return B1;case 35674:return I1;case 35675:return z1;case 35676:return F1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return k1;case 5125:return X1;case 36294:return W1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Q1}}class $1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=N1(i.type)}}class tT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=J1(i.type)}}class eT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function B_(o,e){o.seq.push(e),o.map[e.id]=e}function nT(o,e,i){const s=o.name,l=s.length;for(Hd.lastIndex=0;;){const u=Hd.exec(s),d=Hd.lastIndex;let p=u[1];const m=u[2]==="]",h=u[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){B_(i,h===void 0?new $1(p,o,e):new tT(p,o,e));break}else{let x=i.map[p];x===void 0&&(x=new eT(p),B_(i,x)),i=x}}}class Vc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);nT(p,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const p=i[u],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function I_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const iT=37297;let aT=0;function sT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const z_=new de;function rT(o){Ce._getMatrix(z_,Ce.workingColorSpace,o);const e=`mat3( ${z_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case qc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function F_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+sT(o.getShaderSource(e),p)}else return u}function oT(o,e){const i=rT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lT={[Z_]:"Linear",[K_]:"Reinhard",[Q_]:"Cineon",[Hh]:"ACESFilmic",[$_]:"AgX",[tv]:"Neutral",[J_]:"Custom"};function cT(o,e){const i=lT[e];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new et;function uT(){Ce.getLuminanceCoefficients(Bc);const o=Bc.x.toFixed(4),e=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function dT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Jo(o){return o!==""}function H_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(o){return o.replace(pT,gT)}const mT=new Map;function gT(o,e){let i=Se[e];if(i===void 0){const s=mT.get(e);if(s!==void 0)i=Se[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Bh(i)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V_(o){return o.replace(_T,vT)}function vT(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function k_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xT={[Ic]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function ST(o){return xT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MT={[Xs]:"ENVMAP_TYPE_CUBE",[Wr]:"ENVMAP_TYPE_CUBE",[Zc]:"ENVMAP_TYPE_CUBE_UV"};function yT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":MT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const bT={[Wr]:"ENVMAP_MODE_REFRACTION"};function ET(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":bT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TT={[j_]:"ENVMAP_BLENDING_MULTIPLY",[uM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function AT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":TT[o.combine]||"ENVMAP_BLENDING_NONE"}function RT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function CT(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=ST(i),h=yT(i),S=ET(i),x=AT(i),_=RT(i),y=fT(i),T=dT(u),U=l.createProgram();let M,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Jo).join(`
`),v.length>0&&(v+=`
`)):(M=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),v=[k_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?Se.tonemapping_pars_fragment:"",i.toneMapping!==ji?cT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,oT("linearToOutputTexel",i.outputColorSpace),uT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Jo).join(`
`)),d=Bh(d),d=H_(d,i),d=G_(d,i),p=Bh(p),p=H_(p,i),p=G_(p,i),d=V_(d),p=V_(p),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const B=w+M+d,O=w+v+p,V=I_(l,l.VERTEX_SHADER,B),L=I_(l,l.FRAGMENT_SHADER,O);l.attachShader(U,V),l.attachShader(U,L),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function I(z){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(U)||"",ct=l.getShaderInfoLog(V)||"",dt=l.getShaderInfoLog(L)||"",q=Z.trim(),P=ct.trim(),F=dt.trim();let ot=!0,vt=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,U,V,L);else{const Et=F_(l,V,"vertex"),C=F_(l,L,"fragment");Ne("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+q+`
`+Et+`
`+C)}else q!==""?ce("WebGLProgram: Program Info Log:",q):(P===""||F==="")&&(vt=!1);vt&&(z.diagnostics={runnable:ot,programLog:q,vertexShader:{log:P,prefix:M},fragmentShader:{log:F,prefix:v}})}l.deleteShader(V),l.deleteShader(L),E=new Vc(l,U),N=hT(l,U)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=l.getProgramParameter(U,iT)),j},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aT++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=V,this.fragmentShader=L,this}let wT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new UT(e),i.set(e,s)),s}}class UT{constructor(e){this.id=wT++,this.code=e,this.usedTimes=0}}function NT(o){return o===Ws||o===kc||o===Xc}function LT(o,e,i,s,l,u){const d=new fv,p=new DT,m=new Set,h=[],S=new Map,x=s.logarithmicDepthBuffer;let _=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function U(E,N,j,z,Z,ct){const dt=z.fog,q=Z.geometry,P=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ot=e.get(E.envMap||P,F),vt=ot&&ot.mapping===Zc?ot.image.height:null,Et=y[E.type];E.precision!==null&&(_=s.getMaxPrecision(E.precision),_!==E.precision&&ce("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const C=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,H=C!==void 0?C.length:0;let lt=0;q.morphAttributes.position!==void 0&&(lt=1),q.morphAttributes.normal!==void 0&&(lt=2),q.morphAttributes.color!==void 0&&(lt=3);let K,yt,$,gt;if(Et){const re=Wi[Et];K=re.vertexShader,yt=re.fragmentShader}else K=E.vertexShader,yt=E.fragmentShader,p.update(E),$=p.getVertexShaderID(E),gt=p.getFragmentShaderID(E);const xt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Gt=Z.isInstancedMesh===!0,kt=Z.isBatchedMesh===!0,Yt=!!E.map,wt=!!E.matcap,Zt=!!ot,$t=!!E.aoMap,Wt=!!E.lightMap,ne=!!E.bumpMap,fe=!!E.normalMap,De=!!E.displacementMap,X=!!E.emissiveMap,Ye=!!E.metalnessMap,he=!!E.roughnessMap,Ee=E.anisotropy>0,Dt=E.clearcoat>0,tn=E.dispersion>0,D=E.iridescence>0,b=E.sheen>0,J=E.transmission>0,_t=Ee&&!!E.anisotropyMap,At=Dt&&!!E.clearcoatMap,Nt=Dt&&!!E.clearcoatNormalMap,Pt=Dt&&!!E.clearcoatRoughnessMap,ut=D&&!!E.iridescenceMap,ht=D&&!!E.iridescenceThicknessMap,Bt=b&&!!E.sheenColorMap,It=b&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,Ut=!!E.specularColorMap,le=!!E.specularIntensityMap,ie=J&&!!E.transmissionMap,ve=J&&!!E.thicknessMap,k=!!E.gradientMap,Rt=!!E.alphaMap,pt=E.alphaTest>0,Ft=!!E.alphaHash,Ot=!!E.extensions;let Tt=ji;E.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(Tt=o.toneMapping);const Kt={shaderID:Et,shaderType:E.type,shaderName:E.name,vertexShader:K,fragmentShader:yt,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:gt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:kt,batchingColor:kt&&Z._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Z.instanceColor!==null,instancingMorph:Gt&&Z.morphTexture!==null,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ce.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Yt,matcap:wt,envMap:Zt,envMapMode:Zt&&ot.mapping,envMapCubeUVHeight:vt,aoMap:$t,lightMap:Wt,bumpMap:ne,normalMap:fe,displacementMap:De,emissiveMap:X,normalMapObjectSpace:fe&&E.normalMapType===pM,normalMapTangentSpace:fe&&E.normalMapType===Nh,packedNormalMap:fe&&E.normalMapType===Nh&&NT(E.normalMap.format),metalnessMap:Ye,roughnessMap:he,anisotropy:Ee,anisotropyMap:_t,clearcoat:Dt,clearcoatMap:At,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Pt,dispersion:tn,iridescence:D,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:b,sheenColorMap:Bt,sheenRoughnessMap:It,specularMap:Lt,specularColorMap:Ut,specularIntensityMap:le,transmission:J,transmissionMap:ie,thicknessMap:ve,gradientMap:k,opaque:E.transparent===!1&&E.blending===Vr&&E.alphaToCoverage===!1,alphaMap:Rt,alphaTest:pt,alphaHash:Ft,combine:E.combine,mapUv:Yt&&T(E.map.channel),aoMapUv:$t&&T(E.aoMap.channel),lightMapUv:Wt&&T(E.lightMap.channel),bumpMapUv:ne&&T(E.bumpMap.channel),normalMapUv:fe&&T(E.normalMap.channel),displacementMapUv:De&&T(E.displacementMap.channel),emissiveMapUv:X&&T(E.emissiveMap.channel),metalnessMapUv:Ye&&T(E.metalnessMap.channel),roughnessMapUv:he&&T(E.roughnessMap.channel),anisotropyMapUv:_t&&T(E.anisotropyMap.channel),clearcoatMapUv:At&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:It&&T(E.sheenRoughnessMap.channel),specularMapUv:Lt&&T(E.specularMap.channel),specularColorMapUv:Ut&&T(E.specularColorMap.channel),specularIntensityMapUv:le&&T(E.specularIntensityMap.channel),transmissionMapUv:ie&&T(E.transmissionMap.channel),thicknessMapUv:ve&&T(E.thicknessMap.channel),alphaMapUv:Rt&&T(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(fe||Ee),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(Yt||Rt),fog:!!dt,useFog:E.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&fe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ct,skinning:Z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:lt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ct.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Yt&&E.map.isVideoTexture===!0&&Ce.getTransfer(E.map.colorSpace)===qe,decodeVideoTextureEmissive:X&&E.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(E.emissiveMap.colorSpace)===qe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ba,flipSided:E.side===ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ot&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&E.extensions.multiDraw===!0||kt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Kt.vertexUv1s=m.has(1),Kt.vertexUv2s=m.has(2),Kt.vertexUv3s=m.has(3),m.clear(),Kt}function M(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const j in E.defines)N.push(j),N.push(E.defines[j]);return E.isRawShaderMaterial===!1&&(v(N,E),w(N,E),N.push(o.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function v(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function w(E,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),E.push(d.mask)}function B(E){const N=y[E.type];let j;if(N){const z=Wi[N];j=JM.clone(z.uniforms)}else j=E.uniforms;return j}function O(E,N){let j=S.get(N);return j!==void 0?++j.usedTimes:(j=new CT(o,N,E,l),h.push(j),S.set(N,j)),j}function V(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),S.delete(E.cacheKey),E.destroy()}}function L(E){p.remove(E)}function I(){p.dispose()}return{getParameters:U,getProgramCacheKey:M,getUniforms:B,acquireProgram:O,releaseProgram:V,releaseShaderCache:L,programs:h,dispose:I}}function OT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function PT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function X_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function W_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function p(_,y,T,U,M,v){let w=o[e];return w===void 0?(w={id:_.id,object:_,geometry:y,material:T,materialVariant:d(_),groupOrder:U,renderOrder:_.renderOrder,z:M,group:v},o[e]=w):(w.id=_.id,w.object=_,w.geometry=y,w.material=T,w.materialVariant=d(_),w.groupOrder=U,w.renderOrder=_.renderOrder,w.z=M,w.group=v),e++,w}function m(_,y,T,U,M,v){const w=p(_,y,T,U,M,v);T.transmission>0?s.push(w):T.transparent===!0?l.push(w):i.push(w)}function h(_,y,T,U,M,v){const w=p(_,y,T,U,M,v);T.transmission>0?s.unshift(w):T.transparent===!0?l.unshift(w):i.unshift(w)}function S(_,y){i.length>1&&i.sort(_||PT),s.length>1&&s.sort(y||X_),l.length>1&&l.sort(y||X_)}function x(){for(let _=e,y=o.length;_<y;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:m,unshift:h,finish:x,sort:S}}function BT(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new W_,o.set(s,[d])):l>=u.length?(d=new W_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function IT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new et,color:new Le};break;case"SpotLight":i={position:new et,direction:new et,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new et,halfWidth:new et,halfHeight:new et};break}return o[e.id]=i,i}}}function zT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let FT=0;function HT(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function GT(o){const e=new IT,i=zT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new et);const l=new et,u=new hn,d=new hn;function p(h){let S=0,x=0,_=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let y=0,T=0,U=0,M=0,v=0,w=0,B=0,O=0,V=0,L=0,I=0;h.sort(HT);for(let N=0,j=h.length;N<j;N++){const z=h[N],Z=z.color,ct=z.intensity,dt=z.distance;let q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ws?q=z.shadow.map.texture:q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)S+=Z.r*ct,x+=Z.g*ct,_+=Z.b*ct;else if(z.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(z.sh.coefficients[P],ct);I++}else if(z.isDirectionalLight){const P=e.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const F=z.shadow,ot=i.get(z);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.directionalShadow[y]=ot,s.directionalShadowMap[y]=q,s.directionalShadowMatrix[y]=z.shadow.matrix,w++}s.directional[y]=P,y++}else if(z.isSpotLight){const P=e.get(z);P.position.setFromMatrixPosition(z.matrixWorld),P.color.copy(Z).multiplyScalar(ct),P.distance=dt,P.coneCos=Math.cos(z.angle),P.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),P.decay=z.decay,s.spot[U]=P;const F=z.shadow;if(z.map&&(s.spotLightMap[V]=z.map,V++,F.updateMatrices(z),z.castShadow&&L++),s.spotLightMatrix[U]=F.matrix,z.castShadow){const ot=i.get(z);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,s.spotShadow[U]=ot,s.spotShadowMap[U]=q,O++}U++}else if(z.isRectAreaLight){const P=e.get(z);P.color.copy(Z).multiplyScalar(ct),P.halfWidth.set(z.width*.5,0,0),P.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=P,M++}else if(z.isPointLight){const P=e.get(z);if(P.color.copy(z.color).multiplyScalar(z.intensity),P.distance=z.distance,P.decay=z.decay,z.castShadow){const F=z.shadow,ot=i.get(z);ot.shadowIntensity=F.intensity,ot.shadowBias=F.bias,ot.shadowNormalBias=F.normalBias,ot.shadowRadius=F.radius,ot.shadowMapSize=F.mapSize,ot.shadowCameraNear=F.camera.near,ot.shadowCameraFar=F.camera.far,s.pointShadow[T]=ot,s.pointShadowMap[T]=q,s.pointShadowMatrix[T]=z.shadow.matrix,B++}s.point[T]=P,T++}else if(z.isHemisphereLight){const P=e.get(z);P.skyColor.copy(z.color).multiplyScalar(ct),P.groundColor.copy(z.groundColor).multiplyScalar(ct),s.hemi[v]=P,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=x,s.ambient[2]=_;const E=s.hash;(E.directionalLength!==y||E.pointLength!==T||E.spotLength!==U||E.rectAreaLength!==M||E.hemiLength!==v||E.numDirectionalShadows!==w||E.numPointShadows!==B||E.numSpotShadows!==O||E.numSpotMaps!==V||E.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=U,s.rectArea.length=M,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=O,s.spotShadowMap.length=O,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=O+V-L,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=I,E.directionalLength=y,E.pointLength=T,E.spotLength=U,E.rectAreaLength=M,E.hemiLength=v,E.numDirectionalShadows=w,E.numPointShadows=B,E.numSpotShadows=O,E.numSpotMaps=V,E.numLightProbes=I,s.version=FT++)}function m(h,S){let x=0,_=0,y=0,T=0,U=0;const M=S.matrixWorldInverse;for(let v=0,w=h.length;v<w;v++){const B=h[v];if(B.isDirectionalLight){const O=s.directional[x];O.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),x++}else if(B.isSpotLight){const O=s.spot[y];O.position.setFromMatrixPosition(B.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(B.matrixWorld),l.setFromMatrixPosition(B.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),y++}else if(B.isRectAreaLight){const O=s.rectArea[T];O.position.setFromMatrixPosition(B.matrixWorld),O.position.applyMatrix4(M),d.identity(),u.copy(B.matrixWorld),u.premultiply(M),d.extractRotation(u),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),T++}else if(B.isPointLight){const O=s.point[_];O.position.setFromMatrixPosition(B.matrixWorld),O.position.applyMatrix4(M),_++}else if(B.isHemisphereLight){const O=s.hemi[U];O.direction.setFromMatrixPosition(B.matrixWorld),O.direction.transformDirection(M),U++}}}return{setup:p,setupView:m,state:s}}function q_(o){const e=new GT(o),i=[],s=[],l=[];function u(_){x.camera=_,i.length=0,s.length=0,l.length=0}function d(_){i.push(_)}function p(_){s.push(_)}function m(_){l.push(_)}function h(){e.setup(i)}function S(_){e.setupView(i,_)}const x={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:h,setupLightsView:S,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function VT(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let p;return d===void 0?(p=new q_(o),e.set(l,[p])):u>=d.length?(p=new q_(o),d.push(p)):p=d[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const kT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WT=[new et(1,0,0),new et(-1,0,0),new et(0,1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1)],qT=[new et(0,-1,0),new et(0,-1,0),new et(0,0,1),new et(0,0,-1),new et(0,-1,0),new et(0,-1,0)],Y_=new hn,Ko=new et,Gd=new et;function YT(o,e,i){let s=new Jh;const l=new Ie,u=new Ie,d=new cn,p=new ny,m=new iy,h={},S=i.maxTextureSize,x={[hs]:ti,[ti]:hs,[ba]:ba},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:kT,fragmentShader:XT}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const T=new Ei;T.setAttribute("position",new Ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new _e(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let v=this.type;this.render=function(L,I,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===WS&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ic);const N=o.getRenderTarget(),j=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Ta),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ct=v!==this.type;ct&&I.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(q=>q.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,q=L.length;dt<q;dt++){const P=L[dt],F=P.shadow;if(F===void 0){ce("WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const ot=F.getFrameExtents();l.multiply(ot),u.copy(F.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/ot.x),l.x=u.x*ot.x,F.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/ot.y),l.y=u.y*ot.y,F.mapSize.y=u.y));const vt=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=vt,F.map===null||ct===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Qo){if(P.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Zi(l.x,l.y,{format:Ws,type:Ra,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),F.map.texture.name=P.name+".shadowMap",F.map.depthTexture=new qr(l.x,l.y,qi),F.map.depthTexture.name=P.name+".shadowMapDepth",F.map.depthTexture.format=Ca,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn}else P.isPointLight?(F.map=new Mv(l.x),F.map.depthTexture=new KM(l.x,Qi)):(F.map=new Zi(l.x,l.y),F.map.depthTexture=new qr(l.x,l.y,Qi)),F.map.depthTexture.name=P.name+".shadowMap",F.map.depthTexture.format=Ca,this.type===Ic?(F.map.depthTexture.compareFunction=vt?jh:Yh,F.map.depthTexture.minFilter=Vn,F.map.depthTexture.magFilter=Vn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Pn,F.map.depthTexture.magFilter=Pn);F.camera.updateProjectionMatrix()}const Et=F.map.isWebGLCubeRenderTarget?6:1;for(let C=0;C<Et;C++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,C),o.clear();else{C===0&&(o.setRenderTarget(F.map),o.clear());const H=F.getViewport(C);d.set(u.x*H.x,u.y*H.y,u.x*H.z,u.y*H.w),Z.viewport(d)}if(P.isPointLight){const H=F.camera,lt=F.matrix,K=P.distance||H.far;K!==H.far&&(H.far=K,H.updateProjectionMatrix()),Ko.setFromMatrixPosition(P.matrixWorld),H.position.copy(Ko),Gd.copy(H.position),Gd.add(WT[C]),H.up.copy(qT[C]),H.lookAt(Gd),H.updateMatrixWorld(),lt.makeTranslation(-Ko.x,-Ko.y,-Ko.z),Y_.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Y_,H.coordinateSystem,H.reversedDepth)}else F.updateMatrices(P);s=F.getFrustum(),O(I,E,F.camera,P,this.type)}F.isPointLightShadow!==!0&&this.type===Qo&&w(F,E),F.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(N,j,z)};function w(L,I){const E=e.update(U);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zi(l.x,l.y,{format:Ws,type:Ra})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(I,null,E,_,U,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(I,null,E,y,U,null)}function B(L,I,E,N){let j=null;const z=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)j=z;else if(j=E.isPointLight===!0?m:p,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Z=j.uuid,ct=I.uuid;let dt=h[Z];dt===void 0&&(dt={},h[Z]=dt);let q=dt[ct];q===void 0&&(q=j.clone(),dt[ct]=q,I.addEventListener("dispose",V)),j=q}if(j.visible=I.visible,j.wireframe=I.wireframe,N===Qo?j.side=I.shadowSide!==null?I.shadowSide:I.side:j.side=I.shadowSide!==null?I.shadowSide:x[I.side],j.alphaMap=I.alphaMap,j.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,j.map=I.map,j.clipShadows=I.clipShadows,j.clippingPlanes=I.clippingPlanes,j.clipIntersection=I.clipIntersection,j.displacementMap=I.displacementMap,j.displacementScale=I.displacementScale,j.displacementBias=I.displacementBias,j.wireframeLinewidth=I.wireframeLinewidth,j.linewidth=I.linewidth,E.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const Z=o.properties.get(j);Z.light=E}return j}function O(L,I,E,N,j){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&j===Qo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ct=e.update(L),dt=L.material;if(Array.isArray(dt)){const q=ct.groups;for(let P=0,F=q.length;P<F;P++){const ot=q[P],vt=dt[ot.materialIndex];if(vt&&vt.visible){const Et=B(L,vt,N,j);L.onBeforeShadow(o,L,I,E,ct,Et,ot),o.renderBufferDirect(E,null,ct,Et,L,ot),L.onAfterShadow(o,L,I,E,ct,Et,ot)}}}else if(dt.visible){const q=B(L,dt,N,j);L.onBeforeShadow(o,L,I,E,ct,q,null),o.renderBufferDirect(E,null,ct,q,L,null),L.onAfterShadow(o,L,I,E,ct,q,null)}}const Z=L.children;for(let ct=0,dt=Z.length;ct<dt;ct++)O(Z[ct],I,E,N,j)}function V(L){L.target.removeEventListener("dispose",V);for(const E in h){const N=h[E],j=L.target.uuid;j in N&&(N[j].dispose(),delete N[j])}}}function jT(o,e){function i(){let k=!1;const Rt=new cn;let pt=null;const Ft=new cn(0,0,0,0);return{setMask:function(Ot){pt!==Ot&&!k&&(o.colorMask(Ot,Ot,Ot,Ot),pt=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,Tt,Kt,re,je){je===!0&&(Ot*=re,Tt*=re,Kt*=re),Rt.set(Ot,Tt,Kt,re),Ft.equals(Rt)===!1&&(o.clearColor(Ot,Tt,Kt,re),Ft.copy(Rt))},reset:function(){k=!1,pt=null,Ft.set(-1,0,0,0)}}}function s(){let k=!1,Rt=!1,pt=null,Ft=null,Ot=null;return{setReversed:function(Tt){if(Rt!==Tt){const Kt=e.get("EXT_clip_control");Tt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Rt=Tt;const re=Ot;Ot=null,this.setClear(re)}},getReversed:function(){return Rt},setTest:function(Tt){Tt?xt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(Tt){pt!==Tt&&!k&&(o.depthMask(Tt),pt=Tt)},setFunc:function(Tt){if(Rt&&(Tt=EM[Tt]),Ft!==Tt){switch(Tt){case Yd:o.depthFunc(o.NEVER);break;case jd:o.depthFunc(o.ALWAYS);break;case Zd:o.depthFunc(o.LESS);break;case Xr:o.depthFunc(o.LEQUAL);break;case Kd:o.depthFunc(o.EQUAL);break;case Qd:o.depthFunc(o.GEQUAL);break;case Jd:o.depthFunc(o.GREATER);break;case $d:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=Tt}},setLocked:function(Tt){k=Tt},setClear:function(Tt){Ot!==Tt&&(Ot=Tt,Rt&&(Tt=1-Tt),o.clearDepth(Tt))},reset:function(){k=!1,pt=null,Ft=null,Ot=null,Rt=!1}}}function l(){let k=!1,Rt=null,pt=null,Ft=null,Ot=null,Tt=null,Kt=null,re=null,je=null;return{setTest:function(Ue){k||(Ue?xt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ue){Rt!==Ue&&!k&&(o.stencilMask(Ue),Rt=Ue)},setFunc:function(Ue,pn,mn){(pt!==Ue||Ft!==pn||Ot!==mn)&&(o.stencilFunc(Ue,pn,mn),pt=Ue,Ft=pn,Ot=mn)},setOp:function(Ue,pn,mn){(Tt!==Ue||Kt!==pn||re!==mn)&&(o.stencilOp(Ue,pn,mn),Tt=Ue,Kt=pn,re=mn)},setLocked:function(Ue){k=Ue},setClear:function(Ue){je!==Ue&&(o.clearStencil(Ue),je=Ue)},reset:function(){k=!1,Rt=null,pt=null,Ft=null,Ot=null,Tt=null,Kt=null,re=null,je=null}}}const u=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},x={},_={},y=new WeakMap,T=[],U=null,M=!1,v=null,w=null,B=null,O=null,V=null,L=null,I=null,E=new Le(0,0,0),N=0,j=!1,z=null,Z=null,ct=null,dt=null,q=null;const P=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,ot=0;const vt=o.getParameter(o.VERSION);vt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(vt)[1]),F=ot>=1):vt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),F=ot>=2);let Et=null,C={};const H=o.getParameter(o.SCISSOR_BOX),lt=o.getParameter(o.VIEWPORT),K=new cn().fromArray(H),yt=new cn().fromArray(lt);function $(k,Rt,pt,Ft){const Ot=new Uint8Array(4),Tt=o.createTexture();o.bindTexture(k,Tt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Kt=0;Kt<pt;Kt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Ot):o.texImage2D(Rt+Kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ot);return Tt}const gt={};gt[o.TEXTURE_2D]=$(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=$(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=$(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=$(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),p.setClear(0),xt(o.DEPTH_TEST),d.setFunc(Xr),ne(!1),fe(Zg),xt(o.CULL_FACE),$t(Ta);function xt(k){S[k]!==!0&&(o.enable(k),S[k]=!0)}function Ct(k){S[k]!==!1&&(o.disable(k),S[k]=!1)}function Gt(k,Rt){return _[k]!==Rt?(o.bindFramebuffer(k,Rt),_[k]=Rt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Rt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function kt(k,Rt){let pt=T,Ft=!1;if(k){pt=y.get(Rt),pt===void 0&&(pt=[],y.set(Rt,pt));const Ot=k.textures;if(pt.length!==Ot.length||pt[0]!==o.COLOR_ATTACHMENT0){for(let Tt=0,Kt=Ot.length;Tt<Kt;Tt++)pt[Tt]=o.COLOR_ATTACHMENT0+Tt;pt.length=Ot.length,Ft=!0}}else pt[0]!==o.BACK&&(pt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(pt)}function Yt(k){return U!==k?(o.useProgram(k),U=k,!0):!1}const wt={[Hs]:o.FUNC_ADD,[YS]:o.FUNC_SUBTRACT,[jS]:o.FUNC_REVERSE_SUBTRACT};wt[ZS]=o.MIN,wt[KS]=o.MAX;const Zt={[QS]:o.ZERO,[JS]:o.ONE,[$S]:o.SRC_COLOR,[Wd]:o.SRC_ALPHA,[sM]:o.SRC_ALPHA_SATURATE,[iM]:o.DST_COLOR,[eM]:o.DST_ALPHA,[tM]:o.ONE_MINUS_SRC_COLOR,[qd]:o.ONE_MINUS_SRC_ALPHA,[aM]:o.ONE_MINUS_DST_COLOR,[nM]:o.ONE_MINUS_DST_ALPHA,[rM]:o.CONSTANT_COLOR,[oM]:o.ONE_MINUS_CONSTANT_COLOR,[lM]:o.CONSTANT_ALPHA,[cM]:o.ONE_MINUS_CONSTANT_ALPHA};function $t(k,Rt,pt,Ft,Ot,Tt,Kt,re,je,Ue){if(k===Ta){M===!0&&(Ct(o.BLEND),M=!1);return}if(M===!1&&(xt(o.BLEND),M=!0),k!==qS){if(k!==v||Ue!==j){if((w!==Hs||V!==Hs)&&(o.blendEquation(o.FUNC_ADD),w=Hs,V=Hs),Ue)switch(k){case Vr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kg:o.blendFunc(o.ONE,o.ONE);break;case Qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Jg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ne("WebGLState: Invalid blending: ",k);break}else switch(k){case Vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Qg:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jg:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",k);break}B=null,O=null,L=null,I=null,E.set(0,0,0),N=0,v=k,j=Ue}return}Ot=Ot||Rt,Tt=Tt||pt,Kt=Kt||Ft,(Rt!==w||Ot!==V)&&(o.blendEquationSeparate(wt[Rt],wt[Ot]),w=Rt,V=Ot),(pt!==B||Ft!==O||Tt!==L||Kt!==I)&&(o.blendFuncSeparate(Zt[pt],Zt[Ft],Zt[Tt],Zt[Kt]),B=pt,O=Ft,L=Tt,I=Kt),(re.equals(E)===!1||je!==N)&&(o.blendColor(re.r,re.g,re.b,je),E.copy(re),N=je),v=k,j=!1}function Wt(k,Rt){k.side===ba?Ct(o.CULL_FACE):xt(o.CULL_FACE);let pt=k.side===ti;Rt&&(pt=!pt),ne(pt),k.blending===Vr&&k.transparent===!1?$t(Ta):$t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ft=k.stencilWrite;p.setTest(Ft),Ft&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),X(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){z!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),z=k)}function fe(k){k!==kS?(xt(o.CULL_FACE),k!==Z&&(k===Zg?o.cullFace(o.BACK):k===XS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),Z=k}function De(k){k!==ct&&(F&&o.lineWidth(k),ct=k)}function X(k,Rt,pt){k?(xt(o.POLYGON_OFFSET_FILL),(dt!==Rt||q!==pt)&&(dt=Rt,q=pt,d.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,pt))):Ct(o.POLYGON_OFFSET_FILL)}function Ye(k){k?xt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function he(k){k===void 0&&(k=o.TEXTURE0+P-1),Et!==k&&(o.activeTexture(k),Et=k)}function Ee(k,Rt,pt){pt===void 0&&(Et===null?pt=o.TEXTURE0+P-1:pt=Et);let Ft=C[pt];Ft===void 0&&(Ft={type:void 0,texture:void 0},C[pt]=Ft),(Ft.type!==k||Ft.texture!==Rt)&&(Et!==pt&&(o.activeTexture(pt),Et=pt),o.bindTexture(k,Rt||gt[k]),Ft.type=k,Ft.texture=Rt)}function Dt(){const k=C[Et];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function tn(){try{o.compressedTexImage2D(...arguments)}catch(k){Ne("WebGLState:",k)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(k){Ne("WebGLState:",k)}}function b(){try{o.texSubImage2D(...arguments)}catch(k){Ne("WebGLState:",k)}}function J(){try{o.texSubImage3D(...arguments)}catch(k){Ne("WebGLState:",k)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ne("WebGLState:",k)}}function At(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ne("WebGLState:",k)}}function Nt(){try{o.texStorage2D(...arguments)}catch(k){Ne("WebGLState:",k)}}function Pt(){try{o.texStorage3D(...arguments)}catch(k){Ne("WebGLState:",k)}}function ut(){try{o.texImage2D(...arguments)}catch(k){Ne("WebGLState:",k)}}function ht(){try{o.texImage3D(...arguments)}catch(k){Ne("WebGLState:",k)}}function Bt(k){return x[k]!==void 0?x[k]:o.getParameter(k)}function It(k,Rt){x[k]!==Rt&&(o.pixelStorei(k,Rt),x[k]=Rt)}function Lt(k){K.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),K.copy(k))}function Ut(k){yt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),yt.copy(k))}function le(k,Rt){let pt=h.get(Rt);pt===void 0&&(pt=new WeakMap,h.set(Rt,pt));let Ft=pt.get(k);Ft===void 0&&(Ft=o.getUniformBlockIndex(Rt,k.name),pt.set(k,Ft))}function ie(k,Rt){const Ft=h.get(Rt).get(k);m.get(Rt)!==Ft&&(o.uniformBlockBinding(Rt,Ft,k.__bindingPointIndex),m.set(Rt,Ft))}function ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},x={},Et=null,C={},_={},y=new WeakMap,T=[],U=null,M=!1,v=null,w=null,B=null,O=null,V=null,L=null,I=null,E=new Le(0,0,0),N=0,j=!1,z=null,Z=null,ct=null,dt=null,q=null,K.set(0,0,o.canvas.width,o.canvas.height),yt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),p.reset()}return{buffers:{color:u,depth:d,stencil:p},enable:xt,disable:Ct,bindFramebuffer:Gt,drawBuffers:kt,useProgram:Yt,setBlending:$t,setMaterial:Wt,setFlipSided:ne,setCullFace:fe,setLineWidth:De,setPolygonOffset:X,setScissorTest:Ye,activeTexture:he,bindTexture:Ee,unbindTexture:Dt,compressedTexImage2D:tn,compressedTexImage3D:D,texImage2D:ut,texImage3D:ht,pixelStorei:It,getParameter:Bt,updateUBOMapping:le,uniformBlockBinding:ie,texStorage2D:Nt,texStorage3D:Pt,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:_t,compressedTexSubImage3D:At,scissor:Lt,viewport:Ut,reset:ve}}function ZT(o,e,i,s,l,u,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ie,S=new WeakMap,x=new Set;let _;const y=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(D,b){return T?new OffscreenCanvas(D,b):Yc("canvas")}function M(D,b,J){let _t=1;const At=tn(D);if((At.width>J||At.height>J)&&(_t=J/Math.max(At.width,At.height)),_t<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Nt=Math.floor(_t*At.width),Pt=Math.floor(_t*At.height);_===void 0&&(_=U(Nt,Pt));const ut=b?U(Nt,Pt):_;return ut.width=Nt,ut.height=Pt,ut.getContext("2d").drawImage(D,0,0,Nt,Pt),ce("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+Nt+"x"+Pt+")."),ut}else return"data"in D&&ce("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),D;return D}function v(D){return D.generateMipmaps}function w(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(D,b,J,_t,At,Nt=!1){if(D!==null){if(o[D]!==void 0)return o[D];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Pt;_t&&(Pt=e.get("EXT_texture_norm16"),Pt||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=b;if(b===o.RED&&(J===o.FLOAT&&(ut=o.R32F),J===o.HALF_FLOAT&&(ut=o.R16F),J===o.UNSIGNED_BYTE&&(ut=o.R8),J===o.UNSIGNED_SHORT&&Pt&&(ut=Pt.R16_EXT),J===o.SHORT&&Pt&&(ut=Pt.R16_SNORM_EXT)),b===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.R8UI),J===o.UNSIGNED_SHORT&&(ut=o.R16UI),J===o.UNSIGNED_INT&&(ut=o.R32UI),J===o.BYTE&&(ut=o.R8I),J===o.SHORT&&(ut=o.R16I),J===o.INT&&(ut=o.R32I)),b===o.RG&&(J===o.FLOAT&&(ut=o.RG32F),J===o.HALF_FLOAT&&(ut=o.RG16F),J===o.UNSIGNED_BYTE&&(ut=o.RG8),J===o.UNSIGNED_SHORT&&Pt&&(ut=Pt.RG16_EXT),J===o.SHORT&&Pt&&(ut=Pt.RG16_SNORM_EXT)),b===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RG8UI),J===o.UNSIGNED_SHORT&&(ut=o.RG16UI),J===o.UNSIGNED_INT&&(ut=o.RG32UI),J===o.BYTE&&(ut=o.RG8I),J===o.SHORT&&(ut=o.RG16I),J===o.INT&&(ut=o.RG32I)),b===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),J===o.UNSIGNED_INT&&(ut=o.RGB32UI),J===o.BYTE&&(ut=o.RGB8I),J===o.SHORT&&(ut=o.RGB16I),J===o.INT&&(ut=o.RGB32I)),b===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),J===o.UNSIGNED_INT&&(ut=o.RGBA32UI),J===o.BYTE&&(ut=o.RGBA8I),J===o.SHORT&&(ut=o.RGBA16I),J===o.INT&&(ut=o.RGBA32I)),b===o.RGB&&(J===o.UNSIGNED_SHORT&&Pt&&(ut=Pt.RGB16_EXT),J===o.SHORT&&Pt&&(ut=Pt.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),b===o.RGBA){const ht=Nt?qc:Ce.getTransfer(At);J===o.FLOAT&&(ut=o.RGBA32F),J===o.HALF_FLOAT&&(ut=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ut=ht===qe?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Pt&&(ut=Pt.RGBA16_EXT),J===o.SHORT&&Pt&&(ut=Pt.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function V(D,b){let J;return D?b===null||b===Qi||b===tl?J=o.DEPTH24_STENCIL8:b===qi?J=o.DEPTH32F_STENCIL8:b===$o&&(J=o.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===tl?J=o.DEPTH_COMPONENT24:b===qi?J=o.DEPTH_COMPONENT32F:b===$o&&(J=o.DEPTH_COMPONENT16),J}function L(D,b){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==Vn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function I(D){const b=D.target;b.removeEventListener("dispose",I),N(b),b.isVideoTexture&&S.delete(b),b.isHTMLTexture&&x.delete(b)}function E(D){const b=D.target;b.removeEventListener("dispose",E),z(b)}function N(D){const b=s.get(D);if(b.__webglInit===void 0)return;const J=D.source,_t=y.get(J);if(_t){const At=_t[b.__cacheKey];At.usedTimes--,At.usedTimes===0&&j(D),Object.keys(_t).length===0&&y.delete(J)}s.remove(D)}function j(D){const b=s.get(D);o.deleteTexture(b.__webglTexture);const J=D.source,_t=y.get(J);delete _t[b.__cacheKey],d.memory.textures--}function z(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let At=0;At<b.__webglFramebuffer[_t].length;At++)o.deleteFramebuffer(b.__webglFramebuffer[_t][At]);else o.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[_t]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=D.textures;for(let _t=0,At=J.length;_t<At;_t++){const Nt=s.get(J[_t]);Nt.__webglTexture&&(o.deleteTexture(Nt.__webglTexture),d.memory.textures--),s.remove(J[_t])}s.remove(D)}let Z=0;function ct(){Z=0}function dt(){return Z}function q(D){Z=D}function P(){const D=Z;return D>=l.maxTextures&&ce("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Z+=1,D}function F(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ot(D,b){const J=s.get(D);if(D.isVideoTexture&&Ee(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const _t=D.image;if(_t===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(J,D,b);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+b)}function vt(D,b){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ct(J,D,b);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+b)}function Et(D,b){const J=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Ct(J,D,b);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+b)}function C(D,b){const J=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&J.__version!==D.version){Gt(J,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+b)}const H={[th]:o.REPEAT,[Ea]:o.CLAMP_TO_EDGE,[eh]:o.MIRRORED_REPEAT},lt={[Pn]:o.NEAREST,[dM]:o.NEAREST_MIPMAP_NEAREST,[mc]:o.NEAREST_MIPMAP_LINEAR,[Vn]:o.LINEAR,[ud]:o.LINEAR_MIPMAP_NEAREST,[Vs]:o.LINEAR_MIPMAP_LINEAR},K={[mM]:o.NEVER,[SM]:o.ALWAYS,[gM]:o.LESS,[Yh]:o.LEQUAL,[_M]:o.EQUAL,[jh]:o.GEQUAL,[vM]:o.GREATER,[xM]:o.NOTEQUAL};function yt(D,b){if(b.type===qi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Vn||b.magFilter===ud||b.magFilter===mc||b.magFilter===Vs||b.minFilter===Vn||b.minFilter===ud||b.minFilter===mc||b.minFilter===Vs)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,H[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,H[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,H[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,lt[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==mc&&b.minFilter!==Vs||b.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function $(D,b){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",I));const _t=b.source;let At=y.get(_t);At===void 0&&(At={},y.set(_t,At));const Nt=F(b);if(Nt!==D.__cacheKey){At[Nt]===void 0&&(At[Nt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),At[Nt].usedTimes++;const Pt=At[D.__cacheKey];Pt!==void 0&&(At[D.__cacheKey].usedTimes--,Pt.usedTimes===0&&j(b)),D.__cacheKey=Nt,D.__webglTexture=At[Nt].texture}return J}function gt(D,b,J){return Math.floor(Math.floor(D/J)/b)}function xt(D,b,J,_t){const Nt=D.updateRanges;if(Nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,J,_t,b.data);else{Nt.sort((It,Lt)=>It.start-Lt.start);let Pt=0;for(let It=1;It<Nt.length;It++){const Lt=Nt[Pt],Ut=Nt[It],le=Lt.start+Lt.count,ie=gt(Ut.start,b.width,4),ve=gt(Lt.start,b.width,4);Ut.start<=le+1&&ie===ve&&gt(Ut.start+Ut.count-1,b.width,4)===ie?Lt.count=Math.max(Lt.count,Ut.start+Ut.count-Lt.start):(++Pt,Nt[Pt]=Ut)}Nt.length=Pt+1;const ut=i.getParameter(o.UNPACK_ROW_LENGTH),ht=i.getParameter(o.UNPACK_SKIP_PIXELS),Bt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let It=0,Lt=Nt.length;It<Lt;It++){const Ut=Nt[It],le=Math.floor(Ut.start/4),ie=Math.ceil(Ut.count/4),ve=le%b.width,k=Math.floor(le/b.width),Rt=ie,pt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ve,k,Rt,pt,J,_t,b.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ut),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(o.UNPACK_SKIP_ROWS,Bt)}}function Ct(D,b,J){let _t=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=o.TEXTURE_3D);const At=$(D,b),Nt=b.source;i.bindTexture(_t,D.__webglTexture,o.TEXTURE0+J);const Pt=s.get(Nt);if(Nt.version!==Pt.__version||At===!0){if(i.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const pt=Ce.getPrimaries(Ce.workingColorSpace),Ft=b.colorSpace===fs?null:Ce.getPrimaries(b.colorSpace),Ot=b.colorSpace===fs||pt===Ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment);let ht=M(b.image,!1,l.maxTextureSize);ht=Dt(b,ht);const Bt=u.convert(b.format,b.colorSpace),It=u.convert(b.type);let Lt=O(b.internalFormat,Bt,It,b.normalized,b.colorSpace,b.isVideoTexture);yt(_t,b);let Ut;const le=b.mipmaps,ie=b.isVideoTexture!==!0,ve=Pt.__version===void 0||At===!0,k=Nt.dataReady,Rt=L(b,ht);if(b.isDepthTexture)Lt=V(b.format===ks,b.type),ve&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Lt,ht.width,ht.height):i.texImage2D(o.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Bt,It,null));else if(b.isDataTexture)if(le.length>0){ie&&ve&&i.texStorage2D(o.TEXTURE_2D,Rt,Lt,le[0].width,le[0].height);for(let pt=0,Ft=le.length;pt<Ft;pt++)Ut=le[pt],ie?k&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Ut.width,Ut.height,Bt,It,Ut.data):i.texImage2D(o.TEXTURE_2D,pt,Lt,Ut.width,Ut.height,0,Bt,It,Ut.data);b.generateMipmaps=!1}else ie?(ve&&i.texStorage2D(o.TEXTURE_2D,Rt,Lt,ht.width,ht.height),k&&xt(b,ht,Bt,It)):i.texImage2D(o.TEXTURE_2D,0,Lt,ht.width,ht.height,0,Bt,It,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ie&&ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Lt,le[0].width,le[0].height,ht.depth);for(let pt=0,Ft=le.length;pt<Ft;pt++)if(Ut=le[pt],b.format!==Bi)if(Bt!==null)if(ie){if(k)if(b.layerUpdates.size>0){const Ot=E_(Ut.width,Ut.height,b.format,b.type);for(const Tt of b.layerUpdates){const Kt=Ut.data.subarray(Tt*Ot/Ut.data.BYTES_PER_ELEMENT,(Tt+1)*Ot/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,Tt,Ut.width,Ut.height,1,Bt,Kt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,Ut.width,Ut.height,ht.depth,Bt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pt,Lt,Ut.width,Ut.height,ht.depth,0,Ut.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,Ut.width,Ut.height,ht.depth,Bt,It,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pt,Lt,Ut.width,Ut.height,ht.depth,0,Bt,It,Ut.data)}else{ie&&ve&&i.texStorage2D(o.TEXTURE_2D,Rt,Lt,le[0].width,le[0].height);for(let pt=0,Ft=le.length;pt<Ft;pt++)Ut=le[pt],b.format!==Bi?Bt!==null?ie?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,pt,0,0,Ut.width,Ut.height,Bt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,pt,Lt,Ut.width,Ut.height,0,Ut.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Ut.width,Ut.height,Bt,It,Ut.data):i.texImage2D(o.TEXTURE_2D,pt,Lt,Ut.width,Ut.height,0,Bt,It,Ut.data)}else if(b.isDataArrayTexture)if(ie){if(ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Lt,ht.width,ht.height,ht.depth),k)if(b.layerUpdates.size>0){const pt=E_(ht.width,ht.height,b.format,b.type);for(const Ft of b.layerUpdates){const Ot=ht.data.subarray(Ft*pt/ht.data.BYTES_PER_ELEMENT,(Ft+1)*pt/ht.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Ft,ht.width,ht.height,1,Bt,It,Ot)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Bt,It,ht.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Lt,ht.width,ht.height,ht.depth,0,Bt,It,ht.data);else if(b.isData3DTexture)ie?(ve&&i.texStorage3D(o.TEXTURE_3D,Rt,Lt,ht.width,ht.height,ht.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Bt,It,ht.data)):i.texImage3D(o.TEXTURE_3D,0,Lt,ht.width,ht.height,ht.depth,0,Bt,It,ht.data);else if(b.isFramebufferTexture){if(ve)if(ie)i.texStorage2D(o.TEXTURE_2D,Rt,Lt,ht.width,ht.height);else{let pt=ht.width,Ft=ht.height;for(let Ot=0;Ot<Rt;Ot++)i.texImage2D(o.TEXTURE_2D,Ot,Lt,pt,Ft,0,Bt,It,null),pt>>=1,Ft>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in o){const pt=o.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ht.parentNode!==pt){pt.appendChild(ht),x.add(b),pt.onpaint=re=>{const je=re.changedElements;for(const Ue of x)je.includes(Ue.image)&&(Ue.needsUpdate=!0)},pt.requestPaint();return}const Ft=0,Ot=o.RGBA,Tt=o.RGBA,Kt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,Ft,Ot,Tt,Kt,ht),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(le.length>0){if(ie&&ve){const pt=tn(le[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Lt,pt.width,pt.height)}for(let pt=0,Ft=le.length;pt<Ft;pt++)Ut=le[pt],ie?k&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Bt,It,Ut):i.texImage2D(o.TEXTURE_2D,pt,Lt,Bt,It,Ut);b.generateMipmaps=!1}else if(ie){if(ve){const pt=tn(ht);i.texStorage2D(o.TEXTURE_2D,Rt,Lt,pt.width,pt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,It,ht)}else i.texImage2D(o.TEXTURE_2D,0,Lt,Bt,It,ht);v(b)&&w(_t),Pt.__version=Nt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Gt(D,b,J){if(b.image.length!==6)return;const _t=$(D,b),At=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const Nt=s.get(At);if(At.version!==Nt.__version||_t===!0){i.activeTexture(o.TEXTURE0+J);const Pt=Ce.getPrimaries(Ce.workingColorSpace),ut=b.colorSpace===fs?null:Ce.getPrimaries(b.colorSpace),ht=b.colorSpace===fs||Pt===ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Bt=b.isCompressedTexture||b.image[0].isCompressedTexture,It=b.image[0]&&b.image[0].isDataTexture,Lt=[];for(let Tt=0;Tt<6;Tt++)!Bt&&!It?Lt[Tt]=M(b.image[Tt],!0,l.maxCubemapSize):Lt[Tt]=It?b.image[Tt].image:b.image[Tt],Lt[Tt]=Dt(b,Lt[Tt]);const Ut=Lt[0],le=u.convert(b.format,b.colorSpace),ie=u.convert(b.type),ve=O(b.internalFormat,le,ie,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Rt=Nt.__version===void 0||_t===!0,pt=At.dataReady;let Ft=L(b,Ut);yt(o.TEXTURE_CUBE_MAP,b);let Ot;if(Bt){k&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ve,Ut.width,Ut.height);for(let Tt=0;Tt<6;Tt++){Ot=Lt[Tt].mipmaps;for(let Kt=0;Kt<Ot.length;Kt++){const re=Ot[Kt];b.format!==Bi?le!==null?k?pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt,0,0,re.width,re.height,le,re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt,ve,re.width,re.height,0,re.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt,0,0,re.width,re.height,le,ie,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt,ve,re.width,re.height,0,le,ie,re.data)}}}else{if(Ot=b.mipmaps,k&&Rt){Ot.length>0&&Ft++;const Tt=tn(Lt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ve,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(It){k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Lt[Tt].width,Lt[Tt].height,le,ie,Lt[Tt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ve,Lt[Tt].width,Lt[Tt].height,0,le,ie,Lt[Tt].data);for(let Kt=0;Kt<Ot.length;Kt++){const je=Ot[Kt].image[Tt].image;k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt+1,0,0,je.width,je.height,le,ie,je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt+1,ve,je.width,je.height,0,le,ie,je.data)}}else{k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,le,ie,Lt[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,ve,le,ie,Lt[Tt]);for(let Kt=0;Kt<Ot.length;Kt++){const re=Ot[Kt];k?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt+1,0,0,le,ie,re.image[Tt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Kt+1,ve,le,ie,re.image[Tt])}}}v(b)&&w(o.TEXTURE_CUBE_MAP),Nt.__version=At.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function kt(D,b,J,_t,At,Nt){const Pt=u.convert(J.format,J.colorSpace),ut=u.convert(J.type),ht=O(J.internalFormat,Pt,ut,J.normalized,J.colorSpace),Bt=s.get(b),It=s.get(J);if(It.__renderTarget=b,!Bt.__hasExternalTextures){const Lt=Math.max(1,b.width>>Nt),Ut=Math.max(1,b.height>>Nt);At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,Nt,ht,Lt,Ut,b.depth,0,Pt,ut,null):i.texImage2D(At,Nt,ht,Lt,Ut,0,Pt,ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),he(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,At,It.__webglTexture,0,Ye(b)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,At,It.__webglTexture,Nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(D,b,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const _t=b.depthTexture,At=_t&&_t.isDepthTexture?_t.type:null,Nt=V(b.stencilBuffer,At),Pt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;he(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye(b),Nt,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye(b),Nt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,D)}else{const _t=b.textures;for(let At=0;At<_t.length;At++){const Nt=_t[At],Pt=u.convert(Nt.format,Nt.colorSpace),ut=u.convert(Nt.type),ht=O(Nt.internalFormat,Pt,ut,Nt.normalized,Nt.colorSpace);he(b)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye(b),ht,b.width,b.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye(b),ht,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ht,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(D,b,J){const _t=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(b.depthTexture);if(At.__renderTarget=b,(!At.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t){if(At.__webglInit===void 0&&(At.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),At.__webglTexture===void 0){At.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,At.__webglTexture),yt(o.TEXTURE_CUBE_MAP,b.depthTexture);const Bt=u.convert(b.depthTexture.format),It=u.convert(b.depthTexture.type);let Lt;b.depthTexture.format===Ca?Lt=o.DEPTH_COMPONENT24:b.depthTexture.format===ks&&(Lt=o.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Lt,b.width,b.height,0,Bt,It,null)}}else ot(b.depthTexture,0);const Nt=At.__webglTexture,Pt=Ye(b),ut=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,ht=b.depthTexture.format===ks?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ca)he(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ut,Nt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ut,Nt,0);else if(b.depthTexture.format===ks)he(b)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,ut,Nt,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,ht,ut,Nt,0);else throw new Error("Unknown depthTexture format")}function Zt(D){const b=s.get(D),J=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const _t=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const At=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",At)};_t.addEventListener("dispose",At),b.__depthDisposeCallback=At}b.__boundDepthTexture=_t}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let _t=0;_t<6;_t++)wt(b.__webglFramebuffer[_t],D,_t);else{const _t=D.texture.mipmaps;_t&&_t.length>0?wt(b.__webglFramebuffer[0],D,0):wt(b.__webglFramebuffer,D,0)}else if(J){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=o.createRenderbuffer(),Yt(b.__webglDepthbuffer[_t],D,!1);else{const At=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=b.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,Nt)}}else{const _t=D.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Yt(b.__webglDepthbuffer,D,!1);else{const At=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,Nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $t(D,b,J){const _t=s.get(D);b!==void 0&&kt(_t.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Zt(D)}function Wt(D){const b=D.texture,J=s.get(D),_t=s.get(b);D.addEventListener("dispose",E);const At=D.textures,Nt=D.isWebGLCubeRenderTarget===!0,Pt=At.length>1;if(Pt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=b.version,d.memory.textures++),Nt){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let ht=0;ht<b.mipmaps.length;ht++)J.__webglFramebuffer[ut][ht]=o.createFramebuffer()}else J.__webglFramebuffer[ut]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)J.__webglFramebuffer[ut]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let ut=0,ht=At.length;ut<ht;ut++){const Bt=s.get(At[ut]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&he(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<At.length;ut++){const ht=At[ut];J.__webglColorRenderbuffer[ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const Bt=u.convert(ht.format,ht.colorSpace),It=u.convert(ht.type),Lt=O(ht.internalFormat,Bt,It,ht.normalized,ht.colorSpace,D.isXRRenderTarget===!0),Ut=Ye(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,Lt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ut,o.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Nt){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),yt(o.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)kt(J.__webglFramebuffer[ut][ht],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else kt(J.__webglFramebuffer[ut],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(b)&&w(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let ut=0,ht=At.length;ut<ht;ut++){const Bt=At[ut],It=s.get(Bt);let Lt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,It.__webglTexture),yt(Lt,Bt),kt(J.__webglFramebuffer,D,Bt,o.COLOR_ATTACHMENT0+ut,Lt,0),v(Bt)&&w(Lt)}i.unbindTexture()}else{let ut=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ut,_t.__webglTexture),yt(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)kt(J.__webglFramebuffer[ht],D,b,o.COLOR_ATTACHMENT0,ut,ht);else kt(J.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,ut,0);v(b)&&w(ut),i.unbindTexture()}D.depthBuffer&&Zt(D)}function ne(D){const b=D.textures;for(let J=0,_t=b.length;J<_t;J++){const At=b[J];if(v(At)){const Nt=B(D),Pt=s.get(At).__webglTexture;i.bindTexture(Nt,Pt),w(Nt),i.unbindTexture()}}}const fe=[],De=[];function X(D){if(D.samples>0){if(he(D)===!1){const b=D.textures,J=D.width,_t=D.height;let At=o.COLOR_BUFFER_BIT;const Nt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=s.get(D),ut=b.length>1;if(ut)for(let Bt=0;Bt<b.length;Bt++)i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const ht=D.texture.mipmaps;ht&&ht.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Bt=0;Bt<b.length;Bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Bt]);const It=s.get(b[Bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,It,0)}o.blitFramebuffer(0,0,J,_t,0,0,J,_t,At,o.NEAREST),m===!0&&(fe.length=0,De.length=0,fe.push(o.COLOR_ATTACHMENT0+Bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(fe.push(Nt),De.push(Nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,De)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ut)for(let Bt=0;Bt<b.length;Bt++){i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Bt]);const It=s.get(b[Bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.TEXTURE_2D,It,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ye(D){return Math.min(l.maxSamples,D.samples)}function he(D){const b=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(D){const b=d.render.frame;S.get(D)!==b&&(S.set(D,b),D.update())}function Dt(D,b){const J=D.colorSpace,_t=D.format,At=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Wc&&J!==fs&&(Ce.getTransfer(J)===qe?(_t!==Bi||At!==hi)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",J)),b}function tn(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=P,this.resetTextureUnits=ct,this.getTextureUnits=dt,this.setTextureUnits=q,this.setTexture2D=ot,this.setTexture2DArray=vt,this.setTexture3D=Et,this.setTextureCube=C,this.rebindTextures=$t,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function KT(o,e){function i(s,l=fs){let u;const d=Ce.getTransfer(l);if(s===hi)return o.UNSIGNED_BYTE;if(s===Vh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===kh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===av)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===sv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===nv)return o.BYTE;if(s===iv)return o.SHORT;if(s===$o)return o.UNSIGNED_SHORT;if(s===Gh)return o.INT;if(s===Qi)return o.UNSIGNED_INT;if(s===qi)return o.FLOAT;if(s===Ra)return o.HALF_FLOAT;if(s===rv)return o.ALPHA;if(s===ov)return o.RGB;if(s===Bi)return o.RGBA;if(s===Ca)return o.DEPTH_COMPONENT;if(s===ks)return o.DEPTH_STENCIL;if(s===lv)return o.RED;if(s===Xh)return o.RED_INTEGER;if(s===Ws)return o.RG;if(s===Wh)return o.RG_INTEGER;if(s===qh)return o.RGBA_INTEGER;if(s===zc||s===Fc||s===Hc||s===Gc)if(d===qe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===zc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===zc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===nh||s===ih||s===ah||s===sh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===nh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh||s===oh||s===lh||s===ch||s===uh||s===kc||s===fh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===rh||s===oh)return d===qe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===lh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===ch)return u.COMPRESSED_R11_EAC;if(s===uh)return u.COMPRESSED_SIGNED_R11_EAC;if(s===kc)return u.COMPRESSED_RG11_EAC;if(s===fh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===Mh||s===yh||s===bh||s===Eh||s===Th)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===dh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ph)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===mh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_h)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eh)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Th)return d===qe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ah||s===Rh||s===Ch)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===Ah)return d===qe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ch)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wh||s===Dh||s===Xc||s===Uh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===wh)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Dh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===tl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $T{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new gv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ji({vertexShader:QT,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _e(new Yr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends qs{constructor(e,i){super();const s=this;let l=null,u=1,d=null,p="local-floor",m=1,h=null,S=null,x=null,_=null,y=null,T=null;const U=typeof XRWebGLBinding<"u",M=new $T,v={},w=i.getContextAttributes();let B=null,O=null;const V=[],L=[],I=new Ie;let E=null;const N=new bi;N.viewport=new cn;const j=new bi;j.viewport=new cn;const z=[N,j],Z=new uy;let ct=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let gt=V[$];return gt===void 0&&(gt=new vd,V[$]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function($){let gt=V[$];return gt===void 0&&(gt=new vd,V[$]=gt),gt.getGripSpace()},this.getHand=function($){let gt=V[$];return gt===void 0&&(gt=new vd,V[$]=gt),gt.getHandSpace()};function q($){const gt=L.indexOf($.inputSource);if(gt===-1)return;const xt=V[gt];xt!==void 0&&(xt.update($.inputSource,$.frame,h||d),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",F);for(let $=0;$<V.length;$++){const gt=L[$];gt!==null&&(L[$]=null,V[$].disconnect(gt))}ct=null,dt=null,M.reset();for(const $ in v)delete v[$];e.setRenderTarget(B),y=null,_=null,x=null,l=null,O=null,yt.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){p=$,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return x===null&&U&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(B=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",P),l.addEventListener("inputsourceschange",F),w.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ct=null,Gt=null;w.depth&&(Gt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=w.stencil?ks:Ca,Ct=w.stencil?tl:Qi);const kt={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:u};x=this.getBinding(),_=x.createProjectionLayer(kt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Zi(_.textureWidth,_.textureHeight,{format:Bi,type:hi,depthTexture:new qr(_.textureWidth,_.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Bi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),yt.setContext(l),yt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F($){for(let gt=0;gt<$.removed.length;gt++){const xt=$.removed[gt],Ct=L.indexOf(xt);Ct>=0&&(L[Ct]=null,V[Ct].disconnect(xt))}for(let gt=0;gt<$.added.length;gt++){const xt=$.added[gt];let Ct=L.indexOf(xt);if(Ct===-1){for(let kt=0;kt<V.length;kt++)if(kt>=L.length){L.push(xt),Ct=kt;break}else if(L[kt]===null){L[kt]=xt,Ct=kt;break}if(Ct===-1)break}const Gt=V[Ct];Gt&&Gt.connect(xt)}}const ot=new et,vt=new et;function Et($,gt,xt){ot.setFromMatrixPosition(gt.matrixWorld),vt.setFromMatrixPosition(xt.matrixWorld);const Ct=ot.distanceTo(vt),Gt=gt.projectionMatrix.elements,kt=xt.projectionMatrix.elements,Yt=Gt[14]/(Gt[10]-1),wt=Gt[14]/(Gt[10]+1),Zt=(Gt[9]+1)/Gt[5],$t=(Gt[9]-1)/Gt[5],Wt=(Gt[8]-1)/Gt[0],ne=(kt[8]+1)/kt[0],fe=Yt*Wt,De=Yt*ne,X=Ct/(-Wt+ne),Ye=X*-Wt;if(gt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(X),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Gt[10]===-1)$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const he=Yt+X,Ee=wt+X,Dt=fe-Ye,tn=De+(Ct-Ye),D=Zt*wt/Ee*he,b=$t*wt/Ee*he;$.projectionMatrix.makePerspective(Dt,tn,D,b,he,Ee),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function C($,gt){gt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(gt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let gt=$.near,xt=$.far;M.texture!==null&&(M.depthNear>0&&(gt=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),Z.near=j.near=N.near=gt,Z.far=j.far=N.far=xt,(ct!==Z.near||dt!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ct=Z.near,dt=Z.far),Z.layers.mask=$.layers.mask|6,N.layers.mask=Z.layers.mask&-5,j.layers.mask=Z.layers.mask&-3;const Ct=$.parent,Gt=Z.cameras;C(Z,Ct);for(let kt=0;kt<Gt.length;kt++)C(Gt[kt],Ct);Gt.length===2?Et(Z,N,j):Z.projectionMatrix.copy(N.projectionMatrix),H($,Z,Ct)};function H($,gt,xt){xt===null?$.matrix.copy(gt.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(gt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(gt.projectionMatrix),$.projectionMatrixInverse.copy(gt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function($){m=$,_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function($){return v[$]};let lt=null;function K($,gt){if(S=gt.getViewerPose(h||d),T=gt,S!==null){const xt=S.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let Ct=!1;xt.length!==Z.cameras.length&&(Z.cameras.length=0,Ct=!0);for(let wt=0;wt<xt.length;wt++){const Zt=xt[wt];let $t=null;if(y!==null)$t=y.getViewport(Zt);else{const ne=x.getViewSubImage(_,Zt);$t=ne.viewport,wt===0&&(e.setRenderTargetTextures(O,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(O))}let Wt=z[wt];Wt===void 0&&(Wt=new bi,Wt.layers.enable(wt),Wt.viewport=new cn,z[wt]=Wt),Wt.matrix.fromArray(Zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set($t.x,$t.y,$t.width,$t.height),wt===0&&(Z.matrix.copy(Wt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ct===!0&&Z.cameras.push(Wt)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){x=s.getBinding();const wt=x.getDepthInformation(xt[0]);wt&&wt.isValid&&wt.texture&&M.init(wt,l.renderState)}if(Gt&&Gt.includes("camera-access")&&U){e.state.unbindTexture(),x=s.getBinding();for(let wt=0;wt<xt.length;wt++){const Zt=xt[wt].camera;if(Zt){let $t=v[Zt];$t||($t=new gv,v[Zt]=$t);const Wt=x.getCameraImage(Zt);$t.sourceTexture=Wt}}}}for(let xt=0;xt<V.length;xt++){const Ct=L[xt],Gt=V[xt];Ct!==null&&Gt!==void 0&&Gt.update(Ct,gt,h||d)}lt&&lt($,gt),gt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:gt}),T=null}const yt=new xv;yt.setAnimationLoop(K),this.setAnimationLoop=function($){lt=$},this.dispose=function(){}}}const eA=new hn,Av=new de;Av.set(-1,0,0,0,1,0,0,0,1);function nA(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,_v(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,w,B,O){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(M,v):v.isMeshLambertMaterial?(u(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(M,v),x(M,v)):v.isMeshPhongMaterial?(u(M,v),S(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(M,v),_(M,v),v.isMeshPhysicalMaterial&&y(M,v,O)):v.isMeshMatcapMaterial?(u(M,v),T(M,v)):v.isMeshDepthMaterial?u(M,v):v.isMeshDistanceMaterial?(u(M,v),U(M,v)):v.isMeshNormalMaterial?u(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,w,B):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===ti&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===ti&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const w=e.get(v),B=w.envMap,O=w.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(O)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Av),M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,w,B){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*w,M.scale.value=B*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function S(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function x(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,w){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ti&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,v){v.matcap&&(M.matcap.value=v.matcap)}function U(M,v){const w=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iA(o,e,i,s){let l={},u={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,B){const O=B.program;s.uniformBlockBinding(w,O)}function h(w,B){let O=l[w.id];O===void 0&&(T(w),O=S(w),l[w.id]=O,w.addEventListener("dispose",M));const V=B.program;s.updateUBOMapping(w,V);const L=e.render.frame;u[w.id]!==L&&(_(w),u[w.id]=L)}function S(w){const B=x();w.__bindingPointIndex=B;const O=o.createBuffer(),V=w.__size,L=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,V,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,B,O),O}function x(){for(let w=0;w<p;w++)if(d.indexOf(w)===-1)return d.push(w),w;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const B=l[w.id],O=w.uniforms,V=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,B);for(let L=0,I=O.length;L<I;L++){const E=Array.isArray(O[L])?O[L]:[O[L]];for(let N=0,j=E.length;N<j;N++){const z=E[N];if(y(z,L,N,V)===!0){const Z=z.__offset,ct=Array.isArray(z.value)?z.value:[z.value];let dt=0;for(let q=0;q<ct.length;q++){const P=ct[q],F=U(P);typeof P=="number"||typeof P=="boolean"?(z.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,Z+dt,z.__data)):P.isMatrix3?(z.__data[0]=P.elements[0],z.__data[1]=P.elements[1],z.__data[2]=P.elements[2],z.__data[3]=0,z.__data[4]=P.elements[3],z.__data[5]=P.elements[4],z.__data[6]=P.elements[5],z.__data[7]=0,z.__data[8]=P.elements[6],z.__data[9]=P.elements[7],z.__data[10]=P.elements[8],z.__data[11]=0):ArrayBuffer.isView(P)?z.__data.set(new P.constructor(P.buffer,P.byteOffset,z.__data.length)):(P.toArray(z.__data,dt),dt+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(w,B,O,V){const L=w.value,I=B+"_"+O;if(V[I]===void 0)return typeof L=="number"||typeof L=="boolean"?V[I]=L:ArrayBuffer.isView(L)?V[I]=L.slice():V[I]=L.clone(),!0;{const E=V[I];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return V[I]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(E.equals(L)===!1)return E.copy(L),!0}}return!1}function T(w){const B=w.uniforms;let O=0;const V=16;for(let I=0,E=B.length;I<E;I++){const N=Array.isArray(B[I])?B[I]:[B[I]];for(let j=0,z=N.length;j<z;j++){const Z=N[j],ct=Array.isArray(Z.value)?Z.value:[Z.value];for(let dt=0,q=ct.length;dt<q;dt++){const P=ct[dt],F=U(P),ot=O%V,vt=ot%F.boundary,Et=ot+vt;O+=vt,Et!==0&&V-Et<F.storage&&(O+=V-Et),Z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=O,O+=F.storage}}}const L=O%V;return L>0&&(O+=V-L),w.__size=O,w.__cache={},this}function U(w){const B={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(B.boundary=4,B.storage=4):w.isVector2?(B.boundary=8,B.storage=8):w.isVector3||w.isColor?(B.boundary=16,B.storage=12):w.isVector4?(B.boundary=16,B.storage=16):w.isMatrix3?(B.boundary=48,B.storage=48):w.isMatrix4?(B.boundary=64,B.storage=64):w.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(B.boundary=16,B.storage=w.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",w),B}function M(w){const B=w.target;B.removeEventListener("dispose",M);const O=d.indexOf(B.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[B.id]),delete l[B.id],delete u[B.id]}function v(){for(const w in l)o.deleteBuffer(l[w]);d=[],l={},u={}}return{bind:m,update:h,dispose:v}}const aA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function sA(){return Xi===null&&(Xi=new qM(aA,16,16,Ws,Ra),Xi.name="DFG_LUT",Xi.minFilter=Vn,Xi.magFilter=Vn,Xi.wrapS=Ea,Xi.wrapT=Ea,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class rA{constructor(e={}){const{canvas:i=yM(),context:s=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const U=y,M=new Set([qh,Wh,Xh]),v=new Set([hi,Qi,$o,tl,Vh,kh]),w=new Uint32Array(4),B=new Int32Array(4),O=new et;let V=null,L=null;const I=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let z=!1,Z=null;this._outputColorSpace=di;let ct=0,dt=0,q=null,P=-1,F=null;const ot=new cn,vt=new cn;let Et=null;const C=new Le(0);let H=0,lt=i.width,K=i.height,yt=1,$=null,gt=null;const xt=new cn(0,0,lt,K),Ct=new cn(0,0,lt,K);let Gt=!1;const kt=new Jh;let Yt=!1,wt=!1;const Zt=new hn,$t=new et,Wt=new cn,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function De(){return q===null?yt:1}let X=s;function Ye(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",Kt,!1),i.addEventListener("webglcontextcreationerror",re,!1),X===null){const Y="webgl2";if(X=Ye(Y,A),X===null)throw Ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ne("WebGLRenderer: "+A.message),A}let he,Ee,Dt,tn,D,b,J,_t,At,Nt,Pt,ut,ht,Bt,It,Lt,Ut,le,ie,ve,k,Rt,pt;function Ft(){he=new s1(X),he.init(),k=new KT(X,he),Ee=new QE(X,he,e,k),Dt=new jT(X,he),Ee.reversedDepthBuffer&&_&&Dt.buffers.depth.setReversed(!0),tn=new l1(X),D=new OT,b=new ZT(X,he,Dt,D,Ee,k,tn),J=new a1(j),_t=new dy(X),Rt=new ZE(X,_t),At=new r1(X,_t,tn,Rt),Nt=new u1(X,At,_t,Rt,tn),le=new c1(X,Ee,b),It=new JE(D),Pt=new LT(j,J,he,Ee,Rt,It),ut=new nA(j,D),ht=new BT,Bt=new VT(he),Ut=new jE(j,J,Dt,Nt,T,m),Lt=new YT(j,Nt,Ee),pt=new iA(X,tn,Ee,Dt),ie=new KE(X,he,tn),ve=new o1(X,he,tn),tn.programs=Pt.programs,j.capabilities=Ee,j.extensions=he,j.properties=D,j.renderLists=ht,j.shadowMap=Lt,j.state=Dt,j.info=tn}Ft(),U!==hi&&(N=new d1(U,i.width,i.height,l,u));const Ot=new tA(j,X);this.xr=Ot,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(A){A!==void 0&&(yt=A,this.setSize(lt,K,!1))},this.getSize=function(A){return A.set(lt,K)},this.setSize=function(A,Y,st=!0){if(Ot.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=A,K=Y,i.width=Math.floor(A*yt),i.height=Math.floor(Y*yt),st===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(lt*yt,K*yt).floor()},this.setDrawingBufferSize=function(A,Y,st){lt=A,K=Y,yt=st,i.width=Math.floor(A*st),i.height=Math.floor(Y*st),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(U===hi){Ne("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(xt)},this.setViewport=function(A,Y,st,it){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,Y,st,it),Dt.viewport(ot.copy(xt).multiplyScalar(yt).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,Y,st,it){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,Y,st,it),Dt.scissor(vt.copy(Ct).multiplyScalar(yt).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){Dt.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){gt=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,st=!0){let it=0;if(A){let at=!1;if(q!==null){const Ht=q.texture.format;at=M.has(Ht)}if(at){const Ht=q.texture.type,qt=v.has(Ht),zt=Ut.getClearColor(),Qt=Ut.getClearAlpha(),jt=zt.r,ae=zt.g,pe=zt.b;qt?(w[0]=jt,w[1]=ae,w[2]=pe,w[3]=Qt,X.clearBufferuiv(X.COLOR,0,w)):(B[0]=jt,B[1]=ae,B[2]=pe,B[3]=Qt,X.clearBufferiv(X.COLOR,0,B))}else it|=X.COLOR_BUFFER_BIT}Y&&(it|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(it|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&X.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",Kt,!1),i.removeEventListener("webglcontextcreationerror",re,!1),Ut.dispose(),ht.dispose(),Bt.dispose(),D.dispose(),J.dispose(),Nt.dispose(),Rt.dispose(),pt.dispose(),Pt.dispose(),Ot.dispose(),Ot.removeEventListener("sessionstart",Ti),Ot.removeEventListener("sessionend",Qr),In.stop()};function Tt(A){A.preventDefault(),i_("WebGLRenderer: Context Lost."),z=!0}function Kt(){i_("WebGLRenderer: Context Restored."),z=!1;const A=tn.autoReset,Y=Lt.enabled,st=Lt.autoUpdate,it=Lt.needsUpdate,at=Lt.type;Ft(),tn.autoReset=A,Lt.enabled=Y,Lt.autoUpdate=st,Lt.needsUpdate=it,Lt.type=at}function re(A){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function je(A){const Y=A.target;Y.removeEventListener("dispose",je),Ue(Y)}function Ue(A){pn(A),D.remove(A)}function pn(A){const Y=D.get(A).programs;Y!==void 0&&(Y.forEach(function(st){Pt.releaseProgram(st)}),A.isShaderMaterial&&Pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,st,it,at,Ht){Y===null&&(Y=ne);const qt=at.isMesh&&at.matrixWorld.determinant()<0,zt=Ua(A,Y,st,it,at);Dt.setMaterial(it,qt);let Qt=st.index,jt=1;if(it.wireframe===!0){if(Qt=At.getWireframeAttribute(st),Qt===void 0)return;jt=2}const ae=st.drawRange,pe=st.attributes.position;let ee=ae.start*jt,Oe=(ae.start+ae.count)*jt;Ht!==null&&(ee=Math.max(ee,Ht.start*jt),Oe=Math.min(Oe,(Ht.start+Ht.count)*jt)),Qt!==null?(ee=Math.max(ee,0),Oe=Math.min(Oe,Qt.count)):pe!=null&&(ee=Math.max(ee,0),Oe=Math.min(Oe,pe.count));const an=Oe-ee;if(an<0||an===1/0)return;Rt.setup(at,it,zt,st,Qt);let Je,He=ie;if(Qt!==null&&(Je=_t.get(Qt),He=ve,He.setIndex(Je)),at.isMesh)it.wireframe===!0?(Dt.setLineWidth(it.wireframeLinewidth*De()),He.setMode(X.LINES)):He.setMode(X.TRIANGLES);else if(at.isLine){let Ge=it.linewidth;Ge===void 0&&(Ge=1),Dt.setLineWidth(Ge*De()),at.isLineSegments?He.setMode(X.LINES):at.isLineLoop?He.setMode(X.LINE_LOOP):He.setMode(X.LINE_STRIP)}else at.isPoints?He.setMode(X.POINTS):at.isSprite&&He.setMode(X.TRIANGLES);if(at.isBatchedMesh)if(he.get("WEBGL_multi_draw"))He.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Ge=at._multiDrawStarts,Xt=at._multiDrawCounts,zn=at._multiDrawCount,Me=Qt?_t.get(Qt).bytesPerElement:1,bn=D.get(it).currentProgram.getUniforms();for(let ei=0;ei<zn;ei++)bn.setValue(X,"_gl_DrawID",ei),He.render(Ge[ei]/Me,Xt[ei])}else if(at.isInstancedMesh)He.renderInstances(ee,an,at.count);else if(st.isInstancedBufferGeometry){const Ge=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xt=Math.min(st.instanceCount,Ge);He.renderInstances(ee,an,Xt)}else He.render(ee,an)};function mn(A,Y,st){A.transparent===!0&&A.side===ba&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Ys(A,Y,st),A.side=hs,A.needsUpdate=!0,Ys(A,Y,st),A.side=ba):Ys(A,Y,st)}this.compile=function(A,Y,st=null){st===null&&(st=A),L=Bt.get(st),L.init(Y),E.push(L),st.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(L.pushLight(at),at.castShadow&&L.pushShadow(at))}),A!==st&&A.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(L.pushLight(at),at.castShadow&&L.pushShadow(at))}),L.setupLights();const it=new Set;return A.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ht=at.material;if(Ht)if(Array.isArray(Ht))for(let qt=0;qt<Ht.length;qt++){const zt=Ht[qt];mn(zt,st,at),it.add(zt)}else mn(Ht,st,at),it.add(Ht)}),L=E.pop(),it},this.compileAsync=function(A,Y,st=null){const it=this.compile(A,Y,st);return new Promise(at=>{function Ht(){if(it.forEach(function(qt){D.get(qt).currentProgram.isReady()&&it.delete(qt)}),it.size===0){at(A);return}setTimeout(Ht,10)}he.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let $i=null;function ms(A){$i&&$i(A)}function Ti(){In.stop()}function Qr(){In.start()}const In=new xv;In.setAnimationLoop(ms),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(A){$i=A,Ot.setAnimationLoop(A),A===null?In.stop():In.start()},Ot.addEventListener("sessionstart",Ti),Ot.addEventListener("sessionend",Qr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Z!==null&&Z.renderStart(A,Y);const st=Ot.enabled===!0&&Ot.isPresenting===!0,it=N!==null&&(q===null||st)&&N.begin(j,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(Y),Y=Ot.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,Y,q),L=Bt.get(A,E.length),L.init(Y),L.state.textureUnits=b.getTextureUnits(),E.push(L),Zt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),kt.setFromProjectionMatrix(Zt,Yi,Y.reversedDepth),wt=this.localClippingEnabled,Yt=It.init(this.clippingPlanes,wt),V=ht.get(A,I.length),V.init(),I.push(V),Ot.enabled===!0&&Ot.isPresenting===!0){const qt=j.xr.getDepthSensingMesh();qt!==null&&un(qt,Y,-1/0,j.sortObjects)}un(A,Y,0,j.sortObjects),V.finish(),j.sortObjects===!0&&V.sort($,gt),fe=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,fe&&Ut.addToRenderList(V,A),this.info.render.frame++,Yt===!0&&It.beginShadows();const at=L.state.shadowsArray;if(Lt.render(at,A,Y),Yt===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&N.hasRenderPass())===!1){const qt=V.opaque,zt=V.transmissive;if(L.setupLights(),Y.isArrayCamera){const Qt=Y.cameras;if(zt.length>0)for(let jt=0,ae=Qt.length;jt<ae;jt++){const pe=Qt[jt];ta(qt,zt,A,pe)}fe&&Ut.render(A);for(let jt=0,ae=Qt.length;jt<ae;jt++){const pe=Qt[jt];Dn(V,A,pe,pe.viewport)}}else zt.length>0&&ta(qt,zt,A,Y),fe&&Ut.render(A),Dn(V,A,Y)}q!==null&&dt===0&&(b.updateMultisampleRenderTarget(q),b.updateRenderTargetMipmap(q)),it&&N.end(j),A.isScene===!0&&A.onAfterRender(j,A,Y),Rt.resetDefaultState(),P=-1,F=null,E.pop(),E.length>0?(L=E[E.length-1],b.setTextureUnits(L.state.textureUnits),Yt===!0&&It.setGlobalState(j.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?V=I[I.length-1]:V=null,Z!==null&&Z.renderEnd()};function un(A,Y,st,it){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||kt.intersectsSprite(A)){it&&Wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Zt);const qt=Nt.update(A),zt=A.material;zt.visible&&V.push(A,qt,zt,st,Wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||kt.intersectsObject(A))){const qt=Nt.update(A),zt=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Wt.copy(A.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Wt.copy(qt.boundingSphere.center)),Wt.applyMatrix4(A.matrixWorld).applyMatrix4(Zt)),Array.isArray(zt)){const Qt=qt.groups;for(let jt=0,ae=Qt.length;jt<ae;jt++){const pe=Qt[jt],ee=zt[pe.materialIndex];ee&&ee.visible&&V.push(A,qt,ee,st,Wt.z,pe)}}else zt.visible&&V.push(A,qt,zt,st,Wt.z,null)}}const Ht=A.children;for(let qt=0,zt=Ht.length;qt<zt;qt++)un(Ht[qt],Y,st,it)}function Dn(A,Y,st,it){const{opaque:at,transmissive:Ht,transparent:qt}=A;L.setupLightsView(st),Yt===!0&&It.setGlobalState(j.clippingPlanes,st),it&&Dt.viewport(ot.copy(it)),at.length>0&&wa(at,Y,st),Ht.length>0&&wa(Ht,Y,st),qt.length>0&&wa(qt,Y,st),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function ta(A,Y,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[it.id]===void 0){const ee=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[it.id]=new Zi(1,1,{generateMipmaps:!0,type:ee?Ra:hi,minFilter:Vs,samples:Math.max(4,Ee.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Ht=L.state.transmissionRenderTarget[it.id],qt=it.viewport||ot;Ht.setSize(qt.z*j.transmissionResolutionScale,qt.w*j.transmissionResolutionScale);const zt=j.getRenderTarget(),Qt=j.getActiveCubeFace(),jt=j.getActiveMipmapLevel();j.setRenderTarget(Ht),j.getClearColor(C),H=j.getClearAlpha(),H<1&&j.setClearColor(16777215,.5),j.clear(),fe&&Ut.render(st);const ae=j.toneMapping;j.toneMapping=ji;const pe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),L.setupLightsView(it),Yt===!0&&It.setGlobalState(j.clippingPlanes,it),wa(A,st,it),b.updateMultisampleRenderTarget(Ht),b.updateRenderTargetMipmap(Ht),he.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Oe=0,an=Y.length;Oe<an;Oe++){const Je=Y[Oe],{object:He,geometry:Ge,material:Xt,group:zn}=Je;if(Xt.side===ba&&He.layers.test(it.layers)){const Me=Xt.side;Xt.side=ti,Xt.needsUpdate=!0,sl(He,st,it,Ge,Xt,zn),Xt.side=Me,Xt.needsUpdate=!0,ee=!0}}ee===!0&&(b.updateMultisampleRenderTarget(Ht),b.updateRenderTargetMipmap(Ht))}j.setRenderTarget(zt,Qt,jt),j.setClearColor(C,H),pe!==void 0&&(it.viewport=pe),j.toneMapping=ae}function wa(A,Y,st){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let at=0,Ht=A.length;at<Ht;at++){const qt=A[at],{object:zt,geometry:Qt,group:jt}=qt;let ae=qt.material;ae.allowOverride===!0&&it!==null&&(ae=it),zt.layers.test(st.layers)&&sl(zt,Y,st,Qt,ae,jt)}}function sl(A,Y,st,it,at,Ht){A.onBeforeRender(j,Y,st,it,at,Ht),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),at.onBeforeRender(j,Y,st,it,A,Ht),at.transparent===!0&&at.side===ba&&at.forceSinglePass===!1?(at.side=ti,at.needsUpdate=!0,j.renderBufferDirect(st,Y,it,at,A,Ht),at.side=hs,at.needsUpdate=!0,j.renderBufferDirect(st,Y,it,at,A,Ht),at.side=ba):j.renderBufferDirect(st,Y,it,at,A,Ht),A.onAfterRender(j,Y,st,it,at,Ht)}function Ys(A,Y,st){Y.isScene!==!0&&(Y=ne);const it=D.get(A),at=L.state.lights,Ht=L.state.shadowsArray,qt=at.state.version,zt=Pt.getParameters(A,at.state,Ht,Y,st,L.state.lightProbeGridArray),Qt=Pt.getProgramCacheKey(zt);let jt=it.programs;it.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,it.fog=Y.fog;const ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;it.envMap=J.get(A.envMap||it.environment,ae),it.envMapRotation=it.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",je),jt=new Map,it.programs=jt);let pe=jt.get(Qt);if(pe!==void 0){if(it.currentProgram===pe&&it.lightsStateVersion===qt)return Da(A,zt),pe}else zt.uniforms=Pt.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,st,zt),A.onBeforeCompile(zt,j),pe=Pt.acquireProgram(zt,Qt),jt.set(Qt,pe),it.uniforms=zt.uniforms;const ee=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ee.clippingPlanes=It.uniform),Da(A,zt),it.needsLights=gs(A),it.lightsStateVersion=qt,it.needsLights&&(ee.ambientLightColor.value=at.state.ambient,ee.lightProbe.value=at.state.probe,ee.directionalLights.value=at.state.directional,ee.directionalLightShadows.value=at.state.directionalShadow,ee.spotLights.value=at.state.spot,ee.spotLightShadows.value=at.state.spotShadow,ee.rectAreaLights.value=at.state.rectArea,ee.ltc_1.value=at.state.rectAreaLTC1,ee.ltc_2.value=at.state.rectAreaLTC2,ee.pointLights.value=at.state.point,ee.pointLightShadows.value=at.state.pointShadow,ee.hemisphereLights.value=at.state.hemi,ee.directionalShadowMatrix.value=at.state.directionalShadowMatrix,ee.spotLightMatrix.value=at.state.spotLightMatrix,ee.spotLightMap.value=at.state.spotLightMap,ee.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=L.state.lightProbeGridArray.length>0,it.currentProgram=pe,it.uniformsList=null,pe}function Jr(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Vc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Da(A,Y){const st=D.get(A);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function $r(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;O.setFromMatrixPosition(Y.matrixWorld);for(let st=0,it=A.length;st<it;st++){const at=A[st];if(at.texture!==null&&at.boundingBox.containsPoint(O))return at}return null}function Ua(A,Y,st,it,at){Y.isScene!==!0&&(Y=ne),b.resetTextureUnits();const Ht=Y.fog,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Y.environment:null,zt=q===null?j.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ce.workingColorSpace,Qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,jt=J.get(it.envMap||qt,Qt),ae=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pe=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),ee=!!st.morphAttributes.position,Oe=!!st.morphAttributes.normal,an=!!st.morphAttributes.color;let Je=ji;it.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Je=j.toneMapping);const He=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ge=He!==void 0?He.length:0,Xt=D.get(it),zn=L.state.lights;if(Yt===!0&&(wt===!0||A!==F)){const Fe=A===F&&it.id===P;It.setState(it,A,Fe)}let Me=!1;it.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==zn.state.version||Xt.outputColorSpace!==zt||at.isBatchedMesh&&Xt.batching===!1||!at.isBatchedMesh&&Xt.batching===!0||at.isBatchedMesh&&Xt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Xt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Xt.instancing===!1||!at.isInstancedMesh&&Xt.instancing===!0||at.isSkinnedMesh&&Xt.skinning===!1||!at.isSkinnedMesh&&Xt.skinning===!0||at.isInstancedMesh&&Xt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Xt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Xt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Xt.instancingMorph===!1&&at.morphTexture!==null||Xt.envMap!==jt||it.fog===!0&&Xt.fog!==Ht||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==It.numPlanes||Xt.numIntersection!==It.numIntersection)||Xt.vertexAlphas!==ae||Xt.vertexTangents!==pe||Xt.morphTargets!==ee||Xt.morphNormals!==Oe||Xt.morphColors!==an||Xt.toneMapping!==Je||Xt.morphTargetsCount!==Ge||!!Xt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Xt.__version=it.version);let bn=Xt.currentProgram;Me===!0&&(bn=Ys(it,Y,at),Z&&it.isNodeMaterial&&Z.onUpdateProgram(it,bn,Xt));let ei=!1,Ai=!1,ni=!1;const Ve=bn.getUniforms(),sn=Xt.uniforms;if(Dt.useProgram(bn.program)&&(ei=!0,Ai=!0,ni=!0),it.id!==P&&(P=it.id,Ai=!0),Xt.needsLights){const Fe=$r(L.state.lightProbeGridArray,at);Xt.lightProbeGrid!==Fe&&(Xt.lightProbeGrid=Fe,Ai=!0)}if(ei||F!==A){Dt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(X,"projectionMatrix",A.projectionMatrix),Ve.setValue(X,"viewMatrix",A.matrixWorldInverse);const zi=Ve.map.cameraPosition;zi!==void 0&&zi.setValue(X,$t.setFromMatrixPosition(A.matrixWorld)),Ee.logarithmicDepthBuffer&&Ve.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ve.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Ai=!0,ni=!0)}if(Xt.needsLights&&(zn.state.directionalShadowMap.length>0&&Ve.setValue(X,"directionalShadowMap",zn.state.directionalShadowMap,b),zn.state.spotShadowMap.length>0&&Ve.setValue(X,"spotShadowMap",zn.state.spotShadowMap,b),zn.state.pointShadowMap.length>0&&Ve.setValue(X,"pointShadowMap",zn.state.pointShadowMap,b)),at.isSkinnedMesh){Ve.setOptional(X,at,"bindMatrix"),Ve.setOptional(X,at,"bindMatrixInverse");const Fe=at.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Ve.setValue(X,"boneTexture",Fe.boneTexture,b))}at.isBatchedMesh&&(Ve.setOptional(X,at,"batchingTexture"),Ve.setValue(X,"batchingTexture",at._matricesTexture,b),Ve.setOptional(X,at,"batchingIdTexture"),Ve.setValue(X,"batchingIdTexture",at._indirectTexture,b),Ve.setOptional(X,at,"batchingColorTexture"),at._colorsTexture!==null&&Ve.setValue(X,"batchingColorTexture",at._colorsTexture,b));const Ri=st.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&le.update(at,st,bn),(Ai||Xt.receiveShadow!==at.receiveShadow)&&(Xt.receiveShadow=at.receiveShadow,Ve.setValue(X,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Y.environment!==null&&(sn.envMapIntensity.value=Y.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=sA()),Ai){if(Ve.setValue(X,"toneMappingExposure",j.toneMappingExposure),Xt.needsLights&&Na(sn,ni),Ht&&it.fog===!0&&ut.refreshFogUniforms(sn,Ht),ut.refreshMaterialUniforms(sn,it,yt,K,L.state.transmissionRenderTarget[A.id]),Xt.needsLights&&Xt.lightProbeGrid){const Fe=Xt.lightProbeGrid;sn.probesSH.value=Fe.texture,sn.probesMin.value.copy(Fe.boundingBox.min),sn.probesMax.value.copy(Fe.boundingBox.max),sn.probesResolution.value.copy(Fe.resolution)}Vc.upload(X,Jr(Xt),sn,b)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Vc.upload(X,Jr(Xt),sn,b),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ve.setValue(X,"center",at.center),Ve.setValue(X,"modelViewMatrix",at.modelViewMatrix),Ve.setValue(X,"normalMatrix",at.normalMatrix),Ve.setValue(X,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const Fe=it.uniformsGroups;for(let zi=0,Oa=Fe.length;zi<Oa;zi++){const _s=Fe[zi];pt.update(_s,bn),pt.bind(_s,bn)}}return bn}function Na(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function gs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ct},this.getActiveMipmapLevel=function(){return dt},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,Y,st){const it=D.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=Y,D.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:st,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const st=D.get(A);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const La=X.createFramebuffer();this.setRenderTarget=function(A,Y=0,st=0){q=A,ct=Y,dt=st;let it=null,at=!1,Ht=!1;if(A){const zt=D.get(A);if(zt.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(X.FRAMEBUFFER,zt.__webglFramebuffer),ot.copy(A.viewport),vt.copy(A.scissor),Et=A.scissorTest,Dt.viewport(ot),Dt.scissor(vt),Dt.setScissorTest(Et),P=-1;return}else if(zt.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(zt.__hasExternalTextures)b.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ae=A.depthTexture;if(zt.__boundDepthTexture!==ae){if(ae!==null&&D.has(ae)&&(A.width!==ae.image.width||A.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ht=!0);const jt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[Y])?it=jt[Y][st]:it=jt[Y],at=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?it=D.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?it=jt[st]:it=jt,ot.copy(A.viewport),vt.copy(A.scissor),Et=A.scissorTest}else ot.copy(xt).multiplyScalar(yt).floor(),vt.copy(Ct).multiplyScalar(yt).floor(),Et=Gt;if(st!==0&&(it=La),Dt.bindFramebuffer(X.FRAMEBUFFER,it)&&Dt.drawBuffers(A,it),Dt.viewport(ot),Dt.scissor(vt),Dt.setScissorTest(Et),at){const zt=D.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,zt.__webglTexture,st)}else if(Ht){const zt=Y;for(let Qt=0;Qt<A.textures.length;Qt++){const jt=D.get(A.textures[Qt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Qt,jt.__webglTexture,st,zt)}}else if(A!==null&&st!==0){const zt=D.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zt.__webglTexture,st)}P=-1},this.readRenderTargetPixels=function(A,Y,st,it,at,Ht,qt,zt=0){if(!(A&&A.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Qt=Qt[qt]),Qt){Dt.bindFramebuffer(X.FRAMEBUFFER,Qt);try{const jt=A.textures[zt],ae=jt.format,pe=jt.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),!Ee.textureFormatReadable(ae)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(pe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-at&&X.readPixels(Y,st,it,at,k.convert(ae),k.convert(pe),Ht)}finally{const jt=q!==null?D.get(q).__webglFramebuffer:null;Dt.bindFramebuffer(X.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,st,it,at,Ht,qt,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qt!==void 0&&(Qt=Qt[qt]),Qt)if(Y>=0&&Y<=A.width-it&&st>=0&&st<=A.height-at){Dt.bindFramebuffer(X.FRAMEBUFFER,Qt);const jt=A.textures[zt],ae=jt.format,pe=jt.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+zt),!Ee.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ee),X.bufferData(X.PIXEL_PACK_BUFFER,Ht.byteLength,X.STREAM_READ),X.readPixels(Y,st,it,at,k.convert(ae),k.convert(pe),0);const Oe=q!==null?D.get(q).__webglFramebuffer:null;Dt.bindFramebuffer(X.FRAMEBUFFER,Oe);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await bM(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ee),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ht),X.deleteBuffer(ee),X.deleteSync(an),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,st=0){const it=Math.pow(2,-st),at=Math.floor(A.image.width*it),Ht=Math.floor(A.image.height*it),qt=Y!==null?Y.x:0,zt=Y!==null?Y.y:0;b.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,st,0,0,qt,zt,at,Ht),Dt.unbindTexture()};const gn=X.createFramebuffer(),rl=X.createFramebuffer();this.copyTextureToTexture=function(A,Y,st=null,it=null,at=0,Ht=0){let qt,zt,Qt,jt,ae,pe,ee,Oe,an;const Je=A.isCompressedTexture?A.mipmaps[Ht]:A.image;if(st!==null)qt=st.max.x-st.min.x,zt=st.max.y-st.min.y,Qt=st.isBox3?st.max.z-st.min.z:1,jt=st.min.x,ae=st.min.y,pe=st.isBox3?st.min.z:0;else{const sn=Math.pow(2,-at);qt=Math.floor(Je.width*sn),zt=Math.floor(Je.height*sn),A.isDataArrayTexture?Qt=Je.depth:A.isData3DTexture?Qt=Math.floor(Je.depth*sn):Qt=1,jt=0,ae=0,pe=0}it!==null?(ee=it.x,Oe=it.y,an=it.z):(ee=0,Oe=0,an=0);const He=k.convert(Y.format),Ge=k.convert(Y.type);let Xt;Y.isData3DTexture?(b.setTexture3D(Y,0),Xt=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(b.setTexture2DArray(Y,0),Xt=X.TEXTURE_2D_ARRAY):(b.setTexture2D(Y,0),Xt=X.TEXTURE_2D),Dt.activeTexture(X.TEXTURE0),Dt.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),Dt.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Dt.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const zn=Dt.getParameter(X.UNPACK_ROW_LENGTH),Me=Dt.getParameter(X.UNPACK_IMAGE_HEIGHT),bn=Dt.getParameter(X.UNPACK_SKIP_PIXELS),ei=Dt.getParameter(X.UNPACK_SKIP_ROWS),Ai=Dt.getParameter(X.UNPACK_SKIP_IMAGES);Dt.pixelStorei(X.UNPACK_ROW_LENGTH,Je.width),Dt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Je.height),Dt.pixelStorei(X.UNPACK_SKIP_PIXELS,jt),Dt.pixelStorei(X.UNPACK_SKIP_ROWS,ae),Dt.pixelStorei(X.UNPACK_SKIP_IMAGES,pe);const ni=A.isDataArrayTexture||A.isData3DTexture,Ve=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const sn=D.get(A),Ri=D.get(Y),Fe=D.get(sn.__renderTarget),zi=D.get(Ri.__renderTarget);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,Fe.__webglFramebuffer),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Oa=0;Oa<Qt;Oa++)ni&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,D.get(A).__webglTexture,at,pe+Oa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,Ht,an+Oa)),X.blitFramebuffer(jt,ae,qt,zt,ee,Oe,qt,zt,X.DEPTH_BUFFER_BIT,X.NEAREST);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(at!==0||A.isRenderTargetTexture||D.has(A)){const sn=D.get(A),Ri=D.get(Y);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,gn),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,rl);for(let Fe=0;Fe<Qt;Fe++)ni?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,sn.__webglTexture,at,pe+Fe):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,sn.__webglTexture,at),Ve?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ri.__webglTexture,Ht,an+Fe):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ri.__webglTexture,Ht),at!==0?X.blitFramebuffer(jt,ae,qt,zt,ee,Oe,qt,zt,X.COLOR_BUFFER_BIT,X.NEAREST):Ve?X.copyTexSubImage3D(Xt,Ht,ee,Oe,an+Fe,jt,ae,qt,zt):X.copyTexSubImage2D(Xt,Ht,ee,Oe,jt,ae,qt,zt);Dt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ve?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Xt,Ht,ee,Oe,an,qt,zt,Qt,He,Ge,Je.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Xt,Ht,ee,Oe,an,qt,zt,Qt,He,Je.data):X.texSubImage3D(Xt,Ht,ee,Oe,an,qt,zt,Qt,He,Ge,Je):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ht,ee,Oe,qt,zt,He,Ge,Je.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ht,ee,Oe,Je.width,Je.height,He,Je.data):X.texSubImage2D(X.TEXTURE_2D,Ht,ee,Oe,qt,zt,He,Ge,Je);Dt.pixelStorei(X.UNPACK_ROW_LENGTH,zn),Dt.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Me),Dt.pixelStorei(X.UNPACK_SKIP_PIXELS,bn),Dt.pixelStorei(X.UNPACK_SKIP_ROWS,ei),Dt.pixelStorei(X.UNPACK_SKIP_IMAGES,Ai),Ht===0&&Y.generateMipmaps&&X.generateMipmap(Xt),Dt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),Dt.unbindTexture()},this.resetState=function(){ct=0,dt=0,q=null,Dt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=xe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...p},m)=>xe.createElement("svg",{ref:m,...lA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Rv("lucide",l),...p},[...d.map(([h,S])=>xe.createElement(h,S)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=(o,e)=>{const i=xe.forwardRef(({className:s,...l},u)=>xe.createElement(cA,{ref:u,iconNode:e,className:Rv(`lucide-${oA(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],fA=Ii("ChefHat",uA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],Ih=Ii("Coffee",dA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Vd=Ii("Crown",hA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],mA=Ii("DollarSign",pA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Cv=Ii("Monitor",gA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],vA=Ii("Package",_A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],SA=Ii("ShoppingCart",xA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],yA=Ii("Star",MA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],EA=Ii("TrendingUp",bA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],AA=Ii("UserPlus",TA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],CA=Ii("X",RA),zs={money:15,beans:20,coffees:0,pricePerCoffee:3,beanCost:10,beanBatchSize:20,demand:1,baristas:0,marketingLevel:0,premiumBeansLevel:0,autoBeanBuyer:0,pastryChefs:0,tipJar:0,pastries:0,totalEarned:0,totalBrewed:0,tutorialStep:0,ticks:0,goldenBeans:0},kd={barista:{id:"baristas",name:"Hire Barista",description:"Auto-brews 1 coffee/sec.",baseCost:50,costMultiplier:1.15,icon:AA,maxLevel:null},marketing:{id:"marketingLevel",name:"Marketing Campaign",description:"Increases demand by 1/sec.",baseCost:100,costMultiplier:1.5,icon:EA,maxLevel:null},premiumBeans:{id:"premiumBeansLevel",name:"Premium Roast",description:"Increases price by $1.50.",baseCost:250,costMultiplier:2.2,icon:yA,maxLevel:null},autoBean:{id:"autoBeanBuyer",name:"Auto-Bean Manager",description:"Auto-buys beans when low.",baseCost:1e3,costMultiplier:1,icon:SA,maxLevel:1},pastryChef:{id:"pastryChefs",name:"Hire Pastry Chef",description:"Bakes 1 pastry/sec. Sells for $4.",baseCost:750,costMultiplier:1.4,icon:fA,maxLevel:null},tipJar:{id:"tipJar",name:"Tip Jar",description:"15% chance for a $2 tip per sale.",baseCost:150,costMultiplier:1.8,icon:mA,maxLevel:5}},wA=[{id:"desk",name:"Management PC",action:"Open System",x:10,y:15,w:15,h:15,icon:Cv,color:"bg-indigo-900 border-indigo-500"},{id:"machine",name:"Espresso Maker",action:"Brew Coffee",x:45,y:15,w:12,h:12,icon:Ih,color:"bg-stone-300 border-stone-400 text-stone-900"},{id:"storage",name:"Inventory",action:"Buy Beans",x:80,y:15,w:15,h:15,icon:vA,color:"bg-amber-900 border-amber-700"}],Fr=50,Xd=10,Hr=.6,us=4,DA=o=>o.includes("blue")?"#60a5fa":o.includes("emerald")?"#34d399":o.includes("rose")?"#fb7185":o.includes("purple")?"#c084fc":"#9ca3af";function UA(){const[o,e]=xe.useState(()=>{try{const C=localStorage.getItem("coffeeTycoonSaveV4");if(C){const H=JSON.parse(C);return H.tutorialStep===void 0&&(H.tutorialStep=H.totalEarned>0?5:0),H}}catch{}return zs}),[i,s]=xe.useState(null),[l,u]=xe.useState(!1),[d,p]=xe.useState(!1),[m,h]=xe.useState(!1),[S,x]=xe.useState([]),[_,y]=xe.useState([]),[T,U]=xe.useState(!1),M=xe.useRef(!1);xe.useEffect(()=>{M.current=T},[T]);const v=xe.useRef([]);xe.useEffect(()=>{v.current=_},[_]);const w=xe.useRef(0);xe.useEffect(()=>{w.current=o.baristas||0},[o.baristas]);const B=xe.useRef(0);xe.useEffect(()=>{B.current=o.pastryChefs||0},[o.pastryChefs]);const O=xe.useRef(0),V=xe.useRef(null),L=xe.useRef(null),I=xe.useRef(null),E=xe.useRef(null),N=xe.useRef({}),j=xe.useRef({x:50,y:30,angle:0}),z=xe.useRef({w:!1,a:!1,s:!1,d:!1,space:!1});zs.pricePerCoffee+o.premiumBeansLevel*1.5,zs.demand+o.marketingLevel;const Z=1+(o.goldenBeans||0)*.5,ct=Math.floor(Math.sqrt((o.totalEarned||0)/1e3));xe.useEffect(()=>{localStorage.setItem("coffeeTycoonSaveV4",JSON.stringify(o))},[o]);const dt=xe.useCallback(()=>{if(O.current+=1,localStorage.removeItem("coffeeTycoonSaveV4"),e(zs),y([]),x([]),j.current={x:50,y:30,angle:0},p(!1),L.current&&N.current)for(const C in N.current)C!=="player"&&C!=="baristas"&&C!=="pastryChefs"&&(L.current.remove(N.current[C].mesh),delete N.current[C])},[]),q=xe.useCallback(()=>{if(O.current+=1,e(C=>{const H=Math.floor(Math.sqrt((C.totalEarned||0)/1e3));return{...zs,goldenBeans:(C.goldenBeans||0)+H,tutorialStep:5}}),y([]),x([]),j.current={x:50,y:30,angle:0},h(!1),u(!1),L.current&&N.current)for(const C in N.current)C!=="player"&&C!=="baristas"&&C!=="pastryChefs"&&(L.current.remove(N.current[C].mesh),delete N.current[C])},[]),P=xe.useCallback(()=>{e(C=>C.money>=C.beanCost?{...C,money:C.money-C.beanCost,beans:C.beans+C.beanBatchSize,tutorialStep:C.tutorialStep===2?3:C.tutorialStep}:C)},[]),F=xe.useCallback(()=>{e(C=>C.beans>0?{...C,beans:C.beans-1,coffees:C.coffees+1,totalBrewed:C.totalBrewed+1,tutorialStep:C.tutorialStep===0?1:C.tutorialStep}:C)},[]),ot=C=>{const H=kd[C],lt=Math.floor(H.baseCost*Math.pow(H.costMultiplier,o[H.id]||0)),K=o[H.id]||0;H.maxLevel!==null&&K>=H.maxLevel||e(yt=>yt.money>=lt?{...yt,money:yt.money-lt,[H.id]:K+1,tutorialStep:yt.tutorialStep===3?4:yt.tutorialStep}:yt)},vt=xe.useCallback(C=>{const H=kd[C];e(lt=>{const K=lt[H.id]||0;if(K<=0)return lt;const yt=Math.floor(H.baseCost*Math.pow(H.costMultiplier,K-1)),$=Math.floor(yt*.5);return{...lt,money:lt.money+$,[H.id]:K-1}})},[]);xe.useEffect(()=>{const C=setInterval(()=>{const H=O.current;e(lt=>{if(!M.current)return lt;let K={...lt};K.ticks+=1,K.pastries=K.pastries||0,K.pastryChefs=K.pastryChefs||0,K.tipJar=K.tipJar||0;let yt=0,$=0,gt=0,xt=0;if(K.autoBeanBuyer>=1&&K.beans<=K.baristas&&K.money>=K.beanCost){const $t=Math.floor(K.money/K.beanCost),Wt=Math.min($t,Math.max(1,Math.ceil(K.baristas/K.beanBatchSize)));Wt>0&&(K.money-=Wt*K.beanCost,K.beans+=Wt*K.beanBatchSize)}if(K.baristas>0){const $t=Math.min(K.beans,K.baristas);$t>0&&(K.beans-=$t,K.coffees+=$t,K.totalBrewed+=$t,gt=$t)}K.pastryChefs>0&&(K.pastries+=K.pastryChefs,xt=K.pastryChefs);const Ct=zs.demand+(K.marketingLevel||0),Gt=Math.min(K.coffees,Ct);if(Gt>0){const $t=zs.pricePerCoffee+(K.premiumBeansLevel||0)*1.5,Wt=1+(K.goldenBeans||0)*.5;let ne=Gt*($t*Wt);const fe=Math.min(K.pastries,Gt);if(fe>0&&(ne+=fe*(4*Wt),K.pastries-=fe),K.tipJar>0)for(let De=0;De<Gt;De++)Math.random()<.15+K.tipJar*.05&&(ne+=2*Wt);K.coffees-=Gt,K.money+=ne,K.totalEarned+=ne,yt=ne,$=Gt,K.tutorialStep===1&&(K.tutorialStep=2)}let kt=[];const Yt=Date.now(),wt=yt<=0&&Ct>0,Zt=yt>0?Math.min($,15):wt?Math.min(Ct,4):0;if(Zt>0){const $t=Array.from({length:Zt}).map((Wt,ne)=>({id:`${Yt}-cust-${ne}`,x:12+Math.random()*76,startZ:30+Math.random()*6,targetZ:13+Math.random()*7,color:["bg-blue-400","bg-emerald-400","bg-rose-400","bg-purple-400","bg-amber-400","bg-cyan-400"][Math.floor(Math.random()*6)]}));y(Wt=>[...Wt.slice(-35),...$t]),setTimeout(()=>{if(O.current===H&&(y(Wt=>Wt.filter(ne=>!$t.find(fe=>fe.id===ne.id))),yt>0)){const Wt=$t.map(ne=>({id:ne.id,amount:yt/$t.length,left:ne.x,color:"text-emerald-400"}));x(ne=>[...ne,...Wt]),setTimeout(()=>{O.current===H&&x(ne=>ne.filter(fe=>!Wt.find(De=>De.id===fe.id)))},1e3)}},yt>0?3500:5500)}return gt>0&&kt.push({id:`${Yt}-brew`,text:`+${gt} ☕`,left:45+Math.random()*10,top:38,color:"text-amber-400"}),xt>0&&kt.push({id:`${Yt}-bake`,text:`+${xt} 🍩`,left:20+Math.random()*10,top:38,color:"text-orange-400"}),kt.length>0&&(x($t=>[...$t,...kt]),setTimeout(()=>{O.current===H&&x($t=>$t.filter(Wt=>!kt.find(ne=>ne.id===Wt.id)))},1e3)),K})},1e3);return()=>clearInterval(C)},[]),xe.useEffect(()=>{const C=lt=>{if(l){lt.key==="Escape"&&u(!1);return}const K=lt.key.toLowerCase();(K==="w"||lt.key==="ArrowUp")&&(z.current.w=!0),(K==="a"||lt.key==="ArrowLeft")&&(z.current.a=!0),(K==="s"||lt.key==="ArrowDown")&&(z.current.s=!0),(K==="d"||lt.key==="ArrowRight")&&(z.current.d=!0),lt.key===" "&&(lt.preventDefault(),z.current.space=!0)},H=lt=>{const K=lt.key.toLowerCase();(K==="w"||lt.key==="ArrowUp")&&(z.current.w=!1),(K==="a"||lt.key==="ArrowLeft")&&(z.current.a=!1),(K==="s"||lt.key==="ArrowDown")&&(z.current.s=!1),(K==="d"||lt.key==="ArrowRight")&&(z.current.d=!1),lt.key===" "&&(z.current.space=!1)};return window.addEventListener("keydown",C),window.addEventListener("keyup",H),()=>{window.removeEventListener("keydown",C),window.removeEventListener("keyup",H)}},[l]),xe.useEffect(()=>{let C,H=!1;const lt=()=>{if(!l&&M.current){let{x:K,y:yt,angle:$}=j.current,gt=0,xt=0;if(z.current.w&&(xt-=Hr),z.current.s&&(xt+=Hr),z.current.a&&(gt-=Hr),z.current.d&&(gt+=Hr),gt!==0||xt!==0){const Zt=Math.sqrt(gt*gt+xt*xt);gt=gt/Zt*Hr,xt=xt/Zt*Hr,$=Math.atan2(xt,gt)*(180/Math.PI)}let Ct=K+gt,Gt=yt+xt;Ct=Math.max(us,Math.min(100-us,Ct)),Gt=Math.max(us,Math.min(100-us,Gt));const kt=yt<Fr,Yt=yt>Fr+Xd;kt&&Gt+us>Fr?Gt=Fr-us:Yt&&Gt-us<Fr+Xd&&(Gt=Fr+Xd+us),j.current={x:Ct,y:Gt,angle:$};let wt=null;for(const Zt of wA)if(Ct>Zt.x&&Ct<Zt.x+Zt.w&&Gt>Zt.y&&Gt<Zt.y+Zt.h){wt=Zt;break}s(Zt=>(Zt==null?void 0:Zt.id)!==(wt==null?void 0:wt.id)?wt:Zt),z.current.space&&!H&&wt&&(wt.id==="machine"&&F(),wt.id==="storage"&&P(),wt.id==="desk"&&u(!0)),H=z.current.space}if(L.current&&E.current&&N.current.player){if(M.current)I.current.position.set(0,80,80),I.current.lookAt(0,0,0);else{const Yt=Date.now()/3e3;I.current.position.set(Math.sin(Yt)*70,60,Math.cos(Yt)*70),I.current.lookAt(0,0,0)}const{x:K,y:yt,angle:$}=j.current;N.current.player.position.set(K-50,0,yt-50),N.current.player.rotation.y=-$*(Math.PI/180)+Math.PI/2;const gt=new Set(v.current.map(Yt=>Yt.id));v.current.forEach(Yt=>{if(!N.current[Yt.id]){const wt=new $n,Zt=new We({color:DA(Yt.color),roughness:.7}),$t=new _e(new Oi(1.2,1.4,3.5,16),Zt);$t.position.y=1.75,$t.castShadow=!0,wt.add($t);const Wt=new We({color:"#fca5a5",roughness:.4}),ne=new _e(new Gr(1.1,16,16),Wt);ne.position.y=4.2,ne.castShadow=!0,wt.add(ne);const fe=new Oi(.35,.35,2.2,8),De=new _e(fe,Zt);De.position.set(-1.5,2.5,0),De.rotation.z=Math.PI/6,De.castShadow=!0,wt.add(De);const X=new _e(fe,Zt);X.position.set(1.5,2.5,0),X.rotation.z=-Math.PI/6,X.castShadow=!0,wt.add(X),wt.position.set(Yt.x-50,0,Yt.startZ||35),L.current.add(wt),N.current[Yt.id]={mesh:wt,targetZ:Yt.targetZ||11+Math.random()*3,hopOffset:Math.random()*Math.PI*2}}});const xt=Date.now()/150;for(const Yt in N.current)if(!(Yt==="player"||Yt==="baristas"||Yt==="pastryChefs"))if(!gt.has(Yt))L.current.remove(N.current[Yt].mesh),delete N.current[Yt];else{const wt=N.current[Yt];wt.mesh.position.z>wt.targetZ?(wt.mesh.position.z-=.6,wt.mesh.position.y=Math.abs(Math.sin(xt+wt.hopOffset))*1.5,wt.mesh.rotation.y=Math.sin(xt*.5+wt.hopOffset)*.2):(wt.mesh.position.y=0,wt.mesh.rotation.y=0)}N.current.baristas||(N.current.baristas=new $n,L.current.add(N.current.baristas));const Ct=N.current.baristas;for(;Ct.children.length>w.current;)Ct.remove(Ct.children[Ct.children.length-1]);for(;Ct.children.length<w.current;){const Yt=Ct.children.length,wt=new $n,Zt=new We({color:"#f59e0b"}),$t=new _e(new Oi(1.5,1.5,4,16),Zt);$t.position.y=2,$t.castShadow=!0,wt.add($t);const Wt=new We({color:"#fca5a5"}),ne=new _e(new Gr(1.2,16,16),Wt);ne.position.y=4.5,ne.castShadow=!0,wt.add(ne);const fe=Math.floor(Yt/8),X=-18+Yt%8*5,Ye=-2-fe*4;wt.position.set(X,0,Ye),Ct.add(wt)}const Gt=Date.now()/200;Ct.children.forEach((Yt,wt)=>{Yt.position.y=Math.abs(Math.sin(Gt+wt))*.5,Yt.rotation.y=Math.sin(Gt*.5+wt)*.3}),N.current.pastryChefs||(N.current.pastryChefs=new $n,L.current.add(N.current.pastryChefs));const kt=N.current.pastryChefs;for(;kt.children.length>B.current;)kt.remove(kt.children[kt.children.length-1]);for(;kt.children.length<B.current;){const Yt=kt.children.length,wt=new $n,Zt=new We({color:"#f3f4f6"}),$t=new _e(new Oi(1.5,1.5,4,16),Zt);$t.position.y=2,$t.castShadow=!0,wt.add($t);const Wt=new We({color:"#fca5a5"}),ne=new _e(new Gr(1.2,16,16),Wt);ne.position.y=4.5,ne.castShadow=!0,wt.add(ne);const fe=new We({color:"#ffffff"}),De=new _e(new Oi(.8,1.2,1.5,16),fe);De.position.y=6,De.castShadow=!0,wt.add(De);const X=Math.floor(Yt/4),he=-28+Yt%4*5,Ee=-2-X*4;wt.position.set(he,0,Ee),kt.add(wt)}kt.children.forEach((Yt,wt)=>{Yt.position.y=Math.abs(Math.sin(Gt+wt))*.5,Yt.rotation.y=Math.sin(Gt*.5+wt)*.3}),E.current.render(L.current,I.current)}C=requestAnimationFrame(lt)};return C=requestAnimationFrame(lt),()=>cancelAnimationFrame(C)},[l,F,P]),xe.useEffect(()=>{return C();function C(){if(!V.current)return;V.current.querySelectorAll("canvas").forEach(pn=>pn.remove()),N.current={};const H=new FM;H.background=new Le("#1c1917"),L.current=H;const lt=new bi(45,V.current.clientWidth/V.current.clientHeight,.1,1e3);lt.position.set(0,80,80),lt.lookAt(0,0,0),I.current=lt;const K=new rA({antialias:!0});K.setSize(V.current.clientWidth,V.current.clientHeight),K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.outputColorSpace=di,K.toneMapping=Hh,K.toneMappingExposure=1.25,K.shadowMap.enabled=!0,K.domElement.style.display="block",K.domElement.style.width="100%",K.domElement.style.height="100%",V.current.appendChild(K.domElement),E.current=K;const yt=new ly(16777215,.9);H.add(yt);const $=new oy(16768944,1.2);$.position.set(15,55,35),$.castShadow=!0,H.add($);const gt=new ay(16708551,2696484,.7);H.add(gt);const xt=new Yr(100,100),Ct=new We({color:"#292524"}),Gt=new _e(xt,Ct);Gt.rotation.x=-Math.PI/2,Gt.receiveShadow=!0,H.add(Gt);const kt=new yn(100,5.5,9),Yt=new We({color:"#451a03",roughness:.9}),wt=new _e(kt,Yt);wt.position.set(0,2.75,5),wt.castShadow=!0,wt.receiveShadow=!0,H.add(wt);const Zt=new yn(102,.8,10.5),$t=new We({color:"#f3f4f6",roughness:.1,metalness:.1}),Wt=new _e(Zt,$t);Wt.position.set(0,5.9,5.2),Wt.castShadow=!0,Wt.receiveShadow=!0,H.add(Wt);const ne=new $n;ne.position.set(-25,6.3,5);const fe=new yn(14,4,6),De=new We({color:"#93c5fd",transparent:!0,opacity:.3,roughness:.1}),X=new _e(fe,De);X.position.y=2,ne.add(X);const Ye=new $h(.6,.3,8,16),he=new We({color:"#d97706",roughness:.8});for(let pn=0;pn<3;pn++){const mn=new _e(Ye,he);mn.rotation.x=Math.PI/2,mn.position.set(-4+pn*4,.4,0),mn.castShadow=!0,ne.add(mn)}H.add(ne);const Ee=new $n,Dt=new Oi(1.5,1.5,4,16),tn=new We({color:"#2563eb"}),D=new _e(Dt,tn);D.position.y=2,D.castShadow=!0,Ee.add(D);const b=new Gr(1.2,16,16),J=new We({color:"#e5e7eb"}),_t=new _e(b,J);_t.position.y=4.5,_t.castShadow=!0,Ee.add(_t);const At=new yn(.5,.5,1),Nt=new We({color:"#d1d5db"}),Pt=new _e(At,Nt);Pt.position.set(0,4.5,1.2),Ee.add(Pt),H.add(Ee),N.current.player=Ee;const ut=new $n;ut.position.set(17.5-50,0,22.5-50);const ht=new _e(new yn(15,.2,15),new We({color:"#312e81"}));ht.position.y=.1,ut.add(ht);const Bt=new _e(new yn(10,4,6),new We({color:"#1f2937"}));Bt.position.y=2,Bt.castShadow=!0,Bt.receiveShadow=!0,ut.add(Bt);const It=new _e(new Oi(.4,.6,2),new We({color:"#374151"}));It.position.set(0,5,-1),ut.add(It);const Lt=new _e(new yn(6,4,.5),new We({color:"#111827"}));Lt.position.set(0,6.5,-1),Lt.castShadow=!0,ut.add(Lt);const Ut=new _e(new Yr(5.5,3.5),new Qh({color:"#4f46e5"}));Ut.position.set(0,6.5,-.74),ut.add(Ut);const le=new _e(new yn(3,.2,1.2),new We({color:"#9ca3af"}));le.position.set(0,4.1,1),ut.add(le),H.add(ut);const ie=new $n;ie.position.set(1,0,-29);const ve=new _e(new yn(12,.2,12),new We({color:"#d6d3d1"}));ve.position.y=.1,ie.add(ve);const k=new _e(new yn(8,4,6),new We({color:"#78350f"}));k.position.y=2,k.castShadow=!0,k.receiveShadow=!0,ie.add(k);const Rt=new _e(new yn(5,5,4),new We({color:"#ef4444",roughness:.2}));Rt.position.set(0,6.5,-.5),Rt.castShadow=!0,ie.add(Rt);const pt=new _e(new yn(5.5,1,5),new We({color:"#1f2937"}));pt.position.set(0,9.5,0),pt.castShadow=!0,ie.add(pt);const Ft=new _e(new Oi(.2,.2,1),new We({color:"#d1d5db"}));Ft.position.set(0,8.5,1.5),ie.add(Ft);const Ot=new _e(new Oi(.5,.4,1),new We({color:"#ffffff"}));Ot.position.set(0,4.5,1.5),Ot.castShadow=!0,ie.add(Ot),H.add(ie);const Tt=new $n;Tt.position.set(87.5-50,0,22.5-50);const Kt=new _e(new yn(15,.2,15),new We({color:"#78350f"}));Kt.position.y=.1,Tt.add(Kt);const re=new _e(new yn(10,.5,10),new We({color:"#451a03"}));re.position.y=.45,re.castShadow=!0,re.receiveShadow=!0,Tt.add(re);const je=(pn,mn,$i,ms)=>{const Ti=new _e(new yn(4,4,4),new We({color:"#b45309"}));Ti.position.set(pn,mn,$i),Ti.rotation.y=ms,Ti.castShadow=!0,Ti.receiveShadow=!0,Tt.add(Ti)};je(-2,2.7,-2,.1),je(2,2.7,-1,-.2),je(0,2.7,2,.05),je(-.5,6.7,-.5,.3),H.add(Tt);const Ue=()=>{V.current&&(lt.aspect=V.current.clientWidth/V.current.clientHeight,lt.updateProjectionMatrix(),K.setSize(V.current.clientWidth,V.current.clientHeight),K.setPixelRatio(Math.min(window.devicePixelRatio,2)))};return window.addEventListener("resize",Ue),()=>{window.removeEventListener("resize",Ue),V.current&&K.domElement.parentNode===V.current&&V.current.removeChild(K.domElement),K.dispose(),L.current===H&&(L.current=null),I.current===lt&&(I.current=null),E.current===K&&(E.current=null),N.current={}}}},[]);const Et=C=>`$${C.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}`;return bt.jsxs("div",{className:"h-screen w-full bg-stone-950 font-sans select-none overflow-hidden flex flex-col relative text-stone-100",children:[!T&&bt.jsx("div",{className:"absolute inset-0 z-[100] bg-stone-950/60 backdrop-blur-md flex flex-col items-center justify-center p-4",children:bt.jsxs("div",{className:"bg-stone-900 border border-stone-700 p-6 sm:p-10 rounded-[2rem] shadow-2xl flex flex-col items-center text-center animate-[popIn_0.5s_ease-out] w-full max-w-md",children:[bt.jsx("div",{className:"bg-amber-600 p-5 rounded-3xl text-white mb-6 shadow-[0_10px_20px_rgba(217,119,6,0.3)]",children:bt.jsx(Ih,{className:"w-16 h-16"})}),bt.jsx("h1",{className:"text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600 mb-2 drop-shadow-md leading-tight",children:"Coffee Shop"}),bt.jsx("h2",{className:"text-xl sm:text-2xl font-black text-stone-400 tracking-[0.3em] uppercase mb-10",children:"Tycoon"}),bt.jsx("button",{onClick:()=>U(!0),className:"w-full px-8 py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-white text-xl tracking-wide transition-all shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_30px_rgba(52,211,153,0.5)] active:scale-95 hover:-translate-y-1",children:o.totalEarned>0?"CONTINUE GAME":"START NEW GAME"}),o.totalEarned>0&&bt.jsx("button",{onClick:()=>p(!0),className:"mt-6 text-sm font-bold text-stone-500 hover:text-red-400 transition-colors",children:"Reset Progress"})]})}),T&&bt.jsxs("header",{className:"absolute top-0 inset-x-0 z-50 p-4 flex justify-between items-start pointer-events-none animate-[popIn_0.3s_ease-out]",children:[bt.jsxs("div",{className:"flex flex-col gap-2 pointer-events-auto",children:[bt.jsxs("div",{className:"bg-stone-900/90 backdrop-blur border border-stone-700 p-3 rounded-2xl shadow-xl flex items-center gap-3",children:[bt.jsx("div",{className:"bg-amber-600 p-2 rounded-xl text-white",children:bt.jsx(Ih,{className:"w-5 h-5"})}),bt.jsxs("div",{children:[bt.jsx("h1",{className:"text-lg font-black tracking-tight leading-none mb-1",children:"Coffee Shop"}),bt.jsxs("div",{className:"text-xs font-bold text-stone-400",children:["Day ",Math.floor(o.ticks/144)+1]})]})]}),bt.jsx("button",{onClick:()=>p(!0),className:"self-start text-xs font-bold bg-red-900/40 text-red-400 px-3 py-1.5 rounded-lg border border-red-900 hover:bg-red-800 transition-colors",children:"Reset Game"})]}),bt.jsxs("div",{className:"flex gap-2",children:[bt.jsxs("div",{className:"bg-stone-900/90 backdrop-blur border border-stone-700 p-3 rounded-2xl shadow-xl flex flex-col items-end pointer-events-auto",children:[bt.jsx("span",{className:"text-[10px] font-bold text-stone-500 uppercase",children:"Inventory"}),bt.jsxs("div",{className:"flex gap-4 mt-1",children:[bt.jsxs("div",{className:"flex flex-col items-end",children:[bt.jsx("span",{className:"text-xs text-orange-400 font-bold",children:o.pastries||0}),bt.jsx("span",{className:"text-[10px] text-stone-400",children:"Pastries"})]}),bt.jsxs("div",{className:"flex flex-col items-end",children:[bt.jsx("span",{className:"text-xs text-amber-500 font-bold",children:o.beans}),bt.jsx("span",{className:"text-[10px] text-stone-400",children:"Beans"})]}),bt.jsxs("div",{className:"flex flex-col items-end",children:[bt.jsx("span",{className:"text-xs text-stone-300 font-bold",children:o.coffees}),bt.jsx("span",{className:"text-[10px] text-stone-400",children:"Coffees"})]})]})]}),o.goldenBeans>0&&bt.jsxs("div",{className:"bg-stone-900/90 backdrop-blur border border-amber-500/30 p-3 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center gap-3 pointer-events-auto",children:[bt.jsx("div",{className:"bg-amber-500/20 p-2 rounded-xl border border-amber-500/50",children:bt.jsx(Vd,{className:"w-5 h-5 text-amber-400"})}),bt.jsxs("div",{className:"flex flex-col items-end",children:[bt.jsx("span",{className:"text-[10px] font-bold text-amber-500 uppercase tracking-wider mb-0.5",children:"Golden Beans"}),bt.jsxs("div",{className:"flex items-baseline gap-1",children:[bt.jsx("span",{className:"text-xl font-black text-amber-400 leading-none",children:o.goldenBeans}),bt.jsxs("span",{className:"text-xs font-bold text-amber-600",children:["(",Z,"x)"]})]})]})]}),bt.jsxs("div",{className:"bg-stone-900/90 backdrop-blur border border-emerald-900 p-3 rounded-2xl shadow-xl flex flex-col items-end pointer-events-auto min-w-[120px]",children:[bt.jsx("span",{className:"text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-1",children:"Company Funds"}),bt.jsx("span",{className:"text-xl font-black text-emerald-400 drop-shadow-md leading-none",children:Et(o.money)})]})]})]}),T&&o.tutorialStep<5&&bt.jsxs("div",{className:`absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-50 p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md border-2 text-center min-w-[320px] max-w-[90%] transition-all duration-500 ${o.tutorialStep===4?"bg-emerald-900/90 border-emerald-400 animate-[popIn_0.3s_ease-out]":"bg-blue-900/90 border-blue-400 animate-bounce"}`,children:[bt.jsx("h3",{className:`font-black text-xs uppercase tracking-widest mb-2 ${o.tutorialStep===4?"text-emerald-300":"text-blue-300"}`,children:o.tutorialStep===4?"Tutorial Complete!":`Tutorial: Step ${o.tutorialStep+1}/4`}),bt.jsxs("p",{className:"text-white font-bold text-sm mb-3",children:[o.tutorialStep===0&&"Use WASD or Arrows to walk to the red Espresso Machine and press SPACE to brew coffee.",o.tutorialStep===1&&"Great job! Now wait for a customer to buy the coffee. (They arrive automatically)",o.tutorialStep===2&&"You made money! Walk to the brown Storage Pallet and press SPACE to order Beans.",o.tutorialStep===3&&"Time to expand! Walk to the Management PC and press SPACE to buy your first upgrade.",o.tutorialStep===4&&"You're ready to build your coffee empire! Enjoy!"]}),o.tutorialStep===4&&bt.jsx("button",{onClick:()=>e(C=>({...C,tutorialStep:5})),className:"bg-emerald-500 hover:bg-emerald-400 text-stone-900 font-black px-6 py-2 rounded-lg text-xs transition-colors shadow-lg active:scale-95",children:"Let's Go!"})]}),bt.jsxs("main",{ref:V,className:"flex-1 relative bg-stone-900 overflow-hidden shadow-inner cursor-crosshair",children:[S.map(C=>bt.jsx("div",{className:`absolute z-30 font-black text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-[floatUp_1s_ease-out_forwards] ${C.color||"text-emerald-400"}`,style:{left:`${C.left}%`,top:C.top?`${C.top}%`:"45%"},children:C.text||`+${Et(C.amount)}`},C.id)),T&&i&&!l&&bt.jsxs("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-6 py-3 rounded-full font-black shadow-[0_10px_25px_rgba(0,0,0,0.3)] animate-bounce flex items-center gap-3 z-50",children:[bt.jsx("span",{className:"bg-stone-200 border-2 border-stone-400 px-2 py-0.5 rounded text-xs font-bold text-stone-600",children:"SPACE"}),i.action]}),T&&!i&&o.ticks<10&&bt.jsx("div",{className:"absolute bottom-12 left-1/2 -translate-x-1/2 text-stone-400 text-sm font-bold opacity-50 flex gap-4",children:bt.jsx("span",{children:"WASD / Arrows to move"})})]}),l&&bt.jsx("div",{className:"absolute inset-0 z-50 bg-stone-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8",children:bt.jsxs("div",{className:"bg-stone-950 border border-stone-700 w-full max-w-4xl max-h-full rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-[popIn_0.2s_ease-out]",children:[bt.jsxs("div",{className:"bg-indigo-900 border-b border-indigo-700 p-4 flex justify-between items-center",children:[bt.jsxs("div",{className:"flex items-center gap-3",children:[bt.jsx(Cv,{className:"w-6 h-6 text-indigo-300"}),bt.jsx("h2",{className:"text-xl font-black text-white tracking-wide",children:"CoffeeOS Management System"})]}),bt.jsx("button",{onClick:()=>u(!1),className:"p-2 bg-indigo-950 hover:bg-red-900 hover:text-white rounded-lg text-indigo-400 transition-colors",children:bt.jsx(CA,{className:"w-5 h-5"})})]}),bt.jsxs("div",{className:"p-6 overflow-y-auto custom-scrollbar flex-1 bg-stone-900",children:[(o.totalEarned>1e3||o.goldenBeans>0)&&bt.jsxs("div",{className:"mb-6 bg-gradient-to-r from-amber-900/40 to-stone-900 border-2 border-amber-500/30 rounded-2xl p-4 sm:p-6 shadow-[0_0_20px_rgba(245,158,11,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4",children:[bt.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto",children:[bt.jsx("div",{className:"p-4 rounded-xl bg-amber-500/20 border-2 border-amber-500/50 text-amber-400 shrink-0",children:bt.jsx(Vd,{className:"w-8 h-8"})}),bt.jsxs("div",{children:[bt.jsx("h3",{className:"text-lg font-black text-amber-400 tracking-wide",children:"Franchise Shop (Prestige)"}),bt.jsxs("p",{className:"text-sm text-stone-400 font-medium",children:["Sell this location to earn ",bt.jsx("span",{className:"text-amber-500 font-bold",children:"Golden Beans"}),". Each bean gives +50% permanent profit!"]}),bt.jsxs("p",{className:"text-xs text-stone-500 mt-1",children:["Next bean at ",Et(Math.pow(ct+1,2)*1e3)," total earned."]})]})]}),bt.jsxs("button",{onClick:()=>h(!0),disabled:ct<=0,className:`w-full sm:w-auto px-6 py-4 rounded-xl font-black tracking-widest transition-all shrink-0 ${ct>0?"bg-amber-600 hover:bg-amber-500 text-stone-900 shadow-[0_0_15px_rgba(245,158,11,0.4)] active:scale-95":"bg-stone-900 text-stone-600 border border-stone-800 cursor-not-allowed"}`,children:["FRANCHISE (+",ct," BEANS)"]})]}),bt.jsx("div",{className:"grid gap-4",children:Object.entries(kd).map(([C,H])=>{const lt=Math.floor(H.baseCost*Math.pow(H.costMultiplier,o[H.id]||0)),K=o[H.id]||0,yt=H.maxLevel!==null&&K>=H.maxLevel,$=o.money>=lt&&!yt,gt=H.icon,xt=K>0?Math.floor(H.baseCost*Math.pow(H.costMultiplier,K-1)*.5):0;return bt.jsxs("div",{className:`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border-2 transition-all ${$?"bg-indigo-900/20 border-indigo-500/50 hover:bg-indigo-900/40":"bg-stone-950 border-stone-800"}`,children:[bt.jsxs("div",{className:"flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto",children:[bt.jsx("div",{className:`p-4 rounded-xl border-2 shrink-0 ${$?"bg-indigo-950 border-indigo-500 text-indigo-400":"bg-stone-900 border-stone-800 text-stone-600"}`,children:bt.jsx(gt,{className:"w-8 h-8"})}),bt.jsxs("div",{children:[bt.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[bt.jsx("h3",{className:`text-lg font-black ${$?"text-white":"text-stone-400"}`,children:H.name}),bt.jsxs("span",{className:"text-xs font-black px-2 py-0.5 rounded-md bg-black border border-stone-700 text-stone-400 shrink-0",children:["LVL ",K,H.maxLevel?`/${H.maxLevel}`:""]})]}),bt.jsx("p",{className:"text-sm text-stone-500 font-medium",children:H.description})]})]}),bt.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0 mt-2 sm:mt-0",children:[K>0&&bt.jsxs("button",{onClick:()=>vt(C),className:"w-full sm:w-auto px-4 py-3 rounded-xl font-black tracking-widest transition-all bg-red-950/50 hover:bg-red-900 text-red-400 border border-red-900/50 active:scale-95 text-xs sm:text-sm shadow-[0_0_10px_rgba(220,38,38,0.1)]",children:["SELL (+",Et(xt),")"]}),bt.jsx("button",{onClick:()=>ot(C),disabled:!$,className:`w-full sm:w-auto px-6 py-4 sm:py-3 rounded-xl font-black tracking-widest transition-all ${yt?"bg-stone-900 text-stone-600 border border-stone-800 cursor-not-allowed":$?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] active:scale-95":"bg-stone-900 text-stone-600 border border-stone-800 cursor-not-allowed"}`,children:yt?"MAXIMUM":Et(lt)})]})]},C)})})]}),bt.jsxs("div",{className:"bg-stone-950 p-4 border-t border-stone-800 flex justify-between items-center text-xs font-bold text-stone-500",children:[bt.jsx("span",{children:"SYSTEM ONLINE"}),bt.jsxs("span",{children:["Available Funds: ",bt.jsx("span",{className:"text-emerald-500",children:Et(o.money)})]})]})]})}),d&&bt.jsx("div",{className:"absolute inset-0 z-[110] bg-black/80 flex items-center justify-center p-4 pointer-events-auto",children:bt.jsxs("div",{className:"bg-stone-900 border border-stone-700 p-6 rounded-2xl shadow-2xl max-w-sm text-center animate-[popIn_0.2s_ease-out]",children:[bt.jsx("h2",{className:"text-xl font-black text-red-500 mb-2",children:"Demolish Shop?"}),bt.jsx("p",{className:"text-stone-300 mb-6 font-medium",children:"Are you sure you want to fire everyone and lose all your progress? This cannot be undone!"}),bt.jsxs("div",{className:"flex justify-center gap-4",children:[bt.jsx("button",{onClick:()=>p(!1),className:"px-6 py-2 bg-stone-700 hover:bg-stone-600 rounded-xl font-black text-white transition-colors",children:"Cancel"}),bt.jsx("button",{onClick:dt,className:"px-6 py-2 bg-red-600 hover:bg-red-500 rounded-xl font-black text-white transition-colors shadow-lg",children:"Demolish"})]})]})}),m&&bt.jsx("div",{className:"absolute inset-0 z-[120] bg-black/80 flex items-center justify-center p-4 pointer-events-auto backdrop-blur-sm",children:bt.jsxs("div",{className:"bg-stone-900 border-2 border-amber-500/50 p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.2)] max-w-md text-center animate-[popIn_0.3s_ease-out]",children:[bt.jsx("div",{className:"mx-auto w-16 h-16 bg-amber-500/20 border border-amber-500/50 rounded-2xl flex items-center justify-center mb-4",children:bt.jsx(Vd,{className:"w-8 h-8 text-amber-400"})}),bt.jsx("h2",{className:"text-2xl font-black text-amber-400 mb-2",children:"Franchise Your Shop"}),bt.jsxs("p",{className:"text-stone-300 mb-6 font-medium",children:["You will sell your current shop and lose all money, beans, and upgrades. In exchange, you will earn ",bt.jsxs("span",{className:"text-amber-500 font-bold text-lg",children:[ct," Golden Beans"]}),".",bt.jsx("br",{}),bt.jsx("br",{}),"Your new multiplier will be ",bt.jsxs("span",{className:"text-emerald-400 font-bold text-lg",children:[((Z+ct*.5)*100).toFixed(0),"%"]}),"!"]}),bt.jsxs("div",{className:"flex justify-center gap-4",children:[bt.jsx("button",{onClick:()=>h(!1),className:"px-6 py-3 bg-stone-800 hover:bg-stone-700 rounded-xl font-black text-white transition-colors flex-1",children:"Keep Playing"}),bt.jsx("button",{onClick:q,className:"px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-900 rounded-xl font-black transition-colors shadow-[0_0_15px_rgba(245,158,11,0.4)] flex-1",children:"Franchise Now"})]})]})}),bt.jsx("style",{children:`
        @keyframes walkUp {
          from { transform: translateY(50px) scale(0.8); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(-80px) scale(1); opacity: 0; }
        }
        @keyframes popIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `})]})}VS.createRoot(document.getElementById("root")).render(bt.jsx(PS.StrictMode,{children:bt.jsx(UA,{})}));
