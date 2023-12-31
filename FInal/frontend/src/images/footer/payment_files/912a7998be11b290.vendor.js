"use strict";(self.webpackChunk_canva_web=self.webpackChunk_canva_web||[]).push([[25436],{353610:(t,e,n)=>{n.d(e,{I:()=>o});var r=n(712343);class o{constructor(){o.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=o.id}setupOnce(t,e){const n=t=>{const n=e().getIntegration(o);if(n){try{if(function(t,e){if(!e)return!1;if(function(t,e){const n=t.message,r=e.message;if(!n&&!r)return!1;if(n&&!r||!n&&r)return!1;if(n!==r)return!1;if(!c(t,e))return!1;if(!i(t,e))return!1;return!0}(t,e))return!0;if(function(t,e){const n=a(e),r=a(t);if(!n||!r)return!1;if(n.type!==r.type||n.value!==r.value)return!1;if(!c(t,e))return!1;if(!i(t,e))return!1;return!0}(t,e))return!0;return!1}(t,n._previousEvent))return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(s){return n._previousEvent=t}return n._previousEvent=t}return t};n.id=this.name,t(n)}}function i(t,e){let n=s(t),r=s(e);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(n=n,r=r,r.length!==n.length)return!1;for(let o=0;o<r.length;o++){const t=r[o],e=n[o];if(t.filename!==e.filename||t.lineno!==e.lineno||t.colno!==e.colno||t.function!==e.function)return!1}return!0}function c(t,e){let n=t.fingerprint,r=e.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;n=n,r=r;try{return!(n.join("")!==r.join(""))}catch(o){return!1}}function a(t){return t.exception&&t.exception.values&&t.exception.values[0]}function s(t){const e=t.exception;if(e)try{return e.values[0].stacktrace.frames}catch(n){return}}o.__initStatic()},812699:(t,e,n)=>{n.d(e,{S:()=>a});var r=n(567597),o=n(90322),i=n(320535),c=n(712343);class a{static __initStatic(){this.id="ExtraErrorData"}__init(){this.name=a.id}constructor(t){a.prototype.__init.call(this),this._options={depth:3,...t}}setupOnce(t,e){t(((t,n)=>{const r=e().getIntegration(a);return r?r.enhanceEventWithErrorData(t,n):t}))}enhanceEventWithErrorData(t,e={}){if(!e.originalException||!(0,r.VZ)(e.originalException))return t;const n=e.originalException.name||e.originalException.constructor.name,c=this._extractErrorData(e.originalException);if(c){const e={...t.contexts},a=(0,o.Fv)(c,this._options.depth);return(0,r.PO)(a)&&((0,i.xp)(a,"__sentry_skip_normalization__",!0),e[n]=a),{...t,contexts:e}}return t}_extractErrorData(t){try{const e=["name","message","stack","line","column","fileName","lineNumber","columnNumber","toJSON"],n={};for(const o of Object.keys(t)){if(-1!==e.indexOf(o))continue;const i=t[o];n[o]=(0,r.VZ)(i)?i.toString():i}if("function"==typeof t.toJSON){const e=t.toJSON();for(const t of Object.keys(e)){const o=e[t];n[t]=(0,r.VZ)(o)?o.toString():o}}return n}catch(e){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&c.kg.error("Unable to extract extra data from the Error object:",e)}return null}}a.__initStatic()},464517:(t,e,n)=>{n.d(e,{m:()=>o});var r=n(210839);class o{static __initStatic(){this.id="RewriteFrames"}__init(){this.name=o.id}__init2(){this._prefix="app:///"}constructor(t={}){o.prototype.__init.call(this),o.prototype.__init2.call(this),o.prototype.__init3.call(this),t.root&&(this._root=t.root),t.prefix&&(this._prefix=t.prefix),t.iteratee&&(this._iteratee=t.iteratee)}setupOnce(t,e){t((t=>{const n=e().getIntegration(o);return n?n.process(t):t}))}process(t){let e=t;return t.exception&&Array.isArray(t.exception.values)&&(e=this._processExceptionsEvent(e)),e}__init3(){this._iteratee=t=>{if(!t.filename)return t;const e=/^[A-Z]:\\/.test(t.filename),n=/^\//.test(t.filename);if(e||n){const n=e?t.filename.replace(/^[A-Z]:/,"").replace(/\\/g,"/"):t.filename,o=this._root?(0,r.Gf)(this._root,n):(0,r.EZ)(n);t.filename=`${this._prefix}${o}`}return t}}_processExceptionsEvent(t){try{return{...t,exception:{...t.exception,values:t.exception.values.map((t=>({...t,...t.stacktrace&&{stacktrace:this._processStacktrace(t.stacktrace)}})))}}}catch(e){return t}}_processStacktrace(t){return{...t,frames:t&&t.frames&&t.frames.map((t=>this._iteratee(t)))}}}o.__initStatic()},858464:(t,e,n)=>{n.d(e,{Rt:()=>o});var r=n(567597);n(971235).n2;function o(t,e){try{let n=t;const r=5,o=80,c=[];let a=0,s=0;const u=" > ",l=u.length;let f;for(;n&&a++<r&&(f=i(n,e),!("html"===f||a>1&&s+c.length*l+f.length>=o));)c.push(f),s+=f.length,n=n.parentNode;return c.reverse().join(u)}catch(n){return"<unknown>"}}function i(t,e){const n=t,o=[];let i,c,a,s,u;if(!n||!n.tagName)return"";o.push(n.tagName.toLowerCase());const l=e&&e.length?e.filter((t=>n.getAttribute(t))).map((t=>[t,n.getAttribute(t)])):null;if(l&&l.length)l.forEach((t=>{o.push(`[${t[0]}="${t[1]}"]`)}));else if(n.id&&o.push(`#${n.id}`),i=n.className,i&&(0,r.HD)(i))for(c=i.split(/\s+/),u=0;u<c.length;u++)o.push(`.${c[u]}`);const f=["type","name","title","alt"];for(u=0;u<f.length;u++)a=f[u],s=n.getAttribute(a),s&&o.push(`[${a}="${s}"]`);return o.join("")}},164307:(t,e,n)=>{function r(t){let e,n=t[0],r=1;for(;r<t.length;){const o=t[r],i=t[r+1];if(r+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(e=n,n=i(n)):"call"!==o&&"optionalCall"!==o||(n=i(((...t)=>n.call(e,...t))),e=void 0)}return n}n.d(e,{x:()=>r})},567597:(t,e,n)=>{n.d(e,{Cy:()=>p,HD:()=>c,Kj:()=>f,PO:()=>s,V9:()=>y,VZ:()=>o,cO:()=>u,i2:()=>h,kK:()=>l,pt:()=>a});const r=Object.prototype.toString;function o(t){switch(r.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return y(t,Error)}}function i(t,e){return r.call(t)===`[object ${e}]`}function c(t){return i(t,"String")}function a(t){return null===t||"object"!=typeof t&&"function"!=typeof t}function s(t){return i(t,"Object")}function u(t){return"undefined"!=typeof Event&&y(t,Event)}function l(t){return"undefined"!=typeof Element&&y(t,Element)}function f(t){return i(t,"RegExp")}function p(t){return s(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function h(t){return"number"==typeof t&&t!=t}function y(t,e){try{return t instanceof e}catch(n){return!1}}},712343:(t,e,n)=>{n.d(e,{kg:()=>c});var r=n(971235);const o=["debug","info","warn","error","log","assert","trace"];function i(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1}};return"undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?o.forEach((n=>{e[n]=(...e)=>{t&&function(t){if(!("console"in r.n2))return t();const e=r.n2.console,n={};o.forEach((t=>{const r=e[t]&&e[t].__sentry_original__;t in e&&r&&(n[t]=e[t],e[t]=r)}));try{t()}finally{Object.keys(n).forEach((t=>{e[t]=n[t]}))}}((()=>{r.n2.console[n](`Sentry Logger [${n}]:`,...e)}))}})):o.forEach((t=>{e[t]=()=>{}})),e}let c;c="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__?(0,r.YO)("logger",i):i()},732004:(t,e,n)=>{function r(){const t="function"==typeof WeakSet,e=t?new WeakSet:[];return[function(n){if(t)return!!e.has(n)||(e.add(n),!1);for(let t=0;t<e.length;t++){if(e[t]===n)return!0}return e.push(n),!1},function(n){if(t)e.delete(n);else for(let t=0;t<e.length;t++)if(e[t]===n){e.splice(t,1);break}}]}n.d(e,{i:()=>r})},90322:(t,e,n)=>{n.d(e,{Fv:()=>a});var r=n(567597),o=n(732004),i=n(320535),c=n(130360);function a(t,e=1/0,n=1/0){try{return s("",t,e,n)}catch(r){return{ERROR:`**non-serializable** (${r})`}}}function s(t,e,a=1/0,u=1/0,l=(0,o.i)()){const[f,p]=l;if(null===e||["number","boolean","string"].includes(typeof e)&&!(0,r.i2)(e))return e;const h=function(t,e){try{return"domain"===t&&e&&"object"==typeof e&&e._events?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":void 0!==n.g&&e===n.g?"[Global]":"undefined"!=typeof window&&e===window?"[Window]":"undefined"!=typeof document&&e===document?"[Document]":(0,r.Cy)(e)?"[SyntheticEvent]":"number"==typeof e&&e!=e?"[NaN]":void 0===e?"[undefined]":"function"==typeof e?`[Function: ${(0,c.$P)(e)}]`:"symbol"==typeof e?`[${String(e)}]`:"bigint"==typeof e?`[BigInt: ${String(e)}]`:`[object ${Object.getPrototypeOf(e).constructor.name}]`}catch(o){return`**non-serializable** (${o})`}}(t,e);if(!h.startsWith("[object "))return h;if(e.__sentry_skip_normalization__)return e;if(0===a)return h.replace("object ","");if(f(e))return"[Circular ~]";const y=e;if(y&&"function"==typeof y.toJSON)try{return s("",y.toJSON(),a-1,u,l)}catch(b){}const _=Array.isArray(e)?[]:{};let g=0;const d=(0,i.Sh)(e);for(const n in d){if(!Object.prototype.hasOwnProperty.call(d,n))continue;if(g>=u){_[n]="[MaxProperties ~]";break}const t=d[n];_[n]=s(n,t,a-1,u,l),g+=1}return p(e),_}},320535:(t,e,n)=>{n.d(e,{Sh:()=>c,xp:()=>i});var r=n(858464),o=n(567597);n(857321);function i(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}function c(t){if((0,o.VZ)(t))return{message:t.message,name:t.name,stack:t.stack,...s(t)};if((0,o.cO)(t)){const e={type:t.type,target:a(t.target),currentTarget:a(t.currentTarget),...s(t)};return"undefined"!=typeof CustomEvent&&(0,o.V9)(t,CustomEvent)&&(e.detail=t.detail),e}return t}function a(t){try{return(0,o.kK)(t)?(0,r.Rt)(t):Object.prototype.toString.call(t)}catch(e){return"<unknown>"}}function s(t){if("object"==typeof t&&null!==t){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}return{}}},210839:(t,e,n)=>{function r(t,e){let n=0;for(let r=t.length-1;r>=0;r--){const e=t[r];"."===e?t.splice(r,1):".."===e?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}n.d(e,{EZ:()=>u,Gf:()=>s});const o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;function i(t){const e=o.exec(t);return e?e.slice(1):[]}function c(...t){let e="",n=!1;for(let r=t.length-1;r>=-1&&!n;r--){const o=r>=0?t[r]:"/";o&&(e=`${o}/${e}`,n="/"===o.charAt(0))}return e=r(e.split("/").filter((t=>!!t)),!n).join("/"),(n?"/":"")+e||"."}function a(t){let e=0;for(;e<t.length&&""===t[e];e++);let n=t.length-1;for(;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}function s(t,e){t=c(t).substr(1),e=c(e).substr(1);const n=a(t.split("/")),r=a(e.split("/")),o=Math.min(n.length,r.length);let i=o;for(let c=0;c<o;c++)if(n[c]!==r[c]){i=c;break}let s=[];for(let c=i;c<n.length;c++)s.push("..");return s=s.concat(r.slice(i)),s.join("/")}function u(t,e){let n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n}},130360:(t,e,n)=>{n.d(e,{$P:()=>o});n(164307);const r="<anonymous>";function o(t){try{return t&&"function"==typeof t&&t.name||r}catch(e){return r}}},857321:(t,e,n)=>{n.d(e,{$G:()=>r});n(567597);function r(t,e=0){return"string"!=typeof t||0===e||t.length<=e?t:`${t.substr(0,e)}...`}},971235:(t,e,n)=>{function r(t){return t&&t.Math==Math?t:void 0}n.d(e,{YO:()=>i,n2:()=>o});const o="object"==typeof globalThis&&r(globalThis)||"object"==typeof window&&r(window)||"object"==typeof self&&r(self)||"object"==typeof n.g&&r(n.g)||function(){return this}()||{};function i(t,e,n){const r=n||o,i=r.__SENTRY__=r.__SENTRY__||{};return i[t]||(i[t]=e())}},427164:(t,e,n)=>{n.d(e,{Z:()=>i});var r,o=n(310396);t=n.hmd(t),r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:t;const i=(0,o.Z)(r)},310396:(t,e,n)=>{function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,{Z:()=>r})},570655:(t,e,n)=>{n.d(e,{ZT:()=>o,_T:()=>c,ev:()=>s,gn:()=>a,pi:()=>i});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function c(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function a(t,e,n,r){var o,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,n,c):o(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c}Object.create;function s(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},367639:(t,e,n)=>{var r;const o="undefined"!=typeof window?window:void 0;if(o){const t=null===(r=o.navigator)||void 0===r?void 0:r.userAgent,e=t=>t.match(/AppleWebKit\//)&&!t.match(/Chrome\//)&&!t.match(/Chromium\//);if(t&&e(t)&&"ResizeObserver"in o){const t=()=>{},e=o.ResizeObserver,n=t=>(...e)=>t.callback(...e);o.ResizeObserver=class{constructor(t){this.proxyObj={callback:t},this.observer=new e(n(this.proxyObj))}observe(...t){var e;if(!this.observer){const t=new Error("ModifiedResizeObserver observe called after disconnect");setTimeout((()=>{throw t}),0)}return null===(e=this.observer)||void 0===e?void 0:e.observe(...t)}unobserve(...t){var e;return null===(e=this.observer)||void 0===e?void 0:e.unobserve(...t)}disconnect(...e){var n;const r=null===(n=this.observer)||void 0===n?void 0:n.disconnect(...e);return this.proxyObj&&(this.proxyObj.callback=t),this.proxyObj=null,this.observer=null,r}}}}},735129:(t,e,n)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}n.d(e,{Z:()=>u});var a=function(t){if(!t)return[];Array.isArray(t)||(t=[t]);for(var e={},n=0;n<t.length;++n){var o=t[n];if(o&&"object"===r(o)&&(o=String(o)),"string"!=typeof o){var i="Locales should be strings, ".concat(JSON.stringify(o)," isn't.");throw new TypeError(i)}if("*"!==o[0]){if(!o.split("-").every((function(t){return/[a-z0-9]+/i.test(t)}))){var c=JSON.stringify(o),a="The locale ".concat(c," is not a structurally valid BCP 47 language tag.");throw new RangeError(a)}e[o]=!0}}return Object.keys(e)},s=function(t){if(!t)return"cardinal";if("cardinal"===t||"ordinal"===t)return t;throw new RangeError("Not a valid plural type: "+JSON.stringify(t))};const u=function(t,e,n){var r=function(t){do{if(e(t))return t;t=t.replace(/-?[^-]*$/,"")}while(t);return null},i=function(t){for(var e=a(t),n=0;n<e.length;++n){var o=r(e[n]);if(o)return o}return r("undefined"!=typeof navigator&&navigator&&(navigator.userLanguage||navigator.language)||"en-US")},u=function(){function u(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,u),this._locale=i(n),this._select=e(this._locale),this._type=s(r.type),this._nf=new t("en",r)}return c(u,null,[{key:"supportedLocalesOf",value:function(t){return a(t).filter(r)}}]),c(u,[{key:"resolvedOptions",value:function(){var t=this._nf.resolvedOptions(),e=t.minimumIntegerDigits,r=t.minimumFractionDigits,o=t.maximumFractionDigits,i=t.minimumSignificantDigits,c=t.maximumSignificantDigits,a={locale:this._locale,minimumIntegerDigits:e,minimumFractionDigits:r,maximumFractionDigits:o,pluralCategories:n(this._locale,"ordinal"===this._type),type:this._type};return"number"==typeof i&&(a.minimumSignificantDigits=i,a.maximumSignificantDigits=c),a}},{key:"select",value:function(t){if(!(this instanceof u))throw new TypeError("select() called on incompatible ".concat(this));if("number"!=typeof t&&(t=Number(t)),!isFinite(t))return"other";var e=this._nf.format(Math.abs(t));return this._select(e,"ordinal"===this._type)}}]),u}();return Object.defineProperty(u,"prototype",{writable:!1}),u}},189525:(t,e,n)=>{n.d(e,{en:()=>a});const r="one",o="two",i="few",c="other",a={cardinal:[r,c],ordinal:[r,o,i,c]}},832333:(t,e,n)=>{n.d(e,{en:()=>r});function r(t,e){var n=String(t).split("."),r=!n[1],o=Number(n[0])==t,i=o&&n[0].slice(-1),c=o&&n[0].slice(-2);return e?1==i&&11!=c?"one":2==i&&12!=c?"two":3==i&&13!=c?"few":"other":1==t&&r?"one":"other"}}}]);
//# sourceMappingURL=sourcemaps/912a7998be11b290.vendor.js.map