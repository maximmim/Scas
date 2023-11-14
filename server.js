const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const fs = require('fs');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.use("/static", express.static(__dirname + "/static"));
app.use('/service-worker.js', express.static(path.join(__dirname, 'service-worker.js')));

app.get('/service-worker.js', (req, res) => {
  res.set('Service-Worker-Allowed', '/');
  res.sendFile(path.join(__dirname, 'service-worker.js'));
});


app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/html/menu.html");
});


let isOpen = true;


function updateState() {
  isOpen = !isOpen;
  io.emit('stateUpdate', isOpen);
}


setInterval(updateState, 2500);



app.get("*", (req, res) => {
  console.log(`Запрошенный адрес: ${req.url}`);

  const filePath = req.url.substr(1);
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      res.status(404).send("Resource not found!");
    } else {
      fs.createReadStream(filePath).pipe(res);
    }
  });
});

let animationPaused = false;
let imgd;
const players = [];


io.on('connection', function (socket) {
  players.push({
    id: socket.id,
    x: 10,
    y: 10,
    img: imgd
  });


  socket.on('pauseAnimation', () => {
    animationPaused = true;
    io.emit('animationStatus', animationPaused);
  });

  socket.on('resumeAnimation', () => {
    animationPaused = false;
    io.emit('animationStatus', animationPaused);
  });


  socket.on('amind', (data) => {
 
    io.emit('anim','start')
  });
  socket.on('sink', (data) => {

    io.emit('sync','start')
  });
  socket.on('g', (data) => {

    io.emit("player positions", players);
  });

  // Обработка события синхронизации анимации от клиента к другим клиентам
  socket.on('syncAnimation', (data) => {
    // Отправить событие синхронизации анимации всем подключенным клиентам, кроме отправителя
    socket.broadcast.emit('syncAnimation', data);
  });


  socket.emit('stateUpdate', isOpen);


  io.emit("player positions", players);
socket.on("idlevl",(data)=>{
io.emit('lvl',data)
})

socket.on('screan', (data) => {
  screenHeight = data.w;
  screenWidth = data.h;

  function generateCoordinatesObject() {
    function random(number1, number2) {
      return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
    }

    const minx = 10;
    var coordinatesObject = {
      "stone": {
        "x": random(120, screenHeight - 220),
        "y": random(120, screenHeight - 220)
      },
      "stone1": {
        "x": random(200, 500),
        "y": random(minx, screenWidth - 20)
      },
      "stone2": {
        "x": random(minx, screenWidth - 100),
        "y": random(120, screenHeight - 200)
      },
      "enemy": {
        "x": random(minx, screenWidth - 100),
        "y": random(120, screenHeight - 200)
      },
      "enemy1": {
        "x": random(minx, screenWidth - 100),
        "y": random(120, screenHeight - 200)
      },
      "enemyopen": {
        "x": random(minx, screenWidth - 100),
        "y": random(120, screenHeight - 200)
      },
      "end": {
        "x": random(1, 2)
      }
    };

    return coordinatesObject;
  }

  var daw =  generateCoordinatesObject()
  io.emit('lvl',daw)
});

socket.on('lock',(data)=>{
  if (data == 1) {
    imgd = `url("/img/skins/logo.png")`
  }
  else if (data == 2) {
    imgd = `url("/img/skins/playr_white.png")`
  }
  else if (data== 3) {
    imgd = `url("/img/skins/skin.png")`
  }
  else if (data == 5) {
    imgd = `url("/img/skins/skin_d2.png")`
  }
  else if (data== 6) {
    imgd = `url("/img/skins/benat_close.png")`
  }
  else if (data == 7) {
    imgd =  `url("/img/skins/kiril_d1.png")`

  }
  else if (!data) {
    imgd = `url("/img/skins/logo.png")`
  }
})

  socket.on("disconnect", () => {
    const index = players.findIndex(player => player.id === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
      io.emit("player positions", players);
      io.emit("reload", 'delete');
    }
  });

  socket.on("player move", (data) => {
    const player = players.find(player => player.id === socket.id);
    if (player) {
      player.x = data.x;
      player.y = data.y;
      io.emit("player positions", players);
    }
  });
});




server.listen(PORT, function () {
  console.log("Start server on", PORT);
});


