(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65921],{6514:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var n=t(3959),o=t(32793),i=t(67294),c=(t(45697),t(86010)),s=t(27192),u=t(19970),l=t(71657),a=t(53620);function d(e){return(0,a.Z)("MuiDialogContent",e)}(0,t(76087).Z)("MuiDialogContent",["root","dividers"]);var v=t(4472),f=t(85893);const p=["className","dividers"],h=(0,u.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,t.dividers&&r.dividers]}})((({theme:e,ownerState:r})=>(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${v.Z.root} + &`]:{paddingTop:0}})));var Z=i.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:u=!1}=t,a=(0,n.Z)(t,p),v=(0,o.Z)({},t,{dividers:u}),Z=(e=>{const{classes:r,dividers:t}=e,n={root:["root",t&&"dividers"]};return(0,s.Z)(n,d,r)})(v);return(0,f.jsx)(h,(0,o.Z)({className:(0,c.Z)(Z.root,i),ownerState:v,ref:r},a))}))},4472:function(e,r,t){"use strict";t.d(r,{a:function(){return o}});var n=t(53620);function o(e){return(0,n.Z)("MuiDialogTitle",e)}const i=(0,t(76087).Z)("MuiDialogTitle",["root"]);r.Z=i},28457:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(67823),o=t(14096),i=t(41296),c=t(67294),s=t(70782),u=t(35944);var l=(0,i.Z)("div",{target:"erketzl2"})({name:"b2e6nh",styles:"min-width:1050px"}),a=(0,i.Z)("div",{target:"erketzl1"})({name:"17y6nc6",styles:"max-width:1050px;margin:0 auto"});function d(e){var r=e.children,t=e.backgroundColor;return(0,u.tZ)("div",{style:{backgroundColor:t},children:(0,u.tZ)(a,{children:r})})}var v=(0,i.Z)("img",{target:"erketzl0"})({name:"1d3w5wq",styles:"width:100%"});function f(){var e=(0,c.useState)(!1),r=e[0],t=e[1];return(0,u.BX)(l,{children:[(0,u.tZ)(v,{src:"https://res.kurly.com/images/event/delivery_search/pc/delivery_search1_compression.png",title:"\ub9c8\ucf13\uceec\ub9ac \uc0db\ubcc4 & \ud558\ub8e8\ubc30\uc1a1",alt:"\uc2f1\uc2f1\ud55c \ucc44\uc18c\xb7\uacfc\uc77c\ub3c4 \uc9c0\uae08 \uaf2d \ud544\uc694\ud55c \ubdf0\ud2f0\xb7\ub9ac\ube59 \uc6a9\ud488\ub3c4 \ub2e4\uc74c\ub0a0\uc774\uba74 \uc6b0\ub9ac\uc9d1 \ubb38 \uc55e\uc5d0! \ucd5c\uc801\uc758 \uc628\ub3c4\ub97c \uc720\uc9c0\ud558\ub294 \ud3ec\uc7a5\uacfc \ubc30\uc1a1\uc73c\ub85c \uc804\ud574\ub4dc\ub824\uc694."}),(0,u.tZ)(d,{backgroundColor:"#eae6e2",children:(0,u.tZ)(v,{src:"https://res.kurly.com/images/event/delivery_search/pc/delivery_search2_compression.png"})}),(0,u.tZ)(d,{backgroundColor:"white",children:(0,u.tZ)(v,{src:"https://res.kurly.com/images/event/delivery_search/pc/delivery_search8_compression.jpg"})}),(0,u.tZ)(d,{backgroundColor:"#d8d1df",children:(0,u.tZ)("button",{onClick:function(){return t(!0)},children:(0,u.tZ)(v,{src:"https://res.kurly.com/images/event/delivery_search/pc/delivery_search4_compression.png"})})}),(0,u.tZ)(d,{backgroundColor:"#e9e7f1",children:(0,u.tZ)(v,{src:"https://res.kurly.com/images/event/delivery_search/pc/delivery_search7_compression.jpg"})}),r&&(0,u.tZ)(s.Z,{isPC:!0,onClose:function(){return t(!1)}})]})}var p=t(8039);function h(){return(0,u.BX)(u.HY,{children:[(0,u.tZ)(n.Z,{}),(0,u.tZ)(p.Z,{children:(0,u.tZ)(f,{})}),(0,u.tZ)(o.Z,{})]})}},97631:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user-guide/delivery",function(){return t(28457)}])},29106:function(e,r,t){"use strict";t.d(r,{S:function(){return i}});var n=t(67294),o=[0];function i(e){var r,t,i=null!=(r=null==e?void 0:e.rootMargin)?r:"0px",c=null!=(t=null==e?void 0:e.threshold)?t:o,s=(0,n.useRef)(null),u=(0,n.useRef)(null),l=(0,n.useRef)(null),a=(0,n.useState)(),d=a[0],v=a[1],f=(0,n.useCallback)((function(){var e=l.current;null==e||e.disconnect(),l.current=null}),[]);(0,n.useEffect)((function(){return function(){f()}}),[f]);var p=(0,n.useCallback)((function(){var e=s.current;if(e){var r=u.current,t=new IntersectionObserver((function(e){var r=e[0];v(r)}),{root:r,rootMargin:i,threshold:c});t.observe(e),l.current=t}}),[i,c]),h=(0,n.useCallback)((function(){f(),p()}),[p,f]);return[(0,n.useCallback)((function(e){s.current=e,h()}),[h]),{entry:d,rootRef:(0,n.useCallback)((function(e){u.current=e,h()}),[h])}]}},71383:function(e,r,t){"use strict";function n(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}t.d(r,{Z:function(){return n}})}},function(e){e.O(0,[70316,94581,53045,70782,49774,92888,40179],(function(){return r=97631,e(e.s=r);var r}));var r=e.O();_N_E=r}]);