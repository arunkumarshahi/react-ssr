(()=>{"use strict";var e,r={1508:(e,r,t)=>{var n=t(7294),a=t(3935),o=t(4027),s=t(9521);function l(e){var r=e.columns,t=e.data,a=(0,s.useTable)({columns:r,data:t}),o=a.getTableProps,l=a.getTableBodyProps,c=a.headerGroups,u=a.rows,i=a.prepareRow;return n.createElement("table",o(),n.createElement("thead",null,c.map((function(e){return n.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return n.createElement("th",e.getHeaderProps(),e.render("Header"))})))}))),n.createElement("tbody",l(),u.map((function(e,r){return i(e),n.createElement("tr",e.getRowProps(),e.cells.map((function(e){return n.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))}t(6610),t(5991),t(379),t(3724),t(7608),t(9669);function c(){console.log("App.render()");var e=(0,n.useMemo)((function(){return[{Header:"TV Show",columns:[{Header:"Name",accessor:"show.name"},{Header:"Type",accessor:"show.type"}]},{Header:"Details",columns:[{Header:"Language",accessor:"show.language"},{Header:"Genre(s)",accessor:"show.genres"},{Header:"Runtime",accessor:"show.runtime"},{Header:"Status",accessor:"show.status"}]}]}),[]);return n.createElement("div",null,n.createElement(l,{columns:e,data:[{score:17.592657,show:{id:44813,url:"http://www.tvmaze.com/shows/44813/the-snow-spider",name:"The Snow Spider",type:"Scripted",language:"English",genres:["Drama","Fantasy"],status:"In Development",runtime:30,premiered:null,officialSite:null,schedule:{time:"",days:[]}}}]}))}n.Component,a.hydrate(n.createElement(o.VK,null,n.createElement(c,null)),document.getElementById("app"))}},t={};function n(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}};return r[e].call(o.exports,o,o.exports,n),o.exports}n.m=r,e=[],n.O=(r,t,a,o)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,a,o]=e[u],l=!0,c=0;c<t.length;c++)(!1&o||s>=o)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(l=!1,o<s&&(s=o));l&&(e.splice(u--,1),r=a())}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[t,a,o]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={179:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,[s,l,c]=t,u=0;for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var i=c(n);for(r&&r(t);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[s[u]]=0;return n.O(i)},t=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=n.O(void 0,[736],(()=>n(1508)));a=n.O(a)})();
//# sourceMappingURL=main.js.map