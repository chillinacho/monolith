(()=>{"use strict";var n,e,t=document.querySelector(".canvas").getContext("2d"),o=[];function a(){(n=window.pageYOffset/(document.body.offsetHeight-window.innerHeight))<0&&(n=0),n>1&&(n=1),e=Math.round(349*n),t.drawImage(o[e],0,0),requestAnimationFrame(a)}window.addEventListener("load",(function(){t.drawImage(o[0],0,0);var n=window.pageYOffset,e=0;if(n>0)var r=setInterval((function(){scrollTo(0,n),n+=5,e>20&&clearInterval(r),e++}),20);window.addEventListener("scroll",(function(){a()}))})),function(){for(var n=0;n<350;n++){var e=new Image;e.src="./images/monolith/monolith".concat(1001+n,".png"),o.push(e)}}()})();