import{r as h}from"./app-Cej10E3O.js";import{b}from"./index-Cix3gUUA.js";import{d as f}from"./createLucideIcon-BgVc6Hot.js";function v(o){const[d,r]=h.useState(void 0);return b(()=>{if(o){r({width:o.offsetWidth,height:o.offsetHeight});const n=new ResizeObserver(e=>{if(!Array.isArray(e)||!e.length)return;const a=e[0];let i,s;if("borderBoxSize"in a){const t=a.borderBoxSize,c=Array.isArray(t)?t[0]:t;i=c.inlineSize,s=c.blockSize}else i=o.offsetWidth,s=o.offsetHeight;r({width:i,height:s})});return n.observe(o,{box:"border-box"}),()=>n.unobserve(o)}else r(void 0)},[o]),d}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],x=f("Check",u);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],S=f("LogIn",y),l="/build/assets/malogo-BIlvvIY7.png";export{x as C,l as L,S as a,v as u};
