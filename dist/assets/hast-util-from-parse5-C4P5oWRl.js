import{o as b}from"./devlop-Cl3hj7Sz.js";import{s as h,h as T,f as w}from"./property-information-DdDptki-.js";import{w as x}from"./web-namespaces-bsVAaBS1.js";import{s as L,h as C}from"./hastscript-B1wTFI9-.js";import{l as N}from"./vfile-location-LfEFwJ2h.js";const v={}.hasOwnProperty,k=Object.prototype;function S(t,n){const e=n||{};return p({file:e.file||void 0,location:!1,schema:e.space==="svg"?h:T,verbose:e.verbose||!1},t)}function p(t,n){let e;switch(n.nodeName){case"#comment":{const s=n;return e={type:"comment",value:s.data},l(t,s,e),e}case"#document":case"#document-fragment":{const s=n,c="mode"in s?s.mode==="quirks"||s.mode==="limited-quirks":!1;if(e={type:"root",children:y(t,n.childNodes),data:{quirksMode:c}},t.file&&t.location){const a=String(t.file),r=N(a),i=r.toPoint(0),o=r.toPoint(a.length);e.position={start:i,end:o}}return e}case"#documentType":{const s=n;return e={type:"doctype"},l(t,s,e),e}case"#text":{const s=n;return e={type:"text",value:s.value},l(t,s,e),e}default:return e=O(t,n),e}}function y(t,n){let e=-1;const s=[];for(;++e<n.length;){const c=p(t,n[e]);s.push(c)}return s}function O(t,n){const e=t.schema;t.schema=n.namespaceURI===x.svg?h:T;let s=-1;const c={};for(;++s<n.attrs.length;){const i=n.attrs[s],o=(i.prefix?i.prefix+":":"")+i.name;v.call(k,o)||(c[o]=i.value)}const r=(t.schema.space==="svg"?L:C)(n.tagName,c,y(t,n.childNodes));if(l(t,n,r),r.tagName==="template"){const i=n,o=i.sourceCodeLocation,f=o&&o.startTag&&u(o.startTag),m=o&&o.endTag&&u(o.endTag),d=p(t,i.content);f&&m&&t.file&&(d.position={start:f.end,end:m.start}),r.content=d}return t.schema=e,r}function l(t,n,e){if("sourceCodeLocation"in n&&n.sourceCodeLocation&&t.file){const s=P(t,e,n.sourceCodeLocation);s&&(t.location=!0,e.position=s)}}function P(t,n,e){const s=u(e);if(n.type==="element"){const c=n.children[n.children.length-1];if(s&&!e.endTag&&c&&c.position&&c.position.end&&(s.end=Object.assign({},c.position.end)),t.verbose){const a={};let r;if(e.attrs)for(r in e.attrs)v.call(e.attrs,r)&&(a[w(t.schema,r).property]=u(e.attrs[r]));b(e.startTag);const i=u(e.startTag),o=e.endTag?u(e.endTag):void 0,f={opening:i};o&&(f.closing=o),f.properties=a,n.data={position:f}}}return s}function u(t){const n=g({line:t.startLine,column:t.startCol,offset:t.startOffset}),e=g({line:t.endLine,column:t.endCol,offset:t.endOffset});return n||e?{start:n,end:e}:void 0}function g(t){return t.line&&t.column?t:void 0}export{S as f};
