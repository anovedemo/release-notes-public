function a(){return a=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)({}).hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},a.apply(null,arguments)}function o(n,r){if(n==null)return{};var e={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(r.includes(t))continue;e[t]=n[t]}return e}function u(n,r){return r||(r=n.slice(0)),n.raw=r,n}function i(n){if(n==null)throw new TypeError("Cannot destructure "+n)}export{o as _,a,u as b,i as c};