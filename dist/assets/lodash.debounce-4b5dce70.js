import{c as g}from"./@react-three-cb6e7cfc.js";var N="Expected a function",S=0/0,W="[object Symbol]",$=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,F=/^0o[0-7]+$/i,R=parseInt,_=typeof g=="object"&&g&&g.Object===Object&&g,G=typeof self=="object"&&self&&self.Object===Object&&self,P=_||G||Function("return this")(),D=Object.prototype,H=D.toString,U=Math.max,X=Math.min,T=function(){return P.Date.now()};function q(e,t,i){var a,s,l,c,r,o,u=0,x=!1,d=!1,y=!0;if(typeof e!="function")throw new TypeError(N);t=k(t)||0,v(i)&&(x=!!i.leading,d="maxWait"in i,l=d?U(k(i.maxWait)||0,t):l,y="trailing"in i?!!i.trailing:y);function p(n){var f=a,m=s;return a=s=void 0,u=n,c=e.apply(m,f),c}function E(n){return u=n,r=setTimeout(b,t),x?p(n):c}function L(n){var f=n-o,m=n-u,h=t-f;return d?X(h,l-m):h}function I(n){var f=n-o,m=n-u;return o===void 0||f>=t||f<0||d&&m>=l}function b(){var n=T();if(I(n))return O(n);r=setTimeout(b,L(n))}function O(n){return r=void 0,y&&a?p(n):(a=s=void 0,c)}function C(){r!==void 0&&clearTimeout(r),u=0,a=o=s=r=void 0}function M(){return r===void 0?c:O(T())}function j(){var n=T(),f=I(n);if(a=arguments,s=this,o=n,f){if(r===void 0)return E(o);if(d)return r=setTimeout(b,t),p(o)}return r===void 0&&(r=setTimeout(b,t)),c}return j.cancel=C,j.flush=M,j}function v(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function z(e){return!!e&&typeof e=="object"}function J(e){return typeof e=="symbol"||z(e)&&H.call(e)==W}function k(e){if(typeof e=="number")return e;if(J(e))return S;if(v(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace($,"");var i=B.test(e);return i||F.test(e)?R(e.slice(2),i?2:8):A.test(e)?S:+e}var Q=q;export{Q as l};
