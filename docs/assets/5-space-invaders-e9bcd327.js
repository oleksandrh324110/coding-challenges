import{p as a}from"./p5.min-2d0f902e.js";const R=8;class x{constructor(s,i){this.x=s,this.y=i,this.r=R,this.isRemoved=!1}show(){h.fill(150,0,255),h.circle(this.x,this.y,this.r*2)}moveY(s){this.y+=s}hits(s){return h.dist(this.x,this.y,s.x,s.y)<s.r+this.r}remove(){this.isRemoved=!0}}const n=40;class l{constructor(s,i){this.x=s,this.y=i,this.r=n,this.xDir=1,this.canBeHit=!0,this.isRemoved=!1}show(){h.fill(255,0,200),h.circle(this.x,this.y,this.r*2)}move(){this.x+=this.xDir*3}shiftDown(){this.xDir*=-1,this.y+=this.r*2}remove(){this.canBeHit=!1,this.isRemoved=!0}}const m=20,d=40;class u{constructor(){this.x=h.width/2,this.y=h.height-d,this.xDir=0,this.width=m,this.height=d}show(){h.fill(0),h.rect(this.x,this.y,this.width,this.height)}setDir(s){this.xDir=s}move(){this.x+=this.xDir*5,this.x=h.constrain(this.x,0+this.width/2,h.width-this.width/2)}}let e,o=[];const y=Math.floor(window.innerWidth/150);let r=Array(y).fill(null);const w=t=>{t.setup=()=>{t.createCanvas(window.innerWidth,window.innerHeight),t.frameRate(240),t.noStroke(),t.rectMode(t.CENTER),e=new u,r=r.map((s,i)=>new l(i*n*2*1.5+(t.width-r.length*n*2*1.5)/2+n*1.5,n*1.5))},t.keyPressed=()=>{t.key===" "?o.push(new x(e.x,e.y-e.height/2)):t.keyCode===t.LEFT_ARROW?e.setDir(-1):t.keyCode===t.RIGHT_ARROW&&e.setDir(1)},t.keyReleased=()=>{[t.RIGHT_ARROW,t.LEFT_ARROW].includes(t.keyCode)&&(t.keyCode===t.LEFT_ARROW&&e.xDir===1||t.keyCode===t.RIGHT_ARROW&&e.xDir===-1||e.setDir(0))},t.draw=()=>{t.background("white"),r.some(i=>{if(i.move(),i.x>t.width-i.r||i.x<i.r)return!0})&&r.forEach(i=>{i.shiftDown()}),o.forEach((i,f)=>{if(i.moveY(-5),i.y<0-i.r)return i.remove();r.forEach(c=>{i.hits(c)&&c.canBeHit&&(i.remove(),c.remove())})}),o=o.filter(i=>!(i!=null&&i.isRemoved)),r=r.filter(i=>!(i!=null&&i.isRemoved)),r.forEach(i=>i.show()),o.forEach(i=>i.show()),e.move(),e.show()}},h=new a(w);
