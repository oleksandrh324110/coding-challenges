import{p as e}from"./p5.min-2d0f902e.js";class n{constructor(){this.x=t.random(t.width),this.y=t.random(-200,0),this.z=t.random(0,20),this.ySpeed=t.map(this.z,0,20,4,10),this.len=t.map(this.z,0,20,10,20)}fall(){this.y+=this.ySpeed,this.y>t.height&&(this.x=t.random(t.width),this.y=t.random(-200,0),this.ySpeed=t.map(this.z,0,20,4,10))}show(){const s=t.map(this.z,0,20,1,3);t.strokeWeight(s),t.stroke(138,43,226),t.line(this.x,this.y,this.x,this.y+this.len)}}let h=Array.from({length:500});const o=i=>{i.setup=()=>{i.createCanvas(window.innerWidth,window.innerHeight-1),i.frameRate(240),h=h.map(()=>new n)},i.draw=()=>{i.background("#202124");for(let s=0;s<h.length;s++)h[s].fall(),h[s].show()}},t=new e(o);
