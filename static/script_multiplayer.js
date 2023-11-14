let prosh = 0

const finish = document.getElementById("end");
const Level = document.getElementById("level");
const enemyopen = document.getElementById('enemyopen')
const enemy = document.getElementById("enemy");
const stone = document.getElementById("stone");
const enemy1 = document.getElementById("enemy1");
const stone1 = document.getElementById("stone1");
const stone2 = document.getElementById("stone2");
let Imvisible = true
let Susceptibility = true;
let levelcount = 1;
const meta = document.querySelector('meta[name="viewport"]');

if (localStorage.nick == 'Ростік') {
  meta.content = 'width=device-width, initial-scale=0.7'
}


// Функция для установки процента выполнения анимации



const socket = io();
const container = document.getElementById('game');
const playersMap = {}; // Объект для хранения ссылок на DOM-элементы игроков
let newDiv; // Объявляем newDiv в глобальной области видимости

// Обработчик события "player move"
socket.on("player move", (data) => {
  // Проверяем, существует ли DOM-элемент игрока с таким id
  if (playersMap[data.id]) {
    // Обновляем позицию текущего DOM-элемента игрока с использованием transform
    playersMap[data.id].style.transform = `translate(${data.x}px, ${data.y}px)`;
    
  }
});




socket.on("anim",(data) => {
  console.log(data)
  enemy.style.animationPlayState = 'running';
  enemy1.style.animationPlayState = 'running';
})

socket.emit('lock',localStorage.skin)

socket.on("sync",(data) => {
  document.location.reload()

})


socket.on('animationStatus', (paused) => {
  const enemy = document.getElementById('enemy');
  const enemy1 = document.getElementById('enemy1');
  if (paused) {
    enemy.style.animationPlayState = 'paused';
    enemy1.style.animationPlayState = 'paused';
  } else {
    enemy.style.animationPlayState = 'running';
    enemy1.style.animationPlayState = 'running';
  }
});
socket.on("reload",(data) => {
  document.location.reload()
})


window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
  socket.emit('amind','start')
});

Imvisible = false
setTimeout(Imvisible = true,10000)

socket.on("lvl",(data) => {
  setPosition(data)
})

// Обработчик события "player positions"
socket.on("player positions", (data) => {
  // Обновляем позиции всех игроков
  data.forEach((player) => {
    // Проверяем, существует ли DOM-элемент игрока с таким id
    if (!playersMap[player.id]) {
      // Создаем новый DOM-элемент для нового игрока
      newDiv = createPlayerElement(player); // Больше не используем "const", теперь просто присваиваем значение переменной
      // Сохраняем ссылку на DOM-элемент в объекте playersMap
      playersMap[player.id] = newDiv;
      // Добавляем новый div в контейнер
      container.appendChild(newDiv);
    } else {
      // Обновляем позицию текущего DOM-элемента игрока с использованием transform
      playersMap[player.id].style.transform = `translate(${player.x}px, ${player.y}px)`;
    }
  });
});

document.addEventListener("click", function (event) {
  const x = event.clientX - 70;
  const y = event.clientY - 60;

  // Отправляем новые координаты на сервер при клике
  socket.emit("player move", { x, y });
});

// Функция для создания DOM-элемента игрока
function createPlayerElement(player) {
  const newDiv = document.createElement('div');
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = "rgb(0, 0, 0)";
  newDiv.style.borderColor = "black";
  newDiv.style.borderWidth = "3px";
  newDiv.style.borderStyle = "solid";
  newDiv.style.borderRadius = "15px";
  newDiv.style.position = "absolute";
  newDiv.style.display = "block";
  newDiv.style.backgroundImage = player.img;
  newDiv.style.backgroundImage = player.img;
  newDiv.style.transition = 'transform 1s ease';
  newDiv.style.transform = `translate(${player.x}px, ${player.y}px)`; // Устанавливаем начальную позицию с использованием transform


  
function checkCollision() {
  Level.textContent = "Level:" + levelcount;
  document.getElementById("Record").textContent = "Record:" + localStorage.record;
  
  var blockRect = newDiv.getBoundingClientRect();
  var enemyRect = enemy.getBoundingClientRect();
  var stoneRect = stone.getBoundingClientRect();
  var enem1yRect = enemy1.getBoundingClientRect();
  var stone1Rect = stone1.getBoundingClientRect();
  var stone2Rect = stone2.getBoundingClientRect();
  var endRect = finish.getBoundingClientRect();
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

  }
}   if (
      blockRect.left < endRect.right &&
      blockRect.right > endRect.left &&
      blockRect.top < endRect.bottom &&
      blockRect.bottom > endRect.top
    ) {
      Susceptibility = false;
      levelcount += 1;
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
    //updaterecordtab()
  } else {
    console.log("Рекорд не побит. Текущий рекорд: " + localStorage.record);
  }
}

function gameover() {
  block.style.display = "none";
}

setInterval(checkCollision, 10);



function nextlevel() {
prosh++
  newDiv.style.display = "none";

Susceptibility = false; 
finish.style.display= 'block'
if (prosh >= 2) {
  socket.emit('sink','start')

  updateRecord(levelcount);
  
}


}

function nextleve() {  
  
  socket.emit('sink','start')
//randomblock()
}
/*
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
*/



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


  
  return newDiv;
}













// Обработчик события нажатия на экран

function sleep(ms) {
  setTimeout(() => {
    return
  }, ms);
}


window.addEventListener("DOMContentLoaded", function() {

  enemy.style.animationPlayState = 'paused';
  enemy1.style.animationPlayState = 'paused';


  window.screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  window.screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;


window.k = {"w":window.screenHeight,"h":window.screenWidth}
socket.emit('screan',window.k)


  var screenSizeText =
    "Ширина: " + window.screenWidth + "px, Высота: " + window.screenHeight + "px";

})


function closestop() {

}









document.querySelector('.stopmenu').addEventListener('click', function(event) {
  if (event.target.classList.contains('stopmenu')) {
    event.stopPropagation(); // Предотвращаем всплытие события
  }
});


const minx = 10

function randomblock() {
       enemy.style.top = random(120, window.screenHeight - 220) + "px";
      enemy1.style.top = random(120, window.screenHeight - 220) + "px";
enemyopen.style.bottom = random(200, 500) + "px";
  enemyopen.style.left = random(minx, window.screenWidth - 20) + "px";
      stone.style.left = random(minx, window.screenWidth - 100) + "px";
     stone.style.top =   random(120, window.screenHeight - 200) + "px";
     stone2.style.left = random(minx, window.screenWidth - 100) + "px";
      stone2.style.top = random(120, window.screenHeight - 200) + "px";
     stone1.style.left = random(minx, window.screenWidth - 100) + "px";
      stone1.style.top = random(120, window.screenHeight - 200) + "px";
  //megdumirec.style.left = random(minx, window.screenWidth - 100) + "px";
  //megdumirec.style.top = random(100, window.screenHeight - 200) + "px";



}






function getRandomElement(array) {
  // Генерируем случайный индекс от 0 до (длина массива - 1)
  var randomIndex = Math.floor(Math.random() * array.length);

  // Возвращаем случайный элемент из массива
  return array[randomIndex];
}




let isOpen = true;

socket.on('stateUpdate', (isOpen) => {
  if (isOpen) {
    window.colision = true;
    enemyopen.style.backgroundImage = 'url("/img/enemy_close.png")';
  } else {
    window.colision = false;
    enemyopen.style.backgroundImage = 'url("/img/enemy_open.png")';
  }
});

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


if (localStorage.skin == 6) {


dwdd()
function dwdd() {
      block.style.backgroundImage = 'url("/img/skins/benat_open.png")'
      setTimeout(() => {
        block.style.transition = 'transform 1s ease';
        dawfdw()
      }, 4000);
  }
  function dawfdw() {
      block.style.backgroundImage = 'url("/img/skins/benat_close.png")'
      setTimeout(() => {
        block.style.transition = 'transform 0.3s ease';
        
        dwdd()
      }, 1500);
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


