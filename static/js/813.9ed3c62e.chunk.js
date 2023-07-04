"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[813],{7813:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var r,o=t(9439),a=t(1951),i=t(2791),l=t(7689),c=t(9040),u=t(6753),d=t(1104),s=t(8030),f=t(8558),p=t(168),x=t(6444),h=["title","titleId"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}function v(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function b(n,e){var t=n.title,o=n.titleId,a=v(n,h);return i.createElement("svg",y({width:6,height:12,viewBox:"0 0 6 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},a),t?i.createElement("title",{id:o},t):null,r||(r=i.createElement("path",{d:"M0.75 10.5L5.25 6L0.75 1.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var g,m=i.forwardRef(b),j=(t.p,["title","titleId"]);function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z.apply(this,arguments)}function w(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function k(n,e){var t=n.title,r=n.titleId,o=w(n,j);return i.createElement("svg",Z({width:6,height:12,viewBox:"0 0 6 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},o),t?i.createElement("title",{id:r},t):null,g||(g=i.createElement("path",{d:"M5.25 10.5L0.75 6L5.25 1.5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var C,M,P,O,L,B,D,E,I,N,T,A,S,Y,F,_,z,H,R,W=i.forwardRef(k),q=(t.p,x.ZP.div(C||(C=(0,p.Z)(["\n  display: flex;\n  gap: 10px;\n  justify-content: space-between;\n  align-items: center;\n"])))),G=x.ZP.div(M||(M=(0,p.Z)(["\n  display: flex;\n"]))),J=x.ZP.button(P||(P=(0,p.Z)(["\n  width: 38px;\n  padding: 10px 10px;\n  background-color: ",";\n  stroke: black;\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"])),(function(n){return n.theme.variableColors.secondaryBackground})),K=(0,x.ZP)(J)(O||(O=(0,p.Z)(["\n  border-radius: 8px 0 0 8px;\n"]))),Q=(0,x.ZP)(J)(L||(L=(0,p.Z)(["\n  border-radius: 0 8px 8px 0;\n"]))),U=x.ZP.div(B||(B=(0,p.Z)(["\n  padding: 8px 12px;\n  background-color: ",";\n  border-radius: 8px;\n  min-width: 135px;\n"])),(function(n){return n.theme.variableColors.backgroundButton})),V=x.ZP.h1(D||(D=(0,p.Z)(['\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.12;\n  text-align: center;\n  text-transform: uppercase;\n  color: ',";\n"])),(function(n){return n.theme.variableColors.textButton})),X=(0,x.ZP)(m)(E||(E=(0,p.Z)(["\n  stroke: ",";\n"])),(function(n){return n.theme.variableColors.arrowColor})),$=(0,x.ZP)(m)(I||(I=(0,p.Z)(["\n  stroke: ",";\n"])),(function(n){return n.theme.variableColors.activeArrowColor})),nn=(0,x.ZP)(W)(N||(N=(0,p.Z)(["\n  stroke: ",";\n"])),(function(n){return n.theme.variableColors.arrowColor})),en=(0,x.ZP)(W)(T||(T=(0,p.Z)(["\n  stroke: ",";\n"])),(function(n){return n.theme.variableColors.activeArrowColor})),tn=t(3329),rn=function(n){var e=n.activePage,t=(0,i.useState)(""),r=(0,o.Z)(t,2),p=r[0],x=r[1],h=(0,l.s0)(),y=(0,f.Y)();return(0,tn.jsxs)(q,{children:["month"===e&&(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(U,{children:(0,tn.jsx)(V,{children:(0,a.default)(y,"MMM yyyy")})}),(0,tn.jsxs)(G,{children:[(0,tn.jsx)(K,{type:"button",onClick:function(){x("prev");var n=(0,s.default)(y,1);h("/calendar/month/".concat((0,a.default)(n,"yyyy-MM")))},children:"prev"===p?(0,tn.jsx)(en,{}):(0,tn.jsx)(nn,{})}),(0,tn.jsx)(Q,{type:"button",id:"2",onClick:function(){x("next");var n=(0,d.default)(y,1);h("/calendar/month/".concat((0,a.default)(n,"yyyy-MM")))},children:"next"===p?(0,tn.jsx)($,{}):(0,tn.jsx)(X,{})})]})]}),"day"===e&&(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsx)(U,{children:(0,tn.jsx)(V,{children:(0,a.default)(y,"d MMM yyyy")})}),(0,tn.jsxs)(G,{children:[(0,tn.jsx)(K,{type:"button",onClick:function(){x("prev");var n=(0,u.default)(y,1);h("/calendar/day/".concat((0,a.default)(n,"yyyy-MM-dd")))},children:"prev"===p?(0,tn.jsx)(en,{}):(0,tn.jsx)(nn,{})}),(0,tn.jsx)(Q,{type:"button",onClick:function(){x("next");var n=(0,c.default)(y,1);h("/calendar/day/".concat((0,a.default)(n,"yyyy-MM-dd")))},children:"next"===p?(0,tn.jsx)($,{}):(0,tn.jsx)(X,{})})]})]})]})},on=t(5375),an=t(1087),ln=x.ZP.div(A||(A=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n\n  @media screen and (min-width: 768px) {\n    justify-content: flex-start;\n  }\n"]))),cn=(0,x.ZP)(an.OL)(S||(S=(0,p.Z)(['\n  font-family: "InterMedium";\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-decoration: none;\n  padding: 8px 25px;\n  align-items: center;\n  border-radius: 0px 8px 8px 0px;\n\n  &:hover {\n    color: ',";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 18px;\n  }\n"])),(function(n){return n.theme.variableColors.hoverTextBtn})),un=(0,x.ZP)(cn)(Y||(Y=(0,p.Z)(["\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.variableColors.activeTextColorBtn}),(function(n){return n.theme.variableColors.notActiveCalendarLinkColor})),dn=(0,x.ZP)(cn)(F||(F=(0,p.Z)(["\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.variableColors.activeTextColorBtn}),(function(n){return n.theme.variableColors.activeCalendarLinkColor})),sn=(0,x.ZP)(cn)(_||(_=(0,p.Z)(["\n  color: ",";\n  background-color: ",";\n  padding: 8px 16px;\n  border-right: 1px solid rgba(62, 133, 243, 0.2);\n  border-radius: 8px 0px 0px 8px;\n"])),(function(n){return n.theme.variableColors.activeTextColorBtn}),(function(n){return n.theme.variableColors.notActiveCalendarLinkColor})),fn=(0,x.ZP)(cn)(z||(z=(0,p.Z)(["\n  color: ",";\n  background-color: ",";\n  padding: 8px 16px;\n  border-right: 1px solid rgba(62, 133, 243, 0.2);\n  border-radius: 8px 0px 0px 8px;\n"])),(function(n){return n.theme.variableColors.activeTextColorBtn}),(function(n){return n.theme.variableColors.activeCalendarLinkColor})),pn=function(n){var e=n.activePage,t=(0,f.Y)(),r=new Date,o=(0,a.default)(t,"yyyy-MM"),i=(0,a.default)(t,"yyyy-MM-dd"),l=(0,a.default)(r,"yyyy-MM-dd"),c=(0,on.default)(t,r);return(0,tn.jsxs)(ln,{children:["month"===e?(0,tn.jsx)(fn,{to:"/calendar/month/".concat(o),children:"Month"}):(0,tn.jsx)(sn,{to:"/calendar/month/".concat(o),children:"Month"}),"day"===e?(0,tn.jsx)(dn,{to:"/calendar/day/".concat(c?l:i),children:"Day"}):(0,tn.jsx)(un,{to:"/calendar/day/".concat(c?l:i),children:"Day"})]})},xn=x.ZP.div(H||(H=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  gap: 18px;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 32px;\n  }\n"]))),hn=function(){var n=(0,l.TH)(),e=function(e){var t;return e.map((function(e){return n.pathname.includes(e)&&(t=e),t})),t},t=["month","day"];return(0,tn.jsxs)(xn,{children:[(0,tn.jsx)(rn,{activePage:e(t)}),(0,tn.jsx)(pn,{activePage:e(t)})]})},yn=x.ZP.div(R||(R=(0,p.Z)(["\n  background-color: ",";\n"])),(function(n){return n.theme.variableColors.primaryBackground})),vn=function(){var n=(0,i.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],c=(0,l.s0)(),u=(0,f.Y)(),d=(0,l.TH)(),s=(0,a.default)(u,"yyyy-MM");(0,i.useEffect)((function(){"/calendar"!==d.pathname||c("/calendar/month/".concat(s))}),[s,c,d.pathname]);return(0,tn.jsxs)(yn,{children:[(0,tn.jsx)(hn,{isActivePage:t,doActiveMonth:function(){r(!0)},doActiveDate:function(){r(!1)}}),(0,tn.jsx)(i.Suspense,{fallback:null,children:(0,tn.jsx)(l.j3,{})})]})}},9040:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(9297),o=t(8527),a=t(4522);function i(n,e){(0,a.Z)(2,arguments);var t=(0,o.default)(n),i=(0,r.Z)(e);return isNaN(i)?new Date(NaN):i?(t.setDate(t.getDate()+i),t):t}},1104:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(9297),o=t(8527),a=t(4522);function i(n,e){(0,a.Z)(2,arguments);var t=(0,o.default)(n),i=(0,r.Z)(e);if(isNaN(i))return new Date(NaN);if(!i)return t;var l=t.getDate(),c=new Date(t.getTime());return c.setMonth(t.getMonth()+i+1,0),l>=c.getDate()?c:(t.setFullYear(c.getFullYear(),c.getMonth(),l),t)}},6753:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(9040),o=t(4522),a=t(9297);function i(n,e){(0,o.Z)(2,arguments);var t=(0,a.Z)(e);return(0,r.default)(n,-t)}},8030:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var r=t(9297),o=t(1104),a=t(4522);function i(n,e){(0,a.Z)(2,arguments);var t=(0,r.Z)(e);return(0,o.default)(n,-t)}}}]);
//# sourceMappingURL=813.9ed3c62e.chunk.js.map