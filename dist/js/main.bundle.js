"use strict";(self.webpackChunkLib_Webpack=self.webpackChunkLib_Webpack||[]).push([[792],{204:()=>{function t(t,e,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var o="expires="+r.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var n;n=function(){var n,r,o,a,c,i,l;!function(){var t={storage:"contrastState",cssClass:"contrast",currentState:null,check:function(){this.updateView()},getState:function(){return"true"===localStorage.getItem(this.storage)},setState:function(t){localStorage.setItem(this.storage,""+t),this.currentState=t,this.updateView()},toogle:function(){this.setState(!this.currentState)},updateView:function(){var t=document.body;null===this.currentState&&(this.currentState=this.getState()),this.currentState?t.classList.add(this.cssClass):t.classList.remove(this.cssClass)}};window.toggleContrast=function(){t.toogle()},t.check();for(var e=document.querySelectorAll(".altoContraste"),n=0;n<e.length;n++)e[n].addEventListener("click",toggleContrast)}(),n=function(){var t,n=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,c=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw c}}}}(document.getElementsByTagName("*"));try{for(n.s();!(t=n.n()).done;)t.value.classList.add("fnc-acessibility")}catch(t){n.e(t)}finally{n.f()}},r=function(t){var e=window.getComputedStyle(t,null).getPropertyValue("font-size");return parseFloat(e)},o=function(e,n,o){for(var a=0;a<e.length;a++){var c=e[a],i=0;o?(c.style.fontSize="",t("font-size",c.style.fontSize="")):(i=n?r(c)+.5:r(c)-.5,c.style.fontSize=i.toString()+"px",t("font-size",c.style.fontSize=i.toString()+"px"))}},a=document.getElementsByClassName("fnc-acessibility"),c=document.querySelectorAll(".increase-font"),i=document.querySelectorAll(".decrease-font"),l=document.querySelectorAll(".normal-font"),window.addEventListener("load",(function(){for(var t=0;t<c.length;t++)c[t].addEventListener("click",(function(t){t.preventDefault(),n(),o(a,!0)}));for(var e=0;e<l.length;e++)l[e].addEventListener("click",(function(t){t.preventDefault(),n(),o(a,null,!0)}));for(var r=0;r<i.length;r++)i[r].addEventListener("click",(function(t){t.preventDefault(),n(),o(a,!1)}))})),function(){scrollTo=function(t){window.scroll({behavior:"smooth",left:0,top:t.offsetTop-80})};var t=document.querySelector("header"),e=document.querySelector("main"),n=document.querySelector("footer");document.getElementById("anchorHeader").addEventListener("click",(function(e){console.log(e),e.preventDefault(),scrollTo(t)})),document.getElementById("anchorMain").addEventListener("click",(function(t){t.preventDefault(),scrollTo(e)})),document.getElementById("anchorFooter").addEventListener("click",(function(t){console.log(t),t.preventDefault(),scrollTo(n)}))}()},"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n,!1)}},t=>{t(t.s=204)}]);