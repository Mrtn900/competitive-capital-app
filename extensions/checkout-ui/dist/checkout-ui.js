(()=>{var ie=Object.defineProperty;var X=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var q=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))se.call(t,n)&&q(e,n,t[n]);if(X)for(var n of X(t))ce.call(t,n)&&q(e,n,t[n]);return e};var J=(e,t,n)=>new Promise((o,r)=>{var i=p=>{try{c(n.next(p))}catch(a){r(a)}},f=p=>{try{c(n.throw(p))}catch(a){r(a)}},c=p=>p.done?o(p.value):Promise.resolve(p.value).then(i,f);c((n=n.apply(e,t)).next())});function k(e){if(e==null||typeof e!="object")return!1;let t=Object.getPrototypeOf(e);return t==null||t===Object.prototype}function R(e){return e!=null&&e.kind===3}var P="__current",B={},fe=[];function K(e,{strict:t=!0,components:n}={}){let o=0,r={strict:t,mounted:!1,channel:e,children:fe,nodes:new WeakSet,parents:new WeakMap,tops:new WeakMap,components:new WeakMap,fragments:new WeakMap};t&&Object.freeze(n);let i={kind:0,options:t?Object.freeze({strict:t,components:n}):{strict:t,components:n},get children(){return r.children},createComponent(f,...c){if(n&&n.indexOf(f)<0)throw new Error(`Unsupported component: ${f}`);let[p,a,...s]=c,d=p!=null?p:{},m=[],g={};if(p)for(let u of Object.keys(p))u!=="children"&&(g[u]=y(re(p[u])));if(a)if(Array.isArray(a))for(let u of a)m.push(C(u,i));else{m.push(C(a,i));for(let u of s)m.push(C(u,i))}let l=`${o++}`,h={externalProps:t?Object.freeze(d):d,internalProps:g,children:t?Object.freeze(m):m},x=T({kind:1,get children(){return h.children},get props(){return h.externalProps},get remoteProps(){return h.internalProps},remove:()=>Z(x),updateProps:u=>me(x,u,h,r),append:(...u)=>I(x,u.map(b=>C(b,i)),h,r),appendChild:u=>F(x,C(u,i),h,r),removeChild:u=>j(x,u,h,r),replaceChildren:(...u)=>z(x,u.map(b=>C(b,i)),h,r),insertBefore:(u,b)=>E(x,C(u,i),b,h,r),insertChildBefore:(u,b)=>E(x,C(u,i),b,h,r)},B);r.components.set(x,h),Object.defineProperty(x,"type",{value:f,configurable:!1,writable:!1,enumerable:!0}),L(x,r),H(x,l,i);for(let u of h.children)S(x,u,r);return x},createText(f=""){let c=`${o++}`,p={text:f},a=d=>le(s,d,p,r),s=T({kind:2,get text(){return p.text},update:a,updateText:a,remove:()=>Z(s)},B);return L(s,r),H(s,c,i),s},createFragment(){let f=`${o++}`,c={children:t?Object.freeze([]):[]},p=T({kind:3,get children(){return c.children},append:(...a)=>I(p,a.map(s=>C(s,i)),c,r),appendChild:a=>F(p,C(a,i),c,r),removeChild:a=>j(p,a,c,r),replaceChildren:(...a)=>z(p,a.map(s=>C(s,i)),c,r),insertBefore:(a,s)=>E(p,C(a,i),s,c,r),insertChildBefore:(a,s)=>E(p,C(a,i),s,c,r)},B);return r.fragments.set(p,c),L(p,r),H(p,f,i),p},append:(...f)=>I(i,f.map(c=>C(c,i)),r,r),appendChild:f=>F(i,C(f,i),r,r),replaceChildren:(...f)=>z(i,f.map(c=>C(c,i)),r,r),removeChild:f=>j(i,f,r,r),insertBefore:(f,c)=>E(i,C(f,i),c,r,r),insertChildBefore:(f,c)=>E(i,C(f,i),c,r,r),mount(){return r.mounted?Promise.resolve():(r.mounted=!0,Promise.resolve(e(0,r.children.map(A))))}};return i}function de(e,{tops:t}){var n;return((n=t.get(e))===null||n===void 0?void 0:n.kind)===0}function te(e,t){let n=o=>{if("children"in o)for(let r of o.children)t(r),n(r)};n(e)}function N(e,t,{remote:n,local:o}){let{mounted:r,channel:i}=t;r&&(e.kind===0||de(e,t))&&n(i),o()}function le(e,t,n,o){return N(e,o,{remote:r=>r(3,e.id,t),local:()=>{n.text=t}})}var O=Symbol("ignore");function me(e,t,n,o){let{strict:r}=o,{internalProps:i,externalProps:f}=n,c={},p=[],a=!1;for(let s of Object.keys(t)){if(s==="children")continue;let d=f[s],m=t[s],g=i[s],l=re(m);if(g===l&&(l==null||typeof l!="object"))continue;let[h,x]=W(g,l);x&&p.push(...x),h!==O&&(a=!0,c[s]=h,R(d)&&G(d,o),R(m)&&S(e,m,o))}return N(e,o,{remote:s=>{a&&s(4,e.id,c)},local:()=>{let s=T(T({},f),t);n.externalProps=r?Object.freeze(s):s,n.internalProps=T(T({},n.internalProps),c);for(let[d,m]of p)d[P]=m}})}function W(e,t,n=new Set){return n.has(e)?[O]:(n.add(e),typeof e=="function"&&P in e?[typeof t=="function"?O:y(t),[[e,t]]]:Array.isArray(e)?xe(e,t,n):k(e)&&!R(e)?he(e,t,n):[e===t?O:t])}function y(e,t=new Map){let n=t.get(e);if(n)return n;if(R(e))return t.set(e,e),e;if(Array.isArray(e)){let o=[];t.set(e,o);for(let r of e)o.push(y(r,t));return o}if(k(e)){let o={};t.set(e,o);for(let r of Object.keys(e))o[r]=y(e[r],t);return o}if(typeof e=="function"){let o=(...r)=>o[P](...r);return Object.defineProperty(o,P,{enumerable:!1,configurable:!1,writable:!0,value:e}),t.set(e,o),o}return t.set(e,e),e}function _(e,t=new Set){if(!t.has(e)){if(t.add(e),Array.isArray(e))return e.reduce((n,o)=>{let r=_(o,t);return r?[...n,...r]:n},[]);if(k(e))return Object.keys(e).reduce((n,o)=>{let r=_(e[o],t);return r?[...n,...r]:n},[]);if(typeof e=="function")return P in e?[e]:void 0}}function Z(e){var t;(t=e.parent)===null||t===void 0||t.removeChild(e)}function I(e,t,n,o){for(let r of t)F(e,r,n,o)}function F(e,t,n,o){var r;let{nodes:i,strict:f}=o;if(!i.has(t))throw new Error("Cannot append a node that was not created by this remote root");let c=t.parent,p=(r=c==null?void 0:c.children.indexOf(t))!==null&&r!==void 0?r:-1;return N(e,o,{remote:a=>{a(1,e.id,p<0?e.children.length:e.children.length-1,A(t),c?c.id:!1)},local:()=>{S(e,t,o);let a;if(c){let s=ne(c,o),d=[...s.children];d.splice(p,1),c===e?a=d:(s.children=f?Object.freeze(d):d,a=[...n.children])}else a=[...n.children];a.push(t),n.children=f?Object.freeze(a):a}})}function z(e,t,n,o){for(let r of e.children)j(e,r,n,o);I(e,t,n,o)}function j(e,t,n,o){let{strict:r}=o;return N(e,o,{remote:i=>i(2,e.id,e.children.indexOf(t)),local:()=>{G(t,o);let i=[...n.children];i.splice(i.indexOf(t),1),n.children=r?Object.freeze(i):i}})}function E(e,t,n,o,r){var i;let{strict:f,nodes:c}=r;if(!c.has(t))throw new Error("Cannot insert a node that was not created by this remote root");let p=t.parent,a=(i=p==null?void 0:p.children.indexOf(t))!==null&&i!==void 0?i:-1;return N(e,r,{remote:s=>{let d=n==null?e.children.length-1:e.children.indexOf(n);s(1,e.id,d<a||a<0?d:d-1,A(t),p?p.id:!1)},local:()=>{S(e,t,r);let s;if(p){let d=ne(p,r),m=[...d.children];m.splice(a,1),p===e?s=m:(d.children=f?Object.freeze(m):m,s=[...o.children])}else s=[...o.children];n==null?s.push(t):s.splice(s.indexOf(n),0,t),o.children=f?Object.freeze(s):s}})}function C(e,t){return typeof e=="string"?t.createText(e):e}function S(e,t,n){let{tops:o,parents:r}=n,i=e.kind===0?e:o.get(e);o.set(t,i),r.set(t,e),v(t,n),te(t,f=>{o.set(f,i),v(f,n)})}function v(e,t){if(e.kind!==1)return;let n=e.props;n&&Object.values(n).forEach(o=>{R(o)&&S(e,o,t)})}function G(e,t){let{tops:n,parents:o}=t;n.delete(e),o.delete(e),te(e,r=>{n.delete(r),V(r,t)}),V(e,t)}function V(e,t){if(e.kind!==1)return;let n=e.remoteProps;for(let o of Object.keys(n!=null?n:{})){let r=n[o];R(r)&&G(r,t)}}function L(e,{parents:t,tops:n,nodes:o}){o.add(e),Object.defineProperty(e,"parent",{get(){return t.get(e)},configurable:!0,enumerable:!0}),Object.defineProperty(e,"top",{get(){return n.get(e)},configurable:!0,enumerable:!0})}function A(e){return e.kind===2?{id:e.id,kind:e.kind,text:e.text}:{id:e.id,kind:e.kind,type:e.type,props:e.remoteProps,children:e.children.map(t=>A(t))}}function re(e){return R(e)?ue(e):e}function ue(e){return{id:e.id,kind:e.kind,get children(){return e.children.map(t=>A(t))}}}function ne(e,t){return e.kind===0?t:e.kind===3?t.fragments.get(e):t.components.get(e)}function H(e,t,n){Object.defineProperty(e,"id",{value:t,configurable:!0,writable:!1,enumerable:!1}),Object.defineProperty(e,"root",{value:n,configurable:!0,writable:!1,enumerable:!1})}function he(e,t,n){if(!k(t)){var o;return[y(t),(o=_(e))===null||o===void 0?void 0:o.map(c=>[c,void 0])]}let r=!1,i=[],f={};for(let c in e){let p=e[c];if(!(c in t)){r=!0;let m=_(p);m&&i.push(...m.map(g=>[g,void 0]))}let a=t[c],[s,d]=W(p,a,n);d&&i.push(...d),s!==O&&(r=!0,f[c]=s)}for(let c in t)c in f||(r=!0,f[c]=y(t[c]));return[r?f:O,i]}function xe(e,t,n){if(!Array.isArray(t)){var o;return[y(t),(o=_(e))===null||o===void 0?void 0:o.map(s=>[s,void 0])]}let r=!1,i=[],f=t.length,c=e.length,p=Math.max(c,f),a=[];for(let s=0;s<p;s++){let d=e[s],m=t[s];if(s<f){if(s>=c){r=!0,a[s]=y(m);continue}let[g,l]=W(d,m,n);if(l&&i.push(...l),g===O){a[s]=d;continue}r=!0,a[s]=g}else{r=!0;let g=_(d);g&&i.push(...g.map(l=>[l,void 0]))}}return[r?a:O,i]}function oe(){return(t,n)=>{var o;function r(...i){return J(this,null,function*(){if(i.length===1)return n(...i);let[{channel:f,components:c},p]=i,a=K(f,{components:c,strict:!0}),s=n(a,p);return typeof s=="object"&&s!=null&&"then"in s&&(s=yield s),a.mount(),s})}return(o=globalThis.shopify)===null||o===void 0||o.extend(t,r),r}}var U=oe();var $="Banner";var Y="Checkbox";var w="Select";var M="TextField";var Ve=U("purchase.checkout.block.render",(e,t)=>{let{extension:n,i18n:o}=t,r={RFC:"",Codigo_postal:"",Nombre_Razon_Social:"",Regimen_Fiscal:"1",Tipo_Persona:"1"},i=(l,h)=>{t.metafields.current.find(b=>b.key===l)?t.metafields.update({namespace:"philco",key:l,value:h,type:"string"}):t.metafields.create({namespace:"philco",key:l,value:h,type:"string"})},f=!1,c=e.createComponent($,{title:"checkout-ui"},o.translate("welcome",{target:n.target}));e.appendChild(c);let p=e.createComponent(Y,{id:"checkbox",name:"checkbox",onChange:()=>{f=!f,f?(e.appendChild(d),e.appendChild(a),e.appendChild(s),e.appendChild(m),e.appendChild(g)):(e.removeChild(d),e.removeChild(a),e.removeChild(s),e.removeChild(m),e.removeChild(g))}},"Deseas facturar?");e.appendChild(p);let a=e.createComponent(M,{id:"RFC",label:"RFC",onChange:l=>{r.RFC=l,i("RFC",l)}}),s=e.createComponent(M,{id:"Codigo_postal",label:"Codigo postal",onChange:l=>{r.Codigo_postal=l,i("Codigo_postal",l)}}),d=e.createComponent(M,{id:"Nombre_Razon_Social",label:"Nombre o raz\xF3n social",onChange:l=>{r.Nombre_Razon_Social=l,i("Nombre_Razon_Social",l)}}),m=e.createComponent(w,{label:"Regimen fiscal",value:r.Regimen_Fiscal,options:[{value:"601",label:"601 General de Ley Personas Morales"},{value:"603",label:"603 Personas Morales con Fines no Lucrativos"},{value:"605",label:"605 Sueldos y Salarios e Ingresos Asimilados a Salarios"},{value:"606",label:"606 Arrendamiento"},{value:"607",label:"607 R\xE9gimen de Enajenaci\xF3n o Adquisici\xF3n de Bienes"},{value:"608",label:"608 Dem\xE1s ingresos"}],onChange:l=>{r.Regimen_Fiscal=l,i("Regimen_Fiscal",l)}}),g=e.createComponent(w,{label:"Tipo de Persona",value:r.Tipo_Persona,options:[{value:"fisica",label:"Soy persona fisica"},{value:"moral",label:"Soy persona moral"}],onChange:l=>{r.Tipo_Persona=l,i("Tipo_Persona",l)}});f&&(e.appendChild(d),e.appendChild(a),e.appendChild(s),e.appendChild(m),e.appendChild(g))});})();
