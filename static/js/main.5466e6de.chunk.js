(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{41:function(n,e,t){n.exports=t(53)},53:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(22),o=t.n(c),i=t(7),u=t(19),l=t(8),s=t(21),d=t(20),f=t(35),p=function(n,e){localStorage.setItem("tasks",JSON.stringify(n)),localStorage.setItem("hideDone",JSON.stringify(e))},m=Object(d.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem("tasks"))||[],hideDone:JSON.parse(localStorage.getItem("hideDone"))||!1,isExampleTaskLoading:!1,isExampleTaskError:!1},reducers:{addTask:function(n,e){var t=n.tasks,a=e.payload;t.push(a)},removeTask:function(n,e){var t=n.tasks,a=e.payload,r=t.findIndex((function(n){return n.id===a}));t.splice(r,1)},toggleTaskDone:function(n,e){var t=n.tasks,a=e.payload,r=t.findIndex((function(n){return n.id===a}));t[r].done=!t[r].done},toggleHideDone:function(n){n.hideDone=!n.hideDone},setEachDone:function(n){var e,t=n.tasks,a=Object(f.a)(t);try{for(a.s();!(e=a.n()).done;){e.value.done=!0}}catch(r){a.e(r)}finally{a.f()}},fetchExampleTasksLoading:function(n){n.isExampleTaskLoading=!0},fetchExampleTasksSuccess:function(n,e){var t=e.payload;n.isExampleTaskLoading=!1,n.tasks.push(t)},fetchExampleTasksError:function(n){n.isExampleTaskLoading=!1,n.isExampleTaskError=!0},setOutOfExamples:function(n){n.isExampleTaskLoading=!1,n.outOfExamples=!0},saveDataToLocal:function(n){p(n.tasks,n.hideDone)},changeTaskDetail:function(n,e){var t=n.tasks,a=e.payload,r=t.findIndex((function(n){return n.id===a.id}));t[r].detail=a.detailContent},changeTaskContent:function(n,e){var t=n.tasks,a=e.payload,r=t.findIndex((function(n){return n.id===a.id}));t[r].content=a.taskContent}}}),x=m.actions,b=x.addTask,h=x.removeTask,g=x.toggleTaskDone,v=x.toggleHideDone,j=x.setEachDone,E=x.fetchExampleTasksLoading,k=x.fetchExampleTasksSuccess,O=x.fetchExampleTasksError,w=x.setOutOfExamples,z=(x.saveDataToLocal,x.changeTaskDetail),y=x.changeTaskContent,T=function(n){return n.tasks},C=function(n){return T(n).tasks},D=function(n){return T(n).hideDone},S=function(n){return T(n).isExampleTaskLoading},L=function(n){return T(n).isExampleTaskError},N=function(n){return T(n).outOfExamples},I=function(n){return C(n).every((function(n){return n.done}))},K=function(n){return C(n).every((function(n){return!1===n.done}))},U=function(n){return C(n).length>0},J=m.reducer,R=t(3),M=t(4);function P(){var n=Object(R.a)(["\n    padding: 10px 20px;\n    margin: 5px;\n    background-color: teal;\n    border: none;\n    color: white;\n    font-size: 16px;\n    transition: .3s;\n    align-self: flex-start;\n    \n    &:hover {\n    cursor: pointer;\n    color: #ddd;\n    transform: scale(1.05)\n    }\n\n    &:active {\n    color: black;\n    outline: none;\n    }\n    &:disabled {\n        display: none;\n    }\n\n    @media (max-width: 768px) {\n        width: 100%;\n        padding: 10px;\n        font-size: 14px;\n    }\n"]);return P=function(){return n},n}function F(){var n=Object(R.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 15px;\n"]);return F=function(){return n},n}var B=M.c.form(F()),H=M.c.button(P()),W=function(){return(new Date).toLocaleDateString()};function Z(){var n=Object(R.a)(["\n  flex-grow: 1;\n  margin: 5px;\n  padding: 5px 5px 5px 10px;\n\n  @media (max-width: 330px) {\n    &::placeholder {\n      font-size: 14px;\n    }\n  }\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return Z=function(){return n},n}var Y=M.c.input(Z()),$=function(){var n=Object(a.useState)(""),e=Object(s.a)(n,2),t=e[0],c=e[1],o=Object(a.useRef)(null),u=Object(i.b)(),l=function(){o.current.focus()};return r.a.createElement(B,{onSubmit:function(n){n.preventDefault();var e=t.trim();""!==e&&(u(b({content:e,done:!1,date:W(),detail:"",id:Object(d.c)()})),c(""),l())}},r.a.createElement(Y,{autoFocus:!0,type:"text",placeholder:"Co jest do zrobienia?",ref:o,value:t,onChange:function(n){c(n.target.value)}}),r.a.createElement(H,null,"Dodaj zadanie"))};function q(){var n=Object(R.a)(["\n        color: hsl(180, 66%, 20%);\n        text-decoration: none;\n        font-size: 18px;\n        padding: 10px 10px 5px 10px;\n        transition: .3s ease;\n    "]);return q=function(){return n},n}function A(){var n=Object(R.a)(["\n\n    &."," {\n        border-bottom: solid 2px hsl(180, 66%, 20%);\n    }\n    color: black;\n    text-decoration: none;\n    \n    ","\n\n    &:hover {\n        filter: brightness(1.5)\n    }\n    @media (max-width: 768px) {\n        font-size: 16px;\n    }\n"]);return A=function(){return n},n}function G(){var n=Object(R.a)(["\n    margin: 10px;\n"]);return G=function(){return n},n}function Q(){var n=Object(R.a)(["\n    background-color: white;\n    width: 100%;\n    height: 8vh;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n"]);return Q=function(){return n},n}var V=M.c.div(Q()),X=M.c.li(G()),_=Object(M.c)(u.b).attrs((function(){return{activeClassName:"active"}}))(A(),"active",(function(n){return!n.button&&Object(M.b)(q())})),nn=function(n){var e=Object(l.h)();return new URLSearchParams(e.search).get(n)};function en(){var n=Object(R.a)(["\n        text-decoration: line-through;\n        font-style: italic;\n    "]);return en=function(){return n},n}function tn(){var n=Object(R.a)(["\n    text-align: justify;\n    padding: 5px 20px;\n    flex-grow: 1;\n    line-break: anywhere;\n    font-style: normal;\n\n    @media (max-width: 768px) {\n        padding: 10px;\n    }\n\n    ","\n"]);return tn=function(){return n},n}function an(){var n=Object(R.a)(["\n        background-color: rgb(233, 199, 1);\n        margin-right: 5px;\n\n        @media (max-width: 400px) {\n            font-size: 12px;\n        }\n    "]);return an=function(){return n},n}function rn(){var n=Object(R.a)(["\n        background-color: rgb(204, 5, 5);\n\n        @media (max-width: 400px) {\n            font-size: 12px;\n        }\n    "]);return rn=function(){return n},n}function cn(){var n=Object(R.a)(["\n        background-color: rgb(5, 104, 10);\n\n    "]);return cn=function(){return n},n}function on(){var n=Object(R.a)(["\n    flex-shrink: 0;\n    width: 35px;\n    align-self: center;\n    height: 35px;\n    padding: 10px;\n    display: flex;\n    font-size: 14px;\n    align-items: center;\n    justify-content: center;\n    border: none;\n    outline: none;\n    transition: .3s;\n\n    @media (max-width: 768px) {\n        width: 25px;\n        height: 25px;\n        font-size: 10px;\n    }\n\n    &:focus {\n    outline: solid black 1px;\n    }\n\n    &:hover {\n        cursor: pointer;\n        filter: brightness(1.2)\n    }\n\n    ","\n\n    ","\n    ","\n"]);return on=function(){return n},n}function un(){var n=Object(R.a)(["\n        display: none;\n    "]);return un=function(){return n},n}function ln(){var n=Object(R.a)(["\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px 10px;\n    margin: 10px;\n    border-bottom: 1px solid #ccc;\n\n    ","\n"]);return ln=function(){return n},n}function sn(){var n=Object(R.a)(["\n    padding: 15px;\n    margin: 0;\n    list-style: none;\n\n    @media (max-width: 768px) {\n        padding: 5px;\n    }\n"]);return sn=function(){return n},n}var dn=M.c.ul(sn()),fn=M.c.ul(ln(),(function(n){return n.hidden&&Object(M.b)(un())})),pn=M.c.button(on(),(function(n){return n.check&&Object(M.b)(cn())}),(function(n){return n.remove&&Object(M.b)(rn())}),(function(n){return n.edit&&Object(M.b)(an())})),mn=M.c.span(tn(),(function(n){return n.done&&Object(M.b)(en())})),xn=function(){var n=Object(i.b)(),e=nn("szukaj"),t=Object(i.c)((function(n){return function(n,e){return e&&""!==e.trim()?C(n).filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):C(n)}(n,e)})),a=Object(i.c)(D);return r.a.createElement(dn,null,t.map((function(e){return r.a.createElement(fn,{key:e.id,hidden:e.done&&a},r.a.createElement(pn,{check:!0,onClick:function(){return n(g(e.id))}},e.done?r.a.createElement("i",{className:"fas fa-check"}):""),r.a.createElement(mn,{done:e.done},r.a.createElement(_,{to:"/zadania/".concat(e.id)},e.content)),r.a.createElement(_,{button:!0,to:"/zadania/".concat(e.id)},r.a.createElement(pn,{edit:!0},r.a.createElement("i",{class:"fas fa-pencil-alt"}))),r.a.createElement(pn,{remove:!0,onClick:function(){return n(h(e.id))}},r.a.createElement("i",{className:"fas fa-trash-alt"})))})))};function bn(){var n=Object(R.a)(["\n  flex-grow: 1;\n  padding: 0px;\n  margin: 0 10px;\n  border: none;\n  background-color: transparent;\n  color: hsl(180, 66%, 20%);\n  font-size: 18px;\n  transition: color 0.2s, transform 0.2s;\n\n  &:hover {\n    color: hsl(180, 66%, 40%);\n    cursor: pointer;\n  }\n\n  &:active {\n    transform: scale(0.9);\n    outline: none;\n  }\n\n  &:disabled {\n    color: hsl(0, 0%, 60%);\n    cursor: auto;\n  }\n\n  &:focus {\n    outline: none;\n    color: hsl(180, 66%, 40%);\n  }\n\n  @media (max-width: 768px) {\n    padding: 10px;\n  }\n\n  @media (max-width: 400px) {\n    font-size: 14px;\n    padding: 5px;\n    margin: 5px;\n  }\n"]);return bn=function(){return n},n}function hn(){var n=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);return hn=function(){return n},n}var gn=M.c.div(hn()),vn=M.c.button(bn()),jn=function(){var n=Object(i.c)(C),e=Object(i.c)(D),t=Object(i.c)(I),a=Object(i.c)(K),c=Object(i.b)();return 0===n.length?null:r.a.createElement(gn,null,r.a.createElement(vn,{disabled:a,onClick:function(){return c(v())}},!1===e?"Ukryj uko\u0144czone":"Poka\u017c wszystkie"),r.a.createElement(vn,{disabled:t,onClick:function(){return c(j())}},"Uko\u0144cz wszystkie"))};function En(){var n=Object(R.a)(["\n    background-color: white;\n    font-style: italic;\n    font-size: 16px;\n    text-align: center;\n    padding: 20px;\n\n    @media (max-width: 400px) {\n        font-size: 12px;\n        padding: 10px 0;\n    }\n"]);return En=function(){return n},n}function kn(){var n=Object(R.a)(["\n    margin: 0 0 3px;\n    padding: 15px 30px;\n    background-color: white;\n    flex-grow: 1;\n    display: flex;\n\n    @media (max-width: 768px) {\n        font-size: 18px;\n    }\n"]);return kn=function(){return n},n}function On(){var n=Object(R.a)(["\n    display: flex;\n    margin: 0 0 3px;\n    background-color: white;\n\n    @media (max-width: 768px) {\n        flex-direction: column;\n    }\n"]);return On=function(){return n},n}function wn(){var n=Object(R.a)(["\n    padding: 10px;\n    margin: 10px 0;\n"]);return wn=function(){return n},n}var zn=M.c.section(wn()),yn=M.c.div(On()),Tn=M.c.h2(kn()),Cn=M.c.div(En()),Dn=function(n){var e=n.title,t=n.body,a=n.extraContent;return r.a.createElement(zn,null,r.a.createElement(yn,null,r.a.createElement(Tn,null,e),a),r.a.createElement(Cn,null,t))};function Sn(){var n=Object(R.a)(["\n    padding: 0 10px;\n    margin: 0;\n    font-size: 40px;\n    @media (max-width: 768px) {\n        font-size: 28px;\n    }\n"]);return Sn=function(){return n},n}var Ln=M.c.h1(Sn()),Nn=function(n){var e=n.title;return r.a.createElement("header",null,r.a.createElement(Ln,null,e))};function In(){var n=Object(R.a)(["\n    padding: 5px;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 100%;\n    transform: translateY(-100%);\n    font-size: 12px;\n    text-align: center;\n"]);return In=function(){return n},n}var Kn=M.c.footer(In()),Un=function(n){var e=n.content;return r.a.createElement(Kn,null,e)};function Jn(){var n=Object(R.a)(["\n    position: relative;\n    width: 100%;\n    max-width: 1000px;\n    min-height: 100vh;\n    padding: 40px 20px;\n    margin: 0 auto;\n"]);return Jn=function(){return n},n}var Rn=M.c.div(Jn()),Mn=function(n){var e=n.children;return r.a.createElement(Rn,null,e)},Pn=function(){var n=Object(i.b)(),e=Object(i.c)(S),t=Object(i.c)(L),a=Object(i.c)(N);return r.a.createElement(gn,null,r.a.createElement(vn,{disabled:e||a,onClick:function(){return n(E())}},e?"\u0141adowanie...":a?"Nie ma wi\u0119cej zada\u0144 do pobrania\ud83d\ude1e":t?"Nie uda\u0142o si\u0119 pobra\u0107 zadania \ud83d\ude35":"Pobierz losowe zadanie"))};function Fn(){var n=Object(R.a)(["\n    display: flex;\n    padding: 0px 15px;\n"]);return Fn=function(){return n},n}var Bn=M.c.div(Fn()),Hn=function(){var n=nn("szukaj"),e=function(){var n=Object(l.g)(),e=Object(l.h)();return function(t){var a=t.key,r=t.value,c=new URLSearchParams(e.search);r?c.set(a,r):c.delete(a),n.push("".concat(e.pathname,"?").concat(c.toString()))}}();return r.a.createElement(Bn,null,r.a.createElement(Y,{placeholder:"Filtruj zadania",value:n,onChange:function(n){var t=n.target;e({key:"szukaj",value:""===t.value.trim()?void 0:t.value})}}))},Wn=function(){var n=Object(i.c)(U);return r.a.createElement(Mn,null,r.a.createElement(Nn,{title:"Lista zada\u0144"}),r.a.createElement(Dn,{title:"Dodaj nowe zadanie",body:r.a.createElement($,null),extraContent:r.a.createElement(Pn,null)}),n?r.a.createElement(Dn,{title:"Filtruj zadania",body:r.a.createElement(Hn,null)}):"",r.a.createElement(Dn,{title:"Lista zada\u0144",body:n?r.a.createElement(xn,null):"Nie masz na razie \u017cadnych zada\u0144.",extraContent:r.a.createElement(jn,null)}),r.a.createElement(Un,{content:"\xa9Krzysztof Kwieci\u0144ski 2020"}))},Zn=function(){return r.a.createElement(Mn,null,r.a.createElement(Nn,{title:"O autorze"}),r.a.createElement(Dn,{title:"Krzysztof Kwieci\u0144ski",body:"Strona w budowie \ud83d\udc77\u200d\u2642\ufe0f"}),r.a.createElement(Un,{content:"\xa9Krzysztof Kwieci\u0144ski 2020"}))},Yn=function(){return r.a.createElement(V,null,r.a.createElement(X,null,r.a.createElement(_,{to:"/zadania"}," Zadania ")),r.a.createElement(X,null,r.a.createElement(_,{to:"/autor"}," O autorze ")))};function $n(){var n=Object(R.a)(["\n    border: none;\n    transition: .3s ease;\n    background-color: transparent;\n\n    &:hover {\n        font-weight: bold;\n        cursor: pointer;\n    }\n    &:focus {\n        outline: none;\n    }\n"]);return $n=function(){return n},n}function qn(){var n=Object(R.a)(["\n    resize: none;\n    margin: 10px 0;\n    padding: 10px 5px;\n    background-color: white;\n    border: none;\n\n    &:focus {\n        outline: none;\n        background-color: #eee;\n    }\n"]);return qn=function(){return n},n}function An(){var n=Object(R.a)(["\n    width: 100%;\n    display: flex;\n    margin: 5px 0 15px;\n    flex-direction: column;\n"]);return An=function(){return n},n}function Gn(){var n=Object(R.a)(["\n    background-color: white;\n    padding: 20px;\n"]);return Gn=function(){return n},n}function Qn(){var n=Object(R.a)(["\n    margin-top: 10px;\n    font-weight: bold;\n    font-style: italic;\n    align-self: center;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(R.a)(["\n    font-size: 12px;\n    margin: 0 5px;\n    background-color: white;\n    color: #666;\n    border: none;\n    transition: .3s ease;\n\n    &:hover {\n        filter: brightness(1.2);\n        cursor: pointer;\n    }\n"]);return Vn=function(){return n},n}function Xn(){var n=Object(R.a)(["\n    flex-grow: 2;\n    padding: 5px;\n    font-size: 24px;\n    font-weight: bold;\n    border: none;\n    \n    &:focus {\n        outline: none;\n        background-color: #eee;\n    }\n    @media (max-width: 768px) {\n        font-size: 18px;\n    }\n"]);return Xn=function(){return n},n}function _n(){var n=Object(R.a)(["\n    flex-grow: 1;\n    display: flex;\n    margin-right: 5px;\n"]);return _n=function(){return n},n}function ne(){var n=Object(R.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 0 3px;\n    background-color: white;\n    padding: 20px;\n\n    @media (max-width: 768px) {\n        padding: 15px;\n    }\n"]);return ne=function(){return n},n}var ee=M.c.div(ne()),te=M.c.form(_n()),ae=M.c.input(Xn()),re=M.c.button(Vn()),ce=M.c.span(Qn()),oe=M.c.section(Gn()),ie=M.c.form(An()),ue=M.c.textarea(qn()),le=M.c.button($n()),se=function(){var n=Object(l.i)().id,e=Object(i.c)((function(e){return function(n,e){return C(n).find((function(n){return n.id===e}))}(e,n)}));void 0===e&&(window.location=window.location.origin);var t=e.content,c=e.done,o=e.date,u=e.detail,d=Object(a.useState)(u),f=Object(s.a)(d,2),p=f[0],m=f[1],x=Object(a.useState)(t),b=Object(s.a)(x,2),h=b[0],v=b[1],j=Object(a.useRef)(null),E=Object(a.useRef)(null),k=Object(i.b)();Object(a.useEffect)((function(){k(z({id:n,detailContent:p})),k(y({id:n,taskContent:h}))}),[p,h]);var O=function(n){n.preventDefault();var e=h.trim();document.activeElement.blur(),v(e||"Zadanie bez nazwy")};return r.a.createElement(Mn,null,r.a.createElement(zn,null,r.a.createElement(ee,null,r.a.createElement(te,{onSubmit:O},r.a.createElement(re,{type:"button",onClick:function(){return E.current.focus()}},r.a.createElement("i",{class:"fas fa-pencil-alt"})),r.a.createElement(ae,{value:h,type:"text",ref:E,onChange:function(n){v(n.target.value)}})),r.a.createElement(ce,null,"Dodano: ",o)),r.a.createElement(oe,null,r.a.createElement(ce,null,"Szczeg\xf3\u0142y zadania: "),r.a.createElement(re,{onClick:function(){return j.current.focus()}},r.a.createElement("i",{class:"fas fa-pencil-alt"})),r.a.createElement(ie,{onSubmit:O},r.a.createElement(ue,{ref:j,rows:6,placeholder:"Nie dodano szczeg\xf3\u0142\xf3w.",value:p,onChange:function(n){m(n.target.value)},type:"text"})),r.a.createElement(ce,null,"Uko\u0144czone:"," ",r.a.createElement(le,{onClick:function(){return k(g(n))}},c?"tak":"nie")," "))),r.a.createElement(Un,{content:"\xa9Krzysztof Kwieci\u0144ski 2020"}))},de=function(){return r.a.createElement(u.a,null,r.a.createElement(Yn,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/zadania/:id"},r.a.createElement(se,null)),r.a.createElement(l.b,{path:"/zadania"},r.a.createElement(Wn,null)),r.a.createElement(l.b,{path:"/autor"},r.a.createElement(Zn,null)),r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(l.a,{to:"/zadania"}))))};function fe(){var n=Object(R.a)(["\n    html {\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    } \n    body {\n        background-color: #eee;\n    }\n"]);return fe=function(){return n},n}var pe=Object(M.a)(fe());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=t(40),xe=t(12),be=t.n(xe),he=t(9),ge=t(39),ve=function(){var n=Object(ge.a)(be.a.mark((function n(){var e;return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/react-todoList/exampleTasks.json");case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.statusText);case 5:return n.next=7,e.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),je=t(31),Ee=function(n,e){var t=e.filter((function(e){return!n.some((function(n){return n.id===e.id}))}));return 0!==t.length?Object(je.a)(Object(je.a)({},function(n){return n[Math.floor(Math.random()*Math.floor(n.length))]}(t)),{},{date:W()}):null},ke=be.a.mark(ze),Oe=be.a.mark(ye),we=be.a.mark(Te);function ze(){var n,e,t;return be.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(he.b)(ve);case 3:return n=a.sent,a.next=6,Object(he.e)(C);case 6:return e=a.sent,a.next=9,Object(he.b)(Ee,e,n);case 9:return t=a.sent,a.next=12,Object(he.c)(500);case 12:if(t){a.next=17;break}return a.next=15,Object(he.d)(w());case 15:a.next=19;break;case 17:return a.next=19,Object(he.d)(k(t));case 19:a.next=25;break;case 21:return a.prev=21,a.t0=a.catch(0),a.next=25,Object(he.d)(O());case 25:case"end":return a.stop()}}),ke,null,[[0,21]])}function ye(){var n,e;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(he.e)(C);case 2:return n=t.sent,t.next=5,Object(he.e)(D);case 5:return e=t.sent,t.next=8,Object(he.b)(p,n,e);case 8:case"end":return t.stop()}}),Oe)}function Te(){return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(he.f)(E.type,ze);case 2:return n.next=4,Object(he.f)("*",ye);case 4:case"end":return n.stop()}}),we)}var Ce=be.a.mark(De);function De(){return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(he.a)([Te()]);case 2:case"end":return n.stop()}}),Ce)}var Se=Object(me.a)(),Le=Object(d.a)({reducer:{tasks:J},middleware:[Se]});Se.run(De),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:Le},r.a.createElement(pe,null),r.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.5466e6de.chunk.js.map