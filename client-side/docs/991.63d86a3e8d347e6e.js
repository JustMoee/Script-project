"use strict";(self.webpackChunkscript_project=self.webpackChunkscript_project||[]).push([[991],{1991:(x,a,i)=>{i.r(a),i.d(a,{MainModule:()=>f});var c=i(6895),t=i(4650),g=i(8698),d=i(9646),u=i(7194),s=i(529);let p=(()=>{class n{constructor(e){this.http=e}getLeaderBoard(){return this.http.get(`${u.b}/proggress/leaderboard`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(s.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function l(n,o){if(1&n&&(t.TgZ(0,"tr",2)(1,"td")(2,"div",3)(3,"div",4),t._uU(4,"\u{1f451}"),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.qZA()()(),t.TgZ(7,"td",5),t._uU(8),t.qZA(),t.TgZ(9,"td",6),t._uU(10),t.qZA()()),2&n){const e=o.$implicit;t.xp6(6),t.hij("@",e.username,""),t.xp6(2),t.hij("",e.point," xp"),t.xp6(1),t.ekj("st",1==e.level)("nd",2==e.level)("rd",3==e.level),t.xp6(1),t.hij(" ",e.level," ")}}let m=(()=>{class n{constructor(e){this.mainSrv=e,this.board$=(0,d.of)([]),this.board$=this.mainSrv.getLeaderBoard()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p))},n.\u0275cmp=t.Xpm({type:n,selectors:[["leaderboard"]],decls:17,vars:3,consts:[[1,"board"],["ckass","place",4,"ngFor","ngForOf"],["ckass","place"],[1,"name"],[1,"avatar"],[1,"point"],[1,"level"]],template:function(e,r){1&e&&(t.TgZ(0,"main")(1,"h2"),t._uU(2,"\u0627\u0641\u0636\u0644 \u0627\u0644\u0645\u062a\u0635\u062f\u0631\u064a\u0646"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"\u0627\u0644\u0627\u0641\u0636\u0644 \u0641\u064a \u062c\u0645\u064a\u0639 \u0627\u0644\u0627\u0648\u0642\u0627\u062a"),t.qZA(),t.TgZ(5,"table",0)(6,"thead")(7,"tr")(8,"th"),t._uU(9,"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"\u0627\u0644\u0646\u0642\u0627\u0637"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"\u0627\u0644\u0645\u0631\u0643\u0632"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,l,11,9,"tr",1),t.ALo(16,"async"),t.qZA()()()),2&e&&(t.xp6(15),t.Q6J("ngForOf",t.lcZ(16,1,r.board$)))},dependencies:[c.sg,c.Ov],styles:["main[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:flex;width:95%;max-width:1350px;flex-direction:column;align-items:center;gap:1rem}main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Janna LT,Arial,sans-serif;font-weight:700;--tw-text-opacity: 1;color:rgb(70 177 94 / var(--tw-text-opacity))}@media (min-width: 0){main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px}}@media (min-width: 640px){main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:38px}}@media (min-width: 976px){main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:48px}}main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Janna LT,Arial,sans-serif;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}}@media (min-width: 976px){main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px}}main[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]{width:100%;align-items:center;border-radius:.5rem;--tw-bg-opacity: 1;background-color:rgb(1 22 39 / var(--tw-bg-opacity));padding:3rem 2rem 1.5rem;border-collapse:separate;border-spacing:0 1.2rem}main[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-family:Janna LT,Arial,sans-serif;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){main[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:16px}}@media (min-width: 976px){main[_ngcontent-%COMP%]   .board[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:20px}}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:linear-gradient(180deg,rgba(0,255,57,.15) 0%,rgba(0,255,57,.06) 100%)}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;font-weight:700}@media (min-width: 640px){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:16px}}@media (min-width: 976px){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:20px}}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{display:flex;height:50px;width:50px;align-items:center;justify-content:center;border-radius:9px;--tw-bg-opacity: 1;background-color:rgb(1 22 39 / var(--tw-bg-opacity));font-size:32px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1.5px solid rgba(0,0,0,.5);border-right:none;border-left:none;padding-left:.5rem;padding-right:.5rem;text-align:center}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{border-top-right-radius:16px;border-bottom-right-radius:16px;border-right:1.5px solid rgba(0,0,0,.5)}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-left:1.5px solid rgba(0,0,0,.5);border-top-left-radius:16px;border-bottom-left-radius:16px}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 640px){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{font-size:16px}}@media (min-width: 976px){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]{font-size:20px}}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{font-family:Janna LT,Arial,sans-serif;font-weight:700;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 0){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{font-size:32px}}@media (min-width: 640px){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{font-size:38px}}@media (min-width: 976px){tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]{font-size:48px}}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level.st[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 215 0 / var(--tw-text-opacity))}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level.nd[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(128 128 128 / var(--tw-text-opacity))}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .level.rd[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(205 127 50 / var(--tw-text-opacity))}"]}),n})();function C(n,o){1&n&&(t.TgZ(0,"main")(1,"section")(2,"div",2)(3,"p"),t._uU(4,"\u0645\u0648\u0642\u0639 \u0644\u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0628\u0631\u0645\u062c\u0629"),t.qZA(),t.TgZ(5,"h1"),t._uU(6,"Script Project"),t.qZA(),t.TgZ(7,"h2"),t._uU(8,"\u0628\u0648\u0627\u0628\u062a\u0643 \u0627\u0644\u0623\u0648\u0644\u0649 \u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0628\u0637\u0631\u064a\u0642\u0629 \u062a\u0641\u0627\u0639\u0644\u064a\u0629"),t.qZA(),t._UZ(9,"img",3),t.qZA()(),t._UZ(10,"leaderboard"),t.qZA())}let M=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],decls:3,vars:1,consts:[[3,"template"],["home",""],[1,"content"],["src","../../../assets/images/hero-banner.png"]],template:function(e,r){if(1&e&&(t._UZ(0,"pagelayout",0),t.YNc(1,C,11,0,"ng-template",null,1,t.W1O)),2&e){const h=t.MAs(2);t.Q6J("template",h)}},dependencies:[g.U,m],styles:["main[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:5rem;padding-bottom:2.5rem}section[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:flex;width:95%;max-width:1350px;flex-direction:column;align-items:center;gap:2.5rem;padding-top:2rem;padding-bottom:2rem}section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:50%;list-style-type:none;justify-content:space-between;gap:1rem;font-family:Janna LT,Arial,sans-serif;font-size:1.2rem;font-weight:400;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}@media (min-width: 0){section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:none}}@media (min-width: 640px){section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}}section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;border-radius:.125rem;padding:.5rem 2rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;transition-timing-function:cubic-bezier(0,0,.2,1)}section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{cursor:pointer;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}section[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.active):hover{cursor:pointer;background-color:#ffffff30;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,1,1)}section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1.75rem;--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-family:Janna LT,Arial,sans-serif;font-size:1.2rem;--tw-text-opacity: 1;color:rgb(70 177 94 / var(--tw-text-opacity))}section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Righteous,cursive}@media (min-width: 0){section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}}@media (min-width: 640px){section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem}}@media (min-width: 976px){section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:4rem}}section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Janna LT,Arial,sans-serif}@media (min-width: 0){section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.6rem}}@media (min-width: 640px){section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem}}@media (min-width: 976px){section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem}}section[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto;width:80%}"]}),n})();var O=i(3081),P=i(9132),_=i(5642);let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,O.aw,P.Bz.forChild([{path:"",component:M}]),_.K]}),n})()}}]);