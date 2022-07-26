(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/CSC3007-project/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var h=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2447:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23"),n=Object(i["f"])("section",{class:"hero"},[Object(i["f"])("div",{class:"hero-body"},[Object(i["f"])("p",{class:"title"},"SG Car Sales"),Object(i["f"])("p",{class:"subtitle"},"Group 5")])],-1),r={class:"tabs is-centered"},s=Object(i["f"])("a",null,"Yearly Comparison",-1),o=Object(i["f"])("a",null,"Data Exploration",-1),c=Object(i["f"])("a",null,"Percentage Plot",-1),l={class:"container"};function h(t,e,a,h,u,d){var f=Object(i["i"])("BasicPlot"),p=Object(i["i"])("ComparisonPlot"),g=Object(i["i"])("PercentagePlot");return Object(i["g"])(),Object(i["c"])(i["a"],null,[n,Object(i["f"])("div",r,[Object(i["f"])("ul",null,[Object(i["f"])("li",{class:{"is-active":"yearly"===u.activeTab},onClick:e[1]||(e[1]=function(t){return d.set("yearly")})},[s],2),Object(i["f"])("li",{class:{"is-active":"data"===u.activeTab},onClick:e[2]||(e[2]=function(t){return d.set("data")})},[o],2),Object(i["f"])("li",{class:{"is-active":"percentage"===u.activeTab},onClick:e[3]||(e[3]=function(t){return d.set("percentage")})},[c],2)])]),Object(i["f"])("div",l,["data"===u.activeTab?(Object(i["g"])(),Object(i["c"])(f,{key:0})):Object(i["d"])("",!0),"yearly"===u.activeTab?(Object(i["g"])(),Object(i["c"])(p,{key:1})):Object(i["d"])("",!0),"percentage"===u.activeTab?(Object(i["g"])(),Object(i["c"])(g,{key:2})):Object(i["d"])("",!0)])],64)}var u={class:"container"},d={class:"columns"},f=Object(i["f"])("div",{class:"column"},null,-1),p=Object(i["f"])("div",{class:"column is-three-fifths"},[Object(i["f"])("svg")],-1),g={id:"tooltip",class:"column"},b={key:0,class:"card-content"},v=Object(i["f"])("br",null,null,-1);function m(t,e,a,n,r,s){return Object(i["g"])(),Object(i["c"])("div",u,[Object(i["f"])("div",d,[f,p,Object(i["f"])("div",g,[0!=r.properties.Count?(Object(i["g"])(),Object(i["c"])("div",b,[Object(i["e"])(Object(i["j"])(r.properties.Brand)+" ",1),v,Object(i["e"])(" Count: "+Object(i["j"])(r.properties.Count),1)])):Object(i["d"])("",!0)])])])}a("d81d"),a("d3b7"),a("3ca3"),a("ddb0");var j=a("898b"),y={name:"BasicPlot",data:function(){return{salesData:null,selectedData:null,path:null,properties:{Count:0},colors:["#002051","#1e3e6e","#565c6e","#7f7b75"],colorIndex:0,margin:{top:30,right:30,bottom:70,left:60},width:1e3,height:640,animation_duration:500,title:[],defaultTitle:"Overall",svg:null,x:null,x_axis:null,x_svg:null,y:null,y_axis:null,y_svg:null}},watch:{salesData:function(){this.setup(),this.selectedData=this.salesData},selectedData:function(){this.plotSelectedData()}},methods:{setup:function(){j["h"]("svg > *").remove(),this.svg=j["g"]("svg").attr("viewBox","0 0 "+this.width+" "+this.height).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.width-=this.margin.left+this.margin.right,this.height-=this.margin.top+this.margin.bottom,this.x=j["e"](),this.x_axis=j["a"](this.x),this.x_svg=this.svg.append("g"),this.y=j["f"](),this.y_axis=j["b"](this.y),this.y_svg=this.svg.append("g")},removeButtons:function(){this.svg.selectAll(".button").transition("shrink").duration(this.animation_duration).attr("opacity",0).transition("remove").remove()},makeBarsZeroAndDestroy:function(){this.svg.selectAll(".bar").transition("shrink").duration(this.animation_duration).attr("y",this.y(0)).attr("height",this.height-this.y(0)).transition("remove").remove()},navigateToPath:function(){if(this.makeBarsZeroAndDestroy(),"root"===this.path)this.removeButtons(),this.selectedData=this.salesData,this.path=null;else{for(var t,e,a=this.salesData,i=0;i<this.path.length;i++){t=this.path[i];for(var n=0;n<a.length;n++)if(a[n].Brand===t){e=a[n].MakeUp["path"],a=a[n].MakeUp.data;break}}this.selectedData=a,this.path=e}},plotSelectedData:function(){var t=this;this.x.range([0,this.width]).domain(this.selectedData.map((function(t){return t.Brand}))).padding(.05),this.x_svg.attr("transform","translate(0,"+this.height+")").transition().duration(this.animation_duration).call(this.x_axis),this.y.domain([0,j["d"](this.selectedData,(function(t){return 1.1*t.Count}))]).range([this.height,0]),this.y_svg.transition().duration(this.animation_duration).call(this.y_axis),this.svg.selectAll("bars").data(this.selectedData).enter().append("rect").attr("class","bar").attr("x",(function(e){return t.x(e.Brand)})).attr("y",this.y(0)).attr("width",this.x.bandwidth()).attr("height",this.height-this.y(0)).attr("fill",this.colors[this.colorIndex]).on("mouseover",(function(e,a){j["g"](e.target).transition().duration("50").attr("opacity","0.9"),"MakeUp"in a&&j["g"](e.target).attr("cursor","pointer"),t.properties.Count=a.Count,t.properties.Brand=a.Brand})).on("mouseout",(function(e){j["g"](e.target).transition().duration("50").attr("opacity","1"),t.properties={Count:""}})).on("click",(function(e,a){"MakeUp"in a&&(t.path=a.MakeUp.path,t.title.push(a.Brand),t.properties={Count:""},t.makeBarsZeroAndDestroy(),t.colorIndex++,j["g"](e.target).on("mouseover",(function(t){j["g"](t.target).transition().duration("50").attr("opacity","0.9").style("cursor","pointer")})).on("mouseout",null).on("click",(function(e,a){console.log(a),j["g"](e.target).attr("class","bar"),t.colorIndex--,t.title.pop(),t.navigateToPath()})).attr("opacity",1).transition("shrink").duration(t.animation_duration).attr("height",.2*t.height).attr("y",1.05*t.height).transition("stretch").attr("width",t.width).attr("x",0).attr("class","button"),setTimeout((function(){t.selectedData=a.MakeUp.data}),1.5*t.animation_duration))})).transition("grow").duration(this.animation_duration).attr("y",(function(e){return t.y(e.Count)})).attr("height",(function(e){return t.height-t.y(e.Count)}))}},mounted:function(){var t=this;Promise.all([j["c"]("https://raw.githubusercontent.com/qg25/CSC3007-project/master/dataset.json")]).then((function(e){t.salesData=e[0]}))}};a("b91c");y.render=m;var O=y,x={class:"container"},D={class:"columns"},_={class:"column"},k={class:"checkbox"},C=Object(i["f"])("br",null,null,-1),B=Object(i["f"])("div",{class:"column is-three-fifths"},[Object(i["f"])("svg")],-1),w={id:"tooltip",class:"column"},S={key:0,class:"card-content"},P=Object(i["f"])("br",null,null,-1);function M(t,e,a,n,r,s){return Object(i["g"])(),Object(i["c"])("div",x,[Object(i["f"])("div",D,[Object(i["f"])("div",_,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(r.years,(function(t){return Object(i["g"])(),Object(i["c"])("div",{class:"block",key:t},[Object(i["f"])("label",k,[Object(i["f"])("input",{type:"checkbox",onClick:function(e){return s.toggle(t,e)}},null,8,["onClick"]),Object(i["e"])(" "+Object(i["j"])(t),1)]),Object(i["f"])("div",{class:"card",style:{"background-color":s.getColor(t)}},[C],4)])})),128))]),B,Object(i["f"])("div",w,[0!=r.properties.Count?(Object(i["g"])(),Object(i["c"])("div",S,[Object(i["e"])(Object(i["j"])(r.properties.Brand)+" ",1),P,Object(i["e"])(" Count: "+Object(i["j"])(r.properties.Count),1)])):Object(i["d"])("",!0)])])])}a("4de4");var T=a("b85c"),A={name:"App",data:function(){return{years:[],salesData:null,selectedData:[],properties:{Count:0},colors:["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b"],colorIndex:0,margin:{top:30,right:30,bottom:70,left:60},width:1e3,height:640,animation_duration:500,title:[],defaultTitle:"Overall",svg:null,x:null,x_axis:null,x_svg:null,y:null,y_axis:null,y_svg:null}},watch:{salesData:function(){this.setup(),this.plotSelectedData()}},methods:{toggle:function(t,e){if(e.target.checked){var a,i=Object(T["a"])(this.salesData);try{for(i.s();!(a=i.n()).done;){var n=a.value;if(n.Brand===t){var r,s=Object(T["a"])(n.MakeUp.data);try{for(s.s();!(r=s.n()).done;){var o=r.value;this.selectedData.push({Date:new Date(t+" "+o.Brand),Year:t,Brand:o.Brand+" ("+t+")",Count:o.Count})}}catch(c){s.e(c)}finally{s.f()}}}}catch(c){i.e(c)}finally{i.f()}}else this.selectedData=this.selectedData.filter((function(e){return e.Year!==t}));this.selectedData.sort((function(t,e){return t.Date-e.Date})),this.plotSelectedData()},getColor:function(t){return this.colors[t-2017]},setup:function(){var t=this;this.salesData.map((function(e){return t.years.push(e.Brand)})),this.svg=j["g"]("svg").attr("viewBox","0 0 "+this.width+" "+this.height).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.width-=this.margin.left+this.margin.right,this.height-=this.margin.top+this.margin.bottom,this.x=j["e"](),this.x_axis=j["a"](this.x).tickFormat(" "),this.x_svg=this.svg.append("g"),this.y=j["f"](),this.y_axis=j["b"](this.y),this.y_svg=this.svg.append("g")},makeBarsZeroAndDestroy:function(){this.svg.selectAll(".bar").transition("shrink").duration(this.animation_duration).attr("y",this.y(0)).attr("height",this.height-this.y(0)).transition("remove").remove()},plotSelectedData:function(){var t=this;this.makeBarsZeroAndDestroy(),this.x.range([0,this.width]).domain(this.selectedData.map((function(t){return t.Brand}))).padding(.05),this.x_svg.attr("transform","translate(0,"+this.height+")").transition().duration(this.animation_duration).call(this.x_axis),this.y.domain([0,j["d"](this.selectedData,(function(t){return 1.1*t.Count}))]).range([this.height,0]),this.y_svg.transition().duration(this.animation_duration).call(this.y_axis),this.svg.selectAll("bars").data(this.selectedData).enter().append("rect").attr("class","bar").attr("x",(function(e){return t.x(e.Brand)})).attr("y",this.y(0)).attr("width",this.x.bandwidth()).attr("height",this.height-this.y(0)).attr("fill",(function(e){return t.getColor(e.Year)})).on("mouseover",(function(e,a){j["g"](e.target).transition().duration("50").attr("opacity","0.9"),t.properties.Count=a.Count,t.properties.Brand=a.Brand})).on("mouseout",(function(e){j["g"](e.target).transition().duration("50").attr("opacity","1"),t.properties={Count:""}})).transition("grow").duration(this.animation_duration).attr("y",(function(e){return t.y(e.Count)})).attr("height",(function(e){return t.height-t.y(e.Count)}))}},mounted:function(){var t=this;Promise.all([j["c"]("https://raw.githubusercontent.com/qg25/CSC3007-project/master/dataset.json")]).then((function(e){t.salesData=e[0]}))}};a("c164");A.render=M;var I=A,Y={class:"container"},U={class:"columns"},Z={class:"column"},q={class:"checkbox"},F=Object(i["f"])("div",{class:"column is-three-fifths"},[Object(i["f"])("svg")],-1),G={id:"tooltip",class:"column"},J={key:0,class:"card-content"},E=Object(i["f"])("br",null,null,-1),z=Object(i["f"])("br",null,null,-1),H=Object(i["f"])("br",null,null,-1);function K(t,e,a,n,r,s){return Object(i["g"])(),Object(i["c"])("div",Y,[Object(i["f"])("div",U,[Object(i["f"])("div",Z,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(r.years,(function(t){return Object(i["g"])(),Object(i["c"])("div",{class:"block",key:t},[Object(i["f"])("label",q,[Object(i["f"])("input",{type:"checkbox",onClick:function(e){return s.toggle(t,e)}},null,8,["onClick"]),Object(i["e"])(" "+Object(i["j"])(t),1)])])})),128))]),F,Object(i["f"])("div",G,[0!=r.properties.Share?(Object(i["g"])(),Object(i["c"])("div",J,[Object(i["e"])(" Year: "+Object(i["j"])(r.properties.Year)+" ",1),E,Object(i["e"])(" Month: "+Object(i["j"])(r.properties.Month)+" ",1),z,Object(i["e"])(" Make: "+Object(i["j"])(r.properties.Brand)+" ",1),H,Object(i["e"])(" Monthly Sales Share: "+Object(i["j"])(r.properties.Share)+"% ",1)])):Object(i["d"])("",!0)])])])}var L={name:"App",data:function(){return{years:[],salesData:null,selectedData:[],properties:{Share:0},colors:["#3366cc","#dc3912","#ff9900","#109618","#990099","#0099c6","#dd4477","#66aa00","#b82e2e","#316395","#994499","#22aa99","#aaaa11","#6633cc","#e67300","#8b0707","#651067","#329262","#5574a6","#3b3eac"],colorIndex:0,colorPair:{},margin:{top:30,right:30,bottom:70,left:60},width:1e3,height:640,animation_duration:500,title:[],defaultTitle:"Overall",svg:null,x:null,x_axis:null,x_svg:null,y:null,y_axis:null,y_svg:null}},watch:{salesData:function(){this.setup(),this.plotSelectedData()}},methods:{toggle:function(t,e){if(e.target.checked){var a,i=Object(T["a"])(this.salesData);try{for(i.s();!(a=i.n()).done;){var n=a.value;if(n.Brand===t){var r,s=Object(T["a"])(n.MakeUp.data);try{for(s.s();!(r=s.n()).done;){var o,c=r.value,l=Object(T["a"])(c.MakeUp.data.sort((function(t,e){return t.Brand.localeCompare(e.Brand)})).reverse());try{for(l.s();!(o=l.n()).done;){var h=o.value;this.selectedData.push({Date:new Date(t+" "+c.Brand),Year:t,Month:c.Brand,Identifier:t+" "+c.Brand,Brand:h.Brand,Share:h.Share})}}catch(u){l.e(u)}finally{l.f()}}}catch(u){s.e(u)}finally{s.f()}}}}catch(u){i.e(u)}finally{i.f()}}else this.selectedData=this.selectedData.filter((function(e){return e.Year!==t}));this.selectedData.sort((function(t,e){return t.Date-e.Date})),this.plotSelectedData()},setup:function(){var t=this;this.salesData.map((function(e){return t.years.push(e.Brand)})),this.svg=j["g"]("svg").attr("viewBox","0 0 "+this.width+" "+this.height).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")"),this.width-=this.margin.left+this.margin.right,this.height-=this.margin.top+this.margin.bottom,this.x=j["e"](),this.x_axis=j["a"](this.x).tickFormat(" "),this.x_svg=this.svg.append("g"),this.y=j["f"]().domain([0,100]).range([this.height,0]),this.y_axis=j["b"](this.y),this.y_svg=this.svg.append("g")},moveBars:function(){this.svg.selectAll(".bar").transition("shrink").duration(this.animation_duration).attr("opacity",0).transition().remove()},getColor:function(t){return t in this.colorPair||(this.colorPair[t]=this.colors[this.colorIndex],this.colorIndex++),this.colorPair[t]},plotSelectedData:function(){var t=this;this.x.range([0,this.width]).domain(this.selectedData.map((function(t){return t.Identifier}))),this.x_svg.attr("transform","translate(0,"+this.height+")").transition().duration(this.animation_duration).call(this.x_axis),this.moveBars(),this.y_svg.transition().duration(this.animation_duration).call(this.y_axis);var e=0,a=0;this.svg.selectAll("bars").data(this.selectedData).enter().append("rect").attr("class","bar").attr("x",(function(e){return t.x(e.Identifier)})).attr("width",this.x.bandwidth()).attr("y",(function(i){var n=t.y(i.Share+e);return e+=i.Share,a++,10===a&&(e=0,a=0),n})).attr("height",(function(e){return t.height-t.y(e.Share)})).attr("opacity",0).attr("fill",(function(e){return t.getColor(e.Brand)})).on("mouseover",(function(e,a){j["g"](e.target).transition().duration("50").attr("opacity","0.9"),t.properties.Year=a.Year,t.properties.Month=a.Month,t.properties.Share=a.Share,t.properties.Brand=a.Brand})).on("mouseout",(function(e){j["g"](e.target).transition().duration("50").attr("opacity","1"),t.properties={Share:""}})).transition("grow").duration(this.animation_duration).attr("opacity",1)}},mounted:function(){var t=this;Promise.all([j["c"]("https://raw.githubusercontent.com/qg25/CSC3007-project/master/dataset.json")]).then((function(e){t.salesData=e[0]}))}};a("c0c0");L.render=K;var N=L,Q={name:"App",components:{BasicPlot:O,ComparisonPlot:I,PercentagePlot:N},data:function(){return{activeTab:"data"}},methods:{set:function(t){this.activeTab=t}}};a("64be");Q.render=h;var R=Q;Object(i["b"])(R).mount("#app")},"64be":function(t,e,a){"use strict";a("c894")},"9adc":function(t,e,a){},b91c:function(t,e,a){"use strict";a("9adc")},c0c0:function(t,e,a){"use strict";a("2447")},c164:function(t,e,a){"use strict";a("c2b8")},c2b8:function(t,e,a){},c894:function(t,e,a){}});
//# sourceMappingURL=app.554e9698.js.map