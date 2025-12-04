import{r as y,j as l,U as b,t as uC,c as $,d as jg,L as Ta,e as kC,a as fC}from"./app-C8bW_nBn.js";import{b as cn,u as Q,d as t,I as MC,c as E,a as mC,S as Hg,B as vC,r as px}from"./createLucideIcon-5Ylf2GGP.js";import{c as je,a as H,d as Ue,b as gC,C as _n,L as wn,P as Se,u as rn,e as xC}from"./index-BDResBxx.js";import{P as Z,d as T_,r as _C,R as F_}from"./index-DkghEuYx.js";import{l as wC,d as LC}from"./index-BWeyt2vI.js";import{q as Cx}from"./index-CMWG4mbA.js";import{L as Ve}from"./loader-circle-CY9fjKZv.js";import{M as Ln}from"./minus-CxOdfr2W.js";function s_(o){const e=CC(o),a=y.forwardRef((n,c)=>{const{children:i,...r}=n,d=y.Children.toArray(i),h=d.find(IC);if(h){const p=h.props.children,u=d.map(s=>s===h?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:s);return l.jsx(e,{...r,ref:c,children:y.isValidElement(p)?y.cloneElement(p,void 0,u):null})}return l.jsx(e,{...r,ref:c,children:i})});return a.displayName=`${o}.Slot`,a}function CC(o){const e=y.forwardRef((a,n)=>{const{children:c,...i}=a;if(y.isValidElement(c)){const r=SC(c),d=NC(i,c.props);return c.type!==y.Fragment&&(d.ref=n?cn(n,r):r),y.cloneElement(c,d)}return y.Children.count(c)>1?y.Children.only(null):null});return e.displayName=`${o}.SlotClone`,e}var bC=Symbol("radix.slottable");function IC(o){return y.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===bC}function NC(o,e){const a={...e};for(const n in e){const c=o[n],i=e[n];/^on[A-Z]/.test(n)?c&&i?a[n]=(...d)=>{const h=i(...d);return c(...d),h}:c&&(a[n]=c):n==="style"?a[n]={...c,...i}:n==="className"&&(a[n]=[c,i].filter(Boolean).join(" "))}return{...o,...a}}function SC(o){let e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?o.ref:(e=Object.getOwnPropertyDescriptor(o,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?o.props.ref:o.props.ref||o.ref)}function B_(o){const e=o+"CollectionProvider",[a,n]=je(e),[c,i]=a(e,{collectionRef:{current:null},itemMap:new Map}),r=M=>{const{scope:g,children:v}=M,x=b.useRef(null),_=b.useRef(new Map).current;return l.jsx(c,{scope:g,itemMap:_,collectionRef:x,children:v})};r.displayName=e;const d=o+"CollectionSlot",h=s_(d),p=b.forwardRef((M,g)=>{const{scope:v,children:x}=M,_=i(d,v),w=Q(g,_.collectionRef);return l.jsx(h,{ref:w,children:x})});p.displayName=d;const u=o+"CollectionItemSlot",s="data-radix-collection-item",k=s_(u),f=b.forwardRef((M,g)=>{const{scope:v,children:x,..._}=M,w=b.useRef(null),L=Q(g,w),I=i(u,v);return b.useEffect(()=>(I.itemMap.set(w,{ref:w,..._}),()=>void I.itemMap.delete(w))),l.jsx(k,{[s]:"",ref:L,children:x})});f.displayName=u;function m(M){const g=i(o+"CollectionConsumer",M);return b.useCallback(()=>{const x=g.collectionRef.current;if(!x)return[];const _=Array.from(x.querySelectorAll(`[${s}]`));return Array.from(g.itemMap.values()).sort((I,C)=>_.indexOf(I.ref.current)-_.indexOf(C.ref.current))},[g.collectionRef,g.itemMap])}return[{Provider:r,Slot:p,ItemSlot:f},m,n]}var $C=y.createContext(void 0);function E_(o){const e=y.useContext($C);return o||e||"ltr"}function Ie(o){const e=y.useRef(o);return y.useEffect(()=>{e.current=o}),y.useMemo(()=>(...a)=>e.current?.(...a),[])}function AC(o,e=globalThis?.document){const a=Ie(o);y.useEffect(()=>{const n=c=>{c.key==="Escape"&&a(c)};return e.addEventListener("keydown",n,{capture:!0}),()=>e.removeEventListener("keydown",n,{capture:!0})},[a,e])}var qC="DismissableLayer",ux="dismissableLayer.update",PC="dismissableLayer.pointerDownOutside",jC="dismissableLayer.focusOutside",h_,O_=y.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),zg=y.forwardRef((o,e)=>{const{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:n,onPointerDownOutside:c,onFocusOutside:i,onInteractOutside:r,onDismiss:d,...h}=o,p=y.useContext(O_),[u,s]=y.useState(null),k=u?.ownerDocument??globalThis?.document,[,f]=y.useState({}),m=Q(e,C=>s(C)),M=Array.from(p.layers),[g]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),v=M.indexOf(g),x=u?M.indexOf(u):-1,_=p.layersWithOutsidePointerEventsDisabled.size>0,w=x>=v,L=RC(C=>{const S=C.target,j=[...p.branches].some(P=>P.contains(S));!w||j||(c?.(C),r?.(C),C.defaultPrevented||d?.())},k),I=DC(C=>{const S=C.target;[...p.branches].some(P=>P.contains(S))||(i?.(C),r?.(C),C.defaultPrevented||d?.())},k);return AC(C=>{x===p.layers.size-1&&(n?.(C),!C.defaultPrevented&&d&&(C.preventDefault(),d()))},k),y.useEffect(()=>{if(u)return a&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(h_=k.body.style.pointerEvents,k.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(u)),p.layers.add(u),l_(),()=>{a&&p.layersWithOutsidePointerEventsDisabled.size===1&&(k.body.style.pointerEvents=h_)}},[u,k,a,p]),y.useEffect(()=>()=>{u&&(p.layers.delete(u),p.layersWithOutsidePointerEventsDisabled.delete(u),l_())},[u,p]),y.useEffect(()=>{const C=()=>f({});return document.addEventListener(ux,C),()=>document.removeEventListener(ux,C)},[]),l.jsx(Z.div,{...h,ref:m,style:{pointerEvents:_?w?"auto":"none":void 0,...o.style},onFocusCapture:H(o.onFocusCapture,I.onFocusCapture),onBlurCapture:H(o.onBlurCapture,I.onBlurCapture),onPointerDownCapture:H(o.onPointerDownCapture,L.onPointerDownCapture)})});zg.displayName=qC;var HC="DismissableLayerBranch",zC=y.forwardRef((o,e)=>{const a=y.useContext(O_),n=y.useRef(null),c=Q(e,n);return y.useEffect(()=>{const i=n.current;if(i)return a.branches.add(i),()=>{a.branches.delete(i)}},[a.branches]),l.jsx(Z.div,{...o,ref:c})});zC.displayName=HC;function RC(o,e=globalThis?.document){const a=Ie(o),n=y.useRef(!1),c=y.useRef(()=>{});return y.useEffect(()=>{const i=d=>{if(d.target&&!n.current){let h=function(){U_(PC,a,p,{discrete:!0})};const p={originalEvent:d};d.pointerType==="touch"?(e.removeEventListener("click",c.current),c.current=h,e.addEventListener("click",c.current,{once:!0})):h()}else e.removeEventListener("click",c.current);n.current=!1},r=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(r),e.removeEventListener("pointerdown",i),e.removeEventListener("click",c.current)}},[e,a]),{onPointerDownCapture:()=>n.current=!0}}function DC(o,e=globalThis?.document){const a=Ie(o),n=y.useRef(!1);return y.useEffect(()=>{const c=i=>{i.target&&!n.current&&U_(jC,a,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",c),()=>e.removeEventListener("focusin",c)},[e,a]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function l_(){const o=new CustomEvent(ux);document.dispatchEvent(o)}function U_(o,e,a,{discrete:n}){const c=a.originalEvent.target,i=new CustomEvent(o,{bubbles:!1,cancelable:!0,detail:a});e&&c.addEventListener(o,e,{once:!0}),n?T_(c,i):c.dispatchEvent(i)}var tx=0;function G_(){y.useEffect(()=>{const o=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",o[0]??y_()),document.body.insertAdjacentElement("beforeend",o[1]??y_()),tx++,()=>{tx===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),tx--}},[])}function y_(){const o=document.createElement("span");return o.setAttribute("data-radix-focus-guard",""),o.tabIndex=0,o.style.outline="none",o.style.opacity="0",o.style.position="fixed",o.style.pointerEvents="none",o}var ox="focusScope.autoFocusOnMount",ax="focusScope.autoFocusOnUnmount",p_={bubbles:!1,cancelable:!0},VC="FocusScope",bx=y.forwardRef((o,e)=>{const{loop:a=!1,trapped:n=!1,onMountAutoFocus:c,onUnmountAutoFocus:i,...r}=o,[d,h]=y.useState(null),p=Ie(c),u=Ie(i),s=y.useRef(null),k=Q(e,M=>h(M)),f=y.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;y.useEffect(()=>{if(n){let M=function(_){if(f.paused||!d)return;const w=_.target;d.contains(w)?s.current=w:De(s.current,{select:!0})},g=function(_){if(f.paused||!d)return;const w=_.relatedTarget;w!==null&&(d.contains(w)||De(s.current,{select:!0}))},v=function(_){if(document.activeElement===document.body)for(const L of _)L.removedNodes.length>0&&De(d)};document.addEventListener("focusin",M),document.addEventListener("focusout",g);const x=new MutationObserver(v);return d&&x.observe(d,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",M),document.removeEventListener("focusout",g),x.disconnect()}}},[n,d,f.paused]),y.useEffect(()=>{if(d){k_.add(f);const M=document.activeElement;if(!d.contains(M)){const v=new CustomEvent(ox,p_);d.addEventListener(ox,p),d.dispatchEvent(v),v.defaultPrevented||(TC(UC(Z_(d)),{select:!0}),document.activeElement===M&&De(d))}return()=>{d.removeEventListener(ox,p),setTimeout(()=>{const v=new CustomEvent(ax,p_);d.addEventListener(ax,u),d.dispatchEvent(v),v.defaultPrevented||De(M??document.body,{select:!0}),d.removeEventListener(ax,u),k_.remove(f)},0)}}},[d,p,u,f]);const m=y.useCallback(M=>{if(!a&&!n||f.paused)return;const g=M.key==="Tab"&&!M.altKey&&!M.ctrlKey&&!M.metaKey,v=document.activeElement;if(g&&v){const x=M.currentTarget,[_,w]=FC(x);_&&w?!M.shiftKey&&v===w?(M.preventDefault(),a&&De(_,{select:!0})):M.shiftKey&&v===_&&(M.preventDefault(),a&&De(w,{select:!0})):v===x&&M.preventDefault()}},[a,n,f.paused]);return l.jsx(Z.div,{tabIndex:-1,...r,ref:k,onKeyDown:m})});bx.displayName=VC;function TC(o,{select:e=!1}={}){const a=document.activeElement;for(const n of o)if(De(n,{select:e}),document.activeElement!==a)return}function FC(o){const e=Z_(o),a=u_(e,o),n=u_(e.reverse(),o);return[a,n]}function Z_(o){const e=[],a=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const c=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||c?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;a.nextNode();)e.push(a.currentNode);return e}function u_(o,e){for(const a of o)if(!BC(a,{upTo:e}))return a}function BC(o,{upTo:e}){if(getComputedStyle(o).visibility==="hidden")return!0;for(;o;){if(e!==void 0&&o===e)return!1;if(getComputedStyle(o).display==="none")return!0;o=o.parentElement}return!1}function EC(o){return o instanceof HTMLInputElement&&"select"in o}function De(o,{select:e=!1}={}){if(o&&o.focus){const a=document.activeElement;o.focus({preventScroll:!0}),o!==a&&EC(o)&&e&&o.select()}}var k_=OC();function OC(){let o=[];return{add(e){const a=o[0];e!==a&&a?.pause(),o=f_(o,e),o.unshift(e)},remove(e){o=f_(o,e),o[0]?.resume()}}}function f_(o,e){const a=[...o],n=a.indexOf(e);return n!==-1&&a.splice(n,1),a}function UC(o){return o.filter(e=>e.tagName!=="A")}var GC=uC[" useId ".trim().toString()]||(()=>{}),ZC=0;function Oe(o){const[e,a]=y.useState(GC());return Ue(()=>{a(n=>n??String(ZC++))},[o]),o||(e?`radix-${e}`:"")}const WC=["top","right","bottom","left"],Ge=Math.min,se=Math.max,Ig=Math.round,fn=Math.floor,be=o=>({x:o,y:o}),XC={left:"right",right:"left",bottom:"top",top:"bottom"},KC={start:"end",end:"start"};function kx(o,e,a){return se(o,Ge(e,a))}function qe(o,e){return typeof o=="function"?o(e):o}function Pe(o){return o.split("-")[0]}function Ea(o){return o.split("-")[1]}function Ix(o){return o==="x"?"y":"x"}function Nx(o){return o==="y"?"height":"width"}const YC=new Set(["top","bottom"]);function Ce(o){return YC.has(Pe(o))?"y":"x"}function Sx(o){return Ix(Ce(o))}function QC(o,e,a){a===void 0&&(a=!1);const n=Ea(o),c=Sx(o),i=Nx(c);let r=c==="x"?n===(a?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(r=Ng(r)),[r,Ng(r)]}function JC(o){const e=Ng(o);return[fx(o),e,fx(e)]}function fx(o){return o.replace(/start|end/g,e=>KC[e])}const M_=["left","right"],m_=["right","left"],eb=["top","bottom"],tb=["bottom","top"];function ob(o,e,a){switch(o){case"top":case"bottom":return a?e?m_:M_:e?M_:m_;case"left":case"right":return e?eb:tb;default:return[]}}function ab(o,e,a,n){const c=Ea(o);let i=ob(Pe(o),a==="start",n);return c&&(i=i.map(r=>r+"-"+c),e&&(i=i.concat(i.map(fx)))),i}function Ng(o){return o.replace(/left|right|bottom|top/g,e=>XC[e])}function nb(o){return{top:0,right:0,bottom:0,left:0,...o}}function W_(o){return typeof o!="number"?nb(o):{top:o,right:o,bottom:o,left:o}}function Sg(o){const{x:e,y:a,width:n,height:c}=o;return{width:n,height:c,top:a,left:e,right:e+n,bottom:a+c,x:e,y:a}}function v_(o,e,a){let{reference:n,floating:c}=o;const i=Ce(e),r=Sx(e),d=Nx(r),h=Pe(e),p=i==="y",u=n.x+n.width/2-c.width/2,s=n.y+n.height/2-c.height/2,k=n[d]/2-c[d]/2;let f;switch(h){case"top":f={x:u,y:n.y-c.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:s};break;case"left":f={x:n.x-c.width,y:s};break;default:f={x:n.x,y:n.y}}switch(Ea(e)){case"start":f[r]-=k*(a&&p?-1:1);break;case"end":f[r]+=k*(a&&p?-1:1);break}return f}const cb=async(o,e,a)=>{const{placement:n="bottom",strategy:c="absolute",middleware:i=[],platform:r}=a,d=i.filter(Boolean),h=await(r.isRTL==null?void 0:r.isRTL(e));let p=await r.getElementRects({reference:o,floating:e,strategy:c}),{x:u,y:s}=v_(p,n,h),k=n,f={},m=0;for(let M=0;M<d.length;M++){const{name:g,fn:v}=d[M],{x,y:_,data:w,reset:L}=await v({x:u,y:s,initialPlacement:n,placement:k,strategy:c,middlewareData:f,rects:p,platform:r,elements:{reference:o,floating:e}});u=x??u,s=_??s,f={...f,[g]:{...f[g],...w}},L&&m<=50&&(m++,typeof L=="object"&&(L.placement&&(k=L.placement),L.rects&&(p=L.rects===!0?await r.getElementRects({reference:o,floating:e,strategy:c}):L.rects),{x:u,y:s}=v_(p,k,h)),M=-1)}return{x:u,y:s,placement:k,strategy:c,middlewareData:f}};async function Qa(o,e){var a;e===void 0&&(e={});const{x:n,y:c,platform:i,rects:r,elements:d,strategy:h}=o,{boundary:p="clippingAncestors",rootBoundary:u="viewport",elementContext:s="floating",altBoundary:k=!1,padding:f=0}=qe(e,o),m=W_(f),g=d[k?s==="floating"?"reference":"floating":s],v=Sg(await i.getClippingRect({element:(a=await(i.isElement==null?void 0:i.isElement(g)))==null||a?g:g.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(d.floating)),boundary:p,rootBoundary:u,strategy:h})),x=s==="floating"?{x:n,y:c,width:r.floating.width,height:r.floating.height}:r.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d.floating)),w=await(i.isElement==null?void 0:i.isElement(_))?await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1}:{x:1,y:1},L=Sg(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:d,rect:x,offsetParent:_,strategy:h}):x);return{top:(v.top-L.top+m.top)/w.y,bottom:(L.bottom-v.bottom+m.bottom)/w.y,left:(v.left-L.left+m.left)/w.x,right:(L.right-v.right+m.right)/w.x}}const ib=o=>({name:"arrow",options:o,async fn(e){const{x:a,y:n,placement:c,rects:i,platform:r,elements:d,middlewareData:h}=e,{element:p,padding:u=0}=qe(o,e)||{};if(p==null)return{};const s=W_(u),k={x:a,y:n},f=Sx(c),m=Nx(f),M=await r.getDimensions(p),g=f==="y",v=g?"top":"left",x=g?"bottom":"right",_=g?"clientHeight":"clientWidth",w=i.reference[m]+i.reference[f]-k[f]-i.floating[m],L=k[f]-i.reference[f],I=await(r.getOffsetParent==null?void 0:r.getOffsetParent(p));let C=I?I[_]:0;(!C||!await(r.isElement==null?void 0:r.isElement(I)))&&(C=d.floating[_]||i.floating[m]);const S=w/2-L/2,j=C/2-M[m]/2-1,P=Ge(s[v],j),V=Ge(s[x],j),R=P,z=C-M[m]-V,B=C/2-M[m]/2+S,O=kx(R,B,z),A=!h.arrow&&Ea(c)!=null&&B!==O&&i.reference[m]/2-(B<R?P:V)-M[m]/2<0,T=A?B<R?B-R:B-z:0;return{[f]:k[f]+T,data:{[f]:O,centerOffset:B-O-T,...A&&{alignmentOffset:T}},reset:A}}}),rb=function(o){return o===void 0&&(o={}),{name:"flip",options:o,async fn(e){var a,n;const{placement:c,middlewareData:i,rects:r,initialPlacement:d,platform:h,elements:p}=e,{mainAxis:u=!0,crossAxis:s=!0,fallbackPlacements:k,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:M=!0,...g}=qe(o,e);if((a=i.arrow)!=null&&a.alignmentOffset)return{};const v=Pe(c),x=Ce(d),_=Pe(d)===d,w=await(h.isRTL==null?void 0:h.isRTL(p.floating)),L=k||(_||!M?[Ng(d)]:JC(d)),I=m!=="none";!k&&I&&L.push(...ab(d,M,m,w));const C=[d,...L],S=await Qa(e,g),j=[];let P=((n=i.flip)==null?void 0:n.overflows)||[];if(u&&j.push(S[v]),s){const B=QC(c,r,w);j.push(S[B[0]],S[B[1]])}if(P=[...P,{placement:c,overflows:j}],!j.every(B=>B<=0)){var V,R;const B=(((V=i.flip)==null?void 0:V.index)||0)+1,O=C[B];if(O&&(!(s==="alignment"?x!==Ce(O):!1)||P.every(q=>Ce(q.placement)===x?q.overflows[0]>0:!0)))return{data:{index:B,overflows:P},reset:{placement:O}};let A=(R=P.filter(T=>T.overflows[0]<=0).sort((T,q)=>T.overflows[1]-q.overflows[1])[0])==null?void 0:R.placement;if(!A)switch(f){case"bestFit":{var z;const T=(z=P.filter(q=>{if(I){const N=Ce(q.placement);return N===x||N==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(N=>N>0).reduce((N,G)=>N+G,0)]).sort((q,N)=>q[1]-N[1])[0])==null?void 0:z[0];T&&(A=T);break}case"initialPlacement":A=d;break}if(c!==A)return{reset:{placement:A}}}return{}}}};function g_(o,e){return{top:o.top-e.height,right:o.right-e.width,bottom:o.bottom-e.height,left:o.left-e.width}}function x_(o){return WC.some(e=>o[e]>=0)}const db=function(o){return o===void 0&&(o={}),{name:"hide",options:o,async fn(e){const{rects:a}=e,{strategy:n="referenceHidden",...c}=qe(o,e);switch(n){case"referenceHidden":{const i=await Qa(e,{...c,elementContext:"reference"}),r=g_(i,a.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:x_(r)}}}case"escaped":{const i=await Qa(e,{...c,altBoundary:!0}),r=g_(i,a.floating);return{data:{escapedOffsets:r,escaped:x_(r)}}}default:return{}}}}},X_=new Set(["left","top"]);async function sb(o,e){const{placement:a,platform:n,elements:c}=o,i=await(n.isRTL==null?void 0:n.isRTL(c.floating)),r=Pe(a),d=Ea(a),h=Ce(a)==="y",p=X_.has(r)?-1:1,u=i&&h?-1:1,s=qe(e,o);let{mainAxis:k,crossAxis:f,alignmentAxis:m}=typeof s=="number"?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};return d&&typeof m=="number"&&(f=d==="end"?m*-1:m),h?{x:f*u,y:k*p}:{x:k*p,y:f*u}}const hb=function(o){return o===void 0&&(o=0),{name:"offset",options:o,async fn(e){var a,n;const{x:c,y:i,placement:r,middlewareData:d}=e,h=await sb(e,o);return r===((a=d.offset)==null?void 0:a.placement)&&(n=d.arrow)!=null&&n.alignmentOffset?{}:{x:c+h.x,y:i+h.y,data:{...h,placement:r}}}}},lb=function(o){return o===void 0&&(o={}),{name:"shift",options:o,async fn(e){const{x:a,y:n,placement:c}=e,{mainAxis:i=!0,crossAxis:r=!1,limiter:d={fn:g=>{let{x:v,y:x}=g;return{x:v,y:x}}},...h}=qe(o,e),p={x:a,y:n},u=await Qa(e,h),s=Ce(Pe(c)),k=Ix(s);let f=p[k],m=p[s];if(i){const g=k==="y"?"top":"left",v=k==="y"?"bottom":"right",x=f+u[g],_=f-u[v];f=kx(x,f,_)}if(r){const g=s==="y"?"top":"left",v=s==="y"?"bottom":"right",x=m+u[g],_=m-u[v];m=kx(x,m,_)}const M=d.fn({...e,[k]:f,[s]:m});return{...M,data:{x:M.x-a,y:M.y-n,enabled:{[k]:i,[s]:r}}}}}},yb=function(o){return o===void 0&&(o={}),{options:o,fn(e){const{x:a,y:n,placement:c,rects:i,middlewareData:r}=e,{offset:d=0,mainAxis:h=!0,crossAxis:p=!0}=qe(o,e),u={x:a,y:n},s=Ce(c),k=Ix(s);let f=u[k],m=u[s];const M=qe(d,e),g=typeof M=="number"?{mainAxis:M,crossAxis:0}:{mainAxis:0,crossAxis:0,...M};if(h){const _=k==="y"?"height":"width",w=i.reference[k]-i.floating[_]+g.mainAxis,L=i.reference[k]+i.reference[_]-g.mainAxis;f<w?f=w:f>L&&(f=L)}if(p){var v,x;const _=k==="y"?"width":"height",w=X_.has(Pe(c)),L=i.reference[s]-i.floating[_]+(w&&((v=r.offset)==null?void 0:v[s])||0)+(w?0:g.crossAxis),I=i.reference[s]+i.reference[_]+(w?0:((x=r.offset)==null?void 0:x[s])||0)-(w?g.crossAxis:0);m<L?m=L:m>I&&(m=I)}return{[k]:f,[s]:m}}}},pb=function(o){return o===void 0&&(o={}),{name:"size",options:o,async fn(e){var a,n;const{placement:c,rects:i,platform:r,elements:d}=e,{apply:h=()=>{},...p}=qe(o,e),u=await Qa(e,p),s=Pe(c),k=Ea(c),f=Ce(c)==="y",{width:m,height:M}=i.floating;let g,v;s==="top"||s==="bottom"?(g=s,v=k===(await(r.isRTL==null?void 0:r.isRTL(d.floating))?"start":"end")?"left":"right"):(v=s,g=k==="end"?"top":"bottom");const x=M-u.top-u.bottom,_=m-u.left-u.right,w=Ge(M-u[g],x),L=Ge(m-u[v],_),I=!e.middlewareData.shift;let C=w,S=L;if((a=e.middlewareData.shift)!=null&&a.enabled.x&&(S=_),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(C=x),I&&!k){const P=se(u.left,0),V=se(u.right,0),R=se(u.top,0),z=se(u.bottom,0);f?S=m-2*(P!==0||V!==0?P+V:se(u.left,u.right)):C=M-2*(R!==0||z!==0?R+z:se(u.top,u.bottom))}await h({...e,availableWidth:S,availableHeight:C});const j=await r.getDimensions(d.floating);return m!==j.width||M!==j.height?{reset:{rects:!0}}:{}}}};function Rg(){return typeof window<"u"}function Oa(o){return K_(o)?(o.nodeName||"").toLowerCase():"#document"}function he(o){var e;return(o==null||(e=o.ownerDocument)==null?void 0:e.defaultView)||window}function $e(o){var e;return(e=(K_(o)?o.ownerDocument:o.document)||window.document)==null?void 0:e.documentElement}function K_(o){return Rg()?o instanceof Node||o instanceof he(o).Node:!1}function fe(o){return Rg()?o instanceof Element||o instanceof he(o).Element:!1}function Ne(o){return Rg()?o instanceof HTMLElement||o instanceof he(o).HTMLElement:!1}function __(o){return!Rg()||typeof ShadowRoot>"u"?!1:o instanceof ShadowRoot||o instanceof he(o).ShadowRoot}const ub=new Set(["inline","contents"]);function dn(o){const{overflow:e,overflowX:a,overflowY:n,display:c}=Me(o);return/auto|scroll|overlay|hidden|clip/.test(e+n+a)&&!ub.has(c)}const kb=new Set(["table","td","th"]);function fb(o){return kb.has(Oa(o))}const Mb=[":popover-open",":modal"];function Dg(o){return Mb.some(e=>{try{return o.matches(e)}catch{return!1}})}const mb=["transform","translate","scale","rotate","perspective"],vb=["transform","translate","scale","rotate","perspective","filter"],gb=["paint","layout","strict","content"];function $x(o){const e=Ax(),a=fe(o)?Me(o):o;return mb.some(n=>a[n]?a[n]!=="none":!1)||(a.containerType?a.containerType!=="normal":!1)||!e&&(a.backdropFilter?a.backdropFilter!=="none":!1)||!e&&(a.filter?a.filter!=="none":!1)||vb.some(n=>(a.willChange||"").includes(n))||gb.some(n=>(a.contain||"").includes(n))}function xb(o){let e=Ze(o);for(;Ne(e)&&!Fa(e);){if($x(e))return e;if(Dg(e))return null;e=Ze(e)}return null}function Ax(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const _b=new Set(["html","body","#document"]);function Fa(o){return _b.has(Oa(o))}function Me(o){return he(o).getComputedStyle(o)}function Vg(o){return fe(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:{scrollLeft:o.scrollX,scrollTop:o.scrollY}}function Ze(o){if(Oa(o)==="html")return o;const e=o.assignedSlot||o.parentNode||__(o)&&o.host||$e(o);return __(e)?e.host:e}function Y_(o){const e=Ze(o);return Fa(e)?o.ownerDocument?o.ownerDocument.body:o.body:Ne(e)&&dn(e)?e:Y_(e)}function Ja(o,e,a){var n;e===void 0&&(e=[]),a===void 0&&(a=!0);const c=Y_(o),i=c===((n=o.ownerDocument)==null?void 0:n.body),r=he(c);if(i){const d=Mx(r);return e.concat(r,r.visualViewport||[],dn(c)?c:[],d&&a?Ja(d):[])}return e.concat(c,Ja(c,[],a))}function Mx(o){return o.parent&&Object.getPrototypeOf(o.parent)?o.frameElement:null}function Q_(o){const e=Me(o);let a=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const c=Ne(o),i=c?o.offsetWidth:a,r=c?o.offsetHeight:n,d=Ig(a)!==i||Ig(n)!==r;return d&&(a=i,n=r),{width:a,height:n,$:d}}function qx(o){return fe(o)?o:o.contextElement}function za(o){const e=qx(o);if(!Ne(e))return be(1);const a=e.getBoundingClientRect(),{width:n,height:c,$:i}=Q_(e);let r=(i?Ig(a.width):a.width)/n,d=(i?Ig(a.height):a.height)/c;return(!r||!Number.isFinite(r))&&(r=1),(!d||!Number.isFinite(d))&&(d=1),{x:r,y:d}}const wb=be(0);function J_(o){const e=he(o);return!Ax()||!e.visualViewport?wb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Lb(o,e,a){return e===void 0&&(e=!1),!a||e&&a!==he(o)?!1:e}function wa(o,e,a,n){e===void 0&&(e=!1),a===void 0&&(a=!1);const c=o.getBoundingClientRect(),i=qx(o);let r=be(1);e&&(n?fe(n)&&(r=za(n)):r=za(o));const d=Lb(i,a,n)?J_(i):be(0);let h=(c.left+d.x)/r.x,p=(c.top+d.y)/r.y,u=c.width/r.x,s=c.height/r.y;if(i){const k=he(i),f=n&&fe(n)?he(n):n;let m=k,M=Mx(m);for(;M&&n&&f!==m;){const g=za(M),v=M.getBoundingClientRect(),x=Me(M),_=v.left+(M.clientLeft+parseFloat(x.paddingLeft))*g.x,w=v.top+(M.clientTop+parseFloat(x.paddingTop))*g.y;h*=g.x,p*=g.y,u*=g.x,s*=g.y,h+=_,p+=w,m=he(M),M=Mx(m)}}return Sg({width:u,height:s,x:h,y:p})}function Px(o,e){const a=Vg(o).scrollLeft;return e?e.left+a:wa($e(o)).left+a}function ew(o,e,a){a===void 0&&(a=!1);const n=o.getBoundingClientRect(),c=n.left+e.scrollLeft-(a?0:Px(o,n)),i=n.top+e.scrollTop;return{x:c,y:i}}function Cb(o){let{elements:e,rect:a,offsetParent:n,strategy:c}=o;const i=c==="fixed",r=$e(n),d=e?Dg(e.floating):!1;if(n===r||d&&i)return a;let h={scrollLeft:0,scrollTop:0},p=be(1);const u=be(0),s=Ne(n);if((s||!s&&!i)&&((Oa(n)!=="body"||dn(r))&&(h=Vg(n)),Ne(n))){const f=wa(n);p=za(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const k=r&&!s&&!i?ew(r,h,!0):be(0);return{width:a.width*p.x,height:a.height*p.y,x:a.x*p.x-h.scrollLeft*p.x+u.x+k.x,y:a.y*p.y-h.scrollTop*p.y+u.y+k.y}}function bb(o){return Array.from(o.getClientRects())}function Ib(o){const e=$e(o),a=Vg(o),n=o.ownerDocument.body,c=se(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=se(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-a.scrollLeft+Px(o);const d=-a.scrollTop;return Me(n).direction==="rtl"&&(r+=se(e.clientWidth,n.clientWidth)-c),{width:c,height:i,x:r,y:d}}function Nb(o,e){const a=he(o),n=$e(o),c=a.visualViewport;let i=n.clientWidth,r=n.clientHeight,d=0,h=0;if(c){i=c.width,r=c.height;const p=Ax();(!p||p&&e==="fixed")&&(d=c.offsetLeft,h=c.offsetTop)}return{width:i,height:r,x:d,y:h}}const Sb=new Set(["absolute","fixed"]);function $b(o,e){const a=wa(o,!0,e==="fixed"),n=a.top+o.clientTop,c=a.left+o.clientLeft,i=Ne(o)?za(o):be(1),r=o.clientWidth*i.x,d=o.clientHeight*i.y,h=c*i.x,p=n*i.y;return{width:r,height:d,x:h,y:p}}function w_(o,e,a){let n;if(e==="viewport")n=Nb(o,a);else if(e==="document")n=Ib($e(o));else if(fe(e))n=$b(e,a);else{const c=J_(o);n={x:e.x-c.x,y:e.y-c.y,width:e.width,height:e.height}}return Sg(n)}function tw(o,e){const a=Ze(o);return a===e||!fe(a)||Fa(a)?!1:Me(a).position==="fixed"||tw(a,e)}function Ab(o,e){const a=e.get(o);if(a)return a;let n=Ja(o,[],!1).filter(d=>fe(d)&&Oa(d)!=="body"),c=null;const i=Me(o).position==="fixed";let r=i?Ze(o):o;for(;fe(r)&&!Fa(r);){const d=Me(r),h=$x(r);!h&&d.position==="fixed"&&(c=null),(i?!h&&!c:!h&&d.position==="static"&&!!c&&Sb.has(c.position)||dn(r)&&!h&&tw(o,r))?n=n.filter(u=>u!==r):c=d,r=Ze(r)}return e.set(o,n),n}function qb(o){let{element:e,boundary:a,rootBoundary:n,strategy:c}=o;const r=[...a==="clippingAncestors"?Dg(e)?[]:Ab(e,this._c):[].concat(a),n],d=r[0],h=r.reduce((p,u)=>{const s=w_(e,u,c);return p.top=se(s.top,p.top),p.right=Ge(s.right,p.right),p.bottom=Ge(s.bottom,p.bottom),p.left=se(s.left,p.left),p},w_(e,d,c));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function Pb(o){const{width:e,height:a}=Q_(o);return{width:e,height:a}}function jb(o,e,a){const n=Ne(e),c=$e(e),i=a==="fixed",r=wa(o,!0,i,e);let d={scrollLeft:0,scrollTop:0};const h=be(0);function p(){h.x=Px(c)}if(n||!n&&!i)if((Oa(e)!=="body"||dn(c))&&(d=Vg(e)),n){const f=wa(e,!0,i,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else c&&p();i&&!n&&c&&p();const u=c&&!n&&!i?ew(c,d):be(0),s=r.left+d.scrollLeft-h.x-u.x,k=r.top+d.scrollTop-h.y-u.y;return{x:s,y:k,width:r.width,height:r.height}}function nx(o){return Me(o).position==="static"}function L_(o,e){if(!Ne(o)||Me(o).position==="fixed")return null;if(e)return e(o);let a=o.offsetParent;return $e(o)===a&&(a=a.ownerDocument.body),a}function ow(o,e){const a=he(o);if(Dg(o))return a;if(!Ne(o)){let c=Ze(o);for(;c&&!Fa(c);){if(fe(c)&&!nx(c))return c;c=Ze(c)}return a}let n=L_(o,e);for(;n&&fb(n)&&nx(n);)n=L_(n,e);return n&&Fa(n)&&nx(n)&&!$x(n)?a:n||xb(o)||a}const Hb=async function(o){const e=this.getOffsetParent||ow,a=this.getDimensions,n=await a(o.floating);return{reference:jb(o.reference,await e(o.floating),o.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function zb(o){return Me(o).direction==="rtl"}const Rb={convertOffsetParentRelativeRectToViewportRelativeRect:Cb,getDocumentElement:$e,getClippingRect:qb,getOffsetParent:ow,getElementRects:Hb,getClientRects:bb,getDimensions:Pb,getScale:za,isElement:fe,isRTL:zb};function aw(o,e){return o.x===e.x&&o.y===e.y&&o.width===e.width&&o.height===e.height}function Db(o,e){let a=null,n;const c=$e(o);function i(){var d;clearTimeout(n),(d=a)==null||d.disconnect(),a=null}function r(d,h){d===void 0&&(d=!1),h===void 0&&(h=1),i();const p=o.getBoundingClientRect(),{left:u,top:s,width:k,height:f}=p;if(d||e(),!k||!f)return;const m=fn(s),M=fn(c.clientWidth-(u+k)),g=fn(c.clientHeight-(s+f)),v=fn(u),_={rootMargin:-m+"px "+-M+"px "+-g+"px "+-v+"px",threshold:se(0,Ge(1,h))||1};let w=!0;function L(I){const C=I[0].intersectionRatio;if(C!==h){if(!w)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},1e3)}C===1&&!aw(p,o.getBoundingClientRect())&&r(),w=!1}try{a=new IntersectionObserver(L,{..._,root:c.ownerDocument})}catch{a=new IntersectionObserver(L,_)}a.observe(o)}return r(!0),i}function Vb(o,e,a,n){n===void 0&&(n={});const{ancestorScroll:c=!0,ancestorResize:i=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:d=typeof IntersectionObserver=="function",animationFrame:h=!1}=n,p=qx(o),u=c||i?[...p?Ja(p):[],...Ja(e)]:[];u.forEach(v=>{c&&v.addEventListener("scroll",a,{passive:!0}),i&&v.addEventListener("resize",a)});const s=p&&d?Db(p,a):null;let k=-1,f=null;r&&(f=new ResizeObserver(v=>{let[x]=v;x&&x.target===p&&f&&(f.unobserve(e),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var _;(_=f)==null||_.observe(e)})),a()}),p&&!h&&f.observe(p),f.observe(e));let m,M=h?wa(o):null;h&&g();function g(){const v=wa(o);M&&!aw(M,v)&&a(),M=v,m=requestAnimationFrame(g)}return a(),()=>{var v;u.forEach(x=>{c&&x.removeEventListener("scroll",a),i&&x.removeEventListener("resize",a)}),s?.(),(v=f)==null||v.disconnect(),f=null,h&&cancelAnimationFrame(m)}}const Tb=hb,Fb=lb,Bb=rb,Eb=pb,Ob=db,C_=ib,Ub=yb,Gb=(o,e,a)=>{const n=new Map,c={platform:Rb,...a},i={...c.platform,_c:n};return cb(o,e,{...c,platform:i})};var Zb=typeof document<"u",Wb=function(){},Cn=Zb?y.useLayoutEffect:Wb;function $g(o,e){if(o===e)return!0;if(typeof o!=typeof e)return!1;if(typeof o=="function"&&o.toString()===e.toString())return!0;let a,n,c;if(o&&e&&typeof o=="object"){if(Array.isArray(o)){if(a=o.length,a!==e.length)return!1;for(n=a;n--!==0;)if(!$g(o[n],e[n]))return!1;return!0}if(c=Object.keys(o),a=c.length,a!==Object.keys(e).length)return!1;for(n=a;n--!==0;)if(!{}.hasOwnProperty.call(e,c[n]))return!1;for(n=a;n--!==0;){const i=c[n];if(!(i==="_owner"&&o.$$typeof)&&!$g(o[i],e[i]))return!1}return!0}return o!==o&&e!==e}function nw(o){return typeof window>"u"?1:(o.ownerDocument.defaultView||window).devicePixelRatio||1}function b_(o,e){const a=nw(o);return Math.round(e*a)/a}function cx(o){const e=y.useRef(o);return Cn(()=>{e.current=o}),e}function Xb(o){o===void 0&&(o={});const{placement:e="bottom",strategy:a="absolute",middleware:n=[],platform:c,elements:{reference:i,floating:r}={},transform:d=!0,whileElementsMounted:h,open:p}=o,[u,s]=y.useState({x:0,y:0,strategy:a,placement:e,middlewareData:{},isPositioned:!1}),[k,f]=y.useState(n);$g(k,n)||f(n);const[m,M]=y.useState(null),[g,v]=y.useState(null),x=y.useCallback(q=>{q!==I.current&&(I.current=q,M(q))},[]),_=y.useCallback(q=>{q!==C.current&&(C.current=q,v(q))},[]),w=i||m,L=r||g,I=y.useRef(null),C=y.useRef(null),S=y.useRef(u),j=h!=null,P=cx(h),V=cx(c),R=cx(p),z=y.useCallback(()=>{if(!I.current||!C.current)return;const q={placement:e,strategy:a,middleware:k};V.current&&(q.platform=V.current),Gb(I.current,C.current,q).then(N=>{const G={...N,isPositioned:R.current!==!1};B.current&&!$g(S.current,G)&&(S.current=G,_C.flushSync(()=>{s(G)}))})},[k,e,a,V,R]);Cn(()=>{p===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,s(q=>({...q,isPositioned:!1})))},[p]);const B=y.useRef(!1);Cn(()=>(B.current=!0,()=>{B.current=!1}),[]),Cn(()=>{if(w&&(I.current=w),L&&(C.current=L),w&&L){if(P.current)return P.current(w,L,z);z()}},[w,L,z,P,j]);const O=y.useMemo(()=>({reference:I,floating:C,setReference:x,setFloating:_}),[x,_]),A=y.useMemo(()=>({reference:w,floating:L}),[w,L]),T=y.useMemo(()=>{const q={position:a,left:0,top:0};if(!A.floating)return q;const N=b_(A.floating,u.x),G=b_(A.floating,u.y);return d?{...q,transform:"translate("+N+"px, "+G+"px)",...nw(A.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:N,top:G}},[a,d,A.floating,u.x,u.y]);return y.useMemo(()=>({...u,update:z,refs:O,elements:A,floatingStyles:T}),[u,z,O,A,T])}const Kb=o=>{function e(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:o,fn(a){const{element:n,padding:c}=typeof o=="function"?o(a):o;return n&&e(n)?n.current!=null?C_({element:n.current,padding:c}).fn(a):{}:n?C_({element:n,padding:c}).fn(a):{}}}},Yb=(o,e)=>({...Tb(o),options:[o,e]}),Qb=(o,e)=>({...Fb(o),options:[o,e]}),Jb=(o,e)=>({...Ub(o),options:[o,e]}),eI=(o,e)=>({...Bb(o),options:[o,e]}),tI=(o,e)=>({...Eb(o),options:[o,e]}),oI=(o,e)=>({...Ob(o),options:[o,e]}),aI=(o,e)=>({...Kb(o),options:[o,e]});var nI="Arrow",cw=y.forwardRef((o,e)=>{const{children:a,width:n=10,height:c=5,...i}=o;return l.jsx(Z.svg,{...i,ref:e,width:n,height:c,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:o.asChild?a:l.jsx("polygon",{points:"0,0 30,0 15,10"})})});cw.displayName=nI;var cI=cw,jx="Popper",[iw,Tg]=je(jx),[iI,rw]=iw(jx),dw=o=>{const{__scopePopper:e,children:a}=o,[n,c]=y.useState(null);return l.jsx(iI,{scope:e,anchor:n,onAnchorChange:c,children:a})};dw.displayName=jx;var sw="PopperAnchor",hw=y.forwardRef((o,e)=>{const{__scopePopper:a,virtualRef:n,...c}=o,i=rw(sw,a),r=y.useRef(null),d=Q(e,r),h=y.useRef(null);return y.useEffect(()=>{const p=h.current;h.current=n?.current||r.current,p!==h.current&&i.onAnchorChange(h.current)}),n?null:l.jsx(Z.div,{...c,ref:d})});hw.displayName=sw;var Hx="PopperContent",[rI,dI]=iw(Hx),lw=y.forwardRef((o,e)=>{const{__scopePopper:a,side:n="bottom",sideOffset:c=0,align:i="center",alignOffset:r=0,arrowPadding:d=0,avoidCollisions:h=!0,collisionBoundary:p=[],collisionPadding:u=0,sticky:s="partial",hideWhenDetached:k=!1,updatePositionStrategy:f="optimized",onPlaced:m,...M}=o,g=rw(Hx,a),[v,x]=y.useState(null),_=Q(e,K=>x(K)),[w,L]=y.useState(null),I=gC(w),C=I?.width??0,S=I?.height??0,j=n+(i!=="center"?"-"+i:""),P=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},V=Array.isArray(p)?p:[p],R=V.length>0,z={padding:P,boundary:V.filter(hI),altBoundary:R},{refs:B,floatingStyles:O,placement:A,isPositioned:T,middlewareData:q}=Xb({strategy:"fixed",placement:j,whileElementsMounted:(...K)=>Vb(...K,{animationFrame:f==="always"}),elements:{reference:g.anchor},middleware:[Yb({mainAxis:c+S,alignmentAxis:r}),h&&Qb({mainAxis:!0,crossAxis:!1,limiter:s==="partial"?Jb():void 0,...z}),h&&eI({...z}),tI({...z,apply:({elements:K,rects:U,availableWidth:He,availableHeight:Ia})=>{const{width:Na,height:ze}=U.reference,Sa=K.floating.style;Sa.setProperty("--radix-popper-available-width",`${He}px`),Sa.setProperty("--radix-popper-available-height",`${Ia}px`),Sa.setProperty("--radix-popper-anchor-width",`${Na}px`),Sa.setProperty("--radix-popper-anchor-height",`${ze}px`)}}),w&&aI({element:w,padding:d}),lI({arrowWidth:C,arrowHeight:S}),k&&oI({strategy:"referenceHidden",...z})]}),[N,G]=uw(A),J=Ie(m);Ue(()=>{T&&J?.()},[T,J]);const le=q.arrow?.x,F=q.arrow?.y,W=q.arrow?.centerOffset!==0,[X,Y]=y.useState();return Ue(()=>{v&&Y(window.getComputedStyle(v).zIndex)},[v]),l.jsx("div",{ref:B.setFloating,"data-radix-popper-content-wrapper":"",style:{...O,transform:T?O.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:X,"--radix-popper-transform-origin":[q.transformOrigin?.x,q.transformOrigin?.y].join(" "),...q.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:o.dir,children:l.jsx(rI,{scope:a,placedSide:N,onArrowChange:L,arrowX:le,arrowY:F,shouldHideArrow:W,children:l.jsx(Z.div,{"data-side":N,"data-align":G,...M,ref:_,style:{...M.style,animation:T?void 0:"none"}})})})});lw.displayName=Hx;var yw="PopperArrow",sI={top:"bottom",right:"left",bottom:"top",left:"right"},pw=y.forwardRef(function(e,a){const{__scopePopper:n,...c}=e,i=dI(yw,n),r=sI[i.placedSide];return l.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[r]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:l.jsx(cI,{...c,ref:a,style:{...c.style,display:"block"}})})});pw.displayName=yw;function hI(o){return o!==null}var lI=o=>({name:"transformOrigin",options:o,fn(e){const{placement:a,rects:n,middlewareData:c}=e,r=c.arrow?.centerOffset!==0,d=r?0:o.arrowWidth,h=r?0:o.arrowHeight,[p,u]=uw(a),s={start:"0%",center:"50%",end:"100%"}[u],k=(c.arrow?.x??0)+d/2,f=(c.arrow?.y??0)+h/2;let m="",M="";return p==="bottom"?(m=r?s:`${k}px`,M=`${-h}px`):p==="top"?(m=r?s:`${k}px`,M=`${n.floating.height+h}px`):p==="right"?(m=`${-h}px`,M=r?s:`${f}px`):p==="left"&&(m=`${n.floating.width+h}px`,M=r?s:`${f}px`),{data:{x:m,y:M}}}});function uw(o){const[e,a="center"]=o.split("-");return[e,a]}var kw=dw,fw=hw,Mw=lw,mw=pw,yI="Portal",Fg=y.forwardRef((o,e)=>{const{container:a,...n}=o,[c,i]=y.useState(!1);Ue(()=>i(!0),[]);const r=a||c&&globalThis?.document?.body;return r?F_.createPortal(l.jsx(Z.div,{...n,ref:e}),r):null});Fg.displayName=yI;var pI=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),uI="VisuallyHidden",vw=y.forwardRef((o,e)=>l.jsx(Z.span,{...o,ref:e,style:{...pI,...o.style}}));vw.displayName=uI;var kI=vw,fI=function(o){if(typeof document>"u")return null;var e=Array.isArray(o)?o[0]:o;return e.ownerDocument.body},Pa=new WeakMap,Mn=new WeakMap,mn={},ix=0,gw=function(o){return o&&(o.host||gw(o.parentNode))},MI=function(o,e){return e.map(function(a){if(o.contains(a))return a;var n=gw(a);return n&&o.contains(n)?n:(console.error("aria-hidden",a,"in not contained inside",o,". Doing nothing"),null)}).filter(function(a){return!!a})},mI=function(o,e,a,n){var c=MI(e,Array.isArray(o)?o:[o]);mn[a]||(mn[a]=new WeakMap);var i=mn[a],r=[],d=new Set,h=new Set(c),p=function(s){!s||d.has(s)||(d.add(s),p(s.parentNode))};c.forEach(p);var u=function(s){!s||h.has(s)||Array.prototype.forEach.call(s.children,function(k){if(d.has(k))u(k);else try{var f=k.getAttribute(n),m=f!==null&&f!=="false",M=(Pa.get(k)||0)+1,g=(i.get(k)||0)+1;Pa.set(k,M),i.set(k,g),r.push(k),M===1&&m&&Mn.set(k,!0),g===1&&k.setAttribute(a,"true"),m||k.setAttribute(n,"true")}catch(v){console.error("aria-hidden: cannot operate on ",k,v)}})};return u(e),d.clear(),ix++,function(){r.forEach(function(s){var k=Pa.get(s)-1,f=i.get(s)-1;Pa.set(s,k),i.set(s,f),k||(Mn.has(s)||s.removeAttribute(n),Mn.delete(s)),f||s.removeAttribute(a)}),ix--,ix||(Pa=new WeakMap,Pa=new WeakMap,Mn=new WeakMap,mn={})}},xw=function(o,e,a){a===void 0&&(a="data-aria-hidden");var n=Array.from(Array.isArray(o)?o:[o]),c=fI(o);return c?(n.push.apply(n,Array.from(c.querySelectorAll("[aria-live], script"))),mI(n,c,a,"aria-hidden")):function(){return null}},Le=function(){return Le=Object.assign||function(e){for(var a,n=1,c=arguments.length;n<c;n++){a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},Le.apply(this,arguments)};function _w(o,e){var a={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(a[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(o);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(o,n[c])&&(a[n[c]]=o[n[c]]);return a}function vI(o,e,a){if(a||arguments.length===2)for(var n=0,c=e.length,i;n<c;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return o.concat(i||Array.prototype.slice.call(e))}var bn="right-scroll-bar-position",In="width-before-scroll-bar",gI="with-scroll-bars-hidden",xI="--removed-body-scroll-bar-size";function rx(o,e){return typeof o=="function"?o(e):o&&(o.current=e),o}function _I(o,e){var a=y.useState(function(){return{value:o,callback:e,facade:{get current(){return a.value},set current(n){var c=a.value;c!==n&&(a.value=n,a.callback(n,c))}}}})[0];return a.callback=e,a.facade}var wI=typeof window<"u"?y.useLayoutEffect:y.useEffect,I_=new WeakMap;function LI(o,e){var a=_I(null,function(n){return o.forEach(function(c){return rx(c,n)})});return wI(function(){var n=I_.get(a);if(n){var c=new Set(n),i=new Set(o),r=a.current;c.forEach(function(d){i.has(d)||rx(d,null)}),i.forEach(function(d){c.has(d)||rx(d,r)})}I_.set(a,o)},[o]),a}function CI(o){return o}function bI(o,e){e===void 0&&(e=CI);var a=[],n=!1,c={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:o},useMedium:function(i){var r=e(i,n);return a.push(r),function(){a=a.filter(function(d){return d!==r})}},assignSyncMedium:function(i){for(n=!0;a.length;){var r=a;a=[],r.forEach(i)}a={push:function(d){return i(d)},filter:function(){return a}}},assignMedium:function(i){n=!0;var r=[];if(a.length){var d=a;a=[],d.forEach(i),r=a}var h=function(){var u=r;r=[],u.forEach(i)},p=function(){return Promise.resolve().then(h)};p(),a={push:function(u){r.push(u),p()},filter:function(u){return r=r.filter(u),a}}}};return c}function II(o){o===void 0&&(o={});var e=bI(null);return e.options=Le({async:!0,ssr:!1},o),e}var ww=function(o){var e=o.sideCar,a=_w(o,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=e.read();if(!n)throw new Error("Sidecar medium not found");return y.createElement(n,Le({},a))};ww.isSideCarExport=!0;function NI(o,e){return o.useMedium(e),ww}var Lw=II(),dx=function(){},Bg=y.forwardRef(function(o,e){var a=y.useRef(null),n=y.useState({onScrollCapture:dx,onWheelCapture:dx,onTouchMoveCapture:dx}),c=n[0],i=n[1],r=o.forwardProps,d=o.children,h=o.className,p=o.removeScrollBar,u=o.enabled,s=o.shards,k=o.sideCar,f=o.noRelative,m=o.noIsolation,M=o.inert,g=o.allowPinchZoom,v=o.as,x=v===void 0?"div":v,_=o.gapMode,w=_w(o,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),L=k,I=LI([a,e]),C=Le(Le({},w),c);return y.createElement(y.Fragment,null,u&&y.createElement(L,{sideCar:Lw,removeScrollBar:p,shards:s,noRelative:f,noIsolation:m,inert:M,setCallbacks:i,allowPinchZoom:!!g,lockRef:a,gapMode:_}),r?y.cloneElement(y.Children.only(d),Le(Le({},C),{ref:I})):y.createElement(x,Le({},C,{className:h,ref:I}),d))});Bg.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Bg.classNames={fullWidth:In,zeroRight:bn};var SI=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function $I(){if(!document)return null;var o=document.createElement("style");o.type="text/css";var e=SI();return e&&o.setAttribute("nonce",e),o}function AI(o,e){o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}function qI(o){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(o)}var PI=function(){var o=0,e=null;return{add:function(a){o==0&&(e=$I())&&(AI(e,a),qI(e)),o++},remove:function(){o--,!o&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},jI=function(){var o=PI();return function(e,a){y.useEffect(function(){return o.add(e),function(){o.remove()}},[e&&a])}},Cw=function(){var o=jI(),e=function(a){var n=a.styles,c=a.dynamic;return o(n,c),null};return e},HI={left:0,top:0,right:0,gap:0},sx=function(o){return parseInt(o||"",10)||0},zI=function(o){var e=window.getComputedStyle(document.body),a=e[o==="padding"?"paddingLeft":"marginLeft"],n=e[o==="padding"?"paddingTop":"marginTop"],c=e[o==="padding"?"paddingRight":"marginRight"];return[sx(a),sx(n),sx(c)]},RI=function(o){if(o===void 0&&(o="margin"),typeof window>"u")return HI;var e=zI(o),a=document.documentElement.clientWidth,n=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,n-a+e[2]-e[0])}},DI=Cw(),Ra="data-scroll-locked",VI=function(o,e,a,n){var c=o.left,i=o.top,r=o.right,d=o.gap;return a===void 0&&(a="margin"),`
  .`.concat(gI,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(d,"px ").concat(n,`;
  }
  body[`).concat(Ra,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(n,";"),a==="margin"&&`
    padding-left: `.concat(c,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(r,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d,"px ").concat(n,`;
    `),a==="padding"&&"padding-right: ".concat(d,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(bn,` {
    right: `).concat(d,"px ").concat(n,`;
  }
  
  .`).concat(In,` {
    margin-right: `).concat(d,"px ").concat(n,`;
  }
  
  .`).concat(bn," .").concat(bn,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(In," .").concat(In,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(Ra,`] {
    `).concat(xI,": ").concat(d,`px;
  }
`)},N_=function(){var o=parseInt(document.body.getAttribute(Ra)||"0",10);return isFinite(o)?o:0},TI=function(){y.useEffect(function(){return document.body.setAttribute(Ra,(N_()+1).toString()),function(){var o=N_()-1;o<=0?document.body.removeAttribute(Ra):document.body.setAttribute(Ra,o.toString())}},[])},FI=function(o){var e=o.noRelative,a=o.noImportant,n=o.gapMode,c=n===void 0?"margin":n;TI();var i=y.useMemo(function(){return RI(c)},[c]);return y.createElement(DI,{styles:VI(i,!e,c,a?"":"!important")})},mx=!1;if(typeof window<"u")try{var vn=Object.defineProperty({},"passive",{get:function(){return mx=!0,!0}});window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{mx=!1}var ja=mx?{passive:!1}:!1,BI=function(o){return o.tagName==="TEXTAREA"},bw=function(o,e){if(!(o instanceof Element))return!1;var a=window.getComputedStyle(o);return a[e]!=="hidden"&&!(a.overflowY===a.overflowX&&!BI(o)&&a[e]==="visible")},EI=function(o){return bw(o,"overflowY")},OI=function(o){return bw(o,"overflowX")},S_=function(o,e){var a=e.ownerDocument,n=e;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var c=Iw(o,n);if(c){var i=Nw(o,n),r=i[1],d=i[2];if(r>d)return!0}n=n.parentNode}while(n&&n!==a.body);return!1},UI=function(o){var e=o.scrollTop,a=o.scrollHeight,n=o.clientHeight;return[e,a,n]},GI=function(o){var e=o.scrollLeft,a=o.scrollWidth,n=o.clientWidth;return[e,a,n]},Iw=function(o,e){return o==="v"?EI(e):OI(e)},Nw=function(o,e){return o==="v"?UI(e):GI(e)},ZI=function(o,e){return o==="h"&&e==="rtl"?-1:1},WI=function(o,e,a,n,c){var i=ZI(o,window.getComputedStyle(e).direction),r=i*n,d=a.target,h=e.contains(d),p=!1,u=r>0,s=0,k=0;do{if(!d)break;var f=Nw(o,d),m=f[0],M=f[1],g=f[2],v=M-g-i*m;(m||v)&&Iw(o,d)&&(s+=v,k+=m);var x=d.parentNode;d=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!h&&d!==document.body||h&&(e.contains(d)||e===d));return(u&&Math.abs(s)<1||!u&&Math.abs(k)<1)&&(p=!0),p},gn=function(o){return"changedTouches"in o?[o.changedTouches[0].clientX,o.changedTouches[0].clientY]:[0,0]},$_=function(o){return[o.deltaX,o.deltaY]},A_=function(o){return o&&"current"in o?o.current:o},XI=function(o,e){return o[0]===e[0]&&o[1]===e[1]},KI=function(o){return`
  .block-interactivity-`.concat(o,` {pointer-events: none;}
  .allow-interactivity-`).concat(o,` {pointer-events: all;}
`)},YI=0,Ha=[];function QI(o){var e=y.useRef([]),a=y.useRef([0,0]),n=y.useRef(),c=y.useState(YI++)[0],i=y.useState(Cw)[0],r=y.useRef(o);y.useEffect(function(){r.current=o},[o]),y.useEffect(function(){if(o.inert){document.body.classList.add("block-interactivity-".concat(c));var M=vI([o.lockRef.current],(o.shards||[]).map(A_),!0).filter(Boolean);return M.forEach(function(g){return g.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),M.forEach(function(g){return g.classList.remove("allow-interactivity-".concat(c))})}}},[o.inert,o.lockRef.current,o.shards]);var d=y.useCallback(function(M,g){if("touches"in M&&M.touches.length===2||M.type==="wheel"&&M.ctrlKey)return!r.current.allowPinchZoom;var v=gn(M),x=a.current,_="deltaX"in M?M.deltaX:x[0]-v[0],w="deltaY"in M?M.deltaY:x[1]-v[1],L,I=M.target,C=Math.abs(_)>Math.abs(w)?"h":"v";if("touches"in M&&C==="h"&&I.type==="range")return!1;var S=S_(C,I);if(!S)return!0;if(S?L=C:(L=C==="v"?"h":"v",S=S_(C,I)),!S)return!1;if(!n.current&&"changedTouches"in M&&(_||w)&&(n.current=L),!L)return!0;var j=n.current||L;return WI(j,g,M,j==="h"?_:w)},[]),h=y.useCallback(function(M){var g=M;if(!(!Ha.length||Ha[Ha.length-1]!==i)){var v="deltaY"in g?$_(g):gn(g),x=e.current.filter(function(L){return L.name===g.type&&(L.target===g.target||g.target===L.shadowParent)&&XI(L.delta,v)})[0];if(x&&x.should){g.cancelable&&g.preventDefault();return}if(!x){var _=(r.current.shards||[]).map(A_).filter(Boolean).filter(function(L){return L.contains(g.target)}),w=_.length>0?d(g,_[0]):!r.current.noIsolation;w&&g.cancelable&&g.preventDefault()}}},[]),p=y.useCallback(function(M,g,v,x){var _={name:M,delta:g,target:v,should:x,shadowParent:JI(v)};e.current.push(_),setTimeout(function(){e.current=e.current.filter(function(w){return w!==_})},1)},[]),u=y.useCallback(function(M){a.current=gn(M),n.current=void 0},[]),s=y.useCallback(function(M){p(M.type,$_(M),M.target,d(M,o.lockRef.current))},[]),k=y.useCallback(function(M){p(M.type,gn(M),M.target,d(M,o.lockRef.current))},[]);y.useEffect(function(){return Ha.push(i),o.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:k}),document.addEventListener("wheel",h,ja),document.addEventListener("touchmove",h,ja),document.addEventListener("touchstart",u,ja),function(){Ha=Ha.filter(function(M){return M!==i}),document.removeEventListener("wheel",h,ja),document.removeEventListener("touchmove",h,ja),document.removeEventListener("touchstart",u,ja)}},[]);var f=o.removeScrollBar,m=o.inert;return y.createElement(y.Fragment,null,m?y.createElement(i,{styles:KI(c)}):null,f?y.createElement(FI,{noRelative:o.noRelative,gapMode:o.gapMode}):null)}function JI(o){for(var e=null;o!==null;)o instanceof ShadowRoot&&(e=o.host,o=o.host),o=o.parentNode;return e}const eN=NI(Lw,QI);var zx=y.forwardRef(function(o,e){return y.createElement(Bg,Le({},o,{ref:e,sideCar:eN}))});zx.classNames=Bg.classNames;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]],Nn=t("AArrowDown",tN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]],Sn=t("AArrowUp",oN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]],$n=t("ALargeSmall",aN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],An=t("Accessibility",nN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],qn=t("Activity",cN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]],Pn=t("AirVent",iN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]],jn=t("Airplay",rN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]],Xe=t("AlarmClockCheck",dN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]],Ke=t("AlarmClockMinus",sN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]],Hn=t("AlarmClockOff",hN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]],Ye=t("AlarmClockPlus",lN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]],zn=t("AlarmClock",yN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]],Rn=t("AlarmSmoke",pN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]],Dn=t("Album",uN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]],Vn=t("AlignCenterHorizontal",kN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]],Tn=t("AlignCenterVertical",fN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Fn=t("AlignCenter",MN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]],Bn=t("AlignEndHorizontal",mN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]],En=t("AlignEndVertical",vN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]],On=t("AlignHorizontalDistributeCenter",gN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]],Un=t("AlignHorizontalDistributeEnd",xN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]],Gn=t("AlignHorizontalDistributeStart",_N);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],Zn=t("AlignHorizontalJustifyCenter",wN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]],Wn=t("AlignHorizontalJustifyEnd",LN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]],Xn=t("AlignHorizontalJustifyStart",CN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]],Kn=t("AlignHorizontalSpaceAround",bN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]],Yn=t("AlignHorizontalSpaceBetween",IN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]],Qn=t("AlignJustify",NN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Jn=t("AlignLeft",SN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],e2=t("AlignRight",$N);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]],t2=t("AlignStartHorizontal",AN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qN=[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]],o2=t("AlignStartVertical",qN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]],a2=t("AlignVerticalDistributeCenter",PN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]],n2=t("AlignVerticalDistributeEnd",jN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]],c2=t("AlignVerticalDistributeStart",HN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],i2=t("AlignVerticalJustifyCenter",zN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]],r2=t("AlignVerticalJustifyEnd",RN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]],d2=t("AlignVerticalJustifyStart",DN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]],s2=t("AlignVerticalSpaceAround",VN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]],h2=t("AlignVerticalSpaceBetween",TN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],l2=t("Ambulance",FN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]],y2=t("Ampersand",BN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]],p2=t("Ampersands",EN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]],u2=t("Amphora",ON);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]],k2=t("Anchor",UN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]],f2=t("Angry",GN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]],M2=t("Annoyed",ZN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],m2=t("Antenna",WN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]],v2=t("Anvil",XN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],g2=t("Aperture",KN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]],x2=t("AppWindowMac",YN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],_2=t("AppWindow",QN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]],w2=t("Apple",JN);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]],L2=t("ArchiveRestore",eS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]],C2=t("ArchiveX",tS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],b2=t("Archive",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],I2=t("Armchair",aS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]],N2=t("ArrowBigDownDash",nS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]],S2=t("ArrowBigDown",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]],$2=t("ArrowBigLeftDash",iS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]],A2=t("ArrowBigLeft",rS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]],q2=t("ArrowBigRightDash",dS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]],P2=t("ArrowBigRight",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]],j2=t("ArrowBigUpDash",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]],H2=t("ArrowBigUp",lS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]],z2=t("ArrowDown01",yS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],R2=t("ArrowDown10",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],Qe=t("ArrowDownAZ",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]],D2=t("ArrowDownFromLine",kS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]],V2=t("ArrowDownLeft",fS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]],T2=t("ArrowDownNarrowWide",MS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],F2=t("ArrowDownRight",mS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]],B2=t("ArrowDownToDot",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]],E2=t("ArrowDownToLine",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],O2=t("ArrowDownUp",xS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]],Je=t("ArrowDownWideNarrow",_S);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]],e1=t("ArrowDownZA",wS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],U2=t("ArrowDown",LS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]],G2=t("ArrowLeftFromLine",CS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],Z2=t("ArrowLeftRight",bS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]],W2=t("ArrowLeftToLine",IS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],X2=t("ArrowLeft",NS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]],K2=t("ArrowRightFromLine",SS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Y2=t("ArrowRightLeft",$S);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]],Q2=t("ArrowRightToLine",AS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],J2=t("ArrowRight",qS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]],ec=t("ArrowUp01",PS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]],tc=t("ArrowUp10",jS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]],t1=t("ArrowUpAZ",HS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],oc=t("ArrowUpDown",zS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]],ac=t("ArrowUpFromDot",RS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]],nc=t("ArrowUpFromLine",DS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]],cc=t("ArrowUpLeft",VS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]],o1=t("ArrowUpNarrowWide",TS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],ic=t("ArrowUpRight",FS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]],rc=t("ArrowUpToLine",BS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]],dc=t("ArrowUpWideNarrow",ES);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]],a1=t("ArrowUpZA",OS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],sc=t("ArrowUp",US);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]],hc=t("ArrowsUpFromLine",GS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]],lc=t("Asterisk",ZS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],yc=t("AtSign",WS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],pc=t("Atom",XS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]],uc=t("AudioLines",KS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]],kc=t("AudioWaveform",YS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],fc=t("Award",QS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]],Mc=t("Axe",JS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e$=[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]],n1=t("Axis3d",e$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t$=[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]],mc=t("Baby",t$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o$=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],vc=t("Backpack",o$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gc=t("BadgeAlert",a$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]],xc=t("BadgeCent",n$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],c1=t("BadgeCheck",c$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],_c=t("BadgeDollarSign",i$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]],wc=t("BadgeEuro",r$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]],Lc=t("BadgeHelp",d$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]],Cc=t("BadgeIndianRupee",s$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]],bc=t("BadgeInfo",h$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]],Ic=t("BadgeJapaneseYen",l$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Nc=t("BadgeMinus",y$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],Sc=t("BadgePercent",p$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],$c=t("BadgePlus",u$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]],Ac=t("BadgePoundSterling",k$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]],qc=t("BadgeRussianRuble",f$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]],Pc=t("BadgeSwissFranc",M$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],jc=t("BadgeX",m$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v$=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]],Hc=t("Badge",v$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g$=[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]],zc=t("BaggageClaim",g$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x$=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]],Rc=t("Ban",x$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _$=[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]],Dc=t("Banana",_$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w$=[["path",{d:"M10 10.01h.01",key:"1e9xi7"}],["path",{d:"M10 14.01h.01",key:"ac23bv"}],["path",{d:"M14 10.01h.01",key:"2wfrvf"}],["path",{d:"M14 14.01h.01",key:"8tw8yn"}],["path",{d:"M18 6v11.5",key:"dkbidh"}],["path",{d:"M6 6v12",key:"vkc79e"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2",key:"1wpnh2"}]],Vc=t("Bandage",w$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L$=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],Tc=t("Banknote",L$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C$=[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]],Fc=t("Barcode",C$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b$=[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]],Bc=t("Baseline",b$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I$=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],Ec=t("Bath",I$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N$=[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]],Oc=t("BatteryCharging",N$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S$=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]],Uc=t("BatteryFull",S$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $$=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]],Gc=t("BatteryLow",$$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A$=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]],Zc=t("BatteryMedium",A$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q$=[["path",{d:"M10 9v6",key:"17i7lo"}],["path",{d:"M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5",key:"jzl4pj"}],["path",{d:"M22 11v2",key:"1wo06k"}],["path",{d:"M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5",key:"1ar5vp"}],["path",{d:"M7 12h6",key:"iekk3h"}]],Wc=t("BatteryPlus",q$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P$=[["path",{d:"M10 17h.01",key:"nbq80n"}],["path",{d:"M10 7v6",key:"nne03l"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1x5o8m"}],["path",{d:"M22 11v2",key:"1wo06k"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"1mdjgh"}]],Xc=t("BatteryWarning",P$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j$=[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]],Kc=t("Battery",j$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H$=[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]],Yc=t("Beaker",H$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z$=[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Qc=t("BeanOff",z$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R$=[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]],Jc=t("Bean",R$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D$=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],ei=t("BedDouble",D$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V$=[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]],ti=t("BedSingle",V$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T$=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],oi=t("Bed",T$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F$=[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]],ai=t("Beef",F$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B$=[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]],ni=t("BeerOff",B$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E$=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]],ci=t("Beer",E$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O$=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]],ii=t("BellDot",O$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U$=[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]],ri=t("BellElectric",U$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G$=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",key:"bdwj86"}]],di=t("BellMinus",G$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z$=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],si=t("BellOff",Z$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W$=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}],["path",{d:"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",key:"1abcvy"}]],hi=t("BellPlus",W$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X$=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]],li=t("BellRing",X$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K$=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],yi=t("Bell",K$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y$=[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]],i1=t("BetweenHorizontalEnd",Y$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q$=[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]],r1=t("BetweenHorizontalStart",Q$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J$=[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]],pi=t("BetweenVerticalEnd",J$);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]],ui=t("BetweenVerticalStart",eA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tA=[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]],ki=t("BicepsFlexed",tA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]],fi=t("Bike",oA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],Mi=t("Binary",aA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"3apit1"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",key:"rhpgnw"}],["path",{d:"M 22 16 L 2 16",key:"14lkq7"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",key:"104b3k"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",key:"14fczp"}]],mi=t("Binoculars",nA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]],vi=t("Biohazard",cA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],gi=t("Bird",iA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]],xi=t("Bitcoin",rA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]],_i=t("Blend",dA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]],wi=t("Blinds",sA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]],Li=t("Blocks",hA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]],Ci=t("BluetoothConnected",lA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]],bi=t("BluetoothOff",yA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]],Ii=t("BluetoothSearching",pA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]],Ni=t("Bluetooth",uA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],Si=t("Bold",kA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],$i=t("Bolt",fA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]],Ai=t("Bomb",MA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]],qi=t("Bone",mA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]],Pi=t("BookA",vA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA=[["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 8v3",key:"1qzp49"}]],ji=t("BookAudio",gA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]],Hi=t("BookCheck",xA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",key:"1wz07i"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}]],zi=t("BookCopy",_A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M12 17h1.5",key:"1gkc67"}],["path",{d:"M12 22h1.5",key:"1my7sn"}],["path",{d:"M12 2h1.5",key:"19tvb7"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1",key:"10akbh"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5",key:"1vrfjs"}],["path",{d:"M20 14v3h-2.5",key:"1naeju"}],["path",{d:"M20 8.5V10",key:"1ctpfu"}],["path",{d:"M4 10V8.5",key:"1o3zg5"}],["path",{d:"M4 19.5V14",key:"ob81pf"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8",key:"s8vcyb"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8",key:"1cu73q"}]],d1=t("BookDashed",wA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]],Ri=t("BookDown",LA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],Di=t("BookHeadphones",CA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",key:"1t75a8"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Vi=t("BookHeart",bA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",key:"q6ojf0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}]],Ti=t("BookImage",IA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"m19 3 1 1",key:"ze14oc"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1ocbpn"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}]],Fi=t("BookKey",NA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1rkj32"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1",key:"73l30o"}]],Bi=t("BookLock",SA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ei=t("BookMarked",$A);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Oi=t("BookMinus",AA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]],Ui=t("BookOpenCheck",qA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M16 12h2",key:"7q9ll5"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M6 8h2",key:"30oboj"}]],Gi=t("BookOpenText",PA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Zi=t("BookOpen",jA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Wi=t("BookPlus",HA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]],Xi=t("BookText",zA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M10 13h4",key:"ytezjc"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Ki=t("BookType",RA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"161d7n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Yi=t("BookUp2",DA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]],Qi=t("BookUp",VA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]],Ji=t("BookUser",TA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]],er=t("BookX",FA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],tr=t("Book",BA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],or=t("BookmarkCheck",EA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],ar=t("BookmarkMinus",OA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],nr=t("BookmarkPlus",UA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GA=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],cr=t("BookmarkX",GA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],ir=t("Bookmark",ZA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]],rr=t("BoomBox",WA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]],dr=t("BotMessageSquare",XA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KA=[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]],sr=t("BotOff",KA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],hr=t("Bot",YA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],lr=t("Box",QA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],yr=t("Boxes",JA);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eq=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],s1=t("Braces",eq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tq=[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]],pr=t("Brackets",tq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oq=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]],ur=t("BrainCircuit",oq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aq=[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]],kr=t("BrainCog",aq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nq=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],fr=t("Brain",nq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cq=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]],Mr=t("BrickWall",cq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iq=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],mr=t("BriefcaseBusiness",iq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rq=[["path",{d:"M10 20v2",key:"1n8e1g"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M18 20v2",key:"10uadw"}],["path",{d:"M21 20H3",key:"kdqkdp"}],["path",{d:"M6 20v2",key:"a9bc87"}],["path",{d:"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",key:"17n9tx"}],["rect",{x:"4",y:"6",width:"16",height:"10",rx:"2",key:"1097i5"}]],vr=t("BriefcaseConveyorBelt",rq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dq=[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],gr=t("BriefcaseMedical",dq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sq=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],xr=t("Briefcase",sq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hq=[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]],_r=t("BringToFront",hq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lq=[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]],wr=t("Brush",lq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yq=[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]],Lr=t("BugOff",yq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pq=[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]],Cr=t("BugPlay",pq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uq=[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]],br=t("Bug",uq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kq=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Ir=t("Building2",kq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fq=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],Nr=t("Building",fq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mq=[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]],Sr=t("BusFront",Mq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mq=[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]],$r=t("Bus",mq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vq=[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],Ar=t("CableCar",vq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gq=[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]],qr=t("Cable",gq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xq=[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]],Pr=t("CakeSlice",xq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _q=[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]],jr=t("Cake",_q);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wq=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Hr=t("Calculator",wq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lq=[["path",{d:"M11 14h1v4",key:"fy54vd"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],zr=t("Calendar1",Lq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cq=[["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 14v8",key:"irew45"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",key:"bse4f3"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Rr=t("CalendarArrowDown",Cq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bq=[["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M18 22v-8",key:"su0gjh"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",key:"1exg90"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Dr=t("CalendarArrowUp",bq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],Vr=t("CalendarCheck2",Iq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]],Tr=t("CalendarCheck",Nq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sq=[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]],Fr=t("CalendarClock",Sq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $q=[["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"11kmuh"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Br=t("CalendarCog",$q);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Er=t("CalendarDays",Aq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]],Or=t("CalendarFold",qq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pq=[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]],Ur=t("CalendarHeart",Pq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]],Gr=t("CalendarMinus2",jq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hq=[["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",key:"1scpom"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Zr=t("CalendarMinus",Hq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zq=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Wr=t("CalendarOff",zq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]],Xr=t("CalendarPlus2",Rq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]],Kr=t("CalendarPlus",Dq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vq=[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]],Yr=t("CalendarRange",Vq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tq=[["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",key:"1jrsq6"}],["path",{d:"m22 22-1.875-1.875",key:"13zax7"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Qr=t("CalendarSearch",Tq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fq=[["path",{d:"M11 10v4h4",key:"172dkj"}],["path",{d:"m11 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"vu0qm5"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"m21 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"1qgeyt"}],["path",{d:"M21 22v-4h-4",key:"hrummi"}],["path",{d:"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",key:"mctw84"}],["path",{d:"M3 10h4",key:"1el30a"}],["path",{d:"M8 2v4",key:"1cmpym"}]],Jr=t("CalendarSync",Fq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]],e0=t("CalendarX2",Bq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]],t0=t("CalendarX",Eq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oq=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],o0=t("Calendar",Oq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uq=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]],a0=t("CameraOff",Uq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gq=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],n0=t("Camera",Gq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zq=[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]],c0=t("CandyCane",Zq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wq=[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],i0=t("CandyOff",Wq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xq=[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]],r0=t("Candy",Xq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kq=[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]],d0=t("Cannabis",Kq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yq=[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]],s0=t("CaptionsOff",Yq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qq=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],h1=t("Captions",Qq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jq=[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],h0=t("CarFront",Jq);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]],l0=t("CarTaxiFront",eP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],y0=t("Car",tP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=[["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["path",{d:"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",key:"13hakp"}],["path",{d:"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",key:"1crci8"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}]],p0=t("Caravan",oP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]],u0=t("Carrot",aP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]],k0=t("CaseLower",nP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]],f0=t("CaseSensitive",cP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]],M0=t("CaseUpper",iP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]],m0=t("CassetteTape",rP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]],v0=t("Cast",dP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]],g0=t("Castle",sP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]],x0=t("Cat",hP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]],_0=t("Cctv",lP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]],l1=t("ChartArea",yP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],y1=t("ChartBarBig",pP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h3",key:"ur6vzw"}],["path",{d:"M7 6h12",key:"sz5b0d"}]],w0=t("ChartBarDecreasing",uP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h12",key:"wsnu98"}],["path",{d:"M7 6h3",key:"w9rmul"}]],L0=t("ChartBarIncreasing",kP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fP=[["path",{d:"M11 13v4",key:"vyy2rb"}],["path",{d:"M15 5v4",key:"1gx88a"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],C0=t("ChartBarStacked",fP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]],p1=t("ChartBar",MP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mP=[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],u1=t("ChartCandlestick",mP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],k1=t("ChartColumnBig",vP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gP=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]],b0=t("ChartColumnDecreasing",gP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xP=[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]],f1=t("ChartColumnIncreasing",xP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _P=[["path",{d:"M11 13H7",key:"t0o9gq"}],["path",{d:"M19 9h-4",key:"rera1j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],I0=t("ChartColumnStacked",_P);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],M1=t("ChartColumn",wP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LP=[["path",{d:"M10 6h8",key:"zvc2xc"}],["path",{d:"M12 16h6",key:"yi5mkt"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 11h7",key:"wz2hg0"}]],N0=t("ChartGantt",LP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],m1=t("ChartLine",CP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bP=[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]],S0=t("ChartNetwork",bP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IP=[["path",{d:"M12 20V10",key:"g8npz5"}],["path",{d:"M18 20v-4",key:"8uic4z"}],["path",{d:"M6 20V4",key:"1w1bmo"}]],$0=t("ChartNoAxesColumnDecreasing",IP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NP=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],v1=t("ChartNoAxesColumnIncreasing",NP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SP=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],g1=t("ChartNoAxesColumn",SP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $P=[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]],A0=t("ChartNoAxesCombined",$P);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AP=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],x1=t("ChartNoAxesGantt",AP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],_1=t("ChartPie",qP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PP=[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],w1=t("ChartScatter",PP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jP=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",key:"lw07rv"}]],q0=t("ChartSpline",jP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HP=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],P0=t("CheckCheck",HP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zP=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],j0=t("ChefHat",zP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RP=[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]],H0=t("Cherry",RP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DP=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],z0=t("ChevronDown",DP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VP=[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]],R0=t("ChevronFirst",VP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TP=[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]],D0=t("ChevronLast",TP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FP=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],V0=t("ChevronLeft",FP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BP=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Da=t("ChevronRight",BP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EP=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],T0=t("ChevronUp",EP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OP=[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]],F0=t("ChevronsDownUp",OP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UP=[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]],B0=t("ChevronsDown",UP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GP=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],E0=t("ChevronsLeftRightEllipsis",GP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZP=[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]],O0=t("ChevronsLeftRight",ZP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],U0=t("ChevronsLeft",WP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XP=[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]],G0=t("ChevronsRightLeft",XP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KP=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],Z0=t("ChevronsRight",KP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YP=[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]],Za=t("ChevronsUpDown",YP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QP=[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]],W0=t("ChevronsUp",QP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JP=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]],X0=t("Chrome",JP);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4",key:"1pdhuj"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",key:"1rkokr"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",key:"1w6esw"}]],K0=t("Church",ej);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",key:"1gdiyg"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",key:"166zjj"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]],Y0=t("CigaretteOff",tj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",key:"1mb5g1"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"1yl5r7"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]],Q0=t("Cigarette",oj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],L1=t("CircleAlert",aj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],C1=t("CircleArrowDown",nj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]],b1=t("CircleArrowLeft",cj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]],I1=t("CircleArrowOutDownLeft",ij);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]],N1=t("CircleArrowOutDownRight",rj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dj=[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]],S1=t("CircleArrowOutUpLeft",dj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]],$1=t("CircleArrowOutUpRight",sj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],A1=t("CircleArrowRight",hj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],q1=t("CircleArrowUp",lj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],P1=t("CircleCheckBig",yj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Te=t("CircleCheck",pj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],j1=t("CircleChevronDown",uj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],H1=t("CircleChevronLeft",kj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],z1=t("CircleChevronRight",fj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]],R1=t("CircleChevronUp",Mj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]],J0=t("CircleDashed",mj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],D1=t("CircleDivide",vj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]],ed=t("CircleDollarSign",gj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],td=t("CircleDotDashed",xj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],od=t("CircleDot",_j);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],ad=t("CircleEllipsis",wj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lj=[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nd=t("CircleEqual",Lj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],cd=t("CircleFadingArrowUp",Cj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]],id=t("CircleFadingPlus",bj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ij=[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]],V1=t("CircleGauge",Ij);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],T1=t("CircleHelp",Nj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]],F1=t("CircleMinus",Sj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $j=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]],rd=t("CircleOff",$j);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]],B1=t("CircleParkingOff",Aj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],E1=t("CircleParking",qj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]],O1=t("CirclePause",Pj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],U1=t("CirclePercent",jj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],G1=t("CirclePlay",Hj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Z1=t("CirclePlus",zj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rj=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],W1=t("CirclePower",Rj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]],X1=t("CircleSlash2",Dj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],dd=t("CircleSlash",Vj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}]],sd=t("CircleSmall",Tj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],K1=t("CircleStop",Fj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bj=[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Y1=t("CircleUserRound",Bj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],Q1=t("CircleUser",Ej);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],J1=t("CircleX",Oj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uj=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Va=t("Circle",Uj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],hd=t("CircuitBoard",Gj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zj=[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]],ld=t("Citrus",Zj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]],yd=t("Clapperboard",Wj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],pd=t("ClipboardCheck",Xj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kj=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]],ud=t("ClipboardCopy",Kj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],kd=t("ClipboardList",Yj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]],fd=t("ClipboardMinus",Qj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]],Md=t("ClipboardPaste",Jj);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eH=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}]],et=t("ClipboardPenLine",eH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tH=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]],tt=t("ClipboardPen",tH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oH=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]],md=t("ClipboardPlus",oH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aH=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]],vd=t("ClipboardType",aH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nH=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]],gd=t("ClipboardX",nH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cH=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],xd=t("Clipboard",cH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]],_d=t("Clock1",iH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]],wd=t("Clock10",rH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]],Ld=t("Clock11",dH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]],Cd=t("Clock12",sH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]],bd=t("Clock2",hH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]],Id=t("Clock3",lH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Nd=t("Clock4",yH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]],Sd=t("Clock5",pH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]],$d=t("Clock6",uH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]],Ad=t("Clock7",kH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]],qd=t("Clock8",fH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]],Pd=t("Clock9",MH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mH=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["path",{d:"M16 21.16a10 10 0 1 1 5-13.516",key:"cxo92l"}],["path",{d:"M20 11.5v6",key:"2ei3xq"}],["path",{d:"M20 21.5h.01",key:"1r2dzp"}]],jd=t("ClockAlert",mH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vH=[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227",key:"1i7shu"}],["path",{d:"M12 6v6l2 1",key:"19cm8n"}],["path",{d:"m14 18 4 4 4-4",key:"1waygx"}],["path",{d:"M18 14v8",key:"irew45"}]],Hd=t("ClockArrowDown",vH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gH=[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338",key:"1fzlyi"}],["path",{d:"M12 6v6l1.562.781",key:"1ujuk9"}],["path",{d:"m14 18 4-4 4 4",key:"ftkppy"}],["path",{d:"M18 22v-8",key:"su0gjh"}]],zd=t("ClockArrowUp",gH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xH=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Rd=t("Clock",xH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _H=[["path",{d:"M12 12v4",key:"tww15h"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708",key:"xsb5ju"}]],Dd=t("CloudAlert",_H);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wH=[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]],Vd=t("CloudCog",wH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LH=[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]],ot=t("CloudDownload",LH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CH=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]],Td=t("CloudDrizzle",CH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bH=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]],Fd=t("CloudFog",bH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IH=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]],Bd=t("CloudHail",IH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NH=[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]],Ed=t("CloudLightning",NH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SH=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M7 19v2",key:"12npes"}]],Od=t("CloudMoonRain",SH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $H=[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"erj67n"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}]],Ud=t("CloudMoon",$H);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AH=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]],Gd=t("CloudOff",AH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qH=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]],Zd=t("CloudRainWind",qH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PH=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]],Wd=t("CloudRain",PH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jH=[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]],Xd=t("CloudSnow",jH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HH=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]],Kd=t("CloudSunRain",HH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zH=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]],Yd=t("CloudSun",zH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RH=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],at=t("CloudUpload",RH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DH=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Qd=t("Cloud",DH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VH=[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]],Jd=t("Cloudy",VH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TH=[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]],es=t("Clover",TH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FH=[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]],ts=t("Club",FH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BH=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],nt=t("CodeXml",BH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EH=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],os=t("Code",EH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OH=[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]],as=t("Codepen",OH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UH=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]],ns=t("Codesandbox",UH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GH=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],cs=t("Coffee",GH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZH=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]],is=t("Cog",ZH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WH=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],rs=t("Coins",WH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XH=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],ct=t("Columns2",XH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KH=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],it=t("Columns3",KH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YH=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]],ds=t("Columns4",YH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QH=[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1",key:"ru65g8"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"e30een"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"2ahx8o"}],["path",{d:"m7 21 3-3-3-3",key:"127cv2"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}]],ss=t("Combine",QH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JH=[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]],hs=t("Command",JH);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ez=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ls=t("Compass",ez);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tz=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]],ys=t("Component",tz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oz=[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]],ps=t("Computer",oz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const az=[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]],us=t("ConciergeBell",az);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nz=[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]],ks=t("Cone",nz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cz=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]],fs=t("Construction",cz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iz=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0",key:"suqz9p"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],rt=t("ContactRound",iz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rz=[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1waht3"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",key:"12vinp"}]],Ms=t("Contact",rz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dz=[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]],ms=t("Container",dz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]],vs=t("Contrast",sz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hz=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],gs=t("Cookie",hz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lz=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]],xs=t("CookingPot",lz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yz=[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],_s=t("CopyCheck",yz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pz=[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ws=t("CopyMinus",pz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uz=[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ls=t("CopyPlus",uz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kz=[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Cs=t("CopySlash",kz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fz=[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],bs=t("CopyX",fz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mz=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Is=t("Copy",Mz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]],Ns=t("Copyleft",mz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]],Ss=t("Copyright",vz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gz=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],$s=t("CornerDownLeft",gz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xz=[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],As=t("CornerDownRight",xz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _z=[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]],qs=t("CornerLeftDown",_z);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wz=[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]],Ps=t("CornerLeftUp",wz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lz=[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]],js=t("CornerRightDown",Lz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cz=[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]],Hs=t("CornerRightUp",Cz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bz=[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]],zs=t("CornerUpLeft",bz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iz=[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]],Rs=t("CornerUpRight",Iz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nz=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],Ds=t("Cpu",Nz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]],Vs=t("CreativeCommons",Sz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $z=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Ts=t("CreditCard",$z);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Az=[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]],Fs=t("Croissant",Az);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qz=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],Bs=t("Crop",qz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pz=[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]],Es=t("Cross",Pz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jz=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Os=t("Crosshair",jz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hz=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Us=t("Crown",Hz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zz=[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]],Gs=t("Cuboid",zz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rz=[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]],Zs=t("CupSoda",Rz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dz=[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]],Ws=t("Currency",Dz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]],Xs=t("Cylinder",Vz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tz=[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"157kva"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"d7q6m6"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",key:"pr6s65"}]],Ks=t("Dam",Tz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]],Ys=t("DatabaseBackup",Fz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bz=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]],Qs=t("DatabaseZap",Bz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ez=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Js=t("Database",Ez);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oz=[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]],eh=t("Delete",Oz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uz=[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]],th=t("Dessert",Uz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gz=[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]],oh=t("Diameter",Gz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zz=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]],ah=t("DiamondMinus",Zz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wz=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]],dt=t("DiamondPercent",Wz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xz=[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]],nh=t("DiamondPlus",Xz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kz=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],ch=t("Diamond",Kz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yz=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],ih=t("Dice1",Yz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qz=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]],rh=t("Dice2",Qz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jz=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],dh=t("Dice3",Jz);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]],sh=t("Dice4",eR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],hh=t("Dice5",tR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],lh=t("Dice6",oR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],yh=t("Dices",aR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]],ph=t("Diff",nR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],uh=t("Disc2",cR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]],kh=t("Disc3",iR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],fh=t("DiscAlbum",rR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Mh=t("Disc",dR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]],mh=t("Divide",sR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",key:"1bivrr"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3",key:"nxix30"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",key:"18cutr"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",key:"rlvei3"}]],vh=t("DnaOff",hR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],gh=t("Dna",lR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]],xh=t("Dock",yR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]],_h=t("Dog",pR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],wh=t("DollarSign",uR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Lh=t("Donut",kR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]],Ch=t("DoorClosed",fR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]],bh=t("DoorOpen",MR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],Ih=t("Dot",mR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Nh=t("Download",vR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]],Sh=t("DraftingCompass",gR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]],$h=t("Drama",xR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]],Ah=t("Dribbble",_R);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",key:"ioqxb1"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",key:"1rs59n"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"m7 18 2-8",key:"1bzku2"}]],qh=t("Drill",wR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",key:"8suz2t"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",key:"19dw9m"}]],Ph=t("DropletOff",LR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],jh=t("Droplet",CR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Hh=t("Droplets",bR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]],zh=t("Drum",IR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]],Rh=t("Drumstick",NR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]],Dh=t("Dumbbell",SR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Vh=t("EarOff",$R);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]],Th=t("Ear",AR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]],Fh=t("EarthLock",qR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],st=t("Earth",PR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]],Bh=t("Eclipse",jR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]],Eh=t("EggFried",HR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Oh=t("EggOff",zR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]],Uh=t("Egg",RR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],ht=t("EllipsisVertical",DR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],lt=t("Ellipsis",VR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}]],Gh=t("EqualApproximately",TR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]],Zh=t("EqualNot",FR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]],Wh=t("Equal",BR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]],Xh=t("Eraser",ER);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",key:"rbahqx"}],["path",{d:"M6 8v1",key:"1636ez"}],["path",{d:"M10 8v1",key:"1talb4"}],["path",{d:"M14 8v1",key:"1rsfgr"}],["path",{d:"M18 8v1",key:"gnkwox"}]],Kh=t("EthernetPort",OR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]],Yh=t("Euro",UR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16.2V21h-4.8",key:"1hrera"}],["path",{d:"M21 7.8V3h-4.8",key:"ul1q53"}],["path",{d:"M3 16.2V21h4.8",key:"1x04uo"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 7.8V3h4.8",key:"1ijppm"}],["path",{d:"M9 9 3 3",key:"v551iv"}]],Qh=t("Expand",GR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Jh=t("ExternalLink",ZR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],el=t("EyeClosed",WR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],tl=t("EyeOff",XR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ol=t("Eye",KR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],al=t("Facebook",YR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]],nl=t("Factory",QR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]],cl=t("Fan",JR);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eD=[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]],il=t("FastForward",eD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tD=[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]],rl=t("Feather",tD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oD=[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]],dl=t("Fence",oD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aD=[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]],sl=t("FerrisWheel",aD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nD=[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]],hl=t("Figma",nD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cD=[["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",key:"gkbcor"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}]],ll=t("FileArchive",cD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]],yl=t("FileAudio2",iD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rD=[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]],pl=t("FileAudio",rD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]],yt=t("FileAxis3d",dD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]],ul=t("FileBadge2",sD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]],kl=t("FileBadge",hD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]],fl=t("FileBox",lD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]],pt=t("FileChartColumnIncreasing",yD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]],ut=t("FileChartColumn",pD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]],kt=t("FileChartLine",uD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",key:"1dl6s6"}]],ft=t("FileChartPie",kD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],Ml=t("FileCheck2",fD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],ml=t("FileCheck",MD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]],vl=t("FileClock",mD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],gl=t("FileCode2",vD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],xl=t("FileCode",gD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3.2 12.9-.9-.4",key:"1i3dj5"}],["path",{d:"m3.2 15.1-.9.4",key:"1fvgj0"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",key:"1yo3oz"}],["path",{d:"m4.9 11.2-.4-.9",key:"otmhb9"}],["path",{d:"m4.9 16.8-.4.9",key:"1b8z07"}],["path",{d:"m7.5 10.3-.4.9",key:"11k65u"}],["path",{d:"m7.5 17.7-.4-.9",key:"431x55"}],["path",{d:"m9.7 12.5-.9.4",key:"87sjan"}],["path",{d:"m9.7 15.5-.9-.4",key:"khqm91"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}]],Mt=t("FileCog",xD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]],_l=t("FileDiff",_D);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]],wl=t("FileDigit",wD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],Ll=t("FileDown",LD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]],Cl=t("FileHeart",CD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],bl=t("FileImage",bD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Il=t("FileInput",ID);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]],Nl=t("FileJson2",ND);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],Sl=t("FileJson",SD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]],$l=t("FileKey2",$D);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]],Al=t("FileKey",AD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]],ql=t("FileLock2",qD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]],Pl=t("FileLock",PD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]],jl=t("FileMinus2",jD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]],Hl=t("FileMinus",HD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=[["path",{d:"M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4",key:"1d3kfm"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}],["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}]],zl=t("FileMusic",zD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]],Rl=t("FileOutput",RD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"142zxg"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"2t3380"}],["path",{d:"M8 18h1",key:"13wk12"}]],mt=t("FilePenLine",DD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VD=[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",key:"1couwa"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1y4qbx"}]],vt=t("FilePen",VD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Dl=t("FilePlus2",TD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]],Vl=t("FilePlus",FD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],Tl=t("FileQuestion",BD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]],Fl=t("FileScan",ED);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]],Bl=t("FileSearch2",OD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],El=t("FileSearch",UD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]],Ol=t("FileSliders",GD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],Ul=t("FileSpreadsheet",ZD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]],Gl=t("FileStack",WD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]],Zl=t("FileSymlink",XD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]],Wl=t("FileTerminal",KD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Xl=t("FileText",YD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]],Kl=t("FileType2",QD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JD=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]],Yl=t("FileType",JD);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eV=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],Ql=t("FileUp",eV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tV=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 18a3 3 0 1 0-6 0",key:"16awa0"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],Jl=t("FileUser",tV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oV=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]],ey=t("FileVideo2",oV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aV=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]],ty=t("FileVideo",aV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nV=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]],oy=t("FileVolume2",nV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cV=[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",key:"ifyjnl"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",key:"mk8rxu"}]],ay=t("FileVolume",cV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iV=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ny=t("FileWarning",iV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rV=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]],cy=t("FileX2",rV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]],iy=t("FileX",dV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sV=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],ry=t("File",sV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]],dy=t("Files",hV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lV=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],sy=t("Film",lV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yV=[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]],hy=t("FilterX",yV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pV=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],ly=t("Filter",pV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uV=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],yy=t("Fingerprint",uV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kV=[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]],py=t("FireExtinguisher",kV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]],uy=t("FishOff",fV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MV=[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]],ky=t("FishSymbol",MV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mV=[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]],fy=t("Fish",mV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vV=[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],My=t("FlagOff",vV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gV=[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]],my=t("FlagTriangleLeft",gV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xV=[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]],vy=t("FlagTriangleRight",xV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _V=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]],gy=t("Flag",_V);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wV=[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]],xy=t("FlameKindling",wV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LV=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],_y=t("Flame",LV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CV=[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],wy=t("FlashlightOff",CV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bV=[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]],Ly=t("Flashlight",bV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IV=[["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",key:"k0duyd"}],["path",{d:"M6.453 15H15",key:"1f0z33"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Cy=t("FlaskConicalOff",IV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NV=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],by=t("FlaskConical",NV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SV=[["path",{d:"M10 2v6.292a7 7 0 1 0 4 0V2",key:"1s42pc"}],["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],Iy=t("FlaskRound",SV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $V=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Ny=t("FlipHorizontal2",$V);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AV=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Sy=t("FlipHorizontal",AV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qV=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],$y=t("FlipVertical2",qV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PV=[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],Ay=t("FlipVertical",PV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jV=[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]],qy=t("Flower2",jV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HV=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]],Py=t("Flower",HV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zV=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],jy=t("Focus",zV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RV=[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]],Hy=t("FoldHorizontal",RV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DV=[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]],zy=t("FoldVertical",DV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VV=[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]],Ry=t("FolderArchive",VV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TV=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]],Dy=t("FolderCheck",TV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FV=[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]],Vy=t("FolderClock",FV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BV=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]],Ty=t("FolderClosed",BV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EV=[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]],Fy=t("FolderCode",EV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OV=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]],gt=t("FolderCog",OV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UV=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]],By=t("FolderDot",UV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GV=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]],Ey=t("FolderDown",GV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZV=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Oy=t("FolderGit2",ZV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WV=[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]],Uy=t("FolderGit",WV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XV=[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"wpff58"}]],Gy=t("FolderHeart",XV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KV=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]],Zy=t("FolderInput",KV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YV=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],Wy=t("FolderKanban",YV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QV=[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]],Xy=t("FolderKey",QV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JV=[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]],Ky=t("FolderLock",JV);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Yy=t("FolderMinus",eT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]],Qy=t("FolderOpenDot",tT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Jy=t("FolderOpen",oT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]],ep=t("FolderOutput",aT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1saktj"}]],xt=t("FolderPen",nT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],tp=t("FolderPlus",cT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]],op=t("FolderRoot",iT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]],ap=t("FolderSearch2",rT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]],np=t("FolderSearch",dT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]],cp=t("FolderSymlink",sT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],ip=t("FolderSync",hT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]],rp=t("FolderTree",lT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]],dp=t("FolderUp",yT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]],sp=t("FolderX",pT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],hp=t("Folder",uT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]],lp=t("Folders",kT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],yp=t("Footprints",fT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]],pp=t("Forklift",MT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]],up=t("Forward",mT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]],kp=t("Frame",vT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]],fp=t("Framer",gT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Mp=t("Frown",xT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _T=[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"7cu91f"}]],mp=t("Fuel",_T);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]],vp=t("Fullscreen",wT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]],gp=t("GalleryHorizontalEnd",LT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]],xp=t("GalleryHorizontal",CT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]],_p=t("GalleryThumbnails",bT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]],wp=t("GalleryVerticalEnd",IT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]],Lp=t("GalleryVertical",NT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],Cp=t("Gamepad2",ST);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],bp=t("Gamepad",$T);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ip=t("Gauge",AT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]],Np=t("Gavel",qT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Sp=t("Gem",PT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],$p=t("Ghost",jT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Ap=t("Gift",HT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],qp=t("GitBranchPlus",zT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Pp=t("GitBranch",RT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],_t=t("GitCommitHorizontal",DT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]],jp=t("GitCommitVertical",VT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]],Hp=t("GitCompareArrows",TT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],zp=t("GitCompare",FT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],Rp=t("GitFork",BT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]],Dp=t("GitGraph",ET);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Vp=t("GitMerge",OT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]],Tp=t("GitPullRequestArrow",UT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],Fp=t("GitPullRequestClosed",GT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]],Bp=t("GitPullRequestCreateArrow",ZT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]],Ep=t("GitPullRequestCreate",WT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],Op=t("GitPullRequestDraft",XT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]],Up=t("GitPullRequest",KT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Gp=t("Github",YT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]],Zp=t("Gitlab",QT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]],Wp=t("GlassWater",JT);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eF=[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]],Xp=t("Glasses",eF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tF=[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]],Kp=t("GlobeLock",tF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oF=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Yp=t("Globe",oF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aF=[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]],Qp=t("Goal",aF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nF=[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"edstyy"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"19wdwo"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"1lugqo"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1hbeus"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"1etffm"}]],Jp=t("Grab",nF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cF=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],eu=t("GraduationCap",cF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iF=[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]],tu=t("Grape",iF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rF=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],wt=t("Grid2x2Check",rF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dF=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 22v-6",key:"qhmiwi"}]],Lt=t("Grid2x2Plus",dF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sF=[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]],Ct=t("Grid2x2X",sF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hF=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],bt=t("Grid2x2",hF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lF=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],_e=t("Grid3x3",lF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yF=[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]],ou=t("GripHorizontal",yF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pF=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],au=t("GripVertical",pF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uF=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],nu=t("Grip",uF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kF=[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]],cu=t("Group",kF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fF=[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z",key:"1u8q3z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}]],iu=t("Guitar",fF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MF=[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]],ru=t("Ham",MF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mF=[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]],du=t("Hammer",mF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vF=[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]],su=t("HandCoins",vF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gF=[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]],hu=t("HandHeart",gF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xF=[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]],It=t("HandHelping",xF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _F=[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",key:"wc6myp"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]],lu=t("HandMetal",_F);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wF=[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",key:"n2g93r"}],["path",{d:"M2 14h12a2 2 0 0 1 0 4h-2",key:"1o2jem"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M5 10a7 7 0 0 1 14 0",key:"1ega1o"}],["path",{d:"M5 14v6a1 1 0 0 1-1 1H2",key:"1hescx"}]],yu=t("HandPlatter",wF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LF=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],pu=t("Hand",LF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CF=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],uu=t("Handshake",CF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bF=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],ku=t("HardDriveDownload",bF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IF=[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]],fu=t("HardDriveUpload",IF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NF=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Mu=t("HardDrive",NF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SF=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],mu=t("HardHat",SF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $F=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],vu=t("Hash",$F);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AF=[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]],gu=t("Haze",AF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qF=[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]],xu=t("HdmiPort",qF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PF=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]],_u=t("Heading1",PF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jF=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]],wu=t("Heading2",jF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HF=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]],Lu=t("Heading3",HF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zF=[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]],Cu=t("Heading4",zF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RF=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]],bu=t("Heading5",RF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DF=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]],Iu=t("Heading6",DF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VF=[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]],Nu=t("Heading",VF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TF=[["path",{d:"M21 14h-1.343",key:"1jdnxi"}],["path",{d:"M9.128 3.47A9 9 0 0 1 21 12v3.343",key:"6kipu2"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",key:"9x50f4"}],["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",key:"1bkxnm"}]],Su=t("HeadphoneOff",TF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FF=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],$u=t("Headphones",FF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BF=[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]],Au=t("Headset",BF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EF=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]],qu=t("HeartCrack",EF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OF=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],Pu=t("HeartHandshake",OF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UF=[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]],ju=t("HeartOff",UF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GF=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],Hu=t("HeartPulse",GF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZF=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],zu=t("Heart",ZF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WF=[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]],Ru=t("Heater",WF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XF=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],Du=t("Hexagon",XF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KF=[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]],Vu=t("Highlighter",KF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YF=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Tu=t("History",YF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QF=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Fu=t("HopOff",QF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JF=[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]],Bu=t("Hop",JF);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eB=[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]],Eu=t("Hospital",eB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tB=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Ou=t("Hotel",tB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oB=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]],Uu=t("Hourglass",oB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aB=[["path",{d:"M10 12V8.964",key:"1vll13"}],["path",{d:"M14 12V8.964",key:"1x3qvg"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",key:"ppykja"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",key:"1gvg2z"}]],Gu=t("HousePlug",aB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nB=[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354",key:"5phn05"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 3v6",key:"x1uolp"}]],Zu=t("HousePlus",nB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cB=[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01",key:"1wy54i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0",key:"exoy2g"}]],Wu=t("HouseWifi",cB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iB=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Nt=t("House",iB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rB=[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]],St=t("IceCreamBowl",rB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dB=[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]],$t=t("IceCreamCone",dB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sB=[["path",{d:"M16 10h2",key:"8sgtl7"}],["path",{d:"M16 14h2",key:"epxaof"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0",key:"n6f512"}],["circle",{cx:"9",cy:"11",r:"2",key:"yxgjnd"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]],Xu=t("IdCard",sB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hB=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Ku=t("ImageDown",hB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lB=[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Yu=t("ImageMinus",lB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yB=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],Qu=t("ImageOff",yB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pB=[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Ju=t("ImagePlay",pB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uB=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],e4=t("ImagePlus",uB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kB=[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],t4=t("ImageUp",kB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fB=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M17 21h2a2 2 0 0 0 2-2",key:"130fy9"}],["path",{d:"M21 12v3",key:"1wzk3p"}],["path",{d:"m21 3-5 5",key:"1g5oa7"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2",key:"kk3yz1"}],["path",{d:"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",key:"fyekpt"}],["path",{d:"M9 3h3",key:"d52fa"}],["rect",{x:"3",y:"11",width:"10",height:"10",rx:"1",key:"1wpmix"}]],o4=t("ImageUpscale",fB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MB=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],a4=t("Image",MB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mB=[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]],n4=t("Images",mB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vB=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]],c4=t("Import",vB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],i4=t("Inbox",gB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xB=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m7 8-4 4 4 4",key:"o5hrat"}]],At=t("IndentDecrease",xB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=[["path",{d:"M21 12H11",key:"wd7e0v"}],["path",{d:"M21 18H11",key:"4wu86t"}],["path",{d:"M21 6H11",key:"6dy1d6"}],["path",{d:"m3 8 4 4-4 4",key:"1a3j6y"}]],qt=t("IndentIncrease",_B);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wB=[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]],r4=t("IndianRupee",wB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LB=[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]],d4=t("Infinity",LB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CB=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Wa=t("Info",CB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bB=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]],s4=t("InspectionPanel",bB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],h4=t("Instagram",IB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NB=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],l4=t("Italic",NB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SB=[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]],y4=t("IterationCcw",SB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]],p4=t("IterationCw",$B);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AB=[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]],u4=t("JapaneseYen",AB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]],k4=t("Joystick",qB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]],f4=t("Kanban",PB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jB=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],M4=t("KeyRound",jB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HB=[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",key:"165ttr"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",key:"1ubxi2"}]],m4=t("KeySquare",HB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],v4=t("Key",zB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]],g4=t("KeyboardMusic",RB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DB=[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]],x4=t("KeyboardOff",DB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VB=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],_4=t("Keyboard",VB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TB=[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]],w4=t("LampCeiling",TB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FB=[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]],L4=t("LampDesk",FB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BB=[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]],C4=t("LampFloor",BB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EB=[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]],b4=t("LampWallDown",EB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OB=[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]],I4=t("LampWallUp",OB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UB=[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]],N4=t("Lamp",UB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]],S4=t("LandPlot",GB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]],$4=t("Landmark",ZB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WB=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],A4=t("Languages",WB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]],q4=t("LaptopMinimalCheck",XB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KB=[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]],Pt=t("LaptopMinimal",KB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]],P4=t("Laptop",YB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QB=[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",key:"72q637"}]],j4=t("LassoSelect",QB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]],H4=t("Lasso",JB);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],z4=t("Laugh",eE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]],R4=t("Layers2",tE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],jt=t("Layers",oE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],D4=t("LayoutDashboard",aE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],V4=t("LayoutGrid",nE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],T4=t("LayoutList",cE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]],F4=t("LayoutPanelLeft",iE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]],B4=t("LayoutPanelTop",rE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],E4=t("LayoutTemplate",dE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],O4=t("Leaf",sE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]],U4=t("LeafyGreen",hE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]],G4=t("Lectern",lE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M15 12h6",key:"upa0zy"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13",key:"blevx4"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M4 11h6",key:"olkgv1"}]],Z4=t("LetterText",yE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]],W4=t("LibraryBig",pE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],X4=t("Library",uE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],K4=t("LifeBuoy",kE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]],Y4=t("Ligature",fE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Q4=t("LightbulbOff",ME);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],J4=t("Lightbulb",mE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],ek=t("Link2Off",vE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],tk=t("Link2",gE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],ok=t("Link",xE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ak=t("Linkedin",_E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M11 18H3",key:"n3j2dh"}],["path",{d:"m15 18 2 2 4-4",key:"1szwhi"}],["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}]],nk=t("ListCheck",wE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],ck=t("ListChecks",LE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]],ik=t("ListCollapse",CE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]],rk=t("ListEnd",bE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M10 18h4",key:"1ulq68"}],["path",{d:"M11 6H3",key:"1u26ik"}],["path",{d:"M15 6h6",key:"1jlkvy"}],["path",{d:"M18 9V3",key:"xwwp7m"}],["path",{d:"M7 12h8",key:"7a1bxv"}]],dk=t("ListFilterPlus",IE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]],sk=t("ListFilter",NE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]],hk=t("ListMinus",SE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]],lk=t("ListMusic",$E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]],yk=t("ListOrdered",AE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]],pk=t("ListPlus",qE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]],uk=t("ListRestart",PE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]],kk=t("ListStart",jE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],fk=t("ListTodo",HE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]],Mk=t("ListTree",zE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]],mk=t("ListVideo",RE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]],vk=t("ListX",DE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],gk=t("List",VE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",key:"1lzz15"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],xk=t("LoaderPinwheel",TE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],_k=t("Loader",FE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],wk=t("LocateFixed",BE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],Lk=t("LocateOff",EE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]],Ck=t("Locate",OE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]],Ht=t("LockKeyholeOpen",UE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],bk=t("LockKeyhole",GE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],zt=t("LockOpen",ZE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Ik=t("Lock",WE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Xa=t("LogOut",XE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M3 18h1",key:"1eiwyy"}],["path",{d:"M3 6h1",key:"rgxa97"}],["path",{d:"M8 12h1",key:"1con00"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M8 6h1",key:"tn6mkg"}]],Nk=t("Logs",KE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]],Sk=t("Lollipop",YE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1m57jg"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]],$k=t("Luggage",QE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]],Ak=t("Magnet",JE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],qk=t("MailCheck",eO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]],Pk=t("MailMinus",tO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]],jk=t("MailOpen",oO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]],Hk=t("MailPlus",aO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],zk=t("MailQuestion",nO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"8lzu5m"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]],Rk=t("MailSearch",cO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],Dk=t("MailWarning",iO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]],Vk=t("MailX",rO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Tk=t("Mail",dO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",key:"15i455"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]],Fk=t("Mailbox",sO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]],Bk=t("Mails",hO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],Ek=t("MapPinCheckInside",lO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",key:"1dq61d"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m16 18 2 2 4-4",key:"1mkfmb"}]],Ok=t("MapPinCheck",yO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",key:"1p1rcz"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",key:"mcbcs9"}],["path",{d:"M18 22v-3",key:"1t1ugv"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]],Uk=t("MapPinHouse",pO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Gk=t("MapPinMinusInside",uO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kO=[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"11uxia"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}]],Zk=t("MapPinMinus",kO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16",key:"1d4wjd"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",key:"12yil7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",key:"lhrkcz"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74",key:"13wojd"}]],Wk=t("MapPinOff",fO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MO=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],Xk=t("MapPinPlusInside",MO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"fcdtly"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}],["path",{d:"M19 15v6",key:"10aioa"}]],Kk=t("MapPinPlus",mO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],Yk=t("MapPinXInside",vO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",key:"y0ewhp"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"m21.5 15.5-5 5",key:"11iqnx"}],["path",{d:"m21.5 20.5-5-5",key:"1bylgx"}]],Qk=t("MapPinX",gO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xO=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Jk=t("MapPin",xO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],e5=t("MapPinned",_O);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=[["path",{d:"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",key:"svfegj"}],["path",{d:"M15 5.764V12",key:"1ocw4k"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],t5=t("MapPlus",wO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LO=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],o5=t("Map",LO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CO=[["path",{d:"m14 6 4 4",key:"1q72g9"}],["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"m21 3-7.75 7.75",key:"1cjbfd"}],["circle",{cx:"9",cy:"15",r:"6",key:"bx5svt"}]],a5=t("MarsStroke",CO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bO=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]],n5=t("Mars",bO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]],c5=t("Martini",IO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NO=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],i5=t("Maximize2",NO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SO=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],r5=t("Maximize",SO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $O=[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]],d5=t("Medal",$O);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AO=[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],s5=t("MegaphoneOff",AO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qO=[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]],h5=t("Megaphone",qO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PO=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],l5=t("Meh",PO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jO=[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]],y5=t("MemoryStick",jO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HO=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],p5=t("Menu",HO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zO=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],u5=t("Merge",zO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RO=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]],k5=t("MessageCircleCode",RO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DO=[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]],f5=t("MessageCircleDashed",DO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]],M5=t("MessageCircleHeart",VO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],m5=t("MessageCircleMore",TO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FO=[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]],v5=t("MessageCircleOff",FO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],g5=t("MessageCirclePlus",BO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],x5=t("MessageCircleQuestion",EO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]],_5=t("MessageCircleReply",OO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],w5=t("MessageCircleWarning",UO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],L5=t("MessageCircleX",GO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZO=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],C5=t("MessageCircle",ZO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WO=[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],b5=t("MessageSquareCode",WO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XO=[["path",{d:"M10 17H7l-4 4v-7",key:"1r71xu"}],["path",{d:"M14 17h1",key:"nufu4t"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2",key:"29akq3"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}]],I5=t("MessageSquareDashed",XO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KO=[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]],N5=t("MessageSquareDiff",KO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YO=[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],S5=t("MessageSquareDot",YO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QO=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]],$5=t("MessageSquareHeart",QO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JO=[["path",{d:"M19 15v-2a2 2 0 1 0-4 0v2",key:"h3d1vz"}],["path",{d:"M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",key:"xsnnhn"}],["rect",{x:"13",y:"15",width:"8",height:"5",rx:"1",key:"1ccwuk"}]],A5=t("MessageSquareLock",JO);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]],q5=t("MessageSquareMore",eU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tU=[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]],P5=t("MessageSquareOff",tU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],j5=t("MessageSquarePlus",oU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]],H5=t("MessageSquareQuote",aU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]],z5=t("MessageSquareReply",nU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cU=[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]],R5=t("MessageSquareShare",cU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]],D5=t("MessageSquareText",iU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]],V5=t("MessageSquareWarning",rU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]],T5=t("MessageSquareX",dU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sU=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],F5=t("MessageSquare",sU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hU=[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]],B5=t("MessagesSquare",hU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lU=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],E5=t("MicOff",lU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yU=[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],Rt=t("MicVocal",yU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pU=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],O5=t("Mic",pU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uU=[["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 16h2",key:"zsn3lv"}],["path",{d:"M18 20h2",key:"9x5y9y"}],["path",{d:"M18 4h2",key:"1luxfb"}],["path",{d:"M18 8h2",key:"nxqzg"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 16h2",key:"8a5zha"}],["path",{d:"M4 20h2",key:"27dk57"}],["path",{d:"M4 4h2",key:"10groj"}],["path",{d:"M4 8h2",key:"18vq6w"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",key:"1681fp"}]],U5=t("Microchip",uU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kU=[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]],G5=t("Microscope",kU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fU=[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]],Z5=t("Microwave",fU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MU=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",key:"1btarq"}]],W5=t("Milestone",MU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mU=[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],X5=t("MilkOff",mU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vU=[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]],K5=t("Milk",vU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gU=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Y5=t("Minimize2",gU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xU=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Q5=t("Minimize",xU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _U=[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],J5=t("MonitorCheck",_U);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wU=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m15.2 4.9-.9-.4",key:"12wd2u"}],["path",{d:"m15.2 7.1-.9.4",key:"1r2vl7"}],["path",{d:"m16.9 3.2-.4-.9",key:"3zbo91"}],["path",{d:"m16.9 8.8-.4.9",key:"1qr2dn"}],["path",{d:"m19.5 2.3-.4.9",key:"1rjrkq"}],["path",{d:"m19.5 9.7-.4-.9",key:"heryx5"}],["path",{d:"m21.7 4.5-.9.4",key:"17fqt1"}],["path",{d:"m21.7 7.5-.9-.4",key:"14zyni"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"1tnzv8"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]],e3=t("MonitorCog",wU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LU=[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],t3=t("MonitorDot",LU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CU=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],o3=t("MonitorDown",CU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bU=[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],a3=t("MonitorOff",bU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IU=[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],n3=t("MonitorPause",IU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NU=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],c3=t("MonitorPlay",NU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SU=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]],i3=t("MonitorSmartphone",SU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $U=[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]],r3=t("MonitorSpeaker",$U);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AU=[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]],d3=t("MonitorStop",AU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qU=[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],s3=t("MonitorUp",qU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PU=[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],h3=t("MonitorX",PU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jU=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],l3=t("Monitor",jU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HU=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]],y3=t("MoonStar",HU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zU=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],p3=t("Moon",zU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RU=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]],u3=t("MountainSnow",RU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DU=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],k3=t("Mountain",DU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VU=[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]],f3=t("MouseOff",VU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TU=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],M3=t("MousePointer2",TU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FU=[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",key:"11pp1i"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]],m3=t("MousePointerBan",FU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BU=[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]],v3=t("MousePointerClick",BU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EU=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],g3=t("MousePointer",EU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OU=[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]],x3=t("Mouse",OU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UU=[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]],Dt=t("Move3d",UU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GU=[["path",{d:"M19 13v6h-6",key:"1hxl6d"}],["path",{d:"M5 11V5h6",key:"12e2xe"}],["path",{d:"m5 5 14 14",key:"11anup"}]],_3=t("MoveDiagonal2",GU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZU=[["path",{d:"M11 19H5v-6",key:"8awifj"}],["path",{d:"M13 5h6v6",key:"7voy1q"}],["path",{d:"M19 5 5 19",key:"wwaj1z"}]],w3=t("MoveDiagonal",ZU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WU=[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],L3=t("MoveDownLeft",WU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XU=[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]],C3=t("MoveDownRight",XU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KU=[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]],b3=t("MoveDown",KU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YU=[["path",{d:"m18 8 4 4-4 4",key:"1ak13k"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}]],I3=t("MoveHorizontal",YU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QU=[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]],N3=t("MoveLeft",QU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JU=[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]],S3=t("MoveRight",JU);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eG=[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]],$3=t("MoveUpLeft",eG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tG=[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]],A3=t("MoveUpRight",tG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oG=[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]],q3=t("MoveUp",oG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aG=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m8 18 4 4 4-4",key:"bh5tu3"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}]],P3=t("MoveVertical",aG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nG=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],j3=t("Move",nG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cG=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],H3=t("Music2",cG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iG=[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]],z3=t("Music3",iG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rG=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],R3=t("Music4",rG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dG=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],D3=t("Music",dG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sG=[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],V3=t("Navigation2Off",sG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hG=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],T3=t("Navigation2",hG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lG=[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],F3=t("NavigationOff",lG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yG=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],B3=t("Navigation",yG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pG=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],E3=t("Network",pG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uG=[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]],O3=t("Newspaper",uG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kG=[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]],U3=t("Nfc",kG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fG=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"m9 4 6 4",key:"t8piew"}],["path",{d:"m9 8 6-4",key:"sndyih"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}]],G3=t("NonBinary",fG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MG=[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]],Z3=t("NotebookPen",MG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mG=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]],W3=t("NotebookTabs",mG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vG=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]],X3=t("NotebookText",vG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gG=[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]],K3=t("Notebook",gG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xG=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]],Y3=t("NotepadTextDashed",xG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _G=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]],Q3=t("NotepadText",_G);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wG=[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],J3=t("NutOff",wG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LG=[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]],e6=t("Nut",LG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CG=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],Vt=t("OctagonAlert",CG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bG=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"M8 12h8",key:"1wcyev"}]],t6=t("OctagonMinus",bG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IG=[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]],Tt=t("OctagonPause",IG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NG=[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Fe=t("OctagonX",NG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SG=[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}]],o6=t("Octagon",SG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $G=[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",key:"1x94xo"}]],a6=t("Omega",$G);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AG=[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]],n6=t("Option",AG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qG=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],c6=t("Orbit",qG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PG=[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]],i6=t("Origami",PG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jG=[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]],r6=t("Package2",jG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HG=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],d6=t("PackageCheck",HG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zG=[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],s6=t("PackageMinus",zG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RG=[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]],h6=t("PackageOpen",RG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DG=[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],l6=t("PackagePlus",DG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VG=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]],y6=t("PackageSearch",VG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TG=[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]],p6=t("PackageX",TG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FG=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],u6=t("Package",FG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BG=[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]],k6=t("PaintBucket",BG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EG=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]],f6=t("PaintRoller",EG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OG=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]],Ft=t("PaintbrushVertical",OG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UG=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],M6=t("Paintbrush",UG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GG=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],m6=t("Palette",GG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]],v6=t("PanelBottomClose",ZG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]],Bt=t("PanelBottomDashed",WG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]],g6=t("PanelBottomOpen",XG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]],x6=t("PanelBottom",KG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],Et=t("PanelLeftClose",YG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]],Ot=t("PanelLeftDashed",QG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JG=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],Ut=t("PanelLeftOpen",JG);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],Be=t("PanelLeft",eZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]],_6=t("PanelRightClose",tZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]],Gt=t("PanelRightDashed",oZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]],w6=t("PanelRightOpen",aZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]],L6=t("PanelRight",nZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]],C6=t("PanelTopClose",cZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]],Zt=t("PanelTopDashed",iZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]],b6=t("PanelTopOpen",rZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]],I6=t("PanelTop",dZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]],N6=t("PanelsLeftBottom",sZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]],S6=t("PanelsRightBottom",hZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lZ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Wt=t("PanelsTopLeft",lZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yZ=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],$6=t("Paperclip",yZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pZ=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]],A6=t("Parentheses",pZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uZ=[["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",key:"1jofit"}],["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}]],q6=t("ParkingMeter",uZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kZ=[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]],P6=t("PartyPopper",kZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fZ=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],j6=t("Pause",fZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MZ=[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]],H6=t("PawPrint",MZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mZ=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]],z6=t("PcCase",mZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vZ=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Xt=t("PenLine",vZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gZ=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],R6=t("PenOff",gZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xZ=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],D6=t("PenTool",xZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Z=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Kt=t("Pen",_Z);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wZ=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]],V6=t("PencilLine",wZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LZ=[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",key:"bjo8r8"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",key:"16h5ne"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],T6=t("PencilOff",LZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CZ=[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],F6=t("PencilRuler",CZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bZ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],B6=t("Pencil",bZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IZ=[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",key:"2hea0t"}]],E6=t("Pentagon",IZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NZ=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],O6=t("Percent",NZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SZ=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],U6=t("PersonStanding",SZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Z=[["path",{d:"M20 11H4",key:"6ut86h"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",key:"1ana5r"}]],G6=t("PhilippinePeso",$Z);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AZ=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Z6=t("PhoneCall",AZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qZ=[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],W6=t("PhoneForwarded",qZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PZ=[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],X6=t("PhoneIncoming",PZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jZ=[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],K6=t("PhoneMissed",jZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HZ=[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]],Y6=t("PhoneOff",HZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zZ=[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Q6=t("PhoneOutgoing",zZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RZ=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],J6=t("Phone",RZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DZ=[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]],e8=t("Pi",DZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VZ=[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]],t8=t("Piano",VZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TZ=[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]],o8=t("Pickaxe",TZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FZ=[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]],a8=t("PictureInPicture2",FZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BZ=[["path",{d:"M2 10h6V4",key:"zwrco"}],["path",{d:"m2 4 6 6",key:"ug085t"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7",key:"git5jr"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3",key:"1f7fh3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1",key:"1wjs3o"}]],n8=t("PictureInPicture",BZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EZ=[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]],c8=t("PiggyBank",EZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OZ=[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]],i8=t("PilcrowLeft",OZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UZ=[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]],r8=t("PilcrowRight",UZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GZ=[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]],d8=t("Pilcrow",GZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZZ=[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]],s8=t("PillBottle",ZZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WZ=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]],h8=t("Pill",WZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XZ=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],l8=t("PinOff",XZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KZ=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],y8=t("Pin",KZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YZ=[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]],p8=t("Pipette",YZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QZ=[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]],u8=t("Pizza",QZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JZ=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]],k8=t("PlaneLanding",JZ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eW=[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]],f8=t("PlaneTakeoff",eW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tW=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],M8=t("Plane",tW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oW=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],m8=t("Play",oW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aW=[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z",key:"wtfw2c"}]],v8=t("Plug2",aW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nW=[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],Yt=t("PlugZap",nW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cW=[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]],g8=t("Plug",cW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iW=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],x8=t("Plus",iW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rW=[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]],_8=t("PocketKnife",rW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dW=[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]],w8=t("Pocket",dW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sW=[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]],L8=t("Podcast",sW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hW=[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],C8=t("PointerOff",hW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lW=[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1agjmk"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",key:"wdbh2u"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",key:"1ibuk9"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]],b8=t("Pointer",lW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yW=[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]],I8=t("Popcorn",yW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pW=[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]],N8=t("Popsicle",pW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uW=[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]],S8=t("PoundSterling",uW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kW=[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],$8=t("PowerOff",kW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fW=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],A8=t("Power",fW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MW=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],q8=t("Presentation",MW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mW=[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",key:"qeb09x"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",key:"1md90i"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}]],P8=t("PrinterCheck",mW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vW=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],j8=t("Printer",vW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gW=[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]],H8=t("Projector",gW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xW=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]],z8=t("Proportions",xW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _W=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],R8=t("Puzzle",_W);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wW=[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]],D8=t("Pyramid",wW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LW=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],V8=t("QrCode",LW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CW=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],T8=t("Quote",CW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bW=[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]],F8=t("Rabbit",bW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IW=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]],B8=t("Radar",IW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NW=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]],E8=t("Radiation",NW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SW=[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]],O8=t("Radical",SW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $W=[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h.01",key:"yjnet6"}]],U8=t("RadioReceiver",$W);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AW=[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]],G8=t("RadioTower",AW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qW=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Z8=t("Radio",qW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PW=[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],W8=t("Radius",PW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jW=[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]],X8=t("RailSymbol",jW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HW=[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]],K8=t("Rainbow",HW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zW=[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5",key:"1tbvmo"}],["path",{d:"M16 9h.01",key:"1bdo4e"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",key:"9ch7kn"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",key:"3s7e9i"}]],Y8=t("Rat",zW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RW=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],Q8=t("Ratio",RW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]],J8=t("ReceiptCent",DW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]],e7=t("ReceiptEuro",VW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]],t7=t("ReceiptIndianRupee",TW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]],o7=t("ReceiptJapaneseYen",FW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]],a7=t("ReceiptPoundSterling",BW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]],n7=t("ReceiptRussianRuble",EW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]],c7=t("ReceiptSwissFranc",OW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]],i7=t("ReceiptText",UW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GW=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],r7=t("Receipt",GW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZW=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],Qt=t("RectangleEllipsis",ZW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WW=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]],d7=t("RectangleHorizontal",WW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XW=[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]],s7=t("RectangleVertical",XW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KW=[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]],h7=t("Recycle",KW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YW=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],l7=t("Redo2",YW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QW=[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],y7=t("RedoDot",QW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JW=[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]],p7=t("Redo",JW);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eX=[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],u7=t("RefreshCcwDot",eX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tX=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],k7=t("RefreshCcw",tX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oX=[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]],f7=t("RefreshCwOff",oX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aX=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],M7=t("RefreshCw",aX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nX=[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]],m7=t("Refrigerator",nX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cX=[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]],v7=t("Regex",cX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iX=[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]],g7=t("RemoveFormatting",iX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rX=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]],x7=t("Repeat1",rX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dX=[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]],_7=t("Repeat2",dX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sX=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],w7=t("Repeat",sX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hX=[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"1yyzbs"}],["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",key:"zfj4xr"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1",key:"1ageje"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]],L7=t("ReplaceAll",hX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lX=[["path",{d:"M14 4a2 2 0 0 1 2-2",key:"1w2hp7"}],["path",{d:"M16 10a2 2 0 0 1-2-2",key:"shjach"}],["path",{d:"M20 2a2 2 0 0 1 2 2",key:"188mtx"}],["path",{d:"M22 8a2 2 0 0 1-2 2",key:"ddf4tu"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1",key:"3y3t5z"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2",key:"4rksxw"}]],C7=t("Replace",lX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yX=[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]],b7=t("ReplyAll",yX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pX=[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]],I7=t("Reply",pX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uX=[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]],N7=t("Rewind",uX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kX=[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",key:"1rnhq3"}],["path",{d:"m12 18 2.57-3.5",key:"116vt7"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009",key:"10dq0b"}],["path",{d:"M9.35 14.53 12 11.22",key:"tdsyp2"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",key:"nmifey"}]],S7=t("Ribbon",kX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fX=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],$7=t("Rocket",fX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MX=[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]],A7=t("RockingChair",MX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mX=[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]],q7=t("RollerCoaster",mX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vX=[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]],Jt=t("Rotate3d",vX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gX=[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]],P7=t("RotateCcwSquare",gX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xX=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],j7=t("RotateCcw",xX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _X=[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]],H7=t("RotateCwSquare",_X);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wX=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],z7=t("RotateCw",wX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LX=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],R7=t("RouteOff",LX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CX=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],D7=t("Route",CX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bX=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],V7=t("Router",bX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IX=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],eo=t("Rows2",IX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NX=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],to=t("Rows3",NX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SX=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]],T7=t("Rows4",SX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $X=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],F7=t("Rss",$X);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AX=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],B7=t("Ruler",AX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qX=[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]],E7=t("RussianRuble",qX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PX=[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]],O7=t("Sailboat",PX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jX=[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]],U7=t("Salad",jX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HX=[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",key:"f1wd0e"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",key:"1pfu07"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",key:"1oq9qw"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"1fnwu5"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1",key:"itshg"}]],G7=t("Sandwich",HX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zX=[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]],Z7=t("SatelliteDish",zX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RX=[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]],W7=t("Satellite",RX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DX=[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]],X7=t("SaveAll",DX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VX=[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7",key:"h8g396"}],["path",{d:"M14 8h1",key:"1lfen6"}],["path",{d:"M17 21v-4",key:"1yknxs"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",key:"1t4vdl"}],["path",{d:"M29.5 11.5s5 5 4 5",key:"zzn4i6"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",key:"24cby9"}]],K7=t("SaveOff",VX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TX=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Y7=t("Save",TX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FX=[["path",{d:"M5 7v11a1 1 0 0 0 1 1h11",key:"13dt1j"}],["path",{d:"M5.293 18.707 11 13",key:"ezgbsx"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]],oo=t("Scale3d",FX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BX=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Q7=t("Scale",BX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EX=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]],J7=t("Scaling",EX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]],ef=t("ScanBarcode",OX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]],tf=t("ScanEye",UX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]],of=t("ScanFace",GX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZX=[["path",{d:"M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",key:"1algrk"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],af=t("ScanHeart",ZX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],nf=t("ScanLine",WX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XX=[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4",key:"uk4fdo"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M17 8V7",key:"q2g9wo"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1",key:"m9kyts"}]],cf=t("ScanQrCode",XX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]],rf=t("ScanSearch",KX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]],df=t("ScanText",YX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QX=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],sf=t("Scan",QX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JX=[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",key:"1xqip1"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",key:"9d2mlk"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]],hf=t("School",JX);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eK=[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],lf=t("ScissorsLineDashed",eK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tK=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],yf=t("Scissors",tK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oK=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]],pf=t("ScreenShareOff",oK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aK=[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]],uf=t("ScreenShare",aK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nK=[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],kf=t("ScrollText",nK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cK=[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]],ff=t("Scroll",cK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iK=[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Mf=t("SearchCheck",iK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rK=[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],mf=t("SearchCode",rK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dK=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],vf=t("SearchSlash",dK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sK=[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],gf=t("SearchX",sK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hK=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],xf=t("Search",hK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lK=[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]],_f=t("Section",lK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yK=[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],ao=t("SendHorizontal",yK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pK=[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]],wf=t("SendToBack",pK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uK=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Lf=t("Send",uK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kK=[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]],Cf=t("SeparatorHorizontal",kK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fK=[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]],bf=t("SeparatorVertical",fK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MK=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]],If=t("ServerCog",MK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mK=[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]],Nf=t("ServerCrash",mK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vK=[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Sf=t("ServerOff",vK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gK=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],$f=t("Server",gK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xK=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Af=t("Settings2",xK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _K=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ka=t("Settings",_K);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wK=[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]],qf=t("Shapes",wK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LK=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Pf=t("Share2",LK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CK=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]],jf=t("Share",CK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bK=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]],Hf=t("Sheet",bK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IK=[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]],zf=t("Shell",IK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],Rf=t("ShieldAlert",NK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]],Df=t("ShieldBan",SK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $K=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Vf=t("ShieldCheck",$K);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]],Tf=t("ShieldEllipsis",AK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]],Ff=t("ShieldHalf",qK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]],Bf=t("ShieldMinus",PK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jK=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]],Ef=t("ShieldOff",jK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],Of=t("ShieldPlus",HK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Uf=t("ShieldQuestion",zK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],no=t("ShieldX",RK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DK=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Gf=t("Shield",DK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VK=[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]],Zf=t("ShipWheel",VK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TK=[["path",{d:"M12 10.189V14",key:"1p8cqu"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",key:"7tigtc"}],["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1924j5"}]],Wf=t("Ship",TK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FK=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],Xf=t("Shirt",FK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BK=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],Kf=t("ShoppingBag",BK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EK=[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]],Yf=t("ShoppingBasket",EK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OK=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Qf=t("ShoppingCart",OK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UK=[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]],Jf=t("Shovel",UK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GK=[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]],eM=t("ShowerHead",GK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZK=[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]],tM=t("Shrink",ZK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WK=[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",key:"ubcgy"}],["path",{d:"m14 14-2 2",key:"847xa2"}]],oM=t("Shrub",WK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XK=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],aM=t("Shuffle",XK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KK=[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]],nM=t("Sigma",KK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YK=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]],cM=t("SignalHigh",YK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QK=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]],iM=t("SignalLow",QK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JK=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]],rM=t("SignalMedium",JK);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eY=[["path",{d:"M2 20h.01",key:"4haj6o"}]],dM=t("SignalZero",eY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tY=[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]],sM=t("Signal",tY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oY=[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",key:"y32ogt"}],["path",{d:"M3 21h18",key:"itz85i"}]],hM=t("Signature",oY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aY=[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]],lM=t("SignpostBig",aY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nY=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",key:"gqqp9m"}]],yM=t("Signpost",nY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cY=[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]],pM=t("Siren",cY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iY=[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]],uM=t("SkipBack",iY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rY=[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]],kM=t("SkipForward",rY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dY=[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]],fM=t("Skull",dY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sY=[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]],MM=t("Slack",sY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hY=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],mM=t("Slash",hY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lY=[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",key:"1sllp5"}]],vM=t("Slice",lY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yY=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],gM=t("SlidersHorizontal",yY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pY=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],co=t("SlidersVertical",pY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uY=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]],xM=t("SmartphoneCharging",uY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kY=[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]],_M=t("SmartphoneNfc",kY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fY=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],wM=t("Smartphone",fY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MY=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],LM=t("SmilePlus",MY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mY=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],CM=t("Smile",mY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vY=[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]],bM=t("Snail",vY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gY=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],IM=t("Snowflake",gY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xY=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],NM=t("Sofa",xY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Y=[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]],SM=t("Soup",_Y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wY=[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]],$M=t("Space",wY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LY=[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]],AM=t("Spade",LY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CY=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]],qM=t("Sparkle",CY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bY=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],io=t("Sparkles",bY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IY=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]],PM=t("Speaker",IY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NY=[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]],jM=t("Speech",NY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SY=[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]],HM=t("SpellCheck2",SY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Y=[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],zM=t("SpellCheck",$Y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AY=[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]],RM=t("Spline",AY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qY=[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]],DM=t("Split",qY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PY=[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]],VM=t("SprayCan",PY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jY=[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]],TM=t("Sprout",jY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]],ro=t("SquareActivity",HY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]],so=t("SquareArrowDownLeft",zY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]],ho=t("SquareArrowDownRight",RY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]],lo=t("SquareArrowDown",DY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]],yo=t("SquareArrowLeft",VY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TY=[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],po=t("SquareArrowOutDownLeft",TY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FY=[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]],uo=t("SquareArrowOutDownRight",FY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BY=[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]],ko=t("SquareArrowOutUpLeft",BY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EY=[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]],fo=t("SquareArrowOutUpRight",EY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]],Mo=t("SquareArrowRight",OY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]],mo=t("SquareArrowUpLeft",UY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]],vo=t("SquareArrowUpRight",GY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]],go=t("SquareArrowUp",ZY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]],xo=t("SquareAsterisk",WY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XY=[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]],_o=t("SquareBottomDashedScissors",XY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]],we=t("SquareChartGantt",KY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YY=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],wo=t("SquareCheckBig",YY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Lo=t("SquareCheck",QY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JY=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]],Co=t("SquareChevronDown",JY);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]],bo=t("SquareChevronLeft",eQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]],Io=t("SquareChevronRight",tQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]],No=t("SquareChevronUp",oQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aQ=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],So=t("SquareCode",aQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nQ=[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]],FM=t("SquareDashedBottomCode",nQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cQ=[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]],BM=t("SquareDashedBottom",cQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iQ=[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]],$o=t("SquareDashedKanban",iQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rQ=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]],Ao=t("SquareDashedMousePointer",rQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dQ=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],qo=t("SquareDashed",dQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]],Po=t("SquareDivide",sQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],jo=t("SquareDot",hQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]],Ho=t("SquareEqual",lQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],zo=t("SquareFunction",yQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],Ro=t("SquareKanban",pQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]],Do=t("SquareLibrary",uQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]],Vo=t("SquareM",kQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]],To=t("SquareMenu",fQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]],Fo=t("SquareMinus",MQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mQ=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}]],Bo=t("SquareMousePointer",mQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vQ=[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]],Eo=t("SquareParkingOff",vQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],Oo=t("SquareParking",gQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xQ=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],de=t("SquarePen",xQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _Q=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],Uo=t("SquarePercent",_Q);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]],Go=t("SquarePi",wQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]],Zo=t("SquarePilcrow",LQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]],Wo=t("SquarePlay",CQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Xo=t("SquarePlus",bQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IQ=[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Ko=t("SquarePower",IQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NQ=[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],EM=t("SquareRadical",NQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SQ=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]],Yo=t("SquareScissors",SQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Q=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]],Qo=t("SquareSigma",$Q);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]],Jo=t("SquareSlash",AQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qQ=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],ea=t("SquareSplitHorizontal",qQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PQ=[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],ta=t("SquareSplitVertical",PQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jQ=[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],OM=t("SquareSquare",jQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HQ=[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]],UM=t("SquareStack",HQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zQ=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],oa=t("SquareTerminal",zQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RQ=[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],aa=t("SquareUserRound",RQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]],na=t("SquareUser",DQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],ca=t("SquareX",VQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],GM=t("Square",TQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FQ=[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]],ZM=t("Squircle",FQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BQ=[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]],WM=t("Squirrel",BQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EQ=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]],XM=t("Stamp",EQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OQ=[["path",{d:"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",key:"2ksp49"}]],KM=t("StarHalf",OQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UQ=[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],YM=t("StarOff",UQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GQ=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],QM=t("Star",GQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZQ=[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]],JM=t("StepBack",ZQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WQ=[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]],e9=t("StepForward",WQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XQ=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],t9=t("Stethoscope",XQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KQ=[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]],o9=t("Sticker",KQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YQ=[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]],a9=t("StickyNote",YQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QQ=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],n9=t("Store",QQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JQ=[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]],c9=t("StretchHorizontal",JQ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eJ=[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]],i9=t("StretchVertical",eJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tJ=[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]],r9=t("Strikethrough",tJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oJ=[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]],d9=t("Subscript",oJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aJ=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]],s9=t("SunDim",aJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nJ=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]],h9=t("SunMedium",nJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cJ=[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]],l9=t("SunMoon",cJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iJ=[["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 9a3 3 0 0 0 0 6",key:"gv75dk"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6 1.5-3H22",key:"o5qa3v"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}]],y9=t("SunSnow",iJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rJ=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],p9=t("Sun",rJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dJ=[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],u9=t("Sunrise",dJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sJ=[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]],k9=t("Sunset",sJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hJ=[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]],f9=t("Superscript",hJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lJ=[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h.01",key:"1euzgo"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]],M9=t("SwatchBook",lJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yJ=[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]],m9=t("SwissFranc",yJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pJ=[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]],v9=t("SwitchCamera",pJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uJ=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]],g9=t("Sword",uJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kJ=[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]],x9=t("Swords",kJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fJ=[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]],_9=t("Syringe",fJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MJ=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],w9=t("Table2",MJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mJ=[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],L9=t("TableCellsMerge",mJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vJ=[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],C9=t("TableCellsSplit",vJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gJ=[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]],b9=t("TableColumnsSplit",gJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xJ=[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M21 12h.01",key:"msek7k"}],["path",{d:"M21 18h.01",key:"1e8rq1"}],["path",{d:"M21 6h.01",key:"1koanj"}]],I9=t("TableOfContents",xJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _J=[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],N9=t("TableProperties",_J);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wJ=[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]],S9=t("TableRowsSplit",wJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LJ=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],$9=t("Table",LJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CJ=[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],A9=t("TabletSmartphone",CJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bJ=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],q9=t("Tablet",bJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IJ=[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]],P9=t("Tablets",IJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NJ=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],j9=t("Tag",NJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SJ=[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]],H9=t("Tags",SJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $J=[["path",{d:"M4 4v16",key:"6qkkli"}]],z9=t("Tally1",$J);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AJ=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]],R9=t("Tally2",AJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qJ=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]],D9=t("Tally3",qJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PJ=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]],V9=t("Tally4",PJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jJ=[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]],T9=t("Tally5",jJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HJ=[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]],F9=t("Tangent",HJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zJ=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],B9=t("Target",zJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RJ=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],E9=t("Telescope",RJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DJ=[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]],O9=t("TentTree",DJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VJ=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],U9=t("Tent",VJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TJ=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],G9=t("Terminal",TJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FJ=[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",key:"1ub6xw"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]],ia=t("TestTubeDiagonal",FJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BJ=[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]],Z9=t("TestTube",BJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EJ=[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",key:"1hjrqt"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",key:"16lc8n"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]],W9=t("TestTubes",EJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OJ=[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]],X9=t("TextCursorInput",OJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UJ=[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]],K9=t("TextCursor",UJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GJ=[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]],Y9=t("TextQuote",GJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZJ=[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]],Q9=t("TextSearch",ZJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WJ=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]],ra=t("TextSelect",WJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XJ=[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]],J9=t("Text",XJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KJ=[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]],em=t("Theater",KJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YJ=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"M10.585 15H10",key:"4nqulp"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",key:"yu0u2z"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h2",key:"1bbqgq"}]],tm=t("ThermometerSnowflake",YJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QJ=[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]],om=t("ThermometerSun",QJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JJ=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],am=t("Thermometer",JJ);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eee=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],nm=t("ThumbsDown",eee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tee=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],cm=t("ThumbsUp",tee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oee=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],im=t("TicketCheck",oee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aee=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]],rm=t("TicketMinus",aee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nee=[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],dm=t("TicketPercent",nee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cee=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]],sm=t("TicketPlus",cee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iee=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]],hm=t("TicketSlash",iee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ree=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]],lm=t("TicketX",ree);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dee=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],ym=t("Ticket",dee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const see=[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",key:"16muxl"}],["path",{d:"m12 13.5 3.75.5",key:"1i9qhk"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]],pm=t("TicketsPlane",see);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hee=[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",key:"12lg5p"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]],um=t("Tickets",hee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lee=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]],km=t("TimerOff",lee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yee=[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]],fm=t("TimerReset",yee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pee=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Mm=t("Timer",pee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uee=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]],mm=t("ToggleLeft",uee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kee=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]],vm=t("ToggleRight",kee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fee=[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",key:"kc4kqr"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",key:"1tqs57"}]],gm=t("Toilet",fee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mee=[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]],xm=t("Tornado",Mee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mee=[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]],_m=t("Torus",mee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vee=[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]],wm=t("TouchpadOff",vee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gee=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]],Lm=t("Touchpad",gee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xee=[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]],Cm=t("TowerControl",xee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _ee=[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]],bm=t("ToyBrick",_ee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wee=[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",key:"she1j9"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",key:"1q1ert"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]],Im=t("Tractor",wee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lee=[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]],Nm=t("TrafficCone",Lee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cee=[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]],Sm=t("TrainFrontTunnel",Cee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bee=[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]],$m=t("TrainFront",bee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iee=[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]],Am=t("TrainTrack",Iee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nee=[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],da=t("TramFront",Nee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const See=[["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M14 20h-4",key:"m8m19d"}],["path",{d:"M18 2h4v4",key:"1341mj"}],["path",{d:"m2 2 7.17 7.17",key:"13q8l2"}],["path",{d:"M2 5.355V2h3.357",key:"18136r"}],["path",{d:"m22 2-7.17 7.17",key:"1epvy4"}],["path",{d:"M8 5 5 8",key:"mgbjhz"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]],qm=t("Transgender",See);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $ee=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Pm=t("Trash2",$ee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aee=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]],jm=t("Trash",Aee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qee=[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]],Hm=t("TreeDeciduous",qee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pee=[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]],sa=t("TreePalm",Pee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jee=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]],zm=t("TreePine",jee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hee=[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]],Rm=t("Trees",Hee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zee=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]],Dm=t("Trello",zee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ree=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],Vm=t("TrendingDown",Ree);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dee=[["path",{d:"M14.828 14.828 21 21",key:"ar5fw7"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"m21 3-9 9-4-4-6 6",key:"1h02xo"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}]],Tm=t("TrendingUpDown",Dee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vee=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Fm=t("TrendingUp",Vee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tee=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ee=t("TriangleAlert",Tee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fee=[["path",{d:"M10.17 4.193a2 2 0 0 1 3.666.013",key:"pltmmw"}],["path",{d:"M14 21h2",key:"v4qezv"}],["path",{d:"m15.874 7.743 1 1.732",key:"10m0iw"}],["path",{d:"m18.849 12.952 1 1.732",key:"zadnam"}],["path",{d:"M21.824 18.18a2 2 0 0 1-1.835 2.824",key:"fvwuk4"}],["path",{d:"M4.024 21a2 2 0 0 1-1.839-2.839",key:"1e1kah"}],["path",{d:"m5.136 12.952-1 1.732",key:"1u4ldi"}],["path",{d:"M8 21h2",key:"i9zjee"}],["path",{d:"m8.102 7.743-1 1.732",key:"1zzo4u"}]],Bm=t("TriangleDashed",Fee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bee=[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]],Em=t("TriangleRight",Bee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eee=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],Om=t("Triangle",Eee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oee=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Um=t("Trophy",Oee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uee=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Gm=t("Truck",Uee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gee=[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]],Zm=t("Turtle",Gee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zee=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],Wm=t("TvMinimalPlay",Zee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wee=[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],ha=t("TvMinimal",Wee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xee=[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]],Xm=t("Tv",Xee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kee=[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]],Km=t("Twitch",Kee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yee=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Ym=t("Twitter",Yee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qee=[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",key:"1reda3"}]],Qm=t("TypeOutline",Qee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jee=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],Jm=t("Type",Jee);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1e=[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ev=t("UmbrellaOff",e1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1e=[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]],tv=t("Umbrella",t1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1e=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],ov=t("Underline",o1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1e=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],av=t("Undo2",a1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1e=[["path",{d:"M21 17a9 9 0 0 0-15-6.7L3 13",key:"8mp6z9"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}]],nv=t("UndoDot",n1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1e=[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]],cv=t("Undo",c1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1e=[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]],iv=t("UnfoldHorizontal",i1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1e=[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]],rv=t("UnfoldVertical",r1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1e=[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]],dv=t("Ungroup",d1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1e=[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"1qj5sn"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",key:"11g7fi"}]],la=t("University",s1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1e=[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]],sv=t("Unlink2",h1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1e=[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]],hv=t("Unlink",l1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1e=[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]],lv=t("Unplug",y1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1e=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],yv=t("Upload",p1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1e=[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]],pv=t("Usb",u1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1e=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],uv=t("UserCheck",k1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1e=[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]],kv=t("UserCog",f1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1e=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],fv=t("UserMinus",M1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1e=[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2",key:"15lzij"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}]],Mv=t("UserPen",m1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1e=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],mv=t("UserPlus",v1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1e=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],ya=t("UserRoundCheck",g1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1e=[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]],pa=t("UserRoundCog",x1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1e=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],ua=t("UserRoundMinus",_1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1e=[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487",key:"1c8h7z"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}]],vv=t("UserRoundPen",w1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1e=[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]],ka=t("UserRoundPlus",L1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1e=[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]],gv=t("UserRoundSearch",C1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1e=[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]],fa=t("UserRoundX",b1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1e=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Ma=t("UserRound",I1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1e=[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]],xv=t("UserSearch",N1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1e=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],_v=t("UserX",S1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1e=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],wv=t("User",$1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1e=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],ma=t("UsersRound",A1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1e=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Lv=t("Users",q1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1e=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],va=t("UtensilsCrossed",P1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1e=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],ga=t("Utensils",j1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1e=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]],Cv=t("UtilityPole",H1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1e=[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]],bv=t("Variable",z1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1e=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Iv=t("Vault",R1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1e=[["path",{d:"M16 8q6 0 6-6-6 0-6 6",key:"qsyyc4"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3",key:"41m9h7"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}]],Nv=t("Vegan",D1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1e=[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]],Sv=t("VenetianMask",V1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1e=[["path",{d:"M10 20h4",key:"ni2waw"}],["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M17 2h4v4",key:"vhe59"}],["path",{d:"m21 2-5.46 5.46",key:"19kypf"}],["circle",{cx:"12",cy:"11",r:"5",key:"16gxyc"}]],$v=t("VenusAndMars",T1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1e=[["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M9 19h6",key:"456am0"}],["circle",{cx:"12",cy:"9",r:"6",key:"1nw4tq"}]],Av=t("Venus",F1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1e=[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],qv=t("VibrateOff",B1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1e=[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]],Pv=t("Vibrate",E1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1e=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],jv=t("VideoOff",O1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1e=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Hv=t("Video",U1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1e=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]],zv=t("Videotape",G1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1e=[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]],Rv=t("View",Z1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1e=[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]],Dv=t("Voicemail",W1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1e=[["path",{d:"M11.1 7.1a16.55 16.55 0 0 1 10.9 4",key:"2880wi"}],["path",{d:"M12 12a12.6 12.6 0 0 1-8.7 5",key:"113sja"}],["path",{d:"M16.8 13.6a16.55 16.55 0 0 1-9 7.5",key:"1qmsgl"}],["path",{d:"M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10",key:"1bmeqp"}],["path",{d:"M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5",key:"iekzv9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Vv=t("Volleyball",X1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1e=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]],Tv=t("Volume1",K1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1e=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Fv=t("Volume2",Y1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1e=[["path",{d:"M16 9a5 5 0 0 1 .95 2.293",key:"1fgyg8"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96",key:"l3zxae"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",key:"1gbwow"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686",key:"s2je0y"}]],Bv=t("VolumeOff",Q1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1e=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ev=t("VolumeX",J1e);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ete=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}]],Ov=t("Volume",ete);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tte=[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]],Uv=t("Vote",tte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ote=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]],Gv=t("WalletCards",ote);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ate=[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]],xa=t("WalletMinimal",ate);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nte=[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]],Zv=t("Wallet",nte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cte=[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]],Wv=t("Wallpaper",cte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ite=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],_a=t("WandSparkles",ite);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rte=[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]],Xv=t("Wand",rte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dte=[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]],Kv=t("Warehouse",dte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ste=[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]],Yv=t("WashingMachine",ste);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hte=[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]],Qv=t("Watch",hte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lte=[["path",{d:"M19 5a2 2 0 0 0-2 2v11",key:"s41o68"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}],["path",{d:"M7 13h10",key:"1rwob1"}],["path",{d:"M7 9h10",key:"12czzb"}],["path",{d:"M9 5a2 2 0 0 0-2 2v11",key:"x0q4gh"}]],Jv=t("WavesLadder",lte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yte=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],eg=t("Waves",yte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pte=[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]],tg=t("Waypoints",pte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ute=[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]],og=t("Webcam",ute);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kte=[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ag=t("WebhookOff",kte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fte=[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]],ng=t("Webhook",fte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mte=[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]],cg=t("Weight",Mte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mte=[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],ig=t("WheatOff",mte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vte=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],rg=t("Wheat",vte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gte=[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]],dg=t("WholeWord",gte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xte=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],sg=t("WifiHigh",xte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _te=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],hg=t("WifiLow",_te);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wte=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],lg=t("WifiOff",wte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lte=[["path",{d:"M12 20h.01",key:"zekei9"}]],yg=t("WifiZero",Lte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cte=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],pg=t("Wifi",Cte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bte=[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 4 4-4",key:"k13n16"}]],ug=t("WindArrowDown",bte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ite=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]],kg=t("Wind",Ite);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nte=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]],fg=t("WineOff",Nte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ste=[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]],Mg=t("Wine",Ste);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $te=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],mg=t("Workflow",$te);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ate=[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]],vg=t("Worm",Ate);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qte=[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]],gg=t("WrapText",qte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pte=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],xg=t("Wrench",Pte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jte=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ya=t("X",jte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hte=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],_g=t("Youtube",Hte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zte=[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],wg=t("ZapOff",zte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rte=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Lg=t("Zap",Rte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dte=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Cg=t("ZoomIn",Dte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vte=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],bg=t("ZoomOut",Vte);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tte=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Nn,AArrowUp:Sn,ALargeSmall:$n,Accessibility:An,Activity:qn,AirVent:Pn,Airplay:jn,AlarmClock:zn,AlarmClockCheck:Xe,AlarmClockMinus:Ke,AlarmClockOff:Hn,AlarmClockPlus:Ye,AlarmSmoke:Rn,Album:Dn,AlignCenter:Fn,AlignCenterHorizontal:Vn,AlignCenterVertical:Tn,AlignEndHorizontal:Bn,AlignEndVertical:En,AlignHorizontalDistributeCenter:On,AlignHorizontalDistributeEnd:Un,AlignHorizontalDistributeStart:Gn,AlignHorizontalJustifyCenter:Zn,AlignHorizontalJustifyEnd:Wn,AlignHorizontalJustifyStart:Xn,AlignHorizontalSpaceAround:Kn,AlignHorizontalSpaceBetween:Yn,AlignJustify:Qn,AlignLeft:Jn,AlignRight:e2,AlignStartHorizontal:t2,AlignStartVertical:o2,AlignVerticalDistributeCenter:a2,AlignVerticalDistributeEnd:n2,AlignVerticalDistributeStart:c2,AlignVerticalJustifyCenter:i2,AlignVerticalJustifyEnd:r2,AlignVerticalJustifyStart:d2,AlignVerticalSpaceAround:s2,AlignVerticalSpaceBetween:h2,Ambulance:l2,Ampersand:y2,Ampersands:p2,Amphora:u2,Anchor:k2,Angry:f2,Annoyed:M2,Antenna:m2,Anvil:v2,Aperture:g2,AppWindow:_2,AppWindowMac:x2,Apple:w2,Archive:b2,ArchiveRestore:L2,ArchiveX:C2,Armchair:I2,ArrowBigDown:S2,ArrowBigDownDash:N2,ArrowBigLeft:A2,ArrowBigLeftDash:$2,ArrowBigRight:P2,ArrowBigRightDash:q2,ArrowBigUp:H2,ArrowBigUpDash:j2,ArrowDown:U2,ArrowDown01:z2,ArrowDown10:R2,ArrowDownAZ:Qe,ArrowDownFromLine:D2,ArrowDownLeft:V2,ArrowDownNarrowWide:T2,ArrowDownRight:F2,ArrowDownToDot:B2,ArrowDownToLine:E2,ArrowDownUp:O2,ArrowDownWideNarrow:Je,ArrowDownZA:e1,ArrowLeft:X2,ArrowLeftFromLine:G2,ArrowLeftRight:Z2,ArrowLeftToLine:W2,ArrowRight:J2,ArrowRightFromLine:K2,ArrowRightLeft:Y2,ArrowRightToLine:Q2,ArrowUp:sc,ArrowUp01:ec,ArrowUp10:tc,ArrowUpAZ:t1,ArrowUpDown:oc,ArrowUpFromDot:ac,ArrowUpFromLine:nc,ArrowUpLeft:cc,ArrowUpNarrowWide:o1,ArrowUpRight:ic,ArrowUpToLine:rc,ArrowUpWideNarrow:dc,ArrowUpZA:a1,ArrowsUpFromLine:hc,Asterisk:lc,AtSign:yc,Atom:pc,AudioLines:uc,AudioWaveform:kc,Award:fc,Axe:Mc,Axis3d:n1,Baby:mc,Backpack:vc,Badge:Hc,BadgeAlert:gc,BadgeCent:xc,BadgeCheck:c1,BadgeDollarSign:_c,BadgeEuro:wc,BadgeHelp:Lc,BadgeIndianRupee:Cc,BadgeInfo:bc,BadgeJapaneseYen:Ic,BadgeMinus:Nc,BadgePercent:Sc,BadgePlus:$c,BadgePoundSterling:Ac,BadgeRussianRuble:qc,BadgeSwissFranc:Pc,BadgeX:jc,BaggageClaim:zc,Ban:Rc,Banana:Dc,Bandage:Vc,Banknote:Tc,Barcode:Fc,Baseline:Bc,Bath:Ec,Battery:Kc,BatteryCharging:Oc,BatteryFull:Uc,BatteryLow:Gc,BatteryMedium:Zc,BatteryPlus:Wc,BatteryWarning:Xc,Beaker:Yc,Bean:Jc,BeanOff:Qc,Bed:oi,BedDouble:ei,BedSingle:ti,Beef:ai,Beer:ci,BeerOff:ni,Bell:yi,BellDot:ii,BellElectric:ri,BellMinus:di,BellOff:si,BellPlus:hi,BellRing:li,BetweenHorizontalEnd:i1,BetweenHorizontalStart:r1,BetweenVerticalEnd:pi,BetweenVerticalStart:ui,BicepsFlexed:ki,Bike:fi,Binary:Mi,Binoculars:mi,Biohazard:vi,Bird:gi,Bitcoin:xi,Blend:_i,Blinds:wi,Blocks:Li,Bluetooth:Ni,BluetoothConnected:Ci,BluetoothOff:bi,BluetoothSearching:Ii,Bold:Si,Bolt:$i,Bomb:Ai,Bone:qi,Book:tr,BookA:Pi,BookAudio:ji,BookCheck:Hi,BookCopy:zi,BookDashed:d1,BookDown:Ri,BookHeadphones:Di,BookHeart:Vi,BookImage:Ti,BookKey:Fi,BookLock:Bi,BookMarked:Ei,BookMinus:Oi,BookOpen:Zi,BookOpenCheck:Ui,BookOpenText:Gi,BookPlus:Wi,BookText:Xi,BookType:Ki,BookUp:Qi,BookUp2:Yi,BookUser:Ji,BookX:er,Bookmark:ir,BookmarkCheck:or,BookmarkMinus:ar,BookmarkPlus:nr,BookmarkX:cr,BoomBox:rr,Bot:hr,BotMessageSquare:dr,BotOff:sr,Box:lr,Boxes:yr,Braces:s1,Brackets:pr,Brain:fr,BrainCircuit:ur,BrainCog:kr,BrickWall:Mr,Briefcase:xr,BriefcaseBusiness:mr,BriefcaseConveyorBelt:vr,BriefcaseMedical:gr,BringToFront:_r,Brush:wr,Bug:br,BugOff:Lr,BugPlay:Cr,Building:Nr,Building2:Ir,Bus:$r,BusFront:Sr,Cable:qr,CableCar:Ar,Cake:jr,CakeSlice:Pr,Calculator:Hr,Calendar:o0,Calendar1:zr,CalendarArrowDown:Rr,CalendarArrowUp:Dr,CalendarCheck:Tr,CalendarCheck2:Vr,CalendarClock:Fr,CalendarCog:Br,CalendarDays:Er,CalendarFold:Or,CalendarHeart:Ur,CalendarMinus:Zr,CalendarMinus2:Gr,CalendarOff:Wr,CalendarPlus:Kr,CalendarPlus2:Xr,CalendarRange:Yr,CalendarSearch:Qr,CalendarSync:Jr,CalendarX:t0,CalendarX2:e0,Camera:n0,CameraOff:a0,Candy:r0,CandyCane:c0,CandyOff:i0,Cannabis:d0,Captions:h1,CaptionsOff:s0,Car:y0,CarFront:h0,CarTaxiFront:l0,Caravan:p0,Carrot:u0,CaseLower:k0,CaseSensitive:f0,CaseUpper:M0,CassetteTape:m0,Cast:v0,Castle:g0,Cat:x0,Cctv:_0,ChartArea:l1,ChartBar:p1,ChartBarBig:y1,ChartBarDecreasing:w0,ChartBarIncreasing:L0,ChartBarStacked:C0,ChartCandlestick:u1,ChartColumn:M1,ChartColumnBig:k1,ChartColumnDecreasing:b0,ChartColumnIncreasing:f1,ChartColumnStacked:I0,ChartGantt:N0,ChartLine:m1,ChartNetwork:S0,ChartNoAxesColumn:g1,ChartNoAxesColumnDecreasing:$0,ChartNoAxesColumnIncreasing:v1,ChartNoAxesCombined:A0,ChartNoAxesGantt:x1,ChartPie:_1,ChartScatter:w1,ChartSpline:q0,Check:_n,CheckCheck:P0,ChefHat:j0,Cherry:H0,ChevronDown:z0,ChevronFirst:R0,ChevronLast:D0,ChevronLeft:V0,ChevronRight:Da,ChevronUp:T0,ChevronsDown:B0,ChevronsDownUp:F0,ChevronsLeft:U0,ChevronsLeftRight:O0,ChevronsLeftRightEllipsis:E0,ChevronsRight:Z0,ChevronsRightLeft:G0,ChevronsUp:W0,ChevronsUpDown:Za,Chrome:X0,Church:K0,Cigarette:Q0,CigaretteOff:Y0,Circle:Va,CircleAlert:L1,CircleArrowDown:C1,CircleArrowLeft:b1,CircleArrowOutDownLeft:I1,CircleArrowOutDownRight:N1,CircleArrowOutUpLeft:S1,CircleArrowOutUpRight:$1,CircleArrowRight:A1,CircleArrowUp:q1,CircleCheck:Te,CircleCheckBig:P1,CircleChevronDown:j1,CircleChevronLeft:H1,CircleChevronRight:z1,CircleChevronUp:R1,CircleDashed:J0,CircleDivide:D1,CircleDollarSign:ed,CircleDot:od,CircleDotDashed:td,CircleEllipsis:ad,CircleEqual:nd,CircleFadingArrowUp:cd,CircleFadingPlus:id,CircleGauge:V1,CircleHelp:T1,CircleMinus:F1,CircleOff:rd,CircleParking:E1,CircleParkingOff:B1,CirclePause:O1,CirclePercent:U1,CirclePlay:G1,CirclePlus:Z1,CirclePower:W1,CircleSlash:dd,CircleSlash2:X1,CircleSmall:sd,CircleStop:K1,CircleUser:Q1,CircleUserRound:Y1,CircleX:J1,CircuitBoard:hd,Citrus:ld,Clapperboard:yd,Clipboard:xd,ClipboardCheck:pd,ClipboardCopy:ud,ClipboardList:kd,ClipboardMinus:fd,ClipboardPaste:Md,ClipboardPen:tt,ClipboardPenLine:et,ClipboardPlus:md,ClipboardType:vd,ClipboardX:gd,Clock:Rd,Clock1:_d,Clock10:wd,Clock11:Ld,Clock12:Cd,Clock2:bd,Clock3:Id,Clock4:Nd,Clock5:Sd,Clock6:$d,Clock7:Ad,Clock8:qd,Clock9:Pd,ClockAlert:jd,ClockArrowDown:Hd,ClockArrowUp:zd,Cloud:Qd,CloudAlert:Dd,CloudCog:Vd,CloudDownload:ot,CloudDrizzle:Td,CloudFog:Fd,CloudHail:Bd,CloudLightning:Ed,CloudMoon:Ud,CloudMoonRain:Od,CloudOff:Gd,CloudRain:Wd,CloudRainWind:Zd,CloudSnow:Xd,CloudSun:Yd,CloudSunRain:Kd,CloudUpload:at,Cloudy:Jd,Clover:es,Club:ts,Code:os,CodeXml:nt,Codepen:as,Codesandbox:ns,Coffee:cs,Cog:is,Coins:rs,Columns2:ct,Columns3:it,Columns4:ds,Combine:ss,Command:hs,Compass:ls,Component:ys,Computer:ps,ConciergeBell:us,Cone:ks,Construction:fs,Contact:Ms,ContactRound:rt,Container:ms,Contrast:vs,Cookie:gs,CookingPot:xs,Copy:Is,CopyCheck:_s,CopyMinus:ws,CopyPlus:Ls,CopySlash:Cs,CopyX:bs,Copyleft:Ns,Copyright:Ss,CornerDownLeft:$s,CornerDownRight:As,CornerLeftDown:qs,CornerLeftUp:Ps,CornerRightDown:js,CornerRightUp:Hs,CornerUpLeft:zs,CornerUpRight:Rs,Cpu:Ds,CreativeCommons:Vs,CreditCard:Ts,Croissant:Fs,Crop:Bs,Cross:Es,Crosshair:Os,Crown:Us,Cuboid:Gs,CupSoda:Zs,Currency:Ws,Cylinder:Xs,Dam:Ks,Database:Js,DatabaseBackup:Ys,DatabaseZap:Qs,Delete:eh,Dessert:th,Diameter:oh,Diamond:ch,DiamondMinus:ah,DiamondPercent:dt,DiamondPlus:nh,Dice1:ih,Dice2:rh,Dice3:dh,Dice4:sh,Dice5:hh,Dice6:lh,Dices:yh,Diff:ph,Disc:Mh,Disc2:uh,Disc3:kh,DiscAlbum:fh,Divide:mh,Dna:gh,DnaOff:vh,Dock:xh,Dog:_h,DollarSign:wh,Donut:Lh,DoorClosed:Ch,DoorOpen:bh,Dot:Ih,Download:Nh,DraftingCompass:Sh,Drama:$h,Dribbble:Ah,Drill:qh,Droplet:jh,DropletOff:Ph,Droplets:Hh,Drum:zh,Drumstick:Rh,Dumbbell:Dh,Ear:Th,EarOff:Vh,Earth:st,EarthLock:Fh,Eclipse:Bh,Egg:Uh,EggFried:Eh,EggOff:Oh,Ellipsis:lt,EllipsisVertical:ht,Equal:Wh,EqualApproximately:Gh,EqualNot:Zh,Eraser:Xh,EthernetPort:Kh,Euro:Yh,Expand:Qh,ExternalLink:Jh,Eye:ol,EyeClosed:el,EyeOff:tl,Facebook:al,Factory:nl,Fan:cl,FastForward:il,Feather:rl,Fence:dl,FerrisWheel:sl,Figma:hl,File:ry,FileArchive:ll,FileAudio:pl,FileAudio2:yl,FileAxis3d:yt,FileBadge:kl,FileBadge2:ul,FileBox:fl,FileChartColumn:ut,FileChartColumnIncreasing:pt,FileChartLine:kt,FileChartPie:ft,FileCheck:ml,FileCheck2:Ml,FileClock:vl,FileCode:xl,FileCode2:gl,FileCog:Mt,FileDiff:_l,FileDigit:wl,FileDown:Ll,FileHeart:Cl,FileImage:bl,FileInput:Il,FileJson:Sl,FileJson2:Nl,FileKey:Al,FileKey2:$l,FileLock:Pl,FileLock2:ql,FileMinus:Hl,FileMinus2:jl,FileMusic:zl,FileOutput:Rl,FilePen:vt,FilePenLine:mt,FilePlus:Vl,FilePlus2:Dl,FileQuestion:Tl,FileScan:Fl,FileSearch:El,FileSearch2:Bl,FileSliders:Ol,FileSpreadsheet:Ul,FileStack:Gl,FileSymlink:Zl,FileTerminal:Wl,FileText:Xl,FileType:Yl,FileType2:Kl,FileUp:Ql,FileUser:Jl,FileVideo:ty,FileVideo2:ey,FileVolume:ay,FileVolume2:oy,FileWarning:ny,FileX:iy,FileX2:cy,Files:dy,Film:sy,Filter:ly,FilterX:hy,Fingerprint:yy,FireExtinguisher:py,Fish:fy,FishOff:uy,FishSymbol:ky,Flag:gy,FlagOff:My,FlagTriangleLeft:my,FlagTriangleRight:vy,Flame:_y,FlameKindling:xy,Flashlight:Ly,FlashlightOff:wy,FlaskConical:by,FlaskConicalOff:Cy,FlaskRound:Iy,FlipHorizontal:Sy,FlipHorizontal2:Ny,FlipVertical:Ay,FlipVertical2:$y,Flower:Py,Flower2:qy,Focus:jy,FoldHorizontal:Hy,FoldVertical:zy,Folder:hp,FolderArchive:Ry,FolderCheck:Dy,FolderClock:Vy,FolderClosed:Ty,FolderCode:Fy,FolderCog:gt,FolderDot:By,FolderDown:Ey,FolderGit:Uy,FolderGit2:Oy,FolderHeart:Gy,FolderInput:Zy,FolderKanban:Wy,FolderKey:Xy,FolderLock:Ky,FolderMinus:Yy,FolderOpen:Jy,FolderOpenDot:Qy,FolderOutput:ep,FolderPen:xt,FolderPlus:tp,FolderRoot:op,FolderSearch:np,FolderSearch2:ap,FolderSymlink:cp,FolderSync:ip,FolderTree:rp,FolderUp:dp,FolderX:sp,Folders:lp,Footprints:yp,Forklift:pp,Forward:up,Frame:kp,Framer:fp,Frown:Mp,Fuel:mp,Fullscreen:vp,GalleryHorizontal:xp,GalleryHorizontalEnd:gp,GalleryThumbnails:_p,GalleryVertical:Lp,GalleryVerticalEnd:wp,Gamepad:bp,Gamepad2:Cp,Gauge:Ip,Gavel:Np,Gem:Sp,Ghost:$p,Gift:Ap,GitBranch:Pp,GitBranchPlus:qp,GitCommitHorizontal:_t,GitCommitVertical:jp,GitCompare:zp,GitCompareArrows:Hp,GitFork:Rp,GitGraph:Dp,GitMerge:Vp,GitPullRequest:Up,GitPullRequestArrow:Tp,GitPullRequestClosed:Fp,GitPullRequestCreate:Ep,GitPullRequestCreateArrow:Bp,GitPullRequestDraft:Op,Github:Gp,Gitlab:Zp,GlassWater:Wp,Glasses:Xp,Globe:Yp,GlobeLock:Kp,Goal:Qp,Grab:Jp,GraduationCap:eu,Grape:tu,Grid2x2:bt,Grid2x2Check:wt,Grid2x2Plus:Lt,Grid2x2X:Ct,Grid3x3:_e,Grip:nu,GripHorizontal:ou,GripVertical:au,Group:cu,Guitar:iu,Ham:ru,Hammer:du,Hand:pu,HandCoins:su,HandHeart:hu,HandHelping:It,HandMetal:lu,HandPlatter:yu,Handshake:uu,HardDrive:Mu,HardDriveDownload:ku,HardDriveUpload:fu,HardHat:mu,Hash:vu,Haze:gu,HdmiPort:xu,Heading:Nu,Heading1:_u,Heading2:wu,Heading3:Lu,Heading4:Cu,Heading5:bu,Heading6:Iu,HeadphoneOff:Su,Headphones:$u,Headset:Au,Heart:zu,HeartCrack:qu,HeartHandshake:Pu,HeartOff:ju,HeartPulse:Hu,Heater:Ru,Hexagon:Du,Highlighter:Vu,History:Tu,Hop:Bu,HopOff:Fu,Hospital:Eu,Hotel:Ou,Hourglass:Uu,House:Nt,HousePlug:Gu,HousePlus:Zu,HouseWifi:Wu,IceCreamBowl:St,IceCreamCone:$t,IdCard:Xu,Image:a4,ImageDown:Ku,ImageMinus:Yu,ImageOff:Qu,ImagePlay:Ju,ImagePlus:e4,ImageUp:t4,ImageUpscale:o4,Images:n4,Import:c4,Inbox:i4,IndentDecrease:At,IndentIncrease:qt,IndianRupee:r4,Infinity:d4,Info:Wa,InspectionPanel:s4,Instagram:h4,Italic:l4,IterationCcw:y4,IterationCw:p4,JapaneseYen:u4,Joystick:k4,Kanban:f4,Key:v4,KeyRound:M4,KeySquare:m4,Keyboard:_4,KeyboardMusic:g4,KeyboardOff:x4,Lamp:N4,LampCeiling:w4,LampDesk:L4,LampFloor:C4,LampWallDown:b4,LampWallUp:I4,LandPlot:S4,Landmark:$4,Languages:A4,Laptop:P4,LaptopMinimal:Pt,LaptopMinimalCheck:q4,Lasso:H4,LassoSelect:j4,Laugh:z4,Layers:jt,Layers2:R4,LayoutDashboard:D4,LayoutGrid:V4,LayoutList:T4,LayoutPanelLeft:F4,LayoutPanelTop:B4,LayoutTemplate:E4,Leaf:O4,LeafyGreen:U4,Lectern:G4,LetterText:Z4,Library:X4,LibraryBig:W4,LifeBuoy:K4,Ligature:Y4,Lightbulb:J4,LightbulbOff:Q4,Link:ok,Link2:tk,Link2Off:ek,Linkedin:ak,List:gk,ListCheck:nk,ListChecks:ck,ListCollapse:ik,ListEnd:rk,ListFilter:sk,ListFilterPlus:dk,ListMinus:hk,ListMusic:lk,ListOrdered:yk,ListPlus:pk,ListRestart:uk,ListStart:kk,ListTodo:fk,ListTree:Mk,ListVideo:mk,ListX:vk,Loader:_k,LoaderCircle:Ve,LoaderPinwheel:xk,Locate:Ck,LocateFixed:wk,LocateOff:Lk,Lock:Ik,LockKeyhole:bk,LockKeyholeOpen:Ht,LockOpen:zt,LogIn:wn,LogOut:Xa,Logs:Nk,Lollipop:Sk,Luggage:$k,Magnet:Ak,Mail:Tk,MailCheck:qk,MailMinus:Pk,MailOpen:jk,MailPlus:Hk,MailQuestion:zk,MailSearch:Rk,MailWarning:Dk,MailX:Vk,Mailbox:Fk,Mails:Bk,Map:o5,MapPin:Jk,MapPinCheck:Ok,MapPinCheckInside:Ek,MapPinHouse:Uk,MapPinMinus:Zk,MapPinMinusInside:Gk,MapPinOff:Wk,MapPinPlus:Kk,MapPinPlusInside:Xk,MapPinX:Qk,MapPinXInside:Yk,MapPinned:e5,MapPlus:t5,Mars:n5,MarsStroke:a5,Martini:c5,Maximize:r5,Maximize2:i5,Medal:d5,Megaphone:h5,MegaphoneOff:s5,Meh:l5,MemoryStick:y5,Menu:p5,Merge:u5,MessageCircle:C5,MessageCircleCode:k5,MessageCircleDashed:f5,MessageCircleHeart:M5,MessageCircleMore:m5,MessageCircleOff:v5,MessageCirclePlus:g5,MessageCircleQuestion:x5,MessageCircleReply:_5,MessageCircleWarning:w5,MessageCircleX:L5,MessageSquare:F5,MessageSquareCode:b5,MessageSquareDashed:I5,MessageSquareDiff:N5,MessageSquareDot:S5,MessageSquareHeart:$5,MessageSquareLock:A5,MessageSquareMore:q5,MessageSquareOff:P5,MessageSquarePlus:j5,MessageSquareQuote:H5,MessageSquareReply:z5,MessageSquareShare:R5,MessageSquareText:D5,MessageSquareWarning:V5,MessageSquareX:T5,MessagesSquare:B5,Mic:O5,MicOff:E5,MicVocal:Rt,Microchip:U5,Microscope:G5,Microwave:Z5,Milestone:W5,Milk:K5,MilkOff:X5,Minimize:Q5,Minimize2:Y5,Minus:Ln,Monitor:l3,MonitorCheck:J5,MonitorCog:e3,MonitorDot:t3,MonitorDown:o3,MonitorOff:a3,MonitorPause:n3,MonitorPlay:c3,MonitorSmartphone:i3,MonitorSpeaker:r3,MonitorStop:d3,MonitorUp:s3,MonitorX:h3,Moon:p3,MoonStar:y3,Mountain:k3,MountainSnow:u3,Mouse:x3,MouseOff:f3,MousePointer:g3,MousePointer2:M3,MousePointerBan:m3,MousePointerClick:v3,Move:j3,Move3d:Dt,MoveDiagonal:w3,MoveDiagonal2:_3,MoveDown:b3,MoveDownLeft:L3,MoveDownRight:C3,MoveHorizontal:I3,MoveLeft:N3,MoveRight:S3,MoveUp:q3,MoveUpLeft:$3,MoveUpRight:A3,MoveVertical:P3,Music:D3,Music2:H3,Music3:z3,Music4:R3,Navigation:B3,Navigation2:T3,Navigation2Off:V3,NavigationOff:F3,Network:E3,Newspaper:O3,Nfc:U3,NonBinary:G3,Notebook:K3,NotebookPen:Z3,NotebookTabs:W3,NotebookText:X3,NotepadText:Q3,NotepadTextDashed:Y3,Nut:e6,NutOff:J3,Octagon:o6,OctagonAlert:Vt,OctagonMinus:t6,OctagonPause:Tt,OctagonX:Fe,Omega:a6,Option:n6,Orbit:c6,Origami:i6,Package:u6,Package2:r6,PackageCheck:d6,PackageMinus:s6,PackageOpen:h6,PackagePlus:l6,PackageSearch:y6,PackageX:p6,PaintBucket:k6,PaintRoller:f6,Paintbrush:M6,PaintbrushVertical:Ft,Palette:m6,PanelBottom:x6,PanelBottomClose:v6,PanelBottomDashed:Bt,PanelBottomOpen:g6,PanelLeft:Be,PanelLeftClose:Et,PanelLeftDashed:Ot,PanelLeftOpen:Ut,PanelRight:L6,PanelRightClose:_6,PanelRightDashed:Gt,PanelRightOpen:w6,PanelTop:I6,PanelTopClose:C6,PanelTopDashed:Zt,PanelTopOpen:b6,PanelsLeftBottom:N6,PanelsRightBottom:S6,PanelsTopLeft:Wt,Paperclip:$6,Parentheses:A6,ParkingMeter:q6,PartyPopper:P6,Pause:j6,PawPrint:H6,PcCase:z6,Pen:Kt,PenLine:Xt,PenOff:R6,PenTool:D6,Pencil:B6,PencilLine:V6,PencilOff:T6,PencilRuler:F6,Pentagon:E6,Percent:O6,PersonStanding:U6,PhilippinePeso:G6,Phone:J6,PhoneCall:Z6,PhoneForwarded:W6,PhoneIncoming:X6,PhoneMissed:K6,PhoneOff:Y6,PhoneOutgoing:Q6,Pi:e8,Piano:t8,Pickaxe:o8,PictureInPicture:n8,PictureInPicture2:a8,PiggyBank:c8,Pilcrow:d8,PilcrowLeft:i8,PilcrowRight:r8,Pill:h8,PillBottle:s8,Pin:y8,PinOff:l8,Pipette:p8,Pizza:u8,Plane:M8,PlaneLanding:k8,PlaneTakeoff:f8,Play:m8,Plug:g8,Plug2:v8,PlugZap:Yt,Plus:x8,Pocket:w8,PocketKnife:_8,Podcast:L8,Pointer:b8,PointerOff:C8,Popcorn:I8,Popsicle:N8,PoundSterling:S8,Power:A8,PowerOff:$8,Presentation:q8,Printer:j8,PrinterCheck:P8,Projector:H8,Proportions:z8,Puzzle:R8,Pyramid:D8,QrCode:V8,Quote:T8,Rabbit:F8,Radar:B8,Radiation:E8,Radical:O8,Radio:Z8,RadioReceiver:U8,RadioTower:G8,Radius:W8,RailSymbol:X8,Rainbow:K8,Rat:Y8,Ratio:Q8,Receipt:r7,ReceiptCent:J8,ReceiptEuro:e7,ReceiptIndianRupee:t7,ReceiptJapaneseYen:o7,ReceiptPoundSterling:a7,ReceiptRussianRuble:n7,ReceiptSwissFranc:c7,ReceiptText:i7,RectangleEllipsis:Qt,RectangleHorizontal:d7,RectangleVertical:s7,Recycle:h7,Redo:p7,Redo2:l7,RedoDot:y7,RefreshCcw:k7,RefreshCcwDot:u7,RefreshCw:M7,RefreshCwOff:f7,Refrigerator:m7,Regex:v7,RemoveFormatting:g7,Repeat:w7,Repeat1:x7,Repeat2:_7,Replace:C7,ReplaceAll:L7,Reply:I7,ReplyAll:b7,Rewind:N7,Ribbon:S7,Rocket:$7,RockingChair:A7,RollerCoaster:q7,Rotate3d:Jt,RotateCcw:j7,RotateCcwSquare:P7,RotateCw:z7,RotateCwSquare:H7,Route:D7,RouteOff:R7,Router:V7,Rows2:eo,Rows3:to,Rows4:T7,Rss:F7,Ruler:B7,RussianRuble:E7,Sailboat:O7,Salad:U7,Sandwich:G7,Satellite:W7,SatelliteDish:Z7,Save:Y7,SaveAll:X7,SaveOff:K7,Scale:Q7,Scale3d:oo,Scaling:J7,Scan:sf,ScanBarcode:ef,ScanEye:tf,ScanFace:of,ScanHeart:af,ScanLine:nf,ScanQrCode:cf,ScanSearch:rf,ScanText:df,School:hf,Scissors:yf,ScissorsLineDashed:lf,ScreenShare:uf,ScreenShareOff:pf,Scroll:ff,ScrollText:kf,Search:xf,SearchCheck:Mf,SearchCode:mf,SearchSlash:vf,SearchX:gf,Section:_f,Send:Lf,SendHorizontal:ao,SendToBack:wf,SeparatorHorizontal:Cf,SeparatorVertical:bf,Server:$f,ServerCog:If,ServerCrash:Nf,ServerOff:Sf,Settings:Ka,Settings2:Af,Shapes:qf,Share:jf,Share2:Pf,Sheet:Hf,Shell:zf,Shield:Gf,ShieldAlert:Rf,ShieldBan:Df,ShieldCheck:Vf,ShieldEllipsis:Tf,ShieldHalf:Ff,ShieldMinus:Bf,ShieldOff:Ef,ShieldPlus:Of,ShieldQuestion:Uf,ShieldX:no,Ship:Wf,ShipWheel:Zf,Shirt:Xf,ShoppingBag:Kf,ShoppingBasket:Yf,ShoppingCart:Qf,Shovel:Jf,ShowerHead:eM,Shrink:tM,Shrub:oM,Shuffle:aM,Sigma:nM,Signal:sM,SignalHigh:cM,SignalLow:iM,SignalMedium:rM,SignalZero:dM,Signature:hM,Signpost:yM,SignpostBig:lM,Siren:pM,SkipBack:uM,SkipForward:kM,Skull:fM,Slack:MM,Slash:mM,Slice:vM,SlidersHorizontal:gM,SlidersVertical:co,Smartphone:wM,SmartphoneCharging:xM,SmartphoneNfc:_M,Smile:CM,SmilePlus:LM,Snail:bM,Snowflake:IM,Sofa:NM,Soup:SM,Space:$M,Spade:AM,Sparkle:qM,Sparkles:io,Speaker:PM,Speech:jM,SpellCheck:zM,SpellCheck2:HM,Spline:RM,Split:DM,SprayCan:VM,Sprout:TM,Square:GM,SquareActivity:ro,SquareArrowDown:lo,SquareArrowDownLeft:so,SquareArrowDownRight:ho,SquareArrowLeft:yo,SquareArrowOutDownLeft:po,SquareArrowOutDownRight:uo,SquareArrowOutUpLeft:ko,SquareArrowOutUpRight:fo,SquareArrowRight:Mo,SquareArrowUp:go,SquareArrowUpLeft:mo,SquareArrowUpRight:vo,SquareAsterisk:xo,SquareBottomDashedScissors:_o,SquareChartGantt:we,SquareCheck:Lo,SquareCheckBig:wo,SquareChevronDown:Co,SquareChevronLeft:bo,SquareChevronRight:Io,SquareChevronUp:No,SquareCode:So,SquareDashed:qo,SquareDashedBottom:BM,SquareDashedBottomCode:FM,SquareDashedKanban:$o,SquareDashedMousePointer:Ao,SquareDivide:Po,SquareDot:jo,SquareEqual:Ho,SquareFunction:zo,SquareKanban:Ro,SquareLibrary:Do,SquareM:Vo,SquareMenu:To,SquareMinus:Fo,SquareMousePointer:Bo,SquareParking:Oo,SquareParkingOff:Eo,SquarePen:de,SquarePercent:Uo,SquarePi:Go,SquarePilcrow:Zo,SquarePlay:Wo,SquarePlus:Xo,SquarePower:Ko,SquareRadical:EM,SquareScissors:Yo,SquareSigma:Qo,SquareSlash:Jo,SquareSplitHorizontal:ea,SquareSplitVertical:ta,SquareSquare:OM,SquareStack:UM,SquareTerminal:oa,SquareUser:na,SquareUserRound:aa,SquareX:ca,Squircle:ZM,Squirrel:WM,Stamp:XM,Star:QM,StarHalf:KM,StarOff:YM,StepBack:JM,StepForward:e9,Stethoscope:t9,Sticker:o9,StickyNote:a9,Store:n9,StretchHorizontal:c9,StretchVertical:i9,Strikethrough:r9,Subscript:d9,Sun:p9,SunDim:s9,SunMedium:h9,SunMoon:l9,SunSnow:y9,Sunrise:u9,Sunset:k9,Superscript:f9,SwatchBook:M9,SwissFranc:m9,SwitchCamera:v9,Sword:g9,Swords:x9,Syringe:_9,Table:$9,Table2:w9,TableCellsMerge:L9,TableCellsSplit:C9,TableColumnsSplit:b9,TableOfContents:I9,TableProperties:N9,TableRowsSplit:S9,Tablet:q9,TabletSmartphone:A9,Tablets:P9,Tag:j9,Tags:H9,Tally1:z9,Tally2:R9,Tally3:D9,Tally4:V9,Tally5:T9,Tangent:F9,Target:B9,Telescope:E9,Tent:U9,TentTree:O9,Terminal:G9,TestTube:Z9,TestTubeDiagonal:ia,TestTubes:W9,Text:J9,TextCursor:K9,TextCursorInput:X9,TextQuote:Y9,TextSearch:Q9,TextSelect:ra,Theater:em,Thermometer:am,ThermometerSnowflake:tm,ThermometerSun:om,ThumbsDown:nm,ThumbsUp:cm,Ticket:ym,TicketCheck:im,TicketMinus:rm,TicketPercent:dm,TicketPlus:sm,TicketSlash:hm,TicketX:lm,Tickets:um,TicketsPlane:pm,Timer:Mm,TimerOff:km,TimerReset:fm,ToggleLeft:mm,ToggleRight:vm,Toilet:gm,Tornado:xm,Torus:_m,Touchpad:Lm,TouchpadOff:wm,TowerControl:Cm,ToyBrick:bm,Tractor:Im,TrafficCone:Nm,TrainFront:$m,TrainFrontTunnel:Sm,TrainTrack:Am,TramFront:da,Transgender:qm,Trash:jm,Trash2:Pm,TreeDeciduous:Hm,TreePalm:sa,TreePine:zm,Trees:Rm,Trello:Dm,TrendingDown:Vm,TrendingUp:Fm,TrendingUpDown:Tm,Triangle:Om,TriangleAlert:Ee,TriangleDashed:Bm,TriangleRight:Em,Trophy:Um,Truck:Gm,Turtle:Zm,Tv:Xm,TvMinimal:ha,TvMinimalPlay:Wm,Twitch:Km,Twitter:Ym,Type:Jm,TypeOutline:Qm,Umbrella:tv,UmbrellaOff:ev,Underline:ov,Undo:cv,Undo2:av,UndoDot:nv,UnfoldHorizontal:iv,UnfoldVertical:rv,Ungroup:dv,University:la,Unlink:hv,Unlink2:sv,Unplug:lv,Upload:yv,Usb:pv,User:wv,UserCheck:uv,UserCog:kv,UserMinus:fv,UserPen:Mv,UserPlus:mv,UserRound:Ma,UserRoundCheck:ya,UserRoundCog:pa,UserRoundMinus:ua,UserRoundPen:vv,UserRoundPlus:ka,UserRoundSearch:gv,UserRoundX:fa,UserSearch:xv,UserX:_v,Users:Lv,UsersRound:ma,Utensils:ga,UtensilsCrossed:va,UtilityPole:Cv,Variable:bv,Vault:Iv,Vegan:Nv,VenetianMask:Sv,Venus:Av,VenusAndMars:$v,Vibrate:Pv,VibrateOff:qv,Video:Hv,VideoOff:jv,Videotape:zv,View:Rv,Voicemail:Dv,Volleyball:Vv,Volume:Ov,Volume1:Tv,Volume2:Fv,VolumeOff:Bv,VolumeX:Ev,Vote:Uv,Wallet:Zv,WalletCards:Gv,WalletMinimal:xa,Wallpaper:Wv,Wand:Xv,WandSparkles:_a,Warehouse:Kv,WashingMachine:Yv,Watch:Qv,Waves:eg,WavesLadder:Jv,Waypoints:tg,Webcam:og,Webhook:ng,WebhookOff:ag,Weight:cg,Wheat:rg,WheatOff:ig,WholeWord:dg,Wifi:pg,WifiHigh:sg,WifiLow:hg,WifiOff:lg,WifiZero:yg,Wind:kg,WindArrowDown:ug,Wine:Mg,WineOff:fg,Workflow:mg,Worm:vg,WrapText:gg,Wrench:xg,X:Ya,Youtube:_g,Zap:Lg,ZapOff:wg,ZoomIn:Cg,ZoomOut:bg},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Nn,AArrowDownIcon:Nn,AArrowUp:Sn,AArrowUpIcon:Sn,ALargeSmall:$n,ALargeSmallIcon:$n,Accessibility:An,AccessibilityIcon:An,Activity:qn,ActivityIcon:qn,ActivitySquare:ro,ActivitySquareIcon:ro,AirVent:Pn,AirVentIcon:Pn,Airplay:jn,AirplayIcon:jn,AlarmCheck:Xe,AlarmCheckIcon:Xe,AlarmClock:zn,AlarmClockCheck:Xe,AlarmClockCheckIcon:Xe,AlarmClockIcon:zn,AlarmClockMinus:Ke,AlarmClockMinusIcon:Ke,AlarmClockOff:Hn,AlarmClockOffIcon:Hn,AlarmClockPlus:Ye,AlarmClockPlusIcon:Ye,AlarmMinus:Ke,AlarmMinusIcon:Ke,AlarmPlus:Ye,AlarmPlusIcon:Ye,AlarmSmoke:Rn,AlarmSmokeIcon:Rn,Album:Dn,AlbumIcon:Dn,AlertCircle:L1,AlertCircleIcon:L1,AlertOctagon:Vt,AlertOctagonIcon:Vt,AlertTriangle:Ee,AlertTriangleIcon:Ee,AlignCenter:Fn,AlignCenterHorizontal:Vn,AlignCenterHorizontalIcon:Vn,AlignCenterIcon:Fn,AlignCenterVertical:Tn,AlignCenterVerticalIcon:Tn,AlignEndHorizontal:Bn,AlignEndHorizontalIcon:Bn,AlignEndVertical:En,AlignEndVerticalIcon:En,AlignHorizontalDistributeCenter:On,AlignHorizontalDistributeCenterIcon:On,AlignHorizontalDistributeEnd:Un,AlignHorizontalDistributeEndIcon:Un,AlignHorizontalDistributeStart:Gn,AlignHorizontalDistributeStartIcon:Gn,AlignHorizontalJustifyCenter:Zn,AlignHorizontalJustifyCenterIcon:Zn,AlignHorizontalJustifyEnd:Wn,AlignHorizontalJustifyEndIcon:Wn,AlignHorizontalJustifyStart:Xn,AlignHorizontalJustifyStartIcon:Xn,AlignHorizontalSpaceAround:Kn,AlignHorizontalSpaceAroundIcon:Kn,AlignHorizontalSpaceBetween:Yn,AlignHorizontalSpaceBetweenIcon:Yn,AlignJustify:Qn,AlignJustifyIcon:Qn,AlignLeft:Jn,AlignLeftIcon:Jn,AlignRight:e2,AlignRightIcon:e2,AlignStartHorizontal:t2,AlignStartHorizontalIcon:t2,AlignStartVertical:o2,AlignStartVerticalIcon:o2,AlignVerticalDistributeCenter:a2,AlignVerticalDistributeCenterIcon:a2,AlignVerticalDistributeEnd:n2,AlignVerticalDistributeEndIcon:n2,AlignVerticalDistributeStart:c2,AlignVerticalDistributeStartIcon:c2,AlignVerticalJustifyCenter:i2,AlignVerticalJustifyCenterIcon:i2,AlignVerticalJustifyEnd:r2,AlignVerticalJustifyEndIcon:r2,AlignVerticalJustifyStart:d2,AlignVerticalJustifyStartIcon:d2,AlignVerticalSpaceAround:s2,AlignVerticalSpaceAroundIcon:s2,AlignVerticalSpaceBetween:h2,AlignVerticalSpaceBetweenIcon:h2,Ambulance:l2,AmbulanceIcon:l2,Ampersand:y2,AmpersandIcon:y2,Ampersands:p2,AmpersandsIcon:p2,Amphora:u2,AmphoraIcon:u2,Anchor:k2,AnchorIcon:k2,Angry:f2,AngryIcon:f2,Annoyed:M2,AnnoyedIcon:M2,Antenna:m2,AntennaIcon:m2,Anvil:v2,AnvilIcon:v2,Aperture:g2,ApertureIcon:g2,AppWindow:_2,AppWindowIcon:_2,AppWindowMac:x2,AppWindowMacIcon:x2,Apple:w2,AppleIcon:w2,Archive:b2,ArchiveIcon:b2,ArchiveRestore:L2,ArchiveRestoreIcon:L2,ArchiveX:C2,ArchiveXIcon:C2,AreaChart:l1,AreaChartIcon:l1,Armchair:I2,ArmchairIcon:I2,ArrowBigDown:S2,ArrowBigDownDash:N2,ArrowBigDownDashIcon:N2,ArrowBigDownIcon:S2,ArrowBigLeft:A2,ArrowBigLeftDash:$2,ArrowBigLeftDashIcon:$2,ArrowBigLeftIcon:A2,ArrowBigRight:P2,ArrowBigRightDash:q2,ArrowBigRightDashIcon:q2,ArrowBigRightIcon:P2,ArrowBigUp:H2,ArrowBigUpDash:j2,ArrowBigUpDashIcon:j2,ArrowBigUpIcon:H2,ArrowDown:U2,ArrowDown01:z2,ArrowDown01Icon:z2,ArrowDown10:R2,ArrowDown10Icon:R2,ArrowDownAZ:Qe,ArrowDownAZIcon:Qe,ArrowDownAz:Qe,ArrowDownAzIcon:Qe,ArrowDownCircle:C1,ArrowDownCircleIcon:C1,ArrowDownFromLine:D2,ArrowDownFromLineIcon:D2,ArrowDownIcon:U2,ArrowDownLeft:V2,ArrowDownLeftFromCircle:I1,ArrowDownLeftFromCircleIcon:I1,ArrowDownLeftFromSquare:po,ArrowDownLeftFromSquareIcon:po,ArrowDownLeftIcon:V2,ArrowDownLeftSquare:so,ArrowDownLeftSquareIcon:so,ArrowDownNarrowWide:T2,ArrowDownNarrowWideIcon:T2,ArrowDownRight:F2,ArrowDownRightFromCircle:N1,ArrowDownRightFromCircleIcon:N1,ArrowDownRightFromSquare:uo,ArrowDownRightFromSquareIcon:uo,ArrowDownRightIcon:F2,ArrowDownRightSquare:ho,ArrowDownRightSquareIcon:ho,ArrowDownSquare:lo,ArrowDownSquareIcon:lo,ArrowDownToDot:B2,ArrowDownToDotIcon:B2,ArrowDownToLine:E2,ArrowDownToLineIcon:E2,ArrowDownUp:O2,ArrowDownUpIcon:O2,ArrowDownWideNarrow:Je,ArrowDownWideNarrowIcon:Je,ArrowDownZA:e1,ArrowDownZAIcon:e1,ArrowDownZa:e1,ArrowDownZaIcon:e1,ArrowLeft:X2,ArrowLeftCircle:b1,ArrowLeftCircleIcon:b1,ArrowLeftFromLine:G2,ArrowLeftFromLineIcon:G2,ArrowLeftIcon:X2,ArrowLeftRight:Z2,ArrowLeftRightIcon:Z2,ArrowLeftSquare:yo,ArrowLeftSquareIcon:yo,ArrowLeftToLine:W2,ArrowLeftToLineIcon:W2,ArrowRight:J2,ArrowRightCircle:A1,ArrowRightCircleIcon:A1,ArrowRightFromLine:K2,ArrowRightFromLineIcon:K2,ArrowRightIcon:J2,ArrowRightLeft:Y2,ArrowRightLeftIcon:Y2,ArrowRightSquare:Mo,ArrowRightSquareIcon:Mo,ArrowRightToLine:Q2,ArrowRightToLineIcon:Q2,ArrowUp:sc,ArrowUp01:ec,ArrowUp01Icon:ec,ArrowUp10:tc,ArrowUp10Icon:tc,ArrowUpAZ:t1,ArrowUpAZIcon:t1,ArrowUpAz:t1,ArrowUpAzIcon:t1,ArrowUpCircle:q1,ArrowUpCircleIcon:q1,ArrowUpDown:oc,ArrowUpDownIcon:oc,ArrowUpFromDot:ac,ArrowUpFromDotIcon:ac,ArrowUpFromLine:nc,ArrowUpFromLineIcon:nc,ArrowUpIcon:sc,ArrowUpLeft:cc,ArrowUpLeftFromCircle:S1,ArrowUpLeftFromCircleIcon:S1,ArrowUpLeftFromSquare:ko,ArrowUpLeftFromSquareIcon:ko,ArrowUpLeftIcon:cc,ArrowUpLeftSquare:mo,ArrowUpLeftSquareIcon:mo,ArrowUpNarrowWide:o1,ArrowUpNarrowWideIcon:o1,ArrowUpRight:ic,ArrowUpRightFromCircle:$1,ArrowUpRightFromCircleIcon:$1,ArrowUpRightFromSquare:fo,ArrowUpRightFromSquareIcon:fo,ArrowUpRightIcon:ic,ArrowUpRightSquare:vo,ArrowUpRightSquareIcon:vo,ArrowUpSquare:go,ArrowUpSquareIcon:go,ArrowUpToLine:rc,ArrowUpToLineIcon:rc,ArrowUpWideNarrow:dc,ArrowUpWideNarrowIcon:dc,ArrowUpZA:a1,ArrowUpZAIcon:a1,ArrowUpZa:a1,ArrowUpZaIcon:a1,ArrowsUpFromLine:hc,ArrowsUpFromLineIcon:hc,Asterisk:lc,AsteriskIcon:lc,AsteriskSquare:xo,AsteriskSquareIcon:xo,AtSign:yc,AtSignIcon:yc,Atom:pc,AtomIcon:pc,AudioLines:uc,AudioLinesIcon:uc,AudioWaveform:kc,AudioWaveformIcon:kc,Award:fc,AwardIcon:fc,Axe:Mc,AxeIcon:Mc,Axis3D:n1,Axis3DIcon:n1,Axis3d:n1,Axis3dIcon:n1,Baby:mc,BabyIcon:mc,Backpack:vc,BackpackIcon:vc,Badge:Hc,BadgeAlert:gc,BadgeAlertIcon:gc,BadgeCent:xc,BadgeCentIcon:xc,BadgeCheck:c1,BadgeCheckIcon:c1,BadgeDollarSign:_c,BadgeDollarSignIcon:_c,BadgeEuro:wc,BadgeEuroIcon:wc,BadgeHelp:Lc,BadgeHelpIcon:Lc,BadgeIcon:Hc,BadgeIndianRupee:Cc,BadgeIndianRupeeIcon:Cc,BadgeInfo:bc,BadgeInfoIcon:bc,BadgeJapaneseYen:Ic,BadgeJapaneseYenIcon:Ic,BadgeMinus:Nc,BadgeMinusIcon:Nc,BadgePercent:Sc,BadgePercentIcon:Sc,BadgePlus:$c,BadgePlusIcon:$c,BadgePoundSterling:Ac,BadgePoundSterlingIcon:Ac,BadgeRussianRuble:qc,BadgeRussianRubleIcon:qc,BadgeSwissFranc:Pc,BadgeSwissFrancIcon:Pc,BadgeX:jc,BadgeXIcon:jc,BaggageClaim:zc,BaggageClaimIcon:zc,Ban:Rc,BanIcon:Rc,Banana:Dc,BananaIcon:Dc,Bandage:Vc,BandageIcon:Vc,Banknote:Tc,BanknoteIcon:Tc,BarChart:v1,BarChart2:g1,BarChart2Icon:g1,BarChart3:M1,BarChart3Icon:M1,BarChart4:f1,BarChart4Icon:f1,BarChartBig:k1,BarChartBigIcon:k1,BarChartHorizontal:p1,BarChartHorizontalBig:y1,BarChartHorizontalBigIcon:y1,BarChartHorizontalIcon:p1,BarChartIcon:v1,Barcode:Fc,BarcodeIcon:Fc,Baseline:Bc,BaselineIcon:Bc,Bath:Ec,BathIcon:Ec,Battery:Kc,BatteryCharging:Oc,BatteryChargingIcon:Oc,BatteryFull:Uc,BatteryFullIcon:Uc,BatteryIcon:Kc,BatteryLow:Gc,BatteryLowIcon:Gc,BatteryMedium:Zc,BatteryMediumIcon:Zc,BatteryPlus:Wc,BatteryPlusIcon:Wc,BatteryWarning:Xc,BatteryWarningIcon:Xc,Beaker:Yc,BeakerIcon:Yc,Bean:Jc,BeanIcon:Jc,BeanOff:Qc,BeanOffIcon:Qc,Bed:oi,BedDouble:ei,BedDoubleIcon:ei,BedIcon:oi,BedSingle:ti,BedSingleIcon:ti,Beef:ai,BeefIcon:ai,Beer:ci,BeerIcon:ci,BeerOff:ni,BeerOffIcon:ni,Bell:yi,BellDot:ii,BellDotIcon:ii,BellElectric:ri,BellElectricIcon:ri,BellIcon:yi,BellMinus:di,BellMinusIcon:di,BellOff:si,BellOffIcon:si,BellPlus:hi,BellPlusIcon:hi,BellRing:li,BellRingIcon:li,BetweenHorizonalEnd:i1,BetweenHorizonalEndIcon:i1,BetweenHorizonalStart:r1,BetweenHorizonalStartIcon:r1,BetweenHorizontalEnd:i1,BetweenHorizontalEndIcon:i1,BetweenHorizontalStart:r1,BetweenHorizontalStartIcon:r1,BetweenVerticalEnd:pi,BetweenVerticalEndIcon:pi,BetweenVerticalStart:ui,BetweenVerticalStartIcon:ui,BicepsFlexed:ki,BicepsFlexedIcon:ki,Bike:fi,BikeIcon:fi,Binary:Mi,BinaryIcon:Mi,Binoculars:mi,BinocularsIcon:mi,Biohazard:vi,BiohazardIcon:vi,Bird:gi,BirdIcon:gi,Bitcoin:xi,BitcoinIcon:xi,Blend:_i,BlendIcon:_i,Blinds:wi,BlindsIcon:wi,Blocks:Li,BlocksIcon:Li,Bluetooth:Ni,BluetoothConnected:Ci,BluetoothConnectedIcon:Ci,BluetoothIcon:Ni,BluetoothOff:bi,BluetoothOffIcon:bi,BluetoothSearching:Ii,BluetoothSearchingIcon:Ii,Bold:Si,BoldIcon:Si,Bolt:$i,BoltIcon:$i,Bomb:Ai,BombIcon:Ai,Bone:qi,BoneIcon:qi,Book:tr,BookA:Pi,BookAIcon:Pi,BookAudio:ji,BookAudioIcon:ji,BookCheck:Hi,BookCheckIcon:Hi,BookCopy:zi,BookCopyIcon:zi,BookDashed:d1,BookDashedIcon:d1,BookDown:Ri,BookDownIcon:Ri,BookHeadphones:Di,BookHeadphonesIcon:Di,BookHeart:Vi,BookHeartIcon:Vi,BookIcon:tr,BookImage:Ti,BookImageIcon:Ti,BookKey:Fi,BookKeyIcon:Fi,BookLock:Bi,BookLockIcon:Bi,BookMarked:Ei,BookMarkedIcon:Ei,BookMinus:Oi,BookMinusIcon:Oi,BookOpen:Zi,BookOpenCheck:Ui,BookOpenCheckIcon:Ui,BookOpenIcon:Zi,BookOpenText:Gi,BookOpenTextIcon:Gi,BookPlus:Wi,BookPlusIcon:Wi,BookTemplate:d1,BookTemplateIcon:d1,BookText:Xi,BookTextIcon:Xi,BookType:Ki,BookTypeIcon:Ki,BookUp:Qi,BookUp2:Yi,BookUp2Icon:Yi,BookUpIcon:Qi,BookUser:Ji,BookUserIcon:Ji,BookX:er,BookXIcon:er,Bookmark:ir,BookmarkCheck:or,BookmarkCheckIcon:or,BookmarkIcon:ir,BookmarkMinus:ar,BookmarkMinusIcon:ar,BookmarkPlus:nr,BookmarkPlusIcon:nr,BookmarkX:cr,BookmarkXIcon:cr,BoomBox:rr,BoomBoxIcon:rr,Bot:hr,BotIcon:hr,BotMessageSquare:dr,BotMessageSquareIcon:dr,BotOff:sr,BotOffIcon:sr,Box:lr,BoxIcon:lr,BoxSelect:qo,BoxSelectIcon:qo,Boxes:yr,BoxesIcon:yr,Braces:s1,BracesIcon:s1,Brackets:pr,BracketsIcon:pr,Brain:fr,BrainCircuit:ur,BrainCircuitIcon:ur,BrainCog:kr,BrainCogIcon:kr,BrainIcon:fr,BrickWall:Mr,BrickWallIcon:Mr,Briefcase:xr,BriefcaseBusiness:mr,BriefcaseBusinessIcon:mr,BriefcaseConveyorBelt:vr,BriefcaseConveyorBeltIcon:vr,BriefcaseIcon:xr,BriefcaseMedical:gr,BriefcaseMedicalIcon:gr,BringToFront:_r,BringToFrontIcon:_r,Brush:wr,BrushIcon:wr,Bug:br,BugIcon:br,BugOff:Lr,BugOffIcon:Lr,BugPlay:Cr,BugPlayIcon:Cr,Building:Nr,Building2:Ir,Building2Icon:Ir,BuildingIcon:Nr,Bus:$r,BusFront:Sr,BusFrontIcon:Sr,BusIcon:$r,Cable:qr,CableCar:Ar,CableCarIcon:Ar,CableIcon:qr,Cake:jr,CakeIcon:jr,CakeSlice:Pr,CakeSliceIcon:Pr,Calculator:Hr,CalculatorIcon:Hr,Calendar:o0,Calendar1:zr,Calendar1Icon:zr,CalendarArrowDown:Rr,CalendarArrowDownIcon:Rr,CalendarArrowUp:Dr,CalendarArrowUpIcon:Dr,CalendarCheck:Tr,CalendarCheck2:Vr,CalendarCheck2Icon:Vr,CalendarCheckIcon:Tr,CalendarClock:Fr,CalendarClockIcon:Fr,CalendarCog:Br,CalendarCogIcon:Br,CalendarDays:Er,CalendarDaysIcon:Er,CalendarFold:Or,CalendarFoldIcon:Or,CalendarHeart:Ur,CalendarHeartIcon:Ur,CalendarIcon:o0,CalendarMinus:Zr,CalendarMinus2:Gr,CalendarMinus2Icon:Gr,CalendarMinusIcon:Zr,CalendarOff:Wr,CalendarOffIcon:Wr,CalendarPlus:Kr,CalendarPlus2:Xr,CalendarPlus2Icon:Xr,CalendarPlusIcon:Kr,CalendarRange:Yr,CalendarRangeIcon:Yr,CalendarSearch:Qr,CalendarSearchIcon:Qr,CalendarSync:Jr,CalendarSyncIcon:Jr,CalendarX:t0,CalendarX2:e0,CalendarX2Icon:e0,CalendarXIcon:t0,Camera:n0,CameraIcon:n0,CameraOff:a0,CameraOffIcon:a0,CandlestickChart:u1,CandlestickChartIcon:u1,Candy:r0,CandyCane:c0,CandyCaneIcon:c0,CandyIcon:r0,CandyOff:i0,CandyOffIcon:i0,Cannabis:d0,CannabisIcon:d0,Captions:h1,CaptionsIcon:h1,CaptionsOff:s0,CaptionsOffIcon:s0,Car:y0,CarFront:h0,CarFrontIcon:h0,CarIcon:y0,CarTaxiFront:l0,CarTaxiFrontIcon:l0,Caravan:p0,CaravanIcon:p0,Carrot:u0,CarrotIcon:u0,CaseLower:k0,CaseLowerIcon:k0,CaseSensitive:f0,CaseSensitiveIcon:f0,CaseUpper:M0,CaseUpperIcon:M0,CassetteTape:m0,CassetteTapeIcon:m0,Cast:v0,CastIcon:v0,Castle:g0,CastleIcon:g0,Cat:x0,CatIcon:x0,Cctv:_0,CctvIcon:_0,ChartArea:l1,ChartAreaIcon:l1,ChartBar:p1,ChartBarBig:y1,ChartBarBigIcon:y1,ChartBarDecreasing:w0,ChartBarDecreasingIcon:w0,ChartBarIcon:p1,ChartBarIncreasing:L0,ChartBarIncreasingIcon:L0,ChartBarStacked:C0,ChartBarStackedIcon:C0,ChartCandlestick:u1,ChartCandlestickIcon:u1,ChartColumn:M1,ChartColumnBig:k1,ChartColumnBigIcon:k1,ChartColumnDecreasing:b0,ChartColumnDecreasingIcon:b0,ChartColumnIcon:M1,ChartColumnIncreasing:f1,ChartColumnIncreasingIcon:f1,ChartColumnStacked:I0,ChartColumnStackedIcon:I0,ChartGantt:N0,ChartGanttIcon:N0,ChartLine:m1,ChartLineIcon:m1,ChartNetwork:S0,ChartNetworkIcon:S0,ChartNoAxesColumn:g1,ChartNoAxesColumnDecreasing:$0,ChartNoAxesColumnDecreasingIcon:$0,ChartNoAxesColumnIcon:g1,ChartNoAxesColumnIncreasing:v1,ChartNoAxesColumnIncreasingIcon:v1,ChartNoAxesCombined:A0,ChartNoAxesCombinedIcon:A0,ChartNoAxesGantt:x1,ChartNoAxesGanttIcon:x1,ChartPie:_1,ChartPieIcon:_1,ChartScatter:w1,ChartScatterIcon:w1,ChartSpline:q0,ChartSplineIcon:q0,Check:_n,CheckCheck:P0,CheckCheckIcon:P0,CheckCircle:P1,CheckCircle2:Te,CheckCircle2Icon:Te,CheckCircleIcon:P1,CheckIcon:_n,CheckSquare:wo,CheckSquare2:Lo,CheckSquare2Icon:Lo,CheckSquareIcon:wo,ChefHat:j0,ChefHatIcon:j0,Cherry:H0,CherryIcon:H0,ChevronDown:z0,ChevronDownCircle:j1,ChevronDownCircleIcon:j1,ChevronDownIcon:z0,ChevronDownSquare:Co,ChevronDownSquareIcon:Co,ChevronFirst:R0,ChevronFirstIcon:R0,ChevronLast:D0,ChevronLastIcon:D0,ChevronLeft:V0,ChevronLeftCircle:H1,ChevronLeftCircleIcon:H1,ChevronLeftIcon:V0,ChevronLeftSquare:bo,ChevronLeftSquareIcon:bo,ChevronRight:Da,ChevronRightCircle:z1,ChevronRightCircleIcon:z1,ChevronRightIcon:Da,ChevronRightSquare:Io,ChevronRightSquareIcon:Io,ChevronUp:T0,ChevronUpCircle:R1,ChevronUpCircleIcon:R1,ChevronUpIcon:T0,ChevronUpSquare:No,ChevronUpSquareIcon:No,ChevronsDown:B0,ChevronsDownIcon:B0,ChevronsDownUp:F0,ChevronsDownUpIcon:F0,ChevronsLeft:U0,ChevronsLeftIcon:U0,ChevronsLeftRight:O0,ChevronsLeftRightEllipsis:E0,ChevronsLeftRightEllipsisIcon:E0,ChevronsLeftRightIcon:O0,ChevronsRight:Z0,ChevronsRightIcon:Z0,ChevronsRightLeft:G0,ChevronsRightLeftIcon:G0,ChevronsUp:W0,ChevronsUpDown:Za,ChevronsUpDownIcon:Za,ChevronsUpIcon:W0,Chrome:X0,ChromeIcon:X0,Church:K0,ChurchIcon:K0,Cigarette:Q0,CigaretteIcon:Q0,CigaretteOff:Y0,CigaretteOffIcon:Y0,Circle:Va,CircleAlert:L1,CircleAlertIcon:L1,CircleArrowDown:C1,CircleArrowDownIcon:C1,CircleArrowLeft:b1,CircleArrowLeftIcon:b1,CircleArrowOutDownLeft:I1,CircleArrowOutDownLeftIcon:I1,CircleArrowOutDownRight:N1,CircleArrowOutDownRightIcon:N1,CircleArrowOutUpLeft:S1,CircleArrowOutUpLeftIcon:S1,CircleArrowOutUpRight:$1,CircleArrowOutUpRightIcon:$1,CircleArrowRight:A1,CircleArrowRightIcon:A1,CircleArrowUp:q1,CircleArrowUpIcon:q1,CircleCheck:Te,CircleCheckBig:P1,CircleCheckBigIcon:P1,CircleCheckIcon:Te,CircleChevronDown:j1,CircleChevronDownIcon:j1,CircleChevronLeft:H1,CircleChevronLeftIcon:H1,CircleChevronRight:z1,CircleChevronRightIcon:z1,CircleChevronUp:R1,CircleChevronUpIcon:R1,CircleDashed:J0,CircleDashedIcon:J0,CircleDivide:D1,CircleDivideIcon:D1,CircleDollarSign:ed,CircleDollarSignIcon:ed,CircleDot:od,CircleDotDashed:td,CircleDotDashedIcon:td,CircleDotIcon:od,CircleEllipsis:ad,CircleEllipsisIcon:ad,CircleEqual:nd,CircleEqualIcon:nd,CircleFadingArrowUp:cd,CircleFadingArrowUpIcon:cd,CircleFadingPlus:id,CircleFadingPlusIcon:id,CircleGauge:V1,CircleGaugeIcon:V1,CircleHelp:T1,CircleHelpIcon:T1,CircleIcon:Va,CircleMinus:F1,CircleMinusIcon:F1,CircleOff:rd,CircleOffIcon:rd,CircleParking:E1,CircleParkingIcon:E1,CircleParkingOff:B1,CircleParkingOffIcon:B1,CirclePause:O1,CirclePauseIcon:O1,CirclePercent:U1,CirclePercentIcon:U1,CirclePlay:G1,CirclePlayIcon:G1,CirclePlus:Z1,CirclePlusIcon:Z1,CirclePower:W1,CirclePowerIcon:W1,CircleSlash:dd,CircleSlash2:X1,CircleSlash2Icon:X1,CircleSlashIcon:dd,CircleSlashed:X1,CircleSlashedIcon:X1,CircleSmall:sd,CircleSmallIcon:sd,CircleStop:K1,CircleStopIcon:K1,CircleUser:Q1,CircleUserIcon:Q1,CircleUserRound:Y1,CircleUserRoundIcon:Y1,CircleX:J1,CircleXIcon:J1,CircuitBoard:hd,CircuitBoardIcon:hd,Citrus:ld,CitrusIcon:ld,Clapperboard:yd,ClapperboardIcon:yd,Clipboard:xd,ClipboardCheck:pd,ClipboardCheckIcon:pd,ClipboardCopy:ud,ClipboardCopyIcon:ud,ClipboardEdit:tt,ClipboardEditIcon:tt,ClipboardIcon:xd,ClipboardList:kd,ClipboardListIcon:kd,ClipboardMinus:fd,ClipboardMinusIcon:fd,ClipboardPaste:Md,ClipboardPasteIcon:Md,ClipboardPen:tt,ClipboardPenIcon:tt,ClipboardPenLine:et,ClipboardPenLineIcon:et,ClipboardPlus:md,ClipboardPlusIcon:md,ClipboardSignature:et,ClipboardSignatureIcon:et,ClipboardType:vd,ClipboardTypeIcon:vd,ClipboardX:gd,ClipboardXIcon:gd,Clock:Rd,Clock1:_d,Clock10:wd,Clock10Icon:wd,Clock11:Ld,Clock11Icon:Ld,Clock12:Cd,Clock12Icon:Cd,Clock1Icon:_d,Clock2:bd,Clock2Icon:bd,Clock3:Id,Clock3Icon:Id,Clock4:Nd,Clock4Icon:Nd,Clock5:Sd,Clock5Icon:Sd,Clock6:$d,Clock6Icon:$d,Clock7:Ad,Clock7Icon:Ad,Clock8:qd,Clock8Icon:qd,Clock9:Pd,Clock9Icon:Pd,ClockAlert:jd,ClockAlertIcon:jd,ClockArrowDown:Hd,ClockArrowDownIcon:Hd,ClockArrowUp:zd,ClockArrowUpIcon:zd,ClockIcon:Rd,Cloud:Qd,CloudAlert:Dd,CloudAlertIcon:Dd,CloudCog:Vd,CloudCogIcon:Vd,CloudDownload:ot,CloudDownloadIcon:ot,CloudDrizzle:Td,CloudDrizzleIcon:Td,CloudFog:Fd,CloudFogIcon:Fd,CloudHail:Bd,CloudHailIcon:Bd,CloudIcon:Qd,CloudLightning:Ed,CloudLightningIcon:Ed,CloudMoon:Ud,CloudMoonIcon:Ud,CloudMoonRain:Od,CloudMoonRainIcon:Od,CloudOff:Gd,CloudOffIcon:Gd,CloudRain:Wd,CloudRainIcon:Wd,CloudRainWind:Zd,CloudRainWindIcon:Zd,CloudSnow:Xd,CloudSnowIcon:Xd,CloudSun:Yd,CloudSunIcon:Yd,CloudSunRain:Kd,CloudSunRainIcon:Kd,CloudUpload:at,CloudUploadIcon:at,Cloudy:Jd,CloudyIcon:Jd,Clover:es,CloverIcon:es,Club:ts,ClubIcon:ts,Code:os,Code2:nt,Code2Icon:nt,CodeIcon:os,CodeSquare:So,CodeSquareIcon:So,CodeXml:nt,CodeXmlIcon:nt,Codepen:as,CodepenIcon:as,Codesandbox:ns,CodesandboxIcon:ns,Coffee:cs,CoffeeIcon:cs,Cog:is,CogIcon:is,Coins:rs,CoinsIcon:rs,Columns:ct,Columns2:ct,Columns2Icon:ct,Columns3:it,Columns3Icon:it,Columns4:ds,Columns4Icon:ds,ColumnsIcon:ct,Combine:ss,CombineIcon:ss,Command:hs,CommandIcon:hs,Compass:ls,CompassIcon:ls,Component:ys,ComponentIcon:ys,Computer:ps,ComputerIcon:ps,ConciergeBell:us,ConciergeBellIcon:us,Cone:ks,ConeIcon:ks,Construction:fs,ConstructionIcon:fs,Contact:Ms,Contact2:rt,Contact2Icon:rt,ContactIcon:Ms,ContactRound:rt,ContactRoundIcon:rt,Container:ms,ContainerIcon:ms,Contrast:vs,ContrastIcon:vs,Cookie:gs,CookieIcon:gs,CookingPot:xs,CookingPotIcon:xs,Copy:Is,CopyCheck:_s,CopyCheckIcon:_s,CopyIcon:Is,CopyMinus:ws,CopyMinusIcon:ws,CopyPlus:Ls,CopyPlusIcon:Ls,CopySlash:Cs,CopySlashIcon:Cs,CopyX:bs,CopyXIcon:bs,Copyleft:Ns,CopyleftIcon:Ns,Copyright:Ss,CopyrightIcon:Ss,CornerDownLeft:$s,CornerDownLeftIcon:$s,CornerDownRight:As,CornerDownRightIcon:As,CornerLeftDown:qs,CornerLeftDownIcon:qs,CornerLeftUp:Ps,CornerLeftUpIcon:Ps,CornerRightDown:js,CornerRightDownIcon:js,CornerRightUp:Hs,CornerRightUpIcon:Hs,CornerUpLeft:zs,CornerUpLeftIcon:zs,CornerUpRight:Rs,CornerUpRightIcon:Rs,Cpu:Ds,CpuIcon:Ds,CreativeCommons:Vs,CreativeCommonsIcon:Vs,CreditCard:Ts,CreditCardIcon:Ts,Croissant:Fs,CroissantIcon:Fs,Crop:Bs,CropIcon:Bs,Cross:Es,CrossIcon:Es,Crosshair:Os,CrosshairIcon:Os,Crown:Us,CrownIcon:Us,Cuboid:Gs,CuboidIcon:Gs,CupSoda:Zs,CupSodaIcon:Zs,CurlyBraces:s1,CurlyBracesIcon:s1,Currency:Ws,CurrencyIcon:Ws,Cylinder:Xs,CylinderIcon:Xs,Dam:Ks,DamIcon:Ks,Database:Js,DatabaseBackup:Ys,DatabaseBackupIcon:Ys,DatabaseIcon:Js,DatabaseZap:Qs,DatabaseZapIcon:Qs,Delete:eh,DeleteIcon:eh,Dessert:th,DessertIcon:th,Diameter:oh,DiameterIcon:oh,Diamond:ch,DiamondIcon:ch,DiamondMinus:ah,DiamondMinusIcon:ah,DiamondPercent:dt,DiamondPercentIcon:dt,DiamondPlus:nh,DiamondPlusIcon:nh,Dice1:ih,Dice1Icon:ih,Dice2:rh,Dice2Icon:rh,Dice3:dh,Dice3Icon:dh,Dice4:sh,Dice4Icon:sh,Dice5:hh,Dice5Icon:hh,Dice6:lh,Dice6Icon:lh,Dices:yh,DicesIcon:yh,Diff:ph,DiffIcon:ph,Disc:Mh,Disc2:uh,Disc2Icon:uh,Disc3:kh,Disc3Icon:kh,DiscAlbum:fh,DiscAlbumIcon:fh,DiscIcon:Mh,Divide:mh,DivideCircle:D1,DivideCircleIcon:D1,DivideIcon:mh,DivideSquare:Po,DivideSquareIcon:Po,Dna:gh,DnaIcon:gh,DnaOff:vh,DnaOffIcon:vh,Dock:xh,DockIcon:xh,Dog:_h,DogIcon:_h,DollarSign:wh,DollarSignIcon:wh,Donut:Lh,DonutIcon:Lh,DoorClosed:Ch,DoorClosedIcon:Ch,DoorOpen:bh,DoorOpenIcon:bh,Dot:Ih,DotIcon:Ih,DotSquare:jo,DotSquareIcon:jo,Download:Nh,DownloadCloud:ot,DownloadCloudIcon:ot,DownloadIcon:Nh,DraftingCompass:Sh,DraftingCompassIcon:Sh,Drama:$h,DramaIcon:$h,Dribbble:Ah,DribbbleIcon:Ah,Drill:qh,DrillIcon:qh,Droplet:jh,DropletIcon:jh,DropletOff:Ph,DropletOffIcon:Ph,Droplets:Hh,DropletsIcon:Hh,Drum:zh,DrumIcon:zh,Drumstick:Rh,DrumstickIcon:Rh,Dumbbell:Dh,DumbbellIcon:Dh,Ear:Th,EarIcon:Th,EarOff:Vh,EarOffIcon:Vh,Earth:st,EarthIcon:st,EarthLock:Fh,EarthLockIcon:Fh,Eclipse:Bh,EclipseIcon:Bh,Edit:de,Edit2:Kt,Edit2Icon:Kt,Edit3:Xt,Edit3Icon:Xt,EditIcon:de,Egg:Uh,EggFried:Eh,EggFriedIcon:Eh,EggIcon:Uh,EggOff:Oh,EggOffIcon:Oh,Ellipsis:lt,EllipsisIcon:lt,EllipsisVertical:ht,EllipsisVerticalIcon:ht,Equal:Wh,EqualApproximately:Gh,EqualApproximatelyIcon:Gh,EqualIcon:Wh,EqualNot:Zh,EqualNotIcon:Zh,EqualSquare:Ho,EqualSquareIcon:Ho,Eraser:Xh,EraserIcon:Xh,EthernetPort:Kh,EthernetPortIcon:Kh,Euro:Yh,EuroIcon:Yh,Expand:Qh,ExpandIcon:Qh,ExternalLink:Jh,ExternalLinkIcon:Jh,Eye:ol,EyeClosed:el,EyeClosedIcon:el,EyeIcon:ol,EyeOff:tl,EyeOffIcon:tl,Facebook:al,FacebookIcon:al,Factory:nl,FactoryIcon:nl,Fan:cl,FanIcon:cl,FastForward:il,FastForwardIcon:il,Feather:rl,FeatherIcon:rl,Fence:dl,FenceIcon:dl,FerrisWheel:sl,FerrisWheelIcon:sl,Figma:hl,FigmaIcon:hl,File:ry,FileArchive:ll,FileArchiveIcon:ll,FileAudio:pl,FileAudio2:yl,FileAudio2Icon:yl,FileAudioIcon:pl,FileAxis3D:yt,FileAxis3DIcon:yt,FileAxis3d:yt,FileAxis3dIcon:yt,FileBadge:kl,FileBadge2:ul,FileBadge2Icon:ul,FileBadgeIcon:kl,FileBarChart:pt,FileBarChart2:ut,FileBarChart2Icon:ut,FileBarChartIcon:pt,FileBox:fl,FileBoxIcon:fl,FileChartColumn:ut,FileChartColumnIcon:ut,FileChartColumnIncreasing:pt,FileChartColumnIncreasingIcon:pt,FileChartLine:kt,FileChartLineIcon:kt,FileChartPie:ft,FileChartPieIcon:ft,FileCheck:ml,FileCheck2:Ml,FileCheck2Icon:Ml,FileCheckIcon:ml,FileClock:vl,FileClockIcon:vl,FileCode:xl,FileCode2:gl,FileCode2Icon:gl,FileCodeIcon:xl,FileCog:Mt,FileCog2:Mt,FileCog2Icon:Mt,FileCogIcon:Mt,FileDiff:_l,FileDiffIcon:_l,FileDigit:wl,FileDigitIcon:wl,FileDown:Ll,FileDownIcon:Ll,FileEdit:vt,FileEditIcon:vt,FileHeart:Cl,FileHeartIcon:Cl,FileIcon:ry,FileImage:bl,FileImageIcon:bl,FileInput:Il,FileInputIcon:Il,FileJson:Sl,FileJson2:Nl,FileJson2Icon:Nl,FileJsonIcon:Sl,FileKey:Al,FileKey2:$l,FileKey2Icon:$l,FileKeyIcon:Al,FileLineChart:kt,FileLineChartIcon:kt,FileLock:Pl,FileLock2:ql,FileLock2Icon:ql,FileLockIcon:Pl,FileMinus:Hl,FileMinus2:jl,FileMinus2Icon:jl,FileMinusIcon:Hl,FileMusic:zl,FileMusicIcon:zl,FileOutput:Rl,FileOutputIcon:Rl,FilePen:vt,FilePenIcon:vt,FilePenLine:mt,FilePenLineIcon:mt,FilePieChart:ft,FilePieChartIcon:ft,FilePlus:Vl,FilePlus2:Dl,FilePlus2Icon:Dl,FilePlusIcon:Vl,FileQuestion:Tl,FileQuestionIcon:Tl,FileScan:Fl,FileScanIcon:Fl,FileSearch:El,FileSearch2:Bl,FileSearch2Icon:Bl,FileSearchIcon:El,FileSignature:mt,FileSignatureIcon:mt,FileSliders:Ol,FileSlidersIcon:Ol,FileSpreadsheet:Ul,FileSpreadsheetIcon:Ul,FileStack:Gl,FileStackIcon:Gl,FileSymlink:Zl,FileSymlinkIcon:Zl,FileTerminal:Wl,FileTerminalIcon:Wl,FileText:Xl,FileTextIcon:Xl,FileType:Yl,FileType2:Kl,FileType2Icon:Kl,FileTypeIcon:Yl,FileUp:Ql,FileUpIcon:Ql,FileUser:Jl,FileUserIcon:Jl,FileVideo:ty,FileVideo2:ey,FileVideo2Icon:ey,FileVideoIcon:ty,FileVolume:ay,FileVolume2:oy,FileVolume2Icon:oy,FileVolumeIcon:ay,FileWarning:ny,FileWarningIcon:ny,FileX:iy,FileX2:cy,FileX2Icon:cy,FileXIcon:iy,Files:dy,FilesIcon:dy,Film:sy,FilmIcon:sy,Filter:ly,FilterIcon:ly,FilterX:hy,FilterXIcon:hy,Fingerprint:yy,FingerprintIcon:yy,FireExtinguisher:py,FireExtinguisherIcon:py,Fish:fy,FishIcon:fy,FishOff:uy,FishOffIcon:uy,FishSymbol:ky,FishSymbolIcon:ky,Flag:gy,FlagIcon:gy,FlagOff:My,FlagOffIcon:My,FlagTriangleLeft:my,FlagTriangleLeftIcon:my,FlagTriangleRight:vy,FlagTriangleRightIcon:vy,Flame:_y,FlameIcon:_y,FlameKindling:xy,FlameKindlingIcon:xy,Flashlight:Ly,FlashlightIcon:Ly,FlashlightOff:wy,FlashlightOffIcon:wy,FlaskConical:by,FlaskConicalIcon:by,FlaskConicalOff:Cy,FlaskConicalOffIcon:Cy,FlaskRound:Iy,FlaskRoundIcon:Iy,FlipHorizontal:Sy,FlipHorizontal2:Ny,FlipHorizontal2Icon:Ny,FlipHorizontalIcon:Sy,FlipVertical:Ay,FlipVertical2:$y,FlipVertical2Icon:$y,FlipVerticalIcon:Ay,Flower:Py,Flower2:qy,Flower2Icon:qy,FlowerIcon:Py,Focus:jy,FocusIcon:jy,FoldHorizontal:Hy,FoldHorizontalIcon:Hy,FoldVertical:zy,FoldVerticalIcon:zy,Folder:hp,FolderArchive:Ry,FolderArchiveIcon:Ry,FolderCheck:Dy,FolderCheckIcon:Dy,FolderClock:Vy,FolderClockIcon:Vy,FolderClosed:Ty,FolderClosedIcon:Ty,FolderCode:Fy,FolderCodeIcon:Fy,FolderCog:gt,FolderCog2:gt,FolderCog2Icon:gt,FolderCogIcon:gt,FolderDot:By,FolderDotIcon:By,FolderDown:Ey,FolderDownIcon:Ey,FolderEdit:xt,FolderEditIcon:xt,FolderGit:Uy,FolderGit2:Oy,FolderGit2Icon:Oy,FolderGitIcon:Uy,FolderHeart:Gy,FolderHeartIcon:Gy,FolderIcon:hp,FolderInput:Zy,FolderInputIcon:Zy,FolderKanban:Wy,FolderKanbanIcon:Wy,FolderKey:Xy,FolderKeyIcon:Xy,FolderLock:Ky,FolderLockIcon:Ky,FolderMinus:Yy,FolderMinusIcon:Yy,FolderOpen:Jy,FolderOpenDot:Qy,FolderOpenDotIcon:Qy,FolderOpenIcon:Jy,FolderOutput:ep,FolderOutputIcon:ep,FolderPen:xt,FolderPenIcon:xt,FolderPlus:tp,FolderPlusIcon:tp,FolderRoot:op,FolderRootIcon:op,FolderSearch:np,FolderSearch2:ap,FolderSearch2Icon:ap,FolderSearchIcon:np,FolderSymlink:cp,FolderSymlinkIcon:cp,FolderSync:ip,FolderSyncIcon:ip,FolderTree:rp,FolderTreeIcon:rp,FolderUp:dp,FolderUpIcon:dp,FolderX:sp,FolderXIcon:sp,Folders:lp,FoldersIcon:lp,Footprints:yp,FootprintsIcon:yp,ForkKnife:ga,ForkKnifeCrossed:va,ForkKnifeCrossedIcon:va,ForkKnifeIcon:ga,Forklift:pp,ForkliftIcon:pp,FormInput:Qt,FormInputIcon:Qt,Forward:up,ForwardIcon:up,Frame:kp,FrameIcon:kp,Framer:fp,FramerIcon:fp,Frown:Mp,FrownIcon:Mp,Fuel:mp,FuelIcon:mp,Fullscreen:vp,FullscreenIcon:vp,FunctionSquare:zo,FunctionSquareIcon:zo,GalleryHorizontal:xp,GalleryHorizontalEnd:gp,GalleryHorizontalEndIcon:gp,GalleryHorizontalIcon:xp,GalleryThumbnails:_p,GalleryThumbnailsIcon:_p,GalleryVertical:Lp,GalleryVerticalEnd:wp,GalleryVerticalEndIcon:wp,GalleryVerticalIcon:Lp,Gamepad:bp,Gamepad2:Cp,Gamepad2Icon:Cp,GamepadIcon:bp,GanttChart:x1,GanttChartIcon:x1,GanttChartSquare:we,GanttChartSquareIcon:we,Gauge:Ip,GaugeCircle:V1,GaugeCircleIcon:V1,GaugeIcon:Ip,Gavel:Np,GavelIcon:Np,Gem:Sp,GemIcon:Sp,Ghost:$p,GhostIcon:$p,Gift:Ap,GiftIcon:Ap,GitBranch:Pp,GitBranchIcon:Pp,GitBranchPlus:qp,GitBranchPlusIcon:qp,GitCommit:_t,GitCommitHorizontal:_t,GitCommitHorizontalIcon:_t,GitCommitIcon:_t,GitCommitVertical:jp,GitCommitVerticalIcon:jp,GitCompare:zp,GitCompareArrows:Hp,GitCompareArrowsIcon:Hp,GitCompareIcon:zp,GitFork:Rp,GitForkIcon:Rp,GitGraph:Dp,GitGraphIcon:Dp,GitMerge:Vp,GitMergeIcon:Vp,GitPullRequest:Up,GitPullRequestArrow:Tp,GitPullRequestArrowIcon:Tp,GitPullRequestClosed:Fp,GitPullRequestClosedIcon:Fp,GitPullRequestCreate:Ep,GitPullRequestCreateArrow:Bp,GitPullRequestCreateArrowIcon:Bp,GitPullRequestCreateIcon:Ep,GitPullRequestDraft:Op,GitPullRequestDraftIcon:Op,GitPullRequestIcon:Up,Github:Gp,GithubIcon:Gp,Gitlab:Zp,GitlabIcon:Zp,GlassWater:Wp,GlassWaterIcon:Wp,Glasses:Xp,GlassesIcon:Xp,Globe:Yp,Globe2:st,Globe2Icon:st,GlobeIcon:Yp,GlobeLock:Kp,GlobeLockIcon:Kp,Goal:Qp,GoalIcon:Qp,Grab:Jp,GrabIcon:Jp,GraduationCap:eu,GraduationCapIcon:eu,Grape:tu,GrapeIcon:tu,Grid:_e,Grid2X2:bt,Grid2X2Check:wt,Grid2X2CheckIcon:wt,Grid2X2Icon:bt,Grid2X2Plus:Lt,Grid2X2PlusIcon:Lt,Grid2X2X:Ct,Grid2X2XIcon:Ct,Grid2x2:bt,Grid2x2Check:wt,Grid2x2CheckIcon:wt,Grid2x2Icon:bt,Grid2x2Plus:Lt,Grid2x2PlusIcon:Lt,Grid2x2X:Ct,Grid2x2XIcon:Ct,Grid3X3:_e,Grid3X3Icon:_e,Grid3x3:_e,Grid3x3Icon:_e,GridIcon:_e,Grip:nu,GripHorizontal:ou,GripHorizontalIcon:ou,GripIcon:nu,GripVertical:au,GripVerticalIcon:au,Group:cu,GroupIcon:cu,Guitar:iu,GuitarIcon:iu,Ham:ru,HamIcon:ru,Hammer:du,HammerIcon:du,Hand:pu,HandCoins:su,HandCoinsIcon:su,HandHeart:hu,HandHeartIcon:hu,HandHelping:It,HandHelpingIcon:It,HandIcon:pu,HandMetal:lu,HandMetalIcon:lu,HandPlatter:yu,HandPlatterIcon:yu,Handshake:uu,HandshakeIcon:uu,HardDrive:Mu,HardDriveDownload:ku,HardDriveDownloadIcon:ku,HardDriveIcon:Mu,HardDriveUpload:fu,HardDriveUploadIcon:fu,HardHat:mu,HardHatIcon:mu,Hash:vu,HashIcon:vu,Haze:gu,HazeIcon:gu,HdmiPort:xu,HdmiPortIcon:xu,Heading:Nu,Heading1:_u,Heading1Icon:_u,Heading2:wu,Heading2Icon:wu,Heading3:Lu,Heading3Icon:Lu,Heading4:Cu,Heading4Icon:Cu,Heading5:bu,Heading5Icon:bu,Heading6:Iu,Heading6Icon:Iu,HeadingIcon:Nu,HeadphoneOff:Su,HeadphoneOffIcon:Su,Headphones:$u,HeadphonesIcon:$u,Headset:Au,HeadsetIcon:Au,Heart:zu,HeartCrack:qu,HeartCrackIcon:qu,HeartHandshake:Pu,HeartHandshakeIcon:Pu,HeartIcon:zu,HeartOff:ju,HeartOffIcon:ju,HeartPulse:Hu,HeartPulseIcon:Hu,Heater:Ru,HeaterIcon:Ru,HelpCircle:T1,HelpCircleIcon:T1,HelpingHand:It,HelpingHandIcon:It,Hexagon:Du,HexagonIcon:Du,Highlighter:Vu,HighlighterIcon:Vu,History:Tu,HistoryIcon:Tu,Home:Nt,HomeIcon:Nt,Hop:Bu,HopIcon:Bu,HopOff:Fu,HopOffIcon:Fu,Hospital:Eu,HospitalIcon:Eu,Hotel:Ou,HotelIcon:Ou,Hourglass:Uu,HourglassIcon:Uu,House:Nt,HouseIcon:Nt,HousePlug:Gu,HousePlugIcon:Gu,HousePlus:Zu,HousePlusIcon:Zu,HouseWifi:Wu,HouseWifiIcon:Wu,IceCream:$t,IceCream2:St,IceCream2Icon:St,IceCreamBowl:St,IceCreamBowlIcon:St,IceCreamCone:$t,IceCreamConeIcon:$t,IceCreamIcon:$t,Icon:MC,IdCard:Xu,IdCardIcon:Xu,Image:a4,ImageDown:Ku,ImageDownIcon:Ku,ImageIcon:a4,ImageMinus:Yu,ImageMinusIcon:Yu,ImageOff:Qu,ImageOffIcon:Qu,ImagePlay:Ju,ImagePlayIcon:Ju,ImagePlus:e4,ImagePlusIcon:e4,ImageUp:t4,ImageUpIcon:t4,ImageUpscale:o4,ImageUpscaleIcon:o4,Images:n4,ImagesIcon:n4,Import:c4,ImportIcon:c4,Inbox:i4,InboxIcon:i4,Indent:qt,IndentDecrease:At,IndentDecreaseIcon:At,IndentIcon:qt,IndentIncrease:qt,IndentIncreaseIcon:qt,IndianRupee:r4,IndianRupeeIcon:r4,Infinity:d4,InfinityIcon:d4,Info:Wa,InfoIcon:Wa,Inspect:Bo,InspectIcon:Bo,InspectionPanel:s4,InspectionPanelIcon:s4,Instagram:h4,InstagramIcon:h4,Italic:l4,ItalicIcon:l4,IterationCcw:y4,IterationCcwIcon:y4,IterationCw:p4,IterationCwIcon:p4,JapaneseYen:u4,JapaneseYenIcon:u4,Joystick:k4,JoystickIcon:k4,Kanban:f4,KanbanIcon:f4,KanbanSquare:Ro,KanbanSquareDashed:$o,KanbanSquareDashedIcon:$o,KanbanSquareIcon:Ro,Key:v4,KeyIcon:v4,KeyRound:M4,KeyRoundIcon:M4,KeySquare:m4,KeySquareIcon:m4,Keyboard:_4,KeyboardIcon:_4,KeyboardMusic:g4,KeyboardMusicIcon:g4,KeyboardOff:x4,KeyboardOffIcon:x4,Lamp:N4,LampCeiling:w4,LampCeilingIcon:w4,LampDesk:L4,LampDeskIcon:L4,LampFloor:C4,LampFloorIcon:C4,LampIcon:N4,LampWallDown:b4,LampWallDownIcon:b4,LampWallUp:I4,LampWallUpIcon:I4,LandPlot:S4,LandPlotIcon:S4,Landmark:$4,LandmarkIcon:$4,Languages:A4,LanguagesIcon:A4,Laptop:P4,Laptop2:Pt,Laptop2Icon:Pt,LaptopIcon:P4,LaptopMinimal:Pt,LaptopMinimalCheck:q4,LaptopMinimalCheckIcon:q4,LaptopMinimalIcon:Pt,Lasso:H4,LassoIcon:H4,LassoSelect:j4,LassoSelectIcon:j4,Laugh:z4,LaughIcon:z4,Layers:jt,Layers2:R4,Layers2Icon:R4,Layers3:jt,Layers3Icon:jt,LayersIcon:jt,Layout:Wt,LayoutDashboard:D4,LayoutDashboardIcon:D4,LayoutGrid:V4,LayoutGridIcon:V4,LayoutIcon:Wt,LayoutList:T4,LayoutListIcon:T4,LayoutPanelLeft:F4,LayoutPanelLeftIcon:F4,LayoutPanelTop:B4,LayoutPanelTopIcon:B4,LayoutTemplate:E4,LayoutTemplateIcon:E4,Leaf:O4,LeafIcon:O4,LeafyGreen:U4,LeafyGreenIcon:U4,Lectern:G4,LecternIcon:G4,LetterText:Z4,LetterTextIcon:Z4,Library:X4,LibraryBig:W4,LibraryBigIcon:W4,LibraryIcon:X4,LibrarySquare:Do,LibrarySquareIcon:Do,LifeBuoy:K4,LifeBuoyIcon:K4,Ligature:Y4,LigatureIcon:Y4,Lightbulb:J4,LightbulbIcon:J4,LightbulbOff:Q4,LightbulbOffIcon:Q4,LineChart:m1,LineChartIcon:m1,Link:ok,Link2:tk,Link2Icon:tk,Link2Off:ek,Link2OffIcon:ek,LinkIcon:ok,Linkedin:ak,LinkedinIcon:ak,List:gk,ListCheck:nk,ListCheckIcon:nk,ListChecks:ck,ListChecksIcon:ck,ListCollapse:ik,ListCollapseIcon:ik,ListEnd:rk,ListEndIcon:rk,ListFilter:sk,ListFilterIcon:sk,ListFilterPlus:dk,ListFilterPlusIcon:dk,ListIcon:gk,ListMinus:hk,ListMinusIcon:hk,ListMusic:lk,ListMusicIcon:lk,ListOrdered:yk,ListOrderedIcon:yk,ListPlus:pk,ListPlusIcon:pk,ListRestart:uk,ListRestartIcon:uk,ListStart:kk,ListStartIcon:kk,ListTodo:fk,ListTodoIcon:fk,ListTree:Mk,ListTreeIcon:Mk,ListVideo:mk,ListVideoIcon:mk,ListX:vk,ListXIcon:vk,Loader:_k,Loader2:Ve,Loader2Icon:Ve,LoaderCircle:Ve,LoaderCircleIcon:Ve,LoaderIcon:_k,LoaderPinwheel:xk,LoaderPinwheelIcon:xk,Locate:Ck,LocateFixed:wk,LocateFixedIcon:wk,LocateIcon:Ck,LocateOff:Lk,LocateOffIcon:Lk,Lock:Ik,LockIcon:Ik,LockKeyhole:bk,LockKeyholeIcon:bk,LockKeyholeOpen:Ht,LockKeyholeOpenIcon:Ht,LockOpen:zt,LockOpenIcon:zt,LogIn:wn,LogInIcon:wn,LogOut:Xa,LogOutIcon:Xa,Logs:Nk,LogsIcon:Nk,Lollipop:Sk,LollipopIcon:Sk,LucideAArrowDown:Nn,LucideAArrowUp:Sn,LucideALargeSmall:$n,LucideAccessibility:An,LucideActivity:qn,LucideActivitySquare:ro,LucideAirVent:Pn,LucideAirplay:jn,LucideAlarmCheck:Xe,LucideAlarmClock:zn,LucideAlarmClockCheck:Xe,LucideAlarmClockMinus:Ke,LucideAlarmClockOff:Hn,LucideAlarmClockPlus:Ye,LucideAlarmMinus:Ke,LucideAlarmPlus:Ye,LucideAlarmSmoke:Rn,LucideAlbum:Dn,LucideAlertCircle:L1,LucideAlertOctagon:Vt,LucideAlertTriangle:Ee,LucideAlignCenter:Fn,LucideAlignCenterHorizontal:Vn,LucideAlignCenterVertical:Tn,LucideAlignEndHorizontal:Bn,LucideAlignEndVertical:En,LucideAlignHorizontalDistributeCenter:On,LucideAlignHorizontalDistributeEnd:Un,LucideAlignHorizontalDistributeStart:Gn,LucideAlignHorizontalJustifyCenter:Zn,LucideAlignHorizontalJustifyEnd:Wn,LucideAlignHorizontalJustifyStart:Xn,LucideAlignHorizontalSpaceAround:Kn,LucideAlignHorizontalSpaceBetween:Yn,LucideAlignJustify:Qn,LucideAlignLeft:Jn,LucideAlignRight:e2,LucideAlignStartHorizontal:t2,LucideAlignStartVertical:o2,LucideAlignVerticalDistributeCenter:a2,LucideAlignVerticalDistributeEnd:n2,LucideAlignVerticalDistributeStart:c2,LucideAlignVerticalJustifyCenter:i2,LucideAlignVerticalJustifyEnd:r2,LucideAlignVerticalJustifyStart:d2,LucideAlignVerticalSpaceAround:s2,LucideAlignVerticalSpaceBetween:h2,LucideAmbulance:l2,LucideAmpersand:y2,LucideAmpersands:p2,LucideAmphora:u2,LucideAnchor:k2,LucideAngry:f2,LucideAnnoyed:M2,LucideAntenna:m2,LucideAnvil:v2,LucideAperture:g2,LucideAppWindow:_2,LucideAppWindowMac:x2,LucideApple:w2,LucideArchive:b2,LucideArchiveRestore:L2,LucideArchiveX:C2,LucideAreaChart:l1,LucideArmchair:I2,LucideArrowBigDown:S2,LucideArrowBigDownDash:N2,LucideArrowBigLeft:A2,LucideArrowBigLeftDash:$2,LucideArrowBigRight:P2,LucideArrowBigRightDash:q2,LucideArrowBigUp:H2,LucideArrowBigUpDash:j2,LucideArrowDown:U2,LucideArrowDown01:z2,LucideArrowDown10:R2,LucideArrowDownAZ:Qe,LucideArrowDownAz:Qe,LucideArrowDownCircle:C1,LucideArrowDownFromLine:D2,LucideArrowDownLeft:V2,LucideArrowDownLeftFromCircle:I1,LucideArrowDownLeftFromSquare:po,LucideArrowDownLeftSquare:so,LucideArrowDownNarrowWide:T2,LucideArrowDownRight:F2,LucideArrowDownRightFromCircle:N1,LucideArrowDownRightFromSquare:uo,LucideArrowDownRightSquare:ho,LucideArrowDownSquare:lo,LucideArrowDownToDot:B2,LucideArrowDownToLine:E2,LucideArrowDownUp:O2,LucideArrowDownWideNarrow:Je,LucideArrowDownZA:e1,LucideArrowDownZa:e1,LucideArrowLeft:X2,LucideArrowLeftCircle:b1,LucideArrowLeftFromLine:G2,LucideArrowLeftRight:Z2,LucideArrowLeftSquare:yo,LucideArrowLeftToLine:W2,LucideArrowRight:J2,LucideArrowRightCircle:A1,LucideArrowRightFromLine:K2,LucideArrowRightLeft:Y2,LucideArrowRightSquare:Mo,LucideArrowRightToLine:Q2,LucideArrowUp:sc,LucideArrowUp01:ec,LucideArrowUp10:tc,LucideArrowUpAZ:t1,LucideArrowUpAz:t1,LucideArrowUpCircle:q1,LucideArrowUpDown:oc,LucideArrowUpFromDot:ac,LucideArrowUpFromLine:nc,LucideArrowUpLeft:cc,LucideArrowUpLeftFromCircle:S1,LucideArrowUpLeftFromSquare:ko,LucideArrowUpLeftSquare:mo,LucideArrowUpNarrowWide:o1,LucideArrowUpRight:ic,LucideArrowUpRightFromCircle:$1,LucideArrowUpRightFromSquare:fo,LucideArrowUpRightSquare:vo,LucideArrowUpSquare:go,LucideArrowUpToLine:rc,LucideArrowUpWideNarrow:dc,LucideArrowUpZA:a1,LucideArrowUpZa:a1,LucideArrowsUpFromLine:hc,LucideAsterisk:lc,LucideAsteriskSquare:xo,LucideAtSign:yc,LucideAtom:pc,LucideAudioLines:uc,LucideAudioWaveform:kc,LucideAward:fc,LucideAxe:Mc,LucideAxis3D:n1,LucideAxis3d:n1,LucideBaby:mc,LucideBackpack:vc,LucideBadge:Hc,LucideBadgeAlert:gc,LucideBadgeCent:xc,LucideBadgeCheck:c1,LucideBadgeDollarSign:_c,LucideBadgeEuro:wc,LucideBadgeHelp:Lc,LucideBadgeIndianRupee:Cc,LucideBadgeInfo:bc,LucideBadgeJapaneseYen:Ic,LucideBadgeMinus:Nc,LucideBadgePercent:Sc,LucideBadgePlus:$c,LucideBadgePoundSterling:Ac,LucideBadgeRussianRuble:qc,LucideBadgeSwissFranc:Pc,LucideBadgeX:jc,LucideBaggageClaim:zc,LucideBan:Rc,LucideBanana:Dc,LucideBandage:Vc,LucideBanknote:Tc,LucideBarChart:v1,LucideBarChart2:g1,LucideBarChart3:M1,LucideBarChart4:f1,LucideBarChartBig:k1,LucideBarChartHorizontal:p1,LucideBarChartHorizontalBig:y1,LucideBarcode:Fc,LucideBaseline:Bc,LucideBath:Ec,LucideBattery:Kc,LucideBatteryCharging:Oc,LucideBatteryFull:Uc,LucideBatteryLow:Gc,LucideBatteryMedium:Zc,LucideBatteryPlus:Wc,LucideBatteryWarning:Xc,LucideBeaker:Yc,LucideBean:Jc,LucideBeanOff:Qc,LucideBed:oi,LucideBedDouble:ei,LucideBedSingle:ti,LucideBeef:ai,LucideBeer:ci,LucideBeerOff:ni,LucideBell:yi,LucideBellDot:ii,LucideBellElectric:ri,LucideBellMinus:di,LucideBellOff:si,LucideBellPlus:hi,LucideBellRing:li,LucideBetweenHorizonalEnd:i1,LucideBetweenHorizonalStart:r1,LucideBetweenHorizontalEnd:i1,LucideBetweenHorizontalStart:r1,LucideBetweenVerticalEnd:pi,LucideBetweenVerticalStart:ui,LucideBicepsFlexed:ki,LucideBike:fi,LucideBinary:Mi,LucideBinoculars:mi,LucideBiohazard:vi,LucideBird:gi,LucideBitcoin:xi,LucideBlend:_i,LucideBlinds:wi,LucideBlocks:Li,LucideBluetooth:Ni,LucideBluetoothConnected:Ci,LucideBluetoothOff:bi,LucideBluetoothSearching:Ii,LucideBold:Si,LucideBolt:$i,LucideBomb:Ai,LucideBone:qi,LucideBook:tr,LucideBookA:Pi,LucideBookAudio:ji,LucideBookCheck:Hi,LucideBookCopy:zi,LucideBookDashed:d1,LucideBookDown:Ri,LucideBookHeadphones:Di,LucideBookHeart:Vi,LucideBookImage:Ti,LucideBookKey:Fi,LucideBookLock:Bi,LucideBookMarked:Ei,LucideBookMinus:Oi,LucideBookOpen:Zi,LucideBookOpenCheck:Ui,LucideBookOpenText:Gi,LucideBookPlus:Wi,LucideBookTemplate:d1,LucideBookText:Xi,LucideBookType:Ki,LucideBookUp:Qi,LucideBookUp2:Yi,LucideBookUser:Ji,LucideBookX:er,LucideBookmark:ir,LucideBookmarkCheck:or,LucideBookmarkMinus:ar,LucideBookmarkPlus:nr,LucideBookmarkX:cr,LucideBoomBox:rr,LucideBot:hr,LucideBotMessageSquare:dr,LucideBotOff:sr,LucideBox:lr,LucideBoxSelect:qo,LucideBoxes:yr,LucideBraces:s1,LucideBrackets:pr,LucideBrain:fr,LucideBrainCircuit:ur,LucideBrainCog:kr,LucideBrickWall:Mr,LucideBriefcase:xr,LucideBriefcaseBusiness:mr,LucideBriefcaseConveyorBelt:vr,LucideBriefcaseMedical:gr,LucideBringToFront:_r,LucideBrush:wr,LucideBug:br,LucideBugOff:Lr,LucideBugPlay:Cr,LucideBuilding:Nr,LucideBuilding2:Ir,LucideBus:$r,LucideBusFront:Sr,LucideCable:qr,LucideCableCar:Ar,LucideCake:jr,LucideCakeSlice:Pr,LucideCalculator:Hr,LucideCalendar:o0,LucideCalendar1:zr,LucideCalendarArrowDown:Rr,LucideCalendarArrowUp:Dr,LucideCalendarCheck:Tr,LucideCalendarCheck2:Vr,LucideCalendarClock:Fr,LucideCalendarCog:Br,LucideCalendarDays:Er,LucideCalendarFold:Or,LucideCalendarHeart:Ur,LucideCalendarMinus:Zr,LucideCalendarMinus2:Gr,LucideCalendarOff:Wr,LucideCalendarPlus:Kr,LucideCalendarPlus2:Xr,LucideCalendarRange:Yr,LucideCalendarSearch:Qr,LucideCalendarSync:Jr,LucideCalendarX:t0,LucideCalendarX2:e0,LucideCamera:n0,LucideCameraOff:a0,LucideCandlestickChart:u1,LucideCandy:r0,LucideCandyCane:c0,LucideCandyOff:i0,LucideCannabis:d0,LucideCaptions:h1,LucideCaptionsOff:s0,LucideCar:y0,LucideCarFront:h0,LucideCarTaxiFront:l0,LucideCaravan:p0,LucideCarrot:u0,LucideCaseLower:k0,LucideCaseSensitive:f0,LucideCaseUpper:M0,LucideCassetteTape:m0,LucideCast:v0,LucideCastle:g0,LucideCat:x0,LucideCctv:_0,LucideChartArea:l1,LucideChartBar:p1,LucideChartBarBig:y1,LucideChartBarDecreasing:w0,LucideChartBarIncreasing:L0,LucideChartBarStacked:C0,LucideChartCandlestick:u1,LucideChartColumn:M1,LucideChartColumnBig:k1,LucideChartColumnDecreasing:b0,LucideChartColumnIncreasing:f1,LucideChartColumnStacked:I0,LucideChartGantt:N0,LucideChartLine:m1,LucideChartNetwork:S0,LucideChartNoAxesColumn:g1,LucideChartNoAxesColumnDecreasing:$0,LucideChartNoAxesColumnIncreasing:v1,LucideChartNoAxesCombined:A0,LucideChartNoAxesGantt:x1,LucideChartPie:_1,LucideChartScatter:w1,LucideChartSpline:q0,LucideCheck:_n,LucideCheckCheck:P0,LucideCheckCircle:P1,LucideCheckCircle2:Te,LucideCheckSquare:wo,LucideCheckSquare2:Lo,LucideChefHat:j0,LucideCherry:H0,LucideChevronDown:z0,LucideChevronDownCircle:j1,LucideChevronDownSquare:Co,LucideChevronFirst:R0,LucideChevronLast:D0,LucideChevronLeft:V0,LucideChevronLeftCircle:H1,LucideChevronLeftSquare:bo,LucideChevronRight:Da,LucideChevronRightCircle:z1,LucideChevronRightSquare:Io,LucideChevronUp:T0,LucideChevronUpCircle:R1,LucideChevronUpSquare:No,LucideChevronsDown:B0,LucideChevronsDownUp:F0,LucideChevronsLeft:U0,LucideChevronsLeftRight:O0,LucideChevronsLeftRightEllipsis:E0,LucideChevronsRight:Z0,LucideChevronsRightLeft:G0,LucideChevronsUp:W0,LucideChevronsUpDown:Za,LucideChrome:X0,LucideChurch:K0,LucideCigarette:Q0,LucideCigaretteOff:Y0,LucideCircle:Va,LucideCircleAlert:L1,LucideCircleArrowDown:C1,LucideCircleArrowLeft:b1,LucideCircleArrowOutDownLeft:I1,LucideCircleArrowOutDownRight:N1,LucideCircleArrowOutUpLeft:S1,LucideCircleArrowOutUpRight:$1,LucideCircleArrowRight:A1,LucideCircleArrowUp:q1,LucideCircleCheck:Te,LucideCircleCheckBig:P1,LucideCircleChevronDown:j1,LucideCircleChevronLeft:H1,LucideCircleChevronRight:z1,LucideCircleChevronUp:R1,LucideCircleDashed:J0,LucideCircleDivide:D1,LucideCircleDollarSign:ed,LucideCircleDot:od,LucideCircleDotDashed:td,LucideCircleEllipsis:ad,LucideCircleEqual:nd,LucideCircleFadingArrowUp:cd,LucideCircleFadingPlus:id,LucideCircleGauge:V1,LucideCircleHelp:T1,LucideCircleMinus:F1,LucideCircleOff:rd,LucideCircleParking:E1,LucideCircleParkingOff:B1,LucideCirclePause:O1,LucideCirclePercent:U1,LucideCirclePlay:G1,LucideCirclePlus:Z1,LucideCirclePower:W1,LucideCircleSlash:dd,LucideCircleSlash2:X1,LucideCircleSlashed:X1,LucideCircleSmall:sd,LucideCircleStop:K1,LucideCircleUser:Q1,LucideCircleUserRound:Y1,LucideCircleX:J1,LucideCircuitBoard:hd,LucideCitrus:ld,LucideClapperboard:yd,LucideClipboard:xd,LucideClipboardCheck:pd,LucideClipboardCopy:ud,LucideClipboardEdit:tt,LucideClipboardList:kd,LucideClipboardMinus:fd,LucideClipboardPaste:Md,LucideClipboardPen:tt,LucideClipboardPenLine:et,LucideClipboardPlus:md,LucideClipboardSignature:et,LucideClipboardType:vd,LucideClipboardX:gd,LucideClock:Rd,LucideClock1:_d,LucideClock10:wd,LucideClock11:Ld,LucideClock12:Cd,LucideClock2:bd,LucideClock3:Id,LucideClock4:Nd,LucideClock5:Sd,LucideClock6:$d,LucideClock7:Ad,LucideClock8:qd,LucideClock9:Pd,LucideClockAlert:jd,LucideClockArrowDown:Hd,LucideClockArrowUp:zd,LucideCloud:Qd,LucideCloudAlert:Dd,LucideCloudCog:Vd,LucideCloudDownload:ot,LucideCloudDrizzle:Td,LucideCloudFog:Fd,LucideCloudHail:Bd,LucideCloudLightning:Ed,LucideCloudMoon:Ud,LucideCloudMoonRain:Od,LucideCloudOff:Gd,LucideCloudRain:Wd,LucideCloudRainWind:Zd,LucideCloudSnow:Xd,LucideCloudSun:Yd,LucideCloudSunRain:Kd,LucideCloudUpload:at,LucideCloudy:Jd,LucideClover:es,LucideClub:ts,LucideCode:os,LucideCode2:nt,LucideCodeSquare:So,LucideCodeXml:nt,LucideCodepen:as,LucideCodesandbox:ns,LucideCoffee:cs,LucideCog:is,LucideCoins:rs,LucideColumns:ct,LucideColumns2:ct,LucideColumns3:it,LucideColumns4:ds,LucideCombine:ss,LucideCommand:hs,LucideCompass:ls,LucideComponent:ys,LucideComputer:ps,LucideConciergeBell:us,LucideCone:ks,LucideConstruction:fs,LucideContact:Ms,LucideContact2:rt,LucideContactRound:rt,LucideContainer:ms,LucideContrast:vs,LucideCookie:gs,LucideCookingPot:xs,LucideCopy:Is,LucideCopyCheck:_s,LucideCopyMinus:ws,LucideCopyPlus:Ls,LucideCopySlash:Cs,LucideCopyX:bs,LucideCopyleft:Ns,LucideCopyright:Ss,LucideCornerDownLeft:$s,LucideCornerDownRight:As,LucideCornerLeftDown:qs,LucideCornerLeftUp:Ps,LucideCornerRightDown:js,LucideCornerRightUp:Hs,LucideCornerUpLeft:zs,LucideCornerUpRight:Rs,LucideCpu:Ds,LucideCreativeCommons:Vs,LucideCreditCard:Ts,LucideCroissant:Fs,LucideCrop:Bs,LucideCross:Es,LucideCrosshair:Os,LucideCrown:Us,LucideCuboid:Gs,LucideCupSoda:Zs,LucideCurlyBraces:s1,LucideCurrency:Ws,LucideCylinder:Xs,LucideDam:Ks,LucideDatabase:Js,LucideDatabaseBackup:Ys,LucideDatabaseZap:Qs,LucideDelete:eh,LucideDessert:th,LucideDiameter:oh,LucideDiamond:ch,LucideDiamondMinus:ah,LucideDiamondPercent:dt,LucideDiamondPlus:nh,LucideDice1:ih,LucideDice2:rh,LucideDice3:dh,LucideDice4:sh,LucideDice5:hh,LucideDice6:lh,LucideDices:yh,LucideDiff:ph,LucideDisc:Mh,LucideDisc2:uh,LucideDisc3:kh,LucideDiscAlbum:fh,LucideDivide:mh,LucideDivideCircle:D1,LucideDivideSquare:Po,LucideDna:gh,LucideDnaOff:vh,LucideDock:xh,LucideDog:_h,LucideDollarSign:wh,LucideDonut:Lh,LucideDoorClosed:Ch,LucideDoorOpen:bh,LucideDot:Ih,LucideDotSquare:jo,LucideDownload:Nh,LucideDownloadCloud:ot,LucideDraftingCompass:Sh,LucideDrama:$h,LucideDribbble:Ah,LucideDrill:qh,LucideDroplet:jh,LucideDropletOff:Ph,LucideDroplets:Hh,LucideDrum:zh,LucideDrumstick:Rh,LucideDumbbell:Dh,LucideEar:Th,LucideEarOff:Vh,LucideEarth:st,LucideEarthLock:Fh,LucideEclipse:Bh,LucideEdit:de,LucideEdit2:Kt,LucideEdit3:Xt,LucideEgg:Uh,LucideEggFried:Eh,LucideEggOff:Oh,LucideEllipsis:lt,LucideEllipsisVertical:ht,LucideEqual:Wh,LucideEqualApproximately:Gh,LucideEqualNot:Zh,LucideEqualSquare:Ho,LucideEraser:Xh,LucideEthernetPort:Kh,LucideEuro:Yh,LucideExpand:Qh,LucideExternalLink:Jh,LucideEye:ol,LucideEyeClosed:el,LucideEyeOff:tl,LucideFacebook:al,LucideFactory:nl,LucideFan:cl,LucideFastForward:il,LucideFeather:rl,LucideFence:dl,LucideFerrisWheel:sl,LucideFigma:hl,LucideFile:ry,LucideFileArchive:ll,LucideFileAudio:pl,LucideFileAudio2:yl,LucideFileAxis3D:yt,LucideFileAxis3d:yt,LucideFileBadge:kl,LucideFileBadge2:ul,LucideFileBarChart:pt,LucideFileBarChart2:ut,LucideFileBox:fl,LucideFileChartColumn:ut,LucideFileChartColumnIncreasing:pt,LucideFileChartLine:kt,LucideFileChartPie:ft,LucideFileCheck:ml,LucideFileCheck2:Ml,LucideFileClock:vl,LucideFileCode:xl,LucideFileCode2:gl,LucideFileCog:Mt,LucideFileCog2:Mt,LucideFileDiff:_l,LucideFileDigit:wl,LucideFileDown:Ll,LucideFileEdit:vt,LucideFileHeart:Cl,LucideFileImage:bl,LucideFileInput:Il,LucideFileJson:Sl,LucideFileJson2:Nl,LucideFileKey:Al,LucideFileKey2:$l,LucideFileLineChart:kt,LucideFileLock:Pl,LucideFileLock2:ql,LucideFileMinus:Hl,LucideFileMinus2:jl,LucideFileMusic:zl,LucideFileOutput:Rl,LucideFilePen:vt,LucideFilePenLine:mt,LucideFilePieChart:ft,LucideFilePlus:Vl,LucideFilePlus2:Dl,LucideFileQuestion:Tl,LucideFileScan:Fl,LucideFileSearch:El,LucideFileSearch2:Bl,LucideFileSignature:mt,LucideFileSliders:Ol,LucideFileSpreadsheet:Ul,LucideFileStack:Gl,LucideFileSymlink:Zl,LucideFileTerminal:Wl,LucideFileText:Xl,LucideFileType:Yl,LucideFileType2:Kl,LucideFileUp:Ql,LucideFileUser:Jl,LucideFileVideo:ty,LucideFileVideo2:ey,LucideFileVolume:ay,LucideFileVolume2:oy,LucideFileWarning:ny,LucideFileX:iy,LucideFileX2:cy,LucideFiles:dy,LucideFilm:sy,LucideFilter:ly,LucideFilterX:hy,LucideFingerprint:yy,LucideFireExtinguisher:py,LucideFish:fy,LucideFishOff:uy,LucideFishSymbol:ky,LucideFlag:gy,LucideFlagOff:My,LucideFlagTriangleLeft:my,LucideFlagTriangleRight:vy,LucideFlame:_y,LucideFlameKindling:xy,LucideFlashlight:Ly,LucideFlashlightOff:wy,LucideFlaskConical:by,LucideFlaskConicalOff:Cy,LucideFlaskRound:Iy,LucideFlipHorizontal:Sy,LucideFlipHorizontal2:Ny,LucideFlipVertical:Ay,LucideFlipVertical2:$y,LucideFlower:Py,LucideFlower2:qy,LucideFocus:jy,LucideFoldHorizontal:Hy,LucideFoldVertical:zy,LucideFolder:hp,LucideFolderArchive:Ry,LucideFolderCheck:Dy,LucideFolderClock:Vy,LucideFolderClosed:Ty,LucideFolderCode:Fy,LucideFolderCog:gt,LucideFolderCog2:gt,LucideFolderDot:By,LucideFolderDown:Ey,LucideFolderEdit:xt,LucideFolderGit:Uy,LucideFolderGit2:Oy,LucideFolderHeart:Gy,LucideFolderInput:Zy,LucideFolderKanban:Wy,LucideFolderKey:Xy,LucideFolderLock:Ky,LucideFolderMinus:Yy,LucideFolderOpen:Jy,LucideFolderOpenDot:Qy,LucideFolderOutput:ep,LucideFolderPen:xt,LucideFolderPlus:tp,LucideFolderRoot:op,LucideFolderSearch:np,LucideFolderSearch2:ap,LucideFolderSymlink:cp,LucideFolderSync:ip,LucideFolderTree:rp,LucideFolderUp:dp,LucideFolderX:sp,LucideFolders:lp,LucideFootprints:yp,LucideForkKnife:ga,LucideForkKnifeCrossed:va,LucideForklift:pp,LucideFormInput:Qt,LucideForward:up,LucideFrame:kp,LucideFramer:fp,LucideFrown:Mp,LucideFuel:mp,LucideFullscreen:vp,LucideFunctionSquare:zo,LucideGalleryHorizontal:xp,LucideGalleryHorizontalEnd:gp,LucideGalleryThumbnails:_p,LucideGalleryVertical:Lp,LucideGalleryVerticalEnd:wp,LucideGamepad:bp,LucideGamepad2:Cp,LucideGanttChart:x1,LucideGanttChartSquare:we,LucideGauge:Ip,LucideGaugeCircle:V1,LucideGavel:Np,LucideGem:Sp,LucideGhost:$p,LucideGift:Ap,LucideGitBranch:Pp,LucideGitBranchPlus:qp,LucideGitCommit:_t,LucideGitCommitHorizontal:_t,LucideGitCommitVertical:jp,LucideGitCompare:zp,LucideGitCompareArrows:Hp,LucideGitFork:Rp,LucideGitGraph:Dp,LucideGitMerge:Vp,LucideGitPullRequest:Up,LucideGitPullRequestArrow:Tp,LucideGitPullRequestClosed:Fp,LucideGitPullRequestCreate:Ep,LucideGitPullRequestCreateArrow:Bp,LucideGitPullRequestDraft:Op,LucideGithub:Gp,LucideGitlab:Zp,LucideGlassWater:Wp,LucideGlasses:Xp,LucideGlobe:Yp,LucideGlobe2:st,LucideGlobeLock:Kp,LucideGoal:Qp,LucideGrab:Jp,LucideGraduationCap:eu,LucideGrape:tu,LucideGrid:_e,LucideGrid2X2:bt,LucideGrid2X2Check:wt,LucideGrid2X2Plus:Lt,LucideGrid2X2X:Ct,LucideGrid2x2:bt,LucideGrid2x2Check:wt,LucideGrid2x2Plus:Lt,LucideGrid2x2X:Ct,LucideGrid3X3:_e,LucideGrid3x3:_e,LucideGrip:nu,LucideGripHorizontal:ou,LucideGripVertical:au,LucideGroup:cu,LucideGuitar:iu,LucideHam:ru,LucideHammer:du,LucideHand:pu,LucideHandCoins:su,LucideHandHeart:hu,LucideHandHelping:It,LucideHandMetal:lu,LucideHandPlatter:yu,LucideHandshake:uu,LucideHardDrive:Mu,LucideHardDriveDownload:ku,LucideHardDriveUpload:fu,LucideHardHat:mu,LucideHash:vu,LucideHaze:gu,LucideHdmiPort:xu,LucideHeading:Nu,LucideHeading1:_u,LucideHeading2:wu,LucideHeading3:Lu,LucideHeading4:Cu,LucideHeading5:bu,LucideHeading6:Iu,LucideHeadphoneOff:Su,LucideHeadphones:$u,LucideHeadset:Au,LucideHeart:zu,LucideHeartCrack:qu,LucideHeartHandshake:Pu,LucideHeartOff:ju,LucideHeartPulse:Hu,LucideHeater:Ru,LucideHelpCircle:T1,LucideHelpingHand:It,LucideHexagon:Du,LucideHighlighter:Vu,LucideHistory:Tu,LucideHome:Nt,LucideHop:Bu,LucideHopOff:Fu,LucideHospital:Eu,LucideHotel:Ou,LucideHourglass:Uu,LucideHouse:Nt,LucideHousePlug:Gu,LucideHousePlus:Zu,LucideHouseWifi:Wu,LucideIceCream:$t,LucideIceCream2:St,LucideIceCreamBowl:St,LucideIceCreamCone:$t,LucideIdCard:Xu,LucideImage:a4,LucideImageDown:Ku,LucideImageMinus:Yu,LucideImageOff:Qu,LucideImagePlay:Ju,LucideImagePlus:e4,LucideImageUp:t4,LucideImageUpscale:o4,LucideImages:n4,LucideImport:c4,LucideInbox:i4,LucideIndent:qt,LucideIndentDecrease:At,LucideIndentIncrease:qt,LucideIndianRupee:r4,LucideInfinity:d4,LucideInfo:Wa,LucideInspect:Bo,LucideInspectionPanel:s4,LucideInstagram:h4,LucideItalic:l4,LucideIterationCcw:y4,LucideIterationCw:p4,LucideJapaneseYen:u4,LucideJoystick:k4,LucideKanban:f4,LucideKanbanSquare:Ro,LucideKanbanSquareDashed:$o,LucideKey:v4,LucideKeyRound:M4,LucideKeySquare:m4,LucideKeyboard:_4,LucideKeyboardMusic:g4,LucideKeyboardOff:x4,LucideLamp:N4,LucideLampCeiling:w4,LucideLampDesk:L4,LucideLampFloor:C4,LucideLampWallDown:b4,LucideLampWallUp:I4,LucideLandPlot:S4,LucideLandmark:$4,LucideLanguages:A4,LucideLaptop:P4,LucideLaptop2:Pt,LucideLaptopMinimal:Pt,LucideLaptopMinimalCheck:q4,LucideLasso:H4,LucideLassoSelect:j4,LucideLaugh:z4,LucideLayers:jt,LucideLayers2:R4,LucideLayers3:jt,LucideLayout:Wt,LucideLayoutDashboard:D4,LucideLayoutGrid:V4,LucideLayoutList:T4,LucideLayoutPanelLeft:F4,LucideLayoutPanelTop:B4,LucideLayoutTemplate:E4,LucideLeaf:O4,LucideLeafyGreen:U4,LucideLectern:G4,LucideLetterText:Z4,LucideLibrary:X4,LucideLibraryBig:W4,LucideLibrarySquare:Do,LucideLifeBuoy:K4,LucideLigature:Y4,LucideLightbulb:J4,LucideLightbulbOff:Q4,LucideLineChart:m1,LucideLink:ok,LucideLink2:tk,LucideLink2Off:ek,LucideLinkedin:ak,LucideList:gk,LucideListCheck:nk,LucideListChecks:ck,LucideListCollapse:ik,LucideListEnd:rk,LucideListFilter:sk,LucideListFilterPlus:dk,LucideListMinus:hk,LucideListMusic:lk,LucideListOrdered:yk,LucideListPlus:pk,LucideListRestart:uk,LucideListStart:kk,LucideListTodo:fk,LucideListTree:Mk,LucideListVideo:mk,LucideListX:vk,LucideLoader:_k,LucideLoader2:Ve,LucideLoaderCircle:Ve,LucideLoaderPinwheel:xk,LucideLocate:Ck,LucideLocateFixed:wk,LucideLocateOff:Lk,LucideLock:Ik,LucideLockKeyhole:bk,LucideLockKeyholeOpen:Ht,LucideLockOpen:zt,LucideLogIn:wn,LucideLogOut:Xa,LucideLogs:Nk,LucideLollipop:Sk,LucideLuggage:$k,LucideMSquare:Vo,LucideMagnet:Ak,LucideMail:Tk,LucideMailCheck:qk,LucideMailMinus:Pk,LucideMailOpen:jk,LucideMailPlus:Hk,LucideMailQuestion:zk,LucideMailSearch:Rk,LucideMailWarning:Dk,LucideMailX:Vk,LucideMailbox:Fk,LucideMails:Bk,LucideMap:o5,LucideMapPin:Jk,LucideMapPinCheck:Ok,LucideMapPinCheckInside:Ek,LucideMapPinHouse:Uk,LucideMapPinMinus:Zk,LucideMapPinMinusInside:Gk,LucideMapPinOff:Wk,LucideMapPinPlus:Kk,LucideMapPinPlusInside:Xk,LucideMapPinX:Qk,LucideMapPinXInside:Yk,LucideMapPinned:e5,LucideMapPlus:t5,LucideMars:n5,LucideMarsStroke:a5,LucideMartini:c5,LucideMaximize:r5,LucideMaximize2:i5,LucideMedal:d5,LucideMegaphone:h5,LucideMegaphoneOff:s5,LucideMeh:l5,LucideMemoryStick:y5,LucideMenu:p5,LucideMenuSquare:To,LucideMerge:u5,LucideMessageCircle:C5,LucideMessageCircleCode:k5,LucideMessageCircleDashed:f5,LucideMessageCircleHeart:M5,LucideMessageCircleMore:m5,LucideMessageCircleOff:v5,LucideMessageCirclePlus:g5,LucideMessageCircleQuestion:x5,LucideMessageCircleReply:_5,LucideMessageCircleWarning:w5,LucideMessageCircleX:L5,LucideMessageSquare:F5,LucideMessageSquareCode:b5,LucideMessageSquareDashed:I5,LucideMessageSquareDiff:N5,LucideMessageSquareDot:S5,LucideMessageSquareHeart:$5,LucideMessageSquareLock:A5,LucideMessageSquareMore:q5,LucideMessageSquareOff:P5,LucideMessageSquarePlus:j5,LucideMessageSquareQuote:H5,LucideMessageSquareReply:z5,LucideMessageSquareShare:R5,LucideMessageSquareText:D5,LucideMessageSquareWarning:V5,LucideMessageSquareX:T5,LucideMessagesSquare:B5,LucideMic:O5,LucideMic2:Rt,LucideMicOff:E5,LucideMicVocal:Rt,LucideMicrochip:U5,LucideMicroscope:G5,LucideMicrowave:Z5,LucideMilestone:W5,LucideMilk:K5,LucideMilkOff:X5,LucideMinimize:Q5,LucideMinimize2:Y5,LucideMinus:Ln,LucideMinusCircle:F1,LucideMinusSquare:Fo,LucideMonitor:l3,LucideMonitorCheck:J5,LucideMonitorCog:e3,LucideMonitorDot:t3,LucideMonitorDown:o3,LucideMonitorOff:a3,LucideMonitorPause:n3,LucideMonitorPlay:c3,LucideMonitorSmartphone:i3,LucideMonitorSpeaker:r3,LucideMonitorStop:d3,LucideMonitorUp:s3,LucideMonitorX:h3,LucideMoon:p3,LucideMoonStar:y3,LucideMoreHorizontal:lt,LucideMoreVertical:ht,LucideMountain:k3,LucideMountainSnow:u3,LucideMouse:x3,LucideMouseOff:f3,LucideMousePointer:g3,LucideMousePointer2:M3,LucideMousePointerBan:m3,LucideMousePointerClick:v3,LucideMousePointerSquareDashed:Ao,LucideMove:j3,LucideMove3D:Dt,LucideMove3d:Dt,LucideMoveDiagonal:w3,LucideMoveDiagonal2:_3,LucideMoveDown:b3,LucideMoveDownLeft:L3,LucideMoveDownRight:C3,LucideMoveHorizontal:I3,LucideMoveLeft:N3,LucideMoveRight:S3,LucideMoveUp:q3,LucideMoveUpLeft:$3,LucideMoveUpRight:A3,LucideMoveVertical:P3,LucideMusic:D3,LucideMusic2:H3,LucideMusic3:z3,LucideMusic4:R3,LucideNavigation:B3,LucideNavigation2:T3,LucideNavigation2Off:V3,LucideNavigationOff:F3,LucideNetwork:E3,LucideNewspaper:O3,LucideNfc:U3,LucideNonBinary:G3,LucideNotebook:K3,LucideNotebookPen:Z3,LucideNotebookTabs:W3,LucideNotebookText:X3,LucideNotepadText:Q3,LucideNotepadTextDashed:Y3,LucideNut:e6,LucideNutOff:J3,LucideOctagon:o6,LucideOctagonAlert:Vt,LucideOctagonMinus:t6,LucideOctagonPause:Tt,LucideOctagonX:Fe,LucideOmega:a6,LucideOption:n6,LucideOrbit:c6,LucideOrigami:i6,LucideOutdent:At,LucidePackage:u6,LucidePackage2:r6,LucidePackageCheck:d6,LucidePackageMinus:s6,LucidePackageOpen:h6,LucidePackagePlus:l6,LucidePackageSearch:y6,LucidePackageX:p6,LucidePaintBucket:k6,LucidePaintRoller:f6,LucidePaintbrush:M6,LucidePaintbrush2:Ft,LucidePaintbrushVertical:Ft,LucidePalette:m6,LucidePalmtree:sa,LucidePanelBottom:x6,LucidePanelBottomClose:v6,LucidePanelBottomDashed:Bt,LucidePanelBottomInactive:Bt,LucidePanelBottomOpen:g6,LucidePanelLeft:Be,LucidePanelLeftClose:Et,LucidePanelLeftDashed:Ot,LucidePanelLeftInactive:Ot,LucidePanelLeftOpen:Ut,LucidePanelRight:L6,LucidePanelRightClose:_6,LucidePanelRightDashed:Gt,LucidePanelRightInactive:Gt,LucidePanelRightOpen:w6,LucidePanelTop:I6,LucidePanelTopClose:C6,LucidePanelTopDashed:Zt,LucidePanelTopInactive:Zt,LucidePanelTopOpen:b6,LucidePanelsLeftBottom:N6,LucidePanelsLeftRight:it,LucidePanelsRightBottom:S6,LucidePanelsTopBottom:to,LucidePanelsTopLeft:Wt,LucidePaperclip:$6,LucideParentheses:A6,LucideParkingCircle:E1,LucideParkingCircleOff:B1,LucideParkingMeter:q6,LucideParkingSquare:Oo,LucideParkingSquareOff:Eo,LucidePartyPopper:P6,LucidePause:j6,LucidePauseCircle:O1,LucidePauseOctagon:Tt,LucidePawPrint:H6,LucidePcCase:z6,LucidePen:Kt,LucidePenBox:de,LucidePenLine:Xt,LucidePenOff:R6,LucidePenSquare:de,LucidePenTool:D6,LucidePencil:B6,LucidePencilLine:V6,LucidePencilOff:T6,LucidePencilRuler:F6,LucidePentagon:E6,LucidePercent:O6,LucidePercentCircle:U1,LucidePercentDiamond:dt,LucidePercentSquare:Uo,LucidePersonStanding:U6,LucidePhilippinePeso:G6,LucidePhone:J6,LucidePhoneCall:Z6,LucidePhoneForwarded:W6,LucidePhoneIncoming:X6,LucidePhoneMissed:K6,LucidePhoneOff:Y6,LucidePhoneOutgoing:Q6,LucidePi:e8,LucidePiSquare:Go,LucidePiano:t8,LucidePickaxe:o8,LucidePictureInPicture:n8,LucidePictureInPicture2:a8,LucidePieChart:_1,LucidePiggyBank:c8,LucidePilcrow:d8,LucidePilcrowLeft:i8,LucidePilcrowRight:r8,LucidePilcrowSquare:Zo,LucidePill:h8,LucidePillBottle:s8,LucidePin:y8,LucidePinOff:l8,LucidePipette:p8,LucidePizza:u8,LucidePlane:M8,LucidePlaneLanding:k8,LucidePlaneTakeoff:f8,LucidePlay:m8,LucidePlayCircle:G1,LucidePlaySquare:Wo,LucidePlug:g8,LucidePlug2:v8,LucidePlugZap:Yt,LucidePlugZap2:Yt,LucidePlus:x8,LucidePlusCircle:Z1,LucidePlusSquare:Xo,LucidePocket:w8,LucidePocketKnife:_8,LucidePodcast:L8,LucidePointer:b8,LucidePointerOff:C8,LucidePopcorn:I8,LucidePopsicle:N8,LucidePoundSterling:S8,LucidePower:A8,LucidePowerCircle:W1,LucidePowerOff:$8,LucidePowerSquare:Ko,LucidePresentation:q8,LucidePrinter:j8,LucidePrinterCheck:P8,LucideProjector:H8,LucideProportions:z8,LucidePuzzle:R8,LucidePyramid:D8,LucideQrCode:V8,LucideQuote:T8,LucideRabbit:F8,LucideRadar:B8,LucideRadiation:E8,LucideRadical:O8,LucideRadio:Z8,LucideRadioReceiver:U8,LucideRadioTower:G8,LucideRadius:W8,LucideRailSymbol:X8,LucideRainbow:K8,LucideRat:Y8,LucideRatio:Q8,LucideReceipt:r7,LucideReceiptCent:J8,LucideReceiptEuro:e7,LucideReceiptIndianRupee:t7,LucideReceiptJapaneseYen:o7,LucideReceiptPoundSterling:a7,LucideReceiptRussianRuble:n7,LucideReceiptSwissFranc:c7,LucideReceiptText:i7,LucideRectangleEllipsis:Qt,LucideRectangleHorizontal:d7,LucideRectangleVertical:s7,LucideRecycle:h7,LucideRedo:p7,LucideRedo2:l7,LucideRedoDot:y7,LucideRefreshCcw:k7,LucideRefreshCcwDot:u7,LucideRefreshCw:M7,LucideRefreshCwOff:f7,LucideRefrigerator:m7,LucideRegex:v7,LucideRemoveFormatting:g7,LucideRepeat:w7,LucideRepeat1:x7,LucideRepeat2:_7,LucideReplace:C7,LucideReplaceAll:L7,LucideReply:I7,LucideReplyAll:b7,LucideRewind:N7,LucideRibbon:S7,LucideRocket:$7,LucideRockingChair:A7,LucideRollerCoaster:q7,LucideRotate3D:Jt,LucideRotate3d:Jt,LucideRotateCcw:j7,LucideRotateCcwSquare:P7,LucideRotateCw:z7,LucideRotateCwSquare:H7,LucideRoute:D7,LucideRouteOff:R7,LucideRouter:V7,LucideRows:eo,LucideRows2:eo,LucideRows3:to,LucideRows4:T7,LucideRss:F7,LucideRuler:B7,LucideRussianRuble:E7,LucideSailboat:O7,LucideSalad:U7,LucideSandwich:G7,LucideSatellite:W7,LucideSatelliteDish:Z7,LucideSave:Y7,LucideSaveAll:X7,LucideSaveOff:K7,LucideScale:Q7,LucideScale3D:oo,LucideScale3d:oo,LucideScaling:J7,LucideScan:sf,LucideScanBarcode:ef,LucideScanEye:tf,LucideScanFace:of,LucideScanHeart:af,LucideScanLine:nf,LucideScanQrCode:cf,LucideScanSearch:rf,LucideScanText:df,LucideScatterChart:w1,LucideSchool:hf,LucideSchool2:la,LucideScissors:yf,LucideScissorsLineDashed:lf,LucideScissorsSquare:Yo,LucideScissorsSquareDashedBottom:_o,LucideScreenShare:uf,LucideScreenShareOff:pf,LucideScroll:ff,LucideScrollText:kf,LucideSearch:xf,LucideSearchCheck:Mf,LucideSearchCode:mf,LucideSearchSlash:vf,LucideSearchX:gf,LucideSection:_f,LucideSend:Lf,LucideSendHorizonal:ao,LucideSendHorizontal:ao,LucideSendToBack:wf,LucideSeparatorHorizontal:Cf,LucideSeparatorVertical:bf,LucideServer:$f,LucideServerCog:If,LucideServerCrash:Nf,LucideServerOff:Sf,LucideSettings:Ka,LucideSettings2:Af,LucideShapes:qf,LucideShare:jf,LucideShare2:Pf,LucideSheet:Hf,LucideShell:zf,LucideShield:Gf,LucideShieldAlert:Rf,LucideShieldBan:Df,LucideShieldCheck:Vf,LucideShieldClose:no,LucideShieldEllipsis:Tf,LucideShieldHalf:Ff,LucideShieldMinus:Bf,LucideShieldOff:Ef,LucideShieldPlus:Of,LucideShieldQuestion:Uf,LucideShieldX:no,LucideShip:Wf,LucideShipWheel:Zf,LucideShirt:Xf,LucideShoppingBag:Kf,LucideShoppingBasket:Yf,LucideShoppingCart:Qf,LucideShovel:Jf,LucideShowerHead:eM,LucideShrink:tM,LucideShrub:oM,LucideShuffle:aM,LucideSidebar:Be,LucideSidebarClose:Et,LucideSidebarOpen:Ut,LucideSigma:nM,LucideSigmaSquare:Qo,LucideSignal:sM,LucideSignalHigh:cM,LucideSignalLow:iM,LucideSignalMedium:rM,LucideSignalZero:dM,LucideSignature:hM,LucideSignpost:yM,LucideSignpostBig:lM,LucideSiren:pM,LucideSkipBack:uM,LucideSkipForward:kM,LucideSkull:fM,LucideSlack:MM,LucideSlash:mM,LucideSlashSquare:Jo,LucideSlice:vM,LucideSliders:co,LucideSlidersHorizontal:gM,LucideSlidersVertical:co,LucideSmartphone:wM,LucideSmartphoneCharging:xM,LucideSmartphoneNfc:_M,LucideSmile:CM,LucideSmilePlus:LM,LucideSnail:bM,LucideSnowflake:IM,LucideSofa:NM,LucideSortAsc:o1,LucideSortDesc:Je,LucideSoup:SM,LucideSpace:$M,LucideSpade:AM,LucideSparkle:qM,LucideSparkles:io,LucideSpeaker:PM,LucideSpeech:jM,LucideSpellCheck:zM,LucideSpellCheck2:HM,LucideSpline:RM,LucideSplit:DM,LucideSplitSquareHorizontal:ea,LucideSplitSquareVertical:ta,LucideSprayCan:VM,LucideSprout:TM,LucideSquare:GM,LucideSquareActivity:ro,LucideSquareArrowDown:lo,LucideSquareArrowDownLeft:so,LucideSquareArrowDownRight:ho,LucideSquareArrowLeft:yo,LucideSquareArrowOutDownLeft:po,LucideSquareArrowOutDownRight:uo,LucideSquareArrowOutUpLeft:ko,LucideSquareArrowOutUpRight:fo,LucideSquareArrowRight:Mo,LucideSquareArrowUp:go,LucideSquareArrowUpLeft:mo,LucideSquareArrowUpRight:vo,LucideSquareAsterisk:xo,LucideSquareBottomDashedScissors:_o,LucideSquareChartGantt:we,LucideSquareCheck:Lo,LucideSquareCheckBig:wo,LucideSquareChevronDown:Co,LucideSquareChevronLeft:bo,LucideSquareChevronRight:Io,LucideSquareChevronUp:No,LucideSquareCode:So,LucideSquareDashed:qo,LucideSquareDashedBottom:BM,LucideSquareDashedBottomCode:FM,LucideSquareDashedKanban:$o,LucideSquareDashedMousePointer:Ao,LucideSquareDivide:Po,LucideSquareDot:jo,LucideSquareEqual:Ho,LucideSquareFunction:zo,LucideSquareGanttChart:we,LucideSquareKanban:Ro,LucideSquareLibrary:Do,LucideSquareM:Vo,LucideSquareMenu:To,LucideSquareMinus:Fo,LucideSquareMousePointer:Bo,LucideSquareParking:Oo,LucideSquareParkingOff:Eo,LucideSquarePen:de,LucideSquarePercent:Uo,LucideSquarePi:Go,LucideSquarePilcrow:Zo,LucideSquarePlay:Wo,LucideSquarePlus:Xo,LucideSquarePower:Ko,LucideSquareRadical:EM,LucideSquareScissors:Yo,LucideSquareSigma:Qo,LucideSquareSlash:Jo,LucideSquareSplitHorizontal:ea,LucideSquareSplitVertical:ta,LucideSquareSquare:OM,LucideSquareStack:UM,LucideSquareTerminal:oa,LucideSquareUser:na,LucideSquareUserRound:aa,LucideSquareX:ca,LucideSquircle:ZM,LucideSquirrel:WM,LucideStamp:XM,LucideStar:QM,LucideStarHalf:KM,LucideStarOff:YM,LucideStars:io,LucideStepBack:JM,LucideStepForward:e9,LucideStethoscope:t9,LucideSticker:o9,LucideStickyNote:a9,LucideStopCircle:K1,LucideStore:n9,LucideStretchHorizontal:c9,LucideStretchVertical:i9,LucideStrikethrough:r9,LucideSubscript:d9,LucideSubtitles:h1,LucideSun:p9,LucideSunDim:s9,LucideSunMedium:h9,LucideSunMoon:l9,LucideSunSnow:y9,LucideSunrise:u9,LucideSunset:k9,LucideSuperscript:f9,LucideSwatchBook:M9,LucideSwissFranc:m9,LucideSwitchCamera:v9,LucideSword:g9,LucideSwords:x9,LucideSyringe:_9,LucideTable:$9,LucideTable2:w9,LucideTableCellsMerge:L9,LucideTableCellsSplit:C9,LucideTableColumnsSplit:b9,LucideTableOfContents:I9,LucideTableProperties:N9,LucideTableRowsSplit:S9,LucideTablet:q9,LucideTabletSmartphone:A9,LucideTablets:P9,LucideTag:j9,LucideTags:H9,LucideTally1:z9,LucideTally2:R9,LucideTally3:D9,LucideTally4:V9,LucideTally5:T9,LucideTangent:F9,LucideTarget:B9,LucideTelescope:E9,LucideTent:U9,LucideTentTree:O9,LucideTerminal:G9,LucideTerminalSquare:oa,LucideTestTube:Z9,LucideTestTube2:ia,LucideTestTubeDiagonal:ia,LucideTestTubes:W9,LucideText:J9,LucideTextCursor:K9,LucideTextCursorInput:X9,LucideTextQuote:Y9,LucideTextSearch:Q9,LucideTextSelect:ra,LucideTextSelection:ra,LucideTheater:em,LucideThermometer:am,LucideThermometerSnowflake:tm,LucideThermometerSun:om,LucideThumbsDown:nm,LucideThumbsUp:cm,LucideTicket:ym,LucideTicketCheck:im,LucideTicketMinus:rm,LucideTicketPercent:dm,LucideTicketPlus:sm,LucideTicketSlash:hm,LucideTicketX:lm,LucideTickets:um,LucideTicketsPlane:pm,LucideTimer:Mm,LucideTimerOff:km,LucideTimerReset:fm,LucideToggleLeft:mm,LucideToggleRight:vm,LucideToilet:gm,LucideTornado:xm,LucideTorus:_m,LucideTouchpad:Lm,LucideTouchpadOff:wm,LucideTowerControl:Cm,LucideToyBrick:bm,LucideTractor:Im,LucideTrafficCone:Nm,LucideTrain:da,LucideTrainFront:$m,LucideTrainFrontTunnel:Sm,LucideTrainTrack:Am,LucideTramFront:da,LucideTransgender:qm,LucideTrash:jm,LucideTrash2:Pm,LucideTreeDeciduous:Hm,LucideTreePalm:sa,LucideTreePine:zm,LucideTrees:Rm,LucideTrello:Dm,LucideTrendingDown:Vm,LucideTrendingUp:Fm,LucideTrendingUpDown:Tm,LucideTriangle:Om,LucideTriangleAlert:Ee,LucideTriangleDashed:Bm,LucideTriangleRight:Em,LucideTrophy:Um,LucideTruck:Gm,LucideTurtle:Zm,LucideTv:Xm,LucideTv2:ha,LucideTvMinimal:ha,LucideTvMinimalPlay:Wm,LucideTwitch:Km,LucideTwitter:Ym,LucideType:Jm,LucideTypeOutline:Qm,LucideUmbrella:tv,LucideUmbrellaOff:ev,LucideUnderline:ov,LucideUndo:cv,LucideUndo2:av,LucideUndoDot:nv,LucideUnfoldHorizontal:iv,LucideUnfoldVertical:rv,LucideUngroup:dv,LucideUniversity:la,LucideUnlink:hv,LucideUnlink2:sv,LucideUnlock:zt,LucideUnlockKeyhole:Ht,LucideUnplug:lv,LucideUpload:yv,LucideUploadCloud:at,LucideUsb:pv,LucideUser:wv,LucideUser2:Ma,LucideUserCheck:uv,LucideUserCheck2:ya,LucideUserCircle:Q1,LucideUserCircle2:Y1,LucideUserCog:kv,LucideUserCog2:pa,LucideUserMinus:fv,LucideUserMinus2:ua,LucideUserPen:Mv,LucideUserPlus:mv,LucideUserPlus2:ka,LucideUserRound:Ma,LucideUserRoundCheck:ya,LucideUserRoundCog:pa,LucideUserRoundMinus:ua,LucideUserRoundPen:vv,LucideUserRoundPlus:ka,LucideUserRoundSearch:gv,LucideUserRoundX:fa,LucideUserSearch:xv,LucideUserSquare:na,LucideUserSquare2:aa,LucideUserX:_v,LucideUserX2:fa,LucideUsers:Lv,LucideUsers2:ma,LucideUsersRound:ma,LucideUtensils:ga,LucideUtensilsCrossed:va,LucideUtilityPole:Cv,LucideVariable:bv,LucideVault:Iv,LucideVegan:Nv,LucideVenetianMask:Sv,LucideVenus:Av,LucideVenusAndMars:$v,LucideVerified:c1,LucideVibrate:Pv,LucideVibrateOff:qv,LucideVideo:Hv,LucideVideoOff:jv,LucideVideotape:zv,LucideView:Rv,LucideVoicemail:Dv,LucideVolleyball:Vv,LucideVolume:Ov,LucideVolume1:Tv,LucideVolume2:Fv,LucideVolumeOff:Bv,LucideVolumeX:Ev,LucideVote:Uv,LucideWallet:Zv,LucideWallet2:xa,LucideWalletCards:Gv,LucideWalletMinimal:xa,LucideWallpaper:Wv,LucideWand:Xv,LucideWand2:_a,LucideWandSparkles:_a,LucideWarehouse:Kv,LucideWashingMachine:Yv,LucideWatch:Qv,LucideWaves:eg,LucideWavesLadder:Jv,LucideWaypoints:tg,LucideWebcam:og,LucideWebhook:ng,LucideWebhookOff:ag,LucideWeight:cg,LucideWheat:rg,LucideWheatOff:ig,LucideWholeWord:dg,LucideWifi:pg,LucideWifiHigh:sg,LucideWifiLow:hg,LucideWifiOff:lg,LucideWifiZero:yg,LucideWind:kg,LucideWindArrowDown:ug,LucideWine:Mg,LucideWineOff:fg,LucideWorkflow:mg,LucideWorm:vg,LucideWrapText:gg,LucideWrench:xg,LucideX:Ya,LucideXCircle:J1,LucideXOctagon:Fe,LucideXSquare:ca,LucideYoutube:_g,LucideZap:Lg,LucideZapOff:wg,LucideZoomIn:Cg,LucideZoomOut:bg,Luggage:$k,LuggageIcon:$k,MSquare:Vo,MSquareIcon:Vo,Magnet:Ak,MagnetIcon:Ak,Mail:Tk,MailCheck:qk,MailCheckIcon:qk,MailIcon:Tk,MailMinus:Pk,MailMinusIcon:Pk,MailOpen:jk,MailOpenIcon:jk,MailPlus:Hk,MailPlusIcon:Hk,MailQuestion:zk,MailQuestionIcon:zk,MailSearch:Rk,MailSearchIcon:Rk,MailWarning:Dk,MailWarningIcon:Dk,MailX:Vk,MailXIcon:Vk,Mailbox:Fk,MailboxIcon:Fk,Mails:Bk,MailsIcon:Bk,Map:o5,MapIcon:o5,MapPin:Jk,MapPinCheck:Ok,MapPinCheckIcon:Ok,MapPinCheckInside:Ek,MapPinCheckInsideIcon:Ek,MapPinHouse:Uk,MapPinHouseIcon:Uk,MapPinIcon:Jk,MapPinMinus:Zk,MapPinMinusIcon:Zk,MapPinMinusInside:Gk,MapPinMinusInsideIcon:Gk,MapPinOff:Wk,MapPinOffIcon:Wk,MapPinPlus:Kk,MapPinPlusIcon:Kk,MapPinPlusInside:Xk,MapPinPlusInsideIcon:Xk,MapPinX:Qk,MapPinXIcon:Qk,MapPinXInside:Yk,MapPinXInsideIcon:Yk,MapPinned:e5,MapPinnedIcon:e5,MapPlus:t5,MapPlusIcon:t5,Mars:n5,MarsIcon:n5,MarsStroke:a5,MarsStrokeIcon:a5,Martini:c5,MartiniIcon:c5,Maximize:r5,Maximize2:i5,Maximize2Icon:i5,MaximizeIcon:r5,Medal:d5,MedalIcon:d5,Megaphone:h5,MegaphoneIcon:h5,MegaphoneOff:s5,MegaphoneOffIcon:s5,Meh:l5,MehIcon:l5,MemoryStick:y5,MemoryStickIcon:y5,Menu:p5,MenuIcon:p5,MenuSquare:To,MenuSquareIcon:To,Merge:u5,MergeIcon:u5,MessageCircle:C5,MessageCircleCode:k5,MessageCircleCodeIcon:k5,MessageCircleDashed:f5,MessageCircleDashedIcon:f5,MessageCircleHeart:M5,MessageCircleHeartIcon:M5,MessageCircleIcon:C5,MessageCircleMore:m5,MessageCircleMoreIcon:m5,MessageCircleOff:v5,MessageCircleOffIcon:v5,MessageCirclePlus:g5,MessageCirclePlusIcon:g5,MessageCircleQuestion:x5,MessageCircleQuestionIcon:x5,MessageCircleReply:_5,MessageCircleReplyIcon:_5,MessageCircleWarning:w5,MessageCircleWarningIcon:w5,MessageCircleX:L5,MessageCircleXIcon:L5,MessageSquare:F5,MessageSquareCode:b5,MessageSquareCodeIcon:b5,MessageSquareDashed:I5,MessageSquareDashedIcon:I5,MessageSquareDiff:N5,MessageSquareDiffIcon:N5,MessageSquareDot:S5,MessageSquareDotIcon:S5,MessageSquareHeart:$5,MessageSquareHeartIcon:$5,MessageSquareIcon:F5,MessageSquareLock:A5,MessageSquareLockIcon:A5,MessageSquareMore:q5,MessageSquareMoreIcon:q5,MessageSquareOff:P5,MessageSquareOffIcon:P5,MessageSquarePlus:j5,MessageSquarePlusIcon:j5,MessageSquareQuote:H5,MessageSquareQuoteIcon:H5,MessageSquareReply:z5,MessageSquareReplyIcon:z5,MessageSquareShare:R5,MessageSquareShareIcon:R5,MessageSquareText:D5,MessageSquareTextIcon:D5,MessageSquareWarning:V5,MessageSquareWarningIcon:V5,MessageSquareX:T5,MessageSquareXIcon:T5,MessagesSquare:B5,MessagesSquareIcon:B5,Mic:O5,Mic2:Rt,Mic2Icon:Rt,MicIcon:O5,MicOff:E5,MicOffIcon:E5,MicVocal:Rt,MicVocalIcon:Rt,Microchip:U5,MicrochipIcon:U5,Microscope:G5,MicroscopeIcon:G5,Microwave:Z5,MicrowaveIcon:Z5,Milestone:W5,MilestoneIcon:W5,Milk:K5,MilkIcon:K5,MilkOff:X5,MilkOffIcon:X5,Minimize:Q5,Minimize2:Y5,Minimize2Icon:Y5,MinimizeIcon:Q5,Minus:Ln,MinusCircle:F1,MinusCircleIcon:F1,MinusIcon:Ln,MinusSquare:Fo,MinusSquareIcon:Fo,Monitor:l3,MonitorCheck:J5,MonitorCheckIcon:J5,MonitorCog:e3,MonitorCogIcon:e3,MonitorDot:t3,MonitorDotIcon:t3,MonitorDown:o3,MonitorDownIcon:o3,MonitorIcon:l3,MonitorOff:a3,MonitorOffIcon:a3,MonitorPause:n3,MonitorPauseIcon:n3,MonitorPlay:c3,MonitorPlayIcon:c3,MonitorSmartphone:i3,MonitorSmartphoneIcon:i3,MonitorSpeaker:r3,MonitorSpeakerIcon:r3,MonitorStop:d3,MonitorStopIcon:d3,MonitorUp:s3,MonitorUpIcon:s3,MonitorX:h3,MonitorXIcon:h3,Moon:p3,MoonIcon:p3,MoonStar:y3,MoonStarIcon:y3,MoreHorizontal:lt,MoreHorizontalIcon:lt,MoreVertical:ht,MoreVerticalIcon:ht,Mountain:k3,MountainIcon:k3,MountainSnow:u3,MountainSnowIcon:u3,Mouse:x3,MouseIcon:x3,MouseOff:f3,MouseOffIcon:f3,MousePointer:g3,MousePointer2:M3,MousePointer2Icon:M3,MousePointerBan:m3,MousePointerBanIcon:m3,MousePointerClick:v3,MousePointerClickIcon:v3,MousePointerIcon:g3,MousePointerSquareDashed:Ao,MousePointerSquareDashedIcon:Ao,Move:j3,Move3D:Dt,Move3DIcon:Dt,Move3d:Dt,Move3dIcon:Dt,MoveDiagonal:w3,MoveDiagonal2:_3,MoveDiagonal2Icon:_3,MoveDiagonalIcon:w3,MoveDown:b3,MoveDownIcon:b3,MoveDownLeft:L3,MoveDownLeftIcon:L3,MoveDownRight:C3,MoveDownRightIcon:C3,MoveHorizontal:I3,MoveHorizontalIcon:I3,MoveIcon:j3,MoveLeft:N3,MoveLeftIcon:N3,MoveRight:S3,MoveRightIcon:S3,MoveUp:q3,MoveUpIcon:q3,MoveUpLeft:$3,MoveUpLeftIcon:$3,MoveUpRight:A3,MoveUpRightIcon:A3,MoveVertical:P3,MoveVerticalIcon:P3,Music:D3,Music2:H3,Music2Icon:H3,Music3:z3,Music3Icon:z3,Music4:R3,Music4Icon:R3,MusicIcon:D3,Navigation:B3,Navigation2:T3,Navigation2Icon:T3,Navigation2Off:V3,Navigation2OffIcon:V3,NavigationIcon:B3,NavigationOff:F3,NavigationOffIcon:F3,Network:E3,NetworkIcon:E3,Newspaper:O3,NewspaperIcon:O3,Nfc:U3,NfcIcon:U3,NonBinary:G3,NonBinaryIcon:G3,Notebook:K3,NotebookIcon:K3,NotebookPen:Z3,NotebookPenIcon:Z3,NotebookTabs:W3,NotebookTabsIcon:W3,NotebookText:X3,NotebookTextIcon:X3,NotepadText:Q3,NotepadTextDashed:Y3,NotepadTextDashedIcon:Y3,NotepadTextIcon:Q3,Nut:e6,NutIcon:e6,NutOff:J3,NutOffIcon:J3,Octagon:o6,OctagonAlert:Vt,OctagonAlertIcon:Vt,OctagonIcon:o6,OctagonMinus:t6,OctagonMinusIcon:t6,OctagonPause:Tt,OctagonPauseIcon:Tt,OctagonX:Fe,OctagonXIcon:Fe,Omega:a6,OmegaIcon:a6,Option:n6,OptionIcon:n6,Orbit:c6,OrbitIcon:c6,Origami:i6,OrigamiIcon:i6,Outdent:At,OutdentIcon:At,Package:u6,Package2:r6,Package2Icon:r6,PackageCheck:d6,PackageCheckIcon:d6,PackageIcon:u6,PackageMinus:s6,PackageMinusIcon:s6,PackageOpen:h6,PackageOpenIcon:h6,PackagePlus:l6,PackagePlusIcon:l6,PackageSearch:y6,PackageSearchIcon:y6,PackageX:p6,PackageXIcon:p6,PaintBucket:k6,PaintBucketIcon:k6,PaintRoller:f6,PaintRollerIcon:f6,Paintbrush:M6,Paintbrush2:Ft,Paintbrush2Icon:Ft,PaintbrushIcon:M6,PaintbrushVertical:Ft,PaintbrushVerticalIcon:Ft,Palette:m6,PaletteIcon:m6,Palmtree:sa,PalmtreeIcon:sa,PanelBottom:x6,PanelBottomClose:v6,PanelBottomCloseIcon:v6,PanelBottomDashed:Bt,PanelBottomDashedIcon:Bt,PanelBottomIcon:x6,PanelBottomInactive:Bt,PanelBottomInactiveIcon:Bt,PanelBottomOpen:g6,PanelBottomOpenIcon:g6,PanelLeft:Be,PanelLeftClose:Et,PanelLeftCloseIcon:Et,PanelLeftDashed:Ot,PanelLeftDashedIcon:Ot,PanelLeftIcon:Be,PanelLeftInactive:Ot,PanelLeftInactiveIcon:Ot,PanelLeftOpen:Ut,PanelLeftOpenIcon:Ut,PanelRight:L6,PanelRightClose:_6,PanelRightCloseIcon:_6,PanelRightDashed:Gt,PanelRightDashedIcon:Gt,PanelRightIcon:L6,PanelRightInactive:Gt,PanelRightInactiveIcon:Gt,PanelRightOpen:w6,PanelRightOpenIcon:w6,PanelTop:I6,PanelTopClose:C6,PanelTopCloseIcon:C6,PanelTopDashed:Zt,PanelTopDashedIcon:Zt,PanelTopIcon:I6,PanelTopInactive:Zt,PanelTopInactiveIcon:Zt,PanelTopOpen:b6,PanelTopOpenIcon:b6,PanelsLeftBottom:N6,PanelsLeftBottomIcon:N6,PanelsLeftRight:it,PanelsLeftRightIcon:it,PanelsRightBottom:S6,PanelsRightBottomIcon:S6,PanelsTopBottom:to,PanelsTopBottomIcon:to,PanelsTopLeft:Wt,PanelsTopLeftIcon:Wt,Paperclip:$6,PaperclipIcon:$6,Parentheses:A6,ParenthesesIcon:A6,ParkingCircle:E1,ParkingCircleIcon:E1,ParkingCircleOff:B1,ParkingCircleOffIcon:B1,ParkingMeter:q6,ParkingMeterIcon:q6,ParkingSquare:Oo,ParkingSquareIcon:Oo,ParkingSquareOff:Eo,ParkingSquareOffIcon:Eo,PartyPopper:P6,PartyPopperIcon:P6,Pause:j6,PauseCircle:O1,PauseCircleIcon:O1,PauseIcon:j6,PauseOctagon:Tt,PauseOctagonIcon:Tt,PawPrint:H6,PawPrintIcon:H6,PcCase:z6,PcCaseIcon:z6,Pen:Kt,PenBox:de,PenBoxIcon:de,PenIcon:Kt,PenLine:Xt,PenLineIcon:Xt,PenOff:R6,PenOffIcon:R6,PenSquare:de,PenSquareIcon:de,PenTool:D6,PenToolIcon:D6,Pencil:B6,PencilIcon:B6,PencilLine:V6,PencilLineIcon:V6,PencilOff:T6,PencilOffIcon:T6,PencilRuler:F6,PencilRulerIcon:F6,Pentagon:E6,PentagonIcon:E6,Percent:O6,PercentCircle:U1,PercentCircleIcon:U1,PercentDiamond:dt,PercentDiamondIcon:dt,PercentIcon:O6,PercentSquare:Uo,PercentSquareIcon:Uo,PersonStanding:U6,PersonStandingIcon:U6,PhilippinePeso:G6,PhilippinePesoIcon:G6,Phone:J6,PhoneCall:Z6,PhoneCallIcon:Z6,PhoneForwarded:W6,PhoneForwardedIcon:W6,PhoneIcon:J6,PhoneIncoming:X6,PhoneIncomingIcon:X6,PhoneMissed:K6,PhoneMissedIcon:K6,PhoneOff:Y6,PhoneOffIcon:Y6,PhoneOutgoing:Q6,PhoneOutgoingIcon:Q6,Pi:e8,PiIcon:e8,PiSquare:Go,PiSquareIcon:Go,Piano:t8,PianoIcon:t8,Pickaxe:o8,PickaxeIcon:o8,PictureInPicture:n8,PictureInPicture2:a8,PictureInPicture2Icon:a8,PictureInPictureIcon:n8,PieChart:_1,PieChartIcon:_1,PiggyBank:c8,PiggyBankIcon:c8,Pilcrow:d8,PilcrowIcon:d8,PilcrowLeft:i8,PilcrowLeftIcon:i8,PilcrowRight:r8,PilcrowRightIcon:r8,PilcrowSquare:Zo,PilcrowSquareIcon:Zo,Pill:h8,PillBottle:s8,PillBottleIcon:s8,PillIcon:h8,Pin:y8,PinIcon:y8,PinOff:l8,PinOffIcon:l8,Pipette:p8,PipetteIcon:p8,Pizza:u8,PizzaIcon:u8,Plane:M8,PlaneIcon:M8,PlaneLanding:k8,PlaneLandingIcon:k8,PlaneTakeoff:f8,PlaneTakeoffIcon:f8,Play:m8,PlayCircle:G1,PlayCircleIcon:G1,PlayIcon:m8,PlaySquare:Wo,PlaySquareIcon:Wo,Plug:g8,Plug2:v8,Plug2Icon:v8,PlugIcon:g8,PlugZap:Yt,PlugZap2:Yt,PlugZap2Icon:Yt,PlugZapIcon:Yt,Plus:x8,PlusCircle:Z1,PlusCircleIcon:Z1,PlusIcon:x8,PlusSquare:Xo,PlusSquareIcon:Xo,Pocket:w8,PocketIcon:w8,PocketKnife:_8,PocketKnifeIcon:_8,Podcast:L8,PodcastIcon:L8,Pointer:b8,PointerIcon:b8,PointerOff:C8,PointerOffIcon:C8,Popcorn:I8,PopcornIcon:I8,Popsicle:N8,PopsicleIcon:N8,PoundSterling:S8,PoundSterlingIcon:S8,Power:A8,PowerCircle:W1,PowerCircleIcon:W1,PowerIcon:A8,PowerOff:$8,PowerOffIcon:$8,PowerSquare:Ko,PowerSquareIcon:Ko,Presentation:q8,PresentationIcon:q8,Printer:j8,PrinterCheck:P8,PrinterCheckIcon:P8,PrinterIcon:j8,Projector:H8,ProjectorIcon:H8,Proportions:z8,ProportionsIcon:z8,Puzzle:R8,PuzzleIcon:R8,Pyramid:D8,PyramidIcon:D8,QrCode:V8,QrCodeIcon:V8,Quote:T8,QuoteIcon:T8,Rabbit:F8,RabbitIcon:F8,Radar:B8,RadarIcon:B8,Radiation:E8,RadiationIcon:E8,Radical:O8,RadicalIcon:O8,Radio:Z8,RadioIcon:Z8,RadioReceiver:U8,RadioReceiverIcon:U8,RadioTower:G8,RadioTowerIcon:G8,Radius:W8,RadiusIcon:W8,RailSymbol:X8,RailSymbolIcon:X8,Rainbow:K8,RainbowIcon:K8,Rat:Y8,RatIcon:Y8,Ratio:Q8,RatioIcon:Q8,Receipt:r7,ReceiptCent:J8,ReceiptCentIcon:J8,ReceiptEuro:e7,ReceiptEuroIcon:e7,ReceiptIcon:r7,ReceiptIndianRupee:t7,ReceiptIndianRupeeIcon:t7,ReceiptJapaneseYen:o7,ReceiptJapaneseYenIcon:o7,ReceiptPoundSterling:a7,ReceiptPoundSterlingIcon:a7,ReceiptRussianRuble:n7,ReceiptRussianRubleIcon:n7,ReceiptSwissFranc:c7,ReceiptSwissFrancIcon:c7,ReceiptText:i7,ReceiptTextIcon:i7,RectangleEllipsis:Qt,RectangleEllipsisIcon:Qt,RectangleHorizontal:d7,RectangleHorizontalIcon:d7,RectangleVertical:s7,RectangleVerticalIcon:s7,Recycle:h7,RecycleIcon:h7,Redo:p7,Redo2:l7,Redo2Icon:l7,RedoDot:y7,RedoDotIcon:y7,RedoIcon:p7,RefreshCcw:k7,RefreshCcwDot:u7,RefreshCcwDotIcon:u7,RefreshCcwIcon:k7,RefreshCw:M7,RefreshCwIcon:M7,RefreshCwOff:f7,RefreshCwOffIcon:f7,Refrigerator:m7,RefrigeratorIcon:m7,Regex:v7,RegexIcon:v7,RemoveFormatting:g7,RemoveFormattingIcon:g7,Repeat:w7,Repeat1:x7,Repeat1Icon:x7,Repeat2:_7,Repeat2Icon:_7,RepeatIcon:w7,Replace:C7,ReplaceAll:L7,ReplaceAllIcon:L7,ReplaceIcon:C7,Reply:I7,ReplyAll:b7,ReplyAllIcon:b7,ReplyIcon:I7,Rewind:N7,RewindIcon:N7,Ribbon:S7,RibbonIcon:S7,Rocket:$7,RocketIcon:$7,RockingChair:A7,RockingChairIcon:A7,RollerCoaster:q7,RollerCoasterIcon:q7,Rotate3D:Jt,Rotate3DIcon:Jt,Rotate3d:Jt,Rotate3dIcon:Jt,RotateCcw:j7,RotateCcwIcon:j7,RotateCcwSquare:P7,RotateCcwSquareIcon:P7,RotateCw:z7,RotateCwIcon:z7,RotateCwSquare:H7,RotateCwSquareIcon:H7,Route:D7,RouteIcon:D7,RouteOff:R7,RouteOffIcon:R7,Router:V7,RouterIcon:V7,Rows:eo,Rows2:eo,Rows2Icon:eo,Rows3:to,Rows3Icon:to,Rows4:T7,Rows4Icon:T7,RowsIcon:eo,Rss:F7,RssIcon:F7,Ruler:B7,RulerIcon:B7,RussianRuble:E7,RussianRubleIcon:E7,Sailboat:O7,SailboatIcon:O7,Salad:U7,SaladIcon:U7,Sandwich:G7,SandwichIcon:G7,Satellite:W7,SatelliteDish:Z7,SatelliteDishIcon:Z7,SatelliteIcon:W7,Save:Y7,SaveAll:X7,SaveAllIcon:X7,SaveIcon:Y7,SaveOff:K7,SaveOffIcon:K7,Scale:Q7,Scale3D:oo,Scale3DIcon:oo,Scale3d:oo,Scale3dIcon:oo,ScaleIcon:Q7,Scaling:J7,ScalingIcon:J7,Scan:sf,ScanBarcode:ef,ScanBarcodeIcon:ef,ScanEye:tf,ScanEyeIcon:tf,ScanFace:of,ScanFaceIcon:of,ScanHeart:af,ScanHeartIcon:af,ScanIcon:sf,ScanLine:nf,ScanLineIcon:nf,ScanQrCode:cf,ScanQrCodeIcon:cf,ScanSearch:rf,ScanSearchIcon:rf,ScanText:df,ScanTextIcon:df,ScatterChart:w1,ScatterChartIcon:w1,School:hf,School2:la,School2Icon:la,SchoolIcon:hf,Scissors:yf,ScissorsIcon:yf,ScissorsLineDashed:lf,ScissorsLineDashedIcon:lf,ScissorsSquare:Yo,ScissorsSquareDashedBottom:_o,ScissorsSquareDashedBottomIcon:_o,ScissorsSquareIcon:Yo,ScreenShare:uf,ScreenShareIcon:uf,ScreenShareOff:pf,ScreenShareOffIcon:pf,Scroll:ff,ScrollIcon:ff,ScrollText:kf,ScrollTextIcon:kf,Search:xf,SearchCheck:Mf,SearchCheckIcon:Mf,SearchCode:mf,SearchCodeIcon:mf,SearchIcon:xf,SearchSlash:vf,SearchSlashIcon:vf,SearchX:gf,SearchXIcon:gf,Section:_f,SectionIcon:_f,Send:Lf,SendHorizonal:ao,SendHorizonalIcon:ao,SendHorizontal:ao,SendHorizontalIcon:ao,SendIcon:Lf,SendToBack:wf,SendToBackIcon:wf,SeparatorHorizontal:Cf,SeparatorHorizontalIcon:Cf,SeparatorVertical:bf,SeparatorVerticalIcon:bf,Server:$f,ServerCog:If,ServerCogIcon:If,ServerCrash:Nf,ServerCrashIcon:Nf,ServerIcon:$f,ServerOff:Sf,ServerOffIcon:Sf,Settings:Ka,Settings2:Af,Settings2Icon:Af,SettingsIcon:Ka,Shapes:qf,ShapesIcon:qf,Share:jf,Share2:Pf,Share2Icon:Pf,ShareIcon:jf,Sheet:Hf,SheetIcon:Hf,Shell:zf,ShellIcon:zf,Shield:Gf,ShieldAlert:Rf,ShieldAlertIcon:Rf,ShieldBan:Df,ShieldBanIcon:Df,ShieldCheck:Vf,ShieldCheckIcon:Vf,ShieldClose:no,ShieldCloseIcon:no,ShieldEllipsis:Tf,ShieldEllipsisIcon:Tf,ShieldHalf:Ff,ShieldHalfIcon:Ff,ShieldIcon:Gf,ShieldMinus:Bf,ShieldMinusIcon:Bf,ShieldOff:Ef,ShieldOffIcon:Ef,ShieldPlus:Of,ShieldPlusIcon:Of,ShieldQuestion:Uf,ShieldQuestionIcon:Uf,ShieldX:no,ShieldXIcon:no,Ship:Wf,ShipIcon:Wf,ShipWheel:Zf,ShipWheelIcon:Zf,Shirt:Xf,ShirtIcon:Xf,ShoppingBag:Kf,ShoppingBagIcon:Kf,ShoppingBasket:Yf,ShoppingBasketIcon:Yf,ShoppingCart:Qf,ShoppingCartIcon:Qf,Shovel:Jf,ShovelIcon:Jf,ShowerHead:eM,ShowerHeadIcon:eM,Shrink:tM,ShrinkIcon:tM,Shrub:oM,ShrubIcon:oM,Shuffle:aM,ShuffleIcon:aM,Sidebar:Be,SidebarClose:Et,SidebarCloseIcon:Et,SidebarIcon:Be,SidebarOpen:Ut,SidebarOpenIcon:Ut,Sigma:nM,SigmaIcon:nM,SigmaSquare:Qo,SigmaSquareIcon:Qo,Signal:sM,SignalHigh:cM,SignalHighIcon:cM,SignalIcon:sM,SignalLow:iM,SignalLowIcon:iM,SignalMedium:rM,SignalMediumIcon:rM,SignalZero:dM,SignalZeroIcon:dM,Signature:hM,SignatureIcon:hM,Signpost:yM,SignpostBig:lM,SignpostBigIcon:lM,SignpostIcon:yM,Siren:pM,SirenIcon:pM,SkipBack:uM,SkipBackIcon:uM,SkipForward:kM,SkipForwardIcon:kM,Skull:fM,SkullIcon:fM,Slack:MM,SlackIcon:MM,Slash:mM,SlashIcon:mM,SlashSquare:Jo,SlashSquareIcon:Jo,Slice:vM,SliceIcon:vM,Sliders:co,SlidersHorizontal:gM,SlidersHorizontalIcon:gM,SlidersIcon:co,SlidersVertical:co,SlidersVerticalIcon:co,Smartphone:wM,SmartphoneCharging:xM,SmartphoneChargingIcon:xM,SmartphoneIcon:wM,SmartphoneNfc:_M,SmartphoneNfcIcon:_M,Smile:CM,SmileIcon:CM,SmilePlus:LM,SmilePlusIcon:LM,Snail:bM,SnailIcon:bM,Snowflake:IM,SnowflakeIcon:IM,Sofa:NM,SofaIcon:NM,SortAsc:o1,SortAscIcon:o1,SortDesc:Je,SortDescIcon:Je,Soup:SM,SoupIcon:SM,Space:$M,SpaceIcon:$M,Spade:AM,SpadeIcon:AM,Sparkle:qM,SparkleIcon:qM,Sparkles:io,SparklesIcon:io,Speaker:PM,SpeakerIcon:PM,Speech:jM,SpeechIcon:jM,SpellCheck:zM,SpellCheck2:HM,SpellCheck2Icon:HM,SpellCheckIcon:zM,Spline:RM,SplineIcon:RM,Split:DM,SplitIcon:DM,SplitSquareHorizontal:ea,SplitSquareHorizontalIcon:ea,SplitSquareVertical:ta,SplitSquareVerticalIcon:ta,SprayCan:VM,SprayCanIcon:VM,Sprout:TM,SproutIcon:TM,Square:GM,SquareActivity:ro,SquareActivityIcon:ro,SquareArrowDown:lo,SquareArrowDownIcon:lo,SquareArrowDownLeft:so,SquareArrowDownLeftIcon:so,SquareArrowDownRight:ho,SquareArrowDownRightIcon:ho,SquareArrowLeft:yo,SquareArrowLeftIcon:yo,SquareArrowOutDownLeft:po,SquareArrowOutDownLeftIcon:po,SquareArrowOutDownRight:uo,SquareArrowOutDownRightIcon:uo,SquareArrowOutUpLeft:ko,SquareArrowOutUpLeftIcon:ko,SquareArrowOutUpRight:fo,SquareArrowOutUpRightIcon:fo,SquareArrowRight:Mo,SquareArrowRightIcon:Mo,SquareArrowUp:go,SquareArrowUpIcon:go,SquareArrowUpLeft:mo,SquareArrowUpLeftIcon:mo,SquareArrowUpRight:vo,SquareArrowUpRightIcon:vo,SquareAsterisk:xo,SquareAsteriskIcon:xo,SquareBottomDashedScissors:_o,SquareBottomDashedScissorsIcon:_o,SquareChartGantt:we,SquareChartGanttIcon:we,SquareCheck:Lo,SquareCheckBig:wo,SquareCheckBigIcon:wo,SquareCheckIcon:Lo,SquareChevronDown:Co,SquareChevronDownIcon:Co,SquareChevronLeft:bo,SquareChevronLeftIcon:bo,SquareChevronRight:Io,SquareChevronRightIcon:Io,SquareChevronUp:No,SquareChevronUpIcon:No,SquareCode:So,SquareCodeIcon:So,SquareDashed:qo,SquareDashedBottom:BM,SquareDashedBottomCode:FM,SquareDashedBottomCodeIcon:FM,SquareDashedBottomIcon:BM,SquareDashedIcon:qo,SquareDashedKanban:$o,SquareDashedKanbanIcon:$o,SquareDashedMousePointer:Ao,SquareDashedMousePointerIcon:Ao,SquareDivide:Po,SquareDivideIcon:Po,SquareDot:jo,SquareDotIcon:jo,SquareEqual:Ho,SquareEqualIcon:Ho,SquareFunction:zo,SquareFunctionIcon:zo,SquareGanttChart:we,SquareGanttChartIcon:we,SquareIcon:GM,SquareKanban:Ro,SquareKanbanIcon:Ro,SquareLibrary:Do,SquareLibraryIcon:Do,SquareM:Vo,SquareMIcon:Vo,SquareMenu:To,SquareMenuIcon:To,SquareMinus:Fo,SquareMinusIcon:Fo,SquareMousePointer:Bo,SquareMousePointerIcon:Bo,SquareParking:Oo,SquareParkingIcon:Oo,SquareParkingOff:Eo,SquareParkingOffIcon:Eo,SquarePen:de,SquarePenIcon:de,SquarePercent:Uo,SquarePercentIcon:Uo,SquarePi:Go,SquarePiIcon:Go,SquarePilcrow:Zo,SquarePilcrowIcon:Zo,SquarePlay:Wo,SquarePlayIcon:Wo,SquarePlus:Xo,SquarePlusIcon:Xo,SquarePower:Ko,SquarePowerIcon:Ko,SquareRadical:EM,SquareRadicalIcon:EM,SquareScissors:Yo,SquareScissorsIcon:Yo,SquareSigma:Qo,SquareSigmaIcon:Qo,SquareSlash:Jo,SquareSlashIcon:Jo,SquareSplitHorizontal:ea,SquareSplitHorizontalIcon:ea,SquareSplitVertical:ta,SquareSplitVerticalIcon:ta,SquareSquare:OM,SquareSquareIcon:OM,SquareStack:UM,SquareStackIcon:UM,SquareTerminal:oa,SquareTerminalIcon:oa,SquareUser:na,SquareUserIcon:na,SquareUserRound:aa,SquareUserRoundIcon:aa,SquareX:ca,SquareXIcon:ca,Squircle:ZM,SquircleIcon:ZM,Squirrel:WM,SquirrelIcon:WM,Stamp:XM,StampIcon:XM,Star:QM,StarHalf:KM,StarHalfIcon:KM,StarIcon:QM,StarOff:YM,StarOffIcon:YM,Stars:io,StarsIcon:io,StepBack:JM,StepBackIcon:JM,StepForward:e9,StepForwardIcon:e9,Stethoscope:t9,StethoscopeIcon:t9,Sticker:o9,StickerIcon:o9,StickyNote:a9,StickyNoteIcon:a9,StopCircle:K1,StopCircleIcon:K1,Store:n9,StoreIcon:n9,StretchHorizontal:c9,StretchHorizontalIcon:c9,StretchVertical:i9,StretchVerticalIcon:i9,Strikethrough:r9,StrikethroughIcon:r9,Subscript:d9,SubscriptIcon:d9,Subtitles:h1,SubtitlesIcon:h1,Sun:p9,SunDim:s9,SunDimIcon:s9,SunIcon:p9,SunMedium:h9,SunMediumIcon:h9,SunMoon:l9,SunMoonIcon:l9,SunSnow:y9,SunSnowIcon:y9,Sunrise:u9,SunriseIcon:u9,Sunset:k9,SunsetIcon:k9,Superscript:f9,SuperscriptIcon:f9,SwatchBook:M9,SwatchBookIcon:M9,SwissFranc:m9,SwissFrancIcon:m9,SwitchCamera:v9,SwitchCameraIcon:v9,Sword:g9,SwordIcon:g9,Swords:x9,SwordsIcon:x9,Syringe:_9,SyringeIcon:_9,Table:$9,Table2:w9,Table2Icon:w9,TableCellsMerge:L9,TableCellsMergeIcon:L9,TableCellsSplit:C9,TableCellsSplitIcon:C9,TableColumnsSplit:b9,TableColumnsSplitIcon:b9,TableIcon:$9,TableOfContents:I9,TableOfContentsIcon:I9,TableProperties:N9,TablePropertiesIcon:N9,TableRowsSplit:S9,TableRowsSplitIcon:S9,Tablet:q9,TabletIcon:q9,TabletSmartphone:A9,TabletSmartphoneIcon:A9,Tablets:P9,TabletsIcon:P9,Tag:j9,TagIcon:j9,Tags:H9,TagsIcon:H9,Tally1:z9,Tally1Icon:z9,Tally2:R9,Tally2Icon:R9,Tally3:D9,Tally3Icon:D9,Tally4:V9,Tally4Icon:V9,Tally5:T9,Tally5Icon:T9,Tangent:F9,TangentIcon:F9,Target:B9,TargetIcon:B9,Telescope:E9,TelescopeIcon:E9,Tent:U9,TentIcon:U9,TentTree:O9,TentTreeIcon:O9,Terminal:G9,TerminalIcon:G9,TerminalSquare:oa,TerminalSquareIcon:oa,TestTube:Z9,TestTube2:ia,TestTube2Icon:ia,TestTubeDiagonal:ia,TestTubeDiagonalIcon:ia,TestTubeIcon:Z9,TestTubes:W9,TestTubesIcon:W9,Text:J9,TextCursor:K9,TextCursorIcon:K9,TextCursorInput:X9,TextCursorInputIcon:X9,TextIcon:J9,TextQuote:Y9,TextQuoteIcon:Y9,TextSearch:Q9,TextSearchIcon:Q9,TextSelect:ra,TextSelectIcon:ra,TextSelection:ra,TextSelectionIcon:ra,Theater:em,TheaterIcon:em,Thermometer:am,ThermometerIcon:am,ThermometerSnowflake:tm,ThermometerSnowflakeIcon:tm,ThermometerSun:om,ThermometerSunIcon:om,ThumbsDown:nm,ThumbsDownIcon:nm,ThumbsUp:cm,ThumbsUpIcon:cm,Ticket:ym,TicketCheck:im,TicketCheckIcon:im,TicketIcon:ym,TicketMinus:rm,TicketMinusIcon:rm,TicketPercent:dm,TicketPercentIcon:dm,TicketPlus:sm,TicketPlusIcon:sm,TicketSlash:hm,TicketSlashIcon:hm,TicketX:lm,TicketXIcon:lm,Tickets:um,TicketsIcon:um,TicketsPlane:pm,TicketsPlaneIcon:pm,Timer:Mm,TimerIcon:Mm,TimerOff:km,TimerOffIcon:km,TimerReset:fm,TimerResetIcon:fm,ToggleLeft:mm,ToggleLeftIcon:mm,ToggleRight:vm,ToggleRightIcon:vm,Toilet:gm,ToiletIcon:gm,Tornado:xm,TornadoIcon:xm,Torus:_m,TorusIcon:_m,Touchpad:Lm,TouchpadIcon:Lm,TouchpadOff:wm,TouchpadOffIcon:wm,TowerControl:Cm,TowerControlIcon:Cm,ToyBrick:bm,ToyBrickIcon:bm,Tractor:Im,TractorIcon:Im,TrafficCone:Nm,TrafficConeIcon:Nm,Train:da,TrainFront:$m,TrainFrontIcon:$m,TrainFrontTunnel:Sm,TrainFrontTunnelIcon:Sm,TrainIcon:da,TrainTrack:Am,TrainTrackIcon:Am,TramFront:da,TramFrontIcon:da,Transgender:qm,TransgenderIcon:qm,Trash:jm,Trash2:Pm,Trash2Icon:Pm,TrashIcon:jm,TreeDeciduous:Hm,TreeDeciduousIcon:Hm,TreePalm:sa,TreePalmIcon:sa,TreePine:zm,TreePineIcon:zm,Trees:Rm,TreesIcon:Rm,Trello:Dm,TrelloIcon:Dm,TrendingDown:Vm,TrendingDownIcon:Vm,TrendingUp:Fm,TrendingUpDown:Tm,TrendingUpDownIcon:Tm,TrendingUpIcon:Fm,Triangle:Om,TriangleAlert:Ee,TriangleAlertIcon:Ee,TriangleDashed:Bm,TriangleDashedIcon:Bm,TriangleIcon:Om,TriangleRight:Em,TriangleRightIcon:Em,Trophy:Um,TrophyIcon:Um,Truck:Gm,TruckIcon:Gm,Turtle:Zm,TurtleIcon:Zm,Tv:Xm,Tv2:ha,Tv2Icon:ha,TvIcon:Xm,TvMinimal:ha,TvMinimalIcon:ha,TvMinimalPlay:Wm,TvMinimalPlayIcon:Wm,Twitch:Km,TwitchIcon:Km,Twitter:Ym,TwitterIcon:Ym,Type:Jm,TypeIcon:Jm,TypeOutline:Qm,TypeOutlineIcon:Qm,Umbrella:tv,UmbrellaIcon:tv,UmbrellaOff:ev,UmbrellaOffIcon:ev,Underline:ov,UnderlineIcon:ov,Undo:cv,Undo2:av,Undo2Icon:av,UndoDot:nv,UndoDotIcon:nv,UndoIcon:cv,UnfoldHorizontal:iv,UnfoldHorizontalIcon:iv,UnfoldVertical:rv,UnfoldVerticalIcon:rv,Ungroup:dv,UngroupIcon:dv,University:la,UniversityIcon:la,Unlink:hv,Unlink2:sv,Unlink2Icon:sv,UnlinkIcon:hv,Unlock:zt,UnlockIcon:zt,UnlockKeyhole:Ht,UnlockKeyholeIcon:Ht,Unplug:lv,UnplugIcon:lv,Upload:yv,UploadCloud:at,UploadCloudIcon:at,UploadIcon:yv,Usb:pv,UsbIcon:pv,User:wv,User2:Ma,User2Icon:Ma,UserCheck:uv,UserCheck2:ya,UserCheck2Icon:ya,UserCheckIcon:uv,UserCircle:Q1,UserCircle2:Y1,UserCircle2Icon:Y1,UserCircleIcon:Q1,UserCog:kv,UserCog2:pa,UserCog2Icon:pa,UserCogIcon:kv,UserIcon:wv,UserMinus:fv,UserMinus2:ua,UserMinus2Icon:ua,UserMinusIcon:fv,UserPen:Mv,UserPenIcon:Mv,UserPlus:mv,UserPlus2:ka,UserPlus2Icon:ka,UserPlusIcon:mv,UserRound:Ma,UserRoundCheck:ya,UserRoundCheckIcon:ya,UserRoundCog:pa,UserRoundCogIcon:pa,UserRoundIcon:Ma,UserRoundMinus:ua,UserRoundMinusIcon:ua,UserRoundPen:vv,UserRoundPenIcon:vv,UserRoundPlus:ka,UserRoundPlusIcon:ka,UserRoundSearch:gv,UserRoundSearchIcon:gv,UserRoundX:fa,UserRoundXIcon:fa,UserSearch:xv,UserSearchIcon:xv,UserSquare:na,UserSquare2:aa,UserSquare2Icon:aa,UserSquareIcon:na,UserX:_v,UserX2:fa,UserX2Icon:fa,UserXIcon:_v,Users:Lv,Users2:ma,Users2Icon:ma,UsersIcon:Lv,UsersRound:ma,UsersRoundIcon:ma,Utensils:ga,UtensilsCrossed:va,UtensilsCrossedIcon:va,UtensilsIcon:ga,UtilityPole:Cv,UtilityPoleIcon:Cv,Variable:bv,VariableIcon:bv,Vault:Iv,VaultIcon:Iv,Vegan:Nv,VeganIcon:Nv,VenetianMask:Sv,VenetianMaskIcon:Sv,Venus:Av,VenusAndMars:$v,VenusAndMarsIcon:$v,VenusIcon:Av,Verified:c1,VerifiedIcon:c1,Vibrate:Pv,VibrateIcon:Pv,VibrateOff:qv,VibrateOffIcon:qv,Video:Hv,VideoIcon:Hv,VideoOff:jv,VideoOffIcon:jv,Videotape:zv,VideotapeIcon:zv,View:Rv,ViewIcon:Rv,Voicemail:Dv,VoicemailIcon:Dv,Volleyball:Vv,VolleyballIcon:Vv,Volume:Ov,Volume1:Tv,Volume1Icon:Tv,Volume2:Fv,Volume2Icon:Fv,VolumeIcon:Ov,VolumeOff:Bv,VolumeOffIcon:Bv,VolumeX:Ev,VolumeXIcon:Ev,Vote:Uv,VoteIcon:Uv,Wallet:Zv,Wallet2:xa,Wallet2Icon:xa,WalletCards:Gv,WalletCardsIcon:Gv,WalletIcon:Zv,WalletMinimal:xa,WalletMinimalIcon:xa,Wallpaper:Wv,WallpaperIcon:Wv,Wand:Xv,Wand2:_a,Wand2Icon:_a,WandIcon:Xv,WandSparkles:_a,WandSparklesIcon:_a,Warehouse:Kv,WarehouseIcon:Kv,WashingMachine:Yv,WashingMachineIcon:Yv,Watch:Qv,WatchIcon:Qv,Waves:eg,WavesIcon:eg,WavesLadder:Jv,WavesLadderIcon:Jv,Waypoints:tg,WaypointsIcon:tg,Webcam:og,WebcamIcon:og,Webhook:ng,WebhookIcon:ng,WebhookOff:ag,WebhookOffIcon:ag,Weight:cg,WeightIcon:cg,Wheat:rg,WheatIcon:rg,WheatOff:ig,WheatOffIcon:ig,WholeWord:dg,WholeWordIcon:dg,Wifi:pg,WifiHigh:sg,WifiHighIcon:sg,WifiIcon:pg,WifiLow:hg,WifiLowIcon:hg,WifiOff:lg,WifiOffIcon:lg,WifiZero:yg,WifiZeroIcon:yg,Wind:kg,WindArrowDown:ug,WindArrowDownIcon:ug,WindIcon:kg,Wine:Mg,WineIcon:Mg,WineOff:fg,WineOffIcon:fg,Workflow:mg,WorkflowIcon:mg,Worm:vg,WormIcon:vg,WrapText:gg,WrapTextIcon:gg,Wrench:xg,WrenchIcon:xg,X:Ya,XCircle:J1,XCircleIcon:J1,XIcon:Ya,XOctagon:Fe,XOctagonIcon:Fe,XSquare:ca,XSquareIcon:ca,Youtube:_g,YoutubeIcon:_g,Zap:Lg,ZapIcon:Lg,ZapOff:wg,ZapOffIcon:wg,ZoomIn:Cg,ZoomInIcon:Cg,ZoomOut:bg,ZoomOutIcon:bg,createLucideIcon:t,icons:Tte},Symbol.toStringTag,{value:"Module"})),Fte=768,vx=window.matchMedia(`(max-width: ${Fte-1}px)`);function Bte(o){return vx.addEventListener("change",o),()=>{vx.removeEventListener("change",o)}}function Ete(){return vx.matches}function $w(){return y.useSyncExternalStore(Bte,Ete)}function Ote(o){const e=Ute(o),a=y.forwardRef((n,c)=>{const{children:i,...r}=n,d=y.Children.toArray(i),h=d.find(Zte);if(h){const p=h.props.children,u=d.map(s=>s===h?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:s);return l.jsx(e,{...r,ref:c,children:y.isValidElement(p)?y.cloneElement(p,void 0,u):null})}return l.jsx(e,{...r,ref:c,children:i})});return a.displayName=`${o}.Slot`,a}function Ute(o){const e=y.forwardRef((a,n)=>{const{children:c,...i}=a;if(y.isValidElement(c)){const r=Xte(c),d=Wte(i,c.props);return c.type!==y.Fragment&&(d.ref=n?cn(n,r):r),y.cloneElement(c,d)}return y.Children.count(c)>1?y.Children.only(null):null});return e.displayName=`${o}.SlotClone`,e}var Gte=Symbol("radix.slottable");function Zte(o){return y.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===Gte}function Wte(o,e){const a={...e};for(const n in e){const c=o[n],i=e[n];/^on[A-Z]/.test(n)?c&&i?a[n]=(...d)=>{const h=i(...d);return c(...d),h}:c&&(a[n]=c):n==="style"?a[n]={...c,...i}:n==="className"&&(a[n]=[c,i].filter(Boolean).join(" "))}return{...o,...a}}function Xte(o){let e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?o.ref:(e=Object.getOwnPropertyDescriptor(o,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?o.props.ref:o.props.ref||o.ref)}var Eg="Dialog",[Aw,jce]=je(Eg),[Kte,ge]=Aw(Eg),qw=o=>{const{__scopeDialog:e,children:a,open:n,defaultOpen:c,onOpenChange:i,modal:r=!0}=o,d=y.useRef(null),h=y.useRef(null),[p,u]=rn({prop:n,defaultProp:c??!1,onChange:i,caller:Eg});return l.jsx(Kte,{scope:e,triggerRef:d,contentRef:h,contentId:Oe(),titleId:Oe(),descriptionId:Oe(),open:p,onOpenChange:u,onOpenToggle:y.useCallback(()=>u(s=>!s),[u]),modal:r,children:a})};qw.displayName=Eg;var Pw="DialogTrigger",Yte=y.forwardRef((o,e)=>{const{__scopeDialog:a,...n}=o,c=ge(Pw,a),i=Q(e,c.triggerRef);return l.jsx(Z.button,{type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":Vx(c.open),...n,ref:i,onClick:H(o.onClick,c.onOpenToggle)})});Yte.displayName=Pw;var Rx="DialogPortal",[Qte,jw]=Aw(Rx,{forceMount:void 0}),Hw=o=>{const{__scopeDialog:e,forceMount:a,children:n,container:c}=o,i=ge(Rx,e);return l.jsx(Qte,{scope:e,forceMount:a,children:y.Children.map(n,r=>l.jsx(Se,{present:a||i.open,children:l.jsx(Fg,{asChild:!0,container:c,children:r})}))})};Hw.displayName=Rx;var Ag="DialogOverlay",zw=y.forwardRef((o,e)=>{const a=jw(Ag,o.__scopeDialog),{forceMount:n=a.forceMount,...c}=o,i=ge(Ag,o.__scopeDialog);return i.modal?l.jsx(Se,{present:n||i.open,children:l.jsx(eoe,{...c,ref:e})}):null});zw.displayName=Ag;var Jte=Ote("DialogOverlay.RemoveScroll"),eoe=y.forwardRef((o,e)=>{const{__scopeDialog:a,...n}=o,c=ge(Ag,a);return l.jsx(zx,{as:Jte,allowPinchZoom:!0,shards:[c.contentRef],children:l.jsx(Z.div,{"data-state":Vx(c.open),...n,ref:e,style:{pointerEvents:"auto",...n.style}})})}),La="DialogContent",Rw=y.forwardRef((o,e)=>{const a=jw(La,o.__scopeDialog),{forceMount:n=a.forceMount,...c}=o,i=ge(La,o.__scopeDialog);return l.jsx(Se,{present:n||i.open,children:i.modal?l.jsx(toe,{...c,ref:e}):l.jsx(ooe,{...c,ref:e})})});Rw.displayName=La;var toe=y.forwardRef((o,e)=>{const a=ge(La,o.__scopeDialog),n=y.useRef(null),c=Q(e,a.contentRef,n);return y.useEffect(()=>{const i=n.current;if(i)return xw(i)},[]),l.jsx(Dw,{...o,ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:H(o.onCloseAutoFocus,i=>{i.preventDefault(),a.triggerRef.current?.focus()}),onPointerDownOutside:H(o.onPointerDownOutside,i=>{const r=i.detail.originalEvent,d=r.button===0&&r.ctrlKey===!0;(r.button===2||d)&&i.preventDefault()}),onFocusOutside:H(o.onFocusOutside,i=>i.preventDefault())})}),ooe=y.forwardRef((o,e)=>{const a=ge(La,o.__scopeDialog),n=y.useRef(!1),c=y.useRef(!1);return l.jsx(Dw,{...o,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{o.onCloseAutoFocus?.(i),i.defaultPrevented||(n.current||a.triggerRef.current?.focus(),i.preventDefault()),n.current=!1,c.current=!1},onInteractOutside:i=>{o.onInteractOutside?.(i),i.defaultPrevented||(n.current=!0,i.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const r=i.target;a.triggerRef.current?.contains(r)&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&c.current&&i.preventDefault()}})}),Dw=y.forwardRef((o,e)=>{const{__scopeDialog:a,trapFocus:n,onOpenAutoFocus:c,onCloseAutoFocus:i,...r}=o,d=ge(La,a),h=y.useRef(null),p=Q(e,h);return G_(),l.jsxs(l.Fragment,{children:[l.jsx(bx,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:c,onUnmountAutoFocus:i,children:l.jsx(zg,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":Vx(d.open),...r,ref:p,onDismiss:()=>d.onOpenChange(!1)})}),l.jsxs(l.Fragment,{children:[l.jsx(aoe,{titleId:d.titleId}),l.jsx(coe,{contentRef:h,descriptionId:d.descriptionId})]})]})}),Dx="DialogTitle",Vw=y.forwardRef((o,e)=>{const{__scopeDialog:a,...n}=o,c=ge(Dx,a);return l.jsx(Z.h2,{id:c.titleId,...n,ref:e})});Vw.displayName=Dx;var Tw="DialogDescription",Fw=y.forwardRef((o,e)=>{const{__scopeDialog:a,...n}=o,c=ge(Tw,a);return l.jsx(Z.p,{id:c.descriptionId,...n,ref:e})});Fw.displayName=Tw;var Bw="DialogClose",Ew=y.forwardRef((o,e)=>{const{__scopeDialog:a,...n}=o,c=ge(Bw,a);return l.jsx(Z.button,{type:"button",...n,ref:e,onClick:H(o.onClick,()=>c.onOpenChange(!1))})});Ew.displayName=Bw;function Vx(o){return o?"open":"closed"}var Ow="DialogTitleWarning",[Hce,Uw]=xC(Ow,{contentName:La,titleName:Dx,docsSlug:"dialog"}),aoe=({titleId:o})=>{const e=Uw(Ow),a=`\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;return y.useEffect(()=>{o&&(document.getElementById(o)||console.error(a))},[a,o]),null},noe="DialogDescriptionWarning",coe=({contentRef:o,descriptionId:e})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Uw(noe).contentName}}.`;return y.useEffect(()=>{const c=o.current?.getAttribute("aria-describedby");e&&c&&(document.getElementById(e)||console.warn(n))},[n,o,e]),null},ioe=qw,roe=Hw,doe=zw,soe=Rw,hoe=Vw,loe=Fw,yoe=Ew;function poe(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(ioe,{"data-slot":"sheet",...a}),e[2]=a,e[3]=n):n=e[3],n}function uoe(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(roe,{"data-slot":"sheet-portal",...a}),e[2]=a,e[3]=n):n=e[3],n}function koe(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(doe,{"data-slot":"sheet-overlay",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function foe(o){const e=$.c(17);let a,n,c,i;e[0]!==o?({className:n,children:a,side:i,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i):(a=e[1],n=e[2],c=e[3],i=e[4]);const r=i===void 0?"right":i;let d;e[5]===Symbol.for("react.memo_cache_sentinel")?(d=l.jsx(koe,{}),e[5]=d):d=e[5];const h=r==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",p=r==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",u=r==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",s=r==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t";let k;e[6]!==n||e[7]!==h||e[8]!==p||e[9]!==u||e[10]!==s?(k=E("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",h,p,u,s,n),e[6]=n,e[7]=h,e[8]=p,e[9]=u,e[10]=s,e[11]=k):k=e[11];let f;e[12]===Symbol.for("react.memo_cache_sentinel")?(f=l.jsxs(yoe,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[l.jsx(Ya,{className:"size-4"}),l.jsx("span",{className:"sr-only",children:"Close"})]}),e[12]=f):f=e[12];let m;return e[13]!==a||e[14]!==c||e[15]!==k?(m=l.jsxs(uoe,{children:[d,l.jsxs(soe,{"data-slot":"sheet-content",className:k,...c,children:[a,f]})]}),e[13]=a,e[14]=c,e[15]=k,e[16]=m):m=e[16],m}function Moe(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("flex flex-col gap-1.5 p-4",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("div",{"data-slot":"sheet-header",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function moe(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("text-foreground font-semibold",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(hoe,{"data-slot":"sheet-title",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function voe(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("text-muted-foreground text-sm",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(loe,{"data-slot":"sheet-description",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}var goe=Symbol("radix.slottable");function xoe(o){const e=({children:a})=>l.jsx(l.Fragment,{children:a});return e.displayName=`${o}.Slottable`,e.__radixId=goe,e}var[Og,zce]=je("Tooltip",[Tg]),Ug=Tg(),Gw="TooltipProvider",_oe=700,gx="tooltip.open",[woe,Tx]=Og(Gw),Zw=o=>{const{__scopeTooltip:e,delayDuration:a=_oe,skipDelayDuration:n=300,disableHoverableContent:c=!1,children:i}=o,r=y.useRef(!0),d=y.useRef(!1),h=y.useRef(0);return y.useEffect(()=>{const p=h.current;return()=>window.clearTimeout(p)},[]),l.jsx(woe,{scope:e,isOpenDelayedRef:r,delayDuration:a,onOpen:y.useCallback(()=>{window.clearTimeout(h.current),r.current=!1},[]),onClose:y.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>r.current=!0,n)},[n]),isPointerInTransitRef:d,onPointerInTransitChange:y.useCallback(p=>{d.current=p},[]),disableHoverableContent:c,children:i})};Zw.displayName=Gw;var en="Tooltip",[Loe,sn]=Og(en),Ww=o=>{const{__scopeTooltip:e,children:a,open:n,defaultOpen:c,onOpenChange:i,disableHoverableContent:r,delayDuration:d}=o,h=Tx(en,o.__scopeTooltip),p=Ug(e),[u,s]=y.useState(null),k=Oe(),f=y.useRef(0),m=r??h.disableHoverableContent,M=d??h.delayDuration,g=y.useRef(!1),[v,x]=rn({prop:n,defaultProp:c??!1,onChange:C=>{C?(h.onOpen(),document.dispatchEvent(new CustomEvent(gx))):h.onClose(),i?.(C)},caller:en}),_=y.useMemo(()=>v?g.current?"delayed-open":"instant-open":"closed",[v]),w=y.useCallback(()=>{window.clearTimeout(f.current),f.current=0,g.current=!1,x(!0)},[x]),L=y.useCallback(()=>{window.clearTimeout(f.current),f.current=0,x(!1)},[x]),I=y.useCallback(()=>{window.clearTimeout(f.current),f.current=window.setTimeout(()=>{g.current=!0,x(!0),f.current=0},M)},[M,x]);return y.useEffect(()=>()=>{f.current&&(window.clearTimeout(f.current),f.current=0)},[]),l.jsx(kw,{...p,children:l.jsx(Loe,{scope:e,contentId:k,open:v,stateAttribute:_,trigger:u,onTriggerChange:s,onTriggerEnter:y.useCallback(()=>{h.isOpenDelayedRef.current?I():w()},[h.isOpenDelayedRef,I,w]),onTriggerLeave:y.useCallback(()=>{m?L():(window.clearTimeout(f.current),f.current=0)},[L,m]),onOpen:w,onClose:L,disableHoverableContent:m,children:a})})};Ww.displayName=en;var xx="TooltipTrigger",Xw=y.forwardRef((o,e)=>{const{__scopeTooltip:a,...n}=o,c=sn(xx,a),i=Tx(xx,a),r=Ug(a),d=y.useRef(null),h=Q(e,d,c.onTriggerChange),p=y.useRef(!1),u=y.useRef(!1),s=y.useCallback(()=>p.current=!1,[]);return y.useEffect(()=>()=>document.removeEventListener("pointerup",s),[s]),l.jsx(fw,{asChild:!0,...r,children:l.jsx(Z.button,{"aria-describedby":c.open?c.contentId:void 0,"data-state":c.stateAttribute,...n,ref:h,onPointerMove:H(o.onPointerMove,k=>{k.pointerType!=="touch"&&!u.current&&!i.isPointerInTransitRef.current&&(c.onTriggerEnter(),u.current=!0)}),onPointerLeave:H(o.onPointerLeave,()=>{c.onTriggerLeave(),u.current=!1}),onPointerDown:H(o.onPointerDown,()=>{c.open&&c.onClose(),p.current=!0,document.addEventListener("pointerup",s,{once:!0})}),onFocus:H(o.onFocus,()=>{p.current||c.onOpen()}),onBlur:H(o.onBlur,c.onClose),onClick:H(o.onClick,c.onClose)})})});Xw.displayName=xx;var Fx="TooltipPortal",[Coe,boe]=Og(Fx,{forceMount:void 0}),Kw=o=>{const{__scopeTooltip:e,forceMount:a,children:n,container:c}=o,i=sn(Fx,e);return l.jsx(Coe,{scope:e,forceMount:a,children:l.jsx(Se,{present:a||i.open,children:l.jsx(Fg,{asChild:!0,container:c,children:n})})})};Kw.displayName=Fx;var Ba="TooltipContent",Yw=y.forwardRef((o,e)=>{const a=boe(Ba,o.__scopeTooltip),{forceMount:n=a.forceMount,side:c="top",...i}=o,r=sn(Ba,o.__scopeTooltip);return l.jsx(Se,{present:n||r.open,children:r.disableHoverableContent?l.jsx(Qw,{side:c,...i,ref:e}):l.jsx(Ioe,{side:c,...i,ref:e})})}),Ioe=y.forwardRef((o,e)=>{const a=sn(Ba,o.__scopeTooltip),n=Tx(Ba,o.__scopeTooltip),c=y.useRef(null),i=Q(e,c),[r,d]=y.useState(null),{trigger:h,onClose:p}=a,u=c.current,{onPointerInTransitChange:s}=n,k=y.useCallback(()=>{d(null),s(!1)},[s]),f=y.useCallback((m,M)=>{const g=m.currentTarget,v={x:m.clientX,y:m.clientY},x=Aoe(v,g.getBoundingClientRect()),_=qoe(v,x),w=Poe(M.getBoundingClientRect()),L=Hoe([..._,...w]);d(L),s(!0)},[s]);return y.useEffect(()=>()=>k(),[k]),y.useEffect(()=>{if(h&&u){const m=g=>f(g,u),M=g=>f(g,h);return h.addEventListener("pointerleave",m),u.addEventListener("pointerleave",M),()=>{h.removeEventListener("pointerleave",m),u.removeEventListener("pointerleave",M)}}},[h,u,f,k]),y.useEffect(()=>{if(r){const m=M=>{const g=M.target,v={x:M.clientX,y:M.clientY},x=h?.contains(g)||u?.contains(g),_=!joe(v,r);x?k():_&&(k(),p())};return document.addEventListener("pointermove",m),()=>document.removeEventListener("pointermove",m)}},[h,u,r,p,k]),l.jsx(Qw,{...o,ref:i})}),[Noe,Soe]=Og(en,{isInside:!1}),$oe=xoe("TooltipContent"),Qw=y.forwardRef((o,e)=>{const{__scopeTooltip:a,children:n,"aria-label":c,onEscapeKeyDown:i,onPointerDownOutside:r,...d}=o,h=sn(Ba,a),p=Ug(a),{onClose:u}=h;return y.useEffect(()=>(document.addEventListener(gx,u),()=>document.removeEventListener(gx,u)),[u]),y.useEffect(()=>{if(h.trigger){const s=k=>{k.target?.contains(h.trigger)&&u()};return window.addEventListener("scroll",s,{capture:!0}),()=>window.removeEventListener("scroll",s,{capture:!0})}},[h.trigger,u]),l.jsx(zg,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s=>s.preventDefault(),onDismiss:u,children:l.jsxs(Mw,{"data-state":h.stateAttribute,...p,...d,ref:e,style:{...d.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[l.jsx($oe,{children:n}),l.jsx(Noe,{scope:a,isInside:!0,children:l.jsx(kI,{id:h.contentId,role:"tooltip",children:c||n})})]})})});Yw.displayName=Ba;var Jw="TooltipArrow",eL=y.forwardRef((o,e)=>{const{__scopeTooltip:a,...n}=o,c=Ug(a);return Soe(Jw,a).isInside?null:l.jsx(mw,{...c,...n,ref:e})});eL.displayName=Jw;function Aoe(o,e){const a=Math.abs(e.top-o.y),n=Math.abs(e.bottom-o.y),c=Math.abs(e.right-o.x),i=Math.abs(e.left-o.x);switch(Math.min(a,n,c,i)){case i:return"left";case c:return"right";case a:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function qoe(o,e,a=5){const n=[];switch(e){case"top":n.push({x:o.x-a,y:o.y+a},{x:o.x+a,y:o.y+a});break;case"bottom":n.push({x:o.x-a,y:o.y-a},{x:o.x+a,y:o.y-a});break;case"left":n.push({x:o.x+a,y:o.y-a},{x:o.x+a,y:o.y+a});break;case"right":n.push({x:o.x-a,y:o.y-a},{x:o.x-a,y:o.y+a});break}return n}function Poe(o){const{top:e,right:a,bottom:n,left:c}=o;return[{x:c,y:e},{x:a,y:e},{x:a,y:n},{x:c,y:n}]}function joe(o,e){const{x:a,y:n}=o;let c=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const d=e[i],h=e[r],p=d.x,u=d.y,s=h.x,k=h.y;u>n!=k>n&&a<(s-p)*(n-u)/(k-u)+p&&(c=!c)}return c}function Hoe(o){const e=o.slice();return e.sort((a,n)=>a.x<n.x?-1:a.x>n.x?1:a.y<n.y?-1:a.y>n.y?1:0),zoe(e)}function zoe(o){if(o.length<=1)return o.slice();const e=[];for(let n=0;n<o.length;n++){const c=o[n];for(;e.length>=2;){const i=e[e.length-1],r=e[e.length-2];if((i.x-r.x)*(c.y-r.y)>=(i.y-r.y)*(c.x-r.x))e.pop();else break}e.push(c)}e.pop();const a=[];for(let n=o.length-1;n>=0;n--){const c=o[n];for(;a.length>=2;){const i=a[a.length-1],r=a[a.length-2];if((i.x-r.x)*(c.y-r.y)>=(i.y-r.y)*(c.x-r.x))a.pop();else break}a.push(c)}return a.pop(),e.length===1&&a.length===1&&e[0].x===a[0].x&&e[0].y===a[0].y?e:e.concat(a)}var Roe=Zw,Doe=Ww,Voe=Xw,Toe=Kw,Foe=Yw,Boe=eL;function tL(o){const e=$.c(6);let a,n;e[0]!==o?({delayDuration:n,...a}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);const c=n===void 0?0:n;let i;return e[3]!==c||e[4]!==a?(i=l.jsx(Roe,{"data-slot":"tooltip-provider",delayDuration:c,...a}),e[3]=c,e[4]=a,e[5]=i):i=e[5],i}function Eoe(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(tL,{children:l.jsx(Doe,{"data-slot":"tooltip",...a})}),e[2]=a,e[3]=n):n=e[3],n}function Ooe(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(Voe,{"data-slot":"tooltip-trigger",...a}),e[2]=a,e[3]=n):n=e[3],n}function Uoe(o){const e=$.c(13);let a,n,c,i;e[0]!==o?({className:n,sideOffset:i,children:a,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i):(a=e[1],n=e[2],c=e[3],i=e[4]);const r=i===void 0?4:i;let d;e[5]!==n?(d=E("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs",n),e[5]=n,e[6]=d):d=e[6];let h;e[7]===Symbol.for("react.memo_cache_sentinel")?(h=l.jsx(Boe,{className:"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"}),e[7]=h):h=e[7];let p;return e[8]!==a||e[9]!==c||e[10]!==r||e[11]!==d?(p=l.jsx(Toe,{children:l.jsxs(Foe,{"data-slot":"tooltip-content",sideOffset:r,className:d,...c,children:[a,h]})}),e[8]=a,e[9]=c,e[10]=r,e[11]=d,e[12]=p):p=e[12],p}const Goe="sidebar_state",Zoe=3600*24*7,Woe="16rem",Xoe="18rem",Koe="3rem",Yoe="b",oL=y.createContext(null);function Gg(){const o=y.useContext(oL);if(!o)throw new Error("useSidebar must be used within a SidebarProvider.");return o}function Qoe(o){const e=$.c(36);let a,n,c,i,r,d,h;e[0]!==o?({defaultOpen:h,open:c,onOpenChange:r,className:n,style:d,children:a,...i}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i,e[5]=r,e[6]=d,e[7]=h):(a=e[1],n=e[2],c=e[3],i=e[4],r=e[5],d=e[6],h=e[7]);const p=h===void 0?!0:h,u=$w(),[s,k]=y.useState(!1),[f,m]=y.useState(p),M=c??f;let g;e[8]!==M||e[9]!==r?(g=B=>{const O=typeof B=="function"?B(M):B;r?r(O):m(O),document.cookie=`${Goe}=${O}; path=/; max-age=${Zoe}`},e[8]=M,e[9]=r,e[10]=g):g=e[10];const v=g;let x;e[11]!==u||e[12]!==v?(x=()=>u?k(eae):v(Joe),e[11]=u,e[12]=v,e[13]=x):x=e[13];const _=x;let w,L;e[14]!==_?(w=()=>{const B=O=>{O.key===Yoe&&(O.metaKey||O.ctrlKey)&&(O.preventDefault(),_())};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},L=[_],e[14]=_,e[15]=w,e[16]=L):(w=e[15],L=e[16]),y.useEffect(w,L);const I=M?"expanded":"collapsed";let C;e[17]!==u||e[18]!==M||e[19]!==s||e[20]!==v||e[21]!==I||e[22]!==_?(C={state:I,open:M,setOpen:v,isMobile:u,openMobile:s,setOpenMobile:k,toggleSidebar:_},e[17]=u,e[18]=M,e[19]=s,e[20]=v,e[21]=I,e[22]=_,e[23]=C):C=e[23];const S=C;let j;e[24]!==d?(j={"--sidebar-width":Woe,"--sidebar-width-icon":Koe,...d},e[24]=d,e[25]=j):j=e[25];const P=j;let V;e[26]!==n?(V=E("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",n),e[26]=n,e[27]=V):V=e[27];let R;e[28]!==a||e[29]!==i||e[30]!==P||e[31]!==V?(R=l.jsx(tL,{delayDuration:0,children:l.jsx("div",{"data-slot":"sidebar-wrapper",style:P,className:V,...i,children:a})}),e[28]=a,e[29]=i,e[30]=P,e[31]=V,e[32]=R):R=e[32];let z;return e[33]!==S||e[34]!==R?(z=l.jsx(oL.Provider,{value:S,children:R}),e[33]=S,e[34]=R,e[35]=z):z=e[35],z}function Joe(o){return!o}function eae(o){return!o}function tae(o){const e=$.c(46);let a,n,c,i,r,d;e[0]!==o?({side:i,variant:r,collapsible:d,className:n,children:a,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i,e[5]=r,e[6]=d):(a=e[1],n=e[2],c=e[3],i=e[4],r=e[5],d=e[6]);const h=i===void 0?"left":i,p=r===void 0?"sidebar":r,u=d===void 0?"offcanvas":d,{isMobile:s,state:k,openMobile:f,setOpenMobile:m}=Gg();if(u==="none"){let j;e[7]!==n?(j=E("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",n),e[7]=n,e[8]=j):j=e[8];let P;return e[9]!==a||e[10]!==c||e[11]!==j?(P=l.jsx("div",{"data-slot":"sidebar",className:j,...c,children:a}),e[9]=a,e[10]=c,e[11]=j,e[12]=P):P=e[12],P}if(s){let j;e[13]===Symbol.for("react.memo_cache_sentinel")?(j=l.jsxs(Moe,{className:"sr-only",children:[l.jsx(moe,{children:"Sidebar"}),l.jsx(voe,{children:"Displays the mobile sidebar."})]}),e[13]=j):j=e[13];let P;e[14]===Symbol.for("react.memo_cache_sentinel")?(P={"--sidebar-width":Xoe},e[14]=P):P=e[14];let V;e[15]!==a?(V=l.jsx("div",{className:"flex h-full w-full flex-col",children:a}),e[15]=a,e[16]=V):V=e[16];let R;e[17]!==h||e[18]!==V?(R=l.jsx(foe,{"data-sidebar":"sidebar","data-slot":"sidebar","data-mobile":"true",className:"bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",style:P,side:h,children:V}),e[17]=h,e[18]=V,e[19]=R):R=e[19];let z;return e[20]!==f||e[21]!==c||e[22]!==m||e[23]!==R?(z=l.jsxs(poe,{open:f,onOpenChange:m,...c,children:[j,R]}),e[20]=f,e[21]=c,e[22]=m,e[23]=R,e[24]=z):z=e[24],z}const M=k==="collapsed"?u:"",g=p==="floating"||p==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon)";let v;e[25]!==g?(v=E("relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",g),e[25]=g,e[26]=v):v=e[26];let x;e[27]!==v?(x=l.jsx("div",{className:v}),e[27]=v,e[28]=x):x=e[28];const _=h==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",w=p==="floating"||p==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]":"group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l";let L;e[29]!==n||e[30]!==_||e[31]!==w?(L=E("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",_,w,n),e[29]=n,e[30]=_,e[31]=w,e[32]=L):L=e[32];let I;e[33]!==a?(I=l.jsx("div",{"data-sidebar":"sidebar",className:"bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",children:a}),e[33]=a,e[34]=I):I=e[34];let C;e[35]!==c||e[36]!==L||e[37]!==I?(C=l.jsx("div",{className:L,...c,children:I}),e[35]=c,e[36]=L,e[37]=I,e[38]=C):C=e[38];let S;return e[39]!==h||e[40]!==k||e[41]!==C||e[42]!==M||e[43]!==x||e[44]!==p?(S=l.jsxs("div",{className:"group peer text-sidebar-foreground hidden md:block","data-state":k,"data-collapsible":M,"data-variant":p,"data-side":h,"data-slot":"sidebar",children:[x,C]}),e[39]=h,e[40]=k,e[41]=C,e[42]=M,e[43]=x,e[44]=p,e[45]=S):S=e[45],S}function oae(o){const e=$.c(15);let a,n,c;e[0]!==o?({className:a,onClick:n,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);const{toggleSidebar:i}=Gg();let r;e[4]!==a?(r=E("h-7 w-7",a),e[4]=a,e[5]=r):r=e[5];let d;e[6]!==n||e[7]!==i?(d=s=>{n?.(s),i()},e[6]=n,e[7]=i,e[8]=d):d=e[8];let h,p;e[9]===Symbol.for("react.memo_cache_sentinel")?(h=l.jsx(Be,{}),p=l.jsx("span",{className:"sr-only",children:"Toggle Sidebar"}),e[9]=h,e[10]=p):(h=e[9],p=e[10]);let u;return e[11]!==c||e[12]!==r||e[13]!==d?(u=l.jsxs(vC,{"data-sidebar":"trigger","data-slot":"sidebar-trigger",variant:"ghost",size:"icon",className:r,onClick:d,...c,children:[h,p]}),e[11]=c,e[12]=r,e[13]=d,e[14]=u):u=e[14],u}function aae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("bg-background relative flex max-w-full min-h-svh flex-1 flex-col","peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("main",{"data-slot":"sidebar-inset",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function nae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("flex flex-col gap-2 p-2",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("div",{"data-slot":"sidebar-header","data-sidebar":"header",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function cae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("flex flex-col gap-2 p-2",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("div",{"data-slot":"sidebar-footer","data-sidebar":"footer",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function iae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("div",{"data-slot":"sidebar-content","data-sidebar":"content",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function aL(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("relative flex w-full min-w-0 flex-col p-2",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("div",{"data-slot":"sidebar-group","data-sidebar":"group",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function rae(o){const e=$.c(10);let a,n,c;e[0]!==o?({className:a,asChild:c,...n}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);const r=(c===void 0?!1:c)?Hg:"div";let d;e[4]!==a?(d=E("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none group-data-[collapsible=icon]:pointer-events-none",a),e[4]=a,e[5]=d):d=e[5];let h;return e[6]!==r||e[7]!==n||e[8]!==d?(h=l.jsx(r,{"data-slot":"sidebar-group-label","data-sidebar":"group-label",className:d,...n}),e[6]=r,e[7]=n,e[8]=d,e[9]=h):h=e[9],h}function dae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("w-full text-sm",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("div",{"data-slot":"sidebar-group-content","data-sidebar":"group-content",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function Zg(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("flex w-full min-w-0 flex-col gap-1",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("ul",{"data-slot":"sidebar-menu","data-sidebar":"menu",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function tn(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("group/menu-item relative",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("li",{"data-slot":"sidebar-menu-item","data-sidebar":"menu-item",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}const sae=mC("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:p-0!"}},defaultVariants:{variant:"default",size:"default"}});function on(o){const e=$.c(28);let a,n,c,i,r,d,h;e[0]!==o?({asChild:c,isActive:i,variant:r,size:d,tooltip:h,className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i,e[5]=r,e[6]=d,e[7]=h):(a=e[1],n=e[2],c=e[3],i=e[4],r=e[5],d=e[6],h=e[7]);const p=c===void 0?!1:c,u=i===void 0?!1:i,s=r===void 0?"default":r,k=d===void 0?"default":d,f=p?Hg:"button",{isMobile:m,state:M}=Gg();let g;e[8]!==a||e[9]!==k||e[10]!==s?(g=E(sae({variant:s,size:k}),a),e[8]=a,e[9]=k,e[10]=s,e[11]=g):g=e[11];let v;e[12]!==f||e[13]!==u||e[14]!==n||e[15]!==k||e[16]!==g?(v=l.jsx(f,{"data-slot":"sidebar-menu-button","data-sidebar":"menu-button","data-size":k,"data-active":u,className:g,...n}),e[12]=f,e[13]=u,e[14]=n,e[15]=k,e[16]=g,e[17]=v):v=e[17];const x=v;if(!h)return x;if(typeof h=="string"){let C;e[18]!==h?(C={children:h},e[18]=h,e[19]=C):C=e[19],h=C}let _;e[20]!==x?(_=l.jsx(Ooe,{asChild:!0,children:x}),e[20]=x,e[21]=_):_=e[21];const w=M!=="collapsed"||m;let L;e[22]!==w||e[23]!==h?(L=l.jsx(Uoe,{side:"right",align:"center",hidden:w,...h}),e[22]=w,e[23]=h,e[24]=L):L=e[24];let I;return e[25]!==_||e[26]!==L?(I=l.jsxs(Eoe,{children:[_,L]}),e[25]=_,e[26]=L,e[27]=I):I=e[27],I}function hae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5","group-data-[collapsible=icon]:hidden",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("ul",{"data-slot":"sidebar-menu-sub","data-sidebar":"menu-sub",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function lae(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("group/menu-sub-item relative",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("li",{"data-slot":"sidebar-menu-sub-item","data-sidebar":"menu-sub-item",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function yae(o){const e=$.c(16);let a,n,c,i,r;e[0]!==o?({asChild:c,size:i,isActive:r,className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i,e[5]=r):(a=e[1],n=e[2],c=e[3],i=e[4],r=e[5]);const d=c===void 0?!1:c,h=i===void 0?"md":i,p=r===void 0?!1:r,u=d?Hg:"a",s=h==="sm"&&"text-xs",k=h==="md"&&"text-sm";let f;e[6]!==a||e[7]!==s||e[8]!==k?(f=E("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0","data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",s,k,"group-data-[collapsible=icon]:hidden",a),e[6]=a,e[7]=s,e[8]=k,e[9]=f):f=e[9];let m;return e[10]!==u||e[11]!==p||e[12]!==n||e[13]!==h||e[14]!==f?(m=l.jsx(u,{"data-slot":"sidebar-menu-sub-button","data-sidebar":"menu-sub-button","data-size":h,"data-active":p,className:f,...n}),e[10]=u,e[11]=p,e[12]=n,e[13]=h,e[14]=f,e[15]=m):m=e[15],m}function pae(o){const e=$.c(10);let a,n,c;if(e[0]!==o?({variant:c,children:a,...n}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]),(c===void 0?"header":c)==="sidebar"){let d;return e[4]!==a||e[5]!==n?(d=l.jsx(aae,{...n,children:a}),e[4]=a,e[5]=n,e[6]=d):d=e[6],d}let r;return e[7]!==a||e[8]!==n?(r=l.jsx("main",{className:"mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl",...n,children:a}),e[7]=a,e[8]=n,e[9]=r):r=e[9],r}function uae(o){const e=$.c(5),{children:a,variant:n}=o,c=n===void 0?"header":n,i=jg().props.sidebarOpen;if(c==="header"){let d;return e[0]!==a?(d=l.jsx("div",{className:"flex min-h-screen w-full flex-col",children:a}),e[0]=a,e[1]=d):d=e[1],d}let r;return e[2]!==a||e[3]!==i?(r=l.jsx(Qoe,{defaultOpen:i,children:a}),e[2]=a,e[3]=i,e[4]=r):r=e[4],r}function kae(o){const e=$.c(10);let a,n,c;e[0]!==o?({iconNode:a,className:n,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);let i;e[4]!==n?(i=E("h-4 w-4",n),e[4]=n,e[5]=i):i=e[5];let r;return e[6]!==a||e[7]!==c||e[8]!==i?(r=l.jsx(a,{className:i,...c}),e[6]=a,e[7]=c,e[8]=i,e[9]=r):r=e[9],r}function fae(o){const e=$.c(12);let a,n,c;e[0]!==o?({items:n,className:a,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);const i=`group-data-[collapsible=icon]:p-0 ${a||""}`;let r;e[4]!==n?(r=n.map(Mae),e[4]=n,e[5]=r):r=e[5];let d;e[6]!==r?(d=l.jsx(dae,{children:l.jsx(Zg,{children:r})}),e[6]=r,e[7]=d):d=e[7];let h;return e[8]!==c||e[9]!==i||e[10]!==d?(h=l.jsx(aL,{...c,className:i,children:d}),e[8]=c,e[9]=i,e[10]=d,e[11]=h):h=e[11],h}function Mae(o){return l.jsx(tn,{children:l.jsx(on,{asChild:!0,className:"text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100",children:l.jsxs("a",{href:px(o.href),target:"_blank",rel:"noopener noreferrer",children:[o.icon&&l.jsx(kae,{iconNode:o.icon,className:"h-5 w-5"}),l.jsx("span",{children:o.title})]})})},o.title)}var Wg="Collapsible",[mae,Rce]=je(Wg),[vae,Bx]=mae(Wg),nL=y.forwardRef((o,e)=>{const{__scopeCollapsible:a,open:n,defaultOpen:c,disabled:i,onOpenChange:r,...d}=o,[h,p]=rn({prop:n,defaultProp:c??!1,onChange:r,caller:Wg});return l.jsx(vae,{scope:a,disabled:i,contentId:Oe(),open:h,onOpenToggle:y.useCallback(()=>p(u=>!u),[p]),children:l.jsx(Z.div,{"data-state":Ox(h),"data-disabled":i?"":void 0,...d,ref:e})})});nL.displayName=Wg;var cL="CollapsibleTrigger",iL=y.forwardRef((o,e)=>{const{__scopeCollapsible:a,...n}=o,c=Bx(cL,a);return l.jsx(Z.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":Ox(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...n,ref:e,onClick:H(o.onClick,c.onOpenToggle)})});iL.displayName=cL;var Ex="CollapsibleContent",rL=y.forwardRef((o,e)=>{const{forceMount:a,...n}=o,c=Bx(Ex,o.__scopeCollapsible);return l.jsx(Se,{present:a||c.open,children:({present:i})=>l.jsx(gae,{...n,ref:e,present:i})})});rL.displayName=Ex;var gae=y.forwardRef((o,e)=>{const{__scopeCollapsible:a,present:n,children:c,...i}=o,r=Bx(Ex,a),[d,h]=y.useState(n),p=y.useRef(null),u=Q(e,p),s=y.useRef(0),k=s.current,f=y.useRef(0),m=f.current,M=r.open||d,g=y.useRef(M),v=y.useRef(void 0);return y.useEffect(()=>{const x=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(x)},[]),Ue(()=>{const x=p.current;if(x){v.current=v.current||{transitionDuration:x.style.transitionDuration,animationName:x.style.animationName},x.style.transitionDuration="0s",x.style.animationName="none";const _=x.getBoundingClientRect();s.current=_.height,f.current=_.width,g.current||(x.style.transitionDuration=v.current.transitionDuration,x.style.animationName=v.current.animationName),h(n)}},[r.open,n]),l.jsx(Z.div,{"data-state":Ox(r.open),"data-disabled":r.disabled?"":void 0,id:r.contentId,hidden:!M,...i,ref:u,style:{"--radix-collapsible-content-height":k?`${k}px`:void 0,"--radix-collapsible-content-width":m?`${m}px`:void 0,...o.style},children:M&&c})});function Ox(o){return o?"open":"closed"}var xae=nL;function _ae(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(xae,{"data-slot":"collapsible",...a}),e[2]=a,e[3]=n):n=e[3],n}function wae(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(iL,{"data-slot":"collapsible-trigger",...a}),e[2]=a,e[3]=n):n=e[3],n}function Lae(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(rL,{"data-slot":"collapsible-content",...a}),e[2]=a,e[3]=n):n=e[3],n}function Cae(o){const e=$.c(10),{items:a}=o;let n;e[0]!==a?(n=a===void 0?[]:a,e[0]=a,e[1]=n):n=e[1];const c=n,i=jg();let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=l.jsx(rae,{children:"Platform"}),e[2]=r):r=e[2];let d;if(e[3]!==c||e[4]!==i){let p;e[6]!==i?(p=u=>u.items&&u.items.length>0?l.jsx(_ae,{asChild:!0,defaultOpen:!0,className:"group/collapsible",children:l.jsxs(tn,{children:[l.jsx(wae,{asChild:!0,children:l.jsxs(on,{tooltip:{children:u.title},children:[u.icon&&l.jsx(u.icon,{}),l.jsx("span",{children:u.title}),l.jsx(Da,{className:"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"})]})}),l.jsx(Lae,{children:l.jsx(hae,{children:u.items?.map(k=>l.jsx(lae,{children:l.jsx(yae,{asChild:!0,isActive:i.url.startsWith(px(k.href)),children:l.jsxs(Ta,{href:k.href,prefetch:!0,children:[k.icon&&l.jsx(k.icon,{}),l.jsx("span",{children:k.title})]})})},k.title))})})]})},u.title):l.jsx(tn,{children:l.jsx(on,{asChild:!0,isActive:i.url.startsWith(px(u.href)),tooltip:{children:u.title},children:l.jsxs(Ta,{href:u.href,prefetch:!0,children:[u.icon&&l.jsx(u.icon,{}),l.jsx("span",{children:u.title})]})})},u.title),e[6]=i,e[7]=p):p=e[7],d=c.map(p),e[3]=c,e[4]=i,e[5]=d}else d=e[5];let h;return e[8]!==d?(h=l.jsxs(aL,{className:"px-2 py-0",children:[r,l.jsx(Zg,{children:d})]}),e[8]=d,e[9]=h):h=e[9],h}var hx="rovingFocusGroup.onEntryFocus",bae={bubbles:!1,cancelable:!0},hn="RovingFocusGroup",[_x,dL,Iae]=B_(hn),[Nae,sL]=je(hn,[Iae]),[Sae,$ae]=Nae(hn),hL=y.forwardRef((o,e)=>l.jsx(_x.Provider,{scope:o.__scopeRovingFocusGroup,children:l.jsx(_x.Slot,{scope:o.__scopeRovingFocusGroup,children:l.jsx(Aae,{...o,ref:e})})}));hL.displayName=hn;var Aae=y.forwardRef((o,e)=>{const{__scopeRovingFocusGroup:a,orientation:n,loop:c=!1,dir:i,currentTabStopId:r,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:h,onEntryFocus:p,preventScrollOnEntryFocus:u=!1,...s}=o,k=y.useRef(null),f=Q(e,k),m=E_(i),[M,g]=rn({prop:r,defaultProp:d??null,onChange:h,caller:hn}),[v,x]=y.useState(!1),_=Ie(p),w=dL(a),L=y.useRef(!1),[I,C]=y.useState(0);return y.useEffect(()=>{const S=k.current;if(S)return S.addEventListener(hx,_),()=>S.removeEventListener(hx,_)},[_]),l.jsx(Sae,{scope:a,orientation:n,dir:m,loop:c,currentTabStopId:M,onItemFocus:y.useCallback(S=>g(S),[g]),onItemShiftTab:y.useCallback(()=>x(!0),[]),onFocusableItemAdd:y.useCallback(()=>C(S=>S+1),[]),onFocusableItemRemove:y.useCallback(()=>C(S=>S-1),[]),children:l.jsx(Z.div,{tabIndex:v||I===0?-1:0,"data-orientation":n,...s,ref:f,style:{outline:"none",...o.style},onMouseDown:H(o.onMouseDown,()=>{L.current=!0}),onFocus:H(o.onFocus,S=>{const j=!L.current;if(S.target===S.currentTarget&&j&&!v){const P=new CustomEvent(hx,bae);if(S.currentTarget.dispatchEvent(P),!P.defaultPrevented){const V=w().filter(A=>A.focusable),R=V.find(A=>A.active),z=V.find(A=>A.id===M),O=[R,z,...V].filter(Boolean).map(A=>A.ref.current);pL(O,u)}}L.current=!1}),onBlur:H(o.onBlur,()=>x(!1))})})}),lL="RovingFocusGroupItem",yL=y.forwardRef((o,e)=>{const{__scopeRovingFocusGroup:a,focusable:n=!0,active:c=!1,tabStopId:i,children:r,...d}=o,h=Oe(),p=i||h,u=$ae(lL,a),s=u.currentTabStopId===p,k=dL(a),{onFocusableItemAdd:f,onFocusableItemRemove:m,currentTabStopId:M}=u;return y.useEffect(()=>{if(n)return f(),()=>m()},[n,f,m]),l.jsx(_x.ItemSlot,{scope:a,id:p,focusable:n,active:c,children:l.jsx(Z.span,{tabIndex:s?0:-1,"data-orientation":u.orientation,...d,ref:e,onMouseDown:H(o.onMouseDown,g=>{n?u.onItemFocus(p):g.preventDefault()}),onFocus:H(o.onFocus,()=>u.onItemFocus(p)),onKeyDown:H(o.onKeyDown,g=>{if(g.key==="Tab"&&g.shiftKey){u.onItemShiftTab();return}if(g.target!==g.currentTarget)return;const v=jae(g,u.orientation,u.dir);if(v!==void 0){if(g.metaKey||g.ctrlKey||g.altKey||g.shiftKey)return;g.preventDefault();let _=k().filter(w=>w.focusable).map(w=>w.ref.current);if(v==="last")_.reverse();else if(v==="prev"||v==="next"){v==="prev"&&_.reverse();const w=_.indexOf(g.currentTarget);_=u.loop?Hae(_,w+1):_.slice(w+1)}setTimeout(()=>pL(_))}}),children:typeof r=="function"?r({isCurrentTabStop:s,hasTabStop:M!=null}):r})})});yL.displayName=lL;var qae={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Pae(o,e){return e!=="rtl"?o:o==="ArrowLeft"?"ArrowRight":o==="ArrowRight"?"ArrowLeft":o}function jae(o,e,a){const n=Pae(o.key,a);if(!(e==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(e==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return qae[n]}function pL(o,e=!1){const a=document.activeElement;for(const n of o)if(n===a||(n.focus({preventScroll:e}),document.activeElement!==a))return}function Hae(o,e){return o.map((a,n)=>o[(e+n)%o.length])}var zae=hL,Rae=yL;function Dae(o){const e=Vae(o),a=y.forwardRef((n,c)=>{const{children:i,...r}=n,d=y.Children.toArray(i),h=d.find(Fae);if(h){const p=h.props.children,u=d.map(s=>s===h?y.Children.count(p)>1?y.Children.only(null):y.isValidElement(p)?p.props.children:null:s);return l.jsx(e,{...r,ref:c,children:y.isValidElement(p)?y.cloneElement(p,void 0,u):null})}return l.jsx(e,{...r,ref:c,children:i})});return a.displayName=`${o}.Slot`,a}function Vae(o){const e=y.forwardRef((a,n)=>{const{children:c,...i}=a;if(y.isValidElement(c)){const r=Eae(c),d=Bae(i,c.props);return c.type!==y.Fragment&&(d.ref=n?cn(n,r):r),y.cloneElement(c,d)}return y.Children.count(c)>1?y.Children.only(null):null});return e.displayName=`${o}.SlotClone`,e}var Tae=Symbol("radix.slottable");function Fae(o){return y.isValidElement(o)&&typeof o.type=="function"&&"__radixId"in o.type&&o.type.__radixId===Tae}function Bae(o,e){const a={...e};for(const n in e){const c=o[n],i=e[n];/^on[A-Z]/.test(n)?c&&i?a[n]=(...d)=>{const h=i(...d);return c(...d),h}:c&&(a[n]=c):n==="style"?a[n]={...c,...i}:n==="className"&&(a[n]=[c,i].filter(Boolean).join(" "))}return{...o,...a}}function Eae(o){let e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning;return a?o.ref:(e=Object.getOwnPropertyDescriptor(o,"ref")?.get,a=e&&"isReactWarning"in e&&e.isReactWarning,a?o.props.ref:o.props.ref||o.ref)}var wx=["Enter"," "],Oae=["ArrowDown","PageUp","Home"],uL=["ArrowUp","PageDown","End"],Uae=[...Oae,...uL],Gae={ltr:[...wx,"ArrowRight"],rtl:[...wx,"ArrowLeft"]},Zae={ltr:["ArrowLeft"],rtl:["ArrowRight"]},ln="Menu",[an,Wae,Xae]=B_(ln),[Ca,kL]=je(ln,[Xae,Tg,sL]),Xg=Tg(),fL=sL(),[Kae,ba]=Ca(ln),[Yae,yn]=Ca(ln),ML=o=>{const{__scopeMenu:e,open:a=!1,children:n,dir:c,onOpenChange:i,modal:r=!0}=o,d=Xg(e),[h,p]=y.useState(null),u=y.useRef(!1),s=Ie(i),k=E_(c);return y.useEffect(()=>{const f=()=>{u.current=!0,document.addEventListener("pointerdown",m,{capture:!0,once:!0}),document.addEventListener("pointermove",m,{capture:!0,once:!0})},m=()=>u.current=!1;return document.addEventListener("keydown",f,{capture:!0}),()=>{document.removeEventListener("keydown",f,{capture:!0}),document.removeEventListener("pointerdown",m,{capture:!0}),document.removeEventListener("pointermove",m,{capture:!0})}},[]),l.jsx(kw,{...d,children:l.jsx(Kae,{scope:e,open:a,onOpenChange:s,content:h,onContentChange:p,children:l.jsx(Yae,{scope:e,onClose:y.useCallback(()=>s(!1),[s]),isUsingKeyboardRef:u,dir:k,modal:r,children:n})})})};ML.displayName=ln;var Qae="MenuAnchor",Ux=y.forwardRef((o,e)=>{const{__scopeMenu:a,...n}=o,c=Xg(a);return l.jsx(fw,{...c,...n,ref:e})});Ux.displayName=Qae;var Gx="MenuPortal",[Jae,mL]=Ca(Gx,{forceMount:void 0}),vL=o=>{const{__scopeMenu:e,forceMount:a,children:n,container:c}=o,i=ba(Gx,e);return l.jsx(Jae,{scope:e,forceMount:a,children:l.jsx(Se,{present:a||i.open,children:l.jsx(Fg,{asChild:!0,container:c,children:n})})})};vL.displayName=Gx;var pe="MenuContent",[ene,Zx]=Ca(pe),gL=y.forwardRef((o,e)=>{const a=mL(pe,o.__scopeMenu),{forceMount:n=a.forceMount,...c}=o,i=ba(pe,o.__scopeMenu),r=yn(pe,o.__scopeMenu);return l.jsx(an.Provider,{scope:o.__scopeMenu,children:l.jsx(Se,{present:n||i.open,children:l.jsx(an.Slot,{scope:o.__scopeMenu,children:r.modal?l.jsx(tne,{...c,ref:e}):l.jsx(one,{...c,ref:e})})})})}),tne=y.forwardRef((o,e)=>{const a=ba(pe,o.__scopeMenu),n=y.useRef(null),c=Q(e,n);return y.useEffect(()=>{const i=n.current;if(i)return xw(i)},[]),l.jsx(Wx,{...o,ref:c,trapFocus:a.open,disableOutsidePointerEvents:a.open,disableOutsideScroll:!0,onFocusOutside:H(o.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>a.onOpenChange(!1)})}),one=y.forwardRef((o,e)=>{const a=ba(pe,o.__scopeMenu);return l.jsx(Wx,{...o,ref:e,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>a.onOpenChange(!1)})}),ane=Dae("MenuContent.ScrollLock"),Wx=y.forwardRef((o,e)=>{const{__scopeMenu:a,loop:n=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:r,disableOutsidePointerEvents:d,onEntryFocus:h,onEscapeKeyDown:p,onPointerDownOutside:u,onFocusOutside:s,onInteractOutside:k,onDismiss:f,disableOutsideScroll:m,...M}=o,g=ba(pe,a),v=yn(pe,a),x=Xg(a),_=fL(a),w=Wae(a),[L,I]=y.useState(null),C=y.useRef(null),S=Q(e,C,g.onContentChange),j=y.useRef(0),P=y.useRef(""),V=y.useRef(0),R=y.useRef(null),z=y.useRef("right"),B=y.useRef(0),O=m?zx:y.Fragment,A=m?{as:ane,allowPinchZoom:!0}:void 0,T=N=>{const G=P.current+N,J=w().filter(K=>!K.disabled),le=document.activeElement,F=J.find(K=>K.ref.current===le)?.textValue,W=J.map(K=>K.textValue),X=kne(W,G,F),Y=J.find(K=>K.textValue===X)?.ref.current;(function K(U){P.current=U,window.clearTimeout(j.current),U!==""&&(j.current=window.setTimeout(()=>K(""),1e3))})(G),Y&&setTimeout(()=>Y.focus())};y.useEffect(()=>()=>window.clearTimeout(j.current),[]),G_();const q=y.useCallback(N=>z.current===R.current?.side&&Mne(N,R.current?.area),[]);return l.jsx(ene,{scope:a,searchRef:P,onItemEnter:y.useCallback(N=>{q(N)&&N.preventDefault()},[q]),onItemLeave:y.useCallback(N=>{q(N)||(C.current?.focus(),I(null))},[q]),onTriggerLeave:y.useCallback(N=>{q(N)&&N.preventDefault()},[q]),pointerGraceTimerRef:V,onPointerGraceIntentChange:y.useCallback(N=>{R.current=N},[]),children:l.jsx(O,{...A,children:l.jsx(bx,{asChild:!0,trapped:c,onMountAutoFocus:H(i,N=>{N.preventDefault(),C.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:r,children:l.jsx(zg,{asChild:!0,disableOutsidePointerEvents:d,onEscapeKeyDown:p,onPointerDownOutside:u,onFocusOutside:s,onInteractOutside:k,onDismiss:f,children:l.jsx(zae,{asChild:!0,..._,dir:v.dir,orientation:"vertical",loop:n,currentTabStopId:L,onCurrentTabStopIdChange:I,onEntryFocus:H(h,N=>{v.isUsingKeyboardRef.current||N.preventDefault()}),preventScrollOnEntryFocus:!0,children:l.jsx(Mw,{role:"menu","aria-orientation":"vertical","data-state":zL(g.open),"data-radix-menu-content":"",dir:v.dir,...x,...M,ref:S,style:{outline:"none",...M.style},onKeyDown:H(M.onKeyDown,N=>{const J=N.target.closest("[data-radix-menu-content]")===N.currentTarget,le=N.ctrlKey||N.altKey||N.metaKey,F=N.key.length===1;J&&(N.key==="Tab"&&N.preventDefault(),!le&&F&&T(N.key));const W=C.current;if(N.target!==W||!Uae.includes(N.key))return;N.preventDefault();const Y=w().filter(K=>!K.disabled).map(K=>K.ref.current);uL.includes(N.key)&&Y.reverse(),pne(Y)}),onBlur:H(o.onBlur,N=>{N.currentTarget.contains(N.target)||(window.clearTimeout(j.current),P.current="")}),onPointerMove:H(o.onPointerMove,nn(N=>{const G=N.target,J=B.current!==N.clientX;if(N.currentTarget.contains(G)&&J){const le=N.clientX>B.current?"right":"left";z.current=le,B.current=N.clientX}}))})})})})})})});gL.displayName=pe;var nne="MenuGroup",Xx=y.forwardRef((o,e)=>{const{__scopeMenu:a,...n}=o;return l.jsx(Z.div,{role:"group",...n,ref:e})});Xx.displayName=nne;var cne="MenuLabel",xL=y.forwardRef((o,e)=>{const{__scopeMenu:a,...n}=o;return l.jsx(Z.div,{...n,ref:e})});xL.displayName=cne;var qg="MenuItem",q_="menu.itemSelect",Kg=y.forwardRef((o,e)=>{const{disabled:a=!1,onSelect:n,...c}=o,i=y.useRef(null),r=yn(qg,o.__scopeMenu),d=Zx(qg,o.__scopeMenu),h=Q(e,i),p=y.useRef(!1),u=()=>{const s=i.current;if(!a&&s){const k=new CustomEvent(q_,{bubbles:!0,cancelable:!0});s.addEventListener(q_,f=>n?.(f),{once:!0}),T_(s,k),k.defaultPrevented?p.current=!1:r.onClose()}};return l.jsx(_L,{...c,ref:h,disabled:a,onClick:H(o.onClick,u),onPointerDown:s=>{o.onPointerDown?.(s),p.current=!0},onPointerUp:H(o.onPointerUp,s=>{p.current||s.currentTarget?.click()}),onKeyDown:H(o.onKeyDown,s=>{const k=d.searchRef.current!=="";a||k&&s.key===" "||wx.includes(s.key)&&(s.currentTarget.click(),s.preventDefault())})})});Kg.displayName=qg;var _L=y.forwardRef((o,e)=>{const{__scopeMenu:a,disabled:n=!1,textValue:c,...i}=o,r=Zx(qg,a),d=fL(a),h=y.useRef(null),p=Q(e,h),[u,s]=y.useState(!1),[k,f]=y.useState("");return y.useEffect(()=>{const m=h.current;m&&f((m.textContent??"").trim())},[i.children]),l.jsx(an.ItemSlot,{scope:a,disabled:n,textValue:c??k,children:l.jsx(Rae,{asChild:!0,...d,focusable:!n,children:l.jsx(Z.div,{role:"menuitem","data-highlighted":u?"":void 0,"aria-disabled":n||void 0,"data-disabled":n?"":void 0,...i,ref:p,onPointerMove:H(o.onPointerMove,nn(m=>{n?r.onItemLeave(m):(r.onItemEnter(m),m.defaultPrevented||m.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:H(o.onPointerLeave,nn(m=>r.onItemLeave(m))),onFocus:H(o.onFocus,()=>s(!0)),onBlur:H(o.onBlur,()=>s(!1))})})})}),ine="MenuCheckboxItem",wL=y.forwardRef((o,e)=>{const{checked:a=!1,onCheckedChange:n,...c}=o;return l.jsx(NL,{scope:o.__scopeMenu,checked:a,children:l.jsx(Kg,{role:"menuitemcheckbox","aria-checked":Pg(a)?"mixed":a,...c,ref:e,"data-state":Yx(a),onSelect:H(c.onSelect,()=>n?.(Pg(a)?!0:!a),{checkForDefaultPrevented:!1})})})});wL.displayName=ine;var LL="MenuRadioGroup",[rne,dne]=Ca(LL,{value:void 0,onValueChange:()=>{}}),CL=y.forwardRef((o,e)=>{const{value:a,onValueChange:n,...c}=o,i=Ie(n);return l.jsx(rne,{scope:o.__scopeMenu,value:a,onValueChange:i,children:l.jsx(Xx,{...c,ref:e})})});CL.displayName=LL;var bL="MenuRadioItem",IL=y.forwardRef((o,e)=>{const{value:a,...n}=o,c=dne(bL,o.__scopeMenu),i=a===c.value;return l.jsx(NL,{scope:o.__scopeMenu,checked:i,children:l.jsx(Kg,{role:"menuitemradio","aria-checked":i,...n,ref:e,"data-state":Yx(i),onSelect:H(n.onSelect,()=>c.onValueChange?.(a),{checkForDefaultPrevented:!1})})})});IL.displayName=bL;var Kx="MenuItemIndicator",[NL,sne]=Ca(Kx,{checked:!1}),SL=y.forwardRef((o,e)=>{const{__scopeMenu:a,forceMount:n,...c}=o,i=sne(Kx,a);return l.jsx(Se,{present:n||Pg(i.checked)||i.checked===!0,children:l.jsx(Z.span,{...c,ref:e,"data-state":Yx(i.checked)})})});SL.displayName=Kx;var hne="MenuSeparator",$L=y.forwardRef((o,e)=>{const{__scopeMenu:a,...n}=o;return l.jsx(Z.div,{role:"separator","aria-orientation":"horizontal",...n,ref:e})});$L.displayName=hne;var lne="MenuArrow",AL=y.forwardRef((o,e)=>{const{__scopeMenu:a,...n}=o,c=Xg(a);return l.jsx(mw,{...c,...n,ref:e})});AL.displayName=lne;var yne="MenuSub",[Dce,qL]=Ca(yne),Ga="MenuSubTrigger",PL=y.forwardRef((o,e)=>{const a=ba(Ga,o.__scopeMenu),n=yn(Ga,o.__scopeMenu),c=qL(Ga,o.__scopeMenu),i=Zx(Ga,o.__scopeMenu),r=y.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:h}=i,p={__scopeMenu:o.__scopeMenu},u=y.useCallback(()=>{r.current&&window.clearTimeout(r.current),r.current=null},[]);return y.useEffect(()=>u,[u]),y.useEffect(()=>{const s=d.current;return()=>{window.clearTimeout(s),h(null)}},[d,h]),l.jsx(Ux,{asChild:!0,...p,children:l.jsx(_L,{id:c.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":c.contentId,"data-state":zL(a.open),...o,ref:cn(e,c.onTriggerChange),onClick:s=>{o.onClick?.(s),!(o.disabled||s.defaultPrevented)&&(s.currentTarget.focus(),a.open||a.onOpenChange(!0))},onPointerMove:H(o.onPointerMove,nn(s=>{i.onItemEnter(s),!s.defaultPrevented&&!o.disabled&&!a.open&&!r.current&&(i.onPointerGraceIntentChange(null),r.current=window.setTimeout(()=>{a.onOpenChange(!0),u()},100))})),onPointerLeave:H(o.onPointerLeave,nn(s=>{u();const k=a.content?.getBoundingClientRect();if(k){const f=a.content?.dataset.side,m=f==="right",M=m?-5:5,g=k[m?"left":"right"],v=k[m?"right":"left"];i.onPointerGraceIntentChange({area:[{x:s.clientX+M,y:s.clientY},{x:g,y:k.top},{x:v,y:k.top},{x:v,y:k.bottom},{x:g,y:k.bottom}],side:f}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(s),s.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:H(o.onKeyDown,s=>{const k=i.searchRef.current!=="";o.disabled||k&&s.key===" "||Gae[n.dir].includes(s.key)&&(a.onOpenChange(!0),a.content?.focus(),s.preventDefault())})})})});PL.displayName=Ga;var jL="MenuSubContent",HL=y.forwardRef((o,e)=>{const a=mL(pe,o.__scopeMenu),{forceMount:n=a.forceMount,...c}=o,i=ba(pe,o.__scopeMenu),r=yn(pe,o.__scopeMenu),d=qL(jL,o.__scopeMenu),h=y.useRef(null),p=Q(e,h);return l.jsx(an.Provider,{scope:o.__scopeMenu,children:l.jsx(Se,{present:n||i.open,children:l.jsx(an.Slot,{scope:o.__scopeMenu,children:l.jsx(Wx,{id:d.contentId,"aria-labelledby":d.triggerId,...c,ref:p,align:"start",side:r.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:u=>{r.isUsingKeyboardRef.current&&h.current?.focus(),u.preventDefault()},onCloseAutoFocus:u=>u.preventDefault(),onFocusOutside:H(o.onFocusOutside,u=>{u.target!==d.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:H(o.onEscapeKeyDown,u=>{r.onClose(),u.preventDefault()}),onKeyDown:H(o.onKeyDown,u=>{const s=u.currentTarget.contains(u.target),k=Zae[r.dir].includes(u.key);s&&k&&(i.onOpenChange(!1),d.trigger?.focus(),u.preventDefault())})})})})})});HL.displayName=jL;function zL(o){return o?"open":"closed"}function Pg(o){return o==="indeterminate"}function Yx(o){return Pg(o)?"indeterminate":o?"checked":"unchecked"}function pne(o){const e=document.activeElement;for(const a of o)if(a===e||(a.focus(),document.activeElement!==e))return}function une(o,e){return o.map((a,n)=>o[(e+n)%o.length])}function kne(o,e,a){const c=e.length>1&&Array.from(e).every(p=>p===e[0])?e[0]:e,i=a?o.indexOf(a):-1;let r=une(o,Math.max(i,0));c.length===1&&(r=r.filter(p=>p!==a));const h=r.find(p=>p.toLowerCase().startsWith(c.toLowerCase()));return h!==a?h:void 0}function fne(o,e){const{x:a,y:n}=o;let c=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){const d=e[i],h=e[r],p=d.x,u=d.y,s=h.x,k=h.y;u>n!=k>n&&a<(s-p)*(n-u)/(k-u)+p&&(c=!c)}return c}function Mne(o,e){if(!e)return!1;const a={x:o.clientX,y:o.clientY};return fne(a,e)}function nn(o){return e=>e.pointerType==="mouse"?o(e):void 0}var mne=ML,vne=Ux,gne=vL,xne=gL,_ne=Xx,wne=xL,Lne=Kg,Cne=wL,bne=CL,Ine=IL,Nne=SL,Sne=$L,$ne=AL,Ane=PL,qne=HL,Yg="DropdownMenu",[Pne,Vce]=je(Yg,[kL]),ne=kL(),[jne,RL]=Pne(Yg),DL=o=>{const{__scopeDropdownMenu:e,children:a,dir:n,open:c,defaultOpen:i,onOpenChange:r,modal:d=!0}=o,h=ne(e),p=y.useRef(null),[u,s]=rn({prop:c,defaultProp:i??!1,onChange:r,caller:Yg});return l.jsx(jne,{scope:e,triggerId:Oe(),triggerRef:p,contentId:Oe(),open:u,onOpenChange:s,onOpenToggle:y.useCallback(()=>s(k=>!k),[s]),modal:d,children:l.jsx(mne,{...h,open:u,onOpenChange:s,dir:n,modal:d,children:a})})};DL.displayName=Yg;var VL="DropdownMenuTrigger",TL=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,disabled:n=!1,...c}=o,i=RL(VL,a),r=ne(a);return l.jsx(vne,{asChild:!0,...r,children:l.jsx(Z.button,{type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":n?"":void 0,disabled:n,...c,ref:cn(e,i.triggerRef),onPointerDown:H(o.onPointerDown,d=>{!n&&d.button===0&&d.ctrlKey===!1&&(i.onOpenToggle(),i.open||d.preventDefault())}),onKeyDown:H(o.onKeyDown,d=>{n||(["Enter"," "].includes(d.key)&&i.onOpenToggle(),d.key==="ArrowDown"&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(d.key)&&d.preventDefault())})})})});TL.displayName=VL;var Hne="DropdownMenuPortal",FL=o=>{const{__scopeDropdownMenu:e,...a}=o,n=ne(e);return l.jsx(gne,{...n,...a})};FL.displayName=Hne;var BL="DropdownMenuContent",EL=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=RL(BL,a),i=ne(a),r=y.useRef(!1);return l.jsx(xne,{id:c.contentId,"aria-labelledby":c.triggerId,...i,...n,ref:e,onCloseAutoFocus:H(o.onCloseAutoFocus,d=>{r.current||c.triggerRef.current?.focus(),r.current=!1,d.preventDefault()}),onInteractOutside:H(o.onInteractOutside,d=>{const h=d.detail.originalEvent,p=h.button===0&&h.ctrlKey===!0,u=h.button===2||p;(!c.modal||u)&&(r.current=!0)}),style:{...o.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});EL.displayName=BL;var zne="DropdownMenuGroup",OL=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(_ne,{...c,...n,ref:e})});OL.displayName=zne;var Rne="DropdownMenuLabel",UL=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(wne,{...c,...n,ref:e})});UL.displayName=Rne;var Dne="DropdownMenuItem",GL=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(Lne,{...c,...n,ref:e})});GL.displayName=Dne;var Vne="DropdownMenuCheckboxItem",Tne=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(Cne,{...c,...n,ref:e})});Tne.displayName=Vne;var Fne="DropdownMenuRadioGroup",Bne=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(bne,{...c,...n,ref:e})});Bne.displayName=Fne;var Ene="DropdownMenuRadioItem",One=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(Ine,{...c,...n,ref:e})});One.displayName=Ene;var Une="DropdownMenuItemIndicator",Gne=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(Nne,{...c,...n,ref:e})});Gne.displayName=Une;var Zne="DropdownMenuSeparator",ZL=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(Sne,{...c,...n,ref:e})});ZL.displayName=Zne;var Wne="DropdownMenuArrow",Xne=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx($ne,{...c,...n,ref:e})});Xne.displayName=Wne;var Kne="DropdownMenuSubTrigger",Yne=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(Ane,{...c,...n,ref:e})});Yne.displayName=Kne;var Qne="DropdownMenuSubContent",Jne=y.forwardRef((o,e)=>{const{__scopeDropdownMenu:a,...n}=o,c=ne(a);return l.jsx(qne,{...c,...n,ref:e,style:{...o.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Jne.displayName=Qne;var e2e=DL,t2e=TL,o2e=FL,a2e=EL,n2e=OL,c2e=UL,i2e=GL,r2e=ZL;function d2e(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(e2e,{"data-slot":"dropdown-menu",...a}),e[2]=a,e[3]=n):n=e[3],n}function s2e(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(t2e,{"data-slot":"dropdown-menu-trigger",...a}),e[2]=a,e[3]=n):n=e[3],n}function h2e(o){const e=$.c(10);let a,n,c;e[0]!==o?({className:a,sideOffset:c,...n}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);const i=c===void 0?4:c;let r;e[4]!==a?(r=E("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",a),e[4]=a,e[5]=r):r=e[5];let d;return e[6]!==n||e[7]!==i||e[8]!==r?(d=l.jsx(o2e,{children:l.jsx(a2e,{"data-slot":"dropdown-menu-content",sideOffset:i,className:r,...n})}),e[6]=n,e[7]=i,e[8]=r,e[9]=d):d=e[9],d}function l2e(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx(n2e,{"data-slot":"dropdown-menu-group",...a}),e[2]=a,e[3]=n):n=e[3],n}function P_(o){const e=$.c(12);let a,n,c,i;e[0]!==o?({className:a,inset:n,variant:i,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c,e[4]=i):(a=e[1],n=e[2],c=e[3],i=e[4]);const r=i===void 0?"default":i;let d;e[5]!==a?(d=E("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),e[5]=a,e[6]=d):d=e[6];let h;return e[7]!==n||e[8]!==c||e[9]!==d||e[10]!==r?(h=l.jsx(i2e,{"data-slot":"dropdown-menu-item","data-inset":n,"data-variant":r,className:d,...c}),e[7]=n,e[8]=c,e[9]=d,e[10]=r,e[11]=h):h=e[11],h}function y2e(o){const e=$.c(10);let a,n,c;e[0]!==o?({className:a,inset:n,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);let i;e[4]!==a?(i=E("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",a),e[4]=a,e[5]=i):i=e[5];let r;return e[6]!==n||e[7]!==c||e[8]!==i?(r=l.jsx(c2e,{"data-slot":"dropdown-menu-label","data-inset":n,className:i,...c}),e[6]=n,e[7]=c,e[8]=i,e[9]=r):r=e[9],r}function j_(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("bg-border -mx-1 my-1 h-px",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(r2e,{"data-slot":"dropdown-menu-separator",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}var lx={exports:{}},yx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function p2e(){if(H_)return yx;H_=1;var o=kC();function e(s,k){return s===k&&(s!==0||1/s===1/k)||s!==s&&k!==k}var a=typeof Object.is=="function"?Object.is:e,n=o.useState,c=o.useEffect,i=o.useLayoutEffect,r=o.useDebugValue;function d(s,k){var f=k(),m=n({inst:{value:f,getSnapshot:k}}),M=m[0].inst,g=m[1];return i(function(){M.value=f,M.getSnapshot=k,h(M)&&g({inst:M})},[s,f,k]),c(function(){return h(M)&&g({inst:M}),s(function(){h(M)&&g({inst:M})})},[s]),r(f),f}function h(s){var k=s.getSnapshot;s=s.value;try{var f=k();return!a(s,f)}catch{return!0}}function p(s,k){return k()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:d;return yx.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:u,yx}var z_;function u2e(){return z_||(z_=1,lx.exports=p2e()),lx.exports}var k2e=u2e();function f2e(){return k2e.useSyncExternalStore(M2e,()=>!0,()=>!1)}function M2e(){return()=>{}}var Qx="Avatar",[m2e,Tce]=je(Qx),[v2e,WL]=m2e(Qx),XL=y.forwardRef((o,e)=>{const{__scopeAvatar:a,...n}=o,[c,i]=y.useState("idle");return l.jsx(v2e,{scope:a,imageLoadingStatus:c,onImageLoadingStatusChange:i,children:l.jsx(Z.span,{...n,ref:e})})});XL.displayName=Qx;var KL="AvatarImage",YL=y.forwardRef((o,e)=>{const{__scopeAvatar:a,src:n,onLoadingStatusChange:c=()=>{},...i}=o,r=WL(KL,a),d=g2e(n,i),h=Ie(p=>{c(p),r.onImageLoadingStatusChange(p)});return Ue(()=>{d!=="idle"&&h(d)},[d,h]),d==="loaded"?l.jsx(Z.img,{...i,ref:e,src:n}):null});YL.displayName=KL;var QL="AvatarFallback",JL=y.forwardRef((o,e)=>{const{__scopeAvatar:a,delayMs:n,...c}=o,i=WL(QL,a),[r,d]=y.useState(n===void 0);return y.useEffect(()=>{if(n!==void 0){const h=window.setTimeout(()=>d(!0),n);return()=>window.clearTimeout(h)}},[n]),r&&i.imageLoadingStatus!=="loaded"?l.jsx(Z.span,{...c,ref:e}):null});JL.displayName=QL;function R_(o,e){return o?e?(o.src!==e&&(o.src=e),o.complete&&o.naturalWidth>0?"loaded":"loading"):"error":"idle"}function g2e(o,{referrerPolicy:e,crossOrigin:a}){const n=f2e(),c=y.useRef(null),i=n?(c.current||(c.current=new window.Image),c.current):null,[r,d]=y.useState(()=>R_(i,o));return Ue(()=>{d(R_(i,o))},[i,o]),Ue(()=>{const h=s=>()=>{d(s)};if(!i)return;const p=h("loaded"),u=h("error");return i.addEventListener("load",p),i.addEventListener("error",u),e&&(i.referrerPolicy=e),typeof a=="string"&&(i.crossOrigin=a),()=>{i.removeEventListener("load",p),i.removeEventListener("error",u)}},[i,a,e]),r}var x2e=XL,_2e=YL,w2e=JL;function L2e(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("relative flex size-8 shrink-0 overflow-hidden rounded-full",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(x2e,{"data-slot":"avatar",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function C2e(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("aspect-square size-full",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(_2e,{"data-slot":"avatar-image",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function b2e(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("bg-muted flex size-full items-center justify-center rounded-full",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx(w2e,{"data-slot":"avatar-fallback",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function I2e(){return N2e}function N2e(o){const e=o.trim().split(" ");if(e.length===0)return"";if(e.length===1)return e[0].charAt(0).toUpperCase();const a=e[0].charAt(0),n=e[e.length-1].charAt(0);return`${a}${n}`.toUpperCase()}function eC(o){const e=$.c(22),{user:a,showEmail:n}=o,c=n===void 0?!1:n,i=I2e();let r;e[0]!==a.avatar||e[1]!==a.name?(r=l.jsx(C2e,{src:a.avatar,alt:a.name}),e[0]=a.avatar,e[1]=a.name,e[2]=r):r=e[2];let d;e[3]!==i||e[4]!==a.name?(d=i(a.name),e[3]=i,e[4]=a.name,e[5]=d):d=e[5];let h;e[6]!==d?(h=l.jsx(b2e,{className:"rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white",children:d}),e[6]=d,e[7]=h):h=e[7];let p;e[8]!==r||e[9]!==h?(p=l.jsxs(L2e,{className:"h-8 w-8 overflow-hidden rounded-full",children:[r,h]}),e[8]=r,e[9]=h,e[10]=p):p=e[10];let u;e[11]!==a.name?(u=l.jsx("span",{className:"truncate font-medium",children:a.name}),e[11]=a.name,e[12]=u):u=e[12];let s;e[13]!==c||e[14]!==a.email?(s=c&&l.jsx("span",{className:"truncate text-xs text-muted-foreground",children:a.email}),e[13]=c,e[14]=a.email,e[15]=s):s=e[15];let k;e[16]!==u||e[17]!==s?(k=l.jsxs("div",{className:"grid flex-1 text-left text-sm leading-tight",children:[u,s]}),e[16]=u,e[17]=s,e[18]=k):k=e[18];let f;return e[19]!==p||e[20]!==k?(f=l.jsxs(l.Fragment,{children:[p,k]}),e[19]=p,e[20]=k,e[21]=f):f=e[21],f}function S2e(){return $2e}function $2e(){document.body.style.removeProperty("pointer-events")}const ae=o=>({url:ae.url(o),method:"get"});ae.definition={methods:["get","head"],url:"/settings/profile"};ae.url=o=>ae.definition.url+Cx(o);ae.get=o=>({url:ae.url(o),method:"get"});ae.head=o=>({url:ae.url(o),method:"head"});const Jx=o=>({action:ae.url(o),method:"get"});Jx.get=o=>({action:ae.url(o),method:"get"});Jx.head=o=>({action:ae.url({[o?.mergeQuery?"mergeQuery":"query"]:{_method:"HEAD",...o?.query??o?.mergeQuery??{}}}),method:"get"});ae.form=Jx;const me=o=>({url:me.url(o),method:"patch"});me.definition={methods:["patch"],url:"/settings/profile"};me.url=o=>me.definition.url+Cx(o);me.patch=o=>({url:me.url(o),method:"patch"});const tC=o=>({action:me.url({[o?.mergeQuery?"mergeQuery":"query"]:{_method:"PATCH",...o?.query??o?.mergeQuery??{}}}),method:"post"});tC.patch=o=>({action:me.url({[o?.mergeQuery?"mergeQuery":"query"]:{_method:"PATCH",...o?.query??o?.mergeQuery??{}}}),method:"post"});me.form=tC;const ve=o=>({url:ve.url(o),method:"delete"});ve.definition={methods:["delete"],url:"/settings/profile"};ve.url=o=>ve.definition.url+Cx(o);ve.delete=o=>({url:ve.url(o),method:"delete"});const oC=o=>({action:ve.url({[o?.mergeQuery?"mergeQuery":"query"]:{_method:"DELETE",...o?.query??o?.mergeQuery??{}}}),method:"post"});oC.delete=o=>({action:ve.url({[o?.mergeQuery?"mergeQuery":"query"]:{_method:"DELETE",...o?.query??o?.mergeQuery??{}}}),method:"post"});ve.form=oC;Object.assign(ae,ae),Object.assign(me,me),Object.assign(ve,ve);function A2e(o){const e=$.c(18),{user:a}=o,n=S2e();let c;e[0]!==n?(c=()=>{n(),fC.flushAll()},e[0]=n,e[1]=c):c=e[1];const i=c;let r;e[2]!==a?(r=l.jsx(y2e,{className:"p-0 font-normal",children:l.jsx("div",{className:"flex items-center gap-2 px-1 py-1.5 text-left text-sm",children:l.jsx(eC,{user:a,showEmail:!0})})}),e[2]=a,e[3]=r):r=e[3];let d;e[4]===Symbol.for("react.memo_cache_sentinel")?(d=l.jsx(j_,{}),e[4]=d):d=e[4];let h;e[5]===Symbol.for("react.memo_cache_sentinel")?(h=ae(),e[5]=h):h=e[5];let p;e[6]===Symbol.for("react.memo_cache_sentinel")?(p=l.jsx(Ka,{className:"mr-2"}),e[6]=p):p=e[6];let u;e[7]!==n?(u=l.jsx(l2e,{children:l.jsx(P_,{asChild:!0,children:l.jsxs(Ta,{className:"block w-full",href:h,as:"button",prefetch:!0,onClick:n,children:[p,"Settings"]})})}),e[7]=n,e[8]=u):u=e[8];let s;e[9]===Symbol.for("react.memo_cache_sentinel")?(s=l.jsx(j_,{}),e[9]=s):s=e[9];let k;e[10]===Symbol.for("react.memo_cache_sentinel")?(k=wC(),e[10]=k):k=e[10];let f;e[11]===Symbol.for("react.memo_cache_sentinel")?(f=l.jsx(Xa,{className:"mr-2"}),e[11]=f):f=e[11];let m;e[12]!==i?(m=l.jsx(P_,{asChild:!0,children:l.jsxs(Ta,{className:"block w-full",href:k,as:"button",onClick:i,"data-test":"logout-button",children:[f,"Log out"]})}),e[12]=i,e[13]=m):m=e[13];let M;return e[14]!==m||e[15]!==r||e[16]!==u?(M=l.jsxs(l.Fragment,{children:[r,d,u,s,m]}),e[14]=m,e[15]=r,e[16]=u,e[17]=M):M=e[17],M}function q2e(){const o=$.c(13),{auth:e}=jg().props,{state:a}=Gg(),n=$w();let c;o[0]!==e.user?(c=l.jsx(eC,{user:e.user}),o[0]=e.user,o[1]=c):c=o[1];let i;o[2]===Symbol.for("react.memo_cache_sentinel")?(i=l.jsx(Za,{className:"ml-auto size-4"}),o[2]=i):i=o[2];let r;o[3]!==c?(r=l.jsx(s2e,{asChild:!0,children:l.jsxs(on,{size:"lg",className:"group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent","data-test":"sidebar-menu-button",children:[c,i]})}),o[3]=c,o[4]=r):r=o[4];const d=n?"bottom":a==="collapsed"?"left":"bottom";let h;o[5]!==e.user?(h=l.jsx(A2e,{user:e.user}),o[5]=e.user,o[6]=h):h=o[6];let p;o[7]!==d||o[8]!==h?(p=l.jsx(h2e,{className:"w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",align:"end",side:d,children:h}),o[7]=d,o[8]=h,o[9]=p):p=o[9];let u;return o[10]!==r||o[11]!==p?(u=l.jsx(Zg,{children:l.jsx(tn,{children:l.jsxs(d2e,{children:[r,p]})})}),o[10]=r,o[11]=p,o[12]=u):u=o[12],u}function P2e(){const o=$.c(2);let e;o[0]===Symbol.for("react.memo_cache_sentinel")?(e=l.jsx("div",{className:"flex aspect-square size-8 items-center justify-center rounded-md bg-white",children:l.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",alt:"Honda Logo",className:"size-6"})}),o[0]=e):e=o[0];let a;return o[1]===Symbol.for("react.memo_cache_sentinel")?(a=l.jsxs(l.Fragment,{children:[e,l.jsx("div",{className:"ml-1 grid flex-1 text-left text-sm",children:l.jsx("span",{className:"mb-0.5 truncate leading-tight font-semibold text-sidebar-foreground",children:"PT. Menara Agung"})})]}),o[1]=a):a=o[1],a}const j2e=[];function H2e(){const o=$.c(9),{menus:e}=jg().props;let a;o[0]!==e?(a=e?.map(z2e)||[],o[0]=e,o[1]=a):a=o[1];const n=a;let c;o[2]===Symbol.for("react.memo_cache_sentinel")?(c=LC(),o[2]=c):c=o[2];let i;o[3]===Symbol.for("react.memo_cache_sentinel")?(i=l.jsx(nae,{children:l.jsx(Zg,{children:l.jsx(tn,{children:l.jsx(on,{size:"lg",asChild:!0,children:l.jsx(Ta,{href:c,prefetch:!0,children:l.jsx(P2e,{})})})})})}),o[3]=i):i=o[3];let r;o[4]!==n?(r=l.jsx(iae,{children:l.jsx(Cae,{items:n})}),o[4]=n,o[5]=r):r=o[5];let d;o[6]===Symbol.for("react.memo_cache_sentinel")?(d=l.jsxs(cae,{children:[l.jsx(fae,{items:j2e,className:"mt-auto"}),l.jsx(q2e,{})]}),o[6]=d):d=o[6];let h;return o[7]!==r?(h=l.jsxs(tae,{collapsible:"icon",variant:"inset",children:[i,r,d]}),o[7]=r,o[8]=h):h=o[8],h}function z2e(o){const e=Sw[o.ikon]||Va;return{title:o.nama_menu,href:o.url||"#",icon:e,items:o.children?.map(R2e)}}function R2e(o){const e=Sw[o.ikon]||Va;return{title:o.nama_menu,href:o.url||"#",icon:e}}function D2e(o){const e=$.c(4);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];let n;return e[2]!==a?(n=l.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",...a}),e[2]=a,e[3]=n):n=e[3],n}function V2e(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("ol",{"data-slot":"breadcrumb-list",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function T2e(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("inline-flex items-center gap-1.5",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("li",{"data-slot":"breadcrumb-item",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function F2e(o){const e=$.c(10);let a,n,c;e[0]!==o?({asChild:a,className:n,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);const i=a?Hg:"a";let r;e[4]!==n?(r=E("hover:text-foreground transition-colors",n),e[4]=n,e[5]=r):r=e[5];let d;return e[6]!==i||e[7]!==c||e[8]!==r?(d=l.jsx(i,{"data-slot":"breadcrumb-link",className:r,...c}),e[6]=i,e[7]=c,e[8]=r,e[9]=d):d=e[9],d}function B2e(o){const e=$.c(8);let a,n;e[0]!==o?({className:a,...n}=o,e[0]=o,e[1]=a,e[2]=n):(a=e[1],n=e[2]);let c;e[3]!==a?(c=E("text-foreground font-normal",a),e[3]=a,e[4]=c):c=e[4];let i;return e[5]!==n||e[6]!==c?(i=l.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:c,...n}),e[5]=n,e[6]=c,e[7]=i):i=e[7],i}function E2e(o){const e=$.c(12);let a,n,c;e[0]!==o?({children:a,className:n,...c}=o,e[0]=o,e[1]=a,e[2]=n,e[3]=c):(a=e[1],n=e[2],c=e[3]);let i;e[4]!==n?(i=E("[&>svg]:size-3.5",n),e[4]=n,e[5]=i):i=e[5];let r;e[6]!==a?(r=a??l.jsx(Da,{}),e[6]=a,e[7]=r):r=e[7];let d;return e[8]!==c||e[9]!==i||e[10]!==r?(d=l.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:i,...c,children:r}),e[8]=c,e[9]=i,e[10]=r,e[11]=d):d=e[11],d}function O2e(o){const e=$.c(4),{breadcrumbs:a}=o;let n;e[0]!==a?(n=a.length>0&&l.jsx(D2e,{children:l.jsx(V2e,{children:a.map((i,r)=>{const d=r===a.length-1;return l.jsxs(y.Fragment,{children:[l.jsx(T2e,{children:d?l.jsx(B2e,{children:i.title}):l.jsx(F2e,{asChild:!0,children:l.jsx(Ta,{href:i.href,children:i.title})})}),!d&&l.jsx(E2e,{})]},r)})})}),e[0]=a,e[1]=n):n=e[1];let c;return e[2]!==n?(c=l.jsx(l.Fragment,{children:n}),e[2]=n,e[3]=c):c=e[3],c}function U2e(o){const e=$.c(5),{breadcrumbs:a}=o;let n;e[0]!==a?(n=a===void 0?[]:a,e[0]=a,e[1]=n):n=e[1];const c=n;let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=l.jsx(oae,{className:"-ml-1"}),e[2]=i):i=e[2];let r;return e[3]!==c?(r=l.jsx("header",{className:"flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4",children:l.jsxs("div",{className:"flex items-center gap-2",children:[i,l.jsx(O2e,{breadcrumbs:c})]})}),e[3]=c,e[4]=r):r=e[4],r}var G2e=(o,e,a,n,c,i,r,d)=>{let h=document.documentElement,p=["light","dark"];function u(f){(Array.isArray(o)?o:[o]).forEach(m=>{let M=m==="class",g=M&&i?c.map(v=>i[v]||v):c;M?(h.classList.remove(...g),h.classList.add(i&&i[f]?i[f]:f)):h.setAttribute(m,f)}),s(f)}function s(f){d&&p.includes(f)&&(h.style.colorScheme=f)}function k(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(n)u(n);else try{let f=localStorage.getItem(e)||a,m=r&&f==="system"?k():f;u(m)}catch{}},Z2e=y.createContext(void 0),W2e={setTheme:o=>{},themes:[]},X2e=()=>{var o;return(o=y.useContext(Z2e))!=null?o:W2e};y.memo(({forcedTheme:o,storageKey:e,attribute:a,enableSystem:n,enableColorScheme:c,defaultTheme:i,value:r,themes:d,nonce:h,scriptProps:p})=>{let u=JSON.stringify([a,e,i,o,d,r,n,c]).slice(1,-1);return y.createElement("script",{...p,suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(${G2e.toString()})(${u})`}})});function K2e(o){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e.appendChild(a),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o))}const Y2e=o=>{switch(o){case"success":return ece;case"info":return oce;case"warning":return tce;case"error":return ace;default:return null}},Q2e=Array(12).fill(0),J2e=({visible:o,className:e})=>b.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":o},b.createElement("div",{className:"sonner-spinner"},Q2e.map((a,n)=>b.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),ece=b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},b.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),tce=b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},b.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),oce=b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},b.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),ace=b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},b.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),nce=b.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},b.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),cce=()=>{const[o,e]=b.useState(document.hidden);return b.useEffect(()=>{const a=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",a),()=>window.removeEventListener("visibilitychange",a)},[]),o};let Lx=1;class ice{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const a=this.subscribers.indexOf(e);this.subscribers.splice(a,1)}),this.publish=e=>{this.subscribers.forEach(a=>a(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var a;const{message:n,...c}=e,i=typeof e?.id=="number"||((a=e.id)==null?void 0:a.length)>0?e.id:Lx++,r=this.toasts.find(h=>h.id===i),d=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(i)&&this.dismissedToasts.delete(i),r?this.toasts=this.toasts.map(h=>h.id===i?(this.publish({...h,...e,id:i,title:n}),{...h,...e,id:i,dismissible:d,title:n}):h):this.addToast({title:n,...c,dismissible:d,id:i}),i},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(a=>a({id:e,dismiss:!0})))):this.toasts.forEach(a=>{this.subscribers.forEach(n=>n({id:a.id,dismiss:!0}))}),e),this.message=(e,a)=>this.create({...a,message:e}),this.error=(e,a)=>this.create({...a,message:e,type:"error"}),this.success=(e,a)=>this.create({...a,type:"success",message:e}),this.info=(e,a)=>this.create({...a,type:"info",message:e}),this.warning=(e,a)=>this.create({...a,type:"warning",message:e}),this.loading=(e,a)=>this.create({...a,type:"loading",message:e}),this.promise=(e,a)=>{if(!a)return;let n;a.loading!==void 0&&(n=this.create({...a,promise:e,type:"loading",message:a.loading,description:typeof a.description!="function"?a.description:void 0}));const c=Promise.resolve(e instanceof Function?e():e);let i=n!==void 0,r;const d=c.then(async p=>{if(r=["resolve",p],b.isValidElement(p))i=!1,this.create({id:n,type:"default",message:p});else if(dce(p)&&!p.ok){i=!1;const s=typeof a.error=="function"?await a.error(`HTTP error! status: ${p.status}`):a.error,k=typeof a.description=="function"?await a.description(`HTTP error! status: ${p.status}`):a.description,m=typeof s=="object"&&!b.isValidElement(s)?s:{message:s};this.create({id:n,type:"error",description:k,...m})}else if(p instanceof Error){i=!1;const s=typeof a.error=="function"?await a.error(p):a.error,k=typeof a.description=="function"?await a.description(p):a.description,m=typeof s=="object"&&!b.isValidElement(s)?s:{message:s};this.create({id:n,type:"error",description:k,...m})}else if(a.success!==void 0){i=!1;const s=typeof a.success=="function"?await a.success(p):a.success,k=typeof a.description=="function"?await a.description(p):a.description,m=typeof s=="object"&&!b.isValidElement(s)?s:{message:s};this.create({id:n,type:"success",description:k,...m})}}).catch(async p=>{if(r=["reject",p],a.error!==void 0){i=!1;const u=typeof a.error=="function"?await a.error(p):a.error,s=typeof a.description=="function"?await a.description(p):a.description,f=typeof u=="object"&&!b.isValidElement(u)?u:{message:u};this.create({id:n,type:"error",description:s,...f})}}).finally(()=>{i&&(this.dismiss(n),n=void 0),a.finally==null||a.finally.call(a)}),h=()=>new Promise((p,u)=>d.then(()=>r[0]==="reject"?u(r[1]):p(r[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:h}:Object.assign(n,{unwrap:h})},this.custom=(e,a)=>{const n=a?.id||Lx++;return this.create({jsx:e(n),id:n,...a}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const ce=new ice,rce=(o,e)=>{const a=e?.id||Lx++;return ce.addToast({title:o,...e,id:a}),a},dce=o=>o&&typeof o=="object"&&"ok"in o&&typeof o.ok=="boolean"&&"status"in o&&typeof o.status=="number",sce=rce,hce=()=>ce.toasts,lce=()=>ce.getActiveToasts(),Fce=Object.assign(sce,{success:ce.success,info:ce.info,warning:ce.warning,error:ce.error,custom:ce.custom,message:ce.message,promise:ce.promise,dismiss:ce.dismiss,loading:ce.loading},{getHistory:hce,getToasts:lce});K2e("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function xn(o){return o.label!==void 0}const yce=3,pce="24px",uce="16px",D_=4e3,kce=356,fce=14,Mce=45,mce=200;function xe(...o){return o.filter(Boolean).join(" ")}function vce(o){const[e,a]=o.split("-"),n=[];return e&&n.push(e),a&&n.push(a),n}const gce=o=>{var e,a,n,c,i,r,d,h,p;const{invert:u,toast:s,unstyled:k,interacting:f,setHeights:m,visibleToasts:M,heights:g,index:v,toasts:x,expanded:_,removeToast:w,defaultRichColors:L,closeButton:I,style:C,cancelButtonStyle:S,actionButtonStyle:j,className:P="",descriptionClassName:V="",duration:R,position:z,gap:B,expandByDefault:O,classNames:A,icons:T,closeButtonAriaLabel:q="Close toast"}=o,[N,G]=b.useState(null),[J,le]=b.useState(null),[F,W]=b.useState(!1),[X,Y]=b.useState(!1),[K,U]=b.useState(!1),[He,Ia]=b.useState(!1),[Na,ze]=b.useState(!1),[Sa,Qg]=b.useState(0),[aC,e_]=b.useState(0),Ua=b.useRef(s.duration||R||D_),t_=b.useRef(null),Ae=b.useRef(null),nC=v===0,cC=v+1<=M,ie=s.type,$a=s.dismissible!==!1,iC=s.className||"",rC=s.descriptionClassName||"",pn=b.useMemo(()=>g.findIndex(D=>D.toastId===s.id)||0,[g,s.id]),dC=b.useMemo(()=>{var D;return(D=s.closeButton)!=null?D:I},[s.closeButton,I]),o_=b.useMemo(()=>s.duration||R||D_,[s.duration,R]),Jg=b.useRef(0),Aa=b.useRef(0),a_=b.useRef(0),qa=b.useRef(null),[sC,hC]=z.split("-"),n_=b.useMemo(()=>g.reduce((D,ee,oe)=>oe>=pn?D:D+ee.height,0),[g,pn]),c_=cce(),lC=s.invert||u,ex=ie==="loading";Aa.current=b.useMemo(()=>pn*B+n_,[pn,n_]),b.useEffect(()=>{Ua.current=o_},[o_]),b.useEffect(()=>{W(!0)},[]),b.useEffect(()=>{const D=Ae.current;if(D){const ee=D.getBoundingClientRect().height;return e_(ee),m(oe=>[{toastId:s.id,height:ee,position:s.position},...oe]),()=>m(oe=>oe.filter(re=>re.toastId!==s.id))}},[m,s.id]),b.useLayoutEffect(()=>{if(!F)return;const D=Ae.current,ee=D.style.height;D.style.height="auto";const oe=D.getBoundingClientRect().height;D.style.height=ee,e_(oe),m(re=>re.find(te=>te.toastId===s.id)?re.map(te=>te.toastId===s.id?{...te,height:oe}:te):[{toastId:s.id,height:oe,position:s.position},...re])},[F,s.title,s.description,m,s.id,s.jsx,s.action,s.cancel]);const Re=b.useCallback(()=>{Y(!0),Qg(Aa.current),m(D=>D.filter(ee=>ee.toastId!==s.id)),setTimeout(()=>{w(s)},mce)},[s,w,m,Aa]);b.useEffect(()=>{if(s.promise&&ie==="loading"||s.duration===1/0||s.type==="loading")return;let D;return _||f||c_?(()=>{if(a_.current<Jg.current){const re=new Date().getTime()-Jg.current;Ua.current=Ua.current-re}a_.current=new Date().getTime()})():(()=>{Ua.current!==1/0&&(Jg.current=new Date().getTime(),D=setTimeout(()=>{s.onAutoClose==null||s.onAutoClose.call(s,s),Re()},Ua.current))})(),()=>clearTimeout(D)},[_,f,s,ie,c_,Re]),b.useEffect(()=>{s.delete&&(Re(),s.onDismiss==null||s.onDismiss.call(s,s))},[Re,s.delete]);function yC(){var D;if(T?.loading){var ee;return b.createElement("div",{className:xe(A?.loader,s==null||(ee=s.classNames)==null?void 0:ee.loader,"sonner-loader"),"data-visible":ie==="loading"},T.loading)}return b.createElement(J2e,{className:xe(A?.loader,s==null||(D=s.classNames)==null?void 0:D.loader),visible:ie==="loading"})}const pC=s.icon||T?.[ie]||Y2e(ie);var i_,r_;return b.createElement("li",{tabIndex:0,ref:Ae,className:xe(P,iC,A?.toast,s==null||(e=s.classNames)==null?void 0:e.toast,A?.default,A?.[ie],s==null||(a=s.classNames)==null?void 0:a[ie]),"data-sonner-toast":"","data-rich-colors":(i_=s.richColors)!=null?i_:L,"data-styled":!(s.jsx||s.unstyled||k),"data-mounted":F,"data-promise":!!s.promise,"data-swiped":Na,"data-removed":X,"data-visible":cC,"data-y-position":sC,"data-x-position":hC,"data-index":v,"data-front":nC,"data-swiping":K,"data-dismissible":$a,"data-type":ie,"data-invert":lC,"data-swipe-out":He,"data-swipe-direction":J,"data-expanded":!!(_||O&&F),"data-testid":s.testId,style:{"--index":v,"--toasts-before":v,"--z-index":x.length-v,"--offset":`${X?Sa:Aa.current}px`,"--initial-height":O?"auto":`${aC}px`,...C,...s.style},onDragEnd:()=>{U(!1),G(null),qa.current=null},onPointerDown:D=>{D.button!==2&&(ex||!$a||(t_.current=new Date,Qg(Aa.current),D.target.setPointerCapture(D.pointerId),D.target.tagName!=="BUTTON"&&(U(!0),qa.current={x:D.clientX,y:D.clientY})))},onPointerUp:()=>{var D,ee,oe;if(He||!$a)return;qa.current=null;const re=Number(((D=Ae.current)==null?void 0:D.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),un=Number(((ee=Ae.current)==null?void 0:ee.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),te=new Date().getTime()-((oe=t_.current)==null?void 0:oe.getTime()),ye=N==="x"?re:un,kn=Math.abs(ye)/te;if(Math.abs(ye)>=Mce||kn>.11){Qg(Aa.current),s.onDismiss==null||s.onDismiss.call(s,s),le(N==="x"?re>0?"right":"left":un>0?"down":"up"),Re(),Ia(!0);return}else{var ue,ke;(ue=Ae.current)==null||ue.style.setProperty("--swipe-amount-x","0px"),(ke=Ae.current)==null||ke.style.setProperty("--swipe-amount-y","0px")}ze(!1),U(!1),G(null)},onPointerMove:D=>{var ee,oe,re;if(!qa.current||!$a||((ee=window.getSelection())==null?void 0:ee.toString().length)>0)return;const te=D.clientY-qa.current.y,ye=D.clientX-qa.current.x;var kn;const ue=(kn=o.swipeDirections)!=null?kn:vce(z);!N&&(Math.abs(ye)>1||Math.abs(te)>1)&&G(Math.abs(ye)>Math.abs(te)?"x":"y");let ke={x:0,y:0};const d_=We=>1/(1.5+Math.abs(We)/20);if(N==="y"){if(ue.includes("top")||ue.includes("bottom"))if(ue.includes("top")&&te<0||ue.includes("bottom")&&te>0)ke.y=te;else{const We=te*d_(te);ke.y=Math.abs(We)<Math.abs(te)?We:te}}else if(N==="x"&&(ue.includes("left")||ue.includes("right")))if(ue.includes("left")&&ye<0||ue.includes("right")&&ye>0)ke.x=ye;else{const We=ye*d_(ye);ke.x=Math.abs(We)<Math.abs(ye)?We:ye}(Math.abs(ke.x)>0||Math.abs(ke.y)>0)&&ze(!0),(oe=Ae.current)==null||oe.style.setProperty("--swipe-amount-x",`${ke.x}px`),(re=Ae.current)==null||re.style.setProperty("--swipe-amount-y",`${ke.y}px`)}},dC&&!s.jsx&&ie!=="loading"?b.createElement("button",{"aria-label":q,"data-disabled":ex,"data-close-button":!0,onClick:ex||!$a?()=>{}:()=>{Re(),s.onDismiss==null||s.onDismiss.call(s,s)},className:xe(A?.closeButton,s==null||(n=s.classNames)==null?void 0:n.closeButton)},(r_=T?.close)!=null?r_:nce):null,(ie||s.icon||s.promise)&&s.icon!==null&&(T?.[ie]!==null||s.icon)?b.createElement("div",{"data-icon":"",className:xe(A?.icon,s==null||(c=s.classNames)==null?void 0:c.icon)},s.promise||s.type==="loading"&&!s.icon?s.icon||yC():null,s.type!=="loading"?pC:null):null,b.createElement("div",{"data-content":"",className:xe(A?.content,s==null||(i=s.classNames)==null?void 0:i.content)},b.createElement("div",{"data-title":"",className:xe(A?.title,s==null||(r=s.classNames)==null?void 0:r.title)},s.jsx?s.jsx:typeof s.title=="function"?s.title():s.title),s.description?b.createElement("div",{"data-description":"",className:xe(V,rC,A?.description,s==null||(d=s.classNames)==null?void 0:d.description)},typeof s.description=="function"?s.description():s.description):null),b.isValidElement(s.cancel)?s.cancel:s.cancel&&xn(s.cancel)?b.createElement("button",{"data-button":!0,"data-cancel":!0,style:s.cancelButtonStyle||S,onClick:D=>{xn(s.cancel)&&$a&&(s.cancel.onClick==null||s.cancel.onClick.call(s.cancel,D),Re())},className:xe(A?.cancelButton,s==null||(h=s.classNames)==null?void 0:h.cancelButton)},s.cancel.label):null,b.isValidElement(s.action)?s.action:s.action&&xn(s.action)?b.createElement("button",{"data-button":!0,"data-action":!0,style:s.actionButtonStyle||j,onClick:D=>{xn(s.action)&&(s.action.onClick==null||s.action.onClick.call(s.action,D),!D.defaultPrevented&&Re())},className:xe(A?.actionButton,s==null||(p=s.classNames)==null?void 0:p.actionButton)},s.action.label):null)};function V_(){if(typeof window>"u"||typeof document>"u")return"ltr";const o=document.documentElement.getAttribute("dir");return o==="auto"||!o?window.getComputedStyle(document.documentElement).direction:o}function xce(o,e){const a={};return[o,e].forEach((n,c)=>{const i=c===1,r=i?"--mobile-offset":"--offset",d=i?uce:pce;function h(p){["top","right","bottom","left"].forEach(u=>{a[`${r}-${u}`]=typeof p=="number"?`${p}px`:p})}typeof n=="number"||typeof n=="string"?h(n):typeof n=="object"?["top","right","bottom","left"].forEach(p=>{n[p]===void 0?a[`${r}-${p}`]=d:a[`${r}-${p}`]=typeof n[p]=="number"?`${n[p]}px`:n[p]}):h(d)}),a}const _ce=b.forwardRef(function(e,a){const{id:n,invert:c,position:i="bottom-right",hotkey:r=["altKey","KeyT"],expand:d,closeButton:h,className:p,offset:u,mobileOffset:s,theme:k="light",richColors:f,duration:m,style:M,visibleToasts:g=yce,toastOptions:v,dir:x=V_(),gap:_=fce,icons:w,containerAriaLabel:L="Notifications"}=e,[I,C]=b.useState([]),S=b.useMemo(()=>n?I.filter(F=>F.toasterId===n):I.filter(F=>!F.toasterId),[I,n]),j=b.useMemo(()=>Array.from(new Set([i].concat(S.filter(F=>F.position).map(F=>F.position)))),[S,i]),[P,V]=b.useState([]),[R,z]=b.useState(!1),[B,O]=b.useState(!1),[A,T]=b.useState(k!=="system"?k:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),q=b.useRef(null),N=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),G=b.useRef(null),J=b.useRef(!1),le=b.useCallback(F=>{C(W=>{var X;return(X=W.find(Y=>Y.id===F.id))!=null&&X.delete||ce.dismiss(F.id),W.filter(({id:Y})=>Y!==F.id)})},[]);return b.useEffect(()=>ce.subscribe(F=>{if(F.dismiss){requestAnimationFrame(()=>{C(W=>W.map(X=>X.id===F.id?{...X,delete:!0}:X))});return}setTimeout(()=>{F_.flushSync(()=>{C(W=>{const X=W.findIndex(Y=>Y.id===F.id);return X!==-1?[...W.slice(0,X),{...W[X],...F},...W.slice(X+1)]:[F,...W]})})})}),[I]),b.useEffect(()=>{if(k!=="system"){T(k);return}if(k==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?T("dark"):T("light")),typeof window>"u")return;const F=window.matchMedia("(prefers-color-scheme: dark)");try{F.addEventListener("change",({matches:W})=>{T(W?"dark":"light")})}catch{F.addListener(({matches:X})=>{try{T(X?"dark":"light")}catch(Y){console.error(Y)}})}},[k]),b.useEffect(()=>{I.length<=1&&z(!1)},[I]),b.useEffect(()=>{const F=W=>{var X;if(r.every(U=>W[U]||W.code===U)){var K;z(!0),(K=q.current)==null||K.focus()}W.code==="Escape"&&(document.activeElement===q.current||(X=q.current)!=null&&X.contains(document.activeElement))&&z(!1)};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[r]),b.useEffect(()=>{if(q.current)return()=>{G.current&&(G.current.focus({preventScroll:!0}),G.current=null,J.current=!1)}},[q.current]),b.createElement("section",{ref:a,"aria-label":`${L} ${N}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},j.map((F,W)=>{var X;const[Y,K]=F.split("-");return S.length?b.createElement("ol",{key:F,dir:x==="auto"?V_():x,tabIndex:-1,ref:q,className:p,"data-sonner-toaster":!0,"data-sonner-theme":A,"data-y-position":Y,"data-x-position":K,style:{"--front-toast-height":`${((X=P[0])==null?void 0:X.height)||0}px`,"--width":`${kce}px`,"--gap":`${_}px`,...M,...xce(u,s)},onBlur:U=>{J.current&&!U.currentTarget.contains(U.relatedTarget)&&(J.current=!1,G.current&&(G.current.focus({preventScroll:!0}),G.current=null))},onFocus:U=>{U.target instanceof HTMLElement&&U.target.dataset.dismissible==="false"||J.current||(J.current=!0,G.current=U.relatedTarget)},onMouseEnter:()=>z(!0),onMouseMove:()=>z(!0),onMouseLeave:()=>{B||z(!1)},onDragEnd:()=>z(!1),onPointerDown:U=>{U.target instanceof HTMLElement&&U.target.dataset.dismissible==="false"||O(!0)},onPointerUp:()=>O(!1)},S.filter(U=>!U.position&&W===0||U.position===F).map((U,He)=>{var Ia,Na;return b.createElement(gce,{key:U.id,icons:w,index:He,toast:U,defaultRichColors:f,duration:(Ia=v?.duration)!=null?Ia:m,className:v?.className,descriptionClassName:v?.descriptionClassName,invert:c,visibleToasts:g,closeButton:(Na=v?.closeButton)!=null?Na:h,interacting:B,position:F,style:v?.style,unstyled:v?.unstyled,classNames:v?.classNames,cancelButtonStyle:v?.cancelButtonStyle,actionButtonStyle:v?.actionButtonStyle,closeButtonAriaLabel:v?.closeButtonAriaLabel,removeToast:le,toasts:S.filter(ze=>ze.position==U.position),heights:P.filter(ze=>ze.position==U.position),setHeights:V,expandByDefault:d,gap:_,expanded:R,swipeDirections:e.swipeDirections})})):null}))}),wce=o=>{const e=$.c(7);let a;e[0]!==o?({...a}=o,e[0]=o,e[1]=a):a=e[1];const{theme:n}=X2e(),i=n===void 0?"system":n;let r,d;e[2]===Symbol.for("react.memo_cache_sentinel")?(r={success:l.jsx(Te,{className:"size-4"}),info:l.jsx(Wa,{className:"size-4"}),warning:l.jsx(Ee,{className:"size-4"}),error:l.jsx(Fe,{className:"size-4"}),loading:l.jsx(Ve,{className:"size-4 animate-spin"})},d={"--normal-bg":"var(--popover)","--normal-text":"var(--popover-foreground)","--normal-border":"var(--border)","--border-radius":"var(--radius)"},e[2]=r,e[3]=d):(r=e[2],d=e[3]);let h;return e[4]!==a||e[5]!==i?(h=l.jsx(_ce,{theme:i,className:"toaster group",icons:r,style:d,...a}),e[4]=a,e[5]=i,e[6]=h):h=e[6],h};function Lce(o){const e=$.c(11),{children:a,breadcrumbs:n}=o;let c;e[0]!==n?(c=n===void 0?[]:n,e[0]=n,e[1]=c):c=e[1];const i=c;let r;e[2]===Symbol.for("react.memo_cache_sentinel")?(r=l.jsx(H2e,{}),e[2]=r):r=e[2];let d;e[3]!==i?(d=l.jsx(U2e,{breadcrumbs:i}),e[3]=i,e[4]=d):d=e[4];let h;e[5]!==a||e[6]!==d?(h=l.jsxs(pae,{variant:"sidebar",className:"overflow-x-hidden",children:[d,a]}),e[5]=a,e[6]=d,e[7]=h):h=e[7];let p;e[8]===Symbol.for("react.memo_cache_sentinel")?(p=l.jsx(wce,{}),e[8]=p):p=e[8];let u;return e[9]!==h?(u=l.jsxs(uae,{variant:"sidebar",children:[r,h,p]}),e[9]=h,e[10]=u):u=e[10],u}const Bce=({children:o,breadcrumbs:e,...a})=>l.jsx(Lce,{breadcrumbs:e,...a,children:o});export{Bce as A,G_ as B,V0 as C,loe as D,tl as E,zx as F,bx as G,zg as H,Mw as I,mw as J,z0 as K,bk as L,p3 as M,T0 as N,doe as O,B6 as P,M7 as R,xf as S,Pm as T,pI as V,Ya as X,Cg as Z,x8 as a,Da as b,p9 as c,l3 as d,ae as e,L1 as f,ol as g,Is as h,nf as i,Vf as j,Df as k,hoe as l,soe as m,ioe as n,roe as o,yoe as p,Tg as q,kw as r,Oe as s,Fce as t,E_ as u,B_ as v,fw as w,Fg as x,Ie as y,xw as z};
