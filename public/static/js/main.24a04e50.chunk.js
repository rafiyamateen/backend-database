(this["webpackJsonpmongodb-practice"]=this["webpackJsonpmongodb-practice"]||[]).push([[0],{38:function(t,e,n){},40:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(8),a=n.n(c),i=n(20),d=n(17),r=(n(38),n(39),n(40),n(75)),s=n(70),l=n(71),u=n(3),j=function(t){var e=t.addItem;return Object(u.jsx)(r.a,{placement:"bottom",overlay:Object(u.jsx)(s.a,{id:"tooltip-bottom",children:"add"}),children:Object(u.jsx)(l.a,{className:"icons addIcon",onClick:e})})},b=function(t){var e=t.onChange,n=t.input;return Object(u.jsx)("input",{className:"input",id:"addForm",type:"text",value:n.todo,onChange:e,placeholder:"Add an item"})},m=n(72),f=n(73),p=n(76),O=(n(45),function(t){var e=t.todoList,n=t.editItem,o=t.deleteItem;return Object(u.jsx)(p.a,{variant:"flush",children:e.map((function(t){return Object(u.jsxs)(p.a.Item,{id:"list",children:[Object(u.jsx)("span",{children:t.todo}),Object(u.jsxs)("span",{id:"listIcons",children:[Object(u.jsx)(r.a,{placement:"bottom",overlay:Object(u.jsx)(s.a,{id:"tooltip-bottom",children:"edit"}),children:Object(u.jsx)(m.a,{className:"icons editIcon",onClick:function(){return n(t)},children:"Edit"})}),Object(u.jsx)(r.a,{placement:"bottom",overlay:Object(u.jsx)(s.a,{id:"tooltip-bottom",children:"delete"}),children:Object(u.jsx)(f.a,{className:"icons delIcon",onClick:function(){return o(t._id)},children:"Delete"})})]})]},t._id)}))})}),h=function(t){var e=t.input,n=t.onChange;return Object(u.jsx)("input",{className:"input",id:"editForm",value:e.todo,onChange:n})},x=(n(46),n(74)),g=function(t){var e=t.input,n=t.update;return Object(u.jsx)(r.a,{placement:"bottom",overlay:Object(u.jsx)(s.a,{id:"tooltip-bottom",children:"update"}),children:Object(u.jsx)(x.a,{className:"updateBtn icons",onClick:function(){n(e)}})})},v=n(77),I=n(15),C=n.n(I),E=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){C.a.get("/todos").then((function(t){return c(t.data)})).catch((function(t){return console.log("Failed to get todos list. Error: ",t)}))}),[]);var a=Object(o.useState)({todo:""}),r=Object(d.a)(a,2),s=r[0],l=r[1],m=Object(o.useState)(!1),f=Object(d.a)(m,2),p=f[0],x=f[1],I=Object(o.useState)(!1),E=Object(d.a)(I,2),F=E[0],N=E[1];return Object(o.useEffect)((function(){p?document.getElementById("editForm").focus():document.getElementById("addForm").focus()})),Object(u.jsxs)("div",{className:"appContainer",children:[Object(u.jsx)("h2",{className:"head",children:" TODO APP"}),Object(u.jsx)(v.a,{id:"alert",show:F,variant:"dark",children:"Please enter an item!"}),Object(u.jsx)("div",{className:"addSec",children:p?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{input:s,onChange:function(t){l({todo:t.target.value,_id:s._id}),N(!1)}}),Object(u.jsx)(g,{input:s,update:function(t){if(s.todo){var e=t.todo,o=e[0].toUpperCase()+e.slice(1);C.a.put("/update/".concat(t._id),{todo:o}).then((function(){var e=n.map((function(e){return e._id===t._id?Object(i.a)(Object(i.a)({},e),{},{todo:o}):e}));c(e),l({todo:""}),x(!1)})).catch((function(t){return console.log("Failed to update todos list. Error: ".concat(t))}))}else N(!0)}})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{onChange:function(t){l({todo:t.target.value}),N(!1)},input:s}),Object(u.jsx)(j,{addItem:function(){if(s.todo){var t=s.todo,e={todo:t[0].toUpperCase()+t.slice(1)};C.a.post("/add",e).then((function(){C.a.get("/todos").then((function(t){return c(t.data)})).catch((function(t){return console.log("Failed to get todos list. Error: ",t)})),l({todo:""})})).catch((function(t){return console.log("Failed to add todo. Error: ",t)}))}else N(!0)}})]})}),Object(u.jsx)(O,{todoList:n,deleteItem:function(t){C.a.delete("/delete/".concat(t)).then((function(){var e=n.filter((function(e){return e._id!==t}));c(e)})).catch((function(t){return console.log("Failed to delete. Error: ".concat(t))}))},editItem:function(t){l(Object(i.a)({},t)),x(!0)}})]})};a.a.render(Object(u.jsx)(E,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.24a04e50.chunk.js.map