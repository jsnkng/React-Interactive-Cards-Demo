(this["webpackJsonpreact-interactive-cards-demo"]=this["webpackJsonpreact-interactive-cards-demo"]||[]).push([[0],{18:function(e,n,t){e.exports=t(31)},23:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(6),i=t.n(r),c=(t(23),t(2)),l=t(10),d=t(1),s=t(3),u=t(4),p=t.n(u),f=[{id:1,title:"Cooking Pasta with Giada De Laurentiis",instructor:"Giada De Laurentiis",description:"Learn to cook this great pasta from your fave chef",duration:25,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Pasta-Ponza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814646967.jpeg",classType:"on-demand"},{id:2,title:"Cooking Lasagne with Giada",instructor:"Giada De Laurentiis",description:"Learn to cook the best meal on the planet with a legendary Food Network Star",duration:45,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/31/0/italiancooking_lasagna.jpg.rend.hgtvcom.826.620.suffix/1382982573090.jpeg",classType:"on-demand"},{id:3,title:"Grilling Burgers with Bobby",instructor:"Bobby Flay",description:"Grille burgers with this professional grillmaster, Bobby Flay. You won't regret it!",duration:35,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/15/0/FNM060109BobbysBurgers004_burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382538951232.jpeg",classType:"on-demand"},{id:4,title:"Comfort Foods with Ree",description:"Can't go wrong with Ree",instructor:"Ree Drummond",duration:35,featureImage:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/19/0/WU0809_Twice-Baked-Potato-Casserole_s4x3.jpg.rend.hgtvcom.966.773.suffix/1429279262392.jpeg",classType:"live"}];function g(){var e=Object(c.a)(["\n  padding: 0 10px 0 10px;\n  text-align: center;\n  box-sizing: border-box;\n  list-style-type: none;\n"]);return g=function(){return e},e}function m(){var e=Object(c.a)(["\n  margin-top: 0px;\n  height: 100%;\n"]);return m=function(){return e},e}function b(){var e=Object(c.a)(["\n  background-color: #f9f9f9;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 10px 0 15px;\n  box-shadow: 0 0 5px 0 gray;\n"]);return b=function(){return e},e}var h=function(e){var n=e.createClass,t=e.toggleIsHelpOpen;return o.a.createElement(v,null,o.a.createElement(k,null,o.a.createElement(w,null,"ReactJS \u2013 Interactive Cards",o.a.createElement("button",{onClick:n},"+"),o.a.createElement("button",{onClick:t},"?"))))},x=h;h.displayName="NavBar";var v=s.default.header(b()),k=s.default.div(m()),w=s.default.div(g()),E=t(14),y=t.n(E);function _(){var e=Object(c.a)(['\n  position:absolute;\n  width: 90%;\n  height: 80%;\n  background-color: #111111; \n  color: #ffffff;\n  z-index: 40;\n  width: 100vw;\n  height: 100vh;\n  max-height: 1400px;\n  \n  button {\n    background: transparent;\n    background-color: #0a0a0a; \n    border-radius: 2px;\n    border: 1px solid #2f2f2f;\n    display: inline-block;\n    cursor: pointer;\n    color: #ffffff;\n    font-family: "Droid Sans", "Helvetica Neue", sans-serif;\n    font-size: .75em;\n    font-weight: bold;\n    padding: 4px 18px;\n    margin: 0 5px;\n    text-decoration: none;\n  }\n  button:hover {\n    background: linear-gradient(to bottom, #111111 5%, #000000 100%);\n    background-color: #333333;\n  }\n  button:active {\n    position: relative;\n    top: 1px;\n  }\n\n\n  & .container__changeImage_images {\n    display: grid; \n    grid-template-columns: 50% 50%;\n    overflow: scroll;\n  }\n\n  & .container__changeImage_close {\n    position: absolute;\n    top: 8px;\n    right: 3px;\n    padding: 4px 8px;\n  }\n\n  & .container__changeImage_search  {   \n    margin: 0;\n    text-align: left;\n    \n    h2 {    \n      display: block;\n      font-size: 1.25em;\n      font-weight: 200;\n      text-align: left;\n      margin: 10px; \n    }\n    form {\n      background-color: #1f1f1f;\n      padding: 10px  \n      // box-shadow: 3px 3px 2px 3px rgba(0,0,0,.5);\n    }\n    label {\n      display: inline-block;\n      font-size: .75em;\n      font-weight: 200;\n      text-align: left;\n      padding: 5px;\n      margin: 0;\n    }\n    input {  \n      display: inline-block;\n      background-color: #2f2f2f;  \n      color: #ffffff;\n      font-size: 1em;\n      border: 0;\n      border-radius: 5px;\n      padding: 5px;\n      margin: 2px 0 0 0;\n    }\n    select {    \n      background-color: #2f2f2f;  \n      color: #ffffff;\n      font-size: 1em;\n      border: 0;\n      padding: 4px;\n      margin: 2px 0 0 0;\n    }\n  }\n\n  & .container__changeImage_image {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n    width: 100%;\n    min-height: 120px;\n    cursor: pointer;\n  }\n\n\n  & .pagination {\n    margin: 15px 0;\n    padding: 0;\n  }\n  & .pagination ul {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n  }\n\n  & .pagination li {\n    display: inline-block;\n    background-color: #111111;\n    color: #ffffff;\n    font-size: .75em;\n    font-weight: 500;\n    border: 1px solid #2f2f2f;\n    border-radius: 3px;\n    padding: 3px 5px;\n    margin: 3px;\n    cursor: pointer;\n  }\n  @media (min-width: 768px)  {\n\n    width: 90%;\n    height: 80%;\n    box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);\n  \n    \n    & .container__changeImage_images {\n      grid-template-columns: 20% 20% 20% 20% 20%;\n      max-height: 80vh;\n    }\n  }\n\n\n\n']);return _=function(){return e},e}function j(){var e=Object(c.a)(["\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: ",";\n"]);return j=function(){return e},e}var O=function(e){var n=e.editable,t=void 0!==n&&n,r=e.featureImage,i=e.setFeatureImage,c=Object(a.useState)(!1),l=Object(d.a)(c,2),s=l[0],u=l[1],p=Object(a.useState)(""),f=Object(d.a)(p,2),g=f[0],m=f[1],b=Object(a.useState)(0),h=Object(d.a)(b,2),x=h[0],v=h[1],k=Object(a.useState)(10),w=Object(d.a)(k,2),E=w[0],_=w[1],j=Object(a.useState)([]),O=Object(d.a)(j,2),D=O[0],N=O[1],L=Object(a.useState)(0),S=Object(d.a)(L,2),z=S[0],T=S[1];Object(a.useEffect)((function(){g&&B()}),[E,x]);var B=function(){var e=x+1,n="client_id=".concat("cf5f09425d6ea12bc9825551cc6c10d5e344e857f61fe94c620dfd6e8a5aba9f","&query=").concat(g,"&page=").concat(e,"&per_page=").concat(E);fetch("https://api.unsplash.com/search/photos?".concat(n)).then((function(e){return e.json()})).then((function(e){console.log(s),console.log(g),console.log(x),console.log(E),console.log(D),console.log(z),console.log(e),T(e.total_pages),N(e.results)})).catch((function(e){console.log("Error happened during fetching!",e)}))},F=function(){console.log("search"),u(!s)};return o.a.createElement("div",{className:"container__changeImage"},function(e){if("true"===e)return o.a.createElement("button",{onClick:F},"Choose Image")}(t),o.a.createElement(C,{backgroundURL:r,height:"200px"}),o.a.createElement(I,{isOpen:s,onBackgroundClick:F,onEscapeKeydown:F},o.a.createElement("button",{className:"container__changeImage_close",onClick:F},"X"),o.a.createElement("div",{className:"container__changeImage_search"},o.a.createElement("h2",null,"Image Library"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(0),B()}},o.a.createElement("label",null,"Keyword(s)",o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"searchTerm",value:g,onChange:function(e){var n=e.target.value;m(n)}})),o.a.createElement("label",null,"Show",o.a.createElement("br",null),o.a.createElement("select",{onChange:function(e){var n=e.target.value;_(n)}},o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"20"},"20"),o.a.createElement("option",{value:"30"},"30"))),o.a.createElement("button",{type:"submit"},"Search"))),o.a.createElement("div",{className:"container__changeImage_images"},D.map((function(e){return o.a.createElement(C,{height:"100px",key:e.id,backgroundURL:e.urls.thumb,className:"container__changeImage_image",onClick:function(n){i(e.urls.regular),F()}})}))),o.a.createElement(y.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:z/E,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(e){var n=e.selected;v(n)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}),x+1," of ",Math.ceil(z/E)))},C=s.default.div(j(),(function(e){return e.backgroundURL}),(function(e){return e.height})),I=p.a.styled(_()),D=t(15),N=t.n(D);function L(){var e=Object(c.a)(['\n  min-height: 470px;  \n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);\n\n  & .container__changeImage button {\n    position: fixed;\n    width: 150px;\n    top: 150px;\n    left: 50%;\n    margin-left: -75px;\n  }\n\n  & label {\n    display: inline-block;\n    vertical-align: top;\n    padding: 5px;\n    margin: 2px;\n    font-weight: 500;\n    font-size: .8em;\n    text-align: right;\n    width: 75px;\n  }\n  & textarea  {\n    width: 180px;\n    font-size: .85em;\n    border: 1px solid #dddddd;\n    background-color: #fafafa;\n    padding: 3px;\n    margin: 2px;\n  }\n  & input  {\n    width: 180px;\n    font-size: .85em;\n    border: 1px solid #dddddd;\n    background-color: #fafafa;\n    padding: 3px;\n    margin: 2px;\n  } \n  & input[type="radio"]  {\n    display: inline-block;\n    width: 30px;\n    border: 1px solid #cccccc;\n  }\n  & label.form__radioLabelOnDemand {\n    padding: 0;\n    width: 115px;\n  }\n  & label.form__radioLabelLive {\n    padding: 0;\n    width: 65px;\n  }\n  & label.form__inputLabelDuration{\n    padding: 0;\n    width: 100px;\n    & input {\n      margin: 0px;\n      width: 35px;\n    }\n  }\n  & .form__buttons {\n    padding: 15px 0 10px;\n  }\n']);return L=function(){return e},e}function S(){var e=Object(c.a)(["\n  min-height: 470px;\n  background-color: #111111;\n  border: solid 1px #cccccc;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 0px rgba(0,0,0,.05);\n\n  & h2 {\n    display: inline-block;\n    width: 100%;\n    font-weight: 600;\n    font-size: 1.5em;\n    font-weight: 700;\n    padding: 10px 0;\n    margin-top: -50px;\n    background-color: #ffffff;\n  }\n  & h3 {\n    font-weight: 500;\n    font-size: 1.125em;\n    padding: 0px 10px;\n    margin-top: 0px;\n  }\n  & .classInfo {\n    max-width: 85%;\n    margin: 0 auto 20px;\n    background-color: #ffffff;\n  }\n  & .classDescription {\n    font-weight: 400;\n    font-size: .75em;\n    padding: 0 20px;\n    height: 120px;\n    overflow: hidden;\n  }\n  & .classType {\n    float: left;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #ffffff;\n    padding: 2px 10px;\n  }\n  & .classType.live {\n    background-color: #236d14;\n  }\n  & .classType.onDemand {\n    background-color: #ffffff;\n    border-left: 0px;\n    color: #000000;\n  }\n  & .classDuration {\n    width: 30px;\n    height: 27px;\n    float: right;\n    border-radius: 32px;\n    color: #ffffff;\n    font-weight: 500;\n    font-size: .75em;\n    line-height: 1;\n    margin: 0 5px 0 0;\n  }    \n"]);return S=function(){return e},e}function z(){var e=Object(c.a)(["\n  width: 350px;\n  margin: 5px 5px;\n"]);return z=function(){return e},e}var T=function(e){var n=e.content,t=e.deleteClass,r=Object(a.useState)(n.featureImage),i=Object(d.a)(r,2),c=i[0],l=i[1],s=Object(a.useState)(n.title),u=Object(d.a)(s,2),p=u[0],f=u[1],g=Object(a.useState)(n.instructor),m=Object(d.a)(g,2),b=m[0],h=m[1],x=Object(a.useState)(n.description),v=Object(d.a)(x,2),k=v[0],w=v[1],E=Object(a.useState)(n.duration),y=Object(d.a)(E,2),_=y[0],j=y[1],C=Object(a.useState)(n.classType),I=Object(d.a)(C,2),D=I[0],L=I[1],S=Object(a.useState)(!1),z=Object(d.a)(S,2),T=z[0],R=z[1],G=function(e){var n=e.target.value;L(n)};return o.a.createElement(B,null,o.a.createElement(N.a,{isFlipped:T,flipDirection:"horizontal"},o.a.createElement(F,{key:"front",onClick:function(e){R(!T)}},o.a.createElement(O,{editable:"false",featureImage:c,setFeatureImage:l}),o.a.createElement("div",{className:"classInfo"},o.a.createElement("h2",null,p),o.a.createElement("h3",null,b),o.a.createElement("p",{className:"classDescription"},k)),o.a.createElement("div",null,o.a.createElement("span",{className:"live"===D?"classType live":"classType onDemand"},D),o.a.createElement("span",{className:"classDuration"},_," min"))),o.a.createElement(P,{key:"back"},o.a.createElement(O,{editable:"true",featureImage:c,setFeatureImage:l}),o.a.createElement("label",null,"Title: "),o.a.createElement("input",{type:"text",name:"title",value:p,onChange:function(e){var n=e.target.value;f(n)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Instructor:"),o.a.createElement("input",{type:"text",name:"instructor",value:b,onChange:function(e){var n=e.target.value;h(n)}}),o.a.createElement("br",null),o.a.createElement("label",null,"Description:"),o.a.createElement("textarea",{rows:"6",name:"description",value:k,onChange:function(e){var n=e.target.value;w(n)}}),o.a.createElement("br",null),o.a.createElement("label",{className:"form__radioLabelOnDemand"},"On-Demand:",o.a.createElement("input",{type:"radio",value:"on-demand",onChange:G,checked:"on-demand"===D})),o.a.createElement("label",{className:"form__radioLabelLive"},"Live:",o.a.createElement("input",{type:"radio",value:"live",onChange:G,checked:"live"===D})),o.a.createElement("label",{className:"form__inputLabelDuration"},"Duration:",o.a.createElement("input",{type:"number",name:"duration",value:_,onChange:function(e){var n=e.target.value;j(n)}})),o.a.createElement("div",{className:"form__buttons"},o.a.createElement("button",{onClick:function(e){f(p),h(b),w(k),j(_),L(D),R(!1),e.preventDefault()}},"Save"),o.a.createElement("button",{onClick:function(e){return t(e,n.id)}},"Delete")))))},B=s.default.div(z()),F=s.default.div(S()),P=s.default.div(L());function R(){var e=Object(c.a)(["\n  position:absolute;\n  width: 90%;\n  height: auto;\n  max-width: 960px;\n  max-height: 800px;\n  background-color: #333333;\n  color: #ffffff;\n  border-radius: 8px;\n  z-index: 40;\n  box-shadow: 3px 3px 12px 0px rgba(0,0,0,.25);\n  overflow: auto;\n\n  @media (max-width: 414px)  {\n    width: 100vw;\n    height: 100vh;\n    max-height: 1400px;\n    border-radius: 0px !important;\n  }\n  & .container__help_close {\n    position: absolute;\n    top: 15px;\n    right: 13px;\n    padding: 5px 10px;\n  }\n"]);return R=function(){return e},e}function G(){var e=Object(c.a)(["\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 30;\n  background-color: rgba(0,0,0,.5);\n"]);return G=function(){return e},e}function K(){var e=Object(c.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: top;\n  justify-content: center;\n  margin: 20px;\n"]);return K=function(){return e},e}function U(){var e=Object(c.a)(["\n  padding: 45px 0 0 0;\n  text-align: center;\n"]);return U=function(){return e},e}var H=function(){var e=Object(a.useState)(f),n=Object(d.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(!1),c=Object(d.a)(i,2),s=c[0],p=c[1],g=function(){p(!s)},m=function(e,n){if(window.confirm("Are you sure you wish to delete this class?\nClick OK to delete class or Cancel to go back.")){var a=t.findIndex((function(e){return e.id===n}));t.splice(a,1);var o=Object(l.a)(t.reverse());r(o)}e.preventDefault()};return o.a.createElement(J,null,o.a.createElement(x,{createClass:function(){var e=t.reverse().slice(-1).pop().id+1,n=[].concat(Object(l.a)(t),[{id:e,title:"New Class",instructor:"Click on a card to edit it.",description:"Add a title, instructor, and description. Choose a picture. Indicate whether the class is Live or On-Demand and the class duration.",duration:"0",featureImage:"https://via.placeholder.com/500/000000/ffffff/?text=Choose+a+Picture",classType:"Type"}]);r(n)},toggleIsHelpOpen:g}),o.a.createElement(u.ModalProvider,{backgroundComponent:W},o.a.createElement(M,null,t.reverse().map((function(e){return o.a.createElement(T,{key:e.id,content:e,deleteClass:m})}))),o.a.createElement(A,{isOpen:s,onBackgroundClick:g,onEscapeKeydown:g},o.a.createElement("button",{className:"container__help_close",onClick:g},"Close"),o.a.createElement("div",{className:"container__help_body"},o.a.createElement("h2",null,"Help"),o.a.createElement("p",null,'To Create: Click on the "+" button.'),o.a.createElement("p",null,"To Update: Click on any card to edit it's content."),o.a.createElement("p",null,"To Delete: Click on a card and then click the Delete button and confirm.")))))},J=s.default.div(U()),M=s.default.div(K()),W=s.default.div(G()),A=p.a.styled(R());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.d2ba9ca9.chunk.js.map