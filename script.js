(()=>{var t={916:()=>{const t=document.getElementById("splash-page"),e=document.getElementById("countdown-page"),n=document.getElementById("game-page"),r=document.getElementById("score-page"),o=document.getElementById("error-page"),i=document.querySelector(".navigation"),u=document.querySelector(".countdown__caption"),s=document.querySelector(".error__caption"),a=document.querySelector(".quiz"),c=document.querySelector(".questions"),l=document.querySelectorAll(".input-box"),d=document.querySelector(".btn--start"),m=document.querySelector(".btn-quiz-box"),h=document.querySelector(".btn--wrong"),f=document.querySelector(".btn--right"),g=document.querySelector(".btn--play-again"),S=document.querySelector(".table-score__item--final-time > td"),y=document.querySelector(".table-score__item--base-time > td"),p=document.querySelector(".table-score__item--penalty-time > td");let w=null,q={isPageSplashShow:!0,isPageCountdownShow:!1,isPageGameShow:!1,isPageScoreShow:!1,isPageErrorShow:!1,isBtnsQuizShow:!1,isBtnStartShow:!0,isBtnPlayAgainShow:!1,isBtnStartPush:!1,isChoiceMade:!1,isQuestionEnd:!1,markedValue:null,countdownValue:3,scrollPosition:0,scrollToEnd:0,scrollStep:null,activeQuestion:1,equationsArray:null,equationsRight:0,equationsWrong:0,guessArray:null,questionAmount:0,quizPenalty:1500,quizResult:{},timeQuizStep:10,timeQuiz:0,timeQuizFinal:0,timeQuizPenalty:0,timeQuizFormatted:null,timeQuizFinalFormatted:null,timeQuizPenaltyFormatted:null};const z={...q},v=(t,e)=>function(){return e(t(...arguments))};function P(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(v)}class E extends Error{constructor(t){super(t),this.name="ErrorCustom",this._fromFunction=null}get fromFunction(){if(null!==this._fromFunction)return this._fromFunction;const t=this.stack.indexOf(" at ",0),e=this.stack.indexOf("(",t),n=this.stack.slice(t,e).trim();return this._fromFunction=n,this._fromFunction}}function _(t){return JSON.parse(JSON.stringify(t))}function Q(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=t-.5+Math.random()*(e-t+1);return Math.round(n)}function b(){const t=Q(0,9),e=Q(0,9);return{value:`${t} <span>x</span> ${e} <span>=</span> ${t*e}`,evaluated:!0}}function $(){const t=Q(0,9),e=Q(0,9),n=t*e,r=[`${t+1} <span>x</span> ${e} <span>=</span> ${n}`,`${t} <span>x</span> ${e+1} <span>=</span> ${n}`,`${t} <span>x</span> ${e} <span>=</span> ${n+1}`];return{value:r[Q(0,r.length-1)],evaluated:!1}}function A(t,e){const n=[];for(let r=0;r<t;r++)n.push(e());return n}function x(t){const e=t%1e3;let n=Math.floor(t/1e3),r=Math.floor(n/60),o=Math.floor(r/60);return n=n>=60?n%60:n,r=r>=60?r%60:r,{ms:e,sec:n,min:r,hr:o}}function F(t){return`${t.hr}h : ${t.min}m : ${t.sec}s : ${t.ms}ms`}function B(t){const e=t.hr||null,n=t.min||null,r=t.sec||null,o=t.ms||null;let i="0";return e?i=`${t.hr}h:${t.min}m:${t.sec}s:${t.ms}ms`:n?i=`${t.min}m:${t.sec}s:${t.ms}ms`:r?i=`${t.sec}s:${t.ms}ms`:o&&(i=`${t.ms}ms`),i}function C(t){return JSON.parse(localStorage.getItem(t))}function L(t){const e=t.markedValue.querySelector("input").id;return t.markedValue=e,_(t)}function M(t){return l.forEach((t=>t.classList.remove("input-box--active"))),t.isChoiceMade=!1,_(t)}function k(t){return document.getElementById(`${t.markedValue}`).parentElement.classList.add("input-box--active"),t.isChoiceMade=!0,_(t)}function O(t){const e=Number(t.markedValue.split("-")[1]);return t.questionAmount=e,_(t)}function G(t){const e=Q(1,t.questionAmount),n=t.questionAmount-e;return t.equationsRight=e,t.equationsWrong=n,_(t)}function V(t){const e=[...A(t.equationsRight,b),...A(t.equationsWrong,$)];return t.equationsArray=e,_(t)}function I(t){const e=function(t){const e=[...t];let n,r=e.length;for(;0!=r;)n=Math.floor(Math.random()*r),r-=1,[e[r],e[n]]=[e[n],e[r]];return e}(t.equationsArray);return t.shuffleArray=e,_(t)}function R(t){return d.disabled=!1,d.focus(),t.isBtnStartPush=!1,_(t)}function T(t){return d.disabled=!0,t.isBtnStartPush=!0,_(t)}function j(e){return t.hidden=!1,e.isPageSplashShow=!0,_(e)}function H(e){return t.hidden=!0,e.isPageSplashShow=!1,_(e)}function N(t){return e.hidden=!1,t.isPageCountdownShow=!0,_(t)}function J(t){return e.hidden=!0,t.isPageCountdownShow=!1,_(t)}function W(t){return n.hidden=!1,t.isPageGameShow=!0,_(t)}function D(t){return n.hidden=!0,t.isPageGameShow=!1,_(t)}function K(t){return r.hidden=!1,t.isPageScoreShow=!0,_(t)}function U(t){return r.hidden=!0,t.isPageScoreShow=!1,_(t)}function X(t){return o.hidden=!1,t.isPageErrorShow=!0,_(t)}function Y(t){return o.hidden=!0,t.isPageErrorShow=!1,_(t)}function Z(t){return d.hidden=!1,t.isBtnStartShow=!0,_(t)}function tt(t){return d.hidden=!0,t.isBtnStartShow=!1,_(t)}function et(t){return m.classList.add("btn-quiz-box--active"),t.isBtnsQuizShow=!0,_(t)}function nt(t){return m.classList.remove("btn-quiz-box--active"),t.isBtnsQuizShow=!1,_(t)}function rt(t){return g.hidden=!1,g.focus(),t.isBtnPlayAgainShow=!0,_(t)}function ot(t){return g.hidden=!0,t.isBtnPlayAgainShow=!1,_(t)}function it(t){return new Promise((e=>{let n=t.timeQuiz;const r=t.timeQuizStep,o=setInterval((()=>{q.isQuestionEnd?(clearInterval(o),e(n)):n+=r}),r)})).then((t=>function(t){try{P(ht,ft,mt,D,gt,nt,K,yt,St,rt,pt)(Object.assign({},q,{timeQuiz:t}))}catch(t){throw new E("Error stop time quiz")}}(t))).catch((t=>vt(t))),_(t)}function ut(t){return u.textContent=t.countdownValue,new Promise((e=>{let n=t.countdownValue;!function t(){-1!==n?setTimeout((function(){n-=1,u.textContent=n,t()}),1e3):e(n)}()})).then((()=>{!function(){try{if(function(t){return 0!==t.countdownValue}(q))return;P(J,tt,st,W,at,et,it,pt)(_(q))}catch(t){throw new E("Error run quiz")}}()})).catch((t=>vt(t))),t.countdownValue=0,_(t)}function st(t){a.innerHTML="";const e=document.createElement("div");return t.equationsArray.forEach(((t,n)=>{const r=document.createElement("p");r.classList.add("quiz__item"),0===n&&r.classList.add("quiz__item--active"),r.insertAdjacentHTML("beforeend",t.value),e.appendChild(r)})),a.appendChild(e),_(t)}function at(t){const e=document.querySelector(".quiz__item").clientHeight+20,n=i.scrollHeight-i.clientHeight;return t.scrollToEnd=n,t.scrollStep=e,_(t)}function ct(t){let e=t.scrollPosition;return t.scrollPosition<t.scrollToEnd?e+=t.scrollStep:e=t.scrollToEnd,i.scroll({top:e,left:0,behavior:"smooth"}),t.scrollPosition=e,_(t)}function lt(t,e){const n=t.guessArray?[...t.guessArray]:[];return n.push(e),t.guessArray=n,_(t)}function dt(t){let e=t.activeQuestion;const n=document.querySelector(".quiz__item--active"),r=document.querySelector(".quiz__item--active + .quiz__item");return e===t.questionAmount?(e=null,t.isQuestionEnd=!0,n.classList.remove("quiz__item--active")):(e+=1,n.classList.remove("quiz__item--active"),r.classList.add("quiz__item--active")),t.activeQuestion=e,_(t)}function mt(t){const e=t.timeQuiz,n=t.timeQuizFinal,r=t.timeQuizPenalty,o=x(e),i=x(n),u=x(r);return t.timeQuizFormatted=o,t.timeQuizFinalFormatted=i,t.timeQuizPenaltyFormatted=u,_(t)}function ht(t){let e=0,n=0;return t.equationsArray.forEach(((r,o)=>{r.evaluated===t.guessArray[o]?n+=1:e+=1})),t.quizResult.wrongGuess=e,t.quizResult.rightGuess=n,_(t)}function ft(t){const e=t.quizPenalty,n=t.quizResult.wrongGuess*e,r=t.timeQuiz+n;return t.timeQuizFinal=r,t.timeQuizPenalty=n,_(t)}function gt(t){return S.textContent=F(t.timeQuizFinalFormatted),y.textContent=F(t.timeQuizFormatted),p.textContent=F(t.timeQuizPenaltyFormatted),_(t)}function St(t){let e=C("MathSprintGame")||null;if(e)for(let t in e){const n=`label[for="value-${t}"] .best-score__value`,r=document.querySelector(n),o=B(x(e[t]));r.textContent=o}return _(t)}function yt(t){let e=C("MathSprintGame")||null,n={};const r=String(t.questionAmount),o=t.timeQuizFinal;let i=null;var u;return e&&e[r]&&(i=e[r]),i&&i>o?(e[r]=o,n={...e}):n={[r]:t.timeQuizFinal,...e},"MathSprintGame",u=n,localStorage.setItem("MathSprintGame",JSON.stringify(u)),_(t)}function pt(t){return q=t,_(t)}function wt(t,e){return w=e,console.log(`Error ${String.fromCodePoint(9940)}\n\n    ${String.fromCodePoint(128030)} ${w.message}\n    ${String.fromCodePoint(127873)} ${w.fromFunction}\n    `),console.dir(w),_(t)}function qt(t){return s.textContent=w.message,_(t)}function zt(t){try{if(!0===q.isQuestionEnd)return;if(!1===q.isPageGameShow)return;P(lt,ct,dt,pt)(_(q),t)}catch(t){throw new E("Error push buttons quiz")}}function vt(t){P(wt,H,J,D,U,tt,nt,qt,X,rt,pt)(Object.assign({},q,{isBtnPlayAgainShow:!0}),t)}c.addEventListener("click",(t=>{try{!function(t){try{if(function(t){return!t.target.classList.contains("input-box")}(t))return;P(L,M,k,O,G,V,I,R,pt)(Object.assign({},q,{markedValue:t.target}))}catch(t){throw new E("Error preparing data for the game")}}(t)}catch(t){vt(t)}})),d.addEventListener("click",(()=>{try{!function(){try{if(!1===q.isChoiceMade)return;if(!0===q.isBtnStartPush)return;P(T,H,N,ut,pt)(_(q))}catch(t){throw new E("Error countdown timer")}}()}catch(t){vt(t)}})),h.addEventListener("click",(()=>{try{zt(!1)}catch(t){vt(t)}})),f.addEventListener("click",(()=>{try{zt(!0)}catch(t){vt(t)}})),window.addEventListener("keydown",(t=>{try{switch(t.key){case"ArrowLeft":case"w":zt(!1);break;case"ArrowRight":case"r":zt(!0)}}catch(t){vt(t)}})),g.addEventListener("click",(()=>{try{!function(){try{if(!1===q.isBtnPlayAgainShow)return;P(Y,ot,U,M,j,Z,pt)(_(z))}catch(t){throw new E("Error play again")}}()}catch(t){vt(t)}})),St(_(q))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";n(916)})()})();