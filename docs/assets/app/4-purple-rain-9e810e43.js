import{p as e}from"../p5.min-748d50af.js";class n{constructor(){this.x=t.random(t.width),this.y=t.random(-200,0),this.z=t.random(0,20),this.ySpeed=t.map(this.z,0,20,4,10),this.len=t.map(this.z,0,20,10,20)}fall(){this.y+=this.ySpeed,this.y>t.height&&(this.x=t.random(t.width),this.y=t.random(-200,0),this.ySpeed=t.map(this.z,0,20,4,10))}show(){const i=t.map(this.z,0,20,1,3);t.strokeWeight(i),t.stroke(138,43,226),t.line(this.x,this.y,this.x,this.y+this.len)}}let h=Array.from({length:500});const o=s=>{s.setup=()=>{s.createCanvas(window.innerWidth,window.innerHeight-1),h=h.map(()=>new n)},s.draw=()=>{s.background("#202124");for(let i=0;i<h.length;i++)h[i].fall(),h[i].show()}},t=new e(o);
