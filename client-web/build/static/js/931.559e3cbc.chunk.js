"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[931],{95012:function(e,n,r){r.d(n,{Z:function(){return i}});r(72791);var t=r(80184);function i(){return(0,t.jsx)("div",{className:"noDataImg"})}},65931:function(e,n,r){r.d(n,{Z:function(){return H}});var t=r(74165),i=r(15861),a=r(70885),l=r(72791),s=r(21680),d=r(19773),o=r(24390),c=r(69963),u=r(9827),h=r(60807),p=r(56650),x=r(50228),m=r(4565),f=r(13811),Z=r(31766),j=r(68439),g=r(63381),v=r(65348),b=r(16090),w=r(95012),C=r(60788),y=r(40464),k=r(29823),N=r(55705),A=r(59911),I=r(81898),S=r(79365),_=r(39709),O=r(57337),B=r(8440),T=r(39571),U=r(17205),W=r(77248),E=r(63818),R=r(80184);function D(e){var n,r=e.open,t=e.setOpen,i=(0,b.K)((function(e){return e.apps})),s=(0,b.K)((function(e){return e.addAppUsers})),d=(0,l.useState)(!1),o=(0,a.Z)(d,2),c=o[0],u=o[1],h=(0,N.TA)({initialValues:{firstName:"",lastName:"",username:"",password:"",appId:null===(n=i[0])||void 0===n?void 0:n._id},validate:function(e){var n={};return e.firstName||(n.firstName="Required"),e.lastName||(n.lastName="Required"),e.username||(n.username="Required"),e.password||(n.password="Required"),n},onSubmit:function(e){var n=e.username,r=e.firstName,a=e.lastName,l=e.password,d=e.appId;u(!0);var o=i.find((function(e){return e._id===d}));O.dd(n,l,r,a,null===o||void 0===o?void 0:o.appToken).then((function(e){s([e.data.user]),t(!1)}))}});return 0===i.length?(0,R.jsxs)(C.Z,{open:r,onClose:function(){},"aria-labelledby":"responsive-dialog-title",children:[(0,R.jsx)(y.Z,{id:"responsive-dialog-title",children:"There is no apps"}),(0,R.jsx)(B.Z,{children:(0,R.jsx)(T.Z,{children:"You should create app first please!"})}),(0,R.jsx)(W.Z,{children:(0,R.jsx)(U.Z,{disabled:c,variant:"contained",autoFocus:!0,onClick:function(){return t(!1)},children:"Close"})})]}):(0,R.jsx)(C.Z,{onClose:function(){},open:r,children:(0,R.jsxs)(x.Z,{style:{width:"400px"},children:[(0,R.jsxs)(y.Z,{style:{display:"flex",justifyContent:"space-between"},children:["New User",(0,R.jsx)(f.Z,{disabled:c,onClick:function(){return t(!1)},children:(0,R.jsx)(k.Z,{})})]}),(0,R.jsx)(x.Z,{sx:{width:"100%",typography:"body1",padding:1},children:(0,R.jsxs)("form",{onSubmit:h.handleSubmit,children:[(0,R.jsx)(x.Z,{children:(0,R.jsxs)(I.Z,{fullWidth:!0,children:[(0,R.jsx)(S.Z,{variant:"standard",htmlFor:"uncontrolled-native",children:"App"}),(0,R.jsx)(E.Z,{inputProps:{name:"appName",id:"uncontrolled-native"},onChange:function(e){h.setFieldValue("appId",e.target.value)},children:i.map((function(e){return(0,R.jsx)("option",{value:e._id,children:e.appName},e._id)}))})]})}),(0,R.jsxs)(x.Z,{children:[(0,R.jsx)(A.Z,{fullWidth:!0,error:!(!h.touched.firstName||!h.errors.firstName),helperText:h.touched.firstName&&h.errors.firstName?h.errors.firstName:"",margin:"dense",label:"First Name",name:"firstName",variant:"standard",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.firstName}),(0,R.jsx)(A.Z,{fullWidth:!0,error:!(!h.touched.lastName||!h.errors.lastName),helperText:h.touched.lastName&&h.errors.lastName?h.errors.lastName:"",margin:"dense",label:"Last Name",name:"lastName",variant:"standard",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.lastName}),(0,R.jsx)(A.Z,{fullWidth:!0,error:!(!h.touched.lastName||!h.errors.username),helperText:h.touched.username&&h.errors.username?h.errors.username:"",margin:"dense",label:"Username",name:"username",variant:"standard",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.username}),(0,R.jsx)(A.Z,{fullWidth:!0,error:!(!h.touched.password||!h.errors.password),helperText:h.touched.password&&h.errors.password?h.errors.password:"",margin:"dense",label:"Password",name:"password",variant:"standard",onChange:h.handleChange,onBlur:h.handleBlur,value:h.values.password})]}),(0,R.jsx)(x.Z,{style:{display:"inline-flex",margin:"0 auto",flexDirection:"column"},children:(0,R.jsx)(_.Z,{loading:c,variant:"contained",style:{marginTop:"15px"},type:"submit",disabled:c,children:"Create New User"})})]})})]})})}var K=r(54585),z=r(4942),F=r(1413),L=r(88823),q=r(52791),P=r(11302),V={inputProps:{"aria-label":"Checkbox"}},M=function(e,n){return!!e&&!!e.find((function(e){return e===n}))},X=function(e){var n=e.name,r=e.row,t=e.onChange,i=e.disableAllRow,a=(0,b.K)((function(e){var n;return null===(n=e.user)||void 0===n?void 0:n.ACL.ownerAccess}));return(0,R.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,R.jsx)(o.Z,{component:"th",scope:"row",children:n}),(0,R.jsx)(o.Z,{style:{backgroundColor:M(null===r||void 0===r?void 0:r.disabled,"create")?"lightgrey":"white"},align:"left",children:(0,R.jsx)(L.Z,(0,F.Z)({checked:null===r||void 0===r?void 0:r.create,name:"create",disabled:(M(null===r||void 0===r?void 0:r.disabled,"create")||i)&&!a,onChange:function(e){return t(e,n)}},V))}),(0,R.jsx)(o.Z,{style:{backgroundColor:M(null===r||void 0===r?void 0:r.disabled,"read")?"lightgrey":"white"},align:"left",children:(0,R.jsx)(L.Z,(0,F.Z)({name:"read",onChange:function(e){return t(e,n)},disabled:M(null===r||void 0===r?void 0:r.disabled,"read")||i,checked:null===r||void 0===r?void 0:r.read},V))}),(0,R.jsx)(o.Z,{style:{backgroundColor:M(null===r||void 0===r?void 0:r.disabled,"update")?"lightgrey":"white"},align:"left",children:(0,R.jsx)(L.Z,(0,F.Z)({name:"update",onChange:function(e){return t(e,n)},disabled:M(null===r||void 0===r?void 0:r.disabled,"update")||i,checked:null===r||void 0===r?void 0:r.update},V))}),(0,R.jsx)(o.Z,{style:{backgroundColor:M(null===r||void 0===r?void 0:r.disabled,"delete")?"lightgrey":"white"},align:"left",children:(0,R.jsx)(L.Z,(0,F.Z)({name:"delete",onChange:function(e){return t(e,n)},disabled:M(null===r||void 0===r?void 0:r.disabled,"delete")||i,checked:null===r||void 0===r?void 0:r.delete},V))}),(0,R.jsx)(o.Z,{style:{backgroundColor:M(null===r||void 0===r?void 0:r.disabled,"admin")?"lightgrey":"white"},align:"left",children:(0,R.jsx)(L.Z,(0,F.Z)({name:"admin",onChange:function(e){return t(e,n)},disabled:M(null===r||void 0===r?void 0:r.disabled,"admin")||i,checked:null===r||void 0===r?void 0:r.admin},V))})]})},Y=function(e){var n=e.userId,r=e.updateData,x=(0,l.useState)(),f=(0,a.Z)(x,2),Z=f[0],j=f[1],g=(0,l.useState)([]),v=(0,a.Z)(g,2),w=v[0],C=v[1],y=(0,l.useState)([]),k=(0,a.Z)(y,2),N=(k[0],k[1]),A=(0,b.K)((function(e){return e.ACL})),I=(0,l.useState)(!1),S=(0,a.Z)(I,2),_=S[0],B=S[1];(0,l.useEffect)((function(){console.log("userAclApplicationKeys ",w)}),[w]);var T=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var r,i,a,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.prev=1,e.next=4,(0,O.wX)(n);case 4:r=e.sent,i=r.data,console.log("getAcl ",i),j(i),a=Object.keys(i.result.application),l=Object.keys(i.result.network),C(a),N(l),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:B(!1);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}(),W=function(e,n){j((function(r){return{result:(0,F.Z)((0,F.Z)({},r.result),{},{application:(0,F.Z)((0,F.Z)({},r.result.application),{},(0,z.Z)({},n,(0,F.Z)((0,F.Z)({},r.result.application[n]),{},(0,z.Z)({},e.target.name,e.target.checked))))})}}))},E=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){var i,a,l,s,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.prev=1,i=Object.fromEntries(Object.entries(Z.result.application).map((function(e){return delete e[1].disabled,e}))),a=Object.fromEntries(Object.entries(Z.result.network).map((function(e){return delete e[1].disabled,e}))),l={application:i,network:a},e.next=7,(0,O.eU)(n,l);case 7:s=e.sent,d=s.data,r&&r(d),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:B(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){T()}),[]),_?(0,R.jsx)(P.A,{}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(m.Z,{marginBottom:"10px",fontWeight:"bold",children:"Applications"}),(0,R.jsx)(c.Z,{component:p.Z,children:(0,R.jsxs)(s.Z,{size:"small",sx:{minWidth:650},"aria-label":"simple table",children:[(0,R.jsx)(u.Z,{children:(0,R.jsxs)(h.Z,{children:[(0,R.jsx)(o.Z,{children:"Name"}),(0,R.jsx)(o.Z,{children:"Create"}),(0,R.jsx)(o.Z,{align:"left",children:"Read"}),(0,R.jsx)(o.Z,{align:"left",children:"Update"}),(0,R.jsx)(o.Z,{align:"left",children:"Delete"}),(0,R.jsx)(o.Z,{align:"left",children:"Admin"})]})}),(0,R.jsx)(d.Z,{children:A.result&&w.map((function(e){var n,r=Z.result.application[e],t=A.result.application[e];return(0,R.jsx)(X,{disableAllRow:(n=t,!(n&&Object.entries(n).find((function(e){return"admin"===e[0]&&!!e[1]})))),onChange:W,name:e,row:r},e)}))})]})}),(0,R.jsx)(m.Z,{marginBottom:"10px",marginTop:"10px",fontWeight:"bold",children:"Networks"}),(0,R.jsx)(c.Z,{component:p.Z,children:(0,R.jsxs)(s.Z,{size:"small",sx:{minWidth:650},"aria-label":"simple table",children:[(0,R.jsx)(u.Z,{children:(0,R.jsxs)(h.Z,{children:[(0,R.jsx)(o.Z,{children:"Name"}),(0,R.jsx)(o.Z,{children:"Create"}),(0,R.jsx)(o.Z,{align:"left",children:"Read"}),(0,R.jsx)(o.Z,{align:"left",children:"Update"}),(0,R.jsx)(o.Z,{align:"left",children:"Delete"}),(0,R.jsx)(o.Z,{align:"left",children:"Admin"})]})}),(0,R.jsx)(d.Z,{})]})}),(0,R.jsx)(q.Z,{sx:{display:"flex",width:"100%",justifyContent:"flex-end",marginTop:"20px"},children:(0,R.jsx)(U.Z,{variant:"contained",onClick:E,children:"Update Acl"})})]})},G={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70vw",bgcolor:"background.paper",boxShadow:24,borderRadius:"10px",p:4};function H(){var e=(0,b.K)((function(e){return e.apps})),n=(0,b.K)((function(e){return e.user.ACL.ownerAccess})),r=(0,b.K)((function(e){return e.user})),C=l.useState(!1),y=(0,a.Z)(C,2),N=y[0],A=y[1],_=l.useState([]),B=(0,a.Z)(_,2),T=B[0],U=B[1],W=l.useState(),E=(0,a.Z)(W,2),z=E[0],F=E[1],L=l.useState({modalOpen:!1,userId:""}),q=(0,a.Z)(L,2),P=q[0],V=q[1],M=l.useState(),X=(0,a.Z)(M,2),H=X[0],J=X[1],Q=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(n){var r,i,a,l,s=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.length>1&&void 0!==s[1]?s[1]:10,i=s.length>2&&void 0!==s[2]?s[2]:0,e.prev=2,!n){e.next=10;break}return e.next=6,O.ES(n,r,i);case 6:return a=e.sent,l=a.data,J({limit:l.limit,offset:l.offset,total:l.total}),e.abrupt("return",l.items);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:return e.abrupt("return",[]);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}();l.useEffect((function(){n&&e.length&&(F(e[0]._id),Q(e[0]._id).then((function(e){U(e)})))}),[e]),l.useEffect((function(){n||(F(r.appId),Q(z).then((function(e){console.log("users ",e),U(e)})))}),[]);var $=function(){return V({modalOpen:!1,userId:""})};return(0,R.jsxs)(c.Z,{component:p.Z,style:{margin:"0 auto"},children:[(0,R.jsxs)(x.Z,{style:{display:"flex",alignItems:"center"},children:[(0,R.jsx)(m.Z,{variant:"h6",style:{margin:"16px"},children:"Users"}),z?(0,R.jsxs)(I.Z,{variant:"standard",sx:{m:1,minWidth:120},children:[(0,R.jsx)(S.Z,{id:"demo-simple-select-label",children:"App"}),(0,R.jsx)(g.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"App",value:z,onChange:function(e){F(e.target.value),Q(e.target.value).then((function(e){U(e)}))},children:e.map((function(e){return(0,R.jsx)(v.Z,{value:e._id,children:e.appName},e._id)}))})]}):null,(0,R.jsx)(f.Z,{onClick:function(){return A(!0)},size:"large",children:(0,R.jsx)(j.Z,{fontSize:"large"})})]}),0===T.length&&(0,R.jsxs)(x.Z,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,R.jsx)(w.Z,{}),(0,R.jsx)(m.Z,{style:{marginTop:"20px",marginBottom:"20px"},children:"Users not found."})]}),T.length>0&&(0,R.jsxs)(s.Z,{"aria-label":"simple table",children:[(0,R.jsx)(u.Z,{children:(0,R.jsxs)(h.Z,{children:[(0,R.jsx)(o.Z,{width:200,children:"appId"}),(0,R.jsx)(o.Z,{align:"right",children:"firstName"}),(0,R.jsx)(o.Z,{align:"right",children:"lastName"}),(0,R.jsx)(o.Z,{align:"right",children:"username"}),(0,R.jsx)(o.Z,{align:"right",children:"email"}),(0,R.jsx)(o.Z,{align:"right",children:"Actions"})]})}),(0,R.jsxs)(d.Z,{children:[T.map((function(e){return(0,R.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,R.jsx)(o.Z,{component:"th",scope:"row",children:e.appId}),(0,R.jsx)(o.Z,{align:"right",children:e.firstName}),(0,R.jsx)(o.Z,{align:"right",children:e.lastName}),(0,R.jsx)(o.Z,{align:"right",children:e.username?e.username:"-"}),(0,R.jsx)(o.Z,{align:"right",children:e.email?e.email:"-"}),(0,R.jsx)(o.Z,{align:"right",children:(0,R.jsxs)(x.Z,{sx:{width:"200px"},children:[(0,R.jsx)(m.Z,{children:"Edit"}),(0,R.jsx)(m.Z,{style:{cursor:"pointer",textDecoration:"underline"},onClick:function(){return n=e._id,V({modalOpen:!0,userId:n});var n},children:"Edit ACL"})]})})]},e._id)})),(null===H||void 0===H?void 0:H.total)&&(0,R.jsx)(h.Z,{children:(0,R.jsx)(o.Z,{colSpan:6,children:(0,R.jsx)(K.Z,{onChange:function(e,n){var r=0;n-1>0&&(r=(n-1)*((null===H||void 0===H?void 0:H.limit)||10)),Q(z||null,(null===H||void 0===H?void 0:H.limit)||10,r).then((function(e){return U(e)}))},count:Math.ceil(H.total/H.limit)})})})]})]}),(0,R.jsx)(D,{open:N,setOpen:A}),(0,R.jsx)(Z.Z,{open:P.modalOpen,onClose:$,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,R.jsxs)(x.Z,{sx:G,children:[(0,R.jsx)(Y,{updateData:function(e){var n=T,r=n.findIndex((function(e){return e._id===P.userId}));n[r]._id=e.result.userId,U(n)},userId:P.userId}),(0,R.jsx)(f.Z,{onClick:$,sx:{position:"absolute",top:0,right:0,color:"black"},children:(0,R.jsx)(k.Z,{fontSize:"large"})})]})})]})}}}]);
//# sourceMappingURL=931.559e3cbc.chunk.js.map