import{b as u}from"./boolbase-B0EU_t_U.js";const b=new Set([9,10,12,13,32]),d=48,l=57;function A(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,c=n(),i=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=c*(i??1),o(),t<e.length?(c=n(),o(),i=s()):c=i=0),i===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,c*i];function n(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){const a=t;let h=0;for(;t<e.length&&e.charCodeAt(t)>=d&&e.charCodeAt(t)<=l;)h=h*10+(e.charCodeAt(t)-d),t++;return t===a?null:h}function o(){for(;t<e.length&&b.has(e.charCodeAt(t));)t++}}function C(e){const t=e[0],r=e[1]-1;if(r<0&&t<=0)return u.falseFunc;if(t===-1)return n=>n<=r;if(t===0)return n=>n===r;if(t===1)return r<0?u.trueFunc:n=>n>=r;const c=Math.abs(t),i=(r%c+c)%c;return t>1?n=>n>=r&&n%c===i:n=>n<=r&&n%c===i}function p(e){return C(A(e))}export{p as n};
