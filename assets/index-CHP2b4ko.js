(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function tb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var op={exports:{}},du={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE;function sR(){if(WE)return du;WE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var d=null;if(u!==void 0&&(d=""+u),o.key!==void 0&&(d=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:d,ref:o!==void 0?o:null,props:u}}return du.Fragment=e,du.jsx=t,du.jsxs=t,du}var JE;function aR(){return JE||(JE=1,op.exports=sR()),op.exports}var w=aR(),lp={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE;function oR(){if(ZE)return be;ZE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),R=Symbol.iterator;function q(M){return M===null||typeof M!="object"?null:(M=R&&M[R]||M["@@iterator"],typeof M=="function"?M:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ee=Object.assign,Z={};function ce(M,X,re){this.props=M,this.context=X,this.refs=Z,this.updater=re||Y}ce.prototype.isReactComponent={},ce.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},ce.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function fe(){}fe.prototype=ce.prototype;function ue(M,X,re){this.props=M,this.context=X,this.refs=Z,this.updater=re||Y}var ye=ue.prototype=new fe;ye.constructor=ue,ee(ye,ce.prototype),ye.isPureReactComponent=!0;var Ce=Array.isArray;function J(){}var I={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(M,X,re){var oe=re.ref;return{$$typeof:i,type:M,key:X,ref:oe!==void 0?oe:null,props:re}}function D(M,X){return C(M.type,X,M.props)}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===i}function V(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return X[re]})}var N=/\/+/g;function nt(M,X){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):X.toString(36)}function vt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(J,J):(M.status="pending",M.then(function(X){M.status==="pending"&&(M.status="fulfilled",M.value=X)},function(X){M.status==="pending"&&(M.status="rejected",M.reason=X)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function j(M,X,re,oe,Ee){var Re=typeof M;(Re==="undefined"||Re==="boolean")&&(M=null);var Ue=!1;if(M===null)Ue=!0;else switch(Re){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(M.$$typeof){case i:case e:Ue=!0;break;case v:return Ue=M._init,j(Ue(M._payload),X,re,oe,Ee)}}if(Ue)return Ee=Ee(M),Ue=oe===""?"."+nt(M,0):oe,Ce(Ee)?(re="",Ue!=null&&(re=Ue.replace(N,"$&/")+"/"),j(Ee,X,re,"",function(Vs){return Vs})):Ee!=null&&(O(Ee)&&(Ee=D(Ee,re+(Ee.key==null||M&&M.key===Ee.key?"":(""+Ee.key).replace(N,"$&/")+"/")+Ue)),X.push(Ee)),1;Ue=0;var zt=oe===""?".":oe+":";if(Ce(M))for(var ut=0;ut<M.length;ut++)oe=M[ut],Re=zt+nt(oe,ut),Ue+=j(oe,X,re,Re,Ee);else if(ut=q(M),typeof ut=="function")for(M=ut.call(M),ut=0;!(oe=M.next()).done;)oe=oe.value,Re=zt+nt(oe,ut++),Ue+=j(oe,X,re,Re,Ee);else if(Re==="object"){if(typeof M.then=="function")return j(vt(M),X,re,oe,Ee);throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function ne(M,X,re){if(M==null)return M;var oe=[],Ee=0;return j(M,oe,"","",function(Re){return X.call(re,Re,Ee++)}),oe}function he(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var ze=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Ye={map:ne,forEach:function(M,X,re){ne(M,function(){X.apply(this,arguments)},re)},count:function(M){var X=0;return ne(M,function(){X++}),X},toArray:function(M){return ne(M,function(X){return X})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return be.Activity=T,be.Children=Ye,be.Component=ce,be.Fragment=t,be.Profiler=o,be.PureComponent=ue,be.StrictMode=s,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,be.__COMPILER_RUNTIME={__proto__:null,c:function(M){return I.H.useMemoCache(M)}},be.cache=function(M){return function(){return M.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(M,X,re){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=ee({},M.props),Ee=M.key;if(X!=null)for(Re in X.key!==void 0&&(Ee=""+X.key),X)!S.call(X,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&X.ref===void 0||(oe[Re]=X[Re]);var Re=arguments.length-2;if(Re===1)oe.children=re;else if(1<Re){for(var Ue=Array(Re),zt=0;zt<Re;zt++)Ue[zt]=arguments[zt+2];oe.children=Ue}return C(M.type,Ee,oe)},be.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},be.createElement=function(M,X,re){var oe,Ee={},Re=null;if(X!=null)for(oe in X.key!==void 0&&(Re=""+X.key),X)S.call(X,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(Ee[oe]=X[oe]);var Ue=arguments.length-2;if(Ue===1)Ee.children=re;else if(1<Ue){for(var zt=Array(Ue),ut=0;ut<Ue;ut++)zt[ut]=arguments[ut+2];Ee.children=zt}if(M&&M.defaultProps)for(oe in Ue=M.defaultProps,Ue)Ee[oe]===void 0&&(Ee[oe]=Ue[oe]);return C(M,Re,Ee)},be.createRef=function(){return{current:null}},be.forwardRef=function(M){return{$$typeof:m,render:M}},be.isValidElement=O,be.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:he}},be.memo=function(M,X){return{$$typeof:y,type:M,compare:X===void 0?null:X}},be.startTransition=function(M){var X=I.T,re={};I.T=re;try{var oe=M(),Ee=I.S;Ee!==null&&Ee(re,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(J,ze)}catch(Re){ze(Re)}finally{X!==null&&re.types!==null&&(X.types=re.types),I.T=X}},be.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},be.use=function(M){return I.H.use(M)},be.useActionState=function(M,X,re){return I.H.useActionState(M,X,re)},be.useCallback=function(M,X){return I.H.useCallback(M,X)},be.useContext=function(M){return I.H.useContext(M)},be.useDebugValue=function(){},be.useDeferredValue=function(M,X){return I.H.useDeferredValue(M,X)},be.useEffect=function(M,X){return I.H.useEffect(M,X)},be.useEffectEvent=function(M){return I.H.useEffectEvent(M)},be.useId=function(){return I.H.useId()},be.useImperativeHandle=function(M,X,re){return I.H.useImperativeHandle(M,X,re)},be.useInsertionEffect=function(M,X){return I.H.useInsertionEffect(M,X)},be.useLayoutEffect=function(M,X){return I.H.useLayoutEffect(M,X)},be.useMemo=function(M,X){return I.H.useMemo(M,X)},be.useOptimistic=function(M,X){return I.H.useOptimistic(M,X)},be.useReducer=function(M,X,re){return I.H.useReducer(M,X,re)},be.useRef=function(M){return I.H.useRef(M)},be.useState=function(M){return I.H.useState(M)},be.useSyncExternalStore=function(M,X,re){return I.H.useSyncExternalStore(M,X,re)},be.useTransition=function(){return I.H.useTransition()},be.version="19.2.4",be}var eT;function ug(){return eT||(eT=1,lp.exports=oR()),lp.exports}var He=ug();const lR=tb(He);var up={exports:{}},fu={},cp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT;function uR(){return tT||(tT=1,(function(i){function e(j,ne){var he=j.length;j.push(ne);e:for(;0<he;){var ze=he-1>>>1,Ye=j[ze];if(0<o(Ye,ne))j[ze]=ne,j[he]=Ye,he=ze;else break e}}function t(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var ne=j[0],he=j.pop();if(he!==ne){j[0]=he;e:for(var ze=0,Ye=j.length,M=Ye>>>1;ze<M;){var X=2*(ze+1)-1,re=j[X],oe=X+1,Ee=j[oe];if(0>o(re,he))oe<Ye&&0>o(Ee,re)?(j[ze]=Ee,j[oe]=he,ze=oe):(j[ze]=re,j[X]=he,ze=X);else if(oe<Ye&&0>o(Ee,he))j[ze]=Ee,j[oe]=he,ze=oe;else break e}}return ne}function o(j,ne){var he=j.sortIndex-ne.sortIndex;return he!==0?he:j.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var d=Date,m=d.now();i.unstable_now=function(){return d.now()-m}}var p=[],y=[],v=1,T=null,R=3,q=!1,Y=!1,ee=!1,Z=!1,ce=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function ye(j){for(var ne=t(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=j)s(y),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(y)}}function Ce(j){if(ee=!1,ye(j),!Y)if(t(p)!==null)Y=!0,J||(J=!0,V());else{var ne=t(y);ne!==null&&vt(Ce,ne.startTime-j)}}var J=!1,I=-1,S=5,C=-1;function D(){return Z?!0:!(i.unstable_now()-C<S)}function O(){if(Z=!1,J){var j=i.unstable_now();C=j;var ne=!0;try{e:{Y=!1,ee&&(ee=!1,fe(I),I=-1),q=!0;var he=R;try{t:{for(ye(j),T=t(p);T!==null&&!(T.expirationTime>j&&D());){var ze=T.callback;if(typeof ze=="function"){T.callback=null,R=T.priorityLevel;var Ye=ze(T.expirationTime<=j);if(j=i.unstable_now(),typeof Ye=="function"){T.callback=Ye,ye(j),ne=!0;break t}T===t(p)&&s(p),ye(j)}else s(p);T=t(p)}if(T!==null)ne=!0;else{var M=t(y);M!==null&&vt(Ce,M.startTime-j),ne=!1}}break e}finally{T=null,R=he,q=!1}ne=void 0}}finally{ne?V():J=!1}}}var V;if(typeof ue=="function")V=function(){ue(O)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,nt=N.port2;N.port1.onmessage=O,V=function(){nt.postMessage(null)}}else V=function(){ce(O,0)};function vt(j,ne){I=ce(function(){j(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(j){j.callback=null},i.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<j?Math.floor(1e3/j):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_next=function(j){switch(R){case 1:case 2:case 3:var ne=3;break;default:ne=R}var he=R;R=ne;try{return j()}finally{R=he}},i.unstable_requestPaint=function(){Z=!0},i.unstable_runWithPriority=function(j,ne){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var he=R;R=j;try{return ne()}finally{R=he}},i.unstable_scheduleCallback=function(j,ne,he){var ze=i.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?ze+he:ze):he=ze,j){case 1:var Ye=-1;break;case 2:Ye=250;break;case 5:Ye=1073741823;break;case 4:Ye=1e4;break;default:Ye=5e3}return Ye=he+Ye,j={id:v++,callback:ne,priorityLevel:j,startTime:he,expirationTime:Ye,sortIndex:-1},he>ze?(j.sortIndex=he,e(y,j),t(p)===null&&j===t(y)&&(ee?(fe(I),I=-1):ee=!0,vt(Ce,he-ze))):(j.sortIndex=Ye,e(p,j),Y||q||(Y=!0,J||(J=!0,V()))),j},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(j){var ne=R;return function(){var he=R;R=ne;try{return j.apply(this,arguments)}finally{R=he}}}})(hp)),hp}var nT;function cR(){return nT||(nT=1,cp.exports=uR()),cp.exports}var dp={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT;function hR(){if(iT)return on;iT=1;var i=ug();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:p,containerInfo:y,implementation:v}}var d=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(p,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,v)},on.flushSync=function(p){var y=d.T,v=s.p;try{if(d.T=null,s.p=2,p)return p()}finally{d.T=y,s.p=v,s.d.f()}},on.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},on.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},on.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var v=y.as,T=m(v,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:q}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:R,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},on.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},on.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,T=m(v,y.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},on.preloadModule=function(p,y){if(typeof p=="string")if(y){var v=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},on.requestFormReset=function(p){s.d.r(p)},on.unstable_batchedUpdates=function(p,y){return p(y)},on.useFormState=function(p,y,v){return d.H.useFormState(p,y,v)},on.useFormStatus=function(){return d.H.useHostTransitionStatus()},on.version="19.2.4",on}var rT;function dR(){if(rT)return dp.exports;rT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dp.exports=hR(),dp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sT;function fR(){if(sT)return fu;sT=1;var i=cR(),e=ug(),t=dR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function d(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function y(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return p(h),n;if(f===l)return p(h),r;f=f.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=f;else{for(var _=!1,b=h.child;b;){if(b===a){_=!0,a=h,l=f;break}if(b===l){_=!0,l=h,a=f;break}b=b.sibling}if(!_){for(b=f.child;b;){if(b===a){_=!0,a=f,l=h;break}if(b===l){_=!0,l=f,a=h;break}b=b.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function v(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=v(n),r!==null)return r;n=n.sibling}return null}var T=Object.assign,R=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),fe=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function nt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ee:return"Fragment";case ce:return"Profiler";case Z:return"StrictMode";case Ce:return"Suspense";case J:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Y:return"Portal";case ue:return n.displayName||"Context";case fe:return(n._context.displayName||"Context")+".Consumer";case ye:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return r=n.displayName||null,r!==null?r:nt(n.type)||"Memo";case S:r=n._payload,n=n._init;try{return nt(n(r))}catch{}}return null}var vt=Array.isArray,j=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},ze=[],Ye=-1;function M(n){return{current:n}}function X(n){0>Ye||(n.current=ze[Ye],ze[Ye]=null,Ye--)}function re(n,r){Ye++,ze[Ye]=n.current,n.current=r}var oe=M(null),Ee=M(null),Re=M(null),Ue=M(null);function zt(n,r){switch(re(Re,r),re(Ee,n),re(oe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?EE(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=EE(r),n=TE(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}X(oe),re(oe,n)}function ut(){X(oe),X(Ee),X(Re)}function Vs(n){n.memoizedState!==null&&re(Ue,n);var r=oe.current,a=TE(r,n.type);r!==a&&(re(Ee,n),re(oe,a))}function Oa(n){Ee.current===n&&(X(oe),X(Ee)),Ue.current===n&&(X(Ue),lu._currentValue=he)}var ka,Ma;function bi(n){if(ka===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ka=r&&r[1]||"",Ma=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ka+n+Ma}var ll=!1;function Us(n,r){if(!n||ll)return"";ll=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(F){var B=F}Reflect.construct(n,[],Q)}else{try{Q.call()}catch(F){B=F}n.call(Q.prototype)}}else{try{throw Error()}catch(F){B=F}(Q=n())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),_=f[0],b=f[1];if(_&&b){var x=_.split(`
`),z=b.split(`
`);for(h=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===x.length||h===z.length)for(l=x.length-1,h=z.length-1;1<=l&&0<=h&&x[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(x[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||x[l]!==z[h]){var G=`
`+x[l].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=l&&0<=h);break}}}finally{ll=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?bi(a):""}function ul(n,r){switch(n.tag){case 26:case 27:case 5:return bi(n.type);case 16:return bi("Lazy");case 13:return n.child!==r&&r!==null?bi("Suspense Fallback"):bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return Us(n.type,!1);case 11:return Us(n.type.render,!1);case 1:return Us(n.type,!0);case 31:return bi("Activity");default:return""}}function cl(n){try{var r="",a=null;do r+=ul(n,a),a=n,n=n.return;while(n);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var St=Object.prototype.hasOwnProperty,jt=i.unstable_scheduleCallback,Vr=i.unstable_cancelCallback,uf=i.unstable_shouldYield,dc=i.unstable_requestPaint,fn=i.unstable_now,Ls=i.unstable_getCurrentPriorityLevel,hl=i.unstable_ImmediatePriority,dl=i.unstable_UserBlockingPriority,Ur=i.unstable_NormalPriority,cf=i.unstable_LowPriority,fc=i.unstable_IdlePriority,mc=i.log,pc=i.unstable_setDisableYieldValue,ri=null,Xt=null;function qn(n){if(typeof mc=="function"&&pc(n),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(ri,n)}catch{}}var Et=Math.clz32?Math.clz32:yc,gc=Math.log,Pa=Math.LN2;function yc(n){return n>>>=0,n===0?32:31-(gc(n)/Pa|0)|0}var Ai=256,zs=262144,Rt=4194304;function wi(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Si(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var h=0,f=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?h=wi(l):(_&=b,_!==0?h=wi(_):a||(a=b&~n,a!==0&&(h=wi(a))))):(b=l&~f,b!==0?h=wi(b):_!==0?h=wi(_):a||(a=l&~n,a!==0&&(h=wi(a)))),h===0?0:r!==0&&r!==h&&(r&f)===0&&(f=h&-h,a=r&-r,f>=a||f===32&&(a&4194048)!==0)?r:h}function si(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function hf(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _c(){var n=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),n}function Ri(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function js(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function df(n,r,a,l,h,f){var _=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var b=n.entanglements,x=n.expirationTimes,z=n.hiddenUpdates;for(a=_&~a;0<a;){var G=31-Et(a),Q=1<<G;b[G]=0,x[G]=-1;var B=z[G];if(B!==null)for(z[G]=null,G=0;G<B.length;G++){var F=B[G];F!==null&&(F.lane&=-536870913)}a&=~Q}l!==0&&Bs(n,l,0),f!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=f&~(_&~r))}function Bs(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Et(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&261930}function fl(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Et(a),h=1<<l;h&r|n[l]&r&&(n[l]|=r),a&=~h}}function ml(n,r){var a=r&-r;return a=(a&42)!==0?1:qs(a),(a&(n.suspendedLanes|r))!==0?0:a}function qs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function rr(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function vc(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:FE(n.type))}function ai(n,r){var a=ne.p;try{return ne.p=n,r()}finally{ne.p=a}}var oi=Math.random().toString(36).slice(2),It="__reactFiber$"+oi,Gt="__reactProps$"+oi,Ii="__reactContainer$"+oi,Va="__reactEvents$"+oi,ff="__reactListeners$"+oi,Ec="__reactHandles$"+oi,Tc="__reactResources$"+oi,Ci="__reactMarker$"+oi;function Ua(n){delete n[It],delete n[Gt],delete n[Va],delete n[ff],delete n[Ec]}function Ni(n){var r=n[It];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ii]||a[It]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=CE(n);n!==null;){if(a=n[It])return a;n=CE(n)}return r}n=a,a=n.parentNode}return null}function Hn(n){if(n=n[It]||n[Ii]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Cn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function xi(n){var r=n[Tc];return r||(r=n[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ct(n){n[Ci]=!0}var pl=new Set,gl={};function Di(n,r){Oi(n,r),Oi(n+"Capture",r)}function Oi(n,r){for(gl[n]=r,n=0;n<r.length;n++)pl.add(r[n])}var yl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_l={},vl={};function bc(n){return St.call(vl,n)?!0:St.call(_l,n)?!1:yl.test(n)?vl[n]=!0:(_l[n]=!0,!1)}function La(n,r,a){if(bc(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function Nn(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Nt(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}function Kt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Lr(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function El(n,r,a){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,f=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qe(n){if(!n._valueTracker){var r=Lr(n)?"checked":"value";n._valueTracker=El(n,r,""+n[r])}}function Hs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=Lr(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function ki(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Fs=/[\n"\\]/g;function _n(n){return n.replace(Fs,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function za(n,r,a,l,h,f,_,b){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),r!=null?_==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Kt(r)):n.value!==""+Kt(r)&&(n.value=""+Kt(r)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),r!=null?Tl(n,_,Kt(r)):a!=null?Tl(n,_,Kt(a)):l!=null&&n.removeAttribute("value"),h==null&&f!=null&&(n.defaultChecked=!!f),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+Kt(b):n.removeAttribute("name")}function Ac(n,r,a,l,h,f,_,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(n.type=f),r!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||r!=null)){Qe(n);return}a=a!=null?""+Kt(a):"",r=r!=null?""+Kt(r):a,b||r===n.value||(n.value=r),n.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=b?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_),Qe(n)}function Tl(n,r,a){r==="number"&&ki(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function zr(n,r,a,l){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&l&&(n[a].defaultSelected=!0)}else{for(a=""+Kt(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function wc(n,r,a){if(r!=null&&(r=""+Kt(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+Kt(a):""}function jr(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(vt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=Kt(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l),Qe(n)}function vn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Sc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bl(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||Sc.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Al(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&bl(n,h,l)}else for(var f in r)r.hasOwnProperty(f)&&bl(n,f,r[f])}function ja(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Br=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ba(n){return Br.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function li(){}var wl=null;function Fn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var qr=null,Mi=null;function Gs(n){var r=Hn(n);if(r&&(n=r.stateNode)){var a=n[Gt]||null;e:switch(n=r.stateNode,r.type){case"input":if(za(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var h=l[Gt]||null;if(!h)throw Error(s(90));za(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&Hs(l)}break e;case"textarea":wc(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&zr(n,!!a.multiple,r,!1)}}}var qa=!1;function Hr(n,r,a){if(qa)return n(r,a);qa=!0;try{var l=n(r);return l}finally{if(qa=!1,(qr!==null||Mi!==null)&&(vh(),qr&&(r=qr,n=Mi,Mi=qr=null,Gs(r),n)))for(r=0;r<n.length;r++)Gs(n[r])}}function ui(n,r){var a=n.stateNode;if(a===null)return null;var l=a[Gt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=!1;if(Gn)try{var We={};Object.defineProperty(We,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch{Ks=!1}var Pi=null,Sl=null,Ys=null;function Rl(){if(Ys)return Ys;var n,r=Sl,a=r.length,l,h="value"in Pi?Pi.value:Pi.textContent,f=h.length;for(n=0;n<a&&r[n]===h[n];n++);var _=a-n;for(l=1;l<=_&&r[a-l]===h[f-l];l++);return Ys=h.slice(n,1<l?1-l:void 0)}function Qs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function sr(){return!0}function ci(){return!1}function Wt(n){function r(a,l,h,f,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(a=n[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sr:ci,this.isPropagationStopped=ci,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),r}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Wt(ar),Fr=T({},ar,{view:0,detail:0}),Il=Wt(Fr),Gr,Ha,Ui,Fa=T({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ui&&(Ui&&n.type==="mousemove"?(Gr=n.screenX-Ui.screenX,Ha=n.screenY-Ui.screenY):Ha=Gr=0,Ui=n),Gr)},movementY:function(n){return"movementY"in n?n.movementY:Ha}}),Cl=Wt(Fa),$s=T({},Fa,{dataTransfer:0}),Ic=Wt($s),Cc=T({},Fr,{relatedTarget:0}),Xs=Wt(Cc),Nl=T({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Nc=Wt(Nl),Ga=T({},ar,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xc=Wt(Ga),Dc=T({},ar,{data:0}),Li=Wt(Dc),Oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pc(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Mc[n])?!!r[n]:!1}function Kr(){return Pc}var mn=T({},Fr,{key:function(n){if(n.key){var r=Oc[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kr,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vc=Wt(mn),Uc=T({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),or=Wt(Uc),c=T({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kr}),g=Wt(c),E=T({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Wt(E),U=T({},Fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H=Wt(U),ie=T({},ar,{newState:0,oldState:0}),we=Wt(ie),Tt=[9,13,27,32],Fe=Gn&&"CompositionEvent"in window,ct=null;Gn&&"documentMode"in document&&(ct=document.documentMode);var Kn=Gn&&"TextEvent"in window&&!ct,zi=Gn&&(!Fe||ct&&8<ct&&11>=ct),hi=" ",di=!1;function Ws(n,r){switch(n){case"keyup":return Tt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ka(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ya=!1;function NS(n,r){switch(n){case"compositionend":return Ka(r);case"keypress":return r.which!==32?null:(di=!0,hi);case"textInput":return n=r.data,n===hi&&di?null:n;default:return null}}function xS(n,r){if(Ya)return n==="compositionend"||!Fe&&Ws(n,r)?(n=Rl(),Ys=Sl=Pi=null,Ya=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zi&&r.locale!=="ko"?null:r.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dy(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!DS[n.type]:r==="textarea"}function Oy(n,r,a,l){qr?Mi?Mi.push(l):Mi=[l]:qr=l,r=Rh(r,"onChange"),0<r.length&&(a=new Vi("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var xl=null,Dl=null;function OS(n){mE(n,0)}function Lc(n){var r=Cn(n);if(Hs(r))return n}function ky(n,r){if(n==="change")return r}var My=!1;if(Gn){var mf;if(Gn){var pf="oninput"in document;if(!pf){var Py=document.createElement("div");Py.setAttribute("oninput","return;"),pf=typeof Py.oninput=="function"}mf=pf}else mf=!1;My=mf&&(!document.documentMode||9<document.documentMode)}function Vy(){xl&&(xl.detachEvent("onpropertychange",Uy),Dl=xl=null)}function Uy(n){if(n.propertyName==="value"&&Lc(Dl)){var r=[];Oy(r,Dl,n,Fn(n)),Hr(OS,r)}}function kS(n,r,a){n==="focusin"?(Vy(),xl=r,Dl=a,xl.attachEvent("onpropertychange",Uy)):n==="focusout"&&Vy()}function MS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lc(Dl)}function PS(n,r){if(n==="click")return Lc(r)}function VS(n,r){if(n==="input"||n==="change")return Lc(r)}function US(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:US;function Ol(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!St.call(r,h)||!xn(n[h],r[h]))return!1}return!0}function Ly(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zy(n,r){var a=Ly(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ly(a)}}function jy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?jy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function By(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ki(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ki(n.document)}return r}function gf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var LS=Gn&&"documentMode"in document&&11>=document.documentMode,Qa=null,yf=null,kl=null,_f=!1;function qy(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||Qa==null||Qa!==ki(l)||(l=Qa,"selectionStart"in l&&gf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),kl&&Ol(kl,l)||(kl=l,l=Rh(yf,"onSelect"),0<l.length&&(r=new Vi("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Qa)))}function Js(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var $a={animationend:Js("Animation","AnimationEnd"),animationiteration:Js("Animation","AnimationIteration"),animationstart:Js("Animation","AnimationStart"),transitionrun:Js("Transition","TransitionRun"),transitionstart:Js("Transition","TransitionStart"),transitioncancel:Js("Transition","TransitionCancel"),transitionend:Js("Transition","TransitionEnd")},vf={},Hy={};Gn&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function Zs(n){if(vf[n])return vf[n];if(!$a[n])return n;var r=$a[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Hy)return vf[n]=r[a];return n}var Fy=Zs("animationend"),Gy=Zs("animationiteration"),Ky=Zs("animationstart"),zS=Zs("transitionrun"),jS=Zs("transitionstart"),BS=Zs("transitioncancel"),Yy=Zs("transitionend"),Qy=new Map,Ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ef.push("scrollEnd");function fi(n,r){Qy.set(n,r),Di(r,[n])}var zc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Yn=[],Xa=0,Tf=0;function jc(){for(var n=Xa,r=Tf=Xa=0;r<n;){var a=Yn[r];Yn[r++]=null;var l=Yn[r];Yn[r++]=null;var h=Yn[r];Yn[r++]=null;var f=Yn[r];if(Yn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}f!==0&&$y(a,h,f)}}function Bc(n,r,a,l){Yn[Xa++]=n,Yn[Xa++]=r,Yn[Xa++]=a,Yn[Xa++]=l,Tf|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function bf(n,r,a,l){return Bc(n,r,a,l),qc(n)}function ea(n,r){return Bc(n,null,null,r),qc(n)}function $y(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var h=!1,f=n.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(n=f.stateNode,n===null||n._visibility&1||(h=!0)),n=f,f=f.return;return n.tag===3?(f=n.stateNode,h&&r!==null&&(h=31-Et(a),n=f.hiddenUpdates,l=n[h],l===null?n[h]=[r]:l.push(r),r.lane=a|536870912),f):null}function qc(n){if(50<tu)throw tu=0,Dm=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Wa={};function qS(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,r,a,l){return new qS(n,r,a,l)}function Af(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lr(n,r){var a=n.alternate;return a===null?(a=Dn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Xy(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Hc(n,r,a,l,h,f){var _=0;if(l=n,typeof n=="function")Af(n)&&(_=1);else if(typeof n=="string")_=Y1(n,a,oe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Dn(31,a,r,h),n.elementType=C,n.lanes=f,n;case ee:return ta(a.children,h,f,r);case Z:_=8,h|=24;break;case ce:return n=Dn(12,a,r,h|2),n.elementType=ce,n.lanes=f,n;case Ce:return n=Dn(13,a,r,h),n.elementType=Ce,n.lanes=f,n;case J:return n=Dn(19,a,r,h),n.elementType=J,n.lanes=f,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ue:_=10;break e;case fe:_=9;break e;case ye:_=11;break e;case I:_=14;break e;case S:_=16,l=null;break e}_=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=Dn(_,a,r,h),r.elementType=n,r.type=l,r.lanes=f,r}function ta(n,r,a,l){return n=Dn(7,n,l,r),n.lanes=a,n}function wf(n,r,a){return n=Dn(6,n,null,r),n.lanes=a,n}function Wy(n){var r=Dn(18,null,null,0);return r.stateNode=n,r}function Sf(n,r,a){return r=Dn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Jy=new WeakMap;function Qn(n,r){if(typeof n=="object"&&n!==null){var a=Jy.get(n);return a!==void 0?a:(r={value:n,source:r,stack:cl(r)},Jy.set(n,r),r)}return{value:n,source:r,stack:cl(r)}}var Ja=[],Za=0,Fc=null,Ml=0,$n=[],Xn=0,Yr=null,ji=1,Bi="";function ur(n,r){Ja[Za++]=Ml,Ja[Za++]=Fc,Fc=n,Ml=r}function Zy(n,r,a){$n[Xn++]=ji,$n[Xn++]=Bi,$n[Xn++]=Yr,Yr=n;var l=ji;n=Bi;var h=32-Et(l)-1;l&=~(1<<h),a+=1;var f=32-Et(r)+h;if(30<f){var _=h-h%5;f=(l&(1<<_)-1).toString(32),l>>=_,h-=_,ji=1<<32-Et(r)+h|a<<h|l,Bi=f+n}else ji=1<<f|a<<h|l,Bi=n}function Rf(n){n.return!==null&&(ur(n,1),Zy(n,1,0))}function If(n){for(;n===Fc;)Fc=Ja[--Za],Ja[Za]=null,Ml=Ja[--Za],Ja[Za]=null;for(;n===Yr;)Yr=$n[--Xn],$n[Xn]=null,Bi=$n[--Xn],$n[Xn]=null,ji=$n[--Xn],$n[Xn]=null}function e_(n,r){$n[Xn++]=ji,$n[Xn++]=Bi,$n[Xn++]=Yr,ji=r.id,Bi=r.overflow,Yr=n}var Jt=null,rt=null,Ve=!1,Qr=null,Wn=!1,Cf=Error(s(519));function $r(n){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pl(Qn(r,n)),Cf}function t_(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[It]=n,r[Gt]=l,a){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(a=0;a<iu.length;a++)xe(iu[a],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Ac(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),jr(r,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||_E(r.textContent,a)?(l.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),l.onScroll!=null&&xe("scroll",r),l.onScrollEnd!=null&&xe("scrollend",r),l.onClick!=null&&(r.onclick=li),r=!0):r=!1,r||$r(n,!0)}function n_(n){for(Jt=n.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:Wn=!1;return;case 27:case 3:Wn=!0;return;default:Jt=Jt.return}}function eo(n){if(n!==Jt)return!1;if(!Ve)return n_(n),Ve=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Km(n.type,n.memoizedProps)),a=!a),a&&rt&&$r(n),n_(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));rt=IE(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));rt=IE(n)}else r===27?(r=rt,us(n.type)?(n=Wm,Wm=null,rt=n):rt=r):rt=Jt?Zn(n.stateNode.nextSibling):null;return!0}function na(){rt=Jt=null,Ve=!1}function Nf(){var n=Qr;return n!==null&&(An===null?An=n:An.push.apply(An,n),Qr=null),n}function Pl(n){Qr===null?Qr=[n]:Qr.push(n)}var xf=M(null),ia=null,cr=null;function Xr(n,r,a){re(xf,r._currentValue),r._currentValue=a}function hr(n){n._currentValue=xf.current,X(xf)}function Df(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function Of(n,r,a,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var f=h.dependencies;if(f!==null){var _=h.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=h;for(var x=0;x<r.length;x++)if(b.context===r[x]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Df(f.return,a,n),l||(_=null);break e}f=b.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Df(_,a,n),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===n){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function to(n,r,a,l){n=null;for(var h=r,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var b=h.type;xn(h.pendingProps.value,_.value)||(n!==null?n.push(b):n=[b])}}else if(h===Ue.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(lu):n=[lu])}h=h.return}n!==null&&Of(r,n,a,l),r.flags|=262144}function Gc(n){for(n=n.firstContext;n!==null;){if(!xn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ra(n){ia=n,cr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zt(n){return i_(ia,n)}function Kc(n,r){return ia===null&&ra(n),i_(n,r)}function i_(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},cr===null){if(n===null)throw Error(s(308));cr=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else cr=cr.next=r;return a}var HS=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},FS=i.unstable_scheduleCallback,GS=i.unstable_NormalPriority,xt={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kf(){return{controller:new HS,data:new Map,refCount:0}}function Vl(n){n.refCount--,n.refCount===0&&FS(GS,function(){n.controller.abort()})}var Ul=null,Mf=0,no=0,io=null;function KS(n,r){if(Ul===null){var a=Ul=[];Mf=0,no=Um(),io={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Mf++,r.then(r_,r_),r}function r_(){if(--Mf===0&&Ul!==null){io!==null&&(io.status="fulfilled");var n=Ul;Ul=null,no=0,io=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function YS(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var s_=j.S;j.S=function(n,r){qv=fn(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&KS(n,r),s_!==null&&s_(n,r)};var sa=M(null);function Pf(){var n=sa.current;return n!==null?n:tt.pooledCache}function Yc(n,r){r===null?re(sa,sa.current):re(sa,r.pool)}function a_(){var n=Pf();return n===null?null:{parent:xt._currentValue,pool:n}}var ro=Error(s(460)),Vf=Error(s(474)),Qc=Error(s(542)),$c={then:function(){}};function o_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function l_(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(li,li),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,c_(n),n;default:if(typeof r.status=="string")r.then(li,li);else{if(n=tt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,c_(n),n}throw oa=r,ro}}function aa(n){try{var r=n._init;return r(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(oa=a,ro):a}}var oa=null;function u_(){if(oa===null)throw Error(s(459));var n=oa;return oa=null,n}function c_(n){if(n===ro||n===Qc)throw Error(s(483))}var so=null,Ll=0;function Xc(n){var r=Ll;return Ll+=1,so===null&&(so=[]),l_(so,n,r)}function zl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Wc(n,r){throw r.$$typeof===R?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function h_(n){function r(P,k){if(n){var L=P.deletions;L===null?(P.deletions=[k],P.flags|=16):L.push(k)}}function a(P,k){if(!n)return null;for(;k!==null;)r(P,k),k=k.sibling;return null}function l(P){for(var k=new Map;P!==null;)P.key!==null?k.set(P.key,P):k.set(P.index,P),P=P.sibling;return k}function h(P,k){return P=lr(P,k),P.index=0,P.sibling=null,P}function f(P,k,L){return P.index=L,n?(L=P.alternate,L!==null?(L=L.index,L<k?(P.flags|=67108866,k):L):(P.flags|=67108866,k)):(P.flags|=1048576,k)}function _(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function b(P,k,L,K){return k===null||k.tag!==6?(k=wf(L,P.mode,K),k.return=P,k):(k=h(k,L),k.return=P,k)}function x(P,k,L,K){var me=L.type;return me===ee?G(P,k,L.props.children,K,L.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===S&&aa(me)===k.type)?(k=h(k,L.props),zl(k,L),k.return=P,k):(k=Hc(L.type,L.key,L.props,null,P.mode,K),zl(k,L),k.return=P,k)}function z(P,k,L,K){return k===null||k.tag!==4||k.stateNode.containerInfo!==L.containerInfo||k.stateNode.implementation!==L.implementation?(k=Sf(L,P.mode,K),k.return=P,k):(k=h(k,L.children||[]),k.return=P,k)}function G(P,k,L,K,me){return k===null||k.tag!==7?(k=ta(L,P.mode,K,me),k.return=P,k):(k=h(k,L),k.return=P,k)}function Q(P,k,L){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wf(""+k,P.mode,L),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case q:return L=Hc(k.type,k.key,k.props,null,P.mode,L),zl(L,k),L.return=P,L;case Y:return k=Sf(k,P.mode,L),k.return=P,k;case S:return k=aa(k),Q(P,k,L)}if(vt(k)||V(k))return k=ta(k,P.mode,L,null),k.return=P,k;if(typeof k.then=="function")return Q(P,Xc(k),L);if(k.$$typeof===ue)return Q(P,Kc(P,k),L);Wc(P,k)}return null}function B(P,k,L,K){var me=k!==null?k.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return me!==null?null:b(P,k,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case q:return L.key===me?x(P,k,L,K):null;case Y:return L.key===me?z(P,k,L,K):null;case S:return L=aa(L),B(P,k,L,K)}if(vt(L)||V(L))return me!==null?null:G(P,k,L,K,null);if(typeof L.then=="function")return B(P,k,Xc(L),K);if(L.$$typeof===ue)return B(P,k,Kc(P,L),K);Wc(P,L)}return null}function F(P,k,L,K,me){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(L)||null,b(k,P,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case q:return P=P.get(K.key===null?L:K.key)||null,x(k,P,K,me);case Y:return P=P.get(K.key===null?L:K.key)||null,z(k,P,K,me);case S:return K=aa(K),F(P,k,L,K,me)}if(vt(K)||V(K))return P=P.get(L)||null,G(k,P,K,me,null);if(typeof K.then=="function")return F(P,k,L,Xc(K),me);if(K.$$typeof===ue)return F(P,k,L,Kc(k,K),me);Wc(k,K)}return null}function le(P,k,L,K){for(var me=null,Be=null,de=k,Ie=k=0,ke=null;de!==null&&Ie<L.length;Ie++){de.index>Ie?(ke=de,de=null):ke=de.sibling;var qe=B(P,de,L[Ie],K);if(qe===null){de===null&&(de=ke);break}n&&de&&qe.alternate===null&&r(P,de),k=f(qe,k,Ie),Be===null?me=qe:Be.sibling=qe,Be=qe,de=ke}if(Ie===L.length)return a(P,de),Ve&&ur(P,Ie),me;if(de===null){for(;Ie<L.length;Ie++)de=Q(P,L[Ie],K),de!==null&&(k=f(de,k,Ie),Be===null?me=de:Be.sibling=de,Be=de);return Ve&&ur(P,Ie),me}for(de=l(de);Ie<L.length;Ie++)ke=F(de,P,Ie,L[Ie],K),ke!==null&&(n&&ke.alternate!==null&&de.delete(ke.key===null?Ie:ke.key),k=f(ke,k,Ie),Be===null?me=ke:Be.sibling=ke,Be=ke);return n&&de.forEach(function(ms){return r(P,ms)}),Ve&&ur(P,Ie),me}function ge(P,k,L,K){if(L==null)throw Error(s(151));for(var me=null,Be=null,de=k,Ie=k=0,ke=null,qe=L.next();de!==null&&!qe.done;Ie++,qe=L.next()){de.index>Ie?(ke=de,de=null):ke=de.sibling;var ms=B(P,de,qe.value,K);if(ms===null){de===null&&(de=ke);break}n&&de&&ms.alternate===null&&r(P,de),k=f(ms,k,Ie),Be===null?me=ms:Be.sibling=ms,Be=ms,de=ke}if(qe.done)return a(P,de),Ve&&ur(P,Ie),me;if(de===null){for(;!qe.done;Ie++,qe=L.next())qe=Q(P,qe.value,K),qe!==null&&(k=f(qe,k,Ie),Be===null?me=qe:Be.sibling=qe,Be=qe);return Ve&&ur(P,Ie),me}for(de=l(de);!qe.done;Ie++,qe=L.next())qe=F(de,P,Ie,qe.value,K),qe!==null&&(n&&qe.alternate!==null&&de.delete(qe.key===null?Ie:qe.key),k=f(qe,k,Ie),Be===null?me=qe:Be.sibling=qe,Be=qe);return n&&de.forEach(function(rR){return r(P,rR)}),Ve&&ur(P,Ie),me}function et(P,k,L,K){if(typeof L=="object"&&L!==null&&L.type===ee&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case q:e:{for(var me=L.key;k!==null;){if(k.key===me){if(me=L.type,me===ee){if(k.tag===7){a(P,k.sibling),K=h(k,L.props.children),K.return=P,P=K;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===S&&aa(me)===k.type){a(P,k.sibling),K=h(k,L.props),zl(K,L),K.return=P,P=K;break e}a(P,k);break}else r(P,k);k=k.sibling}L.type===ee?(K=ta(L.props.children,P.mode,K,L.key),K.return=P,P=K):(K=Hc(L.type,L.key,L.props,null,P.mode,K),zl(K,L),K.return=P,P=K)}return _(P);case Y:e:{for(me=L.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===L.containerInfo&&k.stateNode.implementation===L.implementation){a(P,k.sibling),K=h(k,L.children||[]),K.return=P,P=K;break e}else{a(P,k);break}else r(P,k);k=k.sibling}K=Sf(L,P.mode,K),K.return=P,P=K}return _(P);case S:return L=aa(L),et(P,k,L,K)}if(vt(L))return le(P,k,L,K);if(V(L)){if(me=V(L),typeof me!="function")throw Error(s(150));return L=me.call(L),ge(P,k,L,K)}if(typeof L.then=="function")return et(P,k,Xc(L),K);if(L.$$typeof===ue)return et(P,k,Kc(P,L),K);Wc(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,k!==null&&k.tag===6?(a(P,k.sibling),K=h(k,L),K.return=P,P=K):(a(P,k),K=wf(L,P.mode,K),K.return=P,P=K),_(P)):a(P,k)}return function(P,k,L,K){try{Ll=0;var me=et(P,k,L,K);return so=null,me}catch(de){if(de===ro||de===Qc)throw de;var Be=Dn(29,de,null,P.mode);return Be.lanes=K,Be.return=P,Be}finally{}}}var la=h_(!0),d_=h_(!1),Wr=!1;function Uf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Jr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ge&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=qc(n),$y(n,null,a),r}return Bc(n,l,r,a),qc(n)}function jl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,fl(n,a)}}function zf(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?h=f=r:f=f.next=r}else h=f=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var jf=!1;function Bl(){if(jf){var n=io;if(n!==null)throw n}}function ql(n,r,a,l){jf=!1;var h=n.updateQueue;Wr=!1;var f=h.firstBaseUpdate,_=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var x=b,z=x.next;x.next=null,_===null?f=z:_.next=z,_=x;var G=n.alternate;G!==null&&(G=G.updateQueue,b=G.lastBaseUpdate,b!==_&&(b===null?G.firstBaseUpdate=z:b.next=z,G.lastBaseUpdate=x))}if(f!==null){var Q=h.baseState;_=0,G=z=x=null,b=f;do{var B=b.lane&-536870913,F=B!==b.lane;if(F?(Oe&B)===B:(l&B)===B){B!==0&&B===no&&(jf=!0),G!==null&&(G=G.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var le=n,ge=b;B=r;var et=a;switch(ge.tag){case 1:if(le=ge.payload,typeof le=="function"){Q=le.call(et,Q,B);break e}Q=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ge.payload,B=typeof le=="function"?le.call(et,Q,B):le,B==null)break e;Q=T({},Q,B);break e;case 2:Wr=!0}}B=b.callback,B!==null&&(n.flags|=64,F&&(n.flags|=8192),F=h.callbacks,F===null?h.callbacks=[B]:F.push(B))}else F={lane:B,tag:b.tag,payload:b.payload,callback:b.callback,next:null},G===null?(z=G=F,x=Q):G=G.next=F,_|=B;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;F=b,b=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);G===null&&(x=Q),h.baseState=x,h.firstBaseUpdate=z,h.lastBaseUpdate=G,f===null&&(h.shared.lanes=0),rs|=_,n.lanes=_,n.memoizedState=Q}}function f_(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function m_(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)f_(a[n],r)}var ao=M(null),Jc=M(0);function p_(n,r){n=Er,re(Jc,n),re(ao,r),Er=n|r.baseLanes}function Bf(){re(Jc,Er),re(ao,ao.current)}function qf(){Er=Jc.current,X(ao),X(Jc)}var On=M(null),Jn=null;function es(n){var r=n.alternate;re(bt,bt.current&1),re(On,n),Jn===null&&(r===null||ao.current!==null||r.memoizedState!==null)&&(Jn=n)}function Hf(n){re(bt,bt.current),re(On,n),Jn===null&&(Jn=n)}function g_(n){n.tag===22?(re(bt,bt.current),re(On,n),Jn===null&&(Jn=n)):ts()}function ts(){re(bt,bt.current),re(On,On.current)}function kn(n){X(On),Jn===n&&(Jn=null),X(bt)}var bt=M(0);function Zc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$m(a)||Xm(a)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var dr=0,Se=null,Je=null,Dt=null,eh=!1,oo=!1,ua=!1,th=0,Hl=0,lo=null,QS=0;function pt(){throw Error(s(321))}function Ff(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!xn(n[a],r[a]))return!1;return!0}function Gf(n,r,a,l,h,f){return dr=f,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,j.H=n===null||n.memoizedState===null?Z_:am,ua=!1,f=a(l,h),ua=!1,oo&&(f=__(r,a,l,h)),y_(n),f}function y_(n){j.H=Kl;var r=Je!==null&&Je.next!==null;if(dr=0,Dt=Je=Se=null,eh=!1,Hl=0,lo=null,r)throw Error(s(300));n===null||Ot||(n=n.dependencies,n!==null&&Gc(n)&&(Ot=!0))}function __(n,r,a,l){Se=n;var h=0;do{if(oo&&(lo=null),Hl=0,oo=!1,25<=h)throw Error(s(301));if(h+=1,Dt=Je=null,n.updateQueue!=null){var f=n.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}j.H=ev,f=r(a,l)}while(oo);return f}function $S(){var n=j.H,r=n.useState()[0];return r=typeof r.then=="function"?Fl(r):r,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Se.flags|=1024),r}function Kf(){var n=th!==0;return th=0,n}function Yf(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Qf(n){if(eh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}eh=!1}dr=0,Dt=Je=Se=null,oo=!1,Hl=th=0,lo=null}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Se.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function At(){if(Je===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var r=Dt===null?Se.memoizedState:Dt.next;if(r!==null)Dt=r,Je=n;else{if(n===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Dt===null?Se.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function nh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fl(n){var r=Hl;return Hl+=1,lo===null&&(lo=[]),n=l_(lo,n,r),r=Se,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,j.H=r===null||r.memoizedState===null?Z_:am),n}function ih(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fl(n);if(n.$$typeof===ue)return Zt(n)}throw Error(s(438,String(n)))}function $f(n){var r=null,a=Se.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=nh(),Se.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=D;return r.index++,a}function fr(n,r){return typeof r=="function"?r(n):r}function rh(n){var r=At();return Xf(r,Je,n)}function Xf(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=n.baseQueue,f=l.pending;if(f!==null){if(h!==null){var _=h.next;h.next=f.next,f.next=_}r.baseQueue=h=f,l.pending=null}if(f=n.baseState,h===null)n.memoizedState=f;else{r=h.next;var b=_=null,x=null,z=r,G=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Oe&Q)===Q:(dr&Q)===Q){var B=z.revertLane;if(B===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===no&&(G=!0);else if((dr&B)===B){z=z.next,B===no&&(G=!0);continue}else Q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=Q,_=f):x=x.next=Q,Se.lanes|=B,rs|=B;Q=z.action,ua&&a(f,Q),f=z.hasEagerState?z.eagerState:a(f,Q)}else B={lane:Q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=B,_=f):x=x.next=B,Se.lanes|=Q,rs|=Q;z=z.next}while(z!==null&&z!==r);if(x===null?_=f:x.next=b,!xn(f,n.memoizedState)&&(Ot=!0,G&&(a=io,a!==null)))throw a;n.memoizedState=f,n.baseState=_,n.baseQueue=x,l.lastRenderedState=f}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Wf(n){var r=At(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,h=a.pending,f=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do f=n(f,_.action),_=_.next;while(_!==h);xn(f,r.memoizedState)||(Ot=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,l]}function v_(n,r,a){var l=Se,h=At(),f=Ve;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!xn((Je||h).memoizedState,a);if(_&&(h.memoizedState=a,Ot=!0),h=h.queue,em(b_.bind(null,l,h,n),[n]),h.getSnapshot!==r||_||Dt!==null&&Dt.memoizedState.tag&1){if(l.flags|=2048,uo(9,{destroy:void 0},T_.bind(null,l,h,a,r),null),tt===null)throw Error(s(349));f||(dr&127)!==0||E_(l,r,a)}return a}function E_(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Se.updateQueue,r===null?(r=nh(),Se.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function T_(n,r,a,l){r.value=a,r.getSnapshot=l,A_(r)&&w_(n)}function b_(n,r,a){return a(function(){A_(r)&&w_(n)})}function A_(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!xn(n,a)}catch{return!0}}function w_(n){var r=ea(n,2);r!==null&&wn(r,n,2)}function Jf(n){var r=pn();if(typeof n=="function"){var a=n;if(n=a(),ua){qn(!0);try{a()}finally{qn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:n},r}function S_(n,r,a,l){return n.baseState=a,Xf(n,Je,typeof l=="function"?l:fr)}function XS(n,r,a,l,h){if(oh(n))throw Error(s(485));if(n=r.action,n!==null){var f={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};j.T!==null?a(!0):f.isTransition=!1,l(f),a=r.pending,a===null?(f.next=r.pending=f,R_(r,f)):(f.next=a.next,r.pending=a.next=f)}}function R_(n,r){var a=r.action,l=r.payload,h=n.state;if(r.isTransition){var f=j.T,_={};j.T=_;try{var b=a(h,l),x=j.S;x!==null&&x(_,b),I_(n,r,b)}catch(z){Zf(n,r,z)}finally{f!==null&&_.types!==null&&(f.types=_.types),j.T=f}}else try{f=a(h,l),I_(n,r,f)}catch(z){Zf(n,r,z)}}function I_(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){C_(n,r,l)},function(l){return Zf(n,r,l)}):C_(n,r,a)}function C_(n,r,a){r.status="fulfilled",r.value=a,N_(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,R_(n,a)))}function Zf(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,N_(r),r=r.next;while(r!==l)}n.action=null}function N_(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function x_(n,r){return r}function D_(n,r){if(Ve){var a=tt.formState;if(a!==null){e:{var l=Se;if(Ve){if(rt){t:{for(var h=rt,f=Wn;h.nodeType!==8;){if(!f){h=null;break t}if(h=Zn(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){rt=Zn(h.nextSibling),l=h.data==="F!";break e}}$r(l)}l=!1}l&&(r=a[0])}}return a=pn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x_,lastRenderedState:r},a.queue=l,a=X_.bind(null,Se,l),l.dispatch=a,l=Jf(!1),f=sm.bind(null,Se,!1,l.queue),l=pn(),h={state:r,dispatch:null,action:n,pending:null},l.queue=h,a=XS.bind(null,Se,h,f,a),h.dispatch=a,l.memoizedState=n,[r,a,!1]}function O_(n){var r=At();return k_(r,Je,n)}function k_(n,r,a){if(r=Xf(n,r,x_)[0],n=rh(fr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=Fl(r)}catch(_){throw _===ro?Qc:_}else l=r;r=At();var h=r.queue,f=h.dispatch;return a!==r.memoizedState&&(Se.flags|=2048,uo(9,{destroy:void 0},WS.bind(null,h,a),null)),[l,f,n]}function WS(n,r){n.action=r}function M_(n){var r=At(),a=Je;if(a!==null)return k_(r,a,n);At(),r=r.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function uo(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Se.updateQueue,r===null&&(r=nh(),Se.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function P_(){return At().memoizedState}function sh(n,r,a,l){var h=pn();Se.flags|=n,h.memoizedState=uo(1|r,{destroy:void 0},a,l===void 0?null:l)}function ah(n,r,a,l){var h=At();l=l===void 0?null:l;var f=h.memoizedState.inst;Je!==null&&l!==null&&Ff(l,Je.memoizedState.deps)?h.memoizedState=uo(r,f,a,l):(Se.flags|=n,h.memoizedState=uo(1|r,f,a,l))}function V_(n,r){sh(8390656,8,n,r)}function em(n,r){ah(2048,8,n,r)}function JS(n){Se.flags|=4;var r=Se.updateQueue;if(r===null)r=nh(),Se.updateQueue=r,r.events=[n];else{var a=r.events;a===null?r.events=[n]:a.push(n)}}function U_(n){var r=At().memoizedState;return JS({ref:r,nextImpl:n}),function(){if((Ge&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function L_(n,r){return ah(4,2,n,r)}function z_(n,r){return ah(4,4,n,r)}function j_(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function B_(n,r,a){a=a!=null?a.concat([n]):null,ah(4,4,j_.bind(null,r,n),a)}function tm(){}function q_(n,r){var a=At();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Ff(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function H_(n,r){var a=At();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Ff(r,l[1]))return l[0];if(l=n(),ua){qn(!0);try{n()}finally{qn(!1)}}return a.memoizedState=[l,r],l}function nm(n,r,a){return a===void 0||(dr&1073741824)!==0&&(Oe&261930)===0?n.memoizedState=r:(n.memoizedState=a,n=Fv(),Se.lanes|=n,rs|=n,a)}function F_(n,r,a,l){return xn(a,r)?a:ao.current!==null?(n=nm(n,a,l),xn(n,r)||(Ot=!0),n):(dr&42)===0||(dr&1073741824)!==0&&(Oe&261930)===0?(Ot=!0,n.memoizedState=a):(n=Fv(),Se.lanes|=n,rs|=n,r)}function G_(n,r,a,l,h){var f=ne.p;ne.p=f!==0&&8>f?f:8;var _=j.T,b={};j.T=b,sm(n,!1,r,a);try{var x=h(),z=j.S;if(z!==null&&z(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var G=YS(x,l);Gl(n,r,G,Vn(n))}else Gl(n,r,l,Vn(n))}catch(Q){Gl(n,r,{then:function(){},status:"rejected",reason:Q},Vn())}finally{ne.p=f,_!==null&&b.types!==null&&(_.types=b.types),j.T=_}}function ZS(){}function im(n,r,a,l){if(n.tag!==5)throw Error(s(476));var h=K_(n).queue;G_(n,h,r,he,a===null?ZS:function(){return Y_(n),a(l)})}function K_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:he},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Y_(n){var r=K_(n);r.next===null&&(r=n.alternate.memoizedState),Gl(n,r.next.queue,{},Vn())}function rm(){return Zt(lu)}function Q_(){return At().memoizedState}function $_(){return At().memoizedState}function e1(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=Vn();n=Jr(a);var l=Zr(r,n,a);l!==null&&(wn(l,r,a),jl(l,r,a)),r={cache:kf()},n.payload=r;return}r=r.return}}function t1(n,r,a){var l=Vn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oh(n)?W_(r,a):(a=bf(n,r,a,l),a!==null&&(wn(a,n,l),J_(a,r,l)))}function X_(n,r,a){var l=Vn();Gl(n,r,a,l)}function Gl(n,r,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oh(n))W_(r,h);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,b=f(_,a);if(h.hasEagerState=!0,h.eagerState=b,xn(b,_))return Bc(n,r,h,0),tt===null&&jc(),!1}catch{}finally{}if(a=bf(n,r,h,l),a!==null)return wn(a,n,l),J_(a,r,l),!0}return!1}function sm(n,r,a,l){if(l={lane:2,revertLane:Um(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},oh(n)){if(r)throw Error(s(479))}else r=bf(n,a,l,2),r!==null&&wn(r,n,2)}function oh(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function W_(n,r){oo=eh=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function J_(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,fl(n,a)}}var Kl={readContext:Zt,use:ih,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Kl.useEffectEvent=pt;var Z_={readContext:Zt,use:ih,useCallback:function(n,r){return pn().memoizedState=[n,r===void 0?null:r],n},useContext:Zt,useEffect:V_,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,sh(4194308,4,j_.bind(null,r,n),a)},useLayoutEffect:function(n,r){return sh(4194308,4,n,r)},useInsertionEffect:function(n,r){sh(4,2,n,r)},useMemo:function(n,r){var a=pn();r=r===void 0?null:r;var l=n();if(ua){qn(!0);try{n()}finally{qn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=pn();if(a!==void 0){var h=a(r);if(ua){qn(!0);try{a(r)}finally{qn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=t1.bind(null,Se,n),[l.memoizedState,n]},useRef:function(n){var r=pn();return n={current:n},r.memoizedState=n},useState:function(n){n=Jf(n);var r=n.queue,a=X_.bind(null,Se,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:tm,useDeferredValue:function(n,r){var a=pn();return nm(a,n,r)},useTransition:function(){var n=Jf(!1);return n=G_.bind(null,Se,n.queue,!0,!1),pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Se,h=pn();if(Ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),tt===null)throw Error(s(349));(Oe&127)!==0||E_(l,r,a)}h.memoizedState=a;var f={value:a,getSnapshot:r};return h.queue=f,V_(b_.bind(null,l,f,n),[n]),l.flags|=2048,uo(9,{destroy:void 0},T_.bind(null,l,f,a,r),null),a},useId:function(){var n=pn(),r=tt.identifierPrefix;if(Ve){var a=Bi,l=ji;a=(l&~(1<<32-Et(l)-1)).toString(32)+a,r="_"+r+"R_"+a,a=th++,0<a&&(r+="H"+a.toString(32)),r+="_"}else a=QS++,r="_"+r+"r_"+a.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:rm,useFormState:D_,useActionState:D_,useOptimistic:function(n){var r=pn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=sm.bind(null,Se,!0,a),a.dispatch=r,[n,r]},useMemoCache:$f,useCacheRefresh:function(){return pn().memoizedState=e1.bind(null,Se)},useEffectEvent:function(n){var r=pn(),a={impl:n};return r.memoizedState=a,function(){if((Ge&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},am={readContext:Zt,use:ih,useCallback:q_,useContext:Zt,useEffect:em,useImperativeHandle:B_,useInsertionEffect:L_,useLayoutEffect:z_,useMemo:H_,useReducer:rh,useRef:P_,useState:function(){return rh(fr)},useDebugValue:tm,useDeferredValue:function(n,r){var a=At();return F_(a,Je.memoizedState,n,r)},useTransition:function(){var n=rh(fr)[0],r=At().memoizedState;return[typeof n=="boolean"?n:Fl(n),r]},useSyncExternalStore:v_,useId:Q_,useHostTransitionStatus:rm,useFormState:O_,useActionState:O_,useOptimistic:function(n,r){var a=At();return S_(a,Je,n,r)},useMemoCache:$f,useCacheRefresh:$_};am.useEffectEvent=U_;var ev={readContext:Zt,use:ih,useCallback:q_,useContext:Zt,useEffect:em,useImperativeHandle:B_,useInsertionEffect:L_,useLayoutEffect:z_,useMemo:H_,useReducer:Wf,useRef:P_,useState:function(){return Wf(fr)},useDebugValue:tm,useDeferredValue:function(n,r){var a=At();return Je===null?nm(a,n,r):F_(a,Je.memoizedState,n,r)},useTransition:function(){var n=Wf(fr)[0],r=At().memoizedState;return[typeof n=="boolean"?n:Fl(n),r]},useSyncExternalStore:v_,useId:Q_,useHostTransitionStatus:rm,useFormState:M_,useActionState:M_,useOptimistic:function(n,r){var a=At();return Je!==null?S_(a,Je,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:$f,useCacheRefresh:$_};ev.useEffectEvent=U_;function om(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:T({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var lm={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=Vn(),h=Jr(l);h.payload=r,a!=null&&(h.callback=a),r=Zr(n,h,l),r!==null&&(wn(r,n,l),jl(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=Vn(),h=Jr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Zr(n,h,l),r!==null&&(wn(r,n,l),jl(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Vn(),l=Jr(a);l.tag=2,r!=null&&(l.callback=r),r=Zr(n,l,a),r!==null&&(wn(r,n,a),jl(r,n,a))}};function tv(n,r,a,l,h,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,f,_):r.prototype&&r.prototype.isPureReactComponent?!Ol(a,l)||!Ol(h,f):!0}function nv(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&lm.enqueueReplaceState(r,r.state,null)}function ca(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=T({},a));for(var h in n)a[h]===void 0&&(a[h]=n[h])}return a}function iv(n){zc(n)}function rv(n){console.error(n)}function sv(n){zc(n)}function lh(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function av(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function um(n,r,a){return a=Jr(a),a.tag=3,a.payload={element:null},a.callback=function(){lh(n,r)},a}function ov(n){return n=Jr(n),n.tag=3,n}function lv(n,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=l.value;n.payload=function(){return h(f)},n.callback=function(){av(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){av(r,a,l),typeof h!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function n1(n,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&to(r,a,h,!0),a=On.current,a!==null){switch(a.tag){case 31:case 13:return Jn===null?Eh():a.alternate===null&&gt===0&&(gt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$c?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Mm(n,l,h)),!1;case 22:return a.flags|=65536,l===$c?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Mm(n,l,h)),!1}throw Error(s(435,a.tag))}return Mm(n,l,h),Eh(),!1}if(Ve)return r=On.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Cf&&(n=Error(s(422),{cause:l}),Pl(Qn(n,a)))):(l!==Cf&&(r=Error(s(423),{cause:l}),Pl(Qn(r,a))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=Qn(l,a),h=um(n.stateNode,l,h),zf(n,h),gt!==4&&(gt=2)),!1;var f=Error(s(520),{cause:l});if(f=Qn(f,a),eu===null?eu=[f]:eu.push(f),gt!==4&&(gt=2),r===null)return!0;l=Qn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=h&-h,a.lanes|=n,n=um(a.stateNode,l,n),zf(a,n),!1;case 1:if(r=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ss===null||!ss.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ov(h),lv(h,n,a,l),zf(a,h),!1}a=a.return}while(a!==null);return!1}var cm=Error(s(461)),Ot=!1;function en(n,r,a,l){r.child=n===null?d_(r,null,a,l):la(r,n.child,a,l)}function uv(n,r,a,l,h){a=a.render;var f=r.ref;if("ref"in l){var _={};for(var b in l)b!=="ref"&&(_[b]=l[b])}else _=l;return ra(r),l=Gf(n,r,a,_,f,h),b=Kf(),n!==null&&!Ot?(Yf(n,r,h),mr(n,r,h)):(Ve&&b&&Rf(r),r.flags|=1,en(n,r,l,h),r.child)}function cv(n,r,a,l,h){if(n===null){var f=a.type;return typeof f=="function"&&!Af(f)&&f.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=f,hv(n,r,f,l,h)):(n=Hc(a.type,null,l,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,!_m(n,h)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ol,a(_,l)&&n.ref===r.ref)return mr(n,r,h)}return r.flags|=1,n=lr(f,l),n.ref=r.ref,n.return=r,r.child=n}function hv(n,r,a,l,h){if(n!==null){var f=n.memoizedProps;if(Ol(f,l)&&n.ref===r.ref)if(Ot=!1,r.pendingProps=l=f,_m(n,h))(n.flags&131072)!==0&&(Ot=!0);else return r.lanes=n.lanes,mr(n,r,h)}return hm(n,r,a,l,h)}function dv(n,r,a,l){var h=l.children,f=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((r.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,n!==null){for(l=r.child=n.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~f}else l=0,r.child=null;return fv(n,r,f,a,l)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Yc(r,f!==null?f.cachePool:null),f!==null?p_(r,f):Bf(),g_(r);else return l=r.lanes=536870912,fv(n,r,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(Yc(r,f.cachePool),p_(r,f),ts(),r.memoizedState=null):(n!==null&&Yc(r,null),Bf(),ts());return en(n,r,h,a),r.child}function Yl(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function fv(n,r,a,l,h){var f=Pf();return f=f===null?null:{parent:xt._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},n!==null&&Yc(r,null),Bf(),g_(r),n!==null&&to(n,r,l,!0),r.childLanes=h,null}function uh(n,r){return r=hh({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function mv(n,r,a){return la(r,n.child,null,a),n=uh(r,r.pendingProps),n.flags|=2,kn(r),r.memoizedState=null,n}function i1(n,r,a){var l=r.pendingProps,h=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Ve){if(l.mode==="hidden")return n=uh(r,l),r.lanes=536870912,Yl(null,n);if(Hf(r),(n=rt)?(n=RE(n,Wn),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Yr!==null?{id:ji,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Wy(n),a.return=r,r.child=a,Jt=r,rt=null)):n=null,n===null)throw $r(r);return r.lanes=536870912,null}return uh(r,l)}var f=n.memoizedState;if(f!==null){var _=f.dehydrated;if(Hf(r),h)if(r.flags&256)r.flags&=-257,r=mv(n,r,a);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(s(558));else if(Ot||to(n,r,a,!1),h=(a&n.childLanes)!==0,Ot||h){if(l=tt,l!==null&&(_=ml(l,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ea(n,_),wn(l,n,_),cm;Eh(),r=mv(n,r,a)}else n=f.treeContext,rt=Zn(_.nextSibling),Jt=r,Ve=!0,Qr=null,Wn=!1,n!==null&&e_(r,n),r=uh(r,l),r.flags|=4096;return r}return n=lr(n.child,{mode:l.mode,children:l.children}),n.ref=r.ref,r.child=n,n.return=r,n}function ch(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function hm(n,r,a,l,h){return ra(r),a=Gf(n,r,a,l,void 0,h),l=Kf(),n!==null&&!Ot?(Yf(n,r,h),mr(n,r,h)):(Ve&&l&&Rf(r),r.flags|=1,en(n,r,a,h),r.child)}function pv(n,r,a,l,h,f){return ra(r),r.updateQueue=null,a=__(r,l,a,h),y_(n),l=Kf(),n!==null&&!Ot?(Yf(n,r,f),mr(n,r,f)):(Ve&&l&&Rf(r),r.flags|=1,en(n,r,a,f),r.child)}function gv(n,r,a,l,h){if(ra(r),r.stateNode===null){var f=Wa,_=a.contextType;typeof _=="object"&&_!==null&&(f=Zt(_)),f=new a(l,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lm,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=l,f.state=r.memoizedState,f.refs={},Uf(r),_=a.contextType,f.context=typeof _=="object"&&_!==null?Zt(_):Wa,f.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(om(r,a,_,l),f.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&lm.enqueueReplaceState(f,f.state,null),ql(r,l,f,h),Bl(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){f=r.stateNode;var b=r.memoizedProps,x=ca(a,b);f.props=x;var z=f.context,G=a.contextType;_=Wa,typeof G=="object"&&G!==null&&(_=Zt(G));var Q=a.getDerivedStateFromProps;G=typeof Q=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,G||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||z!==_)&&nv(r,f,l,_),Wr=!1;var B=r.memoizedState;f.state=B,ql(r,l,f,h),Bl(),z=r.memoizedState,b||B!==z||Wr?(typeof Q=="function"&&(om(r,a,Q,l),z=r.memoizedState),(x=Wr||tv(r,a,x,l,B,z,_))?(G||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=z),f.props=l,f.state=z,f.context=_,l=x):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{f=r.stateNode,Lf(n,r),_=r.memoizedProps,G=ca(a,_),f.props=G,Q=r.pendingProps,B=f.context,z=a.contextType,x=Wa,typeof z=="object"&&z!==null&&(x=Zt(z)),b=a.getDerivedStateFromProps,(z=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Q||B!==x)&&nv(r,f,l,x),Wr=!1,B=r.memoizedState,f.state=B,ql(r,l,f,h),Bl();var F=r.memoizedState;_!==Q||B!==F||Wr||n!==null&&n.dependencies!==null&&Gc(n.dependencies)?(typeof b=="function"&&(om(r,a,b,l),F=r.memoizedState),(G=Wr||tv(r,a,G,l,B,F,x)||n!==null&&n.dependencies!==null&&Gc(n.dependencies))?(z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,F,x),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,F,x)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=F),f.props=l,f.state=F,f.context=x,l=G):(typeof f.componentDidUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),l=!1)}return f=l,ch(n,r),l=(r.flags&128)!==0,f||l?(f=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,n!==null&&l?(r.child=la(r,n.child,null,h),r.child=la(r,null,a,h)):en(n,r,a,h),r.memoizedState=f.state,n=r.child):n=mr(n,r,h),n}function yv(n,r,a,l){return na(),r.flags|=256,en(n,r,a,l),r.child}var dm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fm(n){return{baseLanes:n,cachePool:a_()}}function mm(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=Pn),n}function _v(n,r,a){var l=r.pendingProps,h=!1,f=(r.flags&128)!==0,_;if((_=f)||(_=n!==null&&n.memoizedState===null?!1:(bt.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ve){if(h?es(r):ts(),(n=rt)?(n=RE(n,Wn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Yr!==null?{id:ji,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Wy(n),a.return=r,r.child=a,Jt=r,rt=null)):n=null,n===null)throw $r(r);return Xm(n)?r.lanes=32:r.lanes=536870912,null}var b=l.children;return l=l.fallback,h?(ts(),h=r.mode,b=hh({mode:"hidden",children:b},h),l=ta(l,h,a,null),b.return=r,l.return=r,b.sibling=l,r.child=b,l=r.child,l.memoizedState=fm(a),l.childLanes=mm(n,_,a),r.memoizedState=dm,Yl(null,l)):(es(r),pm(r,b))}var x=n.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(f)r.flags&256?(es(r),r.flags&=-257,r=gm(n,r,a)):r.memoizedState!==null?(ts(),r.child=n.child,r.flags|=128,r=null):(ts(),b=l.fallback,h=r.mode,l=hh({mode:"visible",children:l.children},h),b=ta(b,h,a,null),b.flags|=2,l.return=r,b.return=r,l.sibling=b,r.child=l,la(r,n.child,null,a),l=r.child,l.memoizedState=fm(a),l.childLanes=mm(n,_,a),r.memoizedState=dm,r=Yl(null,l));else if(es(r),Xm(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var z=_.dgst;_=z,l=Error(s(419)),l.stack="",l.digest=_,Pl({value:l,source:null,stack:null}),r=gm(n,r,a)}else if(Ot||to(n,r,a,!1),_=(a&n.childLanes)!==0,Ot||_){if(_=tt,_!==null&&(l=ml(_,a),l!==0&&l!==x.retryLane))throw x.retryLane=l,ea(n,l),wn(_,n,l),cm;$m(b)||Eh(),r=gm(n,r,a)}else $m(b)?(r.flags|=192,r.child=n.child,r=null):(n=x.treeContext,rt=Zn(b.nextSibling),Jt=r,Ve=!0,Qr=null,Wn=!1,n!==null&&e_(r,n),r=pm(r,l.children),r.flags|=4096);return r}return h?(ts(),b=l.fallback,h=r.mode,x=n.child,z=x.sibling,l=lr(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,z!==null?b=lr(z,b):(b=ta(b,h,a,null),b.flags|=2),b.return=r,l.return=r,l.sibling=b,r.child=l,Yl(null,l),l=r.child,b=n.child.memoizedState,b===null?b=fm(a):(h=b.cachePool,h!==null?(x=xt._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=a_(),b={baseLanes:b.baseLanes|a,cachePool:h}),l.memoizedState=b,l.childLanes=mm(n,_,a),r.memoizedState=dm,Yl(n.child,l)):(es(r),a=n.child,n=a.sibling,a=lr(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(_=r.deletions,_===null?(r.deletions=[n],r.flags|=16):_.push(n)),r.child=a,r.memoizedState=null,a)}function pm(n,r){return r=hh({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function hh(n,r){return n=Dn(22,n,null,r),n.lanes=0,n}function gm(n,r,a){return la(r,n.child,null,a),n=pm(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function vv(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Df(n.return,r,a)}function ym(n,r,a,l,h,f){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:f}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=f)}function Ev(n,r,a){var l=r.pendingProps,h=l.revealOrder,f=l.tail;l=l.children;var _=bt.current,b=(_&2)!==0;if(b?(_=_&1|2,r.flags|=128):_&=1,re(bt,_),en(n,r,l,a),l=Ve?Ml:0,!b&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vv(n,a,r);else if(n.tag===19)vv(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&Zc(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),ym(r,!1,h,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Zc(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}ym(r,!0,a,null,f,l);break;case"together":ym(r,!1,null,null,void 0,l);break;default:r.memoizedState=null}return r.child}function mr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),rs|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(to(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=lr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=lr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function _m(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Gc(n)))}function r1(n,r,a){switch(r.tag){case 3:zt(r,r.stateNode.containerInfo),Xr(r,xt,n.memoizedState.cache),na();break;case 27:case 5:Vs(r);break;case 4:zt(r,r.stateNode.containerInfo);break;case 10:Xr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Hf(r),null;break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(es(r),r.flags|=128,null):(a&r.child.childLanes)!==0?_v(n,r,a):(es(r),n=mr(n,r,a),n!==null?n.sibling:null);es(r);break;case 19:var h=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(to(n,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return Ev(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(bt,bt.current),l)break;return null;case 22:return r.lanes=0,dv(n,r,a,r.pendingProps);case 24:Xr(r,xt,n.memoizedState.cache)}return mr(n,r,a)}function Tv(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ot=!0;else{if(!_m(n,a)&&(r.flags&128)===0)return Ot=!1,r1(n,r,a);Ot=(n.flags&131072)!==0}else Ot=!1,Ve&&(r.flags&1048576)!==0&&Zy(r,Ml,r.index);switch(r.lanes=0,r.tag){case 16:e:{var l=r.pendingProps;if(n=aa(r.elementType),r.type=n,typeof n=="function")Af(n)?(l=ca(n,l),r.tag=1,r=gv(null,r,n,l,a)):(r.tag=0,r=hm(null,r,n,l,a));else{if(n!=null){var h=n.$$typeof;if(h===ye){r.tag=11,r=uv(null,r,n,l,a);break e}else if(h===I){r.tag=14,r=cv(null,r,n,l,a);break e}}throw r=nt(n)||n,Error(s(306,r,""))}}return r;case 0:return hm(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=ca(l,r.pendingProps),gv(n,r,l,h,a);case 3:e:{if(zt(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var f=r.memoizedState;h=f.element,Lf(n,r),ql(r,l,null,a);var _=r.memoizedState;if(l=_.cache,Xr(r,xt,l),l!==f.cache&&Of(r,[xt],a,!0),Bl(),l=_.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=yv(n,r,l,a);break e}else if(l!==h){h=Qn(Error(s(424)),r),Pl(h),r=yv(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rt=Zn(n.firstChild),Jt=r,Ve=!0,Qr=null,Wn=!0,a=d_(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(na(),l===h){r=mr(n,r,a);break e}en(n,r,l,a)}r=r.child}return r;case 26:return ch(n,r),n===null?(a=OE(r.type,null,r.pendingProps,null))?r.memoizedState=a:Ve||(a=r.type,n=r.pendingProps,l=Ih(Re.current).createElement(a),l[It]=r,l[Gt]=n,tn(l,a,n),Ct(l),r.stateNode=l):r.memoizedState=OE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Vs(r),n===null&&Ve&&(l=r.stateNode=NE(r.type,r.pendingProps,Re.current),Jt=r,Wn=!0,h=rt,us(r.type)?(Wm=h,rt=Zn(l.firstChild)):rt=h),en(n,r,r.pendingProps.children,a),ch(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ve&&((h=l=rt)&&(l=M1(l,r.type,r.pendingProps,Wn),l!==null?(r.stateNode=l,Jt=r,rt=Zn(l.firstChild),Wn=!1,h=!0):h=!1),h||$r(r)),Vs(r),h=r.type,f=r.pendingProps,_=n!==null?n.memoizedProps:null,l=f.children,Km(h,f)?l=null:_!==null&&Km(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=Gf(n,r,$S,null,null,a),lu._currentValue=h),ch(n,r),en(n,r,l,a),r.child;case 6:return n===null&&Ve&&((n=a=rt)&&(a=P1(a,r.pendingProps,Wn),a!==null?(r.stateNode=a,Jt=r,rt=null,n=!0):n=!1),n||$r(r)),null;case 13:return _v(n,r,a);case 4:return zt(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=la(r,null,l,a):en(n,r,l,a),r.child;case 11:return uv(n,r,r.type,r.pendingProps,a);case 7:return en(n,r,r.pendingProps,a),r.child;case 8:return en(n,r,r.pendingProps.children,a),r.child;case 12:return en(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Xr(r,r.type,l.value),en(n,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,ra(r),h=Zt(h),l=l(h),r.flags|=1,en(n,r,l,a),r.child;case 14:return cv(n,r,r.type,r.pendingProps,a);case 15:return hv(n,r,r.type,r.pendingProps,a);case 19:return Ev(n,r,a);case 31:return i1(n,r,a);case 22:return dv(n,r,a,r.pendingProps);case 24:return ra(r),l=Zt(xt),n===null?(h=Pf(),h===null&&(h=tt,f=kf(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),r.memoizedState={parent:l,cache:h},Uf(r),Xr(r,xt,h)):((n.lanes&a)!==0&&(Lf(n,r),ql(r,null,null,a),Bl()),h=n.memoizedState,f=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Xr(r,xt,l)):(l=f.cache,Xr(r,xt,l),l!==h.cache&&Of(r,[xt],a,!0))),en(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function pr(n){n.flags|=4}function vm(n,r,a,l,h){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(h&335544128)===h)if(n.stateNode.complete)n.flags|=8192;else if(Qv())n.flags|=8192;else throw oa=$c,Vf}else n.flags&=-16777217}function bv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!UE(r))if(Qv())n.flags|=8192;else throw oa=$c,Vf}function dh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?_c():536870912,n.lanes|=r,mo|=r)}function Ql(n,r){if(!Ve)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function st(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function s1(n,r,a){var l=r.pendingProps;switch(If(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(r),null;case 1:return st(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),hr(xt),ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(eo(r)?pr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nf())),st(r),null;case 26:var h=r.type,f=r.memoizedState;return n===null?(pr(r),f!==null?(st(r),bv(r,f)):(st(r),vm(r,h,null,l,a))):f?f!==n.memoizedState?(pr(r),st(r),bv(r,f)):(st(r),r.flags&=-16777217):(n=n.memoizedProps,n!==l&&pr(r),st(r),vm(r,h,n,l,a)),null;case 27:if(Oa(r),a=Re.current,h=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&pr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return st(r),null}n=oe.current,eo(r)?t_(r):(n=NE(h,l,a),r.stateNode=n,pr(r))}return st(r),null;case 5:if(Oa(r),h=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&pr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return st(r),null}if(f=oe.current,eo(r))t_(r);else{var _=Ih(Re.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}f[It]=r,f[Gt]=l;e:for(_=r.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===r)break e;for(;_.sibling===null;){if(_.return===null||_.return===r)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}r.stateNode=f;e:switch(tn(f,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&pr(r)}}return st(r),vm(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,a),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&pr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=Re.current,eo(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,h=Jt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[It]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||_E(n.nodeValue,a)),n||$r(r,!0)}else n=Ih(n).createTextNode(l),n[It]=r,r.stateNode=n}return st(r),null;case 31:if(a=r.memoizedState,n===null||n.memoizedState!==null){if(l=eo(r),a!==null){if(n===null){if(!l)throw Error(s(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(557));n[It]=r}else na(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),n=!1}else a=Nf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return r.flags&256?(kn(r),r):(kn(r),null);if((r.flags&128)!==0)throw Error(s(558))}return st(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=eo(r),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[It]=r}else na(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),h=!1}else h=Nf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(kn(r),r):(kn(r),null)}return kn(r),(r.flags&128)!==0?(r.lanes=a,r):(a=l!==null,n=n!==null&&n.memoizedState!==null,a&&(l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==h&&(l.flags|=2048)),a!==n&&a&&(r.child.flags|=8192),dh(r,r.updateQueue),st(r),null);case 4:return ut(),n===null&&Bm(r.stateNode.containerInfo),st(r),null;case 10:return hr(r.type),st(r),null;case 19:if(X(bt),l=r.memoizedState,l===null)return st(r),null;if(h=(r.flags&128)!==0,f=l.rendering,f===null)if(h)Ql(l,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(f=Zc(n),f!==null){for(r.flags|=128,Ql(l,!1),n=f.updateQueue,r.updateQueue=n,dh(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)Xy(a,n),a=a.sibling;return re(bt,bt.current&1|2),Ve&&ur(r,l.treeForkCount),r.child}n=n.sibling}l.tail!==null&&fn()>yh&&(r.flags|=128,h=!0,Ql(l,!1),r.lanes=4194304)}else{if(!h)if(n=Zc(f),n!==null){if(r.flags|=128,h=!0,n=n.updateQueue,r.updateQueue=n,dh(r,n),Ql(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!Ve)return st(r),null}else 2*fn()-l.renderingStartTime>yh&&a!==536870912&&(r.flags|=128,h=!0,Ql(l,!1),r.lanes=4194304);l.isBackwards?(f.sibling=r.child,r.child=f):(n=l.last,n!==null?n.sibling=f:r.child=f,l.last=f)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=fn(),n.sibling=null,a=bt.current,re(bt,h?a&1|2:a&1),Ve&&ur(r,l.treeForkCount),n):(st(r),null);case 22:case 23:return kn(r),qf(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(st(r),r.subtreeFlags&6&&(r.flags|=8192)):st(r),a=r.updateQueue,a!==null&&dh(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&X(sa),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),hr(xt),st(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function a1(n,r){switch(If(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return hr(xt),ut(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Oa(r),null;case 31:if(r.memoizedState!==null){if(kn(r),r.alternate===null)throw Error(s(340));na()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(kn(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));na()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return X(bt),null;case 4:return ut(),null;case 10:return hr(r.type),null;case 22:case 23:return kn(r),qf(),n!==null&&X(sa),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return hr(xt),null;case 25:return null;default:return null}}function Av(n,r){switch(If(r),r.tag){case 3:hr(xt),ut();break;case 26:case 27:case 5:Oa(r);break;case 4:ut();break;case 31:r.memoizedState!==null&&kn(r);break;case 13:kn(r);break;case 19:X(bt);break;case 10:hr(r.type);break;case 22:case 23:kn(r),qf(),n!==null&&X(sa);break;case 24:hr(xt)}}function $l(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&n)===n){l=void 0;var f=a.create,_=a.inst;l=f(),_.destroy=l}a=a.next}while(a!==h)}}catch(b){Xe(r,r.return,b)}}function ns(n,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var f=h.next;l=f;do{if((l.tag&n)===n){var _=l.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,h=r;var x=a,z=b;try{z()}catch(G){Xe(h,x,G)}}}l=l.next}while(l!==f)}}catch(G){Xe(r,r.return,G)}}function wv(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{m_(r,a)}catch(l){Xe(n,n.return,l)}}}function Sv(n,r,a){a.props=ca(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Xe(n,r,l)}}function Xl(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(h){Xe(n,r,h)}}function qi(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xe(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xe(n,r,h)}else a.current=null}function Rv(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xe(n,n.return,h)}}function Em(n,r,a){try{var l=n.stateNode;C1(l,n.type,a,r),l[Gt]=r}catch(h){Xe(n,n.return,h)}}function Iv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&us(n.type)||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Iv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&us(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bm(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=li));else if(l!==4&&(l===27&&us(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(bm(n,r,a),n=n.sibling;n!==null;)bm(n,r,a),n=n.sibling}function fh(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&us(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(fh(n,r,a),n=n.sibling;n!==null;)fh(n,r,a),n=n.sibling}function Cv(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);tn(r,l,a),r[It]=n,r[Gt]=a}catch(f){Xe(n,n.return,f)}}var gr=!1,kt=!1,Am=!1,Nv=typeof WeakSet=="function"?WeakSet:Set,Yt=null;function o1(n,r){if(n=n.containerInfo,Fm=Mh,n=By(n),gf(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,b=-1,x=-1,z=0,G=0,Q=n,B=null;t:for(;;){for(var F;Q!==a||h!==0&&Q.nodeType!==3||(b=_+h),Q!==f||l!==0&&Q.nodeType!==3||(x=_+l),Q.nodeType===3&&(_+=Q.nodeValue.length),(F=Q.firstChild)!==null;)B=Q,Q=F;for(;;){if(Q===n)break t;if(B===a&&++z===h&&(b=_),B===f&&++G===l&&(x=_),(F=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=F}a=b===-1||x===-1?null:{start:b,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gm={focusedElem:n,selectionRange:a},Mh=!1,Yt=r;Yt!==null;)if(r=Yt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Yt=n;else for(;Yt!==null;){switch(r=Yt,f=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(a=0;a<n.length;a++)h=n[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&f!==null){n=void 0,a=r,h=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var le=ca(a.type,h);n=l.getSnapshotBeforeUpdate(le,f),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Xe(a,a.return,ge)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)Qm(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Qm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Yt=n;break}Yt=r.return}}function xv(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:_r(n,a),l&4&&$l(5,a);break;case 1:if(_r(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(_){Xe(a,a.return,_)}else{var h=ca(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(_){Xe(a,a.return,_)}}l&64&&wv(a),l&512&&Xl(a,a.return);break;case 3:if(_r(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{m_(n,r)}catch(_){Xe(a,a.return,_)}}break;case 27:r===null&&l&4&&Cv(a);case 26:case 5:_r(n,a),r===null&&l&4&&Rv(a),l&512&&Xl(a,a.return);break;case 12:_r(n,a);break;case 31:_r(n,a),l&4&&kv(n,a);break;case 13:_r(n,a),l&4&&Mv(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=g1.bind(null,a),V1(n,a))));break;case 22:if(l=a.memoizedState!==null||gr,!l){r=r!==null&&r.memoizedState!==null||kt,h=gr;var f=kt;gr=l,(kt=r)&&!f?vr(n,a,(a.subtreeFlags&8772)!==0):_r(n,a),gr=h,kt=f}break;case 30:break;default:_r(n,a)}}function Dv(n){var r=n.alternate;r!==null&&(n.alternate=null,Dv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ua(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ht=null,En=!1;function yr(n,r,a){for(a=a.child;a!==null;)Ov(n,r,a),a=a.sibling}function Ov(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(ri,a)}catch{}switch(a.tag){case 26:kt||qi(a,r),yr(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kt||qi(a,r);var l=ht,h=En;us(a.type)&&(ht=a.stateNode,En=!1),yr(n,r,a),su(a.stateNode),ht=l,En=h;break;case 5:kt||qi(a,r);case 6:if(l=ht,h=En,ht=null,yr(n,r,a),ht=l,En=h,ht!==null)if(En)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(a.stateNode)}catch(f){Xe(a,r,f)}else try{ht.removeChild(a.stateNode)}catch(f){Xe(a,r,f)}break;case 18:ht!==null&&(En?(n=ht,wE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),bo(n)):wE(ht,a.stateNode));break;case 4:l=ht,h=En,ht=a.stateNode.containerInfo,En=!0,yr(n,r,a),ht=l,En=h;break;case 0:case 11:case 14:case 15:ns(2,a,r),kt||ns(4,a,r),yr(n,r,a);break;case 1:kt||(qi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Sv(a,r,l)),yr(n,r,a);break;case 21:yr(n,r,a);break;case 22:kt=(l=kt)||a.memoizedState!==null,yr(n,r,a),kt=l;break;default:yr(n,r,a)}}function kv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{bo(n)}catch(a){Xe(r,r.return,a)}}}function Mv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{bo(n)}catch(a){Xe(r,r.return,a)}}function l1(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Nv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Nv),r;default:throw Error(s(435,n.tag))}}function mh(n,r){var a=l1(n);r.forEach(function(l){if(!a.has(l)){a.add(l);var h=y1.bind(null,n,l);l.then(h,h)}})}function Tn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],f=n,_=r,b=_;e:for(;b!==null;){switch(b.tag){case 27:if(us(b.type)){ht=b.stateNode,En=!1;break e}break;case 5:ht=b.stateNode,En=!1;break e;case 3:case 4:ht=b.stateNode.containerInfo,En=!0;break e}b=b.return}if(ht===null)throw Error(s(160));Ov(f,_,h),ht=null,En=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Pv(r,n),r=r.sibling}var mi=null;function Pv(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Tn(r,n),bn(n),l&4&&(ns(3,n,n.return),$l(3,n),ns(5,n,n.return));break;case 1:Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),l&64&&gr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=mi;if(Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Ci]||f[It]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(l),h.head.insertBefore(f,h.querySelector("head > title"))),tn(f,l,a),f[It]=n,Ct(f),l=f;break e;case"link":var _=PE("link","href",h).get(l+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(f=_[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break t}}f=h.createElement(l),tn(f,l,a),h.head.appendChild(f);break;case"meta":if(_=PE("meta","content",h).get(l+(a.content||""))){for(b=0;b<_.length;b++)if(f=_[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break t}}f=h.createElement(l),tn(f,l,a),h.head.appendChild(f);break;default:throw Error(s(468,l))}f[It]=n,Ct(f),l=f}n.stateNode=l}else VE(h,n.type,n.stateNode);else n.stateNode=ME(h,l,n.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?VE(h,n.type,n.stateNode):ME(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Em(n,n.memoizedProps,a.memoizedProps)}break;case 27:Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),a!==null&&l&4&&Em(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),n.flags&32){h=n.stateNode;try{vn(h,"")}catch(le){Xe(n,n.return,le)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,Em(n,h,a!==null?a.memoizedProps:h)),l&1024&&(Am=!0);break;case 6:if(Tn(r,n),bn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(le){Xe(n,n.return,le)}}break;case 3:if(xh=null,h=mi,mi=Ch(r.containerInfo),Tn(r,n),mi=h,bn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bo(r.containerInfo)}catch(le){Xe(n,n.return,le)}Am&&(Am=!1,Vv(n));break;case 4:l=mi,mi=Ch(n.stateNode.containerInfo),Tn(r,n),bn(n),mi=l;break;case 12:Tn(r,n),bn(n);break;case 31:Tn(r,n),bn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mh(n,l)));break;case 13:Tn(r,n),bn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gh=fn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mh(n,l)));break;case 22:h=n.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,z=gr,G=kt;if(gr=z||h,kt=G||x,Tn(r,n),kt=G,gr=z,bn(n),l&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||x||gr||kt||ha(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){x=a=r;try{if(f=x.stateNode,h)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=x.stateNode;var Q=x.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;b.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(le){Xe(x,x.return,le)}}}else if(r.tag===6){if(a===null){x=r;try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(le){Xe(x,x.return,le)}}}else if(r.tag===18){if(a===null){x=r;try{var F=x.stateNode;h?SE(F,!0):SE(x.stateNode,!1)}catch(le){Xe(x,x.return,le)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,mh(n,a))));break;case 19:Tn(r,n),bn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mh(n,l)));break;case 30:break;case 21:break;default:Tn(r,n),bn(n)}}function bn(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(Iv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=Tm(n);fh(n,f,h);break;case 5:var _=a.stateNode;a.flags&32&&(vn(_,""),a.flags&=-33);var b=Tm(n);fh(n,b,_);break;case 3:case 4:var x=a.stateNode.containerInfo,z=Tm(n);bm(n,z,x);break;default:throw Error(s(161))}}catch(G){Xe(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Vv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Vv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function _r(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)xv(n,r.alternate,r),r=r.sibling}function ha(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:ns(4,r,r.return),ha(r);break;case 1:qi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Sv(r,r.return,a),ha(r);break;case 27:su(r.stateNode);case 26:case 5:qi(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}n=n.sibling}}function vr(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=n,f=r,_=f.flags;switch(f.tag){case 0:case 11:case 15:vr(h,f,a),$l(4,f);break;case 1:if(vr(h,f,a),l=f,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Xe(l,l.return,z)}if(l=f,h=l.updateQueue,h!==null){var b=l.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)f_(x[h],b)}catch(z){Xe(l,l.return,z)}}a&&_&64&&wv(f),Xl(f,f.return);break;case 27:Cv(f);case 26:case 5:vr(h,f,a),a&&l===null&&_&4&&Rv(f),Xl(f,f.return);break;case 12:vr(h,f,a);break;case 31:vr(h,f,a),a&&_&4&&kv(h,f);break;case 13:vr(h,f,a),a&&_&4&&Mv(h,f);break;case 22:f.memoizedState===null&&vr(h,f,a),Xl(f,f.return);break;case 30:break;default:vr(h,f,a)}r=r.sibling}}function wm(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Vl(a))}function Sm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Vl(n))}function pi(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Uv(n,r,a,l),r=r.sibling}function Uv(n,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:pi(n,r,a,l),h&2048&&$l(9,r);break;case 1:pi(n,r,a,l);break;case 3:pi(n,r,a,l),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Vl(n)));break;case 12:if(h&2048){pi(n,r,a,l),n=r.stateNode;try{var f=r.memoizedProps,_=f.id,b=f.onPostCommit;typeof b=="function"&&b(_,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(x){Xe(r,r.return,x)}}else pi(n,r,a,l);break;case 31:pi(n,r,a,l);break;case 13:pi(n,r,a,l);break;case 23:break;case 22:f=r.stateNode,_=r.alternate,r.memoizedState!==null?f._visibility&2?pi(n,r,a,l):Wl(n,r):f._visibility&2?pi(n,r,a,l):(f._visibility|=2,co(n,r,a,l,(r.subtreeFlags&10256)!==0||!1)),h&2048&&wm(_,r);break;case 24:pi(n,r,a,l),h&2048&&Sm(r.alternate,r);break;default:pi(n,r,a,l)}}function co(n,r,a,l,h){for(h=h&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var f=n,_=r,b=a,x=l,z=_.flags;switch(_.tag){case 0:case 11:case 15:co(f,_,b,x,h),$l(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?co(f,_,b,x,h):Wl(f,_):(G._visibility|=2,co(f,_,b,x,h)),h&&z&2048&&wm(_.alternate,_);break;case 24:co(f,_,b,x,h),h&&z&2048&&Sm(_.alternate,_);break;default:co(f,_,b,x,h)}r=r.sibling}}function Wl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,h=l.flags;switch(l.tag){case 22:Wl(a,l),h&2048&&wm(l.alternate,l);break;case 24:Wl(a,l),h&2048&&Sm(l.alternate,l);break;default:Wl(a,l)}r=r.sibling}}var Jl=8192;function ho(n,r,a){if(n.subtreeFlags&Jl)for(n=n.child;n!==null;)Lv(n,r,a),n=n.sibling}function Lv(n,r,a){switch(n.tag){case 26:ho(n,r,a),n.flags&Jl&&n.memoizedState!==null&&Q1(a,mi,n.memoizedState,n.memoizedProps);break;case 5:ho(n,r,a);break;case 3:case 4:var l=mi;mi=Ch(n.stateNode.containerInfo),ho(n,r,a),mi=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Jl,Jl=16777216,ho(n,r,a),Jl=l):ho(n,r,a));break;default:ho(n,r,a)}}function zv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Zl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Yt=l,Bv(l,n)}zv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jv(n),n=n.sibling}function jv(n){switch(n.tag){case 0:case 11:case 15:Zl(n),n.flags&2048&&ns(9,n,n.return);break;case 3:Zl(n);break;case 12:Zl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,ph(n)):Zl(n);break;default:Zl(n)}}function ph(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Yt=l,Bv(l,n)}zv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:ns(8,r,r.return),ph(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,ph(r));break;default:ph(r)}n=n.sibling}}function Bv(n,r){for(;Yt!==null;){var a=Yt;switch(a.tag){case 0:case 11:case 15:ns(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Yt=l;else e:for(a=n;Yt!==null;){l=Yt;var h=l.sibling,f=l.return;if(Dv(l),l===a){Yt=null;break e}if(h!==null){h.return=f,Yt=h;break e}Yt=f}}}var u1={getCacheForType:function(n){var r=Zt(xt),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a},cacheSignal:function(){return Zt(xt).controller.signal}},c1=typeof WeakMap=="function"?WeakMap:Map,Ge=0,tt=null,Ne=null,Oe=0,$e=0,Mn=null,is=!1,fo=!1,Rm=!1,Er=0,gt=0,rs=0,da=0,Im=0,Pn=0,mo=0,eu=null,An=null,Cm=!1,gh=0,qv=0,yh=1/0,_h=null,ss=null,Bt=0,as=null,po=null,Tr=0,Nm=0,xm=null,Hv=null,tu=0,Dm=null;function Vn(){return(Ge&2)!==0&&Oe!==0?Oe&-Oe:j.T!==null?Um():vc()}function Fv(){if(Pn===0)if((Oe&536870912)===0||Ve){var n=zs;zs<<=1,(zs&3932160)===0&&(zs=262144),Pn=n}else Pn=536870912;return n=On.current,n!==null&&(n.flags|=32),Pn}function wn(n,r,a){(n===tt&&($e===2||$e===9)||n.cancelPendingCommit!==null)&&(go(n,0),os(n,Oe,Pn,!1)),js(n,a),((Ge&2)===0||n!==tt)&&(n===tt&&((Ge&2)===0&&(da|=a),gt===4&&os(n,Oe,Pn,!1)),Hi(n))}function Gv(n,r,a){if((Ge&6)!==0)throw Error(s(327));var l=!a&&(r&127)===0&&(r&n.expiredLanes)===0||si(n,r),h=l?f1(n,r):km(n,r,!0),f=l;do{if(h===0){fo&&!l&&os(n,r,0,!1);break}else{if(a=n.current.alternate,f&&!h1(a)){h=km(n,r,!1),f=!1;continue}if(h===2){if(f=r,n.errorRecoveryDisabledLanes&f)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var b=n;h=eu;var x=b.current.memoizedState.isDehydrated;if(x&&(go(b,_).flags|=256),_=km(b,_,!1),_!==2){if(Rm&&!x){b.errorRecoveryDisabledLanes|=f,da|=f,h=4;break e}f=An,An=h,f!==null&&(An===null?An=f:An.push.apply(An,f))}h=_}if(f=!1,h!==2)continue}}if(h===1){go(n,0),os(n,r,0,!0);break}e:{switch(l=n,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:os(l,r,Pn,!is);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=gh+300-fn(),10<h)){if(os(l,r,Pn,!is),Si(l,0,!0)!==0)break e;Tr=r,l.timeoutHandle=bE(Kv.bind(null,l,a,An,_h,Cm,r,Pn,da,mo,is,f,"Throttled",-0,0),h);break e}Kv(l,a,An,_h,Cm,r,Pn,da,mo,is,f,null,-0,0)}}break}while(!0);Hi(n)}function Kv(n,r,a,l,h,f,_,b,x,z,G,Q,B,F){if(n.timeoutHandle=-1,Q=r.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:li},Lv(r,f,Q);var le=(f&62914560)===f?gh-fn():(f&4194048)===f?qv-fn():0;if(le=$1(Q,le),le!==null){Tr=f,n.cancelPendingCommit=le(eE.bind(null,n,r,f,a,l,h,_,b,x,G,Q,null,B,F)),os(n,f,_,!z);return}}eE(n,r,f,a,l,h,_,b,x)}function h1(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],f=h.getSnapshot;h=h.value;try{if(!xn(f(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function os(n,r,a,l){r&=~Im,r&=~da,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var h=r;0<h;){var f=31-Et(h),_=1<<f;l[f]=-1,h&=~_}a!==0&&Bs(n,a,r)}function vh(){return(Ge&6)===0?(nu(0),!1):!0}function Om(){if(Ne!==null){if($e===0)var n=Ne.return;else n=Ne,cr=ia=null,Qf(n),so=null,Ll=0,n=Ne;for(;n!==null;)Av(n.alternate,n),n=n.return;Ne=null}}function go(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,D1(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Tr=0,Om(),tt=n,Ne=a=lr(n.current,null),Oe=r,$e=0,Mn=null,is=!1,fo=si(n,r),Rm=!1,mo=Pn=Im=da=rs=gt=0,An=eu=null,Cm=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var h=31-Et(l),f=1<<h;r|=n[h],l&=~f}return Er=r,jc(),a}function Yv(n,r){Se=null,j.H=Kl,r===ro||r===Qc?(r=u_(),$e=3):r===Vf?(r=u_(),$e=4):$e=r===cm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Mn=r,Ne===null&&(gt=1,lh(n,Qn(r,n.current)))}function Qv(){var n=On.current;return n===null?!0:(Oe&4194048)===Oe?Jn===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?n===Jn:!1}function $v(){var n=j.H;return j.H=Kl,n===null?Kl:n}function Xv(){var n=j.A;return j.A=u1,n}function Eh(){gt=4,is||(Oe&4194048)!==Oe&&On.current!==null||(fo=!0),(rs&134217727)===0&&(da&134217727)===0||tt===null||os(tt,Oe,Pn,!1)}function km(n,r,a){var l=Ge;Ge|=2;var h=$v(),f=Xv();(tt!==n||Oe!==r)&&(_h=null,go(n,r)),r=!1;var _=gt;e:do try{if($e!==0&&Ne!==null){var b=Ne,x=Mn;switch($e){case 8:Om(),_=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(r=!0);var z=$e;if($e=0,Mn=null,yo(n,b,x,z),a&&fo){_=0;break e}break;default:z=$e,$e=0,Mn=null,yo(n,b,x,z)}}d1(),_=gt;break}catch(G){Yv(n,G)}while(!0);return r&&n.shellSuspendCounter++,cr=ia=null,Ge=l,j.H=h,j.A=f,Ne===null&&(tt=null,Oe=0,jc()),_}function d1(){for(;Ne!==null;)Wv(Ne)}function f1(n,r){var a=Ge;Ge|=2;var l=$v(),h=Xv();tt!==n||Oe!==r?(_h=null,yh=fn()+500,go(n,r)):fo=si(n,r);e:do try{if($e!==0&&Ne!==null){r=Ne;var f=Mn;t:switch($e){case 1:$e=0,Mn=null,yo(n,r,f,1);break;case 2:case 9:if(o_(f)){$e=0,Mn=null,Jv(r);break}r=function(){$e!==2&&$e!==9||tt!==n||($e=7),Hi(n)},f.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:o_(f)?($e=0,Mn=null,Jv(r)):($e=0,Mn=null,yo(n,r,f,7));break;case 5:var _=null;switch(Ne.tag){case 26:_=Ne.memoizedState;case 5:case 27:var b=Ne;if(_?UE(_):b.stateNode.complete){$e=0,Mn=null;var x=b.sibling;if(x!==null)Ne=x;else{var z=b.return;z!==null?(Ne=z,Th(z)):Ne=null}break t}}$e=0,Mn=null,yo(n,r,f,5);break;case 6:$e=0,Mn=null,yo(n,r,f,6);break;case 8:Om(),gt=6;break e;default:throw Error(s(462))}}m1();break}catch(G){Yv(n,G)}while(!0);return cr=ia=null,j.H=l,j.A=h,Ge=a,Ne!==null?0:(tt=null,Oe=0,jc(),gt)}function m1(){for(;Ne!==null&&!uf();)Wv(Ne)}function Wv(n){var r=Tv(n.alternate,n,Er);n.memoizedProps=n.pendingProps,r===null?Th(n):Ne=r}function Jv(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=pv(a,r,r.pendingProps,r.type,void 0,Oe);break;case 11:r=pv(a,r,r.pendingProps,r.type.render,r.ref,Oe);break;case 5:Qf(r);default:Av(a,r),r=Ne=Xy(r,Er),r=Tv(a,r,Er)}n.memoizedProps=n.pendingProps,r===null?Th(n):Ne=r}function yo(n,r,a,l){cr=ia=null,Qf(r),so=null,Ll=0;var h=r.return;try{if(n1(n,h,r,a,Oe)){gt=1,lh(n,Qn(a,n.current)),Ne=null;return}}catch(f){if(h!==null)throw Ne=h,f;gt=1,lh(n,Qn(a,n.current)),Ne=null;return}r.flags&32768?(Ve||l===1?n=!0:fo||(Oe&536870912)!==0?n=!1:(is=n=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zv(r,n)):Th(r)}function Th(n){var r=n;do{if((r.flags&32768)!==0){Zv(r,is);return}n=r.return;var a=s1(r.alternate,r,Er);if(a!==null){Ne=a;return}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=n}while(r!==null);gt===0&&(gt=5)}function Zv(n,r){do{var a=a1(n.alternate,n);if(a!==null){a.flags&=32767,Ne=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Ne=n;return}Ne=n=a}while(n!==null);gt=6,Ne=null}function eE(n,r,a,l,h,f,_,b,x){n.cancelPendingCommit=null;do bh();while(Bt!==0);if((Ge&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(f=r.lanes|r.childLanes,f|=Tf,df(n,a,f,_,b,x),n===tt&&(Ne=tt=null,Oe=0),po=r,as=n,Tr=a,Nm=f,xm=h,Hv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,_1(Ur,function(){return sE(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=j.T,j.T=null,h=ne.p,ne.p=2,_=Ge,Ge|=4;try{o1(n,r,a)}finally{Ge=_,ne.p=h,j.T=l}}Bt=1,tE(),nE(),iE()}}function tE(){if(Bt===1){Bt=0;var n=as,r=po,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=j.T,j.T=null;var l=ne.p;ne.p=2;var h=Ge;Ge|=4;try{Pv(r,n);var f=Gm,_=By(n.containerInfo),b=f.focusedElem,x=f.selectionRange;if(_!==b&&b&&b.ownerDocument&&jy(b.ownerDocument.documentElement,b)){if(x!==null&&gf(b)){var z=x.start,G=x.end;if(G===void 0&&(G=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(G,b.value.length);else{var Q=b.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var F=B.getSelection(),le=b.textContent.length,ge=Math.min(x.start,le),et=x.end===void 0?ge:Math.min(x.end,le);!F.extend&&ge>et&&(_=et,et=ge,ge=_);var P=zy(b,ge),k=zy(b,et);if(P&&k&&(F.rangeCount!==1||F.anchorNode!==P.node||F.anchorOffset!==P.offset||F.focusNode!==k.node||F.focusOffset!==k.offset)){var L=Q.createRange();L.setStart(P.node,P.offset),F.removeAllRanges(),ge>et?(F.addRange(L),F.extend(k.node,k.offset)):(L.setEnd(k.node,k.offset),F.addRange(L))}}}}for(Q=[],F=b;F=F.parentNode;)F.nodeType===1&&Q.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Q.length;b++){var K=Q[b];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Mh=!!Fm,Gm=Fm=null}finally{Ge=h,ne.p=l,j.T=a}}n.current=r,Bt=2}}function nE(){if(Bt===2){Bt=0;var n=as,r=po,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=j.T,j.T=null;var l=ne.p;ne.p=2;var h=Ge;Ge|=4;try{xv(n,r.alternate,r)}finally{Ge=h,ne.p=l,j.T=a}}Bt=3}}function iE(){if(Bt===4||Bt===3){Bt=0,dc();var n=as,r=po,a=Tr,l=Hv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Bt=5:(Bt=0,po=as=null,rE(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(ss=null),rr(a),r=r.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(ri,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=j.T,h=ne.p,ne.p=2,j.T=null;try{for(var f=n.onRecoverableError,_=0;_<l.length;_++){var b=l[_];f(b.value,{componentStack:b.stack})}}finally{j.T=r,ne.p=h}}(Tr&3)!==0&&bh(),Hi(n),h=n.pendingLanes,(a&261930)!==0&&(h&42)!==0?n===Dm?tu++:(tu=0,Dm=n):tu=0,nu(0)}}function rE(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Vl(r)))}function bh(){return tE(),nE(),iE(),sE()}function sE(){if(Bt!==5)return!1;var n=as,r=Nm;Nm=0;var a=rr(Tr),l=j.T,h=ne.p;try{ne.p=32>a?32:a,j.T=null,a=xm,xm=null;var f=as,_=Tr;if(Bt=0,po=as=null,Tr=0,(Ge&6)!==0)throw Error(s(331));var b=Ge;if(Ge|=4,jv(f.current),Uv(f,f.current,_,a),Ge=b,nu(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(ri,f)}catch{}return!0}finally{ne.p=h,j.T=l,rE(n,r)}}function aE(n,r,a){r=Qn(a,r),r=um(n.stateNode,r,2),n=Zr(n,r,2),n!==null&&(js(n,2),Hi(n))}function Xe(n,r,a){if(n.tag===3)aE(n,n,a);else for(;r!==null;){if(r.tag===3){aE(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ss===null||!ss.has(l))){n=Qn(a,n),a=ov(2),l=Zr(r,a,2),l!==null&&(lv(a,l,r,n),js(l,2),Hi(l));break}}r=r.return}}function Mm(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new c1;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(Rm=!0,h.add(a),n=p1.bind(null,n,r,a),r.then(n,n))}function p1(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,tt===n&&(Oe&a)===a&&(gt===4||gt===3&&(Oe&62914560)===Oe&&300>fn()-gh?(Ge&2)===0&&go(n,0):Im|=a,mo===Oe&&(mo=0)),Hi(n)}function oE(n,r){r===0&&(r=_c()),n=ea(n,r),n!==null&&(js(n,r),Hi(n))}function g1(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),oE(n,a)}function y1(n,r){var a=0;switch(n.tag){case 31:case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),oE(n,a)}function _1(n,r){return jt(n,r)}var Ah=null,_o=null,Pm=!1,wh=!1,Vm=!1,ls=0;function Hi(n){n!==_o&&n.next===null&&(_o===null?Ah=_o=n:_o=_o.next=n),wh=!0,Pm||(Pm=!0,E1())}function nu(n,r){if(!Vm&&wh){Vm=!0;do for(var a=!1,l=Ah;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var f=0;else{var _=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-Et(42|n)+1)-1,f&=h&~(_&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,hE(l,f))}else f=Oe,f=Si(l,l===tt?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||si(l,f)||(a=!0,hE(l,f));l=l.next}while(a);Vm=!1}}function v1(){lE()}function lE(){wh=Pm=!1;var n=0;ls!==0&&x1()&&(n=ls);for(var r=fn(),a=null,l=Ah;l!==null;){var h=l.next,f=uE(l,r);f===0?(l.next=null,a===null?Ah=h:a.next=h,h===null&&(_o=a)):(a=l,(n!==0||(f&3)!==0)&&(wh=!0)),l=h}Bt!==0&&Bt!==5||nu(n),ls!==0&&(ls=0)}function uE(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,f=n.pendingLanes&-62914561;0<f;){var _=31-Et(f),b=1<<_,x=h[_];x===-1?((b&a)===0||(b&l)!==0)&&(h[_]=hf(b,r)):x<=r&&(n.expiredLanes|=b),f&=~b}if(r=tt,a=Oe,a=Si(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&($e===2||$e===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Vr(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||si(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&Vr(l),rr(a)){case 2:case 8:a=dl;break;case 32:a=Ur;break;case 268435456:a=fc;break;default:a=Ur}return l=cE.bind(null,n),a=jt(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&Vr(l),n.callbackPriority=2,n.callbackNode=null,2}function cE(n,r){if(Bt!==0&&Bt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(bh()&&n.callbackNode!==a)return null;var l=Oe;return l=Si(n,n===tt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Gv(n,l,r),uE(n,fn()),n.callbackNode!=null&&n.callbackNode===a?cE.bind(null,n):null)}function hE(n,r){if(bh())return null;Gv(n,r,!0)}function E1(){O1(function(){(Ge&6)!==0?jt(hl,v1):lE()})}function Um(){if(ls===0){var n=no;n===0&&(n=Ai,Ai<<=1,(Ai&261888)===0&&(Ai=256)),ls=n}return ls}function dE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ba(""+n)}function fE(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function T1(n,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var f=dE((h[Gt]||null).action),_=l.submitter;_&&(r=(r=_[Gt]||null)?dE(r.formAction):_.getAttribute("formAction"),r!==null&&(f=r,_=null));var b=new Vi("action","action",null,l,h);n.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ls!==0){var x=_?fE(h,_):new FormData(h);im(a,{pending:!0,data:x,method:h.method,action:f},null,x)}}else typeof f=="function"&&(b.preventDefault(),x=_?fE(h,_):new FormData(h),im(a,{pending:!0,data:x,method:h.method,action:f},f,x))},currentTarget:h}]})}}for(var Lm=0;Lm<Ef.length;Lm++){var zm=Ef[Lm],b1=zm.toLowerCase(),A1=zm[0].toUpperCase()+zm.slice(1);fi(b1,"on"+A1)}fi(Fy,"onAnimationEnd"),fi(Gy,"onAnimationIteration"),fi(Ky,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(zS,"onTransitionRun"),fi(jS,"onTransitionStart"),fi(BS,"onTransitionCancel"),fi(Yy,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(iu));function mE(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],h=l.event;l=l.listeners;e:{var f=void 0;if(r)for(var _=l.length-1;0<=_;_--){var b=l[_],x=b.instance,z=b.currentTarget;if(b=b.listener,x!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=z;try{f(h)}catch(G){zc(G)}h.currentTarget=null,f=x}else for(_=0;_<l.length;_++){if(b=l[_],x=b.instance,z=b.currentTarget,b=b.listener,x!==f&&h.isPropagationStopped())break e;f=b,h.currentTarget=z;try{f(h)}catch(G){zc(G)}h.currentTarget=null,f=x}}}}function xe(n,r){var a=r[Va];a===void 0&&(a=r[Va]=new Set);var l=n+"__bubble";a.has(l)||(pE(r,n,2,!1),a.add(l))}function jm(n,r,a){var l=0;r&&(l|=4),pE(a,n,l,r)}var Sh="_reactListening"+Math.random().toString(36).slice(2);function Bm(n){if(!n[Sh]){n[Sh]=!0,pl.forEach(function(a){a!=="selectionchange"&&(w1.has(a)||jm(a,!1,n),jm(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Sh]||(r[Sh]=!0,jm("selectionchange",!1,r))}}function pE(n,r,a,l){switch(FE(r)){case 2:var h=J1;break;case 8:h=Z1;break;default:h=np}a=h.bind(null,r,a,n),h=void 0,!Ks||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function qm(n,r,a,l,h){var f=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var b=l.stateNode.containerInfo;if(b===h)break;if(_===4)for(_=l.return;_!==null;){var x=_.tag;if((x===3||x===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;b!==null;){if(_=Ni(b),_===null)return;if(x=_.tag,x===5||x===6||x===26||x===27){l=f=_;continue e}b=b.parentNode}}l=l.return}Hr(function(){var z=f,G=Fn(a),Q=[];e:{var B=Qy.get(n);if(B!==void 0){var F=Vi,le=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":F=Vc;break;case"focusin":le="focus",F=Xs;break;case"focusout":le="blur",F=Xs;break;case"beforeblur":case"afterblur":F=Xs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Cl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Ic;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=g;break;case Fy:case Gy:case Ky:F=Nc;break;case Yy:F=A;break;case"scroll":case"scrollend":F=Il;break;case"wheel":F=H;break;case"copy":case"cut":case"paste":F=xc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=or;break;case"toggle":case"beforetoggle":F=we}var ge=(r&4)!==0,et=!ge&&(n==="scroll"||n==="scrollend"),P=ge?B!==null?B+"Capture":null:B;ge=[];for(var k=z,L;k!==null;){var K=k;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||P===null||(K=ui(k,P),K!=null&&ge.push(ru(k,K,L))),et)break;k=k.return}0<ge.length&&(B=new F(B,le,null,a,G),Q.push({event:B,listeners:ge}))}}if((r&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",B&&a!==wl&&(le=a.relatedTarget||a.fromElement)&&(Ni(le)||le[Ii]))break e;if((F||B)&&(B=G.window===G?G:(B=G.ownerDocument)?B.defaultView||B.parentWindow:window,F?(le=a.relatedTarget||a.toElement,F=z,le=le?Ni(le):null,le!==null&&(et=u(le),ge=le.tag,le!==et||ge!==5&&ge!==27&&ge!==6)&&(le=null)):(F=null,le=z),F!==le)){if(ge=Cl,K="onMouseLeave",P="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ge=or,K="onPointerLeave",P="onPointerEnter",k="pointer"),et=F==null?B:Cn(F),L=le==null?B:Cn(le),B=new ge(K,k+"leave",F,a,G),B.target=et,B.relatedTarget=L,K=null,Ni(G)===z&&(ge=new ge(P,k+"enter",le,a,G),ge.target=L,ge.relatedTarget=et,K=ge),et=K,F&&le)t:{for(ge=S1,P=F,k=le,L=0,K=P;K;K=ge(K))L++;K=0;for(var me=k;me;me=ge(me))K++;for(;0<L-K;)P=ge(P),L--;for(;0<K-L;)k=ge(k),K--;for(;L--;){if(P===k||k!==null&&P===k.alternate){ge=P;break t}P=ge(P),k=ge(k)}ge=null}else ge=null;F!==null&&gE(Q,B,F,ge,!1),le!==null&&et!==null&&gE(Q,et,le,ge,!0)}}e:{if(B=z?Cn(z):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var Be=ky;else if(Dy(B))if(My)Be=VS;else{Be=MS;var de=kS}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&ja(z.elementType)&&(Be=ky):Be=PS;if(Be&&(Be=Be(n,z))){Oy(Q,Be,a,G);break e}de&&de(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Tl(B,"number",B.value)}switch(de=z?Cn(z):window,n){case"focusin":(Dy(de)||de.contentEditable==="true")&&(Qa=de,yf=z,kl=null);break;case"focusout":kl=yf=Qa=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,qy(Q,a,G);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":qy(Q,a,G)}var Ie;if(Fe)e:{switch(n){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Ya?Ws(n,a)&&(ke="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(zi&&a.locale!=="ko"&&(Ya||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Ya&&(Ie=Rl()):(Pi=G,Sl="value"in Pi?Pi.value:Pi.textContent,Ya=!0)),de=Rh(z,ke),0<de.length&&(ke=new Li(ke,n,null,a,G),Q.push({event:ke,listeners:de}),Ie?ke.data=Ie:(Ie=Ka(a),Ie!==null&&(ke.data=Ie)))),(Ie=Kn?NS(n,a):xS(n,a))&&(ke=Rh(z,"onBeforeInput"),0<ke.length&&(de=new Li("onBeforeInput","beforeinput",null,a,G),Q.push({event:de,listeners:ke}),de.data=Ie)),T1(Q,n,z,a,G)}mE(Q,r)})}function ru(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Rh(n,r){for(var a=r+"Capture",l=[];n!==null;){var h=n,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=ui(n,a),h!=null&&l.unshift(ru(n,h,f)),h=ui(n,r),h!=null&&l.push(ru(n,h,f))),n.tag===3)return l;n=n.return}return[]}function S1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function gE(n,r,a,l,h){for(var f=r._reactName,_=[];a!==null&&a!==l;){var b=a,x=b.alternate,z=b.stateNode;if(b=b.tag,x!==null&&x===l)break;b!==5&&b!==26&&b!==27||z===null||(x=z,h?(z=ui(a,f),z!=null&&_.unshift(ru(a,z,x))):h||(z=ui(a,f),z!=null&&_.push(ru(a,z,x)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var R1=/\r\n?/g,I1=/\u0000|\uFFFD/g;function yE(n){return(typeof n=="string"?n:""+n).replace(R1,`
`).replace(I1,"")}function _E(n,r){return r=yE(r),yE(n)===r}function Ze(n,r,a,l,h,f){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||vn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&vn(n,""+l);break;case"className":Nn(n,"class",l);break;case"tabIndex":Nn(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(n,a,l);break;case"style":Al(n,l,f);break;case"data":if(r!=="object"){Nn(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ba(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(r!=="input"&&Ze(n,r,"name",h.name,h,null),Ze(n,r,"formEncType",h.formEncType,h,null),Ze(n,r,"formMethod",h.formMethod,h,null),Ze(n,r,"formTarget",h.formTarget,h,null)):(Ze(n,r,"encType",h.encType,h,null),Ze(n,r,"method",h.method,h,null),Ze(n,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Ba(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=li);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Ba(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":xe("beforetoggle",n),xe("toggle",n),La(n,"popover",l);break;case"xlinkActuate":Nt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":La(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rc.get(a)||a,La(n,a,l))}}function Hm(n,r,a,l,h,f){switch(a){case"style":Al(n,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?vn(n,l):(typeof l=="number"||typeof l=="bigint")&&vn(n,""+l);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"onClick":l!=null&&(n.onclick=li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),f=n[Gt]||null,f=f!=null?f[a]:null,typeof f=="function"&&n.removeEventListener(r,f,h),typeof l=="function")){typeof f!="function"&&f!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,h);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):La(n,a,l)}}}function tn(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var l=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ze(n,r,f,_,a,null)}}h&&Ze(n,r,"srcSet",a.srcSet,a,null),l&&Ze(n,r,"src",a.src,a,null);return;case"input":xe("invalid",n);var b=f=_=h=null,x=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":x=G;break;case"defaultChecked":z=G;break;case"value":f=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:Ze(n,r,l,G,a,null)}}Ac(n,f,b,x,z,_,h,!1);return;case"select":xe("invalid",n),l=_=f=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":f=b;break;case"defaultValue":_=b;break;case"multiple":l=b;default:Ze(n,r,h,b,a,null)}r=f,a=_,n.multiple=!!l,r!=null?zr(n,!!l,r,!1):a!=null&&zr(n,!!l,a,!0);return;case"textarea":xe("invalid",n),f=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":l=b;break;case"defaultValue":h=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ze(n,r,_,b,a,null)}jr(n,l,h,f);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(n,r,x,l,a,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(l=0;l<iu.length;l++)xe(iu[l],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ze(n,r,z,l,a,null)}return;default:if(ja(r)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Hm(n,r,G,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Ze(n,r,b,l,a,null))}function C1(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,_=null,b=null,x=null,z=null,G=null;for(F in a){var Q=a[F];if(a.hasOwnProperty(F)&&Q!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":x=Q;default:l.hasOwnProperty(F)||Ze(n,r,F,null,l,Q)}}for(var B in l){var F=l[B];if(Q=a[B],l.hasOwnProperty(B)&&(F!=null||Q!=null))switch(B){case"type":f=F;break;case"name":h=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":_=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==Q&&Ze(n,r,B,F,l,Q)}}za(n,_,b,x,z,G,f,h);return;case"select":F=_=b=B=null;for(f in a)if(x=a[f],a.hasOwnProperty(f)&&x!=null)switch(f){case"value":break;case"multiple":F=x;default:l.hasOwnProperty(f)||Ze(n,r,f,null,l,x)}for(h in l)if(f=l[h],x=a[h],l.hasOwnProperty(h)&&(f!=null||x!=null))switch(h){case"value":B=f;break;case"defaultValue":b=f;break;case"multiple":_=f;default:f!==x&&Ze(n,r,h,f,l,x)}r=b,a=_,l=F,B!=null?zr(n,!!a,B,!1):!!l!=!!a&&(r!=null?zr(n,!!a,r,!0):zr(n,!!a,a?[]:"",!1));return;case"textarea":F=B=null;for(b in a)if(h=a[b],a.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ze(n,r,b,null,l,h)}for(_ in l)if(h=l[_],f=a[_],l.hasOwnProperty(_)&&(h!=null||f!=null))switch(_){case"value":B=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&Ze(n,r,_,h,l,f)}wc(n,B,F);return;case"option":for(var le in a)if(B=a[le],a.hasOwnProperty(le)&&B!=null&&!l.hasOwnProperty(le))switch(le){case"selected":n.selected=!1;break;default:Ze(n,r,le,null,l,B)}for(x in l)if(B=l[x],F=a[x],l.hasOwnProperty(x)&&B!==F&&(B!=null||F!=null))switch(x){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ze(n,r,x,B,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)B=a[ge],a.hasOwnProperty(ge)&&B!=null&&!l.hasOwnProperty(ge)&&Ze(n,r,ge,null,l,B);for(z in l)if(B=l[z],F=a[z],l.hasOwnProperty(z)&&B!==F&&(B!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:Ze(n,r,z,B,l,F)}return;default:if(ja(r)){for(var et in a)B=a[et],a.hasOwnProperty(et)&&B!==void 0&&!l.hasOwnProperty(et)&&Hm(n,r,et,void 0,l,B);for(G in l)B=l[G],F=a[G],!l.hasOwnProperty(G)||B===F||B===void 0&&F===void 0||Hm(n,r,G,B,l,F);return}}for(var P in a)B=a[P],a.hasOwnProperty(P)&&B!=null&&!l.hasOwnProperty(P)&&Ze(n,r,P,null,l,B);for(Q in l)B=l[Q],F=a[Q],!l.hasOwnProperty(Q)||B===F||B==null&&F==null||Ze(n,r,Q,B,l,F)}function vE(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function N1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],f=h.transferSize,_=h.initiatorType,b=h.duration;if(f&&b&&vE(_)){for(_=0,b=h.responseEnd,l+=1;l<a.length;l++){var x=a[l],z=x.startTime;if(z>b)break;var G=x.transferSize,Q=x.initiatorType;G&&vE(Q)&&(x=x.responseEnd,_+=G*(x<b?1:(b-z)/(x-z)))}if(--l,r+=8*(f+_)/(h.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Fm=null,Gm=null;function Ih(n){return n.nodeType===9?n:n.ownerDocument}function EE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Km(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ym=null;function x1(){var n=window.event;return n&&n.type==="popstate"?n===Ym?!1:(Ym=n,!0):(Ym=null,!1)}var bE=typeof setTimeout=="function"?setTimeout:void 0,D1=typeof clearTimeout=="function"?clearTimeout:void 0,AE=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof AE<"u"?function(n){return AE.resolve(null).then(n).catch(k1)}:bE;function k1(n){setTimeout(function(){throw n})}function us(n){return n==="head"}function wE(n,r){var a=r,l=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){n.removeChild(h),bo(r);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")su(n.ownerDocument.documentElement);else if(a==="head"){a=n.ownerDocument.head,su(a);for(var f=a.firstChild;f;){var _=f.nextSibling,b=f.nodeName;f[Ci]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&su(n.ownerDocument.body);a=h}while(a);bo(r)}function SE(n,r){var a=n;n=0;do{var l=a.nextSibling;if(a.nodeType===1?r?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(r?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(n===0)break;n--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||n++;a=l}while(a)}function Qm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qm(a),Ua(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function M1(n,r,a,l){for(;n.nodeType===1;){var h=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ci])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(f=n.getAttribute("rel"),f==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(f!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(f=n.getAttribute("src"),(f!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===f)return n}else return n;if(n=Zn(n.nextSibling),n===null)break}return null}function P1(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Zn(n.nextSibling),n===null))return null;return n}function RE(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Zn(n.nextSibling),n===null))return null;return n}function $m(n){return n.data==="$?"||n.data==="$~"}function Xm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function V1(n,r){var a=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||a.readyState!=="loading")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Zn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var Wm=null;function IE(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"||a==="/&"){if(r===0)return Zn(n.nextSibling);r--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||r++}n=n.nextSibling}return null}function CE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(r===0)return n;r--}else a!=="/$"&&a!=="/&"||r++}n=n.previousSibling}return null}function NE(n,r,a){switch(r=Ih(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function su(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ua(n)}var ei=new Map,xE=new Set;function Ch(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var br=ne.d;ne.d={f:U1,r:L1,D:z1,C:j1,L:B1,m:q1,X:F1,S:H1,M:G1};function U1(){var n=br.f(),r=vh();return n||r}function L1(n){var r=Hn(n);r!==null&&r.tag===5&&r.type==="form"?Y_(r):br.r(n)}var vo=typeof document>"u"?null:document;function DE(n,r,a){var l=vo;if(l&&typeof r=="string"&&r){var h=_n(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),xE.has(h)||(xE.add(h),n={rel:n,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),tn(r,"link",n),Ct(r),l.head.appendChild(r)))}}function z1(n){br.D(n),DE("dns-prefetch",n,null)}function j1(n,r){br.C(n,r),DE("preconnect",n,r)}function B1(n,r,a){br.L(n,r,a);var l=vo;if(l&&n&&r){var h='link[rel="preload"][as="'+_n(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_n(a.imageSizes)+'"]')):h+='[href="'+_n(n)+'"]';var f=h;switch(r){case"style":f=Eo(n);break;case"script":f=To(n)}ei.has(f)||(n=T({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),ei.set(f,n),l.querySelector(h)!==null||r==="style"&&l.querySelector(au(f))||r==="script"&&l.querySelector(ou(f))||(r=l.createElement("link"),tn(r,"link",n),Ct(r),l.head.appendChild(r)))}}function q1(n,r){br.m(n,r);var a=vo;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+_n(l)+'"][href="'+_n(n)+'"]',f=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=To(n)}if(!ei.has(f)&&(n=T({rel:"modulepreload",href:n},r),ei.set(f,n),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ou(f)))return}l=a.createElement("link"),tn(l,"link",n),Ct(l),a.head.appendChild(l)}}}function H1(n,r,a){br.S(n,r,a);var l=vo;if(l&&n){var h=xi(l).hoistableStyles,f=Eo(n);r=r||"default";var _=h.get(f);if(!_){var b={loading:0,preload:null};if(_=l.querySelector(au(f)))b.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":r},a),(a=ei.get(f))&&Jm(n,a);var x=_=l.createElement("link");Ct(x),tn(x,"link",n),x._p=new Promise(function(z,G){x.onload=z,x.onerror=G}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Nh(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:b},h.set(f,_)}}}function F1(n,r){br.X(n,r);var a=vo;if(a&&n){var l=xi(a).hoistableScripts,h=To(n),f=l.get(h);f||(f=a.querySelector(ou(h)),f||(n=T({src:n,async:!0},r),(r=ei.get(h))&&Zm(n,r),f=a.createElement("script"),Ct(f),tn(f,"link",n),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function G1(n,r){br.M(n,r);var a=vo;if(a&&n){var l=xi(a).hoistableScripts,h=To(n),f=l.get(h);f||(f=a.querySelector(ou(h)),f||(n=T({src:n,async:!0,type:"module"},r),(r=ei.get(h))&&Zm(n,r),f=a.createElement("script"),Ct(f),tn(f,"link",n),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(h,f))}}function OE(n,r,a,l){var h=(h=Re.current)?Ch(h):null;if(!h)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Eo(a.href),a=xi(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Eo(a.href);var f=xi(h).hoistableStyles,_=f.get(n);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(n,_),(f=h.querySelector(au(n)))&&!f._p&&(_.instance=f,_.state.loading=5),ei.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(n,a),f||K1(h,n,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=To(a),a=xi(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Eo(n){return'href="'+_n(n)+'"'}function au(n){return'link[rel="stylesheet"]['+n+"]"}function kE(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function K1(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),tn(r,"link",a),Ct(r),n.head.appendChild(r))}function To(n){return'[src="'+_n(n)+'"]'}function ou(n){return"script[async]"+n}function ME(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+_n(a.href)+'"]');if(l)return r.instance=l,Ct(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Ct(l),tn(l,"style",h),Nh(l,a.precedence,n),r.instance=l;case"stylesheet":h=Eo(a.href);var f=n.querySelector(au(h));if(f)return r.state.loading|=4,r.instance=f,Ct(f),f;l=kE(a),(h=ei.get(h))&&Jm(l,h),f=(n.ownerDocument||n).createElement("link"),Ct(f);var _=f;return _._p=new Promise(function(b,x){_.onload=b,_.onerror=x}),tn(f,"link",l),r.state.loading|=4,Nh(f,a.precedence,n),r.instance=f;case"script":return f=To(a.src),(h=n.querySelector(ou(f)))?(r.instance=h,Ct(h),h):(l=a,(h=ei.get(f))&&(l=T({},a),Zm(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),Ct(h),tn(h,"link",l),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Nh(l,a.precedence,n));return r.instance}function Nh(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,f=h,_=0;_<l.length;_++){var b=l[_];if(b.dataset.precedence===r)f=b;else if(f!==h)break}f?f.parentNode.insertBefore(n,f.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function Jm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Zm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var xh=null;function PE(n,r,a){if(xh===null){var l=new Map,h=xh=new Map;h.set(a,l)}else h=xh,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),h=0;h<a.length;h++){var f=a[h];if(!(f[Ci]||f[It]||n==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(r)||"";_=n+_;var b=l.get(_);b?b.push(f):l.set(_,[f])}}return l}function VE(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function Y1(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function UE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Q1(n,r,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Eo(l.href),f=r.querySelector(au(h));if(f){r=f._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=Dh.bind(n),r.then(n,n)),a.state.loading|=4,a.instance=f,Ct(f);return}f=r.ownerDocument||r,l=kE(l),(h=ei.get(h))&&Jm(l,h),f=f.createElement("link"),Ct(f);var _=f;_._p=new Promise(function(b,x){_.onload=b,_.onerror=x}),tn(f,"link",l),a.instance=f}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=Dh.bind(n),r.addEventListener("load",a),r.addEventListener("error",a))}}var ep=0;function $1(n,r){return n.stylesheets&&n.count===0&&kh(n,n.stylesheets),0<n.count||0<n.imgCount?function(a){var l=setTimeout(function(){if(n.stylesheets&&kh(n,n.stylesheets),n.unsuspend){var f=n.unsuspend;n.unsuspend=null,f()}},6e4+r);0<n.imgBytes&&ep===0&&(ep=62500*N1());var h=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&kh(n,n.stylesheets),n.unsuspend)){var f=n.unsuspend;n.unsuspend=null,f()}},(n.imgBytes>ep?50:800)+r);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Dh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Oh=null;function kh(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Oh=new Map,r.forEach(X1,n),Oh=null,Dh.call(n))}function X1(n,r){if(!(r.state.loading&4)){var a=Oh.get(n);if(a)var l=a.get(null);else{a=new Map,Oh.set(n,a);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var _=h[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),f=a.get(_)||l,f===l&&a.set(null,h),a.set(_,h),this.count++,l=Dh.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),f?f.parentNode.insertBefore(h,f.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var lu={$$typeof:ue,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function W1(n,r,a,l,h,f,_,b,x){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.hiddenUpdates=Ri(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function LE(n,r,a,l,h,f,_,b,x,z,G,Q){return n=new W1(n,r,a,_,x,z,G,Q,b),r=1,f===!0&&(r|=24),f=Dn(3,null,null,r),n.current=f,f.stateNode=n,r=kf(),r.refCount++,n.pooledCache=r,r.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:r},Uf(f),n}function zE(n){return n?(n=Wa,n):Wa}function jE(n,r,a,l,h,f){h=zE(h),l.context===null?l.context=h:l.pendingContext=h,l=Jr(r),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=Zr(n,l,r),a!==null&&(wn(a,n,r),jl(a,n,r))}function BE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function tp(n,r){BE(n,r),(n=n.alternate)&&BE(n,r)}function qE(n){if(n.tag===13||n.tag===31){var r=ea(n,67108864);r!==null&&wn(r,n,67108864),tp(n,67108864)}}function HE(n){if(n.tag===13||n.tag===31){var r=Vn();r=qs(r);var a=ea(n,r);a!==null&&wn(a,n,r),tp(n,r)}}var Mh=!0;function J1(n,r,a,l){var h=j.T;j.T=null;var f=ne.p;try{ne.p=2,np(n,r,a,l)}finally{ne.p=f,j.T=h}}function Z1(n,r,a,l){var h=j.T;j.T=null;var f=ne.p;try{ne.p=8,np(n,r,a,l)}finally{ne.p=f,j.T=h}}function np(n,r,a,l){if(Mh){var h=ip(l);if(h===null)qm(n,r,l,Ph,a),GE(n,l);else if(tR(h,n,r,a,l))l.stopPropagation();else if(GE(n,l),r&4&&-1<eR.indexOf(n)){for(;h!==null;){var f=Hn(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=wi(f.pendingLanes);if(_!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var x=1<<31-Et(_);b.entanglements[1]|=x,_&=~x}Hi(f),(Ge&6)===0&&(yh=fn()+500,nu(0))}}break;case 31:case 13:b=ea(f,2),b!==null&&wn(b,f,2),vh(),tp(f,2)}if(f=ip(l),f===null&&qm(n,r,l,Ph,a),f===h)break;h=f}h!==null&&l.stopPropagation()}else qm(n,r,l,null,a)}}function ip(n){return n=Fn(n),rp(n)}var Ph=null;function rp(n){if(Ph=null,n=Ni(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=d(r),n!==null)return n;n=null}else if(a===31){if(n=m(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ph=n,null}function FE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ls()){case hl:return 2;case dl:return 8;case Ur:case cf:return 32;case fc:return 268435456;default:return 32}default:return 32}}var sp=!1,cs=null,hs=null,ds=null,uu=new Map,cu=new Map,fs=[],eR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function GE(n,r){switch(n){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":hs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":uu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cu.delete(r.pointerId)}}function hu(n,r,a,l,h,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[h]},r!==null&&(r=Hn(r),r!==null&&qE(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function tR(n,r,a,l,h){switch(r){case"focusin":return cs=hu(cs,n,r,a,l,h),!0;case"dragenter":return hs=hu(hs,n,r,a,l,h),!0;case"mouseover":return ds=hu(ds,n,r,a,l,h),!0;case"pointerover":var f=h.pointerId;return uu.set(f,hu(uu.get(f)||null,n,r,a,l,h)),!0;case"gotpointercapture":return f=h.pointerId,cu.set(f,hu(cu.get(f)||null,n,r,a,l,h)),!0}return!1}function KE(n){var r=Ni(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=d(a),r!==null){n.blockedOn=r,ai(n.priority,function(){HE(a)});return}}else if(r===31){if(r=m(a),r!==null){n.blockedOn=r,ai(n.priority,function(){HE(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ip(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);wl=l,a.target.dispatchEvent(l),wl=null}else return r=Hn(a),r!==null&&qE(r),n.blockedOn=a,!1;r.shift()}return!0}function YE(n,r,a){Vh(n)&&a.delete(r)}function nR(){sp=!1,cs!==null&&Vh(cs)&&(cs=null),hs!==null&&Vh(hs)&&(hs=null),ds!==null&&Vh(ds)&&(ds=null),uu.forEach(YE),cu.forEach(YE)}function Uh(n,r){n.blockedOn===r&&(n.blockedOn=null,sp||(sp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,nR)))}var Lh=null;function QE(n){Lh!==n&&(Lh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Lh===n&&(Lh=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],h=n[r+2];if(typeof l!="function"){if(rp(l||a)===null)continue;break}var f=Hn(a);f!==null&&(n.splice(r,3),r-=3,im(f,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function bo(n){function r(x){return Uh(x,n)}cs!==null&&Uh(cs,n),hs!==null&&Uh(hs,n),ds!==null&&Uh(ds,n),uu.forEach(r),cu.forEach(r);for(var a=0;a<fs.length;a++){var l=fs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)KE(a),a.blockedOn===null&&fs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],f=a[l+1],_=h[Gt]||null;if(typeof f=="function")_||QE(a);else if(_){var b=null;if(f&&f.hasAttribute("formAction")){if(h=f,_=f[Gt]||null)b=_.formAction;else if(rp(h)!==null)continue}else b=_.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),QE(a)}}}function $E(){function n(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function r(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),h!==null&&(h(),h=null)}}}function ap(n){this._internalRoot=n}zh.prototype.render=ap.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Vn();jE(a,l,n,r,null,null)},zh.prototype.unmount=ap.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;jE(n.current,2,null,n,null,null),vh(),r[Ii]=null}};function zh(n){this._internalRoot=n}zh.prototype.unstable_scheduleHydration=function(n){if(n){var r=vc();n={blockedOn:null,target:n,priority:r};for(var a=0;a<fs.length&&r!==0&&r<fs[a].priority;a++);fs.splice(a,0,n),a===0&&KE(n)}};var XE=e.version;if(XE!=="19.2.4")throw Error(s(527,XE,"19.2.4"));ne.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=y(r),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var iR={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jh.isDisabled&&jh.supportsFiber)try{ri=jh.inject(iR),Xt=jh}catch{}}return fu.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",h=iv,f=rv,_=sv;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError)),r=LE(n,1,!1,null,null,a,l,null,h,f,_,$E),n[Ii]=r.current,Bm(n),new ap(r)},fu.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,h="",f=iv,_=rv,b=sv,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),r=LE(n,1,!0,r,a??null,l,h,x,f,_,b,$E),r.context=zE(null),a=r.current,l=Vn(),l=qs(l),h=Jr(l),h.callback=null,Zr(a,h,l),a=l,r.current.lanes=a,js(r,a),Hi(r),n[Ii]=r.current,Bm(n),new zh(r)},fu.version="19.2.4",fu}var aT;function mR(){if(aT)return up.exports;aT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),up.exports=fR(),up.exports}var pR=mR();const gR=tb(pR),yR=()=>{};var oT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_R=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],d=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(d&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],d=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|d&63)}}return e.join("")},ib={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],d=o+1<i.length,m=d?i[o+1]:0,p=o+2<i.length,y=p?i[o+2]:0,v=u>>2,T=(u&3)<<4|m>>4;let R=(m&15)<<2|y>>6,q=y&63;p||(q=64,d||(R=64)),s.push(t[v],t[T],t[R],t[q])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(nb(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):_R(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const y=o<i.length?t[i.charAt(o)]:64;++o;const T=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||y==null||T==null)throw new vR;const R=u<<2|m>>4;if(s.push(R),y!==64){const q=m<<4&240|y>>2;if(s.push(q),T!==64){const Y=y<<6&192|T;s.push(Y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class vR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ER=function(i){const e=nb(i);return ib.encodeByteArray(e,!0)},ld=function(i){return ER(i).replace(/\./g,"")},cg=function(i){try{return ib.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ud(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!TR(t)||(i[t]=ud(i[t],e[t]));return i}function TR(i){return i!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=()=>rb().__FIREBASE_DEFAULTS__,AR=()=>{if(typeof process>"u"||typeof oT>"u")return;const i=oT.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},wR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cg(i[1]);return e&&JSON.parse(e)},Nd=()=>{try{return yR()||bR()||AR()||wR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},SR=i=>{var e,t;return(t=(e=Nd())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},RR=i=>{const e=SR(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},hg=()=>{var i;return(i=Nd())==null?void 0:i.config},IR=i=>{var e;return(e=Nd())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dg(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ld(JSON.stringify(t)),ld(JSON.stringify(d)),""].join(".")}const Ru={};function NR(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ru))Ru[e]?i.emulator.push(e):i.prod.push(e);return i}function xR(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let lT=!1;function fg(i,e){if(typeof window>"u"||typeof document>"u"||!Ds(window.location.host)||Ru[i]===e||Ru[i]||lT)return;Ru[i]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=NR().prod.length>0;function d(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function p(R,q){R.setAttribute("width","24"),R.setAttribute("id",q),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function y(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{lT=!0,d()},R}function v(R,q){R.setAttribute("id",q),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=xR(s),q=t("text"),Y=document.getElementById(q)||document.createElement("span"),ee=t("learnmore"),Z=document.getElementById(ee)||document.createElement("a"),ce=t("preprendIcon"),fe=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ue=R.element;m(ue),v(Z,ee);const ye=y();p(fe,ce),ue.append(fe,Y,Z,ye),document.body.appendChild(ue)}u?(Y.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function DR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function mg(){var e;const i=(e=Nd())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OR(){return typeof window<"u"||ab()}function ab(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function kR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ob(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lb(){const i=Lt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function MR(){return!mg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cd(){try{return typeof indexedDB=="object"}catch{return!1}}function PR(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="FirebaseError";class dn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=VR,Object.setPrototypeOf(this,dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ia.prototype.create)}}class Ia{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],d=u?UR(u,s):"Error",m=`${this.serviceName}: ${d} (${o}).`;return new dn(o,m,s)}}function UR(i,e){return i.replace(LR,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const LR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function zR(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function zo(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],d=e[o];if(cT(u)&&cT(d)){if(!zo(u,d))return!1}else if(u!==d)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function cT(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function No(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Eu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function ub(i,e){const t=new jR(i,e);return t.subscribe.bind(t)}class jR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");BR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=fp),o.error===void 0&&(o.error=fp),o.complete===void 0&&(o.complete=fp);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BR(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function fp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(i){return i&&i._delegate?i._delegate:i}class vi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new CR;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FR(e))try{this.getOrInitializeService({instanceIdentifier:fa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=fa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fa){return this.instances.has(e)}getOptions(e=fa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,d]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&d.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:HR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fa){return this.component?this.component.multipleInstances?e:fa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HR(i){return i===fa?void 0:i}function FR(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=[];var De;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(De||(De={}));const hb={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},GR=De.INFO,KR={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},YR=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=KR[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=GR,this._logHandler=YR,this._userLogHandler=null,gg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}function QR(i){gg.forEach(e=>{e.setLogLevel(i)})}function $R(i,e){for(const t of gg){let s=null;e&&e.level&&(s=hb[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(o,u,...d)=>{const m=d.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");u>=(s??o.logLevel)&&i({level:De[u].toLowerCase(),message:m,args:d,type:o.name})}}}const XR=(i,e)=>e.some(t=>i instanceof t);let hT,dT;function WR(){return hT||(hT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JR(){return dT||(dT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const db=new WeakMap,Op=new WeakMap,fb=new WeakMap,mp=new WeakMap,yg=new WeakMap;function ZR(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",d)},u=()=>{t(_s(i.result)),o()},d=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",d)});return e.then(t=>{t instanceof IDBCursor&&db.set(t,i)}).catch(()=>{}),yg.set(e,i),e}function eI(i){if(Op.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",d),i.removeEventListener("abort",d)},u=()=>{t(),o()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",d),i.addEventListener("abort",d)});Op.set(i,e)}let kp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Op.get(i);if(e==="objectStoreNames")return i.objectStoreNames||fb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _s(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function tI(i){kp=i(kp)}function nI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(pp(this),e,...t);return fb.set(s,e.sort?e.sort():[e]),_s(s)}:JR().includes(i)?function(...e){return i.apply(pp(this),e),_s(db.get(this))}:function(...e){return _s(i.apply(pp(this),e))}}function iI(i){return typeof i=="function"?nI(i):(i instanceof IDBTransaction&&eI(i),XR(i,WR())?new Proxy(i,kp):i)}function _s(i){if(i instanceof IDBRequest)return ZR(i);if(mp.has(i))return mp.get(i);const e=iI(i);return e!==i&&(mp.set(i,e),yg.set(e,i)),e}const pp=i=>yg.get(i);function rI(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const d=indexedDB.open(i,e),m=_s(d);return s&&d.addEventListener("upgradeneeded",p=>{s(_s(d.result),p.oldVersion,p.newVersion,_s(d.transaction),p)}),t&&d.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const sI=["get","getKey","getAll","getAllKeys","count"],aI=["put","add","delete","clear"],gp=new Map;function fT(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(gp.get(e))return gp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=aI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||sI.includes(t)))return;const u=async function(d,...m){const p=this.transaction(d,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[t](...m),o&&p.done]))[0]};return gp.set(e,u),u}tI(i=>({...i,get:(e,t,s)=>fT(e,t)||i.get(e,t,s),has:(e,t)=>!!fT(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",Mp="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new xd("@firebase/app"),uI="@firebase/app-compat",cI="@firebase/analytics-compat",hI="@firebase/analytics",dI="@firebase/app-check-compat",fI="@firebase/app-check",mI="@firebase/auth",pI="@firebase/auth-compat",gI="@firebase/database",yI="@firebase/data-connect",_I="@firebase/database-compat",vI="@firebase/functions",EI="@firebase/functions-compat",TI="@firebase/installations",bI="@firebase/installations-compat",AI="@firebase/messaging",wI="@firebase/messaging-compat",SI="@firebase/performance",RI="@firebase/performance-compat",II="@firebase/remote-config",CI="@firebase/remote-config-compat",NI="@firebase/storage",xI="@firebase/storage-compat",DI="@firebase/firestore",OI="@firebase/ai",kI="@firebase/firestore-compat",MI="firebase",PI="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]",VI={[hd]:"fire-core",[uI]:"fire-core-compat",[hI]:"fire-analytics",[cI]:"fire-analytics-compat",[fI]:"fire-app-check",[dI]:"fire-app-check-compat",[mI]:"fire-auth",[pI]:"fire-auth-compat",[gI]:"fire-rtdb",[yI]:"fire-data-connect",[_I]:"fire-rtdb-compat",[vI]:"fire-fn",[EI]:"fire-fn-compat",[TI]:"fire-iid",[bI]:"fire-iid-compat",[AI]:"fire-fcm",[wI]:"fire-fcm-compat",[SI]:"fire-perf",[RI]:"fire-perf-compat",[II]:"fire-rc",[CI]:"fire-rc-compat",[NI]:"fire-gcs",[xI]:"fire-gcs-compat",[DI]:"fire-fst",[kI]:"fire-fst-compat",[OI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map,jo=new Map,Bo=new Map;function Uu(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function mb(i,e){i.container.addOrOverwriteComponent(e)}function Cr(i){const e=i.name;if(Bo.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Bo.set(e,i);for(const t of ws.values())Uu(t,i);for(const t of jo.values())Uu(t,i);return!0}function _g(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function UI(i,e,t=As){_g(i,e).clearInstance(t)}function vg(i){return i.options!==void 0}function pb(i){return vg(i)?!1:"authIdToken"in i||"appCheckToken"in i||"releaseOnDeref"in i||"automaticDataCollectionEnabled"in i}function ot(i){return i==null?!1:i.settings!==void 0}function LI(){Bo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Ia("app","Firebase",zI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gb=class{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(i,e){const t=cg(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const o=JSON.parse(t).exp*1e3,u=new Date().getTime();o-u<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class jI extends gb{constructor(e,t,s,o){const u=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,d={name:s,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,d,o);else{const m=e;super(m.options,d,o)}this._serverConfig={automaticDataCollectionEnabled:u,...t},this._serverConfig.authIdToken&&mT(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&mT(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Bn(hd,Mp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Tg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw jn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=PI;function Eg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:As,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw jn.create("bad-app-name",{appName:String(o)});if(t||(t=hg()),!t)throw jn.create("no-options");const u=ws.get(o);if(u){if(zo(t,u.options)&&zo(s,u.config))return u;throw jn.create("duplicate-app",{appName:o})}const d=new cb(o);for(const p of Bo.values())d.addComponent(p);const m=new gb(t,s,d);return ws.set(o,m),m}function BI(i,e={}){if(OR()&&!ab())throw jn.create("invalid-server-app-environment");let t,s=e||{};if(i&&(vg(i)?t=i.options:pb(i)?s=i:t=i),s.automaticDataCollectionEnabled===void 0&&(s.automaticDataCollectionEnabled=!0),t||(t=hg()),!t)throw jn.create("no-options");const o={...s,...t};o.releaseOnDeref!==void 0&&delete o.releaseOnDeref;const u=v=>[...v].reduce((T,R)=>Math.imul(31,T)+R.charCodeAt(0)|0,0);if(s.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw jn.create("finalization-registry-not-supported",{});const d=""+u(JSON.stringify(o)),m=jo.get(d);if(m)return m.incRefCount(s.releaseOnDeref),m;const p=new cb(d);for(const v of Bo.values())p.addComponent(v);const y=new jI(t,s,d,p);return jo.set(d,y),y}function yb(i=As){const e=ws.get(i);if(!e&&i===As&&hg())return Eg();if(!e)throw jn.create("no-app",{appName:i});return e}function qI(){return Array.from(ws.values())}async function Tg(i){let e=!1;const t=i.name;ws.has(t)?(e=!0,ws.delete(t)):jo.has(t)&&i.decRefCount()<=0&&(jo.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function Bn(i,e,t){let s=VI[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const d=[`Unable to register library "${s}" with version "${e}":`];o&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(d.join(" "));return}Cr(new vi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function _b(i,e){if(i!==null&&typeof i!="function")throw jn.create("invalid-log-argument");$R(i,e)}function vb(i){QR(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="firebase-heartbeat-database",FI=1,Lu="firebase-heartbeat-store";let yp=null;function Eb(){return yp||(yp=rI(HI,FI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Lu)}catch(t){console.warn(t)}}}}).catch(i=>{throw jn.create("idb-open",{originalErrorMessage:i.message})})),yp}async function GI(i){try{const t=(await Eb()).transaction(Lu),s=await t.objectStore(Lu).get(Tb(i));return await t.done,s}catch(e){if(e instanceof dn)Ir.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function pT(i,e){try{const s=(await Eb()).transaction(Lu,"readwrite");await s.objectStore(Lu).put(e,Tb(i)),await s.done}catch(t){if(t instanceof dn)Ir.warn(t.message);else{const s=jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function Tb(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=1024,YI=30;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=gT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>YI){const d=WI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gT(),{heartbeatsToSend:s,unsentEntries:o}=$I(this._heartbeatsCache.heartbeats),u=ld(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function gT(){return new Date().toISOString().substring(0,10)}function $I(i,e=KI){const t=[];let s=i.slice();for(const o of i){const u=t.find(d=>d.agent===o.agent);if(u){if(u.dates.push(o.date),yT(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),yT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cd()?PR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await GI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return pT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function yT(i){return ld(JSON.stringify({version:2,heartbeats:i})).length}function WI(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(i){Cr(new vi("platform-logger",e=>new oI(e),"PRIVATE")),Cr(new vi("heartbeat",e=>new QI(e),"PRIVATE")),Bn(hd,Mp,i),Bn(hd,Mp,"esm2020"),Bn("fire-js","")}JI("");const ZI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:dn,SDK_VERSION:Or,_DEFAULT_ENTRY_NAME:As,_addComponent:Uu,_addOrOverwriteComponent:mb,_apps:ws,_clearComponents:LI,_components:Bo,_getProvider:_g,_isFirebaseApp:vg,_isFirebaseServerApp:ot,_isFirebaseServerAppSettings:pb,_registerComponent:Cr,_removeServiceInstance:UI,_serverApps:jo,deleteApp:Tg,getApp:yb,getApps:qI,initializeApp:Eg,initializeServerApp:BI,onLog:_b,registerVersion:Bn,setLogLevel:vb},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this._delegate=e,this.firebase=t,Uu(e,new vi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Tg(this._delegate)))}_getService(e,t=As){var o;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((o=s.getComponent())==null?void 0:o.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=As){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Uu(this._delegate,e)}_addOrOverwriteComponent(e){mb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},_T=new Ia("app-compat","Firebase",tC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(i){const e={},t={__esModule:!0,initializeApp:u,app:o,registerVersion:Bn,setLogLevel:vb,onLog:_b,apps:null,SDK_VERSION:Or,INTERNAL:{registerComponent:m,removeApp:s,useAsService:p,modularAPIs:ZI}};t.default=t,Object.defineProperty(t,"apps",{get:d});function s(y){delete e[y]}function o(y){if(y=y||As,!uT(e,y))throw _T.create("no-app",{appName:y});return e[y]}o.App=i;function u(y,v={}){const T=Eg(y,v);if(uT(e,T.name))return e[T.name];const R=new i(T,t);return e[T.name]=R,R}function d(){return Object.keys(e).map(y=>e[y])}function m(y){const v=y.name,T=v.replace("-compat","");if(Cr(y)&&y.type==="PUBLIC"){const R=(q=o())=>{if(typeof q[T]!="function")throw _T.create("invalid-app-argument",{appName:v});return q[T]()};y.serviceProps!==void 0&&ud(R,y.serviceProps),t[T]=R,i.prototype[T]=function(...q){return this._getService.bind(this,v).apply(this,y.multipleInstances?q:[])}}return y.type==="PUBLIC"?t[T]:null}function p(y,v){return v==="serverAuth"?null:v}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(){const i=nC(eC);i.INTERNAL={...i.INTERNAL,createFirebaseNamespace:bb,extendNamespace:e,createSubscribe:ub,ErrorFactory:Ia,deepExtend:ud};function e(t){ud(i,t)}return i}const iC=bb();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new xd("@firebase/app-compat"),rC="@firebase/app-compat",sC="0.5.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(i){Bn(rC,sC,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const i=rb();if(i.firebase!==void 0){vT.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&vT.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Jo=iC;aC();var oC="firebase",lC="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jo.registerVersion(oC,lC,"app-compat");const mu={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},Ao={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Ab(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cC=uC,hC=Ab,wb=new Ia("auth","Firebase",Ab());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new xd("@firebase/auth");function dC(i,...e){dd.logLevel<=De.WARN&&dd.warn(`Auth (${Or}): ${i}`,...e)}function Wh(i,...e){dd.logLevel<=De.ERROR&&dd.error(`Auth (${Or}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(i,...e){throw Ag(i,...e)}function Ht(i,...e){return Ag(i,...e)}function bg(i,e,t){const s={...hC(),[e]:t};return new Ia("auth","Firebase",s).create(e,{appName:i.name})}function $t(i){return bg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zo(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&sn(i,"argument-error"),bg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ag(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return wb.create(i,...e)}function te(i,e,...t){if(!i)throw Ag(e,...t)}function Wi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Wh(e),new Error(e)}function Ei(i,e){i||Wi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function wg(){return ET()==="http:"||ET()==="https:"}function ET(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wg()||ob()||"connection"in navigator)?navigator.onLine:!0}function mC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ei(t>e,"Short delay should be less than long delay!"),this.isMobile=DR()||pg()}get(){return fC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(i,e){Ei(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yC=new Ju(3e4,6e4);function yt(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function _t(i,e,t,s,o={}){return Rb(i,o,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const m=Wo({key:i.config.apiKey,...d}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:p,...u};return kR()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&Ds(i.emulatorConfig.host)&&(y.credentials="include"),Sb.fetch()(await Ib(i,i.config.apiHost,t,m),y)})}async function Rb(i,e,t){i._canInitEmulator=!1;const s={...pC,...e};try{const o=new vC(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Tu(i,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const m=u.ok?d.errorMessage:d.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tu(i,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw Tu(i,"email-already-in-use",d);if(p==="USER_DISABLED")throw Tu(i,"user-disabled",d);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw bg(i,v,y);sn(i,v)}}catch(o){if(o instanceof dn)throw o;sn(i,"network-request-failed",{message:String(o)})}}async function kr(i,e,t,s,o={}){const u=await _t(i,e,t,s,o);return"mfaPendingCredential"in u&&sn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Ib(i,e,t,s){const o=`${e}${t}?${s}`,u=i,d=u.config.emulator?Sg(i.config,o):`${i.config.apiScheme}://${o}`;return gC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function _C(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),yC.get())})}}function Tu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Ht(i,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(i){return i!==void 0&&i.getResponse!==void 0}function bT(i){return i!==void 0&&i.enterprise!==void 0}class Cb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _C(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(i){return(await _t(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Nb(i,e){return _t(i,"GET","/v2/recaptchaConfig",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(i,e){return _t(i,"POST","/v1/accounts:delete",e)}async function bC(i,e){return _t(i,"POST","/v1/accounts:update",e)}async function fd(i,e){return _t(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AC(i,e=!1){const t=ve(i),s=await t.getIdToken(e),o=Dd(s);te(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Iu(_p(o.auth_time)),issuedAtTime:Iu(_p(o.iat)),expirationTime:Iu(_p(o.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function _p(i){return Number(i)*1e3}function Dd(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Wh("JWT malformed, contained fewer than 3 sections"),null;try{const o=cg(t);return o?JSON.parse(o):(Wh("Failed to decode base64 JWT payload"),null)}catch(o){return Wh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function AT(i){const e=Dd(i);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof dn&&wC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function wC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Iu(this.lastLoginAt),this.creationTime=Iu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(i){var T;const e=i.auth,t=await i.getIdToken(),s=await Nr(i,fd(e,{idToken:t}));te(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?xb(o.providerUserInfo):[],d=IC(i.providerData,u),m=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!(d!=null&&d.length),y=m?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Pp(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(i,v)}async function RC(i){const e=ve(i);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IC(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function xb(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(i,e){const t=await Rb(i,{},async()=>{const s=Wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,d=await Ib(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return i.emulatorConfig&&Ds(i.emulatorConfig.host)&&(p.credentials="include"),Sb.fetch()(d,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function NC(i,e){return _t(i,"POST","/v2/accounts:revokeToken",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=AT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await CC(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,d=new xo;return s&&(te(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),o&&(te(typeof o=="string","internal-error",{appName:e}),d.accessToken=o),u&&(te(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Wi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(i,e){te(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class gi{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new SC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Nr(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return AC(this,e)}reload(){return RC(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Nr(this,TC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,d=t.photoURL??void 0,m=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:R,isAnonymous:q,providerData:Y,stsTokenManager:ee}=t;te(T&&ee,e,"internal-error");const Z=xo.fromJSON(this.name,ee);te(typeof T=="string",e,"internal-error"),ps(s,e.name),ps(o,e.name),te(typeof R=="boolean",e,"internal-error"),te(typeof q=="boolean",e,"internal-error"),ps(u,e.name),ps(d,e.name),ps(m,e.name),ps(p,e.name),ps(y,e.name),ps(v,e.name);const ce=new gi({uid:T,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:q,photoURL:d,phoneNumber:u,tenantId:m,stsTokenManager:Z,createdAt:y,lastLoginAt:v});return Y&&Array.isArray(Y)&&(ce.providerData=Y.map(fe=>({...fe}))),p&&(ce._redirectEventId=p),ce}static async _fromIdTokenResponse(e,t,s=!1){const o=new xo;o.updateFromServerResponse(t);const u=new gi({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ju(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];te(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?xb(o.providerUserInfo):[],d=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new xo;m.updateFromIdToken(s);const p=new gi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:d}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Pp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Map;function Ln(i){Ei(i instanceof Function,"Expected a class definition");let e=wT.get(i);return e?(Ei(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wT.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Db.type="NONE";const qo=Db;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(i,e,t){return`firebase:${i}:${e}:${t}`}class Do{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=ga(this.userKey,o.apiKey,u),this.fullPersistenceKey=ga("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fd(this.auth,{idToken:e}).catch(()=>{});return t?gi._fromGetAccountInfoResponse(this.auth,t,e):null}return gi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Do(Ln(qo),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ln(qo);const d=ga(s,e.config.apiKey,e.name);let m=null;for(const y of t)try{const v=await y._get(d);if(v){let T;if(typeof v=="string"){const R=await fd(e,{idToken:v}).catch(()=>{});if(!R)break;T=await gi._fromGetAccountInfoResponse(e,R,v)}else T=gi._fromJSON(e,v);y!==u&&(m=T),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Do(u,e,s):(u=p[0],m&&await u._set(d,m.toJSON()),await Promise.all(t.map(async y=>{if(y!==u)try{await y._remove(d)}catch{}})),new Do(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ob(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vb(e))return"Blackberry";if(Ub(e))return"Webos";if(kb(e))return"Safari";if((e.includes("chrome/")||Mb(e))&&!e.includes("edge/"))return"Chrome";if(Zu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ob(i=Lt()){return/firefox\//i.test(i)}function kb(i=Lt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mb(i=Lt()){return/crios\//i.test(i)}function Pb(i=Lt()){return/iemobile/i.test(i)}function Zu(i=Lt()){return/android/i.test(i)}function Vb(i=Lt()){return/blackberry/i.test(i)}function Ub(i=Lt()){return/webos/i.test(i)}function ec(i=Lt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function xC(i=Lt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function DC(i=Lt()){var e;return ec(i)&&!!((e=window.navigator)!=null&&e.standalone)}function OC(){return lb()&&document.documentMode===10}function Lb(i=Lt()){return ec(i)||Zu(i)||Ub(i)||Vb(i)||/windows phone/i.test(i)||Pb(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(i,e=[]){let t;switch(i){case"Browser":t=ST(Lt());break;case"Worker":t=`${ST(Lt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Or}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((d,m)=>{try{const p=e(u);d(p)}catch(p){m(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(i,e={}){return _t(i,"GET","/v2/passwordPolicy",yt(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=6;class VC{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??PC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RT(this),this.idTokenSubscription=new RT(this),this.beforeStateQueue=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ln(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fd(this,{idToken:e}),s=await gi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(ot(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!d||d===m)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(d){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject($t(this));const t=e?ve(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MC(this),t=new VC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ia("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await NC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ln(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[Ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let d=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(m,this,"internal-error"),m.then(()=>{d||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{d=!0,p()}}else{const p=e.addObserver(t);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&dC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function dt(i){return ve(i)}class RT{constructor(e){this.auth=e,this.observer=null,this.addObserver=ub(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LC(i){tc=i}function Rg(i){return tc.loadJS(i)}function zC(){return tc.recaptchaV2Script}function jC(){return tc.recaptchaEnterpriseScript}function BC(){return tc.gapiScript}function jb(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=500,HC=6e4,Bh=1e12;class FC{constructor(e){this.auth=e,this.counter=Bh,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new YC(e,this.auth.name,t||{})),this.counter++,s}reset(e){var s;const t=e||Bh;(s=this._widgets.get(t))==null||s.delete(),this._widgets.delete(t)}getResponse(e){var s;const t=e||Bh;return((s=this._widgets.get(t))==null?void 0:s.getResponse())||""}async execute(e){var s;const t=e||Bh;return(s=this._widgets.get(t))==null||s.execute(),""}}class GC{constructor(){this.enterprise=new KC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class YC{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;te(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},HC)},qC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QC(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const $C="recaptcha-enterprise",Cu="NO_RECAPTCHA";class Bb{constructor(e){this.type=$C,this.auth=dt(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,m)=>{Nb(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new Cb(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,d(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,d,m){const p=window.grecaptcha;bT(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{d(y)}).catch(()=>{d(Cu)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GC().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(m=>{if(!t&&bT(window.grecaptcha))o(m,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=jC();p.length!==0&&(p+=m),Rg(p).then(()=>{o(m,u,d)}).catch(y=>{d(y)})}}).catch(m=>{d(m)})})}}async function pu(i,e,t,s=!1,o=!1){const u=new Bb(i);let d;if(o)d=Cu;else try{d=await u.verify(t)}catch{d=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:d}):Object.assign(m,{captchaResponse:d}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function vs(i,e,t,s,o){var u,d;if(o==="EMAIL_PASSWORD_PROVIDER")if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const m=await pu(i,e,t,t==="getOobCode");return s(i,m)}else return s(i,e).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await pu(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(m)});else if(o==="PHONE_PROVIDER")if((d=i._getRecaptchaConfig())!=null&&d.isProviderEnabled("PHONE_PROVIDER")){const m=await pu(i,e,t);return s(i,m).catch(async p=>{var y;if(((y=i._getRecaptchaConfig())==null?void 0:y.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await pu(i,e,t,!1,!0);return s(i,v)}return Promise.reject(p)})}else{const m=await pu(i,e,t,!1,!0);return s(i,m)}else return Promise.reject(o+" provider is not supported.")}async function XC(i){const e=dt(i),t=await Nb(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new Cb(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new Bb(e).verify()}function WC(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ln);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function JC(i,e,t){const s=dt(i);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),u=qb(e),{host:d,port:m}=ZC(e),p=m===null?"":`:${m}`,y={url:`${u}//${d}${p}/`},v=Object.freeze({host:d,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(zo(y,s.config.emulator)&&zo(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,Ds(d)?(dg(`${u}//${d}${p}`),fg("Auth",!0)):o||e2()}function qb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function ZC(i){const e=qb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:IT(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:IT(d)}}}function IT(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function e2(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wi("not implemented")}_getIdTokenResponse(e){return Wi("not implemented")}_linkToIdToken(e,t){return Wi("not implemented")}_getReauthenticationResolver(e){return Wi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(i,e){return _t(i,"POST","/v1/accounts:resetPassword",yt(i,e))}async function t2(i,e){return _t(i,"POST","/v1/accounts:update",e)}async function n2(i,e){return _t(i,"POST","/v1/accounts:signUp",e)}async function i2(i,e){return _t(i,"POST","/v1/accounts:update",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(i,e){return kr(i,"POST","/v1/accounts:signInWithPassword",yt(i,e))}async function Od(i,e){return _t(i,"POST","/v1/accounts:sendOobCode",yt(i,e))}async function s2(i,e){return Od(i,e)}async function a2(i,e){return Od(i,e)}async function o2(i,e){return Od(i,e)}async function l2(i,e){return Od(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(i,e){return kr(i,"POST","/v1/accounts:signInWithEmailLink",yt(i,e))}async function c2(i,e){return kr(i,"POST","/v1/accounts:signInWithEmailLink",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends el{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Bu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Bu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,t,"signInWithPassword",r2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return u2(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vs(e,s,"signUpPassword",n2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return c2(e,{idToken:t,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr(i,e){return kr(i,"POST","/v1/accounts:signInWithIdp",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2="http://localhost";class nr extends el{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const d=new nr(s,o);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Sr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}buildRequest(){const e={requestUri:h2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(i,e){return _t(i,"POST","/v1/accounts:sendVerificationCode",yt(i,e))}async function d2(i,e){return kr(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,e))}async function f2(i,e){const t=await kr(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,e));if(t.temporaryProof)throw Tu(i,"account-exists-with-different-credential",t);return t}const m2={USER_NOT_FOUND:"user-not-found"};async function p2(i,e){const t={...e,operation:"REAUTH"};return kr(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,t),m2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends el{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ya({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ya({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return d2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return f2(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return p2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!t&&!o&&!u?null:new ya({verificationId:t,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function y2(i){const e=No(Eu(i)).link,t=e?No(Eu(e)).deep_link_id:null,s=No(Eu(i)).deep_link_id;return(s?No(Eu(s)).link:null)||s||t||e||i}class kd{constructor(e){const t=No(Eu(e)),s=t.apiKey??null,o=t.oobCode??null,u=g2(t.mode??null);te(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=y2(e);try{return new kd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,t){return Bu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kd.parseLink(t);return te(s,"argument-error"),Bu._fromEmailAndCode(e,s.code,s.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Oo extends tl{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return te("providerId"in t&&"signInMethod"in t,"argument-error"),nr._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return te(e.idToken||e.accessToken,"argument-error"),nr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Oo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Oo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:u,nonce:d,providerId:m}=e;if(!s&&!o&&!t&&!u||!m)return null;try{return new Oo(m)._credential({idToken:t,accessToken:s,nonce:d,pendingToken:u})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki extends tl{constructor(){super("facebook.com")}static credential(e){return nr._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ki.credential(e.oauthAccessToken)}catch{return null}}}Ki.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ki.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi extends tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nr._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Yi.credential(t,s)}catch{return null}}}Yi.GOOGLE_SIGN_IN_METHOD="google.com";Yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends tl{constructor(){super("github.com")}static credential(e){return nr._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.GITHUB_SIGN_IN_METHOD="github.com";Qi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="http://localhost";class Ho extends el{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Sr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Sr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,pendingToken:u}=t;return!s||!o||!u||s!==o?null:new Ho(s,u)}static _create(e,t){return new Ho(e,t)}buildRequest(){return{requestUri:_2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2="saml.";class md extends Mr{constructor(e){te(e.startsWith(v2),"argument-error"),super(e)}static credentialFromResult(e){return md.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return md.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ho.fromJSON(e);return te(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Ho._create(s,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends tl{constructor(){super("twitter.com")}static credential(e,t){return nr._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return $i.credential(t,s)}catch{return null}}}$i.TWITTER_SIGN_IN_METHOD="twitter.com";$i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(i,e){return kr(i,"POST","/v1/accounts:signUp",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await gi._fromIdTokenResponse(e,s,o),d=NT(s);return new ii({user:u,providerId:d,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=NT(s);return new ii({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function NT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E2(i){var o;if(ot(i.app))return Promise.reject($t(i));const e=dt(i);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new ii({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Fb(e,{returnSecureToken:!0}),s=await ii._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd extends dn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pd(e,t,s,o)}}function Gb(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pd._fromErrorAndOperation(i,u,e,s):u})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(i,e){const t=ve(i);await Md(!0,t,e);const{providerUserInfo:s}=await bC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),o=Kb(s||[]);return t.providerData=t.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Ig(i,e,t=!1){const s=await Nr(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ii._forOperation(i,"link",s)}async function Md(i,e,t){await ju(e);const s=Kb(e.providerData),o=i===!1?"provider-already-linked":"no-such-provider";te(s.has(t)===i,e.auth,o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(i,e,t=!1){const{auth:s}=i;if(ot(s.app))return Promise.reject($t(s));const o="reauthenticate";try{const u=await Nr(i,Gb(s,o,e,i),t);te(u.idToken,s,"internal-error");const d=Dd(u.idToken);te(d,s,"internal-error");const{sub:m}=d;return te(i.uid===m,s,"user-mismatch"),ii._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&sn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(i,e,t=!1){if(ot(i.app))return Promise.reject($t(i));const s="signIn",o=await Gb(i,s,e),u=await ii._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function Pd(i,e){return Qb(dt(i),e)}async function $b(i,e){const t=ve(i);return await Md(!1,t,e.providerId),Ig(t,e)}async function Xb(i,e){return Yb(ve(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(i,e){return kr(i,"POST","/v1/accounts:signInWithCustomToken",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(i,e){if(ot(i.app))return Promise.reject($t(i));const t=dt(i),s=await b2(t,{token:e,returnSecureToken:!0}),o=await ii._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Cg._fromServerResponse(e,t):"totpInfo"in t?Ng._fromServerResponse(e,t):sn(e,"internal-error")}}class Cg extends nc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Cg(t)}}class Ng extends nc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ng(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(i,e,t){var s;te(((s=t.url)==null?void 0:s.length)>0,i,"invalid-continue-uri"),te(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),te(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(te(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(te(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(i){const e=dt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w2(i,e,t){const s=dt(i),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Vd(s,o,t),await vs(s,o,"getOobCode",a2,"EMAIL_PASSWORD_PROVIDER")}async function S2(i,e,t){await Hb(ve(i),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xg(i),s})}async function R2(i,e){await i2(ve(i),{oobCode:e})}async function Wb(i,e){const t=ve(i),s=await Hb(t,{oobCode:e}),o=s.requestType;switch(te(o,t,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":te(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":te(s.mfaInfo,t,"internal-error");default:te(s.email,t,"internal-error")}let u=null;return s.mfaInfo&&(u=nc._fromServerResponse(dt(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:u},operation:o}}async function I2(i,e){const{data:t}=await Wb(ve(i),e);return t.email}async function C2(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=dt(i),d=await vs(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fb,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&xg(i),p}),m=await ii._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(m.user),m}function N2(i,e,t){return ot(i.app)?Promise.reject($t(i)):Pd(ve(i),Os.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xg(i),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x2(i,e,t){const s=dt(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(d,m){te(m.handleCodeInApp,s,"argument-error"),m&&Vd(s,d,m)}u(o,t),await vs(s,o,"getOobCode",o2,"EMAIL_PASSWORD_PROVIDER")}function D2(i,e){const t=kd.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function O2(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=ve(i),o=Os.credentialWithLink(e,t||zu());return te(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Pd(s,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(i,e){return _t(i,"POST","/v1/accounts:createAuthUri",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(i,e){const t=wg()?zu():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:o}=await k2(ve(i),s);return o||[]}async function P2(i,e){const t=ve(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&Vd(t.auth,o,e);const{email:u}=await s2(t.auth,o);u!==i.email&&await i.reload()}async function V2(i,e,t){const s=ve(i),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&Vd(s.auth,u,t);const{email:d}=await l2(s.auth,u);d!==i.email&&await i.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(i,e){return _t(i,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ve(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},d=await Nr(s,U2(s.auth,u));s.displayName=d.displayName||null,s.photoURL=d.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(d)}function z2(i,e){const t=ve(i);return ot(t.auth.app)?Promise.reject($t(t.auth)):Jb(t,e,null)}function j2(i,e){return Jb(ve(i),null,e)}async function Jb(i,e,t){const{auth:s}=i,u={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(u.email=e),t&&(u.password=t);const d=await Nr(i,t2(s,u));await i._updateTokensIfNecessary(d,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(i){var o,u;if(!i)return null;const{providerId:e}=i,t=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},s=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(i!=null&&i.idToken)){const d=(u=(o=Dd(i.idToken))==null?void 0:o.firebase)==null?void 0:u.sign_in_provider;if(d){const m=d!=="anonymous"&&d!=="custom"?d:null;return new ko(s,m)}}if(!e)return null;switch(e){case"facebook.com":return new q2(s,t);case"github.com":return new H2(s,t);case"google.com":return new F2(s,t);case"twitter.com":return new G2(s,t,i.screenName||null);case"custom":case"anonymous":return new ko(s,null);default:return new ko(s,e,t)}}class ko{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class Zb extends ko{constructor(e,t,s,o){super(e,t,s),this.username=o}}class q2 extends ko{constructor(e,t){super(e,"facebook.com",t)}}class H2 extends Zb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class F2 extends ko{constructor(e,t){super(e,"google.com",t)}}class G2 extends Zb{constructor(e,t,s){super(e,"twitter.com",t,s)}}function K2(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:B2(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new ma("enroll",e,t)}static _fromMfaPendingCredential(e){return new ma("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ma._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return ma._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=dt(e),o=t.customData._serverResponse,u=(o.mfaInfo||[]).map(m=>nc._fromServerResponse(s,m));te(o.mfaPendingCredential,s,"internal-error");const d=ma._fromMfaPendingCredential(o.mfaPendingCredential);return new Dg(d,u,async m=>{const p=await m._process(s,d);delete o.mfaInfo,delete o.mfaPendingCredential;const y={...o,idToken:p.idToken,refreshToken:p.refreshToken};switch(t.operationType){case"signIn":const v=await ii._fromIdTokenResponse(s,t.operationType,y);return await s._updateCurrentUser(v.user),v;case"reauthenticate":return te(t.user,s,"internal-error"),ii._forOperation(t.user,t.operationType,y);default:sn(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Y2(i,e){var o;const t=ve(i),s=e;return te(e.customData.operationType,t,"argument-error"),te((o=s.customData._serverResponse)==null?void 0:o.mfaPendingCredential,t,"argument-error"),Dg._fromError(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:start",yt(i,e))}function Q2(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:finalize",yt(i,e))}function $2(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:withdraw",yt(i,e))}class Og{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>nc._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Og(e)}async getSession(){return ma._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,o=await this.getSession(),u=await Nr(this.user,s._process(this.user.auth,o,t));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await Nr(this.user,$2(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==t),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const vp=new WeakMap;function X2(i){const e=ve(i);return vp.has(e)||vp.set(e,Og._fromUser(e)),vp.get(e)}const gd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gd,"1"),this.storage.removeItem(gd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=1e3,J2=10;class tA extends eA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((d,m,p)=>{this.notifyListeners(d,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const d=this.storage.getItem(s);!t&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);OC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,J2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},W2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}tA.type="LOCAL";const kg=tA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends eA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}nA.type="SESSION";const va=nA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Ud(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,d=this.handlersMap[o];if(!(d!=null&&d.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(d).map(async y=>y(t.origin,u)),p=await Z2(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ud.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,d;return new Promise((m,p)=>{const y=ic("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),o.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function tN(i){Pt().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function nN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function rN(){return Mg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="firebaseLocalStorageDb",sN=1,yd="firebaseLocalStorage",rA="fbase_key";class rc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ld(i,e){return i.transaction([yd],e?"readwrite":"readonly").objectStore(yd)}function aN(){const i=indexedDB.deleteDatabase(iA);return new rc(i).toPromise()}function Vp(){const i=indexedDB.open(iA,sN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(yd,{keyPath:rA})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(yd)?e(s):(s.close(),await aN(),e(await Vp()))})})}async function DT(i,e,t){const s=Ld(i,!0).put({[rA]:e,value:t});return new rc(s).toPromise()}async function oN(i,e){const t=Ld(i,!1).get(e),s=await new rc(t).toPromise();return s===void 0?null:s.value}function OT(i,e){const t=Ld(i,!0).delete(e);return new rc(t).toPromise()}const lN=800,uN=3;class sA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>uN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ud._getInstance(rN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await nN(),!this.activeServiceWorker)return;this.sender=new eN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await DT(e,gd,"1"),await OT(e,gd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>DT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>oN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>OT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Ld(o,!1).getAll();return new rc(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sA.type="LOCAL";const qu=sA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(i,e){return _t(i,"POST","/v2/accounts/mfaSignIn:start",yt(i,e))}function cN(i,e){return _t(i,"POST","/v2/accounts/mfaSignIn:finalize",yt(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=jb("rcb"),hN=new Ju(3e4,6e4);class dN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Pt().grecaptcha)!=null&&e.render)}load(e,t=""){return te(fN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&TT(Pt().grecaptcha)?Promise.resolve(Pt().grecaptcha):new Promise((s,o)=>{const u=Pt().setTimeout(()=>{o(Ht(e,"network-request-failed"))},hN.get());Pt()[Ep]=()=>{Pt().clearTimeout(u),delete Pt()[Ep];const m=Pt().grecaptcha;if(!m||!TT(m)){o(Ht(e,"internal-error"));return}const p=m.render;m.render=(y,v)=>{const T=p(y,v);return this.counter++,T},this.hostLanguage=t,s(m)};const d=`${zC()}?${Wo({onload:Ep,render:"explicit",hl:t})}`;Rg(d).catch(()=>{clearTimeout(u),o(Ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Pt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function fN(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class mN{async load(e){return new FC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="recaptcha",pN={theme:"light",type:"image"};let gN=class{constructor(e,t,s={...pN}){this.parameters=s,this.type=Nu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dt(e),this.isInvisible=this.parameters.size==="invisible",te(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;te(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mN:new dN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(o=>{const u=d=>{d&&(this.tokenChangeListeners.delete(u),o(d))};this.tokenChangeListeners.add(u),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){te(!this.parameters.sitekey,this.auth,"argument-error"),te(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),te(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Pt()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){te(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){te(wg()&&!Mg(),this.auth,"internal-error"),await yN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await EC(this.auth);te(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return te(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function yN(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ya._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function _N(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=dt(i),o=await zd(s,e,ve(t));return new Pg(o,u=>Pd(s,u))}async function vN(i,e,t){const s=ve(i);await Md(!1,s,"phone");const o=await zd(s.auth,e,ve(t));return new Pg(o,u=>$b(s,u))}async function EN(i,e,t){const s=ve(i);if(ot(s.auth.app))return Promise.reject($t(s.auth));const o=await zd(s.auth,e,ve(t));return new Pg(o,u=>Xb(s,u))}async function zd(i,e,t){var s;if(!i._getRecaptchaConfig())try{await XC(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const u=o.session;if("phoneNumber"in o){te(u.type==="enroll",i,"internal-error");const d={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await vs(i,d,"mfaSmsEnrollment",async(v,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Cu){te((t==null?void 0:t.type)===Nu,v,"argument-error");const R=await Tp(v,T,t);return xT(v,R)}return xT(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{te(u.type==="signin",i,"internal-error");const d=((s=o.multiFactorHint)==null?void 0:s.uid)||o.multiFactorUid;te(d,i,"missing-multi-factor-info");const m={mfaPendingCredential:u.credential,mfaEnrollmentId:d,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await vs(i,m,"mfaSmsSignIn",async(T,R)=>{if(R.phoneSignInInfo.captchaResponse===Cu){te((t==null?void 0:t.type)===Nu,T,"argument-error");const q=await Tp(T,R,t);return kT(T,q)}return kT(T,R)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await vs(i,u,"sendVerificationCode",async(y,v)=>{if(v.captchaResponse===Cu){te((t==null?void 0:t.type)===Nu,y,"argument-error");const T=await Tp(y,v,t);return CT(y,T)}return CT(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{t==null||t._reset()}}async function TN(i,e){const t=ve(i);if(ot(t.auth.app))return Promise.reject($t(t.auth));await Ig(t,e)}async function Tp(i,e,t){te(t.type===Nu,i,"argument-error");const s=await t.verify();te(typeof s=="string",i,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,d=o.phoneEnrollmentInfo.captchaResponse,m=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:d,clientType:m,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,d=o.phoneSignInInfo.clientType,m=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:d,recaptchaVersion:m}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=class Jh{constructor(e){this.providerId=Jh.PROVIDER_ID,this.auth=dt(e)}verifyPhoneNumber(e,t){return zd(this.auth,e,ve(t))}static credential(e,t){return ya._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Jh.credentialFromTaggedObject(t)}static credentialFromError(e){return Jh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?ya._fromTokenResponse(t,s):null}};Ea.PROVIDER_ID="phone";Ea.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(i,e){return e?Ln(e):(te(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends el{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bN(i){return Qb(i.auth,new Vg(i),i.bypassAuthState)}function AN(i){const{auth:e,user:t}=i;return te(t,e,"internal-error"),Yb(t,new Vg(i),i.bypassAuthState)}async function wN(i){const{auth:e,user:t}=i;return te(t,e,"internal-error"),Ig(t,new Vg(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:d,type:m}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bN;case"linkViaPopup":case"linkViaRedirect":return wN;case"reauthViaPopup":case"reauthViaRedirect":return AN;default:sn(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=new Ju(2e3,1e4);async function RN(i,e,t){if(ot(i.app))return Promise.reject(Ht(i,"operation-not-supported-in-this-environment"));const s=dt(i);Zo(i,e,Mr);const o=Ca(s,t);return new wr(s,"signInViaPopup",e,o).executeNotNull()}async function IN(i,e,t){const s=ve(i);if(ot(s.auth.app))return Promise.reject(Ht(s.auth,"operation-not-supported-in-this-environment"));Zo(s.auth,e,Mr);const o=Ca(s.auth,t);return new wr(s.auth,"reauthViaPopup",e,o,s).executeNotNull()}async function CN(i,e,t){const s=ve(i);Zo(s.auth,e,Mr);const o=Ca(s.auth,t);return new wr(s.auth,"linkViaPopup",e,o,s).executeNotNull()}class wr extends aA{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SN.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="pendingRedirect",xu=new Map;class xN extends aA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const s=await DN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DN(i,e){const t=lA(e),s=oA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}async function Ug(i,e){return oA(i)._set(lA(e),"true")}function ON(){xu.clear()}function Lg(i,e){xu.set(i._key(),e)}function oA(i){return Ln(i._redirectPersistence)}function lA(i){return ga(NN,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(i,e,t){return MN(i,e,t)}async function MN(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=dt(i);Zo(i,e,Mr),await s._initializationPromise;const o=Ca(s,t);return await Ug(o,s),o._openRedirect(s,e,"signInViaRedirect")}function PN(i,e,t){return VN(i,e,t)}async function VN(i,e,t){const s=ve(i);if(Zo(s.auth,e,Mr),ot(s.auth.app))return Promise.reject($t(s.auth));await s.auth._initializationPromise;const o=Ca(s.auth,t);await Ug(o,s.auth);const u=await uA(s);return o._openRedirect(s.auth,e,"reauthViaRedirect",u)}function UN(i,e,t){return LN(i,e,t)}async function LN(i,e,t){const s=ve(i);Zo(s.auth,e,Mr),await s.auth._initializationPromise;const o=Ca(s.auth,t);await Md(!1,s,e.providerId),await Ug(o,s.auth);const u=await uA(s);return o._openRedirect(s.auth,e,"linkViaRedirect",u)}async function zN(i,e){return await dt(i)._initializationPromise,jd(i,e,!1)}async function jd(i,e,t=!1){if(ot(i.app))return Promise.reject($t(i));const s=dt(i),o=Ca(s,e),d=await new xN(s,o,t).execute();return d&&!t&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}async function uA(i){const e=ic(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=600*1e3;class cA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!hA(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ht(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jN&&this.cachedEventUids.clear(),this.cachedEventUids.has(MT(e))}saveEventToCache(e){this.cachedEventUids.add(MT(e)),this.lastProcessedEventTime=Date.now()}}function MT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function hA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(i,e={}){return _t(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HN=/^https?/;async function FN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await dA(i);for(const t of e)try{if(GN(t))return}catch{}sn(i,"unauthorized-domain")}function GN(i){const e=zu(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&d.hostname===s}if(!HN.test(t))return!1;if(qN.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=new Ju(3e4,6e4);function PT(){const i=Pt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function YN(i){return new Promise((e,t)=>{var o,u,d;function s(){PT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{PT(),t(Ht(i,"network-request-failed"))},timeout:KN.get()})}if((u=(o=Pt().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((d=Pt().gapi)!=null&&d.load)s();else{const m=jb("iframefcb");return Pt()[m]=()=>{gapi.load?s():t(Ht(i,"network-request-failed"))},Rg(`${BC()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Zh=null,e})}let Zh=null;function QN(i){return Zh=Zh||YN(i),Zh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=new Ju(5e3,15e3),XN="__/auth/iframe",WN="emulator/auth/iframe",JN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ex(i){const e=i.config;te(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Sg(e,WN):`https://${i.config.authDomain}/${XN}`,s={apiKey:e.apiKey,appName:i.name,v:Or},o=ZN.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Wo(s).slice(1)}`}async function tx(i){const e=await QN(i),t=Pt().gapi;return te(t,i,"internal-error"),e.open({where:document.body,url:ex(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const d=Ht(i,"network-request-failed"),m=Pt().setTimeout(()=>{u(d)},$N.get());function p(){Pt().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ix=500,rx=600,sx="_blank",ax="http://localhost";class VT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ox(i,e,t,s=ix,o=rx){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...nx,width:s.toString(),height:o.toString(),top:u,left:d},y=Lt().toLowerCase();t&&(m=Mb(y)?sx:t),Ob(y)&&(e=e||ax,p.scrollbars="yes");const v=Object.entries(p).reduce((R,[q,Y])=>`${R}${q}=${Y},`,"");if(DC(y)&&m!=="_self")return lx(e||"",m),new VT(null);const T=window.open(e||"",m,v);te(T,i,"popup-blocked");try{T.focus()}catch{}return new VT(T)}function lx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="__/auth/handler",cx="emulator/auth/handler",hx=encodeURIComponent("fac");async function Up(i,e,t,s,o,u){te(i.config.authDomain,i,"auth-domain-config-required"),te(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Or,eventId:o};if(e instanceof Mr){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",zR(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(u||{}))d[v]=T}if(e instanceof tl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(d.scopes=v.join(","))}i.tenantId&&(d.tid=i.tenantId);const m=d;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),y=p?`#${hx}=${encodeURIComponent(p)}`:"";return`${dx(i)}?${Wo(m).slice(1)}${y}`}function dx({config:i}){return i.emulator?Sg(i,cx):`https://${i.authDomain}/${ux}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=va,this._completeRedirectFn=jd,this._overrideRedirectResult=Lg}async _openPopup(e,t,s,o){var d;Ei((d=this.eventManagers[e._key()])==null?void 0:d.manager,"_initialize() not called before _openPopup()");const u=await Up(e,t,s,zu(),o);return ox(e,u,ic())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Up(e,t,s,zu(),o);return tN(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ei(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await tx(e),s=new cA(e);return t.register("authEvent",o=>(te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bp,{type:bp},o=>{var d;const u=(d=o==null?void 0:o[0])==null?void 0:d[bp];u!==void 0&&t(!!u),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lb()||kb()||ec()}}const mx=fx;class px{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Wi("unexpected MultiFactorSessionType")}}}class zg extends px{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new zg(e)}_finalizeEnroll(e,t,s){return Q2(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return cN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class fA{constructor(){}static assertion(e){return zg._fromCredential(e)}}fA.FACTOR_ID="phone";var UT="@firebase/auth",LT="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _x(i){Cr(new vi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:m}=s.options;te(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zb(i)},y=new UC(s,o,u,p);return WC(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Cr(new vi("auth-internal",e=>{const t=dt(e.getProvider("auth").getImmediate());return(s=>new gx(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(UT,LT,yx(i)),Bn(UT,LT,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=300;IR("authIdTokenMaxAge");function Ex(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}LC({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Ht("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",Ex().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_x("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=2e3;async function bx(i,e,t){const{BuildInfo:s}=Ta();Ei(e.sessionId,"AuthEvent did not contain a session ID");const o=await Ix(e.sessionId),u={};return ec()?u.ibi=s.packageName:Zu()?u.apn=s.packageName:sn(i,"operation-not-supported-in-this-environment"),s.displayName&&(u.appDisplayName=s.displayName),u.sessionId=o,Up(i,t,e.type,void 0,e.eventId??void 0,u)}async function Ax(i){const{BuildInfo:e}=Ta(),t={};ec()?t.iosBundleId=e.packageName:Zu()?t.androidPackageName=e.packageName:sn(i,"operation-not-supported-in-this-environment"),await dA(i,t)}function wx(i){const{cordova:e}=Ta();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let o=null;s?e.plugins.browsertab.openUrl(i):o=e.InAppBrowser.open(i,xC()?"_blank":"_system","location=yes"),t(o)})})}async function Sx(i,e,t){const{cordova:s}=Ta();let o=()=>{};try{await new Promise((u,d)=>{let m=null;function p(){var R;u();const T=(R=s.plugins.browsertab)==null?void 0:R.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function y(){m||(m=window.setTimeout(()=>{d(Ht(i,"redirect-cancelled-by-user"))},Tx))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&y()}e.addPassiveListener(p),document.addEventListener("resume",y,!1),Zu()&&document.addEventListener("visibilitychange",v,!1),o=()=>{e.removePassiveListener(p),document.removeEventListener("resume",y,!1),document.removeEventListener("visibilitychange",v,!1),m&&window.clearTimeout(m)}})}finally{o()}}function Rx(i){var t,s,o,u,d,m,p,y,v,T;const e=Ta();te(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),te(typeof((s=e==null?void 0:e.BuildInfo)==null?void 0:s.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),te(typeof((d=(u=(o=e==null?void 0:e.cordova)==null?void 0:o.plugins)==null?void 0:u.browsertab)==null?void 0:d.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),te(typeof((y=(p=(m=e==null?void 0:e.cordova)==null?void 0:m.plugins)==null?void 0:p.browsertab)==null?void 0:y.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),te(typeof((T=(v=e==null?void 0:e.cordova)==null?void 0:v.InAppBrowser)==null?void 0:T.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Ix(i){const e=Cx(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(o=>o.toString(16).padStart(2,"0")).join("")}function Cx(i){if(Ei(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let s=0;s<i.length;s++)t[s]=i.charCodeAt(s);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=20;class xx extends cA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Dx(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Mx(),postBody:null,tenantId:i.tenantId,error:Ht(i,"no-auth-event")}}function Ox(i,e){return Lp()._set(zp(i),e)}async function zT(i){const e=await Lp()._get(zp(i));return e&&await Lp()._remove(zp(i)),e}function kx(i,e){var s,o;const t=Vx(e);if(t.includes("/__/auth/callback")){const u=ed(t),d=u.firebaseError?Px(decodeURIComponent(u.firebaseError)):null,m=(o=(s=d==null?void 0:d.code)==null?void 0:s.split("auth/"))==null?void 0:o[1],p=m?Ht(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:t,postBody:null}}return null}function Mx(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Nx;t++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function Lp(){return Ln(kg)}function zp(i){return ga("authEvent",i.config.apiKey,i.name)}function Px(i){try{return JSON.parse(i)}catch{return null}}function Vx(i){const e=ed(i),t=e.link?decodeURIComponent(e.link):void 0,s=ed(t).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ed(o).link||o||s||t||i}function ed(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return No(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=500;class Lx{constructor(){this._redirectPersistence=va,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=jd,this._overrideRedirectResult=Lg}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new xx(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){sn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,o){Rx(e);const u=await this._initialize(e);await u.initialized(),u.resetRedirect(),ON(),await this._originValidation(e);const d=Dx(e,s,o);await Ox(e,d);const m=await bx(e,d,t),p=await wx(m);return Sx(e,u,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ax(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:o,BuildInfo:u}=Ta(),d=setTimeout(async()=>{await zT(e),t.onEvent(jT())},Ux),m=async v=>{clearTimeout(d);const T=await zT(e);let R=null;T&&(v!=null&&v.url)&&(R=kx(T,v.url)),t.onEvent(R||jT())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,m);const p=o,y=`${u.packageName.toLowerCase()}://`;Ta().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(y)&&m({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const zx=Lx;function jT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ht("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(i,e){dt(i)._logFramework(e)}var Bx="@firebase/auth-compat",qx="0.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=1e3;function Du(){var i;return((i=self==null?void 0:self.location)==null?void 0:i.protocol)||null}function Fx(){return Du()==="http:"||Du()==="https:"}function mA(i=Lt()){return!!((Du()==="file:"||Du()==="ionic:"||Du()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function Gx(){return pg()||mg()}function Kx(){return lb()&&(document==null?void 0:document.documentMode)===11}function Yx(i=Lt()){return/Edge\/\d+/.test(i)}function Qx(i=Lt()){return Kx()||Yx(i)}function pA(){try{const i=self.localStorage,e=ic();if(i)return i.setItem(e,"1"),i.removeItem(e),Qx()?cd():!0}catch{return jg()&&cd()}return!1}function jg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ap(){return(Fx()||ob()||mA())&&!Gx()&&pA()&&!jg()}function gA(){return mA()&&typeof document<"u"}async function $x(){return gA()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},Hx);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function Xx(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={LOCAL:"local",NONE:"none",SESSION:"session"},gu=te,yA="persistence";function Wx(i,e){if(gu(Object.values(Un).includes(e),i,"invalid-persistence-type"),pg()){gu(e!==Un.SESSION,i,"unsupported-persistence-type");return}if(mg()){gu(e===Un.NONE,i,"unsupported-persistence-type");return}if(jg()){gu(e===Un.NONE||e===Un.LOCAL&&cd(),i,"unsupported-persistence-type");return}gu(e===Un.NONE||pA(),i,"unsupported-persistence-type")}async function jp(i){await i._initializationPromise;const e=_A(),t=ga(yA,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function Jx(i,e){const t=_A();if(!t)return[];const s=ga(yA,i,e);switch(t.getItem(s)){case Un.NONE:return[qo];case Un.LOCAL:return[qu,va];case Un.SESSION:return[va];default:return[]}}function _A(){var i;try{return((i=Xx())==null?void 0:i.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=te;class gs{constructor(){this.browserResolver=Ln(mx),this.cordovaResolver=Ln(zx),this.underlyingResolver=null,this._redirectPersistence=va,this._completeRedirectFn=jd,this._overrideRedirectResult=Lg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,o)}async _openRedirect(e,t,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,o)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return gA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Zx(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await $x();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(i){return i.unwrap()}function eD(i){return i.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(i){return EA(i)}function nD(i,e){var s;const t=(s=e.customData)==null?void 0:s._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new iD(i,Y2(i,e))}else if(t){const o=EA(e),u=e;o&&(u.credential=o,u.tenantId=t.tenantId||void 0,u.email=t.email||void 0,u.phoneNumber=t.phoneNumber||void 0)}}function EA(i){const{_tokenResponse:e}=i instanceof dn?i.customData:i;if(!e)return null;if(!(i instanceof dn)&&"temporaryProof"in e&&"phoneNumber"in e)return Ea.credentialFromResult(i);const t=e.providerId;if(!t||t===mu.PASSWORD)return null;let s;switch(t){case mu.GOOGLE:s=Yi;break;case mu.FACEBOOK:s=Ki;break;case mu.GITHUB:s=Qi;break;case mu.TWITTER:s=$i;break;default:const{oauthIdToken:o,oauthAccessToken:u,oauthTokenSecret:d,pendingToken:m,nonce:p}=e;return!u&&!d&&!o&&!m?null:m?t.startsWith("saml.")?Ho._create(t,m):nr._fromParams({providerId:t,signInMethod:t,pendingToken:m,idToken:o,accessToken:u}):new Oo(t).credential({idToken:o,accessToken:u,rawNonce:p})}return i instanceof dn?s.credentialFromError(i):s.credentialFromResult(i)}function Sn(i,e){return e.catch(t=>{throw t instanceof dn&&nD(i,t),t}).then(t=>{const s=t.operationType,o=t.user;return{operationType:s,credential:tD(t),additionalUserInfo:K2(t),user:Bd.getOrCreate(o)}})}async function Bp(i,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>Sn(i,t.confirm(s))}}class iD{constructor(e,t){this.resolver=t,this.auth=eD(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Sn(vA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd=class bu{constructor(e){this._delegate=e,this.multiFactor=X2(e)}static getOrCreate(e){return bu.USER_MAP.has(e)||bu.USER_MAP.set(e,new bu(e)),bu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Sn(this.auth,$b(this._delegate,e))}async linkWithPhoneNumber(e,t){return Bp(this.auth,vN(this._delegate,e,t))}async linkWithPopup(e){return Sn(this.auth,CN(this._delegate,e,gs))}async linkWithRedirect(e){return await jp(dt(this.auth)),UN(this._delegate,e,gs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Sn(this.auth,Xb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Bp(this.auth,EN(this._delegate,e,t))}reauthenticateWithPopup(e){return Sn(this.auth,IN(this._delegate,e,gs))}async reauthenticateWithRedirect(e){return await jp(dt(this.auth)),PN(this._delegate,e,gs)}sendEmailVerification(e){return P2(this._delegate,e)}async unlink(e){return await T2(this._delegate,e),this}updateEmail(e){return z2(this._delegate,e)}updatePassword(e){return j2(this._delegate,e)}updatePhoneNumber(e){return TN(this._delegate,e)}updateProfile(e){return L2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return V2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Bd.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=te;class qp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;yu(s,"invalid-api-key",{appName:e.name}),yu(s,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?gs:void 0;this._delegate=t.initialize({options:{persistence:rD(s,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(cC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Bd.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){JC(this._delegate,e,t)}applyActionCode(e){return R2(this._delegate,e)}checkActionCode(e){return Wb(this._delegate,e)}confirmPasswordReset(e,t){return S2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Sn(this._delegate,C2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return M2(this._delegate,e)}isSignInWithEmailLink(e){return D2(this._delegate,e)}async getRedirectResult(){yu(Ap(),this._delegate,"operation-not-supported-in-this-environment");const e=await zN(this._delegate,gs);return e?Sn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){jx(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:o,error:u,complete:d}=BT(e,t,s);return this._delegate.onAuthStateChanged(o,u,d)}onIdTokenChanged(e,t,s){const{next:o,error:u,complete:d}=BT(e,t,s);return this._delegate.onIdTokenChanged(o,u,d)}sendSignInLinkToEmail(e,t){return x2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return w2(this._delegate,e,t||void 0)}async setPersistence(e){Wx(this._delegate,e);let t;switch(e){case Un.SESSION:t=va;break;case Un.LOCAL:t=await Ln(qu)._isAvailable()?qu:kg;break;case Un.NONE:t=qo;break;default:return sn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Sn(this._delegate,E2(this._delegate))}signInWithCredential(e){return Sn(this._delegate,Pd(this._delegate,e))}signInWithCustomToken(e){return Sn(this._delegate,A2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Sn(this._delegate,N2(this._delegate,e,t))}signInWithEmailLink(e,t){return Sn(this._delegate,O2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Bp(this._delegate,_N(this._delegate,e,t))}async signInWithPopup(e){return yu(Ap(),this._delegate,"operation-not-supported-in-this-environment"),Sn(this._delegate,RN(this._delegate,e,gs))}async signInWithRedirect(e){return yu(Ap(),this._delegate,"operation-not-supported-in-this-environment"),await jp(this._delegate),kN(this._delegate,e,gs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return I2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}qp.Persistence=Un;function BT(i,e,t){let s=i;typeof i!="function"&&({next:s,error:e,complete:t}=i);const o=s;return{next:d=>o(d&&Bd.getOrCreate(d)),error:e,complete:t}}function rD(i,e){const t=Jx(i,e);if(typeof self<"u"&&!t.includes(qu)&&t.push(qu),typeof window<"u")for(const s of[kg,va])t.includes(s)||t.push(s);return t.includes(qo)||t.push(qo),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{static credential(e,t){return Ea.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Ea(vA(Jo.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Bg.PHONE_SIGN_IN_METHOD=Ea.PHONE_SIGN_IN_METHOD;Bg.PROVIDER_ID=Ea.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=te;class aD{constructor(e,t,s=Jo.app()){var o;sD((o=s.options)==null?void 0:o.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new gN(s.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="auth-compat";function lD(i){i.INTERNAL.registerComponent(new vi(oD,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new qp(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ao.EMAIL_SIGNIN,PASSWORD_RESET:Ao.PASSWORD_RESET,RECOVER_EMAIL:Ao.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ao.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ao.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ao.VERIFY_EMAIL}},EmailAuthProvider:Os,FacebookAuthProvider:Ki,GithubAuthProvider:Qi,GoogleAuthProvider:Yi,OAuthProvider:Oo,SAMLAuthProvider:md,PhoneAuthProvider:Bg,PhoneMultiFactorGenerator:fA,RecaptchaVerifier:aD,TwitterAuthProvider:$i,Auth:qp,AuthCredential:el,Error:dn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(Bx,qx)}lD(Jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="firebasestorage.googleapis.com",bA="storageBucket",uD=120*1e3,cD=600*1e3,hD=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends dn{constructor(e,t,s=0){super(wp(e),`Firebase Storage: ${t} (${wp(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function wp(i){return"storage/"+i}function qg(){const i="An unknown error occurred, please check the error payload for server response.";return new mt(lt.UNKNOWN,i)}function dD(i){return new mt(lt.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function fD(i){return new mt(lt.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mD(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new mt(lt.UNAUTHENTICATED,i)}function pD(){return new mt(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gD(i){return new mt(lt.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function AA(){return new mt(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wA(){return new mt(lt.CANCELED,"User canceled the upload/download.")}function yD(i){return new mt(lt.INVALID_URL,"Invalid URL '"+i+"'.")}function _D(i){return new mt(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function vD(){return new mt(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bA+"' property when initializing the app?")}function SA(){return new mt(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ED(){return new mt(lt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function TD(){return new mt(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bD(i){return new mt(lt.UNSUPPORTED_ENVIRONMENT,`${i} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mo(i){return new mt(lt.INVALID_ARGUMENT,i)}function RA(){return new mt(lt.APP_DELETED,"The Firebase app was deleted.")}function IA(i){return new mt(lt.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ou(i,e){return new mt(lt.INVALID_FORMAT,"String does not match format '"+i+"': "+e)}function _u(i){throw new mt(lt.INTERNAL_ERROR,"Internal error: "+i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=hn.makeFromUrl(e,t)}catch{return new hn(e,"")}if(s.path==="")return s;throw _D(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ye){ye.path.charAt(ye.path.length-1)==="/"&&(ye.path_=ye.path_.slice(0,-1))}const d="(/(.*))?$",m=new RegExp("^gs://"+o+d,"i"),p={bucket:1,path:3};function y(ye){ye.path_=decodeURIComponent(ye.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",q=new RegExp(`^https?://${T}/${v}/b/${o}/o${R}`,"i"),Y={bucket:1,path:3},ee=t===TA?"(?:storage.googleapis.com|storage.cloud.google.com)":t,Z="([^?#]*)",ce=new RegExp(`^https?://${ee}/${o}/${Z}`,"i"),ue=[{regex:m,indices:p,postModify:u},{regex:q,indices:Y,postModify:y},{regex:ce,indices:{bucket:1,path:2},postModify:y}];for(let ye=0;ye<ue.length;ye++){const Ce=ue[ye],J=Ce.regex.exec(e);if(J){const I=J[Ce.indices.bucket];let S=J[Ce.indices.path];S||(S=""),s=new hn(I,S),Ce.postModify(s);break}}if(s==null)throw yD(e);return s}}class AD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(i,e,t){let s=1,o=null,u=null,d=!1,m=0;function p(){return m===2}let y=!1;function v(...Z){y||(y=!0,e.apply(null,Z))}function T(Z){o=setTimeout(()=>{o=null,i(q,p())},Z)}function R(){u&&clearTimeout(u)}function q(Z,...ce){if(y){R();return}if(Z){R(),v.call(null,Z,...ce);return}if(p()||d){R(),v.call(null,Z,...ce);return}s<64&&(s*=2);let ue;m===1?(m=2,ue=0):ue=(s+Math.random())*1e3,T(ue)}let Y=!1;function ee(Z){Y||(Y=!0,R(),!y&&(o!==null?(Z||(m=2),clearTimeout(o),T(0)):Z||(m=1)))}return T(0),u=setTimeout(()=>{d=!0,ee(!0)},t),ee}function SD(i){i(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(i){return i!==void 0}function ID(i){return typeof i=="function"}function CD(i){return typeof i=="object"&&!Array.isArray(i)}function qd(i){return typeof i=="string"||i instanceof String}function qT(i){return Hg()&&i instanceof Blob}function Hg(){return typeof Blob<"u"}function Hp(i,e,t,s){if(s<e)throw Mo(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw Mo(`Invalid value for '${i}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(i,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${i}`}function CA(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var _a;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(_a||(_a={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return t||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,t,s,o,u,d,m,p,y,v,T,R=!0,q=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=d,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=R,this.isUsingEmulator=q,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Y,ee)=>{this.resolve_=Y,this.reject_=ee,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new qh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const d=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(d),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(d),this.pendingConnection_=null;const m=u.getErrorCode()===_a.NO_ERROR,p=u.getStatus();if(!m||NA(p,this.additionalRetryCodes_)&&this.retry){const v=u.getErrorCode()===_a.ABORT;s(!1,new qh(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new qh(y,u))})},t=(s,o)=>{const u=this.resolve_,d=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());RD(p)?u(p):u()}catch(p){d(p)}else if(m!==null){const p=qg();p.serverResponse=m.getErrorText(),this.errorCallback_?d(this.errorCallback_(m,p)):d(p)}else if(o.canceled){const p=this.appDelete_?RA():wA();d(p)}else{const p=AA();d(p)}};this.canceled_?t(!1,new qh(!1,null,!0)):this.backoffId_=wD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function xD(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function DD(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OD(i,e){e&&(i["X-Firebase-GMPID"]=e)}function kD(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function MD(i,e,t,s,o,u,d=!0,m=!1){const p=CA(i.urlParams),y=i.url+p,v=Object.assign({},i.headers);return OD(v,e),xD(v,t),DD(v,u),kD(v,s),new ND(y,i.method,v,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,d,m)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VD(...i){const e=PD();if(e!==void 0){const t=new e;for(let s=0;s<i.length;s++)t.append(i[s]);return t.getBlob()}else{if(Hg())return new Blob(i);throw new mt(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UD(i,e,t){return i.webkitSlice?i.webkitSlice(e,t):i.mozSlice?i.mozSlice(e,t):i.slice?i.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(i){if(typeof atob>"u")throw bD("base-64");return atob(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sp{constructor(e,t){this.data=e,this.contentType=t||null}}function xA(i,e){switch(i){case ni.RAW:return new Sp(DA(e));case ni.BASE64:case ni.BASE64URL:return new Sp(OA(i,e));case ni.DATA_URL:return new Sp(jD(e),BD(e))}throw qg()}function DA(i){const e=[];for(let t=0;t<i.length;t++){let s=i.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<i.length-1&&(i.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,d=i.charCodeAt(++t);s=65536|(u&1023)<<10|d&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function zD(i){let e;try{e=decodeURIComponent(i)}catch{throw Ou(ni.DATA_URL,"Malformed data URL.")}return DA(e)}function OA(i,e){switch(i){case ni.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw Ou(i,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ni.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw Ou(i,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=LD(e)}catch(o){throw o.message.includes("polyfill")?o:Ou(i,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class kA{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ou(ni.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=qD(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function jD(i){const e=new kA(i);return e.base64?OA(ni.BASE64,e.rest):zD(e.rest)}function BD(i){return new kA(i).contentType}function qD(i,e){return i.length>=e.length?i.substring(i.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){let s=0,o="";qT(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(qT(this.data_)){const s=this.data_,o=UD(s,e,t);return o===null?null:new Ar(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ar(s,!0)}}static getBlob(...e){if(Hg()){const t=e.map(s=>s instanceof Ar?s.data_:s);return new Ar(VD.apply(null,t))}else{const t=e.map(d=>qd(d)?xA(ni.RAW,d).data:d.data_);let s=0;t.forEach(d=>{s+=d.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(d=>{for(let m=0;m<d.length;m++)o[u++]=d[m]}),new Ar(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(i){let e;try{e=JSON.parse(i)}catch{return null}return CD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function FD(i,e){const t=e.split("/").filter(s=>s.length>0).join("/");return i.length===0?t:i+"/"+t}function MA(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(i,e){return e}class gn{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||GD}}let Hh=null;function KD(i){return!qd(i)||i.length<2?i:MA(i)}function Hd(){if(Hh)return Hh;const i=[];i.push(new gn("bucket")),i.push(new gn("generation")),i.push(new gn("metageneration")),i.push(new gn("name","fullPath",!0));function e(u,d){return KD(d)}const t=new gn("name");t.xform=e,i.push(t);function s(u,d){return d!==void 0?Number(d):d}const o=new gn("size");return o.xform=s,i.push(o),i.push(new gn("timeCreated")),i.push(new gn("updated")),i.push(new gn("md5Hash",null,!0)),i.push(new gn("cacheControl",null,!0)),i.push(new gn("contentDisposition",null,!0)),i.push(new gn("contentEncoding",null,!0)),i.push(new gn("contentLanguage",null,!0)),i.push(new gn("contentType",null,!0)),i.push(new gn("metadata","customMetadata",!0)),Hh=i,Hh}function YD(i,e){function t(){const s=i.bucket,o=i.fullPath,u=new hn(s,o);return e._makeStorageReference(u)}Object.defineProperty(i,"ref",{get:t})}function QD(i,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const d=t[u];s[d.local]=d.xform(s,e[d.server])}return YD(s,i),s}function PA(i,e,t){const s=Fg(e);return s===null?null:QD(i,s,t)}function $D(i,e,t,s){const o=Fg(e);if(o===null||!qd(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const d=encodeURIComponent;return u.split(",").map(y=>{const v=i.bucket,T=i.fullPath,R="/b/"+d(v)+"/o/"+d(T),q=ks(R,t,s),Y=CA({alt:"media",token:y});return q+Y})[0]}function Gg(i,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=i[u.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="prefixes",FT="items";function XD(i,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[HT])for(const o of t[HT]){const u=o.replace(/\/$/,""),d=i._makeStorageReference(new hn(e,u));s.prefixes.push(d)}if(t[FT])for(const o of t[FT]){const u=i._makeStorageReference(new hn(e,o.name));s.items.push(u)}return s}function WD(i,e,t){const s=Fg(t);return s===null?null:XD(i,e,s)}class Pr{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(i){if(!i)throw qg()}function Fd(i,e){function t(s,o){const u=PA(i,o,e);return Ji(u!==null),u}return t}function JD(i,e){function t(s,o){const u=WD(i,e,o);return Ji(u!==null),u}return t}function ZD(i,e){function t(s,o){const u=PA(i,o,e);return Ji(u!==null),$D(u,o,i.host,i._protocol)}return t}function nl(i){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=pD():o=mD():t.getStatus()===402?o=fD(i.bucket):t.getStatus()===403?o=gD(i.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function Gd(i){const e=nl(i);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=dD(i.path)),u.serverResponse=o.serverResponse,u}return t}function VA(i,e,t){const s=e.fullServerUrl(),o=ks(s,i.host,i._protocol),u="GET",d=i.maxOperationRetryTime,m=new Pr(o,u,Fd(i,t),d);return m.errorHandler=Gd(e),m}function eO(i,e,t,s,o){const u={};e.isRoot?u.prefix="":u.prefix=e.path+"/",t.length>0&&(u.delimiter=t),s&&(u.pageToken=s),o&&(u.maxResults=o);const d=e.bucketOnlyServerUrl(),m=ks(d,i.host,i._protocol),p="GET",y=i.maxOperationRetryTime,v=new Pr(m,p,JD(i,e.bucket),y);return v.urlParams=u,v.errorHandler=nl(e),v}function tO(i,e,t){const s=e.fullServerUrl(),o=ks(s,i.host,i._protocol),u="GET",d=i.maxOperationRetryTime,m=new Pr(o,u,ZD(i,t),d);return m.errorHandler=Gd(e),m}function nO(i,e,t,s){const o=e.fullServerUrl(),u=ks(o,i.host,i._protocol),d="PATCH",m=Gg(t,s),p={"Content-Type":"application/json; charset=utf-8"},y=i.maxOperationRetryTime,v=new Pr(u,d,Fd(i,s),y);return v.headers=p,v.body=m,v.errorHandler=Gd(e),v}function iO(i,e){const t=e.fullServerUrl(),s=ks(t,i.host,i._protocol),o="DELETE",u=i.maxOperationRetryTime;function d(p,y){}const m=new Pr(s,o,d,u);return m.successCodes=[200,204],m.errorHandler=Gd(e),m}function rO(i,e){return i&&i.contentType||e&&e.type()||"application/octet-stream"}function UA(i,e,t){const s=Object.assign({},t);return s.fullPath=i.path,s.size=e.size(),s.contentType||(s.contentType=rO(null,e)),s}function sO(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function m(){let ue="";for(let ye=0;ye<2;ye++)ue=ue+Math.random().toString().slice(2);return ue}const p=m();d["Content-Type"]="multipart/related; boundary="+p;const y=UA(e,s,o),v=Gg(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,R=`\r
--`+p+"--",q=Ar.getBlob(T,s,R);if(q===null)throw SA();const Y={name:y.fullPath},ee=ks(u,i.host,i._protocol),Z="POST",ce=i.maxUploadRetryTime,fe=new Pr(ee,Z,Fd(i,t),ce);return fe.urlParams=Y,fe.headers=d,fe.body=q.uploadData(),fe.errorHandler=nl(e),fe}class _d{constructor(e,t,s,o){this.current=e,this.total=t,this.finalized=!!s,this.metadata=o||null}}function Kg(i,e){let t=null;try{t=i.getResponseHeader("X-Goog-Upload-Status")}catch{Ji(!1)}return Ji(!!t&&(e||["active"]).indexOf(t)!==-1),t}function aO(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),d=UA(e,s,o),m={name:d.fullPath},p=ks(u,i.host,i._protocol),y="POST",v={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":d.contentType,"Content-Type":"application/json; charset=utf-8"},T=Gg(d,t),R=i.maxUploadRetryTime;function q(ee){Kg(ee);let Z;try{Z=ee.getResponseHeader("X-Goog-Upload-URL")}catch{Ji(!1)}return Ji(qd(Z)),Z}const Y=new Pr(p,y,q,R);return Y.urlParams=m,Y.headers=v,Y.body=T,Y.errorHandler=nl(e),Y}function oO(i,e,t,s){const o={"X-Goog-Upload-Command":"query"};function u(y){const v=Kg(y,["active","final"]);let T=null;try{T=y.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Ji(!1)}T||Ji(!1);const R=Number(T);return Ji(!isNaN(R)),new _d(R,s.size(),v==="final")}const d="POST",m=i.maxUploadRetryTime,p=new Pr(t,d,u,m);return p.headers=o,p.errorHandler=nl(e),p}const GT=256*1024;function lO(i,e,t,s,o,u,d,m){const p=new _d(0,0);if(d?(p.current=d.current,p.total=d.total):(p.current=0,p.total=s.size()),s.size()!==p.total)throw ED();const y=p.total-p.current;let v=y;o>0&&(v=Math.min(v,o));const T=p.current,R=T+v;let q="";v===0?q="finalize":y===v?q="upload, finalize":q="upload";const Y={"X-Goog-Upload-Command":q,"X-Goog-Upload-Offset":`${p.current}`},ee=s.slice(T,R);if(ee===null)throw SA();function Z(ye,Ce){const J=Kg(ye,["active","final"]),I=p.current+v,S=s.size();let C;return J==="final"?C=Fd(e,u)(ye,Ce):C=null,new _d(I,S,J==="final",C)}const ce="POST",fe=e.maxUploadRetryTime,ue=new Pr(t,ce,Z,fe);return ue.headers=Y,ue.body=ee.uploadData(),ue.progressCallback=m||null,ue.errorHandler=nl(i),ue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO={STATE_CHANGED:"state_changed"},yn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rp(i){switch(i){case"running":case"pausing":case"canceling":return yn.RUNNING;case"paused":return yn.PAUSED;case"success":return yn.SUCCESS;case"canceled":return yn.CANCELED;case"error":return yn.ERROR;default:return yn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,t,s){if(ID(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const u=e;this.next=u.next,this.error=u.error,this.complete=u.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(i){return(...e)=>{Promise.resolve().then(()=>i(...e))}}class hO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_a.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_a.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_a.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,u){if(this.sent_)throw _u("cannot .send() more than once");if(Ds(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),u!==void 0)for(const d in u)u.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,u[d].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _u("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _u("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _u("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _u("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dO extends hO{initXhr(){this.xhr_.responseType="text"}}function Xi(){return new dO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Hd(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(lt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const u=this.isExponentialBackoffExpired();if(NA(o.status,[]))if(u)o=AA();else{this.sleepTime=Math.max(this.sleepTime*2,hD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(lt.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,u)=>{this._resolve=o,this._reject=u,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=aO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,Xi,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._uploadUrl=u,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const o=oO(this._ref.storage,this._ref._location,e,this._blob),u=this._ref.storage._makeRequest(o,Xi,t,s);this._request=u,u.getPromise().then(d=>{d=d,this._request=void 0,this._updateProgress(d.current),this._needToFetchStatus=!1,d.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=GT*this._chunkMultiplier,t=new _d(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((o,u)=>{let d;try{d=lO(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const m=this._ref.storage._makeRequest(d,Xi,o,u,!1);this._request=m,m.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){GT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=VA(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(s,Xi,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=sO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,Xi,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=wA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Rp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,o){const u=new cO(t||void 0,s||void 0,o||void 0);return this._addObserver(u),()=>{this._removeObserver(u)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Rp(this._state)){case yn.SUCCESS:wo(this._resolve.bind(null,this.snapshot))();break;case yn.CANCELED:case yn.ERROR:const t=this._reject;wo(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Rp(this._state)){case yn.RUNNING:case yn.PAUSED:e.next&&wo(e.next.bind(e,this.snapshot))();break;case yn.SUCCESS:e.complete&&wo(e.complete.bind(e))();break;case yn.CANCELED:case yn.ERROR:e.error&&wo(e.error.bind(e,this._error))();break;default:e.error&&wo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this._service=e,t instanceof hn?this._location=t:this._location=hn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ba(e,t)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MA(this._location.path)}get storage(){return this._service}get parent(){const e=HD(this._location.path);if(e===null)return null;const t=new hn(this._location.bucket,e);return new ba(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw IA(e)}}function fO(i,e,t){return i._throwIfRoot("uploadBytesResumable"),new LA(i,new Ar(e),t)}function mO(i){const e={prefixes:[],items:[]};return zA(i,e).then(()=>e)}async function zA(i,e,t){const o=await jA(i,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await zA(i,e,o.nextPageToken)}function jA(i,e){e!=null&&typeof e.maxResults=="number"&&Hp("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=eO(i.storage,i._location,"/",t.pageToken,t.maxResults);return i.storage.makeRequestWithTokens(s,Xi)}function pO(i){i._throwIfRoot("getMetadata");const e=VA(i.storage,i._location,Hd());return i.storage.makeRequestWithTokens(e,Xi)}function gO(i,e){i._throwIfRoot("updateMetadata");const t=nO(i.storage,i._location,e,Hd());return i.storage.makeRequestWithTokens(t,Xi)}function yO(i){i._throwIfRoot("getDownloadURL");const e=tO(i.storage,i._location,Hd());return i.storage.makeRequestWithTokens(e,Xi).then(t=>{if(t===null)throw TD();return t})}function _O(i){i._throwIfRoot("deleteObject");const e=iO(i.storage,i._location);return i.storage.makeRequestWithTokens(e,Xi)}function BA(i,e){const t=FD(i._location.path,e),s=new hn(i._location.bucket,t);return new ba(i.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vO(i){return/^[A-Za-z]+:\/\//.test(i)}function EO(i,e){return new ba(i,e)}function qA(i,e){if(i instanceof Yg){const t=i;if(t._bucket==null)throw vD();const s=new ba(t,t._bucket);return e!=null?qA(s,e):s}else return e!==void 0?BA(i,e):i}function TO(i,e){if(e&&vO(e)){if(i instanceof Yg)return EO(i,e);throw Mo("To use ref(service, url), the first argument must be a Storage instance.")}else return qA(i,e)}function KT(i,e){const t=e==null?void 0:e[bA];return t==null?null:hn.makeFromBucketSpec(t,i)}function bO(i,e,t,s={}){i.host=`${e}:${t}`;const o=Ds(e);o&&(dg(`https://${i.host}/b`),fg("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(i._overrideAuthToken=typeof u=="string"?u:sb(u,i.app.options.projectId))}class Yg{constructor(e,t,s,o,u,d=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=d,this._bucket=null,this._host=TA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uD,this._maxUploadRetryTime=cD,this._requests=new Set,o!=null?this._bucket=hn.makeFromBucketSpec(o,this._host):this._bucket=KT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=KT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ba(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new AD(RA());{const d=MD(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const YT="@firebase/storage",QT="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO="storage";function wO(i,e,t){return i=ve(i),fO(i,e,t)}function SO(i){return i=ve(i),pO(i)}function RO(i,e){return i=ve(i),gO(i,e)}function IO(i,e){return i=ve(i),jA(i,e)}function CO(i){return i=ve(i),mO(i)}function NO(i){return i=ve(i),yO(i)}function xO(i){return i=ve(i),_O(i)}function $T(i,e){return i=ve(i),TO(i,e)}function DO(i,e){return BA(i,e)}function OO(i,e,t,s={}){bO(i,e,t,s)}function kO(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Yg(t,s,o,e,Or)}function MO(){Cr(new vi(AO,kO,"PUBLIC").setMultipleInstances(!0)),Bn(YT,QT,""),Bn(YT,QT,"esm2020")}MO();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,s){this._delegate=e,this.task=t,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Fh(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(s=>{if(e)return e(new Fh(s,this,this._ref))},t)}on(e,t,s,o){let u;return t&&(typeof t=="function"?u=d=>t(new Fh(d,this,this._ref)):u={next:t.next?d=>t.next(new Fh(d,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,u,s||void 0,o||void 0)}}class WT{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Rr(e,this._service))}get items(){return this._delegate.items.map(e=>new Rr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=DO(this._delegate,e);return new Rr(t,this.storage)}get root(){return new Rr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Rr(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new XT(wO(this._delegate,e,t),this)}putString(e,t=ni.RAW,s){this._throwIfRoot("putString");const o=xA(t,e),u={...s};return u.contentType==null&&o.contentType!=null&&(u.contentType=o.contentType),new XT(new LA(this._delegate,new Ar(o.data,!0),u),this)}listAll(){return CO(this._delegate).then(e=>new WT(e,this.storage))}list(e){return IO(this._delegate,e||void 0).then(t=>new WT(t,this.storage))}getMetadata(){return SO(this._delegate)}updateMetadata(e){return RO(this._delegate,e)}getDownloadURL(){return NO(this._delegate)}delete(){return this._throwIfRoot("delete"),xO(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw IA(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(JT(e))throw Mo("ref() expected a child path but got a URL, use refFromURL instead.");return new Rr($T(this._delegate,e),this)}refFromURL(e){if(!JT(e))throw Mo("refFromURL() expected a full URL but got a child path, use ref() instead.");try{hn.makeFromUrl(e,this._delegate.host)}catch{throw Mo("refFromUrl() expected a valid full URL but got an invalid one.")}return new Rr($T(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,s={}){OO(this._delegate,e,t,s)}}function JT(i){return/^[A-Za-z]+:\/\//.test(i)}const PO="@firebase/storage-compat",VO="0.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO="storage-compat";function LO(i,{instanceIdentifier:e}){const t=i.getProvider("app-compat").getImmediate(),s=i.getProvider("storage").getImmediate({identifier:e});return new HA(t,s)}function zO(i){const e={TaskState:yn,TaskEvent:uO,StringFormat:ni,Storage:HA,Reference:Rr};i.INTERNAL.registerComponent(new vi(UO,LO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),i.registerVersion(PO,VO)}zO(Jo);var ZT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Es,FA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,S){function C(){}C.prototype=S.prototype,I.F=S.prototype,I.prototype=new C,I.prototype.constructor=I,I.D=function(D,O,V){for(var N=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)N[nt-2]=arguments[nt];return S.prototype[O].apply(D,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,S,C){C||(C=0);const D=Array(16);if(typeof S=="string")for(var O=0;O<16;++O)D[O]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(O=0;O<16;++O)D[O]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=I.g[0],C=I.g[1],O=I.g[2];let V=I.g[3],N;N=S+(V^C&(O^V))+D[0]+3614090360&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(O^S&(C^O))+D[1]+3905402710&4294967295,V=S+(N<<12&4294967295|N>>>20),N=O+(C^V&(S^C))+D[2]+606105819&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(S^O&(V^S))+D[3]+3250441966&4294967295,C=O+(N<<22&4294967295|N>>>10),N=S+(V^C&(O^V))+D[4]+4118548399&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(O^S&(C^O))+D[5]+1200080426&4294967295,V=S+(N<<12&4294967295|N>>>20),N=O+(C^V&(S^C))+D[6]+2821735955&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(S^O&(V^S))+D[7]+4249261313&4294967295,C=O+(N<<22&4294967295|N>>>10),N=S+(V^C&(O^V))+D[8]+1770035416&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(O^S&(C^O))+D[9]+2336552879&4294967295,V=S+(N<<12&4294967295|N>>>20),N=O+(C^V&(S^C))+D[10]+4294925233&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(S^O&(V^S))+D[11]+2304563134&4294967295,C=O+(N<<22&4294967295|N>>>10),N=S+(V^C&(O^V))+D[12]+1804603682&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(O^S&(C^O))+D[13]+4254626195&4294967295,V=S+(N<<12&4294967295|N>>>20),N=O+(C^V&(S^C))+D[14]+2792965006&4294967295,O=V+(N<<17&4294967295|N>>>15),N=C+(S^O&(V^S))+D[15]+1236535329&4294967295,C=O+(N<<22&4294967295|N>>>10),N=S+(O^V&(C^O))+D[1]+4129170786&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(S^C))+D[6]+3225465664&4294967295,V=S+(N<<9&4294967295|N>>>23),N=O+(S^C&(V^S))+D[11]+643717713&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(O^V))+D[0]+3921069994&4294967295,C=O+(N<<20&4294967295|N>>>12),N=S+(O^V&(C^O))+D[5]+3593408605&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(S^C))+D[10]+38016083&4294967295,V=S+(N<<9&4294967295|N>>>23),N=O+(S^C&(V^S))+D[15]+3634488961&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(O^V))+D[4]+3889429448&4294967295,C=O+(N<<20&4294967295|N>>>12),N=S+(O^V&(C^O))+D[9]+568446438&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(S^C))+D[14]+3275163606&4294967295,V=S+(N<<9&4294967295|N>>>23),N=O+(S^C&(V^S))+D[3]+4107603335&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(O^V))+D[8]+1163531501&4294967295,C=O+(N<<20&4294967295|N>>>12),N=S+(O^V&(C^O))+D[13]+2850285829&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^O&(S^C))+D[2]+4243563512&4294967295,V=S+(N<<9&4294967295|N>>>23),N=O+(S^C&(V^S))+D[7]+1735328473&4294967295,O=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(O^V))+D[12]+2368359562&4294967295,C=O+(N<<20&4294967295|N>>>12),N=S+(C^O^V)+D[5]+4294588738&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^O)+D[8]+2272392833&4294967295,V=S+(N<<11&4294967295|N>>>21),N=O+(V^S^C)+D[11]+1839030562&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^S)+D[14]+4259657740&4294967295,C=O+(N<<23&4294967295|N>>>9),N=S+(C^O^V)+D[1]+2763975236&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^O)+D[4]+1272893353&4294967295,V=S+(N<<11&4294967295|N>>>21),N=O+(V^S^C)+D[7]+4139469664&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^S)+D[10]+3200236656&4294967295,C=O+(N<<23&4294967295|N>>>9),N=S+(C^O^V)+D[13]+681279174&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^O)+D[0]+3936430074&4294967295,V=S+(N<<11&4294967295|N>>>21),N=O+(V^S^C)+D[3]+3572445317&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^S)+D[6]+76029189&4294967295,C=O+(N<<23&4294967295|N>>>9),N=S+(C^O^V)+D[9]+3654602809&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^O)+D[12]+3873151461&4294967295,V=S+(N<<11&4294967295|N>>>21),N=O+(V^S^C)+D[15]+530742520&4294967295,O=V+(N<<16&4294967295|N>>>16),N=C+(O^V^S)+D[2]+3299628645&4294967295,C=O+(N<<23&4294967295|N>>>9),N=S+(O^(C|~V))+D[0]+4096336452&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~O))+D[7]+1126891415&4294967295,V=S+(N<<10&4294967295|N>>>22),N=O+(S^(V|~C))+D[14]+2878612391&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~S))+D[5]+4237533241&4294967295,C=O+(N<<21&4294967295|N>>>11),N=S+(O^(C|~V))+D[12]+1700485571&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~O))+D[3]+2399980690&4294967295,V=S+(N<<10&4294967295|N>>>22),N=O+(S^(V|~C))+D[10]+4293915773&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~S))+D[1]+2240044497&4294967295,C=O+(N<<21&4294967295|N>>>11),N=S+(O^(C|~V))+D[8]+1873313359&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~O))+D[15]+4264355552&4294967295,V=S+(N<<10&4294967295|N>>>22),N=O+(S^(V|~C))+D[6]+2734768916&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~S))+D[13]+1309151649&4294967295,C=O+(N<<21&4294967295|N>>>11),N=S+(O^(C|~V))+D[4]+4149444226&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~O))+D[11]+3174756917&4294967295,V=S+(N<<10&4294967295|N>>>22),N=O+(S^(V|~C))+D[2]+718787259&4294967295,O=V+(N<<15&4294967295|N>>>17),N=C+(V^(O|~S))+D[9]+3951481745&4294967295,I.g[0]=I.g[0]+S&4294967295,I.g[1]=I.g[1]+(O+(N<<21&4294967295|N>>>11))&4294967295,I.g[2]=I.g[2]+O&4294967295,I.g[3]=I.g[3]+V&4294967295}s.prototype.v=function(I,S){S===void 0&&(S=I.length);const C=S-this.blockSize,D=this.C;let O=this.h,V=0;for(;V<S;){if(O==0)for(;V<=C;)o(this,I,V),V+=this.blockSize;if(typeof I=="string"){for(;V<S;)if(D[O++]=I.charCodeAt(V++),O==this.blockSize){o(this,D),O=0;break}}else for(;V<S;)if(D[O++]=I[V++],O==this.blockSize){o(this,D),O=0;break}}this.h=O,this.o+=S},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var S=1;S<I.length-8;++S)I[S]=0;S=this.o*8;for(var C=I.length-8;C<I.length;++C)I[C]=S&255,S/=256;for(this.v(I),I=Array(16),S=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)I[S++]=this.g[C]>>>D&255;return I};function u(I,S){var C=m;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=S(I)}function d(I,S){this.h=S;const C=[];let D=!0;for(let O=I.length-1;O>=0;O--){const V=I[O]|0;D&&V==S||(C[O]=V,D=!1)}this.g=C}var m={};function p(I){return-128<=I&&I<128?u(I,function(S){return new d([S|0],S<0?-1:0)}):new d([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return T;if(I<0)return Z(y(-I));const S=[];let C=1;for(let D=0;I>=C;D++)S[D]=I/C|0,C*=4294967296;return new d(S,0)}function v(I,S){if(I.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(I.charAt(0)=="-")return Z(v(I.substring(1),S));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(S,8));let D=T;for(let V=0;V<I.length;V+=8){var O=Math.min(8,I.length-V);const N=parseInt(I.substring(V,V+O),S);O<8?(O=y(Math.pow(S,O)),D=D.j(O).add(y(N))):(D=D.j(C),D=D.add(y(N)))}return D}var T=p(0),R=p(1),q=p(16777216);i=d.prototype,i.m=function(){if(ee(this))return-Z(this).m();let I=0,S=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);I+=(D>=0?D:4294967296+D)*S,S*=4294967296}return I},i.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(Y(this))return"0";if(ee(this))return"-"+Z(this).toString(I);const S=y(Math.pow(I,6));var C=this;let D="";for(;;){const O=ye(C,S).g;C=ce(C,O.j(S));let V=((C.g.length>0?C.g[0]:C.h)>>>0).toString(I);if(C=O,Y(C))return V+D;for(;V.length<6;)V="0"+V;D=V+D}},i.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function Y(I){if(I.h!=0)return!1;for(let S=0;S<I.g.length;S++)if(I.g[S]!=0)return!1;return!0}function ee(I){return I.h==-1}i.l=function(I){return I=ce(this,I),ee(I)?-1:Y(I)?0:1};function Z(I){const S=I.g.length,C=[];for(let D=0;D<S;D++)C[D]=~I.g[D];return new d(C,~I.h).add(R)}i.abs=function(){return ee(this)?Z(this):this},i.add=function(I){const S=Math.max(this.g.length,I.g.length),C=[];let D=0;for(let O=0;O<=S;O++){let V=D+(this.i(O)&65535)+(I.i(O)&65535),N=(V>>>16)+(this.i(O)>>>16)+(I.i(O)>>>16);D=N>>>16,V&=65535,N&=65535,C[O]=N<<16|V}return new d(C,C[C.length-1]&-2147483648?-1:0)};function ce(I,S){return I.add(Z(S))}i.j=function(I){if(Y(this)||Y(I))return T;if(ee(this))return ee(I)?Z(this).j(Z(I)):Z(Z(this).j(I));if(ee(I))return Z(this.j(Z(I)));if(this.l(q)<0&&I.l(q)<0)return y(this.m()*I.m());const S=this.g.length+I.g.length,C=[];for(var D=0;D<2*S;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let O=0;O<I.g.length;O++){const V=this.i(D)>>>16,N=this.i(D)&65535,nt=I.i(O)>>>16,vt=I.i(O)&65535;C[2*D+2*O]+=N*vt,fe(C,2*D+2*O),C[2*D+2*O+1]+=V*vt,fe(C,2*D+2*O+1),C[2*D+2*O+1]+=N*nt,fe(C,2*D+2*O+1),C[2*D+2*O+2]+=V*nt,fe(C,2*D+2*O+2)}for(I=0;I<S;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=S;I<2*S;I++)C[I]=0;return new d(C,0)};function fe(I,S){for(;(I[S]&65535)!=I[S];)I[S+1]+=I[S]>>>16,I[S]&=65535,S++}function ue(I,S){this.g=I,this.h=S}function ye(I,S){if(Y(S))throw Error("division by zero");if(Y(I))return new ue(T,T);if(ee(I))return S=ye(Z(I),S),new ue(Z(S.g),Z(S.h));if(ee(S))return S=ye(I,Z(S)),new ue(Z(S.g),S.h);if(I.g.length>30){if(ee(I)||ee(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,D=S;D.l(I)<=0;)C=Ce(C),D=Ce(D);var O=J(C,1),V=J(D,1);for(D=J(D,2),C=J(C,2);!Y(D);){var N=V.add(D);N.l(I)<=0&&(O=O.add(C),V=N),D=J(D,1),C=J(C,1)}return S=ce(I,O.j(S)),new ue(O,S)}for(O=T;I.l(S)>=0;){for(C=Math.max(1,Math.floor(I.m()/S.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),V=y(C),N=V.j(S);ee(N)||N.l(I)>0;)C-=D,V=y(C),N=V.j(S);Y(V)&&(V=R),O=O.add(V),I=ce(I,N)}return new ue(O,I)}i.B=function(I){return ye(this,I).h},i.and=function(I){const S=Math.max(this.g.length,I.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)&I.i(D);return new d(C,this.h&I.h)},i.or=function(I){const S=Math.max(this.g.length,I.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)|I.i(D);return new d(C,this.h|I.h)},i.xor=function(I){const S=Math.max(this.g.length,I.g.length),C=[];for(let D=0;D<S;D++)C[D]=this.i(D)^I.i(D);return new d(C,this.h^I.h)};function Ce(I){const S=I.g.length+1,C=[];for(let D=0;D<S;D++)C[D]=I.i(D)<<1|I.i(D-1)>>>31;return new d(C,I.h)}function J(I,S){const C=S>>5;S%=32;const D=I.g.length-C,O=[];for(let V=0;V<D;V++)O[V]=S>0?I.i(V+C)>>>S|I.i(V+C+1)<<32-S:I.i(V+C);return new d(O,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,FA=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.B,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=v,Es=d}).apply(typeof ZT<"u"?ZT:typeof self<"u"?self:typeof window<"u"?window:{});var Gh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GA,Au,KA,td,Fp,YA,QA,$A;(function(){var i,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gh=="object"&&Gh];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var s=t(this);function o(c,g){if(g)e:{var E=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in E))break e;E=E[U]}c=c[c.length-1],A=E[c],g=g(A),g!=A&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var E=[],A;for(A in g)Object.prototype.hasOwnProperty.call(g,A)&&E.push([A,g[A]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,E){return c.call.apply(c.bind,arguments)}function y(c,g,E){return y=p,y.apply(null,arguments)}function v(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function T(c,g){function E(){}E.prototype=g.prototype,c.Z=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Ob=function(A,U,H){for(var ie=Array(arguments.length-2),we=2;we<arguments.length;we++)ie[we-2]=arguments[we];return g.prototype[U].apply(A,ie)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function q(c){const g=c.length;if(g>0){const E=Array(g);for(let A=0;A<g;A++)E[A]=c[A];return E}return[]}function Y(c,g){for(let A=1;A<arguments.length;A++){const U=arguments[A];var E=typeof U;if(E=E!="object"?E:U?Array.isArray(U)?"array":E:"null",E=="array"||E=="object"&&typeof U.length=="number"){E=c.length||0;const H=U.length||0;c.length=E+H;for(let ie=0;ie<H;ie++)c[E+ie]=U[ie]}else c.push(U)}}class ee{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Z(c){d.setTimeout(()=>{throw c},0)}function ce(){var c=I;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class fe{constructor(){this.h=this.g=null}add(g,E){const A=ue.get();A.set(g,E),this.h?this.h.next=A:this.g=A,this.h=A}}var ue=new ee(()=>new ye,c=>c.reset());class ye{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,J=!1,I=new fe,S=()=>{const c=Promise.resolve(void 0);Ce=()=>{c.then(C)}};function C(){for(var c;c=ce();){try{c.h.call(c.g)}catch(E){Z(E)}var g=ue;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}J=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};d.addEventListener("test",E,g),d.removeEventListener("test",E,g)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function nt(c,g){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}T(nt,O),nt.prototype.init=function(c,g){const E=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&nt.Z.h.call(this)},nt.prototype.h=function(){nt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),j=0;function ne(c,g,E,A,U){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!A,this.ha=U,this.key=++j,this.da=this.fa=!1}function he(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ze(c,g,E){for(const A in c)g.call(E,c[A],A,c)}function Ye(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function M(c){const g={};for(const E in c)g[E]=c[E];return g}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(c,g){let E,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(E in A)c[E]=A[E];for(let H=0;H<X.length;H++)E=X[H],Object.prototype.hasOwnProperty.call(A,E)&&(c[E]=A[E])}}function oe(c){this.src=c,this.g={},this.h=0}oe.prototype.add=function(c,g,E,A,U){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ie=Re(c,g,A,U);return ie>-1?(g=c[ie],E||(g.fa=!1)):(g=new ne(g,this.src,H,!!A,U),g.fa=E,c.push(g)),g};function Ee(c,g){const E=g.type;if(E in c.g){var A=c.g[E],U=Array.prototype.indexOf.call(A,g,void 0),H;(H=U>=0)&&Array.prototype.splice.call(A,U,1),H&&(he(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Re(c,g,E,A){for(let U=0;U<c.length;++U){const H=c[U];if(!H.da&&H.listener==g&&H.capture==!!E&&H.ha==A)return U}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),zt={};function ut(c,g,E,A,U){if(Array.isArray(g)){for(let H=0;H<g.length;H++)ut(c,g[H],E,A,U);return null}return E=cl(E),c&&c[vt]?c.J(g,E,m(A)?!!A.capture:!1,U):Vs(c,g,E,!1,A,U)}function Vs(c,g,E,A,U,H){if(!g)throw Error("Invalid event type");const ie=m(U)?!!U.capture:!!U;let we=Us(c);if(we||(c[Ue]=we=new oe(c)),E=we.add(g,E,A,ie,H),E.proxy)return E;if(A=Oa(),E.proxy=A,A.src=c,A.listener=E,c.addEventListener)V||(U=ie),U===void 0&&(U=!1),c.addEventListener(g.toString(),A,U);else if(c.attachEvent)c.attachEvent(bi(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Oa(){function c(E){return g.call(c.src,c.listener,E)}const g=ll;return c}function ka(c,g,E,A,U){if(Array.isArray(g))for(var H=0;H<g.length;H++)ka(c,g[H],E,A,U);else A=m(A)?!!A.capture:!!A,E=cl(E),c&&c[vt]?(c=c.i,H=String(g).toString(),H in c.g&&(g=c.g[H],E=Re(g,E,A,U),E>-1&&(he(g[E]),Array.prototype.splice.call(g,E,1),g.length==0&&(delete c.g[H],c.h--)))):c&&(c=Us(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,E,A,U)),(E=c>-1?g[c]:null)&&Ma(E))}function Ma(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[vt])Ee(g.i,c);else{var E=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(E,A,c.capture):g.detachEvent?g.detachEvent(bi(E),A):g.addListener&&g.removeListener&&g.removeListener(A),(E=Us(g))?(Ee(E,c),E.h==0&&(E.src=null,g[Ue]=null)):he(c)}}}function bi(c){return c in zt?zt[c]:zt[c]="on"+c}function ll(c,g){if(c.da)c=!0;else{g=new nt(g,this);const E=c.listener,A=c.ha||c.src;c.fa&&Ma(c),c=E.call(A,g)}return c}function Us(c){return c=c[Ue],c instanceof oe?c:null}var ul="__closure_events_fn_"+(Math.random()*1e9>>>0);function cl(c){return typeof c=="function"?c:(c[ul]||(c[ul]=function(g){return c.handleEvent(g)}),c[ul])}function St(){D.call(this),this.i=new oe(this),this.M=this,this.G=null}T(St,D),St.prototype[vt]=!0,St.prototype.removeEventListener=function(c,g,E,A){ka(this,c,g,E,A)};function jt(c,g){var E,A=c.G;if(A)for(E=[];A;A=A.G)E.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new O(g,c);else if(g instanceof O)g.target=g.target||c;else{var U=g;g=new O(A,c),re(g,U)}U=!0;let H,ie;if(E)for(ie=E.length-1;ie>=0;ie--)H=g.g=E[ie],U=Vr(H,A,!0,g)&&U;if(H=g.g=c,U=Vr(H,A,!0,g)&&U,U=Vr(H,A,!1,g)&&U,E)for(ie=0;ie<E.length;ie++)H=g.g=E[ie],U=Vr(H,A,!1,g)&&U}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const E=c.g[g];for(let A=0;A<E.length;A++)he(E[A]);delete c.g[g],c.h--}}this.G=null},St.prototype.J=function(c,g,E,A){return this.i.add(String(c),g,!1,E,A)},St.prototype.K=function(c,g,E,A){return this.i.add(String(c),g,!0,E,A)};function Vr(c,g,E,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let U=!0;for(let H=0;H<g.length;++H){const ie=g[H];if(ie&&!ie.da&&ie.capture==E){const we=ie.listener,Tt=ie.ha||ie.src;ie.fa&&Ee(c.i,ie),U=we.call(Tt,A)!==!1&&U}}return U&&!A.defaultPrevented}function uf(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:d.setTimeout(c,g||0)}function dc(c){c.g=uf(()=>{c.g=null,c.i&&(c.i=!1,dc(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class fn extends D{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:dc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(c){D.call(this),this.h=c,this.g={}}T(Ls,D);var hl=[];function dl(c){ze(c.g,function(g,E){this.g.hasOwnProperty(E)&&Ma(g)},c),c.g={}}Ls.prototype.N=function(){Ls.Z.N.call(this),dl(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=d.JSON.stringify,cf=d.JSON.parse,fc=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function mc(){}function pc(){}var ri={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xt(){O.call(this,"d")}T(Xt,O);function qn(){O.call(this,"c")}T(qn,O);var Et={},gc=null;function Pa(){return gc=gc||new St}Et.Ia="serverreachability";function yc(c){O.call(this,Et.Ia,c)}T(yc,O);function Ai(c){const g=Pa();jt(g,new yc(g))}Et.STAT_EVENT="statevent";function zs(c,g){O.call(this,Et.STAT_EVENT,c),this.stat=g}T(zs,O);function Rt(c){const g=Pa();jt(g,new zs(g,c))}Et.Ja="timingevent";function wi(c,g){O.call(this,Et.Ja,c),this.size=g}T(wi,O);function Si(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function si(){this.g=!0}si.prototype.ua=function(){this.g=!1};function hf(c,g,E,A,U,H){c.info(function(){if(c.g)if(H){var ie="",we=H.split("&");for(let Fe=0;Fe<we.length;Fe++){var Tt=we[Fe].split("=");if(Tt.length>1){const ct=Tt[0];Tt=Tt[1];const Kn=ct.split("_");ie=Kn.length>=2&&Kn[1]=="type"?ie+(ct+"="+Tt+"&"):ie+(ct+"=redacted&")}}}else ie=null;else ie=H;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+g+`
`+E+`
`+ie})}function _c(c,g,E,A,U,H,ie){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+g+`
`+E+`
`+H+" "+ie})}function Ri(c,g,E,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+df(c,E)+(A?" "+A:"")})}function js(c,g){c.info(function(){return"TIMEOUT: "+g})}si.prototype.info=function(){};function df(c,g){if(!c.g)return g;if(!g)return null;try{const H=JSON.parse(g);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var E=H[c];if(!(E.length<2)){var A=E[1];if(Array.isArray(A)&&!(A.length<1)){var U=A[0];if(U!="noop"&&U!="stop"&&U!="close")for(let ie=1;ie<A.length;ie++)A[ie]=""}}}}return Ur(H)}catch{return g}}var Bs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ml;function qs(){}T(qs,mc),qs.prototype.g=function(){return new XMLHttpRequest},ml=new qs;function rr(c){return encodeURIComponent(String(c))}function vc(c){var g=1;c=c.split(":");const E=[];for(;g>0&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function ai(c,g,E,A){this.j=c,this.i=g,this.l=E,this.S=A||1,this.V=new Ls(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oi}function oi(){this.i=null,this.g="",this.h=!1}var It={},Gt={};function Ii(c,g,E){c.M=1,c.A=Hs(Nt(g)),c.u=E,c.R=!0,Va(c,null)}function Va(c,g){c.F=Date.now(),Ci(c),c.B=Nt(c.A);var E=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ja(E.i,"t",A),c.C=0,E=c.j.L,c.h=new oi,c.g=Mc(c.j,E?g:null,!c.u),c.P>0&&(c.O=new fn(y(c.Y,c,c.g),c.P)),g=c.V,E=c.g,A=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(hl[0]=U.toString()),U=hl);for(let H=0;H<U.length;H++){const ie=ut(E,U[H],A||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),Ai(),hf(c.i,c.v,c.B,c.l,c.S,c.u)}ai.prototype.ba=function(c){c=c.target;const g=this.O;g&&ci(c)==3?g.j():this.Y(c)},ai.prototype.Y=function(c){try{if(c==this.g)e:{const we=ci(this.g),Tt=this.g.ya(),Fe=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Wt(this.g)))){this.K||we!=4||Tt==7||(Tt==8||Fe<=0?Ai(3):Ai(2)),Ni(this);var g=this.g.ca();this.X=g;var E=ff(this);if(this.o=g==200,_c(this.i,this.v,this.B,this.l,this.S,we,g),this.o){if(this.U&&!this.L){t:{if(this.g){var A,U=this.g;if((A=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(A)){var H=A;break t}}H=null}if(c=H)Ri(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xi(this,c);else{this.o=!1,this.m=3,Rt(12),Cn(this),Hn(this);break e}}if(this.R){c=!0;let ct;for(;!this.K&&this.C<E.length;)if(ct=Tc(this,E),ct==Gt){we==4&&(this.m=4,Rt(14),c=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==It){this.m=4,Rt(15),Ri(this.i,this.l,E,"[Invalid Chunk]"),c=!1;break}else Ri(this.i,this.l,ct,null),xi(this,ct);if(Ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||E.length!=0||this.h.h||(this.m=1,Rt(16),c=!1),this.o=this.o&&c,!c)Ri(this.i,this.l,E,"[Invalid Chunked Response]"),Cn(this),Hn(this);else if(E.length>0&&!this.W){this.W=!0;var ie=this.j;ie.g==this&&ie.aa&&!ie.P&&(ie.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Nl(ie),ie.P=!0,Rt(11))}}else Ri(this.i,this.l,E,null),xi(this,E);we==4&&Cn(this),this.o&&!this.K&&(we==4?xc(this.j,this):(this.o=!1,Ci(this)))}else ar(this.g),g==400&&E.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),Cn(this),Hn(this)}}}catch{}finally{}};function ff(c){if(!Ec(c))return c.g.la();const g=Wt(c.g);if(g==="")return"";let E="";const A=g.length,U=ci(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Cn(c),Hn(c),"";c.h.i=new d.TextDecoder}for(let H=0;H<A;H++)c.h.h=!0,E+=c.h.i.decode(g[H],{stream:!(U&&H==A-1)});return g.length=0,c.h.g+=E,c.C=0,c.h.g}function Ec(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Tc(c,g){var E=c.C,A=g.indexOf(`
`,E);return A==-1?Gt:(E=Number(g.substring(E,A)),isNaN(E)?It:(A+=1,A+E>g.length?Gt:(g=g.slice(A,A+E),c.C=A+E,g)))}ai.prototype.cancel=function(){this.K=!0,Cn(this)};function Ci(c){c.T=Date.now()+c.H,Ua(c,c.H)}function Ua(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Si(y(c.aa,c),g)}function Ni(c){c.D&&(d.clearTimeout(c.D),c.D=null)}ai.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(js(this.i,this.B),this.M!=2&&(Ai(),Rt(17)),Cn(this),this.m=2,Hn(this)):Ua(this,this.T-c)};function Hn(c){c.j.I==0||c.K||xc(c.j,c)}function Cn(c){Ni(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,dl(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function xi(c,g){try{var E=c.j;if(E.I!=0&&(E.g==c||Oi(E.h,c))){if(!c.L&&Oi(E.h,c)&&E.I==3){try{var A=E.Ba.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<c.F)Ga(E),Gr(E);else break e;Xs(E),Rt(18)}}else E.xa=U[1],0<E.xa-E.K&&U[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Si(y(E.Va,E),6e3));Di(E.h)<=1&&E.ta&&(E.ta=void 0)}else Li(E,11)}else if((c.L||E.g==c)&&Ga(E),!N(g))for(U=E.Ba.g.parse(g),g=0;g<U.length;g++){let Fe=U[g];const ct=Fe[0];if(!(ct<=E.K))if(E.K=ct,Fe=Fe[1],E.I==2)if(Fe[0]=="c"){E.M=Fe[1],E.ba=Fe[2];const Kn=Fe[3];Kn!=null&&(E.ka=Kn,E.j.info("VER="+E.ka));const zi=Fe[4];zi!=null&&(E.za=zi,E.j.info("SVER="+E.za));const hi=Fe[5];hi!=null&&typeof hi=="number"&&hi>0&&(A=1.5*hi,E.O=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const di=c.g;if(di){const Ws=di.g?di.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var H=A.h;H.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(yl(H,H.h),H.h=null))}if(A.G){const Ka=di.g?di.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(A.wa=Ka,Qe(A.J,A.G,Ka))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-c.F,E.j.info("Handshake RTT: "+E.T+"ms")),A=E;var ie=c;if(A.na=kc(A,A.L?A.ba:null,A.W),ie.L){_l(A.h,ie);var we=ie,Tt=A.O;Tt&&(we.H=Tt),we.D&&(Ni(we),Ci(we)),A.g=ie}else Cc(A);E.i.length>0&&Ui(E)}else Fe[0]!="stop"&&Fe[0]!="close"||Li(E,7);else E.I==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Li(E,7):Il(E):Fe[0]!="noop"&&E.l&&E.l.qa(Fe),E.A=0)}}Ai(4)}catch{}}var Ct=class{constructor(c,g){this.g=c,this.map=g}};function pl(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function gl(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Di(c){return c.h?1:c.g?c.g.size:0}function Oi(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function yl(c,g){c.g?c.g.add(g):c.h=g}function _l(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}pl.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function vl(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.G);return g}return q(c.i)}var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function La(c,g){if(c){c=c.split("&");for(let E=0;E<c.length;E++){const A=c[E].indexOf("=");let U,H=null;A>=0?(U=c[E].substring(0,A),H=c[E].substring(A+1)):U=c[E],g(U,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Nn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof Nn?(this.l=c.l,Kt(this,c.j),this.o=c.o,this.g=c.g,Lr(this,c.u),this.h=c.h,El(this,Rc(c.i)),this.m=c.m):c&&(g=String(c).match(bc))?(this.l=!1,Kt(this,g[1]||"",!0),this.o=ki(g[2]||""),this.g=ki(g[3]||"",!0),Lr(this,g[4]),this.h=ki(g[5]||"",!0),El(this,g[6]||"",!0),this.m=ki(g[7]||"")):(this.l=!1,this.i=new jr(null,this.l))}Nn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Fs(g,za,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Fs(g,za,!0),"@"),c.push(rr(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&c.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Fs(E,E.charAt(0)=="/"?Tl:Ac,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Fs(E,wc)),c.join("")},Nn.prototype.resolve=function(c){const g=Nt(this);let E=!!c.j;E?Kt(g,c.j):E=!!c.o,E?g.o=c.o:E=!!c.g,E?g.g=c.g:E=c.u!=null;var A=c.h;if(E)Lr(g,c.u);else if(E=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var U=g.h.lastIndexOf("/");U!=-1&&(A=g.h.slice(0,U+1)+A)}if(U=A,U==".."||U==".")A="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){A=U.lastIndexOf("/",0)==0,U=U.split("/");const H=[];for(let ie=0;ie<U.length;){const we=U[ie++];we=="."?A&&ie==U.length&&H.push(""):we==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),A&&ie==U.length&&H.push("")):(H.push(we),A=!0)}A=H.join("/")}else A=U}return E?g.h=A:E=c.i.toString()!=="",E?El(g,Rc(c.i)):E=!!c.m,E&&(g.m=c.m),g};function Nt(c){return new Nn(c)}function Kt(c,g,E){c.j=E?ki(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Lr(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function El(c,g,E){g instanceof jr?(c.i=g,Ba(c.i,c.l)):(E||(g=Fs(g,zr)),c.i=new jr(g,c.l))}function Qe(c,g,E){c.i.set(g,E)}function Hs(c){return Qe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ki(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Fs(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,_n),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _n(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var za=/[#\/\?@]/g,Ac=/[#\?:]/g,Tl=/[#\?]/g,zr=/[#\?@]/g,wc=/#/g;function jr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function vn(c){c.g||(c.g=new Map,c.h=0,c.i&&La(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}i=jr.prototype,i.add=function(c,g){vn(this),this.i=null,c=Br(this,c);let E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function Sc(c,g){vn(c),g=Br(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function bl(c,g){return vn(c),g=Br(c,g),c.g.has(g)}i.forEach=function(c,g){vn(this),this.g.forEach(function(E,A){E.forEach(function(U){c.call(g,U,A,this)},this)},this)};function Al(c,g){vn(c);let E=[];if(typeof g=="string")bl(c,g)&&(E=E.concat(c.g.get(Br(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)E=E.concat(c[g]);return E}i.set=function(c,g){return vn(this),this.i=null,c=Br(this,c),bl(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},i.get=function(c,g){return c?(c=Al(this,c),c.length>0?String(c[0]):g):g};function ja(c,g,E){Sc(c,g),E.length>0&&(c.i=null,c.g.set(Br(c,g),q(E)),c.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let A=0;A<g.length;A++){var E=g[A];const U=rr(E);E=Al(this,E);for(let H=0;H<E.length;H++){let ie=U;E[H]!==""&&(ie+="="+rr(E[H])),c.push(ie)}}return this.i=c.join("&")};function Rc(c){const g=new jr;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function Br(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Ba(c,g){g&&!c.j&&(vn(c),c.i=null,c.g.forEach(function(E,A){const U=A.toLowerCase();A!=U&&(Sc(this,A),ja(this,U,E))},c)),c.j=g}function li(c,g){const E=new si;if(d.Image){const A=new Image;A.onload=v(Fn,E,"TestLoadImage: loaded",!0,g,A),A.onerror=v(Fn,E,"TestLoadImage: error",!1,g,A),A.onabort=v(Fn,E,"TestLoadImage: abort",!1,g,A),A.ontimeout=v(Fn,E,"TestLoadImage: timeout",!1,g,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function wl(c,g){const E=new si,A=new AbortController,U=setTimeout(()=>{A.abort(),Fn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(U),H.ok?Fn(E,"TestPingServer: ok",!0,g):Fn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Fn(E,"TestPingServer: error",!1,g)})}function Fn(c,g,E,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(E)}catch{}}function qr(){this.g=new fc}function Mi(c){this.i=c.Sb||null,this.h=c.ab||!1}T(Mi,mc),Mi.prototype.g=function(){return new Gs(this.i,this.h)};function Gs(c,g){St.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Gs,St),i=Gs.prototype,i.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,ui(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||d).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hr(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qa(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function qa(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?Hr(this):ui(this),this.readyState==3&&qa(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Hr(this))},i.Na=function(c){this.g&&(this.response=c,Hr(this))},i.ga=function(){this.g&&Hr(this)};function Hr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ui(c)}i.setRequestHeader=function(c,g){this.A.append(c,g)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Gs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gn(c){let g="";return ze(c,function(E,A){g+=A,g+=":",g+=E,g+=`\r
`}),g}function Ks(c,g,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=Gn(E),typeof c=="string"?E!=null&&rr(E):Qe(c,g,E))}function We(c){St.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(We,St);var Pi=/^https?$/i,Sl=["POST","PUT"];i=We.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,g,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ml.g(),this.g.onreadystatechange=R(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){Ys(this,H);return}if(c=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)E.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())E.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&c instanceof d.FormData,!(Array.prototype.indexOf.call(Sl,g,void 0)>=0)||A||U||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of E)this.g.setRequestHeader(H,ie);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){Ys(this,H)}};function Ys(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,Rl(c),sr(c)}function Rl(c){c.A||(c.A=!0,jt(c,"complete"),jt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,jt(this,"complete"),jt(this,"abort"),sr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sr(this,!0)),We.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Qs(this):this.Xa())},i.Xa=function(){Qs(this)};function Qs(c){if(c.h&&typeof u<"u"){if(c.v&&ci(c)==4)setTimeout(c.Ca.bind(c),0);else if(jt(c,"readystatechange"),ci(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var A;if(A=H===0){let ie=String(c.D).match(bc)[1]||null;!ie&&d.self&&d.self.location&&(ie=d.self.location.protocol.slice(0,-1)),A=!Pi.test(ie?ie.toLowerCase():"")}E=A}if(E)jt(c,"complete"),jt(c,"success");else{c.o=6;try{var U=ci(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",Rl(c)}}finally{sr(c)}}}}function sr(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const E=c.g;c.g=null,g||jt(c,"ready");try{E.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function ci(c){return c.g?c.g.readyState:0}i.ca=function(){try{return ci(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),cf(g)}};function Wt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ar(c){const g={};c=(c.g&&ci(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(N(c[A]))continue;var E=vc(c[A]);const U=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const H=g[U]||[];g[U]=H,H.push(E)}Ye(g,function(A){return A.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vi(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Fr(c){this.za=0,this.i=[],this.j=new si,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vi("baseRetryDelayMs",5e3,c),this.Za=Vi("retryDelaySeedMs",1e4,c),this.Ta=Vi("forwardChannelMaxRetries",2,c),this.va=Vi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new pl(c&&c.concurrentRequestLimit),this.Ba=new qr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Fr.prototype,i.ka=8,i.I=1,i.connect=function(c,g,E,A){Rt(0),this.W=c,this.H=g||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.J=kc(this,null,this.W),Ui(this)};function Il(c){if(Ha(c),c.I==3){var g=c.V++,E=Nt(c.J);if(Qe(E,"SID",c.M),Qe(E,"RID",g),Qe(E,"TYPE","terminate"),$s(c,E),g=new ai(c,c.j,g),g.M=2,g.A=Hs(Nt(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(g.A.toString(),"")}catch{}!E&&d.Image&&(new Image().src=g.A,E=!0),E||(g.g=Mc(g.j,null),g.g.ea(g.A)),g.F=Date.now(),Ci(g)}Oc(c)}function Gr(c){c.g&&(Nl(c),c.g.cancel(),c.g=null)}function Ha(c){Gr(c),c.v&&(d.clearTimeout(c.v),c.v=null),Ga(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&d.clearTimeout(c.m),c.m=null)}function Ui(c){if(!gl(c.h)&&!c.m){c.m=!0;var g=c.Ea;Ce||S(),J||(Ce(),J=!0),I.add(g,c),c.D=0}}function Fa(c,g){return Di(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Si(y(c.Ea,c,g),Dc(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new ai(this,this.j,c);let H=this.o;if(this.U&&(H?(H=M(H),re(H,this.U)):H=this.U),this.u!==null||this.R||(U.J=H,H=null),this.S)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,g>4096){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Ic(this,U,g),E=Nt(this.J),Qe(E,"RID",c),Qe(E,"CVER",22),this.G&&Qe(E,"X-HTTP-Session-Id",this.G),$s(this,E),H&&(this.R?g="headers="+rr(Gn(H))+"&"+g:this.u&&Ks(E,this.u,H)),yl(this.h,U),this.Ra&&Qe(E,"TYPE","init"),this.S?(Qe(E,"$req",g),Qe(E,"SID","null"),U.U=!0,Ii(U,E,null)):Ii(U,E,g),this.I=2}}else this.I==3&&(c?Cl(this,c):this.i.length==0||gl(this.h)||Cl(this))};function Cl(c,g){var E;g?E=g.l:E=c.V++;const A=Nt(c.J);Qe(A,"SID",c.M),Qe(A,"RID",E),Qe(A,"AID",c.K),$s(c,A),c.u&&c.o&&Ks(A,c.u,c.o),E=new ai(c,c.j,E,c.D+1),c.u===null&&(E.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Ic(c,E,1e3),E.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),yl(c.h,E),Ii(E,A,g)}function $s(c,g){c.H&&ze(c.H,function(E,A){Qe(g,A,E)}),c.l&&ze({},function(E,A){Qe(g,A,E)})}function Ic(c,g,E){E=Math.min(c.i.length,E);const A=c.l?y(c.l.Ka,c.l,c):null;e:{var U=c.i;let we=-1;for(;;){const Tt=["count="+E];we==-1?E>0?(we=U[0].g,Tt.push("ofs="+we)):we=0:Tt.push("ofs="+we);let Fe=!0;for(let ct=0;ct<E;ct++){var H=U[ct].g;const Kn=U[ct].map;if(H-=we,H<0)we=Math.max(0,U[ct].g-100),Fe=!1;else try{H="req"+H+"_"||"";try{var ie=Kn instanceof Map?Kn:Object.entries(Kn);for(const[zi,hi]of ie){let di=hi;m(hi)&&(di=Ur(hi)),Tt.push(H+zi+"="+encodeURIComponent(di))}}catch(zi){throw Tt.push(H+"type="+encodeURIComponent("_badmap")),zi}}catch{A&&A(Kn)}}if(Fe){ie=Tt.join("&");break e}}ie=void 0}return c=c.i.splice(0,E),g.G=c,ie}function Cc(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;Ce||S(),J||(Ce(),J=!0),I.add(g,c),c.A=0}}function Xs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Si(y(c.Da,c),Dc(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Nc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Si(y(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),Gr(this),Nc(this))};function Nl(c){c.B!=null&&(d.clearTimeout(c.B),c.B=null)}function Nc(c){c.g=new ai(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=Nt(c.na);Qe(g,"RID","rpc"),Qe(g,"SID",c.M),Qe(g,"AID",c.K),Qe(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Qe(g,"TO",c.ia),Qe(g,"TYPE","xmlhttp"),$s(c,g),c.u&&c.o&&Ks(g,c.u,c.o),c.O&&(c.g.H=c.O);var E=c.g;c=c.ba,E.M=1,E.A=Hs(Nt(g)),E.u=null,E.R=!0,Va(E,c)}i.Va=function(){this.C!=null&&(this.C=null,Gr(this),Xs(this),Rt(19))};function Ga(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function xc(c,g){var E=null;if(c.g==g){Ga(c),Nl(c),c.g=null;var A=2}else if(Oi(c.h,g))E=g.G,_l(c.h,g),A=1;else return;if(c.I!=0){if(g.o)if(A==1){E=g.u?g.u.length:0,g=Date.now()-g.F;var U=c.D;A=Pa(),jt(A,new wi(A,E)),Ui(c)}else Cc(c);else if(U=g.m,U==3||U==0&&g.X>0||!(A==1&&Fa(c,g)||A==2&&Xs(c)))switch(E&&E.length>0&&(g=c.h,g.i=g.i.concat(E)),U){case 1:Li(c,5);break;case 4:Li(c,10);break;case 3:Li(c,6);break;default:Li(c,2)}}}function Dc(c,g){let E=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(E*=2),E*g}function Li(c,g){if(c.j.info("Error code "+g),g==2){var E=y(c.bb,c),A=c.Ua;const U=!A;A=new Nn(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Kt(A,"https"),Hs(A),U?li(A.toString(),E):wl(A.toString(),E)}else Rt(2);c.I=0,c.l&&c.l.pa(g),Oc(c),Ha(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Oc(c){if(c.I=0,c.ja=[],c.l){const g=vl(c.h);(g.length!=0||c.i.length!=0)&&(Y(c.ja,g),Y(c.ja,c.i),c.h.i.length=0,q(c.i),c.i.length=0),c.l.oa()}}function kc(c,g,E){var A=E instanceof Nn?Nt(E):new Nn(E);if(A.g!="")g&&(A.g=g+"."+A.g),Lr(A,A.u);else{var U=d.location;A=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;const H=new Nn(null);A&&Kt(H,A),g&&(H.g=g),U&&Lr(H,U),E&&(H.h=E),A=H}return E=c.G,g=c.wa,E&&g&&Qe(A,E,g),Qe(A,"VER",c.ka),$s(c,A),A}function Mc(c,g,E){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new We(new Mi({ab:E})):new We(c.ma),g.Fa(c.L),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}i=Pc.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Kr(){}Kr.prototype.g=function(c,g){return new mn(c,g)};function mn(c,g){St.call(this),this.g=new Fr(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!N(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!N(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new or(this)}T(mn,St),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Il(this.g)},mn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.v&&(E={},E.__data__=Ur(c),c=E);g.i.push(new Ct(g.Ya++,c)),g.I==3&&Ui(g)},mn.prototype.N=function(){this.g.l=null,delete this.j,Il(this.g),delete this.g,mn.Z.N.call(this)};function Vc(c){Xt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}T(Vc,Xt);function Uc(){qn.call(this),this.status=1}T(Uc,qn);function or(c){this.g=c}T(or,Pc),or.prototype.ra=function(){jt(this.g,"a")},or.prototype.qa=function(c){jt(this.g,new Vc(c))},or.prototype.pa=function(c){jt(this.g,new Uc)},or.prototype.oa=function(){jt(this.g,"b")},Kr.prototype.createWebChannel=Kr.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,$A=function(){return new Kr},QA=function(){return Pa()},YA=Et,Fp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,td=Bs,fl.COMPLETE="complete",KA=fl,pc.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",St.prototype.listen=St.prototype.J,Au=pc,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,GA=We}).apply(typeof Gh<"u"?Gh:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il="12.9.0";function jO(i){il=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new xd("@firebase/firestore");function So(){return Aa.logLevel}function ae(i,...e){if(Aa.logLevel<=De.DEBUG){const t=e.map(Qg);Aa.debug(`Firestore (${il}): ${i}`,...t)}}function xr(i,...e){if(Aa.logLevel<=De.ERROR){const t=e.map(Qg);Aa.error(`Firestore (${il}): ${i}`,...t)}}function wa(i,...e){if(Aa.logLevel<=De.WARN){const t=e.map(Qg);Aa.warn(`Firestore (${il}): ${i}`,...t)}}function Qg(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,XA(i,s,t)}function XA(i,e,t){let s=`FIRESTORE (${il}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw xr(s),new Error(s)}function Ke(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||XA(e,o,s)}function Ae(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends dn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(un.UNAUTHENTICATED)))}shutdown(){}}class qO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class HO{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new Ts;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ts,e.enqueueRetryable((()=>o(this.currentUser)))};const d=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ts)}}),0),d()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string",31837,{l:s}),new WA(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string",2055,{h:e}),new un(e)}}class FO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=un.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class GO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new FO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class e0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0,3512);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new e0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new e0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=YO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Me(i,e){return i<e?-1:i>e?1:0}function Gp(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Ip(o)===Ip(u)?Me(o,u):Ip(o)?1:-1}return Me(i.length,e.length)}const QO=55296,$O=57343;function Ip(i){const e=i.charCodeAt(0);return e>=QO&&e<=$O}function Fo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="__name__";class Gi{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Gi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Me(e.length,t.length)}static compareSegments(e,t){const s=Gi.isNumericId(e),o=Gi.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Gi.extractNumericId(e).compare(Gi.extractNumericId(t)):Gp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Es.fromString(e.substring(4,e.length-2))}}class it extends Gi{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new it(t)}static emptyPath(){return new it([])}}const XO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Gi{construct(e,t,s){return new rn(e,t,s)}static isValidIdentifier(e){return XO.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===t0}static keyField(){return new rn([t0])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let d=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(d=!d,o++):m!=="."||d?(s+=m,o++):(u(),o++)}if(u(),d)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(it.fromString(e))}static fromName(e){return new pe(it.fromString(e).popFirst(5))}static empty(){return new pe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return it.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new it(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(i,e,t){if(!t)throw new se($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function WO(i,e,t,s){if(e===!0&&s===!0)throw new se($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function n0(i){if(!pe.isDocumentKey(i))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function i0(i){if(pe.isDocumentKey(i))throw new se($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ZA(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Kd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function Sa(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kd(i);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function sc(i,e){if(!ZA(i))throw new se($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const d=i[s];if(o&&typeof d!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&d!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new se($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=-62135596800,s0=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*s0);return new at(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<r0)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/s0}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(sc(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-r0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Ut("string",at._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new at(0,0))}static max(){return new Te(new at(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=-1;function JO(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new at(t+1,0):new at(t,s));return new Ss(o,pe.empty(),e)}function ZO(i){return new Ss(i.readTime,i.key,Hu)}class Ss{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ss(Te.min(),pe.empty(),Hu)}static max(){return new Ss(Te.max(),pe.empty(),Hu)}}function ek(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Me(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==tk)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,u=0,d=!1;e.forEach((m=>{++o,m.next((()=>{++u,d&&u===o&&t()}),(p=>s(p)))})),d=!0,u===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const u=e.length,d=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;t(e[y]).next((v=>{d[y]=v,++m,m===u&&s(d)}),(v=>o(v)))}}))}static doWhile(e,t){return new W(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function ik(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sl(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=-1;function Qd(i){return i==null}function vd(i){return i===0&&1/i==-1/0}function rk(i){return typeof i=="number"&&Number.isInteger(i)&&!vd(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="";function sk(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=a0(e)),e=ak(i.get(t),e);return a0(e)}function ak(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case ew:t+="";break;default:t+=u}}return t}function a0(i){return i+ew+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ms(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function tw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||nn.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kh(this.root,e,this.comparator,!0)}}class Kh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??nn.RED,this.left=o??nn.EMPTY,this.right=u??nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new nn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return nn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new nn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new l0(this.data.getIterator())}getIteratorFrom(e){return new l0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class l0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new zn([])}unionWith(e){let t=new Ft(rn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new nw("Invalid base64 string: "+u):u}})(e);return new an(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let d=0;d<o.length;++d)u+=String.fromCharCode(o[d]);return u})(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const ok=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(i){if(Ke(!!i,39018),typeof i=="string"){let e=0;const t=ok.exec(i);if(Ke(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(i.seconds),nanos:wt(i.nanos)}}function wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Is(i){return typeof i=="string"?an.fromBase64String(i):an.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw="server_timestamp",rw="__type__",sw="__previous_value__",aw="__local_write_time__";function Wg(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[rw])==null?void 0:s.stringValue)===iw}function $d(i){const e=i.mapValue.fields[sw];return Wg(e)?$d(e):e}function Fu(i){const e=Rs(i.mapValue.fields[aw].timestampValue);return new at(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,t,s,o,u,d,m,p,y,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=v,this.apiKey=T}}const Ed="(default)";class Gu{constructor(e,t){this.projectId=e,this.database=t||Ed}static empty(){return new Gu("","")}get isDefaultDatabase(){return this.database===Ed}isEqual(e){return e instanceof Gu&&e.projectId===this.projectId&&e.database===this.database}}function uk(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gu(i.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="__type__",ck="__max__",Yh={mapValue:{}},lw="__vector__",Td="value";function Cs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Wg(i)?4:dk(i)?9007199254740991:hk(i)?10:11:_e(28295,{value:i})}function ir(i,e){if(i===e)return!0;const t=Cs(i);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Fu(i).isEqual(Fu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const d=Rs(o.timestampValue),m=Rs(u.timestampValue);return d.seconds===m.seconds&&d.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Is(o.bytesValue).isEqual(Is(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return wt(o.geoPointValue.latitude)===wt(u.geoPointValue.latitude)&&wt(o.geoPointValue.longitude)===wt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return wt(o.integerValue)===wt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const d=wt(o.doubleValue),m=wt(u.doubleValue);return d===m?vd(d)===vd(m):isNaN(d)&&isNaN(m)}return!1})(i,e);case 9:return Fo(i.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return(function(o,u){const d=o.mapValue.fields||{},m=u.mapValue.fields||{};if(o0(d)!==o0(m))return!1;for(const p in d)if(d.hasOwnProperty(p)&&(m[p]===void 0||!ir(d[p],m[p])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Ku(i,e){return(i.values||[]).find((t=>ir(t,e)))!==void 0}function Go(i,e){if(i===e)return 0;const t=Cs(i),s=Cs(e);if(t!==s)return Me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return(function(u,d){const m=wt(u.integerValue||u.doubleValue),p=wt(d.integerValue||d.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(i,e);case 3:return u0(i.timestampValue,e.timestampValue);case 4:return u0(Fu(i),Fu(e));case 5:return Gp(i.stringValue,e.stringValue);case 6:return(function(u,d){const m=Is(u),p=Is(d);return m.compareTo(p)})(i.bytesValue,e.bytesValue);case 7:return(function(u,d){const m=u.split("/"),p=d.split("/");for(let y=0;y<m.length&&y<p.length;y++){const v=Me(m[y],p[y]);if(v!==0)return v}return Me(m.length,p.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,d){const m=Me(wt(u.latitude),wt(d.latitude));return m!==0?m:Me(wt(u.longitude),wt(d.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return c0(i.arrayValue,e.arrayValue);case 10:return(function(u,d){var R,q,Y,ee;const m=u.fields||{},p=d.fields||{},y=(R=m[Td])==null?void 0:R.arrayValue,v=(q=p[Td])==null?void 0:q.arrayValue,T=Me(((Y=y==null?void 0:y.values)==null?void 0:Y.length)||0,((ee=v==null?void 0:v.values)==null?void 0:ee.length)||0);return T!==0?T:c0(y,v)})(i.mapValue,e.mapValue);case 11:return(function(u,d){if(u===Yh.mapValue&&d===Yh.mapValue)return 0;if(u===Yh.mapValue)return 1;if(d===Yh.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=d.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const R=Gp(p[T],v[T]);if(R!==0)return R;const q=Go(m[p[T]],y[v[T]]);if(q!==0)return q}return Me(p.length,v.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function u0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const t=Rs(i),s=Rs(e),o=Me(t.seconds,s.seconds);return o!==0?o:Me(t.nanos,s.nanos)}function c0(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Go(t[o],s[o]);if(u)return u}return Me(t.length,s.length)}function Ko(i){return Kp(i)}function Kp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Rs(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Is(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return pe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Kp(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const d of s)u?u=!1:o+=",",o+=`${d}:${Kp(t.fields[d])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function nd(i){switch(Cs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$d(i);return e?16+nd(e):16;case 5:return 2*i.stringValue.length;case 6:return Is(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+nd(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return Ms(s.fields,((u,d)=>{o+=u.length+nd(d)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function h0(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Yp(i){return!!i&&"integerValue"in i}function Jg(i){return!!i&&"arrayValue"in i}function d0(i){return!!i&&"nullValue"in i}function f0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function id(i){return!!i&&"mapValue"in i}function hk(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[ow])==null?void 0:s.stringValue)===lw}function ku(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ms(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ku(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ku(i.arrayValue.values[t]);return e}return{...i}}function dk(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===ck}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!id(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ku(t)}setAll(e){let t=rn.emptyPath(),s={},o=[];e.forEach(((d,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=m.popLast()}d?s[m.lastSegment()]=ku(d):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());id(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];id(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ms(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new In(ku(this.value))}}function uw(i){const e=[];return Ms(i.fields,((t,s)=>{const o=new rn([t]);if(id(s)){const u=uw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const d of u)e.push(o.child(d))}else e.push(o)})),new zn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,s,o,u,d,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=d,this.documentState=m}static newInvalidDocument(e){return new cn(e,0,Te.min(),Te.min(),Te.min(),In.empty(),0)}static newFoundDocument(e,t,s,o){return new cn(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new cn(e,2,t,Te.min(),Te.min(),In.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,Te.min(),Te.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.position=e,this.inclusive=t}}function m0(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],d=i.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(d.referenceValue),t.key):s=Go(d,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function p0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ir(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t="asc"){this.field=e,this.dir=t}}function fk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{}class Vt extends cw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new pk(e,t,s):t==="array-contains"?new _k(e,s):t==="in"?new vk(e,s):t==="not-in"?new Ek(e,s):t==="array-contains-any"?new Tk(e,s):new Vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new gk(e,s):new yk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Go(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(Go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ti extends cw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ti(e,t)}matches(e){return hw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hw(i){return i.op==="and"}function dw(i){return mk(i)&&hw(i)}function mk(i){for(const e of i.filters)if(e instanceof Ti)return!1;return!0}function Qp(i){if(i instanceof Vt)return i.field.canonicalString()+i.op.toString()+Ko(i.value);if(dw(i))return i.filters.map((e=>Qp(e))).join(",");{const e=i.filters.map((t=>Qp(t))).join(",");return`${i.op}(${e})`}}function fw(i,e){return i instanceof Vt?(function(s,o){return o instanceof Vt&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)})(i,e):i instanceof Ti?(function(s,o){return o instanceof Ti&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,d,m)=>u&&fw(d,o.filters[m])),!0):!1})(i,e):void _e(19439)}function mw(i){return i instanceof Vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ko(t.value)}`})(i):i instanceof Ti?(function(t){return t.op.toString()+" {"+t.getFilters().map(mw).join(" ,")+"}"})(i):"Filter"}class pk extends Vt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class gk extends Vt{constructor(e,t){super(e,"in",t),this.keys=pw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yk extends Vt{constructor(e,t){super(e,"not-in",t),this.keys=pw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pw(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class _k extends Vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jg(t)&&Ku(t.arrayValue,this.value)}}class vk extends Vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ku(this.value.arrayValue,t)}}class Ek extends Vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ku(this.value.arrayValue,t)}}class Tk extends Vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ku(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,t=null,s=[],o=[],u=null,d=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=d,this.endAt=m,this.Te=null}}function g0(i,e=null,t=[],s=[],o=null,u=null,d=null){return new bk(i,e,t,s,o,u,d)}function Zg(i){const e=Ae(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Qp(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Qd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Ko(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Ko(s))).join(",")),e.Te=t}return e.Te}function ey(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!fk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!fw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!p0(i.startAt,e.startAt)&&p0(i.endAt,e.endAt)}function $p(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t=null,s=[],o=[],u=null,d="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=d,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Ak(i,e,t,s,o,u,d,m){return new al(i,e,t,s,o,u,d,m)}function gw(i){return new al(i)}function y0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function wk(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function yw(i){return i.collectionGroup!==null}function Mu(i){const e=Ae(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let m=new Ft(rn.comparator);return d.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Yu(u,s))})),t.has(rn.keyField().canonicalString())||e.Ie.push(new Yu(rn.keyField(),s))}return e.Ie}function Zi(i){const e=Ae(i);return e.Ee||(e.Ee=Sk(e,Mu(i))),e.Ee}function Sk(i,e){if(i.limitType==="F")return g0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Yu(o.field,u)}));const t=i.endAt?new bd(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new bd(i.startAt.position,i.startAt.inclusive):null;return g0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Xp(i,e){const t=i.filters.concat([e]);return new al(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Rk(i,e){const t=i.explicitOrderBy.concat([e]);return new al(i.path,i.collectionGroup,t,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function Wp(i,e,t){return new al(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Xd(i,e){return ey(Zi(i),Zi(e))&&i.limitType===e.limitType}function _w(i){return`${Zg(Zi(i))}|lt:${i.limitType}`}function Ro(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>mw(o))).join(", ")}]`),Qd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Ko(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Ko(o))).join(",")),`Target(${s})`})(Zi(i))}; limitType=${i.limitType})`}function Wd(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Mu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(d,m,p){const y=m0(d,m,p);return d.inclusive?y<=0:y<0})(s.startAt,Mu(s),o)||s.endAt&&!(function(d,m,p){const y=m0(d,m,p);return d.inclusive?y>=0:y>0})(s.endAt,Mu(s),o))})(i,e)}function Ik(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function vw(i){return(e,t)=>{let s=!1;for(const o of Mu(i)){const u=Ck(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Ck(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):(function(u,d,m){const p=d.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Go(p,y):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return tw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new ft(pe.comparator);function Dr(){return Nk}const Ew=new ft(pe.comparator);function wu(...i){let e=Ew;for(const t of i)e=e.insert(t.key,t);return e}function Tw(i){let e=Ew;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function pa(){return Pu()}function bw(){return Pu()}function Pu(){return new Na((i=>i.toString()),((i,e)=>i.isEqual(e)))}const xk=new ft(pe.comparator),Dk=new Ft(pe.comparator);function Pe(...i){let e=Dk;for(const t of i)e=e.add(t);return e}const Ok=new Ft(Me);function kk(){return Ok}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vd(e)?"-0":e}}function Aw(i){return{integerValue:""+i}}function Mk(i,e){return rk(e)?Aw(e):ty(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this._=void 0}}function Pk(i,e,t){return i instanceof Qu?(function(o,u){const d={fields:{[rw]:{stringValue:iw},[aw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Wg(u)&&(u=$d(u)),u&&(d.fields[sw]=u),{mapValue:d}})(t,e):i instanceof $u?Sw(i,e):i instanceof Xu?Rw(i,e):(function(o,u){const d=ww(o,u),m=_0(d)+_0(o.Ae);return Yp(d)&&Yp(o.Ae)?Aw(m):ty(o.serializer,m)})(i,e)}function Vk(i,e,t){return i instanceof $u?Sw(i,e):i instanceof Xu?Rw(i,e):t}function ww(i,e){return i instanceof Ad?(function(s){return Yp(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Qu extends Jd{}class $u extends Jd{constructor(e){super(),this.elements=e}}function Sw(i,e){const t=Iw(e);for(const s of i.elements)t.some((o=>ir(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Xu extends Jd{constructor(e){super(),this.elements=e}}function Rw(i,e){let t=Iw(e);for(const s of i.elements)t=t.filter((o=>!ir(o,s)));return{arrayValue:{values:t}}}class Ad extends Jd{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function _0(i){return wt(i.integerValue||i.doubleValue)}function Iw(i){return Jg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,t){this.field=e,this.transform=t}}function Lk(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof $u&&o instanceof $u||s instanceof Xu&&o instanceof Xu?Fo(s.elements,o.elements,ir):s instanceof Ad&&o instanceof Ad?ir(s.Ae,o.Ae):s instanceof Qu&&o instanceof Qu})(i.transform,e.transform)}class zk{constructor(e,t){this.version=e,this.transformResults=t}}class yi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yi}static exists(e){return new yi(void 0,e)}static updateTime(e){return new yi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rd(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Zd{}function Cw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ny(i.key,yi.none()):new ac(i.key,i.data,yi.none());{const t=i.data,s=In.empty();let o=new Ft(rn.comparator);for(let u of e.fields)if(!o.has(u)){let d=t.field(u);d===null&&u.length>1&&(u=u.popLast(),d=t.field(u)),d===null?s.delete(u):s.set(u,d),o=o.add(u)}return new Ps(i.key,s,new zn(o.toArray()),yi.none())}}function jk(i,e,t){i instanceof ac?(function(o,u,d){const m=o.value.clone(),p=E0(o.fieldTransforms,u,d.transformResults);m.setAll(p),u.convertToFoundDocument(d.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Ps?(function(o,u,d){if(!rd(o.precondition,u))return void u.convertToUnknownDocument(d.version);const m=E0(o.fieldTransforms,u,d.transformResults),p=u.data;p.setAll(Nw(o)),p.setAll(m),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(i,e,t):(function(o,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,t)}function Vu(i,e,t,s){return i instanceof ac?(function(u,d,m,p){if(!rd(u.precondition,d))return m;const y=u.value.clone(),v=T0(u.fieldTransforms,p,d);return y.setAll(v),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ps?(function(u,d,m,p){if(!rd(u.precondition,d))return m;const y=T0(u.fieldTransforms,p,d),v=d.data;return v.setAll(Nw(u)),v.setAll(y),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(i,e,t,s):(function(u,d,m){return rd(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):m})(i,e,t)}function Bk(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=ww(s.transform,o||null);u!=null&&(t===null&&(t=In.empty()),t.set(s.field,u))}return t||null}function v0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Fo(s,o,((u,d)=>Lk(u,d)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class ac extends Zd{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ps extends Zd{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Nw(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function E0(i,e,t){const s=new Map;Ke(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],d=u.transform,m=e.data.field(u.field);s.set(u.field,Vk(d,m,t[o]))}return s}function T0(i,e,t){const s=new Map;for(const o of i){const u=o.transform,d=t.data.field(o.field);s.set(o.field,Pk(u,d,e))}return s}class ny extends Zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qk extends Zd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&jk(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Vu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Vu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=bw();return this.mutations.forEach((o=>{const u=e.get(o.key),d=u.overlayedDocument;let m=this.applyToLocalView(d,u.mutatedFields);m=t.has(o.key)?null:m;const p=Cw(d,m);p!==null&&s.set(o.key,p),d.isValidDocument()||d.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Fo(this.mutations,e.mutations,((t,s)=>v0(t,s)))&&Fo(this.baseMutations,e.baseMutations,((t,s)=>v0(t,s)))}}class iy{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ke(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return xk})();const u=e.mutations;for(let d=0;d<u.length;d++)o=o.insert(u[d].key,s[d].version);return new iy(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Le;function Kk(i){switch(i){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function xw(i){if(i===void 0)return xr("GRPC error has no .code"),$.UNKNOWN;switch(i){case Mt.OK:return $.OK;case Mt.CANCELLED:return $.CANCELLED;case Mt.UNKNOWN:return $.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return $.INTERNAL;case Mt.UNAVAILABLE:return $.UNAVAILABLE;case Mt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Mt.NOT_FOUND:return $.NOT_FOUND;case Mt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Mt.ABORTED:return $.ABORTED;case Mt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Mt.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:i})}}(Le=Mt||(Mt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=new Es([4294967295,4294967295],0);function b0(i){const e=Yk().encode(i),t=new FA;return t.update(e),new Uint8Array(t.digest())}function A0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Es([t,s],0),new Es([o,u],0)]}class ry{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Su(`Invalid padding: ${t}`);if(s<0)throw new Su(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Su(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Su(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Es.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(Es.fromNumber(s)));return o.compare(Qk)===1&&(o=new Es([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=b0(e),[s,o]=A0(t);for(let u=0;u<this.hashCount;u++){const d=this.ye(s,o,u);if(!this.we(d))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),d=new ry(u,o,t);return s.forEach((m=>d.insert(m))),d}insert(e){if(this.ge===0)return;const t=b0(e),[s,o]=A0(t);for(let u=0;u<this.hashCount;u++){const d=this.ye(s,o,u);this.be(d)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Su extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,oc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ef(Te.min(),o,new ft(Me),Dr(),Pe())}}class oc{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new oc(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Dw{constructor(e,t){this.targetId=e,this.Ce=t}}class Ow{constructor(e,t,s=an.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class w0{constructor(){this.ve=0,this.Fe=S0(),this.Me=an.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),s=Pe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new oc(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=S0()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ke(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class $k{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dr(),this.He=Qh(),this.Je=Qh(),this.Ze=new ft(Me)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if($p(u))if(s===0){const d=new pe(u.path);this.et(t,d,cn.newNoDocument(d,Te.min()))}else Ke(s===1,20013,{expectedCount:s});else{const d=this._t(t);if(d!==s){const m=this.ut(e),p=m?this.ct(m,e,d):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let d,m;try{d=Is(s).toUint8Array()}catch(p){if(p instanceof nw)return wa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new ry(d,o,u)}catch(p){return wa(p instanceof Su?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const d=this.Ge.ht(),m=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,d)=>{const m=this.ot(d);if(m){if(u.current&&$p(m.target)){const p=new pe(m.target.path);this.It(p).has(d)||this.Et(d,p)||this.et(d,p,cn.newNoDocument(p,e))}u.Be&&(t.set(d,u.ke()),u.Ke())}}));let s=Pe();this.Je.forEach(((u,d)=>{let m=!0;d.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,d)=>d.setReadTime(e)));const o=new ef(e,t,this.Ze,this.je,s);return this.je=Dr(),this.He=Qh(),this.Je=Qh(),this.Ze=new ft(Me),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new w0,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ft(Me),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ft(Me),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new w0),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qh(){return new ft(pe.comparator)}function S0(){return new ft(pe.comparator)}const Xk={asc:"ASCENDING",desc:"DESCENDING"},Wk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jk={and:"AND",or:"OR"};class Zk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jp(i,e){return i.useProto3Json||Qd(e)?e:{value:e}}function wd(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function e4(i,e){return wd(i,e.toTimestamp())}function er(i){return Ke(!!i,49232),Te.fromTimestamp((function(t){const s=Rs(t);return new at(s.seconds,s.nanos)})(i))}function sy(i,e){return Zp(i,e).canonicalString()}function Zp(i,e){const t=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Mw(i){const e=it.fromString(i);return Ke(zw(e),10190,{key:e.toString()}),e}function eg(i,e){return sy(i.databaseId,e.path)}function Cp(i,e){const t=Mw(e);if(t.get(1)!==i.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(Vw(t))}function Pw(i,e){return sy(i.databaseId,e)}function t4(i){const e=Mw(i);return e.length===4?it.emptyPath():Vw(e)}function tg(i){return new it(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Vw(i){return Ke(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function R0(i,e,t){return{name:eg(i,e),fields:t.value.mapValue.fields}}function n4(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,v){return y.useProto3Json?(Ke(v===void 0||typeof v=="string",58123),an.fromBase64String(v||"")):(Ke(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),an.fromUint8Array(v||new Uint8Array))})(i,e.targetChange.resumeToken),d=e.targetChange.cause,m=d&&(function(y){const v=y.code===void 0?$.UNKNOWN:xw(y.code);return new se(v,y.message||"")})(d);t=new Ow(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Cp(i,s.document.name),u=er(s.document.updateTime),d=s.document.createTime?er(s.document.createTime):Te.min(),m=new In({mapValue:{fields:s.document.fields}}),p=cn.newFoundDocument(o,u,d,m),y=s.targetIds||[],v=s.removedTargetIds||[];t=new sd(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Cp(i,s.document),u=s.readTime?er(s.readTime):Te.min(),d=cn.newNoDocument(o,u),m=s.removedTargetIds||[];t=new sd([],m,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Cp(i,s.document),u=s.removedTargetIds||[];t=new sd([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,d=new Gk(o,u),m=s.targetId;t=new Dw(m,d)}}return t}function i4(i,e){let t;if(e instanceof ac)t={update:R0(i,e.key,e.value)};else if(e instanceof ny)t={delete:eg(i,e.key)};else if(e instanceof Ps)t={update:R0(i,e.key,e.data),updateMask:d4(e.fieldMask)};else{if(!(e instanceof qk))return _e(16599,{dt:e.type});t={verify:eg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,d){const m=d.transform;if(m instanceof Qu)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof $u)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Xu)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ad)return{fieldPath:d.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:d.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:e4(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function r4(i,e){return i&&i.length>0?(Ke(e!==void 0,14353),i.map((t=>(function(o,u){let d=o.updateTime?er(o.updateTime):er(u);return d.isEqual(Te.min())&&(d=er(u)),new zk(d,o.transformResults||[])})(t,e)))):[]}function s4(i,e){return{documents:[Pw(i,e.path)]}}function a4(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Pw(i,o);const u=(function(y){if(y.length!==0)return Lw(Ti.create(y,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const d=(function(y){if(y.length!==0)return y.map((v=>(function(R){return{field:Io(R.field),direction:u4(R.dir)}})(v)))})(e.orderBy);d&&(t.structuredQuery.orderBy=d);const m=Jp(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function o4(i){let e=t4(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ke(s===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=(function(T){const R=Uw(T);return R instanceof Ti&&dw(R)?R.getFilters():[R]})(t.where));let d=[];t.orderBy&&(d=(function(T){return T.map((R=>(function(Y){return new Yu(Co(Y.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let R;return R=typeof T=="object"?T.value:T,Qd(R)?null:R})(t.limit));let p=null;t.startAt&&(p=(function(T){const R=!!T.before,q=T.values||[];return new bd(q,R)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const R=!T.before,q=T.values||[];return new bd(q,R)})(t.endAt)),Ak(e,o,d,u,m,"F",p,y)}function l4(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uw(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Co(t.unaryFilter.field);return Vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Co(t.unaryFilter.field);return Vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Co(t.unaryFilter.field);return Vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Co(t.unaryFilter.field);return Vt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Vt.create(Co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Ti.create(t.compositeFilter.filters.map((s=>Uw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function u4(i){return Xk[i]}function c4(i){return Wk[i]}function h4(i){return Jk[i]}function Io(i){return{fieldPath:i.canonicalString()}}function Co(i){return rn.fromServerFormat(i.fieldPath)}function Lw(i){return i instanceof Vt?(function(t){if(t.op==="=="){if(f0(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NAN"}};if(d0(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(f0(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NAN"}};if(d0(t.value))return{unaryFilter:{field:Io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Io(t.field),op:c4(t.op),value:t.value}}})(i):i instanceof Ti?(function(t){const s=t.getFilters().map((o=>Lw(o)));return s.length===1?s[0]:{compositeFilter:{op:h4(t.op),filters:s}}})(i):_e(54877,{filter:i})}function d4(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function jw(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,s,o,u=Te.min(),d=Te.min(),m=an.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(e){this.yt=e}}function m4(i){const e=o4({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Wp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(){this.Sn=new g4}addToCollectionParentIndex(e,t){return this.Sn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(Ss.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class g4{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ft(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ft(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bw=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(Bw,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Yo(0)}static ar(){return new Yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="LruGarbageCollector",y4=1048576;function N0([i,e],[t,s]){const o=Me(i,t);return o===0?Me(e,s):o}class _4{constructor(e){this.Pr=e,this.buffer=new Ft(N0),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();N0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class v4{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ae(C0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sl(t)?ae(C0,"Ignoring IndexedDB error during garbage collection: ",t):await rl(t)}await this.Ar(3e5)}))}}class E4{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Yd.ce);const s=new _4(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(I0)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),I0):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,d,m,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,d=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(y=Date.now(),So()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-v}ms
	Determined least recently used ${o} in `+(m-d)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function T4(i,e){return new E4(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.changes=new Na((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w4{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Vu(s.mutation,o,zn.empty(),at.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=pa();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let d=wu();return u.forEach(((m,p)=>{d=d.insert(m,p.overlayedDocument)})),d}))))}getOverlayedDocuments(e,t){const s=pa();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((d,m)=>{t.set(d,m)}))}))}computeViews(e,t,s,o){let u=Dr();const d=Pu(),m=(function(){return Pu()})();return t.forEach(((p,y)=>{const v=s.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Ps)?u=u.insert(y.key,y):v!==void 0?(d.set(y.key,v.mutation.getFieldMask()),Vu(v.mutation,y,v.mutation.getFieldMask(),at.now())):d.set(y.key,zn.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,v)=>d.set(y,v))),t.forEach(((y,v)=>m.set(y,new A4(v,d.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Pu();let o=new ft(((d,m)=>d-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((d=>{for(const m of d)m.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let v=s.get(p)||zn.empty();v=m.applyToLocalView(y,v),s.set(p,v);const T=(o.get(m.batchId)||Pe()).add(p);o=o.insert(m.batchId,T)}))})).next((()=>{const d=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,v=p.value,T=bw();v.forEach((R=>{if(!u.has(R)){const q=Cw(t.get(R),s.get(R));q!==null&&T.set(R,q),u=u.add(R)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return wk(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):yw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const d=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):W.resolve(pa());let m=Hu,p=u;return d.next((y=>W.forEach(y,((v,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next((R=>{p=p.insert(v,R)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,Pe()))).next((v=>({batchId:m,changes:Tw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=wu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let d=wu();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(p=>{const y=(function(T,R){return new al(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((v=>{v.forEach(((T,R)=>{d=d.insert(T,R)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((d=>{u.forEach(((p,y)=>{const v=y.getKey();d.get(v)===null&&(d=d.insert(v,cn.newInvalidDocument(v)))}));let m=wu();return d.forEach(((p,y)=>{const v=u.get(p);v!==void 0&&Vu(v.mutation,y,zn.empty(),at.now()),Wd(t,y)&&(m=m.insert(p,y))})),m}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return W.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:er(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:m4(o.bundledQuery),readTime:er(o.readTime)}})(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this.overlays=new ft(pe.comparator),this.Lr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=pa();return W.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=pa(),u=t.length+1,d=new pe(t.child("")),m=this.overlays.getIteratorFrom(d);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft(((y,v)=>y-v));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let v=u.get(y.largestBatchId);v===null&&(v=pa(),u=u.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const m=pa(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,v)=>m.set(y,v))),!(m.size()>=o)););return W.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const d=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new Fk(t,s));let u=this.Lr.get(t);u===void 0&&(u=Pe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(){this.kr=new Ft(Qt.Kr),this.qr=new Ft(Qt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Qt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Qt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new pe(new it([])),s=new Qt(t,e),o=new Qt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(d=>{this.Wr(d),u.push(d.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new pe(new it([])),s=new Qt(t,e),o=new Qt(t,e+1);let u=Pe();return this.qr.forEachInRange([s,o],(d=>{u=u.add(d.key)})),u}containsKey(e){const t=new Qt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Qt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return pe.comparator(e.key,t.key)||Me(e.Hr,t.Hr)}static Ur(e,t){return Me(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ft(Qt.Kr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new Hk(u,t,s,o);this.mutationQueue.push(d);for(const m of o)this.Jr=this.Jr.add(new Qt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(d)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Xg:this.Yn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Qt(t,0),o=new Qt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(d=>{const m=this.Zr(d.Hr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ft(Me);return t.forEach((o=>{const u=new Qt(o,0),d=new Qt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,d],(m=>{s=s.add(m.Hr)}))})),W.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const d=new Qt(new pe(u),0);let m=new Ft(Me);return this.Jr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Hr)),!0)}),d),W.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ke(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return W.forEach(t.mutations,(o=>{const u=new Qt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Qt(t,0),o=this.Jr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e){this.ti=e,this.docs=(function(){return new ft(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,d=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let s=Dr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():cn.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Dr();const d=t.path,m=new pe(d.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||ek(ZO(v),s)<=0||(o.has(v.key)||Wd(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ni(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new x4(this)}getSize(e){return W.resolve(this.size)}}class x4 extends b4{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e){this.persistence=e,this.ri=new Na((t=>Zg(t)),ey),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ii=0,this.si=new ay,this.targetCount=0,this.oi=Yo._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),W.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Yo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.lr(t),W.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((d,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(d),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((d=>{u.push(o.markPotentiallyOrphaned(e,d))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,t){this._i={},this.overlays={},this.ai=new Yd(0),this.ui=!1,this.ui=!0,this.ci=new I4,this.referenceDelegate=e(this),this.li=new D4(this),this.indexManager=new p4,this.remoteDocumentCache=(function(o){return new N4(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new f4(t),this.Pi=new S4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new R4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new C4(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new O4(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return W.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class O4 extends nk{constructor(e){super(),this.currentSequenceNumber=e}}class oy{constructor(e){this.persistence=e,this.Ri=new ay,this.Ai=null}static Vi(e){return new oy(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,(s=>{const o=pe.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Sd{constructor(e,t){this.persistence=e,this.fi=new Na((s=>sk(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=T4(this,t)}static Vi(e,t){return new Sd(e,t)}Ti(){}Ii(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return W.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(d=>this.wr(e,d,t).next((m=>{m||(s++,u.removeEntry(d,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nd(e.data.value)),t}wr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ly(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return MR()?8:ik(Lt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new k4;return this.ys(e,t,d).next((m=>{if(u.result=m,this.As)return this.ws(e,t,d,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(So()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(So()<=De.DEBUG&&ae("QueryEngine","Query:",Ro(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(So()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zi(t))):W.resolve())}gs(e,t){if(y0(t))return W.resolve(null);let s=Zi(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Wp(t,null,"F"),s=Zi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const d=Pe(...u);return this.fs.getDocuments(e,d).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.bs(t,m);return this.Ss(t,y,d,p.readTime)?this.gs(e,Wp(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,s,o){return y0(t)||o.isEqual(Te.min())?W.resolve(null):this.fs.getDocuments(e,s).next((u=>{const d=this.bs(t,u);return this.Ss(t,d,s,o)?W.resolve(null):(So()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ro(t)),this.Ds(e,d,t,JO(o,Hu)).next((m=>m)))}))}bs(e,t){let s=new Ft(vw(e));return t.forEach(((o,u)=>{Wd(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return So()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.fs.getDocumentsMatchingQuery(e,t,Ss.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="LocalStore",P4=3e8;class V4{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new ft(Me),this.Fs=new Na((u=>Zg(u)),ey),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w4(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function U4(i,e,t,s){return new V4(i,e,t,s)}async function Hw(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const d=[],m=[];let p=Pe();for(const y of o){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of u){m.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((y=>({Ns:y,removedBatchIds:d,addedBatchIds:m})))}))}))}function L4(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,p,y,v){const T=y.batch,R=T.keys();let q=W.resolve();return R.forEach((Y=>{q=q.next((()=>v.getEntry(p,Y))).next((ee=>{const Z=y.docVersions.get(Y);Ke(Z!==null,48541),ee.version.compareTo(Z)<0&&(T.applyToRemoteDocument(ee,y),ee.isValidDocument()&&(ee.setReadTime(y.commitVersion),v.addEntry(ee)))}))})),q.next((()=>m.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Pe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Fw(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function z4(i,e){const t=Ae(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((v,T)=>{const R=o.get(T);if(!R)return;m.push(t.li.removeMatchingKeys(u,v.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,v.addedDocuments,T))));let q=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?q=q.withResumeToken(an.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(v.resumeToken,s)),o=o.insert(T,q),(function(ee,Z,ce){return ee.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-ee.snapshotVersion.toMicroseconds()>=P4?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(R,q,v)&&m.push(t.li.updateTargetData(u,q))}));let p=Dr(),y=Pe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))})),m.push(j4(u,d,e.documentUpdates).next((v=>{p=v.Bs,y=v.Ls}))),!s.isEqual(Te.min())){const v=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(v)}return W.waitFor(m).next((()=>d.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(t.vs=o,u)))}function j4(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let d=Dr();return t.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(m,p.readTime),d=d.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),d=d.insert(m,p)):ae(uy,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{Bs:d,Ls:o}}))}function B4(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Xg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function q4(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):t.li.allocateTargetId(s).next((d=>(o=new ys(e,d,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function ng(i,e,t){const s=Ae(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(d=>s.persistence.referenceDelegate.removeTarget(d,o)))}catch(d){if(!sl(d))throw d;ae(uy,`Failed to update sequence numbers for target ${e}: ${d}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function x0(i,e,t){const s=Ae(i);let o=Te.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(p,y,v){const T=Ae(p),R=T.Fs.get(v);return R!==void 0?W.resolve(T.vs.get(R)):T.li.getTargetData(y,v)})(s,d,Zi(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(d,m.targetId).next((p=>{u=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(d,e,t?o:Te.min(),t?u:Pe()))).next((m=>(H4(s,Ik(e),m),{documents:m,ks:u})))))}function H4(i,e,t){let s=i.Ms.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class D0{constructor(){this.activeTargetIds=kk()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F4{constructor(){this.vo=new D0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new D0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="ConnectivityMonitor";class k0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ae(O0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ae(O0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $h=null;function ig(){return $h===null?$h=(function(){return 268435456+Math.round(2147483648*Math.random())})():$h++,"0x"+$h.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="RestConnection",K4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Y4{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Ed?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const d=ig(),m=this.Qo(e,t.toUriEncodedString());ae(Np,`Sending RPC '${e}' ${d}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,u);const{host:y}=new URL(m),v=Ds(y);return this.zo(e,m,p,s,v).then((T=>(ae(Np,`Received RPC '${e}' ${d}: `,T),T)),(T=>{throw wa(Np,`RPC '${e}' ${d} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,t,s,o,u,d){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+il})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=K4[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="WebChannelConnection",vu=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Po extends Y4{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Po.c_){const e=QA();vu(e,YA.STAT_EVENT,(t=>{t.stat===Fp.PROXY?ae(ln,"STAT_EVENT: detected buffering proxy"):t.stat===Fp.NOPROXY&&ae(ln,"STAT_EVENT: detected no buffering proxy")})),Po.c_=!0}}zo(e,t,s,o,u){const d=ig();return new Promise(((m,p)=>{const y=new GA;y.setWithCredentials(!0),y.listenOnce(KA.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case td.NO_ERROR:const T=y.getResponseJson();ae(ln,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(T)),m(T);break;case td.TIMEOUT:ae(ln,`RPC '${e}' ${d} timed out`),p(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case td.HTTP_ERROR:const R=y.getStatus();if(ae(ln,`RPC '${e}' ${d} failed with status:`,R,"response text:",y.getResponseText()),R>0){let q=y.getResponseJson();Array.isArray(q)&&(q=q[0]);const Y=q==null?void 0:q.error;if(Y&&Y.status&&Y.message){const ee=(function(ce){const fe=ce.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(fe)>=0?fe:$.UNKNOWN})(Y.status);p(new se(ee,Y.message))}else p(new se($.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:d,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ae(ln,`RPC '${e}' ${d} completed.`)}}));const v=JSON.stringify(o);ae(ln,`RPC '${e}' ${d} sending request:`,o),y.send(t,"POST",v,s,15)}))}T_(e,t,s){const o=ig(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const y=u.join("");ae(ln,`Creating RPC '${e}' stream ${o}: ${y}`,m);const v=d.createWebChannel(y,m);this.I_(v);let T=!1,R=!1;const q=new Q4({Ho:Y=>{R?ae(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,Y):(T||(ae(ln,`Opening RPC '${e}' stream ${o} transport.`),v.open(),T=!0),ae(ln,`RPC '${e}' stream ${o} sending:`,Y),v.send(Y))},Jo:()=>v.close()});return vu(v,Au.EventType.OPEN,(()=>{R||(ae(ln,`RPC '${e}' stream ${o} transport opened.`),q.i_())})),vu(v,Au.EventType.CLOSE,(()=>{R||(R=!0,ae(ln,`RPC '${e}' stream ${o} transport closed`),q.o_(),this.E_(v))})),vu(v,Au.EventType.ERROR,(Y=>{R||(R=!0,wa(ln,`RPC '${e}' stream ${o} transport errored. Name:`,Y.name,"Message:",Y.message),q.o_(new se($.UNAVAILABLE,"The operation could not be completed")))})),vu(v,Au.EventType.MESSAGE,(Y=>{var ee;if(!R){const Z=Y.data[0];Ke(!!Z,16349);const ce=Z,fe=(ce==null?void 0:ce.error)||((ee=ce[0])==null?void 0:ee.error);if(fe){ae(ln,`RPC '${e}' stream ${o} received error:`,fe);const ue=fe.status;let ye=(function(I){const S=Mt[I];if(S!==void 0)return xw(S)})(ue),Ce=fe.message;ue==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&wa(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ye===void 0&&(ye=$.INTERNAL,Ce="Unknown error status: "+ue+" with message "+fe.message),R=!0,q.o_(new se(ye,Ce)),v.close()}else ae(ln,`RPC '${e}' stream ${o} received:`,Z),q.__(Z)}})),Po.u_(),setTimeout((()=>{q.s_()}),0),q}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $4(i){return new Po(i)}function xp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(i){return new Zk(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Po.c_=!1;class Gw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="PersistentStream";class Kw{constructor(e,t,s,o,u,d,m,p){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(xr(t.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new se($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(M0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ae(M0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class X4 extends Kw{constructor(e,t,s,o,u,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,d),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=n4(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?Te.min():d.readTime?er(d.readTime):Te.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=tg(this.serializer),t.addTarget=(function(u,d){let m;const p=d.target;if(m=$p(p)?{documents:s4(u,p)}:{query:a4(u,p).ft},m.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){m.resumeToken=kw(u,d.resumeToken);const y=Jp(u,d.expectedCount);y!==null&&(m.expectedCount=y)}else if(d.snapshotVersion.compareTo(Te.min())>0){m.readTime=wd(u,d.snapshotVersion.toTimestamp());const y=Jp(u,d.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=l4(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=tg(this.serializer),t.removeTarget=e,this.K_(t)}}class W4 extends Kw{constructor(e,t,s,o,u,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,d),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Ke(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ke(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=r4(e.writeResults,e.commitTime),s=er(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=tg(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>i4(this.serializer,s)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{}class Z4 extends J4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Wo(e,Zp(t,s),o,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se($.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,m])=>this.connection.jo(e,Zp(t,s),o,d,m,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new se($.UNKNOWN,d.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function eM(i,e,t,s){return new Z4(i,e,t,s)}class tM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="RemoteStore";class nM{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((d=>{s.enqueueAndForget((async()=>{xa(this)&&(ae(Ra,"Restarting streams for network reachability change."),await(async function(p){const y=Ae(p);y.Ea.add(4),await lc(y),y.Va.set("Unknown"),y.Ea.delete(4),await nf(y)})(this))}))})),this.Va=new tM(s,o)}}async function nf(i){if(xa(i))for(const e of i.Ra)await e(!0)}async function lc(i){for(const e of i.Ra)await e(!1)}function Yw(i,e){const t=Ae(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fy(t)?dy(t):ol(t).O_()&&hy(t,e))}function cy(i,e){const t=Ae(i),s=ol(t);t.Ia.delete(e),s.O_()&&Qw(t,e),t.Ia.size===0&&(s.O_()?s.L_():xa(t)&&t.Va.set("Unknown"))}function hy(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ol(i).Z_(e)}function Qw(i,e){i.da.$e(e),ol(i).X_(e)}function dy(i){i.da=new $k({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),ol(i).start(),i.Va.ua()}function fy(i){return xa(i)&&!ol(i).x_()&&i.Ia.size>0}function xa(i){return Ae(i).Ea.size===0}function $w(i){i.da=void 0}async function iM(i){i.Va.set("Online")}async function rM(i){i.Ia.forEach(((e,t)=>{hy(i,e)}))}async function sM(i,e){$w(i),fy(i)?(i.Va.ha(e),dy(i)):i.Va.set("Unknown")}async function aM(i,e,t){if(i.Va.set("Online"),e instanceof Ow&&e.state===2&&e.cause)try{await(async function(o,u){const d=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,d),o.Ia.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){ae(Ra,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Rd(i,s)}else if(e instanceof sd?i.da.Xe(e):e instanceof Dw?i.da.st(e):i.da.tt(e),!t.isEqual(Te.min()))try{const s=await Fw(i.localStore);t.compareTo(s)>=0&&await(function(u,d){const m=u.da.Tt(d);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=u.Ia.get(y);v&&u.Ia.set(y,v.withResumeToken(p.resumeToken,d))}})),m.targetMismatches.forEach(((p,y)=>{const v=u.Ia.get(p);if(!v)return;u.Ia.set(p,v.withResumeToken(an.EMPTY_BYTE_STRING,v.snapshotVersion)),Qw(u,p);const T=new ys(v.target,p,y,v.sequenceNumber);hy(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ae(Ra,"Failed to raise snapshot:",s),await Rd(i,s)}}async function Rd(i,e,t){if(!sl(e))throw e;i.Ea.add(1),await lc(i),i.Va.set("Offline"),t||(t=()=>Fw(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ae(Ra,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await nf(i)}))}function Xw(i,e){return e().catch((t=>Rd(i,t,e)))}async function rf(i){const e=Ae(i),t=Ns(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xg;for(;oM(e);)try{const o=await B4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,lM(e,o)}catch(o){await Rd(e,o)}Ww(e)&&Jw(e)}function oM(i){return xa(i)&&i.Ta.length<10}function lM(i,e){i.Ta.push(e);const t=Ns(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function Ww(i){return xa(i)&&!Ns(i).x_()&&i.Ta.length>0}function Jw(i){Ns(i).start()}async function uM(i){Ns(i).ra()}async function cM(i){const e=Ns(i);for(const t of i.Ta)e.ea(t.mutations)}async function hM(i,e,t){const s=i.Ta.shift(),o=iy.from(s,e,t);await Xw(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await rf(i)}async function dM(i,e){e&&Ns(i).Y_&&await(async function(s,o){if((function(d){return Kk(d)&&d!==$.ABORTED})(o.code)){const u=s.Ta.shift();Ns(s).B_(),await Xw(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await rf(s)}})(i,e),Ww(i)&&Jw(i)}async function P0(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),ae(Ra,"RemoteStore received new credentials");const s=xa(t);t.Ea.add(3),await lc(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await nf(t)}async function fM(i,e){const t=Ae(i);e?(t.Ea.delete(2),await nf(t)):e||(t.Ea.add(2),await lc(t),t.Va.set("Unknown"))}function ol(i){return i.ma||(i.ma=(function(t,s,o){const u=Ae(t);return u.sa(),new X4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:iM.bind(null,i),Yo:rM.bind(null,i),t_:sM.bind(null,i),J_:aM.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),fy(i)?dy(i):i.Va.set("Unknown")):(await i.ma.stop(),$w(i))}))),i.ma}function Ns(i){return i.fa||(i.fa=(function(t,s,o){const u=Ae(t);return u.sa(),new W4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:uM.bind(null,i),t_:dM.bind(null,i),ta:cM.bind(null,i),na:hM.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await rf(i)):(await i.fa.stop(),i.Ta.length>0&&(ae(Ra,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const d=Date.now()+s,m=new my(e,t,d,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function py(i,e){if(xr("AsyncQueue",`${e}: ${i}`),sl(i))return new se($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=wu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.ga=new ft(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Qo{constructor(e,t,s,o,u,d,m,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,u){const d=[];return t.forEach((m=>{d.push({type:0,doc:m})})),new Qo(e,t,Vo.emptySet(t),d,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class pM{constructor(){this.queries=U0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ae(t),u=o.queries;o.queries=U0(),u.forEach(((d,m)=>{for(const p of m.ba)p.onError(s)}))})(this,new se($.ABORTED,"Firestore shutting down"))}}function U0(){return new Na((i=>_w(i)),Xd)}async function gM(i,e){const t=Ae(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new mM,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(d){const m=py(d,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&gy(t)}async function yM(i,e){const t=Ae(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const d=u.ba.indexOf(e);d>=0&&(u.ba.splice(d,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function _M(i,e){const t=Ae(i);let s=!1;for(const o of e){const u=o.query,d=t.queries.get(u);if(d){for(const m of d.ba)m.Fa(o)&&(s=!0);d.wa=o}}s&&gy(t)}function vM(i,e,t){const s=Ae(i),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function gy(i){i.Ca.forEach((e=>{e.next()}))}var rg,L0;(L0=rg||(rg={})).Ma="default",L0.Cache="cache";class EM{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Qo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==rg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.key=e}}class eS{constructor(e){this.key=e}}class TM{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.eu=vw(e),this.tu=new Vo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new V0,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,d=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const R=o.get(v),q=Wd(this.query,T)?T:null,Y=!!R&&this.mutatedKeys.has(R.key),ee=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let Z=!1;R&&q?R.data.isEqual(q.data)?Y!==ee&&(s.track({type:3,doc:q}),Z=!0):this.su(R,q)||(s.track({type:2,doc:q}),Z=!0,(p&&this.eu(q,p)>0||y&&this.eu(q,y)<0)&&(m=!0)):!R&&q?(s.track({type:0,doc:q}),Z=!0):R&&!q&&(s.track({type:1,doc:R}),Z=!0,(p||y)&&(m=!0)),Z&&(q?(d=d.add(q),u=ee?u.add(v):u.delete(v)):(d=d.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const v=this.query.limitType==="F"?d.last():d.first();d=d.delete(v.key),u=u.delete(v.key),s.track({type:1,doc:v})}return{tu:d,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const d=e.iu.ya();d.sort(((v,T)=>(function(q,Y){const ee=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:Z})}};return ee(q)-ee(Y)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,d.length!==0||y?{snapshot:new Qo(this.query,e.tu,u,d,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new V0,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new eS(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Zw(s))})),t}cu(e){this.Za=e.ks,this.Ya=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const yy="SyncEngine";class bM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class AM{constructor(e){this.key=e,this.hu=!1}}class wM{constructor(e,t,s,o,u,d){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.Pu={},this.Tu=new Na((m=>_w(m)),Xd),this.Iu=new Map,this.Eu=new Set,this.Ru=new ft(pe.comparator),this.Au=new Map,this.Vu=new ay,this.du={},this.mu=new Map,this.fu=Yo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function SM(i,e,t=!0){const s=aS(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await tS(s,e,t,!0),o}async function RM(i,e){const t=aS(i);await tS(t,e,!0,!1)}async function tS(i,e,t,s){const o=await q4(i.localStore,Zi(e)),u=o.targetId,d=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await IM(i,e,u,d==="current",o.resumeToken)),i.isPrimaryClient&&t&&Yw(i.remoteStore,o),m}async function IM(i,e,t,s,o){i.pu=(T,R,q)=>(async function(ee,Z,ce,fe){let ue=Z.view.ru(ce);ue.Ss&&(ue=await x0(ee.localStore,Z.query,!1).then((({documents:I})=>Z.view.ru(I,ue))));const ye=fe&&fe.targetChanges.get(Z.targetId),Ce=fe&&fe.targetMismatches.get(Z.targetId)!=null,J=Z.view.applyChanges(ue,ee.isPrimaryClient,ye,Ce);return j0(ee,Z.targetId,J.au),J.snapshot})(i,T,R,q);const u=await x0(i.localStore,e,!0),d=new TM(e,u.ks),m=d.ru(u.documents),p=oc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),y=d.applyChanges(m,i.isPrimaryClient,p);j0(i,t,y.au);const v=new bM(e,t,d);return i.Tu.set(e,v),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),y.snapshot}async function CM(i,e,t){const s=Ae(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((d=>!Xd(d,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ng(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&cy(s.remoteStore,o.targetId),sg(s,o.targetId)})).catch(rl)):(sg(s,o.targetId),await ng(s.localStore,o.targetId,!0))}async function NM(i,e){const t=Ae(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),cy(t.remoteStore,s.targetId))}async function xM(i,e,t){const s=UM(i);try{const o=await(function(d,m){const p=Ae(d),y=at.now(),v=m.reduce(((q,Y)=>q.add(Y.key)),Pe());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",(q=>{let Y=Dr(),ee=Pe();return p.xs.getEntries(q,v).next((Z=>{Y=Z,Y.forEach(((ce,fe)=>{fe.isValidDocument()||(ee=ee.add(ce))}))})).next((()=>p.localDocuments.getOverlayedDocuments(q,Y))).next((Z=>{T=Z;const ce=[];for(const fe of m){const ue=Bk(fe,T.get(fe.key).overlayedDocument);ue!=null&&ce.push(new Ps(fe.key,ue,uw(ue.value.mapValue),yi.exists(!0)))}return p.mutationQueue.addMutationBatch(q,y,ce,m)})).next((Z=>{R=Z;const ce=Z.applyToLocalDocumentSet(T,ee);return p.documentOverlayCache.saveOverlays(q,Z.batchId,ce)}))})).then((()=>({batchId:R.batchId,changes:Tw(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(d,m,p){let y=d.du[d.currentUser.toKey()];y||(y=new ft(Me)),y=y.insert(m,p),d.du[d.currentUser.toKey()]=y})(s,o.batchId,t),await uc(s,o.changes),await rf(s.remoteStore)}catch(o){const u=py(o,"Failed to persist write");t.reject(u)}}async function nS(i,e){const t=Ae(i);try{const s=await z4(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const d=t.Au.get(u);d&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?d.hu=!0:o.modifiedDocuments.size>0?Ke(d.hu,14607):o.removedDocuments.size>0&&(Ke(d.hu,42227),d.hu=!1))})),await uc(t,s,e)}catch(s){await rl(s)}}function z0(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,d)=>{const m=d.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(d,m){const p=Ae(d);p.onlineState=m;let y=!1;p.queries.forEach(((v,T)=>{for(const R of T.ba)R.va(m)&&(y=!0)})),y&&gy(p)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function DM(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let d=new ft(pe.comparator);d=d.insert(u,cn.newNoDocument(u,Te.min()));const m=Pe().add(u),p=new ef(Te.min(),new Map,new ft(Me),d,m);await nS(s,p),s.Ru=s.Ru.remove(u),s.Au.delete(e),_y(s)}else await ng(s.localStore,e,!1).then((()=>sg(s,e,t))).catch(rl)}async function OM(i,e){const t=Ae(i),s=e.batch.batchId;try{const o=await L4(t.localStore,e);rS(t,s,null),iS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await uc(t,o)}catch(o){await rl(o)}}async function kM(i,e,t){const s=Ae(i);try{const o=await(function(d,m){const p=Ae(d);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return p.mutationQueue.lookupMutationBatch(y,m).next((T=>(Ke(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>p.localDocuments.getDocuments(y,v)))}))})(s.localStore,e);rS(s,e,t),iS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await uc(s,o)}catch(o){await rl(o)}}function iS(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function rS(i,e,t){const s=Ae(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function sg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||sS(i,s)}))}function sS(i,e){i.Eu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(cy(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),_y(i))}function j0(i,e,t){for(const s of t)s instanceof Zw?(i.Vu.addReference(s.key,e),MM(i,s)):s instanceof eS?(ae(yy,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||sS(i,s.key)):_e(19791,{wu:s})}function MM(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Eu.has(s)||(ae(yy,"New document in limbo: "+t),i.Eu.add(s),_y(i))}function _y(i){for(;i.Eu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new pe(it.fromString(e)),s=i.fu.next();i.Au.set(s,new AM(t)),i.Ru=i.Ru.insert(t,s),Yw(i.remoteStore,new ys(Zi(gw(t.path)),s,"TargetPurposeLimboResolution",Yd.ce))}}async function uc(i,e,t){const s=Ae(i),o=[],u=[],d=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{d.push(s.pu(p,e,t).then((y=>{var v;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=ly.Es(p.targetId,y);u.push(T)}})))})),await Promise.all(d),s.Pu.J_(o),await(async function(p,y){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(y,(R=>W.forEach(R.Ts,(q=>v.persistence.referenceDelegate.addReference(T,R.targetId,q))).next((()=>W.forEach(R.Is,(q=>v.persistence.referenceDelegate.removeReference(T,R.targetId,q)))))))))}catch(T){if(!sl(T))throw T;ae(uy,"Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const q=v.vs.get(R),Y=q.snapshotVersion,ee=q.withLastLimboFreeSnapshotVersion(Y);v.vs=v.vs.insert(R,ee)}}})(s.localStore,u))}async function PM(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){ae(yy,"User change. New user:",e.toKey());const s=await Hw(t.localStore,e);t.currentUser=e,(function(u,d){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new se($.CANCELLED,d))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await uc(t,s.Ns)}}function VM(i,e){const t=Ae(i),s=t.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const u=t.Iu.get(e);if(!u)return o;for(const d of u){const m=t.Tu.get(d);o=o.unionWith(m.view.nu)}return o}}function aS(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=nS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DM.bind(null,e),e.Pu.J_=_M.bind(null,e.eventManager),e.Pu.yu=vM.bind(null,e.eventManager),e}function UM(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kM.bind(null,e),e}class Id{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=tf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return U4(this.persistence,new M4,e.initialUser,this.serializer)}Cu(e){return new qw(oy.Vi,this.serializer)}Du(e){return new F4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Id.provider={build:()=>new Id};class LM extends Id{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ke(this.persistence.referenceDelegate instanceof Sd,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new v4(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new qw((s=>Sd.Vi(s,t)),this.serializer)}}class ag{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>z0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PM.bind(null,this.syncEngine),await fM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new pM})()}createDatastore(e){const t=tf(e.databaseInfo.databaseId),s=$4(e.databaseInfo);return eM(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,d,m){return new nM(s,o,u,d,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>z0(this.syncEngine,t,0)),(function(){return k0.v()?new k0:new G4})())}createSyncEngine(e,t){return(function(o,u,d,m,p,y,v){const T=new wM(o,u,d,m,p,y);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ae(o);ae(Ra,"RemoteStore shutting down."),u.Ea.add(5),await lc(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ag.provider={build:()=>new ag};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="FirestoreClient";class jM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=un.UNAUTHENTICATED,this.clientId=$g.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async d=>{ae(xs,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(ae(xs,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=py(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Dp(i,e){i.asyncQueue.verifyOperationInProgress(),ae(xs,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Hw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function B0(i,e){i.asyncQueue.verifyOperationInProgress();const t=await BM(i);ae(xs,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>P0(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>P0(e.remoteStore,o))),i._onlineComponents=e}async function BM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae(xs,"Using user provided OfflineComponentProvider");try{await Dp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wa("Error using user provided cache. Falling back to memory cache: "+t),await Dp(i,new Id)}}else ae(xs,"Using default OfflineComponentProvider"),await Dp(i,new LM(void 0));return i._offlineComponents}async function oS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae(xs,"Using user provided OnlineComponentProvider"),await B0(i,i._uninitializedComponentsProvider._online)):(ae(xs,"Using default OnlineComponentProvider"),await B0(i,new ag))),i._onlineComponents}function qM(i){return oS(i).then((e=>e.syncEngine))}async function HM(i){const e=await oS(i),t=e.eventManager;return t.onListen=SM.bind(null,e.syncEngine),t.onUnlisten=CM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=NM.bind(null,e.syncEngine),t}function FM(i,e,t={}){const s=new Ts;return i.asyncQueue.enqueueAndForget((async()=>(function(u,d,m,p,y){const v=new zM({next:R=>{v.Nu(),d.enqueueAndForget((()=>yM(u,T))),R.fromCache&&p.source==="server"?y.reject(new se($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new EM(m,v,{includeMetadataChanges:!0,Ka:!0});return gM(u,T)})(await HM(i),i.asyncQueue,e,t,s))),s.promise}function GM(i,e){const t=new Ts;return i.asyncQueue.enqueueAndForget((async()=>xM(await qM(i),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM="ComponentProvider",q0=new Map;function YM(i,e,t,s,o){return new lk(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,lS(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="firestore.googleapis.com",H0=!0;class F0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uS,this.ssl=H0}else this.host=e.host,this.ssl=e.ssl??H0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<y4)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}WO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lS(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new F0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new F0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new BO;switch(s.type){case"firstParty":return new GO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=q0.get(t);s&&(ae(KM,"Removing Datastore"),q0.delete(t),s.terminate())})(this),Promise.resolve()}}function QM(i,e,t,s={}){var y;i=Sa(i,sf);const o=Ds(e),u=i._getSettings(),d={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(dg(`https://${m}`),fg("Firestore",!0)),u.host!==uS&&u.host!==m&&wa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!zo(p,d)&&(i._setSettings(p),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=un.MOCK_USER;else{v=sb(s.mockUserToken,(y=i._app)==null?void 0:y.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new un(R)}i._authCredentials=new qO(new WA(v,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Da(this.firestore,e,this._query)}}class qt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}toJSON(){return{type:qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(sc(t,qt._jsonSchema))return new qt(e,s||null,new pe(it.fromString(t.referencePath)))}}qt._jsonSchemaVersion="firestore/documentReference/1.0",qt._jsonSchema={type:Ut("string",qt._jsonSchemaVersion),referencePath:Ut("string")};class bs extends Da{constructor(e,t,s){super(e,t,gw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new pe(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function vy(i,e,...t){if(i=ve(i),JA("collection","path",e),i instanceof sf){const s=it.fromString(e,...t);return i0(s),new bs(i,null,s)}{if(!(i instanceof qt||i instanceof bs))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return i0(s),new bs(i.firestore,null,s)}}function af(i,e,...t){if(i=ve(i),arguments.length===1&&(e=$g.newId()),JA("doc","path",e),i instanceof sf){const s=it.fromString(e,...t);return n0(s),new qt(i,null,new pe(s))}{if(!(i instanceof qt||i instanceof bs))throw new se($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return n0(s),new qt(i.firestore,i instanceof bs?i.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0="AsyncQueue";class K0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gw(this,"async_queue_retry"),this._c=()=>{const s=xp();s&&ae(G0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ts;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!sl(e))throw e;ae(G0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",Y0(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=my.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:Y0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Y0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class cc extends sf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new K0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new K0(e),this._firestoreClient=void 0,await e}}}function $M(i,e){const t=yb(),s=Ed,o=_g(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=RR("firestore");u&&QM(o,...u)}return o}function cS(i){if(i._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||XM(i),i._firestoreClient}function XM(i){var s,o,u,d;const e=i._freezeSettings(),t=YM(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((d=e.localCache)!=null&&d._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new jM(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(an.fromBase64String(e))}catch(t){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ti(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ti._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(sc(e,ti._jsonSchema))return ti.fromBase64String(e.bytes)}}ti._jsonSchemaVersion="firestore/bytes/1.0",ti._jsonSchema={type:Ut("string",ti._jsonSchemaVersion),bytes:Ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(sc(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:Ut("string",tr._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(sc(e,_i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _i(e.vectorValues);throw new se($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_i._jsonSchemaVersion="firestore/vectorValue/1.0",_i._jsonSchema={type:Ut("string",_i._jsonSchemaVersion),vectorValues:Ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=/^__.*__$/;class JM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new ac(e,this.data,t,this.fieldTransforms)}}class hS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ps(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:i})}}class Ty{constructor(e,t,s,o,u,d){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ty({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Cd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(dS(this.dataSource)&&WM.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class ZM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||tf(e)}createContext(e,t,s,o=!1){return new Ty({dataSource:e,methodName:t,targetDoc:s,path:rn.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function by(i){const e=i._freezeSettings(),t=tf(i._databaseId);return new ZM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function eP(i,e,t,s,o,u={}){const d=i.createContext(u.merge||u.mergeFields?2:0,e,t,o);wy("Data must be an object, but it was:",d,s);const m=fS(s,d);let p,y;if(u.merge)p=new zn(d.fieldMask),y=d.fieldTransforms;else if(u.mergeFields){const v=[];for(const T of u.mergeFields){const R=$o(e,T,t);if(!d.contains(R))throw new se($.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);gS(v,R)||v.push(R)}p=new zn(v),y=d.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=d.fieldTransforms;return new JM(new In(m),p,y)}class lf extends of{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lf}}class Ay extends of{_toFieldTransform(e){return new Uk(e.path,new Qu)}isEqual(e){return e instanceof Ay}}function tP(i,e,t,s){const o=i.createContext(1,e,t);wy("Data must be an object, but it was:",o,s);const u=[],d=In.empty();Ms(s,((p,y)=>{const v=pS(e,p,t);y=ve(y);const T=o.childContextForFieldPath(v);if(y instanceof lf)u.push(v);else{const R=hc(y,T);R!=null&&(u.push(v),d.set(v,R))}}));const m=new zn(u);return new hS(d,m,o.fieldTransforms)}function nP(i,e,t,s,o,u){const d=i.createContext(1,e,t),m=[$o(e,s,t)],p=[o];if(u.length%2!=0)throw new se($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<u.length;R+=2)m.push($o(e,u[R])),p.push(u[R+1]);const y=[],v=In.empty();for(let R=m.length-1;R>=0;--R)if(!gS(y,m[R])){const q=m[R];let Y=p[R];Y=ve(Y);const ee=d.childContextForFieldPath(q);if(Y instanceof lf)y.push(q);else{const Z=hc(Y,ee);Z!=null&&(y.push(q),v.set(q,Z))}}const T=new zn(y);return new hS(v,T,d.fieldTransforms)}function iP(i,e,t,s=!1){return hc(t,i.createContext(s?4:3,e))}function hc(i,e){if(mS(i=ve(i)))return wy("Unsupported field value:",e,i),fS(i,e);if(i instanceof of)return(function(s,o){if(!dS(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let d=0;for(const m of s){let p=hc(m,o.childContextForArray(d));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),d++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=ve(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Mk(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=at.fromDate(s);return{timestampValue:wd(o.serializer,u)}}if(s instanceof at){const u=new at(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wd(o.serializer,u)}}if(s instanceof tr)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ti)return{bytesValue:kw(o.serializer,s._byteString)};if(s instanceof qt){const u=o.databaseId,d=s.firestore._databaseId;if(!d.isEqual(u))throw o.createError(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:sy(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof _i)return(function(d,m){const p=d instanceof _i?d.toArray():d;return{mapValue:{fields:{[ow]:{stringValue:lw},[Td]:{arrayValue:{values:p.map((v=>{if(typeof v!="number")throw m.createError("VectorValues must only contain numeric values.");return ty(m.serializer,v)}))}}}}}})(s,o);if(jw(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Kd(s)}`)})(i,e)}function fS(i,e){const t={};return tw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(i,((s,o)=>{const u=hc(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function mS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof at||i instanceof tr||i instanceof ti||i instanceof qt||i instanceof of||i instanceof _i||jw(i))}function wy(i,e,t){if(!mS(t)||!ZA(t)){const s=Kd(t);throw s==="an object"?e.createError(i+" a custom object"):e.createError(i+" "+s)}}function $o(i,e,t){if((e=ve(e))instanceof Ey)return e._internalPath;if(typeof e=="string")return pS(i,e);throw Cd("Field path arguments must be of type string or ",i,!1,void 0,t)}const rP=new RegExp("[~\\*/\\[\\]]");function pS(i,e,t){if(e.search(rP)>=0)throw Cd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Ey(...e.split("."))._internalPath}catch{throw Cd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Cd(i,e,t,s,o){const u=s&&!s.isEmpty(),d=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||d)&&(p+=" (found",u&&(p+=` in field ${s}`),d&&(p+=` in document ${o}`),p+=")"),new se($.INVALID_ARGUMENT,m+i+p)}function gS(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{convertValue(e,t="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ms(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Td].arrayValue)==null?void 0:o.values)==null?void 0:u.map((d=>wt(d.doubleValue)));return new _i(t)}convertGeoPoint(e){return new tr(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=$d(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Fu(e));default:return null}}convertTimestamp(e){const t=Rs(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ke(zw(s),9688,{name:e});const o=new Gu(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||xr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP extends sP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,t)}}function og(){return new Ay("serverTimestamp")}const Q0="@firebase/firestore",$0="4.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field($o("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oP extends yS{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sy{}class _S extends Sy{}function vS(i,e,...t){let s=[];e instanceof Sy&&s.push(e),s=s.concat(t),(function(u){const d=u.filter((p=>p instanceof Iy)).length,m=u.filter((p=>p instanceof Ry)).length;if(d>1||d>0&&m>0)throw new se($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Ry extends _S{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ry(e,t,s)}_apply(e){const t=this._parse(e);return TS(e._query,t),new Da(e.firestore,e.converter,Xp(e._query,t))}_parse(e){const t=by(e.firestore);return(function(u,d,m,p,y,v,T){let R;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){W0(T,v);const Y=[];for(const ee of T)Y.push(X0(p,u,ee));R={arrayValue:{values:Y}}}else R=X0(p,u,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||W0(T,v),R=iP(m,d,T,v==="in"||v==="not-in");return Vt.create(y,v,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Iy extends Sy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Iy(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ti.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let d=o;const m=u.getFlattenedFilters();for(const p of m)TS(d,p),d=Xp(d,p)})(e._query,t),new Da(e.firestore,e.converter,Xp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cy extends _S{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Cy(e,t)}_apply(e){const t=(function(o,u,d){if(o.startAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yu(u,d)})(e._query,this._field,this._direction);return new Da(e.firestore,e.converter,Rk(e._query,t))}}function ES(i,e="asc"){const t=e,s=$o("orderBy",i);return Cy._create(s,t)}function X0(i,e,t){if(typeof(t=ve(t))=="string"){if(t==="")throw new se($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!yw(e)&&t.indexOf("/")!==-1)throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!pe.isDocumentKey(s))throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return h0(i,new pe(s))}if(t instanceof qt)return h0(i,t._key);throw new se($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kd(t)}.`)}function W0(i,e){if(!Array.isArray(i)||i.length===0)throw new se($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TS(i,e){const t=(function(o,u){for(const d of o)for(const m of d.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function uP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Xh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Uo extends yS{constructor(e,t,s,o,u,d){super(e,t,s,o,d),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ad(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field($o("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Uo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Uo._jsonSchemaVersion="firestore/documentSnapshot/1.0",Uo._jsonSchema={type:Ut("string",Uo._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class ad extends Uo{data(e={}){return super.data(e)}}class Lo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Xh(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ad(this._firestore,this._userDataWriter,s.key,s,new Xh(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let d=0;return o._snapshot.docChanges.map((m=>{const p=new ad(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Xh(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:d++}}))}{let d=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new ad(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Xh(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return m.type!==0&&(y=d.indexOf(m.doc.key),d=d.delete(m.doc.key)),m.type!==1&&(d=d.add(m.doc),v=d.indexOf(m.doc.key)),{type:cP(m.type),doc:p,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$g.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lo._jsonSchemaVersion="firestore/querySnapshot/1.0",Lo._jsonSchema={type:Ut("string",Lo._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};function bS(i){i=Sa(i,Da);const e=Sa(i.firestore,cc),t=cS(e),s=new aP(e);return lP(i._query),FM(t,i._query).then((o=>new Lo(e,s,i,o)))}function AS(i,e,t,...s){i=Sa(i,qt);const o=Sa(i.firestore,cc),u=by(o);let d;return d=typeof(e=ve(e))=="string"||e instanceof Ey?nP(u,"updateDoc",i._key,e,t,s):tP(u,"updateDoc",i._key,e),Ny(o,[d.toMutation(i._key,yi.exists(!0))])}function hP(i){return Ny(Sa(i.firestore,cc),[new ny(i._key,yi.none())])}function dP(i,e){const t=Sa(i.firestore,cc),s=af(i),o=uP(i.converter,e),u=by(i.firestore);return Ny(t,[eP(u,"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,yi.exists(!1))]).then((()=>s))}function Ny(i,e){const t=cS(i);return GM(t,e)}(function(e,t=!0){jO(Or),Cr(new vi("firestore",((s,{instanceIdentifier:o,options:u})=>{const d=s.getProvider("app").getImmediate(),m=new cc(new HO(s.getProvider("auth-internal")),new KO(d,s.getProvider("app-check-internal")),uk(d,o),d);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Bn(Q0,$0,e),Bn(Q0,$0,"esm2020")})();const fP={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},mP=()=>{try{typeof import.meta<"u"}catch(i){console.warn("Error reading environment variables",i)}return"AIzaSyCuhI79HGlVKc2m2xdganc_mdZgMC_RLXk"},pP={apiKey:mP(),authDomain:"sciencenoob-quiz.firebaseapp.com",projectId:"sciencenoob-quiz",storageBucket:"sciencenoob-quiz.firebasestorage.app",messagingSenderId:"259332905426",appId:"1:259332905426:web:7a17a4ba05d138a0fc100b",measurementId:"G-4WS1S374EM"},wS=Jo.initializeApp(pP),od=wS.auth(),Xo=$M();wS.storage();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=i=>{const e=yP(i);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=He.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:d,...m},p)=>He.createElement("svg",{ref:p,..._P,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:SS("lucide",o),...!u&&!vP(m)&&{"aria-hidden":"true"},...m},[...d.map(([y,v])=>He.createElement(y,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=(i,e)=>{const t=He.forwardRef(({className:s,...o},u)=>He.createElement(EP,{ref:u,iconNode:e,className:SS(`lucide-${gP(J0(i))}`,`lucide-${i}`,s),...o}));return t.displayName=J0(i),t};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],bP=je("activity",TP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],wP=je("archive",AP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],RP=je("award",SP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Z0=je("book-open",IP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],NP=je("book",CP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],DP=je("calendar",xP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],kP=je("chart-column",OP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],PP=je("check",MP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],UP=je("chevron-down",VP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],zP=je("chevron-up",LP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],RS=je("circle-alert",jP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],qP=je("circle-check-big",BP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],FP=je("circle-plus",HP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],KP=je("circle-x",GP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],IS=je("clock",YP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$P=je("copy",QP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],WP=je("file-text",XP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],ZP=je("key",JP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],tV=je("layout-dashboard",eV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],iV=je("loader-circle",nV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],sV=je("lock",rV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],oV=je("log-out",aV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],uV=je("menu",lV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],hV=je("pen",cV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],fV=je("plus",dV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],pV=je("save",mV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],yV=je("search",gV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],lg=je("shield-check",_V);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],EV=je("tag",vV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],xy=je("trash-2",TV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],AV=je("user",bV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],SV=je("users",wV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],IV=je("x",RV),CV=({children:i,currentView:e,onNavigate:t})=>{const[s,o]=He.useState(!1),u=()=>{od.signOut()},d=p=>{t(p),o(!1)},m=()=>w.jsxs("div",{className:"flex flex-col h-full bg-white text-gray-800",children:[w.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-center gap-2",children:[w.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white",children:w.jsx(lg,{size:18})}),w.jsx("h1",{className:"text-xl font-bold text-primary tracking-tight",children:"Science Noob"})]}),w.jsxs("nav",{className:"flex-1 p-4 space-y-2",children:[w.jsxs("button",{onClick:()=>d("dashboard"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="dashboard"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(tV,{size:20}),"ড্যাশবোর্ড (Dashboard)"]}),w.jsxs("button",{onClick:()=>d("create"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="create"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(FP,{size:20}),"নতুন কুইজ (New Quiz)"]}),w.jsxs("button",{onClick:()=>d("results"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="results"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(kP,{size:20}),"ফলাফল (Results)"]})]}),w.jsx("div",{className:"p-4 border-t border-gray-100",children:w.jsxs("button",{onClick:u,className:"w-full flex items-center gap-3 px-4 py-3 rounded-lg text-accent hover:bg-red-50 transition-colors font-medium",children:[w.jsx(oV,{size:20}),"লগ আউট (Log Out)"]})})]});return w.jsxs("div",{className:"min-h-screen bg-cream flex flex-col md:flex-row",children:[w.jsxs("div",{className:"md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-30 shadow-sm",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("div",{className:"w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white",children:w.jsx(lg,{size:18})}),w.jsx("span",{className:"font-bold text-lg text-gray-800",children:"Science Noob"})]}),w.jsx("button",{onClick:()=>o(!0),className:"p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",children:w.jsx(uV,{size:24})})]}),s&&w.jsxs("div",{className:"fixed inset-0 z-40 md:hidden",children:[w.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",onClick:()=>o(!1)}),w.jsx("div",{className:"absolute top-0 right-0 w-64 h-full shadow-2xl transform transition-transform duration-300 ease-in-out bg-white",children:w.jsxs("div",{className:"relative h-full",children:[w.jsx("button",{onClick:()=>o(!1),className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-50",children:w.jsx(IV,{size:20})}),w.jsx(m,{})]})})]}),w.jsx("aside",{className:"hidden md:block w-64 border-r border-gray-200 bg-white sticky top-0 h-screen z-10",children:w.jsx(m,{})}),w.jsx("main",{className:"flex-1 p-4 md:p-8 overflow-y-auto",children:w.jsx("div",{className:"max-w-5xl mx-auto",children:i})})]})},NV=({quizzes:i,onEdit:e,onDelete:t,onToggleStatus:s})=>{const o=i.length,u=i.filter(v=>v.isActive).length,d=o-u,[m,p]=He.useState(null),y=v=>{navigator.clipboard.writeText(v),p(v),setTimeout(()=>p(null),2e3)};return w.jsxs("div",{className:"space-y-8",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-6",children:"কুইজ তালিকা (Manage Quizzes)"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[w.jsx("div",{className:"p-3 bg-blue-50 text-blue-600 rounded-lg",children:w.jsx(Z0,{size:24})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"মোট কুইজ"}),w.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:o})]})]}),w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[w.jsx("div",{className:"p-3 bg-green-50 text-primary rounded-lg",children:w.jsx(bP,{size:24})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"রানিং (Active)"}),w.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:u})]})]}),w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[w.jsx("div",{className:"p-3 bg-orange-50 text-orange-600 rounded-lg",children:w.jsx(wP,{size:24})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"ড্রাফট (Draft)"}),w.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:d})]})]})]})]}),i.length===0?w.jsxs("div",{className:"text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300",children:[w.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",children:w.jsx(Z0,{className:"text-gray-400",size:32})}),w.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"কোনো কুইজ নেই"}),w.jsx("p",{className:"text-gray-400",children:'নতুন কুইজ তৈরি করতে "New Quiz" ট্যাবে যান।'})]}):w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(v=>{var T;return w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full",children:[w.jsx("div",{className:`h-1.5 w-full ${v.isActive?"bg-primary":"bg-gray-300"}`}),w.jsxs("div",{className:"p-6 flex-1",children:[w.jsxs("div",{className:"flex justify-between items-start mb-4",children:[w.jsxs("div",{className:"flex flex-col gap-1",children:[w.jsx("span",{className:`self-start px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${v.isActive?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:v.isActive?"Live":"Draft"}),v.category&&w.jsx("span",{className:"self-start px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200",children:v.category})]}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>e(v),className:"p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Edit",children:w.jsx(hV,{size:18})}),w.jsx("button",{onClick:()=>t(v.id),className:"p-2 text-gray-400 hover:text-accent hover:bg-red-50 rounded-lg transition-colors",title:"Delete",children:w.jsx(xy,{size:18})})]})]}),w.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-1 line-clamp-2 leading-tight",children:v.title}),w.jsxs("div",{className:"flex flex-col gap-1 mb-4 text-xs text-gray-500",children:[v.subject&&w.jsxs("div",{className:"flex items-center gap-1.5 font-medium text-gray-700",children:[w.jsx(NP,{size:12,className:"text-primary"}),v.subject]}),v.chapter&&w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx(EV,{size:12}),v.chapter]})]}),w.jsxs("div",{className:"flex items-center gap-4 text-xs font-medium text-gray-500 bg-gray-50 p-3 rounded-lg mt-auto",children:[w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx(IS,{size:14,className:"text-primary"}),w.jsxs("span",{children:[Math.round(v.durationSeconds/60)," মি."]})]}),w.jsx("div",{className:"h-4 w-px bg-gray-300"}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"text-gray-700 font-bold",children:v.questions.length}),w.jsx("span",{children:"টি প্রশ্ন"})]}),w.jsx("div",{className:"h-4 w-px bg-gray-300"}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"text-gray-700 font-bold",children:v.totalMarks}),w.jsx("span",{children:"মার্কস"})]})]}),w.jsx("div",{className:"mt-4 flex items-center justify-between",children:w.jsxs("div",{className:"text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2",children:["ID: ",(T=v.id)==null?void 0:T.substring(0,8),"...",w.jsx("button",{onClick:()=>y(v.id),className:"hover:text-primary transition-colors",title:"Copy Full ID",children:m===v.id?w.jsx(PP,{size:12,className:"text-green-600"}):w.jsx($P,{size:12})})]})})]}),w.jsx("div",{className:"px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center mt-auto",children:w.jsx("button",{onClick:()=>s(v.id,v.isActive),className:`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-lg transition-colors ${v.isActive?"text-accent bg-red-50 hover:bg-red-100 border border-red-100":"text-primary bg-green-50 hover:bg-green-100 border border-green-100"}`,children:v.isActive?w.jsxs(w.Fragment,{children:[w.jsx(KP,{size:16})," ডিএক্টিভ করুন"]}):w.jsxs(w.Fragment,{children:[w.jsx(qP,{size:16})," পাবলিশ করুন"]})})})]},v.id)})})]})},Wu="quizzes",xV="attempts",DV=async()=>{const i=vS(vy(Xo,Wu),ES("createdAt","desc"));return(await bS(i)).docs.map(t=>({id:t.id,...t.data()}))},OV=async i=>{const e={...i};if(e.updatedAt=og(),i.id){const t=af(Xo,Wu,i.id),{id:s,...o}=e;await AS(t,o)}else e.createdAt=og(),await dP(vy(Xo,Wu),e)},kV=async i=>{await hP(af(Xo,Wu,i))},MV=async(i,e)=>{const t=af(Xo,Wu,i);await AS(t,{isActive:!e,updatedAt:og()})},PV=async()=>{const i=vS(vy(Xo,xV),ES("timestamp","desc"));return(await bS(i)).docs.map(t=>({id:t.id,...t.data()}))},VV=["SSC","HSC","Admission"],Fi={SSC:{"তথ্য ও যোগাযোগ প্রযুক্তি (ICT)":["তথ্য ও যোগাযোগ প্রযুক্তি এবং আমাদের বাংলাদেশ","কম্পিউটার রক্ষণাবেক্ষণ ও সাইবার নিরাপত্তা","ইন্টারনেট ও ওয়েব পরিচিতি","আমার লেখালেখি ও হিসাব","মাল্টিমিডিয়া ও গ্রাফিক্স","প্রোগ্রামিংয়ের মাধ্যমে সমস্যা সমাধান"],"পদার্থবিজ্ঞান (Physics)":["ভৌত রাশি ও পরিমাপ","গতি (Motion)","বল (Force)","কাজ, ক্ষমতা ও শক্তি","পদার্থের অবস্থা ও চাপ","বস্তুর উপর তাপের প্রভাব","তরঙ্গ ও শব্দ","আলোর প্রতিফলন","আলোর প্রতিসরণ","স্থির তড়িৎ","চল তড়িৎ","তড়িৎ ও চৌম্বক ক্রিয়া","আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স","জীবন বাঁচাতে পদার্থবিজ্ঞান"],"রসায়ন (Chemistry)":["রসায়নের ধারণা","পদার্থের অবস্থা","পদার্থের গঠন","পর্যায় সারণি","রাসায়নিক বন্ধন","মোল ও রাসায়নিক গণনা","রাসায়নিক বিক্রিয়া","রসায়ন ও শক্তি","এসিড-ক্ষার সমতা","খনিজ সম্পদ: ধাতু-অধাতু","খনিজ সম্পদ: জীবাশ্ম","আমাদের জীবনে রসায়ন"],"জীববিজ্ঞান (Biology)":["জীবন পাঠ","জীবকোষ ও টিস্যু","কোষ বিভাজন","জীবনীশক্তি","খাদ্য, পুষ্টি ও পরিপাক","জীবে পরিবহণ","গ্যাসীয় বিনিময়","রেচন প্রক্রিয়া","দৃঢ়তা প্রদান ও চলন","সমন্বয়","জীবের প্রজনন","জীবের বংশগতি ও বিবর্তন","জীবের পরিবেশ","জীবপ্রযুক্তি"],"উচ্চতর গণিত (Higher Math)":["সেট ও ফাংশন","বীজগাণিতিক রাশি","জ্যামিতি","জ্যামিতিক অংকন","সমীকরণ","অসমতা","অসীম ধারা","ত্রিকোণমিতি","সূচক ও লগারিদমীয় ফাংশন","দ্বিপদী বিস্তৃতি","স্থানাঙ্ক জ্যামিতি","সমতলীয় ভেক্টর","ঘন জ্যামিতি","সম্ভাবনা"]},HSC:{"তথ্য ও যোগাযোগ প্রযুক্তি (ICT)":["তথ্য ও যোগাযোগ প্রযুক্তি: বিশ্ব ও বাংলাদেশ প্রেক্ষিত","কমিউনিকেশন সিস্টেম ও নেটওয়ার্কিং","সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস","ওয়েব ডিজাইন পরিচিতি এবং এইচটিএমএল","প্রোগ্রামিং ভাষা","ডেটাবেজ ম্যানেজমেন্ট সিস্টেম"],"পদার্থবিজ্ঞান ১ম পত্র":["ভৌত জগৎ ও পরিমাপ","ভেক্টর","গতিবিদ্যা","নিউটনীয় বলবিদ্যা","কাজ, শক্তি ও ক্ষমতা","মহাকর্ষ ও অভিকর্ষ","পদার্থের গাঠনিক ধর্ম","পর্যায়বৃত্ত গতি","আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব"],"পদার্থবিজ্ঞান ২য় পত্র":["তাপগতিবিদ্যা","স্থির তড়িৎ","চল তড়িৎ","তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব","তাড়িতচৌম্বক আবেশ ও দিক পরিবর্তী প্রবাহ","জ্যামিতিক আলোকবিজ্ঞান","ভৌত আলোকবিজ্ঞান","আধুনিক পদার্থবিজ্ঞানের সূচনা","পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান","সেমিকন্ডাক্টর ও ইলেকট্রনিক্স"],"রসায়ন ১ম পত্র":["ল্যাবরেটরির নিরাপদ ব্যবহার","গুণগত রসায়ন","মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন","রাসায়নিক পরিবর্তন","কর্মমুখী রসায়ন"],"রসায়ন ২য় পত্র":["পরিবেশ রসায়ন","জৈব রসায়ন","পরিমাণগত রসায়ন","তড়িৎ রসায়ন","অর্থনৈতিক রসায়ন"],"জীববিজ্ঞান ১ম পত্র (Botany)":["কোষ ও এর গঠন","কোষ বিভাজন","কোষ রসায়ন","অণুজীব","শৈবাল ও ছত্রাক","ব্রায়োফাইটা ও টেরিডোফাইটা","নগ্নবীজী ও আবৃতবীজী উদ্ভিদ","টিস্যু ও টিস্যুতন্ত্র","উদ্ভিদ শরীরতত্ত্ব","উদ্ভিদ প্রজনন","জীবপ্রযুক্তি","জীবের পরিবেশ, বিস্তার ও সংরক্ষণ"],"জীববিজ্ঞান ২য় পত্র (Zoology)":["প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস","প্রাণীর পরিচিতি","মানব শরীরতত্ত্ব: পরিপাক ও শোষণ","মানব শরীরতত্ত্ব: রক্ত ও সঞ্চালন","মানব শরীরতত্ত্ব: শ্বাসক্রিয়া ও শ্বসন","মানব শরীরতত্ত্ব: বর্জ্য ও নিষ্কাশন","মানব শরীরতত্ত্ব: চলন ও অঙ্গচালনা","মানব শরীরতত্ত্ব: সমন্বয় ও নিয়ন্ত্রণ","মানব জীবনের ধারাবাহিকতা","মানবদেহের প্রতিরক্ষা","জিনতত্ত্ব ও বিবর্তন","প্রাণীর আচরণ"]}},eb=()=>({id:Date.now().toString(),text:"",options:["","","",""],correctAnswerIndex:0,explanation:""}),UV=({initialQuiz:i,onSaveComplete:e,onCancel:t})=>{const[s,o]=He.useState(!1),[u,d]=He.useState(10),[m,p]=He.useState([]),[y,v]=He.useState([]),[T,R]=He.useState({title:"",description:"",category:"SSC",subject:"",chapter:"",durationSeconds:600,totalMarks:100,isActive:!0,questions:[eb()],createdAt:null}),[q,Y]=He.useState(null);He.useEffect(()=>{i?(R(i),d(Math.floor(i.durationSeconds/60)),i.questions.length>0&&Y(i.questions[0].id),i.category&&Fi[i.category]&&(p(Object.keys(Fi[i.category])),i.subject&&Fi[i.category][i.subject]&&v(Fi[i.category][i.subject]))):(Y(T.questions[0].id),p(Object.keys(Fi.SSC)))},[i]);const ee=(J,I)=>{R(S=>{const C={...S,[J]:I};if(J==="category"){const D=Fi[I]?Object.keys(Fi[I]):[];p(D),C.subject="",C.chapter="",v([])}if(J==="subject"){const D=Fi[C.category]&&Fi[C.category][I]?Fi[C.category][I]:[];v(D),C.chapter=""}return C})},Z=J=>{d(J),ee("durationSeconds",J*60)},ce=(J,I,S)=>{R(C=>({...C,questions:C.questions.map(D=>D.id===J?{...D,[I]:S}:D)}))},fe=(J,I,S)=>{R(C=>({...C,questions:C.questions.map(D=>{if(D.id!==J)return D;const O=[...D.options];return O[I]=S,{...D,options:O}})}))},ue=()=>{const J=eb();R(I=>({...I,questions:[...I.questions,J]})),Y(J.id)},ye=J=>{T.questions.length!==1&&R(I=>({...I,questions:I.questions.filter(S=>S.id!==J)}))},Ce=async J=>{if(J.preventDefault(),!T.category||!T.subject||!T.chapter){alert("অনুগ্রহ করে ক্যাটাগরি, বিষয় এবং অধ্যায় নির্বাচন করুন।");return}o(!0);try{await OV(T),e()}catch(I){console.error("Error saving quiz",I),alert("Error saving quiz. Check console/permissions.")}finally{o(!1)}};return w.jsxs("form",{onSubmit:Ce,className:"max-w-4xl mx-auto pb-12",children:[w.jsxs("div",{className:"flex justify-between items-center mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:i?"কুইজ এডিট করুন":"নতুন কুইজ তৈরি করুন"}),w.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"শিক্ষার্থীদের জন্য একটি নতুন কুইজ সেটআপ করুন"})]}),w.jsxs("div",{className:"flex gap-3",children:[w.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium transition-colors",children:"বাতিল"}),w.jsxs("button",{type:"submit",disabled:s,className:`px-6 py-2 text-white rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50 font-medium ${T.isActive?"bg-primary hover:bg-green-700":"bg-gray-600 hover:bg-gray-700"}`,children:[w.jsx(pV,{size:18}),s?"সংরক্ষণ হচ্ছে...":T.isActive?"পাবলিশ করুন (Publish)":"ড্রাফট হিসেবে সেভ করুন"]})]})]}),w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 space-y-6",children:[w.jsxs("div",{className:"flex justify-between items-center border-b pb-4 mb-2",children:[w.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"কুইজ তথ্য (Quiz Meta)"}),w.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200",children:[w.jsx("span",{className:`text-sm font-bold ${T.isActive?"text-primary":"text-gray-500"}`,children:T.isActive?"Live":"Draft"}),w.jsx("button",{type:"button",onClick:()=>ee("isActive",!T.isActive),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${T.isActive?"bg-primary":"bg-gray-300"}`,children:w.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${T.isActive?"translate-x-6":"translate-x-1"}`})})]})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-50/50 p-6 rounded-xl border border-blue-100",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"ক্যাটাগরি (Category)"}),w.jsx("select",{value:T.category,onChange:J=>ee("category",J.target.value),className:"w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none",children:VV.map(J=>w.jsx("option",{value:J,children:J},J))})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"বিষয় (Subject)"}),w.jsxs("select",{value:T.subject,onChange:J=>ee("subject",J.target.value),disabled:!m.length,className:"w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-100 disabled:text-gray-400",children:[w.jsx("option",{value:"",children:"বিষয় নির্বাচন করুন"}),m.map(J=>w.jsx("option",{value:J,children:J},J))]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"অধ্যায় (Chapter)"}),w.jsxs("select",{value:T.chapter,onChange:J=>ee("chapter",J.target.value),disabled:!y.length,className:"w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-primary outline-none disabled:bg-gray-100 disabled:text-gray-400",children:[w.jsx("option",{value:"",children:"অধ্যায় নির্বাচন করুন"}),y.map(J=>w.jsx("option",{value:J,children:J},J))]})]})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[w.jsxs("div",{className:"col-span-1 md:col-span-2",children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"কুইজ শিরোনাম (Title)"}),w.jsx("input",{type:"text",required:!0,value:T.title,onChange:J=>ee("title",J.target.value),placeholder:"e.g. নিউটনের গতিসূত্র কুইজ ১",className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"})]}),w.jsxs("div",{className:"col-span-1 md:col-span-2",children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"বিবরণ (Description)"}),w.jsx("textarea",{rows:2,value:T.description,onChange:J=>ee("description",J.target.value),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm",placeholder:"কুইজ সম্পর্কে বিস্তারিত লিখুন..."})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"সময় (মিনিট)"}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"number",min:"1",required:!0,value:u,onChange:J=>Z(parseInt(J.target.value)||0),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"}),w.jsx("span",{className:"absolute right-4 top-3.5 text-gray-400 text-sm",children:"মিনিট"})]}),w.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["সেভ হবে: ",w.jsx("span",{className:"font-bold",children:T.durationSeconds})," সেকেন্ড"]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"মোট নম্বর (Total Marks)"}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"number",min:"1",required:!0,value:T.totalMarks,onChange:J=>ee("totalMarks",parseInt(J.target.value)),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"}),w.jsx("span",{className:"absolute right-4 top-3.5 text-gray-400 text-sm",children:"মার্কস"})]})]})]})]}),w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"flex justify-between items-center px-2",children:[w.jsxs("h3",{className:"text-xl font-bold text-gray-800",children:["প্রশ্নসমূহ (",T.questions.length,")"]}),w.jsxs("button",{type:"button",onClick:ue,className:"bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm transition-colors",children:[w.jsx(fV,{size:18}),"নতুন প্রশ্ন যোগ করুন"]})]}),T.questions.map((J,I)=>{const S=q===J.id;return w.jsxs("div",{className:`bg-white rounded-xl border transition-all duration-300 ${S?"border-primary ring-1 ring-primary shadow-lg":"border-gray-200 shadow-sm hover:border-gray-300"}`,children:[w.jsxs("div",{className:`p-5 flex justify-between items-center cursor-pointer rounded-t-xl transition-colors ${S?"bg-primary/5":"hover:bg-gray-50"}`,onClick:()=>Y(S?null:J.id),children:[w.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[w.jsx("span",{className:`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${S?"bg-primary text-white":"bg-gray-100 text-gray-500"}`,children:I+1}),w.jsx("h4",{className:`font-medium truncate pr-4 text-lg ${J.text?"text-gray-800":"text-gray-400 italic"}`,children:J.text||"প্রশ্ন লিখুন..."})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("button",{type:"button",onClick:C=>{C.stopPropagation(),ye(J.id)},className:"text-gray-400 hover:text-accent hover:bg-red-50 p-2 rounded-lg transition-colors",title:"Delete Question",children:w.jsx(xy,{size:18})}),w.jsx("div",{className:"text-gray-400 p-1",children:S?w.jsx(zP,{size:20}):w.jsx(UP,{size:20})})]})]}),S&&w.jsxs("div",{className:"p-6 border-t border-primary/10 animate-in fade-in slide-in-from-top-2 duration-200",children:[w.jsxs("div",{className:"mb-6",children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"প্রশ্ন (Question)"}),w.jsx("input",{type:"text",required:!0,value:J.text,onChange:C=>ce(J.id,"text",C.target.value),placeholder:"e.g. মহাকর্ষ ধ্রুবক G এর মান কত?",className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm"})]}),w.jsxs("div",{className:"space-y-4 mb-8",children:[w.jsxs("div",{className:"flex justify-between items-center mb-2",children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700",children:"অপশনসমূহ (Options)"}),w.jsx("span",{className:"text-xs text-primary bg-primary/10 px-2 py-1 rounded",children:"সঠিক উত্তরটি সিলেক্ট করুন"})]}),J.options.map((C,D)=>w.jsxs("div",{className:`flex items-center gap-3 p-2 rounded-lg border transition-colors ${J.correctAnswerIndex===D?"bg-green-50 border-green-200":"border-transparent hover:bg-gray-50"}`,children:[w.jsxs("div",{className:"relative flex items-center justify-center",children:[w.jsx("input",{type:"radio",name:`correct-${J.id}`,checked:J.correctAnswerIndex===D,onChange:()=>ce(J.id,"correctAnswerIndex",D),className:"peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary checked:bg-primary cursor-pointer transition-all"}),w.jsx("div",{className:"absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"})]}),w.jsx("input",{type:"text",required:!0,value:C,onChange:O=>fe(J.id,D,O.target.value),placeholder:`অপশন ${D+1}`,className:`flex-1 px-4 py-2.5 rounded-lg border bg-white text-gray-900 ${J.correctAnswerIndex===D?"border-green-300 focus:ring-green-500":"border-gray-300 focus:ring-primary"} focus:ring-2 focus:border-transparent outline-none transition-all`})]},D))]}),w.jsxs("div",{className:"bg-blue-50/50 p-4 rounded-xl border border-blue-100",children:[w.jsxs("label",{className:"flex items-center gap-2 text-sm font-bold text-blue-800 mb-2",children:[w.jsx(RS,{size:16}),"ব্যাখ্যা (Explanation - Optional)"]}),w.jsx("textarea",{rows:2,value:J.explanation||"",onChange:C=>ce(J.id,"explanation",C.target.value),placeholder:"শিক্ষার্থীদের জন্য সঠিক উত্তরের ব্যাখ্যা দিন...",className:"w-full px-4 py-3 rounded-lg border border-blue-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none shadow-sm"})]})]})]},J.id)})]})]})},LV=({results:i})=>{const[e,t]=He.useState("submissions"),[s,o]=He.useState(""),u=He.useMemo(()=>{const v={};return i.forEach(T=>{v[T.userId]||(v[T.userId]={userId:T.userId,userName:T.userName||"Unknown",userEmail:T.userEmail||"",totalQuizzes:0,totalScore:0,totalQuestions:0,totalTimeSeconds:0,lastActive:T.timestamp}),v[T.userId].totalQuizzes+=1,v[T.userId].totalScore+=T.score,v[T.userId].totalQuestions+=T.totalQuestions,v[T.userId].totalTimeSeconds+=T.timeTakenSeconds,T.timestamp>v[T.userId].lastActive&&(v[T.userId].lastActive=T.timestamp)}),Object.values(v)},[i]),d=i.filter(v=>{var T,R;return((T=v.userName)==null?void 0:T.toLowerCase().includes(s.toLowerCase()))||""||((R=v.quizTitle)==null?void 0:R.toLowerCase().includes(s.toLowerCase()))||""}),m=u.filter(v=>v.userName.toLowerCase().includes(s.toLowerCase())||""||v.userEmail.toLowerCase().includes(s.toLowerCase())||""),p=v=>{const T=Math.floor(v/60),R=v%60;return`${T}m ${R}s`},y=v=>new Date(v).toLocaleDateString("bn-BD",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return w.jsxs("div",{className:"space-y-6",children:[w.jsxs("header",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"ফলাফল ও পরিসংখ্যান"}),w.jsx("p",{className:"text-gray-500 mt-2",children:"শিক্ষার্থীদের পারফর্মেন্স বিশ্লেষণ করুন।"})]}),w.jsxs("div",{className:"bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm",children:[w.jsxs("button",{onClick:()=>t("submissions"),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${e==="submissions"?"bg-primary text-white shadow-sm":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(WP,{size:16}),"সব ফলাফল"]}),w.jsxs("button",{onClick:()=>t("students"),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${e==="students"?"bg-primary text-white shadow-sm":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(SV,{size:16}),"শিক্ষার্থী রিপোর্ট"]})]})]}),w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]",children:[w.jsx("div",{className:"p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50",children:w.jsxs("div",{className:"relative flex-1 max-w-md",children:[w.jsx(yV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:18}),w.jsx("input",{type:"text",value:s,onChange:v=>o(v.target.value),placeholder:e==="submissions"?"নাম বা কুইজ দিয়ে খুঁজুন...":"শিক্ষার্থীর নাম দিয়ে খুঁজুন...",className:"w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"})]})}),w.jsx("div",{className:"overflow-x-auto",children:e==="submissions"?w.jsxs("table",{className:"w-full text-left text-sm text-gray-600",children:[w.jsx("thead",{className:"bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-100",children:w.jsxs("tr",{children:[w.jsx("th",{className:"px-6 py-4",children:"শিক্ষার্থী (Student)"}),w.jsx("th",{className:"px-6 py-4",children:"কুইজ (Quiz)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"স্কোর (Score)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"সময় (Time)"}),w.jsx("th",{className:"px-6 py-4 text-right",children:"তারিখ (Date)"})]})}),w.jsx("tbody",{className:"divide-y divide-gray-100",children:d.length===0?w.jsx("tr",{children:w.jsx("td",{colSpan:5,className:"text-center py-12 text-gray-400",children:"কোন ফলাফল পাওয়া যায়নি"})}):d.map(v=>{const T=Math.round(v.score/v.totalQuestions*100)||0;return w.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[w.jsxs("td",{className:"px-6 py-4 font-medium text-gray-800",children:[v.userName||"Anonymous",w.jsx("div",{className:"text-xs text-gray-400 font-normal group-hover:text-primary transition-colors",children:v.userEmail||"No Email"})]}),w.jsx("td",{className:"px-6 py-4 text-gray-700 font-medium",children:v.quizTitle}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsxs("div",{className:"flex flex-col items-center",children:[w.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${T>=80?"bg-green-100 text-green-700":T>=50?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:[T,"%"]}),w.jsxs("span",{className:"text-[10px] text-gray-400 mt-1",children:[v.score," / ",v.totalQuestions]})]})}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-gray-600",children:[w.jsx(IS,{size:14}),w.jsx("span",{children:p(v.timeTakenSeconds)})]})}),w.jsx("td",{className:"px-6 py-4 text-right text-gray-500 text-xs",children:y(v.timestamp)})]},v.id)})})]}):w.jsxs("table",{className:"w-full text-left text-sm text-gray-600",children:[w.jsx("thead",{className:"bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-100",children:w.jsxs("tr",{children:[w.jsx("th",{className:"px-6 py-4",children:"শিক্ষার্থী (Student)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"মোট কুইজ"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"গড় স্কোর (Avg)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"সর্বশেষ অ্যাক্টিভ"})]})}),w.jsx("tbody",{className:"divide-y divide-gray-100",children:m.length===0?w.jsx("tr",{children:w.jsx("td",{colSpan:4,className:"text-center py-12 text-gray-400",children:"কোন শিক্ষার্থী পাওয়া যায়নি"})}):m.map(v=>{const T=v.totalQuizzes>0?Math.round(v.totalScore/v.totalQuestions*100):0;return w.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[w.jsx("td",{className:"px-6 py-4",children:w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:v.userName.charAt(0).toUpperCase()}),w.jsxs("div",{children:[w.jsx("div",{className:"font-bold text-gray-800",children:v.userName}),w.jsx("div",{className:"text-xs text-gray-400",children:v.userEmail})]})]})}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold",children:[w.jsx(RP,{size:14}),v.totalQuizzes," টি"]})}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsx("div",{className:"flex flex-col items-center",children:w.jsxs("span",{className:`text-lg font-bold ${T>=80?"text-green-600":T>=50?"text-yellow-600":"text-red-500"}`,children:[T,"%"]})})}),w.jsx("td",{className:"px-6 py-4 text-center text-gray-500",children:w.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[w.jsx(DP,{size:14}),y(v.lastActive)]})})]},v.userId)})})]})})]})]})},zV="NOOB_ADMIN_2025",jV=()=>{const[i,e]=He.useState(null),[t,s]=He.useState(!0),[o,u]=He.useState("dashboard"),[d,m]=He.useState([]),[p,y]=He.useState([]),[v,T]=He.useState(null),[R,q]=He.useState({isOpen:!1,quizId:null}),[Y,ee]=He.useState(!1),[Z,ce]=He.useState(""),[fe,ue]=He.useState(""),[ye,Ce]=He.useState(""),[J,I]=He.useState("");He.useEffect(()=>{const j=od.onAuthStateChanged(ne=>{e(ne),s(!1)});return()=>j()},[]),He.useEffect(()=>{i&&(o==="dashboard"&&S(),o==="results"&&C())},[i,o]);const S=async()=>{s(!0);try{const j=await DV();m(j)}catch(j){console.error(j)}finally{s(!1)}},C=async()=>{s(!0);try{const j=await PV();y(j)}catch(j){console.error(j)}finally{s(!1)}},D=j=>`${j.toLowerCase().replace(/\s+/g,"")}@admin.sciencenoob.com`,O=async j=>{j.preventDefault(),I("");const ne=D(Z);try{if(Y){if(ye!==zV){I("ভুল সিক্রেট কোড! আপনি কি অ্যাডমিন?");return}await od.createUserWithEmailAndPassword(ne,fe)}else await od.signInWithEmailAndPassword(ne,fe)}catch(he){console.error(he),he.code==="auth/invalid-credential"||he.code==="auth/user-not-found"||he.code==="auth/wrong-password"?I("ইউজারনেম বা পাসওয়ার্ড ভুল হয়েছে।"):he.code==="auth/email-already-in-use"?I("এই ইউজারনেমটি ইতিমধ্যে ব্যবহার করা হয়েছে।"):he.code==="auth/weak-password"?I("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।"):I("সমস্যা হয়েছে: "+he.message)}},V=j=>{q({isOpen:!0,quizId:j})},N=async()=>{if(R.quizId)try{await kV(R.quizId),await S()}catch(j){console.error("Error deleting quiz:",j),alert("কুইজ ডিলিট করতে সমস্যা হয়েছে।")}finally{q({isOpen:!1,quizId:null})}},nt=async(j,ne)=>{await MV(j,ne),S()},vt=j=>{T(j),u("create")};return t&&!i?w.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-cream",children:w.jsx(iV,{className:"animate-spin text-primary",size:48})}):i?w.jsxs(w.Fragment,{children:[w.jsxs(CV,{currentView:v?"create":o,onNavigate:j=>{j==="create"&&T(null),u(j)},children:[o==="dashboard"&&w.jsx(NV,{quizzes:d,onDelete:V,onEdit:vt,onToggleStatus:nt}),o==="create"&&w.jsx(UV,{initialQuiz:v,onSaveComplete:()=>{T(null),u("dashboard")},onCancel:()=>{T(null),u("dashboard")}}),o==="results"&&w.jsx(LV,{results:p})]}),R.isOpen&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200",children:w.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100",children:[w.jsx("div",{className:"flex justify-center mb-6",children:w.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:w.jsx(xy,{className:"text-red-600",size:32})})}),w.jsx("h3",{className:"text-xl font-bold text-center text-gray-800 mb-2",children:"আপনি কি নিশ্চিত?"}),w.jsx("p",{className:"text-center text-gray-500 mb-8",children:"আপনি এই কুইজটি ডিলিট করতে যাচ্ছেন। এটি আর ফিরিয়ে আনা যাবে না।"}),w.jsxs("div",{className:"flex gap-3",children:[w.jsx("button",{onClick:()=>q({isOpen:!1,quizId:null}),className:"flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors",children:"বাতিল করুন"}),w.jsx("button",{onClick:N,className:"flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-red-200",children:"হ্যাঁ, ডিলিট করুন"})]})]})})]}):w.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center bg-cream p-4 relative overflow-hidden",children:[w.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",children:[w.jsx("div",{className:"absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"}),w.jsx("div",{className:"absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-3xl"})]}),w.jsxs("div",{className:"bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-full border border-white/50 relative z-10",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform rotate-3",children:w.jsx(lg,{className:"text-white",size:32})}),w.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2 tracking-tight",children:"Science Noob"}),w.jsx("p",{className:"text-gray-500 font-medium",children:Y?"অ্যাডমিন অ্যাকাউন্ট তৈরি করুন":"অ্যাডমিন প্যানেল"})]}),w.jsxs("form",{onSubmit:O,className:"space-y-5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-1.5 ml-1",children:"ইউজারনেম (Username)"}),w.jsxs("div",{className:"relative group",children:[w.jsx(AV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),w.jsx("input",{type:"text",required:!0,placeholder:"আপনার নাম (ইংরেজিতে)",value:Z,onChange:j=>ce(j.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-1.5 ml-1",children:"পাসওয়ার্ড (Password)"}),w.jsxs("div",{className:"relative group",children:[w.jsx(sV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),w.jsx("input",{type:"password",required:!0,placeholder:"******",value:fe,onChange:j=>ue(j.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"})]})]}),Y&&w.jsxs("div",{className:"bg-orange-50 p-5 rounded-xl border border-orange-100 animate-in fade-in slide-in-from-top-4 shadow-sm",children:[w.jsx("label",{className:"block text-sm font-bold text-orange-800 mb-1.5",children:"সিক্রেট কোড (Secret Code)"}),w.jsxs("div",{className:"relative group",children:[w.jsx(ZP,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 group-focus-within:text-orange-600 transition-colors",size:18}),w.jsx("input",{type:"text",required:!0,placeholder:"কোডটি শুধুমাত্র এডমিন জানেন",value:ye,onChange:j=>Ce(j.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-orange-200 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none shadow-sm transition-all"})]}),w.jsx("p",{className:"text-xs text-orange-600 mt-2 font-medium",children:"* নতুন অ্যাকাউন্ট খুলতে সিক্রেট কোড প্রয়োজন।"})]}),J&&w.jsxs("div",{className:"text-red-600 text-sm bg-red-50 p-4 rounded-xl text-center font-semibold border border-red-100 flex items-center justify-center gap-2 animate-pulse",children:[w.jsx(RS,{size:16}),J]}),w.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-primary to-green-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:to-green-700 transition-all transform active:scale-[0.98]",children:Y?"অ্যাকাউন্ট তৈরি করুন":"প্রবেশ করুন"}),w.jsx("div",{className:"text-center pt-2",children:w.jsx("button",{type:"button",onClick:()=>{ee(!Y),I(""),Ce("")},className:"text-sm text-gray-500 hover:text-primary transition-colors font-medium hover:underline",children:Y?"ইতোমধ্যে অ্যাকাউন্ট আছে? লগইন করুন":"অ্যাডমিন অ্যাকাউন্ট নেই? নতুন তৈরি করুন"})})]})]}),w.jsx("div",{className:"absolute bottom-4 text-center w-full text-xs text-gray-400",children:"© 2025 Science Noob. All rights reserved."})]})},CS=document.getElementById("root");if(!CS)throw new Error("Could not find root element to mount to");const BV=gR.createRoot(CS);BV.render(w.jsx(lR.StrictMode,{children:w.jsx(jV,{})}));
