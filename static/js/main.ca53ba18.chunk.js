(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),i=(n(13),n(7)),s=n(3),l=n(2),u=(n(14),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useRef)(null),u=function(){s.current.focus()};return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var n=r.trim();""!==n&&(t(n),i(""),u())}},o.a.createElement("input",{className:"form__input",autoFocus:!0,type:"text",placeholder:"Co jest do zrobienia?",ref:s,value:r,onChange:function(e){i(e.target.value)}}),o.a.createElement("button",{className:"form__submit "},"Dodaj zadanie"))}),d=(n(15),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleTaskDone,c=e.removeTask;return o.a.createElement("ul",{className:"todo__ul "},t.map((function(e){return o.a.createElement("li",{key:e.id,className:"todo__task ".concat(e.done&&n?" todo__hidden":"")},o.a.createElement("button",{className:"todo__button todo__button--check",onClick:function(){a(e.id)}},e.done?o.a.createElement("i",{className:"fas fa-check"}):""),o.a.createElement("span",{className:"todo__span ".concat(e.done?"todo__span--done":"")},e.content),o.a.createElement("button",{className:"todo__button todo__button--remove",onClick:function(){c(e.id)}},o.a.createElement("i",{className:"fas fa-trash-alt"})))})))}),m=(n(16),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setEachDone;return 0===t.length?null:o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"buttons__done",disabled:t.every((function(e){return!1===e.done})),onClick:a},!1===n?"Ukryj uko\u0144czone":"Poka\u017c wszystkie"),o.a.createElement("button",{className:"buttons__done",disabled:t.every((function(e){return e.done})),onClick:c},"Uko\u0144cz wszystkie"))}),f=(n(17),function(e){var t=e.title,n=e.body,a=e.extraContent;return o.a.createElement("section",{className:"todo__list"},o.a.createElement("div",{className:"todo__header"},o.a.createElement("h2",{className:"todo__title"},t),a),o.a.createElement("div",{className:"todo__tasks todo__empty"},n))}),_=(n(18),function(e){var t=e.title;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",{className:"header__title"},t))}),h=(n(19),function(e){var t=e.content;return o.a.createElement("footer",{className:"footer"},t)}),b=(n(20),function(e){var t=e.children;return o.a.createElement("div",{className:"container"},t)});var E=function(){var e=JSON.parse(localStorage.getItem("tasks")),t=JSON.parse(localStorage.getItem("hideDone")),n=Object(a.useState)(null===e?[]:e),c=Object(l.a)(n,2),r=c[0],E=c[1],k=Object(a.useState)(null!==t&&t),N=Object(l.a)(k,2),g=N[0],v=N[1];return Object(a.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r)),localStorage.setItem("hideDone",JSON.stringify(g))}),[r,g]),o.a.createElement(b,null,o.a.createElement(_,{title:"Lista zada\u0144"}),o.a.createElement(f,{title:"Dodaj nowe zadanie",body:o.a.createElement(u,{addNewTask:function(e){E((function(t){return[].concat(Object(i.a)(t),[{id:0===t.length?1:t[t.length-1].id+1,content:e,done:!1}])}))}})}),o.a.createElement(f,{title:"Lista zada\u0144",body:0!==r.length?o.a.createElement(d,{tasks:r,hideDone:g,toggleTaskDone:function(e){E((function(t){return t.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{done:!t.done}):t}))}))},removeTask:function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))}}):"Nie masz na razie \u017cadnych zada\u0144.",extraContent:o.a.createElement(m,{tasks:r,hideDone:g,toggleHideDone:function(){v((function(e){return!e}))},setEachDone:function(){E((function(e){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{done:!0})}))}))}})}),o.a.createElement(h,{content:"\xa9Krzysztof Kwieci\u0144ski 2020"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ca53ba18.chunk.js.map