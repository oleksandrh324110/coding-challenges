import{p as d}from"./p5.min-2d0f902e.js";let l=50;const m=e=>{e.setup=()=>{e.createCanvas(window.innerWidth,window.innerHeight),e.frameRate(240),e.pixelDensity(1),console.log(e.width*e.height)},e.draw=()=>{e.loadPixels();for(let t=0;t<e.width;t++)for(let a=0;a<e.height;a++){let o=e.map(t,0,e.width,-1.5,1.5)*(window.innerWidth/window.innerHeight),s=e.map(a,0,e.height,-1.5,1.5);for(var i=0;i<l;i++){const r=o*o-s*s,w=2*o*s;if(e.abs(r+w)>16)break;o=r+e.map(e.mouseX,0,e.width,-2,2),s=w+e.map(e.mouseY,0,e.height,-2,2)}let h=e.map(i,0,l,0,255);i===l&&(h=0);const n=(t+a*e.width)*4;e.pixels[n+0]=h,e.pixels[n+1]=h,e.pixels[n+2]=h,e.pixels[n+3]=255}e.updatePixels()}};new d(m);