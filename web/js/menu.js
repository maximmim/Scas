let j = false;
const currentUrl = window.location.href;

if (!localStorage.class)
{
  j= true
  location.href = "/registration"
}



  




window.addEventListener('load',()=>{

window.gg = document.getElementById("ws");





//h1()



if (localStorage.nick) {
  
document.getElementById("avatar").textContent = localStorage.nick[0]
}
})
function w() {
  localStorage.color = document.getElementById("colors").value;  
}

setInterval(() => {
  
document.getElementById("avatar").style.borderColor = localStorage.color
}, 1);




let isopen = false;
let isopens = false;

function gf() {
  if (!j) {
  if (isopen) {
hide()
  }
  else {
    show()
  }
}
}
function show() {
  document.getElementById("Head-full").style.transform = "translate(100%)"
  isopen = true
}
function hide() {
  document.getElementById("Head-full").style.transform = "translate(-100%)"
  isopen = false
}



function h1() {
  hide();
  gg.style.transform = 'translate(0%,0px)'
  let g = document.getElementById("if1")
  g.scrollIntoView({ behavior: 'smooth', block: 'center', behavior: 'smooth'});
}


function h2() {
  hide();
  gg.style.transform = 'translate(0%,30px)'
  let g = document.getElementById("if2") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}

function h3() {
  hide();
  gg.style.transform = 'translate(0%,60px)'
  let g = document.getElementById("if3") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}

function h4() {
  hide();
  gg.style.transform = 'translate(0%,90px)'
  let g = document.getElementById("if4") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}


function h5() {
  hide();
  gg.style.transform = 'translate(0%,90px)'
  let g = document.getElementById("if5") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}

