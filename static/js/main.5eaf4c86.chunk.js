(this.webpackJsonpimpact_analysis=this.webpackJsonpimpact_analysis||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(28),i=n.n(r),o=(n(39),n(8)),u=n.n(o),j=n(10),l=n(11),d=n(12),h=n(33),b=n(31),f=n(29),m=n.n(f),p=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"get",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get();case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),this.handleErrors(e.t0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleErrors",value:function(e){if(e.response){var t=e.response.data.message,n=t||"something went wrong.";console.log(n)}else console.log("something went wrong")}}]),e}();p.axios=m.a.create({baseURL:"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"});var x=function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,null,[{key:"getUser",value:function(){return p.get()}}]),e}();n(59);function O(e){var t=e.img,n=e.name,c=e.id;return Object(a.jsx)("div",{className:"cards",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-head",children:Object(a.jsx)("img",{src:t,alt:n})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsx)("p",{className:"name",children:n}),Object(a.jsx)("p",{className:"id",children:c})]}),Object(a.jsxs)("div",{className:"card-foot",children:[Object(a.jsx)("button",{className:"btn shortlist",children:"shortlist"}),Object(a.jsx)("button",{className:"btn rejected",children:"Reject"})]})]})]})})}var v=n(13);n(60);function g(e){var t=e.users;return Object(a.jsx)("div",{className:"user",children:Object(a.jsx)("div",{className:"user-cards",children:t.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)(v.b,{to:"/".concat(e.id),className:"links",children:Object(a.jsx)(O,{img:e.Image,name:e.name,id:e.id})})},e.id)}))})})}n(66);var N=function(e){var t=e.searchChange;return Object(a.jsx)("div",{className:"searchbox",children:Object(a.jsx)("input",{className:"searchbox-input",type:"search",placeholder:"search...",onChange:t})})},w=(n(67),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onsearchChange=function(e){a.setState({searchField:e.target.value})},a.state={users:[],searchField:""},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUser();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)(N,{searchChange:this.onsearchChange}),Object(a.jsx)(g,{users:c})]})}}]),n}(c.Component)),k=n(2),y=n(32);n(68);function C(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],s=t[1],r=Object(k.f)().id;return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUser();case 2:t=e.sent,n=t.find((function(e){return e.id===r})),s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(a.jsx)("div",{className:"candidate",children:Object(a.jsx)(O,{img:n.Image,name:n.name,id:n.id})})}function F(){return Object(a.jsx)(v.a,{children:Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/",exact:!0,component:w}),Object(a.jsx)(k.a,{path:"/home",exact:!0,component:w}),Object(a.jsx)(k.a,{path:"/:id",exact:!0,component:C})]})})}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),L()}},[[69,1,2]]]);
//# sourceMappingURL=main.5eaf4c86.chunk.js.map