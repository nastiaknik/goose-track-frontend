"use strict";(self.webpackChunkgoose_track_frontend=self.webpackChunkgoose_track_frontend||[]).push([[211],{7359:function(n,e,r){r.d(e,{E:function(){return M}});var i,t,a,o,s,p,d,c,l,x,m,u,h,g=r(7689),f=r(9439),b=r(2791),w=r(2506),v=r(8007),y=(0,v.Ry)().shape({username:(0,v.Z_)().max(16,"Username should not exceed 16 characters").required("Username is required"),email:(0,v.Z_)().email("Invalid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,{message:"Invalid email",excludeEmptyString:!0}).required("Email is required"),password:(0,v.Z_)().min(6,"Password is too short").required("Password is required")}),Z=(0,v.Ry)().shape({email:(0,v.Z_)().email("Invalid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,{message:"Invalid email",excludeEmptyString:!0}).required("Email is required"),password:(0,v.Z_)().min(6,"Password is too short").required("Password is required")}),k=r(9434),j=r(9532),P=r(9129),S=r(8820),z=r(168),_=r(6444),E=function(n,e,r){return e?n?"var(--error-text-color)":"var(--correct-text-color)":r},q=_.ZP.label(i||(i=(0,z.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin-top: 24px;\n\n  font-size: 12px;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    margin-top: 18px;\n  }\n\n  :nth-child(2) {\n    margin-top: 32px;\n\n    @media screen and (min-width: 768px) {\n      margin-top: 40px;\n    }\n  }\n"])),(function(n){var e=n.error,r=n.isSubmited;return E(e,r,"var(--primary-text-color)")})),C=_.ZP.span(t||(t=(0,z.Z)(["\n  position: absolute;\n  top: 23px;\n  left: 0;\n\n  display: inline-block;\n  margin: 0;\n  width: 100%;\n  height: 46px;\n\n  @media screen and (min-width: 768px) {\n    top: 25px;\n    height: 54px;\n  }\n\n  > svg {\n    position: absolute;\n    bottom: 18px;\n    right: 8px;\n    width: 24px;\n    height: 24px;\n  }\n\n  > button {\n    position: absolute;\n    bottom: 0;\n    right: 24px;\n\n    width: 46px;\n    height: 46px;\n    background-color: transparent;\n    color: var(--auth-placeholder-color);\n\n    @media screen and (min-width: 768px) {\n      width: 54px;\n      height: 54px;\n    }\n\n    > svg {\n      width: 22px;\n      height: 22px;\n    }\n  }\n"]))),I=_.ZP.input(a||(a=(0,z.Z)(["\n  width: 100%;\n  margin-top: 8px;\n  padding: 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(220, 227, 229, 0.6);\n  background: var(--primary-bg-color);\n  outline: 2px solid transparent;\n  outline-color: ",';\n  transition: outline var(--animation);\n\n  color: var(--primary-text-color);\n  font-size: 14px;\n  line-height: 18px;\n\n  ::placeholder {\n    color: var(--auth-placeholder-color);\n  }\n\n  :hover,\n  :focus {\n    outline: 2px solid var(--primary-text-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 18px;\n    font-size: 16px;\n  }\n\n  &[type="password"] {\n    ::placeholder {\n      font-family: var(--primary-font);\n      letter-spacing: 0;\n    }\n\n    :not(:placeholder-shown) {\n      font-family: Verdana, sans-serif;\n      letter-spacing: 1px;\n    }\n  }\n'])),(function(n){var e=n.error,r=n.isSubmited;return E(e,r,"transparent")})),L=_.ZP.p(o||(o=(0,z.Z)(["\n  margin-top: 8px;\n  margin-left: 14px;\n  font-size: 12px;\n  line-height: 1.16;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    margin-left: 18px;\n  }\n"])),(function(n){var e=n.error,r=n.isSubmited;return E(e,r,"var(--primary-text-color)")})),R=r(3329),T=function(n){var e=n.text,r=n.name,i=n.type,t=n.placeholder,a=n.isSubmited,o=n.formik,s=(n.children,(0,b.useState)(!1)),p=(0,f.Z)(s,2),d=p[0],c=p[1];return(0,R.jsxs)(q,{isSubmited:a,error:o.errors["".concat(r)],children:[e,(0,R.jsx)(I,{type:d?"text":i,name:r,placeholder:t,onChange:o.handleChange,value:o.values["".concat(r)],isSubmited:a,error:o.errors["".concat(r)]}),o.touched["".concat(r)]&&(0,R.jsx)(L,{isSubmited:a,error:o.errors["".concat(r)],children:o.errors["".concat(r)]?o.errors["".concat(r)]:"This is an CORRECT ".concat(r)}),(0,R.jsxs)(C,{children:[function(n){if(a)return n?(0,R.jsx)(S.sQg,{}):(0,R.jsx)(S.KP3,{})}(o.errors["".concat(r)]),"password"===r&&(0,R.jsx)("button",{type:"button",onClick:function(){c((function(n){return!n}))},children:d?(0,R.jsx)(P.Lr9,{}):(0,R.jsx)(P.Oe3,{})})]})]})},U=_.ZP.form(s||(s=(0,z.Z)(["\n  padding: 40px 24px;\n  border-radius: 8px;\n  background-color: var(--primary-bg-color);\n\n  font-family: var(--primary-font);\n  font-weight: 600;\n  text-align: left;\n\n  @media screen and (min-width: 768px) {\n    padding: 40px;\n  }\n"]))),V=_.ZP.h2(p||(p=(0,z.Z)(["\n  font-size: 18px;\n  line-height: 1;\n  color: var(--accent-text-color);\n  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04),\n    0px 47px 355px 0px rgba(0, 0, 0, 0.07);\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n  }\n"]))),A=_.ZP.button(d||(d=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 11px;\n\n  width: 100%;\n  margin-top: 32px;\n  padding: 14px;\n\n  border-radius: 16px;\n  background: var(--accent-bg-color);\n  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);\n\n  color: var(--light-text-color);\n  font-family: var(--primary-font);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.3;\n  letter-spacing: -0.36px;\n\n  > svg {\n    width: 18px;\n    height: 18px;\n    stroke-width: 3px;\n\n    @media screen and (min-width: 768px) {\n      width: 20px;\n      height: 20px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 48px;\n    padding: 16px;\n\n    font-size: 18px;\n  }\n"]))),D=function(){var n=(0,b.useState)(!1),e=(0,f.Z)(n,2),r=e[0],i=e[1],t=(0,k.I0)(),a=(0,w.TA)({initialValues:{username:"",email:"",password:""},validationSchema:y,onSubmit:function(n,e){var r=e.resetForm;t((0,j.z)(n)),r(),i(!1)}});return(0,R.jsxs)(U,{children:[(0,R.jsx)(V,{children:"Sign Up"}),(0,R.jsx)(T,{text:"Name",name:"username",type:"text",placeholder:"Enter your name",isSubmited:r,formik:a}),(0,R.jsx)(T,{text:"Email",name:"email",type:"email",placeholder:"Enter your email",isSubmited:r,formik:a}),(0,R.jsx)(T,{text:"Password",name:"password",type:"password",placeholder:"Enter your password",isSubmited:r,formik:a}),(0,R.jsxs)(A,{type:"submit",onClick:function(n){n.preventDefault(),i(!0),a.handleSubmit()},children:["Sign Up ",(0,R.jsx)(P.WtL,{})]})]})},F=(0,_.ZP)(U)(c||(c=(0,z.Z)([""]))),O=(0,_.ZP)(V)(l||(l=(0,z.Z)([""]))),W=(0,_.ZP)(A)(x||(x=(0,z.Z)([""]))),$=function(){var n=(0,b.useState)(!1),e=(0,f.Z)(n,2),r=e[0],i=e[1],t=(0,k.I0)(),a=(0,w.TA)({initialValues:{email:"",password:""},validationSchema:Z,onSubmit:function(n,e){var r=e.resetForm;t((0,j.x)(n)),r(),i(!1)}});return(0,R.jsxs)(F,{children:[(0,R.jsx)(O,{children:"Log In"}),(0,R.jsx)(T,{text:"Email",name:"email",type:"email",placeholder:"Enter your email",isSubmited:r,formik:a}),(0,R.jsx)(T,{text:"Password",name:"password",type:"password",placeholder:"Enter your password",isSubmited:r,formik:a}),(0,R.jsxs)(W,{type:"submit",onClick:function(n){n.preventDefault(),i(!0),a.handleSubmit()},children:["Log In ",(0,R.jsx)(P.WtL,{})]})]})},H=r(1087),K=r.p+"static/media/signup_goose-min.8c7d3c61c10b035eb722.png",N=r.p+"static/media/signup_goose@2x-min.9986f4552a2a1a55386d.png",Q=r.p+"static/media/login_goose-min.64b5c5c30709d22b5000.png",Y=r.p+"static/media/login_goose@2x-min.9576bdd40502f89f5985.png",B=_.ZP.section(m||(m=(0,z.Z)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n\n  background-color: var(--auth-bg-color);\n\n  @media screen and (min-width: 1440px) {\n    background-image: ",";\n    background-size: ",";\n    background-position: ",";\n    background-repeat: no-repeat;\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: ",";\n    }\n  }\n"])),(function(n){return e=n.currentPage,"url(".concat("/register"===e?K:Q,")");var e}),(function(n){return"/register"===n.currentPage?"400px 416px":"368px 521px"}),(function(n){return"/register"===n.currentPage?"left 50px bottom 0":"right 60px bottom 19px"}),(function(n){return e=n.currentPage,"url(".concat("/register"===e?N:Y,")");var e})),G=_.ZP.div(u||(u=(0,z.Z)(["\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n\n  width: 100%;\n  padding: 0 20px;\n  text-align: center;\n\n  @media screen and (min-width: 375px) {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 335px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 480px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    width: 480px;\n  }\n"]))),J=(0,_.ZP)(H.rU)(h||(h=(0,z.Z)(["\n  display: inline-block;\n  margin-top: 18px;\n\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 1.16;\n  color: var(--accent-bg-color);\n  text-decoration-line: underline;\n  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),\n    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);\n\n  :hover,\n  :focus {\n    color: var(--hover-btn-bg-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 24px;\n\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),M=function(n){var e=n.linkPath,r=n.linktext,i=(n.children,(0,g.TH)());return(0,R.jsx)(B,{currentPage:i.pathname,children:(0,R.jsxs)(G,{children:["/register"===i.pathname?(0,R.jsx)(D,{}):(0,R.jsx)($,{}),(0,R.jsx)(J,{to:e,children:r})]})})}},480:function(n,e,r){r.r(e);var i=r(7359),t=r(3329);e.default=function(){return(0,t.jsx)(i.E,{linkPath:"/login",linktext:"Log In",children:"Register"})}}}]);
//# sourceMappingURL=211.2eb7407b.chunk.js.map