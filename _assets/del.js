function(e){const{comDefs:t,env:n}=e,r=t,o=n,i={"u_xzSOf-btn0":[],"u_xzSOf-doubleClick_btn0":[]},a={"u_xzSOf":{"model":{"data":{"btnList":[{"key":"btn0","text":"按钮0","showText":true}],"layout":"flex-start","spaceSize":[4,4]},"inputAry":[],"outputAry":[],"outputEvents":{},"style":{"display":"block","left":240,"top":342,"width":"100%"}}}},s={};function l(e){console.log(e)}function c(e){return r[e.namespace+"-"+e.version]}function d(e){if(!s[e]){const t=a[e].model,n=window.rxui.observable(t),r={},o={},l=new Proxy({},{get:(e,t,n)=>function(e){r[t]=e;const n=o[t];n&&(n.forEach((t=>{e(t)})),o[t]=void 0)}}),c=new Proxy({},{get:(t,n,r)=>function(t){const r=i[e+"-"+n];r&&r.forEach((e=>{if("com"!==e.type)throw new Error("尚未实现");u(e,t)}))}});s[e]={data:n.data,style:n.style,_inputRegs:r,addInputTodo(e,t){let n=o[e];n||(o[e]=n=[]),n.push(t)},inputs:l,outputs:c}}return s[e]}function u(e,t){const{id:n,def:r,pinId:i,pinType:u}=e;if("ext"===u){const e=s[n];"show"===i?e.style.display="":"hide"===i&&(e.style.display="none")}else if(r.rtType){if(r.rtType.match(/^js/gi)){if(a[n]){const e=d(n),a=c(r);l(`执行: ${a.namespace} | ${i}，-> ${t}`),a.runtime({env:o,data:e.data,inputs:e.inputs,outputs:e.outputs}),e._inputRegs[i](t)}}}else{const e=d(n);l(`执行: ${c(r).namespace} | ${i}，-> ${t}`);const o=e._inputRegs[i];"function"==typeof o?o(t):e.addInputTodo(i,t)}}return{get:(e,t)=>t?function(e,t){if(!s[e+"-"+t]){const n={},r=new Proxy({},{get:(n,r,o)=>function(n){const o=i[e+"-"+t+"-"+r];o&&o.forEach((e=>{"com"===e.type&&u(e,n)}))}}),o=new Proxy({},{get:(e,t,r)=>function(e){n[t]=e}});s[e+"-"+t]={_outputRegs:n,inputs:r,outputs:o}}return s[e+"-"+t]}(e,t):d(e)}}