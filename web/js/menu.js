let url = "./bufet.html"; 
const dataToEncode = { "class": '7-М' };
const encodedData = encodeURIComponent(JSON.stringify(dataToEncode));

const currentUrl = window.location.href;
const urlWithEncodedData = `f=${encodedData}`;

console.log(urlWithEncodedData);


function randomcol() {
  const baseValue = 80;
  const range = 75;
  const r = Math.floor(baseValue + Math.random() * range);
  const g = Math.floor(baseValue + Math.random() * range);
  const b = Math.floor(baseValue + Math.random() * range);

  return `rgba(${r}, ${g}, ${b})`;
}
function jdw(c1,c2, tn) {
  function getRGBComponents(color) {
    return color.match(/\d+/g).map(Number);
  }

  const rgb1 = getRGBComponents(c1);
  const rgb2 = getRGBComponents(c2);

  const diffR = Math.abs(rgb1[0] - rgb2[0]);
  const diffG = Math.abs(rgb1[1] - rgb2[1]);
  const diffB = Math.abs(rgb1[2] - rgb2[2]);

  return diffR <= tn && diffG <= tn && diffB <= tn;
}
function g() {
  const dw = new URLSearchParams(document.getElementById("idclass").value);
if (dw.get('f')) {
    const wa = JSON.parse(decodeURIComponent(dw.get("f")));
  console.log(wa)
  localStorage.class = wa.class
  alert("Ви зарегестровані у клас :)")
  window.location.reload()
}
else {
  alert("Помилка")
}
}
document.addEventListener("DOMContentLoaded",()=>{
 
if (!localStorage.class) {
  document.getElementById("idclass").style.display = "block";
  document.getElementById("buttid").style.display = "block"
}
else {
   document.getElementById("buttid").style.display = "none"
  document.getElementById("idclass").style.display = "none"
} 






if (!localStorage.class) {
  alert("Ви не запегестровані у класі... ")
}
const gl = document.getElementById("Homes")
const d = document.getElementById("msw")
const d2 = document.getElementById("msw2")
const g = document.getElementById("frame1")
const g2 = document.getElementById("frame2")
const g3 = document.getElementById("frame3")
const d3 = document.getElementById("msw3")
const d4 = document.getElementById("msw4")
let startX = 0;

d.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

d.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
if (deltaX < 0) {
  gl.style.transform = `translate(-50%,0%)`;
   d.style.transform = `translate(-70%,25%)`;
   window.frame.style.transform = `translate(-200%,0%)`;
   g.style.display = "block"
   g.style.transform = `translate(-200%,0%)`;
   d2.style.display = "block"
   d2.style.transform = `translate(70%,25%)`;
   document.getElementById("q").style.transform = `translate(30px,0px)`;
   setTimeout(()=>{
d.style.display= 'none';
window.frame.style.display = "none"
   },100)
   
   setTimeout(()=>{
    g.style.transform = `translate(-50%,0%)`;
    d2.style.transform = `translate(0%,25%)`;

   },500)
  }

});


d2.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

d2.addEventListener('touchend', (e) => {
  gl.style.transform = `translate(-50%,0%)`;
  const s =document.getElementById("msw");
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
if (deltaX > 0) {
   d2.style.transform = `translate(70%,25%)`;
   d.style.display = "block"
   d.style.transform = `translate(-70%,25%)`;
   g.style.transform = `translate(-200%,0%)`;
  window.frame.style.display = "block"
  document.getElementById("q").style.transform = `translate(0px,0px)`;
   setTimeout(()=>{
window.frame.style.transform = `translate(-50%,0%)`;
d2.style.display= 'none'
   },100)
   
   setTimeout(()=>{
    
    d.style.transform = `translate(0%,25%)`;

   },500)
  }
else if (deltaX < 0){
  gl.style.transform = `translate(-50%,0%)`;
   d2.style.transform = `translate(-70%,25%)`;
   g.style.display = "block"
   g.style.transform = `translate(-200%,0%)`;
   g2.style.display = "block"
   g2.style.transform = `translate(-200%,0%)`;
   d3.style.display = "block"
   d3.style.transform = `translate(70%,25%)`;
   document.getElementById("q").style.transform = `translate(60px,0px)`;
   setTimeout(()=>{
d2.style.display= 'none';
g.style.display = "none"
   },100)
   
   setTimeout(()=>{
    d3.style.transform = `translate(0%,25%)`;
    g2.style.transform = `translate(-50%,0%)`;
   },500)
  }

});


d3.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

d3.addEventListener('touchend', (e) => {
  gl.style.transform = `translate(-50%,0%)`;
  const s =document.getElementById("msw");
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
if (deltaX > 0) {
   d3.style.transform = `translate(70%,25%)`;
   d2.style.display = "block"
   d2.style.transform = `translate(-70%,25%)`;
   g.style.display="block"
 g.style.transform = `translate(-200%,0%)`;
 g2.style.transform = `translate(200%,0%)`;

  //window.frame.style.display = "block"
  document.getElementById("q").style.transform = `translate(30px,0px)`;
   setTimeout(()=>{
  g2.style.display = "none"
   //window.frame.style.transform = `translate(-50%,0%)`;
  d2.style.display= 'block'
   },100)
   
   setTimeout(()=>{
    g.style.transform = `translate(-50%,0%)`;
    d2.style.transform = `translate(0%,25%)`;

   },500)
  }

  else if (deltaX < 0){
   d3.style.transform = `translate(-70%,25%)`;
   g2.style.display = "block"
   g2.style.transform = `translate(-200%,0%)`;
   g3.style.display = "block"
   g3.style.transform = `translate(-200%,0%)`;
   d4.style.display = "block"
   d4.style.transform = `translate(70%,25%)`;
   document.getElementById("q").style.transform = `translate(90px,0px)`;
   setTimeout(()=>{
d3.style.display= 'none';
g2.style.display = "none"
   },100)
   
   setTimeout(()=>{
    d4.style.transform = `translate(0%,25%)`;
    g3.style.transform = `translate(-50%,0%)`;
   },500)
  }

  

});

d4.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

d4.addEventListener('touchend', (e) => {
  gl.style.transform = `translate(-50%,0%)`;
  const s =document.getElementById("msw");
  const endX = e.changedTouches[0].clientX;
  const deltaX = endX - startX;
if (deltaX > 0) {
   d4.style.transform = `translate(70%,25%)`;
   d3.style.display = "block"
   d3.style.transform = `translate(-70%,25%)`;
   g2.style.display="block"
 g2.style.transform = `translate(-200%,0%)`;
 g3.style.transform = `translate(200%,0%)`;

  //window.frame.style.display = "block"
  document.getElementById("q").style.transform = `translate(60px,0px)`;
   setTimeout(()=>{
  g3.style.display = "none"
   //window.frame.style.transform = `translate(-50%,0%)`;
  d3.style.display= 'block'
   },100)
   
   setTimeout(()=>{
    g2.style.transform = `translate(-50%,0%)`;
    d3.style.transform = `translate(0%,25%)`;

   },500)
  }})

window.frame = document.getElementById("if1")


let startY = 0;



gl.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

gl.addEventListener('touchend', (e) => {
  const s =document.getElementById("msw");
  const endY = e.changedTouches[0].clientY;
  const deltaY = endY - startY;
if (deltaY < 0) {
document.getElementById("Homestg").style.display = "block"
document.getElementById("Homestg").style.transform = `translate(-50%,-50%)`;
  gl.style.transform = `translate(-50%,-200%)`;

  }
  else if (deltaY > 0) {

    gl.style.transform = `translate(-50%,0%)`;
  
  }})
    


})



function reload() {
if (url === "./bufet.html") {
  window.frame.src = url; 
}
else if (url === "./index.html") {
  window.frame.src = url
}
console.log(url)
}


