(this.webpackJsonpaio=this.webpackJsonpaio||[]).push([[8],{179:function(e,a){},181:function(e,a){},246:function(e,a,t){"use strict";t.r(a);var l=t(35),n=t(43),c=t(47),o=t(0),s=t.n(o);a.default=function(){var e=Object(o.useState)(["PDF","DOCX","PPT","TXT","HTML"]),a=Object(c.a)(e,2),r=a[0],i=(a[1],Object(o.useState)(["PDF","DOCX"])),m=Object(c.a)(i,2),d=m[0],u=(m[1],Object(o.useState)(!1)),f=Object(c.a)(u,2),p=f[0],v=f[1],E=Object(o.useState)(!1),h=Object(c.a)(E,2),N=h[0],b=h[1],C=Object(o.useState)(null),y=Object(c.a)(C,2),O=y[0],T=y[1],g=Object(o.useState)({from:"",to:""}),w=Object(c.a)(g,2),F=w[0],k=w[1],j=function(e){k(Object(n.a)({},F,Object(l.a)({},e.target.name,e.target.value)))};return s.a.createElement("section",{className:"container"},s.a.createElement("div",{className:"level"},s.a.createElement("div",{className:"level-left"},s.a.createElement("div",{className:"level-item"},s.a.createElement("p",{className:"subtitle is-5"},s.a.createElement("strong",null,"From"))),s.a.createElement("div",{className:"level-item"},s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("div",{className:"select is-rounded"},s.a.createElement("select",{name:"from",onChange:j},s.a.createElement("option",{defaultValue:!0},"Original File Types"),r.map((function(e,a){return s.a.createElement("option",{key:a},e)})))),s.a.createElement("div",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-globe"})))))),s.a.createElement("div",{className:"level-right"},s.a.createElement("div",{className:"level-item"},s.a.createElement("p",{className:"subtitle is-5"},s.a.createElement("strong",null,"To"))),s.a.createElement("div",{className:"field shift"},s.a.createElement("div",{className:"control has-icons-left"},s.a.createElement("div",{className:"select is-rounded"},s.a.createElement("select",{name:"to",onChange:j},s.a.createElement("option",{defaultValue:!0},"New File Types"),d.map((function(e,a){return s.a.createElement("option",{key:a},e)})))),s.a.createElement("div",{className:"icon is-small is-left"},s.a.createElement("i",{className:"fas fa-globe"})))))),s.a.createElement("p",{style:{color:"red"}},"*Under Construction:Txt,html to other work fine,rest are under development*"),s.a.createElement("div",{className:"level is-mobile"},s.a.createElement("div",{className:"level-item has-text-centered"},s.a.createElement("div",{className:"file is-dark has-name is-boxed"},s.a.createElement("label",{className:"file-label"},s.a.createElement("input",{className:"file-input",type:"file",name:"image",accept:"*.docx,*.pdf,*.html,*.txt,*.ppt",onChange:function(e){T(e.target.files[0])}}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Choose a file\u2026")),s.a.createElement("span",{className:"file-name"},null===O?null:O.name))))),s.a.createElement("div",{className:"level has-centered"},p?s.a.createElement("div",{className:"columns level-item has-centered"},s.a.createElement("div",{className:"column is-two-thirds"},s.a.createElement("progress",{className:"progress is-dark",max:"100"},"30%"))):s.a.createElement("div",{className:"level-item has-centered"},s.a.createElement("button",{className:"button is-dark is-rounded",onClick:function(e){if(e.preventDefault(),null!==O)if(O.size>112582912)alert("File Size must be less then 11mb.");else{if(""===F.from)return console.log(F),void alert("'From' file type is not selected!");if(""!==F.to){if(b(!1),v(!0),"PDF"===F.from){if("PDF"===F.to)return alert("To and from type is same"),void v(!1);b(!0),v(!1)}if("DOCX"===F.from){if("DOCX"===F.to)return alert("To and from type is same"),void v(!1);console.log("object")}"HTML"===F.from&&console.log("time"),"TXT"===F.from&&console.log("time"),setTimeout((function(){v(!1),b(!0)}),2e3)}else alert("'To' file type is not selected")}else alert("Please first select file and types")}},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-dice-d20"})),s.a.createElement("span",null,"Convert")))),s.a.createElement("div",{className:"has-centered"},N?s.a.createElement("div",{className:"has-centered"},s.a.createElement("div",{className:"container level-item has-centered"},s.a.createElement("p",null,"Your converted file is ready to download!")),s.a.createElement("br",null),s.a.createElement("div",{className:"container level-item has-centered"},s.a.createElement("button",{className:"button is-dark is-outlined",id:"dl",onClick:function(){"HTML"===F.from&&("DOCX"===F.to&&function(e,a){var t=new FileReader;t.readAsText(e),t.onloadend=function(){var l=t.result,n="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(l+"   <>By AIO </>"),c=document.createElement("a");document.body.appendChild(c),c.href=n,c.download=e.name.split(".")[0]+".doc",c.click(),document.body.removeChild(c),a(!1)}}(O,b),"PDF"===F.to&&function(e,a){var t=new FileReader;t.readAsText(e),t.onloadend=function(){var l=t.result,n="data:application/pdf;charset=utf-8,"+encodeURIComponent(l+"   <>By AIO </>"),c=document.createElement("a");document.body.appendChild(c),c.href=n,c.download=e.name.split(".")[0]+".pdf",c.click(),document.body.removeChild(c),a(!1)}}(O,b)),"TXT"===F.from&&("DOCX"===F.to&&function(e,a){var t=new FileReader;t.readAsText(e),t.onloadend=function(){var l=t.result,n="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(l+"   <>By AIO </>"),c=document.createElement("a");document.body.appendChild(c),c.href=n,c.download=e.name.split(".")[0]+".doc",c.click(),document.body.removeChild(c),a(!1)}}(O,b),"PDF"===F.to&&function(e,a){var t=new FileReader;t.readAsText(e),t.onloadend=function(){var l=t.result,n="data:application/pdf;charset=utf-8,"+encodeURIComponent(l+"   <>By AIO </>"),c=document.createElement("a");document.body.appendChild(c),c.href=n,c.download=e.name.split(".")[0]+".pdf",c.click(),document.body.removeChild(c),a(!1)}}(O,b)),"DOCX"===F.from&&"PDF"===F.to&&function(e,a){var l=t(119),n=new FileReader;n.readAsArrayBuffer(e),n.onloadend=function(){var t=n.result;l.convertToHtml({arrayBuffer:t}).then((function(t){var l=t.value;console.log(l);var n="data:application/pdf;charset=utf-8,"+encodeURIComponent(l),c=document.createElement("a");document.body.appendChild(c),c.href=n,c.download=e.name.split(".")[0]+".pdf",c.click(),document.body.removeChild(c),a(!1)})).done()}}(O,b)}},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-download"}))))):null),s.a.createElement("br",null))}}}]);
//# sourceMappingURL=8.3b8442f4.chunk.js.map