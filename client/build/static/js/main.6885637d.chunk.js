(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),s=a(8),o=a(13),i=a(14),c=a(50),l=a(16),u=a(15),d=a(0),m=a.n(d),p=a(10),h=a.n(p),f=a(57),g=a(122),w=a(149),b=a(150),y=a(151),E=a(152),k=a(160),v=a(18),x=a(5),O=a(78),S=a.n(O),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoggedIn:e.isLoggedIn,username:e.username,userid:e.userid,searchText:""},n}return Object(i.a)(a,[{key:"onSearchTextChange",value:function(e){this.setState({searchText:e.target.value.trim()})}},{key:"searchQuery",value:function(){0!==this.state.searchText.length&&(window.location.href="/s/q/".concat(this.state.searchText))}},{key:"componentWillReceiveProps",value:function(e){this.setState({isLoggedIn:e.isLoggedIn,username:e.username,userid:e.userid})}},{key:"render",value:function(){var e,t=this,a=this.props.classes;return e=this.state.isLoggedIn?m.a.createElement(w.a,{color:"primary"},m.a.createElement(g.a,{color:"inherit",onClick:function(){window.location.href="/profile"}},"Profile"),m.a.createElement(g.a,{className:a.menuButton,onClick:function(){t.props.handleLogout()},color:"inherit"},this.state.username,this.state.userid)):m.a.createElement(g.a,{className:a.menuButton,onClick:function(){t.props.handleLogin()},color:"primary"},"Login"),m.a.createElement("div",{className:a.root},m.a.createElement(b.a,{style:{position:"fixed",top:"0"},className:a.appbar},m.a.createElement(y.a,null,m.a.createElement(E.a,{variant:"h6",className:a.title},m.a.createElement("a",{className:a.title,style:{textDecoration:"none"},href:"/"},"askAnything")),m.a.createElement("div",{className:a.search},m.a.createElement("div",{className:a.searchIcon},m.a.createElement(S.a,null)),m.a.createElement(k.a,{onChange:function(e){t.onSearchTextChange(e)},placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}}),m.a.createElement(g.a,{onClick:function(){t.searchQuery()}},"Search")),m.a.createElement(g.a,{className:a.menuButton,onClick:function(){t.props.handleNewQuestion()},variant:"contained",color:"secondary"},"Ask Question"),e)))}}]),a}(d.Component),M=Object(x.a)((function(e){return{appbar:{backgroundColor:"#103070"},root:{flexGrow:1},menuButton:{color:"#FDFDFD",fontFamily:"Open Sans",marginRight:e.spacing(1)},title:{color:"#FDFDFD",fontWeight:500,fontFamily:"Open Sans",flexGrow:1},link:{color:"#FDFDFD",fontWeight:500,marginLeft:"10px",fontFamily:"Open Sans"},search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}))(q),j=a(158),N=a(23),C=a(28),L=a(33),A=a.n(L),D=a(121),F=a(153),T=a(157),I=a(154),Q=a(58),P=a.n(Q),R=function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api"+t.api);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.post("/api"+t.api,t.body);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fetchQuestionData(n.state.questionid);case 1:case"end":return e.stop()}}),e)}))),n.fetchQuestionData=function(){var e=Object(s.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({api:"/q/".concat(t)});case 2:(a=e.sent)&&a.oneFetchStatus?n.setState({question:a.question,answers:Object(N.a)(a.answers)}):window.location.href="/error";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={token:e.token,isLoggedIn:e.isLoggedIn,username:e.username,userid:e.userid,questionid:e.match.params.quesid,question:{},answers:[]},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token,isLoggedIn:e.isLoggedIn,username:e.username,userid:e.userid})}},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",{className:t.root},m.a.createElement(D.a,{className:t.paper},m.a.createElement("div",{className:t.questionsList},m.a.createElement(F.a,{container:!0,key:this.state.question.questionid,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{item:!0,key:"questionbody",xs:12},m.a.createElement(E.a,{className:t.title},this.state.question.question)),m.a.createElement(F.a,{key:"questionlink".concat("_username"),item:!0,xs:12},m.a.createElement(E.a,{className:t.user},this.state.answers.length," Answer".concat(1===this.state.answers.length?"":"s"," "),"\u2022",m.a.createElement(C.b,{style:{color:"#103070",textDecoration:"none"},to:"/s/u/".concat(this.state.question.username)}," ",this.state.question.username," asked")," ".concat(A()(this.state.question.created).fromNow()," "))),m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(E.a,{className:t.key},m.a.createElement(g.a,{color:"primary",onClick:function(){e.props.answerQuestion(e.state.questionid)},variant:"contained"},"Answer")))))),this.state.answers.length>0&&m.a.createElement(D.a,{className:t.paper},m.a.createElement(E.a,{className:t.title},"ANSWERS"),m.a.createElement("div",{className:t.questionsList},this.state.answers.map((function(a,n){return m.a.createElement("div",{key:"".concat(a.answerid,"_basediv")},m.a.createElement(F.a,{container:!0,key:"".concat(a.answerid,"_basegrid"),className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{key:"".concat(a.answerid,"_answerid"),item:!0,xs:12},m.a.createElement(E.a,{className:t.answer},m.a.createElement(T.a,{component:"span",my:2,whiteSpace:"normal"},a.answer))),m.a.createElement(F.a,{key:"".concat(a.answerid,"_username"),item:!0,xs:12},m.a.createElement(E.a,{className:t.user},m.a.createElement(C.b,{style:{color:"#103070",textDecoration:"none"},to:"/s/u/".concat(a.username)},a.username," answered")," ".concat(A()(a.created).fromNow()," ")),m.a.createElement(E.a,{className:t.user}))),n!==e.state.answers.length-1&&m.a.createElement(I.a,{className:t.dividerClass,key:"".concat(a.answerid,"_divider")}))})))))}}]),a}(d.Component),_=Object(x.a)((function(e){return{appbar:{backgroundColor:"#103070"},root:{flexGrow:1},menuButton:{color:"#FDFDFD",fontFamily:"Open Sans",marginRight:e.spacing(1)},title:{fontWeight:800,fontSize:"18px",padding:e.spacing(2),color:"#103070",fontFamily:"Open Sans"},question:{fontFamily:"Open Sans",color:"#103070",fontWeight:"600"},answer:{marginTop:e.spacing(1),fontFamily:"Open Sans",fontWeight:"600"},user:{fontFamily:"Open Sans",fontSize:"80%",color:"#666666",fontWeight:"400"},grid:{padding:e.spacing(3)},questionsList:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:"10px"},dividerClass:{color:"rgba(0,0,0,0.1)"},paper:{marginLeft:e.spacing(1),marginTop:e.spacing(1),marginRight:e.spacing(1),padding:e.spacing(3),textAlign:"left",fontFamily:"Open Sans",whiteSpace:"nowrap"}}}))(U),z=a(159),V=a(155),B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCloseModal=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({loginModalOpen:!1,error:!1}),n.props.hideModal();case 2:case"end":return e.stop()}}),e)}))),n.handleLogin=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.username.length){e.next=3;break}return n.setState({error:!0,errorMessage:"Username length should be greater than 0!"}),e.abrupt("return");case 3:return e.next=5,W({body:{username:n.state.username,password:n.state.password},api:"/u/login"});case 5:(t=e.sent)?t.isLoggedIn?(n.setState({error:!1}),n.props.handleLoginData(t),n.handleCloseModal()):n.setState({error:!0,errorMessage:t.errorMessage}):n.setState({error:!0,errorMessage:"Unexpected Error Occurred!"});case 7:case"end":return e.stop()}}),e)}))),n.handleNewUser=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.username.length){e.next=3;break}return n.setState({error:!0,errorMessage:"Username length should be greater than 0!"}),e.abrupt("return");case 3:return e.next=5,W({body:{username:n.state.username,password:n.state.password},api:"/u/register"});case 5:(t=e.sent)?t.isLoggedIn?(n.setState({error:!1}),n.props.handleLoginData(t),n.handleCloseModal()):n.setState({error:!0,errorMessage:t.errorMessage}):n.setState({error:!0,errorMessage:"Unexpected Error Occurred!"});case 7:case"end":return e.stop()}}),e)}))),n.state={loginModalOpen:e.showModal,username:"",password:"",error:!1,errorMessage:""},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({loginModalOpen:e.showModal})}},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",null,m.a.createElement(z.a,{open:this.props.showModal,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,closeAfterTransition:!0},m.a.createElement("div",{className:t.root,style:{borderRadius:"10px",margin:"auto",width:"60%",backgroundColor:"white"}},m.a.createElement(E.a,{className:t.title},"Login"),m.a.createElement(F.a,{container:!0,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(V.a,{className:t.textfield,size:"small",label:"Username",onChange:function(t){e.setState({username:t.target.value})},variant:"outlined"})),m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(V.a,{type:"password",className:t.textfield,size:"small",label:"Password",onChange:function(t){e.setState({password:t.target.value})},variant:"outlined"})),this.state.error&&m.a.createElement(F.a,{item:!0,xs:12,style:{fontSize:"70%",fontFamily:"Open Sans",color:"red"}},this.state.errorMessage),m.a.createElement(F.a,{item:!0,xs:8},m.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(t){return e.handleLogin(t)}},"Login"),m.a.createElement(g.a,{style:{marginLeft:"2px"},variant:"contained",color:"primary",onClick:function(t){return e.handleNewUser(t)}},"New User")),m.a.createElement(F.a,{item:!0,xs:4},m.a.createElement(g.a,{style:{leftMargin:"100px"},onClick:function(){e.handleCloseModal()},variant:"contained",color:"secondary"},"Cancel"))))))}}]),a}(d.Component),G=Object(x.a)((function(e){return{modal:{display:"flex",marginBottom:"200px",justifyContent:"center"},root:{padding:e.spacing(4),backgroundColor:"#FDFDFD"},grid:{padding:e.spacing(1)},title:{fontWeight:600,fontFamily:"Open Sans"},textfield:{width:"100%"}}}))(B),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return m.a.createElement("div",{style:{fontFamily:"Open Sans",fontSize:"30px",textAlign:"center",marginTop:"20%"}},"404 NOT FOUND!")}}]),a}(d.Component),J=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCloseModal=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({error:!1,question:""}),n.props.hideModal();case 2:case"end":return e.stop()}}),e)}))),n.handleAskQuestion=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.question.length){e.next=3;break}return n.setState({error:!0,errorMessage:"Question length should be greater than 0!"}),e.abrupt("return");case 3:return e.next=5,W({body:{token:n.state.token,question:n.state.question},api:"/u/r/AskQuestion"});case 5:(t=e.sent)?t.isDone?(n.setState({error:!1}),n.handleCloseModal()):n.setState({error:!0,errorMessage:t.errorMessage}):n.setState({error:!0,errorMessage:"Unexpected Error Occurred!"});case 7:case"end":return e.stop()}}),e)}))),n.state={question:"",error:!1,errorMessage:"",token:e.token},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token})}},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",null,m.a.createElement(z.a,{open:this.props.showModal,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,closeAfterTransition:!0},m.a.createElement("div",{className:t.root,style:{borderRadius:"10px",margin:"auto",width:"60%",backgroundColor:"white"}},m.a.createElement(E.a,{className:t.title},"AskQuestion"),m.a.createElement(F.a,{container:!0,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(V.a,{multiline:!0,rows:4,className:t.textfield,size:"small",label:"Question",onChange:function(t){e.setState({question:t.target.value})},variant:"outlined"})),this.state.error&&m.a.createElement(F.a,{item:!0,xs:12,style:{fontSize:"70%",fontFamily:"Open Sans",color:"red"}},this.state.errorMessage),m.a.createElement(F.a,{item:!0,xs:8},m.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(t){return e.handleAskQuestion(t)}},"AskQuestion")),m.a.createElement(F.a,{item:!0,xs:4},m.a.createElement(g.a,{style:{leftMargin:"100px"},onClick:function(){e.handleCloseModal()},variant:"contained",color:"secondary"},"Cancel"))))))}}]),a}(d.Component),Y=Object(x.a)((function(e){return{modal:{display:"flex",marginBottom:"200px",justifyContent:"center"},root:{padding:e.spacing(4),backgroundColor:"#FDFDFD"},grid:{padding:e.spacing(1)},title:{fontWeight:600,fontFamily:"Open Sans"},textfield:{width:"100%"}}}))(J),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleCloseModal=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({error:!1,questionid:null,answer:""}),n.props.hideModal();case 2:case"end":return e.stop()}}),e)}))),n.handleAddAnswer=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.answer.length){e.next=3;break}return n.setState({error:!0,errorMessage:"Answer length should be greater than 0!"}),e.abrupt("return");case 3:return e.next=5,W({body:{token:n.state.token,questionid:n.state.questionid,answer:n.state.answer},api:"/u/r/addanswer"});case 5:(t=e.sent)?t.isDone?(n.setState({error:!1}),n.handleCloseModal()):n.setState({error:!0,errorMessage:t.errorMessage}):n.setState({error:!0,errorMessage:"Unexpected Error Occurred!"});case 7:case"end":return e.stop()}}),e)}))),n.state={answer:"",questionid:e.match.params.quesid,token:e.token,error:!1,errorMessage:""},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token,questionid:e.match.params.quesid})}},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",null,m.a.createElement(z.a,{open:this.props.showModal,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,closeAfterTransition:!0},m.a.createElement("div",{className:t.root,style:{borderRadius:"10px",margin:"auto",width:"60%",backgroundColor:"white"}},m.a.createElement(E.a,{className:t.title},"AddAnswer"),m.a.createElement(F.a,{container:!0,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(V.a,{multiline:!0,rows:4,className:t.textfield,size:"small",label:"Answer",onChange:function(t){e.setState({answer:t.target.value})},variant:"outlined"})),this.state.error&&m.a.createElement(F.a,{item:!0,xs:12,style:{fontSize:"70%",fontFamily:"Open Sans",color:"red"}},this.state.errorMessage),m.a.createElement(F.a,{item:!0,xs:8},m.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(t){return e.handleAddAnswer(t)}},"Add Answer")),m.a.createElement(F.a,{item:!0,xs:4},m.a.createElement(g.a,{style:{leftMargin:"100px"},onClick:function(){e.handleCloseModal()},variant:"contained",color:"secondary"},"Cancel"))))))}}]),a}(d.Component),X=Object(x.a)((function(e){return{modal:{display:"flex",marginBottom:"200px",justifyContent:"center"},root:{padding:e.spacing(4),backgroundColor:"#FDFDFD"},grid:{padding:e.spacing(1)},title:{fontWeight:600,fontFamily:"Open Sans"},textfield:{width:"100%"}}}))(H),Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.fetchQuestions();case 2:case"end":return e.stop()}}),e)}))),n.fetchQuestions=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0===n.state.querytype.localeCompare("a")?"/q/s/".concat(n.state.querytype,"/").concat(n.state.currentOffset):"/q/s/".concat(n.state.querytype,"/").concat(n.state.currentOffset,"/").concat(n.state.query),e.next=3,R({api:t});case 3:a=e.sent,n.setState({currentOffset:n.state.currentOffset+1}),a&&a.allFetchStatus?(n.setState({questions:[].concat(Object(N.a)(n.state.questions),Object(N.a)(a.questions))}),a.questions.length<10&&n.setState({noMoreData:!0})):window.location.href="/error";case 6:case"end":return e.stop()}}),e)}))),n.state={query:e.match.params.query||"",querytype:e.querytype,questions:[],currentOffset:0,noMoreData:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.classes;return e=0===this.state.querytype.localeCompare("a")?"ALL RESULTS":0===this.state.querytype.localeCompare("q")?"ALL RESULTS FOR QUERY '"+this.state.query+"'":"ALL QUESTIONS BY USER '"+this.state.query+"'",m.a.createElement("div",{className:a.root},m.a.createElement(D.a,{className:a.paper},0===this.state.questions.length&&m.a.createElement(E.a,{className:a.title},"No Results Found!"),0!==this.state.questions.length&&m.a.createElement(E.a,{className:a.title},e),m.a.createElement("div",{className:a.questionsList},this.state.questions.map((function(e,n){return m.a.createElement("div",{key:"".concat(e.questionid,"_basediv")},m.a.createElement(F.a,{container:!0,key:e.questionid,className:a.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{key:"".concat(e.questionid,"_questionid"),item:!0,xs:12},m.a.createElement(C.b,{style:{textDecoration:"none"},to:"/q/".concat(e.questionid)},m.a.createElement(E.a,{noWrap:!0,className:a.question},e.question))),m.a.createElement(F.a,{key:"".concat(e.questionid,"_username"),item:!0,xs:12},m.a.createElement(E.a,{className:a.user},e.answers," Answer".concat(1===e.answers?"":"s"," "),"\u2022",m.a.createElement("a",{style:{color:"#103070",textDecoration:"none"},href:"/s/u/".concat(e.username)}," ",e.username," asked")," ".concat(A()(e.created).fromNow()," ")))),n!==t.state.questions.length-1&&m.a.createElement(I.a,{className:a.dividerClass,key:"".concat(e.questionid,"_divider")}))}))),!this.state.noMoreData&&m.a.createElement(g.a,{style:{margin:"0 auto",display:"block"},onClick:function(){t.fetchQuestions()},variant:"contained",color:"default"},"Load More")))}}]),a}(d.Component),$=Object(x.a)((function(e){return{root:{flexGrow:1},title:{fontWeight:800,fontSize:"18px",padding:e.spacing(2),color:"#103070",fontFamily:"Open Sans"},question:{fontFamily:"Open Sans",color:"#103070",fontWeight:"600"},answer:{marginTop:e.spacing(1),fontFamily:"Open Sans",fontWeight:"600"},user:{fontFamily:"Open Sans",fontSize:"80%",color:"#666666",fontWeight:"400"},grid:{padding:e.spacing(3)},questionsList:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:"10px"},dividerClass:{color:"rgba(0,0,0,0.1)"},paper:{marginLeft:e.spacing(1),marginTop:e.spacing(1),marginRight:e.spacing(1),padding:e.spacing(3),textAlign:"left",fontFamily:"Open Sans",whiteSpace:"nowrap"}}}))(Z),ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleEditConfirm=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.defaultValue.length){e.next=3;break}return n.setState({error:!0,errorMessage:"".concat(n.state.editTypeLabel," length should be greater than 0!")}),e.abrupt("return");case 3:return e.next=5,W({body:{token:n.state.token,editid:n.state.editId,value:n.state.defaultValue},api:"/u/r/e/".concat(n.state.editType)});case 5:(t=e.sent)?t.isDone?(n.setState({error:!1}),n.props.hideModal()):n.setState({error:!0,errorMessage:t.errorMessage}):n.setState({error:!0,errorMessage:"Unexpected Error Occurred!"});case 7:case"end":return e.stop()}}),e)}))),n.state={defaultValue:e.defaultValue,editType:e.editType,editTypeLabel:e.editTypeLabel,editId:e.editId,token:e.token,error:!1,errorMessage:""},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token,defaultValue:e.defaultValue,editType:e.editType,editTypeLabel:e.editTypeLabel,editId:e.editId})}},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",null,m.a.createElement(z.a,{open:this.props.showModal,"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,closeAfterTransition:!0},m.a.createElement("div",{className:t.root,style:{borderRadius:"10px",margin:"auto",width:"60%",backgroundColor:"white"}},m.a.createElement(E.a,{className:t.title},"Edit ",this.state.editTypeLabel),m.a.createElement(F.a,{container:!0,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(V.a,{defaultValue:this.state.defaultValue,multiline:!0,rows:4,className:t.textfield,size:"small",label:this.state.editTypeLabel,onChange:function(t){e.setState({defaultValue:t.target.value})},variant:"outlined"})),this.state.error&&m.a.createElement(F.a,{item:!0,xs:12,style:{fontSize:"70%",fontFamily:"Open Sans",color:"red"}},this.state.errorMessage),m.a.createElement(F.a,{item:!0,xs:8},m.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(t){return e.handleEditConfirm(t)}},"Edit Confirm")),m.a.createElement(F.a,{item:!0,xs:4},m.a.createElement(g.a,{style:{leftMargin:"100px"},onClick:function(){e.props.hideModal()},variant:"contained",color:"secondary"},"Cancel"))))))}}]),a}(d.Component),te=Object(x.a)((function(e){return{modal:{display:"flex",marginBottom:"200px",justifyContent:"center"},root:{padding:e.spacing(4),backgroundColor:"#FDFDFD"},grid:{padding:e.spacing(1)},title:{fontWeight:600,fontFamily:"Open Sans"},textfield:{width:"100%"}}}))(ee),ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).hideEditModal=function(){n.setState({showEditModal:!1})},n.handlePasswordUpdate=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==n.state.passwordOld.length&&0!==n.state.passwordNew.length){e.next=3;break}return n.setState({errorPassword:!0,errorMessagePassword:"Password can't be empty!"}),e.abrupt("return");case 3:if(0!==n.state.passwordNew.localeCompare(n.state.passwordOld)){e.next=6;break}return n.setState({errorPassword:!0,errorMessagePassword:"Old password and new password can't be same!"}),e.abrupt("return");case 6:if(0===n.state.passwordNew.localeCompare(n.state.passwordConfirm)){e.next=9;break}return n.setState({errorPassword:!0,errorMessagePassword:"Confirmation Password not matched!"}),e.abrupt("return");case 9:return e.next=11,W({body:{token:n.state.token,passwordold:n.state.passwordOld,passwordnew:n.state.passwordNew},api:"/u/r/p"});case 11:null!==(t=e.sent)?t.isDone?n.setState({errorPassword:!0,errorMessagePassword:"Password Changed!"}):n.setState({errorPassword:!0,errorMessagePassword:t.errorMessage}):window.location.href="/error";case 13:case"end":return e.stop()}}),e)}))),n.handleAnswerDelete=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W({body:{token:n.state.token,answerid:t.answerid},api:"/u/r/d/answer"});case 2:e.sent.isDone?n.setState({answers:Object(N.a)(n.state.answers.filter((function(e,a){return parseInt(e.answerid)!==parseInt(t.answerid)})))}):window.location.href="/error";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleQuestionDelete=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W({body:{token:n.state.token,questionid:t.questionid},api:"/u/r/d/question"});case 2:e.sent.isDone?n.setState({questions:Object(N.a)(n.state.questions.filter((function(e,a){return parseInt(e.questionid)!==parseInt(t.questionid)}))),answers:Object(N.a)(n.state.answers.filter((function(e,a){return parseInt(e.questionid)!==parseInt(t.questionid)})))}):window.location.href="/error";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleAnswerEdit=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({editType:"answer",editTypeLabel:"Answer",editId:t.answer.answerid,defaultValue:t.answer.answer,showEditModal:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleQuestionEdit=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({editType:"question",editTypeLabel:"Question",editId:t.question.questionid,defaultValue:t.question.question,showEditModal:!0});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.fetchAllData=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W({body:{token:n.state.token},api:"/u/r/profile"});case 2:(t=e.sent)&&t.allFetchStatus?n.setState({username:t.username,questions:[].concat(Object(N.a)(n.state.questions),Object(N.a)(t.questions)),answers:[].concat(Object(N.a)(n.state.answers),Object(N.a)(t.answers))}):window.location.href="/error";case 4:case"end":return e.stop()}}),e)}))),n.state={token:e.token,username:"",passwordOld:"",passwordNew:"",passwordConfirm:"",questions:[],answers:[],errorPassword:!1,errorMessagePassword:"",showEditModal:!1,editType:"",editTypeLabel:"",editId:"",defaultValue:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchAllData()}},{key:"componentWillReceiveProps",value:function(e){this.setState({token:e.token}),null===e.token&&(window.location.href="/")}},{key:"render",value:function(){var e=this,t=this.props.classes;return m.a.createElement("div",{className:t.root},m.a.createElement(F.a,{container:!0,spacing:1},m.a.createElement(F.a,{item:!0,xs:12,sm:12},m.a.createElement(D.a,{className:t.paper},m.a.createElement(E.a,{className:t.title},this.state.username),m.a.createElement(F.a,{item:!0,xs:6,container:!0,spacing:1},m.a.createElement(F.a,{item:!0,xs:12,sm:6},m.a.createElement(V.a,{type:"password",className:t.textfield,size:"small",label:"Old Password",onChange:function(t){e.setState({passwordOld:t.target.value})},variant:"outlined"})),m.a.createElement(F.a,{item:!0,xs:12,sm:6},m.a.createElement(V.a,{type:"password",className:t.textfield,size:"small",label:"New Password",onChange:function(t){e.setState({passwordNew:t.target.value})},variant:"outlined"})),m.a.createElement(F.a,{item:!0,xs:12,sm:6},m.a.createElement(V.a,{type:"password",className:t.textfield,size:"small",label:"Confirm Password",onChange:function(t){e.setState({passwordConfirm:t.target.value})},variant:"outlined"})),m.a.createElement(F.a,{item:!0,xs:12}),this.state.errorPassword&&m.a.createElement(F.a,{item:!0,xs:12,style:{fontSize:"70%",fontFamily:"Open Sans",color:"red"}},this.state.errorMessagePassword),m.a.createElement(F.a,{item:!0,xs:12},m.a.createElement(g.a,{style:{fontFamily:"Open Sans"},onClick:function(){e.handlePasswordUpdate()},variant:"contained",color:"secondary"},"Update Password"))))),0!==this.state.questions.length&&m.a.createElement(F.a,{item:!0,xs:12,sm:6},m.a.createElement(D.a,{className:t.paper},m.a.createElement(E.a,{className:t.title},"ALL QUESTIONS ASKED"),m.a.createElement("div",{className:t.questionsList},this.state.questions.map((function(a,n){return m.a.createElement("div",{key:"".concat(a.questionid,"_basediv")},m.a.createElement(F.a,{container:!0,key:a.questionid,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{key:"".concat(a.questionid,"_questionid"),item:!0,xs:12},m.a.createElement(C.b,{style:{textDecoration:"none"},to:"/q/".concat(a.questionid)},m.a.createElement(E.a,{noWrap:!0,className:t.question},a.question))),m.a.createElement(F.a,{key:"".concat(a.questionid,"_username"),item:!0,xs:6},m.a.createElement(E.a,{className:t.user}," ".concat(A()(a.created).fromNow()," "))),m.a.createElement(F.a,{key:"".concat(a.questionid,"_buttons"),item:!0,xs:6},m.a.createElement(w.a,{size:"small"},m.a.createElement(g.a,{color:"primary",variant:"outlined",onClick:function(){e.handleQuestionEdit({question:a})}},"Edit"),m.a.createElement(g.a,{variant:"outlined",onClick:function(){e.handleQuestionDelete(a)},color:"secondary"},"Delete")))),n!==e.state.questions.length-1&&m.a.createElement(I.a,{className:t.dividerClass,key:"".concat(a.questionid,"_divider")}))}))))),0!==this.state.answers.length&&m.a.createElement(F.a,{item:!0,xs:12,sm:6},m.a.createElement(D.a,{className:t.paper},m.a.createElement(E.a,{className:t.title},"ALL ANSWERS"),m.a.createElement("div",{className:t.questionsList},this.state.answers.map((function(a,n){return m.a.createElement("div",{key:"".concat(a.answerid,"_basediv")},m.a.createElement(F.a,{container:!0,key:a.answerid,className:t.grid,direction:"row",justify:"space-between",spacing:1},m.a.createElement(F.a,{key:"".concat(a.answerid,"_answer_answerid"),item:!0,xs:12},m.a.createElement(C.b,{style:{textDecoration:"none"},to:"/q/".concat(a.questionid)},m.a.createElement(E.a,{noWrap:!0,className:t.question},a.answer))),m.a.createElement(F.a,{key:"".concat(a.answerid,"_answer_answer"),item:!0,xs:6},m.a.createElement(E.a,{className:t.user}," ".concat(A()(a.created).fromNow()," "))),m.a.createElement(F.a,{key:"".concat(a.answerid,"_butttons"),item:!0,xs:6},m.a.createElement(w.a,{size:"small"},m.a.createElement(g.a,{color:"primary",variant:"outlined",onClick:function(){e.handleAnswerEdit({answer:a})}},"Edit"),m.a.createElement(g.a,{variant:"outlined",onClick:function(){e.handleAnswerDelete(a)},color:"secondary"},"Delete")))),n!==e.state.answers.length-1&&m.a.createElement(I.a,{className:t.dividerClass,key:"".concat(a.answerid,"_divider_answer")}))})))))),m.a.createElement(te,{showModal:this.state.showEditModal,token:this.state.token,hideModal:function(){return e.hideEditModal()},defaultValue:this.state.defaultValue,editId:this.state.editId,editType:this.state.editType,editTypeLabel:this.state.editTypeLabel}))}}]),a}(d.Component),ne=Object(x.a)((function(e){return{root:{flexGrow:1},title:{fontWeight:800,fontSize:"18px",padding:e.spacing(2),color:"#103070",fontFamily:"Open Sans"},question:{fontFamily:"Open Sans",color:"#103070",fontWeight:"600"},answer:{marginTop:e.spacing(1),fontFamily:"Open Sans",fontWeight:"600"},user:{fontFamily:"Open Sans",fontSize:"80%",color:"#666666",fontWeight:"400"},grid:{padding:e.spacing(3)},questionsList:{border:"1px solid rgba(0,0,0,0.1)",borderRadius:"10px"},dividerClass:{color:"rgba(0,0,0,0.1)"},paper:{marginLeft:e.spacing(1),marginTop:e.spacing(1),marginRight:e.spacing(1),padding:e.spacing(3),textAlign:"left",fontFamily:"Open Sans",whiteSpace:"nowrap"},textfield:{width:"100%"}}}))(ae),re=a(12),se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).verifyToken=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W({body:{token:n.state.token},api:"/u/usertoken"});case 2:(t=e.sent)&&t.tokenValid&&n.setState({isLoggedIn:t.tokenValid,username:t.username});case 4:case"end":return e.stop()}}),e)}))),n.hideModal=function(){n.setState({showLoginModal:!1,showAskQuestionModal:!1,showAnswerModal:!1})},n.showLoginModal=function(){n.setState({showLoginModal:!0})},n.showAskQuestionModal=function(){n.setState({showAskQuestionModal:!0})},n.showAnswerModal=function(){n.setState({showAnswerModal:!0})},n.handleLogout=function(){n.setState({isLoggedIn:!1,username:"FAKE ACCOUNT",token:null}),document.cookie.split(";").forEach((function(e){document.cookie=e.replace(/^ +/,"").replace(/=.*/,"=;expires="+(new Date).toUTCString()+";path=/")}))},n.handleLoginData=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({isLoggedIn:!0,username:t.username,token:t.token,showLoginModal:!1}),n.props.cookies.set("jwt",t.token,{path:"/"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleAddAnswer=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.state.isLoggedIn?n.showAnswerModal():n.showLoginModal();case 1:case"end":return e.stop()}}),e)}))),n.handleNewQuestion=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.state.isLoggedIn?n.showAskQuestionModal():n.showLoginModal();case 1:case"end":return e.stop()}}),e)}))),n.state={token:e.cookies.get("jwt")||null,isLoggedIn:!1,username:"FAKE ACCOUNT",showLoginModal:!1,showAskQuestionModal:!1,showAnswerModal:!1},n.verifyToken=n.verifyToken.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.state.token&&!this.state.isLoggedIn&&this.verifyToken()}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(C.a,null,m.a.createElement(M,{hideModal:function(){e.hideModal()},handleLogout:function(){e.handleLogout()},handleLogin:function(){e.showLoginModal()},userid:this.state.userid,handleNewQuestion:function(){e.handleNewQuestion()},username:this.state.username,isLoggedIn:this.state.isLoggedIn}),m.a.createElement("div",{style:{marginTop:"70px"}},m.a.createElement(re.c,null,m.a.createElement(re.a,{exact:!0,path:"/",render:function(e){return m.a.createElement($,Object.assign({querytype:"a"},e))}}),m.a.createElement(re.a,{exact:!0,path:"/s/q/:query",render:function(e){return m.a.createElement($,Object.assign({querytype:"q"},e))}}),m.a.createElement(re.a,{exact:!0,path:"/s/u/:query",render:function(e){return m.a.createElement($,Object.assign({querytype:"u"},e))}}),m.a.createElement(re.a,{exact:!0,path:"/error",render:function(e){return m.a.createElement(K,e)}}),m.a.createElement(re.a,{exact:!0,path:"/profile",render:function(t){return m.a.createElement(ne,Object.assign({token:e.state.token},t))}}),m.a.createElement(re.a,{path:"/q/:quesid",render:function(t){return m.a.createElement("div",null,m.a.createElement(_,Object.assign({answerQuestion:function(t){e.handleAddAnswer(t)},token:e.state.token},t,{userid:e.state.userid,username:e.state.username,isLoggedIn:e.state.isLoggedIn})),m.a.createElement(X,Object.assign({},t,{hideModal:function(){e.hideModal()},token:e.state.token,showModal:e.state.showAnswerModal})))}})),m.a.createElement(G,{hideModal:function(){e.hideModal()},handleLoginData:function(t){e.handleLoginData(t)},showModal:this.state.showLoginModal}),m.a.createElement(Y,{hideModal:function(){e.hideModal()},token:this.state.token,showModal:this.state.showAskQuestionModal}))))}}]),a}(d.Component),oe=Object(j.a)(se);h.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(oe,null)),document.getElementById("root"))},88:function(e,t,a){e.exports=a(119)}},[[88,1,2]]]);
//# sourceMappingURL=main.6885637d.chunk.js.map