(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function FS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},Uo={};var b0;function BS(){if(b0)return Uo;b0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var T0;function IS(){return T0||(T0=1,Kf.exports=BS()),Kf.exports}var Rt=IS(),Qf={exports:{}},ae={};var A0;function HS(){if(A0)return ae;A0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(O,it,gt){this.props=O,this.context=it,this.refs=y,this.updater=gt||R}x.prototype.isReactComponent={},x.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function L(O,it,gt){this.props=O,this.context=it,this.refs=y,this.updater=gt||R}var U=L.prototype=new D;U.constructor=L,C(U,x.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function A(O,it,gt){var Tt=gt.ref;return{$$typeof:o,type:O,key:it,ref:Tt!==void 0?Tt:null,props:gt}}function w(O,it){return A(O.type,it,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function et(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return it[gt]})}var rt=/\/+/g;function dt(O,it){return typeof O=="object"&&O!==null&&O.key!=null?et(""+O.key):it.toString(36)}function ut(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,it,gt,Tt,It){var nt=typeof O;(nt==="undefined"||nt==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch(nt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case o:case e:ct=!0;break;case v:return ct=O._init,z(ct(O._payload),it,gt,Tt,It)}}if(ct)return It=It(O),ct=Tt===""?"."+dt(O,0):Tt,F(It)?(gt="",ct!=null&&(gt=ct.replace(rt,"$&/")+"/"),z(It,it,gt,"",function(Ht){return Ht})):It!=null&&(V(It)&&(It=w(It,gt+(It.key==null||O&&O.key===It.key?"":(""+It.key).replace(rt,"$&/")+"/")+ct)),it.push(It)),1;ct=0;var Dt=Tt===""?".":Tt+":";if(F(O))for(var Xt=0;Xt<O.length;Xt++)Tt=O[Xt],nt=Dt+dt(Tt,Xt),ct+=z(Tt,it,gt,nt,It);else if(Xt=E(O),typeof Xt=="function")for(O=Xt.call(O),Xt=0;!(Tt=O.next()).done;)Tt=Tt.value,nt=Dt+dt(Tt,Xt++),ct+=z(Tt,it,gt,nt,It);else if(nt==="object"){if(typeof O.then=="function")return z(ut(O),it,gt,Tt,It);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(O,it,gt){if(O==null)return O;var Tt=[],It=0;return z(O,Tt,"","",function(nt){return it.call(gt,nt,It++)}),Tt}function at(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var Mt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:H,forEach:function(O,it,gt){H(O,function(){it.apply(this,arguments)},gt)},count:function(O){var it=0;return H(O,function(){it++}),it},toArray:function(O){return H(O,function(it){return it})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ae.Activity=_,ae.Children=xt,ae.Component=x,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=r,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ae.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},ae.cache=function(O){return function(){return O.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(O,it,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Tt=C({},O.props),It=O.key;if(it!=null)for(nt in it.key!==void 0&&(It=""+it.key),it)!q.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(Tt[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)Tt.children=gt;else if(1<nt){for(var ct=Array(nt),Dt=0;Dt<nt;Dt++)ct[Dt]=arguments[Dt+2];Tt.children=ct}return A(O.type,It,Tt)},ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ae.createElement=function(O,it,gt){var Tt,It={},nt=null;if(it!=null)for(Tt in it.key!==void 0&&(nt=""+it.key),it)q.call(it,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(It[Tt]=it[Tt]);var ct=arguments.length-2;if(ct===1)It.children=gt;else if(1<ct){for(var Dt=Array(ct),Xt=0;Xt<ct;Xt++)Dt[Xt]=arguments[Xt+2];It.children=Dt}if(O&&O.defaultProps)for(Tt in ct=O.defaultProps,ct)It[Tt]===void 0&&(It[Tt]=ct[Tt]);return A(O,nt,It)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(O){return{$$typeof:d,render:O}},ae.isValidElement=V,ae.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:at}},ae.memo=function(O,it){return{$$typeof:p,type:O,compare:it===void 0?null:it}},ae.startTransition=function(O){var it=P.T,gt={};P.T=gt;try{var Tt=O(),It=P.S;It!==null&&It(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(B,Mt)}catch(nt){Mt(nt)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),P.T=it}},ae.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ae.use=function(O){return P.H.use(O)},ae.useActionState=function(O,it,gt){return P.H.useActionState(O,it,gt)},ae.useCallback=function(O,it){return P.H.useCallback(O,it)},ae.useContext=function(O){return P.H.useContext(O)},ae.useDebugValue=function(){},ae.useDeferredValue=function(O,it){return P.H.useDeferredValue(O,it)},ae.useEffect=function(O,it){return P.H.useEffect(O,it)},ae.useEffectEvent=function(O){return P.H.useEffectEvent(O)},ae.useId=function(){return P.H.useId()},ae.useImperativeHandle=function(O,it,gt){return P.H.useImperativeHandle(O,it,gt)},ae.useInsertionEffect=function(O,it){return P.H.useInsertionEffect(O,it)},ae.useLayoutEffect=function(O,it){return P.H.useLayoutEffect(O,it)},ae.useMemo=function(O,it){return P.H.useMemo(O,it)},ae.useOptimistic=function(O,it){return P.H.useOptimistic(O,it)},ae.useReducer=function(O,it,gt){return P.H.useReducer(O,it,gt)},ae.useRef=function(O){return P.H.useRef(O)},ae.useState=function(O){return P.H.useState(O)},ae.useSyncExternalStore=function(O,it,gt){return P.H.useSyncExternalStore(O,it,gt)},ae.useTransition=function(){return P.H.useTransition()},ae.version="19.2.3",ae}var R0;function wd(){return R0||(R0=1,Qf.exports=HS()),Qf.exports}var Vo=wd();const wr=FS(Vo);var Jf={exports:{}},Lo={},$f={exports:{}},th={};var C0;function GS(){return C0||(C0=1,(function(o){function e(z,H){var at=z.length;z.push(H);t:for(;0<at;){var Mt=at-1>>>1,xt=z[Mt];if(0<l(xt,H))z[Mt]=H,z[at]=xt,at=Mt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var H=z[0],at=z.pop();if(at!==H){z[0]=at;t:for(var Mt=0,xt=z.length,O=xt>>>1;Mt<O;){var it=2*(Mt+1)-1,gt=z[it],Tt=it+1,It=z[Tt];if(0>l(gt,at))Tt<xt&&0>l(It,gt)?(z[Mt]=It,z[Tt]=at,Mt=Tt):(z[Mt]=gt,z[it]=at,Mt=it);else if(Tt<xt&&0>l(It,at))z[Mt]=It,z[Tt]=at,Mt=Tt;else break t}}return H}function l(z,H){var at=z.sortIndex-H.sortIndex;return at!==0?at:z.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,S=3,E=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=z)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function F(z){if(C=!1,U(z),!R)if(i(m)!==null)R=!0,B||(B=!0,et());else{var H=i(p);H!==null&&ut(F,H.startTime-z)}}var B=!1,P=-1,q=5,A=-1;function w(){return y?!0:!(o.unstable_now()-A<q)}function V(){if(y=!1,B){var z=o.unstable_now();A=z;var H=!0;try{t:{R=!1,C&&(C=!1,D(P),P=-1),E=!0;var at=S;try{e:{for(U(z),_=i(m);_!==null&&!(_.expirationTime>z&&w());){var Mt=_.callback;if(typeof Mt=="function"){_.callback=null,S=_.priorityLevel;var xt=Mt(_.expirationTime<=z);if(z=o.unstable_now(),typeof xt=="function"){_.callback=xt,U(z),H=!0;break e}_===i(m)&&r(m),U(z)}else r(m);_=i(m)}if(_!==null)H=!0;else{var O=i(p);O!==null&&ut(F,O.startTime-z),H=!1}}break t}finally{_=null,S=at,E=!1}H=void 0}}finally{H?et():B=!1}}}var et;if(typeof L=="function")et=function(){L(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,dt=rt.port2;rt.port1.onmessage=V,et=function(){dt.postMessage(null)}}else et=function(){x(V,0)};function ut(z,H){P=x(function(){z(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var at=S;S=H;try{return z()}finally{S=at}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var at=S;S=z;try{return H()}finally{S=at}},o.unstable_scheduleCallback=function(z,H,at){var Mt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Mt+at:Mt):at=Mt,z){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=at+xt,z={id:v++,callback:H,priorityLevel:z,startTime:at,expirationTime:xt,sortIndex:-1},at>Mt?(z.sortIndex=at,e(p,z),i(m)===null&&z===i(p)&&(C?(D(P),P=-1):C=!0,ut(F,at-Mt))):(z.sortIndex=xt,e(m,z),R||E||(R=!0,B||(B=!0,et()))),z},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(z){var H=S;return function(){var at=S;S=H;try{return z.apply(this,arguments)}finally{S=at}}}})(th)),th}var w0;function VS(){return w0||(w0=1,$f.exports=GS()),$f.exports}var eh={exports:{}},Dn={};var D0;function XS(){if(D0)return Dn;D0=1;var o=wd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},Dn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var U0;function kS(){if(U0)return eh.exports;U0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),eh.exports=XS(),eh.exports}var L0;function WS(){if(L0)return Lo;L0=1;var o=VS(),e=wd(),i=kS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,s=f;break}if(b===s){g=!0,s=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=c;break}if(b===s){g=!0,s=f,a=c;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case L:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var ut=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Mt=[],xt=-1;function O(t){return{current:t}}function it(t){0>xt||(t.current=Mt[xt],Mt[xt]=null,xt--)}function gt(t,n){xt++,Mt[xt]=t.current,t.current=n}var Tt=O(null),It=O(null),nt=O(null),ct=O(null);function Dt(t,n){switch(gt(nt,n),gt(It,t),gt(Tt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Yg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Yg(n),t=jg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(Tt),gt(Tt,t)}function Xt(){it(Tt),it(It),it(nt)}function Ht(t){t.memoizedState!==null&&gt(ct,t);var n=Tt.current,a=jg(n,t.type);n!==a&&(gt(It,t),gt(Tt,a))}function he(t){It.current===t&&(it(Tt),it(It)),ct.current===t&&(it(ct),Ro._currentValue=at)}var Ke,ge;function de(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+ge}var Ce=!1;function se(t,n){if(!t||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){tt=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var I=g.split(`
`),Q=b.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===Q.length)for(s=I.length-1,c=Q.length-1;1<=s&&0<=c&&I[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==Q[c]){var ft=`
`+I[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function Qe(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return se(t.type,!1);case 11:return se(t.type.render,!1);case 1:return se(t.type,!0);case 31:return de("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Qe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ye=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Ne=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,N=o.unstable_requestPaint,M=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,kt=o.log,ee=o.unstable_setDisableYieldValue,yt=null,Et=null;function Ft(t){if(typeof kt=="function"&&ee(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(yt,t)}catch{}}var Pt=Math.clz32?Math.clz32:k,wt=Math.log,le=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(wt(t)/le|0)|0}var Lt=256,bt=262144,zt=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=St(s):(g&=b,g!==0?c=St(g):a||(a=b&~t,a!==0&&(c=St(a))))):(b=s&~f,b!==0?c=St(b):g!==0?c=St(g):a||(a=s&~t,a!==0&&(c=St(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function At(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,I=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Pt(a),mt=1<<ft;b[ft]=0,I[ft]=-1;var tt=Q[ft];if(tt!==null)for(Q[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}s!==0&&$o(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function $o(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Pt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Bs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Pt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ur(t,n){var a=n&-n;return a=(a&42)!==0?1:Is(a),(a&(t.suspendedLanes|n))!==0?0:a}function Is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:_0(t.type))}function Ci(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ni=Math.random().toString(36).slice(2),rn="__reactFiber$"+ni,_n="__reactProps$"+ni,_i="__reactContainer$"+ni,Nr="__reactEvents$"+ni,Or="__reactListeners$"+ni,tl="__reactHandles$"+ni,Gs="__reactResources$"+ni,tr="__reactMarker$"+ni;function Vs(t){delete t[rn],delete t[_n],delete t[Nr],delete t[Or],delete t[tl]}function xa(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_i]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=e0(t);t!==null;){if(a=t[rn])return a;t=e0(t)}return n}t=a,a=t.parentNode}return null}function Sa(t){if(t=t[rn]||t[_i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function er(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ma(t){var n=t[Gs];return n||(n=t[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function T(t){t[tr]=!0}var Y=new Set,st={};function $(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(st[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Nt={};function Gt(t){return Ye.call(Nt,t)?!0:Ye.call(Bt,t)?!1:Ut.test(t)?Nt[t]=!0:(Bt[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function we(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ke(t){if(!t._valueTracker){var n=we(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Oe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=we(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var De=/[\n"\\]/g;function ie(t){return t.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vn(t,n,a,s,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?xn(t,g,$t(n)):a!=null?xn(t,g,$t(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+$t(b):t.removeAttribute("name")}function ki(t,n,a,s,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ke(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ke(t)}function xn(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ii(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ze(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function Sn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ke(t)}function fn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Mn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Pr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&yn(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&yn(t,f,n[f])}function vi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return Ov.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wi(){}var qc=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Fr=null;function qd(t){var n=Sa(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;t:switch(t=n.stateNode,n.type){case"input":if(vn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[_n]||null;if(!c)throw Error(r(90));vn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Oe(s)}break t;case"textarea":ze(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ii(t,!!a.multiple,n,!1)}}}var jc=!1;function Yd(t,n,a){if(jc)return t(n,a);jc=!0;try{var s=t(n);return s}finally{if(jc=!1,(zr!==null||Fr!==null)&&(Vl(),zr&&(n=zr,t=Fr,Fr=zr=null,qd(n),t)))for(n=0;n<t.length;n++)qd(t[n])}}function Xs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(qi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Zc=!1}var ya=null,Kc=null,nl=null;function jd(){if(nl)return nl;var t,n=Kc,a=n.length,s,c="value"in ya?ya.value:ya.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return nl=c.slice(t,1<s?1-s:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function Zd(){return!1}function Bn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:Zd,this.isPropagationStopped=Zd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=Bn(nr),Ws=_({},nr,{view:0,detail:0}),Pv=Bn(Ws),Qc,Jc,qs,sl=_({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Qc=t.screenX-qs.screenX,Jc=t.screenY-qs.screenY):Jc=Qc=0,qs=t),Qc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Kd=Bn(sl),zv=_({},sl,{dataTransfer:0}),Fv=Bn(zv),Bv=_({},Ws,{relatedTarget:0}),$c=Bn(Bv),Iv=_({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Bn(Iv),Gv=_({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vv=Bn(Gv),Xv=_({},nr,{data:0}),Qd=Bn(Xv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qv[t])?!!n[t]:!1}function tu(){return Yv}var jv=_({},Ws,{key:function(t){if(t.key){var n=kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zv=Bn(jv),Kv=_({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=Bn(Kv),Qv=_({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Jv=Bn(Qv),$v=_({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tx=Bn($v),ex=_({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nx=Bn(ex),ix=_({},nr,{newState:0,oldState:0}),ax=Bn(ix),rx=[9,13,27,32],eu=qi&&"CompositionEvent"in window,Ys=null;qi&&"documentMode"in document&&(Ys=document.documentMode);var sx=qi&&"TextEvent"in window&&!Ys,$d=qi&&(!eu||Ys&&8<Ys&&11>=Ys),tp=" ",ep=!1;function np(t,n){switch(t){case"keyup":return rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Br=!1;function ox(t,n){switch(t){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return t=n.data,t===tp&&ep?null:t;default:return null}}function lx(t,n){if(Br)return t==="compositionend"||!eu&&np(t,n)?(t=jd(),nl=Kc=ya=null,Br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $d&&n.locale!=="ko"?null:n.data;default:return null}}var cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!cx[t.type]:n==="textarea"}function rp(t,n,a,s){zr?Fr?Fr.push(s):Fr=[s]:zr=s,n=Zl(n,"onChange"),0<n.length&&(a=new rl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var js=null,Zs=null;function ux(t){Gg(t,0)}function ol(t){var n=er(t);if(Oe(n))return t}function sp(t,n){if(t==="change")return n}var op=!1;if(qi){var nu;if(qi){var iu="oninput"in document;if(!iu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),iu=typeof lp.oninput=="function"}nu=iu}else nu=!1;op=nu&&(!document.documentMode||9<document.documentMode)}function cp(){js&&(js.detachEvent("onpropertychange",up),Zs=js=null)}function up(t){if(t.propertyName==="value"&&ol(Zs)){var n=[];rp(n,Zs,t,Yc(t)),Yd(ux,n)}}function fx(t,n,a){t==="focusin"?(cp(),js=n,Zs=a,js.attachEvent("onpropertychange",up)):t==="focusout"&&cp()}function hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Zs)}function dx(t,n){if(t==="click")return ol(n)}function px(t,n){if(t==="input"||t==="change")return ol(n)}function mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var qn=typeof Object.is=="function"?Object.is:mx;function Ks(t,n){if(qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ye.call(n,c)||!qn(t[c],n[c]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hp(t,n){var a=fp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function au(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var gx=qi&&"documentMode"in document&&11>=document.documentMode,Ir=null,ru=null,Qs=null,su=!1;function mp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Ir==null||Ir!==Kt(s)||(s=Ir,"selectionStart"in s&&au(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=Zl(ru,"onSelect"),0<s.length&&(n=new rl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ir)))}function ir(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Hr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},ou={},gp={};qi&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ar(t){if(ou[t])return ou[t];if(!Hr[t])return t;var n=Hr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in gp)return ou[t]=n[a];return t}var _p=ar("animationend"),vp=ar("animationiteration"),xp=ar("animationstart"),_x=ar("transitionrun"),vx=ar("transitionstart"),xx=ar("transitioncancel"),Sp=ar("transitionend"),Mp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function xi(t,n){Mp.set(t,n),$(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],Gr=0,cu=0;function cl(){for(var t=Gr,n=cu=Gr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&yp(a,c,f)}}function ul(t,n,a,s){ai[Gr++]=t,ai[Gr++]=n,ai[Gr++]=a,ai[Gr++]=s,cu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function uu(t,n,a,s){return ul(t,n,a,s),fl(t)}function rr(t,n){return ul(t,null,null,n),fl(t)}function yp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Pt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<So)throw So=0,Sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={};function Sx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,n,a,s){return new Sx(t,n,a,s)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yi(t,n){var a=t.alternate;return a===null?(a=Yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ep(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")fu(t)&&(g=1);else if(typeof t=="string")g=TS(t,a,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=Yn(31,a,n,c),t.elementType=A,t.lanes=f,t;case C:return sr(a.children,c,f,n);case y:g=8,c|=24;break;case x:return t=Yn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case F:return t=Yn(13,a,n,c),t.elementType=F,t.lanes=f,t;case B:return t=Yn(19,a,n,c),t.elementType=B,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:g=10;break t;case D:g=9;break t;case U:g=11;break t;case P:g=14;break t;case q:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Yn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function sr(t,n,a,s){return t=Yn(7,t,s,n),t.lanes=a,t}function hu(t,n,a){return t=Yn(6,t,null,n),t.lanes=a,t}function bp(t){var n=Yn(18,null,null,0);return n.stateNode=t,n}function du(t,n,a){return n=Yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Xr=[],kr=0,dl=null,Js=0,si=[],oi=0,Ea=null,wi=1,Di="";function ji(t,n){Xr[kr++]=Js,Xr[kr++]=dl,dl=t,Js=n}function Ap(t,n,a){si[oi++]=wi,si[oi++]=Di,si[oi++]=Ea,Ea=t;var s=wi;t=Di;var c=32-Pt(s)-1;s&=~(1<<c),a+=1;var f=32-Pt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,wi=1<<32-Pt(n)+c|a<<c|s,Di=f+t}else wi=1<<f|a<<c|s,Di=t}function pu(t){t.return!==null&&(ji(t,1),Ap(t,1,0))}function mu(t){for(;t===dl;)dl=Xr[--kr],Xr[kr]=null,Js=Xr[--kr],Xr[kr]=null;for(;t===Ea;)Ea=si[--oi],si[oi]=null,Di=si[--oi],si[oi]=null,wi=si[--oi],si[oi]=null}function Rp(t,n){si[oi++]=wi,si[oi++]=Di,si[oi++]=Ea,wi=n.id,Di=n.overflow,Ea=t}var En=null,We=null,xe=!1,ba=null,li=!1,gu=Error(r(519));function Ta(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(ri(n,t)),gu}function Cp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[_n]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)me(yo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),ki(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Wg(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ta(t,!0)}function wp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:En=En.return}}function Wr(t){if(t!==En)return!1;if(!xe)return wp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Pf(t.type,t.memoizedProps)),a=!a),a&&We&&Ta(t),wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=t0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));We=t0(t)}else n===27?(n=We,Ia(t.type)?(t=Hf,Hf=null,We=t):We=n):We=En?ui(t.stateNode.nextSibling):null;return!0}function or(){We=En=null,xe=!1}function _u(){var t=ba;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ba=null),t}function $s(t){ba===null?ba=[t]:ba.push(t)}var vu=O(null),lr=null,Zi=null;function Aa(t,n,a){gt(vu,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=vu.current,it(vu)}function xu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var I=0;I<n.length;I++)if(b.context===n[I]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),xu(f.return,a,t),s||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),xu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=c.type;qn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===ct.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}c=c.return}t!==null&&Su(n,t,a,s),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){lr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Dp(lr,t)}function ml(t,n){return lr===null&&cr(t),Dp(t,n)}function Dp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(t===null)throw Error(r(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return a}var Mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},yx=o.unstable_scheduleCallback,Ex=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Mx,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&yx(Ex,function(){t.controller.abort()})}var eo=null,yu=0,Yr=0,jr=null;function bx(t,n){if(eo===null){var a=eo=[];yu=0,Yr=Af(),jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return yu++,n.then(Up,Up),n}function Up(){if(--yu===0&&eo!==null){jr!==null&&(jr.status="fulfilled");var t=eo;eo=null,Yr=0,jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Tx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Lp=z.S;z.S=function(t,n){mg=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&bx(t,n),Lp!==null&&Lp(t,n)};var ur=O(null);function Eu(){var t=ur.current;return t!==null?t:Xe.pooledCache}function gl(t,n){n===null?gt(ur,ur.current):gt(ur,n.pool)}function Np(){var t=Eu();return t===null?null:{parent:sn._currentValue,pool:t}}var Zr=Error(r(460)),bu=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Op(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t}throw hr=n,Zr}}function fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hr=a,Zr):a}}var hr=null;function zp(){if(hr===null)throw Error(r(459));var t=hr;return hr=null,t}function Fp(t){if(t===Zr||t===_l)throw Error(r(483))}var Kr=null,no=0;function xl(t){var n=no;return no+=1,Kr===null&&(Kr=[]),Pp(Kr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(j,X){if(t){var K=j.deletions;K===null?(j.deletions=[X],j.flags|=16):K.push(X)}}function a(j,X){if(!t)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function s(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function c(j,X){return j=Yi(j,X),j.index=0,j.sibling=null,j}function f(j,X,K){return j.index=K,t?(K=j.alternate,K!==null?(K=K.index,K<X?(j.flags|=67108866,X):K):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function g(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function b(j,X,K,pt){return X===null||X.tag!==6?(X=hu(K,j.mode,pt),X.return=j,X):(X=c(X,K),X.return=j,X)}function I(j,X,K,pt){var Qt=K.type;return Qt===C?ft(j,X,K.props.children,pt,K.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===q&&fr(Qt)===X.type)?(X=c(X,K.props),io(X,K),X.return=j,X):(X=hl(K.type,K.key,K.props,null,j.mode,pt),io(X,K),X.return=j,X)}function Q(j,X,K,pt){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=du(K,j.mode,pt),X.return=j,X):(X=c(X,K.children||[]),X.return=j,X)}function ft(j,X,K,pt,Qt){return X===null||X.tag!==7?(X=sr(K,j.mode,pt,Qt),X.return=j,X):(X=c(X,K),X.return=j,X)}function mt(j,X,K){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=hu(""+X,j.mode,K),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return K=hl(X.type,X.key,X.props,null,j.mode,K),io(K,X),K.return=j,K;case R:return X=du(X,j.mode,K),X.return=j,X;case q:return X=fr(X),mt(j,X,K)}if(ut(X)||et(X))return X=sr(X,j.mode,K,null),X.return=j,X;if(typeof X.then=="function")return mt(j,xl(X),K);if(X.$$typeof===L)return mt(j,ml(j,X),K);Sl(j,X)}return null}function tt(j,X,K,pt){var Qt=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Qt!==null?null:b(j,X,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Qt?I(j,X,K,pt):null;case R:return K.key===Qt?Q(j,X,K,pt):null;case q:return K=fr(K),tt(j,X,K,pt)}if(ut(K)||et(K))return Qt!==null?null:ft(j,X,K,pt,null);if(typeof K.then=="function")return tt(j,X,xl(K),pt);if(K.$$typeof===L)return tt(j,X,ml(j,K),pt);Sl(j,K)}return null}function ot(j,X,K,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(K)||null,b(X,j,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return j=j.get(pt.key===null?K:pt.key)||null,I(X,j,pt,Qt);case R:return j=j.get(pt.key===null?K:pt.key)||null,Q(X,j,pt,Qt);case q:return pt=fr(pt),ot(j,X,K,pt,Qt)}if(ut(pt)||et(pt))return j=j.get(K)||null,ft(X,j,pt,Qt,null);if(typeof pt.then=="function")return ot(j,X,K,xl(pt),Qt);if(pt.$$typeof===L)return ot(j,X,K,ml(X,pt),Qt);Sl(X,pt)}return null}function Vt(j,X,K,pt){for(var Qt=null,Te=null,jt=X,ce=X=0,ve=null;jt!==null&&ce<K.length;ce++){jt.index>ce?(ve=jt,jt=null):ve=jt.sibling;var Ae=tt(j,jt,K[ce],pt);if(Ae===null){jt===null&&(jt=ve);break}t&&jt&&Ae.alternate===null&&n(j,jt),X=f(Ae,X,ce),Te===null?Qt=Ae:Te.sibling=Ae,Te=Ae,jt=ve}if(ce===K.length)return a(j,jt),xe&&ji(j,ce),Qt;if(jt===null){for(;ce<K.length;ce++)jt=mt(j,K[ce],pt),jt!==null&&(X=f(jt,X,ce),Te===null?Qt=jt:Te.sibling=jt,Te=jt);return xe&&ji(j,ce),Qt}for(jt=s(jt);ce<K.length;ce++)ve=ot(jt,j,ce,K[ce],pt),ve!==null&&(t&&ve.alternate!==null&&jt.delete(ve.key===null?ce:ve.key),X=f(ve,X,ce),Te===null?Qt=ve:Te.sibling=ve,Te=ve);return t&&jt.forEach(function(ka){return n(j,ka)}),xe&&ji(j,ce),Qt}function te(j,X,K,pt){if(K==null)throw Error(r(151));for(var Qt=null,Te=null,jt=X,ce=X=0,ve=null,Ae=K.next();jt!==null&&!Ae.done;ce++,Ae=K.next()){jt.index>ce?(ve=jt,jt=null):ve=jt.sibling;var ka=tt(j,jt,Ae.value,pt);if(ka===null){jt===null&&(jt=ve);break}t&&jt&&ka.alternate===null&&n(j,jt),X=f(ka,X,ce),Te===null?Qt=ka:Te.sibling=ka,Te=ka,jt=ve}if(Ae.done)return a(j,jt),xe&&ji(j,ce),Qt;if(jt===null){for(;!Ae.done;ce++,Ae=K.next())Ae=mt(j,Ae.value,pt),Ae!==null&&(X=f(Ae,X,ce),Te===null?Qt=Ae:Te.sibling=Ae,Te=Ae);return xe&&ji(j,ce),Qt}for(jt=s(jt);!Ae.done;ce++,Ae=K.next())Ae=ot(jt,j,ce,Ae.value,pt),Ae!==null&&(t&&Ae.alternate!==null&&jt.delete(Ae.key===null?ce:Ae.key),X=f(Ae,X,ce),Te===null?Qt=Ae:Te.sibling=Ae,Te=Ae);return t&&jt.forEach(function(zS){return n(j,zS)}),xe&&ji(j,ce),Qt}function Ve(j,X,K,pt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Qt=K.key;X!==null;){if(X.key===Qt){if(Qt=K.type,Qt===C){if(X.tag===7){a(j,X.sibling),pt=c(X,K.props.children),pt.return=j,j=pt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===q&&fr(Qt)===X.type){a(j,X.sibling),pt=c(X,K.props),io(pt,K),pt.return=j,j=pt;break t}a(j,X);break}else n(j,X);X=X.sibling}K.type===C?(pt=sr(K.props.children,j.mode,pt,K.key),pt.return=j,j=pt):(pt=hl(K.type,K.key,K.props,null,j.mode,pt),io(pt,K),pt.return=j,j=pt)}return g(j);case R:t:{for(Qt=K.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){a(j,X.sibling),pt=c(X,K.children||[]),pt.return=j,j=pt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}pt=du(K,j.mode,pt),pt.return=j,j=pt}return g(j);case q:return K=fr(K),Ve(j,X,K,pt)}if(ut(K))return Vt(j,X,K,pt);if(et(K)){if(Qt=et(K),typeof Qt!="function")throw Error(r(150));return K=Qt.call(K),te(j,X,K,pt)}if(typeof K.then=="function")return Ve(j,X,xl(K),pt);if(K.$$typeof===L)return Ve(j,X,ml(j,K),pt);Sl(j,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,X!==null&&X.tag===6?(a(j,X.sibling),pt=c(X,K),pt.return=j,j=pt):(a(j,X),pt=hu(K,j.mode,pt),pt.return=j,j=pt),g(j)):a(j,X)}return function(j,X,K,pt){try{no=0;var Qt=Ve(j,X,K,pt);return Kr=null,Qt}catch(jt){if(jt===Zr||jt===_l)throw jt;var Te=Yn(29,jt,null,j.mode);return Te.lanes=pt,Te.return=j,Te}}}var dr=Bp(!0),Ip=Bp(!1),Ra=!1;function Tu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ca(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ue&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=fl(t),yp(t,null,a),n}return ul(t,s,n,a),fl(t)}function ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Bs(t,a)}}function Ru(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Cu=!1;function ro(){if(Cu){var t=jr;if(t!==null)throw t}}function so(t,n,a,s){Cu=!1;var c=t.updateQueue;Ra=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var I=b,Q=I.next;I.next=null,g===null?f=Q:g.next=Q,g=I;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==g&&(b===null?ft.firstBaseUpdate=Q:b.next=Q,ft.lastBaseUpdate=I))}if(f!==null){var mt=c.baseState;g=0,ft=Q=I=null,b=f;do{var tt=b.lane&-536870913,ot=tt!==b.lane;if(ot?(_e&tt)===tt:(s&tt)===tt){tt!==0&&tt===Yr&&(Cu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=t,te=b;tt=n;var Ve=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(Ve,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,tt=typeof Vt=="function"?Vt.call(Ve,mt,tt):Vt,tt==null)break t;mt=_({},mt,tt);break t;case 2:Ra=!0}}tt=b.callback,tt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(Q=ft=ot,I=mt):ft=ft.next=ot,g|=tt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ft===null&&(I=mt),c.baseState=I,c.firstBaseUpdate=Q,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),Oa|=g,t.lanes=g,t.memoizedState=mt}}function Hp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Hp(a[t],n)}var Qr=O(null),Ml=O(0);function Vp(t,n){t=ra,gt(Ml,t),gt(Qr,n),ra=t|n.baseLanes}function wu(){gt(Ml,ra),gt(Qr,Qr.current)}function Du(){ra=Ml.current,it(Qr),it(Ml)}var jn=O(null),ci=null;function Da(t){var n=t.alternate;gt(nn,nn.current&1),gt(jn,t),ci===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(ci=t)}function Uu(t){gt(nn,nn.current),gt(jn,t),ci===null&&(ci=t)}function Xp(t){t.tag===22?(gt(nn,nn.current),gt(jn,t),ci===null&&(ci=t)):Ua()}function Ua(){gt(nn,nn.current),gt(jn,jn.current)}function Zn(t){it(jn),ci===t&&(ci=null),it(nn)}var nn=O(0);function yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,oe=null,He=null,on=null,El=!1,Jr=!1,pr=!1,bl=0,oo=0,$r=null,Ax=0;function Je(){throw Error(r(321))}function Lu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!qn(t[a],n[a]))return!1;return!0}function Nu(t,n,a,s,c,f){return Qi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Am:ju,pr=!1,f=a(s,c),pr=!1,Jr&&(f=Wp(n,a,s,c)),kp(t),f}function kp(t){z.H=uo;var n=He!==null&&He.next!==null;if(Qi=0,on=He=oe=null,El=!1,oo=0,$r=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&pl(t)&&(ln=!0))}function Wp(t,n,a,s){oe=t;var c=0;do{if(Jr&&($r=null),oo=0,Jr=!1,25<=c)throw Error(r(301));if(c+=1,on=He=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Rm,f=n(a,s)}while(Jr);return f}function Rx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?lo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(oe.flags|=1024),n}function Ou(){var t=bl!==0;return bl=0,t}function Pu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}Qi=0,on=He=oe=null,Jr=!1,oo=bl=0,$r=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?oe.memoizedState=on=t:on=on.next=t,on}function an(){if(He===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=on===null?oe.memoizedState:on.next;if(n!==null)on=n,He=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},on===null?oe.memoizedState=on=t:on=on.next=t}return on}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(t){var n=oo;return oo+=1,$r===null&&($r=[]),t=Pp($r,t,n),n=oe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Am:ju),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return lo(t);if(t.$$typeof===L)return bn(t)}throw Error(r(438,String(t)))}function Fu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Ji(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=an();return Bu(n,He,t)}function Bu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,I=null,Q=n,ft=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(_e&mt)===mt:(Qi&mt)===mt){var tt=Q.revertLane;if(tt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Yr&&(ft=!0);else if((Qi&tt)===tt){Q=Q.next,tt===Yr&&(ft=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=mt,g=f):I=I.next=mt,oe.lanes|=tt,Oa|=tt;mt=Q.action,pr&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},I===null?(b=I=tt,g=f):I=I.next=tt,oe.lanes|=mt,Oa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(I===null?g=f:I.next=b,!qn(f,t.memoizedState)&&(ln=!0,ft&&(a=jr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Iu(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);qn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function qp(t,n,a){var s=oe,c=an(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!qn((He||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Vu(Zp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,ts(9,{destroy:void 0},jp.bind(null,s,c,a,n),null),Xe===null)throw Error(r(349));f||(Qi&127)!==0||Yp(s,n,a)}return a}function Yp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Tl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function jp(t,n,a,s){n.value=a,n.getSnapshot=s,Kp(n)&&Qp(t)}function Zp(t,n,a){return a(function(){Kp(n)&&Qp(t)})}function Kp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!qn(t,a)}catch{return!0}}function Qp(t){var n=rr(t,2);n!==null&&Xn(n,t,2)}function Hu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),pr){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function Jp(t,n,a,s){return t.baseState=a,Bu(t,He,typeof s=="function"?s:Ji)}function Cx(t,n,a,s,c){if(Dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var b=a(c,s),I=z.S;I!==null&&I(g,b),tm(t,n,b)}catch(Q){Gu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,s),tm(t,n,f)}catch(Q){Gu(t,n,Q)}}function tm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){em(t,n,s)},function(s){return Gu(t,n,s)}):em(t,n,a)}function em(t,n,a){n.status="fulfilled",n.value=a,nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,$p(t,a)))}function Gu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,nm(n),n=n.next;while(n!==s)}t.action=null}function nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function im(t,n){return n}function am(t,n){if(xe){var a=Xe.formState;if(a!==null){t:{var s=oe;if(xe){if(We){e:{for(var c=We,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ui(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=ui(c.nextSibling),s=c.data==="F!";break t}}Ta(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:im,lastRenderedState:n},a.queue=s,a=Em.bind(null,oe,s),s.dispatch=a,s=Hu(!1),f=Yu.bind(null,oe,!1,s.queue),s=Pn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Cx.bind(null,oe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function rm(t){var n=an();return sm(n,He,t)}function sm(t,n,a){if(n=Bu(t,n,im)[0],t=Rl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=lo(n)}catch(g){throw g===Zr?_l:g}else s=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ts(9,{destroy:void 0},wx.bind(null,c,a),null)),[s,f,t]}function wx(t,n){t.action=n}function om(t){var n=an(),a=He;if(a!==null)return sm(n,a,t);an(),n=n.memoizedState,a=an();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ts(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Tl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function lm(){return an().memoizedState}function Cl(t,n,a,s){var c=Pn();oe.flags|=t,c.memoizedState=ts(1|n,{destroy:void 0},a,s===void 0?null:s)}function wl(t,n,a,s){var c=an();s=s===void 0?null:s;var f=c.memoizedState.inst;He!==null&&s!==null&&Lu(s,He.memoizedState.deps)?c.memoizedState=ts(n,f,a,s):(oe.flags|=t,c.memoizedState=ts(1|n,f,a,s))}function cm(t,n){Cl(8390656,8,t,n)}function Vu(t,n){wl(2048,8,t,n)}function Dx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Tl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function um(t){var n=an().memoizedState;return Dx({ref:n,nextImpl:t}),function(){if((Ue&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function fm(t,n){return wl(4,2,t,n)}function hm(t,n){return wl(4,4,t,n)}function dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function pm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,dm.bind(null,n,t),a)}function Xu(){}function mm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Lu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function gm(t,n){var a=an();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Lu(n,s[1]))return s[0];if(s=t(),pr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s}function ku(t,n,a){return a===void 0||(Qi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=_g(),oe.lanes|=t,Oa|=t,a)}function _m(t,n,a,s){return qn(a,n)?a:Qr.current!==null?(t=ku(t,a,s),qn(t,n)||(ln=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=_g(),oe.lanes|=t,Oa|=t,n)}function vm(t,n,a,s,c){var f=H.p;H.p=f!==0&&8>f?f:8;var g=z.T,b={};z.T=b,Yu(t,!1,n,a);try{var I=c(),Q=z.S;if(Q!==null&&Q(b,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=Tx(I,s);co(t,n,ft,Jn(t))}else co(t,n,s,Jn(t))}catch(mt){co(t,n,{then:function(){},status:"rejected",reason:mt},Jn())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),z.T=g}}function Ux(){}function Wu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=xm(t).queue;vm(t,c,n,at,a===null?Ux:function(){return Sm(t),a(s)})}function xm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sm(t){var n=xm(t);n.next===null&&(n=t.alternate.memoizedState),co(t,n.next.queue,{},Jn())}function qu(){return bn(Ro)}function Mm(){return an().memoizedState}function ym(){return an().memoizedState}function Lx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();t=Ca(a);var s=wa(n,t,a);s!==null&&(Xn(s,n,a),ao(s,n,a)),n={cache:Mu()},t.payload=n;return}n=n.return}}function Nx(t,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?bm(n,a):(a=uu(t,n,a,s),a!==null&&(Xn(a,t,s),Tm(a,n,s)))}function Em(t,n,a){var s=Jn();co(t,n,a,s)}function co(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,qn(b,g))return ul(t,n,c,0),Xe===null&&cl(),!1}catch{}if(a=uu(t,n,c,s),a!==null)return Xn(a,t,s),Tm(a,n,s),!0}return!1}function Yu(t,n,a,s){if(s={lane:2,revertLane:Af(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(r(479))}else n=uu(t,a,s,2),n!==null&&Xn(n,t,2)}function Dl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function bm(t,n){Jr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Bs(t,a)}}var uo={readContext:bn,use:Al,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};uo.useEffectEvent=Je;var Am={readContext:bn,use:Al,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var s=t();if(pr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Pn();if(a!==void 0){var c=a(n);if(pr){Ft(!0);try{a(n)}finally{Ft(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Nx.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=Hu(t);var n=t.queue,a=Em.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Xu,useDeferredValue:function(t,n){var a=Pn();return ku(a,t,n)},useTransition:function(){var t=Hu(!1);return t=vm.bind(null,oe,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,c=Pn();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xe===null)throw Error(r(349));(_e&127)!==0||Yp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,cm(Zp.bind(null,s,f,t),[t]),s.flags|=2048,ts(9,{destroy:void 0},jp.bind(null,s,f,a,n),null),a},useId:function(){var t=Pn(),n=Xe.identifierPrefix;if(xe){var a=Di,s=wi;a=(s&~(1<<32-Pt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ax++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qu,useFormState:am,useActionState:am,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return Pn().memoizedState=Lx.bind(null,oe)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:bn,use:Al,useCallback:mm,useContext:bn,useEffect:Vu,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Rl,useRef:lm,useState:function(){return Rl(Ji)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=an();return _m(a,He.memoizedState,t,n)},useTransition:function(){var t=Rl(Ji)[0],n=an().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:qu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=an();return Jp(a,He,t,n)},useMemoCache:Fu,useCacheRefresh:ym};ju.useEffectEvent=um;var Rm={readContext:bn,use:Al,useCallback:mm,useContext:bn,useEffect:Vu,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:hm,useMemo:gm,useReducer:Iu,useRef:lm,useState:function(){return Iu(Ji)},useDebugValue:Xu,useDeferredValue:function(t,n){var a=an();return He===null?ku(a,t,n):_m(a,He.memoizedState,t,n)},useTransition:function(){var t=Iu(Ji)[0],n=an().memoizedState;return[typeof t=="boolean"?t:lo(t),n]},useSyncExternalStore:qp,useId:Mm,useHostTransitionStatus:qu,useFormState:om,useActionState:om,useOptimistic:function(t,n){var a=an();return He!==null?Jp(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:ym};Rm.useEffectEvent=um;function Zu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Jn(),c=Ca(s);c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Xn(n,t,s),ao(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Jn(),c=Ca(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=wa(t,c,s),n!==null&&(Xn(n,t,s),ao(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Jn(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(t,s,a),n!==null&&(Xn(n,t,a),ao(n,t,a))}};function Cm(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(c,f):!0}function wm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ku.enqueueReplaceState(n,n.state,null)}function mr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Dm(t){ll(t)}function Um(t){console.error(t)}function Lm(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Nm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Qu(t,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Om(t){return t=Ca(t),t.tag=3,t}function Pm(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Nm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Nm(n,a,s),typeof c!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Ox(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,c,!0),a=jn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Xl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ef(t,s,c)),!1;case 22:return a.flags|=65536,s===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ef(t,s,c)),!1}throw Error(r(435,a.tag))}return Ef(t,s,c),Xl(),!1}if(xe)return n=jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==gu&&(t=Error(r(422),{cause:s}),$s(ri(t,a)))):(s!==gu&&(n=Error(r(423),{cause:s}),$s(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ri(s,a),c=Qu(t.stateNode,s,c),Ru(t,c),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),xo===null?xo=[f]:xo.push(f),$e!==4&&($e=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Qu(a.stateNode,s,t),Ru(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Om(c),Pm(c,t,a,s),Ru(a,c),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),ln=!1;function Tn(t,n,a,s){n.child=t===null?Ip(n,null,a,s):dr(n,t.child,a,s)}function zm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return cr(n),s=Nu(t,n,a,g,f,c),b=Ou(),t!==null&&!ln?(Pu(t,n,c),$i(t,n,c)):(xe&&b&&pu(n),n.flags|=1,Tn(t,n,s,c),n.child)}function Fm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,s,c)):(t=hl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!of(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(g,s)&&t.ref===n.ref)return $i(t,n,c)}return n.flags|=1,t=Yi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Ks(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,of(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,$i(t,n,c)}return $u(t,n,a,s,c)}function Im(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Hm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):wu(),Xp(n);else return s=n.lanes=536870912,Hm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gl(n,f.cachePool),Vp(n,f),Ua(),n.memoizedState=null):(t!==null&&gl(n,null),wu(),Ua());return Tn(t,n,c,a),n.child}function fo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hm(t,n,a,s,c){var f=Eu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),wu(),Xp(n),t!==null&&qr(t,n,s,!0),n.childLanes=c,null}function Ll(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Gm(t,n,a){return dr(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function Px(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Ll(n,s),n.lanes=536870912,fo(null,t);if(Uu(n),(t=We)?(t=$g(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Ll(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Uu(n),c)if(n.flags&256)n.flags&=-257,n=Gm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||qr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=Xe,s!==null&&(g=Ur(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,rr(t,g),Xn(s,t,g),Ju;Xl(),n=Gm(t,n,a)}else t=f.treeContext,We=ui(g.nextSibling),En=n,xe=!0,ba=null,li=!1,t!==null&&Rp(n,t),n=Ll(n,s),n.flags|=4096;return n}return t=Yi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function $u(t,n,a,s,c){return cr(n),a=Nu(t,n,a,s,void 0,c),s=Ou(),t!==null&&!ln?(Pu(t,n,c),$i(t,n,c)):(xe&&s&&pu(n),n.flags|=1,Tn(t,n,a,c),n.child)}function Vm(t,n,a,s,c,f){return cr(n),n.updateQueue=null,a=Wp(n,s,a,c),kp(t),s=Ou(),t!==null&&!ln?(Pu(t,n,f),$i(t,n,f)):(xe&&s&&pu(n),n.flags|=1,Tn(t,n,a,f),n.child)}function Xm(t,n,a,s,c){if(cr(n),n.stateNode===null){var f=Vr,g=a.contextType;typeof g=="object"&&g!==null&&(f=bn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Tu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?bn(g):Vr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Zu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ku.enqueueReplaceState(f,f.state,null),so(n,s,f,c),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,I=mr(a,b);f.props=I;var Q=f.context,ft=a.contextType;g=Vr,typeof ft=="object"&&ft!==null&&(g=bn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||Q!==g)&&wm(n,f,s,g),Ra=!1;var tt=n.memoizedState;f.state=tt,so(n,s,f,c),ro(),Q=n.memoizedState,b||tt!==Q||Ra?(typeof mt=="function"&&(Zu(n,a,mt,s),Q=n.memoizedState),(I=Ra||Cm(n,a,I,s,tt,Q,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Au(t,n),g=n.memoizedProps,ft=mr(a,g),f.props=ft,mt=n.pendingProps,tt=f.context,Q=a.contextType,I=Vr,typeof Q=="object"&&Q!==null&&(I=bn(Q)),b=a.getDerivedStateFromProps,(Q=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||tt!==I)&&wm(n,f,s,I),Ra=!1,tt=n.memoizedState,f.state=tt,so(n,s,f,c),ro();var ot=n.memoizedState;g!==mt||tt!==ot||Ra||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof b=="function"&&(Zu(n,a,b,s),ot=n.memoizedState),(ft=Ra||Cm(n,a,ft,s,tt,ot,I)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=I,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Nl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=dr(n,t.child,null,c),n.child=dr(n,null,a,c)):Tn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=$i(t,n,c),t}function km(t,n,a,s){return or(),n.flags|=256,Tn(t,n,a,s),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(t){return{baseLanes:t,cachePool:Np()}}function nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Qn),t}function Wm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(nn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?Da(n):Ua(),(t=We)?(t=$g(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,En=n,We=null)):t=null,t===null)throw Ta(n);return If(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(Ua(),c=n.mode,b=Ol({mode:"hidden",children:b},c),s=sr(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,fo(null,s)):(Da(n),af(n,b))}var I=t.memoizedState;if(I!==null&&(b=I.dehydrated,b!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=rf(t,n,a)):n.memoizedState!==null?(Ua(),n.child=t.child,n.flags|=128,n=null):(Ua(),b=s.fallback,c=n.mode,s=Ol({mode:"visible",children:s.children},c),b=sr(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,dr(n,t.child,null,a),s=n.child,s.memoizedState=ef(a),s.childLanes=nf(t,g,a),n.memoizedState=tf,n=fo(null,s));else if(Da(n),If(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,$s({value:s,source:null,stack:null}),n=rf(t,n,a)}else if(ln||qr(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=Xe,g!==null&&(s=Ur(g,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,rr(t,s),Xn(g,t,s),Ju;Bf(b)||Xl(),n=rf(t,n,a)}else Bf(b)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,We=ui(b.nextSibling),En=n,xe=!0,ba=null,li=!1,t!==null&&Rp(n,t),n=af(n,s.children),n.flags|=4096);return n}return c?(Ua(),b=s.fallback,c=n.mode,I=t.child,Q=I.sibling,s=Yi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,Q!==null?b=Yi(Q,b):(b=sr(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,fo(null,s),s=n.child,b=t.child.memoizedState,b===null?b=ef(a):(c=b.cachePool,c!==null?(I=sn._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Np(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=nf(t,g,a),n.memoizedState=tf,fo(t.child,s)):(Da(n),a=t.child,t=a.sibling,a=Yi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function af(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Yn(22,t,null,n),t.lanes=0,t}function rf(t,n,a){return dr(n,t.child,null,a),t=af(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function qm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),xu(t.return,n,a)}function sf(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Ym(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=nn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,gt(nn,g),Tn(t,n,s,a),s=xe?Js:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,a,n);else if(t.tag===19)qm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&yl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&yl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}sf(n,!0,a,null,f,s);break;case"together":sf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(qr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Yi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Yi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function zx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Aa(n,sn,t.memoizedState.cache),or();break;case 27:case 5:Ht(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wm(t,n,a):(Da(n),t=$i(t,n,a),t!==null?t.sibling:null);Da(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Ym(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),gt(nn,nn.current),s)break;return null;case 22:return n.lanes=0,Im(t,n,a,n.pendingProps);case 24:Aa(n,sn,t.memoizedState.cache)}return $i(t,n,a)}function jm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!of(t,a)&&(n.flags&128)===0)return ln=!1,zx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,xe&&(n.flags&1048576)!==0&&Ap(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=fr(n.elementType),n.type=t,typeof t=="function")fu(t)?(s=mr(t,s),n.tag=1,n=Xm(null,n,t,s,a)):(n.tag=0,n=$u(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=zm(null,n,t,s,a);break t}else if(c===P){n.tag=14,n=Fm(null,n,t,s,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return $u(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=mr(s,n.pendingProps),Xm(t,n,s,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Au(t,n),so(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Aa(n,sn,s),s!==f.cache&&Su(n,[sn],a,!0),ro(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(t,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),$s(c),n=km(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=ui(t.firstChild),En=n,xe=!0,ba=null,li=!0,a=Ip(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(or(),s===c){n=$i(t,n,a);break t}Tn(t,n,s,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=r0(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Kl(nt.current).createElement(a),s[rn]=n,s[_n]=t,An(s,a,t),T(s),n.stateNode=s):n.memoizedState=r0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&xe&&(s=n.stateNode=n0(n.type,n.pendingProps,nt.current),En=n,li=!0,c=We,Ia(n.type)?(Hf=c,We=ui(s.firstChild)):We=c),Tn(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=We)&&(s=hS(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,En=n,We=ui(s.firstChild),li=!1,c=!0):c=!1),c||Ta(n)),Ht(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Pf(c,f)?s=null:g!==null&&Pf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Nu(t,n,Rx,null,null,a),Ro._currentValue=c),Nl(t,n),Tn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=We)&&(a=dS(a,n.pendingProps,li),a!==null?(n.stateNode=a,En=n,We=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Wm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=dr(n,null,s,a):Tn(t,n,s,a),n.child;case 11:return zm(t,n,n.type,n.pendingProps,a);case 7:return Tn(t,n,n.pendingProps,a),n.child;case 8:return Tn(t,n,n.pendingProps.children,a),n.child;case 12:return Tn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),Tn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,cr(n),c=bn(c),s=s(c),n.flags|=1,Tn(t,n,s,a),n.child;case 14:return Fm(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return Ym(t,n,a);case 31:return Px(t,n,a);case 22:return Im(t,n,a,n.pendingProps);case 24:return cr(n),s=bn(sn),t===null?(c=Eu(),c===null&&(c=Xe,f=Mu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Tu(n),Aa(n,sn,c)):((t.lanes&a)!==0&&(Au(t,n),so(n,null,null,a),ro()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Aa(n,sn,s)):(s=f.cache,Aa(n,sn,s),s!==c.cache&&Su(n,[sn],a,!0))),Tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(t){t.flags|=4}function lf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Mg())t.flags|=8192;else throw hr=vl,bu}else t.flags&=-16777217}function Zm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!u0(n))if(Mg())t.flags|=8192;else throw hr=vl,bu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,as|=n)}function ho(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Fx(t,n,a){var s=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ki(sn),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wr(n)?ta(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ta(n),f!==null?(qe(n),Zm(n,f)):(qe(n),lf(n,c,null,s,a))):f?f!==t.memoizedState?(ta(n),qe(n),Zm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ta(n),qe(n),lf(n,c,t,s,a)),null;case 27:if(he(n),a=nt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}t=Tt.current,Wr(n)?Cp(n):(t=n0(c,s,a),n.stateNode=t,ta(n))}return qe(n),null;case 5:if(he(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(f=Tt.current,Wr(n))Cp(n);else{var g=Kl(nt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[_n]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(An(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ta(n)}}return qe(n),lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,Wr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Wg(t.nodeValue,a)),t||Ta(n,!0)}else t=Kl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Wr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return qe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Wr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=_u(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),qe(n),null);case 4:return Xt(),t===null&&Df(n.stateNode.containerInfo),qe(n),null;case 10:return Ki(n.type),qe(n),null;case 19:if(it(nn),s=n.memoizedState,s===null)return qe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ho(s,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=yl(t),f!==null){for(n.flags|=128,ho(s,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ep(a,t),a=a.sibling;return gt(nn,nn.current&1|2),xe&&ji(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>Hl&&(n.flags|=128,c=!0,ho(s,!1),n.lanes=4194304)}else{if(!c)if(t=yl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return qe(n),null}else 2*M()-s.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,c=!0,ho(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=nn.current,gt(nn,c?a&1|2:a&1),xe&&ji(n,s.treeForkCount),t):(qe(n),null);case 22:case 23:return Zn(n),Du(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&it(ur),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Bx(t,n){switch(mu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(sn),Xt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(nn),null;case 4:return Xt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Zn(n),Du(),t!==null&&it(ur),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(sn),null;case 25:return null;default:return null}}function Km(t,n){switch(mu(n),n.tag){case 3:Ki(sn),Xt();break;case 26:case 27:case 5:he(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:it(nn);break;case 10:Ki(n.type);break;case 22:case 23:Zn(n),Du(),t!==null&&it(ur);break;case 24:Ki(sn)}}function po(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(b){Be(n,n.return,b)}}function La(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var I=a,Q=b;try{Q()}catch(ft){Be(c,I,ft)}}}s=s.next}while(s!==f)}}catch(ft){Be(n,n.return,ft)}}function Qm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Gp(n,a)}catch(s){Be(t,t.return,s)}}}function Jm(t,n,a){a.props=mr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Be(t,n,c)}}function Ui(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function $m(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function cf(t,n,a){try{var s=t.stateNode;sS(s,t.type,a,n),s[_n]=n}catch(c){Be(t,t.return,c)}}function tg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function uf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi));else if(s!==4&&(s===27&&Ia(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function zl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ia(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function eg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);An(n,s,a),n[rn]=t,n[_n]=a}catch(f){Be(t,t.return,f)}}var ea=!1,cn=!1,hf=!1,ng=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Ix(t,n){if(t=t.containerInfo,Nf=ic,t=pp(t),au(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,I=-1,Q=0,ft=0,mt=t,tt=null;e:for(;;){for(var ot;mt!==a||c!==0&&mt.nodeType!==3||(b=g+c),mt!==f||s!==0&&mt.nodeType!==3||(I=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===t)break e;if(tt===a&&++Q===c&&(b=g),tt===f&&++ft===s&&(I=g),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=b===-1||I===-1?null:{start:b,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:t,selectionRange:a},ic=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=mr(a.type,c);t=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Be(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function ig(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ia(t,a),s&4&&po(5,a);break;case 1:if(ia(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Be(a,a.return,g)}else{var c=mr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Be(a,a.return,g)}}s&64&&Qm(a),s&512&&mo(a,a.return);break;case 3:if(ia(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(t,n)}catch(g){Be(a,a.return,g)}}break;case 27:n===null&&s&4&&eg(a);case 26:case 5:ia(t,a),n===null&&s&4&&$m(a),s&512&&mo(a,a.return);break;case 12:ia(t,a);break;case 31:ia(t,a),s&4&&sg(t,a);break;case 13:ia(t,a),s&4&&og(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=jx.bind(null,a),pS(t,a))));break;case 22:if(s=a.memoizedState!==null||ea,!s){n=n!==null&&n.memoizedState!==null||cn,c=ea;var f=cn;ea=s,(cn=n)&&!f?aa(t,a,(a.subtreeFlags&8772)!==0):ia(t,a),ea=c,cn=f}break;case 30:break;default:ia(t,a)}}function ag(t){var n=t.alternate;n!==null&&(t.alternate=null,ag(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,In=!1;function na(t,n,a){for(a=a.child;a!==null;)rg(t,n,a),a=a.sibling}function rg(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:cn||Ui(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ui(a,n);var s=Ze,c=In;Ia(a.type)&&(Ze=a.stateNode,In=!1),na(t,n,a),bo(a.stateNode),Ze=s,In=c;break;case 5:cn||Ui(a,n);case 6:if(s=Ze,c=In,Ze=null,na(t,n,a),Ze=s,In=c,Ze!==null)if(In)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ze!==null&&(In?(t=Ze,Qg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hs(t)):Qg(Ze,a.stateNode));break;case 4:s=Ze,c=In,Ze=a.stateNode.containerInfo,In=!0,na(t,n,a),Ze=s,In=c;break;case 0:case 11:case 14:case 15:La(2,a,n),cn||La(4,a,n),na(t,n,a);break;case 1:cn||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Jm(a,n,s)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,na(t,n,a),cn=s;break;default:na(t,n,a)}}function sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hs(t)}catch(a){Be(n,n.return,a)}}}function og(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hs(t)}catch(a){Be(n,n.return,a)}}function Hx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ng),n;default:throw Error(r(435,t.tag))}}function Fl(t,n){var a=Hx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Zx.bind(null,t,s);s.then(c,c)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Ia(b.type)){Ze=b.stateNode,In=!1;break t}break;case 5:Ze=b.stateNode,In=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ze===null)throw Error(r(160));rg(f,g,c),Ze=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lg(n,t),n=n.sibling}var Si=null;function lg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(La(3,t,t.return),po(3,t),La(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(cn||a===null||Ui(a,a.return)),s&64&&ea&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=Si;if(Hn(n,t),Gn(t),s&512&&(cn||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[tr]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),An(f,s,a),f[rn]=t,T(f),s=f;break t;case"link":var g=l0("link","href",c).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;case"meta":if(g=l0("meta","content",c).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(s),An(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,T(f),s=f}t.stateNode=s}else c0(c,t.type,t.stateNode);else t.stateNode=o0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?c0(c,t.type,t.stateNode):o0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(cn||a===null||Ui(a,a.return)),a!==null&&s&4&&cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(cn||a===null||Ui(a,a.return)),t.flags&32){c=t.stateNode;try{fn(c,"")}catch(Vt){Be(t,t.return,Vt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,cf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(hf=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Vt){Be(t,t.return,Vt)}}break;case 3:if($l=null,c=Si,Si=Ql(n.containerInfo),Hn(n,t),Si=c,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(Vt){Be(t,t.return,Vt)}hf&&(hf=!1,cg(t));break;case 4:s=Si,Si=Ql(t.stateNode.containerInfo),Hn(n,t),Gn(t),Si=s;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fl(t,s)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Il=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fl(t,s)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Q=ea,ft=cn;if(ea=Q||c,cn=ft||I,Hn(n,t),cn=ft,ea=Q,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||ea||cn||gr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=I.stateNode;var mt=I.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){Be(I,I.return,Vt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Vt){Be(I,I.return,Vt)}}}else if(n.tag===18){if(a===null){I=n;try{var ot=I.stateNode;c?Jg(ot,!0):Jg(I.stateNode,!1)}catch(Vt){Be(I,I.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Fl(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Fl(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(tg(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=uf(t);zl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(fn(g,""),a.flags&=-33);var b=uf(t);zl(t,b,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Q=uf(t);ff(t,Q,I);break;default:throw Error(r(161))}}catch(ft){Be(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function cg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ig(t,n.alternate,n),n=n.sibling}function gr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),gr(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Jm(n,n.return,a),gr(n);break;case 27:bo(n.stateNode);case 26:case 5:Ui(n,n.return),gr(n);break;case 22:n.memoizedState===null&&gr(n);break;case 30:gr(n);break;default:gr(n)}t=t.sibling}}function aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:aa(c,f,a),po(4,f);break;case 1:if(aa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Be(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Hp(I[c],b)}catch(Q){Be(s,s.return,Q)}}a&&g&64&&Qm(f),mo(f,f.return);break;case 27:eg(f);case 26:case 5:aa(c,f,a),a&&s===null&&g&4&&$m(f),mo(f,f.return);break;case 12:aa(c,f,a);break;case 31:aa(c,f,a),a&&g&4&&sg(c,f);break;case 13:aa(c,f,a),a&&g&4&&og(c,f);break;case 22:f.memoizedState===null&&aa(c,f,a),mo(f,f.return);break;case 30:break;default:aa(c,f,a)}n=n.sibling}}function df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function pf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function Mi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ug(t,n,a,s),n=n.sibling}function ug(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,s),c&2048&&po(9,n);break;case 1:Mi(t,n,a,s);break;case 3:Mi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){Mi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Be(n,n.return,I)}}else Mi(t,n,a,s);break;case 31:Mi(t,n,a,s);break;case 13:Mi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,s):go(t,n):f._visibility&2?Mi(t,n,a,s):(f._visibility|=2,es(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&df(g,n);break;case 24:Mi(t,n,a,s),c&2048&&pf(n.alternate,n);break;default:Mi(t,n,a,s)}}function es(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,I=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:es(f,g,b,I,c),po(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?es(f,g,b,I,c):go(f,g):(ft._visibility|=2,es(f,g,b,I,c)),c&&Q&2048&&df(g.alternate,g);break;case 24:es(f,g,b,I,c),c&&Q&2048&&pf(g.alternate,g);break;default:es(f,g,b,I,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:go(a,s),c&2048&&df(s.alternate,s);break;case 24:go(a,s),c&2048&&pf(s.alternate,s);break;default:go(a,s)}n=n.sibling}}var _o=8192;function ns(t,n,a){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)fg(t,n,a),t=t.sibling}function fg(t,n,a){switch(t.tag){case 26:ns(t,n,a),t.flags&_o&&t.memoizedState!==null&&AS(a,Si,t.memoizedState,t.memoizedProps);break;case 5:ns(t,n,a);break;case 3:case 4:var s=Si;Si=Ql(t.stateNode.containerInfo),ns(t,n,a),Si=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=_o,_o=16777216,ns(t,n,a),_o=s):ns(t,n,a));break;default:ns(t,n,a)}}function hg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,pg(s,t)}hg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dg(t),t=t.sibling}function dg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&La(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):vo(t);break;default:vo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,pg(s,t)}hg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:La(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function pg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:to(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(ag(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Gx={getCacheForType:function(t){var n=bn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(sn).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,pe=null,_e=0,Fe=0,Kn=null,Na=!1,is=!1,mf=!1,ra=0,$e=0,Oa=0,_r=0,gf=0,Qn=0,as=0,xo=null,Vn=null,_f=!1,Il=0,mg=0,Hl=1/0,Gl=null,Pa=null,hn=0,za=null,rs=null,sa=0,vf=0,xf=null,gg=null,So=0,Sf=null;function Jn(){return(Ue&2)!==0&&_e!==0?_e&-_e:z.T!==null?Af():Hs()}function _g(){if(Qn===0)if((_e&536870912)===0||xe){var t=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Qn=t}else Qn=536870912;return t=jn.current,t!==null&&(t.flags|=32),Qn}function Xn(t,n,a){(t===Xe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(ss(t,0),Fa(t,_e,Qn,!1)),wn(t,a),((Ue&2)===0||t!==Xe)&&(t===Xe&&((Ue&2)===0&&(_r|=a),$e===4&&Fa(t,_e,Qn,!1)),Li(t))}function vg(t,n,a){if((Ue&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||At(t,n),c=s?Wx(t,n):yf(t,n,!0),f=s;do{if(c===0){is&&!s&&Fa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Xx(a)){c=yf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=xo;var I=b.current.memoizedState.isDehydrated;if(I&&(ss(b,g).flags|=256),g=yf(b,g,!1),g!==2){if(mf&&!I){b.errorRecoveryDisabledLanes|=f,_r|=f,c=4;break t}f=Vn,Vn=c,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){ss(t,0),Fa(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,Qn,!Na);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Il+300-M(),10<c)){if(Fa(s,n,Qn,!Na),_t(s,0,!0)!==0)break t;sa=n,s.timeoutHandle=Zg(xg.bind(null,s,a,Vn,Gl,_f,n,Qn,_r,as,Na,f,"Throttled",-0,0),c);break t}xg(s,a,Vn,Gl,_f,n,Qn,_r,as,Na,f,null,-0,0)}}break}while(!0);Li(t)}function xg(t,n,a,s,c,f,g,b,I,Q,ft,mt,tt,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},fg(n,f,mt);var Vt=(f&62914560)===f?Il-M():(f&4194048)===f?mg-M():0;if(Vt=RS(mt,Vt),Vt!==null){sa=f,t.cancelPendingCommit=Vt(Rg.bind(null,t,n,f,a,s,c,g,b,I,ft,mt,null,tt,ot)),Fa(t,f,g,!Q);return}}Rg(t,n,f,a,s,c,g,b,I)}function Xx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!qn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(t,n,a,s){n&=~gf,n&=~_r,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Pt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&$o(t,a,n)}function Vl(){return(Ue&6)===0?(Mo(0),!1):!0}function Mf(){if(pe!==null){if(Fe===0)var t=pe.return;else t=pe,Zi=lr=null,zu(t),Kr=null,no=0,t=pe;for(;t!==null;)Km(t.alternate,t),t=t.return;pe=null}}function ss(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,cS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sa=0,Mf(),Xe=t,pe=a=Yi(t.current,null),_e=n,Fe=0,Kn=null,Na=!1,is=At(t,n),mf=!1,as=Qn=gf=_r=Oa=$e=0,Vn=xo=null,_f=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Pt(s),f=1<<c;n|=t[c],s&=~f}return ra=n,cl(),a}function Sg(t,n){oe=null,z.H=uo,n===Zr||n===_l?(n=zp(),Fe=3):n===bu?(n=zp(),Fe=4):Fe=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pe===null&&($e=1,Ul(t,ri(n,t.current)))}function Mg(){var t=jn.current;return t===null?!0:(_e&4194048)===_e?ci===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ci:!1}function yg(){var t=z.H;return z.H=uo,t===null?uo:t}function Eg(){var t=z.A;return z.A=Gx,t}function Xl(){$e=4,Na||(_e&4194048)!==_e&&jn.current!==null||(is=!0),(Oa&134217727)===0&&(_r&134217727)===0||Xe===null||Fa(Xe,_e,Qn,!1)}function yf(t,n,a){var s=Ue;Ue|=2;var c=yg(),f=Eg();(Xe!==t||_e!==n)&&(Gl=null,ss(t,n)),n=!1;var g=$e;t:do try{if(Fe!==0&&pe!==null){var b=pe,I=Kn;switch(Fe){case 8:Mf(),g=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(n=!0);var Q=Fe;if(Fe=0,Kn=null,os(t,b,I,Q),a&&is){g=0;break t}break;default:Q=Fe,Fe=0,Kn=null,os(t,b,I,Q)}}kx(),g=$e;break}catch(ft){Sg(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Zi=lr=null,Ue=s,z.H=c,z.A=f,pe===null&&(Xe=null,_e=0,cl()),g}function kx(){for(;pe!==null;)bg(pe)}function Wx(t,n){var a=Ue;Ue|=2;var s=yg(),c=Eg();Xe!==t||_e!==n?(Gl=null,Hl=M()+500,ss(t,n)):is=At(t,n);t:do try{if(Fe!==0&&pe!==null){n=pe;var f=Kn;e:switch(Fe){case 1:Fe=0,Kn=null,os(t,n,f,1);break;case 2:case 9:if(Op(f)){Fe=0,Kn=null,Tg(n);break}n=function(){Fe!==2&&Fe!==9||Xe!==t||(Fe=7),Li(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Op(f)?(Fe=0,Kn=null,Tg(n)):(Fe=0,Kn=null,os(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var b=pe;if(g?u0(g):b.stateNode.complete){Fe=0,Kn=null;var I=b.sibling;if(I!==null)pe=I;else{var Q=b.return;Q!==null?(pe=Q,kl(Q)):pe=null}break e}}Fe=0,Kn=null,os(t,n,f,5);break;case 6:Fe=0,Kn=null,os(t,n,f,6);break;case 8:Mf(),$e=6;break t;default:throw Error(r(462))}}qx();break}catch(ft){Sg(t,ft)}while(!0);return Zi=lr=null,z.H=s,z.A=c,Ue=a,pe!==null?0:(Xe=null,_e=0,cl(),$e)}function qx(){for(;pe!==null&&!Yt();)bg(pe)}function bg(t){var n=jm(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?kl(t):pe=n}function Tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Vm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Vm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:zu(n);default:Km(a,n),n=pe=Ep(n,ra),n=jm(a,n,ra)}t.memoizedProps=t.pendingProps,n===null?kl(t):pe=n}function os(t,n,a,s){Zi=lr=null,zu(n),Kr=null,no=0;var c=n.return;try{if(Ox(t,c,n,a,_e)){$e=1,Ul(t,ri(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;$e=1,Ul(t,ri(a,t.current)),pe=null;return}n.flags&32768?(xe||s===1?t=!0:is||(_e&536870912)!==0?t=!1:(Na=t=!0,(s===2||s===9||s===3||s===6)&&(s=jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Ag(n,t)):kl(n)}function kl(t){var n=t;do{if((n.flags&32768)!==0){Ag(n,Na);return}t=n.return;var a=Fx(n.alternate,n,ra);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);$e===0&&($e=5)}function Ag(t,n){do{var a=Bx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);$e=6,pe=null}function Rg(t,n,a,s,c,f,g,b,I){t.cancelPendingCommit=null;do Wl();while(hn!==0);if((Ue&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=cu,gi(t,a,f,g,b,I),t===Xe&&(pe=Xe=null,_e=0),rs=n,za=t,sa=a,vf=f,xf=c,gg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Kx(lt,function(){return Lg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=H.p,H.p=2,g=Ue,Ue|=4;try{Ix(t,n,a)}finally{Ue=g,H.p=c,z.T=s}}hn=1,Cg(),wg(),Dg()}}function Cg(){if(hn===1){hn=0;var t=za,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=H.p;H.p=2;var c=Ue;Ue|=4;try{lg(n,t);var f=Of,g=pp(t.containerInfo),b=f.focusedElem,I=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&dp(b.ownerDocument.documentElement,b)){if(I!==null&&au(b)){var Q=I.start,ft=I.end;if(ft===void 0&&(ft=Q),"selectionStart"in b)b.selectionStart=Q,b.selectionEnd=Math.min(ft,b.value.length);else{var mt=b.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=b.textContent.length,te=Math.min(I.start,Vt),Ve=I.end===void 0?te:Math.min(I.end,Vt);!ot.extend&&te>Ve&&(g=Ve,Ve=te,te=g);var j=hp(b,te),X=hp(b,Ve);if(j&&X&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var K=mt.createRange();K.setStart(j.node,j.offset),ot.removeAllRanges(),te>Ve?(ot.addRange(K),ot.extend(X.node,X.offset)):(K.setEnd(X.node,X.offset),ot.addRange(K))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ic=!!Nf,Of=Nf=null}finally{Ue=c,H.p=s,z.T=a}}t.current=n,hn=2}}function wg(){if(hn===2){hn=0;var t=za,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=H.p;H.p=2;var c=Ue;Ue|=4;try{ig(t,n.alternate,n)}finally{Ue=c,H.p=s,z.T=a}}hn=3}}function Dg(){if(hn===4||hn===3){hn=0,N();var t=za,n=rs,a=sa,s=gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,rs=za=null,Ug(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Pa=null),Lr(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=H.p,H.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{z.T=n,H.p=c}}(sa&3)!==0&&Wl(),Li(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Sf?So++:(So=0,Sf=t):So=0,Mo(0)}}function Ug(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function Wl(){return Cg(),wg(),Dg(),Lg()}function Lg(){if(hn!==5)return!1;var t=za,n=vf;vf=0;var a=Lr(sa),s=z.T,c=H.p;try{H.p=32>a?32:a,z.T=null,a=xf,xf=null;var f=za,g=sa;if(hn=0,rs=za=null,sa=0,(Ue&6)!==0)throw Error(r(331));var b=Ue;if(Ue|=4,dg(f.current),ug(f,f.current,g,a),Ue=b,Mo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{H.p=c,z.T=s,Ug(t,n)}}function Ng(t,n,a){n=ri(a,n),n=Qu(t.stateNode,n,2),t=wa(t,n,2),t!==null&&(wn(t,2),Li(t))}function Be(t,n,a){if(t.tag===3)Ng(t,t,a);else for(;n!==null;){if(n.tag===3){Ng(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){t=ri(a,t),a=Om(2),s=wa(n,a,2),s!==null&&(Pm(a,s,n,t),wn(s,2),Li(s));break}}n=n.return}}function Ef(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Vx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(mf=!0,c.add(a),t=Yx.bind(null,t,n,a),n.then(t,t))}function Yx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(_e&a)===a&&($e===4||$e===3&&(_e&62914560)===_e&&300>M()-Il?(Ue&2)===0&&ss(t,0):gf|=a,as===_e&&(as=0)),Li(t)}function Og(t,n){n===0&&(n=Pe()),t=rr(t,n),t!==null&&(wn(t,n),Li(t))}function jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Og(t,a)}function Zx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Og(t,a)}function Kx(t,n){return Me(t,n)}var ql=null,ls=null,bf=!1,Yl=!1,Tf=!1,Ba=0;function Li(t){t!==ls&&t.next===null&&(ls===null?ql=ls=t:ls=ls.next=t),Yl=!0,bf||(bf=!0,Jx())}function Mo(t,n){if(!Tf&&Yl){Tf=!0;do for(var a=!1,s=ql;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(s,f))}else f=_e,f=_t(s,s===Xe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||At(s,f)||(a=!0,Bg(s,f));s=s.next}while(a);Tf=!1}}function Qx(){Pg()}function Pg(){Yl=bf=!1;var t=0;Ba!==0&&lS()&&(t=Ba);for(var n=M(),a=null,s=ql;s!==null;){var c=s.next,f=zg(s,n);f===0?(s.next=null,a===null?ql=c:a.next=c,c===null&&(ls=a)):(a=s,(t!==0||(f&3)!==0)&&(Yl=!0)),s=c}hn!==0&&hn!==5||Mo(t),Ba!==0&&(Ba=0)}function zg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Pt(f),b=1<<g,I=c[g];I===-1?((b&a)===0||(b&s)!==0)&&(c[g]=ne(b,n)):I<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xe,a=_e,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ne(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||At(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ne(s),Lr(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Ct;break;default:a=lt}return s=Fg.bind(null,t),a=Me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ne(s),t.callbackPriority=2,t.callbackNode=null,2}function Fg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var s=_e;return s=_t(t,t===Xe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(vg(t,s,n),zg(t,M()),t.callbackNode!=null&&t.callbackNode===a?Fg.bind(null,t):null)}function Bg(t,n){if(Wl())return null;vg(t,n,!0)}function Jx(){uS(function(){(Ue&6)!==0?Me(ht,Qx):Pg()})}function Af(){if(Ba===0){var t=Yr;t===0&&(t=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Ba=t}return Ba}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function Hg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function $x(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ig((c[_n]||null).action),g=s.submitter;g&&(n=(n=g[_n]||null)?Ig(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new rl("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var I=g?Hg(c,g):new FormData(c);Wu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(b.preventDefault(),I=g?Hg(c,g):new FormData(c),Wu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],tS=Cf.toLowerCase(),eS=Cf[0].toUpperCase()+Cf.slice(1);xi(tS,"on"+eS)}xi(_p,"onAnimationEnd"),xi(vp,"onAnimationIteration"),xi(xp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(_x,"onTransitionRun"),xi(vx,"onTransitionStart"),xi(xx,"onTransitionCancel"),xi(Sp,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],I=b.instance,Q=b.currentTarget;if(b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(ft){ll(ft)}c.currentTarget=null,f=I}else for(g=0;g<s.length;g++){if(b=s[g],I=b.instance,Q=b.currentTarget,b=b.listener,I!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=Q;try{f(c)}catch(ft){ll(ft)}c.currentTarget=null,f=I}}}}function me(t,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var s=t+"__bubble";a.has(s)||(Vg(n,t,2,!1),a.add(s))}function wf(t,n,a){var s=0;n&&(s|=4),Vg(a,t,s,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Df(t){if(!t[jl]){t[jl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||wf(a,!1,t),wf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,wf("selectionchange",!1,n))}}function Vg(t,n,a,s){switch(_0(n)){case 2:var c=DS;break;case 8:c=US;break;default:c=Wf}a=c.bind(null,n,a,t),c=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Uf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=xa(b),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=f=g;continue t}b=b.parentNode}}s=s.return}Yd(function(){var Q=f,ft=Yc(a),mt=[];t:{var tt=Mp.get(t);if(tt!==void 0){var ot=rl,Vt=t;switch(t){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":ot=Zv;break;case"focusin":Vt="focus",ot=$c;break;case"focusout":Vt="blur",ot=$c;break;case"beforeblur":case"afterblur":ot=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Jv;break;case _p:case vp:case xp:ot=Hv;break;case Sp:ot=tx;break;case"scroll":case"scrollend":ot=Pv;break;case"wheel":ot=nx;break;case"copy":case"cut":case"paste":ot=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Jd;break;case"toggle":case"beforetoggle":ot=ax}var te=(n&4)!==0,Ve=!te&&(t==="scroll"||t==="scrollend"),j=te?tt!==null?tt+"Capture":null:tt;te=[];for(var X=Q,K;X!==null;){var pt=X;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||j===null||(pt=Xs(X,j),pt!=null&&te.push(Eo(X,pt,K))),Ve)break;X=X.return}0<te.length&&(tt=new ot(tt,Vt,null,a,ft),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",tt&&a!==qc&&(Vt=a.relatedTarget||a.fromElement)&&(xa(Vt)||Vt[_i]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=Q,Vt=Vt?xa(Vt):null,Vt!==null&&(Ve=u(Vt),te=Vt.tag,Vt!==Ve||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=Q),ot!==Vt)){if(te=Kd,pt="onMouseLeave",j="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(te=Jd,pt="onPointerLeave",j="onPointerEnter",X="pointer"),Ve=ot==null?tt:er(ot),K=Vt==null?tt:er(Vt),tt=new te(pt,X+"leave",ot,a,ft),tt.target=Ve,tt.relatedTarget=K,pt=null,xa(ft)===Q&&(te=new te(j,X+"enter",Vt,a,ft),te.target=K,te.relatedTarget=Ve,pt=te),Ve=pt,ot&&Vt)e:{for(te=iS,j=ot,X=Vt,K=0,pt=j;pt;pt=te(pt))K++;pt=0;for(var Qt=X;Qt;Qt=te(Qt))pt++;for(;0<K-pt;)j=te(j),K--;for(;0<pt-K;)X=te(X),pt--;for(;K--;){if(j===X||X!==null&&j===X.alternate){te=j;break e}j=te(j),X=te(X)}te=null}else te=null;ot!==null&&Xg(mt,tt,ot,te,!1),Vt!==null&&Ve!==null&&Xg(mt,Ve,Vt,te,!0)}}t:{if(tt=Q?er(Q):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Te=sp;else if(ap(tt))if(op)Te=px;else{Te=hx;var jt=fx}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&vi(Q.elementType)&&(Te=sp):Te=dx;if(Te&&(Te=Te(t,Q))){rp(mt,Te,a,ft);break t}jt&&jt(t,tt,Q),t==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&xn(tt,"number",tt.value)}switch(jt=Q?er(Q):window,t){case"focusin":(ap(jt)||jt.contentEditable==="true")&&(Ir=jt,ru=Q,Qs=null);break;case"focusout":Qs=ru=Ir=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,mp(mt,a,ft);break;case"selectionchange":if(gx)break;case"keydown":case"keyup":mp(mt,a,ft)}var ce;if(eu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Br?np(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&($d&&a.locale!=="ko"&&(Br||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Br&&(ce=jd()):(ya=ft,Kc="value"in ya?ya.value:ya.textContent,Br=!0)),jt=Zl(Q,ve),0<jt.length&&(ve=new Qd(ve,t,null,a,ft),mt.push({event:ve,listeners:jt}),ce?ve.data=ce:(ce=ip(a),ce!==null&&(ve.data=ce)))),(ce=sx?ox(t,a):lx(t,a))&&(ve=Zl(Q,"onBeforeInput"),0<ve.length&&(jt=new Qd("onBeforeInput","beforeinput",null,a,ft),mt.push({event:jt,listeners:ve}),jt.data=ce)),$x(mt,t,Q,a,ft)}Gg(mt,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xs(t,a),c!=null&&s.unshift(Eo(t,c,f)),c=Xs(t,n),c!=null&&s.push(Eo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function iS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Xg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,I=b.alternate,Q=b.stateNode;if(b=b.tag,I!==null&&I===s)break;b!==5&&b!==26&&b!==27||Q===null||(I=Q,c?(Q=Xs(a,f),Q!=null&&g.unshift(Eo(a,Q,I))):c||(Q=Xs(a,f),Q!=null&&g.push(Eo(a,Q,I)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var aS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(rS,"")}function Wg(t,n){return n=kg(n),kg(t)===n}function Ge(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(t,""+s);break;case"className":Jt(t,"class",s);break;case"tabIndex":Jt(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,s);break;case"style":Pr(t,s,f);break;case"data":if(n!=="object"){Jt(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=el(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",c.name,c,null),Ge(t,n,"formEncType",c.formEncType,c,null),Ge(t,n,"formMethod",c.formMethod,c,null),Ge(t,n,"formTarget",c.formTarget,c,null)):(Ge(t,n,"encType",c.encType,c,null),Ge(t,n,"method",c.method,c,null),Ge(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=el(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=el(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Wt(t,"popover",s);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Wt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nv.get(a)||a,Wt(t,a,s))}}function Lf(t,n,a,s,c,f){switch(a){case"style":Pr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?fn(t,s):(typeof s=="number"||typeof s=="bigint")&&fn(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Wt(t,a,s)}}}function An(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,f,g,a,null)}}c&&Ge(t,n,"srcSet",a.srcSet,a,null),s&&Ge(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=g=c=null,I=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":g=ft;break;case"checked":I=ft;break;case"defaultChecked":Q=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ge(t,n,s,ft,a,null)}}ki(t,f,b,I,Q,g,c,!1);return;case"select":me("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:Ge(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?ii(t,!!s,n,!1):a!=null&&ii(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ge(t,n,g,b,a,null)}Sn(t,s,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(s=a[I],s!=null)&&(I==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Ge(t,n,I,s,a,null));return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<yo.length;s++)me(yo[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(t,n,Q,s,a,null)}return;default:if(vi(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Lf(t,n,ft,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ge(t,n,b,s,a,null))}function sS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,I=null,Q=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=mt;default:s.hasOwnProperty(ot)||Ge(t,n,ot,null,s,mt)}}for(var tt in s){var ot=s[tt];if(mt=a[tt],s.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":c=ot;break;case"checked":Q=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==mt&&Ge(t,n,tt,ot,s,mt)}}vn(t,g,b,I,Q,ft,f,c);return;case"select":ot=g=b=tt=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ot=I;default:s.hasOwnProperty(f)||Ge(t,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":tt=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==I&&Ge(t,n,c,f,s,I)}n=b,a=g,s=ot,tt!=null?ii(t,!!a,tt,!1):!!s!=!!a&&(n!=null?ii(t,!!a,n,!0):ii(t,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ge(t,n,b,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":tt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(t,n,g,c,s,f)}ze(t,tt,ot);return;case"option":for(var Vt in a)tt=a[Vt],a.hasOwnProperty(Vt)&&tt!=null&&!s.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:Ge(t,n,Vt,null,s,tt));for(I in s)tt=s[I],ot=a[I],s.hasOwnProperty(I)&&tt!==ot&&(tt!=null||ot!=null)&&(I==="selected"?t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ge(t,n,I,tt,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!s.hasOwnProperty(te)&&Ge(t,n,te,null,s,tt);for(Q in s)if(tt=s[Q],ot=a[Q],s.hasOwnProperty(Q)&&tt!==ot&&(tt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Ge(t,n,Q,tt,s,ot)}return;default:if(vi(n)){for(var Ve in a)tt=a[Ve],a.hasOwnProperty(Ve)&&tt!==void 0&&!s.hasOwnProperty(Ve)&&Lf(t,n,Ve,void 0,s,tt);for(ft in s)tt=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Lf(t,n,ft,tt,s,ot);return}}for(var j in a)tt=a[j],a.hasOwnProperty(j)&&tt!=null&&!s.hasOwnProperty(j)&&Ge(t,n,j,null,s,tt);for(mt in s)tt=s[mt],ot=a[mt],!s.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ge(t,n,mt,tt,s,ot)}function qg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&qg(g)){for(g=0,b=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],Q=I.startTime;if(Q>b)break;var ft=I.transferSize,mt=I.initiatorType;ft&&qg(mt)&&(I=I.responseEnd,g+=ft*(I<b?1:(b-Q)/(I-Q)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Nf=null,Of=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function Yg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Pf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function lS(){var t=window.event;return t&&t.type==="popstate"?t===zf?!1:(zf=t,!0):(zf=null,!1)}var Zg=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(fS)}:Zg;function fS(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function Qg(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),hs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[tr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(t.ownerDocument.body);a=c}while(a);hs(n)}function Jg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hS(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[tr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function dS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function $g(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ui(t.nextSibling),t===null))return null;return t}function Bf(t){return t.data==="$?"||t.data==="$~"}function If(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Hf=null;function t0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function e0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function n0(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Vs(t)}var fi=new Map,i0=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=H.d;H.d={f:mS,r:gS,D:_S,C:vS,L:xS,m:SS,X:yS,S:MS,M:ES};function mS(){var t=oa.f(),n=Vl();return t||n}function gS(t){var n=Sa(t);n!==null&&n.tag===5&&n.type==="form"?Sm(n):oa.r(t)}var cs=typeof document>"u"?null:document;function a0(t,n,a){var s=cs;if(s&&typeof n=="string"&&n){var c=ie(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),i0.has(c)||(i0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),An(n,"link",t),T(n),s.head.appendChild(n)))}}function _S(t){oa.D(t),a0("dns-prefetch",t,null)}function vS(t,n){oa.C(t,n),a0("preconnect",t,n)}function xS(t,n,a){oa.L(t,n,a);var s=cs;if(s&&t&&n){var c='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ie(a.imageSizes)+'"]')):c+='[href="'+ie(t)+'"]';var f=c;switch(n){case"style":f=us(t);break;case"script":f=fs(t)}fi.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(Ao(f))||(n=s.createElement("link"),An(n,"link",t),T(n),s.head.appendChild(n)))}}function SS(t,n){oa.m(t,n);var a=cs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(t)}if(!fi.has(f)&&(t=_({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}s=a.createElement("link"),An(s,"link",t),T(s),a.head.appendChild(s)}}}function MS(t,n,a){oa.S(t,n,a);var s=cs;if(s&&t){var c=Ma(s).hoistableStyles,f=us(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(To(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Gf(t,a);var I=g=s.createElement("link");T(I),An(I,"link",t),I._p=new Promise(function(Q,ft){I.onload=Q,I.onerror=ft}),I.addEventListener("load",function(){b.loading|=1}),I.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function yS(t,n){oa.X(t,n);var a=cs;if(a&&t){var s=Ma(a).hoistableScripts,c=fs(t),f=s.get(c);f||(f=a.querySelector(Ao(c)),f||(t=_({src:t,async:!0},n),(n=fi.get(c))&&Vf(t,n),f=a.createElement("script"),T(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ES(t,n){oa.M(t,n);var a=cs;if(a&&t){var s=Ma(a).hoistableScripts,c=fs(t),f=s.get(c);f||(f=a.querySelector(Ao(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&Vf(t,n),f=a.createElement("script"),T(f),An(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function r0(t,n,a,s){var c=(c=nt.current)?Ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=Ma(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=us(a.href);var f=Ma(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(To(t)))&&!f._p&&(g.instance=f,g.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||bS(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=Ma(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function us(t){return'href="'+ie(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function s0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function bS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),An(n,"link",a),T(n),t.head.appendChild(n))}function fs(t){return'[src="'+ie(t)+'"]'}function Ao(t){return"script[async]"+t}function o0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,T(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),T(s),An(s,"style",c),Jl(s,a.precedence,t),n.instance=s;case"stylesheet":c=us(a.href);var f=t.querySelector(To(c));if(f)return n.state.loading|=4,n.instance=f,T(f),f;s=s0(a),(c=fi.get(c))&&Gf(s,c),f=(t.ownerDocument||t).createElement("link"),T(f);var g=f;return g._p=new Promise(function(b,I){g.onload=b,g.onerror=I}),An(f,"link",s),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=fs(a.src),(c=t.querySelector(Ao(f)))?(n.instance=c,T(c),c):(s=a,(c=fi.get(f))&&(s=_({},a),Vf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),T(c),An(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Jl(s,a.precedence,t));return n.instance}function Jl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Vf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function l0(t,n,a){if($l===null){var s=new Map,c=$l=new Map;c.set(a,s)}else c=$l,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[tr]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function c0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function TS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function AS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(s.href),f=n.querySelector(To(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,T(f);return}f=n.ownerDocument||n,s=s0(s),(c=fi.get(c))&&Gf(s,c),f=f.createElement("link"),T(f);var g=f;g._p=new Promise(function(b,I){g.onload=b,g.onerror=I}),An(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Xf=0;function RS(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Xf===0&&(Xf=62500*oS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Xf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(CS,t),ec=null,tc.call(t))}function CS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var s=a.get(null);else{a=new Map,ec.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=tc.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ro={$$typeof:L,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function wS(t,n,a,s,c,f,g,b,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function f0(t,n,a,s,c,f,g,b,I,Q,ft,mt){return t=new wS(t,n,a,g,I,Q,ft,mt,b),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),t.current=f,f.stateNode=t,n=Mu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Tu(f),t}function h0(t){return t?(t=Vr,t):Vr}function d0(t,n,a,s,c,f){c=h0(c),s.context===null?s.context=c:s.pendingContext=c,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(t,s,n),a!==null&&(Xn(a,t,n),ao(a,t,n))}function p0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function kf(t,n){p0(t,n),(t=t.alternate)&&p0(t,n)}function m0(t){if(t.tag===13||t.tag===31){var n=rr(t,67108864);n!==null&&Xn(n,t,67108864),kf(t,67108864)}}function g0(t){if(t.tag===13||t.tag===31){var n=Jn();n=Is(n);var a=rr(t,n);a!==null&&Xn(a,t,n),kf(t,n)}}var ic=!0;function DS(t,n,a,s){var c=z.T;z.T=null;var f=H.p;try{H.p=2,Wf(t,n,a,s)}finally{H.p=f,z.T=c}}function US(t,n,a,s){var c=z.T;z.T=null;var f=H.p;try{H.p=8,Wf(t,n,a,s)}finally{H.p=f,z.T=c}}function Wf(t,n,a,s){if(ic){var c=qf(s);if(c===null)Uf(t,n,s,ac,a),v0(t,s);else if(NS(c,t,n,a,s))s.stopPropagation();else if(v0(t,s),n&4&&-1<LS.indexOf(t)){for(;c!==null;){var f=Sa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var I=1<<31-Pt(g);b.entanglements[1]|=I,g&=~I}Li(f),(Ue&6)===0&&(Hl=M()+500,Mo(0))}}break;case 31:case 13:b=rr(f,2),b!==null&&Xn(b,f,2),Vl(),kf(f,2)}if(f=qf(s),f===null&&Uf(t,n,s,ac,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Uf(t,n,s,null,a)}}function qf(t){return t=Yc(t),Yf(t)}var ac=null;function Yf(t){if(ac=null,t=xa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function _0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ht:return 2;case vt:return 8;case lt:case Zt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var jf=!1,Ha=null,Ga=null,Va=null,Co=new Map,wo=new Map,Xa=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Sa(n),n!==null&&m0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function NS(t,n,a,s,c){switch(n){case"focusin":return Ha=Do(Ha,t,n,a,s,c),!0;case"dragenter":return Ga=Do(Ga,t,n,a,s,c),!0;case"mouseover":return Va=Do(Va,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Co.set(f,Do(Co.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Do(wo.get(f)||null,t,n,a,s,c)),!0}return!1}function x0(t){var n=xa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){g0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ci(t.priority,function(){g0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);qc=s,a.target.dispatchEvent(s),qc=null}else return n=Sa(a),n!==null&&m0(n),t.blockedOn=a,!1;n.shift()}return!0}function S0(t,n,a){rc(t)&&a.delete(n)}function OS(){jf=!1,Ha!==null&&rc(Ha)&&(Ha=null),Ga!==null&&rc(Ga)&&(Ga=null),Va!==null&&rc(Va)&&(Va=null),Co.forEach(S0),wo.forEach(S0)}function sc(t,n){t.blockedOn===n&&(t.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,OS)))}var oc=null;function M0(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Yf(s||a)===null)continue;break}var f=Sa(a);f!==null&&(t.splice(n,3),n-=3,Wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function hs(t){function n(I){return sc(I,t)}Ha!==null&&sc(Ha,t),Ga!==null&&sc(Ga,t),Va!==null&&sc(Va,t),Co.forEach(n),wo.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)x0(a),a.blockedOn===null&&Xa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[_n]||null;if(typeof f=="function")g||M0(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[_n]||null)b=g.formAction;else if(Yf(c)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),M0(a)}}}function y0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Zf(t){this._internalRoot=t}lc.prototype.render=Zf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();d0(a,s,t,n,null,null)},lc.prototype.unmount=Zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;d0(t.current,2,null,t,null,null),Vl(),n[_i]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,t),a===0&&x0(t)}};var E0=e.version;if(E0!=="19.2.3")throw Error(r(527,E0,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var PS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{yt=cc.inject(PS),Et=cc}catch{}}return Lo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Dm,f=Um,g=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=f0(t,1,!1,null,null,a,s,null,c,f,g,y0),t[_i]=n.current,Df(t),new Zf(n)},Lo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Dm,g=Um,b=Lm,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=f0(t,1,!0,n,a??null,s,c,I,f,g,b,y0),n.context=h0(null),a=n.current,s=Jn(),s=Is(s),c=Ca(s),c.callback=null,wa(a,c,s),a=s,n.current.lanes=a,wn(n,a),Li(n),t[_i]=n.current,Df(t),new lc(n)},Lo.version="19.2.3",Lo}var N0;function qS(){if(N0)return Jf.exports;N0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=WS(),Jf.exports}var YS=qS();const jS="_navbar_hd0so_1",ZS="_social_hd0so_18",O0={navbar:jS,social:ZS};var F_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},P0=wr.createContext&&wr.createContext(F_),KS=["attr","size","title"];function QS(o,e){if(o==null)return{};var i=JS(o,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(o,r)&&(i[r]=o[r])}return i}function JS(o,e){if(o==null)return{};var i={};for(var r in o)if(Object.prototype.hasOwnProperty.call(o,r)){if(e.indexOf(r)>=0)continue;i[r]=o[r]}return i}function Fc(){return Fc=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(o[r]=i[r])}return o},Fc.apply(this,arguments)}function z0(o,e){var i=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(o,l).enumerable})),i.push.apply(i,r)}return i}function Bc(o){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?z0(Object(i),!0).forEach(function(r){$S(o,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):z0(Object(i)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(i,r))})}return o}function $S(o,e,i){return e=tM(e),e in o?Object.defineProperty(o,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[e]=i,o}function tM(o){var e=eM(o,"string");return typeof e=="symbol"?e:e+""}function eM(o,e){if(typeof o!="object"||!o)return o;var i=o[Symbol.toPrimitive];if(i!==void 0){var r=i.call(o,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function B_(o){return o&&o.map((e,i)=>wr.createElement(e.tag,Bc({key:i},e.attr),B_(e.child)))}function Yo(o){return e=>wr.createElement(nM,Fc({attr:Bc({},o.attr)},e),B_(o.child))}function nM(o){var e=i=>{var{attr:r,size:l,title:u}=o,h=QS(o,KS),d=l||i.size||"1em",m;return i.className&&(m=i.className),o.className&&(m=(m?m+" ":"")+o.className),wr.createElement("svg",Fc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Bc(Bc({color:o.color||i.color},i.style),o.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&wr.createElement("title",null,u),o.children)};return P0!==void 0?wr.createElement(P0.Consumer,null,i=>e(i)):e(F_)}function I_(o){return Yo({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(o)}function H_(o){return Yo({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(o)}function G_(o){return Yo({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(o)}function V_(o){return Yo({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"},child:[]}]})(o)}function X_(o){return Yo({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(o)}const iM=()=>Rt.jsxs("nav",{className:O0.navbar,children:[Rt.jsxs("div",{className:O0.social,children:[Rt.jsx("a",{href:"https://github.com/RahniDev",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",children:Rt.jsx(I_,{size:20})}),Rt.jsx("a",{href:"https://x.com/rahnidev",target:"_blank",rel:"noopener noreferrer","aria-label":"X",children:Rt.jsx(X_,{size:20})}),Rt.jsx("a",{href:"https://www.linkedin.com/in/rahni-developer",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin",children:Rt.jsx(G_,{size:20})}),Rt.jsx("a",{href:"https://instagram.com/rahni.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:Rt.jsx(H_,{size:20})}),Rt.jsx("a",{href:"https://t.me/RahniDev",target:"_blank",rel:"noopener noreferrer","aria-label":"Telegram",children:Rt.jsx(V_,{size:20})})]}),Rt.jsxs("ul",{children:[Rt.jsx("li",{children:Rt.jsx("a",{href:"#about",children:"About"})}),Rt.jsx("li",{children:Rt.jsx("a",{href:"#projects",children:"Projects"})}),Rt.jsx("li",{children:Rt.jsx("a",{href:"#contact",children:"Contact"})})]})]}),aM="_hero_1dpg4_1",rM="_heroText_1dpg4_42",F0={hero:aM,heroText:rM};const Dd="182",sM=0,B0=1,oM=2,Uc=1,lM=2,Ho=3,$a=0,Wn=1,da=2,ma=0,Cs=1,I0=2,H0=3,G0=4,cM=5,Tr=100,uM=101,fM=102,hM=103,dM=104,pM=200,mM=201,gM=202,_M=203,Ph=204,zh=205,vM=206,xM=207,SM=208,MM=209,yM=210,EM=211,bM=212,TM=213,AM=214,Fh=0,Bh=1,Ih=2,Ds=3,Hh=4,Gh=5,Vh=6,Xh=7,k_=0,RM=1,CM=2,Fi=0,W_=1,q_=2,Y_=3,j_=4,Z_=5,K_=6,Q_=7,J_=300,Dr=301,Us=302,kh=303,Wh=304,Vc=306,qh=1e3,pa=1001,Yh=1002,Cn=1003,wM=1004,uc=1005,Nn=1006,nh=1007,Rr=1008,ei=1009,$_=1010,tv=1011,Xo=1012,Ud=1013,Hi=1014,Pi=1015,_a=1016,Ld=1017,Nd=1018,ko=1020,ev=35902,nv=35899,iv=1021,av=1022,Ai=1023,va=1026,Cr=1027,rv=1028,Od=1029,Ls=1030,Pd=1031,zd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,jh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,td=37496,ed=37488,nd=37489,id=37490,ad=37491,rd=37808,sd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,xd=36492,Sd=36494,Md=36495,yd=36283,Ed=36284,bd=36285,Td=36286,DM=3200,sv=0,UM=1,Qa="",di="srgb",Ns="srgb-linear",Ic="linear",Ie="srgb",ds=7680,V0=519,LM=512,NM=513,OM=514,Fd=515,PM=516,zM=517,Bd=518,FM=519,X0=35044,k0="300 es",zi=2e3,Hc=2001;function ov(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function BM(){const o=Gc("canvas");return o.style.display="block",o}const W0={};function q0(...o){const e="THREE."+o.shift();console.log(e,...o)}function re(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Re(...o){const e="THREE."+o.shift();console.error(e,...o)}function Wo(...o){const e=o.join(" ");e in W0||(W0[e]=!0,re(...o))}function IM(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ps{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Ad=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function HM(o,e){return(o%e+e)%e}function ah(o,e,i){return(1-i)*o+i*e}function No(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,i=0){ye.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3],S=u[h+0],E=u[h+1],R=u[h+2],C=u[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(d>=1){e[i+0]=S,e[i+1]=E,e[i+2]=R,e[i+3]=C;return}if(_!==C||m!==S||p!==E||v!==R){let y=m*S+p*E+v*R+_*C;y<0&&(S=-S,E=-E,R=-R,C=-C,y=-y);let x=1-d;if(y<.9995){const D=Math.acos(y),L=Math.sin(D);x=Math.sin(x*D)/L,d=Math.sin(d*D)/L,m=m*x+S*d,p=p*x+E*d,v=v*x+R*d,_=_*x+C*d}else{m=m*x+S*d,p=p*x+E*d,v=v*x+R*d,_=_*x+C*d;const D=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=D,p*=D,v*=D,_*=D}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[h],S=u[h+1],E=u[h+2],R=u[h+3];return e[i]=d*R+v*_+m*E-p*S,e[i+1]=m*R+v*S+p*_-d*E,e[i+2]=p*R+v*E+d*S-m*_,e[i+3]=v*R-d*_-m*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),_=d(u/2),S=m(r/2),E=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=S*v*_+p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_-S*E*R;break;case"YXZ":this._x=S*v*_+p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_+S*E*R;break;case"ZXY":this._x=S*v*_-p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_-S*E*R;break;case"ZYX":this._x=S*v*_-p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_+S*E*R;break;case"YZX":this._x=S*v*_+p*E*R,this._y=p*E*_+S*v*R,this._z=p*v*R-S*E*_,this._w=p*v*_-S*E*R;break;case"XZY":this._x=S*v*_-p*E*R,this._y=p*E*_-S*v*R,this._z=p*v*R+S*E*_,this._w=p*v*_+S*E*R;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=r+d+_;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(r>d&&r>_){const E=2*Math.sqrt(1+r-d-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>_){const E=2*Math.sqrt(1+d-r-_);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-r-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-r*p,this._z=u*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Y0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-u*l),_=2*(u*r-h*i);return this.x=i+m*p+h*_-d*v,this.y=r+m*v+d*p-u*_,this.z=l+m*_+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new J,Y0=new Zo;class ue{constructor(e,i,r,l,u,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],_=r[7],S=r[2],E=r[5],R=r[8],C=l[0],y=l[3],x=l[6],D=l[1],L=l[4],U=l[7],F=l[2],B=l[5],P=l[8];return u[0]=h*C+d*D+m*F,u[3]=h*y+d*L+m*B,u[6]=h*x+d*U+m*P,u[1]=p*C+v*D+_*F,u[4]=p*y+v*L+_*B,u[7]=p*x+v*U+_*P,u[2]=S*C+E*D+R*F,u[5]=S*y+E*L+R*B,u[8]=S*x+E*U+R*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*u*v+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=v*h-d*p,S=d*m-v*u,E=p*u-h*m,R=i*_+r*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=_*C,e[1]=(l*p-v*r)*C,e[2]=(d*r-l*h)*C,e[3]=S*C,e[4]=(v*i-l*m)*C,e[5]=(l*u-d*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(sh.makeScale(e,i)),this}rotate(e){return this.premultiply(sh.makeRotation(-e)),this}translate(e,i){return this.premultiply(sh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sh=new ue,j0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GM(){const o={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ie&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ns]:{primaries:e,whitePoint:r,transfer:Ic,toXYZ:j0,fromXYZ:Z0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:Ie,toXYZ:j0,fromXYZ:Z0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const be=GM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class VM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ps===void 0&&(ps=Gc("canvas")),ps.width=e.width,ps.height=e.height;const l=ps.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Gc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ga(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XM=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(oh(l[h].image)):u.push(oh(l[h]))}else u=oh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let kM=0;const lh=new J;class Fn extends Ps{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=pa,l=pa,u=Nn,h=Rr,d=Ai,m=ei,p=Fn.DEFAULT_ANISOTROPY,v=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=jo(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=J_;Fn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],_=m[8],S=m[1],E=m[5],R=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(E+1)/2,F=(x+1)/2,B=(v+S)/4,P=(_+C)/4,q=(R+y)/4;return L>U&&L>F?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=B/r,u=P/r):U>F?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=B/l,u=q/l):F<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),r=P/u,l=q/u),this.set(r,l,u,i),this}let D=Math.sqrt((y-R)*(y-R)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(D)<.001&&(D=1),this.x=(y-R)/D,this.y=(_-C)/D,this.z=(S-v)/D,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WM extends Ps{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Fn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Id(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends WM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class lv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qM extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(yi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,yi):yi.fromBufferAttribute(u,h),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),hc.subVectors(this.max,Oo),ms.subVectors(e.a,Oo),gs.subVectors(e.b,Oo),_s.subVectors(e.c,Oo),Wa.subVectors(gs,ms),qa.subVectors(_s,gs),vr.subVectors(ms,_s);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-vr.z,vr.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,vr.z,0,-vr.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-vr.y,vr.x,0];return!ch(i,ms,gs,_s,hc)||(i=[1,0,0,0,1,0,0,0,1],!ch(i,ms,gs,_s,hc))?!1:(dc.crossVectors(Wa,qa),i=[dc.x,dc.y,dc.z],ch(i,ms,gs,_s,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new J,new J,new J,new J,new J,new J,new J,new J],yi=new J,fc=new Ko,ms=new J,gs=new J,_s=new J,Wa=new J,qa=new J,vr=new J,Oo=new J,hc=new J,dc=new J,xr=new J;function ch(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){xr.fromArray(o,u);const d=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=i.dot(xr),v=r.dot(xr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const YM=new Ko,Po=new J,uh=new J;class Hd{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):YM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(uh)),this.expandByPoint(Po.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new J,fh=new J,pc=new J,Ya=new J,hh=new J,mc=new J,dh=new J;class jM{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){fh.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),Ya.copy(this.origin).sub(fh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(pc),d=Ya.dot(this.direction),m=-Ya.dot(pc),p=Ya.lengthSq(),v=Math.abs(1-h*h);let _,S,E,R;if(v>0)if(_=h*m-d,S=h*d-m,R=u*v,_>=0)if(S>=-R)if(S<=R){const C=1/v;_*=C,S*=C,E=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;else S<=-R?(_=Math.max(0,-(-h*u+d)),S=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p):S<=R?(_=0,S=Math.min(Math.max(-u,-m),u),E=S*(S+2*m)+p):(_=Math.max(0,-(h*u+d)),S=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+S*(S+2*m)+p);else S=h>0?-u:u,_=Math.max(0,-(h*S+d)),E=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(fh).addScaledVector(pc,S),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,u){hh.subVectors(i,e),mc.subVectors(r,e),dh.crossVectors(hh,mc);let h=this.direction.dot(dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ya.subVectors(this.origin,e);const m=d*this.direction.dot(mc.crossVectors(Ya,mc));if(m<0)return null;const p=d*this.direction.dot(hh.cross(Ya));if(p<0||m+p>h)return null;const v=-d*Ya.dot(dh);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,u,h,d,m,p,v,_,S,E,R,C,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,v,_,S,E,R,C,y)}set(e,i,r,l,u,h,d,m,p,v,_,S,E,R,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=E,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/vs.setFromMatrixColumn(e,0).length(),u=1/vs.setFromMatrixColumn(e,1).length(),h=1/vs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=h*v,E=h*_,R=d*v,C=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+R*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=R+E*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,E=m*_,R=p*v,C=p*_;i[0]=S+C*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=E*d-R,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,E=m*_,R=p*v,C=p*_;i[0]=S-C*d,i[4]=-h*_,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*v,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,E=h*_,R=d*v,C=d*_;i[0]=m*v,i[4]=R*p-E,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,E=h*p,R=d*m,C=d*p;i[0]=m*v,i[4]=C-S*_,i[8]=R*_+E,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=E*_+R,i[10]=S-C*_}else if(e.order==="XZY"){const S=h*m,E=h*p,R=d*m,C=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+C,i[5]=h*v,i[9]=E*_-R,i[2]=R*_-E,i[6]=d*v,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,KM)}lookAt(e,i,r){const l=this.elements;return $n.subVectors(e,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ja.crossVectors(r,$n),ja.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ja.crossVectors(r,$n)),ja.normalize(),gc.crossVectors($n,ja),l[0]=ja.x,l[4]=gc.x,l[8]=$n.x,l[1]=ja.y,l[5]=gc.y,l[9]=$n.y,l[2]=ja.z,l[6]=gc.z,l[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],_=r[5],S=r[9],E=r[13],R=r[2],C=r[6],y=r[10],x=r[14],D=r[3],L=r[7],U=r[11],F=r[15],B=l[0],P=l[4],q=l[8],A=l[12],w=l[1],V=l[5],et=l[9],rt=l[13],dt=l[2],ut=l[6],z=l[10],H=l[14],at=l[3],Mt=l[7],xt=l[11],O=l[15];return u[0]=h*B+d*w+m*dt+p*at,u[4]=h*P+d*V+m*ut+p*Mt,u[8]=h*q+d*et+m*z+p*xt,u[12]=h*A+d*rt+m*H+p*O,u[1]=v*B+_*w+S*dt+E*at,u[5]=v*P+_*V+S*ut+E*Mt,u[9]=v*q+_*et+S*z+E*xt,u[13]=v*A+_*rt+S*H+E*O,u[2]=R*B+C*w+y*dt+x*at,u[6]=R*P+C*V+y*ut+x*Mt,u[10]=R*q+C*et+y*z+x*xt,u[14]=R*A+C*rt+y*H+x*O,u[3]=D*B+L*w+U*dt+F*at,u[7]=D*P+L*V+U*ut+F*Mt,u[11]=D*q+L*et+U*z+F*xt,u[15]=D*A+L*rt+U*H+F*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],_=e[6],S=e[10],E=e[14],R=e[3],C=e[7],y=e[11],x=e[15],D=m*E-p*S,L=d*E-p*_,U=d*S-m*_,F=h*E-p*v,B=h*S-m*v,P=h*_-d*v;return i*(C*D-y*L+x*U)-r*(R*D-y*F+x*B)+l*(R*L-C*F+x*P)-u*(R*U-C*B+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],_=e[9],S=e[10],E=e[11],R=e[12],C=e[13],y=e[14],x=e[15],D=_*y*p-C*S*p+C*m*E-d*y*E-_*m*x+d*S*x,L=R*S*p-v*y*p-R*m*E+h*y*E+v*m*x-h*S*x,U=v*C*p-R*_*p+R*d*E-h*C*E-v*d*x+h*_*x,F=R*_*m-v*C*m-R*d*S+h*C*S+v*d*y-h*_*y,B=i*D+r*L+l*U+u*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return e[0]=D*P,e[1]=(C*S*u-_*y*u-C*l*E+r*y*E+_*l*x-r*S*x)*P,e[2]=(d*y*u-C*m*u+C*l*p-r*y*p-d*l*x+r*m*x)*P,e[3]=(_*m*u-d*S*u-_*l*p+r*S*p+d*l*E-r*m*E)*P,e[4]=L*P,e[5]=(v*y*u-R*S*u+R*l*E-i*y*E-v*l*x+i*S*x)*P,e[6]=(R*m*u-h*y*u-R*l*p+i*y*p+h*l*x-i*m*x)*P,e[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*E+i*m*E)*P,e[8]=U*P,e[9]=(R*_*u-v*C*u-R*r*E+i*C*E+v*r*x-i*_*x)*P,e[10]=(h*C*u-R*d*u+R*r*p-i*C*p-h*r*x+i*d*x)*P,e[11]=(v*d*u-h*_*u-v*r*p+i*_*p+h*r*E-i*d*E)*P,e[12]=F*P,e[13]=(v*C*l-R*_*l+R*r*S-i*C*S-v*r*y+i*_*y)*P,e[14]=(R*d*l-h*C*l-R*r*m+i*C*m+h*r*y-i*d*y)*P,e[15]=(h*_*l-v*d*l+v*r*m-i*_*m-h*r*S+i*d*S)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,_=d+d,S=u*p,E=u*v,R=u*_,C=h*v,y=h*_,x=d*_,D=m*p,L=m*v,U=m*_,F=r.x,B=r.y,P=r.z;return l[0]=(1-(C+x))*F,l[1]=(E+U)*F,l[2]=(R-L)*F,l[3]=0,l[4]=(E-U)*B,l[5]=(1-(S+x))*B,l[6]=(y+D)*B,l[7]=0,l[8]=(R+L)*P,l[9]=(y-D)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=vs.set(l[0],l[1],l[2]).length();const h=vs.set(l[4],l[5],l[6]).length(),d=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Ei.copy(this);const p=1/u,v=1/h,_=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=v,Ei.elements[5]*=v,Ei.elements[6]*=v,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=zi,m=!1){const p=this.elements,v=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),E=(r+l)/(r-l);let R,C;if(m)R=u/(h-u),C=h*u/(h-u);else if(d===zi)R=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(d===Hc)R=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=zi,m=!1){const p=this.elements,v=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),E=-(r+l)/(r-l);let R,C;if(m)R=1/(h-u),C=h/(h-u);else if(d===zi)R=-2/(h-u),C=-(h+u)/(h-u);else if(d===Hc)R=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const vs=new J,Ei=new en,ZM=new J(0,0,0),KM=new J(1,1,1),ja=new J,gc=new J,$n=new J,K0=new en,Q0=new Zo;class Gi{constructor(e=0,i=0,r=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return K0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Q0.setFromEuler(this),this.setFromQuaternion(Q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const J0=new J,xs=new Zo,ua=new en,_c=new J,zo=new J,JM=new J,$M=new Zo,$0=new J(1,0,0),t_=new J(0,1,0),e_=new J(0,0,1),n_={type:"added"},ty={type:"removed"},Ss={type:"childadded",child:null},ph={type:"childremoved",child:null};class On extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new J,i=new Gi,r=new Zo,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ue}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,i){return xs.setFromAxisAngle(e,i),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis($0,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(e_,e)}translateOnAxis(e,i){return J0.copy(e).applyQuaternion(this.quaternion),this.position.add(J0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($0,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(e_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_c.copy(e):_c.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(zo,_c,this.up):ua.lookAt(_c,zo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),xs.setFromRotationMatrix(ua),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n_),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ty),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n_),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,JM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,$M,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),_=h(e.shapes),S=h(e.skeletons),E=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}On.DEFAULT_UP=new J(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new J,fa=new J,mh=new J,ha=new J,Ms=new J,ys=new J,i_=new J,gh=new J,_h=new J,vh=new J,xh=new tn,Sh=new tn,Mh=new tn;class Ti{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){bi.subVectors(l,i),fa.subVectors(r,i),mh.subVectors(e,i);const h=bi.dot(bi),d=bi.dot(fa),m=bi.dot(mh),p=fa.dot(fa),v=fa.dot(mh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const S=1/_,E=(p*m-d*v)*S,R=(h*v-d*m)*S;return u.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(h,ha.y),m.addScaledVector(d,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return xh.setScalar(0),Sh.setScalar(0),Mh.setScalar(0),xh.fromBufferAttribute(e,i),Sh.fromBufferAttribute(e,r),Mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(xh,u.x),h.addScaledVector(Sh,u.y),h.addScaledVector(Mh,u.z),h}static isFrontFacing(e,i,r,l){return bi.subVectors(r,i),fa.subVectors(e,i),bi.cross(fa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),bi.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ti.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ti.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;Ms.subVectors(l,r),ys.subVectors(u,r),gh.subVectors(e,r);const m=Ms.dot(gh),p=ys.dot(gh);if(m<=0&&p<=0)return i.copy(r);_h.subVectors(e,l);const v=Ms.dot(_h),_=ys.dot(_h);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(Ms,h);vh.subVectors(e,u);const E=Ms.dot(vh),R=ys.dot(vh);if(R>=0&&E<=R)return i.copy(u);const C=E*p-m*R;if(C<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(ys,d);const y=v*R-E*_;if(y<=0&&_-v>=0&&E-R>=0)return i_.subVectors(u,l),d=(_-v)/(_-v+(E-R)),i.copy(l).addScaledVector(i_,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(r).addScaledVector(Ms,h).addScaledVector(ys,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},vc={h:0,s:0,l:0};function yh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Le{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=HM(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=yh(h,u,e+1/3),this.g=yh(h,u,e),this.b=yh(h,u,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const r=uv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return be.workingToColorSpace(Ln.copy(this),e),Math.round(Se(Ln.r*255,0,255))*65536+Math.round(Se(Ln.g*255,0,255))*256+Math.round(Se(Ln.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=di){be.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(vc);const r=ah(Za.h,vc.h,i),l=ah(Za.s,vc.s,i),u=ah(Za.l,vc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Le;Le.NAMES=uv;let ey=0;class Qo extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Cs,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=zh,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ph&&(r.blendSrc=this.blendSrc),this.blendDst!==zh&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fv extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=k_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new J,xc=new ye;let ny=0;class Ii{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ny++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=X0,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(e,i){return this.normalized&&(i=kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),u=kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==X0&&(e.usage=this.usage),e}}class hv extends Ii{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class dv extends Ii{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class mi extends Ii{constructor(e,i,r){super(new Float32Array(e),i,r)}}let iy=0;const hi=new en,Eh=new On,Es=new J,ti=new Ko,Fo=new Ko,gn=new J;class Xi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?dv:hv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ue().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,i,r){return hi.makeTranslation(e,i,r),this.applyMatrix4(hi),this}scale(e,i,r){return hi.makeScale(e,i,r),this.applyMatrix4(hi),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new mi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ti.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(ti.min,Fo.min),ti.expandByPoint(gn),gn.addVectors(ti.max,Fo.max),ti.expandByPoint(gn)):(ti.expandByPoint(Fo.min),ti.expandByPoint(Fo.max))}ti.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)gn.fromBufferAttribute(d,p),m&&(Es.fromBufferAttribute(e,p),gn.add(Es)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new J,m[q]=new J;const p=new J,v=new J,_=new J,S=new ye,E=new ye,R=new ye,C=new J,y=new J;function x(q,A,w){p.fromBufferAttribute(r,q),v.fromBufferAttribute(r,A),_.fromBufferAttribute(r,w),S.fromBufferAttribute(u,q),E.fromBufferAttribute(u,A),R.fromBufferAttribute(u,w),v.sub(p),_.sub(p),E.sub(S),R.sub(S);const V=1/(E.x*R.y-R.x*E.y);isFinite(V)&&(C.copy(v).multiplyScalar(R.y).addScaledVector(_,-E.y).multiplyScalar(V),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-R.x).multiplyScalar(V),d[q].add(C),d[A].add(C),d[w].add(C),m[q].add(y),m[A].add(y),m[w].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let q=0,A=D.length;q<A;++q){const w=D[q],V=w.start,et=w.count;for(let rt=V,dt=V+et;rt<dt;rt+=3)x(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const L=new J,U=new J,F=new J,B=new J;function P(q){F.fromBufferAttribute(l,q),B.copy(F);const A=d[q];L.copy(A),L.sub(F.multiplyScalar(F.dot(A))).normalize(),U.crossVectors(B,A);const V=U.dot(m[q])<0?-1:1;h.setXYZW(q,L.x,L.y,L.z,V)}for(let q=0,A=D.length;q<A;++q){const w=D[q],V=w.start,et=w.count;for(let rt=V,dt=V+et;rt<dt;rt+=3)P(e.getX(rt+0)),P(e.getX(rt+1)),P(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,E=r.count;S<E;S++)r.setXYZ(S,0,0,0);const l=new J,u=new J,h=new J,d=new J,m=new J,p=new J,v=new J,_=new J;if(e)for(let S=0,E=e.count;S<E;S+=3){const R=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),_.subVectors(l,u),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,_=d.normalized,S=new p.constructor(m.length*v);let E=0,R=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*v;for(let x=0;x<v;x++)S[R++]=p[E++]}return new Ii(S,v,_)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,_=p.length;v<_;v++){const S=p[v],E=e(S,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const E=p[_];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],_=u[p];for(let S=0,E=_.length;S<E;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a_=new en,Sr=new jM,Sc=new Hd,r_=new J,Mc=new J,yc=new J,Ec=new J,bh=new J,bc=new J,s_=new J,Tc=new J;class Ri extends On{constructor(e=new Xi,i=new fv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){bc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],_=u[m];v!==0&&(bh.fromBufferAttribute(_,e),h?bc.addScaledVector(bh,v):bc.addScaledVector(bh.sub(i),v))}i.add(bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sc.copy(r.boundingSphere),Sc.applyMatrix4(u),Sr.copy(e.ray).recast(e.near),!(Sc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Sc,r_)===null||Sr.origin.distanceToSquared(r_)>(e.far-e.near)**2))&&(a_.copy(u).invert(),Sr.copy(e.ray).applyMatrix4(a_),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Sr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,S=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],D=Math.max(y.start,E.start),L=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let U=D,F=L;U<F;U+=3){const B=d.getX(U),P=d.getX(U+1),q=d.getX(U+2);l=Ac(this,x,e,r,p,v,_,B,P,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const D=d.getX(y),L=d.getX(y+1),U=d.getX(y+2);l=Ac(this,h,e,r,p,v,_,D,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],D=Math.max(y.start,E.start),L=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let U=D,F=L;U<F;U+=3){const B=U,P=U+1,q=U+2;l=Ac(this,x,e,r,p,v,_,B,P,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=R,x=C;y<x;y+=3){const D=y,L=y+1,U=y+2;l=Ac(this,h,e,r,p,v,_,D,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ay(o,e,i,r,l,u,h,d){let m;if(e.side===Wn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===$a,d),m===null)return null;Tc.copy(d),Tc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:o}}function Ac(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,Mc),o.getVertexPosition(m,yc),o.getVertexPosition(p,Ec);const v=ay(o,e,i,r,Mc,yc,Ec,s_);if(v){const _=new J;Ti.getBarycoord(s_,Mc,yc,Ec,_),l&&(v.uv=Ti.getInterpolatedAttribute(l,d,m,p,_,new ye)),u&&(v.uv1=Ti.getInterpolatedAttribute(u,d,m,p,_,new ye)),h&&(v.normal=Ti.getInterpolatedAttribute(h,d,m,p,_,new J),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Ti.getNormal(Mc,yc,Ec,S.normal),v.face=S,v.barycoord=_}return v}class zs extends Xi{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],_=[];let S=0,E=0;R("z","y","x",-1,-1,r,i,e,h,u,0),R("z","y","x",1,-1,r,i,-e,h,u,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new mi(p,3)),this.setAttribute("normal",new mi(v,3)),this.setAttribute("uv",new mi(_,2));function R(C,y,x,D,L,U,F,B,P,q,A){const w=U/P,V=F/q,et=U/2,rt=F/2,dt=B/2,ut=P+1,z=q+1;let H=0,at=0;const Mt=new J;for(let xt=0;xt<z;xt++){const O=xt*V-rt;for(let it=0;it<ut;it++){const gt=it*w-et;Mt[C]=gt*D,Mt[y]=O*L,Mt[x]=dt,p.push(Mt.x,Mt.y,Mt.z),Mt[C]=0,Mt[y]=0,Mt[x]=B>0?1:-1,v.push(Mt.x,Mt.y,Mt.z),_.push(it/P),_.push(1-xt/q),H+=1}}for(let xt=0;xt<q;xt++)for(let O=0;O<P;O++){const it=S+O+ut*xt,gt=S+O+ut*(xt+1),Tt=S+(O+1)+ut*(xt+1),It=S+(O+1)+ut*xt;m.push(it,gt,It),m.push(gt,Tt,It),at+=6}d.addGroup(E,at,A),E+=at,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(o){const e={};for(let i=0;i<o.length;i++){const r=Os(o[i]);for(const l in r)e[l]=r[l]}return e}function ry(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function pv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const sy={clone:Os,merge:zn};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class mv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new J,o_=new ye,l_=new ye;class pi extends mv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,o_,l_),i.subVectors(l_,o_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ih*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class cy extends On{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(bs,Ts,e,i);l.layers=this.layers,this.add(l);const u=new pi(bs,Ts,e,i);u.layers=this.layers,this.add(u);const h=new pi(bs,Ts,e,i);h.layers=this.layers,this.add(h);const d=new pi(bs,Ts,e,i);d.layers=this.layers,this.add(d);const m=new pi(bs,Ts,e,i);m.layers=this.layers,this.add(m);const p=new pi(bs,Ts,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,S,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class gv extends Fn{constructor(e=[],i=Dr,r,l,u,h,d,m,p,v){super(e,i,r,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _v extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zs(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ma});u.uniforms.tEquirect.value=i;const h=new Ri(l,u),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Nn),new cy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class Rc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uy={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class fy extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class hy extends Fn{constructor(e=null,i=1,r=1,l,u,h,d,m,p=Cn,v=Cn,_,S){super(null,h,d,m,p,v,l,u,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ah=new J,dy=new J,py=new ue;class br{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Ah.subVectors(r,i).cross(dy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Ah),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||py.getNormalMatrix(e),l=this.coplanarPoint(Ah).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new Hd,my=new ye(.5,.5),Cc=new J;class Gd{constructor(e=new br,i=new br,r=new br,l=new br,u=new br,h=new br){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=zi,r=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],v=u[4],_=u[5],S=u[6],E=u[7],R=u[8],C=u[9],y=u[10],x=u[11],D=u[12],L=u[13],U=u[14],F=u[15];if(l[0].setComponents(p-h,E-v,x-R,F-D).normalize(),l[1].setComponents(p+h,E+v,x+R,F+D).normalize(),l[2].setComponents(p+d,E+_,x+C,F+L).normalize(),l[3].setComponents(p-d,E-_,x-C,F-L).normalize(),r)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,E-S,x-y,F-U).normalize();else if(l[4].setComponents(p-m,E-S,x-y,F-U).normalize(),i===zi)l[5].setComponents(p+m,E+S,x+y,F+U).normalize();else if(i===Hc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);const i=my.distanceTo(e.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qo extends Fn{constructor(e,i,r=Hi,l,u,h,d=Cn,m=Cn,p,v=va,_=1){if(v!==va&&v!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,h,d,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class gy extends qo{constructor(e,i=Hi,r=Dr,l,u,h=Cn,d=Cn,m,p=va){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,i,r,l,u,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vv extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vd extends Xi{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const u=[],h=[];d(l),p(r),v(),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(u.slice(),3)),this.setAttribute("uv",new mi(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new J,U=new J,F=new J;for(let B=0;B<i.length;B+=3)E(i[B+0],L),E(i[B+1],U),E(i[B+2],F),m(L,U,F,D)}function m(D,L,U,F){const B=F+1,P=[];for(let q=0;q<=B;q++){P[q]=[];const A=D.clone().lerp(U,q/B),w=L.clone().lerp(U,q/B),V=B-q;for(let et=0;et<=V;et++)et===0&&q===B?P[q][et]=A:P[q][et]=A.clone().lerp(w,et/V)}for(let q=0;q<B;q++)for(let A=0;A<2*(B-q)-1;A++){const w=Math.floor(A/2);A%2===0?(S(P[q][w+1]),S(P[q+1][w]),S(P[q][w])):(S(P[q][w+1]),S(P[q+1][w+1]),S(P[q+1][w]))}}function p(D){const L=new J;for(let U=0;U<u.length;U+=3)L.x=u[U+0],L.y=u[U+1],L.z=u[U+2],L.normalize().multiplyScalar(D),u[U+0]=L.x,u[U+1]=L.y,u[U+2]=L.z}function v(){const D=new J;for(let L=0;L<u.length;L+=3){D.x=u[L+0],D.y=u[L+1],D.z=u[L+2];const U=y(D)/2/Math.PI+.5,F=x(D)/Math.PI+.5;h.push(U,1-F)}R(),_()}function _(){for(let D=0;D<h.length;D+=6){const L=h[D+0],U=h[D+2],F=h[D+4],B=Math.max(L,U,F),P=Math.min(L,U,F);B>.9&&P<.1&&(L<.2&&(h[D+0]+=1),U<.2&&(h[D+2]+=1),F<.2&&(h[D+4]+=1))}}function S(D){u.push(D.x,D.y,D.z)}function E(D,L){const U=D*3;L.x=e[U+0],L.y=e[U+1],L.z=e[U+2]}function R(){const D=new J,L=new J,U=new J,F=new J,B=new ye,P=new ye,q=new ye;for(let A=0,w=0;A<u.length;A+=9,w+=6){D.set(u[A+0],u[A+1],u[A+2]),L.set(u[A+3],u[A+4],u[A+5]),U.set(u[A+6],u[A+7],u[A+8]),B.set(h[w+0],h[w+1]),P.set(h[w+2],h[w+3]),q.set(h[w+4],h[w+5]),F.copy(D).add(L).add(U).divideScalar(3);const V=y(F);C(B,w+0,D,V),C(P,w+2,L,V),C(q,w+4,U,V)}}function C(D,L,U,F){F<0&&D.x===1&&(h[L]=D.x-1),U.x===0&&U.z===0&&(h[L]=F/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function x(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.vertices,e.indices,e.radius,e.detail)}}class Xd extends Vd{constructor(e=1,i=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Xd(e.radius,e.detail)}}class Xc extends Xi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,_=e/d,S=i/m,E=[],R=[],C=[],y=[];for(let x=0;x<v;x++){const D=x*S-h;for(let L=0;L<p;L++){const U=L*_-u;R.push(U,-D,0),C.push(0,0,1),y.push(L/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<d;D++){const L=D+p*x,U=D+p*(x+1),F=D+1+p*(x+1),B=D+1+p*x;E.push(L,U,B),E.push(U,F,B)}this.setIndex(E),this.setAttribute("position",new mi(R,3)),this.setAttribute("normal",new mi(C,3)),this.setAttribute("uv",new mi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class _y extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c_ extends Qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sv,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vy extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xy extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xv extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Rh=new en,u_=new J,f_=new J;class Sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;u_.setFromMatrixPosition(e.matrixWorld),i.position.copy(u_),f_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(f_),i.updateMatrixWorld(),Rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kd extends mv{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class My extends Sy{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yy extends xv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new My}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class Ey extends xv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class by extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function h_(o,e,i,r){const l=Ty(r);switch(i){case iv:return o*e;case rv:return o*e/l.components*l.byteLength;case Od:return o*e/l.components*l.byteLength;case Ls:return o*e*2/l.components*l.byteLength;case Pd:return o*e*2/l.components*l.byteLength;case av:return o*e*3/l.components*l.byteLength;case Ai:return o*e*4/l.components*l.byteLength;case zd:return o*e*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(o,16)*Math.max(e,8)/4;case jh:case Kh:return Math.max(o,8)*Math.max(e,8)/2;case Jh:case $h:case ed:case nd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case td:case id:case ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case xd:case Sd:case Md:return Math.ceil(o/4)*Math.ceil(e/4)*16;case yd:case Ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case bd:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ty(o){switch(o){case ei:case $_:return{byteLength:1,components:1};case Xo:case tv:case _a:return{byteLength:2,components:1};case Ld:case Nd:return{byteLength:2,components:4};case Hi:case Ud:case Pi:return{byteLength:4,components:1};case ev:case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dd);function Sv(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ay(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,v);else{_.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<_.length;E++){const R=_[S],C=_[E];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,_[S]=C)}_.length=S+1;for(let E=0,R=_.length;E<R;E++){const C=_[E];o.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
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
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ny=`#ifdef USE_AOMAP
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
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Py=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
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
#endif`,Gy=`#ifdef USE_BUMPMAP
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
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
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
} // validated`,Qy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jy=`vec3 transformedNormal = objectNormal;
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
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
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
#endif`,lE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pE=`#ifdef USE_GRADIENTMAP
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
}`,mE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vE=`uniform bool receiveShadow;
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
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bE=`PhysicalMaterial material;
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
#endif`,TE=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,AE=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,CE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`#ifdef USE_MORPHTARGETS
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
#endif`,XE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZE=`#ifdef USE_NORMALMAP
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
#endif`,KE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,f1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
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
}`,N1=`#if DEPTH_PACKING == 3200
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
}`,O1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,I1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,X1=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,k1=`#define MATCAP
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
}`,W1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define NORMAL
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
}`,j1=`#define PHONG
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
}`,Z1=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define TOON
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
}`,$1=`#define TOON
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
}`,tb=`uniform float size;
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 color;
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
}`,ab=`uniform float rotation;
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
}`,rb=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Ry,alphahash_pars_fragment:Cy,alphamap_fragment:wy,alphamap_pars_fragment:Dy,alphatest_fragment:Uy,alphatest_pars_fragment:Ly,aomap_fragment:Ny,aomap_pars_fragment:Oy,batching_pars_vertex:Py,batching_vertex:zy,begin_vertex:Fy,beginnormal_vertex:By,bsdfs:Iy,iridescence_fragment:Hy,bumpmap_pars_fragment:Gy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Xy,clipping_planes_pars_vertex:ky,clipping_planes_vertex:Wy,color_fragment:qy,color_pars_fragment:Yy,color_pars_vertex:jy,color_vertex:Zy,common:Ky,cube_uv_reflection_fragment:Qy,defaultnormal_vertex:Jy,displacementmap_pars_vertex:$y,displacementmap_vertex:tE,emissivemap_fragment:eE,emissivemap_pars_fragment:nE,colorspace_fragment:iE,colorspace_pars_fragment:aE,envmap_fragment:rE,envmap_common_pars_fragment:sE,envmap_pars_fragment:oE,envmap_pars_vertex:lE,envmap_physical_pars_fragment:xE,envmap_vertex:cE,fog_vertex:uE,fog_pars_vertex:fE,fog_fragment:hE,fog_pars_fragment:dE,gradientmap_pars_fragment:pE,lightmap_pars_fragment:mE,lights_lambert_fragment:gE,lights_lambert_pars_fragment:_E,lights_pars_begin:vE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:yE,lights_phong_pars_fragment:EE,lights_physical_fragment:bE,lights_physical_pars_fragment:TE,lights_fragment_begin:AE,lights_fragment_maps:RE,lights_fragment_end:CE,logdepthbuf_fragment:wE,logdepthbuf_pars_fragment:DE,logdepthbuf_pars_vertex:UE,logdepthbuf_vertex:LE,map_fragment:NE,map_pars_fragment:OE,map_particle_fragment:PE,map_particle_pars_fragment:zE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:BE,morphinstance_vertex:IE,morphcolor_vertex:HE,morphnormal_vertex:GE,morphtarget_pars_vertex:VE,morphtarget_vertex:XE,normal_fragment_begin:kE,normal_fragment_maps:WE,normal_pars_fragment:qE,normal_pars_vertex:YE,normal_vertex:jE,normalmap_pars_fragment:ZE,clearcoat_normal_fragment_begin:KE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:$E,opaque_fragment:t1,packing:e1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:a1,dithering_pars_fragment:r1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:_1,tonemapping_fragment:v1,tonemapping_pars_fragment:x1,transmission_fragment:S1,transmission_pars_fragment:M1,uv_pars_fragment:y1,uv_pars_vertex:E1,uv_vertex:b1,worldpos_vertex:T1,background_vert:A1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:w1,cube_vert:D1,cube_frag:U1,depth_vert:L1,depth_frag:N1,distance_vert:O1,distance_frag:P1,equirect_vert:z1,equirect_frag:F1,linedashed_vert:B1,linedashed_frag:I1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:X1,meshmatcap_vert:k1,meshmatcap_frag:W1,meshnormal_vert:q1,meshnormal_frag:Y1,meshphong_vert:j1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:Q1,meshtoon_vert:J1,meshtoon_frag:$1,points_vert:tb,points_frag:eb,shadow_vert:nb,shadow_frag:ib,sprite_vert:ab,sprite_frag:rb},Ot={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:zn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:zn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Le(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:zn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:zn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:zn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:zn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:zn([Ot.common,Ot.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:zn([Ot.lights,Ot.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const wc={r:0,b:0,g:0},yr=new Gi,sb=new en;function ob(o,e,i,r,l,u,h){const d=new Le(0);let m=u===!0?0:1,p,v,_=null,S=0,E=null;function R(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:e).get(U)),U}function C(L){let U=!1;const F=R(L);F===null?x(d,m):F&&F.isColor&&(x(F,1),U=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,U){const F=R(U);F&&(F.isCubeTexture||F.mapping===Vc)?(v===void 0&&(v=new Ri(new zs(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:Os(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),yr.copy(U.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(yr)),v.material.toneMapped=be.getTransfer(F.colorSpace)!==Ie,(_!==F||S!==F.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Ri(new Xc(2,2),new Vi({name:"BackgroundMaterial",uniforms:Os(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(F.colorSpace)!==Ie,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||S!==F.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=F,S=F.version,E=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,U){L.getRGB(wc,pv(o)),r.buffers.color.setClear(wc.r,wc.g,wc.b,U,h)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(d,m)},render:C,addToRenderList:y,dispose:D}}function lb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(w,V,et,rt,dt){let ut=!1;const z=_(rt,et,V);u!==z&&(u=z,p(u.object)),ut=E(w,rt,et,dt),ut&&R(w,rt,et,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,U(w,V,et,rt),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,V,et){const rt=et.wireframe===!0;let dt=r[w.id];dt===void 0&&(dt={},r[w.id]=dt);let ut=dt[V.id];ut===void 0&&(ut={},dt[V.id]=ut);let z=ut[rt];return z===void 0&&(z=S(m()),ut[rt]=z),z}function S(w){const V=[],et=[],rt=[];for(let dt=0;dt<i;dt++)V[dt]=0,et[dt]=0,rt[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:et,attributeDivisors:rt,object:w,attributes:{},index:null}}function E(w,V,et,rt){const dt=u.attributes,ut=V.attributes;let z=0;const H=et.getAttributes();for(const at in H)if(H[at].location>=0){const xt=dt[at];let O=ut[at];if(O===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),xt===void 0||xt.attribute!==O||O&&xt.data!==O.data)return!0;z++}return u.attributesNum!==z||u.index!==rt}function R(w,V,et,rt){const dt={},ut=V.attributes;let z=0;const H=et.getAttributes();for(const at in H)if(H[at].location>=0){let xt=ut[at];xt===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const O={};O.attribute=xt,xt&&xt.data&&(O.data=xt.data),dt[at]=O,z++}u.attributes=dt,u.attributesNum=z,u.index=rt}function C(){const w=u.newAttributes;for(let V=0,et=w.length;V<et;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const et=u.newAttributes,rt=u.enabledAttributes,dt=u.attributeDivisors;et[w]=1,rt[w]===0&&(o.enableVertexAttribArray(w),rt[w]=1),dt[w]!==V&&(o.vertexAttribDivisor(w,V),dt[w]=V)}function D(){const w=u.newAttributes,V=u.enabledAttributes;for(let et=0,rt=V.length;et<rt;et++)V[et]!==w[et]&&(o.disableVertexAttribArray(et),V[et]=0)}function L(w,V,et,rt,dt,ut,z){z===!0?o.vertexAttribIPointer(w,V,et,dt,ut):o.vertexAttribPointer(w,V,et,rt,dt,ut)}function U(w,V,et,rt){C();const dt=rt.attributes,ut=et.getAttributes(),z=V.defaultAttributeValues;for(const H in ut){const at=ut[H];if(at.location>=0){let Mt=dt[H];if(Mt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor)),Mt!==void 0){const xt=Mt.normalized,O=Mt.itemSize,it=e.get(Mt);if(it===void 0)continue;const gt=it.buffer,Tt=it.type,It=it.bytesPerElement,nt=Tt===o.INT||Tt===o.UNSIGNED_INT||Mt.gpuType===Ud;if(Mt.isInterleavedBufferAttribute){const ct=Mt.data,Dt=ct.stride,Xt=Mt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ht=0;Ht<at.locationSize;Ht++)x(at.location+Ht,ct.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ht=0;Ht<at.locationSize;Ht++)y(at.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ht=0;Ht<at.locationSize;Ht++)L(at.location+Ht,O/at.locationSize,Tt,xt,Dt*It,(Xt+O/at.locationSize*Ht)*It,nt)}else{if(Mt.isInstancedBufferAttribute){for(let ct=0;ct<at.locationSize;ct++)x(at.location+ct,Mt.meshPerAttribute);w.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ct=0;ct<at.locationSize;ct++)y(at.location+ct);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ct=0;ct<at.locationSize;ct++)L(at.location+ct,O/at.locationSize,Tt,xt,O*It,O/at.locationSize*ct*It,nt)}}else if(z!==void 0){const xt=z[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(at.location,xt);break;case 3:o.vertexAttrib3fv(at.location,xt);break;case 4:o.vertexAttrib4fv(at.location,xt);break;default:o.vertexAttrib1fv(at.location,xt)}}}}D()}function F(){q();for(const w in r){const V=r[w];for(const et in V){const rt=V[et];for(const dt in rt)v(rt[dt].object),delete rt[dt];delete V[et]}delete r[w]}}function B(w){if(r[w.id]===void 0)return;const V=r[w.id];for(const et in V){const rt=V[et];for(const dt in rt)v(rt[dt].object),delete rt[dt];delete V[et]}delete r[w.id]}function P(w){for(const V in r){const et=r[V];if(et[w.id]===void 0)continue;const rt=et[w.id];for(const dt in rt)v(rt[dt].object),delete rt[dt];delete et[w.id]}}function q(){A(),h=!0,u!==l&&(u=l,p(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:A,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function cb(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,_){_!==0&&(o.drawArraysInstanced(r,p,v,_),i.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=v[R];i.update(E,r,1)}function m(p,v,_,S){if(_===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],v[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,_);let R=0;for(let C=0;C<_;C++)R+=v[C]*S[C];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ub(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ai&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const q=P===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ei&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Pi&&!q)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(re("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:U,maxSamples:F,samples:B}}function fb(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new br,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const E=_.length!==0||S||r!==0||l;return l=S,r=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,E){const R=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||R===null||R.length===0||u&&!y)u?v(null):p();else{const D=u?0:r,L=D*4;let U=x.clippingState||null;m.value=U,U=v(R,S,L,E);for(let F=0;F!==L;++F)U[F]=i[F];x.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,E,R){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const x=E+C*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,U=E;L!==C;++L,U+=4)h.copy(_[L]).applyMatrix4(D,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function hb(o){let e=new WeakMap;function i(h,d){return d===kh?h.mapping=Dr:d===Wh&&(h.mapping=Us),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===kh||d===Wh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new _v(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ja=4,d_=[.125,.215,.35,.446,.526,.582],Ar=20,db=256,Bo=new kd,p_=new Le;let Ch=null,wh=0,Dh=0,Uh=!1;const pb=new J;class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=pb}=u;Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,wh,Dh),this._renderer.xr.enabled=Uh,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Dr||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:_a,format:Ai,colorSpace:Ns,depthBuffer:!1},l=g_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mb(u)),this._blurMaterial=_b(u,e,i),this._ggxMaterial=gb(u,e,i)}return l}_compileMaterial(e){const i=new Ri(new Xi,e);this._renderer.compile(i,Bo)}_sceneToCubeUV(e,i,r,l,u){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,E=_.toneMapping;_.getClearColor(p_),_.toneMapping=Fi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new zs,new fv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,x=!0):(y.color.copy(p_),x=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[L],u.y,u.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[L]));const F=this._cubeSize;As(l,U*F,L>2?F:0,F,F),_.setRenderTarget(l),x&&_.render(C,m),_.render(e,m)}_.toneMapping=E,_.autoClear=S,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Dr||e.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Bo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,E=_*S,{_lodMax:R}=this,C=this._sizeLods[r],y=3*C*(r>R-Ja?r-R+Ja:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=R-i,As(u,y,x,3*C,2*C),l.setRenderTarget(u),l.render(d,Bo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=R-r,As(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(d,Bo)}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),C=u/R,y=isFinite(u)?1+Math.floor(v*C):Ar;y>Ar&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const x=[];let D=0;for(let P=0;P<Ar;++P){const q=P/C,A=Math.exp(-q*q/2);x.push(A),P===0?D+=A:P<y&&(D+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/D;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=R,S.mipInt.value=L-r;const U=this._sizeLods[l],F=3*U*(l>L-Ja?l-L+Ja:0),B=4*(this._cubeSize-U);As(i,F,B,3*U,2*U),m.setRenderTarget(i),m.render(_,Bo)}}function mb(o){const e=[],i=[],r=[];let l=o;const u=o-Ja+1+d_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-Ja?m=d_[h-o+Ja-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,R=6,C=3,y=2,x=1,D=new Float32Array(C*R*E),L=new Float32Array(y*R*E),U=new Float32Array(x*R*E);for(let B=0;B<E;B++){const P=B%3*2/3-1,q=B>2?0:-1,A=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];D.set(A,C*R*B),L.set(S,y*R*B);const w=[B,B,B,B,B,B];U.set(w,x*R*B)}const F=new Xi;F.setAttribute("position",new Ii(D,C)),F.setAttribute("uv",new Ii(L,y)),F.setAttribute("faceIndex",new Ii(U,x)),r.push(new Ri(F,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function g_(o,e,i){const r=new Bi(o,e,i);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function gb(o,e,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:db,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function _b(o,e,i){const r=new Float32Array(Ar),l=new J(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function __(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function v_(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function vb(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===kh||m===Wh,v=m===Dr||m===Us;if(p||v){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new m_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const E=d.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new m_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function xb(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Wo("WebGLRenderer: "+r+" extension not supported."),l}}}function Sb(o,e,i,r){const l={},u=new WeakMap;function h(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=u.get(S);E&&(e.remove(E),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const E in S)e.update(S[E],o.ARRAY_BUFFER)}function p(_){const S=[],E=_.index,R=_.attributes.position;let C=0;if(E!==null){const D=E.array;C=E.version;for(let L=0,U=D.length;L<U;L+=3){const F=D[L+0],B=D[L+1],P=D[L+2];S.push(F,B,B,P,P,F)}}else if(R!==void 0){const D=R.array;C=R.version;for(let L=0,U=D.length/3-1;L<U;L+=3){const F=L+0,B=L+1,P=L+2;S.push(F,B,B,P,P,F)}}else return;const y=new(ov(S)?dv:hv)(S,1);y.version=C;const x=u.get(_);x&&e.remove(x),u.set(_,y)}function v(_){const S=u.get(_);if(S){const E=_.index;E!==null&&S.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function Mb(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(r,E,u,S*h),i.update(E,r,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(r,E,u,S*h,R),i.update(E,r,R))}function v(S,E,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,S,0,R);let y=0;for(let x=0;x<R;x++)y+=E[x];i.update(y,r,1)}function _(S,E,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,E[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,E,0,u,S,0,C,0,R);let x=0;for(let D=0;D<R;D++)x+=E[D]*C[D];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function yb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Re("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Eb(o,e,i){const r=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==_){let w=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;R===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let F=d.attributes.position.count*U,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const P=new Float32Array(F*B*4*_),q=new lv(P,F,B,_);q.type=Pi,q.needsUpdate=!0;const A=U*4;for(let V=0;V<_;V++){const et=x[V],rt=D[V],dt=L[V],ut=F*B*4*V;for(let z=0;z<et.count;z++){const H=z*A;R===!0&&(l.fromBufferAttribute(et,z),P[ut+H+0]=l.x,P[ut+H+1]=l.y,P[ut+H+2]=l.z,P[ut+H+3]=0),C===!0&&(l.fromBufferAttribute(rt,z),P[ut+H+4]=l.x,P[ut+H+5]=l.y,P[ut+H+6]=l.z,P[ut+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,z),P[ut+H+8]=l.x,P[ut+H+9]=l.y,P[ut+H+10]=l.z,P[ut+H+11]=dt.itemSize===4?l.w:1)}}S={count:_,texture:q,size:new ye(F,B)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function bb(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const Tb={[W_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[j_]:"ACES_FILMIC_TONE_MAPPING",[K_]:"AGX_TONE_MAPPING",[Q_]:"NEUTRAL_TONE_MAPPING",[Z_]:"CUSTOM_TONE_MAPPING"};function Ab(o,e,i,r,l){const u=new Bi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Bi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),d=new Xi;d.setAttribute("position",new mi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new mi([0,2,0,0,2,0],2));const m=new _y({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ri(d,m),v=new kd(-1,1,1,-1,0,1);let _=null,S=null,E=!1,R,C=null,y=[],x=!1;this.setSize=function(D,L){u.setSize(D,L),h.setSize(D,L);for(let U=0;U<y.length;U++){const F=y[U];F.setSize&&F.setSize(D,L)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const L=u.width,U=u.height;for(let F=0;F<y.length;F++){const B=y[F];B.setSize&&B.setSize(L,U)}},this.begin=function(D,L){if(E||D.toneMapping===Fi&&y.length===0)return!1;if(C=L,L!==null){const U=L.width,F=L.height;(u.width!==U||u.height!==F)&&this.setSize(U,F)}return x===!1&&D.setRenderTarget(u),R=D.toneMapping,D.toneMapping=Fi,!0},this.hasRenderPass=function(){return x},this.end=function(D,L){D.toneMapping=R,E=!0;let U=u,F=h;for(let B=0;B<y.length;B++){const P=y[B];if(P.enabled!==!1&&(P.render(D,F,U,L),P.needsSwap!==!1)){const q=U;U=F,F=q}}if(_!==D.outputColorSpace||S!==D.toneMapping){_=D.outputColorSpace,S=D.toneMapping,m.defines={},be.getTransfer(_)===Ie&&(m.defines.SRGB_TRANSFER="");const B=Tb[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(C),D.render(p,v),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Mv=new Fn,Rd=new qo(1,1),yv=new lv,Ev=new qM,bv=new gv,x_=[],S_=[],M_=new Float32Array(16),y_=new Float32Array(9),E_=new Float32Array(4);function Fs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=x_[l];if(u===void 0&&(u=new Float32Array(l),x_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function dn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Wc(o,e){let i=S_[e];i===void 0&&(i=new Int32Array(e),S_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function Rb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(dn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function Ub(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;E_.set(r),o.uniformMatrix2fv(this.addr,!1,E_),pn(i,r)}}function Lb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),pn(i,r)}}function Nb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(dn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(dn(i,r))return;M_.set(r),o.uniformMatrix4fv(this.addr,!1,M_),pn(i,r)}}function Ob(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function Fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function Bb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(dn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(dn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function Gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(dn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function Vb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Rd.compareFunction=i.isReversedDepthBuffer()?Bd:Fd,u=Rd):u=Mv,i.setTexture2D(e||u,l)}function Xb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ev,l)}function kb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||bv,l)}function Wb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||yv,l)}function qb(o){switch(o){case 5126:return Rb;case 35664:return Cb;case 35665:return wb;case 35666:return Db;case 35674:return Ub;case 35675:return Lb;case 35676:return Nb;case 5124:case 35670:return Ob;case 35667:case 35671:return Pb;case 35668:case 35672:return zb;case 35669:case 35673:return Fb;case 5125:return Bb;case 36294:return Ib;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Wb}}function Yb(o,e){o.uniform1fv(this.addr,e)}function jb(o,e){const i=Fs(e,this.size,2);o.uniform2fv(this.addr,i)}function Zb(o,e){const i=Fs(e,this.size,3);o.uniform3fv(this.addr,i)}function Kb(o,e){const i=Fs(e,this.size,4);o.uniform4fv(this.addr,i)}function Qb(o,e){const i=Fs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Jb(o,e){const i=Fs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $b(o,e){const i=Fs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function tT(o,e){o.uniform1iv(this.addr,e)}function eT(o,e){o.uniform2iv(this.addr,e)}function nT(o,e){o.uniform3iv(this.addr,e)}function iT(o,e){o.uniform4iv(this.addr,e)}function aT(o,e){o.uniform1uiv(this.addr,e)}function rT(o,e){o.uniform2uiv(this.addr,e)}function sT(o,e){o.uniform3uiv(this.addr,e)}function oT(o,e){o.uniform4uiv(this.addr,e)}function lT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Rd:h=Mv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,u[d])}function cT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ev,u[h])}function uT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||bv,u[h])}function fT(o,e,i){const r=this.cache,l=e.length,u=Wc(i,l);dn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||yv,u[h])}function hT(o){switch(o){case 5126:return Yb;case 35664:return jb;case 35665:return Zb;case 35666:return Kb;case 35674:return Qb;case 35675:return Jb;case 35676:return $b;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}class dT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=qb(i.type)}}class pT{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hT(i.type)}}class mT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function b_(o,e){o.seq.push(e),o.map[e.id]=e}function gT(o,e,i){const r=o.name,l=r.length;for(Lh.lastIndex=0;;){const u=Lh.exec(r),h=Lh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){b_(i,p===void 0?new dT(d,o,e):new pT(d,o,e));break}else{let _=i.map[d];_===void 0&&(_=new mT(d),b_(i,_)),i=_}}}class zc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);gT(d,m,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function T_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const _T=37297;let vT=0;function xT(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const A_=new ue;function ST(o){be._getMatrix(A_,be.workingColorSpace,o);const e=`mat3( ${A_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Ic:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function R_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+xT(o.getShaderSource(e),d)}else return u}function MT(o,e){const i=ST(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const yT={[W_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[j_]:"ACESFilmic",[K_]:"AgX",[Q_]:"Neutral",[Z_]:"Custom"};function ET(o,e){const i=yT[e];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new J;function bT(){be.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),e=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function AT(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function RT(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Go(o){return o!==""}function C_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(o){return o.replace(CT,DT)}const wT=new Map;function DT(o,e){let i=fe[e];if(i===void 0){const r=wT.get(e);if(r!==void 0)i=fe[r],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cd(i)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(o){return o.replace(UT,LT)}function LT(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function U_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const NT={[Uc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function OT(o){return NT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const PT={[Dr]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function zT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":PT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const FT={[Us]:"ENVMAP_MODE_REFRACTION"};function BT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":FT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const IT={[k_]:"ENVMAP_BLENDING_MULTIPLY",[RM]:"ENVMAP_BLENDING_MIX",[CM]:"ENVMAP_BLENDING_ADD"};function HT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":IT[o.combine]||"ENVMAP_BLENDING_NONE"}function GT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function VT(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=OT(i),p=zT(i),v=BT(i),_=HT(i),S=GT(i),E=TT(i),R=AT(u),C=l.createProgram();let y,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Go).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(y=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Fi?ET("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,MT("linearToOutputTexel",i.outputColorSpace),bT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Cd(h),h=C_(h,i),h=w_(h,i),d=Cd(d),d=C_(d,i),d=w_(d,i),h=D_(h),d=D_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=D+y+h,U=D+x+d,F=T_(l,l.VERTEX_SHADER,L),B=T_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,F),l.attachShader(C,B),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(C)||"",rt=l.getShaderInfoLog(F)||"",dt=l.getShaderInfoLog(B)||"",ut=et.trim(),z=rt.trim(),H=dt.trim();let at=!0,Mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,F,B);else{const xt=R_(l,F,"vertex"),O=R_(l,B,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+xt+`
`+O)}else ut!==""?re("WebGLProgram: Program Info Log:",ut):(z===""||H==="")&&(Mt=!1);Mt&&(V.diagnostics={runnable:at,programLog:ut,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(F),l.deleteShader(B),q=new zc(l,C),A=RT(l,C)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,_T)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=B,this}let XT=0;class kT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new WT(e),i.set(e,r)),r}}class WT{constructor(e){this.id=XT++,this.code=e,this.usedTimes=0}}function qT(o,e,i,r,l,u,h){const d=new cv,m=new kT,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,w,V,et,rt){const dt=et.fog,ut=rt.geometry,z=A.isMeshStandardMaterial?et.environment:null,H=(A.isMeshStandardMaterial?i:e).get(A.envMap||z),at=H&&H.mapping===Vc?H.image.height:null,Mt=R[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&re("WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,O=xt!==void 0?xt.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let gt,Tt,It,nt;if(Mt){const Ee=Oi[Mt];gt=Ee.vertexShader,Tt=Ee.fragmentShader}else gt=A.vertexShader,Tt=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),nt=m.getFragmentShaderID(A);const ct=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Xt=rt.isInstancedMesh===!0,Ht=rt.isBatchedMesh===!0,he=!!A.map,Ke=!!A.matcap,ge=!!H,de=!!A.aoMap,Ce=!!A.lightMap,se=!!A.bumpMap,Qe=!!A.normalMap,G=!!A.displacementMap,Ye=!!A.emissiveMap,Me=!!A.metalnessMap,Ne=!!A.roughnessMap,Yt=A.anisotropy>0,N=A.clearcoat>0,M=A.dispersion>0,W=A.iridescence>0,ht=A.sheen>0,vt=A.transmission>0,lt=Yt&&!!A.anisotropyMap,Zt=N&&!!A.clearcoatMap,Ct=N&&!!A.clearcoatNormalMap,kt=N&&!!A.clearcoatRoughnessMap,ee=W&&!!A.iridescenceMap,yt=W&&!!A.iridescenceThicknessMap,Et=ht&&!!A.sheenColorMap,Ft=ht&&!!A.sheenRoughnessMap,Pt=!!A.specularMap,wt=!!A.specularColorMap,le=!!A.specularIntensityMap,k=vt&&!!A.transmissionMap,Lt=vt&&!!A.thicknessMap,bt=!!A.gradientMap,zt=!!A.alphaMap,St=A.alphaTest>0,_t=!!A.alphaHash,At=!!A.extensions;let ne=Fi;A.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=o.toneMapping);const Pe={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:gt,fragmentShader:Tt,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:Ht,batchingColor:Ht&&rt._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&rt.instanceColor!==null,instancingMorph:Xt&&rt.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ns,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:Ke,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:at,aoMap:de,lightMap:Ce,bumpMap:se,normalMap:Qe,displacementMap:G,emissiveMap:Ye,normalMapObjectSpace:Qe&&A.normalMapType===UM,normalMapTangentSpace:Qe&&A.normalMapType===sv,metalnessMap:Me,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:lt,clearcoat:N,clearcoatMap:Zt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:kt,dispersion:M,iridescence:W,iridescenceMap:ee,iridescenceThicknessMap:yt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:Ft,specularMap:Pt,specularColorMap:wt,specularIntensityMap:le,transmission:vt,transmissionMap:k,thicknessMap:Lt,gradientMap:bt,opaque:A.transparent===!1&&A.blending===Cs&&A.alphaToCoverage===!1,alphaMap:zt,alphaTest:St,alphaHash:_t,combine:A.combine,mapUv:he&&C(A.map.channel),aoMapUv:de&&C(A.aoMap.channel),lightMapUv:Ce&&C(A.lightMap.channel),bumpMapUv:se&&C(A.bumpMap.channel),normalMapUv:Qe&&C(A.normalMap.channel),displacementMapUv:G&&C(A.displacementMap.channel),emissiveMapUv:Ye&&C(A.emissiveMap.channel),metalnessMapUv:Me&&C(A.metalnessMap.channel),roughnessMapUv:Ne&&C(A.roughnessMap.channel),anisotropyMapUv:lt&&C(A.anisotropyMap.channel),clearcoatMapUv:Zt&&C(A.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(A.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&C(A.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(A.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(A.sheenRoughnessMap.channel),specularMapUv:Pt&&C(A.specularMap.channel),specularColorMapUv:wt&&C(A.specularColorMap.channel),specularIntensityMapUv:le&&C(A.specularIntensityMap.channel),transmissionMapUv:k&&C(A.transmissionMap.channel),thicknessMapUv:Lt&&C(A.thicknessMap.channel),alphaMapUv:zt&&C(A.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Qe||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ut.attributes.uv&&(he||zt),fog:!!dt,useFog:A.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Dt,skinning:rt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&be.getTransfer(A.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ye&&A.emissiveMap.isVideoTexture===!0&&be.getTransfer(A.emissiveMap.colorSpace)===Ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===da,flipSided:A.side===Wn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:At&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&A.extensions.multiDraw===!0||Ht)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)w.push(V),w.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(D(w,A),L(w,A),w.push(o.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function D(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function L(A,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function U(A){const w=R[A.type];let V;if(w){const et=Oi[w];V=sy.clone(et.uniforms)}else V=A.uniforms;return V}function F(A,w){let V=_.get(w);return V!==void 0?++V.usedTimes:(V=new VT(o,w,A,u),v.push(V),_.set(w,V)),V}function B(A){if(--A.usedTimes===0){const w=v.indexOf(A);v[w]=v[v.length-1],v.pop(),_.delete(A.cacheKey),A.destroy()}}function P(A){m.remove(A)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:U,acquireProgram:F,releaseProgram:B,releaseShaderCache:P,programs:v,dispose:q}}function YT(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function jT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function L_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function N_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(_,S,E,R,C,y){let x=o[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:E,groupOrder:R,renderOrder:_.renderOrder,z:C,group:y},o[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=E,x.groupOrder=R,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function d(_,S,E,R,C,y){const x=h(_,S,E,R,C,y);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(_,S,E,R,C,y){const x=h(_,S,E,R,C,y);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||jT),r.length>1&&r.sort(S||L_),l.length>1&&l.sort(S||L_)}function v(){for(let _=e,S=o.length;_<S;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function ZT(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new N_,o.set(r,[h])):l>=u.length?(h=new N_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function KT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Le};break;case"SpotLight":i={position:new J,direction:new J,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":i={color:new Le,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function QT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let JT=0;function $T(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function tA(o){const e=new KT,i=QT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,u=new en,h=new en;function d(p){let v=0,_=0,S=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let E=0,R=0,C=0,y=0,x=0,D=0,L=0,U=0,F=0,B=0,P=0;p.sort($T);for(let A=0,w=p.length;A<w;A++){const V=p[A],et=V.color,rt=V.intensity,dt=V.distance;let ut=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ls?ut=V.shadow.map.texture:ut=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=et.r*rt,_+=et.g*rt,S+=et.b*rt;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],rt);P++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,r.directionalShadow[E]=at,r.directionalShadowMap[E]=ut,r.directionalShadowMatrix[E]=V.shadow.matrix,D++}r.directional[E]=z,E++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(et).multiplyScalar(rt),z.distance=dt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[C]=z;const H=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,H.updateMatrices(V),V.castShadow&&B++),r.spotLightMatrix[C]=H.matrix,V.castShadow){const at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,r.spotShadow[C]=at,r.spotShadowMap[C]=ut,U++}C++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(et).multiplyScalar(rt),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=z,y++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const H=V.shadow,at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,r.pointShadow[R]=at,r.pointShadowMap[R]=ut,r.pointShadowMatrix[R]=V.shadow.matrix,L++}r.point[R]=z,R++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(rt),z.groundColor.copy(V.groundColor).multiplyScalar(rt),r.hemi[x]=z,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const q=r.hash;(q.directionalLength!==E||q.pointLength!==R||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==x||q.numDirectionalShadows!==D||q.numPointShadows!==L||q.numSpotShadows!==U||q.numSpotMaps!==F||q.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=y,r.point.length=R,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+F-B,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=P,q.directionalLength=E,q.pointLength=R,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=x,q.numDirectionalShadows=D,q.numPointShadows=L,q.numSpotShadows=U,q.numSpotMaps=F,q.numLightProbes=P,r.version=JT++)}function m(p,v){let _=0,S=0,E=0,R=0,C=0;const y=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const L=p[x];if(L.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),_++}else if(L.isSpotLight){const U=r.spot[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(L.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),R++}else if(L.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:r}}function O_(o){const e=new tA(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function eA(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new O_(o),e.set(l,[d])):u>=h.length?(d=new O_(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const nA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iA=`uniform sampler2D shadow_pass;
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
}`,aA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],rA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],P_=new en,Io=new J,Nh=new J;function sA(o,e,i){let r=new Gd;const l=new ye,u=new ye,h=new tn,d=new vy,m=new xy,p={},v=i.maxTextureSize,_={[$a]:Wn,[Wn]:$a,[da]:da},S=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:nA,fragmentShader:iA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new Xi;R.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ri(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let x=this.type;this.render=function(B,P,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===lM&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Uc);const A=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),et=o.state;et.setBlending(ma),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const rt=x!==this.type;rt&&P.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=B.length;dt<ut;dt++){const z=B[dt],H=z.shadow;if(H===void 0){re("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),u.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/at.x),l.x=u.x*at.x,H.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/at.y),l.y=u.y*at.y,H.mapSize.y=u.y)),H.map===null||rt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ho){if(z.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Bi(l.x,l.y,{format:Ls,type:_a,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new qo(l.x,l.y,Pi),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=va,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn}else{z.isPointLight?(H.map=new _v(l.x),H.map.depthTexture=new gy(l.x,Hi)):(H.map=new Bi(l.x,l.y),H.map.depthTexture=new qo(l.x,l.y,Hi)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=va;const xt=o.state.buffers.depth.getReversed();this.type===Uc?(H.map.depthTexture.compareFunction=xt?Bd:Fd,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Cn,H.map.depthTexture.magFilter=Cn)}H.camera.updateProjectionMatrix()}const Mt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<Mt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const O=H.getViewport(xt);h.set(u.x*O.x,u.y*O.y,u.x*O.z,u.y*O.w),et.viewport(h)}if(z.isPointLight){const O=H.camera,it=H.matrix,gt=z.distance||O.far;gt!==O.far&&(O.far=gt,O.updateProjectionMatrix()),Io.setFromMatrixPosition(z.matrixWorld),O.position.copy(Io),Nh.copy(O.position),Nh.add(aA[xt]),O.up.copy(rA[xt]),O.lookAt(Nh),O.updateMatrixWorld(),it.makeTranslation(-Io.x,-Io.y,-Io.z),P_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(P_,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(z);r=H.getFrustum(),U(P,q,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ho&&D(H,q),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(A,w,V)};function D(B,P){const q=e.update(C);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,E.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Bi(l.x,l.y,{format:Ls,type:_a})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(P,null,q,S,C,null),E.uniforms.shadow_pass.value=B.mapPass.texture,E.uniforms.resolution.value=B.mapSize,E.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(P,null,q,E,C,null)}function L(B,P,q,A){let w=null;const V=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(V!==void 0)w=V;else if(w=q.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const et=w.uuid,rt=P.uuid;let dt=p[et];dt===void 0&&(dt={},p[et]=dt);let ut=dt[rt];ut===void 0&&(ut=w.clone(),dt[rt]=ut,P.addEventListener("dispose",F)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,A===Ho?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:_[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const et=o.properties.get(w);et.light=q}return w}function U(B,P,q,A,w){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Ho)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const rt=e.update(B),dt=B.material;if(Array.isArray(dt)){const ut=rt.groups;for(let z=0,H=ut.length;z<H;z++){const at=ut[z],Mt=dt[at.materialIndex];if(Mt&&Mt.visible){const xt=L(B,Mt,A,w);B.onBeforeShadow(o,B,P,q,rt,xt,at),o.renderBufferDirect(q,null,rt,xt,B,at),B.onAfterShadow(o,B,P,q,rt,xt,at)}}}else if(dt.visible){const ut=L(B,dt,A,w);B.onBeforeShadow(o,B,P,q,rt,ut,null),o.renderBufferDirect(q,null,rt,ut,B,null),B.onAfterShadow(o,B,P,q,rt,ut,null)}}const et=B.children;for(let rt=0,dt=et.length;rt<dt;rt++)U(et[rt],P,q,A,w)}function F(B){B.target.removeEventListener("dispose",F);for(const q in p){const A=p[q],w=B.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const oA={[Fh]:Bh,[Ih]:Vh,[Hh]:Xh,[Ds]:Gh,[Bh]:Fh,[Vh]:Ih,[Xh]:Hh,[Gh]:Ds};function lA(o,e){function i(){let k=!1;const Lt=new tn;let bt=null;const zt=new tn(0,0,0,0);return{setMask:function(St){bt!==St&&!k&&(o.colorMask(St,St,St,St),bt=St)},setLocked:function(St){k=St},setClear:function(St,_t,At,ne,Pe){Pe===!0&&(St*=ne,_t*=ne,At*=ne),Lt.set(St,_t,At,ne),zt.equals(Lt)===!1&&(o.clearColor(St,_t,At,ne),zt.copy(Lt))},reset:function(){k=!1,bt=null,zt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,bt=null,zt=null,St=null;return{setReversed:function(_t){if(Lt!==_t){const At=e.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Lt=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Lt},setTest:function(_t){_t?ct(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!k&&(o.depthMask(_t),bt=_t)},setFunc:function(_t){if(Lt&&(_t=oA[_t]),zt!==_t){switch(_t){case Fh:o.depthFunc(o.NEVER);break;case Bh:o.depthFunc(o.ALWAYS);break;case Ih:o.depthFunc(o.LESS);break;case Ds:o.depthFunc(o.LEQUAL);break;case Hh:o.depthFunc(o.EQUAL);break;case Gh:o.depthFunc(o.GEQUAL);break;case Vh:o.depthFunc(o.GREATER);break;case Xh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){St!==_t&&(Lt&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){k=!1,bt=null,zt=null,St=null,Lt=!1}}}function l(){let k=!1,Lt=null,bt=null,zt=null,St=null,_t=null,At=null,ne=null,Pe=null;return{setTest:function(Ee){k||(Ee?ct(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!k&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,wn,gi){(bt!==Ee||zt!==wn||St!==gi)&&(o.stencilFunc(Ee,wn,gi),bt=Ee,zt=wn,St=gi)},setOp:function(Ee,wn,gi){(_t!==Ee||At!==wn||ne!==gi)&&(o.stencilOp(Ee,wn,gi),_t=Ee,At=wn,ne=gi)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Pe!==Ee&&(o.clearStencil(Ee),Pe=Ee)},reset:function(){k=!1,Lt=null,bt=null,zt=null,St=null,_t=null,At=null,ne=null,Pe=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,D=null,L=null,U=null,F=null,B=null,P=new Le(0,0,0),q=0,A=!1,w=null,V=null,et=null,rt=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),z=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),z=H>=2);let Mt=null,xt={};const O=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),gt=new tn().fromArray(O),Tt=new tn().fromArray(it);function It(k,Lt,bt,zt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<bt;At++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Lt+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const nt={};nt[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Ds),se(!1),Qe(B0),ct(o.CULL_FACE),de(ma);function ct(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Dt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Xt(k,Lt){return _[k]!==Lt?(o.bindFramebuffer(k,Lt),_[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(k,Lt){let bt=E,zt=!1;if(k){bt=S.get(Lt),bt===void 0&&(bt=[],S.set(Lt,bt));const St=k.textures;if(bt.length!==St.length||bt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=o.COLOR_ATTACHMENT0+_t;bt.length=St.length,zt=!0}}else bt[0]!==o.BACK&&(bt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(bt)}function he(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Ke={[Tr]:o.FUNC_ADD,[uM]:o.FUNC_SUBTRACT,[fM]:o.FUNC_REVERSE_SUBTRACT};Ke[hM]=o.MIN,Ke[dM]=o.MAX;const ge={[pM]:o.ZERO,[mM]:o.ONE,[gM]:o.SRC_COLOR,[Ph]:o.SRC_ALPHA,[yM]:o.SRC_ALPHA_SATURATE,[SM]:o.DST_COLOR,[vM]:o.DST_ALPHA,[_M]:o.ONE_MINUS_SRC_COLOR,[zh]:o.ONE_MINUS_SRC_ALPHA,[MM]:o.ONE_MINUS_DST_COLOR,[xM]:o.ONE_MINUS_DST_ALPHA,[EM]:o.CONSTANT_COLOR,[bM]:o.ONE_MINUS_CONSTANT_COLOR,[TM]:o.CONSTANT_ALPHA,[AM]:o.ONE_MINUS_CONSTANT_ALPHA};function de(k,Lt,bt,zt,St,_t,At,ne,Pe,Ee){if(k===ma){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),k!==cM){if(k!==y||Ee!==A){if((x!==Tr||U!==Tr)&&(o.blendEquation(o.FUNC_ADD),x=Tr,U=Tr),Ee)switch(k){case Cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I0:o.blendFunc(o.ONE,o.ONE);break;case H0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Re("WebGLState: Invalid blending: ",k);break}else switch(k){case Cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case H0:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G0:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",k);break}D=null,L=null,F=null,B=null,P.set(0,0,0),q=0,y=k,A=Ee}return}St=St||Lt,_t=_t||bt,At=At||zt,(Lt!==x||St!==U)&&(o.blendEquationSeparate(Ke[Lt],Ke[St]),x=Lt,U=St),(bt!==D||zt!==L||_t!==F||At!==B)&&(o.blendFuncSeparate(ge[bt],ge[zt],ge[_t],ge[At]),D=bt,L=zt,F=_t,B=At),(ne.equals(P)===!1||Pe!==q)&&(o.blendColor(ne.r,ne.g,ne.b,Pe),P.copy(ne),q=Pe),y=k,A=!1}function Ce(k,Lt){k.side===da?Dt(o.CULL_FACE):ct(o.CULL_FACE);let bt=k.side===Wn;Lt&&(bt=!bt),se(bt),k.blending===Cs&&k.transparent===!1?de(ma):de(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ye(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Qe(k){k!==sM?(ct(o.CULL_FACE),k!==V&&(k===B0?o.cullFace(o.BACK):k===oM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),V=k}function G(k){k!==et&&(z&&o.lineWidth(k),et=k)}function Ye(k,Lt,bt){k?(ct(o.POLYGON_OFFSET_FILL),(rt!==Lt||dt!==bt)&&(o.polygonOffset(Lt,bt),rt=Lt,dt=bt)):Dt(o.POLYGON_OFFSET_FILL)}function Me(k){k?ct(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=o.TEXTURE0+ut-1),Mt!==k&&(o.activeTexture(k),Mt=k)}function Yt(k,Lt,bt){bt===void 0&&(Mt===null?bt=o.TEXTURE0+ut-1:bt=Mt);let zt=xt[bt];zt===void 0&&(zt={type:void 0,texture:void 0},xt[bt]=zt),(zt.type!==k||zt.texture!==Lt)&&(Mt!==bt&&(o.activeTexture(bt),Mt=bt),o.bindTexture(k,Lt||nt[k]),zt.type=k,zt.texture=Lt)}function N(){const k=xt[Mt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ht(){try{o.texSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function vt(){try{o.texSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Ct(){try{o.texStorage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function kt(){try{o.texStorage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function ee(){try{o.texImage2D(...arguments)}catch(k){Re("WebGLState:",k)}}function yt(){try{o.texImage3D(...arguments)}catch(k){Re("WebGLState:",k)}}function Et(k){gt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function Ft(k){Tt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function Pt(k,Lt){let bt=p.get(Lt);bt===void 0&&(bt=new WeakMap,p.set(Lt,bt));let zt=bt.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Lt,k.name),bt.set(k,zt))}function wt(k,Lt){const zt=p.get(Lt).get(k);m.get(Lt)!==zt&&(o.uniformBlockBinding(Lt,zt,k.__bindingPointIndex),m.set(Lt,zt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Mt=null,xt={},_={},S=new WeakMap,E=[],R=null,C=!1,y=null,x=null,D=null,L=null,U=null,F=null,B=null,P=new Le(0,0,0),q=0,A=!1,w=null,V=null,et=null,rt=null,dt=null,gt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ct,disable:Dt,bindFramebuffer:Xt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:Ce,setFlipSided:se,setCullFace:Qe,setLineWidth:G,setPolygonOffset:Ye,setScissorTest:Me,activeTexture:Ne,bindTexture:Yt,unbindTexture:N,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:ee,texImage3D:yt,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Ct,texStorage3D:kt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Zt,scissor:Et,viewport:Ft,reset:le}}function cA(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ye,v=new WeakMap;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(N,M){return E?new OffscreenCanvas(N,M):Gc("canvas")}function C(N,M,W){let ht=1;const vt=Yt(N);if((vt.width>W||vt.height>W)&&(ht=W/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ht*vt.width),Zt=Math.floor(ht*vt.height);_===void 0&&(_=R(lt,Zt));const Ct=M?R(lt,Zt):_;return Ct.width=lt,Ct.height=Zt,Ct.getContext("2d").drawImage(N,0,0,lt,Zt),re("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Zt+")."),Ct}else return"data"in N&&re("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(N,M,W,ht,vt=!1){if(N!==null){if(o[N]!==void 0)return o[N];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=M;if(M===o.RED&&(W===o.FLOAT&&(lt=o.R32F),W===o.HALF_FLOAT&&(lt=o.R16F),W===o.UNSIGNED_BYTE&&(lt=o.R8)),M===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.R8UI),W===o.UNSIGNED_SHORT&&(lt=o.R16UI),W===o.UNSIGNED_INT&&(lt=o.R32UI),W===o.BYTE&&(lt=o.R8I),W===o.SHORT&&(lt=o.R16I),W===o.INT&&(lt=o.R32I)),M===o.RG&&(W===o.FLOAT&&(lt=o.RG32F),W===o.HALF_FLOAT&&(lt=o.RG16F),W===o.UNSIGNED_BYTE&&(lt=o.RG8)),M===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RG8UI),W===o.UNSIGNED_SHORT&&(lt=o.RG16UI),W===o.UNSIGNED_INT&&(lt=o.RG32UI),W===o.BYTE&&(lt=o.RG8I),W===o.SHORT&&(lt=o.RG16I),W===o.INT&&(lt=o.RG32I)),M===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),W===o.UNSIGNED_INT&&(lt=o.RGB32UI),W===o.BYTE&&(lt=o.RGB8I),W===o.SHORT&&(lt=o.RGB16I),W===o.INT&&(lt=o.RGB32I)),M===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),W===o.UNSIGNED_INT&&(lt=o.RGBA32UI),W===o.BYTE&&(lt=o.RGBA8I),W===o.SHORT&&(lt=o.RGBA16I),W===o.INT&&(lt=o.RGBA32I)),M===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),M===o.RGBA){const Zt=vt?Ic:be.getTransfer(ht);W===o.FLOAT&&(lt=o.RGBA32F),W===o.HALF_FLOAT&&(lt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(lt=Zt===Ie?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function U(N,M){let W;return N?M===null||M===Hi||M===ko?W=o.DEPTH24_STENCIL8:M===Pi?W=o.DEPTH32F_STENCIL8:M===Xo&&(W=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===ko?W=o.DEPTH_COMPONENT24:M===Pi?W=o.DEPTH_COMPONENT32F:M===Xo&&(W=o.DEPTH_COMPONENT16),W}function F(N,M){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Cn&&N.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function B(N){const M=N.target;M.removeEventListener("dispose",B),q(M),M.isVideoTexture&&v.delete(M)}function P(N){const M=N.target;M.removeEventListener("dispose",P),w(M)}function q(N){const M=r.get(N);if(M.__webglInit===void 0)return;const W=N.source,ht=S.get(W);if(ht){const vt=ht[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(N),Object.keys(ht).length===0&&S.delete(W)}r.remove(N)}function A(N){const M=r.get(N);o.deleteTexture(M.__webglTexture);const W=N.source,ht=S.get(W);delete ht[M.__cacheKey],h.memory.textures--}function w(N){const M=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(M.__webglFramebuffer[ht]))for(let vt=0;vt<M.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ht]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ht])}else{if(Array.isArray(M.__webglFramebuffer))for(let ht=0;ht<M.__webglFramebuffer.length;ht++)o.deleteFramebuffer(M.__webglFramebuffer[ht]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ht=0;ht<M.__webglColorRenderbuffer.length;ht++)M.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ht]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=N.textures;for(let ht=0,vt=W.length;ht<vt;ht++){const lt=r.get(W[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(W[ht])}r.remove(N)}let V=0;function et(){V=0}function rt(){const N=V;return N>=l.maxTextures&&re("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function dt(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function ut(N,M){const W=r.get(N);if(N.isVideoTexture&&Me(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const ht=N.image;if(ht===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(W,N,M);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+M)}function z(N,M){const W=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){nt(W,N,M);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+M)}function H(N,M){const W=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){nt(W,N,M);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+M)}function at(N,M){const W=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ct(W,N,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+M)}const Mt={[qh]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Yh]:o.MIRRORED_REPEAT},xt={[Cn]:o.NEAREST,[wM]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[nh]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},O={[LM]:o.NEVER,[FM]:o.ALWAYS,[NM]:o.LESS,[Fd]:o.LEQUAL,[OM]:o.EQUAL,[Bd]:o.GEQUAL,[PM]:o.GREATER,[zM]:o.NOTEQUAL};function it(N,M){if(M.type===Pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===nh||M.magFilter===uc||M.magFilter===Rr||M.minFilter===Nn||M.minFilter===nh||M.minFilter===uc||M.minFilter===Rr)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,Mt[M.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,Mt[M.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,Mt[M.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Cn||M.minFilter!==uc&&M.minFilter!==Rr||M.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function gt(N,M){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",B));const ht=M.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const lt=dt(M);if(lt!==N.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),vt[lt].usedTimes++;const Zt=vt[N.__cacheKey];Zt!==void 0&&(vt[N.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(M)),N.__cacheKey=lt,N.__webglTexture=vt[lt].texture}return W}function Tt(N,M,W){return Math.floor(Math.floor(N/W)/M)}function It(N,M,W,ht){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,W,ht,M.data);else{lt.sort((yt,Et)=>yt.start-Et.start);let Zt=0;for(let yt=1;yt<lt.length;yt++){const Et=lt[Zt],Ft=lt[yt],Pt=Et.start+Et.count,wt=Tt(Ft.start,M.width,4),le=Tt(Et.start,M.width,4);Ft.start<=Pt+1&&wt===le&&Tt(Ft.start+Ft.count-1,M.width,4)===wt?Et.count=Math.max(Et.count,Ft.start+Ft.count-Et.start):(++Zt,lt[Zt]=Ft)}lt.length=Zt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),kt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let yt=0,Et=lt.length;yt<Et;yt++){const Ft=lt[yt],Pt=Math.floor(Ft.start/4),wt=Math.ceil(Ft.count/4),le=Pt%M.width,k=Math.floor(Pt/M.width),Lt=wt,bt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,le,k,Lt,bt,W,ht,M.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function nt(N,M,W){let ht=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=gt(N,M),lt=M.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+W);const Zt=r.get(lt);if(lt.version!==Zt.__version||vt===!0){i.activeTexture(o.TEXTURE0+W);const Ct=be.getPrimaries(be.workingColorSpace),kt=M.colorSpace===Qa?null:be.getPrimaries(M.colorSpace),ee=M.colorSpace===Qa||Ct===kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let yt=C(M.image,!1,l.maxTextureSize);yt=Ne(M,yt);const Et=u.convert(M.format,M.colorSpace),Ft=u.convert(M.type);let Pt=L(M.internalFormat,Et,Ft,M.colorSpace,M.isVideoTexture);it(ht,M);let wt;const le=M.mipmaps,k=M.isVideoTexture!==!0,Lt=Zt.__version===void 0||vt===!0,bt=lt.dataReady,zt=F(M,yt);if(M.isDepthTexture)Pt=U(M.format===Cr,M.type),Lt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Pt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,Pt,yt.width,yt.height,0,Et,Ft,null));else if(M.isDataTexture)if(le.length>0){k&&Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)wt=le[St],k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,Et,Ft,wt.data);M.generateMipmaps=!1}else k?(Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,yt.width,yt.height),bt&&It(M,yt,Et,Ft)):i.texImage2D(o.TEXTURE_2D,0,Pt,yt.width,yt.height,0,Et,Ft,yt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){k&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,le[0].width,le[0].height,yt.depth);for(let St=0,_t=le.length;St<_t;St++)if(wt=le[St],M.format!==Ai)if(Et!==null)if(k){if(bt)if(M.layerUpdates.size>0){const At=h_(wt.width,wt.height,M.format,M.type);for(const ne of M.layerUpdates){const Pe=wt.data.subarray(ne*At/wt.data.BYTES_PER_ELEMENT,(ne+1)*At/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ne,wt.width,wt.height,1,Et,Pe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,yt.depth,Et,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Pt,wt.width,wt.height,yt.depth,0,wt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?bt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,wt.width,wt.height,yt.depth,Et,Ft,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Pt,wt.width,wt.height,yt.depth,0,Et,Ft,wt.data)}else{k&&Lt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)wt=le[St],M.format!==Ai?Et!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,wt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,wt.width,wt.height,Et,Ft,wt.data):i.texImage2D(o.TEXTURE_2D,St,Pt,wt.width,wt.height,0,Et,Ft,wt.data)}else if(M.isDataArrayTexture)if(k){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,yt.width,yt.height,yt.depth),bt)if(M.layerUpdates.size>0){const St=h_(yt.width,yt.height,M.format,M.type);for(const _t of M.layerUpdates){const At=yt.data.subarray(_t*St/yt.data.BYTES_PER_ELEMENT,(_t+1)*St/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,yt.width,yt.height,1,Et,Ft,At)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,Ft,yt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,yt.width,yt.height,yt.depth,0,Et,Ft,yt.data);else if(M.isData3DTexture)k?(Lt&&i.texStorage3D(o.TEXTURE_3D,zt,Pt,yt.width,yt.height,yt.depth),bt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,Ft,yt.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,yt.width,yt.height,yt.depth,0,Et,Ft,yt.data);else if(M.isFramebufferTexture){if(Lt)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Pt,yt.width,yt.height);else{let St=yt.width,_t=yt.height;for(let At=0;At<zt;At++)i.texImage2D(o.TEXTURE_2D,At,Pt,St,_t,0,Et,Ft,null),St>>=1,_t>>=1}}else if(le.length>0){if(k&&Lt){const St=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,zt,Pt,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)wt=le[St],k?bt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,Ft,wt):i.texImage2D(o.TEXTURE_2D,St,Pt,Et,Ft,wt);M.generateMipmaps=!1}else if(k){if(Lt){const St=Yt(yt);i.texStorage2D(o.TEXTURE_2D,zt,Pt,St.width,St.height)}bt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,Ft,yt)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Et,Ft,yt);y(M)&&x(ht),Zt.__version=lt.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function ct(N,M,W){if(M.image.length!==6)return;const ht=gt(N,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+W);const lt=r.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+W);const Zt=be.getPrimaries(be.workingColorSpace),Ct=M.colorSpace===Qa?null:be.getPrimaries(M.colorSpace),kt=M.colorSpace===Qa||Zt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,yt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!yt?Et[_t]=C(M.image[_t],!0,l.maxCubemapSize):Et[_t]=yt?M.image[_t].image:M.image[_t],Et[_t]=Ne(M,Et[_t]);const Ft=Et[0],Pt=u.convert(M.format,M.colorSpace),wt=u.convert(M.type),le=L(M.internalFormat,Pt,wt,M.colorSpace),k=M.isVideoTexture!==!0,Lt=lt.__version===void 0||ht===!0,bt=vt.dataReady;let zt=F(M,Ft);it(o.TEXTURE_CUBE_MAP,M);let St;if(ee){k&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,Ft.width,Ft.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];M.format!==Ai?Pt!==null?k?bt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Pt,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Pt,wt,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,Pt,wt,ne.data)}}}else{if(St=M.mipmaps,k&&Lt){St.length>0&&zt++;const _t=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(yt){k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Pt,wt,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Pt,wt,Et[_t].data);for(let At=0;At<St.length;At++){const Pe=St[At].image[_t].image;k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Pe.width,Pe.height,Pt,wt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Pe.width,Pe.height,0,Pt,wt,Pe.data)}}else{k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,wt,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Pt,wt,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];k?bt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Pt,wt,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Pt,wt,ne.image[_t])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Dt(N,M,W,ht,vt,lt){const Zt=u.convert(W.format,W.colorSpace),Ct=u.convert(W.type),kt=L(W.internalFormat,Zt,Ct,W.colorSpace),ee=r.get(M),yt=r.get(W);if(yt.__renderTarget=M,!ee.__hasExternalTextures){const Et=Math.max(1,M.width>>lt),Ft=Math.max(1,M.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,kt,Et,Ft,M.depth,0,Zt,Ct,null):i.texImage2D(vt,lt,kt,Et,Ft,0,Zt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ye(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,0,G(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,yt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(N,M,W){if(o.bindRenderbuffer(o.RENDERBUFFER,N),M.depthBuffer){const ht=M.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=U(M.stencilBuffer,vt),Zt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ye(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),lt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),lt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,lt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,N)}else{const ht=M.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],Zt=u.convert(lt.format,lt.colorSpace),Ct=u.convert(lt.type),kt=L(lt.internalFormat,Zt,Ct,lt.colorSpace);Ye(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(M),kt,M.width,M.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(M),kt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,kt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(N,M,W){const ht=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",B)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),it(o.TEXTURE_CUBE_MAP,M.depthTexture);const ee=u.convert(M.depthTexture.format),yt=u.convert(M.depthTexture.type);let Et;M.depthTexture.format===va?Et=o.DEPTH_COMPONENT24:M.depthTexture.format===Cr&&(Et=o.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Et,M.width,M.height,0,ee,yt,null)}}else ut(M.depthTexture,0);const lt=vt.__webglTexture,Zt=G(M),Ct=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,kt=M.depthTexture.format===Cr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===va)Ye(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Ct,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Ct,lt,0);else if(M.depthTexture.format===Cr)Ye(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,kt,Ct,lt,0,Zt):o.framebufferTexture2D(o.FRAMEBUFFER,kt,Ct,lt,0);else throw new Error("Unknown depthTexture format")}function he(N){const M=r.get(N),W=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ht){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ht}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ht=0;ht<6;ht++)Ht(M.__webglFramebuffer[ht],N,ht);else{const ht=N.texture.mipmaps;ht&&ht.length>0?Ht(M.__webglFramebuffer[0],N,0):Ht(M.__webglFramebuffer,N,0)}else if(W){M.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ht]),M.__webglDepthbuffer[ht]===void 0)M.__webglDepthbuffer[ht]=o.createRenderbuffer(),Xt(M.__webglDepthbuffer[ht],N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Xt(M.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(N,M,W){const ht=r.get(N);M!==void 0&&Dt(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&he(N)}function ge(N){const M=N.texture,W=r.get(N),ht=r.get(M);N.addEventListener("dispose",P);const vt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Zt=vt.length>1;if(Zt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=M.version,h.memory.textures++),lt){W.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Ct]=[];for(let kt=0;kt<M.mipmaps.length;kt++)W.__webglFramebuffer[Ct][kt]=o.createFramebuffer()}else W.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)W.__webglFramebuffer[Ct]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Ct=0,kt=vt.length;Ct<kt;Ct++){const ee=r.get(vt[Ct]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ye(N)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ct=0;Ct<vt.length;Ct++){const kt=vt[Ct];W.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct]);const ee=u.convert(kt.format,kt.colorSpace),yt=u.convert(kt.type),Et=L(kt.internalFormat,ee,yt,kt.colorSpace,N.isXRRenderTarget===!0),Ft=G(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,Et,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt(W.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),it(o.TEXTURE_CUBE_MAP,M);for(let Ct=0;Ct<6;Ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Dt(W.__webglFramebuffer[Ct][kt],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,kt);else Dt(W.__webglFramebuffer[Ct],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(M)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Ct=0,kt=vt.length;Ct<kt;Ct++){const ee=vt[Ct],yt=r.get(ee);let Et=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,yt.__webglTexture),it(Et,ee),Dt(W.__webglFramebuffer,N,ee,o.COLOR_ATTACHMENT0+Ct,Et,0),y(ee)&&x(Et)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),it(Ct,M),M.mipmaps&&M.mipmaps.length>0)for(let kt=0;kt<M.mipmaps.length;kt++)Dt(W.__webglFramebuffer[kt],N,M,o.COLOR_ATTACHMENT0,Ct,kt);else Dt(W.__webglFramebuffer,N,M,o.COLOR_ATTACHMENT0,Ct,0);y(M)&&x(Ct),i.unbindTexture()}N.depthBuffer&&he(N)}function de(N){const M=N.textures;for(let W=0,ht=M.length;W<ht;W++){const vt=M[W];if(y(vt)){const lt=D(N),Zt=r.get(vt).__webglTexture;i.bindTexture(lt,Zt),x(lt),i.unbindTexture()}}}const Ce=[],se=[];function Qe(N){if(N.samples>0){if(Ye(N)===!1){const M=N.textures,W=N.width,ht=N.height;let vt=o.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(N),Ct=M.length>1;if(Ct)for(let ee=0;ee<M.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const kt=N.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const yt=r.get(M[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,W,ht,0,0,W,ht,vt,o.NEAREST),m===!0&&(Ce.length=0,se.length=0,Ce.push(o.COLOR_ATTACHMENT0+ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ce.push(lt),se.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let ee=0;ee<M.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const yt=r.get(M[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,yt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const M=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function G(N){return Math.min(l.maxSamples,N.samples)}function Ye(N){const M=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(N){const M=h.render.frame;v.get(N)!==M&&(v.set(N,M),N.update())}function Ne(N,M){const W=N.colorSpace,ht=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Ns&&W!==Qa&&(be.getTransfer(W)===Ie?(ht!==Ai||vt!==ei)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",W)),M}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=et,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=Ke,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function uA(o,e){function i(r,l=Qa){let u;const h=be.getTransfer(l);if(r===ei)return o.UNSIGNED_BYTE;if(r===Ld)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Nd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===nv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===$_)return o.BYTE;if(r===tv)return o.SHORT;if(r===Xo)return o.UNSIGNED_SHORT;if(r===Ud)return o.INT;if(r===Hi)return o.UNSIGNED_INT;if(r===Pi)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===iv)return o.ALPHA;if(r===av)return o.RGB;if(r===Ai)return o.RGBA;if(r===va)return o.DEPTH_COMPONENT;if(r===Cr)return o.DEPTH_STENCIL;if(r===rv)return o.RED;if(r===Od)return o.RED_INTEGER;if(r===Ls)return o.RG;if(r===Pd)return o.RG_INTEGER;if(r===zd)return o.RGBA_INTEGER;if(r===Lc||r===Nc||r===Oc||r===Pc)if(h===Ie)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Oc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Zh||r===Kh||r===Qh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Jh||r===$h)return h===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===td)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===ed)return u.COMPRESSED_R11_EAC;if(r===nd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===id)return u.COMPRESSED_RG11_EAC;if(r===ad)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rd||r===sd||r===od||r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===od)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ld)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===md)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_d)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return h===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xd||r===Sd||r===Md)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xd)return h===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Md)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yd||r===Ed||r===bd||r===Td)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===yd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Td)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ko?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hA=`
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

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new vv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Vi({vertexShader:fA,fragmentShader:hA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pA extends Ps{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,S=null,E=null,R=null;const C=typeof XRWebGLBinding<"u",y=new dA,x={},D=i.getContextAttributes();let L=null,U=null;const F=[],B=[],P=new ye;let q=null;const A=new pi;A.viewport=new tn;const w=new pi;w.viewport=new tn;const V=[A,w],et=new by;let rt=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=F[nt];return ct===void 0&&(ct=new Th,F[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=F[nt];return ct===void 0&&(ct=new Th,F[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=F[nt];return ct===void 0&&(ct=new Th,F[nt]=ct),ct.getHandSpace()};function ut(nt){const ct=B.indexOf(nt.inputSource);if(ct===-1)return;const Dt=F[ct];Dt!==void 0&&(Dt.update(nt.inputSource,nt.frame,p||h),Dt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function z(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let nt=0;nt<F.length;nt++){const ct=B[nt];ct!==null&&(B[nt]=null,F[nt].disconnect(ct))}rt=null,dt=null,y.reset();for(const nt in x)delete x[nt];e.setRenderTarget(L),E=null,S=null,_=null,l=null,U=null,It.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,r.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,r.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Xt=null,Ht=null;D.depth&&(Ht=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=D.stencil?Cr:va,Xt=D.stencil?ko:Hi);const he={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Bi(S.textureWidth,S.textureHeight,{format:Ai,type:ei,depthTexture:new qo(S.textureWidth,S.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(nt){for(let ct=0;ct<nt.removed.length;ct++){const Dt=nt.removed[ct],Xt=B.indexOf(Dt);Xt>=0&&(B[Xt]=null,F[Xt].disconnect(Dt))}for(let ct=0;ct<nt.added.length;ct++){const Dt=nt.added[ct];let Xt=B.indexOf(Dt);if(Xt===-1){for(let he=0;he<F.length;he++)if(he>=B.length){B.push(Dt),Xt=he;break}else if(B[he]===null){B[he]=Dt,Xt=he;break}if(Xt===-1)break}const Ht=F[Xt];Ht&&Ht.connect(Dt)}}const at=new J,Mt=new J;function xt(nt,ct,Dt){at.setFromMatrixPosition(ct.matrixWorld),Mt.setFromMatrixPosition(Dt.matrixWorld);const Xt=at.distanceTo(Mt),Ht=ct.projectionMatrix.elements,he=Dt.projectionMatrix.elements,Ke=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],Ce=(Ht[9]-1)/Ht[5],se=(Ht[8]-1)/Ht[0],Qe=(he[8]+1)/he[0],G=Ke*se,Ye=Ke*Qe,Me=Xt/(-se+Qe),Ne=Me*-se;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ne),nt.translateZ(Me),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ht[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=Ke+Me,N=ge+Me,M=G-Ne,W=Ye+(Xt-Ne),ht=de*ge/N*Yt,vt=Ce*ge/N*Yt;nt.projectionMatrix.makePerspective(M,W,ht,vt,Yt,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function O(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ct=nt.near,Dt=nt.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),et.near=w.near=A.near=ct,et.far=w.far=A.far=Dt,(rt!==et.near||dt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),rt=et.near,dt=et.far),et.layers.mask=nt.layers.mask|6,A.layers.mask=et.layers.mask&3,w.layers.mask=et.layers.mask&5;const Xt=nt.parent,Ht=et.cameras;O(et,Xt);for(let he=0;he<Ht.length;he++)O(Ht[he],Xt);Ht.length===2?xt(et,A,w):et.projectionMatrix.copy(A.projectionMatrix),it(nt,et,Xt)};function it(nt,ct,Dt){Dt===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(Dt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ad*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(nt){m=nt,S!==null&&(S.fixedFoveation=nt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(nt){return x[nt]};let gt=null;function Tt(nt,ct){if(v=ct.getViewerPose(p||h),R=ct,v!==null){const Dt=v.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Xt=!1;Dt.length!==et.cameras.length&&(et.cameras.length=0,Xt=!0);for(let ge=0;ge<Dt.length;ge++){const de=Dt[ge];let Ce=null;if(E!==null)Ce=E.getViewport(de);else{const Qe=_.getViewSubImage(S,de);Ce=Qe.viewport,ge===0&&(e.setRenderTargetTextures(U,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(U))}let se=V[ge];se===void 0&&(se=new pi,se.layers.enable(ge),se.viewport=new tn,V[ge]=se),se.matrix.fromArray(de.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(de.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(et.matrix.copy(se.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Xt===!0&&et.cameras.push(se)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ge=_.getDepthInformation(Dt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ge=0;ge<Dt.length;ge++){const de=Dt[ge].camera;if(de){let Ce=x[de];Ce||(Ce=new vv,x[de]=Ce);const se=_.getCameraImage(de);Ce.sourceTexture=se}}}}for(let Dt=0;Dt<F.length;Dt++){const Xt=B[Dt],Ht=F[Dt];Xt!==null&&Ht!==void 0&&Ht.update(Xt,ct,p||h)}gt&&gt(nt,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),R=null}const It=new Sv;It.setAnimationLoop(Tt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const Er=new Gi,mA=new en;function gA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,pv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,D,L,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),v(y,x)):x.isMeshStandardMaterial?(u(y,x),S(y,x),x.isMeshPhysicalMaterial&&E(y,x,U)):x.isMeshMatcapMaterial?(u(y,x),R(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),C(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,D,L):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Wn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Wn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),L=D.envMap,U=D.envMapRotation;L&&(y.envMap.value=L,Er.copy(U),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(mA.makeRotationFromEuler(Er)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,D,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=L*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function _A(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const U=L.program;r.uniformBlockBinding(D,U)}function p(D,L){let U=l[D.id];U===void 0&&(R(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",y));const F=L.program;r.updateUBOMapping(D,F);const B=e.render.frame;u[D.id]!==B&&(S(D),u[D.id]=B)}function v(D){const L=_();D.__bindingPointIndex=L;const U=o.createBuffer(),F=D.__size,B=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function _(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const L=l[D.id],U=D.uniforms,F=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let B=0,P=U.length;B<P;B++){const q=Array.isArray(U[B])?U[B]:[U[B]];for(let A=0,w=q.length;A<w;A++){const V=q[A];if(E(V,B,A,F)===!0){const et=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ut=0;ut<rt.length;ut++){const z=rt[ut],H=C(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,et+dt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,L,U,F){const B=D.value,P=L+"_"+U;if(F[P]===void 0)return typeof B=="number"||typeof B=="boolean"?F[P]=B:F[P]=B.clone(),!0;{const q=F[P];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[P]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function R(D){const L=D.uniforms;let U=0;const F=16;for(let P=0,q=L.length;P<q;P++){const A=Array.isArray(L[P])?L[P]:[L[P]];for(let w=0,V=A.length;w<V;w++){const et=A[w],rt=Array.isArray(et.value)?et.value:[et.value];for(let dt=0,ut=rt.length;dt<ut;dt++){const z=rt[dt],H=C(z),at=U%F,Mt=at%H.boundary,xt=at+Mt;U+=Mt,xt!==0&&F-xt<H.storage&&(U+=F-xt),et.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=U,U+=H.storage}}}const B=U%F;return B>0&&(U+=F-B),D.__size=U,D.__cache={},this}function C(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},u={}}return{bind:m,update:p,dispose:x}}const vA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function xA(){return Ni===null&&(Ni=new hy(vA,16,16,Ls,_a),Ni.name="DFG_LUT",Ni.minFilter=Nn,Ni.magFilter=Nn,Ni.wrapS=pa,Ni.wrapT=pa,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class SA{constructor(e={}){const{canvas:i=BM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:E=ei}=e;this.isWebGLRenderer=!0;let R;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=r.getContextAttributes().alpha}else R=h;const C=E,y=new Set([zd,Pd,Od]),x=new Set([ei,Hi,Xo,ko,Ld,Nd]),D=new Uint32Array(4),L=new Int32Array(4);let U=null,F=null;const B=[],P=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let w=!1;this._outputColorSpace=di;let V=0,et=0,rt=null,dt=-1,ut=null;const z=new tn,H=new tn;let at=null;const Mt=new Le(0);let xt=0,O=i.width,it=i.height,gt=1,Tt=null,It=null;const nt=new tn(0,0,O,it),ct=new tn(0,0,O,it);let Dt=!1;const Xt=new Gd;let Ht=!1,he=!1;const Ke=new en,ge=new J,de=new tn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Qe(){return rt===null?gt:1}let G=r;function Ye(T,Y){return i.getContext(T,Y)}try{const T={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const Y="webgl2";if(G=Ye(Y,T),G===null)throw Ye(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Re("WebGLRenderer: "+T.message),T}let Me,Ne,Yt,N,M,W,ht,vt,lt,Zt,Ct,kt,ee,yt,Et,Ft,Pt,wt,le,k,Lt,bt,zt,St;function _t(){Me=new xb(G),Me.init(),bt=new uA(G,Me),Ne=new ub(G,Me,e,bt),Yt=new lA(G,Me),Ne.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),N=new yb(G),M=new YT,W=new cA(G,Me,Yt,M,Ne,bt,N),ht=new hb(A),vt=new vb(A),lt=new Ay(G),zt=new lb(G,lt),Zt=new Sb(G,lt,N,zt),Ct=new bb(G,Zt,lt,N),le=new Eb(G,Ne,W),Ft=new fb(M),kt=new qT(A,ht,vt,Me,Ne,zt,Ft),ee=new gA(A,M),yt=new ZT,Et=new eA(Me),wt=new ob(A,ht,vt,Yt,Ct,R,m),Pt=new sA(A,Ct,Ne),St=new _A(G,N,Ne,Yt),k=new cb(G,Me,N),Lt=new Mb(G,Me,N),N.programs=kt.programs,A.capabilities=Ne,A.extensions=Me,A.properties=M,A.renderLists=yt,A.shadowMap=Pt,A.state=Yt,A.info=N}_t(),C!==ei&&(q=new Ab(C,i.width,i.height,l,u));const At=new pA(A,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(O,it,!1))},this.getSize=function(T){return T.set(O,it)},this.setSize=function(T,Y,st=!0){if(At.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}O=T,it=Y,i.width=Math.floor(T*gt),i.height=Math.floor(Y*gt),st===!0&&(i.style.width=T+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(O*gt,it*gt).floor()},this.setDrawingBufferSize=function(T,Y,st){O=T,it=Y,gt=st,i.width=Math.floor(T*st),i.height=Math.floor(Y*st),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(C===ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,Y,st,$){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,Y,st,$),Yt.viewport(z.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,Y,st,$){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,Y,st,$),Yt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(T){Yt.setScissorTest(Dt=T)},this.setOpaqueSort=function(T){Tt=T},this.setTransparentSort=function(T){It=T},this.getClearColor=function(T){return T.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,st=!0){let $=0;if(T){let Z=!1;if(rt!==null){const Ut=rt.texture.format;Z=y.has(Ut)}if(Z){const Ut=rt.texture.type,Bt=x.has(Ut),Nt=wt.getClearColor(),Gt=wt.getClearAlpha(),Wt=Nt.r,Jt=Nt.g,qt=Nt.b;Bt?(D[0]=Wt,D[1]=Jt,D[2]=qt,D[3]=Gt,G.clearBufferuiv(G.COLOR,0,D)):(L[0]=Wt,L[1]=Jt,L[2]=qt,L[3]=Gt,G.clearBufferiv(G.COLOR,0,L))}else $|=G.COLOR_BUFFER_BIT}Y&&($|=G.DEPTH_BUFFER_BIT),st&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),wt.dispose(),yt.dispose(),Et.dispose(),M.dispose(),ht.dispose(),vt.dispose(),Ct.dispose(),zt.dispose(),St.dispose(),kt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Lr),At.removeEventListener("sessionend",Hs),Ci.stop()};function ne(T){T.preventDefault(),q0("WebGLRenderer: Context Lost."),w=!0}function Pe(){q0("WebGLRenderer: Context Restored."),w=!1;const T=N.autoReset,Y=Pt.enabled,st=Pt.autoUpdate,$=Pt.needsUpdate,Z=Pt.type;_t(),N.autoReset=T,Pt.enabled=Y,Pt.autoUpdate=st,Pt.needsUpdate=$,Pt.type=Z}function Ee(T){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wn(T){const Y=T.target;Y.removeEventListener("dispose",wn),gi(Y)}function gi(T){$o(T),M.remove(T)}function $o(T){const Y=M.get(T).programs;Y!==void 0&&(Y.forEach(function(st){kt.releaseProgram(st)}),T.isShaderMaterial&&kt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,st,$,Z,Ut){Y===null&&(Y=Ce);const Bt=Z.isMesh&&Z.matrixWorld.determinant()<0,Nt=tr(T,Y,st,$,Z);Yt.setMaterial($,Bt);let Gt=st.index,Wt=1;if($.wireframe===!0){if(Gt=Zt.getWireframeAttribute(st),Gt===void 0)return;Wt=2}const Jt=st.drawRange,qt=st.attributes.position;let $t=Jt.start*Wt,we=(Jt.start+Jt.count)*Wt;Ut!==null&&($t=Math.max($t,Ut.start*Wt),we=Math.min(we,(Ut.start+Ut.count)*Wt)),Gt!==null?($t=Math.max($t,0),we=Math.min(we,Gt.count)):qt!=null&&($t=Math.max($t,0),we=Math.min(we,qt.count));const je=we-$t;if(je<0||je===1/0)return;zt.setup(Z,$,Nt,st,Gt);let ke,Oe=k;if(Gt!==null&&(ke=lt.get(Gt),Oe=Lt,Oe.setIndex(ke)),Z.isMesh)$.wireframe===!0?(Yt.setLineWidth($.wireframeLinewidth*Qe()),Oe.setMode(G.LINES)):Oe.setMode(G.TRIANGLES);else if(Z.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*Qe()),Z.isLineSegments?Oe.setMode(G.LINES):Z.isLineLoop?Oe.setMode(G.LINE_LOOP):Oe.setMode(G.LINE_STRIP)}else Z.isPoints?Oe.setMode(G.POINTS):Z.isSprite&&Oe.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Wo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,De=Z._multiDrawCounts,ie=Z._multiDrawCount,vn=Gt?lt.get(Gt).bytesPerElement:1,ki=M.get($).currentProgram.getUniforms();for(let xn=0;xn<ie;xn++)ki.setValue(G,"_gl_DrawID",xn),Oe.render(Kt[xn]/vn,De[xn])}else if(Z.isInstancedMesh)Oe.renderInstances($t,je,Z.count);else if(st.isInstancedBufferGeometry){const Kt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,De=Math.min(st.instanceCount,Kt);Oe.renderInstances($t,je,De)}else Oe.render($t,je)};function Bs(T,Y,st){T.transparent===!0&&T.side===da&&T.forceSinglePass===!1?(T.side=Wn,T.needsUpdate=!0,Or(T,Y,st),T.side=$a,T.needsUpdate=!0,Or(T,Y,st),T.side=da):Or(T,Y,st)}this.compile=function(T,Y,st=null){st===null&&(st=T),F=Et.get(st),F.init(Y),P.push(F),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),T!==st&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const $=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Nt=Ut[Bt];Bs(Nt,st,Z),$.add(Nt)}else Bs(Ut,st,Z),$.add(Ut)}),F=P.pop(),$},this.compileAsync=function(T,Y,st=null){const $=this.compile(T,Y,st);return new Promise(Z=>{function Ut(){if($.forEach(function(Bt){M.get(Bt).currentProgram.isReady()&&$.delete(Bt)}),$.size===0){Z(T);return}setTimeout(Ut,10)}Me.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Ur=null;function Is(T){Ur&&Ur(T)}function Lr(){Ci.stop()}function Hs(){Ci.start()}const Ci=new Sv;Ci.setAnimationLoop(Is),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){Ur=T,At.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},At.addEventListener("sessionstart",Lr),At.addEventListener("sessionend",Hs),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const st=At.enabled===!0&&At.isPresenting===!0,$=q!==null&&(rt===null||st)&&q.begin(A,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,Y,rt),F=Et.get(T,P.length),F.init(Y),P.push(F),Ke.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Xt.setFromProjectionMatrix(Ke,zi,Y.reversedDepth),he=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,he),U=yt.get(T,B.length),U.init(),B.push(U),At.enabled===!0&&At.isPresenting===!0){const Bt=A.xr.getDepthSensingMesh();Bt!==null&&ni(Bt,Y,-1/0,A.sortObjects)}ni(T,Y,0,A.sortObjects),U.finish(),A.sortObjects===!0&&U.sort(Tt,It),se=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,se&&wt.addToRenderList(U,T),this.info.render.frame++,Ht===!0&&Ft.beginShadows();const Z=F.state.shadowsArray;if(Pt.render(Z,T,Y),Ht===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&q.hasRenderPass())===!1){const Bt=U.opaque,Nt=U.transmissive;if(F.setupLights(),Y.isArrayCamera){const Gt=Y.cameras;if(Nt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];_n(Bt,Nt,T,qt)}se&&wt.render(T);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];rn(U,T,qt,qt.viewport)}}else Nt.length>0&&_n(Bt,Nt,T,Y),se&&wt.render(T),rn(U,T,Y)}rt!==null&&et===0&&(W.updateMultisampleRenderTarget(rt),W.updateRenderTargetMipmap(rt)),$&&q.end(A),T.isScene===!0&&T.onAfterRender(A,T,Y),zt.resetDefaultState(),dt=-1,ut=null,P.pop(),P.length>0?(F=P[P.length-1],Ht===!0&&Ft.setGlobalState(A.clippingPlanes,F.state.camera)):F=null,B.pop(),B.length>0?U=B[B.length-1]:U=null};function ni(T,Y,st,$){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)st=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLight)F.pushLight(T),T.castShadow&&F.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xt.intersectsSprite(T)){$&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);const Bt=Ct.update(T),Nt=T.material;Nt.visible&&U.push(T,Bt,Nt,st,de.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xt.intersectsObject(T))){const Bt=Ct.update(T),Nt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),de.copy(Bt.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(Nt)){const Gt=Bt.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Nt[qt.materialIndex];$t&&$t.visible&&U.push(T,Bt,$t,st,de.z,qt)}}else Nt.visible&&U.push(T,Bt,Nt,st,de.z,null)}}const Ut=T.children;for(let Bt=0,Nt=Ut.length;Bt<Nt;Bt++)ni(Ut[Bt],Y,st,$)}function rn(T,Y,st,$){const{opaque:Z,transmissive:Ut,transparent:Bt}=T;F.setupLightsView(st),Ht===!0&&Ft.setGlobalState(A.clippingPlanes,st),$&&Yt.viewport(z.copy($)),Z.length>0&&_i(Z,Y,st),Ut.length>0&&_i(Ut,Y,st),Bt.length>0&&_i(Bt,Y,st),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function _n(T,Y,st,$){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[$.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[$.id]=new Bi(1,1,{generateMipmaps:!0,type:$t?_a:ei,minFilter:Rr,samples:Ne.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Ut=F.state.transmissionRenderTarget[$.id],Bt=$.viewport||z;Ut.setSize(Bt.z*A.transmissionResolutionScale,Bt.w*A.transmissionResolutionScale);const Nt=A.getRenderTarget(),Gt=A.getActiveCubeFace(),Wt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(Mt),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),se&&wt.render(st);const Jt=A.toneMapping;A.toneMapping=Fi;const qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),F.setupLightsView($),Ht===!0&&Ft.setGlobalState(A.clippingPlanes,$),_i(T,st,$),W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let we=0,je=Y.length;we<je;we++){const ke=Y[we],{object:Oe,geometry:Kt,material:De,group:ie}=ke;if(De.side===da&&Oe.layers.test($.layers)){const vn=De.side;De.side=Wn,De.needsUpdate=!0,Nr(Oe,st,$,Kt,De,ie),De.side=vn,De.needsUpdate=!0,$t=!0}}$t===!0&&(W.updateMultisampleRenderTarget(Ut),W.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Nt,Gt,Wt),A.setClearColor(Mt,xt),qt!==void 0&&($.viewport=qt),A.toneMapping=Jt}function _i(T,Y,st){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Ut=T.length;Z<Ut;Z++){const Bt=T[Z],{object:Nt,geometry:Gt,group:Wt}=Bt;let Jt=Bt.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),Nt.layers.test(st.layers)&&Nr(Nt,Y,st,Gt,Jt,Wt)}}function Nr(T,Y,st,$,Z,Ut){T.onBeforeRender(A,Y,st,$,Z,Ut),T.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(A,Y,st,$,T,Ut),Z.transparent===!0&&Z.side===da&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,A.renderBufferDirect(st,Y,$,Z,T,Ut),Z.side=$a,Z.needsUpdate=!0,A.renderBufferDirect(st,Y,$,Z,T,Ut),Z.side=da):A.renderBufferDirect(st,Y,$,Z,T,Ut),T.onAfterRender(A,Y,st,$,Z,Ut)}function Or(T,Y,st){Y.isScene!==!0&&(Y=Ce);const $=M.get(T),Z=F.state.lights,Ut=F.state.shadowsArray,Bt=Z.state.version,Nt=kt.getParameters(T,Z.state,Ut,Y,st),Gt=kt.getProgramCacheKey(Nt);let Wt=$.programs;$.environment=T.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(T.isMeshStandardMaterial?vt:ht).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Wt===void 0&&(T.addEventListener("dispose",wn),Wt=new Map,$.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===Bt)return Gs(T,Nt),Jt}else Nt.uniforms=kt.getUniforms(T),T.onBeforeCompile(Nt,A),Jt=kt.acquireProgram(Nt,Gt),Wt.set(Gt,Jt),$.uniforms=Nt.uniforms;const qt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qt.clippingPlanes=Ft.uniform),Gs(T,Nt),$.needsLights=xa(T),$.lightsStateVersion=Bt,$.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function tl(T){if(T.uniformsList===null){const Y=T.currentProgram.getUniforms();T.uniformsList=zc.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function Gs(T,Y){const st=M.get(T);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.batchingColor=Y.batchingColor,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function tr(T,Y,st,$,Z){Y.isScene!==!0&&(Y=Ce),W.resetTextureUnits();const Ut=Y.fog,Bt=$.isMeshStandardMaterial?Y.environment:null,Nt=rt===null?A.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ns,Gt=($.isMeshStandardMaterial?vt:ht).get($.envMap||Bt),Wt=$.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qt=!!st.morphAttributes.position,$t=!!st.morphAttributes.normal,we=!!st.morphAttributes.color;let je=Fi;$.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(je=A.toneMapping);const ke=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=ke!==void 0?ke.length:0,Kt=M.get($),De=F.state.lights;if(Ht===!0&&(he===!0||T!==ut)){const Mn=T===ut&&$.id===dt;Ft.setState($,T,Mn)}let ie=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==De.state.version||Kt.outputColorSpace!==Nt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Gt||$.fog===!0&&Kt.fog!==Ut||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Ft.numPlanes||Kt.numIntersection!==Ft.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Jt||Kt.morphTargets!==qt||Kt.morphNormals!==$t||Kt.morphColors!==we||Kt.toneMapping!==je||Kt.morphTargetsCount!==Oe)&&(ie=!0):(ie=!0,Kt.__version=$.version);let vn=Kt.currentProgram;ie===!0&&(vn=Or($,Y,Z));let ki=!1,xn=!1,ii=!1;const ze=vn.getUniforms(),Sn=Kt.uniforms;if(Yt.useProgram(vn.program)&&(ki=!0,xn=!0,ii=!0),$.id!==dt&&(dt=$.id,xn=!0),ki||ut!==T){Yt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ze.setValue(G,"projectionMatrix",T.projectionMatrix),ze.setValue(G,"viewMatrix",T.matrixWorldInverse);const yn=ze.map.cameraPosition;yn!==void 0&&yn.setValue(G,ge.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ze.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),ut!==T&&(ut=T,xn=!0,ii=!0)}if(Kt.needsLights&&(De.state.directionalShadowMap.length>0&&ze.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&ze.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&ze.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),Z.isSkinnedMesh){ze.setOptional(G,Z,"bindMatrix"),ze.setOptional(G,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),ze.setValue(G,"boneTexture",Mn.boneTexture,W))}Z.isBatchedMesh&&(ze.setOptional(G,Z,"batchingTexture"),ze.setValue(G,"batchingTexture",Z._matricesTexture,W),ze.setOptional(G,Z,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",Z._indirectTexture,W),ze.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const fn=st.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&le.update(Z,st,vn),(xn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,ze.setValue(G,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Sn.envMap.value=Gt,Sn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(Sn.envMapIntensity.value=Y.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=xA()),xn&&(ze.setValue(G,"toneMappingExposure",A.toneMappingExposure),Kt.needsLights&&Vs(Sn,ii),Ut&&$.fog===!0&&ee.refreshFogUniforms(Sn,Ut),ee.refreshMaterialUniforms(Sn,$,gt,it,F.state.transmissionRenderTarget[T.id]),zc.upload(G,tl(Kt),Sn,W)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zc.upload(G,tl(Kt),Sn,W),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ze.setValue(G,"center",Z.center),ze.setValue(G,"modelViewMatrix",Z.modelViewMatrix),ze.setValue(G,"normalMatrix",Z.normalMatrix),ze.setValue(G,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Mn=$.uniformsGroups;for(let yn=0,Pr=Mn.length;yn<Pr;yn++){const vi=Mn[yn];St.update(vi,vn),St.bind(vi,vn)}}return vn}function Vs(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function xa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,Y,st){const $=M.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=Y,M.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:st,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){const st=M.get(T);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0};const Sa=G.createFramebuffer();this.setRenderTarget=function(T,Y=0,st=0){rt=T,V=Y,et=st;let $=null,Z=!1,Ut=!1;if(T){const Nt=M.get(T);if(Nt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Nt.__webglFramebuffer),z.copy(T.viewport),H.copy(T.scissor),at=T.scissorTest,Yt.viewport(z),Yt.scissor(H),Yt.setScissorTest(at),dt=-1;return}else if(Nt.__webglFramebuffer===void 0)W.setupRenderTarget(T);else if(Nt.__hasExternalTextures)W.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(Nt.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Ut=!0);const Wt=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?$=Wt[Y][st]:$=Wt[Y],Z=!0):T.samples>0&&W.useMultisampledRTT(T)===!1?$=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[st]:$=Wt,z.copy(T.viewport),H.copy(T.scissor),at=T.scissorTest}else z.copy(nt).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),at=Dt;if(st!==0&&($=Sa),Yt.bindFramebuffer(G.FRAMEBUFFER,$)&&Yt.drawBuffers(T,$),Yt.viewport(z),Yt.scissor(H),Yt.setScissorTest(at),Z){const Nt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,st)}else if(Ut){const Nt=Y;for(let Gt=0;Gt<T.textures.length;Gt++){const Wt=M.get(T.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,st,Nt)}}else if(T!==null&&st!==0){const Nt=M.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Nt.__webglTexture,st)}dt=-1},this.readRenderTargetPixels=function(T,Y,st,$,Z,Ut,Bt,Nt=0){if(!(T&&T.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const Wt=T.textures[Nt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-$&&st>=0&&st<=T.height-Z&&(T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(Y,st,$,Z,bt.convert(Jt),bt.convert(qt),Ut))}finally{const Wt=rt!==null?M.get(rt).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(T,Y,st,$,Z,Ut,Bt,Nt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(Y>=0&&Y<=T.width-$&&st>=0&&st<=T.height-Z){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);const Wt=T.textures[Nt],Jt=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Ut.byteLength,G.STREAM_READ),T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Nt),G.readPixels(Y,st,$,Z,bt.convert(Jt),bt.convert(qt),0);const we=rt!==null?M.get(rt).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,we);const je=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await IM(G,je,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ut),G.deleteBuffer($t),G.deleteSync(je),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,st=0){const $=Math.pow(2,-st),Z=Math.floor(T.image.width*$),Ut=Math.floor(T.image.height*$),Bt=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;W.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,st,0,0,Bt,Nt,Z,Ut),Yt.unbindTexture()};const er=G.createFramebuffer(),Ma=G.createFramebuffer();this.copyTextureToTexture=function(T,Y,st=null,$=null,Z=0,Ut=null){Ut===null&&(Z!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Z,Z=0):Ut=0);let Bt,Nt,Gt,Wt,Jt,qt,$t,we,je;const ke=T.isCompressedTexture?T.mipmaps[Ut]:T.image;if(st!==null)Bt=st.max.x-st.min.x,Nt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,Wt=st.min.x,Jt=st.min.y,qt=st.isBox3?st.min.z:0;else{const fn=Math.pow(2,-Z);Bt=Math.floor(ke.width*fn),Nt=Math.floor(ke.height*fn),T.isDataArrayTexture?Gt=ke.depth:T.isData3DTexture?Gt=Math.floor(ke.depth*fn):Gt=1,Wt=0,Jt=0,qt=0}$!==null?($t=$.x,we=$.y,je=$.z):($t=0,we=0,je=0);const Oe=bt.convert(Y.format),Kt=bt.convert(Y.type);let De;Y.isData3DTexture?(W.setTexture3D(Y,0),De=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ie=G.getParameter(G.UNPACK_ROW_LENGTH),vn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ki=G.getParameter(G.UNPACK_SKIP_PIXELS),xn=G.getParameter(G.UNPACK_SKIP_ROWS),ii=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ke.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ke.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const ze=T.isDataArrayTexture||T.isData3DTexture,Sn=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){const fn=M.get(T),Mn=M.get(Y),yn=M.get(fn.__renderTarget),Pr=M.get(Mn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,yn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let vi=0;vi<Gt;vi++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Z,qt+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,M.get(Y).__webglTexture,Ut,je+vi)),G.blitFramebuffer(Wt,Jt,Bt,Nt,$t,we,Bt,Nt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||M.has(T)){const fn=M.get(T),Mn=M.get(Y);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,er),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ma);for(let yn=0;yn<Gt;yn++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,fn.__webglTexture,Z,qt+yn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,fn.__webglTexture,Z),Sn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Mn.__webglTexture,Ut,je+yn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Mn.__webglTexture,Ut),Z!==0?G.blitFramebuffer(Wt,Jt,Bt,Nt,$t,we,Bt,Nt,G.COLOR_BUFFER_BIT,G.NEAREST):Sn?G.copyTexSubImage3D(De,Ut,$t,we,je+yn,Wt,Jt,Bt,Nt):G.copyTexSubImage2D(De,Ut,$t,we,Wt,Jt,Bt,Nt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Sn?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(De,Ut,$t,we,je,Bt,Nt,Gt,Oe,Kt,ke.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Ut,$t,we,je,Bt,Nt,Gt,Oe,ke.data):G.texSubImage3D(De,Ut,$t,we,je,Bt,Nt,Gt,Oe,Kt,ke):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ut,$t,we,Bt,Nt,Oe,Kt,ke.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ut,$t,we,ke.width,ke.height,Oe,ke.data):G.texSubImage2D(G.TEXTURE_2D,Ut,$t,we,Bt,Nt,Oe,Kt,ke);G.pixelStorei(G.UNPACK_ROW_LENGTH,ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,vn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ii),Ut===0&&Y.generateMipmaps&&G.generateMipmap(De),Yt.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&W.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?W.setTextureCube(T,0):T.isData3DTexture?W.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?W.setTexture2DArray(T,0):W.setTexture2D(T,0),Yt.unbindTexture()},this.resetState=function(){V=0,et=0,rt=null,Yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const MA="_container_1pq7g_1",yA={container:MA},EA=()=>{const o=Vo.useRef(null);return Vo.useEffect(()=>{if(!o.current)return;const e=new fy,i=new Ey(16777215,.5);e.add(i);const r=new yy(16777215,1);r.position.set(5,5,5),e.add(r);const l=new pi(35,o.current.clientWidth/o.current.clientHeight,.1,100);l.position.set(0,0,10);const u=new zs(2,2,2),h=new c_({color:"#00ffff"}),d=new Ri(u,h);l.position.set(0,0,15),d.position.y=-3,d.position.x=-8;const m=new Xd(1.5),p=new c_({color:"#00a2ff"}),v=new Ri(m,p);v.position.set(8,0,0),e.add(v),e.add(d);const _=new SA({antialias:!0,alpha:!0});for(_.setSize(o.current.clientWidth,o.current.clientHeight),_.setPixelRatio(window.devicePixelRatio),_.setClearColor(0,0);o.current.firstChild;)o.current.removeChild(o.current.firstChild);o.current.appendChild(_.domElement);let S;const E=()=>{d.rotation.x+=.01,d.rotation.y+=.01,v.rotation.x+=.01,v.rotation.y+=.02,_.render(e,l),S=requestAnimationFrame(E)};return E(),()=>{cancelAnimationFrame(S),o.current?.removeChild(_.domElement),u.dispose(),h.dispose(),_.dispose()}},[]),Rt.jsx("div",{className:yA.container,ref:o,style:{width:"100%",height:"400px"}})},bA=()=>Rt.jsxs("section",{className:F0.hero,children:[Rt.jsx(EA,{}),Rt.jsxs("div",{className:F0.heroText,children:[Rt.jsx("h1",{children:"Rahni De-Meis"}),Rt.jsx("h2",{children:"Web Developer"}),Rt.jsx("p",{children:"I build fast, modern, and scalable full stack web applications."}),Rt.jsx("a",{href:"#projects",children:"View My Projects"})]})]}),TA="_about_156la_1",AA="_aboutContent_156la_6",RA="_profileCircle_156la_19",Oh={about:TA,aboutContent:AA,profileCircle:RA},CA="/assets/rahni-D_5OGWNU.jpg",wA=()=>Rt.jsxs("section",{id:"about",className:Oh.about,children:[Rt.jsx("h2",{children:"About Me"}),Rt.jsxs("div",{className:Oh.aboutContent,children:[Rt.jsx("img",{src:CA,alt:"Photo of Rahni",className:Oh.profileCircle}),Rt.jsx("p",{children:"I'm a Web Developer with a serious passion for creating full-stack websites which provide a trouble-free UX, sharp design and complex functionality as well as writing clean and efficient code. I love to keep up-to-date with the latest updates on technologies and continuously learn about best practices and new technologies."})]})]}),DA="_projects_1tody_1",UA="_projectCard_1tody_5",z_={projects:DA,projectCard:UA},LA=()=>Rt.jsxs("section",{id:"projects",className:z_.projects,children:[Rt.jsx("h2",{children:"Projects"}),Rt.jsxs("div",{className:z_.projectCard,children:[Rt.jsx("h3",{children:"Artist Portfolio"}),Rt.jsxs("ul",{children:[Rt.jsx("li",{children:"React 19 & TypeScript"}),Rt.jsx("li",{children:"Frontend responsive website showcasing the works of an artist."}),Rt.jsx("li",{children:"French translation"}),Rt.jsx("li",{children:"Contact form using EmailJS"}),Rt.jsx("li",{children:"Zoom feature on paintings"}),Rt.jsx("li",{children:"Hosted on Vercel"}),Rt.jsx("li",{children:"Cloudfare analytics"})]}),Rt.jsx("a",{href:"https://github.com/RahniDev/artist-portfolio",children:"GitHub Repo"}),Rt.jsx("a",{href:"https://www.sakaridemeis.com",children:"Live Website"})]})]}),NA="_contact_18hqe_1",OA="_inputContainer_18hqe_12",PA="_btnContainer_18hqe_41",Rs={contact:NA,inputContainer:OA,btnContainer:PA};class Jo{constructor(e=0,i="Network Error"){this.status=e,this.text=i}}const zA=()=>{if(!(typeof localStorage>"u"))return{get:o=>Promise.resolve(localStorage.getItem(o)),set:(o,e)=>Promise.resolve(localStorage.setItem(o,e)),remove:o=>Promise.resolve(localStorage.removeItem(o))}},Rn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:zA()},Wd=o=>o?typeof o=="string"?{publicKey:o}:o.toString()==="[object Object]"?o:{}:{},FA=(o,e="https://api.emailjs.com")=>{if(!o)return;const i=Wd(o);Rn.publicKey=i.publicKey,Rn.blockHeadless=i.blockHeadless,Rn.storageProvider=i.storageProvider,Rn.blockList=i.blockList,Rn.limitRate=i.limitRate,Rn.origin=i.origin||e},Tv=async(o,e,i={})=>{const r=await fetch(Rn.origin+o,{method:"POST",headers:i,body:e}),l=await r.text(),u=new Jo(r.status,l);if(r.ok)return u;throw u},Av=(o,e,i)=>{if(!o||typeof o!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i||typeof i!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},BA=o=>{if(o&&o.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Rv=o=>o.webdriver||!o.languages||o.languages.length===0,Cv=()=>new Jo(451,"Unavailable For Headless Browser"),IA=(o,e)=>{if(!Array.isArray(o))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},HA=o=>!o.list?.length||!o.watchVariable,GA=(o,e)=>o instanceof FormData?o.get(e):o[e],wv=(o,e)=>{if(HA(o))return!1;IA(o.list,o.watchVariable);const i=GA(e,o.watchVariable);return typeof i!="string"?!1:o.list.includes(i)},Dv=()=>new Jo(403,"Forbidden"),VA=(o,e)=>{if(typeof o!="number"||o<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},XA=async(o,e,i)=>{const r=Number(await i.get(o)||0);return e-Date.now()+r},Uv=async(o,e,i)=>{if(!e.throttle||!i)return!1;VA(e.throttle,e.id);const r=e.id||o;return await XA(r,e.throttle,i)>0?!0:(await i.set(r,Date.now().toString()),!1)},Lv=()=>new Jo(429,"Too Many Requests"),kA=async(o,e,i,r)=>{const l=Wd(r),u=l.publicKey||Rn.publicKey,h=l.blockHeadless||Rn.blockHeadless,d=l.storageProvider||Rn.storageProvider,m={...Rn.blockList,...l.blockList},p={...Rn.limitRate,...l.limitRate};return h&&Rv(navigator)?Promise.reject(Cv()):(Av(u,o,e),BA(i),i&&wv(m,i)?Promise.reject(Dv()):await Uv(location.pathname,p,d)?Promise.reject(Lv()):Tv("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:u,service_id:o,template_id:e,template_params:i}),{"Content-type":"application/json"}))},WA=o=>{if(!o||o.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},qA=o=>typeof o=="string"?document.querySelector(o):o,YA=async(o,e,i,r)=>{const l=Wd(r),u=l.publicKey||Rn.publicKey,h=l.blockHeadless||Rn.blockHeadless,d=Rn.storageProvider||l.storageProvider,m={...Rn.blockList,...l.blockList},p={...Rn.limitRate,...l.limitRate};if(h&&Rv(navigator))return Promise.reject(Cv());const v=qA(i);Av(u,o,e),WA(v);const _=new FormData(v);return wv(m,_)?Promise.reject(Dv()):await Uv(location.pathname,p,d)?Promise.reject(Lv()):(_.append("lib_version","4.4.1"),_.append("service_id",o),_.append("template_id",e),_.append("user_id",u),Tv("/api/v1.0/email/send-form",_))},jA={init:FA,send:kA,sendForm:YA,EmailJSResponseStatus:Jo},ZA=()=>{const o=Vo.useRef(null),e="service_ju452j2",i="template_g19xc4g",r="sEg44tOiaAhPySDKN",l=async u=>{u.preventDefault();const h=u.currentTarget;if(h)try{await jA.sendForm(e,i,h,r),h.reset()}catch(d){console.error("Your message failed to send.",d)}};return Rt.jsxs("section",{id:"contact",className:Rs.contact,children:[Rt.jsx("h2",{children:"Contact"}),Rt.jsxs("form",{ref:o,className:Rs.contactForm,onSubmit:l,children:[Rt.jsxs("div",{className:Rs.inputContainer,children:[Rt.jsx("label",{htmlFor:"name",children:"Name"}),Rt.jsx("input",{name:"name",type:"text",required:!0})]}),Rt.jsxs("div",{className:Rs.inputContainer,children:[Rt.jsx("label",{htmlFor:"email",children:"Email"}),Rt.jsx("input",{name:"email",type:"email",required:!0})]}),Rt.jsxs("div",{className:Rs.inputContainer,children:[Rt.jsx("label",{htmlFor:"message",children:"Message"}),Rt.jsx("textarea",{id:"message",name:"message",rows:5,required:!0}),"      "]}),Rt.jsx("div",{className:Rs.btnContainer,children:Rt.jsx("button",{type:"submit",children:"Send"})})]})]})},KA="_footer_1g71q_1",QA={footer:KA},JA=()=>Rt.jsxs("footer",{className:QA.footer,children:[Rt.jsxs("p",{children:["© ",new Date().getFullYear()," Rahni De-Meis."]}),Rt.jsxs("div",{className:"footer-social",children:[Rt.jsx("a",{href:"https://github.com/RahniDev",target:"_blank",rel:"noopener noreferrer","aria-label":"Github",children:Rt.jsx(I_,{size:20})}),Rt.jsx("a",{href:"https://x.com/rahnidev",target:"_blank",rel:"noopener noreferrer","aria-label":"X",children:Rt.jsx(X_,{size:20})}),Rt.jsx("a",{href:"https://instagram.com/rahni.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:Rt.jsx(H_,{size:20})}),Rt.jsx("a",{href:"https://www.linkedin.com/in/rahni-developer",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin",children:Rt.jsx(G_,{size:20})}),Rt.jsx("a",{href:"https://t.me/RahniDev",target:"_blank",rel:"noopener noreferrer","aria-label":"Telegram",children:Rt.jsx(V_,{size:20})})]})]}),$A=()=>Rt.jsxs(Rt.Fragment,{children:[Rt.jsx(iM,{}),Rt.jsx(bA,{}),Rt.jsx(wA,{}),Rt.jsx(LA,{}),Rt.jsx(ZA,{}),Rt.jsx(JA,{})]});YS.createRoot(document.getElementById("root")).render(Rt.jsx(Vo.StrictMode,{children:Rt.jsx($A,{})}));
