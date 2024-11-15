/*! For license information please see 932.b33b71e83e1d3ada2fd4.js.LICENSE.txt */
"use strict";(self.webpackChunkboltreact=self.webpackChunkboltreact||[]).push([[932],{932:(e,t,r)=>{r.r(t),r.d(t,{DateInput:()=>s,EmailInput:()=>c,FieldInput:()=>m,Forms:()=>d,ImageInput:()=>i,NumberInput:()=>l,OptionsInput:()=>a,PasswordInput:()=>u,SubmitButton:()=>p,TextInput:()=>o,TitleContainer:()=>f});var n=r(540);function o(e){return n.createElement("div",{className:"form-floating container-fluid"},n.createElement("input",{type:"text",className:"form-control",id:e.id,placeholder:e.text,"aria-label":e.text_label,onChange:e.change}),n.createElement("label",{htmlFor:e.id},e.text_label))}function a(e){return n.createElement("div",{className:"container-fluid m-2"},n.createElement("label",{htmlFor:e.id,className:"form-label"},e.text_label),n.createElement("select",{id:e.id,onChange:e.change,"aria-label":e.text_label},n.createElement("option",{value:""},"Choose from list"),e.options.map((function(e,t){return n.createElement("option",{key:t,value:e},e)}))))}function l(e){return n.createElement("div",{className:"form-floating container-fluid"},n.createElement("input",{type:"number",id:e.id,className:"form-control",placeholder:e.text_input,"aria-label":e.text_label,onChange:e.change}),n.createElement("label",{htmlFor:e.id},e.text_label))}function u(e){return n.createElement("div",{className:"form-floating container-fluid"},n.createElement("input",{type:"password",className:"form-control",id:e.id,placeholder:e.text_input,"aria-label":e.text_label,onChange:e.change,autoComplete:"current-password"}),n.createElement("label",{htmlFor:e.id},e.text_label))}function c(e){return n.createElement("div",{className:"form-floating container-fluid"},n.createElement("input",{type:"email",className:"form-control",id:e.id,placeholder:"name@example.com","aria-label":"Email",onChange:e.change}),n.createElement("label",{htmlFor:e.id},"Email"))}function i(e){return n.createElement("img",{id:e.id,className:"mb-4 d-flex rounded-circle",src:e.img,alt:e.alt||"Image placeholder",width:"72",height:"57"})}function f(e){return n.createElement("h1",{className:"h3 mb-3 fw-normal"},e.text)}function s(e){return n.createElement("div",{id:"date-input",className:"form-floating container-fluid"},n.createElement("input",{type:"date",className:"form-control",id:e.id,placeholder:e.text,"aria-label":e.text_label,onChange:e.change}),n.createElement("label",{htmlFor:e.id},e.text_label))}function p(e){return n.createElement("button",{id:e.id,className:"w-100 btn btn-lg btn-dark m-1",type:"submit",onClick:e.callback},e.text)}function m(e){return n.createElement("div",{className:"mb-3"},n.createElement("label",{className:"form-label",htmlFor:e.id},e.text_label),n.createElement("input",{className:"form-control",id:e.id,type:"file","aria-label":e.text_label,onChange:e.change}))}function d(e){return n.createElement("form",{id:e.id,className:"p-1 d-flex flex-column container-fluid align-items-center justify-content-center",role:"form",onSubmit:e.onSubmit},e.children)}},287:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function h(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}function _(){}function E(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=h.prototype;var v=E.prototype=new _;v.constructor=E,y(v,h.prototype),v.isPureReactComponent=!0;var g=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var o,a={},l=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(l=""+t.key),t)x.call(t,o)&&!C.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];a.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:r,type:e,key:l,ref:u,props:a,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var N=/\/+/g;function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,a,l){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return l=l(c=e),e=""===a?"."+$(c,0):a,g(l)?(o="",null!=e&&(o=e.replace(N,"$&/")+"/"),R(l,t,o,"",(function(e){return e}))):null!=l&&(k(l)&&(l=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,o+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(N,"$&/")+"/")+e)),t.push(l)),1;if(c=0,a=""===a?".":a+":",g(e))for(var i=0;i<e.length;i++){var f=a+$(u=e[i],i);c+=R(u,t,o,f,l)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(u=e.next()).done;)c+=R(u=u.value,t,o,f=a+$(u,i++),l);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function j(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},O={transition:null},P={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:O,ReactCurrentOwner:S};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:I,forEach:function(e,t,r){I(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=l,t.PureComponent=E,t.StrictMode=a,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)x.call(t,i)&&!C.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==c?c[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){c=Array(i);for(var f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:r,type:e.type,key:a,ref:l,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return F.current.useCallback(e,t)},t.useContext=function(e){return F.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return F.current.useDeferredValue(e)},t.useEffect=function(e,t){return F.current.useEffect(e,t)},t.useId=function(){return F.current.useId()},t.useImperativeHandle=function(e,t,r){return F.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return F.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return F.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return F.current.useMemo(e,t)},t.useReducer=function(e,t,r){return F.current.useReducer(e,t,r)},t.useRef=function(e){return F.current.useRef(e)},t.useState=function(e){return F.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return F.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return F.current.useTransition()},t.version="18.3.1"},540:(e,t,r)=>{e.exports=r(287)}}]);