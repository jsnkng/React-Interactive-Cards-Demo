(this["webpackJsonpreact-interactive-cards-demo"]=this["webpackJsonpreact-interactive-cards-demo"]||[]).push([[0],{18:function(n,e,t){n.exports=t(31)},23:function(n,e,t){},31:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),i=t(6),r=t.n(i),c=(t(23),t(2)),l=t(10),d=t(1),s=t(3),u=t(4),p=t.n(u),f=[{id:1,title:"Cooking Pasta with Giada De Laurentiis",instructor:"Giada De Laurentiis",description:"Learn to cook this great pasta from your fave chef",duration:25,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Pasta-Ponza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814646967.jpeg",classType:"on-demand"},{id:2,title:"Cooking Lasagne with Giada",instructor:"Giada De Laurentiis",description:"Learn to cook the best meal on the planet with a legendary Food Network Star",duration:45,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/31/0/italiancooking_lasagna.jpg.rend.hgtvcom.826.620.suffix/1382982573090.jpeg",classType:"on-demand"},{id:3,title:"Grilling Burgers with Bobby",instructor:"Bobby Flay",description:"Grille burgers with this professional grillmaster, Bobby Flay. You won't regret it!",duration:35,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/15/0/FNM060109BobbysBurgers004_burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382538951232.jpeg",classType:"on-demand"},{id:4,title:"Comfort Foods with Ree",description:"Can't go wrong with Ree",instructor:"Ree Drummond",duration:35,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/19/0/WU0809_Twice-Baked-Potato-Casserole_s4x3.jpg.rend.hgtvcom.966.773.suffix/1429279262392.jpeg",classType:"live"}];function g(){var n=Object(c.a)(["\n  padding: 0 10px 0 10px;\n  text-align: center;\n  box-sizing: border-box;\n  list-style-type: none;\n"]);return g=function(){return n},n}function m(){var n=Object(c.a)(["\n  margin-top: 0px;\n  height: 100%;\n"]);return m=function(){return n},n}function h(){var n=Object(c.a)(["\n  background-color: #f9f9f9;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 0 15px;\n  box-shadow: 0 0 5px 0 gray;\n"]);return h=function(){return n},n}var b=function(n){var e=n.createClass,t=n.toggleIsHelpOpen;return o.a.createElement(v,null,o.a.createElement(w,null,o.a.createElement(k,null,"ReactJS \u2013 Interactive Cards",o.a.createElement("button",{onClick:e},"+"),o.a.createElement("button",{onClick:t},"?"))))},x=b;b.displayName="NavBar";var v=s.default.header(h()),w=s.default.div(m()),k=s.default.div(g()),_=t(14),E=t.n(_);function y(){var n=Object(c.a)(['\n  position:absolute;\n  background-color: #111111; \n  color: #ffffff;\n  z-index: 40;\n  width: 100vw;\n  height: 100vh;\n  max-height: 1400px;\n  \n\n  button {\n    background: transparent;\n    background-color: #0a0a0a; \n    border-radius: 2px;\n    border: 1px solid #2f2f2f;\n    display: inline-block;\n    cursor: pointer;\n    color: #ffffff;\n    font-family: "Droid Sans", "Helvetica Neue", sans-serif;\n    font-size: .75em;\n    font-weight: bold;\n    padding: 4px 18px;\n    margin: 0 5px;\n    text-decoration: none;\n  }\n  button:hover {\n    background: linear-gradient(to bottom, #111111 5%, #000000 100%);\n    background-color: #333333;\n  }\n  button:active {\n    position: relative;\n    top: 1px;\n  }\n\n\n  & .container__changeImage_close {\n    position: absolute;\n    top: 8px;\n    right: 3px;\n    padding: 4px 8px;\n  }\n\n  & .container__changeImage_search  {   \n    margin: 0;\n    text-align: left;\n    \n    h2 {    \n      display: block;\n      font-size: 1.25em;\n      font-weight: 200;\n      text-align: left;\n      margin: 10px; \n    }\n    form {\n      background-color: #1f1f1f;\n      padding: 10px  \n      // box-shadow: 3px 3px 2px 3px rgba(0,0,0,.5);\n    }\n    label {\n      display: inline-block;\n      font-size: .75em;\n      font-weight: 200;\n      text-align: left;\n      padding: 5px;\n      margin: 0;\n    }\n    input {  \n      display: inline-block;\n      background-color: #2f2f2f;  \n      color: #ffffff;\n      font-size: 1em;\n      border: 0;\n      border-radius: 5px;\n      padding: 5px;\n      margin: 2px 0 0 0;\n    }\n    select {    \n      background-color: #2f2f2f;  \n      color: #ffffff;\n      font-size: 1em;\n      border: 0;\n      padding: 4px;\n      margin: 2px 0 0 0;\n    }\n  }\n\n\n  & .container__changeImage_images {\n    display: grid; \n    grid-template-columns: 50% 50%;\n    min-height: 480px;\n    max-height: 480px;\n    overflow: scroll;\n  }\n\n  & .container__changeImage_image {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    width: 100%;\n    min-height: 120px;\n    cursor: pointer;\n  }\n  & .container__changeImage_pagination {\n    position: relative;\n    font-size: .75em;\n    margin: 0 auto;\n    width: 100%;\n  }\n\n  & .pagination {\n    margin: 15px margin;\n    padding: 0;\n  }\n  & .pagination ul {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n  }\n\n  & .pagination li {\n    display: inline-block;\n    background-color: #111111;\n    color: #ffffff;\n    font-weight: 500;\n    border: 1px solid #2f2f2f;\n    border-radius: 3px;\n    padding: 3px 5px;\n    margin: 3px;\n    cursor: pointer;\n  }\n\n  @media (min-width: 415px)  {\n\n    width: 100vw;\n    height: 100vh;\n\n    & .container__changeImage_images {\n      grid-template-columns: 25% 25% 25% 25%;\n      height: 100%;\n      max-height: 480px;\n    }\n  }\n  @media (min-width: 768px)  {\n\n    width: 90vw;\n    height: 90vh;\n    box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);\n  \n    \n    & .container__changeImage_images {\n      grid-template-columns: 25% 25% 25% 25%;\n      height: 100%;\n      max-height: 480px;\n    }\n  }\n\n  @media (min-width: 1200px)  {\n\n    width: 70vw;\n    height: 90vh;\n    box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);\n  \n    \n    & .container__changeImage_images {\n      grid-template-columns: 25% 25% 25% 25%;\n      height: 100%;\n      max-height: 480px;\n    }\n  }\n']);return y=function(){return n},n}function j(){var n=Object(c.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: ",";\n"]);return j=function(){return n},n}var O=function(n){var e=n.editable,t=void 0!==e&&e,i=n.featureImage,r=n.setFeatureImage,c=Object(a.useState)(!1),l=Object(d.a)(c,2),s=l[0],u=l[1],p=Object(a.useState)(""),f=Object(d.a)(p,2),g=f[0],m=f[1],h=Object(a.useState)(0),b=Object(d.a)(h,2),x=b[0],v=b[1],w=Object(a.useState)(16),k=Object(d.a)(w,2),_=k[0],y=(k[1],Object(a.useState)([])),j=Object(d.a)(y,2),O=j[0],D=j[1],N=Object(a.useState)(0),L=Object(d.a)(N,2),z=L[0],S=L[1];Object(a.useEffect)((function(){g&&T()}),[_,x]);var T=function(){var n=x+1,e="client_id=".concat("cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f","&query=").concat(g,"&page=").concat(n,"&per_page=").concat(_);fetch("https://api.unsplash.com/search/photos?".concat(e)).then((function(n){return n.json()})).then((function(n){console.log(s),console.log(g),console.log(x),console.log(_),console.log(O),console.log(z),console.log(n),S(n.total_pages),D(n.results)})).catch((function(n){console.log("Error happened during fetching!",n)}))},B=function(){console.log("search"),u(!s)};return o.a.createElement("div",{className:"container__changeImage"},function(n){if("true"===n)return o.a.createElement("button",{onClick:B},"Choose Image")}(t),o.a.createElement(C,{backgroundURL:i,height:"200px"}),o.a.createElement(I,{isOpen:s,onBackgroundClick:B,onEscapeKeydown:B},o.a.createElement("button",{className:"container__changeImage_close",onClick:B},"X"),o.a.createElement("div",{className:"container__changeImage_search"},o.a.createElement("h2",null,"Image Library"),o.a.createElement("form",{onSubmit:function(n){n.preventDefault(),v(0),T()}},o.a.createElement("label",null,"Keyword(s)",o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"searchTerm",value:g,onChange:function(n){var e=n.target.value;m(e)}})),o.a.createElement("button",{type:"submit"},"Search"))),o.a.createElement("div",{className:"container__changeImage_images"},O.map((function(n){return o.a.createElement(C,{height:"100px",key:n.id,backgroundURL:n.urls.thumb,className:"container__changeImage_image",onClick:function(e){r(n.urls.regular),B()}})}))),o.a.createElement("div",{className:"container__changeImage_pagination"},o.a.createElement(E.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:z/_,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(n){var e=n.selected;v(e)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),z," Images found.",o.a.createElement("br",null),"Page ",x+1," of ",Math.ceil(z/_))))},C=s.default.div(j(),(function(n){return n.backgroundURL}),(function(n){return n.height})),I=p.a.styled(y()),D=t(15),N=t.n(D);function L(){var n=Object(c.a)(['\n  min-height: 470px;  \n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);\n\n  & .container__changeImage button {\n    position: fixed;\n    width: 150px;\n    top: 150px;\n    left: 50%;\n    margin-left: -75px;\n  }\n\n  & label {\n    display: inline-block;\n    vertical-align: top;\n    padding: 5px;\n    margin: 2px;\n    font-weight: 500;\n    font-size: .8em;\n    text-align: right;\n    width: 75px;\n  }\n  & textarea  {\n    width: 180px;\n    font-size: .85em;\n    border: 1px solid #dddddd;\n    background-color: #fafafa;\n    padding: 3px;\n    margin: 2px;\n  }\n  & input  {\n    width: 180px;\n    font-size: .85em;\n    border: 1px solid #dddddd;\n    background-color: #fafafa;\n    padding: 3px;\n    margin: 2px;\n  } \n  & input[type="radio"]  {\n    display: inline-block;\n    width: 30px;\n    border: 1px solid #cccccc;\n  }\n  & label.form__radioLabelOnDemand {\n    padding: 0;\n    width: 115px;\n  }\n  & label.form__radioLabelLive {\n    padding: 0;\n    width: 65px;\n  }\n  & label.form__inputLabelDuration{\n    padding: 0;\n    width: 100px;\n    & input {\n      margin: 0px;\n      width: 35px;\n    }\n  }\n  & .form__buttons {\n    padding: 15px 0 10px;\n  }\n']);return L=function(){return n},n}function z(){var n=Object(c.a)(["\n  min-height: 470px;\n  background-color: #111111;\n  border: solid 1px #cccccc;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);\n\n  & h2 {\n    display: inline-block;\n    width: 100%;\n    font-weight: 600;\n    font-size: 1.5em;\n    font-weight: 700;\n    padding: 10px 0;\n    margin-top: -50px;\n    background-color: #ffffff;\n  }\n  & h3 {\n    font-weight: 500;\n    font-size: 1.125em;\n    padding: 0px 10px;\n    margin-top: 0px;\n  }\n  & .classInfo {\n    max-width: 85%;\n    margin: 0 auto 20px;\n    background-color: #ffffff;\n  }\n  & .classDescription {\n    font-weight: 400;\n    font-size: .75em;\n    padding: 0 20px;\n    height: 120px;\n    overflow: hidden;\n  }\n  & .classType {\n    float: left;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #ffffff;\n    padding: 2px 10px;\n  }\n  & .classType.live {\n    background-color: #236d14;\n  }\n  & .classType.onDemand {\n    background-color: #ffffff;\n    border-left: 0px;\n    color: #000000;\n  }\n  & .classDuration {\n    width: 30px;\n    height: 27px;\n    float: right;\n    border-radius: 32px;\n    color: #ffffff;\n    font-weight: 500;\n    font-size: .75em;\n    line-height: 1;\n    margin: 0 5px 0 0;\n  }    \n"]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n  width: 350px;\n  margin: 5px 5px;\n"]);return S=function(){return n},n}var T=function(n){var e=n.content,t=n.deleteClass,i=Object(a.useState)(e.featureImage),r=Object(d.a)(i,2),c=r[0],l=r[1],s=Object(a.useState)(e.title),u=Object(d.a)(s,2),p=u[0],f=u[1],g=Object(a.useState)(e.instructor),m=Object(d.a)(g,2),h=m[0],b=m[1],x=Object(a.useState)(e.description),v=Object(d.a)(x,2),w=v[0],k=v[1],_=Object(a.useState)(e.duration),E=Object(d.a)(_,2),y=E[0],j=E[1],C=Object(a.useState)(e.classType),I=Object(d.a)(C,2),D=I[0],L=I[1],z=Object(a.useState)(!1),S=Object(d.a)(z,2),T=S[0],R=S[1],G=function(n){var e=n.target.value;L(e)};return o.a.createElement(B,null,o.a.createElement(N.a,{isFlipped:T,flipDirection:"horizontal"},o.a.createElement(F,{key:"front",onClick:function(n){R(!T)}},o.a.createElement(O,{editable:"false",featureImage:c,setFeatureImage:l}),o.a.createElement("div",{className:"classInfo"},o.a.createElement("h2",null,p),o.a.createElement("h3",null,h),o.a.createElement("p",{className:"classDescription"},w)),o.a.createElement("div",null,o.a.createElement("span",{className:"live"===D?"classType live":"classType onDemand"},D),o.a.createElement("span",{className:"classDuration"},y," min"))),o.a.createElement(P,{key:"back"},o.a.createElement(O,{editable:"true",featureImage:c,setFeatureImage:l}),o.a.createElement("label",null,"Title: "),o.a.createElement("input",{type:"text",name:"title",value:p,onChange:function(n){var e=n.target.value;f(e)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Instructor:"),o.a.createElement("input",{type:"text",name:"instructor",value:h,onChange:function(n){var e=n.target.value;b(e)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Description:"),o.a.createElement("textarea",{rows:"6",name:"description",value:w,onChange:function(n){var e=n.target.value;k(e)}}),o.a.createElement("br",null),o.a.createElement("label",{className:"form__radioLabelOnDemand"},"On-Demand:",o.a.createElement("input",{type:"radio",value:"on-demand",onChange:G,checked:"on-demand"===D})),o.a.createElement("label",{className:"form__radioLabelLive"},"Live:",o.a.createElement("input",{type:"radio",value:"live",onChange:G,checked:"live"===D})),o.a.createElement("label",{className:"form__inputLabelDuration"},"Duration:",o.a.createElement("input",{type:"number",name:"duration",value:y,onChange:function(n){var e=n.target.value;j(e)}})),o.a.createElement("div",{className:"form__buttons"},o.a.createElement("button",{onClick:function(n){f(p),b(h),k(w),j(y),L(D),R(!1),n.preventDefault()}},"Save"),o.a.createElement("button",{onClick:function(n){return t(n,e.id)}},"Delete")))))},B=s.default.div(S()),F=s.default.div(z()),P=s.default.div(L());function R(){var n=Object(c.a)(["\n  position:absolute;\n  width: 90%;\n  height: auto;\n  max-width: 960px;\n  max-height: 800px;\n  background-color: #333333;\n  color: #ffffff;\n  border-radius: 8px;\n  z-index: 40;\n  box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);\n  overflow: auto;\n\n  @media (max-width: 414px)  {\n    width: 100vw;\n    height: 100vh;\n    max-height: 1400px;\n    border-radius: 0px !important;\n  }\n  & .container__help_close {\n    position: absolute;\n    top: 15px;\n    right: 13px;\n    padding: 5px 10px;\n  }\n"]);return R=function(){return n},n}function G(){var n=Object(c.a)(["\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0,0,0,.5);\n"]);return G=function(){return n},n}function K(){var n=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: top;\n  justify-content: center;\n  margin: 20px;\n"]);return K=function(){return n},n}function U(){var n=Object(c.a)(["\n  padding: 45px 0 0 0;\n  text-align: center;\n"]);return U=function(){return n},n}var H=function(){var n=Object(a.useState)(f),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(!1),c=Object(d.a)(r,2),s=c[0],p=c[1],g=function(){p(!s)},m=function(n,e){if(window.confirm("Are you sure you wish to delete this class?\nClick OK to delete class or Cancel to go back.")){var a=t.findIndex((function(n){return n.id===e}));t.splice(a,1);var o=Object(l.a)(t.reverse());i(o)}n.preventDefault()};return o.a.createElement(J,null,o.a.createElement(x,{createClass:function(){var n=t.reverse().slice(-1).pop().id+1,e=[].concat(Object(l.a)(t),[{id:n,title:"New Class",instructor:"Click on a card to edit it.",description:"Add a title, instructor, and description. Choose a picture. Indicate whether the class is Live or On-Demand and the class duration.",duration:"0",featureImage:"https://via.placeholder.com/500/000000/ffffff/?text=Choose+a+Picture",classType:"Type"}]);i(e)},toggleIsHelpOpen:g}),o.a.createElement(u.ModalProvider,{backgroundComponent:W},o.a.createElement(M,null,t.reverse().map((function(n){return o.a.createElement(T,{key:n.id,content:n,deleteClass:m})}))),o.a.createElement(A,{isOpen:s,onBackgroundClick:g,onEscapeKeydown:g},o.a.createElement("button",{className:"container__help_close",onClick:g},"Close"),o.a.createElement("div",{className:"container__help_body"},o.a.createElement("h2",null,"Help"),o.a.createElement("p",null,'To Create: Click on the "+" button.'),o.a.createElement("p",null,"To Update: Click on any card to edit it's content."),o.a.createElement("p",null,"To Delete: Click on a card and then click the Delete button and confirm.")))))},J=s.default.div(U()),M=s.default.div(K()),W=s.default.div(G()),A=p.a.styled(R());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.a40b7347.chunk.js.map