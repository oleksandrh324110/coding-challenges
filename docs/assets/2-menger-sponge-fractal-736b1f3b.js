import{p as w}from"./p5.min-2d0f902e.js";class c{constructor(t,e,n,r){this.r=r,this.pos=new w.Vector(t,e,n)}show(){o.push(),o.translate(this.pos.x,this.pos.y,this.pos.z),o.box(this.r),o.pop()}generate(){const t=[],e=this.r/3;for(let n=-1;n<2;n++)for(let r=-1;r<2;r++)for(let h=-1;h<2;h++)o.abs(n)+o.abs(r)+o.abs(h)<=1||t.push(new c(this.pos.x+n*e,this.pos.y+r*e,this.pos.z+h*e,e));return t}}let i=0,a=[];const l=s=>{s.setup=()=>{s.createCanvas(window.innerWidth,window.innerHeight,s.WEBGL),s.frameRate(240),a.push(new c(0,0,0,200))},s.mousePressed=()=>{const t=[];a.forEach(e=>t.push(...e.generate())),a=t},s.draw=()=>{s.background("#202124"),s.noStroke(),s.lights(),s.fill(255),i+=.01,s.rotateX(i),s.rotateY(i),a.forEach(t=>t.show())}},o=new w(l);