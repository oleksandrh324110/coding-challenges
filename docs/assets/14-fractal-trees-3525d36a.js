import{p as o}from"./p5.min-748d50af.js";const i=t=>{let a=t.PI/4,n=100;const r=e=>{e<4||(t.line(0,0,0,-e),t.translate(0,-e),t.push(),t.rotate(a),r(e*(3/4)),t.pop(),t.push(),t.rotate(-a),r(e*(3/4)),t.pop())};t.setup=()=>{t.createCanvas(window.innerWidth,window.innerHeight),t.frameRate(240)},t.draw=()=>{t.background(51),t.stroke(255),t.translate(t.width/2,t.height*.85),a=t.map(t.mouseX,0,t.width,0,t.PI),n=t.map(t.mouseY,t.height,0,0,200),r(n)}};new o(i);