"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76778],{91206:function(n,t,e){e.d(t,{Z:function(){return H}});var r=e(50029),i=e(41296),a=e(87794),o=e.n(a),c=e(67294),u=e(96486),s=e(59359),l=e(32192),f=e(91544),d=e(74414),p=e(69392),v=e(52820),h=e(35944),m=(0,i.Z)("div",{target:"e27hikn1"})("width:",f.Ro?"1050px":"100%",";margin:0 auto 10px;height:",f.Ro?"200px":"37.5vw",";>div>span{height:100%;}");function b(){return(0,h.tZ)(m,{children:(0,h.tZ)(d.Z,{width:1050})})}var y=(0,i.Z)(l.E.div,{target:"e27hikn0"})("padding-top:",f.Ro?0:"44px",";");function g(){return(0,h.tZ)(y,{initial:"initial",animate:"animate",exit:"exit",variants:p.Rm,children:(0,h.tZ)(v.Z,{count:10,children:(0,h.tZ)(b,{})})})}var w=e(41664),E=e.n(w),Z=e(10122),O=e(35916),k=e(79294),x=(0,i.Z)(l.E.li,{target:"e1ht95b00"})("position:relative;width:100%;height:",f.Ro?"200px":"37.5vw",";margin-bottom:10px;background-color:",Z.Z.bg,";"),B=function(n){var t=n.children,e=n.site,r=n.bannerUrl,i=n.giftIds,a=n.index,o=n.onClickBanner;return r?(0,h.tZ)(x,{initial:"initial",whileInView:"animate",viewport:{once:!0},variants:p.Rm,children:(0,h.tZ)(E(),{href:(0,O.w)({link:r,site:e}),passHref:!0,children:(0,h.tZ)("a",{onClick:function(){return o(r,i,a)},href:(0,O.w)({link:r,site:e}),children:t})})}):(0,h.tZ)(x,{initial:"initial",whileInView:"animate",viewport:{once:!0},variants:p.Rm,children:t})};function T(n){var t=n.site,e=n.eventList,r=n.index,i=n.countEventList,a=n.onClickBanner,o=n.onFocusBannerPosition,u=e.link,s=e.mobileLink,l=e.giftIds,d=e.image,p=e.specialPricePcUrl,v=e.mobileImage,m=e.specialPriceMobileUrl,b=e.title,y=f.Ro?u:s,g=f.Ro?p||d:m||v;return(0,c.useEffect)((function(){o&&r===i-1&&o()}),[i,r,o]),(0,h.tZ)(B,{site:t,bannerUrl:y,giftIds:l,index:r,onClickBanner:a,children:(0,h.tZ)(k.Z,{src:g,alt:b,layout:"fill",objectFit:"cover"})})}var P=(0,i.Z)("ul",{target:"en1w21w0"})("width:",f.Ro?"1050px":"100%",";margin:0 auto;");function j(n){var t=n.site,e=n.eventList,r=n.onClickBanner,i=n.onFocusBannerPosition;return(0,h.tZ)(P,{children:e.map((function(n,a){return(0,h.tZ)(T,{index:a,site:t,eventList:n,countEventList:e.length,onClickBanner:r,onFocusBannerPosition:i},n.id)}))})}var R=e(94115),A=e(99717),C=e(23246),_=e(59499),U=e(36492),I=e(5072),N=e(80433);function S(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}var F=(0,e(59062).q$)(1),L={MARKET:"fetchEventBenefit",BEAUTY_BENEFIT:"fetchBeautyBargain",BEAUTY_EVENT:"fetchBeautyEvent"},Y=function(n){var t=n.eventType;return"BEAUTY_BENEFIT"===t?(0,N.co)():"BEAUTY_EVENT"===t?(0,N.GU)():(0,N.cl)()},M=function(n){var t=n.eventType,e=(0,I.useAppSelector)((function(n){return n.auth.hasSession}));return function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?S(Object(e),!0).forEach((function(t){(0,_.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},(0,U.a)(["eventBanner",L[t],"list"],(function(){return Y({eventType:t})}),{staleTime:F,refetchOnMount:!0,enabled:e}))},D=e(63126),V=e(54020),q=(0,i.Z)("div",{target:"e1isfhat0"})("width:",f.Ro?"1050px":"100%",";margin:0 auto 10px;padding:168px 0;font-size:16px;color:#b5b5b5;text-align:center;"),K={MARKET:"\ub4f1\ub85d\ub41c \ud2b9\uac00/\ud61c\ud0dd \uc774\ubca4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",BEAUTY_BENEFIT:"\ub4f1\ub85d\ub41c \ud2b9\uac00 \uc774\ubca4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",BEAUTY_EVENT:"\ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."},z=D.o0.eventBenefitPreviouslyClickedOption;function H(n){var t=n.mainSite,e=n.eventType,i=void 0===e?"MARKET":e,a=M({eventType:i}),l=a.data,f=a.isLoading,d=a.isError,p=a.refetch,v=(0,c.useCallback)((0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:p();case 1:case"end":return n.stop()}}),n)}))),[p]),m=(0,c.useCallback)((function(){if(!(0,u.isEmpty)(l)&&l){var n=(0,D.TA)(z);if(!(0,u.isNull)(n)){var t=l.some((function(t){return function(n,t){return n.image===t.image&&n.link===t.link}(t,n)}));!(0,u.isNull)((0,D.TA)(z))&&n.scroll>0&&t&&window.scrollTo(0,Number(n.scroll)),(0,D.VV)(z)}}}),[l]);return f?(0,h.tZ)(g,{}):(0,h.tZ)(V.Z,{onRefresh:v,marginTop:s.tq?C.p:0,children:d||(0,u.isEmpty)(l)||!l?(0,h.tZ)(q,{children:K[i]}):(0,h.tZ)(j,{site:t,eventList:l,onClickBanner:function(n,t,e){!(0,u.isEmpty)(l)&&l&&((0,D.Ww)(z,{image:l[e].image,link:l[e].link,scroll:window.scrollY}),R.P.logEvent(new A.bG({eventName:"BEAUTY_BENEFIT"===i?"select_benefit_list_banner":"select_brand_list_banner",url:n,contentId:t,position:e+1})))},onFocusBannerPosition:m})})}},94984:function(n,t,e){e.d(t,{Z:function(){return b}});var r=e(50029),i=e(87794),a=e.n(i),o=e(67294),c=e(22205),u=e(11163),s=e(13039),l=e(5072),f=e(94115),d=e(57227),p=e(35944);function v(n){var t=n.isMain,e=n.children,r=(0,l.useAppSelector)((function(n){return n.main})).site;return(0,o.useEffect)((function(){if(t){var n=(0,d.Ue)(r);f.P.bucketInstance().updateBrowseSiteName(n)}}),[t,r]),(0,p.tZ)(p.HY,{children:e})}var h=e(3313),m=e(18933);function b(n){var t=n.children,e=n.site,i=n.fallback,f=void 0===i?(0,p.tZ)(p.HY,{}):i,d=(0,c.I0)(),b=(0,l.useAppSelector)((function(n){return{site:n.main.site}})).site,y=(0,o.useState)(!1),g=y[0],w=y[1],E=(0,u.useRouter)(),Z=E.asPath,O=E.isReady,k=E.reload,x=E.query,B=Z.startsWith(h.S4.home.uri),T=(0,m.d)(x).site,P=(0,o.useMemo)((function(){return"BEAUTY"!==b&&"beauty"===T?"BEAUTY":e}),[b,T,e]);return(0,o.useEffect)((function(){!g&&O&&(d((0,s.nI)(b,P||b,B)),w(!0))}),[d,B,g,b,O,P]),(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("addressChanged"===t.data.source){n.next=2;break}return n.abrupt("return");case 2:k();case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return window.addEventListener("message",n),function(){return window.removeEventListener("message",n)}}),[k]),g?(0,p.tZ)(v,{isMain:B,children:t}):f}},52820:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(67294),i=e(96486),a=e(35944);function o(n){var t=n.count,e=n.children;return t<=0?null:(0,a.tZ)(r.Fragment,{children:(0,i.range)(0,t).map((function(n){return(0,a.tZ)(r.Fragment,{children:e},n)}))})}},23246:function(n,t,e){e.d(t,{p:function(){return r}});var r=44},70637:function(n,t,e){e.d(t,{Rm:function(){return O},Ss:function(){return x},Zb:function(){return B},f:function(){return k}});var r,i,a=e(71383),o=e(59499),c=e(70917),u=e(10122);function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){(0,o.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var f={duration:.6,x:70},d={duration:.6,x:70},p=[.6,-.1,.01,.99],v={opacity:0,transition:{duration:d.duration,ease:p}},h={opacity:1,transition:{duration:f.duration,ease:p,staggerChildren:.1}},m={initial:l({scale:1.1},v),animate:l({scale:1},h)},b={exit:l({scale:.9},v)},y={initial:l({scale:.9},v),animate:l({scale:1},h)},g={exit:l({scale:1.1},v)},w={exit:l({x:-d.x},v)},E={exit:{x:-d.x}},Z={initial:{x:f.x,color:u.Z.kurlyPurple},animate:{x:0,color:u.Z.kurlyWhite}},O={initial:v,animate:h,exit:v},k=(l(l({},m),b),l(l({},m),w),l(l({},y),g),l(l({},y),w),l(l({},Z),E),l(l({},Z),b),(0,c.F4)(r||(r=(0,a.Z)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),{hide:{opacity:0,height:0,transition:{when:"afterChildren",duration:.3}},view:{opacity:1,height:"auto",transition:{duration:.3}}}),x={hide:{opacity:0,transition:{when:"afterChildren",duration:.2}},view:{opacity:1,transition:{duration:.2}}},B=(0,c.F4)(i||(i=(0,a.Z)(["\n  0% {\n    transform: translate3d(var(--left-ini), 0, 0);\n  }\n  100% {\n    transform: translate3d(var(--left-end), 110vh, 0);\n  }\n"])))},69392:function(n,t,e){e.d(t,{Rm:function(){return r.Rm}});var r=e(70637);e(72936)},18933:function(n,t,e){e.d(t,{d:function(){return r}});var r=function(n){return Object.fromEntries(Object.keys(n).map((function(t){var e=n[t];return"undefined"===typeof e||e instanceof Array&&0===e.length?[t,""]:e instanceof Array?[t,e[0]]:[t,e]})))}},35916:function(n,t,e){e.d(t,{w:function(){return u}});var r=e(90116),i=e(96486),a=e(23629),o=function(n){return n.map((function(n){return n.link}))},c=function(n,t){return t.some((function(t){return(0,i.eq)(t,n)}))},u=function(n){var t=n.link,e=n.site,i=void 0===e?"market":e;if(!t)return t;var u=t.trim(),s=t.toLowerCase(),l=function(n){var t=/^http[s]?:\/\/([\S])/i.test(n),e=["/main","/main/beauty"].concat((0,r.Z)(o(a.dh.MARKET)),(0,r.Z)(o(a.dh.BEAUTY)));if(!t)return!!c(n,e);var i=new URL(n);return c(i.pathname,e)}(t);if(!u||s.includes("site=market")||s.includes("site=beauty")||u.includes("kurly://")||l)return u;if("beauty"===i.toLowerCase()){var f=t.includes("?")?"&":"?";return"".concat(u).concat(f,"site=beauty")}return t}},59062:function(n,t,e){e.d(t,{_K:function(){return r},q$:function(){return i}});var r=function(n){return 1e3*n},i=function(n){return n*r(60)}},71383:function(n,t,e){function r(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}e.d(t,{Z:function(){return r}})}}]);