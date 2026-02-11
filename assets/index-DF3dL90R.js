(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Z0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var op={exports:{}},hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E;function rR(){if($E)return hu;$E=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return hu.Fragment=e,hu.jsx=t,hu.jsxs=t,hu}var XE;function sR(){return XE||(XE=1,op.exports=rR()),op.exports}var w=sR(),lp={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE;function aR(){if(WE)return be;WE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),R=Symbol.iterator;function j(M){return M===null||typeof M!="object"?null:(M=R&&M[R]||M["@@iterator"],typeof M=="function"?M:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,J={};function ce(M,X,re){this.props=M,this.context=X,this.refs=J,this.updater=re||Q}ce.prototype.isReactComponent={},ce.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},ce.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function de(){}de.prototype=ce.prototype;function ue(M,X,re){this.props=M,this.context=X,this.refs=J,this.updater=re||Q}var ye=ue.prototype=new de;ye.constructor=ue,Z(ye,ce.prototype),ye.isPureReactComponent=!0;var Ce=Array.isArray;function te(){}var I={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function C(M,X,re){var oe=re.ref;return{$$typeof:i,type:M,key:X,ref:oe!==void 0?oe:null,props:re}}function O(M,X){return C(M.type,X,M.props)}function D(M){return typeof M=="object"&&M!==null&&M.$$typeof===i}function V(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(re){return X[re]})}var N=/\/+/g;function nt(M,X){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):X.toString(36)}function vt(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(te,te):(M.status="pending",M.then(function(X){M.status==="pending"&&(M.status="fulfilled",M.value=X)},function(X){M.status==="pending"&&(M.status="rejected",M.reason=X)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function B(M,X,re,oe,Ee){var Re=typeof M;(Re==="undefined"||Re==="boolean")&&(M=null);var Ue=!1;if(M===null)Ue=!0;else switch(Re){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(M.$$typeof){case i:case e:Ue=!0;break;case v:return Ue=M._init,B(Ue(M._payload),X,re,oe,Ee)}}if(Ue)return Ee=Ee(M),Ue=oe===""?"."+nt(M,0):oe,Ce(Ee)?(re="",Ue!=null&&(re=Ue.replace(N,"$&/")+"/"),B(Ee,X,re,"",function(Ps){return Ps})):Ee!=null&&(D(Ee)&&(Ee=O(Ee,re+(Ee.key==null||M&&M.key===Ee.key?"":(""+Ee.key).replace(N,"$&/")+"/")+Ue)),X.push(Ee)),1;Ue=0;var zt=oe===""?".":oe+":";if(Ce(M))for(var ut=0;ut<M.length;ut++)oe=M[ut],Re=zt+nt(oe,ut),Ue+=B(oe,X,re,Re,Ee);else if(ut=j(M),typeof ut=="function")for(M=ut.call(M),ut=0;!(oe=M.next()).done;)oe=oe.value,Re=zt+nt(oe,ut++),Ue+=B(oe,X,re,Re,Ee);else if(Re==="object"){if(typeof M.then=="function")return B(vt(M),X,re,oe,Ee);throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function ne(M,X,re){if(M==null)return M;var oe=[],Ee=0;return B(M,oe,"","",function(Re){return X.call(re,Re,Ee++)}),oe}function he(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(re){(M._status===0||M._status===-1)&&(M._status=1,M._result=re)},function(re){(M._status===0||M._status===-1)&&(M._status=2,M._result=re)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var ze=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Qe={map:ne,forEach:function(M,X,re){ne(M,function(){X.apply(this,arguments)},re)},count:function(M){var X=0;return ne(M,function(){X++}),X},toArray:function(M){return ne(M,function(X){return X})||[]},only:function(M){if(!D(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return be.Activity=T,be.Children=Qe,be.Component=ce,be.Fragment=t,be.Profiler=o,be.PureComponent=ue,be.StrictMode=s,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,be.__COMPILER_RUNTIME={__proto__:null,c:function(M){return I.H.useMemoCache(M)}},be.cache=function(M){return function(){return M.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(M,X,re){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=Z({},M.props),Ee=M.key;if(X!=null)for(Re in X.key!==void 0&&(Ee=""+X.key),X)!S.call(X,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&X.ref===void 0||(oe[Re]=X[Re]);var Re=arguments.length-2;if(Re===1)oe.children=re;else if(1<Re){for(var Ue=Array(Re),zt=0;zt<Re;zt++)Ue[zt]=arguments[zt+2];oe.children=Ue}return C(M.type,Ee,oe)},be.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},be.createElement=function(M,X,re){var oe,Ee={},Re=null;if(X!=null)for(oe in X.key!==void 0&&(Re=""+X.key),X)S.call(X,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(Ee[oe]=X[oe]);var Ue=arguments.length-2;if(Ue===1)Ee.children=re;else if(1<Ue){for(var zt=Array(Ue),ut=0;ut<Ue;ut++)zt[ut]=arguments[ut+2];Ee.children=zt}if(M&&M.defaultProps)for(oe in Ue=M.defaultProps,Ue)Ee[oe]===void 0&&(Ee[oe]=Ue[oe]);return C(M,Re,Ee)},be.createRef=function(){return{current:null}},be.forwardRef=function(M){return{$$typeof:m,render:M}},be.isValidElement=D,be.lazy=function(M){return{$$typeof:v,_payload:{_status:-1,_result:M},_init:he}},be.memo=function(M,X){return{$$typeof:y,type:M,compare:X===void 0?null:X}},be.startTransition=function(M){var X=I.T,re={};I.T=re;try{var oe=M(),Ee=I.S;Ee!==null&&Ee(re,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(te,ze)}catch(Re){ze(Re)}finally{X!==null&&re.types!==null&&(X.types=re.types),I.T=X}},be.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},be.use=function(M){return I.H.use(M)},be.useActionState=function(M,X,re){return I.H.useActionState(M,X,re)},be.useCallback=function(M,X){return I.H.useCallback(M,X)},be.useContext=function(M){return I.H.useContext(M)},be.useDebugValue=function(){},be.useDeferredValue=function(M,X){return I.H.useDeferredValue(M,X)},be.useEffect=function(M,X){return I.H.useEffect(M,X)},be.useEffectEvent=function(M){return I.H.useEffectEvent(M)},be.useId=function(){return I.H.useId()},be.useImperativeHandle=function(M,X,re){return I.H.useImperativeHandle(M,X,re)},be.useInsertionEffect=function(M,X){return I.H.useInsertionEffect(M,X)},be.useLayoutEffect=function(M,X){return I.H.useLayoutEffect(M,X)},be.useMemo=function(M,X){return I.H.useMemo(M,X)},be.useOptimistic=function(M,X){return I.H.useOptimistic(M,X)},be.useReducer=function(M,X,re){return I.H.useReducer(M,X,re)},be.useRef=function(M){return I.H.useRef(M)},be.useState=function(M){return I.H.useState(M)},be.useSyncExternalStore=function(M,X,re){return I.H.useSyncExternalStore(M,X,re)},be.useTransition=function(){return I.H.useTransition()},be.version="19.2.4",be}var JE;function lg(){return JE||(JE=1,lp.exports=aR()),lp.exports}var Fe=lg();const oR=Z0(Fe);var up={exports:{}},fu={},cp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE;function lR(){return ZE||(ZE=1,(function(i){function e(B,ne){var he=B.length;B.push(ne);e:for(;0<he;){var ze=he-1>>>1,Qe=B[ze];if(0<o(Qe,ne))B[ze]=ne,B[he]=Qe,he=ze;else break e}}function t(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var ne=B[0],he=B.pop();if(he!==ne){B[0]=he;e:for(var ze=0,Qe=B.length,M=Qe>>>1;ze<M;){var X=2*(ze+1)-1,re=B[X],oe=X+1,Ee=B[oe];if(0>o(re,he))oe<Qe&&0>o(Ee,re)?(B[ze]=Ee,B[oe]=he,ze=oe):(B[ze]=re,B[X]=he,ze=X);else if(oe<Qe&&0>o(Ee,he))B[ze]=Ee,B[oe]=he,ze=oe;else break e}}return ne}function o(B,ne){var he=B.sortIndex-ne.sortIndex;return he!==0?he:B.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],y=[],v=1,T=null,R=3,j=!1,Q=!1,Z=!1,J=!1,ce=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate<"u"?setImmediate:null;function ye(B){for(var ne=t(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=B)s(y),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=t(y)}}function Ce(B){if(Z=!1,ye(B),!Q)if(t(p)!==null)Q=!0,te||(te=!0,V());else{var ne=t(y);ne!==null&&vt(Ce,ne.startTime-B)}}var te=!1,I=-1,S=5,C=-1;function O(){return J?!0:!(i.unstable_now()-C<S)}function D(){if(J=!1,te){var B=i.unstable_now();C=B;var ne=!0;try{e:{Q=!1,Z&&(Z=!1,de(I),I=-1),j=!0;var he=R;try{t:{for(ye(B),T=t(p);T!==null&&!(T.expirationTime>B&&O());){var ze=T.callback;if(typeof ze=="function"){T.callback=null,R=T.priorityLevel;var Qe=ze(T.expirationTime<=B);if(B=i.unstable_now(),typeof Qe=="function"){T.callback=Qe,ye(B),ne=!0;break t}T===t(p)&&s(p),ye(B)}else s(p);T=t(p)}if(T!==null)ne=!0;else{var M=t(y);M!==null&&vt(Ce,M.startTime-B),ne=!1}}break e}finally{T=null,R=he,j=!1}ne=void 0}}finally{ne?V():te=!1}}}var V;if(typeof ue=="function")V=function(){ue(D)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,nt=N.port2;N.port1.onmessage=D,V=function(){nt.postMessage(null)}}else V=function(){ce(D,0)};function vt(B,ne){I=ce(function(){B(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_next=function(B){switch(R){case 1:case 2:case 3:var ne=3;break;default:ne=R}var he=R;R=ne;try{return B()}finally{R=he}},i.unstable_requestPaint=function(){J=!0},i.unstable_runWithPriority=function(B,ne){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var he=R;R=B;try{return ne()}finally{R=he}},i.unstable_scheduleCallback=function(B,ne,he){var ze=i.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?ze+he:ze):he=ze,B){case 1:var Qe=-1;break;case 2:Qe=250;break;case 5:Qe=1073741823;break;case 4:Qe=1e4;break;default:Qe=5e3}return Qe=he+Qe,B={id:v++,callback:ne,priorityLevel:B,startTime:he,expirationTime:Qe,sortIndex:-1},he>ze?(B.sortIndex=he,e(y,B),t(p)===null&&B===t(y)&&(Z?(de(I),I=-1):Z=!0,vt(Ce,he-ze))):(B.sortIndex=Qe,e(p,B),Q||j||(Q=!0,te||(te=!0,V()))),B},i.unstable_shouldYield=O,i.unstable_wrapCallback=function(B){var ne=R;return function(){var he=R;R=ne;try{return B.apply(this,arguments)}finally{R=he}}}})(hp)),hp}var eT;function uR(){return eT||(eT=1,cp.exports=lR()),cp.exports}var fp={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tT;function cR(){if(tT)return on;tT=1;var i=lg();function e(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:T==null?null:""+T,children:p,containerInfo:y,implementation:v}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(p,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(p,y,null,v)},on.flushSync=function(p){var y=f.T,v=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=v,s.d.f()}},on.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},on.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},on.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var v=y.as,T=m(v,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,j=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:T,integrity:R,fetchPriority:j}):v==="script"&&s.d.X(p,{crossOrigin:T,integrity:R,fetchPriority:j,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},on.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},on.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,T=m(v,y.crossOrigin);s.d.L(p,v,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},on.preloadModule=function(p,y){if(typeof p=="string")if(y){var v=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},on.requestFormReset=function(p){s.d.r(p)},on.unstable_batchedUpdates=function(p,y){return p(y)},on.useFormState=function(p,y,v){return f.H.useFormState(p,y,v)},on.useFormStatus=function(){return f.H.useHostTransitionStatus()},on.version="19.2.4",on}var nT;function hR(){if(nT)return fp.exports;nT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),fp.exports=cR(),fp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iT;function fR(){if(iT)return fu;iT=1;var i=uR(),e=lg(),t=hR();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function f(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function y(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return p(h),n;if(d===l)return p(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,b=h.child;b;){if(b===a){_=!0,a=h,l=d;break}if(b===l){_=!0,l=h,a=d;break}b=b.sibling}if(!_){for(b=d.child;b;){if(b===a){_=!0,a=d,l=h;break}if(b===l){_=!0,l=d,a=h;break}b=b.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function v(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=v(n),r!==null)return r;n=n.sibling}return null}var T=Object.assign,R=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),de=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),D=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=D&&n[D]||n["@@iterator"],typeof n=="function"?n:null)}var N=Symbol.for("react.client.reference");function nt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===N?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Z:return"Fragment";case ce:return"Profiler";case J:return"StrictMode";case Ce:return"Suspense";case te:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case Q:return"Portal";case ue:return n.displayName||"Context";case de:return(n._context.displayName||"Context")+".Consumer";case ye:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return r=n.displayName||null,r!==null?r:nt(n.type)||"Memo";case S:r=n._payload,n=n._init;try{return nt(n(r))}catch{}}return null}var vt=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},ze=[],Qe=-1;function M(n){return{current:n}}function X(n){0>Qe||(n.current=ze[Qe],ze[Qe]=null,Qe--)}function re(n,r){Qe++,ze[Qe]=n.current,n.current=r}var oe=M(null),Ee=M(null),Re=M(null),Ue=M(null);function zt(n,r){switch(re(Re,r),re(Ee,n),re(oe,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?_E(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=_E(r),n=vE(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}X(oe),re(oe,n)}function ut(){X(oe),X(Ee),X(Re)}function Ps(n){n.memoizedState!==null&&re(Ue,n);var r=oe.current,a=vE(r,n.type);r!==a&&(re(Ee,n),re(oe,a))}function Da(n){Ee.current===n&&(X(oe),X(Ee)),Ue.current===n&&(X(Ue),ou._currentValue=he)}var Oa,ka;function bi(n){if(Oa===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Oa=r&&r[1]||"",ka=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Oa+n+ka}var ol=!1;function Vs(n,r){if(!n||ol)return"";ol=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(F){var q=F}Reflect.construct(n,[],Y)}else{try{Y.call()}catch(F){q=F}n.call(Y.prototype)}}else{try{throw Error()}catch(F){q=F}(Y=n())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(F){if(F&&q&&typeof F.stack=="string")return[F.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],b=d[1];if(_&&b){var x=_.split(`
`),z=b.split(`
`);for(h=l=0;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===x.length||h===z.length)for(l=x.length-1,h=z.length-1;1<=l&&0<=h&&x[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(x[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||x[l]!==z[h]){var G=`
`+x[l].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=l&&0<=h);break}}}finally{ol=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?bi(a):""}function ll(n,r){switch(n.tag){case 26:case 27:case 5:return bi(n.type);case 16:return bi("Lazy");case 13:return n.child!==r&&r!==null?bi("Suspense Fallback"):bi("Suspense");case 19:return bi("SuspenseList");case 0:case 15:return Vs(n.type,!1);case 11:return Vs(n.type.render,!1);case 1:return Vs(n.type,!0);case 31:return bi("Activity");default:return""}}function ul(n){try{var r="",a=null;do r+=ll(n,a),a=n,n=n.return;while(n);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var St=Object.prototype.hasOwnProperty,jt=i.unstable_scheduleCallback,Pr=i.unstable_cancelCallback,ud=i.unstable_shouldYield,hc=i.unstable_requestPaint,dn=i.unstable_now,Us=i.unstable_getCurrentPriorityLevel,cl=i.unstable_ImmediatePriority,hl=i.unstable_UserBlockingPriority,Vr=i.unstable_NormalPriority,cd=i.unstable_LowPriority,fc=i.unstable_IdlePriority,dc=i.log,mc=i.unstable_setDisableYieldValue,ri=null,Xt=null;function qn(n){if(typeof dc=="function"&&mc(n),Xt&&typeof Xt.setStrictMode=="function")try{Xt.setStrictMode(ri,n)}catch{}}var Et=Math.clz32?Math.clz32:gc,pc=Math.log,Ma=Math.LN2;function gc(n){return n>>>=0,n===0?32:31-(pc(n)/Ma|0)|0}var Ai=256,Ls=262144,Rt=4194304;function wi(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Si(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var h=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var b=l&134217727;return b!==0?(l=b&~d,l!==0?h=wi(l):(_&=b,_!==0?h=wi(_):a||(a=b&~n,a!==0&&(h=wi(a))))):(b=l&~d,b!==0?h=wi(b):_!==0?h=wi(_):a||(a=l&~n,a!==0&&(h=wi(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function si(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function hd(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(){var n=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),n}function Ri(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function zs(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function fd(n,r,a,l,h,d){var _=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var b=n.entanglements,x=n.expirationTimes,z=n.hiddenUpdates;for(a=_&~a;0<a;){var G=31-Et(a),Y=1<<G;b[G]=0,x[G]=-1;var q=z[G];if(q!==null)for(z[G]=null,G=0;G<q.length;G++){var F=q[G];F!==null&&(F.lane&=-536870913)}a&=~Y}l!==0&&js(n,l,0),d!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~r))}function js(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Et(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&261930}function fl(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Et(a),h=1<<l;h&r|n[l]&r&&(n[l]|=r),a&=~h}}function dl(n,r){var a=r&-r;return a=(a&42)!==0?1:Bs(a),(a&(n.suspendedLanes|r))!==0?0:a}function Bs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ir(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function _c(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:qE(n.type))}function ai(n,r){var a=ne.p;try{return ne.p=n,r()}finally{ne.p=a}}var oi=Math.random().toString(36).slice(2),It="__reactFiber$"+oi,Gt="__reactProps$"+oi,Ii="__reactContainer$"+oi,Pa="__reactEvents$"+oi,dd="__reactListeners$"+oi,vc="__reactHandles$"+oi,Ec="__reactResources$"+oi,Ci="__reactMarker$"+oi;function Va(n){delete n[It],delete n[Gt],delete n[Pa],delete n[dd],delete n[vc]}function Ni(n){var r=n[It];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ii]||a[It]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=RE(n);n!==null;){if(a=n[It])return a;n=RE(n)}return r}n=a,a=n.parentNode}return null}function Hn(n){if(n=n[It]||n[Ii]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Cn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function xi(n){var r=n[Ec];return r||(r=n[Ec]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Ct(n){n[Ci]=!0}var ml=new Set,pl={};function Di(n,r){Oi(n,r),Oi(n+"Capture",r)}function Oi(n,r){for(pl[n]=r,n=0;n<r.length;n++)ml.add(r[n])}var gl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yl={},_l={};function Tc(n){return St.call(_l,n)?!0:St.call(yl,n)?!1:gl.test(n)?_l[n]=!0:(yl[n]=!0,!1)}function Ua(n,r,a){if(Tc(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function Nn(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Nt(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}function Kt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ur(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function vl(n,r,a){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ye(n){if(!n._valueTracker){var r=Ur(n)?"checked":"value";n._valueTracker=vl(n,r,""+n[r])}}function qs(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=Ur(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function ki(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Hs=/[\n"\\]/g;function _n(n){return n.replace(Hs,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function La(n,r,a,l,h,d,_,b){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),r!=null?_==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Kt(r)):n.value!==""+Kt(r)&&(n.value=""+Kt(r)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),r!=null?El(n,_,Kt(r)):a!=null?El(n,_,Kt(a)):l!=null&&n.removeAttribute("value"),h==null&&d!=null&&(n.defaultChecked=!!d),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.name=""+Kt(b):n.removeAttribute("name")}function bc(n,r,a,l,h,d,_,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null)){Ye(n);return}a=a!=null?""+Kt(a):"",r=r!=null?""+Kt(r):a,b||r===n.value||(n.value=r),n.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=b?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_),Ye(n)}function El(n,r,a){r==="number"&&ki(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Lr(n,r,a,l){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&l&&(n[a].defaultSelected=!0)}else{for(a=""+Kt(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function Ac(n,r,a){if(r!=null&&(r=""+Kt(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+Kt(a):""}function zr(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(vt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=Kt(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l),Ye(n)}function vn(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var wc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tl(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||wc.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function bl(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&Tl(n,h,l)}else for(var d in r)r.hasOwnProperty(d)&&Tl(n,d,r[d])}function za(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ja(n){return jr.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function li(){}var Al=null;function Fn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Br=null,Mi=null;function Fs(n){var r=Hn(n);if(r&&(n=r.stateNode)){var a=n[Gt]||null;e:switch(n=r.stateNode,r.type){case"input":if(La(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_n(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var h=l[Gt]||null;if(!h)throw Error(s(90));La(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&qs(l)}break e;case"textarea":Ac(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Lr(n,!!a.multiple,r,!1)}}}var Ba=!1;function qr(n,r,a){if(Ba)return n(r,a);Ba=!0;try{var l=n(r);return l}finally{if(Ba=!1,(Br!==null||Mi!==null)&&(_h(),Br&&(r=Br,n=Mi,Mi=Br=null,Fs(r),n)))for(r=0;r<n.length;r++)Fs(n[r])}}function ui(n,r){var a=n.stateNode;if(a===null)return null;var l=a[Gt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gs=!1;if(Gn)try{var We={};Object.defineProperty(We,"passive",{get:function(){Gs=!0}}),window.addEventListener("test",We,We),window.removeEventListener("test",We,We)}catch{Gs=!1}var Pi=null,wl=null,Ks=null;function Sl(){if(Ks)return Ks;var n,r=wl,a=r.length,l,h="value"in Pi?Pi.value:Pi.textContent,d=h.length;for(n=0;n<a&&r[n]===h[n];n++);var _=a-n;for(l=1;l<=_&&r[a-l]===h[d-l];l++);return Ks=h.slice(n,1<l?1-l:void 0)}function Qs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function rr(){return!0}function ci(){return!1}function Wt(n){function r(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var b in n)n.hasOwnProperty(b)&&(a=n[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?rr:ci,this.isPropagationStopped=ci,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),r}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=Wt(sr),Hr=T({},sr,{view:0,detail:0}),Rl=Wt(Hr),Fr,qa,Ui,Ha=T({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ui&&(Ui&&n.type==="mousemove"?(Fr=n.screenX-Ui.screenX,qa=n.screenY-Ui.screenY):qa=Fr=0,Ui=n),Fr)},movementY:function(n){return"movementY"in n?n.movementY:qa}}),Il=Wt(Ha),Ys=T({},Ha,{dataTransfer:0}),Rc=Wt(Ys),Ic=T({},Hr,{relatedTarget:0}),$s=Wt(Ic),Cl=T({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Cc=Wt(Cl),Fa=T({},sr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nc=Wt(Fa),xc=T({},sr,{data:0}),Li=Wt(xc),Dc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mc(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=kc[n])?!!r[n]:!1}function Gr(){return Mc}var mn=T({},Hr,{key:function(n){if(n.key){var r=Dc[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Qs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Oc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gr,charCode:function(n){return n.type==="keypress"?Qs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Pc=Wt(mn),Vc=T({},Ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ar=Wt(Vc),c=T({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gr}),g=Wt(c),E=T({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Wt(E),U=T({},Ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),H=Wt(U),ie=T({},sr,{newState:0,oldState:0}),we=Wt(ie),Tt=[9,13,27,32],qe=Gn&&"CompositionEvent"in window,ct=null;Gn&&"documentMode"in document&&(ct=document.documentMode);var Kn=Gn&&"TextEvent"in window&&!ct,zi=Gn&&(!qe||ct&&8<ct&&11>=ct),hi=" ",fi=!1;function Xs(n,r){switch(n){case"keyup":return Tt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ga(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ka=!1;function CS(n,r){switch(n){case"compositionend":return Ga(r);case"keypress":return r.which!==32?null:(fi=!0,hi);case"textInput":return n=r.data,n===hi&&fi?null:n;default:return null}}function NS(n,r){if(Ka)return n==="compositionend"||!qe&&Xs(n,r)?(n=Sl(),Ks=wl=Pi=null,Ka=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zi&&r.locale!=="ko"?null:r.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!xS[n.type]:r==="textarea"}function xy(n,r,a,l){Br?Mi?Mi.push(l):Mi=[l]:Br=l,r=Sh(r,"onChange"),0<r.length&&(a=new Vi("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var Nl=null,xl=null;function DS(n){fE(n,0)}function Uc(n){var r=Cn(n);if(qs(r))return n}function Dy(n,r){if(n==="change")return r}var Oy=!1;if(Gn){var md;if(Gn){var pd="oninput"in document;if(!pd){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),pd=typeof ky.oninput=="function"}md=pd}else md=!1;Oy=md&&(!document.documentMode||9<document.documentMode)}function My(){Nl&&(Nl.detachEvent("onpropertychange",Py),xl=Nl=null)}function Py(n){if(n.propertyName==="value"&&Uc(xl)){var r=[];xy(r,xl,n,Fn(n)),qr(DS,r)}}function OS(n,r,a){n==="focusin"?(My(),Nl=r,xl=a,Nl.attachEvent("onpropertychange",Py)):n==="focusout"&&My()}function kS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uc(xl)}function MS(n,r){if(n==="click")return Uc(r)}function PS(n,r){if(n==="input"||n==="change")return Uc(r)}function VS(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var xn=typeof Object.is=="function"?Object.is:VS;function Dl(n,r){if(xn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!St.call(r,h)||!xn(n[h],r[h]))return!1}return!0}function Vy(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Uy(n,r){var a=Vy(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vy(a)}}function Ly(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ly(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function zy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ki(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=ki(n.document)}return r}function gd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var US=Gn&&"documentMode"in document&&11>=document.documentMode,Qa=null,yd=null,Ol=null,_d=!1;function jy(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_d||Qa==null||Qa!==ki(l)||(l=Qa,"selectionStart"in l&&gd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ol&&Dl(Ol,l)||(Ol=l,l=Sh(yd,"onSelect"),0<l.length&&(r=new Vi("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Qa)))}function Ws(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ya={animationend:Ws("Animation","AnimationEnd"),animationiteration:Ws("Animation","AnimationIteration"),animationstart:Ws("Animation","AnimationStart"),transitionrun:Ws("Transition","TransitionRun"),transitionstart:Ws("Transition","TransitionStart"),transitioncancel:Ws("Transition","TransitionCancel"),transitionend:Ws("Transition","TransitionEnd")},vd={},By={};Gn&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete Ya.animationend.animation,delete Ya.animationiteration.animation,delete Ya.animationstart.animation),"TransitionEvent"in window||delete Ya.transitionend.transition);function Js(n){if(vd[n])return vd[n];if(!Ya[n])return n;var r=Ya[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in By)return vd[n]=r[a];return n}var qy=Js("animationend"),Hy=Js("animationiteration"),Fy=Js("animationstart"),LS=Js("transitionrun"),zS=Js("transitionstart"),jS=Js("transitioncancel"),Gy=Js("transitionend"),Ky=new Map,Ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ed.push("scrollEnd");function di(n,r){Ky.set(n,r),Di(r,[n])}var Lc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Qn=[],$a=0,Td=0;function zc(){for(var n=$a,r=Td=$a=0;r<n;){var a=Qn[r];Qn[r++]=null;var l=Qn[r];Qn[r++]=null;var h=Qn[r];Qn[r++]=null;var d=Qn[r];if(Qn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&Qy(a,h,d)}}function jc(n,r,a,l){Qn[$a++]=n,Qn[$a++]=r,Qn[$a++]=a,Qn[$a++]=l,Td|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function bd(n,r,a,l){return jc(n,r,a,l),Bc(n)}function Zs(n,r){return jc(n,null,null,r),Bc(n)}function Qy(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(h=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,h&&r!==null&&(h=31-Et(a),n=d.hiddenUpdates,l=n[h],l===null?n[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function Bc(n){if(50<eu)throw eu=0,Dm=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Xa={};function BS(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(n,r,a,l){return new BS(n,r,a,l)}function Ad(n){return n=n.prototype,!(!n||!n.isReactComponent)}function or(n,r){var a=n.alternate;return a===null?(a=Dn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Yy(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function qc(n,r,a,l,h,d){var _=0;if(l=n,typeof n=="function")Ad(n)&&(_=1);else if(typeof n=="string")_=K1(n,a,oe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Dn(31,a,r,h),n.elementType=C,n.lanes=d,n;case Z:return ea(a.children,h,d,r);case J:_=8,h|=24;break;case ce:return n=Dn(12,a,r,h|2),n.elementType=ce,n.lanes=d,n;case Ce:return n=Dn(13,a,r,h),n.elementType=Ce,n.lanes=d,n;case te:return n=Dn(19,a,r,h),n.elementType=te,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ue:_=10;break e;case de:_=9;break e;case ye:_=11;break e;case I:_=14;break e;case S:_=16,l=null;break e}_=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=Dn(_,a,r,h),r.elementType=n,r.type=l,r.lanes=d,r}function ea(n,r,a,l){return n=Dn(7,n,l,r),n.lanes=a,n}function wd(n,r,a){return n=Dn(6,n,null,r),n.lanes=a,n}function $y(n){var r=Dn(18,null,null,0);return r.stateNode=n,r}function Sd(n,r,a){return r=Dn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Xy=new WeakMap;function Yn(n,r){if(typeof n=="object"&&n!==null){var a=Xy.get(n);return a!==void 0?a:(r={value:n,source:r,stack:ul(r)},Xy.set(n,r),r)}return{value:n,source:r,stack:ul(r)}}var Wa=[],Ja=0,Hc=null,kl=0,$n=[],Xn=0,Kr=null,ji=1,Bi="";function lr(n,r){Wa[Ja++]=kl,Wa[Ja++]=Hc,Hc=n,kl=r}function Wy(n,r,a){$n[Xn++]=ji,$n[Xn++]=Bi,$n[Xn++]=Kr,Kr=n;var l=ji;n=Bi;var h=32-Et(l)-1;l&=~(1<<h),a+=1;var d=32-Et(r)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,ji=1<<32-Et(r)+h|a<<h|l,Bi=d+n}else ji=1<<d|a<<h|l,Bi=n}function Rd(n){n.return!==null&&(lr(n,1),Wy(n,1,0))}function Id(n){for(;n===Hc;)Hc=Wa[--Ja],Wa[Ja]=null,kl=Wa[--Ja],Wa[Ja]=null;for(;n===Kr;)Kr=$n[--Xn],$n[Xn]=null,Bi=$n[--Xn],$n[Xn]=null,ji=$n[--Xn],$n[Xn]=null}function Jy(n,r){$n[Xn++]=ji,$n[Xn++]=Bi,$n[Xn++]=Kr,ji=r.id,Bi=r.overflow,Kr=n}var Jt=null,rt=null,Ve=!1,Qr=null,Wn=!1,Cd=Error(s(519));function Yr(n){var r=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(Yn(r,n)),Cd}function Zy(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[It]=n,r[Gt]=l,a){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(a=0;a<nu.length;a++)xe(nu[a],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),bc(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),zr(r,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||gE(r.textContent,a)?(l.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),l.onScroll!=null&&xe("scroll",r),l.onScrollEnd!=null&&xe("scrollend",r),l.onClick!=null&&(r.onclick=li),r=!0):r=!1,r||Yr(n,!0)}function e_(n){for(Jt=n.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:Wn=!1;return;case 27:case 3:Wn=!0;return;default:Jt=Jt.return}}function Za(n){if(n!==Jt)return!1;if(!Ve)return e_(n),Ve=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Km(n.type,n.memoizedProps)),a=!a),a&&rt&&Yr(n),e_(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));rt=SE(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));rt=SE(n)}else r===27?(r=rt,ls(n.type)?(n=Wm,Wm=null,rt=n):rt=r):rt=Jt?Zn(n.stateNode.nextSibling):null;return!0}function ta(){rt=Jt=null,Ve=!1}function Nd(){var n=Qr;return n!==null&&(An===null?An=n:An.push.apply(An,n),Qr=null),n}function Ml(n){Qr===null?Qr=[n]:Qr.push(n)}var xd=M(null),na=null,ur=null;function $r(n,r,a){re(xd,r._currentValue),r._currentValue=a}function cr(n){n._currentValue=xd.current,X(xd)}function Dd(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function Od(n,r,a,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var b=d;d=h;for(var x=0;x<r.length;x++)if(b.context===r[x]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),Dd(d.return,a,n),l||(_=null);break e}d=b.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Dd(_,a,n),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===n){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function eo(n,r,a,l){n=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var b=h.type;xn(h.pendingProps.value,_.value)||(n!==null?n.push(b):n=[b])}}else if(h===Ue.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(ou):n=[ou])}h=h.return}n!==null&&Od(r,n,a,l),r.flags|=262144}function Fc(n){for(n=n.firstContext;n!==null;){if(!xn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ia(n){na=n,ur=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zt(n){return t_(na,n)}function Gc(n,r){return na===null&&ia(n),t_(n,r)}function t_(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},ur===null){if(n===null)throw Error(s(308));ur=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ur=ur.next=r;return a}var qS=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},HS=i.unstable_scheduleCallback,FS=i.unstable_NormalPriority,xt={$$typeof:ue,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new qS,data:new Map,refCount:0}}function Pl(n){n.refCount--,n.refCount===0&&HS(FS,function(){n.controller.abort()})}var Vl=null,Md=0,to=0,no=null;function GS(n,r){if(Vl===null){var a=Vl=[];Md=0,to=Um(),no={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Md++,r.then(n_,n_),r}function n_(){if(--Md===0&&Vl!==null){no!==null&&(no.status="fulfilled");var n=Vl;Vl=null,to=0,no=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function KS(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var i_=B.S;B.S=function(n,r){jv=dn(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&GS(n,r),i_!==null&&i_(n,r)};var ra=M(null);function Pd(){var n=ra.current;return n!==null?n:tt.pooledCache}function Kc(n,r){r===null?re(ra,ra.current):re(ra,r.pool)}function r_(){var n=Pd();return n===null?null:{parent:xt._currentValue,pool:n}}var io=Error(s(460)),Vd=Error(s(474)),Qc=Error(s(542)),Yc={then:function(){}};function s_(n){return n=n.status,n==="fulfilled"||n==="rejected"}function a_(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(li,li),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,l_(n),n;default:if(typeof r.status=="string")r.then(li,li);else{if(n=tt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,l_(n),n}throw aa=r,io}}function sa(n){try{var r=n._init;return r(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(aa=a,io):a}}var aa=null;function o_(){if(aa===null)throw Error(s(459));var n=aa;return aa=null,n}function l_(n){if(n===io||n===Qc)throw Error(s(483))}var ro=null,Ul=0;function $c(n){var r=Ul;return Ul+=1,ro===null&&(ro=[]),a_(ro,n,r)}function Ll(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Xc(n,r){throw r.$$typeof===R?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function u_(n){function r(P,k){if(n){var L=P.deletions;L===null?(P.deletions=[k],P.flags|=16):L.push(k)}}function a(P,k){if(!n)return null;for(;k!==null;)r(P,k),k=k.sibling;return null}function l(P){for(var k=new Map;P!==null;)P.key!==null?k.set(P.key,P):k.set(P.index,P),P=P.sibling;return k}function h(P,k){return P=or(P,k),P.index=0,P.sibling=null,P}function d(P,k,L){return P.index=L,n?(L=P.alternate,L!==null?(L=L.index,L<k?(P.flags|=67108866,k):L):(P.flags|=67108866,k)):(P.flags|=1048576,k)}function _(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function b(P,k,L,K){return k===null||k.tag!==6?(k=wd(L,P.mode,K),k.return=P,k):(k=h(k,L),k.return=P,k)}function x(P,k,L,K){var me=L.type;return me===Z?G(P,k,L.props.children,K,L.key):k!==null&&(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===S&&sa(me)===k.type)?(k=h(k,L.props),Ll(k,L),k.return=P,k):(k=qc(L.type,L.key,L.props,null,P.mode,K),Ll(k,L),k.return=P,k)}function z(P,k,L,K){return k===null||k.tag!==4||k.stateNode.containerInfo!==L.containerInfo||k.stateNode.implementation!==L.implementation?(k=Sd(L,P.mode,K),k.return=P,k):(k=h(k,L.children||[]),k.return=P,k)}function G(P,k,L,K,me){return k===null||k.tag!==7?(k=ea(L,P.mode,K,me),k.return=P,k):(k=h(k,L),k.return=P,k)}function Y(P,k,L){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=wd(""+k,P.mode,L),k.return=P,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case j:return L=qc(k.type,k.key,k.props,null,P.mode,L),Ll(L,k),L.return=P,L;case Q:return k=Sd(k,P.mode,L),k.return=P,k;case S:return k=sa(k),Y(P,k,L)}if(vt(k)||V(k))return k=ea(k,P.mode,L,null),k.return=P,k;if(typeof k.then=="function")return Y(P,$c(k),L);if(k.$$typeof===ue)return Y(P,Gc(P,k),L);Xc(P,k)}return null}function q(P,k,L,K){var me=k!==null?k.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return me!==null?null:b(P,k,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return L.key===me?x(P,k,L,K):null;case Q:return L.key===me?z(P,k,L,K):null;case S:return L=sa(L),q(P,k,L,K)}if(vt(L)||V(L))return me!==null?null:G(P,k,L,K,null);if(typeof L.then=="function")return q(P,k,$c(L),K);if(L.$$typeof===ue)return q(P,k,Gc(P,L),K);Xc(P,L)}return null}function F(P,k,L,K,me){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return P=P.get(L)||null,b(k,P,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return P=P.get(K.key===null?L:K.key)||null,x(k,P,K,me);case Q:return P=P.get(K.key===null?L:K.key)||null,z(k,P,K,me);case S:return K=sa(K),F(P,k,L,K,me)}if(vt(K)||V(K))return P=P.get(L)||null,G(k,P,K,me,null);if(typeof K.then=="function")return F(P,k,L,$c(K),me);if(K.$$typeof===ue)return F(P,k,L,Gc(k,K),me);Xc(k,K)}return null}function le(P,k,L,K){for(var me=null,je=null,fe=k,Ie=k=0,ke=null;fe!==null&&Ie<L.length;Ie++){fe.index>Ie?(ke=fe,fe=null):ke=fe.sibling;var Be=q(P,fe,L[Ie],K);if(Be===null){fe===null&&(fe=ke);break}n&&fe&&Be.alternate===null&&r(P,fe),k=d(Be,k,Ie),je===null?me=Be:je.sibling=Be,je=Be,fe=ke}if(Ie===L.length)return a(P,fe),Ve&&lr(P,Ie),me;if(fe===null){for(;Ie<L.length;Ie++)fe=Y(P,L[Ie],K),fe!==null&&(k=d(fe,k,Ie),je===null?me=fe:je.sibling=fe,je=fe);return Ve&&lr(P,Ie),me}for(fe=l(fe);Ie<L.length;Ie++)ke=F(fe,P,Ie,L[Ie],K),ke!==null&&(n&&ke.alternate!==null&&fe.delete(ke.key===null?Ie:ke.key),k=d(ke,k,Ie),je===null?me=ke:je.sibling=ke,je=ke);return n&&fe.forEach(function(ds){return r(P,ds)}),Ve&&lr(P,Ie),me}function ge(P,k,L,K){if(L==null)throw Error(s(151));for(var me=null,je=null,fe=k,Ie=k=0,ke=null,Be=L.next();fe!==null&&!Be.done;Ie++,Be=L.next()){fe.index>Ie?(ke=fe,fe=null):ke=fe.sibling;var ds=q(P,fe,Be.value,K);if(ds===null){fe===null&&(fe=ke);break}n&&fe&&ds.alternate===null&&r(P,fe),k=d(ds,k,Ie),je===null?me=ds:je.sibling=ds,je=ds,fe=ke}if(Be.done)return a(P,fe),Ve&&lr(P,Ie),me;if(fe===null){for(;!Be.done;Ie++,Be=L.next())Be=Y(P,Be.value,K),Be!==null&&(k=d(Be,k,Ie),je===null?me=Be:je.sibling=Be,je=Be);return Ve&&lr(P,Ie),me}for(fe=l(fe);!Be.done;Ie++,Be=L.next())Be=F(fe,P,Ie,Be.value,K),Be!==null&&(n&&Be.alternate!==null&&fe.delete(Be.key===null?Ie:Be.key),k=d(Be,k,Ie),je===null?me=Be:je.sibling=Be,je=Be);return n&&fe.forEach(function(iR){return r(P,iR)}),Ve&&lr(P,Ie),me}function et(P,k,L,K){if(typeof L=="object"&&L!==null&&L.type===Z&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case j:e:{for(var me=L.key;k!==null;){if(k.key===me){if(me=L.type,me===Z){if(k.tag===7){a(P,k.sibling),K=h(k,L.props.children),K.return=P,P=K;break e}}else if(k.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===S&&sa(me)===k.type){a(P,k.sibling),K=h(k,L.props),Ll(K,L),K.return=P,P=K;break e}a(P,k);break}else r(P,k);k=k.sibling}L.type===Z?(K=ea(L.props.children,P.mode,K,L.key),K.return=P,P=K):(K=qc(L.type,L.key,L.props,null,P.mode,K),Ll(K,L),K.return=P,P=K)}return _(P);case Q:e:{for(me=L.key;k!==null;){if(k.key===me)if(k.tag===4&&k.stateNode.containerInfo===L.containerInfo&&k.stateNode.implementation===L.implementation){a(P,k.sibling),K=h(k,L.children||[]),K.return=P,P=K;break e}else{a(P,k);break}else r(P,k);k=k.sibling}K=Sd(L,P.mode,K),K.return=P,P=K}return _(P);case S:return L=sa(L),et(P,k,L,K)}if(vt(L))return le(P,k,L,K);if(V(L)){if(me=V(L),typeof me!="function")throw Error(s(150));return L=me.call(L),ge(P,k,L,K)}if(typeof L.then=="function")return et(P,k,$c(L),K);if(L.$$typeof===ue)return et(P,k,Gc(P,L),K);Xc(P,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,k!==null&&k.tag===6?(a(P,k.sibling),K=h(k,L),K.return=P,P=K):(a(P,k),K=wd(L,P.mode,K),K.return=P,P=K),_(P)):a(P,k)}return function(P,k,L,K){try{Ul=0;var me=et(P,k,L,K);return ro=null,me}catch(fe){if(fe===io||fe===Qc)throw fe;var je=Dn(29,fe,null,P.mode);return je.lanes=K,je.return=P,je}finally{}}}var oa=u_(!0),c_=u_(!1),Xr=!1;function Ud(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ld(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Wr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Jr(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(He&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Bc(n),Qy(n,null,a),r}return jc(n,l,r,a),Bc(n)}function zl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,fl(n,a)}}function zd(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var jd=!1;function jl(){if(jd){var n=no;if(n!==null)throw n}}function Bl(n,r,a,l){jd=!1;var h=n.updateQueue;Xr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var x=b,z=x.next;x.next=null,_===null?d=z:_.next=z,_=x;var G=n.alternate;G!==null&&(G=G.updateQueue,b=G.lastBaseUpdate,b!==_&&(b===null?G.firstBaseUpdate=z:b.next=z,G.lastBaseUpdate=x))}if(d!==null){var Y=h.baseState;_=0,G=z=x=null,b=d;do{var q=b.lane&-536870913,F=q!==b.lane;if(F?(Oe&q)===q:(l&q)===q){q!==0&&q===to&&(jd=!0),G!==null&&(G=G.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var le=n,ge=b;q=r;var et=a;switch(ge.tag){case 1:if(le=ge.payload,typeof le=="function"){Y=le.call(et,Y,q);break e}Y=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ge.payload,q=typeof le=="function"?le.call(et,Y,q):le,q==null)break e;Y=T({},Y,q);break e;case 2:Xr=!0}}q=b.callback,q!==null&&(n.flags|=64,F&&(n.flags|=8192),F=h.callbacks,F===null?h.callbacks=[q]:F.push(q))}else F={lane:q,tag:b.tag,payload:b.payload,callback:b.callback,next:null},G===null?(z=G=F,x=Y):G=G.next=F,_|=q;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;F=b,b=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);G===null&&(x=Y),h.baseState=x,h.firstBaseUpdate=z,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),is|=_,n.lanes=_,n.memoizedState=Y}}function h_(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function f_(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)h_(a[n],r)}var so=M(null),Wc=M(0);function d_(n,r){n=vr,re(Wc,n),re(so,r),vr=n|r.baseLanes}function Bd(){re(Wc,vr),re(so,so.current)}function qd(){vr=Wc.current,X(so),X(Wc)}var On=M(null),Jn=null;function Zr(n){var r=n.alternate;re(bt,bt.current&1),re(On,n),Jn===null&&(r===null||so.current!==null||r.memoizedState!==null)&&(Jn=n)}function Hd(n){re(bt,bt.current),re(On,n),Jn===null&&(Jn=n)}function m_(n){n.tag===22?(re(bt,bt.current),re(On,n),Jn===null&&(Jn=n)):es()}function es(){re(bt,bt.current),re(On,On.current)}function kn(n){X(On),Jn===n&&(Jn=null),X(bt)}var bt=M(0);function Jc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$m(a)||Xm(a)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hr=0,Se=null,Je=null,Dt=null,Zc=!1,ao=!1,la=!1,eh=0,ql=0,oo=null,QS=0;function pt(){throw Error(s(321))}function Fd(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!xn(n[a],r[a]))return!1;return!0}function Gd(n,r,a,l,h,d){return hr=d,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=n===null||n.memoizedState===null?W_:am,la=!1,d=a(l,h),la=!1,ao&&(d=g_(r,a,l,h)),p_(n),d}function p_(n){B.H=Gl;var r=Je!==null&&Je.next!==null;if(hr=0,Dt=Je=Se=null,Zc=!1,ql=0,oo=null,r)throw Error(s(300));n===null||Ot||(n=n.dependencies,n!==null&&Fc(n)&&(Ot=!0))}function g_(n,r,a,l){Se=n;var h=0;do{if(ao&&(oo=null),ql=0,ao=!1,25<=h)throw Error(s(301));if(h+=1,Dt=Je=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=J_,d=r(a,l)}while(ao);return d}function YS(){var n=B.H,r=n.useState()[0];return r=typeof r.then=="function"?Hl(r):r,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Se.flags|=1024),r}function Kd(){var n=eh!==0;return eh=0,n}function Qd(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Yd(n){if(Zc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Zc=!1}hr=0,Dt=Je=Se=null,ao=!1,ql=eh=0,oo=null}function pn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?Se.memoizedState=Dt=n:Dt=Dt.next=n,Dt}function At(){if(Je===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var r=Dt===null?Se.memoizedState:Dt.next;if(r!==null)Dt=r,Je=n;else{if(n===null)throw Se.alternate===null?Error(s(467)):Error(s(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Dt===null?Se.memoizedState=Dt=n:Dt=Dt.next=n}return Dt}function th(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(n){var r=ql;return ql+=1,oo===null&&(oo=[]),n=a_(oo,n,r),r=Se,(Dt===null?r.memoizedState:Dt.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?W_:am),n}function nh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Hl(n);if(n.$$typeof===ue)return Zt(n)}throw Error(s(438,String(n)))}function $d(n){var r=null,a=Se.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=th(),Se.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=O;return r.index++,a}function fr(n,r){return typeof r=="function"?r(n):r}function ih(n){var r=At();return Xd(r,Je,n)}function Xd(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=n.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}r.baseQueue=h=d,l.pending=null}if(d=n.baseState,h===null)n.memoizedState=d;else{r=h.next;var b=_=null,x=null,z=r,G=!1;do{var Y=z.lane&-536870913;if(Y!==z.lane?(Oe&Y)===Y:(hr&Y)===Y){var q=z.revertLane;if(q===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Y===to&&(G=!0);else if((hr&q)===q){z=z.next,q===to&&(G=!0);continue}else Y={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=Y,_=d):x=x.next=Y,Se.lanes|=q,is|=q;Y=z.action,la&&a(d,Y),d=z.hasEagerState?z.eagerState:a(d,Y)}else q={lane:Y,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},x===null?(b=x=q,_=d):x=x.next=q,Se.lanes|=Y,is|=Y;z=z.next}while(z!==null&&z!==r);if(x===null?_=d:x.next=b,!xn(d,n.memoizedState)&&(Ot=!0,G&&(a=no,a!==null)))throw a;n.memoizedState=d,n.baseState=_,n.baseQueue=x,l.lastRenderedState=d}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Wd(n){var r=At(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=n(d,_.action),_=_.next;while(_!==h);xn(d,r.memoizedState)||(Ot=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function y_(n,r,a){var l=Se,h=At(),d=Ve;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!xn((Je||h).memoizedState,a);if(_&&(h.memoizedState=a,Ot=!0),h=h.queue,em(E_.bind(null,l,h,n),[n]),h.getSnapshot!==r||_||Dt!==null&&Dt.memoizedState.tag&1){if(l.flags|=2048,lo(9,{destroy:void 0},v_.bind(null,l,h,a,r),null),tt===null)throw Error(s(349));d||(hr&127)!==0||__(l,r,a)}return a}function __(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Se.updateQueue,r===null?(r=th(),Se.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function v_(n,r,a,l){r.value=a,r.getSnapshot=l,T_(r)&&b_(n)}function E_(n,r,a){return a(function(){T_(r)&&b_(n)})}function T_(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!xn(n,a)}catch{return!0}}function b_(n){var r=Zs(n,2);r!==null&&wn(r,n,2)}function Jd(n){var r=pn();if(typeof n=="function"){var a=n;if(n=a(),la){qn(!0);try{a()}finally{qn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:n},r}function A_(n,r,a,l){return n.baseState=a,Xd(n,Je,typeof l=="function"?l:fr)}function $S(n,r,a,l,h){if(ah(n))throw Error(s(485));if(n=r.action,n!==null){var d={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};B.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,w_(r,d)):(d.next=a.next,r.pending=a.next=d)}}function w_(n,r){var a=r.action,l=r.payload,h=n.state;if(r.isTransition){var d=B.T,_={};B.T=_;try{var b=a(h,l),x=B.S;x!==null&&x(_,b),S_(n,r,b)}catch(z){Zd(n,r,z)}finally{d!==null&&_.types!==null&&(d.types=_.types),B.T=d}}else try{d=a(h,l),S_(n,r,d)}catch(z){Zd(n,r,z)}}function S_(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){R_(n,r,l)},function(l){return Zd(n,r,l)}):R_(n,r,a)}function R_(n,r,a){r.status="fulfilled",r.value=a,I_(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,w_(n,a)))}function Zd(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,I_(r),r=r.next;while(r!==l)}n.action=null}function I_(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function C_(n,r){return r}function N_(n,r){if(Ve){var a=tt.formState;if(a!==null){e:{var l=Se;if(Ve){if(rt){t:{for(var h=rt,d=Wn;h.nodeType!==8;){if(!d){h=null;break t}if(h=Zn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){rt=Zn(h.nextSibling),l=h.data==="F!";break e}}Yr(l)}l=!1}l&&(r=a[0])}}return a=pn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:C_,lastRenderedState:r},a.queue=l,a=Y_.bind(null,Se,l),l.dispatch=a,l=Jd(!1),d=sm.bind(null,Se,!1,l.queue),l=pn(),h={state:r,dispatch:null,action:n,pending:null},l.queue=h,a=$S.bind(null,Se,h,d,a),h.dispatch=a,l.memoizedState=n,[r,a,!1]}function x_(n){var r=At();return D_(r,Je,n)}function D_(n,r,a){if(r=Xd(n,r,C_)[0],n=ih(fr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=Hl(r)}catch(_){throw _===io?Qc:_}else l=r;r=At();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(Se.flags|=2048,lo(9,{destroy:void 0},XS.bind(null,h,a),null)),[l,d,n]}function XS(n,r){n.action=r}function O_(n){var r=At(),a=Je;if(a!==null)return D_(r,a,n);At(),r=r.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function lo(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Se.updateQueue,r===null&&(r=th(),Se.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function k_(){return At().memoizedState}function rh(n,r,a,l){var h=pn();Se.flags|=n,h.memoizedState=lo(1|r,{destroy:void 0},a,l===void 0?null:l)}function sh(n,r,a,l){var h=At();l=l===void 0?null:l;var d=h.memoizedState.inst;Je!==null&&l!==null&&Fd(l,Je.memoizedState.deps)?h.memoizedState=lo(r,d,a,l):(Se.flags|=n,h.memoizedState=lo(1|r,d,a,l))}function M_(n,r){rh(8390656,8,n,r)}function em(n,r){sh(2048,8,n,r)}function WS(n){Se.flags|=4;var r=Se.updateQueue;if(r===null)r=th(),Se.updateQueue=r,r.events=[n];else{var a=r.events;a===null?r.events=[n]:a.push(n)}}function P_(n){var r=At().memoizedState;return WS({ref:r,nextImpl:n}),function(){if((He&2)!==0)throw Error(s(440));return r.impl.apply(void 0,arguments)}}function V_(n,r){return sh(4,2,n,r)}function U_(n,r){return sh(4,4,n,r)}function L_(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function z_(n,r,a){a=a!=null?a.concat([n]):null,sh(4,4,L_.bind(null,r,n),a)}function tm(){}function j_(n,r){var a=At();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Fd(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function B_(n,r){var a=At();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Fd(r,l[1]))return l[0];if(l=n(),la){qn(!0);try{n()}finally{qn(!1)}}return a.memoizedState=[l,r],l}function nm(n,r,a){return a===void 0||(hr&1073741824)!==0&&(Oe&261930)===0?n.memoizedState=r:(n.memoizedState=a,n=qv(),Se.lanes|=n,is|=n,a)}function q_(n,r,a,l){return xn(a,r)?a:so.current!==null?(n=nm(n,a,l),xn(n,r)||(Ot=!0),n):(hr&42)===0||(hr&1073741824)!==0&&(Oe&261930)===0?(Ot=!0,n.memoizedState=a):(n=qv(),Se.lanes|=n,is|=n,r)}function H_(n,r,a,l,h){var d=ne.p;ne.p=d!==0&&8>d?d:8;var _=B.T,b={};B.T=b,sm(n,!1,r,a);try{var x=h(),z=B.S;if(z!==null&&z(b,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var G=KS(x,l);Fl(n,r,G,Vn(n))}else Fl(n,r,l,Vn(n))}catch(Y){Fl(n,r,{then:function(){},status:"rejected",reason:Y},Vn())}finally{ne.p=d,_!==null&&b.types!==null&&(_.types=b.types),B.T=_}}function JS(){}function im(n,r,a,l){if(n.tag!==5)throw Error(s(476));var h=F_(n).queue;H_(n,h,r,he,a===null?JS:function(){return G_(n),a(l)})}function F_(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:he},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function G_(n){var r=F_(n);r.next===null&&(r=n.alternate.memoizedState),Fl(n,r.next.queue,{},Vn())}function rm(){return Zt(ou)}function K_(){return At().memoizedState}function Q_(){return At().memoizedState}function ZS(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=Vn();n=Wr(a);var l=Jr(r,n,a);l!==null&&(wn(l,r,a),zl(l,r,a)),r={cache:kd()},n.payload=r;return}r=r.return}}function e1(n,r,a){var l=Vn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ah(n)?$_(r,a):(a=bd(n,r,a,l),a!==null&&(wn(a,n,l),X_(a,r,l)))}function Y_(n,r,a){var l=Vn();Fl(n,r,a,l)}function Fl(n,r,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ah(n))$_(r,h);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,b=d(_,a);if(h.hasEagerState=!0,h.eagerState=b,xn(b,_))return jc(n,r,h,0),tt===null&&zc(),!1}catch{}finally{}if(a=bd(n,r,h,l),a!==null)return wn(a,n,l),X_(a,r,l),!0}return!1}function sm(n,r,a,l){if(l={lane:2,revertLane:Um(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ah(n)){if(r)throw Error(s(479))}else r=bd(n,a,l,2),r!==null&&wn(r,n,2)}function ah(n){var r=n.alternate;return n===Se||r!==null&&r===Se}function $_(n,r){ao=Zc=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function X_(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,fl(n,a)}}var Gl={readContext:Zt,use:nh,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Gl.useEffectEvent=pt;var W_={readContext:Zt,use:nh,useCallback:function(n,r){return pn().memoizedState=[n,r===void 0?null:r],n},useContext:Zt,useEffect:M_,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,rh(4194308,4,L_.bind(null,r,n),a)},useLayoutEffect:function(n,r){return rh(4194308,4,n,r)},useInsertionEffect:function(n,r){rh(4,2,n,r)},useMemo:function(n,r){var a=pn();r=r===void 0?null:r;var l=n();if(la){qn(!0);try{n()}finally{qn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=pn();if(a!==void 0){var h=a(r);if(la){qn(!0);try{a(r)}finally{qn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=e1.bind(null,Se,n),[l.memoizedState,n]},useRef:function(n){var r=pn();return n={current:n},r.memoizedState=n},useState:function(n){n=Jd(n);var r=n.queue,a=Y_.bind(null,Se,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:tm,useDeferredValue:function(n,r){var a=pn();return nm(a,n,r)},useTransition:function(){var n=Jd(!1);return n=H_.bind(null,Se,n.queue,!0,!1),pn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Se,h=pn();if(Ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),tt===null)throw Error(s(349));(Oe&127)!==0||__(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,M_(E_.bind(null,l,d,n),[n]),l.flags|=2048,lo(9,{destroy:void 0},v_.bind(null,l,d,a,r),null),a},useId:function(){var n=pn(),r=tt.identifierPrefix;if(Ve){var a=Bi,l=ji;a=(l&~(1<<32-Et(l)-1)).toString(32)+a,r="_"+r+"R_"+a,a=eh++,0<a&&(r+="H"+a.toString(32)),r+="_"}else a=QS++,r="_"+r+"r_"+a.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:rm,useFormState:N_,useActionState:N_,useOptimistic:function(n){var r=pn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=sm.bind(null,Se,!0,a),a.dispatch=r,[n,r]},useMemoCache:$d,useCacheRefresh:function(){return pn().memoizedState=ZS.bind(null,Se)},useEffectEvent:function(n){var r=pn(),a={impl:n};return r.memoizedState=a,function(){if((He&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},am={readContext:Zt,use:nh,useCallback:j_,useContext:Zt,useEffect:em,useImperativeHandle:z_,useInsertionEffect:V_,useLayoutEffect:U_,useMemo:B_,useReducer:ih,useRef:k_,useState:function(){return ih(fr)},useDebugValue:tm,useDeferredValue:function(n,r){var a=At();return q_(a,Je.memoizedState,n,r)},useTransition:function(){var n=ih(fr)[0],r=At().memoizedState;return[typeof n=="boolean"?n:Hl(n),r]},useSyncExternalStore:y_,useId:K_,useHostTransitionStatus:rm,useFormState:x_,useActionState:x_,useOptimistic:function(n,r){var a=At();return A_(a,Je,n,r)},useMemoCache:$d,useCacheRefresh:Q_};am.useEffectEvent=P_;var J_={readContext:Zt,use:nh,useCallback:j_,useContext:Zt,useEffect:em,useImperativeHandle:z_,useInsertionEffect:V_,useLayoutEffect:U_,useMemo:B_,useReducer:Wd,useRef:k_,useState:function(){return Wd(fr)},useDebugValue:tm,useDeferredValue:function(n,r){var a=At();return Je===null?nm(a,n,r):q_(a,Je.memoizedState,n,r)},useTransition:function(){var n=Wd(fr)[0],r=At().memoizedState;return[typeof n=="boolean"?n:Hl(n),r]},useSyncExternalStore:y_,useId:K_,useHostTransitionStatus:rm,useFormState:O_,useActionState:O_,useOptimistic:function(n,r){var a=At();return Je!==null?A_(a,Je,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:$d,useCacheRefresh:Q_};J_.useEffectEvent=P_;function om(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:T({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var lm={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=Vn(),h=Wr(l);h.payload=r,a!=null&&(h.callback=a),r=Jr(n,h,l),r!==null&&(wn(r,n,l),zl(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=Vn(),h=Wr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Jr(n,h,l),r!==null&&(wn(r,n,l),zl(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Vn(),l=Wr(a);l.tag=2,r!=null&&(l.callback=r),r=Jr(n,l,a),r!==null&&(wn(r,n,a),zl(r,n,a))}};function Z_(n,r,a,l,h,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!Dl(a,l)||!Dl(h,d):!0}function ev(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&lm.enqueueReplaceState(r,r.state,null)}function ua(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=T({},a));for(var h in n)a[h]===void 0&&(a[h]=n[h])}return a}function tv(n){Lc(n)}function nv(n){console.error(n)}function iv(n){Lc(n)}function oh(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function rv(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function um(n,r,a){return a=Wr(a),a.tag=3,a.payload={element:null},a.callback=function(){oh(n,r)},a}function sv(n){return n=Wr(n),n.tag=3,n}function av(n,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;n.payload=function(){return h(d)},n.callback=function(){rv(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){rv(r,a,l),typeof h!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function t1(n,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&eo(r,a,h,!0),a=On.current,a!==null){switch(a.tag){case 31:case 13:return Jn===null?vh():a.alternate===null&&gt===0&&(gt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Yc?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),Mm(n,l,h)),!1;case 22:return a.flags|=65536,l===Yc?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),Mm(n,l,h)),!1}throw Error(s(435,a.tag))}return Mm(n,l,h),vh(),!1}if(Ve)return r=On.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==Cd&&(n=Error(s(422),{cause:l}),Ml(Yn(n,a)))):(l!==Cd&&(r=Error(s(423),{cause:l}),Ml(Yn(r,a))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=Yn(l,a),h=um(n.stateNode,l,h),zd(n,h),gt!==4&&(gt=2)),!1;var d=Error(s(520),{cause:l});if(d=Yn(d,a),Zl===null?Zl=[d]:Zl.push(d),gt!==4&&(gt=2),r===null)return!0;l=Yn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=h&-h,a.lanes|=n,n=um(a.stateNode,l,n),zd(a,n),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(rs===null||!rs.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=sv(h),av(h,n,a,l),zd(a,h),!1}a=a.return}while(a!==null);return!1}var cm=Error(s(461)),Ot=!1;function en(n,r,a,l){r.child=n===null?c_(r,null,a,l):oa(r,n.child,a,l)}function ov(n,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var _={};for(var b in l)b!=="ref"&&(_[b]=l[b])}else _=l;return ia(r),l=Gd(n,r,a,_,d,h),b=Kd(),n!==null&&!Ot?(Qd(n,r,h),dr(n,r,h)):(Ve&&b&&Rd(r),r.flags|=1,en(n,r,l,h),r.child)}function lv(n,r,a,l,h){if(n===null){var d=a.type;return typeof d=="function"&&!Ad(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,uv(n,r,d,l,h)):(n=qc(a.type,null,l,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!_m(n,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Dl,a(_,l)&&n.ref===r.ref)return dr(n,r,h)}return r.flags|=1,n=or(d,l),n.ref=r.ref,n.return=r,r.child=n}function uv(n,r,a,l,h){if(n!==null){var d=n.memoizedProps;if(Dl(d,l)&&n.ref===r.ref)if(Ot=!1,r.pendingProps=l=d,_m(n,h))(n.flags&131072)!==0&&(Ot=!0);else return r.lanes=n.lanes,dr(n,r,h)}return hm(n,r,a,l,h)}function cv(n,r,a,l){var h=l.children,d=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((r.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,n!==null){for(l=r.child=n.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,r.child=null;return hv(n,r,d,a,l)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Kc(r,d!==null?d.cachePool:null),d!==null?d_(r,d):Bd(),m_(r);else return l=r.lanes=536870912,hv(n,r,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(Kc(r,d.cachePool),d_(r,d),es(),r.memoizedState=null):(n!==null&&Kc(r,null),Bd(),es());return en(n,r,h,a),r.child}function Kl(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function hv(n,r,a,l,h){var d=Pd();return d=d===null?null:{parent:xt._currentValue,pool:d},r.memoizedState={baseLanes:a,cachePool:d},n!==null&&Kc(r,null),Bd(),m_(r),n!==null&&eo(n,r,l,!0),r.childLanes=h,null}function lh(n,r){return r=ch({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function fv(n,r,a){return oa(r,n.child,null,a),n=lh(r,r.pendingProps),n.flags|=2,kn(r),r.memoizedState=null,n}function n1(n,r,a){var l=r.pendingProps,h=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Ve){if(l.mode==="hidden")return n=lh(r,l),r.lanes=536870912,Kl(null,n);if(Hd(r),(n=rt)?(n=wE(n,Wn),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Kr!==null?{id:ji,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=$y(n),a.return=r,r.child=a,Jt=r,rt=null)):n=null,n===null)throw Yr(r);return r.lanes=536870912,null}return lh(r,l)}var d=n.memoizedState;if(d!==null){var _=d.dehydrated;if(Hd(r),h)if(r.flags&256)r.flags&=-257,r=fv(n,r,a);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(s(558));else if(Ot||eo(n,r,a,!1),h=(a&n.childLanes)!==0,Ot||h){if(l=tt,l!==null&&(_=dl(l,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Zs(n,_),wn(l,n,_),cm;vh(),r=fv(n,r,a)}else n=d.treeContext,rt=Zn(_.nextSibling),Jt=r,Ve=!0,Qr=null,Wn=!1,n!==null&&Jy(r,n),r=lh(r,l),r.flags|=4096;return r}return n=or(n.child,{mode:l.mode,children:l.children}),n.ref=r.ref,r.child=n,n.return=r,n}function uh(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function hm(n,r,a,l,h){return ia(r),a=Gd(n,r,a,l,void 0,h),l=Kd(),n!==null&&!Ot?(Qd(n,r,h),dr(n,r,h)):(Ve&&l&&Rd(r),r.flags|=1,en(n,r,a,h),r.child)}function dv(n,r,a,l,h,d){return ia(r),r.updateQueue=null,a=g_(r,l,a,h),p_(n),l=Kd(),n!==null&&!Ot?(Qd(n,r,d),dr(n,r,d)):(Ve&&l&&Rd(r),r.flags|=1,en(n,r,a,d),r.child)}function mv(n,r,a,l,h){if(ia(r),r.stateNode===null){var d=Xa,_=a.contextType;typeof _=="object"&&_!==null&&(d=Zt(_)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=lm,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},Ud(r),_=a.contextType,d.context=typeof _=="object"&&_!==null?Zt(_):Xa,d.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(om(r,a,_,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&lm.enqueueReplaceState(d,d.state,null),Bl(r,l,d,h),jl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){d=r.stateNode;var b=r.memoizedProps,x=ua(a,b);d.props=x;var z=d.context,G=a.contextType;_=Xa,typeof G=="object"&&G!==null&&(_=Zt(G));var Y=a.getDerivedStateFromProps;G=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||z!==_)&&ev(r,d,l,_),Xr=!1;var q=r.memoizedState;d.state=q,Bl(r,l,d,h),jl(),z=r.memoizedState,b||q!==z||Xr?(typeof Y=="function"&&(om(r,a,Y,l),z=r.memoizedState),(x=Xr||Z_(r,a,x,l,q,z,_))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=z),d.props=l,d.state=z,d.context=_,l=x):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Ld(n,r),_=r.memoizedProps,G=ua(a,_),d.props=G,Y=r.pendingProps,q=d.context,z=a.contextType,x=Xa,typeof z=="object"&&z!==null&&(x=Zt(z)),b=a.getDerivedStateFromProps,(z=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Y||q!==x)&&ev(r,d,l,x),Xr=!1,q=r.memoizedState,d.state=q,Bl(r,l,d,h),jl();var F=r.memoizedState;_!==Y||q!==F||Xr||n!==null&&n.dependencies!==null&&Fc(n.dependencies)?(typeof b=="function"&&(om(r,a,b,l),F=r.memoizedState),(G=Xr||Z_(r,a,G,l,q,F,x)||n!==null&&n.dependencies!==null&&Fc(n.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,x),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,x)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=F),d.props=l,d.state=F,d.context=x,l=G):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),l=!1)}return d=l,uh(n,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&l?(r.child=oa(r,n.child,null,h),r.child=oa(r,null,a,h)):en(n,r,a,h),r.memoizedState=d.state,n=r.child):n=dr(n,r,h),n}function pv(n,r,a,l){return ta(),r.flags|=256,en(n,r,a,l),r.child}var fm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dm(n){return{baseLanes:n,cachePool:r_()}}function mm(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=Pn),n}function gv(n,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(bt.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ve){if(h?Zr(r):es(),(n=rt)?(n=wE(n,Wn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Kr!==null?{id:ji,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=$y(n),a.return=r,r.child=a,Jt=r,rt=null)):n=null,n===null)throw Yr(r);return Xm(n)?r.lanes=32:r.lanes=536870912,null}var b=l.children;return l=l.fallback,h?(es(),h=r.mode,b=ch({mode:"hidden",children:b},h),l=ea(l,h,a,null),b.return=r,l.return=r,b.sibling=l,r.child=b,l=r.child,l.memoizedState=dm(a),l.childLanes=mm(n,_,a),r.memoizedState=fm,Kl(null,l)):(Zr(r),pm(r,b))}var x=n.memoizedState;if(x!==null&&(b=x.dehydrated,b!==null)){if(d)r.flags&256?(Zr(r),r.flags&=-257,r=gm(n,r,a)):r.memoizedState!==null?(es(),r.child=n.child,r.flags|=128,r=null):(es(),b=l.fallback,h=r.mode,l=ch({mode:"visible",children:l.children},h),b=ea(b,h,a,null),b.flags|=2,l.return=r,b.return=r,l.sibling=b,r.child=l,oa(r,n.child,null,a),l=r.child,l.memoizedState=dm(a),l.childLanes=mm(n,_,a),r.memoizedState=fm,r=Kl(null,l));else if(Zr(r),Xm(b)){if(_=b.nextSibling&&b.nextSibling.dataset,_)var z=_.dgst;_=z,l=Error(s(419)),l.stack="",l.digest=_,Ml({value:l,source:null,stack:null}),r=gm(n,r,a)}else if(Ot||eo(n,r,a,!1),_=(a&n.childLanes)!==0,Ot||_){if(_=tt,_!==null&&(l=dl(_,a),l!==0&&l!==x.retryLane))throw x.retryLane=l,Zs(n,l),wn(_,n,l),cm;$m(b)||vh(),r=gm(n,r,a)}else $m(b)?(r.flags|=192,r.child=n.child,r=null):(n=x.treeContext,rt=Zn(b.nextSibling),Jt=r,Ve=!0,Qr=null,Wn=!1,n!==null&&Jy(r,n),r=pm(r,l.children),r.flags|=4096);return r}return h?(es(),b=l.fallback,h=r.mode,x=n.child,z=x.sibling,l=or(x,{mode:"hidden",children:l.children}),l.subtreeFlags=x.subtreeFlags&65011712,z!==null?b=or(z,b):(b=ea(b,h,a,null),b.flags|=2),b.return=r,l.return=r,l.sibling=b,r.child=l,Kl(null,l),l=r.child,b=n.child.memoizedState,b===null?b=dm(a):(h=b.cachePool,h!==null?(x=xt._currentValue,h=h.parent!==x?{parent:x,pool:x}:h):h=r_(),b={baseLanes:b.baseLanes|a,cachePool:h}),l.memoizedState=b,l.childLanes=mm(n,_,a),r.memoizedState=fm,Kl(n.child,l)):(Zr(r),a=n.child,n=a.sibling,a=or(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(_=r.deletions,_===null?(r.deletions=[n],r.flags|=16):_.push(n)),r.child=a,r.memoizedState=null,a)}function pm(n,r){return r=ch({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ch(n,r){return n=Dn(22,n,null,r),n.lanes=0,n}function gm(n,r,a){return oa(r,n.child,null,a),n=pm(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function yv(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),Dd(n.return,r,a)}function ym(n,r,a,l,h,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=l,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function _v(n,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var _=bt.current,b=(_&2)!==0;if(b?(_=_&1|2,r.flags|=128):_&=1,re(bt,_),en(n,r,l,a),l=Ve?kl:0,!b&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yv(n,a,r);else if(n.tag===19)yv(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&Jc(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),ym(r,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&Jc(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}ym(r,!0,a,null,d,l);break;case"together":ym(r,!1,null,null,void 0,l);break;default:r.memoizedState=null}return r.child}function dr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),is|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(eo(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=or(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=or(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function _m(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Fc(n)))}function i1(n,r,a){switch(r.tag){case 3:zt(r,r.stateNode.containerInfo),$r(r,xt,n.memoizedState.cache),ta();break;case 27:case 5:Ps(r);break;case 4:zt(r,r.stateNode.containerInfo);break;case 10:$r(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Hd(r),null;break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Zr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?gv(n,r,a):(Zr(r),n=dr(n,r,a),n!==null?n.sibling:null);Zr(r);break;case 19:var h=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(eo(n,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return _v(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),re(bt,bt.current),l)break;return null;case 22:return r.lanes=0,cv(n,r,a,r.pendingProps);case 24:$r(r,xt,n.memoizedState.cache)}return dr(n,r,a)}function vv(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ot=!0;else{if(!_m(n,a)&&(r.flags&128)===0)return Ot=!1,i1(n,r,a);Ot=(n.flags&131072)!==0}else Ot=!1,Ve&&(r.flags&1048576)!==0&&Wy(r,kl,r.index);switch(r.lanes=0,r.tag){case 16:e:{var l=r.pendingProps;if(n=sa(r.elementType),r.type=n,typeof n=="function")Ad(n)?(l=ua(n,l),r.tag=1,r=mv(null,r,n,l,a)):(r.tag=0,r=hm(null,r,n,l,a));else{if(n!=null){var h=n.$$typeof;if(h===ye){r.tag=11,r=ov(null,r,n,l,a);break e}else if(h===I){r.tag=14,r=lv(null,r,n,l,a);break e}}throw r=nt(n)||n,Error(s(306,r,""))}}return r;case 0:return hm(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=ua(l,r.pendingProps),mv(n,r,l,h,a);case 3:e:{if(zt(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,Ld(n,r),Bl(r,l,null,a);var _=r.memoizedState;if(l=_.cache,$r(r,xt,l),l!==d.cache&&Od(r,[xt],a,!0),jl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=pv(n,r,l,a);break e}else if(l!==h){h=Yn(Error(s(424)),r),Ml(h),r=pv(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rt=Zn(n.firstChild),Jt=r,Ve=!0,Qr=null,Wn=!0,a=c_(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ta(),l===h){r=dr(n,r,a);break e}en(n,r,l,a)}r=r.child}return r;case 26:return uh(n,r),n===null?(a=xE(r.type,null,r.pendingProps,null))?r.memoizedState=a:Ve||(a=r.type,n=r.pendingProps,l=Rh(Re.current).createElement(a),l[It]=r,l[Gt]=n,tn(l,a,n),Ct(l),r.stateNode=l):r.memoizedState=xE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Ps(r),n===null&&Ve&&(l=r.stateNode=IE(r.type,r.pendingProps,Re.current),Jt=r,Wn=!0,h=rt,ls(r.type)?(Wm=h,rt=Zn(l.firstChild)):rt=h),en(n,r,r.pendingProps.children,a),uh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ve&&((h=l=rt)&&(l=k1(l,r.type,r.pendingProps,Wn),l!==null?(r.stateNode=l,Jt=r,rt=Zn(l.firstChild),Wn=!1,h=!0):h=!1),h||Yr(r)),Ps(r),h=r.type,d=r.pendingProps,_=n!==null?n.memoizedProps:null,l=d.children,Km(h,d)?l=null:_!==null&&Km(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=Gd(n,r,YS,null,null,a),ou._currentValue=h),uh(n,r),en(n,r,l,a),r.child;case 6:return n===null&&Ve&&((n=a=rt)&&(a=M1(a,r.pendingProps,Wn),a!==null?(r.stateNode=a,Jt=r,rt=null,n=!0):n=!1),n||Yr(r)),null;case 13:return gv(n,r,a);case 4:return zt(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=oa(r,null,l,a):en(n,r,l,a),r.child;case 11:return ov(n,r,r.type,r.pendingProps,a);case 7:return en(n,r,r.pendingProps,a),r.child;case 8:return en(n,r,r.pendingProps.children,a),r.child;case 12:return en(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,$r(r,r.type,l.value),en(n,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,ia(r),h=Zt(h),l=l(h),r.flags|=1,en(n,r,l,a),r.child;case 14:return lv(n,r,r.type,r.pendingProps,a);case 15:return uv(n,r,r.type,r.pendingProps,a);case 19:return _v(n,r,a);case 31:return n1(n,r,a);case 22:return cv(n,r,a,r.pendingProps);case 24:return ia(r),l=Zt(xt),n===null?(h=Pd(),h===null&&(h=tt,d=kd(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},Ud(r),$r(r,xt,h)):((n.lanes&a)!==0&&(Ld(n,r),Bl(r,null,null,a),jl()),h=n.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),$r(r,xt,l)):(l=d.cache,$r(r,xt,l),l!==h.cache&&Od(r,[xt],a,!0))),en(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function mr(n){n.flags|=4}function vm(n,r,a,l,h){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(h&335544128)===h)if(n.stateNode.complete)n.flags|=8192;else if(Kv())n.flags|=8192;else throw aa=Yc,Vd}else n.flags&=-16777217}function Ev(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!PE(r))if(Kv())n.flags|=8192;else throw aa=Yc,Vd}function hh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?yc():536870912,n.lanes|=r,fo|=r)}function Ql(n,r){if(!Ve)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function st(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function r1(n,r,a){var l=r.pendingProps;switch(Id(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(r),null;case 1:return st(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),cr(xt),ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Za(r)?mr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Nd())),st(r),null;case 26:var h=r.type,d=r.memoizedState;return n===null?(mr(r),d!==null?(st(r),Ev(r,d)):(st(r),vm(r,h,null,l,a))):d?d!==n.memoizedState?(mr(r),st(r),Ev(r,d)):(st(r),r.flags&=-16777217):(n=n.memoizedProps,n!==l&&mr(r),st(r),vm(r,h,n,l,a)),null;case 27:if(Da(r),a=Re.current,h=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&mr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return st(r),null}n=oe.current,Za(r)?Zy(r):(n=IE(h,l,a),r.stateNode=n,mr(r))}return st(r),null;case 5:if(Da(r),h=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&mr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return st(r),null}if(d=oe.current,Za(r))Zy(r);else{var _=Rh(Re.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?_.createElement("select",{is:l.is}):_.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?_.createElement(h,{is:l.is}):_.createElement(h)}}d[It]=r,d[Gt]=l;e:for(_=r.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===r)break e;for(;_.sibling===null;){if(_.return===null||_.return===r)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}r.stateNode=d;e:switch(tn(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&mr(r)}}return st(r),vm(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,a),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&mr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=Re.current,Za(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,h=Jt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[It]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gE(n.nodeValue,a)),n||Yr(r,!0)}else n=Rh(n).createTextNode(l),n[It]=r,r.stateNode=n}return st(r),null;case 31:if(a=r.memoizedState,n===null||n.memoizedState!==null){if(l=Za(r),a!==null){if(n===null){if(!l)throw Error(s(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(557));n[It]=r}else ta(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),n=!1}else a=Nd(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return r.flags&256?(kn(r),r):(kn(r),null);if((r.flags&128)!==0)throw Error(s(558))}return st(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Za(r),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[It]=r}else ta(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;st(r),h=!1}else h=Nd(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(kn(r),r):(kn(r),null)}return kn(r),(r.flags&128)!==0?(r.lanes=a,r):(a=l!==null,n=n!==null&&n.memoizedState!==null,a&&(l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==n&&a&&(r.child.flags|=8192),hh(r,r.updateQueue),st(r),null);case 4:return ut(),n===null&&Bm(r.stateNode.containerInfo),st(r),null;case 10:return cr(r.type),st(r),null;case 19:if(X(bt),l=r.memoizedState,l===null)return st(r),null;if(h=(r.flags&128)!==0,d=l.rendering,d===null)if(h)Ql(l,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=Jc(n),d!==null){for(r.flags|=128,Ql(l,!1),n=d.updateQueue,r.updateQueue=n,hh(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)Yy(a,n),a=a.sibling;return re(bt,bt.current&1|2),Ve&&lr(r,l.treeForkCount),r.child}n=n.sibling}l.tail!==null&&dn()>gh&&(r.flags|=128,h=!0,Ql(l,!1),r.lanes=4194304)}else{if(!h)if(n=Jc(d),n!==null){if(r.flags|=128,h=!0,n=n.updateQueue,r.updateQueue=n,hh(r,n),Ql(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ve)return st(r),null}else 2*dn()-l.renderingStartTime>gh&&a!==536870912&&(r.flags|=128,h=!0,Ql(l,!1),r.lanes=4194304);l.isBackwards?(d.sibling=r.child,r.child=d):(n=l.last,n!==null?n.sibling=d:r.child=d,l.last=d)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=dn(),n.sibling=null,a=bt.current,re(bt,h?a&1|2:a&1),Ve&&lr(r,l.treeForkCount),n):(st(r),null);case 22:case 23:return kn(r),qd(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(st(r),r.subtreeFlags&6&&(r.flags|=8192)):st(r),a=r.updateQueue,a!==null&&hh(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&X(ra),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),cr(xt),st(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function s1(n,r){switch(Id(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return cr(xt),ut(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Da(r),null;case 31:if(r.memoizedState!==null){if(kn(r),r.alternate===null)throw Error(s(340));ta()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(kn(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));ta()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return X(bt),null;case 4:return ut(),null;case 10:return cr(r.type),null;case 22:case 23:return kn(r),qd(),n!==null&&X(ra),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return cr(xt),null;case 25:return null;default:return null}}function Tv(n,r){switch(Id(r),r.tag){case 3:cr(xt),ut();break;case 26:case 27:case 5:Da(r);break;case 4:ut();break;case 31:r.memoizedState!==null&&kn(r);break;case 13:kn(r);break;case 19:X(bt);break;case 10:cr(r.type);break;case 22:case 23:kn(r),qd(),n!==null&&X(ra);break;case 24:cr(xt)}}function Yl(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&n)===n){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(b){Xe(r,r.return,b)}}function ts(n,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&n)===n){var _=l.inst,b=_.destroy;if(b!==void 0){_.destroy=void 0,h=r;var x=a,z=b;try{z()}catch(G){Xe(h,x,G)}}}l=l.next}while(l!==d)}}catch(G){Xe(r,r.return,G)}}function bv(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{f_(r,a)}catch(l){Xe(n,n.return,l)}}}function Av(n,r,a){a.props=ua(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){Xe(n,r,l)}}function $l(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(h){Xe(n,r,h)}}function qi(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Xe(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xe(n,r,h)}else a.current=null}function wv(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Xe(n,n.return,h)}}function Em(n,r,a){try{var l=n.stateNode;I1(l,n.type,a,r),l[Gt]=r}catch(h){Xe(n,n.return,h)}}function Sv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ls(n.type)||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ls(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bm(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=li));else if(l!==4&&(l===27&&ls(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(bm(n,r,a),n=n.sibling;n!==null;)bm(n,r,a),n=n.sibling}function fh(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&ls(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(fh(n,r,a),n=n.sibling;n!==null;)fh(n,r,a),n=n.sibling}function Rv(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);tn(r,l,a),r[It]=n,r[Gt]=a}catch(d){Xe(n,n.return,d)}}var pr=!1,kt=!1,Am=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function a1(n,r){if(n=n.containerInfo,Fm=kh,n=zy(n),gd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,b=-1,x=-1,z=0,G=0,Y=n,q=null;t:for(;;){for(var F;Y!==a||h!==0&&Y.nodeType!==3||(b=_+h),Y!==d||l!==0&&Y.nodeType!==3||(x=_+l),Y.nodeType===3&&(_+=Y.nodeValue.length),(F=Y.firstChild)!==null;)q=Y,Y=F;for(;;){if(Y===n)break t;if(q===a&&++z===h&&(b=_),q===d&&++G===l&&(x=_),(F=Y.nextSibling)!==null)break;Y=q,q=Y.parentNode}Y=F}a=b===-1||x===-1?null:{start:b,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gm={focusedElem:n,selectionRange:a},kh=!1,Qt=r;Qt!==null;)if(r=Qt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Qt=n;else for(;Qt!==null;){switch(r=Qt,d=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(a=0;a<n.length;a++)h=n[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var le=ua(a.type,h);n=l.getSnapshotBeforeUpdate(le,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Xe(a,a.return,ge)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)Ym(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ym(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,Qt=n;break}Qt=r.return}}function Cv(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:yr(n,a),l&4&&Yl(5,a);break;case 1:if(yr(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(_){Xe(a,a.return,_)}else{var h=ua(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(_){Xe(a,a.return,_)}}l&64&&bv(a),l&512&&$l(a,a.return);break;case 3:if(yr(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{f_(n,r)}catch(_){Xe(a,a.return,_)}}break;case 27:r===null&&l&4&&Rv(a);case 26:case 5:yr(n,a),r===null&&l&4&&wv(a),l&512&&$l(a,a.return);break;case 12:yr(n,a);break;case 31:yr(n,a),l&4&&Dv(n,a);break;case 13:yr(n,a),l&4&&Ov(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=p1.bind(null,a),P1(n,a))));break;case 22:if(l=a.memoizedState!==null||pr,!l){r=r!==null&&r.memoizedState!==null||kt,h=pr;var d=kt;pr=l,(kt=r)&&!d?_r(n,a,(a.subtreeFlags&8772)!==0):yr(n,a),pr=h,kt=d}break;case 30:break;default:yr(n,a)}}function Nv(n){var r=n.alternate;r!==null&&(n.alternate=null,Nv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Va(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ht=null,En=!1;function gr(n,r,a){for(a=a.child;a!==null;)xv(n,r,a),a=a.sibling}function xv(n,r,a){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(ri,a)}catch{}switch(a.tag){case 26:kt||qi(a,r),gr(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:kt||qi(a,r);var l=ht,h=En;ls(a.type)&&(ht=a.stateNode,En=!1),gr(n,r,a),ru(a.stateNode),ht=l,En=h;break;case 5:kt||qi(a,r);case 6:if(l=ht,h=En,ht=null,gr(n,r,a),ht=l,En=h,ht!==null)if(En)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(a.stateNode)}catch(d){Xe(a,r,d)}else try{ht.removeChild(a.stateNode)}catch(d){Xe(a,r,d)}break;case 18:ht!==null&&(En?(n=ht,bE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),To(n)):bE(ht,a.stateNode));break;case 4:l=ht,h=En,ht=a.stateNode.containerInfo,En=!0,gr(n,r,a),ht=l,En=h;break;case 0:case 11:case 14:case 15:ts(2,a,r),kt||ts(4,a,r),gr(n,r,a);break;case 1:kt||(qi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Av(a,r,l)),gr(n,r,a);break;case 21:gr(n,r,a);break;case 22:kt=(l=kt)||a.memoizedState!==null,gr(n,r,a),kt=l;break;default:gr(n,r,a)}}function Dv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{To(n)}catch(a){Xe(r,r.return,a)}}}function Ov(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{To(n)}catch(a){Xe(r,r.return,a)}}function o1(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Iv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Iv),r;default:throw Error(s(435,n.tag))}}function dh(n,r){var a=o1(n);r.forEach(function(l){if(!a.has(l)){a.add(l);var h=g1.bind(null,n,l);l.then(h,h)}})}function Tn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=n,_=r,b=_;e:for(;b!==null;){switch(b.tag){case 27:if(ls(b.type)){ht=b.stateNode,En=!1;break e}break;case 5:ht=b.stateNode,En=!1;break e;case 3:case 4:ht=b.stateNode.containerInfo,En=!0;break e}b=b.return}if(ht===null)throw Error(s(160));xv(d,_,h),ht=null,En=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)kv(r,n),r=r.sibling}var mi=null;function kv(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Tn(r,n),bn(n),l&4&&(ts(3,n,n.return),Yl(3,n),ts(5,n,n.return));break;case 1:Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),l&64&&pr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=mi;if(Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Ci]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),tn(d,l,a),d[It]=n,Ct(d),l=d;break e;case"link":var _=kE("link","href",h).get(l+(a.href||""));if(_){for(var b=0;b<_.length;b++)if(d=_[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(b,1);break t}}d=h.createElement(l),tn(d,l,a),h.head.appendChild(d);break;case"meta":if(_=kE("meta","content",h).get(l+(a.content||""))){for(b=0;b<_.length;b++)if(d=_[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(b,1);break t}}d=h.createElement(l),tn(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[It]=n,Ct(d),l=d}n.stateNode=l}else ME(h,n.type,n.stateNode);else n.stateNode=OE(h,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?ME(h,n.type,n.stateNode):OE(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&Em(n,n.memoizedProps,a.memoizedProps)}break;case 27:Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),a!==null&&l&4&&Em(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Tn(r,n),bn(n),l&512&&(kt||a===null||qi(a,a.return)),n.flags&32){h=n.stateNode;try{vn(h,"")}catch(le){Xe(n,n.return,le)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,Em(n,h,a!==null?a.memoizedProps:h)),l&1024&&(Am=!0);break;case 6:if(Tn(r,n),bn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(le){Xe(n,n.return,le)}}break;case 3:if(Nh=null,h=mi,mi=Ih(r.containerInfo),Tn(r,n),mi=h,bn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{To(r.containerInfo)}catch(le){Xe(n,n.return,le)}Am&&(Am=!1,Mv(n));break;case 4:l=mi,mi=Ih(n.stateNode.containerInfo),Tn(r,n),bn(n),mi=l;break;case 12:Tn(r,n),bn(n);break;case 31:Tn(r,n),bn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,dh(n,l)));break;case 13:Tn(r,n),bn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ph=dn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,dh(n,l)));break;case 22:h=n.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,z=pr,G=kt;if(pr=z||h,kt=G||x,Tn(r,n),kt=G,pr=z,bn(n),l&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||x||pr||kt||ca(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){x=a=r;try{if(d=x.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{b=x.stateNode;var Y=x.memoizedProps.style,q=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;b.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(le){Xe(x,x.return,le)}}}else if(r.tag===6){if(a===null){x=r;try{x.stateNode.nodeValue=h?"":x.memoizedProps}catch(le){Xe(x,x.return,le)}}}else if(r.tag===18){if(a===null){x=r;try{var F=x.stateNode;h?AE(F,!0):AE(x.stateNode,!1)}catch(le){Xe(x,x.return,le)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,dh(n,a))));break;case 19:Tn(r,n),bn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,dh(n,l)));break;case 30:break;case 21:break;default:Tn(r,n),bn(n)}}function bn(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(Sv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Tm(n);fh(n,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(vn(_,""),a.flags&=-33);var b=Tm(n);fh(n,b,_);break;case 3:case 4:var x=a.stateNode.containerInfo,z=Tm(n);bm(n,z,x);break;default:throw Error(s(161))}}catch(G){Xe(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Mv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Mv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function yr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Cv(n,r.alternate,r),r=r.sibling}function ca(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:ts(4,r,r.return),ca(r);break;case 1:qi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Av(r,r.return,a),ca(r);break;case 27:ru(r.stateNode);case 26:case 5:qi(r,r.return),ca(r);break;case 22:r.memoizedState===null&&ca(r);break;case 30:ca(r);break;default:ca(r)}n=n.sibling}}function _r(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=n,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:_r(h,d,a),Yl(4,d);break;case 1:if(_r(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Xe(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var b=l.stateNode;try{var x=h.shared.hiddenCallbacks;if(x!==null)for(h.shared.hiddenCallbacks=null,h=0;h<x.length;h++)h_(x[h],b)}catch(z){Xe(l,l.return,z)}}a&&_&64&&bv(d),$l(d,d.return);break;case 27:Rv(d);case 26:case 5:_r(h,d,a),a&&l===null&&_&4&&wv(d),$l(d,d.return);break;case 12:_r(h,d,a);break;case 31:_r(h,d,a),a&&_&4&&Dv(h,d);break;case 13:_r(h,d,a),a&&_&4&&Ov(h,d);break;case 22:d.memoizedState===null&&_r(h,d,a),$l(d,d.return);break;case 30:break;default:_r(h,d,a)}r=r.sibling}}function wm(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Pl(a))}function Sm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Pl(n))}function pi(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Pv(n,r,a,l),r=r.sibling}function Pv(n,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:pi(n,r,a,l),h&2048&&Yl(9,r);break;case 1:pi(n,r,a,l);break;case 3:pi(n,r,a,l),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Pl(n)));break;case 12:if(h&2048){pi(n,r,a,l),n=r.stateNode;try{var d=r.memoizedProps,_=d.id,b=d.onPostCommit;typeof b=="function"&&b(_,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(x){Xe(r,r.return,x)}}else pi(n,r,a,l);break;case 31:pi(n,r,a,l);break;case 13:pi(n,r,a,l);break;case 23:break;case 22:d=r.stateNode,_=r.alternate,r.memoizedState!==null?d._visibility&2?pi(n,r,a,l):Xl(n,r):d._visibility&2?pi(n,r,a,l):(d._visibility|=2,uo(n,r,a,l,(r.subtreeFlags&10256)!==0||!1)),h&2048&&wm(_,r);break;case 24:pi(n,r,a,l),h&2048&&Sm(r.alternate,r);break;default:pi(n,r,a,l)}}function uo(n,r,a,l,h){for(h=h&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var d=n,_=r,b=a,x=l,z=_.flags;switch(_.tag){case 0:case 11:case 15:uo(d,_,b,x,h),Yl(8,_);break;case 23:break;case 22:var G=_.stateNode;_.memoizedState!==null?G._visibility&2?uo(d,_,b,x,h):Xl(d,_):(G._visibility|=2,uo(d,_,b,x,h)),h&&z&2048&&wm(_.alternate,_);break;case 24:uo(d,_,b,x,h),h&&z&2048&&Sm(_.alternate,_);break;default:uo(d,_,b,x,h)}r=r.sibling}}function Xl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,h=l.flags;switch(l.tag){case 22:Xl(a,l),h&2048&&wm(l.alternate,l);break;case 24:Xl(a,l),h&2048&&Sm(l.alternate,l);break;default:Xl(a,l)}r=r.sibling}}var Wl=8192;function co(n,r,a){if(n.subtreeFlags&Wl)for(n=n.child;n!==null;)Vv(n,r,a),n=n.sibling}function Vv(n,r,a){switch(n.tag){case 26:co(n,r,a),n.flags&Wl&&n.memoizedState!==null&&Q1(a,mi,n.memoizedState,n.memoizedProps);break;case 5:co(n,r,a);break;case 3:case 4:var l=mi;mi=Ih(n.stateNode.containerInfo),co(n,r,a),mi=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=Wl,Wl=16777216,co(n,r,a),Wl=l):co(n,r,a));break;default:co(n,r,a)}}function Uv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Jl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Qt=l,zv(l,n)}Uv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Lv(n),n=n.sibling}function Lv(n){switch(n.tag){case 0:case 11:case 15:Jl(n),n.flags&2048&&ts(9,n,n.return);break;case 3:Jl(n);break;case 12:Jl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,mh(n)):Jl(n);break;default:Jl(n)}}function mh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Qt=l,zv(l,n)}Uv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:ts(8,r,r.return),mh(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,mh(r));break;default:mh(r)}n=n.sibling}}function zv(n,r){for(;Qt!==null;){var a=Qt;switch(a.tag){case 0:case 11:case 15:ts(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Pl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qt=l;else e:for(a=n;Qt!==null;){l=Qt;var h=l.sibling,d=l.return;if(Nv(l),l===a){Qt=null;break e}if(h!==null){h.return=d,Qt=h;break e}Qt=d}}}var l1={getCacheForType:function(n){var r=Zt(xt),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a},cacheSignal:function(){return Zt(xt).controller.signal}},u1=typeof WeakMap=="function"?WeakMap:Map,He=0,tt=null,Ne=null,Oe=0,$e=0,Mn=null,ns=!1,ho=!1,Rm=!1,vr=0,gt=0,is=0,ha=0,Im=0,Pn=0,fo=0,Zl=null,An=null,Cm=!1,ph=0,jv=0,gh=1/0,yh=null,rs=null,Bt=0,ss=null,mo=null,Er=0,Nm=0,xm=null,Bv=null,eu=0,Dm=null;function Vn(){return(He&2)!==0&&Oe!==0?Oe&-Oe:B.T!==null?Um():_c()}function qv(){if(Pn===0)if((Oe&536870912)===0||Ve){var n=Ls;Ls<<=1,(Ls&3932160)===0&&(Ls=262144),Pn=n}else Pn=536870912;return n=On.current,n!==null&&(n.flags|=32),Pn}function wn(n,r,a){(n===tt&&($e===2||$e===9)||n.cancelPendingCommit!==null)&&(po(n,0),as(n,Oe,Pn,!1)),zs(n,a),((He&2)===0||n!==tt)&&(n===tt&&((He&2)===0&&(ha|=a),gt===4&&as(n,Oe,Pn,!1)),Hi(n))}function Hv(n,r,a){if((He&6)!==0)throw Error(s(327));var l=!a&&(r&127)===0&&(r&n.expiredLanes)===0||si(n,r),h=l?f1(n,r):km(n,r,!0),d=l;do{if(h===0){ho&&!l&&as(n,r,0,!1);break}else{if(a=n.current.alternate,d&&!c1(a)){h=km(n,r,!1),d=!1;continue}if(h===2){if(d=r,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var b=n;h=Zl;var x=b.current.memoizedState.isDehydrated;if(x&&(po(b,_).flags|=256),_=km(b,_,!1),_!==2){if(Rm&&!x){b.errorRecoveryDisabledLanes|=d,ha|=d,h=4;break e}d=An,An=h,d!==null&&(An===null?An=d:An.push.apply(An,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){po(n,0),as(n,r,0,!0);break}e:{switch(l=n,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:as(l,r,Pn,!ns);break e;case 2:An=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=ph+300-dn(),10<h)){if(as(l,r,Pn,!ns),Si(l,0,!0)!==0)break e;Er=r,l.timeoutHandle=EE(Fv.bind(null,l,a,An,yh,Cm,r,Pn,ha,fo,ns,d,"Throttled",-0,0),h);break e}Fv(l,a,An,yh,Cm,r,Pn,ha,fo,ns,d,null,-0,0)}}break}while(!0);Hi(n)}function Fv(n,r,a,l,h,d,_,b,x,z,G,Y,q,F){if(n.timeoutHandle=-1,Y=r.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:li},Vv(r,d,Y);var le=(d&62914560)===d?ph-dn():(d&4194048)===d?jv-dn():0;if(le=Y1(Y,le),le!==null){Er=d,n.cancelPendingCommit=le(Jv.bind(null,n,r,d,a,l,h,_,b,x,G,Y,null,q,F)),as(n,d,_,!z);return}}Jv(n,r,d,a,l,h,_,b,x)}function c1(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!xn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function as(n,r,a,l){r&=~Im,r&=~ha,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var h=r;0<h;){var d=31-Et(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&js(n,a,r)}function _h(){return(He&6)===0?(tu(0),!1):!0}function Om(){if(Ne!==null){if($e===0)var n=Ne.return;else n=Ne,ur=na=null,Yd(n),ro=null,Ul=0,n=Ne;for(;n!==null;)Tv(n.alternate,n),n=n.return;Ne=null}}function po(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,x1(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Er=0,Om(),tt=n,Ne=a=or(n.current,null),Oe=r,$e=0,Mn=null,ns=!1,ho=si(n,r),Rm=!1,fo=Pn=Im=ha=is=gt=0,An=Zl=null,Cm=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var h=31-Et(l),d=1<<h;r|=n[h],l&=~d}return vr=r,zc(),a}function Gv(n,r){Se=null,B.H=Gl,r===io||r===Qc?(r=o_(),$e=3):r===Vd?(r=o_(),$e=4):$e=r===cm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Mn=r,Ne===null&&(gt=1,oh(n,Yn(r,n.current)))}function Kv(){var n=On.current;return n===null?!0:(Oe&4194048)===Oe?Jn===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?n===Jn:!1}function Qv(){var n=B.H;return B.H=Gl,n===null?Gl:n}function Yv(){var n=B.A;return B.A=l1,n}function vh(){gt=4,ns||(Oe&4194048)!==Oe&&On.current!==null||(ho=!0),(is&134217727)===0&&(ha&134217727)===0||tt===null||as(tt,Oe,Pn,!1)}function km(n,r,a){var l=He;He|=2;var h=Qv(),d=Yv();(tt!==n||Oe!==r)&&(yh=null,po(n,r)),r=!1;var _=gt;e:do try{if($e!==0&&Ne!==null){var b=Ne,x=Mn;switch($e){case 8:Om(),_=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(r=!0);var z=$e;if($e=0,Mn=null,go(n,b,x,z),a&&ho){_=0;break e}break;default:z=$e,$e=0,Mn=null,go(n,b,x,z)}}h1(),_=gt;break}catch(G){Gv(n,G)}while(!0);return r&&n.shellSuspendCounter++,ur=na=null,He=l,B.H=h,B.A=d,Ne===null&&(tt=null,Oe=0,zc()),_}function h1(){for(;Ne!==null;)$v(Ne)}function f1(n,r){var a=He;He|=2;var l=Qv(),h=Yv();tt!==n||Oe!==r?(yh=null,gh=dn()+500,po(n,r)):ho=si(n,r);e:do try{if($e!==0&&Ne!==null){r=Ne;var d=Mn;t:switch($e){case 1:$e=0,Mn=null,go(n,r,d,1);break;case 2:case 9:if(s_(d)){$e=0,Mn=null,Xv(r);break}r=function(){$e!==2&&$e!==9||tt!==n||($e=7),Hi(n)},d.then(r,r);break e;case 3:$e=7;break e;case 4:$e=5;break e;case 7:s_(d)?($e=0,Mn=null,Xv(r)):($e=0,Mn=null,go(n,r,d,7));break;case 5:var _=null;switch(Ne.tag){case 26:_=Ne.memoizedState;case 5:case 27:var b=Ne;if(_?PE(_):b.stateNode.complete){$e=0,Mn=null;var x=b.sibling;if(x!==null)Ne=x;else{var z=b.return;z!==null?(Ne=z,Eh(z)):Ne=null}break t}}$e=0,Mn=null,go(n,r,d,5);break;case 6:$e=0,Mn=null,go(n,r,d,6);break;case 8:Om(),gt=6;break e;default:throw Error(s(462))}}d1();break}catch(G){Gv(n,G)}while(!0);return ur=na=null,B.H=l,B.A=h,He=a,Ne!==null?0:(tt=null,Oe=0,zc(),gt)}function d1(){for(;Ne!==null&&!ud();)$v(Ne)}function $v(n){var r=vv(n.alternate,n,vr);n.memoizedProps=n.pendingProps,r===null?Eh(n):Ne=r}function Xv(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=dv(a,r,r.pendingProps,r.type,void 0,Oe);break;case 11:r=dv(a,r,r.pendingProps,r.type.render,r.ref,Oe);break;case 5:Yd(r);default:Tv(a,r),r=Ne=Yy(r,vr),r=vv(a,r,vr)}n.memoizedProps=n.pendingProps,r===null?Eh(n):Ne=r}function go(n,r,a,l){ur=na=null,Yd(r),ro=null,Ul=0;var h=r.return;try{if(t1(n,h,r,a,Oe)){gt=1,oh(n,Yn(a,n.current)),Ne=null;return}}catch(d){if(h!==null)throw Ne=h,d;gt=1,oh(n,Yn(a,n.current)),Ne=null;return}r.flags&32768?(Ve||l===1?n=!0:ho||(Oe&536870912)!==0?n=!1:(ns=n=!0,(l===2||l===9||l===3||l===6)&&(l=On.current,l!==null&&l.tag===13&&(l.flags|=16384))),Wv(r,n)):Eh(r)}function Eh(n){var r=n;do{if((r.flags&32768)!==0){Wv(r,ns);return}n=r.return;var a=r1(r.alternate,r,vr);if(a!==null){Ne=a;return}if(r=r.sibling,r!==null){Ne=r;return}Ne=r=n}while(r!==null);gt===0&&(gt=5)}function Wv(n,r){do{var a=s1(n.alternate,n);if(a!==null){a.flags&=32767,Ne=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){Ne=n;return}Ne=n=a}while(n!==null);gt=6,Ne=null}function Jv(n,r,a,l,h,d,_,b,x){n.cancelPendingCommit=null;do Th();while(Bt!==0);if((He&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Td,fd(n,a,d,_,b,x),n===tt&&(Ne=tt=null,Oe=0),mo=r,ss=n,Er=a,Nm=d,xm=h,Bv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,y1(Vr,function(){return iE(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=ne.p,ne.p=2,_=He,He|=4;try{a1(n,r,a)}finally{He=_,ne.p=h,B.T=l}}Bt=1,Zv(),eE(),tE()}}function Zv(){if(Bt===1){Bt=0;var n=ss,r=mo,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var l=ne.p;ne.p=2;var h=He;He|=4;try{kv(r,n);var d=Gm,_=zy(n.containerInfo),b=d.focusedElem,x=d.selectionRange;if(_!==b&&b&&b.ownerDocument&&Ly(b.ownerDocument.documentElement,b)){if(x!==null&&gd(b)){var z=x.start,G=x.end;if(G===void 0&&(G=z),"selectionStart"in b)b.selectionStart=z,b.selectionEnd=Math.min(G,b.value.length);else{var Y=b.ownerDocument||document,q=Y&&Y.defaultView||window;if(q.getSelection){var F=q.getSelection(),le=b.textContent.length,ge=Math.min(x.start,le),et=x.end===void 0?ge:Math.min(x.end,le);!F.extend&&ge>et&&(_=et,et=ge,ge=_);var P=Uy(b,ge),k=Uy(b,et);if(P&&k&&(F.rangeCount!==1||F.anchorNode!==P.node||F.anchorOffset!==P.offset||F.focusNode!==k.node||F.focusOffset!==k.offset)){var L=Y.createRange();L.setStart(P.node,P.offset),F.removeAllRanges(),ge>et?(F.addRange(L),F.extend(k.node,k.offset)):(L.setEnd(k.node,k.offset),F.addRange(L))}}}}for(Y=[],F=b;F=F.parentNode;)F.nodeType===1&&Y.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Y.length;b++){var K=Y[b];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}kh=!!Fm,Gm=Fm=null}finally{He=h,ne.p=l,B.T=a}}n.current=r,Bt=2}}function eE(){if(Bt===2){Bt=0;var n=ss,r=mo,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var l=ne.p;ne.p=2;var h=He;He|=4;try{Cv(n,r.alternate,r)}finally{He=h,ne.p=l,B.T=a}}Bt=3}}function tE(){if(Bt===4||Bt===3){Bt=0,hc();var n=ss,r=mo,a=Er,l=Bv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Bt=5:(Bt=0,mo=ss=null,nE(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(rs=null),ir(a),r=r.stateNode,Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(ri,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=B.T,h=ne.p,ne.p=2,B.T=null;try{for(var d=n.onRecoverableError,_=0;_<l.length;_++){var b=l[_];d(b.value,{componentStack:b.stack})}}finally{B.T=r,ne.p=h}}(Er&3)!==0&&Th(),Hi(n),h=n.pendingLanes,(a&261930)!==0&&(h&42)!==0?n===Dm?eu++:(eu=0,Dm=n):eu=0,tu(0)}}function nE(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Pl(r)))}function Th(){return Zv(),eE(),tE(),iE()}function iE(){if(Bt!==5)return!1;var n=ss,r=Nm;Nm=0;var a=ir(Er),l=B.T,h=ne.p;try{ne.p=32>a?32:a,B.T=null,a=xm,xm=null;var d=ss,_=Er;if(Bt=0,mo=ss=null,Er=0,(He&6)!==0)throw Error(s(331));var b=He;if(He|=4,Lv(d.current),Pv(d,d.current,_,a),He=b,tu(0,!1),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(ri,d)}catch{}return!0}finally{ne.p=h,B.T=l,nE(n,r)}}function rE(n,r,a){r=Yn(a,r),r=um(n.stateNode,r,2),n=Jr(n,r,2),n!==null&&(zs(n,2),Hi(n))}function Xe(n,r,a){if(n.tag===3)rE(n,n,a);else for(;r!==null;){if(r.tag===3){rE(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rs===null||!rs.has(l))){n=Yn(a,n),a=sv(2),l=Jr(r,a,2),l!==null&&(av(a,l,r,n),zs(l,2),Hi(l));break}}r=r.return}}function Mm(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new u1;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(Rm=!0,h.add(a),n=m1.bind(null,n,r,a),r.then(n,n))}function m1(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,tt===n&&(Oe&a)===a&&(gt===4||gt===3&&(Oe&62914560)===Oe&&300>dn()-ph?(He&2)===0&&po(n,0):Im|=a,fo===Oe&&(fo=0)),Hi(n)}function sE(n,r){r===0&&(r=yc()),n=Zs(n,r),n!==null&&(zs(n,r),Hi(n))}function p1(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),sE(n,a)}function g1(n,r){var a=0;switch(n.tag){case 31:case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),sE(n,a)}function y1(n,r){return jt(n,r)}var bh=null,yo=null,Pm=!1,Ah=!1,Vm=!1,os=0;function Hi(n){n!==yo&&n.next===null&&(yo===null?bh=yo=n:yo=yo.next=n),Ah=!0,Pm||(Pm=!0,v1())}function tu(n,r){if(!Vm&&Ah){Vm=!0;do for(var a=!1,l=bh;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,b=l.pingedLanes;d=(1<<31-Et(42|n)+1)-1,d&=h&~(_&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,uE(l,d))}else d=Oe,d=Si(l,l===tt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||si(l,d)||(a=!0,uE(l,d));l=l.next}while(a);Vm=!1}}function _1(){aE()}function aE(){Ah=Pm=!1;var n=0;os!==0&&N1()&&(n=os);for(var r=dn(),a=null,l=bh;l!==null;){var h=l.next,d=oE(l,r);d===0?(l.next=null,a===null?bh=h:a.next=h,h===null&&(yo=a)):(a=l,(n!==0||(d&3)!==0)&&(Ah=!0)),l=h}Bt!==0&&Bt!==5||tu(n),os!==0&&(os=0)}function oE(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-Et(d),b=1<<_,x=h[_];x===-1?((b&a)===0||(b&l)!==0)&&(h[_]=hd(b,r)):x<=r&&(n.expiredLanes|=b),d&=~b}if(r=tt,a=Oe,a=Si(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&($e===2||$e===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Pr(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||si(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&Pr(l),ir(a)){case 2:case 8:a=hl;break;case 32:a=Vr;break;case 268435456:a=fc;break;default:a=Vr}return l=lE.bind(null,n),a=jt(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&Pr(l),n.callbackPriority=2,n.callbackNode=null,2}function lE(n,r){if(Bt!==0&&Bt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Th()&&n.callbackNode!==a)return null;var l=Oe;return l=Si(n,n===tt?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Hv(n,l,r),oE(n,dn()),n.callbackNode!=null&&n.callbackNode===a?lE.bind(null,n):null)}function uE(n,r){if(Th())return null;Hv(n,r,!0)}function v1(){D1(function(){(He&6)!==0?jt(cl,_1):aE()})}function Um(){if(os===0){var n=to;n===0&&(n=Ai,Ai<<=1,(Ai&261888)===0&&(Ai=256)),os=n}return os}function cE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ja(""+n)}function hE(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function E1(n,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=cE((h[Gt]||null).action),_=l.submitter;_&&(r=(r=_[Gt]||null)?cE(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var b=new Vi("action","action",null,l,h);n.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(os!==0){var x=_?hE(h,_):new FormData(h);im(a,{pending:!0,data:x,method:h.method,action:d},null,x)}}else typeof d=="function"&&(b.preventDefault(),x=_?hE(h,_):new FormData(h),im(a,{pending:!0,data:x,method:h.method,action:d},d,x))},currentTarget:h}]})}}for(var Lm=0;Lm<Ed.length;Lm++){var zm=Ed[Lm],T1=zm.toLowerCase(),b1=zm[0].toUpperCase()+zm.slice(1);di(T1,"on"+b1)}di(qy,"onAnimationEnd"),di(Hy,"onAnimationIteration"),di(Fy,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(LS,"onTransitionRun"),di(zS,"onTransitionStart"),di(jS,"onTransitionCancel"),di(Gy,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),Di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Di("onBeforeInput",["compositionend","keypress","textInput","paste"]),Di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nu));function fE(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var b=l[_],x=b.instance,z=b.currentTarget;if(b=b.listener,x!==d&&h.isPropagationStopped())break e;d=b,h.currentTarget=z;try{d(h)}catch(G){Lc(G)}h.currentTarget=null,d=x}else for(_=0;_<l.length;_++){if(b=l[_],x=b.instance,z=b.currentTarget,b=b.listener,x!==d&&h.isPropagationStopped())break e;d=b,h.currentTarget=z;try{d(h)}catch(G){Lc(G)}h.currentTarget=null,d=x}}}}function xe(n,r){var a=r[Pa];a===void 0&&(a=r[Pa]=new Set);var l=n+"__bubble";a.has(l)||(dE(r,n,2,!1),a.add(l))}function jm(n,r,a){var l=0;r&&(l|=4),dE(a,n,l,r)}var wh="_reactListening"+Math.random().toString(36).slice(2);function Bm(n){if(!n[wh]){n[wh]=!0,ml.forEach(function(a){a!=="selectionchange"&&(A1.has(a)||jm(a,!1,n),jm(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[wh]||(r[wh]=!0,jm("selectionchange",!1,r))}}function dE(n,r,a,l){switch(qE(r)){case 2:var h=W1;break;case 8:h=J1;break;default:h=np}a=h.bind(null,r,a,n),h=void 0,!Gs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function qm(n,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var b=l.stateNode.containerInfo;if(b===h)break;if(_===4)for(_=l.return;_!==null;){var x=_.tag;if((x===3||x===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;b!==null;){if(_=Ni(b),_===null)return;if(x=_.tag,x===5||x===6||x===26||x===27){l=d=_;continue e}b=b.parentNode}}l=l.return}qr(function(){var z=d,G=Fn(a),Y=[];e:{var q=Ky.get(n);if(q!==void 0){var F=Vi,le=n;switch(n){case"keypress":if(Qs(a)===0)break e;case"keydown":case"keyup":F=Pc;break;case"focusin":le="focus",F=$s;break;case"focusout":le="blur",F=$s;break;case"beforeblur":case"afterblur":F=$s;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Il;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=Rc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=g;break;case qy:case Hy:case Fy:F=Cc;break;case Gy:F=A;break;case"scroll":case"scrollend":F=Rl;break;case"wheel":F=H;break;case"copy":case"cut":case"paste":F=Nc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ar;break;case"toggle":case"beforetoggle":F=we}var ge=(r&4)!==0,et=!ge&&(n==="scroll"||n==="scrollend"),P=ge?q!==null?q+"Capture":null:q;ge=[];for(var k=z,L;k!==null;){var K=k;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||P===null||(K=ui(k,P),K!=null&&ge.push(iu(k,K,L))),et)break;k=k.return}0<ge.length&&(q=new F(q,le,null,a,G),Y.push({event:q,listeners:ge}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",q&&a!==Al&&(le=a.relatedTarget||a.fromElement)&&(Ni(le)||le[Ii]))break e;if((F||q)&&(q=G.window===G?G:(q=G.ownerDocument)?q.defaultView||q.parentWindow:window,F?(le=a.relatedTarget||a.toElement,F=z,le=le?Ni(le):null,le!==null&&(et=u(le),ge=le.tag,le!==et||ge!==5&&ge!==27&&ge!==6)&&(le=null)):(F=null,le=z),F!==le)){if(ge=Il,K="onMouseLeave",P="onMouseEnter",k="mouse",(n==="pointerout"||n==="pointerover")&&(ge=ar,K="onPointerLeave",P="onPointerEnter",k="pointer"),et=F==null?q:Cn(F),L=le==null?q:Cn(le),q=new ge(K,k+"leave",F,a,G),q.target=et,q.relatedTarget=L,K=null,Ni(G)===z&&(ge=new ge(P,k+"enter",le,a,G),ge.target=L,ge.relatedTarget=et,K=ge),et=K,F&&le)t:{for(ge=w1,P=F,k=le,L=0,K=P;K;K=ge(K))L++;K=0;for(var me=k;me;me=ge(me))K++;for(;0<L-K;)P=ge(P),L--;for(;0<K-L;)k=ge(k),K--;for(;L--;){if(P===k||k!==null&&P===k.alternate){ge=P;break t}P=ge(P),k=ge(k)}ge=null}else ge=null;F!==null&&mE(Y,q,F,ge,!1),le!==null&&et!==null&&mE(Y,et,le,ge,!0)}}e:{if(q=z?Cn(z):window,F=q.nodeName&&q.nodeName.toLowerCase(),F==="select"||F==="input"&&q.type==="file")var je=Dy;else if(Ny(q))if(Oy)je=PS;else{je=kS;var fe=OS}else F=q.nodeName,!F||F.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?z&&za(z.elementType)&&(je=Dy):je=MS;if(je&&(je=je(n,z))){xy(Y,je,a,G);break e}fe&&fe(n,q,z),n==="focusout"&&z&&q.type==="number"&&z.memoizedProps.value!=null&&El(q,"number",q.value)}switch(fe=z?Cn(z):window,n){case"focusin":(Ny(fe)||fe.contentEditable==="true")&&(Qa=fe,yd=z,Ol=null);break;case"focusout":Ol=yd=Qa=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,jy(Y,a,G);break;case"selectionchange":if(US)break;case"keydown":case"keyup":jy(Y,a,G)}var Ie;if(qe)e:{switch(n){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Ka?Xs(n,a)&&(ke="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ke="onCompositionStart");ke&&(zi&&a.locale!=="ko"&&(Ka||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Ka&&(Ie=Sl()):(Pi=G,wl="value"in Pi?Pi.value:Pi.textContent,Ka=!0)),fe=Sh(z,ke),0<fe.length&&(ke=new Li(ke,n,null,a,G),Y.push({event:ke,listeners:fe}),Ie?ke.data=Ie:(Ie=Ga(a),Ie!==null&&(ke.data=Ie)))),(Ie=Kn?CS(n,a):NS(n,a))&&(ke=Sh(z,"onBeforeInput"),0<ke.length&&(fe=new Li("onBeforeInput","beforeinput",null,a,G),Y.push({event:fe,listeners:ke}),fe.data=Ie)),E1(Y,n,z,a,G)}fE(Y,r)})}function iu(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Sh(n,r){for(var a=r+"Capture",l=[];n!==null;){var h=n,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ui(n,a),h!=null&&l.unshift(iu(n,h,d)),h=ui(n,r),h!=null&&l.push(iu(n,h,d))),n.tag===3)return l;n=n.return}return[]}function w1(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function mE(n,r,a,l,h){for(var d=r._reactName,_=[];a!==null&&a!==l;){var b=a,x=b.alternate,z=b.stateNode;if(b=b.tag,x!==null&&x===l)break;b!==5&&b!==26&&b!==27||z===null||(x=z,h?(z=ui(a,d),z!=null&&_.unshift(iu(a,z,x))):h||(z=ui(a,d),z!=null&&_.push(iu(a,z,x)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var S1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function pE(n){return(typeof n=="string"?n:""+n).replace(S1,`
`).replace(R1,"")}function gE(n,r){return r=pE(r),pE(n)===r}function Ze(n,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||vn(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&vn(n,""+l);break;case"className":Nn(n,"class",l);break;case"tabIndex":Nn(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(n,a,l);break;case"style":bl(n,l,d);break;case"data":if(r!=="object"){Nn(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ja(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Ze(n,r,"name",h.name,h,null),Ze(n,r,"formEncType",h.formEncType,h,null),Ze(n,r,"formMethod",h.formMethod,h,null),Ze(n,r,"formTarget",h.formTarget,h,null)):(Ze(n,r,"encType",h.encType,h,null),Ze(n,r,"method",h.method,h,null),Ze(n,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ja(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=li);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=ja(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":xe("beforetoggle",n),xe("toggle",n),Ua(n,"popover",l);break;case"xlinkActuate":Nt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ua(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Sc.get(a)||a,Ua(n,a,l))}}function Hm(n,r,a,l,h,d){switch(a){case"style":bl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?vn(n,l):(typeof l=="number"||typeof l=="bigint")&&vn(n,""+l);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"onClick":l!=null&&(n.onclick=li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=n[Gt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,h);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Ua(n,a,l)}}}function tn(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ze(n,r,d,_,a,null)}}h&&Ze(n,r,"srcSet",a.srcSet,a,null),l&&Ze(n,r,"src",a.src,a,null);return;case"input":xe("invalid",n);var b=d=_=h=null,x=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":_=G;break;case"checked":x=G;break;case"defaultChecked":z=G;break;case"value":d=G;break;case"defaultValue":b=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,r));break;default:Ze(n,r,l,G,a,null)}}bc(n,d,b,x,z,_,h,!1);return;case"select":xe("invalid",n),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(b=a[h],b!=null))switch(h){case"value":d=b;break;case"defaultValue":_=b;break;case"multiple":l=b;default:Ze(n,r,h,b,a,null)}r=d,a=_,n.multiple=!!l,r!=null?Lr(n,!!l,r,!1):a!=null&&Lr(n,!!l,a,!0);return;case"textarea":xe("invalid",n),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(b=a[_],b!=null))switch(_){case"value":l=b;break;case"defaultValue":h=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ze(n,r,_,b,a,null)}zr(n,l,h,d);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(l=a[x],l!=null))switch(x){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ze(n,r,x,l,a,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(l=0;l<nu.length;l++)xe(nu[l],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Ze(n,r,z,l,a,null)}return;default:if(za(r)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&Hm(n,r,G,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&Ze(n,r,b,l,a,null))}function I1(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,b=null,x=null,z=null,G=null;for(F in a){var Y=a[F];if(a.hasOwnProperty(F)&&Y!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":x=Y;default:l.hasOwnProperty(F)||Ze(n,r,F,null,l,Y)}}for(var q in l){var F=l[q];if(Y=a[q],l.hasOwnProperty(q)&&(F!=null||Y!=null))switch(q){case"type":d=F;break;case"name":h=F;break;case"checked":z=F;break;case"defaultChecked":G=F;break;case"value":_=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==Y&&Ze(n,r,q,F,l,Y)}}La(n,_,b,x,z,G,d,h);return;case"select":F=_=b=q=null;for(d in a)if(x=a[d],a.hasOwnProperty(d)&&x!=null)switch(d){case"value":break;case"multiple":F=x;default:l.hasOwnProperty(d)||Ze(n,r,d,null,l,x)}for(h in l)if(d=l[h],x=a[h],l.hasOwnProperty(h)&&(d!=null||x!=null))switch(h){case"value":q=d;break;case"defaultValue":b=d;break;case"multiple":_=d;default:d!==x&&Ze(n,r,h,d,l,x)}r=b,a=_,l=F,q!=null?Lr(n,!!a,q,!1):!!l!=!!a&&(r!=null?Lr(n,!!a,r,!0):Lr(n,!!a,a?[]:"",!1));return;case"textarea":F=q=null;for(b in a)if(h=a[b],a.hasOwnProperty(b)&&h!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ze(n,r,b,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":q=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Ze(n,r,_,h,l,d)}Ac(n,q,F);return;case"option":for(var le in a)if(q=a[le],a.hasOwnProperty(le)&&q!=null&&!l.hasOwnProperty(le))switch(le){case"selected":n.selected=!1;break;default:Ze(n,r,le,null,l,q)}for(x in l)if(q=l[x],F=a[x],l.hasOwnProperty(x)&&q!==F&&(q!=null||F!=null))switch(x){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ze(n,r,x,q,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)q=a[ge],a.hasOwnProperty(ge)&&q!=null&&!l.hasOwnProperty(ge)&&Ze(n,r,ge,null,l,q);for(z in l)if(q=l[z],F=a[z],l.hasOwnProperty(z)&&q!==F&&(q!=null||F!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:Ze(n,r,z,q,l,F)}return;default:if(za(r)){for(var et in a)q=a[et],a.hasOwnProperty(et)&&q!==void 0&&!l.hasOwnProperty(et)&&Hm(n,r,et,void 0,l,q);for(G in l)q=l[G],F=a[G],!l.hasOwnProperty(G)||q===F||q===void 0&&F===void 0||Hm(n,r,G,q,l,F);return}}for(var P in a)q=a[P],a.hasOwnProperty(P)&&q!=null&&!l.hasOwnProperty(P)&&Ze(n,r,P,null,l,q);for(Y in l)q=l[Y],F=a[Y],!l.hasOwnProperty(Y)||q===F||q==null&&F==null||Ze(n,r,Y,q,l,F)}function yE(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function C1(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,_=h.initiatorType,b=h.duration;if(d&&b&&yE(_)){for(_=0,b=h.responseEnd,l+=1;l<a.length;l++){var x=a[l],z=x.startTime;if(z>b)break;var G=x.transferSize,Y=x.initiatorType;G&&yE(Y)&&(x=x.responseEnd,_+=G*(x<b?1:(b-z)/(x-z)))}if(--l,r+=8*(d+_)/(h.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Fm=null,Gm=null;function Rh(n){return n.nodeType===9?n:n.ownerDocument}function _E(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Km(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qm=null;function N1(){var n=window.event;return n&&n.type==="popstate"?n===Qm?!1:(Qm=n,!0):(Qm=null,!1)}var EE=typeof setTimeout=="function"?setTimeout:void 0,x1=typeof clearTimeout=="function"?clearTimeout:void 0,TE=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof TE<"u"?function(n){return TE.resolve(null).then(n).catch(O1)}:EE;function O1(n){setTimeout(function(){throw n})}function ls(n){return n==="head"}function bE(n,r){var a=r,l=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){n.removeChild(h),To(r);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")ru(n.ownerDocument.documentElement);else if(a==="head"){a=n.ownerDocument.head,ru(a);for(var d=a.firstChild;d;){var _=d.nextSibling,b=d.nodeName;d[Ci]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&ru(n.ownerDocument.body);a=h}while(a);To(r)}function AE(n,r){var a=n;n=0;do{var l=a.nextSibling;if(a.nodeType===1?r?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(r?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(n===0)break;n--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||n++;a=l}while(a)}function Ym(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ym(a),Va(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function k1(n,r,a,l){for(;n.nodeType===1;){var h=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Ci])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=Zn(n.nextSibling),n===null)break}return null}function M1(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Zn(n.nextSibling),n===null))return null;return n}function wE(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Zn(n.nextSibling),n===null))return null;return n}function $m(n){return n.data==="$?"||n.data==="$~"}function Xm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function P1(n,r){var a=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||a.readyState!=="loading")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function Zn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var Wm=null;function SE(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"||a==="/&"){if(r===0)return Zn(n.nextSibling);r--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||r++}n=n.nextSibling}return null}function RE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(r===0)return n;r--}else a!=="/$"&&a!=="/&"||r++}n=n.previousSibling}return null}function IE(n,r,a){switch(r=Rh(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ru(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Va(n)}var ei=new Map,CE=new Set;function Ih(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Tr=ne.d;ne.d={f:V1,r:U1,D:L1,C:z1,L:j1,m:B1,X:H1,S:q1,M:F1};function V1(){var n=Tr.f(),r=_h();return n||r}function U1(n){var r=Hn(n);r!==null&&r.tag===5&&r.type==="form"?G_(r):Tr.r(n)}var _o=typeof document>"u"?null:document;function NE(n,r,a){var l=_o;if(l&&typeof r=="string"&&r){var h=_n(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),CE.has(h)||(CE.add(h),n={rel:n,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),tn(r,"link",n),Ct(r),l.head.appendChild(r)))}}function L1(n){Tr.D(n),NE("dns-prefetch",n,null)}function z1(n,r){Tr.C(n,r),NE("preconnect",n,r)}function j1(n,r,a){Tr.L(n,r,a);var l=_o;if(l&&n&&r){var h='link[rel="preload"][as="'+_n(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+_n(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+_n(a.imageSizes)+'"]')):h+='[href="'+_n(n)+'"]';var d=h;switch(r){case"style":d=vo(n);break;case"script":d=Eo(n)}ei.has(d)||(n=T({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),ei.set(d,n),l.querySelector(h)!==null||r==="style"&&l.querySelector(su(d))||r==="script"&&l.querySelector(au(d))||(r=l.createElement("link"),tn(r,"link",n),Ct(r),l.head.appendChild(r)))}}function B1(n,r){Tr.m(n,r);var a=_o;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+_n(l)+'"][href="'+_n(n)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Eo(n)}if(!ei.has(d)&&(n=T({rel:"modulepreload",href:n},r),ei.set(d,n),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(au(d)))return}l=a.createElement("link"),tn(l,"link",n),Ct(l),a.head.appendChild(l)}}}function q1(n,r,a){Tr.S(n,r,a);var l=_o;if(l&&n){var h=xi(l).hoistableStyles,d=vo(n);r=r||"default";var _=h.get(d);if(!_){var b={loading:0,preload:null};if(_=l.querySelector(su(d)))b.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":r},a),(a=ei.get(d))&&Jm(n,a);var x=_=l.createElement("link");Ct(x),tn(x,"link",n),x._p=new Promise(function(z,G){x.onload=z,x.onerror=G}),x.addEventListener("load",function(){b.loading|=1}),x.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ch(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:b},h.set(d,_)}}}function H1(n,r){Tr.X(n,r);var a=_o;if(a&&n){var l=xi(a).hoistableScripts,h=Eo(n),d=l.get(h);d||(d=a.querySelector(au(h)),d||(n=T({src:n,async:!0},r),(r=ei.get(h))&&Zm(n,r),d=a.createElement("script"),Ct(d),tn(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function F1(n,r){Tr.M(n,r);var a=_o;if(a&&n){var l=xi(a).hoistableScripts,h=Eo(n),d=l.get(h);d||(d=a.querySelector(au(h)),d||(n=T({src:n,async:!0,type:"module"},r),(r=ei.get(h))&&Zm(n,r),d=a.createElement("script"),Ct(d),tn(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function xE(n,r,a,l){var h=(h=Re.current)?Ih(h):null;if(!h)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=vo(a.href),a=xi(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=vo(a.href);var d=xi(h).hoistableStyles,_=d.get(n);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=h.querySelector(su(n)))&&!d._p&&(_.instance=d,_.state.loading=5),ei.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(n,a),d||G1(h,n,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Eo(a),a=xi(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function vo(n){return'href="'+_n(n)+'"'}function su(n){return'link[rel="stylesheet"]['+n+"]"}function DE(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function G1(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),tn(r,"link",a),Ct(r),n.head.appendChild(r))}function Eo(n){return'[src="'+_n(n)+'"]'}function au(n){return"script[async]"+n}function OE(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+_n(a.href)+'"]');if(l)return r.instance=l,Ct(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Ct(l),tn(l,"style",h),Ch(l,a.precedence,n),r.instance=l;case"stylesheet":h=vo(a.href);var d=n.querySelector(su(h));if(d)return r.state.loading|=4,r.instance=d,Ct(d),d;l=DE(a),(h=ei.get(h))&&Jm(l,h),d=(n.ownerDocument||n).createElement("link"),Ct(d);var _=d;return _._p=new Promise(function(b,x){_.onload=b,_.onerror=x}),tn(d,"link",l),r.state.loading|=4,Ch(d,a.precedence,n),r.instance=d;case"script":return d=Eo(a.src),(h=n.querySelector(au(d)))?(r.instance=h,Ct(h),h):(l=a,(h=ei.get(d))&&(l=T({},a),Zm(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),Ct(h),tn(h,"link",l),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Ch(l,a.precedence,n));return r.instance}function Ch(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var b=l[_];if(b.dataset.precedence===r)d=b;else if(d!==h)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function Jm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Zm(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Nh=null;function kE(n,r,a){if(Nh===null){var l=new Map,h=Nh=new Map;h.set(a,l)}else h=Nh,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),h=0;h<a.length;h++){var d=a[h];if(!(d[Ci]||d[It]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=n+_;var b=l.get(_);b?b.push(d):l.set(_,[d])}}return l}function ME(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function K1(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function PE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Q1(n,r,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=vo(l.href),d=r.querySelector(su(h));if(d){r=d._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=xh.bind(n),r.then(n,n)),a.state.loading|=4,a.instance=d,Ct(d);return}d=r.ownerDocument||r,l=DE(l),(h=ei.get(h))&&Jm(l,h),d=d.createElement("link"),Ct(d);var _=d;_._p=new Promise(function(b,x){_.onload=b,_.onerror=x}),tn(d,"link",l),a.instance=d}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=xh.bind(n),r.addEventListener("load",a),r.addEventListener("error",a))}}var ep=0;function Y1(n,r){return n.stylesheets&&n.count===0&&Oh(n,n.stylesheets),0<n.count||0<n.imgCount?function(a){var l=setTimeout(function(){if(n.stylesheets&&Oh(n,n.stylesheets),n.unsuspend){var d=n.unsuspend;n.unsuspend=null,d()}},6e4+r);0<n.imgBytes&&ep===0&&(ep=62500*C1());var h=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Oh(n,n.stylesheets),n.unsuspend)){var d=n.unsuspend;n.unsuspend=null,d()}},(n.imgBytes>ep?50:800)+r);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function xh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Dh=null;function Oh(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Dh=new Map,r.forEach($1,n),Dh=null,xh.call(n))}function $1(n,r){if(!(r.state.loading&4)){var a=Dh.get(n);if(a)var l=a.get(null);else{a=new Map,Dh.set(n,a);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=xh.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var ou={$$typeof:ue,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function X1(n,r,a,l,h,d,_,b,x){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.hiddenUpdates=Ri(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function VE(n,r,a,l,h,d,_,b,x,z,G,Y){return n=new X1(n,r,a,_,x,z,G,Y,b),r=1,d===!0&&(r|=24),d=Dn(3,null,null,r),n.current=d,d.stateNode=n,r=kd(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},Ud(d),n}function UE(n){return n?(n=Xa,n):Xa}function LE(n,r,a,l,h,d){h=UE(h),l.context===null?l.context=h:l.pendingContext=h,l=Wr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Jr(n,l,r),a!==null&&(wn(a,n,r),zl(a,n,r))}function zE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function tp(n,r){zE(n,r),(n=n.alternate)&&zE(n,r)}function jE(n){if(n.tag===13||n.tag===31){var r=Zs(n,67108864);r!==null&&wn(r,n,67108864),tp(n,67108864)}}function BE(n){if(n.tag===13||n.tag===31){var r=Vn();r=Bs(r);var a=Zs(n,r);a!==null&&wn(a,n,r),tp(n,r)}}var kh=!0;function W1(n,r,a,l){var h=B.T;B.T=null;var d=ne.p;try{ne.p=2,np(n,r,a,l)}finally{ne.p=d,B.T=h}}function J1(n,r,a,l){var h=B.T;B.T=null;var d=ne.p;try{ne.p=8,np(n,r,a,l)}finally{ne.p=d,B.T=h}}function np(n,r,a,l){if(kh){var h=ip(l);if(h===null)qm(n,r,l,Mh,a),HE(n,l);else if(eR(h,n,r,a,l))l.stopPropagation();else if(HE(n,l),r&4&&-1<Z1.indexOf(n)){for(;h!==null;){var d=Hn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=wi(d.pendingLanes);if(_!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;_;){var x=1<<31-Et(_);b.entanglements[1]|=x,_&=~x}Hi(d),(He&6)===0&&(gh=dn()+500,tu(0))}}break;case 31:case 13:b=Zs(d,2),b!==null&&wn(b,d,2),_h(),tp(d,2)}if(d=ip(l),d===null&&qm(n,r,l,Mh,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else qm(n,r,l,null,a)}}function ip(n){return n=Fn(n),rp(n)}var Mh=null;function rp(n){if(Mh=null,n=Ni(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=f(r),n!==null)return n;n=null}else if(a===31){if(n=m(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Mh=n,null}function qE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Us()){case cl:return 2;case hl:return 8;case Vr:case cd:return 32;case fc:return 268435456;default:return 32}default:return 32}}var sp=!1,us=null,cs=null,hs=null,lu=new Map,uu=new Map,fs=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function HE(n,r){switch(n){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":lu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(r.pointerId)}}function cu(n,r,a,l,h,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=Hn(r),r!==null&&jE(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function eR(n,r,a,l,h){switch(r){case"focusin":return us=cu(us,n,r,a,l,h),!0;case"dragenter":return cs=cu(cs,n,r,a,l,h),!0;case"mouseover":return hs=cu(hs,n,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return lu.set(d,cu(lu.get(d)||null,n,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,uu.set(d,cu(uu.get(d)||null,n,r,a,l,h)),!0}return!1}function FE(n){var r=Ni(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){n.blockedOn=r,ai(n.priority,function(){BE(a)});return}}else if(r===31){if(r=m(a),r!==null){n.blockedOn=r,ai(n.priority,function(){BE(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ph(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ip(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Al=l,a.target.dispatchEvent(l),Al=null}else return r=Hn(a),r!==null&&jE(r),n.blockedOn=a,!1;r.shift()}return!0}function GE(n,r,a){Ph(n)&&a.delete(r)}function tR(){sp=!1,us!==null&&Ph(us)&&(us=null),cs!==null&&Ph(cs)&&(cs=null),hs!==null&&Ph(hs)&&(hs=null),lu.forEach(GE),uu.forEach(GE)}function Vh(n,r){n.blockedOn===r&&(n.blockedOn=null,sp||(sp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,tR)))}var Uh=null;function KE(n){Uh!==n&&(Uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Uh===n&&(Uh=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],h=n[r+2];if(typeof l!="function"){if(rp(l||a)===null)continue;break}var d=Hn(a);d!==null&&(n.splice(r,3),r-=3,im(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function To(n){function r(x){return Vh(x,n)}us!==null&&Vh(us,n),cs!==null&&Vh(cs,n),hs!==null&&Vh(hs,n),lu.forEach(r),uu.forEach(r);for(var a=0;a<fs.length;a++){var l=fs[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)FE(a),a.blockedOn===null&&fs.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Gt]||null;if(typeof d=="function")_||KE(a);else if(_){var b=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Gt]||null)b=_.formAction;else if(rp(h)!==null)continue}else b=_.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),KE(a)}}}function QE(){function n(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function r(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),h!==null&&(h(),h=null)}}}function ap(n){this._internalRoot=n}Lh.prototype.render=ap.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Vn();LE(a,l,n,r,null,null)},Lh.prototype.unmount=ap.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;LE(n.current,2,null,n,null,null),_h(),r[Ii]=null}};function Lh(n){this._internalRoot=n}Lh.prototype.unstable_scheduleHydration=function(n){if(n){var r=_c();n={blockedOn:null,target:n,priority:r};for(var a=0;a<fs.length&&r!==0&&r<fs[a].priority;a++);fs.splice(a,0,n),a===0&&FE(n)}};var YE=e.version;if(YE!=="19.2.4")throw Error(s(527,YE,"19.2.4"));ne.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=y(r),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var nR={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zh.isDisabled&&zh.supportsFiber)try{ri=zh.inject(nR),Xt=zh}catch{}}return fu.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",h=tv,d=nv,_=iv;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError)),r=VE(n,1,!1,null,null,a,l,null,h,d,_,QE),n[Ii]=r.current,Bm(n),new ap(r)},fu.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,h="",d=tv,_=nv,b=iv,x=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),r=VE(n,1,!0,r,a??null,l,h,x,d,_,b,QE),r.context=UE(null),a=r.current,l=Vn(),l=Bs(l),h=Wr(l),h.callback=null,Jr(a,h,l),a=l,r.current.lanes=a,zs(r,a),Hi(r),n[Ii]=r.current,Bm(n),new Lh(r)},fu.version="19.2.4",fu}var rT;function dR(){if(rT)return up.exports;rT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),up.exports=fR(),up.exports}var mR=dR();const pR=Z0(mR),gR=()=>{};var sT={};/**
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
 */const eb=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},yR=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],f=i[t++],m=i[t++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=i[t++],f=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},tb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,p=o+2<i.length,y=p?i[o+2]:0,v=u>>2,T=(u&3)<<4|m>>4;let R=(m&15)<<2|y>>6,j=y&63;p||(j=64,f||(R=64)),s.push(t[v],t[T],t[R],t[j])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(eb(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):yR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const y=o<i.length?t[i.charAt(o)]:64;++o;const T=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||y==null||T==null)throw new _R;const R=u<<2|m>>4;if(s.push(R),y!==64){const j=m<<4&240|y>>2;if(s.push(j),T!==64){const Q=y<<6&192|T;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vR=function(i){const e=eb(i);return tb.encodeByteArray(e,!0)},lf=function(i){return vR(i).replace(/\./g,"")},ug=function(i){try{return tb.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function uf(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ER(t)||(i[t]=uf(i[t],e[t]));return i}function ER(i){return i!=="__proto__"}/**
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
 */function nb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TR=()=>nb().__FIREBASE_DEFAULTS__,bR=()=>{if(typeof process>"u"||typeof sT>"u")return;const i=sT.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},AR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ug(i[1]);return e&&JSON.parse(e)},xf=()=>{try{return gR()||TR()||bR()||AR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},wR=i=>{var e,t;return(t=(e=xf())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},SR=i=>{const e=wR(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},cg=()=>{var i;return(i=xf())==null?void 0:i.config},RR=i=>{var e;return(e=xf())==null?void 0:e[`_${i}`]};/**
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
 */class IR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function xs(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function ib(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[lf(JSON.stringify(t)),lf(JSON.stringify(f)),""].join(".")}const Su={};function CR(){const i={prod:[],emulator:[]};for(const e of Object.keys(Su))Su[e]?i.emulator.push(e):i.prod.push(e);return i}function NR(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let aT=!1;function fg(i,e){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||Su[i]===e||Su[i]||aT)return;Su[i]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=CR().prod.length>0;function f(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function p(R,j){R.setAttribute("width","24"),R.setAttribute("id",j),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function y(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{aT=!0,f()},R}function v(R,j){R.setAttribute("id",j),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function T(){const R=NR(s),j=t("text"),Q=document.getElementById(j)||document.createElement("span"),Z=t("learnmore"),J=document.getElementById(Z)||document.createElement("a"),ce=t("preprendIcon"),de=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const ue=R.element;m(ue),v(J,Z);const ye=y();p(de,ce),ue.append(de,Q,J,ye),document.body.appendChild(ue)}u?(Q.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function dg(){var e;const i=(e=xf())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DR(){return typeof window<"u"||rb()}function rb(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function OR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sb(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ab(){const i=Lt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function kR(){return!dg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cf(){try{return typeof indexedDB=="object"}catch{return!1}}function MR(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const PR="FirebaseError";class fn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=PR,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?VR(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new fn(o,m,s)}}function VR(i,e){return i.replace(UR,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const UR=/\{\$([^}]+)}/g;/**
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
 */function oT(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function LR(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Lo(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(lT(u)&&lT(f)){if(!Lo(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function lT(i){return i!==null&&typeof i=="object"}/**
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
 */function Xo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Co(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function vu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function ob(i,e){const t=new zR(i,e);return t.subscribe.bind(t)}class zR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");jR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=dp),o.error===void 0&&(o.error=dp),o.complete===void 0&&(o.complete=dp);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jR(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function dp(){}/**
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
 */class BR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new IR;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HR(e))try{this.getOrInitializeService({instanceIdentifier:fa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=fa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fa){return this.instances.has(e)}getOptions(e=fa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qR(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fa){return this.component?this.component.multipleInstances?e:fa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qR(i){return i===fa?void 0:i}function HR(i){return i.instantiationMode==="EAGER"}/**
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
 */class lb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const pg=[];var De;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(De||(De={}));const ub={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},FR=De.INFO,GR={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},KR=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=GR[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Df{constructor(e){this.name=e,this._logLevel=FR,this._logHandler=KR,this._userLogHandler=null,pg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}function QR(i){pg.forEach(e=>{e.setLogLevel(i)})}function YR(i,e){for(const t of pg){let s=null;e&&e.level&&(s=ub[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(o,u,...f)=>{const m=f.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");u>=(s??o.logLevel)&&i({level:De[u].toLowerCase(),message:m,args:f,type:o.name})}}}const $R=(i,e)=>e.some(t=>i instanceof t);let uT,cT;function XR(){return uT||(uT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WR(){return cT||(cT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cb=new WeakMap,Op=new WeakMap,hb=new WeakMap,mp=new WeakMap,gg=new WeakMap;function JR(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{t(ys(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&cb.set(t,i)}).catch(()=>{}),gg.set(e,i),e}function ZR(i){if(Op.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{t(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});Op.set(i,e)}let kp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Op.get(i);if(e==="objectStoreNames")return i.objectStoreNames||hb.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ys(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function eI(i){kp=i(kp)}function tI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(pp(this),e,...t);return hb.set(s,e.sort?e.sort():[e]),ys(s)}:WR().includes(i)?function(...e){return i.apply(pp(this),e),ys(cb.get(this))}:function(...e){return ys(i.apply(pp(this),e))}}function nI(i){return typeof i=="function"?tI(i):(i instanceof IDBTransaction&&ZR(i),$R(i,XR())?new Proxy(i,kp):i)}function ys(i){if(i instanceof IDBRequest)return JR(i);if(mp.has(i))return mp.get(i);const e=nI(i);return e!==i&&(mp.set(i,e),gg.set(e,i)),e}const pp=i=>gg.get(i);function iI(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=ys(f);return s&&f.addEventListener("upgradeneeded",p=>{s(ys(f.result),p.oldVersion,p.newVersion,ys(f.transaction),p)}),t&&f.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const rI=["get","getKey","getAll","getAllKeys","count"],sI=["put","add","delete","clear"],gp=new Map;function hT(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(gp.get(e))return gp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=sI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rI.includes(t)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[t](...m),o&&p.done]))[0]};return gp.set(e,u),u}eI(i=>({...i,get:(e,t,s)=>hT(e,t)||i.get(e,t,s),has:(e,t)=>!!hT(e,t)||i.has(e,t)}));/**
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
 */class aI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function oI(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",Mp="0.14.8";/**
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
 */const Rr=new Df("@firebase/app"),lI="@firebase/app-compat",uI="@firebase/analytics-compat",cI="@firebase/analytics",hI="@firebase/app-check-compat",fI="@firebase/app-check",dI="@firebase/auth",mI="@firebase/auth-compat",pI="@firebase/database",gI="@firebase/data-connect",yI="@firebase/database-compat",_I="@firebase/functions",vI="@firebase/functions-compat",EI="@firebase/installations",TI="@firebase/installations-compat",bI="@firebase/messaging",AI="@firebase/messaging-compat",wI="@firebase/performance",SI="@firebase/performance-compat",RI="@firebase/remote-config",II="@firebase/remote-config-compat",CI="@firebase/storage",NI="@firebase/storage-compat",xI="@firebase/firestore",DI="@firebase/ai",OI="@firebase/firestore-compat",kI="firebase",MI="12.9.0";/**
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
 */const bs="[DEFAULT]",PI={[hf]:"fire-core",[lI]:"fire-core-compat",[cI]:"fire-analytics",[uI]:"fire-analytics-compat",[fI]:"fire-app-check",[hI]:"fire-app-check-compat",[dI]:"fire-auth",[mI]:"fire-auth-compat",[pI]:"fire-rtdb",[gI]:"fire-data-connect",[yI]:"fire-rtdb-compat",[_I]:"fire-fn",[vI]:"fire-fn-compat",[EI]:"fire-iid",[TI]:"fire-iid-compat",[bI]:"fire-fcm",[AI]:"fire-fcm-compat",[wI]:"fire-perf",[SI]:"fire-perf-compat",[RI]:"fire-rc",[II]:"fire-rc-compat",[CI]:"fire-gcs",[NI]:"fire-gcs-compat",[xI]:"fire-fst",[OI]:"fire-fst-compat",[DI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
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
 */const As=new Map,zo=new Map,jo=new Map;function Vu(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function fb(i,e){i.container.addOrOverwriteComponent(e)}function Ir(i){const e=i.name;if(jo.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;jo.set(e,i);for(const t of As.values())Vu(t,i);for(const t of zo.values())Vu(t,i);return!0}function yg(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function VI(i,e,t=bs){yg(i,e).clearInstance(t)}function _g(i){return i.options!==void 0}function db(i){return _g(i)?!1:"authIdToken"in i||"appCheckToken"in i||"releaseOnDeref"in i||"automaticDataCollectionEnabled"in i}function ot(i){return i==null?!1:i.settings!==void 0}function UI(){jo.clear()}/**
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
 */const LI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Ra("app","Firebase",LI);/**
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
 */let mb=class{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}};/**
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
 */function fT(i,e){const t=ug(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const o=JSON.parse(t).exp*1e3,u=new Date().getTime();o-u<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class zI extends mb{constructor(e,t,s,o){const u=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,f={name:s,automaticDataCollectionEnabled:u};if(e.apiKey!==void 0)super(e,f,o);else{const m=e;super(m.options,f,o)}this._serverConfig={automaticDataCollectionEnabled:u,...t},this._serverConfig.authIdToken&&fT(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&fT(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Bn(hf,Mp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Eg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw jn.create("server-app-deleted")}}/**
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
 */const Dr=MI;function vg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:bs,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw jn.create("bad-app-name",{appName:String(o)});if(t||(t=cg()),!t)throw jn.create("no-options");const u=As.get(o);if(u){if(Lo(t,u.options)&&Lo(s,u.config))return u;throw jn.create("duplicate-app",{appName:o})}const f=new lb(o);for(const p of jo.values())f.addComponent(p);const m=new mb(t,s,f);return As.set(o,m),m}function jI(i,e={}){if(DR()&&!rb())throw jn.create("invalid-server-app-environment");let t,s=e||{};if(i&&(_g(i)?t=i.options:db(i)?s=i:t=i),s.automaticDataCollectionEnabled===void 0&&(s.automaticDataCollectionEnabled=!0),t||(t=cg()),!t)throw jn.create("no-options");const o={...s,...t};o.releaseOnDeref!==void 0&&delete o.releaseOnDeref;const u=v=>[...v].reduce((T,R)=>Math.imul(31,T)+R.charCodeAt(0)|0,0);if(s.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw jn.create("finalization-registry-not-supported",{});const f=""+u(JSON.stringify(o)),m=zo.get(f);if(m)return m.incRefCount(s.releaseOnDeref),m;const p=new lb(f);for(const v of jo.values())p.addComponent(v);const y=new zI(t,s,f,p);return zo.set(f,y),y}function pb(i=bs){const e=As.get(i);if(!e&&i===bs&&cg())return vg();if(!e)throw jn.create("no-app",{appName:i});return e}function BI(){return Array.from(As.values())}async function Eg(i){let e=!1;const t=i.name;As.has(t)?(e=!0,As.delete(t)):zo.has(t)&&i.decRefCount()<=0&&(zo.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(s=>s.delete())),i.isDeleted=!0)}function Bn(i,e,t){let s=PI[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(f.join(" "));return}Ir(new vi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function gb(i,e){if(i!==null&&typeof i!="function")throw jn.create("invalid-log-argument");YR(i,e)}function yb(i){QR(i)}/**
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
 */const qI="firebase-heartbeat-database",HI=1,Uu="firebase-heartbeat-store";let yp=null;function _b(){return yp||(yp=iI(qI,HI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Uu)}catch(t){console.warn(t)}}}}).catch(i=>{throw jn.create("idb-open",{originalErrorMessage:i.message})})),yp}async function FI(i){try{const t=(await _b()).transaction(Uu),s=await t.objectStore(Uu).get(vb(i));return await t.done,s}catch(e){if(e instanceof fn)Rr.warn(e.message);else{const t=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function dT(i,e){try{const s=(await _b()).transaction(Uu,"readwrite");await s.objectStore(Uu).put(e,vb(i)),await s.done}catch(t){if(t instanceof fn)Rr.warn(t.message);else{const s=jn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function vb(i){return`${i.name}!${i.options.appId}`}/**
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
 */const GI=1024,KI=30;class QI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $I(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=mT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>KI){const f=XI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mT(),{heartbeatsToSend:s,unsentEntries:o}=YI(this._heartbeatsCache.heartbeats),u=lf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function mT(){return new Date().toISOString().substring(0,10)}function YI(i,e=GI){const t=[];let s=i.slice();for(const o of i){const u=t.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),pT(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),pT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cf()?MR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return dT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return dT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pT(i){return lf(JSON.stringify({version:2,heartbeats:i})).length}function XI(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function WI(i){Ir(new vi("platform-logger",e=>new aI(e),"PRIVATE")),Ir(new vi("heartbeat",e=>new QI(e),"PRIVATE")),Bn(hf,Mp,i),Bn(hf,Mp,"esm2020"),Bn("fire-js","")}WI("");const JI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:fn,SDK_VERSION:Dr,_DEFAULT_ENTRY_NAME:bs,_addComponent:Vu,_addOrOverwriteComponent:fb,_apps:As,_clearComponents:UI,_components:jo,_getProvider:yg,_isFirebaseApp:_g,_isFirebaseServerApp:ot,_isFirebaseServerAppSettings:db,_registerComponent:Ir,_removeServiceInstance:VI,_serverApps:zo,deleteApp:Eg,getApp:pb,getApps:BI,initializeApp:vg,initializeServerApp:jI,onLog:gb,registerVersion:Bn,setLogLevel:yb},Symbol.toStringTag,{value:"Module"}));/**
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
 */class ZI{constructor(e,t){this._delegate=e,this.firebase=t,Vu(e,new vi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Eg(this._delegate)))}_getService(e,t=bs){var o;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((o=s.getComponent())==null?void 0:o.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=bs){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Vu(this._delegate,e)}_addOrOverwriteComponent(e){fb(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const eC={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},gT=new Ra("app-compat","Firebase",eC);/**
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
 */function tC(i){const e={},t={__esModule:!0,initializeApp:u,app:o,registerVersion:Bn,setLogLevel:yb,onLog:gb,apps:null,SDK_VERSION:Dr,INTERNAL:{registerComponent:m,removeApp:s,useAsService:p,modularAPIs:JI}};t.default=t,Object.defineProperty(t,"apps",{get:f});function s(y){delete e[y]}function o(y){if(y=y||bs,!oT(e,y))throw gT.create("no-app",{appName:y});return e[y]}o.App=i;function u(y,v={}){const T=vg(y,v);if(oT(e,T.name))return e[T.name];const R=new i(T,t);return e[T.name]=R,R}function f(){return Object.keys(e).map(y=>e[y])}function m(y){const v=y.name,T=v.replace("-compat","");if(Ir(y)&&y.type==="PUBLIC"){const R=(j=o())=>{if(typeof j[T]!="function")throw gT.create("invalid-app-argument",{appName:v});return j[T]()};y.serviceProps!==void 0&&uf(R,y.serviceProps),t[T]=R,i.prototype[T]=function(...j){return this._getService.bind(this,v).apply(this,y.multipleInstances?j:[])}}return y.type==="PUBLIC"?t[T]:null}function p(y,v){return v==="serverAuth"?null:v}return t}/**
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
 */function Eb(){const i=tC(ZI);i.INTERNAL={...i.INTERNAL,createFirebaseNamespace:Eb,extendNamespace:e,createSubscribe:ob,ErrorFactory:Ra,deepExtend:uf};function e(t){uf(i,t)}return i}const nC=Eb();/**
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
 */const yT=new Df("@firebase/app-compat"),iC="@firebase/app-compat",rC="0.5.8";/**
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
 */function sC(i){Bn(iC,rC,i)}/**
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
 */try{const i=nb();if(i.firebase!==void 0){yT.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&yT.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const Wo=nC;sC();var aC="firebase",oC="12.9.0";/**
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
 */Wo.registerVersion(aC,oC,"app-compat");const du={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},bo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function lC(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function Tb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uC=lC,cC=Tb,bb=new Ra("auth","Firebase",Tb());/**
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
 */const ff=new Df("@firebase/auth");function hC(i,...e){ff.logLevel<=De.WARN&&ff.warn(`Auth (${Dr}): ${i}`,...e)}function Xh(i,...e){ff.logLevel<=De.ERROR&&ff.error(`Auth (${Dr}): ${i}`,...e)}/**
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
 */function sn(i,...e){throw bg(i,...e)}function Ht(i,...e){return bg(i,...e)}function Tg(i,e,t){const s={...cC(),[e]:t};return new Ra("auth","Firebase",s).create(e,{appName:i.name})}function $t(i){return Tg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jo(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&sn(i,"argument-error"),Tg(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bg(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return bb.create(i,...e)}function ee(i,e,...t){if(!i)throw bg(e,...t)}function Xi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Xh(e),new Error(e)}function Ei(i,e){i||Xi(e)}/**
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
 */function Lu(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Ag(){return _T()==="http:"||_T()==="https:"}function _T(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function fC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ag()||sb()||"connection"in navigator)?navigator.onLine:!0}function dC(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Wu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ei(t>e,"Short delay should be less than long delay!"),this.isMobile=xR()||mg()}get(){return fC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wg(i,e){Ei(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ab{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gC=new Wu(3e4,6e4);function yt(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function _t(i,e,t,s,o={}){return wb(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=Xo({key:i.config.apiKey,...f}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:p,...u};return OR()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&xs(i.emulatorConfig.host)&&(y.credentials="include"),Ab.fetch()(await Sb(i,i.config.apiHost,t,m),y)})}async function wb(i,e,t){i._canInitEmulator=!1;const s={...mC,...e};try{const o=new _C(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Eu(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(i,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Eu(i,"email-already-in-use",f);if(p==="USER_DISABLED")throw Eu(i,"user-disabled",f);const v=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Tg(i,v,y);sn(i,v)}}catch(o){if(o instanceof fn)throw o;sn(i,"network-request-failed",{message:String(o)})}}async function Or(i,e,t,s,o={}){const u=await _t(i,e,t,s,o);return"mfaPendingCredential"in u&&sn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Sb(i,e,t,s){const o=`${e}${t}?${s}`,u=i,f=u.config.emulator?wg(i.config,o):`${i.config.apiScheme}://${o}`;return pC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function yC(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _C{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),gC.get())})}}function Eu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Ht(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */function vT(i){return i!==void 0&&i.getResponse!==void 0}function ET(i){return i!==void 0&&i.enterprise!==void 0}class Rb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function vC(i){return(await _t(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ib(i,e){return _t(i,"GET","/v2/recaptchaConfig",yt(i,e))}/**
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
 */async function EC(i,e){return _t(i,"POST","/v1/accounts:delete",e)}async function TC(i,e){return _t(i,"POST","/v1/accounts:update",e)}async function df(i,e){return _t(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ru(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bC(i,e=!1){const t=ve(i),s=await t.getIdToken(e),o=Of(s);ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ru(_p(o.auth_time)),issuedAtTime:Ru(_p(o.iat)),expirationTime:Ru(_p(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function _p(i){return Number(i)*1e3}function Of(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Xh("JWT malformed, contained fewer than 3 sections"),null;try{const o=ug(t);return o?JSON.parse(o):(Xh("Failed to decode base64 JWT payload"),null)}catch(o){return Xh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function TT(i){const e=Of(i);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cr(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof fn&&AC(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function AC({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class wC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ru(this.lastLoginAt),this.creationTime=Ru(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zu(i){var T;const e=i.auth,t=await i.getIdToken(),s=await Cr(i,df(e,{idToken:t}));ee(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(T=o.providerUserInfo)!=null&&T.length?Cb(o.providerUserInfo):[],f=RC(i.providerData,u),m=i.isAnonymous,p=!(i.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Pp(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(i,v)}async function SC(i){const e=ve(i);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RC(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Cb(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function IC(i,e){const t=await wb(i,{},async()=>{const s=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await Sb(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:m,body:s};return i.emulatorConfig&&xs(i.emulatorConfig.host)&&(p.credentials="include"),Ab.fetch()(f,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CC(i,e){return _t(i,"POST","/v2/accounts:revokeToken",yt(i,e))}/**
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
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=TT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await IC(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,f=new No;return s&&(ee(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(ee(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return Xi("not implemented")}}/**
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
 */function ms(i,e){ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class gi{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new wC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bC(this,e)}reload(){return SC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gi({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await zu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Cr(this,EC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,f=t.photoURL??void 0,m=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,v=t.lastLoginAt??void 0,{uid:T,emailVerified:R,isAnonymous:j,providerData:Q,stsTokenManager:Z}=t;ee(T&&Z,e,"internal-error");const J=No.fromJSON(this.name,Z);ee(typeof T=="string",e,"internal-error"),ms(s,e.name),ms(o,e.name),ee(typeof R=="boolean",e,"internal-error"),ee(typeof j=="boolean",e,"internal-error"),ms(u,e.name),ms(f,e.name),ms(m,e.name),ms(p,e.name),ms(y,e.name),ms(v,e.name);const ce=new gi({uid:T,auth:e,email:o,emailVerified:R,displayName:s,isAnonymous:j,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:J,createdAt:y,lastLoginAt:v});return Q&&Array.isArray(Q)&&(ce.providerData=Q.map(de=>({...de}))),p&&(ce._redirectEventId=p),ce}static async _fromIdTokenResponse(e,t,s=!1){const o=new No;o.updateFromServerResponse(t);const u=new gi({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await zu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Cb(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new No;m.updateFromIdToken(s);const p=new gi({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Pp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
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
 */const bT=new Map;function Ln(i){Ei(i instanceof Function,"Expected a class definition");let e=bT.get(i);return e?(Ei(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,bT.set(i,e),e)}/**
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
 */class Nb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nb.type="NONE";const Bo=Nb;/**
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
 */function pa(i,e,t){return`firebase:${i}:${e}:${t}`}class xo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=pa(this.userKey,o.apiKey,u),this.fullPersistenceKey=pa("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await df(this.auth,{idToken:e}).catch(()=>{});return t?gi._fromGetAccountInfoResponse(this.auth,t,e):null}return gi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new xo(Ln(Bo),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Ln(Bo);const f=pa(s,e.config.apiKey,e.name);let m=null;for(const y of t)try{const v=await y._get(f);if(v){let T;if(typeof v=="string"){const R=await df(e,{idToken:v}).catch(()=>{});if(!R)break;T=await gi._fromGetAccountInfoResponse(e,R,v)}else T=gi._fromJSON(e,v);y!==u&&(m=T),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new xo(u,e,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(t.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new xo(u,e,s))}}/**
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
 */function AT(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mb(e))return"Blackberry";if(Pb(e))return"Webos";if(Db(e))return"Safari";if((e.includes("chrome/")||Ob(e))&&!e.includes("edge/"))return"Chrome";if(Ju(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xb(i=Lt()){return/firefox\//i.test(i)}function Db(i=Lt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ob(i=Lt()){return/crios\//i.test(i)}function kb(i=Lt()){return/iemobile/i.test(i)}function Ju(i=Lt()){return/android/i.test(i)}function Mb(i=Lt()){return/blackberry/i.test(i)}function Pb(i=Lt()){return/webos/i.test(i)}function Zu(i=Lt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function NC(i=Lt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function xC(i=Lt()){var e;return Zu(i)&&!!((e=window.navigator)!=null&&e.standalone)}function DC(){return ab()&&document.documentMode===10}function Vb(i=Lt()){return Zu(i)||Ju(i)||Pb(i)||Mb(i)||/windows phone/i.test(i)||kb(i)}/**
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
 */function Ub(i,e=[]){let t;switch(i){case"Browser":t=AT(Lt());break;case"Worker":t=`${AT(Lt())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dr}/${s}`}/**
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
 */class OC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((f,m)=>{try{const p=e(u);f(p)}catch(p){m(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function kC(i,e={}){return _t(i,"GET","/v2/passwordPolicy",yt(i,e))}/**
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
 */const MC=6;class PC{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??MC,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class VC{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wT(this),this.idTokenSubscription=new wT(this),this.beforeStateQueue=new OC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ln(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await df(this,{idToken:e}),s=await gi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(ot(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!f||f===m)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ot(this.app))return Promise.reject($t(this));const t=e?ve(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ot(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kC(this),t=new PC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await CC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ln(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[Ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{f=!0,p()}}else{const p=e.addObserver(t);return()=>{f=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ub(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&hC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ft(i){return ve(i)}class wT{constructor(e){this.auth=e,this.observer=null,this.addObserver=ob(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UC(i){ec=i}function Sg(i){return ec.loadJS(i)}function LC(){return ec.recaptchaV2Script}function zC(){return ec.recaptchaEnterpriseScript}function jC(){return ec.gapiScript}function Lb(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const BC=500,qC=6e4,jh=1e12;class HC{constructor(e){this.auth=e,this.counter=jh,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new KC(e,this.auth.name,t||{})),this.counter++,s}reset(e){var s;const t=e||jh;(s=this._widgets.get(t))==null||s.delete(),this._widgets.delete(t)}getResponse(e){var s;const t=e||jh;return((s=this._widgets.get(t))==null?void 0:s.getResponse())||""}async execute(e){var s;const t=e||jh;return(s=this._widgets.get(t))==null||s.execute(),""}}class FC{constructor(){this.enterprise=new GC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class GC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class KC{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const o=typeof e=="string"?document.getElementById(e):e;ee(o,"argument-error",{appName:t}),this.container=o,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QC(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},qC)},BC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QC(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const YC="recaptcha-enterprise",Iu="NO_RECAPTCHA";class zb{constructor(e){this.type=YC,this.auth=ft(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{Ib(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new Rb(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;ET(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(y=>{f(y)}).catch(()=>{f(Iu)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new FC().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!t&&ET(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=zC();p.length!==0&&(p+=m),Sg(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function mu(i,e,t,s=!1,o=!1){const u=new zb(i);let f;if(o)f=Iu;else try{f=await u.verify(t)}catch{f=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function _s(i,e,t,s,o){var u,f;if(o==="EMAIL_PASSWORD_PROVIDER")if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const m=await mu(i,e,t,t==="getOobCode");return s(i,m)}else return s(i,e).catch(async m=>{if(m.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await mu(i,e,t,t==="getOobCode");return s(i,p)}else return Promise.reject(m)});else if(o==="PHONE_PROVIDER")if((f=i._getRecaptchaConfig())!=null&&f.isProviderEnabled("PHONE_PROVIDER")){const m=await mu(i,e,t);return s(i,m).catch(async p=>{var y;if(((y=i._getRecaptchaConfig())==null?void 0:y.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(p.code==="auth/missing-recaptcha-token"||p.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const v=await mu(i,e,t,!1,!0);return s(i,v)}return Promise.reject(p)})}else{const m=await mu(i,e,t,!1,!0);return s(i,m)}else return Promise.reject(o+" provider is not supported.")}async function $C(i){const e=ft(i),t=await Ib(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new Rb(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isAnyProviderEnabled()&&new zb(e).verify()}function XC(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ln);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function WC(i,e,t){const s=ft(i);ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!!(t!=null&&t.disableWarnings),u=jb(e),{host:f,port:m}=JC(e),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},v=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ee(Lo(y,s.config.emulator)&&Lo(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,xs(f)?(hg(`${u}//${f}${p}`),fg("Auth",!0)):o||ZC()}function jb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function JC(i){const e=jb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ST(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:ST(f)}}}function ST(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function ZC(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Zo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xi("not implemented")}_getIdTokenResponse(e){return Xi("not implemented")}_linkToIdToken(e,t){return Xi("not implemented")}_getReauthenticationResolver(e){return Xi("not implemented")}}/**
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
 */async function Bb(i,e){return _t(i,"POST","/v1/accounts:resetPassword",yt(i,e))}async function e2(i,e){return _t(i,"POST","/v1/accounts:update",e)}async function t2(i,e){return _t(i,"POST","/v1/accounts:signUp",e)}async function n2(i,e){return _t(i,"POST","/v1/accounts:update",yt(i,e))}/**
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
 */async function i2(i,e){return Or(i,"POST","/v1/accounts:signInWithPassword",yt(i,e))}async function kf(i,e){return _t(i,"POST","/v1/accounts:sendOobCode",yt(i,e))}async function r2(i,e){return kf(i,e)}async function s2(i,e){return kf(i,e)}async function a2(i,e){return kf(i,e)}async function o2(i,e){return kf(i,e)}/**
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
 */async function l2(i,e){return Or(i,"POST","/v1/accounts:signInWithEmailLink",yt(i,e))}async function u2(i,e){return Or(i,"POST","/v1/accounts:signInWithEmailLink",yt(i,e))}/**
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
 */class ju extends Zo{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ju(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ju(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _s(e,t,"signInWithPassword",i2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return l2(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _s(e,s,"signUpPassword",t2,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return u2(e,{idToken:t,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wr(i,e){return Or(i,"POST","/v1/accounts:signInWithIdp",yt(i,e))}/**
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
 */const c2="http://localhost";class tr extends Zo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const f=new tr(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,wr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}buildRequest(){const e={requestUri:c2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xo(t)}return e}}/**
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
 */async function RT(i,e){return _t(i,"POST","/v1/accounts:sendVerificationCode",yt(i,e))}async function h2(i,e){return Or(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,e))}async function f2(i,e){const t=await Or(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,e));if(t.temporaryProof)throw Eu(i,"account-exists-with-different-credential",t);return t}const d2={USER_NOT_FOUND:"user-not-found"};async function m2(i,e){const t={...e,operation:"REAUTH"};return Or(i,"POST","/v1/accounts:signInWithPhoneNumber",yt(i,t),d2)}/**
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
 */class ga extends Zo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ga({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ga({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return h2(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return f2(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return m2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:o}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:o}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:o,temporaryProof:u}=e;return!s&&!t&&!o&&!u?null:new ga({verificationId:t,verificationCode:s,phoneNumber:o,temporaryProof:u})}}/**
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
 */function p2(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g2(i){const e=Co(vu(i)).link,t=e?Co(vu(e)).deep_link_id:null,s=Co(vu(i)).deep_link_id;return(s?Co(vu(s)).link:null)||s||t||e||i}class Mf{constructor(e){const t=Co(vu(e)),s=t.apiKey??null,o=t.oobCode??null,u=p2(t.mode??null);ee(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=g2(e);try{return new Mf(t)}catch{return null}}}/**
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
 */class Ds{constructor(){this.providerId=Ds.PROVIDER_ID}static credential(e,t){return ju._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Mf.parseLink(t);return ee(s,"argument-error"),ju._fromEmailAndCode(e,s.code,s.tenantId)}}Ds.PROVIDER_ID="password";Ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class kr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class el extends kr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Do extends el{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ee("providerId"in t&&"signInMethod"in t,"argument-error"),tr._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return ee(e.idToken||e.accessToken,"argument-error"),tr._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Do.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Do.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:u,nonce:f,providerId:m}=e;if(!s&&!o&&!t&&!u||!m)return null;try{return new Do(m)._credential({idToken:t,accessToken:s,nonce:f,pendingToken:u})}catch{return null}}}/**
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
 */class Gi extends el{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gi.credential(e.oauthAccessToken)}catch{return null}}}Gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gi.PROVIDER_ID="facebook.com";/**
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
 */class Ki extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tr._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ki.credential(t,s)}catch{return null}}}Ki.GOOGLE_SIGN_IN_METHOD="google.com";Ki.PROVIDER_ID="google.com";/**
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
 */class Qi extends el{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch{return null}}}Qi.GITHUB_SIGN_IN_METHOD="github.com";Qi.PROVIDER_ID="github.com";/**
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
 */const y2="http://localhost";class qo extends Zo{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return wr(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,wr(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,pendingToken:u}=t;return!s||!o||!u||s!==o?null:new qo(s,u)}static _create(e,t){return new qo(e,t)}buildRequest(){return{requestUri:y2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const _2="saml.";class mf extends kr{constructor(e){ee(e.startsWith(_2),"argument-error"),super(e)}static credentialFromResult(e){return mf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return mf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=qo.fromJSON(e);return ee(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return qo._create(s,t)}catch{return null}}}/**
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
 */class Yi extends el{constructor(){super("twitter.com")}static credential(e,t){return tr._fromParams({providerId:Yi.PROVIDER_ID,signInMethod:Yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yi.credentialFromTaggedObject(e)}static credentialFromError(e){return Yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Yi.credential(t,s)}catch{return null}}}Yi.TWITTER_SIGN_IN_METHOD="twitter.com";Yi.PROVIDER_ID="twitter.com";/**
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
 */async function qb(i,e){return Or(i,"POST","/v1/accounts:signUp",yt(i,e))}/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await gi._fromIdTokenResponse(e,s,o),f=IT(s);return new ii({user:u,providerId:f,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=IT(s);return new ii({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function IT(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function v2(i){var o;if(ot(i.app))return Promise.reject($t(i));const e=ft(i);if(await e._initializationPromise,(o=e.currentUser)!=null&&o.isAnonymous)return new ii({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await qb(e,{returnSecureToken:!0}),s=await ii._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class pf extends fn{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pf.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pf(e,t,s,o)}}function Hb(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?pf._fromErrorAndOperation(i,u,e,s):u})}/**
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
 */function Fb(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function E2(i,e){const t=ve(i);await Pf(!0,t,e);const{providerUserInfo:s}=await TC(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),o=Fb(s||[]);return t.providerData=t.providerData.filter(u=>o.has(u.providerId)),o.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Rg(i,e,t=!1){const s=await Cr(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ii._forOperation(i,"link",s)}async function Pf(i,e,t){await zu(e);const s=Fb(e.providerData),o=i===!1?"provider-already-linked":"no-such-provider";ee(s.has(t)===i,e.auth,o)}/**
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
 */async function Gb(i,e,t=!1){const{auth:s}=i;if(ot(s.app))return Promise.reject($t(s));const o="reauthenticate";try{const u=await Cr(i,Hb(s,o,e,i),t);ee(u.idToken,s,"internal-error");const f=Of(u.idToken);ee(f,s,"internal-error");const{sub:m}=f;return ee(i.uid===m,s,"user-mismatch"),ii._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&sn(s,"user-mismatch"),u}}/**
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
 */async function Kb(i,e,t=!1){if(ot(i.app))return Promise.reject($t(i));const s="signIn",o=await Hb(i,s,e),u=await ii._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function Vf(i,e){return Kb(ft(i),e)}async function Qb(i,e){const t=ve(i);return await Pf(!1,t,e.providerId),Rg(t,e)}async function Yb(i,e){return Gb(ve(i),e)}/**
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
 */async function T2(i,e){return Or(i,"POST","/v1/accounts:signInWithCustomToken",yt(i,e))}/**
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
 */async function b2(i,e){if(ot(i.app))return Promise.reject($t(i));const t=ft(i),s=await T2(t,{token:e,returnSecureToken:!0}),o=await ii._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(o.user),o}/**
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
 */class tc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ig._fromServerResponse(e,t):"totpInfo"in t?Cg._fromServerResponse(e,t):sn(e,"internal-error")}}class Ig extends tc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ig(t)}}class Cg extends tc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Cg(t)}}/**
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
 */function Uf(i,e,t){var s;ee(((s=t.url)==null?void 0:s.length)>0,i,"invalid-continue-uri"),ee(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),ee(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ee(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ee(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Ng(i){const e=ft(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function A2(i,e,t){const s=ft(i),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Uf(s,o,t),await _s(s,o,"getOobCode",s2,"EMAIL_PASSWORD_PROVIDER")}async function w2(i,e,t){await Bb(ve(i),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ng(i),s})}async function S2(i,e){await n2(ve(i),{oobCode:e})}async function $b(i,e){const t=ve(i),s=await Bb(t,{oobCode:e}),o=s.requestType;switch(ee(o,t,"internal-error"),o){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ee(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ee(s.mfaInfo,t,"internal-error");default:ee(s.email,t,"internal-error")}let u=null;return s.mfaInfo&&(u=tc._fromServerResponse(ft(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:u},operation:o}}async function R2(i,e){const{data:t}=await $b(ve(i),e);return t.email}async function I2(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=ft(i),f=await _s(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qb,"EMAIL_PASSWORD_PROVIDER").catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Ng(i),p}),m=await ii._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function C2(i,e,t){return ot(i.app)?Promise.reject($t(i)):Vf(ve(i),Ds.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ng(i),s})}/**
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
 */async function N2(i,e,t){const s=ft(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(f,m){ee(m.handleCodeInApp,s,"argument-error"),m&&Uf(s,f,m)}u(o,t),await _s(s,o,"getOobCode",a2,"EMAIL_PASSWORD_PROVIDER")}function x2(i,e){const t=Mf.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function D2(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=ve(i),o=Ds.credentialWithLink(e,t||Lu());return ee(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),Vf(s,o)}/**
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
 */async function O2(i,e){return _t(i,"POST","/v1/accounts:createAuthUri",yt(i,e))}/**
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
 */async function k2(i,e){const t=Ag()?Lu():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:o}=await O2(ve(i),s);return o||[]}async function M2(i,e){const t=ve(i),o={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&Uf(t.auth,o,e);const{email:u}=await r2(t.auth,o);u!==i.email&&await i.reload()}async function P2(i,e,t){const s=ve(i),u={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&Uf(s.auth,u,t);const{email:f}=await o2(s.auth,u);f!==i.email&&await i.reload()}/**
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
 */async function V2(i,e){return _t(i,"POST","/v1/accounts:update",e)}/**
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
 */async function U2(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ve(i),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},f=await Cr(s,V2(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const m=s.providerData.find(({providerId:p})=>p==="password");m&&(m.displayName=s.displayName,m.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function L2(i,e){const t=ve(i);return ot(t.auth.app)?Promise.reject($t(t.auth)):Xb(t,e,null)}function z2(i,e){return Xb(ve(i),null,e)}async function Xb(i,e,t){const{auth:s}=i,u={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(u.email=e),t&&(u.password=t);const f=await Cr(i,e2(s,u));await i._updateTokensIfNecessary(f,!0)}/**
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
 */function j2(i){var o,u;if(!i)return null;const{providerId:e}=i,t=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},s=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(i!=null&&i.idToken)){const f=(u=(o=Of(i.idToken))==null?void 0:o.firebase)==null?void 0:u.sign_in_provider;if(f){const m=f!=="anonymous"&&f!=="custom"?f:null;return new Oo(s,m)}}if(!e)return null;switch(e){case"facebook.com":return new B2(s,t);case"github.com":return new q2(s,t);case"google.com":return new H2(s,t);case"twitter.com":return new F2(s,t,i.screenName||null);case"custom":case"anonymous":return new Oo(s,null);default:return new Oo(s,e,t)}}class Oo{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class Wb extends Oo{constructor(e,t,s,o){super(e,t,s),this.username=o}}class B2 extends Oo{constructor(e,t){super(e,"facebook.com",t)}}class q2 extends Wb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class H2 extends Oo{constructor(e,t){super(e,"google.com",t)}}class F2 extends Wb{constructor(e,t,s){super(e,"twitter.com",t,s)}}function G2(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:j2(t)}/**
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
 */class da{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new da("enroll",e,t)}static _fromMfaPendingCredential(e){return new da("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return da._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((s=e.multiFactorSession)!=null&&s.idToken)return da._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class xg{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=ft(e),o=t.customData._serverResponse,u=(o.mfaInfo||[]).map(m=>tc._fromServerResponse(s,m));ee(o.mfaPendingCredential,s,"internal-error");const f=da._fromMfaPendingCredential(o.mfaPendingCredential);return new xg(f,u,async m=>{const p=await m._process(s,f);delete o.mfaInfo,delete o.mfaPendingCredential;const y={...o,idToken:p.idToken,refreshToken:p.refreshToken};switch(t.operationType){case"signIn":const v=await ii._fromIdTokenResponse(s,t.operationType,y);return await s._updateCurrentUser(v.user),v;case"reauthenticate":return ee(t.user,s,"internal-error"),ii._forOperation(t.user,t.operationType,y);default:sn(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function K2(i,e){var o;const t=ve(i),s=e;return ee(e.customData.operationType,t,"argument-error"),ee((o=s.customData._serverResponse)==null?void 0:o.mfaPendingCredential,t,"argument-error"),xg._fromError(t,s)}/**
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
 */function CT(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:start",yt(i,e))}function Q2(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:finalize",yt(i,e))}function Y2(i,e){return _t(i,"POST","/v2/accounts/mfaEnrollment:withdraw",yt(i,e))}class Dg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>tc._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Dg(e)}async getSession(){return da._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,o=await this.getSession(),u=await Cr(this.user,s._process(this.user.auth,o,t));return await this.user._updateTokensIfNecessary(u),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const o=await Cr(this.user,Y2(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:u})=>u!==t),await this.user._updateTokensIfNecessary(o),await this.user.reload()}catch(o){throw o}}}const vp=new WeakMap;function $2(i){const e=ve(i);return vp.has(e)||vp.set(e,Dg._fromUser(e)),vp.get(e)}const gf="__sak";/**
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
 */class Jb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gf,"1"),this.storage.removeItem(gf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const X2=1e3,W2=10;class Zb extends Jb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!t&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);DC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,W2):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},X2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zb.type="LOCAL";const Og=Zb;/**
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
 */class eA extends Jb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eA.type="SESSION";const _a=eA;/**
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
 */function J2(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Lf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(t.origin,u)),p=await J2(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lf.receivers=[];/**
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
 */function nc(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class Z2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=nc("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(v),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Pt(){return window}function eN(i){Pt().location.href=i}/**
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
 */function kg(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function tN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function iN(){return kg()?self:null}/**
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
 */const tA="firebaseLocalStorageDb",rN=1,yf="firebaseLocalStorage",nA="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(i,e){return i.transaction([yf],e?"readwrite":"readonly").objectStore(yf)}function sN(){const i=indexedDB.deleteDatabase(tA);return new ic(i).toPromise()}function Vp(){const i=indexedDB.open(tA,rN);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(yf,{keyPath:nA})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(yf)?e(s):(s.close(),await sN(),e(await Vp()))})})}async function NT(i,e,t){const s=zf(i,!0).put({[nA]:e,value:t});return new ic(s).toPromise()}async function aN(i,e){const t=zf(i,!1).get(e),s=await new ic(t).toPromise();return s===void 0?null:s.value}function xT(i,e){const t=zf(i,!0).delete(e);return new ic(t).toPromise()}const oN=800,lN=3;class iA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>lN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lf._getInstance(iN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await tN(),!this.activeServiceWorker)return;this.sender=new Z2(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vp();return await NT(e,gf,"1"),await xT(e,gf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>NT(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>aN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=zf(o,!1).getAll();return new ic(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iA.type="LOCAL";const Bu=iA;/**
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
 */function DT(i,e){return _t(i,"POST","/v2/accounts/mfaSignIn:start",yt(i,e))}function uN(i,e){return _t(i,"POST","/v2/accounts/mfaSignIn:finalize",yt(i,e))}/**
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
 */const Ep=Lb("rcb"),cN=new Wu(3e4,6e4);class hN{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Pt().grecaptcha)!=null&&e.render)}load(e,t=""){return ee(fN(t),e,"argument-error"),this.shouldResolveImmediately(t)&&vT(Pt().grecaptcha)?Promise.resolve(Pt().grecaptcha):new Promise((s,o)=>{const u=Pt().setTimeout(()=>{o(Ht(e,"network-request-failed"))},cN.get());Pt()[Ep]=()=>{Pt().clearTimeout(u),delete Pt()[Ep];const m=Pt().grecaptcha;if(!m||!vT(m)){o(Ht(e,"internal-error"));return}const p=m.render;m.render=(y,v)=>{const T=p(y,v);return this.counter++,T},this.hostLanguage=t,s(m)};const f=`${LC()}?${Xo({onload:Ep,render:"explicit",hl:t})}`;Sg(f).catch(()=>{clearTimeout(u),o(Ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Pt().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function fN(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class dN{async load(e){return new HC(e)}clearedOneInstance(){}}/**
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
 */const Cu="recaptcha",mN={theme:"light",type:"image"};let pN=class{constructor(e,t,s={...mN}){this.parameters=s,this.type=Cu,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=ft(e),this.isInvisible=this.parameters.size==="invisible",ee(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const o=typeof t=="string"?document.getElementById(t):t;ee(o,this.auth,"argument-error"),this.container=o,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new dN:new hN,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(o=>{const u=f=>{f&&(this.tokenChangeListeners.delete(u),o(f))};this.tokenChangeListeners.add(u),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ee(!this.parameters.sitekey,this.auth,"argument-error"),ee(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ee(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Pt()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){ee(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ee(Ag()&&!kg(),this.auth,"internal-error"),await gN(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await vC(this.auth);ee(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ee(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function gN(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class Mg{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ga._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function yN(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=ft(i),o=await jf(s,e,ve(t));return new Mg(o,u=>Vf(s,u))}async function _N(i,e,t){const s=ve(i);await Pf(!1,s,"phone");const o=await jf(s.auth,e,ve(t));return new Mg(o,u=>Qb(s,u))}async function vN(i,e,t){const s=ve(i);if(ot(s.auth.app))return Promise.reject($t(s.auth));const o=await jf(s.auth,e,ve(t));return new Mg(o,u=>Yb(s,u))}async function jf(i,e,t){var s;if(!i._getRecaptchaConfig())try{await $C(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const u=o.session;if("phoneNumber"in o){ee(u.type==="enroll",i,"internal-error");const f={idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await _s(i,f,"mfaSmsEnrollment",async(v,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Iu){ee((t==null?void 0:t.type)===Cu,v,"argument-error");const R=await Tp(v,T,t);return CT(v,R)}return CT(v,T)},"PHONE_PROVIDER").catch(v=>Promise.reject(v))).phoneSessionInfo.sessionInfo}else{ee(u.type==="signin",i,"internal-error");const f=((s=o.multiFactorHint)==null?void 0:s.uid)||o.multiFactorUid;ee(f,i,"missing-multi-factor-info");const m={mfaPendingCredential:u.credential,mfaEnrollmentId:f,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await _s(i,m,"mfaSmsSignIn",async(T,R)=>{if(R.phoneSignInInfo.captchaResponse===Iu){ee((t==null?void 0:t.type)===Cu,T,"argument-error");const j=await Tp(T,R,t);return DT(T,j)}return DT(T,R)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const u={phoneNumber:o.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await _s(i,u,"sendVerificationCode",async(y,v)=>{if(v.captchaResponse===Iu){ee((t==null?void 0:t.type)===Cu,y,"argument-error");const T=await Tp(y,v,t);return RT(y,T)}return RT(y,v)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).sessionInfo}}finally{t==null||t._reset()}}async function EN(i,e){const t=ve(i);if(ot(t.auth.app))return Promise.reject($t(t.auth));await Rg(t,e)}async function Tp(i,e,t){ee(t.type===Cu,i,"argument-error");const s=await t.verify();ee(typeof s=="string",i,"argument-error");const o={...e};if("phoneEnrollmentInfo"in o){const u=o.phoneEnrollmentInfo.phoneNumber,f=o.phoneEnrollmentInfo.captchaResponse,m=o.phoneEnrollmentInfo.clientType,p=o.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:s,captchaResponse:f,clientType:m,recaptchaVersion:p}}),o}else if("phoneSignInInfo"in o){const u=o.phoneSignInInfo.captchaResponse,f=o.phoneSignInInfo.clientType,m=o.phoneSignInInfo.recaptchaVersion;return Object.assign(o,{phoneSignInInfo:{recaptchaToken:s,captchaResponse:u,clientType:f,recaptchaVersion:m}}),o}else return Object.assign(o,{recaptchaToken:s}),o}/**
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
 */let va=class Wh{constructor(e){this.providerId=Wh.PROVIDER_ID,this.auth=ft(e)}verifyPhoneNumber(e,t){return jf(this.auth,e,ve(t))}static credential(e,t){return ga._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Wh.credentialFromTaggedObject(t)}static credentialFromError(e){return Wh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?ga._fromTokenResponse(t,s):null}};va.PROVIDER_ID="phone";va.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ia(i,e){return e?Ln(e):(ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Pg extends Zo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TN(i){return Kb(i.auth,new Pg(i),i.bypassAuthState)}function bN(i){const{auth:e,user:t}=i;return ee(t,e,"internal-error"),Gb(t,new Pg(i),i.bypassAuthState)}async function AN(i){const{auth:e,user:t}=i;return ee(t,e,"internal-error"),Rg(t,new Pg(i),i.bypassAuthState)}/**
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
 */class rA{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TN;case"linkViaPopup":case"linkViaRedirect":return AN;case"reauthViaPopup":case"reauthViaRedirect":return bN;default:sn(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wN=new Wu(2e3,1e4);async function SN(i,e,t){if(ot(i.app))return Promise.reject(Ht(i,"operation-not-supported-in-this-environment"));const s=ft(i);Jo(i,e,kr);const o=Ia(s,t);return new Ar(s,"signInViaPopup",e,o).executeNotNull()}async function RN(i,e,t){const s=ve(i);if(ot(s.auth.app))return Promise.reject(Ht(s.auth,"operation-not-supported-in-this-environment"));Jo(s.auth,e,kr);const o=Ia(s.auth,t);return new Ar(s.auth,"reauthViaPopup",e,o,s).executeNotNull()}async function IN(i,e,t){const s=ve(i);Jo(s.auth,e,kr);const o=Ia(s.auth,t);return new Ar(s.auth,"linkViaPopup",e,o,s).executeNotNull()}class Ar extends rA{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wN.get())};e()}}Ar.currentPopupAction=null;/**
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
 */const CN="pendingRedirect",Nu=new Map;class NN extends rA{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const s=await xN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xN(i,e){const t=aA(e),s=sA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}async function Vg(i,e){return sA(i)._set(aA(e),"true")}function DN(){Nu.clear()}function Ug(i,e){Nu.set(i._key(),e)}function sA(i){return Ln(i._redirectPersistence)}function aA(i){return pa(CN,i.config.apiKey,i.name)}/**
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
 */function ON(i,e,t){return kN(i,e,t)}async function kN(i,e,t){if(ot(i.app))return Promise.reject($t(i));const s=ft(i);Jo(i,e,kr),await s._initializationPromise;const o=Ia(s,t);return await Vg(o,s),o._openRedirect(s,e,"signInViaRedirect")}function MN(i,e,t){return PN(i,e,t)}async function PN(i,e,t){const s=ve(i);if(Jo(s.auth,e,kr),ot(s.auth.app))return Promise.reject($t(s.auth));await s.auth._initializationPromise;const o=Ia(s.auth,t);await Vg(o,s.auth);const u=await oA(s);return o._openRedirect(s.auth,e,"reauthViaRedirect",u)}function VN(i,e,t){return UN(i,e,t)}async function UN(i,e,t){const s=ve(i);Jo(s.auth,e,kr),await s.auth._initializationPromise;const o=Ia(s.auth,t);await Pf(!1,s,e.providerId),await Vg(o,s.auth);const u=await oA(s);return o._openRedirect(s.auth,e,"linkViaRedirect",u)}async function LN(i,e){return await ft(i)._initializationPromise,Bf(i,e,!1)}async function Bf(i,e,t=!1){if(ot(i.app))return Promise.reject($t(i));const s=ft(i),o=Ia(s,e),f=await new NN(s,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}async function oA(i){const e=nc(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const zN=600*1e3;class lA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!uA(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ht(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zN&&this.cachedEventUids.clear(),this.cachedEventUids.has(OT(e))}saveEventToCache(e){this.cachedEventUids.add(OT(e)),this.lastProcessedEventTime=Date.now()}}function OT(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function uA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uA(i);default:return!1}}/**
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
 */async function cA(i,e={}){return _t(i,"GET","/v1/projects",e)}/**
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
 */const BN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qN=/^https?/;async function HN(i){if(i.config.emulator)return;const{authorizedDomains:e}=await cA(i);for(const t of e)try{if(FN(t))return}catch{}sn(i,"unauthorized-domain")}function FN(i){const e=Lu(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===s}if(!qN.test(t))return!1;if(BN.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const GN=new Wu(3e4,6e4);function kT(){const i=Pt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function KN(i){return new Promise((e,t)=>{var o,u,f;function s(){kT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kT(),t(Ht(i,"network-request-failed"))},timeout:GN.get()})}if((u=(o=Pt().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Pt().gapi)!=null&&f.load)s();else{const m=Lb("iframefcb");return Pt()[m]=()=>{gapi.load?s():t(Ht(i,"network-request-failed"))},Sg(`${jC()}?onload=${m}`).catch(p=>t(p))}}).catch(e=>{throw Jh=null,e})}let Jh=null;function QN(i){return Jh=Jh||KN(i),Jh}/**
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
 */const YN=new Wu(5e3,15e3),$N="__/auth/iframe",XN="emulator/auth/iframe",WN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZN(i){const e=i.config;ee(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?wg(e,XN):`https://${i.config.authDomain}/${$N}`,s={apiKey:e.apiKey,appName:i.name,v:Dr},o=JN.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Xo(s).slice(1)}`}async function ex(i){const e=await QN(i),t=Pt().gapi;return ee(t,i,"internal-error"),e.open({where:document.body,url:ZN(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WN,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ht(i,"network-request-failed"),m=Pt().setTimeout(()=>{u(f)},YN.get());function p(){Pt().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
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
 */const tx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nx=500,ix=600,rx="_blank",sx="http://localhost";class MT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(i,e,t,s=nx,o=ix){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p={...tx,width:s.toString(),height:o.toString(),top:u,left:f},y=Lt().toLowerCase();t&&(m=Ob(y)?rx:t),xb(y)&&(e=e||sx,p.scrollbars="yes");const v=Object.entries(p).reduce((R,[j,Q])=>`${R}${j}=${Q},`,"");if(xC(y)&&m!=="_self")return ox(e||"",m),new MT(null);const T=window.open(e||"",m,v);ee(T,i,"popup-blocked");try{T.focus()}catch{}return new MT(T)}function ox(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const lx="__/auth/handler",ux="emulator/auth/handler",cx=encodeURIComponent("fac");async function Up(i,e,t,s,o,u){ee(i.config.authDomain,i,"auth-domain-config-required"),ee(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Dr,eventId:o};if(e instanceof kr){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",LR(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(u||{}))f[v]=T}if(e instanceof el){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(f.scopes=v.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const v of Object.keys(m))m[v]===void 0&&delete m[v];const p=await i._getAppCheckToken(),y=p?`#${cx}=${encodeURIComponent(p)}`:"";return`${hx(i)}?${Xo(m).slice(1)}${y}`}function hx({config:i}){return i.emulator?wg(i,ux):`https://${i.authDomain}/${lx}`}/**
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
 */const bp="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_a,this._completeRedirectFn=Bf,this._overrideRedirectResult=Ug}async _openPopup(e,t,s,o){var f;Ei((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await Up(e,t,s,Lu(),o);return ax(e,u,nc())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Up(e,t,s,Lu(),o);return eN(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Ei(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ex(e),s=new lA(e);return t.register("authEvent",o=>(ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bp,{type:bp},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[bp];u!==void 0&&t(!!u),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=HN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vb()||Db()||Zu()}}const dx=fx;class mx{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return Xi("unexpected MultiFactorSessionType")}}}class Lg extends mx{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Lg(e)}_finalizeEnroll(e,t,s){return Q2(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return uN(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hA{constructor(){}static assertion(e){return Lg._fromCredential(e)}}hA.FACTOR_ID="phone";var PT="@firebase/auth",VT="1.12.0";/**
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
 */class px{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function gx(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yx(i){Ir(new vi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;ee(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ub(i)},y=new VC(s,o,u,p);return XC(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ir(new vi("auth-internal",e=>{const t=ft(e.getProvider("auth").getImmediate());return(s=>new px(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(PT,VT,gx(i)),Bn(PT,VT,"esm2020")}/**
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
 */const _x=300;RR("authIdTokenMaxAge");function vx(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}UC({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Ht("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",vx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yx("Browser");/**
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
 */function Ea(){return window}/**
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
 */const Ex=2e3;async function Tx(i,e,t){const{BuildInfo:s}=Ea();Ei(e.sessionId,"AuthEvent did not contain a session ID");const o=await Rx(e.sessionId),u={};return Zu()?u.ibi=s.packageName:Ju()?u.apn=s.packageName:sn(i,"operation-not-supported-in-this-environment"),s.displayName&&(u.appDisplayName=s.displayName),u.sessionId=o,Up(i,t,e.type,void 0,e.eventId??void 0,u)}async function bx(i){const{BuildInfo:e}=Ea(),t={};Zu()?t.iosBundleId=e.packageName:Ju()?t.androidPackageName=e.packageName:sn(i,"operation-not-supported-in-this-environment"),await cA(i,t)}function Ax(i){const{cordova:e}=Ea();return new Promise(t=>{e.plugins.browsertab.isAvailable(s=>{let o=null;s?e.plugins.browsertab.openUrl(i):o=e.InAppBrowser.open(i,NC()?"_blank":"_system","location=yes"),t(o)})})}async function wx(i,e,t){const{cordova:s}=Ea();let o=()=>{};try{await new Promise((u,f)=>{let m=null;function p(){var R;u();const T=(R=s.plugins.browsertab)==null?void 0:R.close;typeof T=="function"&&T(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function y(){m||(m=window.setTimeout(()=>{f(Ht(i,"redirect-cancelled-by-user"))},Ex))}function v(){(document==null?void 0:document.visibilityState)==="visible"&&y()}e.addPassiveListener(p),document.addEventListener("resume",y,!1),Ju()&&document.addEventListener("visibilitychange",v,!1),o=()=>{e.removePassiveListener(p),document.removeEventListener("resume",y,!1),document.removeEventListener("visibilitychange",v,!1),m&&window.clearTimeout(m)}})}finally{o()}}function Sx(i){var t,s,o,u,f,m,p,y,v,T;const e=Ea();ee(typeof((t=e==null?void 0:e.universalLinks)==null?void 0:t.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ee(typeof((s=e==null?void 0:e.BuildInfo)==null?void 0:s.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ee(typeof((f=(u=(o=e==null?void 0:e.cordova)==null?void 0:o.plugins)==null?void 0:u.browsertab)==null?void 0:f.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ee(typeof((y=(p=(m=e==null?void 0:e.cordova)==null?void 0:m.plugins)==null?void 0:p.browsertab)==null?void 0:y.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ee(typeof((T=(v=e==null?void 0:e.cordova)==null?void 0:v.InAppBrowser)==null?void 0:T.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Rx(i){const e=Ix(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(o=>o.toString(16).padStart(2,"0")).join("")}function Ix(i){if(Ei(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let s=0;s<i.length;s++)t[s]=i.charCodeAt(s);return t}/**
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
 */const Cx=20;class Nx extends lA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function xx(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:kx(),postBody:null,tenantId:i.tenantId,error:Ht(i,"no-auth-event")}}function Dx(i,e){return Lp()._set(zp(i),e)}async function UT(i){const e=await Lp()._get(zp(i));return e&&await Lp()._remove(zp(i)),e}function Ox(i,e){var s,o;const t=Px(e);if(t.includes("/__/auth/callback")){const u=Zh(t),f=u.firebaseError?Mx(decodeURIComponent(u.firebaseError)):null,m=(o=(s=f==null?void 0:f.code)==null?void 0:s.split("auth/"))==null?void 0:o[1],p=m?Ht(m):null;return p?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:t,postBody:null}}return null}function kx(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Cx;t++){const s=Math.floor(Math.random()*e.length);i.push(e.charAt(s))}return i.join("")}function Lp(){return Ln(Og)}function zp(i){return pa("authEvent",i.config.apiKey,i.name)}function Mx(i){try{return JSON.parse(i)}catch{return null}}function Px(i){const e=Zh(i),t=e.link?decodeURIComponent(e.link):void 0,s=Zh(t).link,o=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Zh(o).link||o||s||t||i}function Zh(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return Co(t.join("?"))}/**
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
 */const Vx=500;class Ux{constructor(){this._redirectPersistence=_a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Bf,this._overrideRedirectResult=Ug}async _initialize(e){const t=e._key();let s=this.eventManagers.get(t);return s||(s=new Nx(e),this.eventManagers.set(t,s),this.attachCallbackListeners(e,s)),s}_openPopup(e){sn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,s,o){Sx(e);const u=await this._initialize(e);await u.initialized(),u.resetRedirect(),DN(),await this._originValidation(e);const f=xx(e,s,o);await Dx(e,f);const m=await Tx(e,f,t),p=await Ax(m);return wx(e,u,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bx(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:s,handleOpenURL:o,BuildInfo:u}=Ea(),f=setTimeout(async()=>{await UT(e),t.onEvent(LT())},Vx),m=async v=>{clearTimeout(f);const T=await UT(e);let R=null;T&&(v!=null&&v.url)&&(R=Ox(T,v.url)),t.onEvent(R||LT())};typeof s<"u"&&typeof s.subscribe=="function"&&s.subscribe(null,m);const p=o,y=`${u.packageName.toLowerCase()}://`;Ea().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(y)&&m({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const Lx=Ux;function LT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ht("no-auth-event")}}/**
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
 */function zx(i,e){ft(i)._logFramework(e)}var jx="@firebase/auth-compat",Bx="0.6.2";/**
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
 */const qx=1e3;function xu(){var i;return((i=self==null?void 0:self.location)==null?void 0:i.protocol)||null}function Hx(){return xu()==="http:"||xu()==="https:"}function fA(i=Lt()){return!!((xu()==="file:"||xu()==="ionic:"||xu()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function Fx(){return mg()||dg()}function Gx(){return ab()&&(document==null?void 0:document.documentMode)===11}function Kx(i=Lt()){return/Edge\/\d+/.test(i)}function Qx(i=Lt()){return Gx()||Kx(i)}function dA(){try{const i=self.localStorage,e=nc();if(i)return i.setItem(e,"1"),i.removeItem(e),Qx()?cf():!0}catch{return zg()&&cf()}return!1}function zg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Ap(){return(Hx()||sb()||fA())&&!Fx()&&dA()&&!zg()}function mA(){return fA()&&typeof document<"u"}async function Yx(){return mA()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},qx);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function $x(){return typeof window<"u"?window:null}/**
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
 */const Un={LOCAL:"local",NONE:"none",SESSION:"session"},pu=ee,pA="persistence";function Xx(i,e){if(pu(Object.values(Un).includes(e),i,"invalid-persistence-type"),mg()){pu(e!==Un.SESSION,i,"unsupported-persistence-type");return}if(dg()){pu(e===Un.NONE,i,"unsupported-persistence-type");return}if(zg()){pu(e===Un.NONE||e===Un.LOCAL&&cf(),i,"unsupported-persistence-type");return}pu(e===Un.NONE||dA(),i,"unsupported-persistence-type")}async function jp(i){await i._initializationPromise;const e=gA(),t=pa(pA,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function Wx(i,e){const t=gA();if(!t)return[];const s=pa(pA,i,e);switch(t.getItem(s)){case Un.NONE:return[Bo];case Un.LOCAL:return[Bu,_a];case Un.SESSION:return[_a];default:return[]}}function gA(){var i;try{return((i=$x())==null?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const Jx=ee;class ps{constructor(){this.browserResolver=Ln(dx),this.cordovaResolver=Ln(Lx),this.underlyingResolver=null,this._redirectPersistence=_a,this._completeRedirectFn=Bf,this._overrideRedirectResult=Ug}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,s,o)}async _openRedirect(e,t,s,o){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,s,o)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return mA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Jx(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Yx();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function yA(i){return i.unwrap()}function Zx(i){return i.wrapped()}/**
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
 */function eD(i){return _A(i)}function tD(i,e){var s;const t=(s=e.customData)==null?void 0:s._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const o=e;o.resolver=new nD(i,K2(i,e))}else if(t){const o=_A(e),u=e;o&&(u.credential=o,u.tenantId=t.tenantId||void 0,u.email=t.email||void 0,u.phoneNumber=t.phoneNumber||void 0)}}function _A(i){const{_tokenResponse:e}=i instanceof fn?i.customData:i;if(!e)return null;if(!(i instanceof fn)&&"temporaryProof"in e&&"phoneNumber"in e)return va.credentialFromResult(i);const t=e.providerId;if(!t||t===du.PASSWORD)return null;let s;switch(t){case du.GOOGLE:s=Ki;break;case du.FACEBOOK:s=Gi;break;case du.GITHUB:s=Qi;break;case du.TWITTER:s=Yi;break;default:const{oauthIdToken:o,oauthAccessToken:u,oauthTokenSecret:f,pendingToken:m,nonce:p}=e;return!u&&!f&&!o&&!m?null:m?t.startsWith("saml.")?qo._create(t,m):tr._fromParams({providerId:t,signInMethod:t,pendingToken:m,idToken:o,accessToken:u}):new Do(t).credential({idToken:o,accessToken:u,rawNonce:p})}return i instanceof fn?s.credentialFromError(i):s.credentialFromResult(i)}function Sn(i,e){return e.catch(t=>{throw t instanceof fn&&tD(i,t),t}).then(t=>{const s=t.operationType,o=t.user;return{operationType:s,credential:eD(t),additionalUserInfo:G2(t),user:qf.getOrCreate(o)}})}async function Bp(i,e){const t=await e;return{verificationId:t.verificationId,confirm:s=>Sn(i,t.confirm(s))}}class nD{constructor(e,t){this.resolver=t,this.auth=Zx(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Sn(yA(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let qf=class Tu{constructor(e){this._delegate=e,this.multiFactor=$2(e)}static getOrCreate(e){return Tu.USER_MAP.has(e)||Tu.USER_MAP.set(e,new Tu(e)),Tu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Sn(this.auth,Qb(this._delegate,e))}async linkWithPhoneNumber(e,t){return Bp(this.auth,_N(this._delegate,e,t))}async linkWithPopup(e){return Sn(this.auth,IN(this._delegate,e,ps))}async linkWithRedirect(e){return await jp(ft(this.auth)),VN(this._delegate,e,ps)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Sn(this.auth,Yb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Bp(this.auth,vN(this._delegate,e,t))}reauthenticateWithPopup(e){return Sn(this.auth,RN(this._delegate,e,ps))}async reauthenticateWithRedirect(e){return await jp(ft(this.auth)),MN(this._delegate,e,ps)}sendEmailVerification(e){return M2(this._delegate,e)}async unlink(e){return await E2(this._delegate,e),this}updateEmail(e){return L2(this._delegate,e)}updatePassword(e){return z2(this._delegate,e)}updatePhoneNumber(e){return EN(this._delegate,e)}updateProfile(e){return U2(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return P2(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};qf.USER_MAP=new WeakMap;/**
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
 */const gu=ee;class qp{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:s}=e.options;gu(s,"invalid-api-key",{appName:e.name}),gu(s,"invalid-api-key",{appName:e.name});const o=typeof window<"u"?ps:void 0;this._delegate=t.initialize({options:{persistence:iD(s,e.name),popupRedirectResolver:o}}),this._delegate._updateErrorMap(uC),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?qf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){WC(this._delegate,e,t)}applyActionCode(e){return S2(this._delegate,e)}checkActionCode(e){return $b(this._delegate,e)}confirmPasswordReset(e,t){return w2(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Sn(this._delegate,I2(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return k2(this._delegate,e)}isSignInWithEmailLink(e){return x2(this._delegate,e)}async getRedirectResult(){gu(Ap(),this._delegate,"operation-not-supported-in-this-environment");const e=await LN(this._delegate,ps);return e?Sn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){zx(this._delegate,e)}onAuthStateChanged(e,t,s){const{next:o,error:u,complete:f}=zT(e,t,s);return this._delegate.onAuthStateChanged(o,u,f)}onIdTokenChanged(e,t,s){const{next:o,error:u,complete:f}=zT(e,t,s);return this._delegate.onIdTokenChanged(o,u,f)}sendSignInLinkToEmail(e,t){return N2(this._delegate,e,t)}sendPasswordResetEmail(e,t){return A2(this._delegate,e,t||void 0)}async setPersistence(e){Xx(this._delegate,e);let t;switch(e){case Un.SESSION:t=_a;break;case Un.LOCAL:t=await Ln(Bu)._isAvailable()?Bu:Og;break;case Un.NONE:t=Bo;break;default:return sn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Sn(this._delegate,v2(this._delegate))}signInWithCredential(e){return Sn(this._delegate,Vf(this._delegate,e))}signInWithCustomToken(e){return Sn(this._delegate,b2(this._delegate,e))}signInWithEmailAndPassword(e,t){return Sn(this._delegate,C2(this._delegate,e,t))}signInWithEmailLink(e,t){return Sn(this._delegate,D2(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Bp(this._delegate,yN(this._delegate,e,t))}async signInWithPopup(e){return gu(Ap(),this._delegate,"operation-not-supported-in-this-environment"),Sn(this._delegate,SN(this._delegate,e,ps))}async signInWithRedirect(e){return gu(Ap(),this._delegate,"operation-not-supported-in-this-environment"),await jp(this._delegate),ON(this._delegate,e,ps)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return R2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}qp.Persistence=Un;function zT(i,e,t){let s=i;typeof i!="function"&&({next:s,error:e,complete:t}=i);const o=s;return{next:f=>o(f&&qf.getOrCreate(f)),error:e,complete:t}}function iD(i,e){const t=Wx(i,e);if(typeof self<"u"&&!t.includes(Bu)&&t.push(Bu),typeof window<"u")for(const s of[Og,_a])t.includes(s)||t.push(s);return t.includes(Bo)||t.push(Bo),t}/**
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
 */class jg{static credential(e,t){return va.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new va(yA(Wo.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}jg.PHONE_SIGN_IN_METHOD=va.PHONE_SIGN_IN_METHOD;jg.PROVIDER_ID=va.PROVIDER_ID;/**
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
 */const rD=ee;class sD{constructor(e,t,s=Wo.app()){var o;rD((o=s.options)==null?void 0:o.apiKey,"invalid-api-key",{appName:s.name}),this._delegate=new pN(s.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const aD="auth-compat";function oD(i){i.INTERNAL.registerComponent(new vi(aD,e=>{const t=e.getProvider("app-compat").getImmediate(),s=e.getProvider("auth");return new qp(t,s)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:bo.EMAIL_SIGNIN,PASSWORD_RESET:bo.PASSWORD_RESET,RECOVER_EMAIL:bo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:bo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:bo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:bo.VERIFY_EMAIL}},EmailAuthProvider:Ds,FacebookAuthProvider:Gi,GithubAuthProvider:Qi,GoogleAuthProvider:Ki,OAuthProvider:Do,SAMLAuthProvider:mf,PhoneAuthProvider:jg,PhoneMultiFactorGenerator:hA,RecaptchaVerifier:sD,TwitterAuthProvider:Yi,Auth:qp,AuthCredential:Zo,Error:fn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(jx,Bx)}oD(Wo);/**
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
 */const vA="firebasestorage.googleapis.com",EA="storageBucket",lD=120*1e3,uD=600*1e3,cD=1e3;/**
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
 */class mt extends fn{constructor(e,t,s=0){super(wp(e),`Firebase Storage: ${t} (${wp(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,mt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(i){i.UNKNOWN="unknown",i.OBJECT_NOT_FOUND="object-not-found",i.BUCKET_NOT_FOUND="bucket-not-found",i.PROJECT_NOT_FOUND="project-not-found",i.QUOTA_EXCEEDED="quota-exceeded",i.UNAUTHENTICATED="unauthenticated",i.UNAUTHORIZED="unauthorized",i.UNAUTHORIZED_APP="unauthorized-app",i.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",i.INVALID_CHECKSUM="invalid-checksum",i.CANCELED="canceled",i.INVALID_EVENT_NAME="invalid-event-name",i.INVALID_URL="invalid-url",i.INVALID_DEFAULT_BUCKET="invalid-default-bucket",i.NO_DEFAULT_BUCKET="no-default-bucket",i.CANNOT_SLICE_BLOB="cannot-slice-blob",i.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",i.NO_DOWNLOAD_URL="no-download-url",i.INVALID_ARGUMENT="invalid-argument",i.INVALID_ARGUMENT_COUNT="invalid-argument-count",i.APP_DELETED="app-deleted",i.INVALID_ROOT_OPERATION="invalid-root-operation",i.INVALID_FORMAT="invalid-format",i.INTERNAL_ERROR="internal-error",i.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function wp(i){return"storage/"+i}function Bg(){const i="An unknown error occurred, please check the error payload for server response.";return new mt(lt.UNKNOWN,i)}function hD(i){return new mt(lt.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")}function fD(i){return new mt(lt.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dD(){const i="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new mt(lt.UNAUTHENTICATED,i)}function mD(){return new mt(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pD(i){return new mt(lt.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")}function TA(){return new mt(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bA(){return new mt(lt.CANCELED,"User canceled the upload/download.")}function gD(i){return new mt(lt.INVALID_URL,"Invalid URL '"+i+"'.")}function yD(i){return new mt(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}function _D(){return new mt(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+EA+"' property when initializing the app?")}function AA(){return new mt(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vD(){return new mt(lt.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function ED(){return new mt(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TD(i){return new mt(lt.UNSUPPORTED_ENVIRONMENT,`${i} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ko(i){return new mt(lt.INVALID_ARGUMENT,i)}function wA(){return new mt(lt.APP_DELETED,"The Firebase app was deleted.")}function SA(i){return new mt(lt.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Du(i,e){return new mt(lt.INVALID_FORMAT,"String does not match format '"+i+"': "+e)}function yu(i){throw new mt(lt.INTERNAL_ERROR,"Internal error: "+i)}/**
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
 */class hn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=hn.makeFromUrl(e,t)}catch{return new hn(e,"")}if(s.path==="")return s;throw yD(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(ye){ye.path.charAt(ye.path.length-1)==="/"&&(ye.path_=ye.path_.slice(0,-1))}const f="(/(.*))?$",m=new RegExp("^gs://"+o+f,"i"),p={bucket:1,path:3};function y(ye){ye.path_=decodeURIComponent(ye.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",j=new RegExp(`^https?://${T}/${v}/b/${o}/o${R}`,"i"),Q={bucket:1,path:3},Z=t===vA?"(?:storage.googleapis.com|storage.cloud.google.com)":t,J="([^?#]*)",ce=new RegExp(`^https?://${Z}/${o}/${J}`,"i"),ue=[{regex:m,indices:p,postModify:u},{regex:j,indices:Q,postModify:y},{regex:ce,indices:{bucket:1,path:2},postModify:y}];for(let ye=0;ye<ue.length;ye++){const Ce=ue[ye],te=Ce.regex.exec(e);if(te){const I=te[Ce.indices.bucket];let S=te[Ce.indices.path];S||(S=""),s=new hn(I,S),Ce.postModify(s);break}}if(s==null)throw gD(e);return s}}class bD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function AD(i,e,t){let s=1,o=null,u=null,f=!1,m=0;function p(){return m===2}let y=!1;function v(...J){y||(y=!0,e.apply(null,J))}function T(J){o=setTimeout(()=>{o=null,i(j,p())},J)}function R(){u&&clearTimeout(u)}function j(J,...ce){if(y){R();return}if(J){R(),v.call(null,J,...ce);return}if(p()||f){R(),v.call(null,J,...ce);return}s<64&&(s*=2);let ue;m===1?(m=2,ue=0):ue=(s+Math.random())*1e3,T(ue)}let Q=!1;function Z(J){Q||(Q=!0,R(),!y&&(o!==null?(J||(m=2),clearTimeout(o),T(0)):J||(m=1)))}return T(0),u=setTimeout(()=>{f=!0,Z(!0)},t),Z}function wD(i){i(!1)}/**
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
 */function SD(i){return i!==void 0}function RD(i){return typeof i=="function"}function ID(i){return typeof i=="object"&&!Array.isArray(i)}function Hf(i){return typeof i=="string"||i instanceof String}function jT(i){return qg()&&i instanceof Blob}function qg(){return typeof Blob<"u"}function Hp(i,e,t,s){if(s<e)throw ko(`Invalid value for '${i}'. Expected ${e} or greater.`);if(s>t)throw ko(`Invalid value for '${i}'. Expected ${t} or less.`)}/**
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
 */function Os(i,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${i}`}function RA(i){const e=encodeURIComponent;let t="?";for(const s in i)if(i.hasOwnProperty(s)){const o=e(s)+"="+e(i[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var ya;(function(i){i[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT"})(ya||(ya={}));/**
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
 */function IA(i,e){const t=i>=500&&i<600,o=[408,429].indexOf(i)!==-1,u=e.indexOf(i)!==-1;return t||o||u}/**
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
 */class CD{constructor(e,t,s,o,u,f,m,p,y,v,T,R=!0,j=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=m,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=R,this.isUsingEmulator=j,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Q,Z)=>{this.resolve_=Q,this.reject_=Z,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Bh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=m=>{const p=m.loaded,y=m.lengthComputable?m.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const m=u.getErrorCode()===ya.NO_ERROR,p=u.getStatus();if(!m||IA(p,this.additionalRetryCodes_)&&this.retry){const v=u.getErrorCode()===ya.ABORT;s(!1,new Bh(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new Bh(y,u))})},t=(s,o)=>{const u=this.resolve_,f=this.reject_,m=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(m,m.getResponse());SD(p)?u(p):u()}catch(p){f(p)}else if(m!==null){const p=Bg();p.serverResponse=m.getErrorText(),this.errorCallback_?f(this.errorCallback_(m,p)):f(p)}else if(o.canceled){const p=this.appDelete_?wA():bA();f(p)}else{const p=TA();f(p)}};this.canceled_?t(!1,new Bh(!1,null,!0)):this.backoffId_=AD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&wD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bh{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function ND(i,e){e!==null&&e.length>0&&(i.Authorization="Firebase "+e)}function xD(i,e){i["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DD(i,e){e&&(i["X-Firebase-GMPID"]=e)}function OD(i,e){e!==null&&(i["X-Firebase-AppCheck"]=e)}function kD(i,e,t,s,o,u,f=!0,m=!1){const p=RA(i.urlParams),y=i.url+p,v=Object.assign({},i.headers);return DD(v,e),ND(v,t),xD(v,u),OD(v,s),new CD(y,i.method,v,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,o,f,m)}/**
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
 */function MD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function PD(...i){const e=MD();if(e!==void 0){const t=new e;for(let s=0;s<i.length;s++)t.append(i[s]);return t.getBlob()}else{if(qg())return new Blob(i);throw new mt(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function VD(i,e,t){return i.webkitSlice?i.webkitSlice(e,t):i.mozSlice?i.mozSlice(e,t):i.slice?i.slice(e,t):null}/**
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
 */function UD(i){if(typeof atob>"u")throw TD("base-64");return atob(i)}/**
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
 */const ni={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sp{constructor(e,t){this.data=e,this.contentType=t||null}}function CA(i,e){switch(i){case ni.RAW:return new Sp(NA(e));case ni.BASE64:case ni.BASE64URL:return new Sp(xA(i,e));case ni.DATA_URL:return new Sp(zD(e),jD(e))}throw Bg()}function NA(i){const e=[];for(let t=0;t<i.length;t++){let s=i.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<i.length-1&&(i.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const u=s,f=i.charCodeAt(++t);s=65536|(u&1023)<<10|f&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function LD(i){let e;try{e=decodeURIComponent(i)}catch{throw Du(ni.DATA_URL,"Malformed data URL.")}return NA(e)}function xA(i,e){switch(i){case ni.BASE64:{const o=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(o||u)throw Du(i,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ni.BASE64URL:{const o=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(o||u)throw Du(i,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=UD(e)}catch(o){throw o.message.includes("polyfill")?o:Du(i,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class DA{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Du(ni.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=BD(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function zD(i){const e=new DA(i);return e.base64?xA(ni.BASE64,e.rest):LD(e.rest)}function jD(i){return new DA(i).contentType}function BD(i,e){return i.length>=e.length?i.substring(i.length-e.length)===e:!1}/**
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
 */class br{constructor(e,t){let s=0,o="";jT(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(jT(this.data_)){const s=this.data_,o=VD(s,e,t);return o===null?null:new br(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new br(s,!0)}}static getBlob(...e){if(qg()){const t=e.map(s=>s instanceof br?s.data_:s);return new br(PD.apply(null,t))}else{const t=e.map(f=>Hf(f)?CA(ni.RAW,f).data:f.data_);let s=0;t.forEach(f=>{s+=f.byteLength});const o=new Uint8Array(s);let u=0;return t.forEach(f=>{for(let m=0;m<f.length;m++)o[u++]=f[m]}),new br(o,!0)}}uploadData(){return this.data_}}/**
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
 */function Hg(i){let e;try{e=JSON.parse(i)}catch{return null}return ID(e)?e:null}/**
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
 */function qD(i){if(i.length===0)return null;const e=i.lastIndexOf("/");return e===-1?"":i.slice(0,e)}function HD(i,e){const t=e.split("/").filter(s=>s.length>0).join("/");return i.length===0?t:i+"/"+t}function OA(i){const e=i.lastIndexOf("/",i.length-2);return e===-1?i:i.slice(e+1)}/**
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
 */function FD(i,e){return e}class gn{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||FD}}let qh=null;function GD(i){return!Hf(i)||i.length<2?i:OA(i)}function Ff(){if(qh)return qh;const i=[];i.push(new gn("bucket")),i.push(new gn("generation")),i.push(new gn("metageneration")),i.push(new gn("name","fullPath",!0));function e(u,f){return GD(f)}const t=new gn("name");t.xform=e,i.push(t);function s(u,f){return f!==void 0?Number(f):f}const o=new gn("size");return o.xform=s,i.push(o),i.push(new gn("timeCreated")),i.push(new gn("updated")),i.push(new gn("md5Hash",null,!0)),i.push(new gn("cacheControl",null,!0)),i.push(new gn("contentDisposition",null,!0)),i.push(new gn("contentEncoding",null,!0)),i.push(new gn("contentLanguage",null,!0)),i.push(new gn("contentType",null,!0)),i.push(new gn("metadata","customMetadata",!0)),qh=i,qh}function KD(i,e){function t(){const s=i.bucket,o=i.fullPath,u=new hn(s,o);return e._makeStorageReference(u)}Object.defineProperty(i,"ref",{get:t})}function QD(i,e,t){const s={};s.type="file";const o=t.length;for(let u=0;u<o;u++){const f=t[u];s[f.local]=f.xform(s,e[f.server])}return KD(s,i),s}function kA(i,e,t){const s=Hg(e);return s===null?null:QD(i,s,t)}function YD(i,e,t,s){const o=Hg(e);if(o===null||!Hf(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const f=encodeURIComponent;return u.split(",").map(y=>{const v=i.bucket,T=i.fullPath,R="/b/"+f(v)+"/o/"+f(T),j=Os(R,t,s),Q=RA({alt:"media",token:y});return j+Q})[0]}function Fg(i,e){const t={},s=e.length;for(let o=0;o<s;o++){const u=e[o];u.writable&&(t[u.server]=i[u.local])}return JSON.stringify(t)}/**
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
 */const BT="prefixes",qT="items";function $D(i,e,t){const s={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[BT])for(const o of t[BT]){const u=o.replace(/\/$/,""),f=i._makeStorageReference(new hn(e,u));s.prefixes.push(f)}if(t[qT])for(const o of t[qT]){const u=i._makeStorageReference(new hn(e,o.name));s.items.push(u)}return s}function XD(i,e,t){const s=Hg(t);return s===null?null:$D(i,e,s)}class Mr{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Wi(i){if(!i)throw Bg()}function Gf(i,e){function t(s,o){const u=kA(i,o,e);return Wi(u!==null),u}return t}function WD(i,e){function t(s,o){const u=XD(i,e,o);return Wi(u!==null),u}return t}function JD(i,e){function t(s,o){const u=kA(i,o,e);return Wi(u!==null),YD(u,o,i.host,i._protocol)}return t}function tl(i){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=mD():o=dD():t.getStatus()===402?o=fD(i.bucket):t.getStatus()===403?o=pD(i.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function Kf(i){const e=tl(i);function t(s,o){let u=e(s,o);return s.getStatus()===404&&(u=hD(i.path)),u.serverResponse=o.serverResponse,u}return t}function MA(i,e,t){const s=e.fullServerUrl(),o=Os(s,i.host,i._protocol),u="GET",f=i.maxOperationRetryTime,m=new Mr(o,u,Gf(i,t),f);return m.errorHandler=Kf(e),m}function ZD(i,e,t,s,o){const u={};e.isRoot?u.prefix="":u.prefix=e.path+"/",t.length>0&&(u.delimiter=t),s&&(u.pageToken=s),o&&(u.maxResults=o);const f=e.bucketOnlyServerUrl(),m=Os(f,i.host,i._protocol),p="GET",y=i.maxOperationRetryTime,v=new Mr(m,p,WD(i,e.bucket),y);return v.urlParams=u,v.errorHandler=tl(e),v}function eO(i,e,t){const s=e.fullServerUrl(),o=Os(s,i.host,i._protocol),u="GET",f=i.maxOperationRetryTime,m=new Mr(o,u,JD(i,t),f);return m.errorHandler=Kf(e),m}function tO(i,e,t,s){const o=e.fullServerUrl(),u=Os(o,i.host,i._protocol),f="PATCH",m=Fg(t,s),p={"Content-Type":"application/json; charset=utf-8"},y=i.maxOperationRetryTime,v=new Mr(u,f,Gf(i,s),y);return v.headers=p,v.body=m,v.errorHandler=Kf(e),v}function nO(i,e){const t=e.fullServerUrl(),s=Os(t,i.host,i._protocol),o="DELETE",u=i.maxOperationRetryTime;function f(p,y){}const m=new Mr(s,o,f,u);return m.successCodes=[200,204],m.errorHandler=Kf(e),m}function iO(i,e){return i&&i.contentType||e&&e.type()||"application/octet-stream"}function PA(i,e,t){const s=Object.assign({},t);return s.fullPath=i.path,s.size=e.size(),s.contentType||(s.contentType=iO(null,e)),s}function rO(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),f={"X-Goog-Upload-Protocol":"multipart"};function m(){let ue="";for(let ye=0;ye<2;ye++)ue=ue+Math.random().toString().slice(2);return ue}const p=m();f["Content-Type"]="multipart/related; boundary="+p;const y=PA(e,s,o),v=Fg(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,R=`\r
--`+p+"--",j=br.getBlob(T,s,R);if(j===null)throw AA();const Q={name:y.fullPath},Z=Os(u,i.host,i._protocol),J="POST",ce=i.maxUploadRetryTime,de=new Mr(Z,J,Gf(i,t),ce);return de.urlParams=Q,de.headers=f,de.body=j.uploadData(),de.errorHandler=tl(e),de}class _f{constructor(e,t,s,o){this.current=e,this.total=t,this.finalized=!!s,this.metadata=o||null}}function Gg(i,e){let t=null;try{t=i.getResponseHeader("X-Goog-Upload-Status")}catch{Wi(!1)}return Wi(!!t&&(e||["active"]).indexOf(t)!==-1),t}function sO(i,e,t,s,o){const u=e.bucketOnlyServerUrl(),f=PA(e,s,o),m={name:f.fullPath},p=Os(u,i.host,i._protocol),y="POST",v={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":f.contentType,"Content-Type":"application/json; charset=utf-8"},T=Fg(f,t),R=i.maxUploadRetryTime;function j(Z){Gg(Z);let J;try{J=Z.getResponseHeader("X-Goog-Upload-URL")}catch{Wi(!1)}return Wi(Hf(J)),J}const Q=new Mr(p,y,j,R);return Q.urlParams=m,Q.headers=v,Q.body=T,Q.errorHandler=tl(e),Q}function aO(i,e,t,s){const o={"X-Goog-Upload-Command":"query"};function u(y){const v=Gg(y,["active","final"]);let T=null;try{T=y.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wi(!1)}T||Wi(!1);const R=Number(T);return Wi(!isNaN(R)),new _f(R,s.size(),v==="final")}const f="POST",m=i.maxUploadRetryTime,p=new Mr(t,f,u,m);return p.headers=o,p.errorHandler=tl(e),p}const HT=256*1024;function oO(i,e,t,s,o,u,f,m){const p=new _f(0,0);if(f?(p.current=f.current,p.total=f.total):(p.current=0,p.total=s.size()),s.size()!==p.total)throw vD();const y=p.total-p.current;let v=y;o>0&&(v=Math.min(v,o));const T=p.current,R=T+v;let j="";v===0?j="finalize":y===v?j="upload, finalize":j="upload";const Q={"X-Goog-Upload-Command":j,"X-Goog-Upload-Offset":`${p.current}`},Z=s.slice(T,R);if(Z===null)throw AA();function J(ye,Ce){const te=Gg(ye,["active","final"]),I=p.current+v,S=s.size();let C;return te==="final"?C=Gf(e,u)(ye,Ce):C=null,new _f(I,S,te==="final",C)}const ce="POST",de=e.maxUploadRetryTime,ue=new Mr(t,ce,J,de);return ue.headers=Q,ue.body=Z.uploadData(),ue.progressCallback=m||null,ue.errorHandler=tl(i),ue}/**
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
 */const lO={STATE_CHANGED:"state_changed"},yn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Rp(i){switch(i){case"running":case"pausing":case"canceling":return yn.RUNNING;case"paused":return yn.PAUSED;case"success":return yn.SUCCESS;case"canceled":return yn.CANCELED;case"error":return yn.ERROR;default:return yn.ERROR}}/**
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
 */class uO{constructor(e,t,s){if(RD(e)||t!=null||s!=null)this.next=e,this.error=t??void 0,this.complete=s??void 0;else{const u=e;this.next=u.next,this.error=u.error,this.complete=u.complete}}}/**
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
 */function Ao(i){return(...e)=>{Promise.resolve().then(()=>i(...e))}}class cO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ya.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ya.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ya.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o,u){if(this.sent_)throw yu("cannot .send() more than once");if(xs(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),u!==void 0)for(const f in u)u.hasOwnProperty(f)&&this.xhr_.setRequestHeader(f,u[f].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw yu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw yu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hO extends cO{initXhr(){this.xhr_.responseType="text"}}function $i(){return new hO}/**
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
 */class VA{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=s,this._mappings=Ff(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(lt.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const u=this.isExponentialBackoffExpired();if(IA(o.status,[]))if(u)o=TA();else{this.sleepTime=Math.max(this.sleepTime*2,cD),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(lt.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,u)=>{this._resolve=o,this._reject=u,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,s])=>{switch(this._state){case"running":e(t,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const s=sO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,$i,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._uploadUrl=u,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,s)=>{const o=aO(this._ref.storage,this._ref._location,e,this._blob),u=this._ref.storage._makeRequest(o,$i,t,s);this._request=u,u.getPromise().then(f=>{f=f,this._request=void 0,this._updateProgress(f.current),this._needToFetchStatus=!1,f.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=HT*this._chunkMultiplier,t=new _f(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((o,u)=>{let f;try{f=oO(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const m=this._ref.storage._makeRequest(f,$i,o,u,!1);this._request=m,m.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){HT*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const s=MA(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(s,$i,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const s=rO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(s,$i,e,t);this._request=o,o.getPromise().then(u=>{this._request=void 0,this._metadata=u,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=bA(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Rp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,s,o){const u=new uO(t||void 0,s||void 0,o||void 0);return this._addObserver(u),()=>{this._removeObserver(u)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Rp(this._state)){case yn.SUCCESS:Ao(this._resolve.bind(null,this.snapshot))();break;case yn.CANCELED:case yn.ERROR:const t=this._reject;Ao(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Rp(this._state)){case yn.RUNNING:case yn.PAUSED:e.next&&Ao(e.next.bind(e,this.snapshot))();break;case yn.SUCCESS:e.complete&&Ao(e.complete.bind(e))();break;case yn.CANCELED:case yn.ERROR:e.error&&Ao(e.error.bind(e,this._error))();break;default:e.error&&Ao(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Ta{constructor(e,t){this._service=e,t instanceof hn?this._location=t:this._location=hn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ta(e,t)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return OA(this._location.path)}get storage(){return this._service}get parent(){const e=qD(this._location.path);if(e===null)return null;const t=new hn(this._location.bucket,e);return new Ta(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw SA(e)}}function fO(i,e,t){return i._throwIfRoot("uploadBytesResumable"),new VA(i,new br(e),t)}function dO(i){const e={prefixes:[],items:[]};return UA(i,e).then(()=>e)}async function UA(i,e,t){const o=await LA(i,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await UA(i,e,o.nextPageToken)}function LA(i,e){e!=null&&typeof e.maxResults=="number"&&Hp("options.maxResults",1,1e3,e.maxResults);const t=e||{},s=ZD(i.storage,i._location,"/",t.pageToken,t.maxResults);return i.storage.makeRequestWithTokens(s,$i)}function mO(i){i._throwIfRoot("getMetadata");const e=MA(i.storage,i._location,Ff());return i.storage.makeRequestWithTokens(e,$i)}function pO(i,e){i._throwIfRoot("updateMetadata");const t=tO(i.storage,i._location,e,Ff());return i.storage.makeRequestWithTokens(t,$i)}function gO(i){i._throwIfRoot("getDownloadURL");const e=eO(i.storage,i._location,Ff());return i.storage.makeRequestWithTokens(e,$i).then(t=>{if(t===null)throw ED();return t})}function yO(i){i._throwIfRoot("deleteObject");const e=nO(i.storage,i._location);return i.storage.makeRequestWithTokens(e,$i)}function zA(i,e){const t=HD(i._location.path,e),s=new hn(i._location.bucket,t);return new Ta(i.storage,s)}/**
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
 */function _O(i){return/^[A-Za-z]+:\/\//.test(i)}function vO(i,e){return new Ta(i,e)}function jA(i,e){if(i instanceof Kg){const t=i;if(t._bucket==null)throw _D();const s=new Ta(t,t._bucket);return e!=null?jA(s,e):s}else return e!==void 0?zA(i,e):i}function EO(i,e){if(e&&_O(e)){if(i instanceof Kg)return vO(i,e);throw ko("To use ref(service, url), the first argument must be a Storage instance.")}else return jA(i,e)}function FT(i,e){const t=e==null?void 0:e[EA];return t==null?null:hn.makeFromBucketSpec(t,i)}function TO(i,e,t,s={}){i.host=`${e}:${t}`;const o=xs(e);o&&(hg(`https://${i.host}/b`),fg("Storage",!0)),i._isUsingEmulator=!0,i._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(i._overrideAuthToken=typeof u=="string"?u:ib(u,i.app.options.projectId))}class Kg{constructor(e,t,s,o,u,f=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=vA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lD,this._maxUploadRetryTime=uD,this._requests=new Set,o!=null?this._bucket=hn.makeFromBucketSpec(o,this._host):this._bucket=FT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=FT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ta(this,e)}_makeRequest(e,t,s,o,u=!0){if(this._deleted)return new bD(wA());{const f=kD(e,this._appId,s,o,t,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const GT="@firebase/storage",KT="0.14.0";/**
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
 */const bO="storage";function AO(i,e,t){return i=ve(i),fO(i,e,t)}function wO(i){return i=ve(i),mO(i)}function SO(i,e){return i=ve(i),pO(i,e)}function RO(i,e){return i=ve(i),LA(i,e)}function IO(i){return i=ve(i),dO(i)}function CO(i){return i=ve(i),gO(i)}function NO(i){return i=ve(i),yO(i)}function QT(i,e){return i=ve(i),EO(i,e)}function xO(i,e){return zA(i,e)}function DO(i,e,t,s={}){TO(i,e,t,s)}function OO(i,{instanceIdentifier:e}){const t=i.getProvider("app").getImmediate(),s=i.getProvider("auth-internal"),o=i.getProvider("app-check-internal");return new Kg(t,s,o,e,Dr)}function kO(){Ir(new vi(bO,OO,"PUBLIC").setMultipleInstances(!0)),Bn(GT,KT,""),Bn(GT,KT,"esm2020")}kO();/**
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
 */class Hh{constructor(e,t,s){this._delegate=e,this.task=t,this.ref=s}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
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
 */class YT{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Hh(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(s=>{if(e)return e(new Hh(s,this,this._ref))},t)}on(e,t,s,o){let u;return t&&(typeof t=="function"?u=f=>t(new Hh(f,this,this._ref)):u={next:t.next?f=>t.next(new Hh(f,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,u,s||void 0,o||void 0)}}class $T{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Sr(e,this._service))}get items(){return this._delegate.items.map(e=>new Sr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class Sr{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=xO(this._delegate,e);return new Sr(t,this.storage)}get root(){return new Sr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Sr(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new YT(AO(this._delegate,e,t),this)}putString(e,t=ni.RAW,s){this._throwIfRoot("putString");const o=CA(t,e),u={...s};return u.contentType==null&&o.contentType!=null&&(u.contentType=o.contentType),new YT(new VA(this._delegate,new br(o.data,!0),u),this)}listAll(){return IO(this._delegate).then(e=>new $T(e,this.storage))}list(e){return RO(this._delegate,e||void 0).then(t=>new $T(t,this.storage))}getMetadata(){return wO(this._delegate)}updateMetadata(e){return SO(this._delegate,e)}getDownloadURL(){return CO(this._delegate)}delete(){return this._throwIfRoot("delete"),NO(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw SA(e)}}/**
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
 */class BA{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(XT(e))throw ko("ref() expected a child path but got a URL, use refFromURL instead.");return new Sr(QT(this._delegate,e),this)}refFromURL(e){if(!XT(e))throw ko("refFromURL() expected a full URL but got a child path, use ref() instead.");try{hn.makeFromUrl(e,this._delegate.host)}catch{throw ko("refFromUrl() expected a valid full URL but got an invalid one.")}return new Sr(QT(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,s={}){DO(this._delegate,e,t,s)}}function XT(i){return/^[A-Za-z]+:\/\//.test(i)}const MO="@firebase/storage-compat",PO="0.4.0";/**
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
 */const VO="storage-compat";function UO(i,{instanceIdentifier:e}){const t=i.getProvider("app-compat").getImmediate(),s=i.getProvider("storage").getImmediate({identifier:e});return new BA(t,s)}function LO(i){const e={TaskState:yn,TaskEvent:lO,StringFormat:ni,Storage:BA,Reference:Sr};i.INTERNAL.registerComponent(new vi(VO,UO,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),i.registerVersion(MO,PO)}LO(Wo);var WT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vs,qA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,S){function C(){}C.prototype=S.prototype,I.F=S.prototype,I.prototype=new C,I.prototype.constructor=I,I.D=function(O,D,V){for(var N=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)N[nt-2]=arguments[nt];return S.prototype[D].apply(O,N)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(I,S,C){C||(C=0);const O=Array(16);if(typeof S=="string")for(var D=0;D<16;++D)O[D]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(D=0;D<16;++D)O[D]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=I.g[0],C=I.g[1],D=I.g[2];let V=I.g[3],N;N=S+(V^C&(D^V))+O[0]+3614090360&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(D^S&(C^D))+O[1]+3905402710&4294967295,V=S+(N<<12&4294967295|N>>>20),N=D+(C^V&(S^C))+O[2]+606105819&4294967295,D=V+(N<<17&4294967295|N>>>15),N=C+(S^D&(V^S))+O[3]+3250441966&4294967295,C=D+(N<<22&4294967295|N>>>10),N=S+(V^C&(D^V))+O[4]+4118548399&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(D^S&(C^D))+O[5]+1200080426&4294967295,V=S+(N<<12&4294967295|N>>>20),N=D+(C^V&(S^C))+O[6]+2821735955&4294967295,D=V+(N<<17&4294967295|N>>>15),N=C+(S^D&(V^S))+O[7]+4249261313&4294967295,C=D+(N<<22&4294967295|N>>>10),N=S+(V^C&(D^V))+O[8]+1770035416&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(D^S&(C^D))+O[9]+2336552879&4294967295,V=S+(N<<12&4294967295|N>>>20),N=D+(C^V&(S^C))+O[10]+4294925233&4294967295,D=V+(N<<17&4294967295|N>>>15),N=C+(S^D&(V^S))+O[11]+2304563134&4294967295,C=D+(N<<22&4294967295|N>>>10),N=S+(V^C&(D^V))+O[12]+1804603682&4294967295,S=C+(N<<7&4294967295|N>>>25),N=V+(D^S&(C^D))+O[13]+4254626195&4294967295,V=S+(N<<12&4294967295|N>>>20),N=D+(C^V&(S^C))+O[14]+2792965006&4294967295,D=V+(N<<17&4294967295|N>>>15),N=C+(S^D&(V^S))+O[15]+1236535329&4294967295,C=D+(N<<22&4294967295|N>>>10),N=S+(D^V&(C^D))+O[1]+4129170786&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^D&(S^C))+O[6]+3225465664&4294967295,V=S+(N<<9&4294967295|N>>>23),N=D+(S^C&(V^S))+O[11]+643717713&4294967295,D=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(D^V))+O[0]+3921069994&4294967295,C=D+(N<<20&4294967295|N>>>12),N=S+(D^V&(C^D))+O[5]+3593408605&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^D&(S^C))+O[10]+38016083&4294967295,V=S+(N<<9&4294967295|N>>>23),N=D+(S^C&(V^S))+O[15]+3634488961&4294967295,D=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(D^V))+O[4]+3889429448&4294967295,C=D+(N<<20&4294967295|N>>>12),N=S+(D^V&(C^D))+O[9]+568446438&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^D&(S^C))+O[14]+3275163606&4294967295,V=S+(N<<9&4294967295|N>>>23),N=D+(S^C&(V^S))+O[3]+4107603335&4294967295,D=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(D^V))+O[8]+1163531501&4294967295,C=D+(N<<20&4294967295|N>>>12),N=S+(D^V&(C^D))+O[13]+2850285829&4294967295,S=C+(N<<5&4294967295|N>>>27),N=V+(C^D&(S^C))+O[2]+4243563512&4294967295,V=S+(N<<9&4294967295|N>>>23),N=D+(S^C&(V^S))+O[7]+1735328473&4294967295,D=V+(N<<14&4294967295|N>>>18),N=C+(V^S&(D^V))+O[12]+2368359562&4294967295,C=D+(N<<20&4294967295|N>>>12),N=S+(C^D^V)+O[5]+4294588738&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^D)+O[8]+2272392833&4294967295,V=S+(N<<11&4294967295|N>>>21),N=D+(V^S^C)+O[11]+1839030562&4294967295,D=V+(N<<16&4294967295|N>>>16),N=C+(D^V^S)+O[14]+4259657740&4294967295,C=D+(N<<23&4294967295|N>>>9),N=S+(C^D^V)+O[1]+2763975236&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^D)+O[4]+1272893353&4294967295,V=S+(N<<11&4294967295|N>>>21),N=D+(V^S^C)+O[7]+4139469664&4294967295,D=V+(N<<16&4294967295|N>>>16),N=C+(D^V^S)+O[10]+3200236656&4294967295,C=D+(N<<23&4294967295|N>>>9),N=S+(C^D^V)+O[13]+681279174&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^D)+O[0]+3936430074&4294967295,V=S+(N<<11&4294967295|N>>>21),N=D+(V^S^C)+O[3]+3572445317&4294967295,D=V+(N<<16&4294967295|N>>>16),N=C+(D^V^S)+O[6]+76029189&4294967295,C=D+(N<<23&4294967295|N>>>9),N=S+(C^D^V)+O[9]+3654602809&4294967295,S=C+(N<<4&4294967295|N>>>28),N=V+(S^C^D)+O[12]+3873151461&4294967295,V=S+(N<<11&4294967295|N>>>21),N=D+(V^S^C)+O[15]+530742520&4294967295,D=V+(N<<16&4294967295|N>>>16),N=C+(D^V^S)+O[2]+3299628645&4294967295,C=D+(N<<23&4294967295|N>>>9),N=S+(D^(C|~V))+O[0]+4096336452&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~D))+O[7]+1126891415&4294967295,V=S+(N<<10&4294967295|N>>>22),N=D+(S^(V|~C))+O[14]+2878612391&4294967295,D=V+(N<<15&4294967295|N>>>17),N=C+(V^(D|~S))+O[5]+4237533241&4294967295,C=D+(N<<21&4294967295|N>>>11),N=S+(D^(C|~V))+O[12]+1700485571&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~D))+O[3]+2399980690&4294967295,V=S+(N<<10&4294967295|N>>>22),N=D+(S^(V|~C))+O[10]+4293915773&4294967295,D=V+(N<<15&4294967295|N>>>17),N=C+(V^(D|~S))+O[1]+2240044497&4294967295,C=D+(N<<21&4294967295|N>>>11),N=S+(D^(C|~V))+O[8]+1873313359&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~D))+O[15]+4264355552&4294967295,V=S+(N<<10&4294967295|N>>>22),N=D+(S^(V|~C))+O[6]+2734768916&4294967295,D=V+(N<<15&4294967295|N>>>17),N=C+(V^(D|~S))+O[13]+1309151649&4294967295,C=D+(N<<21&4294967295|N>>>11),N=S+(D^(C|~V))+O[4]+4149444226&4294967295,S=C+(N<<6&4294967295|N>>>26),N=V+(C^(S|~D))+O[11]+3174756917&4294967295,V=S+(N<<10&4294967295|N>>>22),N=D+(S^(V|~C))+O[2]+718787259&4294967295,D=V+(N<<15&4294967295|N>>>17),N=C+(V^(D|~S))+O[9]+3951481745&4294967295,I.g[0]=I.g[0]+S&4294967295,I.g[1]=I.g[1]+(D+(N<<21&4294967295|N>>>11))&4294967295,I.g[2]=I.g[2]+D&4294967295,I.g[3]=I.g[3]+V&4294967295}s.prototype.v=function(I,S){S===void 0&&(S=I.length);const C=S-this.blockSize,O=this.C;let D=this.h,V=0;for(;V<S;){if(D==0)for(;V<=C;)o(this,I,V),V+=this.blockSize;if(typeof I=="string"){for(;V<S;)if(O[D++]=I.charCodeAt(V++),D==this.blockSize){o(this,O),D=0;break}}else for(;V<S;)if(O[D++]=I[V++],D==this.blockSize){o(this,O),D=0;break}}this.h=D,this.o+=S},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var S=1;S<I.length-8;++S)I[S]=0;S=this.o*8;for(var C=I.length-8;C<I.length;++C)I[C]=S&255,S/=256;for(this.v(I),I=Array(16),S=0,C=0;C<4;++C)for(let O=0;O<32;O+=8)I[S++]=this.g[C]>>>O&255;return I};function u(I,S){var C=m;return Object.prototype.hasOwnProperty.call(C,I)?C[I]:C[I]=S(I)}function f(I,S){this.h=S;const C=[];let O=!0;for(let D=I.length-1;D>=0;D--){const V=I[D]|0;O&&V==S||(C[D]=V,O=!1)}this.g=C}var m={};function p(I){return-128<=I&&I<128?u(I,function(S){return new f([S|0],S<0?-1:0)}):new f([I|0],I<0?-1:0)}function y(I){if(isNaN(I)||!isFinite(I))return T;if(I<0)return J(y(-I));const S=[];let C=1;for(let O=0;I>=C;O++)S[O]=I/C|0,C*=4294967296;return new f(S,0)}function v(I,S){if(I.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(I.charAt(0)=="-")return J(v(I.substring(1),S));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(S,8));let O=T;for(let V=0;V<I.length;V+=8){var D=Math.min(8,I.length-V);const N=parseInt(I.substring(V,V+D),S);D<8?(D=y(Math.pow(S,D)),O=O.j(D).add(y(N))):(O=O.j(C),O=O.add(y(N)))}return O}var T=p(0),R=p(1),j=p(16777216);i=f.prototype,i.m=function(){if(Z(this))return-J(this).m();let I=0,S=1;for(let C=0;C<this.g.length;C++){const O=this.i(C);I+=(O>=0?O:4294967296+O)*S,S*=4294967296}return I},i.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(Q(this))return"0";if(Z(this))return"-"+J(this).toString(I);const S=y(Math.pow(I,6));var C=this;let O="";for(;;){const D=ye(C,S).g;C=ce(C,D.j(S));let V=((C.g.length>0?C.g[0]:C.h)>>>0).toString(I);if(C=D,Q(C))return V+O;for(;V.length<6;)V="0"+V;O=V+O}},i.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function Q(I){if(I.h!=0)return!1;for(let S=0;S<I.g.length;S++)if(I.g[S]!=0)return!1;return!0}function Z(I){return I.h==-1}i.l=function(I){return I=ce(this,I),Z(I)?-1:Q(I)?0:1};function J(I){const S=I.g.length,C=[];for(let O=0;O<S;O++)C[O]=~I.g[O];return new f(C,~I.h).add(R)}i.abs=function(){return Z(this)?J(this):this},i.add=function(I){const S=Math.max(this.g.length,I.g.length),C=[];let O=0;for(let D=0;D<=S;D++){let V=O+(this.i(D)&65535)+(I.i(D)&65535),N=(V>>>16)+(this.i(D)>>>16)+(I.i(D)>>>16);O=N>>>16,V&=65535,N&=65535,C[D]=N<<16|V}return new f(C,C[C.length-1]&-2147483648?-1:0)};function ce(I,S){return I.add(J(S))}i.j=function(I){if(Q(this)||Q(I))return T;if(Z(this))return Z(I)?J(this).j(J(I)):J(J(this).j(I));if(Z(I))return J(this.j(J(I)));if(this.l(j)<0&&I.l(j)<0)return y(this.m()*I.m());const S=this.g.length+I.g.length,C=[];for(var O=0;O<2*S;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(let D=0;D<I.g.length;D++){const V=this.i(O)>>>16,N=this.i(O)&65535,nt=I.i(D)>>>16,vt=I.i(D)&65535;C[2*O+2*D]+=N*vt,de(C,2*O+2*D),C[2*O+2*D+1]+=V*vt,de(C,2*O+2*D+1),C[2*O+2*D+1]+=N*nt,de(C,2*O+2*D+1),C[2*O+2*D+2]+=V*nt,de(C,2*O+2*D+2)}for(I=0;I<S;I++)C[I]=C[2*I+1]<<16|C[2*I];for(I=S;I<2*S;I++)C[I]=0;return new f(C,0)};function de(I,S){for(;(I[S]&65535)!=I[S];)I[S+1]+=I[S]>>>16,I[S]&=65535,S++}function ue(I,S){this.g=I,this.h=S}function ye(I,S){if(Q(S))throw Error("division by zero");if(Q(I))return new ue(T,T);if(Z(I))return S=ye(J(I),S),new ue(J(S.g),J(S.h));if(Z(S))return S=ye(I,J(S)),new ue(J(S.g),S.h);if(I.g.length>30){if(Z(I)||Z(S))throw Error("slowDivide_ only works with positive integers.");for(var C=R,O=S;O.l(I)<=0;)C=Ce(C),O=Ce(O);var D=te(C,1),V=te(O,1);for(O=te(O,2),C=te(C,2);!Q(O);){var N=V.add(O);N.l(I)<=0&&(D=D.add(C),V=N),O=te(O,1),C=te(C,1)}return S=ce(I,D.j(S)),new ue(D,S)}for(D=T;I.l(S)>=0;){for(C=Math.max(1,Math.floor(I.m()/S.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=O<=48?1:Math.pow(2,O-48),V=y(C),N=V.j(S);Z(N)||N.l(I)>0;)C-=O,V=y(C),N=V.j(S);Q(V)&&(V=R),D=D.add(V),I=ce(I,N)}return new ue(D,I)}i.B=function(I){return ye(this,I).h},i.and=function(I){const S=Math.max(this.g.length,I.g.length),C=[];for(let O=0;O<S;O++)C[O]=this.i(O)&I.i(O);return new f(C,this.h&I.h)},i.or=function(I){const S=Math.max(this.g.length,I.g.length),C=[];for(let O=0;O<S;O++)C[O]=this.i(O)|I.i(O);return new f(C,this.h|I.h)},i.xor=function(I){const S=Math.max(this.g.length,I.g.length),C=[];for(let O=0;O<S;O++)C[O]=this.i(O)^I.i(O);return new f(C,this.h^I.h)};function Ce(I){const S=I.g.length+1,C=[];for(let O=0;O<S;O++)C[O]=I.i(O)<<1|I.i(O-1)>>>31;return new f(C,I.h)}function te(I,S){const C=S>>5;S%=32;const O=I.g.length-C,D=[];for(let V=0;V<O;V++)D[V]=S>0?I.i(V+C)>>>S|I.i(V+C+1)<<32-S:I.i(V+C);return new f(D,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,qA=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=v,vs=f}).apply(typeof WT<"u"?WT:typeof self<"u"?self:typeof window<"u"?window:{});var Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HA,bu,FA,ef,Fp,GA,KA,QA;(function(){var i,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fh=="object"&&Fh];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var s=t(this);function o(c,g){if(g)e:{var E=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var U=c[A];if(!(U in E))break e;E=E[U]}c=c[c.length-1],A=E[c],g=g(A),g!=A&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(g){var E=[],A;for(A in g)Object.prototype.hasOwnProperty.call(g,A)&&E.push([A,g[A]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function p(c,g,E){return c.call.apply(c.bind,arguments)}function y(c,g,E){return y=p,y.apply(null,arguments)}function v(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function T(c,g){function E(){}E.prototype=g.prototype,c.Z=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Ob=function(A,U,H){for(var ie=Array(arguments.length-2),we=2;we<arguments.length;we++)ie[we-2]=arguments[we];return g.prototype[U].apply(A,ie)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function j(c){const g=c.length;if(g>0){const E=Array(g);for(let A=0;A<g;A++)E[A]=c[A];return E}return[]}function Q(c,g){for(let A=1;A<arguments.length;A++){const U=arguments[A];var E=typeof U;if(E=E!="object"?E:U?Array.isArray(U)?"array":E:"null",E=="array"||E=="object"&&typeof U.length=="number"){E=c.length||0;const H=U.length||0;c.length=E+H;for(let ie=0;ie<H;ie++)c[E+ie]=U[ie]}else c.push(U)}}class Z{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function J(c){f.setTimeout(()=>{throw c},0)}function ce(){var c=I;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class de{constructor(){this.h=this.g=null}add(g,E){const A=ue.get();A.set(g,E),this.h?this.h.next=A:this.g=A,this.h=A}}var ue=new Z(()=>new ye,c=>c.reset());class ye{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,te=!1,I=new de,S=()=>{const c=Promise.resolve(void 0);Ce=()=>{c.then(C)}};function C(){for(var c;c=ce();){try{c.h.call(c.g)}catch(E){J(E)}var g=ue;g.j(c),g.h<100&&(g.h++,c.next=g.g,g.g=c)}te=!1}function O(){this.u=this.u,this.C=this.C}O.prototype.u=!1,O.prototype.dispose=function(){this.u||(this.u=!0,this.N())},O.prototype[Symbol.dispose]=function(){this.dispose()},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};f.addEventListener("test",E,g),f.removeEventListener("test",E,g)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function nt(c,g){D.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,g)}T(nt,D),nt.prototype.init=function(c,g){const E=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget,g||(E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement)),this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&nt.Z.h.call(this)},nt.prototype.h=function(){nt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),B=0;function ne(c,g,E,A,U){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!A,this.ha=U,this.key=++B,this.da=this.fa=!1}function he(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ze(c,g,E){for(const A in c)g.call(E,c[A],A,c)}function Qe(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function M(c){const g={};for(const E in c)g[E]=c[E];return g}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function re(c,g){let E,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(E in A)c[E]=A[E];for(let H=0;H<X.length;H++)E=X[H],Object.prototype.hasOwnProperty.call(A,E)&&(c[E]=A[E])}}function oe(c){this.src=c,this.g={},this.h=0}oe.prototype.add=function(c,g,E,A,U){const H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);const ie=Re(c,g,A,U);return ie>-1?(g=c[ie],E||(g.fa=!1)):(g=new ne(g,this.src,H,!!A,U),g.fa=E,c.push(g)),g};function Ee(c,g){const E=g.type;if(E in c.g){var A=c.g[E],U=Array.prototype.indexOf.call(A,g,void 0),H;(H=U>=0)&&Array.prototype.splice.call(A,U,1),H&&(he(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Re(c,g,E,A){for(let U=0;U<c.length;++U){const H=c[U];if(!H.da&&H.listener==g&&H.capture==!!E&&H.ha==A)return U}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),zt={};function ut(c,g,E,A,U){if(Array.isArray(g)){for(let H=0;H<g.length;H++)ut(c,g[H],E,A,U);return null}return E=ul(E),c&&c[vt]?c.J(g,E,m(A)?!!A.capture:!1,U):Ps(c,g,E,!1,A,U)}function Ps(c,g,E,A,U,H){if(!g)throw Error("Invalid event type");const ie=m(U)?!!U.capture:!!U;let we=Vs(c);if(we||(c[Ue]=we=new oe(c)),E=we.add(g,E,A,ie,H),E.proxy)return E;if(A=Da(),E.proxy=A,A.src=c,A.listener=E,c.addEventListener)V||(U=ie),U===void 0&&(U=!1),c.addEventListener(g.toString(),A,U);else if(c.attachEvent)c.attachEvent(bi(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function Da(){function c(E){return g.call(c.src,c.listener,E)}const g=ol;return c}function Oa(c,g,E,A,U){if(Array.isArray(g))for(var H=0;H<g.length;H++)Oa(c,g[H],E,A,U);else A=m(A)?!!A.capture:!!A,E=ul(E),c&&c[vt]?(c=c.i,H=String(g).toString(),H in c.g&&(g=c.g[H],E=Re(g,E,A,U),E>-1&&(he(g[E]),Array.prototype.splice.call(g,E,1),g.length==0&&(delete c.g[H],c.h--)))):c&&(c=Vs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Re(g,E,A,U)),(E=c>-1?g[c]:null)&&ka(E))}function ka(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[vt])Ee(g.i,c);else{var E=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(E,A,c.capture):g.detachEvent?g.detachEvent(bi(E),A):g.addListener&&g.removeListener&&g.removeListener(A),(E=Vs(g))?(Ee(E,c),E.h==0&&(E.src=null,g[Ue]=null)):he(c)}}}function bi(c){return c in zt?zt[c]:zt[c]="on"+c}function ol(c,g){if(c.da)c=!0;else{g=new nt(g,this);const E=c.listener,A=c.ha||c.src;c.fa&&ka(c),c=E.call(A,g)}return c}function Vs(c){return c=c[Ue],c instanceof oe?c:null}var ll="__closure_events_fn_"+(Math.random()*1e9>>>0);function ul(c){return typeof c=="function"?c:(c[ll]||(c[ll]=function(g){return c.handleEvent(g)}),c[ll])}function St(){O.call(this),this.i=new oe(this),this.M=this,this.G=null}T(St,O),St.prototype[vt]=!0,St.prototype.removeEventListener=function(c,g,E,A){Oa(this,c,g,E,A)};function jt(c,g){var E,A=c.G;if(A)for(E=[];A;A=A.G)E.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new D(g,c);else if(g instanceof D)g.target=g.target||c;else{var U=g;g=new D(A,c),re(g,U)}U=!0;let H,ie;if(E)for(ie=E.length-1;ie>=0;ie--)H=g.g=E[ie],U=Pr(H,A,!0,g)&&U;if(H=g.g=c,U=Pr(H,A,!0,g)&&U,U=Pr(H,A,!1,g)&&U,E)for(ie=0;ie<E.length;ie++)H=g.g=E[ie],U=Pr(H,A,!1,g)&&U}St.prototype.N=function(){if(St.Z.N.call(this),this.i){var c=this.i;for(const g in c.g){const E=c.g[g];for(let A=0;A<E.length;A++)he(E[A]);delete c.g[g],c.h--}}this.G=null},St.prototype.J=function(c,g,E,A){return this.i.add(String(c),g,!1,E,A)},St.prototype.K=function(c,g,E,A){return this.i.add(String(c),g,!0,E,A)};function Pr(c,g,E,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();let U=!0;for(let H=0;H<g.length;++H){const ie=g[H];if(ie&&!ie.da&&ie.capture==E){const we=ie.listener,Tt=ie.ha||ie.src;ie.fa&&Ee(c.i,ie),U=we.call(Tt,A)!==!1&&U}}return U&&!A.defaultPrevented}function ud(c,g){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:f.setTimeout(c,g||0)}function hc(c){c.g=ud(()=>{c.g=null,c.i&&(c.i=!1,hc(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class dn extends O{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:hc(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(c){O.call(this),this.h=c,this.g={}}T(Us,O);var cl=[];function hl(c){ze(c.g,function(g,E){this.g.hasOwnProperty(E)&&ka(g)},c),c.g={}}Us.prototype.N=function(){Us.Z.N.call(this),hl(this)},Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=f.JSON.stringify,cd=f.JSON.parse,fc=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function dc(){}function mc(){}var ri={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xt(){D.call(this,"d")}T(Xt,D);function qn(){D.call(this,"c")}T(qn,D);var Et={},pc=null;function Ma(){return pc=pc||new St}Et.Ia="serverreachability";function gc(c){D.call(this,Et.Ia,c)}T(gc,D);function Ai(c){const g=Ma();jt(g,new gc(g))}Et.STAT_EVENT="statevent";function Ls(c,g){D.call(this,Et.STAT_EVENT,c),this.stat=g}T(Ls,D);function Rt(c){const g=Ma();jt(g,new Ls(g,c))}Et.Ja="timingevent";function wi(c,g){D.call(this,Et.Ja,c),this.size=g}T(wi,D);function Si(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},g)}function si(){this.g=!0}si.prototype.ua=function(){this.g=!1};function hd(c,g,E,A,U,H){c.info(function(){if(c.g)if(H){var ie="",we=H.split("&");for(let qe=0;qe<we.length;qe++){var Tt=we[qe].split("=");if(Tt.length>1){const ct=Tt[0];Tt=Tt[1];const Kn=ct.split("_");ie=Kn.length>=2&&Kn[1]=="type"?ie+(ct+"="+Tt+"&"):ie+(ct+"=redacted&")}}}else ie=null;else ie=H;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+g+`
`+E+`
`+ie})}function yc(c,g,E,A,U,H,ie){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+g+`
`+E+`
`+H+" "+ie})}function Ri(c,g,E,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+fd(c,E)+(A?" "+A:"")})}function zs(c,g){c.info(function(){return"TIMEOUT: "+g})}si.prototype.info=function(){};function fd(c,g){if(!c.g)return g;if(!g)return null;try{const H=JSON.parse(g);if(H){for(c=0;c<H.length;c++)if(Array.isArray(H[c])){var E=H[c];if(!(E.length<2)){var A=E[1];if(Array.isArray(A)&&!(A.length<1)){var U=A[0];if(U!="noop"&&U!="stop"&&U!="close")for(let ie=1;ie<A.length;ie++)A[ie]=""}}}}return Vr(H)}catch{return g}}var js={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},fl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},dl;function Bs(){}T(Bs,dc),Bs.prototype.g=function(){return new XMLHttpRequest},dl=new Bs;function ir(c){return encodeURIComponent(String(c))}function _c(c){var g=1;c=c.split(":");const E=[];for(;g>0&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function ai(c,g,E,A){this.j=c,this.i=g,this.l=E,this.S=A||1,this.V=new Us(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oi}function oi(){this.i=null,this.g="",this.h=!1}var It={},Gt={};function Ii(c,g,E){c.M=1,c.A=qs(Nt(g)),c.u=E,c.R=!0,Pa(c,null)}function Pa(c,g){c.F=Date.now(),Ci(c),c.B=Nt(c.A);var E=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),za(E.i,"t",A),c.C=0,E=c.j.L,c.h=new oi,c.g=kc(c.j,E?g:null,!c.u),c.P>0&&(c.O=new dn(y(c.Y,c,c.g),c.P)),g=c.V,E=c.g,A=c.ba;var U="readystatechange";Array.isArray(U)||(U&&(cl[0]=U.toString()),U=cl);for(let H=0;H<U.length;H++){const ie=ut(E,U[H],A||g.handleEvent,!1,g.h||g);if(!ie)break;g.g[ie.key]=ie}g=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,g)):(c.v="GET",c.g.ea(c.B,c.v,null,g)),Ai(),hd(c.i,c.v,c.B,c.l,c.S,c.u)}ai.prototype.ba=function(c){c=c.target;const g=this.O;g&&ci(c)==3?g.j():this.Y(c)},ai.prototype.Y=function(c){try{if(c==this.g)e:{const we=ci(this.g),Tt=this.g.ya(),qe=this.g.ca();if(!(we<3)&&(we!=3||this.g&&(this.h.h||this.g.la()||Wt(this.g)))){this.K||we!=4||Tt==7||(Tt==8||qe<=0?Ai(3):Ai(2)),Ni(this);var g=this.g.ca();this.X=g;var E=dd(this);if(this.o=g==200,yc(this.i,this.v,this.B,this.l,this.S,we,g),this.o){if(this.U&&!this.L){t:{if(this.g){var A,U=this.g;if((A=U.g?U.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(A)){var H=A;break t}}H=null}if(c=H)Ri(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xi(this,c);else{this.o=!1,this.m=3,Rt(12),Cn(this),Hn(this);break e}}if(this.R){c=!0;let ct;for(;!this.K&&this.C<E.length;)if(ct=Ec(this,E),ct==Gt){we==4&&(this.m=4,Rt(14),c=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==It){this.m=4,Rt(15),Ri(this.i,this.l,E,"[Invalid Chunk]"),c=!1;break}else Ri(this.i,this.l,ct,null),xi(this,ct);if(vc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),we!=4||E.length!=0||this.h.h||(this.m=1,Rt(16),c=!1),this.o=this.o&&c,!c)Ri(this.i,this.l,E,"[Invalid Chunked Response]"),Cn(this),Hn(this);else if(E.length>0&&!this.W){this.W=!0;var ie=this.j;ie.g==this&&ie.aa&&!ie.P&&(ie.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Cl(ie),ie.P=!0,Rt(11))}}else Ri(this.i,this.l,E,null),xi(this,E);we==4&&Cn(this),this.o&&!this.K&&(we==4?Nc(this.j,this):(this.o=!1,Ci(this)))}else sr(this.g),g==400&&E.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),Cn(this),Hn(this)}}}catch{}finally{}};function dd(c){if(!vc(c))return c.g.la();const g=Wt(c.g);if(g==="")return"";let E="";const A=g.length,U=ci(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Cn(c),Hn(c),"";c.h.i=new f.TextDecoder}for(let H=0;H<A;H++)c.h.h=!0,E+=c.h.i.decode(g[H],{stream:!(U&&H==A-1)});return g.length=0,c.h.g+=E,c.C=0,c.h.g}function vc(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Ec(c,g){var E=c.C,A=g.indexOf(`
`,E);return A==-1?Gt:(E=Number(g.substring(E,A)),isNaN(E)?It:(A+=1,A+E>g.length?Gt:(g=g.slice(A,A+E),c.C=A+E,g)))}ai.prototype.cancel=function(){this.K=!0,Cn(this)};function Ci(c){c.T=Date.now()+c.H,Va(c,c.H)}function Va(c,g){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Si(y(c.aa,c),g)}function Ni(c){c.D&&(f.clearTimeout(c.D),c.D=null)}ai.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(zs(this.i,this.B),this.M!=2&&(Ai(),Rt(17)),Cn(this),this.m=2,Hn(this)):Va(this,this.T-c)};function Hn(c){c.j.I==0||c.K||Nc(c.j,c)}function Cn(c){Ni(c);var g=c.O;g&&typeof g.dispose=="function"&&g.dispose(),c.O=null,hl(c.V),c.g&&(g=c.g,c.g=null,g.abort(),g.dispose())}function xi(c,g){try{var E=c.j;if(E.I!=0&&(E.g==c||Oi(E.h,c))){if(!c.L&&Oi(E.h,c)&&E.I==3){try{var A=E.Ba.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<c.F)Fa(E),Fr(E);else break e;$s(E),Rt(18)}}else E.xa=U[1],0<E.xa-E.K&&U[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Si(y(E.Va,E),6e3));Di(E.h)<=1&&E.ta&&(E.ta=void 0)}else Li(E,11)}else if((c.L||E.g==c)&&Fa(E),!N(g))for(U=E.Ba.g.parse(g),g=0;g<U.length;g++){let qe=U[g];const ct=qe[0];if(!(ct<=E.K))if(E.K=ct,qe=qe[1],E.I==2)if(qe[0]=="c"){E.M=qe[1],E.ba=qe[2];const Kn=qe[3];Kn!=null&&(E.ka=Kn,E.j.info("VER="+E.ka));const zi=qe[4];zi!=null&&(E.za=zi,E.j.info("SVER="+E.za));const hi=qe[5];hi!=null&&typeof hi=="number"&&hi>0&&(A=1.5*hi,E.O=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const fi=c.g;if(fi){const Xs=fi.g?fi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var H=A.h;H.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(gl(H,H.h),H.h=null))}if(A.G){const Ga=fi.g?fi.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(A.wa=Ga,Ye(A.J,A.G,Ga))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-c.F,E.j.info("Handshake RTT: "+E.T+"ms")),A=E;var ie=c;if(A.na=Oc(A,A.L?A.ba:null,A.W),ie.L){yl(A.h,ie);var we=ie,Tt=A.O;Tt&&(we.H=Tt),we.D&&(Ni(we),Ci(we)),A.g=ie}else Ic(A);E.i.length>0&&Ui(E)}else qe[0]!="stop"&&qe[0]!="close"||Li(E,7);else E.I==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Li(E,7):Rl(E):qe[0]!="noop"&&E.l&&E.l.qa(qe),E.A=0)}}Ai(4)}catch{}}var Ct=class{constructor(c,g){this.g=c,this.map=g}};function ml(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pl(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Di(c){return c.h?1:c.g?c.g.size:0}function Oi(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function gl(c,g){c.g?c.g.add(g):c.h=g}function yl(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}ml.prototype.cancel=function(){if(this.i=_l(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _l(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.G);return g}return j(c.i)}var Tc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ua(c,g){if(c){c=c.split("&");for(let E=0;E<c.length;E++){const A=c[E].indexOf("=");let U,H=null;A>=0?(U=c[E].substring(0,A),H=c[E].substring(A+1)):U=c[E],g(U,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Nn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;c instanceof Nn?(this.l=c.l,Kt(this,c.j),this.o=c.o,this.g=c.g,Ur(this,c.u),this.h=c.h,vl(this,Sc(c.i)),this.m=c.m):c&&(g=String(c).match(Tc))?(this.l=!1,Kt(this,g[1]||"",!0),this.o=ki(g[2]||""),this.g=ki(g[3]||"",!0),Ur(this,g[4]),this.h=ki(g[5]||"",!0),vl(this,g[6]||"",!0),this.m=ki(g[7]||"")):(this.l=!1,this.i=new zr(null,this.l))}Nn.prototype.toString=function(){const c=[];var g=this.j;g&&c.push(Hs(g,La,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(Hs(g,La,!0),"@"),c.push(ir(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&c.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Hs(E,E.charAt(0)=="/"?El:bc,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Hs(E,Ac)),c.join("")},Nn.prototype.resolve=function(c){const g=Nt(this);let E=!!c.j;E?Kt(g,c.j):E=!!c.o,E?g.o=c.o:E=!!c.g,E?g.g=c.g:E=c.u!=null;var A=c.h;if(E)Ur(g,c.u);else if(E=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var U=g.h.lastIndexOf("/");U!=-1&&(A=g.h.slice(0,U+1)+A)}if(U=A,U==".."||U==".")A="";else if(U.indexOf("./")!=-1||U.indexOf("/.")!=-1){A=U.lastIndexOf("/",0)==0,U=U.split("/");const H=[];for(let ie=0;ie<U.length;){const we=U[ie++];we=="."?A&&ie==U.length&&H.push(""):we==".."?((H.length>1||H.length==1&&H[0]!="")&&H.pop(),A&&ie==U.length&&H.push("")):(H.push(we),A=!0)}A=H.join("/")}else A=U}return E?g.h=A:E=c.i.toString()!=="",E?vl(g,Sc(c.i)):E=!!c.m,E&&(g.m=c.m),g};function Nt(c){return new Nn(c)}function Kt(c,g,E){c.j=E?ki(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ur(c,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);c.u=g}else c.u=null}function vl(c,g,E){g instanceof zr?(c.i=g,ja(c.i,c.l)):(E||(g=Hs(g,Lr)),c.i=new zr(g,c.l))}function Ye(c,g,E){c.i.set(g,E)}function qs(c){return Ye(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ki(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Hs(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,_n),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function _n(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var La=/[#\/\?@]/g,bc=/[#\?:]/g,El=/[#\?]/g,Lr=/[#\?@]/g,Ac=/#/g;function zr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function vn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ua(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}i=zr.prototype,i.add=function(c,g){vn(this),this.i=null,c=jr(this,c);let E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function wc(c,g){vn(c),g=jr(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Tl(c,g){return vn(c),g=jr(c,g),c.g.has(g)}i.forEach=function(c,g){vn(this),this.g.forEach(function(E,A){E.forEach(function(U){c.call(g,U,A,this)},this)},this)};function bl(c,g){vn(c);let E=[];if(typeof g=="string")Tl(c,g)&&(E=E.concat(c.g.get(jr(c,g))));else for(c=Array.from(c.g.values()),g=0;g<c.length;g++)E=E.concat(c[g]);return E}i.set=function(c,g){return vn(this),this.i=null,c=jr(this,c),Tl(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},i.get=function(c,g){return c?(c=bl(this,c),c.length>0?String(c[0]):g):g};function za(c,g,E){wc(c,g),E.length>0&&(c.i=null,c.g.set(jr(c,g),j(E)),c.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(let A=0;A<g.length;A++){var E=g[A];const U=ir(E);E=bl(this,E);for(let H=0;H<E.length;H++){let ie=U;E[H]!==""&&(ie+="="+ir(E[H])),c.push(ie)}}return this.i=c.join("&")};function Sc(c){const g=new zr;return g.i=c.i,c.g&&(g.g=new Map(c.g),g.h=c.h),g}function jr(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function ja(c,g){g&&!c.j&&(vn(c),c.i=null,c.g.forEach(function(E,A){const U=A.toLowerCase();A!=U&&(wc(this,A),za(this,U,E))},c)),c.j=g}function li(c,g){const E=new si;if(f.Image){const A=new Image;A.onload=v(Fn,E,"TestLoadImage: loaded",!0,g,A),A.onerror=v(Fn,E,"TestLoadImage: error",!1,g,A),A.onabort=v(Fn,E,"TestLoadImage: abort",!1,g,A),A.ontimeout=v(Fn,E,"TestLoadImage: timeout",!1,g,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function Al(c,g){const E=new si,A=new AbortController,U=setTimeout(()=>{A.abort(),Fn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(H=>{clearTimeout(U),H.ok?Fn(E,"TestPingServer: ok",!0,g):Fn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Fn(E,"TestPingServer: error",!1,g)})}function Fn(c,g,E,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(E)}catch{}}function Br(){this.g=new fc}function Mi(c){this.i=c.Sb||null,this.h=c.ab||!1}T(Mi,dc),Mi.prototype.g=function(){return new Fs(this.i,this.h)};function Fs(c,g){St.call(this),this.H=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(Fs,St),i=Fs.prototype,i.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=g,this.readyState=1,ui(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(g.body=c),(this.H||f).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qr(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ba(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ba(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?qr(this):ui(this),this.readyState==3&&Ba(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,qr(this))},i.Na=function(c){this.g&&(this.response=c,qr(this))},i.ga=function(){this.g&&qr(this)};function qr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ui(c)}i.setRequestHeader=function(c,g){this.A.append(c,g)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gn(c){let g="";return ze(c,function(E,A){g+=A,g+=":",g+=E,g+=`\r
`}),g}function Gs(c,g,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=Gn(E),typeof c=="string"?E!=null&&ir(E):Ye(c,g,E))}function We(c){St.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(We,St);var Pi=/^https?$/i,wl=["POST","PUT"];i=We.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,g,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():dl.g(),this.g.onreadystatechange=R(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){Ks(this,H);return}if(c=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)E.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())E.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find(H=>H.toLowerCase()=="content-type"),U=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(wl,g,void 0)>=0)||A||U||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ie]of E)this.g.setRequestHeader(H,ie);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(H){Ks(this,H)}};function Ks(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.o=5,Sl(c),rr(c)}function Sl(c){c.A||(c.A=!0,jt(c,"complete"),jt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,jt(this,"complete"),jt(this,"abort"),rr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rr(this,!0)),We.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Qs(this):this.Xa())},i.Xa=function(){Qs(this)};function Qs(c){if(c.h&&typeof u<"u"){if(c.v&&ci(c)==4)setTimeout(c.Ca.bind(c),0);else if(jt(c,"readystatechange"),ci(c)==4){c.h=!1;try{const H=c.ca();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var A;if(A=H===0){let ie=String(c.D).match(Tc)[1]||null;!ie&&f.self&&f.self.location&&(ie=f.self.location.protocol.slice(0,-1)),A=!Pi.test(ie?ie.toLowerCase():"")}E=A}if(E)jt(c,"complete"),jt(c,"success");else{c.o=6;try{var U=ci(c)>2?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.ca()+"]",Sl(c)}}finally{rr(c)}}}}function rr(c,g){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const E=c.g;c.g=null,g||jt(c,"ready");try{E.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function ci(c){return c.g?c.g.readyState:0}i.ca=function(){try{return ci(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),cd(g)}};function Wt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function sr(c){const g={};c=(c.g&&ci(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(N(c[A]))continue;var E=_c(c[A]);const U=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const H=g[U]||[];g[U]=H,H.push(E)}Qe(g,function(A){return A.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vi(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Hr(c){this.za=0,this.i=[],this.j=new si,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vi("baseRetryDelayMs",5e3,c),this.Za=Vi("retryDelaySeedMs",1e4,c),this.Ta=Vi("forwardChannelMaxRetries",2,c),this.va=Vi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new ml(c&&c.concurrentRequestLimit),this.Ba=new Br,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Hr.prototype,i.ka=8,i.I=1,i.connect=function(c,g,E,A){Rt(0),this.W=c,this.H=g||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.J=Oc(this,null,this.W),Ui(this)};function Rl(c){if(qa(c),c.I==3){var g=c.V++,E=Nt(c.J);if(Ye(E,"SID",c.M),Ye(E,"RID",g),Ye(E,"TYPE","terminate"),Ys(c,E),g=new ai(c,c.j,g),g.M=2,g.A=qs(Nt(E)),E=!1,f.navigator&&f.navigator.sendBeacon)try{E=f.navigator.sendBeacon(g.A.toString(),"")}catch{}!E&&f.Image&&(new Image().src=g.A,E=!0),E||(g.g=kc(g.j,null),g.g.ea(g.A)),g.F=Date.now(),Ci(g)}Dc(c)}function Fr(c){c.g&&(Cl(c),c.g.cancel(),c.g=null)}function qa(c){Fr(c),c.v&&(f.clearTimeout(c.v),c.v=null),Fa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ui(c){if(!pl(c.h)&&!c.m){c.m=!0;var g=c.Ea;Ce||S(),te||(Ce(),te=!0),I.add(g,c),c.D=0}}function Ha(c,g){return Di(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=g.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Si(y(c.Ea,c,g),xc(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const U=new ai(this,this.j,c);let H=this.o;if(this.U&&(H?(H=M(H),re(H,this.U)):H=this.U),this.u!==null||this.R||(U.J=H,H=null),this.S)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(g+=A,g>4096){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Rc(this,U,g),E=Nt(this.J),Ye(E,"RID",c),Ye(E,"CVER",22),this.G&&Ye(E,"X-HTTP-Session-Id",this.G),Ys(this,E),H&&(this.R?g="headers="+ir(Gn(H))+"&"+g:this.u&&Gs(E,this.u,H)),gl(this.h,U),this.Ra&&Ye(E,"TYPE","init"),this.S?(Ye(E,"$req",g),Ye(E,"SID","null"),U.U=!0,Ii(U,E,null)):Ii(U,E,g),this.I=2}}else this.I==3&&(c?Il(this,c):this.i.length==0||pl(this.h)||Il(this))};function Il(c,g){var E;g?E=g.l:E=c.V++;const A=Nt(c.J);Ye(A,"SID",c.M),Ye(A,"RID",E),Ye(A,"AID",c.K),Ys(c,A),c.u&&c.o&&Gs(A,c.u,c.o),E=new ai(c,c.j,E,c.D+1),c.u===null&&(E.J=c.o),g&&(c.i=g.G.concat(c.i)),g=Rc(c,E,1e3),E.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),gl(c.h,E),Ii(E,A,g)}function Ys(c,g){c.H&&ze(c.H,function(E,A){Ye(g,A,E)}),c.l&&ze({},function(E,A){Ye(g,A,E)})}function Rc(c,g,E){E=Math.min(c.i.length,E);const A=c.l?y(c.l.Ka,c.l,c):null;e:{var U=c.i;let we=-1;for(;;){const Tt=["count="+E];we==-1?E>0?(we=U[0].g,Tt.push("ofs="+we)):we=0:Tt.push("ofs="+we);let qe=!0;for(let ct=0;ct<E;ct++){var H=U[ct].g;const Kn=U[ct].map;if(H-=we,H<0)we=Math.max(0,U[ct].g-100),qe=!1;else try{H="req"+H+"_"||"";try{var ie=Kn instanceof Map?Kn:Object.entries(Kn);for(const[zi,hi]of ie){let fi=hi;m(hi)&&(fi=Vr(hi)),Tt.push(H+zi+"="+encodeURIComponent(fi))}}catch(zi){throw Tt.push(H+"type="+encodeURIComponent("_badmap")),zi}}catch{A&&A(Kn)}}if(qe){ie=Tt.join("&");break e}}ie=void 0}return c=c.i.splice(0,E),g.G=c,ie}function Ic(c){if(!c.g&&!c.v){c.Y=1;var g=c.Da;Ce||S(),te||(Ce(),te=!0),I.add(g,c),c.A=0}}function $s(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Si(y(c.Da,c),xc(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Cc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Si(y(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),Fr(this),Cc(this))};function Cl(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Cc(c){c.g=new ai(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var g=Nt(c.na);Ye(g,"RID","rpc"),Ye(g,"SID",c.M),Ye(g,"AID",c.K),Ye(g,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ye(g,"TO",c.ia),Ye(g,"TYPE","xmlhttp"),Ys(c,g),c.u&&c.o&&Gs(g,c.u,c.o),c.O&&(c.g.H=c.O);var E=c.g;c=c.ba,E.M=1,E.A=qs(Nt(g)),E.u=null,E.R=!0,Pa(E,c)}i.Va=function(){this.C!=null&&(this.C=null,Fr(this),$s(this),Rt(19))};function Fa(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Nc(c,g){var E=null;if(c.g==g){Fa(c),Cl(c),c.g=null;var A=2}else if(Oi(c.h,g))E=g.G,yl(c.h,g),A=1;else return;if(c.I!=0){if(g.o)if(A==1){E=g.u?g.u.length:0,g=Date.now()-g.F;var U=c.D;A=Ma(),jt(A,new wi(A,E)),Ui(c)}else Ic(c);else if(U=g.m,U==3||U==0&&g.X>0||!(A==1&&Ha(c,g)||A==2&&$s(c)))switch(E&&E.length>0&&(g=c.h,g.i=g.i.concat(E)),U){case 1:Li(c,5);break;case 4:Li(c,10);break;case 3:Li(c,6);break;default:Li(c,2)}}}function xc(c,g){let E=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(E*=2),E*g}function Li(c,g){if(c.j.info("Error code "+g),g==2){var E=y(c.bb,c),A=c.Ua;const U=!A;A=new Nn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Kt(A,"https"),qs(A),U?li(A.toString(),E):Al(A.toString(),E)}else Rt(2);c.I=0,c.l&&c.l.pa(g),Dc(c),qa(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Dc(c){if(c.I=0,c.ja=[],c.l){const g=_l(c.h);(g.length!=0||c.i.length!=0)&&(Q(c.ja,g),Q(c.ja,c.i),c.h.i.length=0,j(c.i),c.i.length=0),c.l.oa()}}function Oc(c,g,E){var A=E instanceof Nn?Nt(E):new Nn(E);if(A.g!="")g&&(A.g=g+"."+A.g),Ur(A,A.u);else{var U=f.location;A=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;const H=new Nn(null);A&&Kt(H,A),g&&(H.g=g),U&&Ur(H,U),E&&(H.h=E),A=H}return E=c.G,g=c.wa,E&&g&&Ye(A,E,g),Ye(A,"VER",c.ka),Ys(c,A),A}function kc(c,g,E){if(g&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Aa&&!c.ma?new We(new Mi({ab:E})):new We(c.ma),g.Fa(c.L),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mc(){}i=Mc.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Gr(){}Gr.prototype.g=function(c,g){return new mn(c,g)};function mn(c,g){St.call(this),this.g=new Hr(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(c?c["X-WebChannel-Client-Profile"]=g.sa:c={"X-WebChannel-Client-Profile":g.sa}),this.g.U=c,(c=g&&g.Qb)&&!N(c)&&(this.g.u=c),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!N(g)&&(this.g.G=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ar(this)}T(mn,St),mn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Rl(this.g)},mn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.v&&(E={},E.__data__=Vr(c),c=E);g.i.push(new Ct(g.Ya++,c)),g.I==3&&Ui(g)},mn.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,mn.Z.N.call(this)};function Pc(c){Xt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}T(Pc,Xt);function Vc(){qn.call(this),this.status=1}T(Vc,qn);function ar(c){this.g=c}T(ar,Mc),ar.prototype.ra=function(){jt(this.g,"a")},ar.prototype.qa=function(c){jt(this.g,new Pc(c))},ar.prototype.pa=function(c){jt(this.g,new Vc)},ar.prototype.oa=function(){jt(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,QA=function(){return new Gr},KA=function(){return Ma()},GA=Et,Fp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,ef=js,fl.COMPLETE="complete",FA=fl,mc.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",St.prototype.listen=St.prototype.J,bu=mc,We.prototype.listenOnce=We.prototype.K,We.prototype.getLastError=We.prototype.Ha,We.prototype.getLastErrorCode=We.prototype.ya,We.prototype.getStatus=We.prototype.ca,We.prototype.getResponseJson=We.prototype.La,We.prototype.getResponseText=We.prototype.la,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Fa,HA=We}).apply(typeof Fh<"u"?Fh:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let nl="12.9.0";function zO(i){nl=i}/**
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
 */const ba=new Df("@firebase/firestore");function wo(){return ba.logLevel}function ae(i,...e){if(ba.logLevel<=De.DEBUG){const t=e.map(Qg);ba.debug(`Firestore (${nl}): ${i}`,...t)}}function Nr(i,...e){if(ba.logLevel<=De.ERROR){const t=e.map(Qg);ba.error(`Firestore (${nl}): ${i}`,...t)}}function Aa(i,...e){if(ba.logLevel<=De.WARN){const t=e.map(Qg);ba.warn(`Firestore (${nl}): ${i}`,...t)}}function Qg(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function _e(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,YA(i,s,t)}function YA(i,e,t){let s=`FIRESTORE (${nl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Nr(s),new Error(s)}function Ge(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||YA(e,o,s)}function Ae(i,e){return i}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Es{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class $A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(un.UNAUTHENTICATED)))}shutdown(){}}class BO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qO{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ge(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let u=new Es;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Es,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const p=u;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},m=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((p=>m(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Es)}}),0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ge(typeof s.accessToken=="string",31837,{l:s}),new $A(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ge(e===null||typeof e=="string",2055,{h:e}),new un(e)}}class HO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=un.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class FO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new HO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class JT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ge(this.o===void 0,3512);const s=u=>{u.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ae("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new JT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new JT(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Yg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=KO(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Me(i,e){return i<e?-1:i>e?1:0}function Gp(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Ip(o)===Ip(u)?Me(o,u):Ip(o)?1:-1}return Me(i.length,e.length)}const QO=55296,YO=57343;function Ip(i){const e=i.charCodeAt(0);return e>=QO&&e<=YO}function Ho(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const ZT="__name__";class Fi{constructor(e,t,s){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&_e(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Fi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fi?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Fi.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Me(e.length,t.length)}static compareSegments(e,t){const s=Fi.isNumericId(e),o=Fi.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Fi.extractNumericId(e).compare(Fi.extractNumericId(t)):Gp(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return vs.fromString(e.substring(4,e.length-2))}}class it extends Fi{construct(e,t,s){return new it(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new it(t)}static emptyPath(){return new it([])}}const $O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Fi{construct(e,t,s){return new rn(e,t,s)}static isValidIdentifier(e){return $O.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ZT}static keyField(){return new rn([ZT])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new se($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new se($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
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
 */function XA(i,e,t){if(!t)throw new se($.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function XO(i,e,t,s){if(e===!0&&s===!0)throw new se($.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function e0(i){if(!pe.isDocumentKey(i))throw new se($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function t0(i){if(pe.isDocumentKey(i))throw new se($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function WA(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Qf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":_e(12329,{type:typeof i})}function wa(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new se($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qf(i);throw new se($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function Ut(i,e){const t={typeString:i};return e&&(t.value=e),t}function rc(i,e){if(!WA(i))throw new se($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new se($.INVALID_ARGUMENT,t);return!0}/**
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
 */const n0=-62135596800,i0=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*i0);return new at(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<n0)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/i0}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rc(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-n0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:Ut("string",at._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
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
 */const qu=-1;function WO(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new at(t+1,0):new at(t,s));return new ws(o,pe.empty(),e)}function JO(i){return new ws(i.readTime,i.key,qu)}class ws{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ws(Te.min(),pe.empty(),qu)}static max(){return new ws(Te.max(),pe.empty(),qu)}}function ZO(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(i.documentKey,e.documentKey),t!==0?t:Me(i.largestBatchId,e.largestBatchId))}/**
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
 */const ek="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function il(i){if(i.code!==$.FAILED_PRECONDITION||i.message!==ek)throw i;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):W.reject(t)}static resolve(e){return new W(((t,s)=>{t(e)}))}static reject(e){return new W(((t,s)=>{s(e)}))}static waitFor(e){return new W(((t,s)=>{let o=0,u=0,f=!1;e.forEach((m=>{++o,m.next((()=>{++u,f&&u===o&&t()}),(p=>s(p)))})),f=!0,u===o&&t()}))}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next((o=>o?W.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new W(((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;t(e[y]).next((v=>{f[y]=v,++m,m===u&&s(f)}),(v=>o(v)))}}))}static doWhile(e,t){return new W(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function nk(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Yf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yf.ce=-1;/**
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
 */const $g=-1;function $f(i){return i==null}function vf(i){return i===0&&1/i==-1/0}function ik(i){return typeof i=="number"&&Number.isInteger(i)&&!vf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const JA="";function rk(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=r0(e)),e=sk(i.get(t),e);return r0(e)}function sk(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case JA:t+="";break;default:t+=u}}return t}function r0(i){return i+JA+""}/**
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
 */function s0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ks(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function ZA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class dt{constructor(e,t){this.comparator=e,this.root=t||nn.EMPTY}insert(e,t){return new dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,nn.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gh(this.root,e,this.comparator,!0)}}class Gh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??nn.RED,this.left=o??nn.EMPTY,this.right=u??nn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new nn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return nn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return nn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}nn.EMPTY=null,nn.RED=!0,nn.BLACK=!1;nn.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new nn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new a0(this.data.getIterator())}getIteratorFrom(e){return new a0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class a0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new zn([])}unionWith(e){let t=new Ft(rn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new zn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new ew("Invalid base64 string: "+u):u}})(e);return new an(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const ak=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ss(i){if(Ge(!!i,39018),typeof i=="string"){let e=0;const t=ak.exec(i);if(Ge(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(i.seconds),nanos:wt(i.nanos)}}function wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Rs(i){return typeof i=="string"?an.fromBase64String(i):an.fromUint8Array(i)}/**
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
 */const tw="server_timestamp",nw="__type__",iw="__previous_value__",rw="__local_write_time__";function Xg(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[nw])==null?void 0:s.stringValue)===tw}function Xf(i){const e=i.mapValue.fields[iw];return Xg(e)?Xf(e):e}function Hu(i){const e=Ss(i.mapValue.fields[rw].timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class ok{constructor(e,t,s,o,u,f,m,p,y,v,T){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=v,this.apiKey=T}}const Ef="(default)";class Fu{constructor(e,t){this.projectId=e,this.database=t||Ef}static empty(){return new Fu("","")}get isDefaultDatabase(){return this.database===Ef}isEqual(e){return e instanceof Fu&&e.projectId===this.projectId&&e.database===this.database}}function lk(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new se($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fu(i.options.projectId,e)}/**
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
 */const sw="__type__",uk="__max__",Kh={mapValue:{}},aw="__vector__",Tf="value";function Is(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Xg(i)?4:hk(i)?9007199254740991:ck(i)?10:11:_e(28295,{value:i})}function nr(i,e){if(i===e)return!0;const t=Is(i);if(t!==Is(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Hu(i).isEqual(Hu(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Ss(o.timestampValue),m=Ss(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return Rs(o.bytesValue).isEqual(Rs(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return wt(o.geoPointValue.latitude)===wt(u.geoPointValue.latitude)&&wt(o.geoPointValue.longitude)===wt(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return wt(o.integerValue)===wt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=wt(o.doubleValue),m=wt(u.doubleValue);return f===m?vf(f)===vf(m):isNaN(f)&&isNaN(m)}return!1})(i,e);case 9:return Ho(i.arrayValue.values||[],e.arrayValue.values||[],nr);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(s0(f)!==s0(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!nr(f[p],m[p])))return!1;return!0})(i,e);default:return _e(52216,{left:i})}}function Gu(i,e){return(i.values||[]).find((t=>nr(t,e)))!==void 0}function Fo(i,e){if(i===e)return 0;const t=Is(i),s=Is(e);if(t!==s)return Me(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return(function(u,f){const m=wt(u.integerValue||u.doubleValue),p=wt(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1})(i,e);case 3:return o0(i.timestampValue,e.timestampValue);case 4:return o0(Hu(i),Hu(e));case 5:return Gp(i.stringValue,e.stringValue);case 6:return(function(u,f){const m=Rs(u),p=Rs(f);return m.compareTo(p)})(i.bytesValue,e.bytesValue);case 7:return(function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const v=Me(m[y],p[y]);if(v!==0)return v}return Me(m.length,p.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,f){const m=Me(wt(u.latitude),wt(f.latitude));return m!==0?m:Me(wt(u.longitude),wt(f.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return l0(i.arrayValue,e.arrayValue);case 10:return(function(u,f){var R,j,Q,Z;const m=u.fields||{},p=f.fields||{},y=(R=m[Tf])==null?void 0:R.arrayValue,v=(j=p[Tf])==null?void 0:j.arrayValue,T=Me(((Q=y==null?void 0:y.values)==null?void 0:Q.length)||0,((Z=v==null?void 0:v.values)==null?void 0:Z.length)||0);return T!==0?T:l0(y,v)})(i.mapValue,e.mapValue);case 11:return(function(u,f){if(u===Kh.mapValue&&f===Kh.mapValue)return 0;if(u===Kh.mapValue)return 1;if(f===Kh.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const R=Gp(p[T],v[T]);if(R!==0)return R;const j=Fo(m[p[T]],y[v[T]]);if(j!==0)return j}return Me(p.length,v.length)})(i.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function o0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const t=Ss(i),s=Ss(e),o=Me(t.seconds,s.seconds);return o!==0?o:Me(t.nanos,s.nanos)}function l0(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=Fo(t[o],s[o]);if(u)return u}return Me(t.length,s.length)}function Go(i){return Kp(i)}function Kp(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=Ss(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Rs(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return pe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Kp(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Kp(t.fields[f])}`;return o+"}"})(i.mapValue):_e(61005,{value:i})}function tf(i){switch(Is(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xf(i);return e?16+tf(e):16;case 5:return 2*i.stringValue.length;case 6:return Rs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+tf(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ks(s.fields,((u,f)=>{o+=u.length+tf(f)})),o})(i.mapValue);default:throw _e(13486,{value:i})}}function u0(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Qp(i){return!!i&&"integerValue"in i}function Wg(i){return!!i&&"arrayValue"in i}function c0(i){return!!i&&"nullValue"in i}function h0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function nf(i){return!!i&&"mapValue"in i}function ck(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[sw])==null?void 0:s.stringValue)===aw}function Ou(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return ks(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ou(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ou(i.arrayValue.values[t]);return e}return{...i}}function hk(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===uk}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!nf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ou(t)}setAll(e){let t=rn.emptyPath(),s={},o=[];e.forEach(((f,m)=>{if(!t.isImmediateParentOf(m)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=m.popLast()}f?s[m.lastSegment()]=Ou(f):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());nf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];nf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ks(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new In(Ou(this.value))}}function ow(i){const e=[];return ks(i.fields,((t,s)=>{const o=new rn([t]);if(nf(s)){const u=ow(s.mapValue).fields;if(u.length===0)e.push(o);else for(const f of u)e.push(o.child(f))}else e.push(o)})),new zn(e)}/**
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
 */class cn{constructor(e,t,s,o,u,f,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new cn(e,0,Te.min(),Te.min(),Te.min(),In.empty(),0)}static newFoundDocument(e,t,s,o){return new cn(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new cn(e,2,t,Te.min(),Te.min(),In.empty(),0)}static newUnknownDocument(e,t){return new cn(e,3,t,Te.min(),Te.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bf{constructor(e,t){this.position=e,this.inclusive=t}}function f0(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=pe.comparator(pe.fromName(f.referenceValue),t.key):s=Fo(f,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function d0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!nr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ku{constructor(e,t="asc"){this.field=e,this.dir=t}}function fk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class lw{}class Vt extends lw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new mk(e,t,s):t==="array-contains"?new yk(e,s):t==="in"?new _k(e,s):t==="not-in"?new vk(e,s):t==="array-contains-any"?new Ek(e,s):new Vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new pk(e,s):new gk(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Fo(t,this.value)):t!==null&&Is(this.value)===Is(t)&&this.matchesComparison(Fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ti extends lw{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ti(e,t)}matches(e){return uw(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uw(i){return i.op==="and"}function cw(i){return dk(i)&&uw(i)}function dk(i){for(const e of i.filters)if(e instanceof Ti)return!1;return!0}function Yp(i){if(i instanceof Vt)return i.field.canonicalString()+i.op.toString()+Go(i.value);if(cw(i))return i.filters.map((e=>Yp(e))).join(",");{const e=i.filters.map((t=>Yp(t))).join(",");return`${i.op}(${e})`}}function hw(i,e){return i instanceof Vt?(function(s,o){return o instanceof Vt&&s.op===o.op&&s.field.isEqual(o.field)&&nr(s.value,o.value)})(i,e):i instanceof Ti?(function(s,o){return o instanceof Ti&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,f,m)=>u&&hw(f,o.filters[m])),!0):!1})(i,e):void _e(19439)}function fw(i){return i instanceof Vt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Go(t.value)}`})(i):i instanceof Ti?(function(t){return t.op.toString()+" {"+t.getFilters().map(fw).join(" ,")+"}"})(i):"Filter"}class mk extends Vt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class pk extends Vt{constructor(e,t){super(e,"in",t),this.keys=dw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class gk extends Vt{constructor(e,t){super(e,"not-in",t),this.keys=dw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function dw(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>pe.fromName(s.referenceValue)))}class yk extends Vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wg(t)&&Gu(t.arrayValue,this.value)}}class _k extends Vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Gu(this.value.arrayValue,t)}}class vk extends Vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Gu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Gu(this.value.arrayValue,t)}}class Ek extends Vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wg(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Gu(this.value.arrayValue,s)))}}/**
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
 */class Tk{constructor(e,t=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function m0(i,e=null,t=[],s=[],o=null,u=null,f=null){return new Tk(i,e,t,s,o,u,f)}function Jg(i){const e=Ae(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Yp(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),$f(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Go(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Go(s))).join(",")),e.Te=t}return e.Te}function Zg(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!fk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!hw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!d0(i.startAt,e.startAt)&&d0(i.endAt,e.endAt)}function $p(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class sl{constructor(e,t=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function bk(i,e,t,s,o,u,f,m){return new sl(i,e,t,s,o,u,f,m)}function mw(i){return new sl(i)}function p0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Ak(i){return pe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function pw(i){return i.collectionGroup!==null}function ku(i){const e=Ae(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ft(rn.comparator);return f.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(m=m.add(y.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Ku(u,s))})),t.has(rn.keyField().canonicalString())||e.Ie.push(new Ku(rn.keyField(),s))}return e.Ie}function Ji(i){const e=Ae(i);return e.Ee||(e.Ee=wk(e,ku(i))),e.Ee}function wk(i,e){if(i.limitType==="F")return m0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Ku(o.field,u)}));const t=i.endAt?new bf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new bf(i.startAt.position,i.startAt.inclusive):null;return m0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Xp(i,e){const t=i.filters.concat([e]);return new sl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Sk(i,e){const t=i.explicitOrderBy.concat([e]);return new sl(i.path,i.collectionGroup,t,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function Wp(i,e,t){return new sl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Wf(i,e){return Zg(Ji(i),Ji(e))&&i.limitType===e.limitType}function gw(i){return`${Jg(Ji(i))}|lt:${i.limitType}`}function So(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>fw(o))).join(", ")}]`),$f(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>Go(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>Go(o))).join(",")),`Target(${s})`})(Ji(i))}; limitType=${i.limitType})`}function Jf(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):pe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of ku(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(f,m,p){const y=f0(f,m,p);return f.inclusive?y<=0:y<0})(s.startAt,ku(s),o)||s.endAt&&!(function(f,m,p){const y=f0(f,m,p);return f.inclusive?y>=0:y>0})(s.endAt,ku(s),o))})(i,e)}function Rk(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function yw(i){return(e,t)=>{let s=!1;for(const o of ku(i)){const u=Ik(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function Ik(i,e,t){const s=i.field.isKeyField()?pe.comparator(e.key,t.key):(function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Fo(p,y):_e(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return _e(19790,{direction:i.dir})}}/**
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
 */class Ca{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return ZA(this.inner)}size(){return this.innerSize}}/**
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
 */const Ck=new dt(pe.comparator);function xr(){return Ck}const _w=new dt(pe.comparator);function Au(...i){let e=_w;for(const t of i)e=e.insert(t.key,t);return e}function vw(i){let e=_w;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ma(){return Mu()}function Ew(){return Mu()}function Mu(){return new Ca((i=>i.toString()),((i,e)=>i.isEqual(e)))}const Nk=new dt(pe.comparator),xk=new Ft(pe.comparator);function Pe(...i){let e=xk;for(const t of i)e=e.add(t);return e}const Dk=new Ft(Me);function Ok(){return Dk}/**
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
 */function ey(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vf(e)?"-0":e}}function Tw(i){return{integerValue:""+i}}function kk(i,e){return ik(e)?Tw(e):ey(i,e)}/**
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
 */class Zf{constructor(){this._=void 0}}function Mk(i,e,t){return i instanceof Qu?(function(o,u){const f={fields:{[nw]:{stringValue:tw},[rw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Xg(u)&&(u=Xf(u)),u&&(f.fields[iw]=u),{mapValue:f}})(t,e):i instanceof Yu?Aw(i,e):i instanceof $u?ww(i,e):(function(o,u){const f=bw(o,u),m=g0(f)+g0(o.Ae);return Qp(f)&&Qp(o.Ae)?Tw(m):ey(o.serializer,m)})(i,e)}function Pk(i,e,t){return i instanceof Yu?Aw(i,e):i instanceof $u?ww(i,e):t}function bw(i,e){return i instanceof Af?(function(s){return Qp(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Qu extends Zf{}class Yu extends Zf{constructor(e){super(),this.elements=e}}function Aw(i,e){const t=Sw(e);for(const s of i.elements)t.some((o=>nr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class $u extends Zf{constructor(e){super(),this.elements=e}}function ww(i,e){let t=Sw(e);for(const s of i.elements)t=t.filter((o=>!nr(o,s)));return{arrayValue:{values:t}}}class Af extends Zf{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function g0(i){return wt(i.integerValue||i.doubleValue)}function Sw(i){return Wg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class Vk{constructor(e,t){this.field=e,this.transform=t}}function Uk(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Yu&&o instanceof Yu||s instanceof $u&&o instanceof $u?Ho(s.elements,o.elements,nr):s instanceof Af&&o instanceof Af?nr(s.Ae,o.Ae):s instanceof Qu&&o instanceof Qu})(i.transform,e.transform)}class Lk{constructor(e,t){this.version=e,this.transformResults=t}}class yi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yi}static exists(e){return new yi(void 0,e)}static updateTime(e){return new yi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ed{}function Rw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ty(i.key,yi.none()):new sc(i.key,i.data,yi.none());{const t=i.data,s=In.empty();let o=new Ft(rn.comparator);for(let u of e.fields)if(!o.has(u)){let f=t.field(u);f===null&&u.length>1&&(u=u.popLast(),f=t.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Ms(i.key,s,new zn(o.toArray()),yi.none())}}function zk(i,e,t){i instanceof sc?(function(o,u,f){const m=o.value.clone(),p=_0(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Ms?(function(o,u,f){if(!rf(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=_0(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(Iw(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(i,e,t):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,t)}function Pu(i,e,t,s){return i instanceof sc?(function(u,f,m,p){if(!rf(u.precondition,f))return m;const y=u.value.clone(),v=v0(u.fieldTransforms,p,f);return y.setAll(v),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ms?(function(u,f,m,p){if(!rf(u.precondition,f))return m;const y=v0(u.fieldTransforms,p,f),v=f.data;return v.setAll(Iw(u)),v.setAll(y),f.convertToFoundDocument(f.version,v).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((T=>T.field)))})(i,e,t,s):(function(u,f,m){return rf(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m})(i,e,t)}function jk(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=bw(s.transform,o||null);u!=null&&(t===null&&(t=In.empty()),t.set(s.field,u))}return t||null}function y0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ho(s,o,((u,f)=>Uk(u,f)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class sc extends ed{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ms extends ed{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Iw(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function _0(i,e,t){const s=new Map;Ge(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let o=0;o<t.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,Pk(f,m,t[o]))}return s}function v0(i,e,t){const s=new Map;for(const o of i){const u=o.transform,f=t.data.field(o.field);s.set(o.field,Mk(u,f,e))}return s}class ty extends ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bk extends ed{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class qk{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&zk(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Pu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Pu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Ew();return this.mutations.forEach((o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=t.has(o.key)?null:m;const p=Rw(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Te.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Pe())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,((t,s)=>y0(t,s)))&&Ho(this.baseMutations,e.baseMutations,((t,s)=>y0(t,s)))}}class ny{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ge(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let o=(function(){return Nk})();const u=e.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new ny(e,t,s,o)}}/**
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
 */class Hk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Mt,Le;function Gk(i){switch(i){case $.OK:return _e(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return _e(15467,{code:i})}}function Cw(i){if(i===void 0)return Nr("GRPC error has no .code"),$.UNKNOWN;switch(i){case Mt.OK:return $.OK;case Mt.CANCELLED:return $.CANCELLED;case Mt.UNKNOWN:return $.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return $.INTERNAL;case Mt.UNAVAILABLE:return $.UNAVAILABLE;case Mt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Mt.NOT_FOUND:return $.NOT_FOUND;case Mt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Mt.ABORTED:return $.ABORTED;case Mt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Mt.DATA_LOSS:return $.DATA_LOSS;default:return _e(39323,{code:i})}}(Le=Mt||(Mt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Kk(){return new TextEncoder}/**
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
 */const Qk=new vs([4294967295,4294967295],0);function E0(i){const e=Kk().encode(i),t=new qA;return t.update(e),new Uint8Array(t.digest())}function T0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new vs([t,s],0),new vs([o,u],0)]}class iy{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wu(`Invalid padding: ${t}`);if(s<0)throw new wu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=vs.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(vs.fromNumber(s)));return o.compare(Qk)===1&&(o=new vs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=E0(e),[s,o]=T0(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new iy(u,o,t);return s.forEach((m=>f.insert(m))),f}insert(e){if(this.ge===0)return;const t=E0(e),[s,o]=T0(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.be(f)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class td{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ac.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new td(Te.min(),o,new dt(Me),xr(),Pe())}}class ac{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ac(s,t,Pe(),Pe(),Pe())}}/**
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
 */class sf{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=o}}class Nw{constructor(e,t){this.targetId=e,this.Ce=t}}class xw{constructor(e,t,s=an.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class b0{constructor(){this.ve=0,this.Fe=A0(),this.Me=an.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Pe(),t=Pe(),s=Pe();return this.Fe.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:_e(38017,{changeType:u})}})),new ac(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=A0()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ge(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Yk{constructor(e){this.Ge=e,this.ze=new Map,this.je=xr(),this.He=Qh(),this.Je=Qh(),this.Ze=new dt(Me)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if($p(u))if(s===0){const f=new pe(u.path);this.et(t,f,cn.newNoDocument(f,Te.min()))}else Ge(s===1,20013,{expectedCount:s});else{const f=this._t(t);if(f!==s){const m=this.ut(e),p=m?this.ct(m,e,f):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let f,m;try{f=Rs(s).toUint8Array()}catch(p){if(p instanceof ew)return Aa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new iy(f,o,u)}catch(p){return Aa(p instanceof wu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((u,f)=>{const m=this.ot(f);if(m){if(u.current&&$p(m.target)){const p=new pe(m.target.path);this.It(p).has(f)||this.Et(f,p)||this.et(f,p,cn.newNoDocument(p,e))}u.Be&&(t.set(f,u.ke()),u.Ke())}}));let s=Pe();this.Je.forEach(((u,f)=>{let m=!0;f.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const o=new td(e,t,this.Ze,this.je,s);return this.je=xr(),this.He=Qh(),this.Je=Qh(),this.Ze=new dt(Me),o}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.qe(t,1):o.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new b0,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ft(Me),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ft(Me),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new b0),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qh(){return new dt(pe.comparator)}function A0(){return new dt(pe.comparator)}const $k={asc:"ASCENDING",desc:"DESCENDING"},Xk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wk={and:"AND",or:"OR"};class Jk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Jp(i,e){return i.useProto3Json||$f(e)?e:{value:e}}function wf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Zk(i,e){return wf(i,e.toTimestamp())}function Zi(i){return Ge(!!i,49232),Te.fromTimestamp((function(t){const s=Ss(t);return new at(s.seconds,s.nanos)})(i))}function ry(i,e){return Zp(i,e).canonicalString()}function Zp(i,e){const t=(function(o){return new it(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Ow(i){const e=it.fromString(i);return Ge(Uw(e),10190,{key:e.toString()}),e}function eg(i,e){return ry(i.databaseId,e.path)}function Cp(i,e){const t=Ow(e);if(t.get(1)!==i.databaseId.projectId)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new se($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new pe(Mw(t))}function kw(i,e){return ry(i.databaseId,e)}function e4(i){const e=Ow(i);return e.length===4?it.emptyPath():Mw(e)}function tg(i){return new it(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Mw(i){return Ge(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function w0(i,e,t){return{name:eg(i,e),fields:t.value.mapValue.fields}}function t4(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(y,v){return y.useProto3Json?(Ge(v===void 0||typeof v=="string",58123),an.fromBase64String(v||"")):(Ge(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),an.fromUint8Array(v||new Uint8Array))})(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&(function(y){const v=y.code===void 0?$.UNKNOWN:Cw(y.code);return new se(v,y.message||"")})(f);t=new xw(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Cp(i,s.document.name),u=Zi(s.document.updateTime),f=s.document.createTime?Zi(s.document.createTime):Te.min(),m=new In({mapValue:{fields:s.document.fields}}),p=cn.newFoundDocument(o,u,f,m),y=s.targetIds||[],v=s.removedTargetIds||[];t=new sf(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Cp(i,s.document),u=s.readTime?Zi(s.readTime):Te.min(),f=cn.newNoDocument(o,u),m=s.removedTargetIds||[];t=new sf([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Cp(i,s.document),u=s.removedTargetIds||[];t=new sf([],u,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new Fk(o,u),m=s.targetId;t=new Nw(m,f)}}return t}function n4(i,e){let t;if(e instanceof sc)t={update:w0(i,e.key,e.value)};else if(e instanceof ty)t={delete:eg(i,e.key)};else if(e instanceof Ms)t={update:w0(i,e.key,e.data),updateMask:h4(e.fieldMask)};else{if(!(e instanceof Bk))return _e(16599,{dt:e.type});t={verify:eg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const m=f.transform;if(m instanceof Qu)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Yu)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof $u)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Af)return{fieldPath:f.field.canonicalString(),increment:m.Ae};throw _e(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:Zk(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e(27497)})(i,e.precondition)),t}function i4(i,e){return i&&i.length>0?(Ge(e!==void 0,14353),i.map((t=>(function(o,u){let f=o.updateTime?Zi(o.updateTime):Zi(u);return f.isEqual(Te.min())&&(f=Zi(u)),new Lk(f,o.transformResults||[])})(t,e)))):[]}function r4(i,e){return{documents:[kw(i,e.path)]}}function s4(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=kw(i,o);const u=(function(y){if(y.length!==0)return Vw(Ti.create(y,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((v=>(function(R){return{field:Ro(R.field),direction:l4(R.dir)}})(v)))})(e.orderBy);f&&(t.structuredQuery.orderBy=f);const m=Jp(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function a4(i){let e=e4(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ge(s===1,65062);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=(function(T){const R=Pw(T);return R instanceof Ti&&cw(R)?R.getFilters():[R]})(t.where));let f=[];t.orderBy&&(f=(function(T){return T.map((R=>(function(Q){return new Ku(Io(Q.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(T){let R;return R=typeof T=="object"?T.value:T,$f(R)?null:R})(t.limit));let p=null;t.startAt&&(p=(function(T){const R=!!T.before,j=T.values||[];return new bf(j,R)})(t.startAt));let y=null;return t.endAt&&(y=(function(T){const R=!T.before,j=T.values||[];return new bf(j,R)})(t.endAt)),bk(e,o,f,u,m,"F",p,y)}function o4(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pw(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Io(t.unaryFilter.field);return Vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return Vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Io(t.unaryFilter.field);return Vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Io(t.unaryFilter.field);return Vt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Vt.create(Io(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Ti.create(t.compositeFilter.filters.map((s=>Pw(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(i):_e(30097,{filter:i})}function l4(i){return $k[i]}function u4(i){return Xk[i]}function c4(i){return Wk[i]}function Ro(i){return{fieldPath:i.canonicalString()}}function Io(i){return rn.fromServerFormat(i.fieldPath)}function Vw(i){return i instanceof Vt?(function(t){if(t.op==="=="){if(h0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(c0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(h0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(c0(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:u4(t.op),value:t.value}}})(i):i instanceof Ti?(function(t){const s=t.getFilters().map((o=>Vw(o)));return s.length===1?s[0]:{compositeFilter:{op:c4(t.op),filters:s}}})(i):_e(54877,{filter:i})}function h4(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Uw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Lw(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class gs{constructor(e,t,s,o,u=Te.min(),f=Te.min(),m=an.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class f4{constructor(e){this.yt=e}}function d4(i){const e=a4({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Wp(e,e.limit,"L"):e}/**
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
 */class m4{constructor(){this.Sn=new p4}addToCollectionParentIndex(e,t){return this.Sn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(ws.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class p4{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ft(it.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ft(it.comparator)).toArray()}}/**
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
 */const S0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(zw,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
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
 */class Ko{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ko(0)}static ar(){return new Ko(-1)}}/**
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
 */const R0="LruGarbageCollector",g4=1048576;function I0([i,e],[t,s]){const o=Me(i,t);return o===0?Me(e,s):o}class y4{constructor(e){this.Pr=e,this.buffer=new Ft(I0),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();I0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class _4{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){ae(R0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rl(t)?ae(R0,"Ignoring IndexedDB error during garbage collection: ",t):await il(t)}await this.Ar(3e5)}))}}class v4{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Yf.ce);const s=new y4(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(S0)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),S0):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,o,u,f,m,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,m=Date.now(),this.removeTargets(e,s,t)))).next((T=>(u=T,p=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(y=Date.now(),wo()<=De.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-v}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:T}))))}}function E4(i,e){return new v4(i,e)}/**
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
 */class T4{constructor(){this.changes=new Ca((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class b4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class A4{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Pu(s.mutation,o,zn.empty(),at.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Pe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Pe()){const o=ma();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let f=Au();return u.forEach(((m,p)=>{f=f.insert(m,p.overlayedDocument)})),f}))))}getOverlayedDocuments(e,t){const s=ma();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Pe())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((f,m)=>{t.set(f,m)}))}))}computeViews(e,t,s,o){let u=xr();const f=Mu(),m=(function(){return Mu()})();return t.forEach(((p,y)=>{const v=s.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Ms)?u=u.insert(y.key,y):v!==void 0?(f.set(y.key,v.mutation.getFieldMask()),Pu(v.mutation,y,v.mutation.getFieldMask(),at.now())):f.set(y.key,zn.empty())})),this.recalculateAndSaveOverlays(e,u).next((p=>(p.forEach(((y,v)=>f.set(y,v))),t.forEach(((y,v)=>m.set(y,new b4(v,f.get(y)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Mu();let o=new dt(((f,m)=>f-m)),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((f=>{for(const m of f)m.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let v=s.get(p)||zn.empty();v=m.applyToLocalView(y,v),s.set(p,v);const T=(o.get(m.batchId)||Pe()).add(p);o=o.insert(m.batchId,T)}))})).next((()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,v=p.value,T=Ew();v.forEach((R=>{if(!u.has(R)){const j=Rw(t.get(R),s.get(R));j!==null&&T.set(R,j),u=u.add(R)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return Ak(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):W.resolve(ma());let m=qu,p=u;return f.next((y=>W.forEach(y,((v,T)=>(m<T.largestBatchId&&(m=T.largestBatchId),u.get(v)?W.resolve():this.remoteDocumentCache.getEntry(e,v).next((R=>{p=p.insert(v,R)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,p,y,Pe()))).next((v=>({batchId:m,changes:vw(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next((s=>{let o=Au();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let f=Au();return this.indexManager.getCollectionParents(e,u).next((m=>W.forEach(m,(p=>{const y=(function(T,R){return new sl(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((v=>{v.forEach(((T,R)=>{f=f.insert(T,R)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((f=>{u.forEach(((p,y)=>{const v=y.getKey();f.get(v)===null&&(f=f.insert(v,cn.newInvalidDocument(v)))}));let m=Au();return f.forEach(((p,y)=>{const v=u.get(p);v!==void 0&&Pu(v.mutation,y,zn.empty(),at.now()),Jf(t,y)&&(m=m.insert(p,y))})),m}))}}/**
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
 */class w4{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return W.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Zi(o.createTime)}})(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:d4(o.bundledQuery),readTime:Zi(o.readTime)}})(t)),W.resolve()}}/**
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
 */class S4{constructor(){this.overlays=new dt(pe.comparator),this.Lr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ma();return W.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.bt(e,t,u)})),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Lr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=ma(),u=t.length+1,f=new pe(t.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new dt(((y,v)=>y-v));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let v=u.get(y.largestBatchId);v===null&&(v=ma(),u=u.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const m=ma(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,v)=>m.set(y,v))),!(m.size()>=o)););return W.resolve(m)}bt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Lr.get(o.largestBatchId).delete(s.key);this.Lr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new Hk(t,s));let u=this.Lr.get(t);u===void 0&&(u=Pe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class R4{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
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
 */class sy{constructor(){this.kr=new Ft(Yt.Kr),this.qr=new Ft(Yt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Yt(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Yt(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new pe(new it([])),s=new Yt(t,e),o=new Yt(t,e+1),u=[];return this.qr.forEachInRange([s,o],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new pe(new it([])),s=new Yt(t,e),o=new Yt(t,e+1);let u=Pe();return this.qr.forEachInRange([s,o],(f=>{u=u.add(f.key)})),u}containsKey(e){const t=new Yt(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Yt{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return pe.comparator(e.key,t.key)||Me(e.Hr,t.Hr)}static Ur(e,t){return Me(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
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
 */class I4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ft(Yt.Kr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new qk(u,t,s,o);this.mutationQueue.push(f);for(const m of o)this.Jr=this.Jr.add(new Yt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?$g:this.Yn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Yt(t,0),o=new Yt(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,o],(f=>{const m=this.Zr(f.Hr);u.push(m)})),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ft(Me);return t.forEach((o=>{const u=new Yt(o,0),f=new Yt(o,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,f],(m=>{s=s.add(m.Hr)}))})),W.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;pe.isDocumentKey(u)||(u=u.child(""));const f=new Yt(new pe(u),0);let m=new Ft(Me);return this.Jr.forEachWhile((p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Hr)),!0)}),f),W.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ge(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return W.forEach(t.mutations,(o=>{const u=new Yt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Yt(t,0),o=this.Jr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class C4{constructor(e){this.ti=e,this.docs=(function(){return new dt(pe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,f=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():cn.newInvalidDocument(t))}getEntries(e,t){let s=xr();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():cn.newInvalidDocument(o))})),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=xr();const f=t.path,m=new pe(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||ZO(JO(v),s)<=0||(o.has(v.key)||Jf(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,t,s,o){_e(9500)}ni(e,t){return W.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new N4(this)}getSize(e){return W.resolve(this.size)}}class N4 extends T4{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(s)})),W.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class x4{constructor(e){this.persistence=e,this.ri=new Ca((t=>Jg(t)),Zg),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ii=0,this.si=new sy,this.targetCount=0,this.oi=Ko._r()}forEachTarget(e,t){return this.ri.forEach(((s,o)=>t(o))),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),W.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ko(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.lr(t),W.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.ri.forEach(((f,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),W.waitFor(u).next((()=>o))}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((f=>{u.push(o.markPotentiallyOrphaned(e,f))})),W.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.si.containsKey(t))}}/**
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
 */class jw{constructor(e,t){this._i={},this.overlays={},this.ai=new Yf(0),this.ui=!1,this.ui=!0,this.ci=new R4,this.referenceDelegate=e(this),this.li=new x4(this),this.indexManager=new m4,this.remoteDocumentCache=(function(o){return new C4(o)})((s=>this.referenceDelegate.hi(s))),this.serializer=new f4(t),this.Pi=new w4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new S4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new I4(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new D4(this.ai.next());return this.referenceDelegate.Ti(),s(o).next((u=>this.referenceDelegate.Ii(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ei(e,t){return W.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class D4 extends tk{constructor(e){super(),this.currentSequenceNumber=e}}class ay{constructor(e){this.persistence=e,this.Ri=new sy,this.Ai=null}static Vi(e){return new ay(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,(s=>{const o=pe.fromPath(s);return this.mi(e,o).next((u=>{u||t.removeEntry(o,Te.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return W.or([()=>W.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Sf{constructor(e,t){this.persistence=e,this.fi=new Ca((s=>rk(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=E4(this,t)}static Vi(e,t){return new Sf(e,t)}Ti(){}Ii(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return W.forEach(this.fi,((s,o)=>this.wr(e,s,o).next((u=>u?W.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ni(e,(f=>this.wr(e,f,t).next((m=>{m||(s++,u.removeEntry(f,Te.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),W.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=tf(e.data.value)),t}wr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class oy{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=o}static Es(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new oy(e,t.fromCache,s,o)}}/**
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
 */class O4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class k4{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return kR()?8:nk(Lt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.gs(e,t).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,t,o,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new O4;return this.ys(e,t,f).next((m=>{if(u.result=m,this.As)return this.ws(e,t,f,m.size)}))})).next((()=>u.result))}ws(e,t,s,o){return s.documentReadCount<this.Vs?(wo()<=De.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",So(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(wo()<=De.DEBUG&&ae("QueryEngine","Query:",So(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(wo()<=De.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",So(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ji(t))):W.resolve())}gs(e,t){if(p0(t))return W.resolve(null);let s=Ji(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Wp(t,null,"F"),s=Ji(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=Pe(...u);return this.fs.getDocuments(e,f).next((m=>this.indexManager.getMinOffset(e,s).next((p=>{const y=this.bs(t,m);return this.Ss(t,y,f,p.readTime)?this.gs(e,Wp(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,s,o){return p0(t)||o.isEqual(Te.min())?W.resolve(null):this.fs.getDocuments(e,s).next((u=>{const f=this.bs(t,u);return this.Ss(t,f,s,o)?W.resolve(null):(wo()<=De.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),So(t)),this.Ds(e,f,t,WO(o,qu)).next((m=>m)))}))}bs(e,t){let s=new Ft(yw(e));return t.forEach(((o,u)=>{Jf(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ys(e,t,s){return wo()<=De.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",So(t)),this.fs.getDocumentsMatchingQuery(e,t,ws.min(),s)}Ds(e,t,s,o){return this.fs.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const ly="LocalStore",M4=3e8;class P4{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new dt(Me),this.Fs=new Ca((u=>Jg(u)),Zg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A4(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function V4(i,e,t,s){return new P4(i,e,t,s)}async function Bw(i,e){const t=Ae(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],m=[];let p=Pe();for(const y of o){f.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of u){m.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(s,p).next((y=>({Ns:y,removedBatchIds:f,addedBatchIds:m})))}))}))}function U4(i,e){const t=Ae(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,p,y,v){const T=y.batch,R=T.keys();let j=W.resolve();return R.forEach((Q=>{j=j.next((()=>v.getEntry(p,Q))).next((Z=>{const J=y.docVersions.get(Q);Ge(J!==null,48541),Z.version.compareTo(J)<0&&(T.applyToRemoteDocument(Z,y),Z.isValidDocument()&&(Z.setReadTime(y.commitVersion),v.addEntry(Z)))}))})),j.next((()=>m.mutationQueue.removeMutationBatch(p,T)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let p=Pe();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function qw(i){const e=Ae(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function L4(i,e){const t=Ae(i),s=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const m=[];e.targetChanges.forEach(((v,T)=>{const R=o.get(T);if(!R)return;m.push(t.li.removeMatchingKeys(u,v.removedDocuments,T).next((()=>t.li.addMatchingKeys(u,v.addedDocuments,T))));let j=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(T)!==null?j=j.withResumeToken(an.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):v.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(v.resumeToken,s)),o=o.insert(T,j),(function(Z,J,ce){return Z.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=M4?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0})(R,j,v)&&m.push(t.li.updateTargetData(u,j))}));let p=xr(),y=Pe();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))})),m.push(z4(u,f,e.documentUpdates).next((v=>{p=v.Bs,y=v.Ls}))),!s.isEqual(Te.min())){const v=t.li.getLastRemoteSnapshotVersion(u).next((T=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(v)}return W.waitFor(m).next((()=>f.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,p,y))).next((()=>p))})).then((u=>(t.vs=o,u)))}function z4(i,e,t){let s=Pe(),o=Pe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let f=xr();return t.forEach(((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(Te.min())?(e.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),f=f.insert(m,p)):ae(ly,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)})),{Bs:f,Ls:o}}))}function j4(i,e){const t=Ae(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=$g),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function B4(i,e){const t=Ae(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.li.getTargetData(s,e).next((u=>u?(o=u,W.resolve(o)):t.li.allocateTargetId(s).next((f=>(o=new gs(e,f,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.vs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function ng(i,e,t){const s=Ae(i),o=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!rl(f))throw f;ae(ly,`Failed to update sequence numbers for target ${e}: ${f}`)}s.vs=s.vs.remove(e),s.Fs.delete(o.target)}function C0(i,e,t){const s=Ae(i);let o=Te.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(p,y,v){const T=Ae(p),R=T.Fs.get(v);return R!==void 0?W.resolve(T.vs.get(R)):T.li.getTargetData(y,v)})(s,f,Ji(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,m.targetId).next((p=>{u=p}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,e,t?o:Te.min(),t?u:Pe()))).next((m=>(q4(s,Rk(e),m),{documents:m,ks:u})))))}function q4(i,e,t){let s=i.Ms.get(e)||Te.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class N0{constructor(){this.activeTargetIds=Ok()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class H4{constructor(){this.vo=new N0,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new N0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class F4{Mo(e){}shutdown(){}}/**
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
 */const x0="ConnectivityMonitor";class D0{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){ae(x0,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){ae(x0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yh=null;function ig(){return Yh===null?Yh=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yh++,"0x"+Yh.toString(16)}/**
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
 */const Np="RestConnection",G4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class K4{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.$o=this.databaseId.database===Ef?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,u){const f=ig(),m=this.Qo(e,t.toUriEncodedString());ae(Np,`Sending RPC '${e}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,u);const{host:y}=new URL(m),v=xs(y);return this.zo(e,m,p,s,v).then((T=>(ae(Np,`Received RPC '${e}' ${f}: `,T),T)),(T=>{throw Aa(Np,`RPC '${e}' ${f} failed with error: `,T,"url: ",m,"request:",s),T}))}jo(e,t,s,o,u,f){return this.Wo(e,t,s,o,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+nl})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}Qo(e,t){const s=G4[e];let o=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */const ln="WebChannelConnection",_u=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(o){setTimeout((()=>{throw o}),0)}}))};class Mo extends K4{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Mo.c_){const e=KA();_u(e,GA.STAT_EVENT,(t=>{t.stat===Fp.PROXY?ae(ln,"STAT_EVENT: detected buffering proxy"):t.stat===Fp.NOPROXY&&ae(ln,"STAT_EVENT: detected no buffering proxy")})),Mo.c_=!0}}zo(e,t,s,o,u){const f=ig();return new Promise(((m,p)=>{const y=new HA;y.setWithCredentials(!0),y.listenOnce(FA.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case ef.NO_ERROR:const T=y.getResponseJson();ae(ln,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(T)),m(T);break;case ef.TIMEOUT:ae(ln,`RPC '${e}' ${f} timed out`),p(new se($.DEADLINE_EXCEEDED,"Request time out"));break;case ef.HTTP_ERROR:const R=y.getStatus();if(ae(ln,`RPC '${e}' ${f} failed with status:`,R,"response text:",y.getResponseText()),R>0){let j=y.getResponseJson();Array.isArray(j)&&(j=j[0]);const Q=j==null?void 0:j.error;if(Q&&Q.status&&Q.message){const Z=(function(ce){const de=ce.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(de)>=0?de:$.UNKNOWN})(Q.status);p(new se(Z,Q.message))}else p(new se($.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se($.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ae(ln,`RPC '${e}' ${f} completed.`)}}));const v=JSON.stringify(o);ae(ln,`RPC '${e}' ${f} sending request:`,o),y.send(t,"POST",v,s,15)}))}T_(e,t,s){const o=ig(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const y=u.join("");ae(ln,`Creating RPC '${e}' stream ${o}: ${y}`,m);const v=f.createWebChannel(y,m);this.I_(v);let T=!1,R=!1;const j=new Q4({Ho:Q=>{R?ae(ln,`Not sending because RPC '${e}' stream ${o} is closed:`,Q):(T||(ae(ln,`Opening RPC '${e}' stream ${o} transport.`),v.open(),T=!0),ae(ln,`RPC '${e}' stream ${o} sending:`,Q),v.send(Q))},Jo:()=>v.close()});return _u(v,bu.EventType.OPEN,(()=>{R||(ae(ln,`RPC '${e}' stream ${o} transport opened.`),j.i_())})),_u(v,bu.EventType.CLOSE,(()=>{R||(R=!0,ae(ln,`RPC '${e}' stream ${o} transport closed`),j.o_(),this.E_(v))})),_u(v,bu.EventType.ERROR,(Q=>{R||(R=!0,Aa(ln,`RPC '${e}' stream ${o} transport errored. Name:`,Q.name,"Message:",Q.message),j.o_(new se($.UNAVAILABLE,"The operation could not be completed")))})),_u(v,bu.EventType.MESSAGE,(Q=>{var Z;if(!R){const J=Q.data[0];Ge(!!J,16349);const ce=J,de=(ce==null?void 0:ce.error)||((Z=ce[0])==null?void 0:Z.error);if(de){ae(ln,`RPC '${e}' stream ${o} received error:`,de);const ue=de.status;let ye=(function(I){const S=Mt[I];if(S!==void 0)return Cw(S)})(ue),Ce=de.message;ue==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&Aa(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ye===void 0&&(ye=$.INTERNAL,Ce="Unknown error status: "+ue+" with message "+de.message),R=!0,j.o_(new se(ye,Ce)),v.close()}else ae(ln,`RPC '${e}' stream ${o} received:`,J),j.__(J)}})),Mo.u_(),setTimeout((()=>{j.s_()}),0),j}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return QA()}}/**
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
 */function Y4(i){return new Mo(i)}function xp(){return typeof document<"u"?document:null}/**
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
 */function nd(i){return new Jk(i,!0)}/**
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
 */Mo.c_=!1;class Hw{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=o,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const O0="PersistentStream";class Fw{constructor(e,t,s,o,u,f,m,p){this.Ci=e,this.b_=s,this.S_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hw(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.D_===t&&this.G_(s,o)}),(s=>{e((()=>{const o=new se($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{s((()=>this.z_(o)))})),this.stream.onMessage((o=>{s((()=>++this.F_==1?this.H_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return ae(O0,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(ae(O0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $4 extends Fw{constructor(e,t,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,f),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=t4(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Te.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Te.min():f.readTime?Zi(f.readTime):Te.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=tg(this.serializer),t.addTarget=(function(u,f){let m;const p=f.target;if(m=$p(p)?{documents:r4(u,p)}:{query:s4(u,p).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=Dw(u,f.resumeToken);const y=Jp(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Te.min())>0){m.readTime=wf(u,f.snapshotVersion.toTimestamp());const y=Jp(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m})(this.serializer,e);const s=o4(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=tg(this.serializer),t.removeTarget=e,this.K_(t)}}class X4 extends Fw{constructor(e,t,s,o,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Ge(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ge(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ge(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=i4(e.writeResults,e.commitTime),s=Zi(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=tg(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>n4(this.serializer,s)))};this.K_(t)}}/**
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
 */class W4{}class J4 extends W4{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,Zp(t,s),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se($.UNKNOWN,u.toString())}))}jo(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,m])=>this.connection.jo(e,Zp(t,s),o,f,m,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new se($.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Z4(i,e,t,s){return new J4(i,e,t,s)}class eM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nr(t),this.aa=!1):ae("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Sa="RemoteStore";class tM{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{Na(this)&&(ae(Sa,"Restarting streams for network reachability change."),await(async function(p){const y=Ae(p);y.Ea.add(4),await oc(y),y.Va.set("Unknown"),y.Ea.delete(4),await id(y)})(this))}))})),this.Va=new eM(s,o)}}async function id(i){if(Na(i))for(const e of i.Ra)await e(!0)}async function oc(i){for(const e of i.Ra)await e(!1)}function Gw(i,e){const t=Ae(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),fy(t)?hy(t):al(t).O_()&&cy(t,e))}function uy(i,e){const t=Ae(i),s=al(t);t.Ia.delete(e),s.O_()&&Kw(t,e),t.Ia.size===0&&(s.O_()?s.L_():Na(t)&&t.Va.set("Unknown"))}function cy(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}al(i).Z_(e)}function Kw(i,e){i.da.$e(e),al(i).X_(e)}function hy(i){i.da=new Yk({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),al(i).start(),i.Va.ua()}function fy(i){return Na(i)&&!al(i).x_()&&i.Ia.size>0}function Na(i){return Ae(i).Ea.size===0}function Qw(i){i.da=void 0}async function nM(i){i.Va.set("Online")}async function iM(i){i.Ia.forEach(((e,t)=>{cy(i,e)}))}async function rM(i,e){Qw(i),fy(i)?(i.Va.ha(e),hy(i)):i.Va.set("Unknown")}async function sM(i,e,t){if(i.Va.set("Online"),e instanceof xw&&e.state===2&&e.cause)try{await(async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.da.removeTarget(m))})(i,e)}catch(s){ae(Sa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Rf(i,s)}else if(e instanceof sf?i.da.Xe(e):e instanceof Nw?i.da.st(e):i.da.tt(e),!t.isEqual(Te.min()))try{const s=await qw(i.localStore);t.compareTo(s)>=0&&await(function(u,f){const m=u.da.Tt(f);return m.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=u.Ia.get(y);v&&u.Ia.set(y,v.withResumeToken(p.resumeToken,f))}})),m.targetMismatches.forEach(((p,y)=>{const v=u.Ia.get(p);if(!v)return;u.Ia.set(p,v.withResumeToken(an.EMPTY_BYTE_STRING,v.snapshotVersion)),Kw(u,p);const T=new gs(v.target,p,y,v.sequenceNumber);cy(u,T)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ae(Sa,"Failed to raise snapshot:",s),await Rf(i,s)}}async function Rf(i,e,t){if(!rl(e))throw e;i.Ea.add(1),await oc(i),i.Va.set("Offline"),t||(t=()=>qw(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ae(Sa,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await id(i)}))}function Yw(i,e){return e().catch((t=>Rf(i,t,e)))}async function rd(i){const e=Ae(i),t=Cs(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:$g;for(;aM(e);)try{const o=await j4(e.localStore,s);if(o===null){e.Ta.length===0&&t.L_();break}s=o.batchId,oM(e,o)}catch(o){await Rf(e,o)}$w(e)&&Xw(e)}function aM(i){return Na(i)&&i.Ta.length<10}function oM(i,e){i.Ta.push(e);const t=Cs(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function $w(i){return Na(i)&&!Cs(i).x_()&&i.Ta.length>0}function Xw(i){Cs(i).start()}async function lM(i){Cs(i).ra()}async function uM(i){const e=Cs(i);for(const t of i.Ta)e.ea(t.mutations)}async function cM(i,e,t){const s=i.Ta.shift(),o=ny.from(s,e,t);await Yw(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await rd(i)}async function hM(i,e){e&&Cs(i).Y_&&await(async function(s,o){if((function(f){return Gk(f)&&f!==$.ABORTED})(o.code)){const u=s.Ta.shift();Cs(s).B_(),await Yw(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await rd(s)}})(i,e),$w(i)&&Xw(i)}async function k0(i,e){const t=Ae(i);t.asyncQueue.verifyOperationInProgress(),ae(Sa,"RemoteStore received new credentials");const s=Na(t);t.Ea.add(3),await oc(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await id(t)}async function fM(i,e){const t=Ae(i);e?(t.Ea.delete(2),await id(t)):e||(t.Ea.add(2),await oc(t),t.Va.set("Unknown"))}function al(i){return i.ma||(i.ma=(function(t,s,o){const u=Ae(t);return u.sa(),new $4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:nM.bind(null,i),Yo:iM.bind(null,i),t_:rM.bind(null,i),J_:sM.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),fy(i)?hy(i):i.Va.set("Unknown")):(await i.ma.stop(),Qw(i))}))),i.ma}function Cs(i){return i.fa||(i.fa=(function(t,s,o){const u=Ae(t);return u.sa(),new X4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:lM.bind(null,i),t_:hM.bind(null,i),ta:uM.bind(null,i),na:cM.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await rd(i)):(await i.fa.stop(),i.Ta.length>0&&(ae(Sa,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class dy{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const f=Date.now()+s,m=new dy(e,t,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function my(i,e){if(Nr("AsyncQueue",`${e}: ${i}`),rl(i))return new se($.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Po{static emptySet(e){return new Po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Au(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class M0{constructor(){this.ga=new dt(pe.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Qo{constructor(e,t,s,o,u,f,m,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,u){const f=[];return t.forEach((m=>{f.push({type:0,doc:m})})),new Qo(e,t,Po.emptySet(t),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class dM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class mM{constructor(){this.queries=P0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ae(t),u=o.queries;o.queries=P0(),u.forEach(((f,m)=>{for(const p of m.ba)p.onError(s)}))})(this,new se($.ABORTED,"Firestore shutting down"))}}function P0(){return new Ca((i=>gw(i)),Wf)}async function pM(i,e){const t=Ae(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Sa()&&e.Da()&&(s=2):(u=new dM,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const m=my(f,`Initialization of query '${So(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&py(t)}async function gM(i,e){const t=Ae(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const f=u.ba.indexOf(e);f>=0&&(u.ba.splice(f,1),u.ba.length===0?o=e.Da()?0:1:!u.Sa()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function yM(i,e){const t=Ae(i);let s=!1;for(const o of e){const u=o.query,f=t.queries.get(u);if(f){for(const m of f.ba)m.Fa(o)&&(s=!0);f.wa=o}}s&&py(t)}function _M(i,e,t){const s=Ae(i),o=s.queries.get(e);if(o)for(const u of o.ba)u.onError(t);s.queries.delete(e)}function py(i){i.Ca.forEach((e=>{e.next()}))}var rg,V0;(V0=rg||(rg={})).Ma="default",V0.Cache="cache";class vM{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Qo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==rg.Cache}}/**
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
 */class Ww{constructor(e){this.key=e}}class Jw{constructor(e){this.key=e}}class EM{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Pe(),this.mutatedKeys=Pe(),this.eu=yw(e),this.tu=new Po(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new M0,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((v,T)=>{const R=o.get(v),j=Jf(this.query,T)?T:null,Q=!!R&&this.mutatedKeys.has(R.key),Z=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let J=!1;R&&j?R.data.isEqual(j.data)?Q!==Z&&(s.track({type:3,doc:j}),J=!0):this.su(R,j)||(s.track({type:2,doc:j}),J=!0,(p&&this.eu(j,p)>0||y&&this.eu(j,y)<0)&&(m=!0)):!R&&j?(s.track({type:0,doc:j}),J=!0):R&&!j&&(s.track({type:1,doc:R}),J=!0,(p||y)&&(m=!0)),J&&(j?(f=f.add(j),u=Z?u.add(v):u.delete(v)):(f=f.delete(v),u=u.delete(v)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const v=this.query.limitType==="F"?f.last():f.first();f=f.delete(v.key),u=u.delete(v.key),s.track({type:1,doc:v})}return{tu:f,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((v,T)=>(function(j,Q){const Z=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:J})}};return Z(j)-Z(Q)})(v.type,T.type)||this.eu(v.doc,T.doc))),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,f.length!==0||y?{snapshot:new Qo(this.query,e.tu,u,f,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new M0,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Pe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Jw(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Ww(s))})),t}cu(e){this.Za=e.ks,this.Ya=Pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const gy="SyncEngine";class TM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class bM{constructor(e){this.key=e,this.hu=!1}}class AM{constructor(e,t,s,o,u,f){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Ca((m=>gw(m)),Wf),this.Iu=new Map,this.Eu=new Set,this.Ru=new dt(pe.comparator),this.Au=new Map,this.Vu=new sy,this.du={},this.mu=new Map,this.fu=Ko.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function wM(i,e,t=!0){const s=rS(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await Zw(s,e,t,!0),o}async function SM(i,e){const t=rS(i);await Zw(t,e,!0,!1)}async function Zw(i,e,t,s){const o=await B4(i.localStore,Ji(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await RM(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&t&&Gw(i.remoteStore,o),m}async function RM(i,e,t,s,o){i.pu=(T,R,j)=>(async function(Z,J,ce,de){let ue=J.view.ru(ce);ue.Ss&&(ue=await C0(Z.localStore,J.query,!1).then((({documents:I})=>J.view.ru(I,ue))));const ye=de&&de.targetChanges.get(J.targetId),Ce=de&&de.targetMismatches.get(J.targetId)!=null,te=J.view.applyChanges(ue,Z.isPrimaryClient,ye,Ce);return L0(Z,J.targetId,te.au),te.snapshot})(i,T,R,j);const u=await C0(i.localStore,e,!0),f=new EM(e,u.ks),m=f.ru(u.documents),p=ac.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),y=f.applyChanges(m,i.isPrimaryClient,p);L0(i,t,y.au);const v=new TM(e,t,f);return i.Tu.set(e,v),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),y.snapshot}async function IM(i,e,t){const s=Ae(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter((f=>!Wf(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ng(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&uy(s.remoteStore,o.targetId),sg(s,o.targetId)})).catch(il)):(sg(s,o.targetId),await ng(s.localStore,o.targetId,!0))}async function CM(i,e){const t=Ae(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),uy(t.remoteStore,s.targetId))}async function NM(i,e,t){const s=VM(i);try{const o=await(function(f,m){const p=Ae(f),y=at.now(),v=m.reduce(((j,Q)=>j.add(Q.key)),Pe());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let Q=xr(),Z=Pe();return p.xs.getEntries(j,v).next((J=>{Q=J,Q.forEach(((ce,de)=>{de.isValidDocument()||(Z=Z.add(ce))}))})).next((()=>p.localDocuments.getOverlayedDocuments(j,Q))).next((J=>{T=J;const ce=[];for(const de of m){const ue=jk(de,T.get(de.key).overlayedDocument);ue!=null&&ce.push(new Ms(de.key,ue,ow(ue.value.mapValue),yi.exists(!0)))}return p.mutationQueue.addMutationBatch(j,y,ce,m)})).next((J=>{R=J;const ce=J.applyToLocalDocumentSet(T,Z);return p.documentOverlayCache.saveOverlays(j,J.batchId,ce)}))})).then((()=>({batchId:R.batchId,changes:vw(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(f,m,p){let y=f.du[f.currentUser.toKey()];y||(y=new dt(Me)),y=y.insert(m,p),f.du[f.currentUser.toKey()]=y})(s,o.batchId,t),await lc(s,o.changes),await rd(s.remoteStore)}catch(o){const u=my(o,"Failed to persist write");t.reject(u)}}async function eS(i,e){const t=Ae(i);try{const s=await L4(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const f=t.Au.get(u);f&&(Ge(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Ge(f.hu,14607):o.removedDocuments.size>0&&(Ge(f.hu,42227),f.hu=!1))})),await lc(t,s,e)}catch(s){await il(s)}}function U0(i,e,t){const s=Ae(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach(((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)})),(function(f,m){const p=Ae(f);p.onlineState=m;let y=!1;p.queries.forEach(((v,T)=>{for(const R of T.ba)R.va(m)&&(y=!0)})),y&&py(p)})(s.eventManager,e),o.length&&s.Pu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xM(i,e,t){const s=Ae(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new dt(pe.comparator);f=f.insert(u,cn.newNoDocument(u,Te.min()));const m=Pe().add(u),p=new td(Te.min(),new Map,new dt(Me),f,m);await eS(s,p),s.Ru=s.Ru.remove(u),s.Au.delete(e),yy(s)}else await ng(s.localStore,e,!1).then((()=>sg(s,e,t))).catch(il)}async function DM(i,e){const t=Ae(i),s=e.batch.batchId;try{const o=await U4(t.localStore,e);nS(t,s,null),tS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await lc(t,o)}catch(o){await il(o)}}async function OM(i,e,t){const s=Ae(i);try{const o=await(function(f,m){const p=Ae(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let v;return p.mutationQueue.lookupMutationBatch(y,m).next((T=>(Ge(T!==null,37113),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,m))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v))).next((()=>p.localDocuments.getDocuments(y,v)))}))})(s.localStore,e);nS(s,e,t),tS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await lc(s,o)}catch(o){await il(o)}}function tS(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function nS(i,e,t){const s=Ae(i);let o=s.du[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.du[s.currentUser.toKey()]=o}}function sg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||iS(i,s)}))}function iS(i,e){i.Eu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(uy(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),yy(i))}function L0(i,e,t){for(const s of t)s instanceof Ww?(i.Vu.addReference(s.key,e),kM(i,s)):s instanceof Jw?(ae(gy,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||iS(i,s.key)):_e(19791,{wu:s})}function kM(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Eu.has(s)||(ae(gy,"New document in limbo: "+t),i.Eu.add(s),yy(i))}function yy(i){for(;i.Eu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new pe(it.fromString(e)),s=i.fu.next();i.Au.set(s,new bM(t)),i.Ru=i.Ru.insert(t,s),Gw(i.remoteStore,new gs(Ji(mw(t.path)),s,"TargetPurposeLimboResolution",Yf.ce))}}async function lc(i,e,t){const s=Ae(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,p)=>{f.push(s.pu(p,e,t).then((y=>{var v;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:v.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=oy.Es(p.targetId,y);u.push(T)}})))})),await Promise.all(f),s.Pu.J_(o),await(async function(p,y){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>W.forEach(y,(R=>W.forEach(R.Ts,(j=>v.persistence.referenceDelegate.addReference(T,R.targetId,j))).next((()=>W.forEach(R.Is,(j=>v.persistence.referenceDelegate.removeReference(T,R.targetId,j)))))))))}catch(T){if(!rl(T))throw T;ae(ly,"Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const j=v.vs.get(R),Q=j.snapshotVersion,Z=j.withLastLimboFreeSnapshotVersion(Q);v.vs=v.vs.insert(R,Z)}}})(s.localStore,u))}async function MM(i,e){const t=Ae(i);if(!t.currentUser.isEqual(e)){ae(gy,"User change. New user:",e.toKey());const s=await Bw(t.localStore,e);t.currentUser=e,(function(u,f){u.mu.forEach((m=>{m.forEach((p=>{p.reject(new se($.CANCELLED,f))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await lc(t,s.Ns)}}function PM(i,e){const t=Ae(i),s=t.Au.get(e);if(s&&s.hu)return Pe().add(s.key);{let o=Pe();const u=t.Iu.get(e);if(!u)return o;for(const f of u){const m=t.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function rS(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=eS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xM.bind(null,e),e.Pu.J_=yM.bind(null,e.eventManager),e.Pu.yu=_M.bind(null,e.eventManager),e}function VM(i){const e=Ae(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OM.bind(null,e),e}class If{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return V4(this.persistence,new k4,e.initialUser,this.serializer)}Cu(e){return new jw(ay.Vi,this.serializer)}Du(e){return new H4}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}If.provider={build:()=>new If};class UM extends If{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ge(this.persistence.referenceDelegate instanceof Sf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new _4(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new jw((s=>Sf.Vi(s,t)),this.serializer)}}class ag{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>U0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MM.bind(null,this.syncEngine),await fM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mM})()}createDatastore(e){const t=nd(e.databaseInfo.databaseId),s=Y4(e.databaseInfo);return Z4(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,f,m){return new tM(s,o,u,f,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>U0(this.syncEngine,t,0)),(function(){return D0.v()?new D0:new F4})())}createSyncEngine(e,t){return(function(o,u,f,m,p,y,v){const T=new AM(o,u,f,m,p,y);return v&&(T.gu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ae(o);ae(Sa,"RemoteStore shutting down."),u.Ea.add(5),await oc(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ag.provider={build:()=>new ag};/**
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
 */class LM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ns="FirestoreClient";class zM{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=o,this.user=un.UNAUTHENTICATED,this.clientId=Yg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{ae(Ns,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(ae(Ns,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=my(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Dp(i,e){i.asyncQueue.verifyOperationInProgress(),ae(Ns,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await Bw(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function z0(i,e){i.asyncQueue.verifyOperationInProgress();const t=await jM(i);ae(Ns,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>k0(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>k0(e.remoteStore,o))),i._onlineComponents=e}async function jM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ae(Ns,"Using user provided OfflineComponentProvider");try{await Dp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===$.FAILED_PRECONDITION||o.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Aa("Error using user provided cache. Falling back to memory cache: "+t),await Dp(i,new If)}}else ae(Ns,"Using default OfflineComponentProvider"),await Dp(i,new UM(void 0));return i._offlineComponents}async function sS(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ae(Ns,"Using user provided OnlineComponentProvider"),await z0(i,i._uninitializedComponentsProvider._online)):(ae(Ns,"Using default OnlineComponentProvider"),await z0(i,new ag))),i._onlineComponents}function BM(i){return sS(i).then((e=>e.syncEngine))}async function qM(i){const e=await sS(i),t=e.eventManager;return t.onListen=wM.bind(null,e.syncEngine),t.onUnlisten=IM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=SM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=CM.bind(null,e.syncEngine),t}function HM(i,e,t={}){const s=new Es;return i.asyncQueue.enqueueAndForget((async()=>(function(u,f,m,p,y){const v=new LM({next:R=>{v.Nu(),f.enqueueAndForget((()=>gM(u,T))),R.fromCache&&p.source==="server"?y.reject(new se($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(R)},error:R=>y.reject(R)}),T=new vM(m,v,{includeMetadataChanges:!0,Ka:!0});return pM(u,T)})(await qM(i),i.asyncQueue,e,t,s))),s.promise}function FM(i,e){const t=new Es;return i.asyncQueue.enqueueAndForget((async()=>NM(await BM(i),e,t))),t.promise}/**
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
 */function aS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const GM="ComponentProvider",j0=new Map;function KM(i,e,t,s,o){return new ok(i,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,aS(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,s)}/**
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
 */const oS="firestore.googleapis.com",B0=!0;class q0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oS,this.ssl=B0}else this.host=e.host,this.ssl=e.ssl??B0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<g4)throw new se($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=aS(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new se($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sd{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new q0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new q0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new jO;switch(s.type){case"firstParty":return new FO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=j0.get(t);s&&(ae(GM,"Removing Datastore"),j0.delete(t),s.terminate())})(this),Promise.resolve()}}function QM(i,e,t,s={}){var y;i=wa(i,sd);const o=xs(e),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(hg(`https://${m}`),fg("Firestore",!0)),u.host!==oS&&u.host!==m&&Aa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...u,host:m,ssl:o,emulatorOptions:s};if(!Lo(p,f)&&(i._setSettings(p),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=un.MOCK_USER;else{v=ib(s.mockUserToken,(y=i._app)==null?void 0:y.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new se($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new un(R)}i._authCredentials=new BO(new $A(v,T))}}/**
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
 */class xa{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xa(this.firestore,e,this._query)}}class qt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}toJSON(){return{type:qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rc(t,qt._jsonSchema))return new qt(e,s||null,new pe(it.fromString(t.referencePath)))}}qt._jsonSchemaVersion="firestore/documentReference/1.0",qt._jsonSchema={type:Ut("string",qt._jsonSchemaVersion),referencePath:Ut("string")};class Ts extends xa{constructor(e,t,s){super(e,t,mw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new pe(e))}withConverter(e){return new Ts(this.firestore,e,this._path)}}function _y(i,e,...t){if(i=ve(i),XA("collection","path",e),i instanceof sd){const s=it.fromString(e,...t);return t0(s),new Ts(i,null,s)}{if(!(i instanceof qt||i instanceof Ts))throw new se($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return t0(s),new Ts(i.firestore,null,s)}}function ad(i,e,...t){if(i=ve(i),arguments.length===1&&(e=Yg.newId()),XA("doc","path",e),i instanceof sd){const s=it.fromString(e,...t);return e0(s),new qt(i,null,new pe(s))}{if(!(i instanceof qt||i instanceof Ts))throw new se($.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(it.fromString(e,...t));return e0(s),new qt(i.firestore,i instanceof Ts?i.converter:null,new pe(s))}}/**
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
 */const H0="AsyncQueue";class F0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hw(this,"async_queue_retry"),this._c=()=>{const s=xp();s&&ae(H0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=xp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=xp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Es;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!rl(e))throw e;ae(H0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Nr("INTERNAL UNHANDLED ERROR: ",G0(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=dy.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:G0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function G0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class uc extends sd{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new F0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new F0(e),this._firestoreClient=void 0,await e}}}function YM(i,e){const t=pb(),s=Ef,o=yg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=SR("firestore");u&&QM(o,...u)}return o}function lS(i){if(i._terminated)throw new se($.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||$M(i),i._firestoreClient}function $M(i){var s,o,u,f;const e=i._freezeSettings(),t=KM(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,e);i._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new zM(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(i._componentsProvider))}/**
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
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(an.fromBase64String(e))}catch(t){throw new se($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ti(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ti._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rc(e,ti._jsonSchema))return ti.fromBase64String(e.bytes)}}ti._jsonSchemaVersion="firestore/bytes/1.0",ti._jsonSchema={type:Ut("string",ti._jsonSchemaVersion),bytes:Ut("string")};/**
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
 */class vy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class od{constructor(e){this._methodName=e}}/**
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
 */class er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(rc(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:Ut("string",er._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
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
 */class _i{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_i._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rc(e,_i._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new _i(e.vectorValues);throw new se($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_i._jsonSchemaVersion="firestore/vectorValue/1.0",_i._jsonSchema={type:Ut("string",_i._jsonSchemaVersion),vectorValues:Ut("object")};/**
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
 */const XM=/^__.*__$/;class WM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new sc(e,this.data,t,this.fieldTransforms)}}class uS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:i})}}class Ey{constructor(e,t,s,o,u,f){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ey({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Cf(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(cS(this.dataSource)&&XM.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class JM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||nd(e)}createContext(e,t,s,o=!1){return new Ey({dataSource:e,methodName:t,targetDoc:s,path:rn.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ty(i){const e=i._freezeSettings(),t=nd(i._databaseId);return new JM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function ZM(i,e,t,s,o,u={}){const f=i.createContext(u.merge||u.mergeFields?2:0,e,t,o);Ay("Data must be an object, but it was:",f,s);const m=hS(s,f);let p,y;if(u.merge)p=new zn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const v=[];for(const T of u.mergeFields){const R=Yo(e,T,t);if(!f.contains(R))throw new se($.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);mS(v,R)||v.push(R)}p=new zn(v),y=f.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,y=f.fieldTransforms;return new WM(new In(m),p,y)}class ld extends od{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ld}}class by extends od{_toFieldTransform(e){return new Vk(e.path,new Qu)}isEqual(e){return e instanceof by}}function eP(i,e,t,s){const o=i.createContext(1,e,t);Ay("Data must be an object, but it was:",o,s);const u=[],f=In.empty();ks(s,((p,y)=>{const v=dS(e,p,t);y=ve(y);const T=o.childContextForFieldPath(v);if(y instanceof ld)u.push(v);else{const R=cc(y,T);R!=null&&(u.push(v),f.set(v,R))}}));const m=new zn(u);return new uS(f,m,o.fieldTransforms)}function tP(i,e,t,s,o,u){const f=i.createContext(1,e,t),m=[Yo(e,s,t)],p=[o];if(u.length%2!=0)throw new se($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<u.length;R+=2)m.push(Yo(e,u[R])),p.push(u[R+1]);const y=[],v=In.empty();for(let R=m.length-1;R>=0;--R)if(!mS(y,m[R])){const j=m[R];let Q=p[R];Q=ve(Q);const Z=f.childContextForFieldPath(j);if(Q instanceof ld)y.push(j);else{const J=cc(Q,Z);J!=null&&(y.push(j),v.set(j,J))}}const T=new zn(y);return new uS(v,T,f.fieldTransforms)}function nP(i,e,t,s=!1){return cc(t,i.createContext(s?4:3,e))}function cc(i,e){if(fS(i=ve(i)))return Ay("Unsupported field value:",e,i),hS(i,e);if(i instanceof od)return(function(s,o){if(!cS(o.dataSource))throw o.createError(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,o){const u=[];let f=0;for(const m of s){let p=cc(m,o.childContextForArray(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=ve(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kk(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=at.fromDate(s);return{timestampValue:wf(o.serializer,u)}}if(s instanceof at){const u=new at(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:wf(o.serializer,u)}}if(s instanceof er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ti)return{bytesValue:Dw(o.serializer,s._byteString)};if(s instanceof qt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.createError(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:ry(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof _i)return(function(f,m){const p=f instanceof _i?f.toArray():f;return{mapValue:{fields:{[sw]:{stringValue:aw},[Tf]:{arrayValue:{values:p.map((v=>{if(typeof v!="number")throw m.createError("VectorValues must only contain numeric values.");return ey(m.serializer,v)}))}}}}}})(s,o);if(Lw(s))return s._toProto(o.serializer);throw o.createError(`Unsupported field value: ${Qf(s)}`)})(i,e)}function hS(i,e){const t={};return ZA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(i,((s,o)=>{const u=cc(o,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function fS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof at||i instanceof er||i instanceof ti||i instanceof qt||i instanceof od||i instanceof _i||Lw(i))}function Ay(i,e,t){if(!fS(t)||!WA(t)){const s=Qf(t);throw s==="an object"?e.createError(i+" a custom object"):e.createError(i+" "+s)}}function Yo(i,e,t){if((e=ve(e))instanceof vy)return e._internalPath;if(typeof e=="string")return dS(i,e);throw Cf("Field path arguments must be of type string or ",i,!1,void 0,t)}const iP=new RegExp("[~\\*/\\[\\]]");function dS(i,e,t){if(e.search(iP)>=0)throw Cf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new vy(...e.split("."))._internalPath}catch{throw Cf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Cf(i,e,t,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new se($.INVALID_ARGUMENT,m+i+p)}function mS(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class rP{convertValue(e,t="none"){switch(Is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ks(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[Tf].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>wt(f.doubleValue)));return new _i(t)}convertGeoPoint(e){return new er(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Xf(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Hu(e));default:return null}}convertTimestamp(e){const t=Ss(e);return new at(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=it.fromString(e);Ge(Uw(s),9688,{name:e});const o=new Fu(s.get(1),s.get(3)),u=new pe(s.popFirst(5));return o.isEqual(t)||Nr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class sP extends rP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,t)}}function og(){return new by("serverTimestamp")}const K0="@firebase/firestore",Q0="4.11.0";/**
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
 */class pS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Yo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class aP extends pS{data(){return super.data()}}/**
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
 */function oP(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new se($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wy{}class gS extends wy{}function yS(i,e,...t){let s=[];e instanceof wy&&s.push(e),s=s.concat(t),(function(u){const f=u.filter((p=>p instanceof Ry)).length,m=u.filter((p=>p instanceof Sy)).length;if(f>1||f>0&&m>0)throw new se($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)i=o._apply(i);return i}class Sy extends gS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Sy(e,t,s)}_apply(e){const t=this._parse(e);return vS(e._query,t),new xa(e.firestore,e.converter,Xp(e._query,t))}_parse(e){const t=Ty(e.firestore);return(function(u,f,m,p,y,v,T){let R;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new se($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){$0(T,v);const Q=[];for(const Z of T)Q.push(Y0(p,u,Z));R={arrayValue:{values:Q}}}else R=Y0(p,u,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||$0(T,v),R=nP(m,f,T,v==="in"||v==="not-in");return Vt.create(y,v,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Ry extends wy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ry(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Ti.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)vS(f,p),f=Xp(f,p)})(e._query,t),new xa(e.firestore,e.converter,Xp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Iy extends gS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Iy(e,t)}_apply(e){const t=(function(o,u,f){if(o.startAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ku(u,f)})(e._query,this._field,this._direction);return new xa(e.firestore,e.converter,Sk(e._query,t))}}function _S(i,e="asc"){const t=e,s=Yo("orderBy",i);return Iy._create(s,t)}function Y0(i,e,t){if(typeof(t=ve(t))=="string"){if(t==="")throw new se($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pw(e)&&t.indexOf("/")!==-1)throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(it.fromString(t));if(!pe.isDocumentKey(s))throw new se($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return u0(i,new pe(s))}if(t instanceof qt)return u0(i,t._key);throw new se($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qf(t)}.`)}function $0(i,e){if(!Array.isArray(i)||i.length===0)throw new se($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vS(i,e){const t=(function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null})(i.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function lP(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class $h{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vo extends pS{constructor(e,t,s,o,u,f){super(e,t,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new af(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vo._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vo._jsonSchema={type:Ut("string",Vo._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class af extends Vo{data(e={}){return super.data(e)}}class Uo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new $h(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new af(this._firestore,this._userDataWriter,s.key,s,new $h(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((m=>{const p=new af(o._firestore,o._userDataWriter,m.doc.key,m.doc,new $h(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const p=new af(o._firestore,o._userDataWriter,m.doc.key,m.doc,new $h(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),v=f.indexOf(m.doc.key)),{type:uP(m.type),doc:p,oldIndex:y,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function uP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:i})}}/**
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
 */Uo._jsonSchemaVersion="firestore/querySnapshot/1.0",Uo._jsonSchema={type:Ut("string",Uo._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};function ES(i){i=wa(i,xa);const e=wa(i.firestore,uc),t=lS(e),s=new sP(e);return oP(i._query),HM(t,i._query).then((o=>new Uo(e,s,i,o)))}function TS(i,e,t,...s){i=wa(i,qt);const o=wa(i.firestore,uc),u=Ty(o);let f;return f=typeof(e=ve(e))=="string"||e instanceof vy?tP(u,"updateDoc",i._key,e,t,s):eP(u,"updateDoc",i._key,e),Cy(o,[f.toMutation(i._key,yi.exists(!0))])}function cP(i){return Cy(wa(i.firestore,uc),[new ty(i._key,yi.none())])}function hP(i,e){const t=wa(i.firestore,uc),s=ad(i),o=lP(i.converter,e),u=Ty(i.firestore);return Cy(t,[ZM(u,"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,yi.exists(!1))]).then((()=>s))}function Cy(i,e){const t=lS(i);return FM(t,e)}(function(e,t=!0){zO(Dr),Ir(new vi("firestore",((s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new uc(new qO(s.getProvider("auth-internal")),new GO(f,s.getProvider("app-check-internal")),lk(f,o),f);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),Bn(K0,Q0,e),Bn(K0,Q0,"esm2020")})();const fP={apiKey:"AIzaSyCuhI79HGlVKc2m2xdganc_mdZgMC_RLXk",authDomain:"sciencenoob-quiz.firebaseapp.com",projectId:"sciencenoob-quiz",storageBucket:"sciencenoob-quiz.firebasestorage.app",messagingSenderId:"259332905426",appId:"1:259332905426:web:7a17a4ba05d138a0fc100b",measurementId:"G-4WS1S374EM"},bS=Wo.initializeApp(fP),of=bS.auth(),$o=YM(),dP=bS.storage();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=i=>{const e=pP(i);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gP={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=Fe.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},p)=>Fe.createElement("svg",{ref:p,...gP,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:AS("lucide",o),...!u&&!yP(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,v])=>Fe.createElement(y,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(i,e)=>{const t=Fe.forwardRef(({className:s,...o},u)=>Fe.createElement(_P,{ref:u,iconNode:e,className:AS(`lucide-${mP(X0(i))}`,`lucide-${i}`,s),...o}));return t.displayName=X0(i),t};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],EP=Ke("activity",vP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],bP=Ke("archive",TP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],wP=Ke("award",AP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],W0=Ke("book-open",SP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],IP=Ke("calendar",RP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],NP=Ke("chart-column",CP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],DP=Ke("check",xP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],kP=Ke("chevron-down",OP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],PP=Ke("chevron-up",MP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wS=Ke("circle-alert",VP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],LP=Ke("circle-check-big",UP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],jP=Ke("circle-plus",zP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],qP=Ke("circle-x",BP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],SS=Ke("clock",HP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],GP=Ke("copy",FP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],QP=Ke("file-text",KP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],$P=Ke("image",YP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],WP=Ke("key",XP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ZP=Ke("layout-dashboard",JP);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],RS=Ke("loader-circle",eV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],nV=Ke("lock",tV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],rV=Ke("log-out",iV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aV=Ke("pen",sV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],lV=Ke("plus",oV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],cV=Ke("save",uV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fV=Ke("search",hV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mV=Ke("shield-check",dV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Nf=Ke("trash-2",pV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yV=Ke("user",gV);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],vV=Ke("users",_V),EV=({children:i,currentView:e,onNavigate:t})=>{const s=()=>{of.signOut()};return w.jsxs("div",{className:"min-h-screen bg-cream flex flex-col md:flex-row",children:[w.jsxs("aside",{className:"w-full md:w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col sticky top-0 h-auto md:h-screen z-10",children:[w.jsx("div",{className:"p-6 border-b border-gray-100 flex items-center justify-center",children:w.jsx("h1",{className:"text-2xl font-bold text-primary tracking-tight",children:"Science Noob"})}),w.jsxs("nav",{className:"flex-1 p-4 space-y-2",children:[w.jsxs("button",{onClick:()=>t("dashboard"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="dashboard"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(ZP,{size:20}),"ড্যাশবোর্ড (Dashboard)"]}),w.jsxs("button",{onClick:()=>t("create"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="create"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(jP,{size:20}),"নতুন কুইজ (New Quiz)"]}),w.jsxs("button",{onClick:()=>t("results"),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${e==="results"?"bg-primary text-white shadow-md":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(NP,{size:20}),"ফলাফল (Results)"]})]}),w.jsx("div",{className:"p-4 border-t border-gray-100",children:w.jsxs("button",{onClick:s,className:"w-full flex items-center gap-3 px-4 py-3 rounded-lg text-accent hover:bg-red-50 transition-colors font-medium",children:[w.jsx(rV,{size:20}),"লগ আউট (Log Out)"]})})]}),w.jsx("main",{className:"flex-1 p-4 md:p-8 overflow-y-auto",children:w.jsx("div",{className:"max-w-5xl mx-auto",children:i})})]})},TV=({quizzes:i,onEdit:e,onDelete:t,onToggleStatus:s})=>{const o=i.length,u=i.filter(v=>v.isActive).length,f=o-u,[m,p]=Fe.useState(null),y=v=>{navigator.clipboard.writeText(v),p(v),setTimeout(()=>p(null),2e3)};return w.jsxs("div",{className:"space-y-8",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-6",children:"ড্যাশবোর্ড (Dashboard)"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[w.jsx("div",{className:"p-3 bg-blue-50 text-blue-600 rounded-lg",children:w.jsx(W0,{size:24})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"মোট কুইজ"}),w.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:o})]})]}),w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[w.jsx("div",{className:"p-3 bg-green-50 text-primary rounded-lg",children:w.jsx(EP,{size:24})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"রানিং (Active)"}),w.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:u})]})]}),w.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4",children:[w.jsx("div",{className:"p-3 bg-orange-50 text-orange-600 rounded-lg",children:w.jsx(bP,{size:24})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-gray-500 text-sm font-medium",children:"ড্রাফট (Draft)"}),w.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:f})]})]})]})]}),i.length===0?w.jsxs("div",{className:"text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300",children:[w.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",children:w.jsx(W0,{className:"text-gray-400",size:32})}),w.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"কোনো কুইজ নেই"}),w.jsx("p",{className:"text-gray-400",children:"নতুন কুইজ তৈরি করতে উপরের বাটনটি ব্যবহার করুন।"})]}):w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(v=>{var T;return w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full",children:[w.jsx("div",{className:`h-1.5 w-full ${v.isActive?"bg-primary":"bg-gray-300"}`}),w.jsxs("div",{className:"p-6 flex-1",children:[w.jsxs("div",{className:"flex justify-between items-start mb-4",children:[w.jsx("span",{className:`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${v.isActive?"bg-green-100 text-green-700":"bg-gray-100 text-gray-500"}`,children:v.isActive?"Live":"Draft"}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{onClick:()=>e(v),className:"p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",title:"Edit",children:w.jsx(aV,{size:18})}),w.jsx("button",{onClick:()=>t(v.id),className:"p-2 text-gray-400 hover:text-accent hover:bg-red-50 rounded-lg transition-colors",title:"Delete",children:w.jsx(Nf,{size:18})})]})]}),w.jsx("h3",{className:"text-lg font-bold text-gray-800 mb-2 line-clamp-2 leading-tight min-h-[3rem]",children:v.title}),w.jsx("p",{className:"text-gray-500 text-sm mb-4 line-clamp-2 min-h-[2.5rem]",children:v.description}),w.jsxs("div",{className:"flex items-center gap-4 text-xs font-medium text-gray-500 bg-gray-50 p-3 rounded-lg",children:[w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx(SS,{size:14,className:"text-primary"}),w.jsxs("span",{children:[Math.round(v.durationSeconds/60)," মি."]})]}),w.jsx("div",{className:"h-4 w-px bg-gray-300"}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"text-gray-700 font-bold",children:v.questions.length}),w.jsx("span",{children:"টি প্রশ্ন"})]}),w.jsx("div",{className:"h-4 w-px bg-gray-300"}),w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"text-gray-700 font-bold",children:v.totalMarks}),w.jsx("span",{children:"মার্কস"})]})]}),w.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[w.jsxs("div",{className:"text-[10px] text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-2",children:["ID: ",(T=v.id)==null?void 0:T.substring(0,8),"...",w.jsx("button",{onClick:()=>y(v.id),className:"hover:text-primary transition-colors",title:"Copy Full ID",children:m===v.id?w.jsx(DP,{size:12,className:"text-green-600"}):w.jsx(GP,{size:12})})]}),v.updatedAt&&w.jsxs("span",{className:"text-[10px] text-gray-400",title:"Last Updated",children:["আপডেট: ",new Date(v.updatedAt.seconds*1e3).toLocaleDateString("bn-BD")]})]})]}),w.jsx("div",{className:"px-6 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center mt-auto",children:w.jsx("button",{onClick:()=>s(v.id,v.isActive),className:`w-full flex items-center justify-center gap-2 text-sm font-semibold py-2 rounded-lg transition-colors ${v.isActive?"text-accent bg-red-50 hover:bg-red-100 border border-red-100":"text-primary bg-green-50 hover:bg-green-100 border border-green-100"}`,children:v.isActive?w.jsxs(w.Fragment,{children:[w.jsx(qP,{size:16})," ডিএক্টিভ করুন"]}):w.jsxs(w.Fragment,{children:[w.jsx(LP,{size:16})," পাবলিশ করুন"]})})})]},v.id)})})]})},Xu="quizzes",bV="attempts",AV=async()=>{const i=yS(_y($o,Xu),_S("createdAt","desc"));return(await ES(i)).docs.map(t=>({id:t.id,...t.data()}))},wV=async i=>{const e={...i};if(e.updatedAt=og(),i.id){const t=ad($o,Xu,i.id),{id:s,...o}=e;await TS(t,o)}else e.createdAt=og(),await hP(_y($o,Xu),e)},SV=async i=>{await cP(ad($o,Xu,i))},RV=async(i,e)=>{const t=ad($o,Xu,i);await TS(t,{isActive:!e,updatedAt:og()})},IV=async()=>{const i=yS(_y($o,bV),_S("timestamp","desc"));return(await ES(i)).docs.map(t=>({id:t.id,...t.data()}))},J0=()=>({id:Date.now().toString(),text:"",options:["","","",""],correctAnswerIndex:0,explanation:""}),CV=({initialQuiz:i,onSaveComplete:e,onCancel:t})=>{const[s,o]=Fe.useState(!1),[u,f]=Fe.useState(null),[m,p]=Fe.useState(10),[y,v]=Fe.useState({title:"",description:"",durationSeconds:600,totalMarks:100,isActive:!0,questions:[J0()],createdAt:null}),[T,R]=Fe.useState(null);Fe.useEffect(()=>{i?(v(i),p(Math.floor(i.durationSeconds/60)),i.questions.length>0&&R(i.questions[0].id)):R(y.questions[0].id)},[i]);const j=(te,I)=>{v(S=>({...S,[te]:I}))},Q=te=>{p(te),j("durationSeconds",te*60)},Z=(te,I,S)=>{v(C=>({...C,questions:C.questions.map(O=>O.id===te?{...O,[I]:S}:O)}))},J=(te,I,S)=>{v(C=>({...C,questions:C.questions.map(O=>{if(O.id!==te)return O;const D=[...O.options];return D[I]=S,{...O,options:D}})}))},ce=()=>{const te=J0();v(I=>({...I,questions:[...I.questions,te]})),R(te.id)},de=te=>{y.questions.length!==1&&v(I=>({...I,questions:I.questions.filter(S=>S.id!==te)}))},ue=async(te,I)=>{if(I){f(te);try{const S=`questions/${Date.now()}_${I.name}`,D=await(await dP.ref(S).put(I)).ref.getDownloadURL();Z(te,"imageUrl",D)}catch(S){console.error("Error uploading image:",S),alert("ছবি আপলোড করতে সমস্যা হয়েছে।")}finally{f(null)}}},ye=te=>{Z(te,"imageUrl",void 0)},Ce=async te=>{te.preventDefault(),o(!0);try{await wV(y),e()}catch(I){console.error("Error saving quiz",I),alert("Error saving quiz")}finally{o(!1)}};return w.jsxs("form",{onSubmit:Ce,className:"max-w-4xl mx-auto pb-12",children:[w.jsxs("div",{className:"flex justify-between items-center mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:i?"কুইজ এডিট করুন":"নতুন কুইজ তৈরি করুন"}),w.jsx("p",{className:"text-gray-500 text-sm mt-1",children:"শিক্ষার্থীদের জন্য একটি নতুন কুইজ সেটআপ করুন"})]}),w.jsxs("div",{className:"flex gap-3",children:[w.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 font-medium transition-colors",children:"বাতিল"}),w.jsxs("button",{type:"submit",disabled:s,className:`px-6 py-2 text-white rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all disabled:opacity-50 font-medium ${y.isActive?"bg-primary hover:bg-green-700":"bg-gray-600 hover:bg-gray-700"}`,children:[w.jsx(cV,{size:18}),s?"সংরক্ষণ হচ্ছে...":y.isActive?"পাবলিশ করুন (Publish)":"ড্রাফট হিসেবে সেভ করুন"]})]})]}),w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 space-y-6",children:[w.jsxs("div",{className:"flex justify-between items-center border-b pb-4 mb-2",children:[w.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"সাধারণ তথ্য"}),w.jsxs("div",{className:"flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200",children:[w.jsx("span",{className:`text-sm font-bold ${y.isActive?"text-primary":"text-gray-500"}`,children:y.isActive?"Live (সবার জন্য উন্মুক্ত)":"Draft (লুকানো)"}),w.jsx("button",{type:"button",onClick:()=>j("isActive",!y.isActive),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${y.isActive?"bg-primary":"bg-gray-300"}`,children:w.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${y.isActive?"translate-x-6":"translate-x-1"}`})})]})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[w.jsxs("div",{className:"col-span-1 md:col-span-2",children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"কুইজ শিরোনাম (Title)"}),w.jsx("input",{type:"text",required:!0,value:y.title,onChange:te=>j("title",te.target.value),placeholder:"e.g. সাধারণ জ্ঞান পর্ব - ১",className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"})]}),w.jsxs("div",{className:"col-span-1 md:col-span-2",children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"বিবরণ (Description)"}),w.jsx("textarea",{rows:3,value:y.description,onChange:te=>j("description",te.target.value),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm",placeholder:"কুইজ সম্পর্কে বিস্তারিত লিখুন..."})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"সময় (মিনিট)"}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"number",min:"1",required:!0,value:m,onChange:te=>Q(parseInt(te.target.value)||0),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"}),w.jsx("span",{className:"absolute right-4 top-3.5 text-gray-400 text-sm",children:"মিনিট"})]}),w.jsxs("p",{className:"text-xs text-gray-400 mt-1",children:["সেভ হবে: ",y.durationSeconds," সেকেন্ড"]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"মোট নম্বর (Total Marks)"}),w.jsxs("div",{className:"relative",children:[w.jsx("input",{type:"number",min:"1",required:!0,value:y.totalMarks,onChange:te=>j("totalMarks",parseInt(te.target.value)),className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"}),w.jsx("span",{className:"absolute right-4 top-3.5 text-gray-400 text-sm",children:"মার্কস"})]})]})]})]}),w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"flex justify-between items-center px-2",children:[w.jsxs("h3",{className:"text-xl font-bold text-gray-800",children:["প্রশ্নসমূহ (",y.questions.length,")"]}),w.jsxs("button",{type:"button",onClick:ce,className:"bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 text-sm transition-colors",children:[w.jsx(lV,{size:18}),"নতুন প্রশ্ন যোগ করুন"]})]}),y.questions.map((te,I)=>{const S=T===te.id;return w.jsxs("div",{className:`bg-white rounded-xl border transition-all duration-300 ${S?"border-primary ring-1 ring-primary shadow-lg":"border-gray-200 shadow-sm hover:border-gray-300"}`,children:[w.jsxs("div",{className:`p-5 flex justify-between items-center cursor-pointer rounded-t-xl transition-colors ${S?"bg-primary/5":"hover:bg-gray-50"}`,onClick:()=>R(S?null:te.id),children:[w.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[w.jsx("span",{className:`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${S?"bg-primary text-white":"bg-gray-100 text-gray-500"}`,children:I+1}),w.jsx("h4",{className:`font-medium truncate pr-4 text-lg ${te.text?"text-gray-800":"text-gray-400 italic"}`,children:te.text||"প্রশ্ন লিখুন..."})]}),w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("button",{type:"button",onClick:C=>{C.stopPropagation(),de(te.id)},className:"text-gray-400 hover:text-accent hover:bg-red-50 p-2 rounded-lg transition-colors",title:"Delete Question",children:w.jsx(Nf,{size:18})}),w.jsx("div",{className:"text-gray-400 p-1",children:S?w.jsx(PP,{size:20}):w.jsx(kP,{size:20})})]})]}),S&&w.jsxs("div",{className:"p-6 border-t border-primary/10 animate-in fade-in slide-in-from-top-2 duration-200",children:[w.jsxs("div",{className:"mb-6",children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"প্রশ্ন (Question)"}),w.jsx("input",{type:"text",required:!0,value:te.text,onChange:C=>Z(te.id,"text",C.target.value),placeholder:"e.g. বাংলাদেশের রাজধানীর নাম কি?",className:"w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm"})]}),w.jsxs("div",{className:"mb-8",children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700 mb-2",children:"ছবি যুক্ত করুন (Optional)"}),te.imageUrl?w.jsxs("div",{className:"relative w-full max-w-sm rounded-lg overflow-hidden border border-gray-200 shadow-sm group",children:[w.jsx("img",{src:te.imageUrl,alt:"Question",className:"w-full h-auto object-cover"}),w.jsx("button",{type:"button",onClick:()=>ye(te.id),className:"absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700",children:w.jsx(Nf,{size:16})})]}):w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsxs("label",{className:"flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors text-gray-700 font-medium text-sm",children:[u===te.id?w.jsx(RS,{size:18,className:"animate-spin text-primary"}):w.jsx($P,{size:18}),u===te.id?"আপলোড হচ্ছে...":"ছবি বেছে নিন",w.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:C=>{var D;const O=(D=C.target.files)==null?void 0:D[0];O&&ue(te.id,O)}})]}),w.jsx("span",{className:"text-xs text-gray-400",children:"Supported: JPG, PNG, WEBP"})]})]}),w.jsxs("div",{className:"space-y-4 mb-8",children:[w.jsxs("div",{className:"flex justify-between items-center mb-2",children:[w.jsx("label",{className:"block text-sm font-bold text-gray-700",children:"অপশনসমূহ (Options)"}),w.jsx("span",{className:"text-xs text-primary bg-primary/10 px-2 py-1 rounded",children:"সঠিক উত্তরটি সিলেক্ট করুন"})]}),te.options.map((C,O)=>w.jsxs("div",{className:`flex items-center gap-3 p-2 rounded-lg border transition-colors ${te.correctAnswerIndex===O?"bg-green-50 border-green-200":"border-transparent hover:bg-gray-50"}`,children:[w.jsxs("div",{className:"relative flex items-center justify-center",children:[w.jsx("input",{type:"radio",name:`correct-${te.id}`,checked:te.correctAnswerIndex===O,onChange:()=>Z(te.id,"correctAnswerIndex",O),className:"peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-primary checked:bg-primary cursor-pointer transition-all"}),w.jsx("div",{className:"absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"})]}),w.jsx("input",{type:"text",required:!0,value:C,onChange:D=>J(te.id,O,D.target.value),placeholder:`অপশন ${O+1}`,className:`flex-1 px-4 py-2.5 rounded-lg border bg-white text-gray-900 ${te.correctAnswerIndex===O?"border-green-300 focus:ring-green-500":"border-gray-300 focus:ring-primary"} focus:ring-2 focus:border-transparent outline-none transition-all`})]},O))]}),w.jsxs("div",{className:"bg-blue-50/50 p-4 rounded-xl border border-blue-100",children:[w.jsxs("label",{className:"flex items-center gap-2 text-sm font-bold text-blue-800 mb-2",children:[w.jsx(wS,{size:16}),"ব্যাখ্যা (Explanation - Optional)"]}),w.jsx("textarea",{rows:2,value:te.explanation||"",onChange:C=>Z(te.id,"explanation",C.target.value),placeholder:"শিক্ষার্থীদের জন্য সঠিক উত্তরের ব্যাখ্যা দিন...",className:"w-full px-4 py-3 rounded-lg border border-blue-200 bg-white text-gray-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none shadow-sm"})]})]})]},te.id)})]})]})},NV=({results:i})=>{const[e,t]=Fe.useState("submissions"),[s,o]=Fe.useState(""),u=Fe.useMemo(()=>{const v={};return i.forEach(T=>{v[T.userId]||(v[T.userId]={userId:T.userId,userName:T.userName||"Unknown",userEmail:T.userEmail||"",totalQuizzes:0,totalScore:0,totalQuestions:0,totalTimeSeconds:0,lastActive:T.timestamp}),v[T.userId].totalQuizzes+=1,v[T.userId].totalScore+=T.score,v[T.userId].totalQuestions+=T.totalQuestions,v[T.userId].totalTimeSeconds+=T.timeTakenSeconds,T.timestamp>v[T.userId].lastActive&&(v[T.userId].lastActive=T.timestamp)}),Object.values(v)},[i]),f=i.filter(v=>{var T,R;return((T=v.userName)==null?void 0:T.toLowerCase().includes(s.toLowerCase()))||""||((R=v.quizTitle)==null?void 0:R.toLowerCase().includes(s.toLowerCase()))||""}),m=u.filter(v=>v.userName.toLowerCase().includes(s.toLowerCase())||""||v.userEmail.toLowerCase().includes(s.toLowerCase())||""),p=v=>{const T=Math.floor(v/60),R=v%60;return`${T}m ${R}s`},y=v=>new Date(v).toLocaleDateString("bn-BD",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return w.jsxs("div",{className:"space-y-6",children:[w.jsxs("header",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-3xl font-bold text-gray-800",children:"ফলাফল ও পরিসংখ্যান"}),w.jsx("p",{className:"text-gray-500 mt-2",children:"শিক্ষার্থীদের পারফর্মেন্স বিশ্লেষণ করুন।"})]}),w.jsxs("div",{className:"bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm",children:[w.jsxs("button",{onClick:()=>t("submissions"),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${e==="submissions"?"bg-primary text-white shadow-sm":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(QP,{size:16}),"সব ফলাফল"]}),w.jsxs("button",{onClick:()=>t("students"),className:`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${e==="students"?"bg-primary text-white shadow-sm":"text-gray-600 hover:bg-gray-50"}`,children:[w.jsx(vV,{size:16}),"শিক্ষার্থী রিপোর্ট"]})]})]}),w.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden min-h-[500px]",children:[w.jsx("div",{className:"p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50",children:w.jsxs("div",{className:"relative flex-1 max-w-md",children:[w.jsx(fV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:18}),w.jsx("input",{type:"text",value:s,onChange:v=>o(v.target.value),placeholder:e==="submissions"?"নাম বা কুইজ দিয়ে খুঁজুন...":"শিক্ষার্থীর নাম দিয়ে খুঁজুন...",className:"w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"})]})}),w.jsx("div",{className:"overflow-x-auto",children:e==="submissions"?w.jsxs("table",{className:"w-full text-left text-sm text-gray-600",children:[w.jsx("thead",{className:"bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-100",children:w.jsxs("tr",{children:[w.jsx("th",{className:"px-6 py-4",children:"শিক্ষার্থী (Student)"}),w.jsx("th",{className:"px-6 py-4",children:"কুইজ (Quiz)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"স্কোর (Score)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"সময় (Time)"}),w.jsx("th",{className:"px-6 py-4 text-right",children:"তারিখ (Date)"})]})}),w.jsx("tbody",{className:"divide-y divide-gray-100",children:f.length===0?w.jsx("tr",{children:w.jsx("td",{colSpan:5,className:"text-center py-12 text-gray-400",children:"কোন ফলাফল পাওয়া যায়নি"})}):f.map(v=>{const T=Math.round(v.score/v.totalQuestions*100)||0;return w.jsxs("tr",{className:"hover:bg-gray-50 transition-colors group",children:[w.jsxs("td",{className:"px-6 py-4 font-medium text-gray-800",children:[v.userName||"Anonymous",w.jsx("div",{className:"text-xs text-gray-400 font-normal group-hover:text-primary transition-colors",children:v.userEmail||"No Email"})]}),w.jsx("td",{className:"px-6 py-4 text-gray-700 font-medium",children:v.quizTitle}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsxs("div",{className:"flex flex-col items-center",children:[w.jsxs("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${T>=80?"bg-green-100 text-green-700":T>=50?"bg-yellow-100 text-yellow-700":"bg-red-100 text-red-700"}`,children:[T,"%"]}),w.jsxs("span",{className:"text-[10px] text-gray-400 mt-1",children:[v.score," / ",v.totalQuestions]})]})}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-gray-600",children:[w.jsx(SS,{size:14}),w.jsx("span",{children:p(v.timeTakenSeconds)})]})}),w.jsx("td",{className:"px-6 py-4 text-right text-gray-500 text-xs",children:y(v.timestamp)})]},v.id)})})]}):w.jsxs("table",{className:"w-full text-left text-sm text-gray-600",children:[w.jsx("thead",{className:"bg-gray-50 text-xs uppercase font-bold text-gray-500 border-b border-gray-100",children:w.jsxs("tr",{children:[w.jsx("th",{className:"px-6 py-4",children:"শিক্ষার্থী (Student)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"মোট কুইজ"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"গড় স্কোর (Avg)"}),w.jsx("th",{className:"px-6 py-4 text-center",children:"সর্বশেষ অ্যাক্টিভ"})]})}),w.jsx("tbody",{className:"divide-y divide-gray-100",children:m.length===0?w.jsx("tr",{children:w.jsx("td",{colSpan:4,className:"text-center py-12 text-gray-400",children:"কোন শিক্ষার্থী পাওয়া যায়নি"})}):m.map(v=>{const T=v.totalQuizzes>0?Math.round(v.totalScore/v.totalQuestions*100):0;return w.jsxs("tr",{className:"hover:bg-gray-50 transition-colors",children:[w.jsx("td",{className:"px-6 py-4",children:w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold",children:v.userName.charAt(0).toUpperCase()}),w.jsxs("div",{children:[w.jsx("div",{className:"font-bold text-gray-800",children:v.userName}),w.jsx("div",{className:"text-xs text-gray-400",children:v.userEmail})]})]})}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold",children:[w.jsx(wP,{size:14}),v.totalQuizzes," টি"]})}),w.jsx("td",{className:"px-6 py-4 text-center",children:w.jsx("div",{className:"flex flex-col items-center",children:w.jsxs("span",{className:`text-lg font-bold ${T>=80?"text-green-600":T>=50?"text-yellow-600":"text-red-500"}`,children:[T,"%"]})})}),w.jsx("td",{className:"px-6 py-4 text-center text-gray-500",children:w.jsxs("div",{className:"flex items-center justify-center gap-2 text-xs",children:[w.jsx(IP,{size:14}),y(v.lastActive)]})})]},v.userId)})})]})})]})]})},xV="NOOB_ADMIN_2025",DV=()=>{const[i,e]=Fe.useState(null),[t,s]=Fe.useState(!0),[o,u]=Fe.useState("dashboard"),[f,m]=Fe.useState([]),[p,y]=Fe.useState([]),[v,T]=Fe.useState(null),[R,j]=Fe.useState({isOpen:!1,quizId:null}),[Q,Z]=Fe.useState(!1),[J,ce]=Fe.useState(""),[de,ue]=Fe.useState(""),[ye,Ce]=Fe.useState(""),[te,I]=Fe.useState("");Fe.useEffect(()=>{const B=of.onAuthStateChanged(ne=>{e(ne),s(!1)});return()=>B()},[]),Fe.useEffect(()=>{i&&(o==="dashboard"&&S(),o==="results"&&C())},[i,o]);const S=async()=>{s(!0);try{const B=await AV();m(B)}catch(B){console.error(B)}finally{s(!1)}},C=async()=>{s(!0);try{const B=await IV();y(B)}catch(B){console.error(B)}finally{s(!1)}},O=B=>`${B.toLowerCase().replace(/\s+/g,"")}@admin.sciencenoob.com`,D=async B=>{B.preventDefault(),I("");const ne=O(J);try{if(Q){if(ye!==xV){I("ভুল সিক্রেট কোড! আপনি কি অ্যাডমিন?");return}await of.createUserWithEmailAndPassword(ne,de)}else await of.signInWithEmailAndPassword(ne,de)}catch(he){console.error(he),he.code==="auth/invalid-credential"||he.code==="auth/user-not-found"||he.code==="auth/wrong-password"?I("ইউজারনেম বা পাসওয়ার্ড ভুল হয়েছে।"):he.code==="auth/email-already-in-use"?I("এই ইউজারনেমটি ইতিমধ্যে ব্যবহার করা হয়েছে।"):he.code==="auth/weak-password"?I("পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে।"):I("সমস্যা হয়েছে: "+he.message)}},V=B=>{j({isOpen:!0,quizId:B})},N=async()=>{if(R.quizId)try{await SV(R.quizId),await S()}catch(B){console.error("Error deleting quiz:",B),alert("কুইজ ডিলিট করতে সমস্যা হয়েছে।")}finally{j({isOpen:!1,quizId:null})}},nt=async(B,ne)=>{await RV(B,ne),S()},vt=B=>{T(B),u("create")};return t&&!i?w.jsx("div",{className:"h-screen w-full flex items-center justify-center bg-cream",children:w.jsx(RS,{className:"animate-spin text-primary",size:48})}):i?w.jsxs(w.Fragment,{children:[w.jsxs(EV,{currentView:v?"create":o,onNavigate:B=>{B==="create"&&T(null),u(B)},children:[o==="dashboard"&&w.jsx(TV,{quizzes:f,onDelete:V,onEdit:vt,onToggleStatus:nt}),o==="create"&&w.jsx(CV,{initialQuiz:v,onSaveComplete:()=>{T(null),u("dashboard")},onCancel:()=>{T(null),u("dashboard")}}),o==="results"&&w.jsx(NV,{results:p})]}),R.isOpen&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200",children:w.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all scale-100",children:[w.jsx("div",{className:"flex justify-center mb-6",children:w.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:w.jsx(Nf,{className:"text-red-600",size:32})})}),w.jsx("h3",{className:"text-xl font-bold text-center text-gray-800 mb-2",children:"আপনি কি নিশ্চিত?"}),w.jsx("p",{className:"text-center text-gray-500 mb-8",children:"আপনি এই কুইজটি ডিলিট করতে যাচ্ছেন। এটি আর ফিরিয়ে আনা যাবে না।"}),w.jsxs("div",{className:"flex gap-3",children:[w.jsx("button",{onClick:()=>j({isOpen:!1,quizId:null}),className:"flex-1 py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors",children:"বাতিল করুন"}),w.jsx("button",{onClick:N,className:"flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-red-200",children:"হ্যাঁ, ডিলিট করুন"})]})]})})]}):w.jsxs("div",{className:"min-h-screen w-full flex items-center justify-center bg-cream p-4 relative overflow-hidden",children:[w.jsxs("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",children:[w.jsx("div",{className:"absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"}),w.jsx("div",{className:"absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-3xl"})]}),w.jsxs("div",{className:"bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-full border border-white/50 relative z-10",children:[w.jsxs("div",{className:"text-center mb-8",children:[w.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-primary to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform rotate-3",children:w.jsx(mV,{className:"text-white",size:32})}),w.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-2 tracking-tight",children:"Science Noob"}),w.jsx("p",{className:"text-gray-500 font-medium",children:Q?"অ্যাডমিন অ্যাকাউন্ট তৈরি করুন":"অ্যাডমিন প্যানেল"})]}),w.jsxs("form",{onSubmit:D,className:"space-y-5",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-1.5 ml-1",children:"ইউজারনেম (Username)"}),w.jsxs("div",{className:"relative group",children:[w.jsx(yV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),w.jsx("input",{type:"text",required:!0,placeholder:"আপনার নাম (ইংরেজিতে)",value:J,onChange:B=>ce(B.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm font-semibold text-gray-700 mb-1.5 ml-1",children:"পাসওয়ার্ড (Password)"}),w.jsxs("div",{className:"relative group",children:[w.jsx(nV,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors",size:18}),w.jsx("input",{type:"password",required:!0,placeholder:"******",value:de,onChange:B=>ue(B.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"})]})]}),Q&&w.jsxs("div",{className:"bg-orange-50 p-5 rounded-xl border border-orange-100 animate-in fade-in slide-in-from-top-4 shadow-sm",children:[w.jsx("label",{className:"block text-sm font-bold text-orange-800 mb-1.5",children:"সিক্রেট কোড (Secret Code)"}),w.jsxs("div",{className:"relative group",children:[w.jsx(WP,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 group-focus-within:text-orange-600 transition-colors",size:18}),w.jsx("input",{type:"text",required:!0,placeholder:"কোডটি শুধুমাত্র এডমিন জানেন",value:ye,onChange:B=>Ce(B.target.value),className:"w-full pl-10 pr-4 py-3 rounded-xl border border-orange-200 bg-white text-gray-900 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none shadow-sm transition-all"})]}),w.jsx("p",{className:"text-xs text-orange-600 mt-2 font-medium",children:"* নতুন অ্যাকাউন্ট খুলতে সিক্রেট কোড প্রয়োজন।"})]}),te&&w.jsxs("div",{className:"text-red-600 text-sm bg-red-50 p-4 rounded-xl text-center font-semibold border border-red-100 flex items-center justify-center gap-2 animate-pulse",children:[w.jsx(wS,{size:16}),te]}),w.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-primary to-green-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:to-green-700 transition-all transform active:scale-[0.98]",children:Q?"অ্যাকাউন্ট তৈরি করুন":"প্রবেশ করুন"}),w.jsx("div",{className:"text-center pt-2",children:w.jsx("button",{type:"button",onClick:()=>{Z(!Q),I(""),Ce("")},className:"text-sm text-gray-500 hover:text-primary transition-colors font-medium hover:underline",children:Q?"ইতোমধ্যে অ্যাকাউন্ট আছে? লগইন করুন":"অ্যাডমিন অ্যাকাউন্ট নেই? নতুন তৈরি করুন"})})]})]}),w.jsx("div",{className:"absolute bottom-4 text-center w-full text-xs text-gray-400",children:"© 2025 Science Noob. All rights reserved."})]})},IS=document.getElementById("root");if(!IS)throw new Error("Could not find root element to mount to");const OV=pR.createRoot(IS);OV.render(w.jsx(oR.StrictMode,{children:w.jsx(DV,{})}));
