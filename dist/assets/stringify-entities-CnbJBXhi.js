import{c as g}from"./character-entities-legacy-BpoLgcEt.js";import{c as i}from"./character-entities-html4-D7taRCQ7.js";const h=/["&'<>`]/g,m=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,x=/[|\\{}()[\]^$+*?.]/g,f=new WeakMap;function C(t,e){if(t=t.replace(e.subset?S(e.subset):h,c),e.subset||e.escapeOnly)return t;return t.replace(m,r).replace(d,c);function r(n,a,s){return e.format((n.charCodeAt(0)-55296)*1024+n.charCodeAt(1)-56320+65536,s.charCodeAt(a+2),e)}function c(n,a,s){return e.format(n.charCodeAt(0),s.charCodeAt(a+1),e)}}function S(t){let e=f.get(t);return e||(e=R(t),f.set(t,e)),e}function R(t){const e=[];let r=-1;for(;++r<t.length;)e.push(t[r].replace(x,"\\$&"));return new RegExp("(?:"+e.join("|")+")","g")}const F=/[\dA-Fa-f]/;function A(t,e,r){const c="&#x"+t.toString(16).toUpperCase();return r&&e&&!F.test(String.fromCharCode(e))?c:c+";"}const p=/\d/;function E(t,e,r){const c="&#"+String(t);return r&&e&&!p.test(String.fromCharCode(e))?c:c+";"}const D=["cent","copy","divide","gt","lt","not","para","times"],l={}.hasOwnProperty,u={};let o;for(o in i)l.call(i,o)&&(u[i[o]]=o);const y=/[^\dA-Za-z]/;function O(t,e,r,c){const n=String.fromCharCode(t);if(l.call(u,n)){const a=u[n],s="&"+a;return r&&g.includes(a)&&!D.includes(a)&&(!c||e&&e!==61&&y.test(String.fromCharCode(e)))?s:s+";"}return""}function b(t,e,r){let c=A(t,e,r.omitOptionalSemicolons),n;if((r.useNamedReferences||r.useShortestReferences)&&(n=O(t,e,r.omitOptionalSemicolons,r.attribute)),(r.useShortestReferences||!n)&&r.useShortestReferences){const a=E(t,e,r.omitOptionalSemicolons);a.length<c.length&&(c=a)}return n&&(!r.useShortestReferences||n.length<c.length)?n:c}function j(t,e){return C(t,Object.assign({format:b},e))}export{j as s};
