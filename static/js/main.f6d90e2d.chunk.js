(this["webpackJsonpreact-expense-tracker-app"]=this["webpackJsonpreact-expense-tracker-app"]||[]).push([[0],{63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=a(38),l=a(19),s=a(41),d=a(99),u=a(103),b=a(96),p=Object(b.a)((function(e){return{form:{display:"flex",flexDirection:"row",gap:"5px"},input:{font:"inherit",margin:"auto",marginTop:"10px",fontSize:"1.2rem",marginBottom:"10px",alignItems:"center !important",padding:"0.5rem",borderRadius:"6px",border:"1px solid #ccc",width:"20rem",maxWidth:"100%",background:"white"},button:{marginTop:"10px",marginBottom:"10px",background:"#4b4b4b",transition:".7s",color:"#fff","&:hover":{background:"#fff",color:"#4b4b4b",transition:".7s"}}}})),m=a(3),j=function(e){var t=p(),a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),b=s[0],j=s[1],x=Object(n.useState)(""),f=Object(l.a)(x,2),h=f[0],O=f[1];return Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={title:i,amount:+b,date:new Date(h)};e.onSaveExpenseData(a),o(""),j(""),O("")},children:[Object(m.jsxs)("div",{className:t.form,children:[Object(m.jsx)(d.a,{placeholder:"Title",required:!0,className:t.input,onChange:function(e){o(e.target.value)},value:i}),Object(m.jsx)(d.a,{placeholder:"Amount",type:"number",min:"0.01",step:"0.01",required:!0,className:t.input,onChange:function(e){j(e.target.value)},value:b}),Object(m.jsx)(d.a,{className:t.input,placeholder:"Date",type:"date",required:!0,value:h,onChange:function(e){O(e.target.value)}})]}),Object(m.jsx)("div",{className:"new-expense__actions",children:Object(m.jsx)(u.a,{className:t.button,type:"submit",variant:"contained",children:"Add Expense"})})]})},x=Object(b.a)((function(e){return{newExpense:{backgroundColor:"#03a9f4",padding:"1rem",margin:"2rem auto",width:"50rem",maxWidth:"95%",borderRadius:"12px",textAlign:"center",boxShadow:"0 1px 8px rgba(0, 0, 0, 0.25)"}}})),f=function(e){var t=x();return Object(m.jsx)("div",{className:t.newExpense,children:Object(m.jsx)(j,{onSaveExpenseData:function(t){var a=Object(s.a)(Object(s.a)({},t),{},{id:Math.ceil(100*Math.random()).toString()});e.onAddExpense(a)}})})},h=(a(63),function(e){var t="card "+e.className;return Object(m.jsx)("div",{className:t,children:e.children})}),O=Object(b.a)((function(e){return{expenses:{padding:"1rem",backgroundColor:"#03a9f4",margin:"2rem auto",width:"50rem",maxWidth:"95%"}}})),g=a(105),v=a(104),k=a(102),w=Object(b.a)((function(e){return{formControlDiv:{},formControl:{display:"flex",justifyContent:"flex-end",background:"#ffffff",position:"relative",top:"10px"},option:{"&:hover":{backgroundColor:"#03a9f4",background:""}}}})),N=function(e){var t=w();return Object(m.jsx)("div",{className:t.formControlDiv,children:Object(m.jsxs)(v.a,{className:t.formControl,variant:"filled",children:[Object(m.jsx)(g.a,{children:"Select"}),Object(m.jsxs)(k.a,{value:e.selected,onChange:function(t){t.preventDefault(),e.onChangeFilter(t.target.value)},children:[Object(m.jsx)("option",{className:t.option,value:"2017",children:"2017"}),Object(m.jsx)("option",{className:t.option,value:"2018",children:"2018"}),Object(m.jsx)("option",{className:t.option,value:"2019",children:"2019"}),Object(m.jsx)("option",{className:t.option,value:"2020",children:"2020"}),Object(m.jsx)("option",{className:t.option,value:"2021",children:"2021"})]})]})})},y=Object(b.a)((function(e){return{expenseDate:{display:"flex",flexDirection:"column",width:"5.5rem",height:"5.5rem",border:"1px solid #ececec",backgroundColor:"#2a2a2a",color:"white",borderRadius:"12px",alignItems:"center",justifyContent:"center"},expenseDateMonth:{fontSize:"1rem",fontWeight:"bold"},expenseDateYear:{fontSize:"1rem"},expenseDateDay:{fontSize:"1.5rem",fontWeight:"bold"}}})),D=function(e){var t=y(),a=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),r=e.date.getFullYear();return Object(m.jsxs)("div",{className:t.expenseDate,children:[Object(m.jsx)("div",{className:t.expenseDateMonth,children:a}),Object(m.jsx)("div",{className:t.expenseDateYear,children:r}),Object(m.jsx)("div",{className:t.expenseDateDay,children:n})]})},C=a(11),S=Object(b.a)((function(e){var t,a,n;return{expenseItem:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem",margin:"1rem 0",backgroundColor:"#4b4b4b"},expenseItemDescription:(t={display:"flex",flexDirection:"column",gap:"1rem",alignItems:"flex-end",flexFlow:"column-reverse",justifyContent:"flex-start",flex:"1"},Object(C.a)(t,e.breakpoints.down("sm"),{alignItems:"center"}),Object(C.a)(t,e.breakpoints.up("md"),{flexDirection:"column",justifyContent:"center",flex:"1",paddingRight:"50px",marginBottom:"10px"}),Object(C.a)(t,e.breakpoints.down("md"),{}),Object(C.a)(t,e.breakpoints.up("lg"),{}),Object(C.a)(t,e.breakpoints.up("xl"),{}),t),h6:(a={color:"#ffffff",fontSize:"1rem",justifyContent:"center",textAlign:"center",fontWeight:"bolder",fontFamily:"'Yanone Kaffeesatz', sans-serif !important",flex:"1",margin:"0 1rem"},Object(C.a)(a,e.breakpoints.down("sm"),{}),Object(C.a)(a,e.breakpoints.up("md"),{fontSize:"1.25rem"}),Object(C.a)(a,e.breakpoints.down("md"),{}),Object(C.a)(a,e.breakpoints.up("lg"),{}),Object(C.a)(a,e.breakpoints.up("xl"),{}),a),expenseItemPrice:(n={fontSize:"1rem",fontWeight:"bold",color:"white",backgroundColor:"#03a9f4",border:"1px solid white",padding:"0.5rem",borderRadius:"12px"},Object(C.a)(n,e.breakpoints.down("sm"),{}),Object(C.a)(n,e.breakpoints.up("md"),{fontSize:"1.25rem",padding:"0.5rem 1.5rem"}),Object(C.a)(n,e.breakpoints.down("md"),{}),Object(C.a)(n,e.breakpoints.up("lg"),{}),Object(C.a)(n,e.breakpoints.up("xl"),{}),n)}})),I=a(101),B=function(e){var t=S();return Object(m.jsxs)(h,{className:t.expenseItem,children:[Object(m.jsx)(D,{date:e.date}),Object(m.jsxs)("div",{className:t.expenseItemDescription,children:[Object(m.jsx)(I.a,{className:t.h6,variant:"h6",children:e.title}),Object(m.jsxs)("div",{className:t.expenseItemPrice,children:["$",e.amount]})]})]})},M=function(e){return 0===e.items.length?Object(m.jsx)("p",{children:"Couldn't find any Expenses!"}):Object(m.jsx)(m.Fragment,{children:e.items.map((function(e){return Object(m.jsx)(B,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},z=a(48),A=Object(b.a)((function(e){return{chartBar:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",position:"relative",top:"10px"},chartBarInner:{height:"100px",width:"100%",border:"1px solid gray",borderRadius:"12px",backgroundColor:"gray",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"flex-end"},chartBarFill:{backgroundColor:"#03a9f4",width:"100%",transition:"all 0.3s ease-out"},chartBarLabel:{fontWeight:"bold",fontSize:"1rem",color:"#fff",textAlign:"center"}}})),F=function(e){var t=A(),a="0%";return e.maxValue>0&&(a=Math.round(e.value/e.maxValue*100)+"%"),Object(m.jsxs)("div",{className:t.chartBar,children:[Object(m.jsx)("div",{className:t.chartBarInner,children:Object(m.jsx)("div",{className:t.chartBarFill,style:{height:a}})}),Object(m.jsx)("div",{className:t.chartBarLabel,children:e.label})]})},E=Object(b.a)((function(e){return{chart:{padding:"1rem",borderRadius:"12px",backgroundColor:"#4b4b4b",textAlign:"center",display:"flex",justifyContent:"space-around",height:"10rem"}}})),W=function(e){var t=E(),a=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(c.a)(a));return Object(m.jsx)("div",{className:t.chart,children:e.dataPoints.map((function(e){return Object(m.jsx)(F,{value:e.value,maxValue:n,label:e.label},e.id)}))})},R=function(e){var t,a=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],n=Object(z.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var r=t.value;a[r.date.getMonth()].value+=r.amount}}catch(i){n.e(i)}finally{n.f()}return Object(m.jsx)(W,{dataPoints:a})},P=function(e){var t=O(),a=Object(n.useState)("2021"),r=Object(l.a)(a,2),i=r[0],o=r[1],c=e.items.filter((function(e){return e.date.getFullYear().toString()===i}));return Object(m.jsxs)(h,{className:t.expenses,children:[Object(m.jsx)(N,{selected:i,onChangeFilter:function(e){o(e)}}),Object(m.jsx)(R,{expenses:c}),Object(m.jsx)(M,{items:c})]})},J=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk",amount:450,date:new Date(2021,5,12)}],T=function(){var e=Object(n.useState)(J),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(f,{onAddExpense:function(e){r((function(t){return[e].concat(Object(c.a)(t))}))}}),Object(m.jsx)(P,{items:a})]})};a(65);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.f6d90e2d.chunk.js.map