var e,t,s,i,r,n,o,l,c,d,u,h,g,m,p,f,y,w,v,x,S,T,P,E,M,_,k,L,I,R,O,B,C,U,F,A,N,j,D,G,Y,X,q,W,H,z,Z,V,Q,J,K,$,ee,te,ae,se,ie,re,ne,oe,le,ce,de=de||{REVISION:"1",AUTHOR:"flashhawk",GITHUB:"https://github.com/flashhawk"},ue=window.innerWidth,he=window.innerHeight,ge=0,me=1.8,pe={},fe=0,ye=0,we=1,ve=2,xe=3,be=4,Se=1e-4,Te={},Pe={},Ee=["#00FF00","#FF0000","#0000FF","#FFFF00","#FF00FF","#00FFFF"],Me=!1,_e=!1,ke=!1,Le={},Ie=30,Re={},Oe={},Be=!1,Ce=!1,Ue=[],Fe=[],Ae=[],Ne=100,je=!1,De=0,Ge=!1,Ye=!1,Xe="",qe=3,We=[],He=!1,ze={},Ze={},Ve=!0,Qe=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","@","!","&"];function Je(){assetsManager=new de.AssetsManager,assetsManager.addEventListener("complete",Ke),assetsManager.start()}function Ke(){document.getElementById("loading").style.display="none",Be&&((u=document.getElementById("top-left")).style.display="block",u.width=ue/2,u.height=he,u.style.width="auto",(h=u.getContext("2d")).globalCompositeOperation="lighter",(g=document.getElementById("middle-left")).style.display="block",g.width=ue/2,g.height=he,g.style.width="auto",m=g.getContext("2d"),(p=document.getElementById("bottom-left")).style.display="block",p.width=ue/2,p.height=he,p.style.width="auto",(f=p.getContext("2d")).fillStyle="white",f.textAlign="left",f.textBaseline="top",(w=document.getElementById("top-right")).style.display="block",w.width=ue/2,w.height=he,w.style.width="auto",w.style.right=0,w.style.left="auto",(v=w.getContext("2d")).globalCompositeOperation="lighter",(x=document.getElementById("middle-right")).style.display="block",x.width=ue/2,x.height=he,x.style.width="auto",x.style.right=0,x.style.left="auto",S=x.getContext("2d"),(T=document.getElementById("bottom-right")).style.display="block",T.width=ue/2,T.height=he,T.style.width="auto",T.style.right=0,T.style.left="auto",(P=T.getContext("2d")).fillStyle="white",P.textAlign="Right",P.textBaseline="top"),(e=document.getElementById("top")).style.display="block",e.width=ue,e.height=he,(t=e.getContext("2d")).globalCompositeOperation="lighter",(s=document.getElementById("middle")).style.display="block",s.width=ue,s.height=he,i=s.getContext("2d"),(r=document.getElementById("bottom")).style.display="block",r.width=ue,r.height=he,(n=r.getContext("2d")).fillStyle="white",n.textAlign="left",n.textBaseline="top",(o=document.getElementById("text")).style.display="block",o.width=ue,o.height=he,(c=o.getContext("2d")).fillStyle="white",c.textAlign="left",c.textBaseline="top",(l=document.getElementById("score-text")).style.display="block",l.width=ue,l.height=he,(d=l.getContext("2d")).fillStyle="white",d.textAlign="left",d.textBaseline="top",(M=new SPP.ParticleSystem).start(),(L=new SPP.ParticleSystem).start(),(_=new SPP.ParticleSystem).start(),(k=new SPP.ParticleSystem).start(),I=new SPP.Gravity(.15),(A=void 0!==chrome.storage?chrome.storage.local:window.localStorage).highScore||(A.highScore=0),j=we,Be?(ye=0,fe=0,U=5,Z=assetsManager["gamelife-5"],F=5,Q=assetsManager["gamelife-5"]):(B=0,C=5,H=assetsManager["gamelife-5"]),D=.1,Be&&(u.addEventListener("mousemove",ht,!1),u.addEventListener("mouseleave",ct,!1),u.addEventListener("mouseenter",dt,!1),w.addEventListener("mousemove",ht,!1),w.addEventListener("mouseleave",ct,!1),w.addEventListener("mouseenter",dt,!1)),e.addEventListener("mousemove",ht,!1),e.addEventListener("mouseleave",ct,!1),e.addEventListener("mouseenter",dt,!1),(le=new Lt).listenToScores(),kt(),mt(),$e()}function $e(){showStartGameUI()}function et(){j=we,Be?(fe=0,U=5,Z=assetsManager["gamelife-5"],ye=0,F=5,Q=assetsManager["gamelife-5"],ie=0,re=0):(B=0,C=5,H=assetsManager["gamelife-5"],se=0),clearText(),De=0,D=.1}function tt(e){hideStartGameUI(),ne&&(ne.removeEventListener("dead",yt),TweenLite.to(ne,.5,{scale:0,alpha:0,ease:Back.easeOut,onComplete:()=>{ne.life=0}})),ee=(new Date).getTime(),te=null,Ue=[],Fe=[],Ae=[],We=[],et(),showScoreUI(),j=ve,Be&&(document.body.className+=" playing")}function at(){j==ve&&(ge+=SPP.frameTime)>=me&&(ge=0,st())}function st(){for(var e=1+(4*Math.random()>>0),t=0;t<e;t++)Be?it()?(throwBomb(m),throwBomb(S)):(throwFruit(m,"left"),throwFruit(S,"right")):it()?throwBomb(i):throwFruit(i)}function it(){return 2*Math.random()<D}function rt(){(D+=Se)>1&&(D=.1)}function nt(e="middle"){if(j!=xe){je=!0;for(var t=_.getParticles().length;t-- >0;)_.getParticles()[t].removeEventListener("dead",missHandler);j=xe,Be?("left"===e?(U=0,Z=assetsManager["gamelife-"+U],z.texture=Z):"right"===e&&(F=0,Q=assetsManager["gamelife-"+F],V.texture=Q),document.body.className=""):(C=0,H=assetsManager["gamelife-"+C],W.texture=H),B>parseInt(A.highScore)&&(A.highScore=B),setTimeout(()=>{var e=Math.floor(99999*Math.random()+1);createjs.Sound.stop(),B>=le.scores[4].score?createjs.Sound.play("topTen"+(e%2+1)):createjs.Sound.play("gameOver"+(e%5+1))},1e3),showGameoverUI()}}function ot(){lt()}function lt(e){hideGameoverUI()}function ct(e){Te={},Pe={}}function dt(e){Te={mouse:Ee[Math.floor(Math.random()*Ee.length)]},Pe.mouse=new SPP.ParticleSystem,Pe.mouse.start(),Oe.mouse=e.target.getContext("2d"),Re.mouse=e.target.canvas}function ut(e){const t=e.changedTouches,a={};for(let i=0;i<t.length;i++){var s="touch";t[i].identifier>=Ne+Ie?s="autoreplay":t[i].identifier>=Ne?s="replay":t[i].identifier>Ie&&(s="auto"),Pe[s+t[i].identifier]||(Pe[s+t[i].identifier]=new SPP.ParticleSystem,Pe[s+t[i].identifier].start(),Re[s+t[i].identifier]=e.target,Oe[s+t[i].identifier]=e.target.getContext("2d")),a[s+t[i].identifier]=Ee[i],_t(e,t[i],s+t[i].identifier)}Te=a}function ht(e){e.layerX||0==e.layerX?(pe.x=e.layerX,pe.y=e.layerY):(e.offsetX||0==e.offsetX)&&(pe.x=e.offsetX,pe.y=e.offsetY),buildBladeParticle(pe.x,pe.y,"mouse")}function gt(e){Te=[Ee[0]],buildBladeParticle(e.x,e.y,"mouse"),console.log(e)}function mt(){(setTimeout(()=>{requestAnimationFrame(mt)},je?20:0),je)?(document.querySelector(".wrapper .sliding-background").className="sliding-background stretch",Ze.texture=assetsManager.slowMoActive):document.querySelector(".wrapper .sliding-background").className="sliding-background"+(j!==ve&&j!==be?" hidden":"");if(Me||je||Ge||Ve||(Ze.texture=assetsManager.hudPower),We.push({time:(new Date).getTime(),slowMo:je,isAutomation:Me,ultraSlice:Ye,transparency:Ge,isLlamas:Ve}),Be?(t.clearRect(0,0,ue,he),i.clearRect(0,0,ue,he),n.clearRect(0,0,ue,he),h.clearRect(0,0,ue/2,he),m.clearRect(0,0,ue/2,he),f.clearRect(0,0,ue/2,he),showScoreTextUI(f,fe),v.clearRect(0,0,ue/2,he),S.clearRect(0,0,ue/2,he),P.clearRect(0,0,ue/2,he),showScoreTextUI(P,ye),j===ve?(e.style.display="block",r.style.display="block",s.style.display="block",u.style.display="block",p.style.display="block",g.style.display="block",w.style.display="block",T.style.display="block",x.style.display="block"):(u.style.display="none",p.style.display="none",g.style.display="none",w.style.display="none",T.style.display="none",x.style.display="none",e.style.display="block",r.style.display="block",s.style.display="block")):(t.clearRect(0,0,ue,he),i.clearRect(0,0,ue,he),n.clearRect(0,0,ue,he),showScoreTextUI(n,B)),j===ve&&(clearText(),clearScores()),_.render(),k.render(),M.render(),Ge?(i.globalAlpha=.3,Ze.texture=assetsManager.transparencyActive):i.globalAlpha=1,Ve&&(Ze.texture=assetsManager.mannActive),Me||_e||ke){var a=[];Me&&a.push("middle"),_e&&a.push("left"),ke&&a.push("right"),a.forEach(e=>{var t="wrapper"+("middle"!==e?"-"+e:""),a=document.getElementsByClassName(t)[0];e in Le?(new Date).getTime()-Le[e]>12e3&&(delete Le[e],"left"===e?_e=!1:"right"===e?ke=!1:Me=!1,je=!0,setTimeout(()=>je=!1,5e3),a.className=t):(je=!0,createjs.Sound.stop(),createjs.Sound.play("automationActivated"),Le[e]=(new Date).getTime(),setTimeout(()=>{je=!1,a.className=t+" frenzy",createjs.Sound.stop(),createjs.Sound.play("automationMode")},2e3))}),Object.keys(Le).length>0?(ft(),me=.4):me=1.8}Object.keys(Pe).forEach(e=>Pe[e].render()),Object.keys(Te).forEach(e=>buildColorBlade(Te[e],O,e)),collideTest(),rt(),at()}function pt(e,t,a){var s=Math.random()*Math.PI*2;return{x:Math.cos(s)*a+a+e,y:Math.sin(s)*a+a+t}}function ft(){Ze.texture=assetsManager.automationActive;_.getParticles().length;var t=_.getParticles().filter(e=>e.dropScore>0&&e.velocity.y>1&&(new Date).getTime()-e.autoCut>350).sort((e,t)=>e.position.y<t.position.y?1:-1),a=[];Object.keys(Le).forEach(e=>t.filter(t=>t.side===e).slice(0,2).forEach(e=>a.push(e))),a&&a.forEach(t=>{var a,s=_.getParticles().filter(e=>e.autoCut),i=pt(t.position.x,t.position.y,t.radius),r={x:t.position.x>i.x?i.x+1.5*t.radius:i.x-1.5*t.radius,y:t.position.y>i.y?i.y+1.5*t.radius:i.y-1.5*t.radius};if("left"===t.side){if(!_e)return;a=u}else if("right"===t.side){if(!ke)return;a=w}else{if(!Me)return;a=e}var n=new TouchEvent("touchmove",{changedTouches:[new Touch({clientX:i.x,clientY:i.y,identifier:Ie+s.length+1,target:a})]});a.dispatchEvent(n);n=new TouchEvent("touchmove",{changedTouches:[new Touch({clientX:r.x,clientY:r.y,identifier:Ie+s.length+1,target:a})]});a.dispatchEvent(n),t.autoCut=(new Date).getTime()})}async function yt(){hideStartGameUI(),X&&(X.removeEventListener("dead",tt),TweenLite.to(X,.5,{scale:0,alpha:0,ease:Back.easeOut,onComplete:()=>{X.life=0}})),et(),showScoreUI(),j=be,vt(),Pt(),wt()}async function wt(){We.forEach(e=>{setTimeout(()=>{je=e.slowMo,Me=e.isAutomation,Ye=e.ultraSlice,Ge=e.transparency},e.time-ee)})}async function vt(){Ue.forEach(t=>{setTimeout(()=>{var a=new TouchEvent("touchmove",{changedTouches:[new Touch({clientX:t.x,clientY:t.y,identifier:-1!==t.key.indexOf("auto")?Ne+Ie:Ne,target:e})]});e.dispatchEvent(a)},t.time-ee)})}function xt(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function bt(){var e=0;for(let t=0;t<Ue.length-1;t++){e+=2.54*xt(Ue[t],Ue[t+1])/96}return e}function St(){var e={};return Fe.forEach(t=>{const a=t.texture.name||"bomb";a in e?e[a]++:e[a]=1}),e}function Tt(){var e={};return Ae.forEach(t=>{const a=t.name||"bomb";a in e?e[a]++:e[a]=1}),e}function ce(){return{distance:bt(),fruits:St(),cuts:Tt(),startTime:ee,endTime:te}}async function Pt(){Fe.forEach(e=>{setTimeout(()=>{const{yv:t,rv:a,x:s,y:i,life:r,texture:n,side:o,bottomY:l,context:c,isBomb:d}=e,u=d?k.createParticle(de.Fruit):_.createParticle(de.Fruit);u.velocity.reset(0,t),u.velocity.rotate(a),u.damp.reset(0,0),u.addForce("g",I),u.addEventListener("dead",missHandler),d?(u.updatePic=0,u.onUpdate=ae,u.init(s,i,r,n,assetsManager.shadow,c)):(u.init(s,i,r,n.w,assetsManager.shadow,c,n.next,n.life),u.textureObj=n,u.side=o),u.bottomY=l},e.time-ee)})}de.assets={fruits:["done","working","stuck","automation","transparency","slowMo","llama","mann"],fruitsLives:[1,2,3,1,1,1,1,1],nextFruits:[null,"done","working",null,null,null,null,null],other:[{id:"gameover",src:"assets/gameover.png"},{id:"gametitle",src:"assets/gametitle.png"},{id:"shadow",src:"assets/shadow.png"},{id:"bomb",src:"assets/bomb.png"},{id:"bomblight",src:"assets/bomb-light.png"},{id:"miss",src:"assets/miss.png"},{id:"star",src:"assets/star.png"},{id:"score",src:"assets/score.png"},{id:"hud",src:"assets/hud.png"},{id:"hudPower",src:"assets/hudPower.png"},{id:"hudbad",src:"assets/hudbad.png"},{id:"gamelife-5",src:"assets/5Life.png"},{id:"gamelife-4",src:"assets/4Life.png"},{id:"gamelife-3",src:"assets/3Life.png"},{id:"gamelife-2",src:"assets/2Life.png"},{id:"gamelife-1",src:"assets/1Life.png"},{id:"zinmanImage",src:"assets/zinman.png"},{id:"niceImage",src:"assets/Nice.png"},{id:"wowImage",src:"assets/wow.png"},{id:"boomImage",src:"assets/Boom.png"},{id:"excellentImage",src:"assets/Excellent_.png"},{id:"newgame",src:"assets/newgame-new.png"},{id:"automationPink",src:"assets/OtemationLogoPink.png"},{id:"automationBlue",src:"assets/OtemationLogoBlue.png"},{id:"automationGreen",src:"assets/OtemationLogoGreen.png"},{id:"automationActive",src:"assets/HUD_OtemationActive.png"},{id:"slowMoPink",src:"assets/TimeLineLogoPink.png"},{id:"slowMoBlue",src:"assets/TimeLineLogoBlue.png"},{id:"slowMoGreen",src:"assets/TimeLineLogoGreen.png"},{id:"slowMoActive",src:"assets/HUD_SlowMoActive.png"},{id:"transparencyPink",src:"assets/ZinmanPink.png"},{id:"transparencyBlue",src:"assets/ZinmanBlue.png"},{id:"transparencyGreen",src:"assets/ZinmanGreen.png"},{id:"transparencyActive",src:"assets/HUD_ZinmanActive.png"},{id:"mannPink",src:"assets/MannPink.png"},{id:"mannBlue",src:"assets/MannBlue.png"},{id:"mannGreen",src:"assets/MannGreen.png"},{id:"mannActive",src:"assets/HUD_MannActive.png"},{id:"throwFruit",src:"assets/sound/throw-fruit.ogg"},{id:"automationActivated",src:"assets/sound/AutomationActivated.mp3"},{id:"automationMode",src:"assets/sound/Automation_01.mp3"},{id:"dueDates",src:"assets/sound/DueDates_02.mp3"},{id:"gameOver1",src:"assets/sound/GameOver_01.mp3"},{id:"gameOver2",src:"assets/sound/GameOver_02.mp3"},{id:"gameOver3",src:"assets/sound/GameOver_03.mp3"},{id:"gameOver4",src:"assets/sound/GameOver_04.mp3"},{id:"gameOver5",src:"assets/sound/GameOver_05.mp3"},{id:"touchMe1",src:"assets/sound/TouchMe_01.mp3"},{id:"touchMe2",src:"assets/sound/TouchMe2_01.mp3"},{id:"touchMe3",src:"assets/sound/TouchMe3_01.mp3"},{id:"transparency1",src:"assets/sound/Transparency_01.mp3"},{id:"transparency2",src:"assets/sound/Transparency_02.mp3"},{id:"transparency3",src:"assets/sound/Transparency_03.mp3"},{id:"transparency4",src:"assets/sound/Transparency_04.mp3"},{id:"transparency5",src:"assets/sound/Transparency_05.mp3"},{id:"transparency6",src:"assets/sound/Transparency_06.mp3"},{id:"topTen1",src:"assets/sound/TopTen1_01.mp3"},{id:"topTen2",src:"assets/sound/TopTen2_01.mp3"},{id:"zinman",src:"assets/sound/Zinman_01.mp3"},{id:"excellent",src:"assets/sound/Excellent.mp3"},{id:"wow",src:"assets/sound/WOW.mp3"},{id:"nice",src:"assets/sound/NICE.mp3"},{id:"boom",src:"assets/sound/Boom.mp3"},{id:"bombExplode",src:"assets/sound/bomb-explode.mp3"},{id:"ankYou",src:"assets/sound/ankYou2.m4a"},{id:"?",src:"assets/sound/abc/questionMark.mp3"},{id:"hash",src:"assets/sound/abc/hash.mp3"},{id:"splatter",src:"assets/sound/splatter.ogg"}]},Qe.forEach(e=>{de.assets.other.push({id:e,src:`assets/sound/abc/${e}.mp3`})}),de.AssetsManager=function(){SPP.EventDispatcher.call(this);var e=this,t=0,a=0,s=["w","l","r"];this.fruitsObj={},this.fruitsArray=[],this.images={},this.sounds={},this.loader=new createjs.LoadQueue,this.loader.installPlugin(createjs.Sound),this.loader.setMaxConnections(20);this.loader.addEventListener("complete",function(){var i=de.assets.fruits,r=de.assets.fruitsLives,n=de.assets.nextFruits;for(t=0;t<i.length;t++){var o={};for(a=0;a<s.length;a++)o[s[a]]=e.loader.getResult(i[t]+s[a]);o.life=r[t],o.next=n[t],o.name=i[t],e.fruitsArray.push(o),e.fruitsObj[i[t]]=o}var l=de.assets.other;for(t=0;t<l.length;t++)e[l[t].id]=e.loader.getResult(l[t].id);e.dispatchEvent(new SPP.Event("complete"))}),this.start=function(){var e=de.assets.fruits;for(t=0;t<e.length;t++)for(a=0;a<s.length;a++)this.loader.loadFile({id:e[t]+s[a],src:"assets/fruits/"+e[t]+"-"+s[a]+".png"},!1);this.loader.loadManifest(de.assets.other,!1),this.loader.load()},this.getRandomFruit=function(){if(Ve)return this.fruitsObj.llama;var e=this.fruitsArray[this.fruitsArray.length*Math.random()>>0];return"automation"===e.name||"slowMo"===e.name||"transparency"===e.name||"mann"===e.name?Math.floor(30*Math.random()+1)%30!=0||Me||je||Ge?this.getRandomFruit():e:"llama"===e.name?this.getRandomFruit():e},this.getFruitByName=function(e){return this.fruitsObj[e]}},de.Collide=function(){function e(e){return e*e}function t(e){return e<0?-1:e>0?1:0}function s(s,i,r,n,o){if(!(n<=0)){var l,c=n,d=n*(o=void 0===o?1:o);if(a=e(d)*e(s[0]-i[0])+e(c)*e(s[1]-i[1]),!(a<=0)&&(b=2*e(d)*(i[0]-s[0])*(s[0]-r[0])+2*e(c)*(i[1]-s[1])*(s[1]-r[1]),r=e(d)*e(s[0]-r[0])+e(c)*e(s[1]-r[1])-e(c)*e(d),l=function(e,t,a){if(0!=e){var s=t*t-4*e*a;return 0==s?[-1*t/(2*e),-1*t/(2*e)]:s>0?[(-1*t+Math.sqrt(s))/(2*e),(-1*t-Math.sqrt(s))/(2*e)]:void 0}}(a,b,r))){var u=[[s[0]+l[0]*(i[0]-s[0]),s[1]+l[0]*(i[1]-s[1])],[s[0]+l[1]*(i[0]-s[0]),s[1]+l[1]*(i[1]-s[1])]];return t(u[0][0]-s[0])*t(u[0][0]-i[0])<=0&&t(u[0][1]-s[1])*t(u[0][1]-i[1])<=0||(u[0]=null),t(u[1][0]-s[0])*t(u[1][0]-i[0])<=0&&t(u[1][1]-s[1])*t(u[1][1]-i[1])<=0||(u[1]=null),u}}}this.lineInEllipse=function(e,t,a,i,r){var n=s(e,t,a,i,r);return n&&(n[0]||n[1])}},de.Fruit=function(){SPP.Particle.call(this),this.drawTexture=function(e,t,a,s){e.drawImage(t,a,s,t.width,t.height,.5*-t.width,.5*-t.height,t.width,t.height)}},de.Fruit.prototype=SPP.inherit(SPP.Particle.prototype),de.Fruit.prototype.constructor=de.Fruit,de.Fruit.prototype.update=function(){this.rotation+=this.rotationStep,this.context.translate(this.position.x-20,this.position.y-20),this.context.scale(this.scale,this.scale),!this.textureObj||"automation"!==this.textureObj.name&&"slowMo"!==this.textureObj.name&&"transparency"!==this.textureObj.name&&"mann"!==this.textureObj.name||(De+=1/32,Math.floor(De)%3==0?this.texture=assetsManager[this.textureObj.name+"Blue"]:Math.floor(De)%3==1?this.texture=assetsManager[this.textureObj.name+"Green"]:Math.floor(De)%3==2&&(this.texture=assetsManager[this.textureObj.name+"Pink"]),this.scale=.5),this.drawTexture(this.context,this.shadow,0,0),this.context.setTransform(1,0,0,1,0,0),this.context.translate(this.position.x,this.position.y),this.context.rotate(this.rotation),this.context.scale(this.scale,this.scale),this.drawTexture(this.context,this.texture,0,0),this.context.setTransform(1,0,0,1,0,0),(this.position.y>this.bottomY&&null!=this.bottomY||this.position.x<=0||this.position.x>ue)&&(this.life=0)},de.Fruit.prototype.init=function(e,t,a,s,i,r,n=null,o=1,l=!1){SPP.Particle.prototype.init.apply(this,[e,t,a]),this.context=r,this.texture=s,this.shadow=i,this.rotation=0,this.scale=1,this.radius=s.width>=s.height?.5*s.width:.5*s.height,this.radius*=this.scale,this.bottomY=null,this.next=n,this.dropScore=o,this.createdAt=(new Date).getTime(),this.autoCut=0,this.isHalf=l,this.isCut=!1,this.rotationStep=.1*(1-2*Math.random()),this.rotationStep<=0?this.rotationStep=-.1:this.rotationStep>0&&(this.rotationStep=.1)},window.onload=Je;var Et={message:"Game Control",moveThreshold:5,depthThreshold:70,displayShadow:!0,mirror:!0};function Mt(){var e=new dat.GUI;e.add(Et,"message"),e.add(Et,"moveThreshold",0,10).step(1),e.add(Et,"depthThreshold",10,255).step(1).onChange(function(e){}),e.add(Et,"displayShadow").onChange(function(e){var t=document.getElementById("shadow");t.style.display=e?"block":"none"}),e.add(Et,"mirror"),e.close()}function _t(e,t,a){buildBladeParticle(t.clientX,t.clientY,a),e.preventDefault()}function kt(){Be?(u.addEventListener("touchstart",ut,!0),u.addEventListener("touchmove",ut,!0),u.addEventListener("touchend",ut,!0),u.addEventListener("touchcancel",ut,!0),w.addEventListener("touchstart",ut,!0),w.addEventListener("touchmove",ut,!0),w.addEventListener("touchend",ut,!0),w.addEventListener("touchcancel",ut,!0),e.addEventListener("touchstart",ut,!0),e.addEventListener("touchmove",ut,!0),e.addEventListener("touchend",ut,!0),e.addEventListener("touchcancel",ut,!0),document.body.addEventListener("keydown",e=>{13===e.keyCode&&(_e=!0)},!0),document.body.addEventListener("keydown",e=>{8===e.keyCode&&(ke=!0)},!0)):(e.addEventListener("touchstart",ut,!0),e.addEventListener("touchmove",ut,!0),e.addEventListener("touchend",ut,!0),e.addEventListener("touchcancel",ut,!0),document.body.addEventListener("keydown",e=>{9===e.keyCode&&nt()},!0),document.body.addEventListener("keydown",e=>{13===e.keyCode&&j!==xe&&(Me=!0)},!0),document.body.addEventListener("keydown",e=>{16===e.keyCode&&(je=!je)},!0),document.body.addEventListener("keydown",e=>{8===e.keyCode&&j===ve&&(Ge=!Ge)},!0),document.body.addEventListener("keydown",e=>{27===e.keyCode&&(Ye=!Ye)},!0))}!function(){R="#00ff00",O=10;var e=function(e){j!=xe&&Object.keys(Pe).forEach(t=>{var a=Pe[t],s=Oe[t],i=(Re[t],a.getParticles().length),r=e,n=e/(i-1);for(s.beginPath();i-- >1;){s.lineWidth=1==i?1:r;var o=a.getParticles()[i],l=a.getParticles()[i-1];s.moveTo(o.position.x,o.position.y),s.lineTo(l.position.x,l.position.y),s.stroke(),(r-=n)<=0&&(r=1)}})};buildColorBlade=function(t,a,s){var i=Oe[s];i.strokeStyle=t,e(a),i.strokeStyle="#ffffff",e(.6*a)},buildBladeParticle=function(e,t,a){j===ve&&Ue.push({time:(new Date).getTime(),x:e,y:t,key:a}),Pe[a].createParticle(SPP.Particle).init(e,t,.2)}}(),function(){var e=function(){this.scale-=.03,this.scale<0&&(this.scale=0,this.life=0)};ae=function(){this.updatePic+=1/32,this.texture=Math.floor(this.updatePic)%2?assetsManager.bomblight:assetsManager.bomb;var a=M.createParticle(SPP.SpriteImage),s=1.414*assetsManager.bomb.width*.5-5,i=this.position.x+s*Math.cos(this.rotation-SPP.MathUtils.toRadian(135)),r=this.position.y+s*Math.sin(this.rotation-SPP.MathUtils.toRadian(135));a.init(i,r,1/0,assetsManager.star,t),a.onUpdate=e,a.scale=.8,a.damp.reset(0,0),a.velocity.reset(0,-(1+1*Math.random())),a.velocity.rotate(360*Math.random()),a.addForce("g",I);a=M.createParticle(SPP.SpriteImage),s=1.414*assetsManager.bomblight.width*.5-5,i=this.position.x+s*Math.cos(this.rotation-SPP.MathUtils.toRadian(135)),r=this.position.y+s*Math.sin(this.rotation-SPP.MathUtils.toRadian(135));a.init(i,r,1/0,assetsManager.star,t),a.onUpdate=e,a.scale=.8,a.damp.reset(0,0),a.velocity.reset(0,-(1+1*Math.random())),a.velocity.rotate(360*Math.random()),a.addForce("g",I)};var a=function(){this.scale-=.02,this.scale<0&&(this.scale=0,this.life=0)};throwBomb=function(e){Math.floor(999999*Math.random()+1)%10!=0||Me||createjs.Sound.play("dueDates");var t=k.createParticle(de.Fruit),a=-(10+3*Math.random()),s=8-16*Math.random();t.velocity.reset(0,a),t.velocity.rotate(s),t.damp.reset(0,0),t.addForce("g",I),t.onUpdate=ae;var i=.5*e.canvas.width+300*(1-2*Math.random()),r=he+assetsManager.bomb.height,n=assetsManager.bomb;t.init(i,r,1/0,n,assetsManager.shadow,e),t.bottomY=he+assetsManager.bomb.height,t.updatePic=0,Fe.push({x:i,y:r,yv:a,rv:s,life:1/0,texture:n,side:t.side,bottomY:t.bottomY,context:e,time:(new Date).getTime(),isBomb:!0})},cutBomb=function(e){Ge?Ae.push({name:"bombTransparent",time:(new Date).getTime()}):(Ae.push({name:"bomb",time:(new Date).getTime()}),function(e){for(var s=0;s<150;s++){var i=M.createParticle(SPP.SpriteImage);i.init(e.position.x,e.position.y,1/0,assetsManager.star,t),i.onUpdate=a,i.scale=2,i.damp.reset(0,0),i.velocity.reset(0,-(3+7*Math.random())),i.velocity.rotate(360*Math.random()),i.addForce("g",I)}createjs.Sound.stop(),createjs.Sound.play("bombExplode")}(e),e.life=0,nt())}}(),K=new de.Collide,collideTest=function(){if(j!=xe){var e,t,a=_.getParticles(),s=k.getParticles();Object.keys(Pe).forEach(i=>{for(var r=Pe[i].getParticles(),n=r.length;n-- >1;){var o=r[n],l=r[n-1];for(var c in a){e=a[c];var d,u=K.lineInEllipse([o.position.x,o.position.y],[l.position.x,l.position.y],[e.position.x,e.position.y],e.radius);d=-1!==Oe[i].canvas.id.indexOf("left")?"left":-1!==Oe[i].canvas.id.indexOf("right")?"right":"middle",u&&!e.isCut&&(Ye||(new Date).getTime()-e.createdAt>250)&&e.side===d&&cutFruit(e)}for(var h in s)t=s[h],o=r[n],l=r[n-1],(u=K.lineInEllipse([o.position.x,o.position.y],[l.position.x,l.position.y],[t.position.x,t.position.y],t.radius))&&-1===i.indexOf("auto")&&cutBomb(t)}})}},function(){var e=function(e,t=1){var a=(3+3*Math.random())*t,s=M.createParticle(de.Fruit);s.init(e.position.x,e.position.y,1/0,e.textureObj.r,assetsManager.shadow,e.context),s.velocity.reset(a,0),s.damp.reset(0,0),s.bottomY=he+e.textureObj.r.height,s.addForce("g",I),s.isCut=!0;var i=M.createParticle(de.Fruit);i.init(e.position.x,e.position.y,1/0,e.textureObj.l,assetsManager.shadow,e.context),i.velocity.reset(-a,0),i.damp.reset(0,0),i.bottomY=he+e.textureObj.l.height,i.addForce("g",I),s.isCut=!0,1===t&&(s.velocity.rotate(-50*Math.random()),s.rotation=e.rotation,i.velocity.rotate(50*Math.random()),i.rotation=e.rotation),"automation"!=e.textureObj.name&&"transparency"!=e.textureObj.name&&"slowMo"!=e.textureObj.name&&"mann"!=e.textureObj.name&&"llama"!=e.textureObj.name||(s.scale=.5,i.scale=.5)},t=function(){this.alpha-=.01,this.alpha<0&&(this.alpha=0,this.life=0)};throwFruit=function(e,t="middle"){const a=assetsManager.getRandomFruit(),s=_.createParticle(de.Fruit);var i=-(10+6*Math.random()),r=8-2*Math.random();s.velocity.reset(0,i),s.velocity.rotate(r),s.damp.reset(0,0),s.addForce("g",I),s.addEventListener("dead",missHandler);var n=.5*e.canvas.width+200*(1-2*Math.random()),o=he+a.w.height,l=a;s.init(n,o,1/0,l.w,assetsManager.shadow,e,l.next,l.life),s.textureObj=l,s.side=t,s.bottomY=he+a.w.height,"llama"===l.name&&(s.scale=.5),Fe.push({x:n,y:o,yv:i,rv:r,life:1/0,texture:l,side:s.side,bottomY:s.bottomY,context:e,time:(new Date).getTime()})},cutFruit=function(t){Be?"left"===t.side?fe++:ye++:"llama"===t.textureObj.name?B+=10:B++;var a=Math.floor(9999999*Math.random()+1);if(a%10!=0||He||Me||(oe(t.position.x,t.position.y),He=!0),t.removeEventListener("dead",missHandler),"automation"===t.textureObj.name&&(Me=!0),"transparency"===t.textureObj.name&&(createjs.Sound.stop(),createjs.Sound.play("transparency"+(a%6+1)),Ge=!0,setTimeout(()=>Ge=!1,1e4)),"slowMo"===t.textureObj.name&&(je=!0,setTimeout(()=>je=!1,1e4)),"mann"===t.textureObj.name&&(Ve=!0,setTimeout(()=>Ve=!1,1e4)),t.life=0,t.isCut=!0,t.next){var s=assetsManager.getFruitByName(t.next),i=_.createParticle(de.Fruit);i.velocity.reset(t.velocity.x,1.2*t.velocity.y),i.damp.reset(0,0),i.addForce("g",I),i.addEventListener("dead",missHandler),i.init(t.position.x,t.position.y,1/0,s.w,assetsManager.shadow,t.context,s.next,s.life),i.textureObj=s,i.bottomY=he+s.w.height,i.side=t.side,e(t,10)}else e(t);Ae.push({name:t.textureObj.name,time:(new Date).getTime()})},missHandler=function(e){var a,s,i;(e.target.removeEventListener("dead",missHandler),e.target.dropScore-1==0||Ge)||j!=xe&&(a=e.target,s=M.createParticle(SPP.SpriteImage),(i=a.position.x)<=0&&(i=40),i>ue&&(i=ue-40),s.init(i,he-assetsManager.miss.height/2,1/0,assetsManager.miss,a.context),s.scale=.5,s.velocity.reset(0,-1),s.damp.reset(.01,.01),s.onUpdate=t,"left"===e.target.side?((U-=e.target.dropScore-1)<=0&&nt("left"),U<0&&(U=0),Z=assetsManager["gamelife-"+U],z.texture=Z):"right"===e.target.side?((F-=e.target.dropScore-1)<=0&&nt("right"),F<0&&(F=0),Q=assetsManager["gamelife-"+F],V.texture=Q):((C-=e.target.dropScore-1)<=0&&nt("middle"),C<0&&(C=0),H=assetsManager["gamelife-"+C],W.texture=H))}}(),neonWrite=function(e,t,a,s,i=30){t.font="700 "+i+"px 'Sofia Pro ', sans-serif",t.fillStyle="rgb(255,255,255)",t.fillText(e,a,s),t.lineWidth=1,t.strokeStyle="rgb(255,255,255)",t.fillStyle="white",t.fillText(e,a,s),t.strokeText(e,a,s)},blackWrite=function(e,t,a,s,i=30){t.font=i+"px 'Sofia Pro 900', sans-serif",t.fillStyle="rgb(30,30,30)",t.fillText(e,a,s),t.lineWidth=1,t.strokeStyle="rgb(30,30,30)",t.fillStyle="black",t.fillText(e,a,s),t.strokeText(e,a,s)},typeToScreen=function(e,t,a,s=0,i=30,r=neonWrite,n=c){return new Promise(o=>{n.fillStyle="white",n.font=i+"px 'Sofia Pro Bold', sans-serifs";var l,c=0;!function d(){c++,l=e.substr(0,c),clearText(t-30,a-30,i*e.length,i+90),r(l,n,t,a,i),c<=e.length?setTimeout(d,s):o(!0)}()})},clearText=function(e=0,t=0,a=ue,s=he){c.clearRect(e,t,a,s)},clearScores=function(e=0,t=0,a=ue,s=he){d.clearRect(e,t,a,s)},flashInput=function(e,t,a,s=150,i=90){var r=c.measureText(Xe),n=c.measureText(" "),o=r.width+n.width*Xe.length,l=(Xe+"_".repeat(qe-Xe.length)).split("").join(" ");clearText(e-30,t-30,c.measureText(l).width+90,i+90),neonWrite(l,c,e,t,i),typeToScreen(Xe.length>=qe?"":a,o+e,t,s,i).then(()=>{if(j==xe){window.flashTimer=setTimeout(()=>{flashInput(e,t,a,s,i)},s);var r=c.measureText(a);clearText(o+e-5,t-30,r.width+10,i+90)}else clearText(0,0,ue,he)})},enterName=function(){var e=(Xe+"_".repeat(qe-Xe.length)).split("").join(" ");console.log(ue),height=he<880?.6*he:.5*he,console.log(he),typeToScreen("ENTER NAME:",ue/2,he/3,0,80).then(()=>typeToScreen(e,ue/2,height,0,112).then(()=>flashInput(ue/2,height,"_",150,112)))},enterScore=function(){typeToScreen("SCORE:",ue/6,he/3,0,80),height=he<880?.6*he:.5*he,typeToScreen(B.toString(),ue/6,height,0,112)},enterScores=function(e){e.forEach(function(e,t){typeToScreen(e.username.toString(),.7*ue,.326*he+.086*t*he,0,32,blackWrite,d),typeToScreen(e.score.toString(),.87*ue,.326*he+.086*t*he,0,32,blackWrite,d)})},enterNameDelay=function(e){setTimeout(enterName,1e3*e)},enterScoreDelay=function(e){setTimeout(enterScore,1e3*e)},handleName=function(e){(e.keyCode>=65&&e.keyCode<=90||e.keyCode>48&&e.keyCode<57||"?"===e.key)&&Xe.length<qe&&(Xe+=e.key.toUpperCase(),createjs.Sound.stop(),createjs.Sound.play("#"===e.key?"hash":e.key.toUpperCase())),8===e.keyCode&&(Xe=Xe.slice(0,-1))},function(){var e=function(){this.rotation+=.01};showStartGameUI=function(){j=we,(Y=M.createParticle(SPP.SpriteImage)).init(.318*ue,.618*he,1/0,assetsManager.newgame,t),Y.scale=5,Y.alpha=0,Y.onUpdate=e,TweenLite.to(Y,.8,{scale:.55,alpha:1,ease:Back.easeOut}),Ue.length,(X=_.createParticle(de.Fruit)).addEventListener("dead",tt);var a=assetsManager.getFruitByName("stuck");X.init(.318*ue,.618*he,1/0,a.w,assetsManager.shadow,t),X.rotationStep=-.02,X.scale=0,X.alpha=0,X.textureObj=a,X.side="middle",TweenLite.to(X,1,{scale:1,alpha:1,ease:Back.easeOut});var s=document.getElementsByClassName("wrapper")[0],i=document.getElementsByClassName("wrapper-left")[0],r=document.getElementsByClassName("wrapper-right")[0],n=document.getElementsByClassName("regular-background")[0],o=document.querySelector(".wrapper .sliding-background"),l=document.querySelector(".wrapper-left .sliding-background"),c=document.querySelector(".wrapper-right .sliding-background"),d=document.querySelector(".wrapper .sliding-parallax"),u=document.querySelector(".wrapper .sliding-parallax2"),h=document.querySelector(".wrapper-left .sliding-parallax"),g=document.querySelector(".wrapper-right .sliding-parallax"),m=document.querySelector(".wrapper-left .sliding-parallax2"),p=document.querySelector(".wrapper-right .sliding-parallax2");o.className="sliding-background hidden",l.className="sliding-background hidden",c.className="sliding-background hidden",d.className="sliding-parallax hidden",h.className="sliding-parallax hidden",g.className="sliding-parallax hidden",u.className="sliding-parallax2 hidden",m.className="sliding-parallax2 hidden",p.className="sliding-parallax2 hidden",s.className="wrapper",i.className="wrapper-left",r.className="wrapper-right",n.className="regular-background"},hideStartGameUI=function(){if(X.removeEventListener("dead",tt),createjs.Sound.play("ankYou"),ne&&ne.removeEventListener("dead",yt),TweenLite.to(Y,.8,{scale:8,alpha:0,onComplete:function(){Y.life=0}}),Be){var e=document.getElementsByClassName("wrapper-left")[0],t=document.getElementsByClassName("wrapper-right")[0],a=document.querySelector(".wrapper-left .sliding-background"),s=document.querySelector(".wrapper-right .sliding-background"),i=document.querySelector(".wrapper-left .sliding-parallax"),r=document.querySelector(".wrapper-right .sliding-parallax"),n=document.querySelector(".wrapper-left .sliding-parallax2"),o=document.querySelector(".wrapper-right .sliding-parallax2");a.className="sliding-background",i.className="sliding-parallax",n.className="sliding-parallax2",_e&&(e.className="wrapper-left frenzy"),s.className="sliding-background",r.className="sliding-parallax",o.className="sliding-parallax2",ke&&(t.className="wrapper-right frenzy")}else{var l=document.getElementsByClassName("wrapper")[0],c=document.getElementsByClassName("sliding-background")[0],d=document.getElementsByClassName("sliding-parallax")[0],u=document.getElementsByClassName("sliding-parallax2")[0];c.className="sliding-background",d.className="sliding-parallax",u.className="sliding-parallax2",Me&&(l.className="wrapper frenzy")}document.getElementsByClassName("regular-background")[0].className="regular-background hidden"},showScoreTextUI=function(e,t){if(j==we)return ne&&(n.fillStyle="yellow",n.font="36px 'Arial'",n.fillText("- Swipe to replay -",630,650)),void(n.fillStyle="white");e.font="italic 36px 'Arial'",e.fillText(t,.2*ui_hud.texture.width,he-80),e.setTransform(1,0,0,1,0,0),-1!==e.canvas.id.indexOf("left")?("left",U<=1&&(ie+=1/8,Math.floor(ie)%2==0?ui_hudLeft.texture=assetsManager.hudbad:ui_hudLeft.texture=assetsManager.hud)):-1!==e.canvas.id.indexOf("right")?("right",F<=1&&(re+=1/8,Math.floor(re)%2==0?ui_hudRight.texture=assetsManager.hudbad:ui_hudRight.texture=assetsManager.hud)):("middle",C<=1&&(se+=1/8,Math.floor(se)%2==0?(ui_hud.texture=assetsManager.hudbad,W.alpha=1):(ui_hud.texture=assetsManager.hud,W.alpha=.5)))},showScoreUI=function(){Be?(ui_hudLeft=M.createParticle(SPP.SpriteImage),ui_hudLeft.regX=ui_hudLeft.regY=0,ui_hudLeft.init(-30,he-105,1/0,assetsManager.hud,f),ui_hudLeft.scale=.5,ui_scoreIconLeft=M.createParticle(SPP.SpriteImage),ui_scoreIconLeft.regX=ui_scoreIconLeft.regY=0,ui_scoreIconLeft.init(10,he-75,1/0,assetsManager.score,f),ui_scoreIconLeft.scale=.5,(z=M.createParticle(SPP.SpriteImage)).regX=1,z.regY=0,z.scale=.5,z.init(165,f.canvas.height-70,1/0,Z,f),ui_hudRight=M.createParticle(SPP.SpriteImage),ui_hudRight.regX=ui_hudRight.regY=0,ui_hudRight.init(-30,he-105,1/0,assetsManager.hud,P),ui_hudRight.scale=.5,ui_scoreIconRight=M.createParticle(SPP.SpriteImage),ui_scoreIconRight.regX=ui_scoreIconRight.regY=0,ui_scoreIconRight.init(10,he-75,1/0,assetsManager.score,P),ui_scoreIconRight.scale=.5,ui_scoreIconRight=M.createParticle(SPP.SpriteImage),ui_scoreIconRight.regX=ui_scoreIconRight.regY=0,ui_scoreIconRight.init(10,he-75,1/0,assetsManager.score,P),ui_scoreIconRight.scale=.5,(V=M.createParticle(SPP.SpriteImage)).regX=1,V.regY=0,V.scale=.5,V.init(165,P.canvas.height-70,1/0,Q,P)):(ui_hud=M.createParticle(SPP.SpriteImage),ui_hud.regX=ui_hud.regY=0,ui_hud.init(0,he-105,1/0,assetsManager.hud,n),ui_hud.scale=.5,(Ze=M.createParticle(SPP.SpriteImage)).regX=Ze.regY=0,Ze.init(150,he-107,1/0,assetsManager.hudPower,n),Ze.scale=.5,(ze=M.createParticle(SPP.SpriteImage)).regX=ze.regY=0,ze.init(164,he-87,1/0,null,n),ze.scale=.5,(q=M.createParticle(SPP.SpriteImage)).regX=q.regY=0,q.init(10,he-75,1/0,assetsManager.score,n),q.scale=.5,(W=M.createParticle(SPP.SpriteImage)).regX=1,W.regY=0,W.scale=.5,W.init(165,he-70,1/0,H,n))},hideScoreUI=function(){void 0!=window.ui_scoreIcon&&(window.ui_scoreIcon.life=0),void 0!=window.ui_hud&&(window.ui_hud.life=0),void 0!=window.ui_hudPower&&(window.ui_hudPower.life=0),void 0!=window.ui_hudPowerActive&&(window.ui_hudPowerActive.life=0),void 0!=window.ui_gameLife&&(window.ui_gameLife.life=0),void 0!=window.ui_scoreIconLeft&&(window.ui_scoreIconLeft.life=0),void 0!=window.ui_gameLifeLeft&&(window.ui_gameLifeLeft.life=0),void 0!=window.ui_scoreIconRight&&(window.ui_scoreIconRight.life=0),void 0!=window.ui_gameLifeRight&&(window.ui_gameLifeRight.life=0)},showGameoverUI=function(){te=(new Date).getTime(),ui_gameOver=M.createParticle(SPP.SpriteImage),ui_gameOver.init(.5*ue,.5*he,1/0,assetsManager.gameover,t),ui_gameOver.scale=0,TweenLite.to(ui_gameOver,.8,{delay:2,scale:1.6,ease:Back.linear,onComplete:raiseGameOver}),enterScoreDelay(4),enterNameDelay(4),document.body.addEventListener("keydown",a,!0)},raiseGameOver=function(){TweenLite.to(ui_gameOver.position,.8,{delay:1,y:.15*he,ease:Back.linear,onComplete:ot})},oe=function(e=.5*ue,a=.5*he){var s,i=Math.floor(9999999*Math.random()+1);i%5==0?s="nice":i%5==1?s="wow":i%5==2?s="excellent":i%5==3?s="zinman":i%5==4&&(s="boom"),good_ui=M.createParticle(SPP.SpriteImage),good_ui.init(e,a,1/0,assetsManager[s+"Image"],t),good_ui.scale=0,TweenLite.to(good_ui,.5,{scale:.2,ease:Back.easeOut,onComplete:()=>{TweenLite.to(good_ui,.5,{delay:0,scale:0,ease:Back.easeIn,onComplete:()=>{He=!1}})}}),createjs.Sound.play(s)};var a=async function(e){j===xe&&handleName(e),13===e.keyCode&&j===xe&&(showStartGameUI(),hideScoreUI(),TweenLite.to(ui_gameOver,.1,{scale:0,ease:Back.easeIn,onComplete:s}),await le.insertScore(Xe,B),et(),document.body.removeEventListener("keydown",a,!0),Xe="")},s=function(){ui_gameOver.life=0,hideScoreUI(),je=!1};hideGameoverUI=function(){}}();class Lt{constructor(){this.scores=[],this.database=firebase.database(),this.firestore=firebase.firestore(),this.firestore.settings({timestampsInSnapshots:!0})}listenToScores(){const e=this;this.firestoreUnsub&&(this.firestoreUnsub(),this.firestoreUnsub=null),this.firestoreUnsub=this.firestore.collection("scores").orderBy("score","desc").orderBy("date","asc").limit(10).onSnapshot(function(t){e.saveScores(t.docs.map(e=>e.data()))})}listenToTopScores(e=null,t=null,a=10){const s=this,i=t;let r;e?r=e:(r=new Date).setDate(r.getDate()-7),this.firestoreUnsub&&(this.firestoreUnsub(),this.firestoreUnsub=null),this.firestoreUnsub=this.firestore.collection("scores").where("date",">=",r).where("date",i?"<=":">=",i||r).onSnapshot(function(e){s.saveScores(e.docs.map(e=>e.data()).sort((e,t)=>e.score>t.score?-1:1).slice(0,a))})}filterObject(e,t){return t.map(function(t){return e[t]})}topScores(){return j==we&&enterScores(this.scores.slice(0,5)),this.scores.slice(0,5)}getTopScores(e=null,t=null,a=10){const s=this,i=t;let r;e?r=e:(r=new Date).setDate(r.getDate()-7),this.firestore.collection("scores").where("date",">=",r).where("date",i?"<=":">=",i||r).get().then(function(e){s.saveScores(e.docs.map(e=>e.data()).sort((e,t)=>e.score>t.score?-1:1).slice(0,a)),s.topScores()})}getScores(){const e=this;this.firestore.collection("scores").orderBy("score","desc").orderBy("date","asc").limit(10).get().then(function(t){e.saveScores(t.docs.map(e=>e.data())),e.topScores()})}saveScores(e){this.scores=e,clearScores(),this.topScores()}async insertScore(e,t){const a=new Date,s=await this.insertStats(e);this.firestore.collection("scores").add({username:e,score:t,date:a,statsId:s}).then(function(e){console.log("Document successfully written!",e.id)}).catch(function(e){console.error("Error writing document: ",e)})}async insertStats(e){const t=new Date;try{const a=await this.firestore.collection("stats").add({username:e,stats:ce(),date:t});return console.log("Document successfully written!",a.id),a.id}catch(e){console.error("Error writing document: ",error)}}}function It(e,t){supportsWebGL()?(gl=getWebGLContext(t),createProgramFromURIs(gl,{vsURI:"shaders/simple.vs",fsURI:"shaders/depth.fs",onComplete:function(a){!function(a){gl.useProgram(a);var s=gl.getUniformLocation(a,"width"),i=gl.getUniformLocation(a,"height"),r=gl.getUniformLocation(a,"sampler0"),n=gl.getAttribLocation(a,"position"),o=gl.getUniformLocation(a,"mirror"),l=gl.createBuffer(),c=gl.createTexture();gl.uniform1f(o,Et.mirror?1:0),gl.uniform1f(s,t.width),gl.uniform1f(i,t.height),gl.uniform1i(r,0),gl.bindBuffer(gl.ARRAY_BUFFER,l),gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW),gl.enableVertexAttribArray(n),gl.vertexAttribPointer(n,2,gl.FLOAT,!1,0,0),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,c),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST),gl.bindTexture(gl.TEXTURE_2D,null),window.requestAnimationFrame(function a(){gl.uniform1f(o,Et.mirror?1:0),gl.uniform1f(s,t.width),gl.uniform1f(i,t.height),gl.viewport(0,0,t.width,t.height),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,c),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,e),gl.drawArrays(gl.TRIANGLES,0,6),gl.bindTexture(gl.TEXTURE_2D,null),window.requestAnimationFrame(a)})}(a)}})):console.log("no WebGL")}