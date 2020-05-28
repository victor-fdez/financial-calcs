(this["webpackJsonpfinancial-calcs"]=this["webpackJsonpfinancial-calcs"]||[]).push([[0],{172:function(e,t,a){e.exports=a(301)},177:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),l=(a(177),a(35)),u=a(311),i=a(68),s=a(20),f=a(69),h=a(70),b=a(43),m=a(73),g=a(74),v=a(310),p=[{label:"Portafolio Market Value (PMV)",key:"portafolioMarketValue",value:1e6,type:"number"},{label:"Aggregate Exposure",key:"aggregateExposure",value:4e5,type:"number"},{label:"Eligible Loanable Percentage",key:"portafolioLoanableValue",value:68,type:"number"},{label:"Top-up Percentage",key:"topUpPercent",value:75,type:"number"},{label:"Sell-out Percentage",key:"sellOutPercent",value:50,type:"number"}],d={margin:"20px"},O=function(e){return e.reduce((function(e,t){return e[t.key]=t,e}),{})},k=p.reduce((function(e,t){return e[t.key]=t.value,e}),{}),j=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(f.a)(this,a),n=t.call(this,e);var r=e.onValuesChange;return n.state={onValuesChange:r,formValues:Object(s.a)({},O(p))},r(O(p)),n.changeNumber=n.changeNumber.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"changeNumber",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState((function(e){console.log("changed value");var a=Object(s.a)({},e,{formValues:Object(s.a)({},e.formValues,Object(i.a)({},n,Object(s.a)({},e.formValues[n],{value:r})))});return t.state.onValuesChange(a.formValues),a}))}},{key:"render",value:function(){var e=this,t=this.state.formValues;return r.a.createElement("div",{style:d},r.a.createElement(v.a,null,Object.entries(t).map((function(t,a){var n=Object(l.a)(t,2),o=n[0],c=n[1],u=c.label,i=c.value,s=c.type;return r.a.createElement(v.a.Input,{key:a,label:u,name:o,value:i,type:s,onChange:e.changeNumber})}))))}}]),a}(n.Component),y=a(46),E=function(e){Object(g.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state=Object(s.a)({},e,{height:0,width:0}),n.getBounds=n.getBounds.bind(Object(b.a)(n)),n}return Object(h.a)(a,[{key:"getBounds",value:function(e){var t=e.getPaper();if(t){var a=t.getSize(),n=a.width,r=a.height;this.setState((function(e,t){return Object(s.a)({},e,{width:n,height:r-30})}))}}},{key:"render",value:function(){var e=this.state,t=e.portafolioMarketValue,a=e.aggregateExposure,n=e.portafolioLoanableValue,o=e.topUpPercent,c=e.sellOutPercent,l=e.width,u=e.height,i=function(e,a,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{fill:"#000"},c=l/2-.15*l,i=.3*l,f=u*(e/t),h=u-f+10,b=c+i+10,m=u-f+10;return o=Object(s.a)({},{"text-anchor":"start"},{},o),console.log(o),r.a.createElement(y.Set,null,r.a.createElement(y.Text,{x:b,y:m,text:n,attr:o}),r.a.createElement(y.Rect,{x:c,y:h,width:i,height:f,attr:a}))},f=function(e){return e/100},h=function(e){var r=f(n)*t,o=r+f(e)*(t-r),c=a*(o/r);return console.log("loanable value ".concat(n," ").concat(r," ").concat(o," ").concat(t)),console.log("".concat(c," ").concat(a)),c},b=h(o),m=h(c),g=f(n)*t,v="#000000";return v=g>b?"#000000":b>=g&&g>m?"#ffec33":"#ff4633",console.log("size ".concat(l," ").concat(u)),console.log(v),r.a.createElement(y.Paper,{ref:this.getBounds,width:"100%",height:600},0!==l&&0!==u?r.a.createElement(y.Set,null,i(t,{fill:"#15d653",stroke:"#000","stroke-width":2},"Portafolio Market Value: $".concat(t)),i(g,{fill:"#f0f0f0",stroke:"#000","stroke-width":2},"Loan Amount: $".concat(g),{fill:v}),i(b,{fill:"#ffec33",stroke:"#000","stroke-width":2},"Top-up Amount: $".concat(b)),i(m,{fill:"#ff4633",stroke:"#000","stroke-width":2},"Sell Out Amount: $".concat(m))):null)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return Object(s.a)({},t,{},e)}}]),a}(r.a.Component);a(300);var w=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=(t[0],t[1],Object(n.useState)(0)),o=Object(l.a)(a,2),c=(o[0],o[1],Object(n.useState)(k)),i=Object(l.a)(c,2),s=i[0],f=i[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{stackable:!0},r.a.createElement(u.a.Column,{width:16},r.a.createElement("h1",{style:{margin:"30px"}},"Margin Loan Calculator")),r.a.createElement(u.a.Column,{width:4},r.a.createElement(j,{onValuesChange:function(e){var t=Object.entries(e).reduce((function(e,t){var a=Object(l.a)(t,2),n=(a[0],a[1]);return e[n.key]=n.value,e}),{});f(t)}})),r.a.createElement(u.a.Column,{ref:function(e){e&&console.log(e)},width:12},r.a.createElement(E,s))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.5a5fca6f.chunk.js.map