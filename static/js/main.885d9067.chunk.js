(this.webpackJsonpimpact_analysis=this.webpackJsonpimpact_analysis||[]).push([[0],{38:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),r=n(27),i=n.n(r),o=(n(38),n(11)),u=n.n(o),l=n(13),h=n(9),j=n(10),d=n(32),b=n(31),m=n(28),f=n.n(m),p=function(){function e(){Object(h.a)(this,e)}return Object(j.a)(e,null,[{key:"get",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.axios.get();case 3:if(!(t=e.sent)){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),this.handleErrors(e.t0),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleErrors",value:function(e){if(e.response){var t=e.response.data.message,n=t||"something went wrong.";console.log(n)}else console.log("something went wrong")}}]),e}();p.axios=f.a.create({baseURL:"https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"});var x=function(){function e(){Object(h.a)(this,e)}return Object(j.a)(e,null,[{key:"getUser",value:function(){return p.get()}}]),e}();n(58);function v(e){var t=e.img,n=e.name,a=e.id;return Object(s.jsx)("div",{className:"cards",children:Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-head",children:Object(s.jsx)("img",{src:t,alt:n})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("div",{className:"profile",children:[Object(s.jsx)("p",{className:"name",children:n}),Object(s.jsx)("p",{className:"id",children:a})]}),Object(s.jsxs)("div",{className:"card-foot",children:[Object(s.jsx)("button",{className:"btn shortlist",children:"shortlist"}),Object(s.jsx)("button",{className:"btn rejected",children:"Reject"})]})]})]})})}n(59);function O(e){var t=e.users;return Object(s.jsx)("div",{className:"user",children:Object(s.jsx)("div",{className:"user-cards",children:t.map((function(e,t){return Object(s.jsx)(v,{img:e.Image,name:e.name,id:e.id},e.id)}))})})}n(60);var g=function(e){var t=e.searchChange;return Object(s.jsx)("div",{className:"searchbox",children:Object(s.jsx)("input",{className:"searchbox-input",type:"search",placeholder:"search...",onChange:t})})},N=(n(61),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(h.a)(this,n),(s=t.call(this,e)).onsearchChange=function(e){s.setState({searchField:e.target.value})},s.state={users:[],searchField:""},s}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUser();case 2:t=e.sent,this.setState({users:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.users,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)(g,{searchChange:this.onsearchChange}),Object(s.jsx)(O,{users:a})]})}}]),n}(a.Component)),w=n(29),y=n(2);function k(){return Object(s.jsx)(w.a,{children:Object(s.jsxs)(y.c,{children:[Object(s.jsx)(y.a,{path:"/",exact:!0,component:N}),Object(s.jsx)(y.a,{path:"/home",exact:!0,component:N})]})})}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),C()}},[[67,1,2]]]);
//# sourceMappingURL=main.885d9067.chunk.js.map