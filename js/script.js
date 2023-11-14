const block = document.getElementById("block");
const finish = document.getElementById("end");
const Level = document.getElementById("level");
const enemyopen = document.getElementById('enemyopen')
const enemy = document.getElementById("enemy");
const stone = document.getElementById("stone");
const enemy1 = document.getElementById("enemy1");
const stone1 = document.getElementById("stone1");
const stone2 = document.getElementById("stone2");
const bulbash = document.getElementById("bibbudd")
const migd = document.getElementById("interworldly")
const dodik = document.getElementById("dodik")





var war;
if (localStorage.warning == 1) {
  war = 1
}
else if (localStorage.warning == 2) {
  war = 2
}
else if (localStorage.warning == 3) {
  war= 3
}
else if (localStorage.warning == 4) {
  war= 4
}
function post() {


if (war == 3) {
  stone.style.display = "block";
  enemy.style.display = "block";
  stone1.style.display = "block";
  enemy1.style.display = "block";
  stone2.style.display = "block";

  migd.style.display = 'block'
  enemyopen.style.display = "block";
  bulbash.style.display = "block";
}
else if (war == 1) {
  stone.style.display = "block";
  enemy.style.display = "block";
  stone1.style.display = "block";
  enemy1.style.display = "block";
  stone2.style.display = "block";
  migd.style.display = 'none'
  enemyopen.style.display = "block";
  bulbash.style.display = "none";
}
else if (war == 2) {
  stone.style.display = "block";
  enemy.style.display = "block";
  stone1.style.display = "block";
  enemy1.style.display = "block";
  stone2.style.display = "block";
  migd.style.display = 'block'
  enemyopen.style.display = "block";
  bulbash.style.display = "none";
}
else if (war == 4) {


}
} 



if (war == 4) {
 
}

let Imvisible = true
let Susceptibility = true;
let levelcount = 1;
const meta = document.querySelector('meta[name="viewport"]');



if (localStorage.size == 1) {
  meta.content = 'width=device-width, initial-scale=0.7'
}
else if (localStorage.size == 2) {
  meta.content = 'width=device-width, initial-scale=0.8'
}

else if (localStorage.size == 3) {
  meta.content = 'width=device-width, initial-scale=0.9'
}



document.addEventListener("click", function(event) {
  if (localStorage.skin == 5) {
    var x = event.clientX  -25
    var y = event.clientY -25
  }
  else {
      var x = event.clientX - 70;
  var y = event.clientY - 60;
  }
  // Получаем координаты клика


  // Плавно перемещаем блок к указанным координатам
  block.goto(x, y);


});


window.addEventListener("DOMContentLoaded", function() {
  window.screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  window.screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  var screenSizeText =
    "Ширина: " + window.screenWidth + "px, Высота: " + window.screenHeight + "px";

    if (localStorage.skin == 1) {
      block.style.backgroundImage = `url("/img/skins/logo.png")`
    }
    else if (localStorage.skin == 2) {
      block.style.backgroundImage = `url("/img/skins/playr_white.png")`
      block.style.border = 'none';
      block.style.borderStyle = 'initial';
    }
    else if (localStorage.skin == 3) {
      block.style.backgroundImage = `url("/img/skins/skin.png")`
      block.style.border = 'none';
      block.style.borderStyle = 'initial';
    }
    else if (localStorage.skin == 4) {
      block.style.backgroundImage = `url("/img/skins/alina_d2.png")`
      document.getElementById('ushki').style.width = '123px';
      document.getElementById('ushki').style.height = '120px';
      document.getElementById('ushki').style.top = '-60px';
      document.getElementById('ushki').style.left = '-10px';
      document.getElementById('ushki').style.position = 'absolute';
      document.getElementById('ushki').style.display = 'block';
      document.getElementById('ushki').style.backgroundImage = "url('/img/skins/zayush.png')";
      document.getElementById('ushki').style.backgroundSize = '116px 202px';

    }
    else if (localStorage.skin == 5) {
      block.style.backgroundImage = `url("/img/skins/skin_d2.png")`
      block.style.border = 'none';
      block.style.borderStyle = 'initial';
    }
    else if (localStorage.skin == 6) {
      block.style.backgroundImage = `url("/img/skins/benat_close.png")`
      block.style.border = 'none';
      block.style.borderStyle = 'initial';
    }
    else if (localStorage.skin == 7) {
      block.style.backgroundImage =  `url("/img/skins/kiril_d1.png")`

    }
    else if (localStorage.skin == 7) {
      block.style.backgroundImage =  `url("/img/skins/kiril_d1.png")`

    }
    else if (localStorage.skin == 8) {
      let color = JSON.parse(localStorage.custom)
      block.style.backgroundImage =  `url("/img/custom.png")`
      block.style.backgroundColor = color.color
      var morda = localStorage.morda
    

    
    if (morda == 1) {
      block.style.backgroundImage = `url("/img/custom/custom.png")`

    }
    else if (morda == 2) {
      block.style.backgroundImage = `url("/img/custom/custom_d2.png")`

    }
    else if (morda == 3) {
      block.style.backgroundImage = `url("/img/custom/custom_d3.png")`

    }
    else if (morda == 4) {
      block.style.backgroundImage = `url("/img/custom/custom_d4.png")`
    }
    else if (morda == 5) {
      block.style.backgroundImage = `url("/img/custom/custom_d5.png")`

    }
    else if (morda == 6) {
      block.style.backgroundImage = `url("/img/custom/custom_d6.png")`

    }
    }
if (localStorage.da == undefined) {
  daw();
  enemy.style.display = "none";
  enemy1.style.display = "block";
  stone1.style.display = "block";
  
nextleve()


}
else {

  var obj = JSON.parse(this.localStorage.da);
  stone.style.display = 'block'
  stone1.style.display = 'block'
  stone2.style.display = 'block'
  enemy.style.display = 'block'
  enemy1.style.display = 'block'
  enemyopen.style.display = 'block'
  migd.style.display = "none"
  bulbash.style.display = "none"
  console.log('reload!!!')
  setPosition(obj)
  localStorage.removeItem('da')
}

})

block.goto = function(x, y) {
  if (Susceptibility) {
    block.style.transform = `translate(${x}px, ${y}px)`;
  }
}
function closestop() {

}



var closemenu = false
function closes() {

    closemenu = false
      document.getElementById('stopmenu').style.display = 'none'
      
 
  enemy.style.animationPlayState = "running";
  enemy1.style.animationPlayState = "running";
  
 Susceptibility = true

  
}
let touchTimeout;

function openstop() {
  touchTimeout = setTimeout(() => {
    closemenu = true;
    Susceptibility = false;
    document.getElementById('stopmenu').style.display = 'block';
    enemy.style.animationPlayState = "paused";
    enemy1.style.animationPlayState = "paused";
  }, 1000); // Установите нужное время задержки в миллисекундах (в данном случае 1 секунда)
}

function stopmenuTouchEnd() {
  clearTimeout(touchTimeout); // Очищаем таймаут при отпускании пальца
}

document.getElementById('Hud').addEventListener('touchstart', openstop);
document.getElementById('Hud').addEventListener('touchend', stopmenuTouchEnd);








document.querySelector('.stopmenu').addEventListener('click', function(event) {
  if (event.target.classList.contains('stopmenu')) {
    event.stopPropagation(); // Предотвращаем всплытие события
  }
});


const minx = 10

function randomblock() {
  enemy.style.top = random(120, window.screenHeight - 220) + "px";
  enemy1.style.top = random(120, window.screenHeight - 220) + "px";
  
  enemyopen.style.bottom = random(0, window.screenHeight- 200) + "px";
  enemyopen.style.left = random(200, window.screenWidth - 50) + "px";
  stone.style.left = random(minx, window.screenWidth - 100) + "px";
  stone.style.top =   random(120, window.screenHeight - 200) + "px";
  stone2.style.left = random(minx, window.screenWidth - 100) + "px";
  stone2.style.top = random(120, window.screenHeight - 200) + "px";
  stone1.style.left = random(minx, window.screenWidth - 100) + "px";
  stone1.style.top = random(120, window.screenHeight - 200) + "px";
 bulbash.style.left = random(120, window.screenWidth - 100) + "px";
 bulbash.style.top = random(120, window.screenHeight - 200) + "px";
  //megdumirec.style.left = random(minx, window.screenWidth - 100) + "px";
  //megdumirec.style.top = random(100, window.screenHeight - 200) + "px";


  moveStone(stone);
  moveStone(stone1);
  moveStone(stone2);
  moveStone(enemyopen)
}

function dwad() {
  
  document.getElementById("bibbudopt").style.backgroundColor = 'rgb(194, 84, 80)'

  document.getElementById("bibbudopt").classList.add("bib")
  setTimeout(() => {
    document.getElementById("bibbudopt").classList.remove("bib")
    document.getElementById("bibbudopt").style.transform = "scale(1)";
    setTimeout(()=>{
document.getElementById("bibbudopt").style.backgroundColor = 'rgb(235, 60, 53)'
     setTimeout(()=> {document.getElementById("bibbudopt").style.transform = "scale(0)"},1000)
 
    },5000)
  }, 3000);
}


var intd = setInterval(dwad,17000)
dwad()
setInterval(() =>{

  migd.classList.add("mic")

setTimeout(()=>{


  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  
  var blockLeft = block.offsetLeft;
  var blockTop = block.offsetTop;
  
  var minLeft = blockLeft + 150;
  var maxLeft = screenWidth - 100;
  var minTop = blockTop + 150;
  var maxTop = screenHeight - 100;
  
  migd.style.left = random(minLeft, maxLeft) + "px";
  migd.style.top = random(minTop, maxTop) + "px";
  migd.classList.remove('mic')
},900)
},random(4000,6000))






function getRandomElement(array) {
  // Генерируем случайный индекс от 0 до (длина массива - 1)
  var randomIndex = Math.floor(Math.random() * array.length);

  // Возвращаем случайный элемент из массива
  return array[randomIndex];
}




let isOpen = true;

setInterval(() => {
  if (isOpen) {
    window.colision = true;
    enemyopen.style.backgroundImage = 'url("/img/enemy_close.png")';
  } else {
    window.colision = false;
    enemyopen.style.backgroundImage = 'url("/img/enemy_open.png")';
  }
  isOpen = !isOpen;


}, 2500);

let g  = ['url("/img/skins/skin_d1.png")','url("/img/skins/skin_d2.png")','url("/img/skins/skin_d4.png")','url("/img/skins/skin_d3.png")','url("/img/skins/skin_d5.png")']
if (localStorage.skin == 5) {
  block.style.width = '50px'
block.style.height = '50px'
block.style.backgroundSize =  '50px 50px'
block.style.borderRadius = '10px'
block.style.transition = 'transform 1.5s ease';
setInterval(() => {

document.getElementById('ushki').style.display = 'none'

  var skin = getRandomElement(g);
  if (skin == 'url("/img/skins/skin_d1.png")') {
    block.style.backgroundImage = skin
  }
  else if (skin == 'url("/img/skins/skin_d2.png")') {
    block.style.backgroundImage = skin
  }
  else if (skin == 'url("/img/skins/skin_d3.png")') {
    block.style.backgroundImage = skin
  }
  else if (skin == 'url("/img/skins/skin_d4.png")') {
    block.style.backgroundImage = skin
  }
  else if (skin == 'url("/img/skins/skin_d5.png")') {
    block.style.backgroundImage = skin


  }


}, random(2000,4500));
}

function r1() {
      block.style.backgroundImage = 'url("/img/skins/benat_close.png")'
        block.style.transition = 'transform 1s ease';

}
function r2() {
   block.style.backgroundImage = 'url("/img/skins/benat_open.png")'
        block.style.transition = 'transform 0.3s ease';
}
if (localStorage.skin == 6) {
  gw()
function gw() {
  
  r1();

  setTimeout(() => {
    r2();

    setTimeout(gw, 3000);
  }, 6000);
}

}


if (localStorage.skin == 7) {

  var isOpend = true;

dwd()
function dwd() {
      block.style.backgroundImage = 'url("/img/skins/kiril_d1.png")';
      setTimeout(() => {
        Imvisible =false
        dawfd()
      }, 4000);
  }
  function dawfd() {
      block.style.backgroundImage = 'url("/img/skins/kiril_d2.png")';
      setTimeout(() => {
        Imvisible = true
        dwd()
      }, 1200);
    }
}




function daw() {
  window.f = random(1, 2);
}
// Get references to the relevant elements




function random(number1, number2) {
  return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
}




function getPositionData() {
  var stone = document.getElementById('stone');
  var stone1 = document.getElementById('stone1');
  var stone2 = document.getElementById('stone2');
  var enemy = document.getElementById('enemy');
  var enemy1 = document.getElementById('enemy1');
  var enemyopen = document.getElementById('enemyopen');
  var end = document.getElementById("end");
  var positionData = {
    stone: {
      x: stone.getBoundingClientRect().left,
      y: stone.getBoundingClientRect().top
    },
    stone1: {
      x: stone1.getBoundingClientRect().left,
      y: stone1.getBoundingClientRect().top
    },
    stone2: {
      x: stone2.getBoundingClientRect().left,
      y: stone2.getBoundingClientRect().top
    },
    enemy: {
      x: enemy.getBoundingClientRect().left,
      y: enemy.getBoundingClientRect().top
    },
    enemy1: {
      x: enemy1.getBoundingClientRect().left,
      y: enemy1.getBoundingClientRect().top
    },
    enemyopen: {
      x: enemyopen.getBoundingClientRect().left,
      y: enemyopen.getBoundingClientRect().top
    },
    end: {
      x: window.f,
    }
  };

return positionData;
}

function setPosition(positionData) {
  try {

    
  
  var elements = ['stone', 'stone1', 'stone2', 'enemy', 'enemy1', 'enemyopen','end'];

  elements.forEach(function(elementId) {
    var element = document.getElementById(elementId);

    if (element.id == 'end') {
      if (positionData[elementId].x == 1) {
        element.style.left = 0 + "px";
      }
      else {
        element.style.right = 0 + "px";
      }
      element.style.bottom = positionData[elementId].y + "px";
}
else {
      element.style.left = positionData[elementId].x + 'px';
    element.style.top = positionData[elementId].y + 'px';
}
  });

} 
  catch (error) {
  alert("Ваше id не вірне")
  localStorage.removeItem("da")
  document.location.replace("/html/menu.html")
  }
}


 
      function copyObjectToClipboard(object) {
        var jsonString = JSON.stringify(object);
        var textarea = document.createElement('textarea');
        textarea.value = jsonString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      



      
      // Функция для установки позиций (x, y) объектов
      function setObjectPositions() {
          for (var id in localStorage.da) {
              var element = document.getElementById(id);
              if (element) {
                  element.style.left = localStorage.da[id].x + "px";
                  element.style.top = localStorage.da[id].y + "px";
                  if (element.id == 'end') {
                    if (localStorage.da[id].x == 1) {
                      element.style.left = 0 + "px";
                    }
                    else {
                      element.style.right = 0 + "px";
                    }
                    element.style.bottom = localStorage.da[id].y + "px";
              }
              }
          }
      }

      // Вызываем функцию после загрузки страницы
   





function sendserver(data) {
  fetch("/get", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
    })
    .catch(error => {
      console.log("Произошла ошибка:", error);
    });
}
/*
fetch("https://644ab0e4a8370fb32155be44.mockapi.io/code")    .then(response => response.json())
.then(data => {
eval(data[0].js)
})
.catch(error => {
  console.error("Произошла ошибка при получении данных:", error);
});
*/
  
//getserver();

function getserver() {
  fetch("/bd.json")
    .then(response => response.json())
    .then(data => {
      data.map(d => {
        console.log(d.name);
      });
      // Добавьте здесь свой код для обработки полученных данных

      // Обновите позиционирование stone2

    })
    .catch(error => {
      console.error("Произошла ошибка при получении данных:", error);
    });
}

function checkCollision() {
  Level.textContent = "Level:" + levelcount;
  document.getElementById("Record").textContent = "Record:" + localStorage.record;
  var blockRect = block.getBoundingClientRect();
  var enemyRect = enemy.getBoundingClientRect();
  var stoneRect = stone.getBoundingClientRect();
  var enem1yRect = enemy1.getBoundingClientRect();
  var stone1Rect = stone1.getBoundingClientRect();
  var stone2Rect = stone2.getBoundingClientRect();
  var endRect = finish.getBoundingClientRect();
  var migdRect = migd.getBoundingClientRect()
  var bulbashRect = document.getElementById("bibbudopt").getBoundingClientRect()
  var enemyopenRect = enemyopen.getBoundingClientRect();
if (Imvisible) {


  if (Susceptibility) {
    if (
      blockRect.left < enemyRect.right &&
      blockRect.right > enemyRect.left &&
      blockRect.top < enemyRect.bottom &&
      blockRect.bottom > enemyRect.top
    ) {
      nextleve();
    } else if (
      blockRect.left < enem1yRect.right &&
      blockRect.right > enem1yRect.left &&
      blockRect.top < enem1yRect.bottom &&
      blockRect.bottom > enem1yRect.top
    ) {
      nextleve();
    } else if (
      blockRect.left < stone1Rect.right &&
      blockRect.right > stone1Rect.left &&
      blockRect.top < stone1Rect.bottom &&
      blockRect.bottom > stone1Rect.top
    ) {
      nextleve();
    } else if (
      blockRect.left < bulbashRect.right &&
      blockRect.right > bulbashRect.left &&
      blockRect.top < bulbashRect.bottom &&
      blockRect.bottom > bulbashRect.top
    ) {
      nextleve();
    } else if (
      blockRect.left < stoneRect.right &&
      blockRect.right > stoneRect.left &&
      blockRect.top < stoneRect.bottom &&
      blockRect.bottom > stoneRect.top
    ) {
      nextleve();
    } else if (
      blockRect.left < stone2Rect.right &&
      blockRect.right > stone2Rect.left &&
      blockRect.top < stone2Rect.bottom &&
      blockRect.bottom > stone2Rect.top
    ) {
      nextleve();
    }
    else if (
      blockRect.left < migdRect.right &&
      blockRect.right > migdRect.left &&
      blockRect.top < migdRect.bottom &&
      blockRect.bottom > migdRect.top
    ) {
      nextleve();
    }
  }
}   if (
      blockRect.left < endRect.right &&
      blockRect.right > endRect.left &&
      blockRect.top < endRect.bottom &&
      blockRect.bottom > endRect.top
    ) {
      Susceptibility = false;
      if (war == 1)
      {
        levelcount += 0.5;

      }
      
      else if (war == 2) {
        levelcount += 1;
      }
      else if (war == 3) {
        levelcount +=1.5
      }
      
      finish.style.display = 'none'
      nextlevel();
    }
  if (window.colision === true) {
    if (
      blockRect.left < enemyopenRect.right &&
      blockRect.right > enemyopenRect.left &&
      blockRect.top < enemyopenRect.bottom &&
      blockRect.bottom > enemyopenRect.top
    ) {
      nextleve();
    }
  }

  if (window.f === 1) {
    finish.style.right = "";
    finish.style.left = 0 + "px";
  } else if (window.f === 2) {
    finish.style.left = "";
    finish.style.right = 0 + "px";
  }
  if (localStorage.skin == 'white') {
    document.getElementById("block").style.backgroundImage = 'url("/img/logo.png")';
  }
  else if (localStorage.skin == 'black') {
    document.getElementById("block").style.backgroundImage = 'url("/img/playr.png")';
  }
}

// Изначальное значение рекорда
if (localStorage.record === undefined) {
  localStorage.record = 0;
}

// Функция для обновления рекорда
function updateRecord(score) {
  if (score > localStorage.record) {
    localStorage.record = score;
    console.log("Новый рекорд установлен: " + localStorage.record);
  } else {
    console.log("Рекорд не побит. Текущий рекорд: " + localStorage.record);
  }
}

function gameover() {
  block.style.display = "none";
}

setInterval(checkCollision, 10);

function nextlevel() {

  daw();

  Susceptibility = false;
  stone.style.display = "none";
  enemy.style.display = "none";
  block.style.transform = "";
  stone1.style.display = "none";
  bulbash.style.display = "none";
  enemy1.style.display = "none";
  stone2.style.display = "none";
  migd.style.display = 'none'
  enemyopen.style.display = "none";
  if (localStorage.skin == 5) {
    block.style.backgroundImage = 'url("/img/skins/skin_d5.png")';
    setTimeout(()=>{
    block.style.backgroundImage = 'url("/img/skins/skin_d2.png")';
  },1000)
  }
  if (localStorage.skin == 4) {
    document.getElementById('ushki').style.backgroundImage = 'url("/img/skins/zayush_d2.png")';
    setTimeout(()=>{
document.getElementById('ushki').style.backgroundImage = 'url("/img/skins/zayush.png")';
    },1000)
    
  }
  setTimeout(() => {
   post()
    finish.style.display= 'block'
    enemy.style.animationPlayState = "paused";
    enemy1.style.animationPlayState = "paused";
    Susceptibility = true;
    setTimeout(() => {
      enemy.style.animationPlayState = "running";
      enemy1.style.animationPlayState = "running";
          }, 200);
    
  }, 1000);
updateRecord(levelcount)
randomblock()

}

function nextleve() {
  Susceptibility = false;
  if (localStorage.skin == 5) {
    block.style.backgroundImage = 'url("/img/skins/skin_d6.png")';
  }
  daw();
  levelcount = 1;
  stone.style.display = "none";
  enemy.style.display = "none";
  block.style.transform = "";
  stone1.style.display = "none";
  enemy1.style.display = "none";
  bulbash.style.display = "none";
  stone2.style.display = "none";
  migd.style.display = 'none'
  enemyopen.style.display = "none";
  setTimeout(() => {
    
    
    post()
    enemy.style.animationPlayState = "paused";
    enemy1.style.animationPlayState = "paused";
    Susceptibility = true;
    setTimeout(() => {
      enemy.style.animationPlayState = "running";
      enemy1.style.animationPlayState = "running";
          }, 200);

  }, 1000); 




randomblock()
}

function moveStone(element) {
  const blockRect = block.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();

  let newX =random(10, window.screenWidth - 100) + "px";

  let newY = random(10, window.screenWidth - 100) + "px";


  // Проверяем пересечение с другими элементами
  let collided = checkCollisionWithElements(newX, newY, element);

  while (collided) {
    newX =  random(10, window.screenWidth - 100) + "px";
    newY =  random(120, window.screenHeight - 200) + "px";
    collided = checkCollisionWithElements(newX, newY, element);
  }

  element.style.left = newX + "px";
  element.style.top = newY + "px";
}




function savedata(data) {
fetch('/save-data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    console.log('Data saved successfully:', result);
  })
  .catch(error => {
    console.error('Error saving data:', error);
  });
}



//setInterval(randomblock,2000)

function checkCollisionWithElements(x, y, element) {
  const elementRect = element.getBoundingClientRect();

  if (
    x < elementRect.right &&
    x + 50 > elementRect.left &&
    y < elementRect.bottom &&
    y + 50 > elementRect.top
  ) {
    return true; // Есть пересечение с другим элементом
  }

  return false; // Нет пересечения
}
