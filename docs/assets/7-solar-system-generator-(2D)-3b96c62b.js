import{p as h}from"./p5.min-2d0f902e.js";class r{constructor(a,i,o){this.radius=a,this.distance=i,this.orbitSpeed=o,this.angle=t.random(t.TWO_PI)}orbit(){this.angle+=this.orbitSpeed,this.planets&&this.planets.forEach(a=>a.orbit())}spawnMoons(a,i){this.planets=Array(a).fill(null).map(()=>new r(t.random(10,30)/i,(this.radius+t.random(100,200))/i,t.random(-.05,.05))),this.planets.forEach((o,d)=>{i<3&&o.spawnMoons(t.floor(t.random(0,4)),i+1)})}show(){t.push(),t.fill(255,100),t.rotate(this.angle),t.translate(this.distance,0),t.circle(0,0,this.radius*2),this.planets&&this.planets.forEach(a=>a.show()),t.pop()}}let n;const e=s=>{s.setup=()=>{s.createCanvas(window.innerWidth,window.innerHeight),s.frameRate(240),s.noStroke(),n=new r(50,0,0),n.spawnMoons(5,1)},s.draw=()=>{s.background("black"),s.translate(s.width/2,s.height/2),n.orbit(),n.show()}},t=new h(e);