(this["webpackJsonptodo-list-app"]=this["webpackJsonptodo-list-app"]||[]).push([[0],{35:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(25),a=n.n(s),i=(n(35),n(51)),o=n(30),u=n(5),j=n(50),l=n(0),b=Object(c.createContext)(),d=function(e){var t=function(e,t){var n=Object(c.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),r=Object(u.a)(n,2),s=r[0],a=r[1];return[s,function(t){try{var n=t instanceof Function?t(s):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]}("tasks",[]),n=Object(u.a)(t,2),r=n[0],s=n[1];Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]);return Object(l.jsx)(b.Provider,{value:{todoLists:r,addTask:function(e,t){s([].concat(Object(o.a)(r),[{task:e,time:t,id:Object(j.a)()}]))},removeTask:function(e){console.log(e),s(r.filter((function(t){return t.id!==e})))}},children:e.children})},p=n(10),O=n.n(p),h=n(14),x=n(26),f=(n(38),x.a.initializeApp({apiKey:"AIzaSyDU9nFb-0lV3jZJ-1bj9DJzRJzhTFXhXYk",authDomain:"auth-todolist-d232b.firebaseapp.com",projectId:"auth-todolist-d232b",storageBucket:"auth-todolist-d232b.appspot.com",messagingSenderId:"540823903358",appId:"1:540823903358:web:b9ffe94055d75968e7cc2f"})),v=f.auth(),m=Object(c.createContext)();function g(){return Object(c.useContext)(m)}function y(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],s=n[1];Object(c.useEffect)((function(){return v.onAuthStateChanged((function(e){s(e)}))}),[]);var a={currentUser:r,signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},login:function(e,t){return v.signInWithEmailAndPassword(e,t)},logout:function(){v.signOut()},ResetPassword:function(e){return v.sendPasswordResetEmail(e)}};return Object(l.jsx)(m.Provider,{value:a,children:e.children})}var w=n(3),k=n(12);function S(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=g().signup,s=Object(c.useState)(""),a=Object(u.a)(s,2),i=(a[0],a[1]),o=Object(c.useState)(!1),j=Object(u.a)(o,2),b=j[0],d=j[1],p=Object(w.g)();function x(){return(x=Object(h.a)(O.a.mark((function c(s){return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),t.current.value===n.current.value){c.next=3;break}return c.abrupt("return",i("Passwords does not match"));case 3:return c.prev=3,i(""),d(!0),c.next=8,r(e.current.value,t.current.value);case 8:p.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),i("Failed to create an account");case 14:d(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"signup",children:[Object(l.jsx)("h2",{children:"Sign Up"}),Object(l.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",ref:e,required:!0}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",ref:t,required:!0}),Object(l.jsx)("label",{children:"Password Confirmation"}),Object(l.jsx)("input",{type:"password",ref:n,required:!0}),Object(l.jsx)("input",{type:"submit",disabled:b,value:"Sign Up"})]}),Object(l.jsx)("div",{className:"LoginContainer",children:Object(l.jsxs)("p",{children:["Already have an account? ",Object(l.jsx)(k.b,{to:"/login",style:{textDecoration:"none",color:"yellow"},children:"Login"})]})})]})}function C(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=g().login,r=Object(c.useState)(""),s=Object(u.a)(r,2),a=s[0],i=s[1],o=Object(c.useState)(!1),j=Object(u.a)(o,2),b=j[0],d=j[1],p=Object(w.g)();function x(){return(x=Object(h.a)(O.a.mark((function c(r){return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,i(""),d(!0),c.next=6,n(e.current.value,t.current.value);case 6:p.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),i("Failed to log in");case 12:d(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"signup",children:[Object(l.jsx)("h2",{children:"Log In"}),Object(l.jsxs)("form",{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",ref:e,required:!0}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",ref:t,required:!0}),a&&Object(l.jsx)("p",{children:a}),Object(l.jsx)("input",{type:"submit",disabled:b,value:"Login"})]}),Object(l.jsx)("div",{className:"forgotpassword",children:Object(l.jsx)(k.b,{to:"forgot-password",style:{textDecoration:"none",color:"yellow"},children:"Forgot Password?"})}),Object(l.jsx)("div",{className:"LoginContainer",children:Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)(k.b,{to:"/signup",style:{textDecoration:"none",color:"yellow"},children:"Signup"})]})})]})}var N=n(18),P=n(28),D=["component"];function L(e){var t=e.component,n=Object(P.a)(e,D),c=g().currentUser;return Object(l.jsx)(w.b,Object(N.a)(Object(N.a)({},n),{},{render:function(e){return c?Object(l.jsx)(t,Object(N.a)({},e)):Object(l.jsx)(w.a,{to:"/login"})}}))}var F=function(){var e=Object(c.useContext)(b).todoLists;return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h1",{children:"My Todo List"}),Object(l.jsxs)("p",{children:["Currently you have ",e.length," tasks to do"]})]})},R=function(){var e=Object(c.useContext)(b).addTask,t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],j=i[1],d=g().logout,p=Object(w.g)();function x(){return(x=Object(h.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:p.push("/login"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,o),s(""),j("")},children:[Object(l.jsx)("input",{type:"text",placeholder:"new task",value:r,onChange:function(e){return s(e.target.value)},required:!0}),Object(l.jsx)("input",{type:"time",value:o,onChange:function(e){return j(e.target.value)},required:!0}),Object(l.jsx)("input",{type:"submit",value:"Add task"})]}),Object(l.jsx)("div",{className:"btn",children:Object(l.jsx)("button",{onClick:function(){return x.apply(this,arguments)},children:"Logout"})})]})},I=function(e){var t=e.task,n=Object(c.useContext)(b).removeTask;return Object(l.jsxs)("li",{onClick:function(){return n(t.id)},children:[Object(l.jsx)("div",{className:"task",children:t.task}),Object(l.jsx)("div",{className:"time",children:t.time})]})},E=function(){var e=Object(c.useContext)(b).todoLists;return e.length?Object(l.jsx)("div",{className:"todo-list",children:Object(l.jsx)("ul",{children:e.map((function(e){return Object(l.jsx)(I,{task:e},e.id)}))})}):Object(l.jsxs)("div",{className:"emptyList",children:[Object(l.jsx)("h1",{children:"What do you have in mind for today ?"}),console.log(e)]})};function q(){return Object(l.jsxs)("div",{className:"todoapp",children:[Object(l.jsx)(F,{}),Object(l.jsx)(E,{}),Object(l.jsx)(R,{})]})}function A(){var e=Object(c.useRef)(),t=g().ResetPassword,n=Object(c.useState)(""),r=Object(u.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),j=o[0],b=o[1],d=Object(c.useState)(""),p=Object(u.a)(d,2),x=p[0],f=p[1];function v(){return(v=Object(h.a)(O.a.mark((function n(c){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,f(""),a(""),b(!0),n.next=7,t(e.current.value);case 7:f("Check your inbox to reset your password"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),a("Failed to rest password");case 13:b(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"signup",children:[Object(l.jsx)("h2",{children:"Reset Password"}),Object(l.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"email",ref:e,required:!0}),s&&Object(l.jsx)("p",{children:s}),x&&Object(l.jsx)("p",{children:x}),Object(l.jsx)("input",{type:"submit",disabled:j,value:"Reset Password"})]}),Object(l.jsx)("div",{className:"LoginContainer",children:Object(l.jsxs)("p",{children:["Don't have an account yet? ",Object(l.jsx)(k.b,{to:"/signup",style:{textDecoration:"none",color:"yellow"},children:"Signup"})]})})]})}var J=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(i.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(l.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(l.jsx)(k.a,{basename:"/todo-list-react-app",children:Object(l.jsx)(y,{children:Object(l.jsx)(d,{children:Object(l.jsxs)(w.d,{children:[Object(l.jsx)(L,{exact:!0,path:"/",component:q}),Object(l.jsx)(w.b,{path:"/signup",component:S}),Object(l.jsx)(w.b,{path:"/login",component:C}),Object(l.jsx)(w.b,{path:"/forgot-password",component:A})]})})})})})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(47);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(J,{})}),document.getElementById("root")),T()}},[[48,1,2]]]);
//# sourceMappingURL=main.11c398af.chunk.js.map