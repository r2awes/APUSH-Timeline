(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t){},161:function(e,t,n){e.exports=n(302)},166:function(e,t,n){},167:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),o=n.n(c),i=(n(166),n(167),n(26)),s=n(27),l=n(29),u=n(28),m=n(30),h=n(309),p=n(52),f=n.n(p),d=n(69),g=function(e){var t=e.title,n=(e.desc,e.link),a=e.real,c=e.type;return a=null==a,r.a.createElement(d.b,{to:"/".concat(c,"/").concat(t)},r.a.createElement("div",{className:"listitem",onClick:function(){return t=e,console.log(t);var t}},a?r.a.createElement("a",{href:n},r.a.createElement("h4",null,t)):r.a.createElement("h4",null,"I don't know about that yet. If you think it should be here, enter it in the issues section of the GitHub page.")))},v=function(e){var t=e.name;return r.a.createElement("div",{className:"listcat"},r.a.createElement("h3",null,t))},E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).rS=function(e,t){var a=t.result;return n.setState({value:a.title,results:[],sel:!0})},n.sC=function(e,t){var a=t.value;n.setState({loading:!0,value:a});var r=n.props.items||w;setTimeout(function(){if(n.state.value.length<1)return n.setState({value:"",results:[],sel:!1,loading:!1});var e=new RegExp(f.a.escapeRegExp(n.state.value),"i"),t=function(t){return e.test(t.title)},a=f.a.reduce(r,function(e,n,a){var r=f.a.filter(n.results,t);return r.length&&(e[a]={name:a,results:r}),e},{});n.setState({isLoading:!1,results:a})},300)},n.state={value:"",results:[],loading:!1,sel:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,n=e.results,a=e.loading,c=e.sel;return r.a.createElement(h.a,Object.assign({category:!0,loading:a,onResultSelect:this.rS,onSearchChange:f.a.debounce(this.sC,500,{leading:!0}),results:""==t?[]:n,value:t,placeholder:"Search something.",noResultsMessage:""==t||c?"":r.a.createElement(g,{real:!1}),resultRenderer:function(e){return r.a.createElement(g,e)},categoryRenderer:function(e){return r.a.createElement(v,e)}},this.props))}}]),t}(a.Component),w={era:{results:[{title:"Jeffersonian",type:"era"},{title:"Jacksonian",type:"era"}]},event:{results:[{title:"Sinking of The USS Maine",type:"event"}]},people:{results:[{title:"Thomas Jefferson",type:"person"},{title:"Theodore Roosevelt",type:"person"}]}},b=n(31),j=n(24),k=n.n(j),x=n(41),y=function(){return r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("iframe",{title:"timeline",src:"https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1qjqWyT3aEzlvm2WvVnvP6sA8W8aPjJuUsYfRGoidpiw&font=Default&lang=en&initial_zoom=2&height=520",width:"100%",height:"520",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,frameborder:"0"}))},O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).get=Object(x.a)(k.a.mark(function e(){var t,a,r,c;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.title,n.setState({title:t}),a=encodeURI(t),r="https://en.wikipedia.org/w/api.php?action=opensearch&search=".concat(a,"&limit=10&origin=*&format=json"),e.next=6,fetch(r).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState({text:e[2][0],link:e[3][0]})}).catch(function(e){return console.log(e)});case 6:return c="https://en.wikipedia.org/w/api.php?action=parse&page=".concat(a,"&format=json&origin=*"),e.next=9,fetch(c).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.parse.sections;n.setState({sections:t})}).catch(function(e){return console.log(e)});case 9:case"end":return e.stop()}},e)})),n.state={title:"",text:"",link:"",sections:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.get()}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.text;e.sections.map(function(e,t){return r.a.createElement("p",{className:"label"},e.line," ")});return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,"Person: ",t),r.a.createElement("p",{className:"article"},n)),r.a.createElement(y,null))}}]),t}(a.Component),S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).get=Object(x.a)(k.a.mark(function e(){var t,a,r,c;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.title,n.setState({title:t}),a=encodeURI(t),r="https://en.wikipedia.org/w/api.php?action=opensearch&search=".concat(a,"&limit=10&origin=*&format=json"),e.next=6,fetch(r).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState({text:e[2][0],link:e[3][0]})}).catch(function(e){return console.log(e)});case 6:return c="https://en.wikipedia.org/w/api.php?action=parse&page=".concat(a,"&format=json&origin=*"),e.next=9,fetch(c).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.parse.sections;n.setState({sections:t})}).catch(function(e){return console.log(e)});case 9:case"end":return e.stop()}},e)})),n.state={title:"",text:"",link:"",sections:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.get()}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.text;e.sections.map(function(e,t){return r.a.createElement("p",{className:"label"},e.line," ")});return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,"Era: ",t),r.a.createElement("p",{className:"article"},n)))}}]),t}(a.Component),N=n(153),R=n.n(N),T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).get=Object(x.a)(k.a.mark(function e(){var t,a,r,c;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.title,n.setState({title:t}),a=encodeURI(t),r="https://en.wikipedia.org/w/api.php?action=opensearch&search=".concat(a,"&limit=10&origin=*&format=json"),e.next=6,fetch(r).then(function(e){return e.json()}).then(function(e){console.log(e),n.setState({text:e[2][0],link:e[3][0]})}).catch(function(e){return console.log(e)});case 6:return c="https://en.wikipedia.org/w/api.php?action=parse&page=".concat(a,"&format=json&origin=*"),e.next=9,fetch(c).then(function(e){return e.json()}).then(function(e){console.log(e);var t=e.parse.sections;n.setState({sections:t})}).catch(function(e){return console.log(e)});case 9:case"end":return e.stop()}},e)})),n.state={title:"",text:"",link:"",sections:[]},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.get()}},{key:"render",value:function(){var e=this.state,t=e.title,n=e.text;e.sections.map(function(e,t){return r.a.createElement("p",{className:"label"},e.line," ")});return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("h4",null,"Event: ",t),r.a.createElement("p",{className:"article"},n)))}}]),t}(a.Component),C=R.a,U=T;var I=function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"APUSH Timeline"),r.a.createElement("p",null,"This is just a little tool to help me study for APUSH."),r.a.createElement("a",{href:"https://github.com/r2awes/APUSH-Timeline"},"Leave some comments on my github page here!"),r.a.createElement("p",null,"Thanks to Wikipedia for some of the inputs."),r.a.createElement(E,null),r.a.createElement("div",{className:"view"},r.a.createElement(b.a,{path:"/person/:title",exact:!0,component:O}),r.a.createElement(b.a,{path:"/era/:title",exact:!0,component:S}),r.a.createElement(b.a,{path:"/event/:title",exact:!0,component:U}),r.a.createElement(b.a,{path:"/help-out",exact:!0,component:C}),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"tagline"},r.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/185/flag-for-united-states_1f1fa-1f1f8.png",alt:"\ud83c\uddfa\ud83c\uddf8"}),r.a.createElement("a",{href:"http://r2awes.github.io"},"Built by Richard McHorgh"),r.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/185/flag-for-jamaica_1f1ef-1f1f2.png",alt:"\ud83c\uddef\ud83c\uddf2"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[161,1,2]]]);
//# sourceMappingURL=main.729092b1.chunk.js.map