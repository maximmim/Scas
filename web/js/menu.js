
let j = false;
const currentUrl = window.location.href;

window.addEventListener('load',()=>{


  document.getElementById("gd").scrollIntoView({ behavior: 'instant'});
if (localStorage.nick) {
  
document.getElementById("avatar").textContent = localStorage.nick[0]
}
})
function w() {
  localStorage.color = document.getElementById("colors").value;  
}

setInterval(() => {
document.getElementById("avatar").style.backgroundColor = localStorage.color
}, 1);

if (!localStorage.class)
{
  j= true
document.location.replace("./registers.html")
}




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
  let g = document.getElementById("if1")
  g.scrollIntoView({ behavior: 'smooth', block: 'center', behavior: 'smooth'});
}


function h2() {
  hide();
  let g = document.getElementById("if2") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}

function h3() {
  hide();
  let g = document.getElementById("if3") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}
function h4() {
  hide();
  let g = document.getElementById("if4") 
  g.scrollIntoView({ behavior: 'smooth', block: 'center',behavior: 'smooth' });
}




