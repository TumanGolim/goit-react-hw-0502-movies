"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{106:function(e,t,r){r.r(t);var n=r(861),c=r(439),s=r(757),i=r.n(s),a=r(791),o=r(340),u=r(689),l=r(87),h=r(184),v="6275ff62c216e0d575843f8efbbe5c76";t.default=function(){var e=(0,u.UO)().movieId,t=(0,u.s0)(),r=(0,a.useState)(null),s=(0,c.Z)(r,2),d=s[0],p=s[1],f=(0,a.useState)([]),x=(0,c.Z)(f,2),m=x[0],j=x[1],w=(0,a.useState)([]),k=(0,c.Z)(w,2),b=k[0],g=k[1],Z=(0,a.useState)(null),_=(0,c.Z)(Z,2),y=_[0],C=_[1];(0,a.useEffect)((function(){var t=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(v));case 3:r=t.sent,p(r.data),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie details:",t.t0),p(null);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var S=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(v));case 3:r=t.sent,j(r.data.cast),C("cast"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie cast:",t.t0),j([]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),U=function(){var t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(v));case 3:r=t.sent,g(r.data.results),C("reviews"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching movie reviews:",t.t0),g([]);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();if(!d)return(0,h.jsx)("div",{children:"Loading..."});var E=d.title,R=d.vote_average,M=d.overview,A=d.genres,G=d.release_date,O=d.runtime,D=d.poster_path,H="https://image.tmdb.org/t/p/w500".concat(D);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(l.rU,{to:"/",children:"Home"}),(0,h.jsx)(l.rU,{to:"/movies",children:"Movies"})]}),(0,h.jsx)(l.rU,{to:"/",children:"Go back"}),(0,h.jsx)("h2",{children:E}),(0,h.jsx)("img",{src:H,alt:"".concat(E," Poster")}),(0,h.jsxs)("p",{children:["User Score: ",10*R,"%"]}),(0,h.jsxs)("p",{children:["Overview: ",M]}),(0,h.jsxs)("p",{children:["Genres: ",A.map((function(e){return e.name})).join(", ")]}),(0,h.jsxs)("p",{children:["Release Date: ",G]}),(0,h.jsxs)("p",{children:["Runtime: ",O," minutes"]}),(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsx)("button",{onClick:function(){S(),t("/movies/".concat(e,"/cast"))},children:"Cast"})," ",(0,h.jsx)("br",{}),(0,h.jsx)("button",{onClick:function(){U(),t("/movies/".concat(e,"/reviews"))},children:"Reviews"}),"cast"===y&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Movie Cast"}),(0,h.jsx)("ul",{children:m.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]}),"reviews"===y&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Movie Reviews"}),(0,h.jsx)("ul",{children:b.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("p",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})]})]})}}}]);
//# sourceMappingURL=106.a675c3ba.chunk.js.map