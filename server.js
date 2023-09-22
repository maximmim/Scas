const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const http = require('http');
const requestIp = require('request-ip');
const fs = require('fs');
const expressIP = require('express-ip');
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
app.set("port", PORT);

let private = [];
const API_KEY_BOT = '2056524233:AAGuWmoiRAAIEGVPGdxXqQYCqeS8rR2gxiI';
const bot = new TelegramBot(API_KEY_BOT, {
  polling: true
});

let votedIPs = [];

app.use(express.json());

const url = "https://644ab0e4a8370fb32155be44.mockapi.io/Record";

app.use("/web", express.static(__dirname + "/web"));
app.use(expressIP().getIpInfoMiddleware);
app.get("/", (req, res) => {
  res.redirect("/web/html/index.html");
});

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Помилка ${response.status}`);
    }
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Помилка ', error);
  }
}

app.get("/p", (req, res) => {
  const userIP = req.ipInfo.ip;
  let data = {
    "ip": userIP
  };
  res.json(data);
});

app.get("/state", (req, res) => {
  res.json(private)
});
app.get("/getips", (req, res) => {
  res.json(JSON.stringify(votedIPs));
});
app.post('/addValue', async (req, res) => {
  const receivedValue = req.body.value;
  const usercli = req.body.user;
  votedIPs.push(receivedValue);
  await bot.sendMessage(global.msgd.from.id, `Одна людина проголосувала за: ${usercli}`);
});

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

let gig = '';

function createClassInlineKeyboard() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: '5-О', callback_data: '5-О' }, { text: '5-К', callback_data: '5-К' }],
        [{ text: '5-М', callback_data: '5-М' }, { text: '6-А', callback_data: '6-А' }],
        [{ text: '6-Б', callback_data: '6-Б' }, { text: '6-К', callback_data: '6-К' }],
        [{ text: '6-М', callback_data: '6-М' }, { text: '6-С', callback_data: '6-С' }],
        [{ text: '7-А', callback_data: '7-А' }, { text: '7-М', callback_data: '7-М' }],
        [{ text: '7-Д', callback_data: '7-Д' }, { text: '7-Н', callback_data: '7-Н' }],
        [{ text: '8-А', callback_data: '8-А' }, { text: '8-М', callback_data: '8-М' }],
        [{ text: '8-Л', callback_data: '8-Л' }, { text: '9-С', callback_data: '9-С' }],
        [{ text: '9-В', callback_data: '9-В' }, { text: '9-А', callback_data: '9-А' }],
        [{ text: '10-А', callback_data: '10-А' }, { text: '10-К', callback_data: '10-К' }],
        [{ text: '11-А', callback_data: '11-А' }, { text: '11-М', callback_data: '11-М' }],
      ],
    },
  };
}

function createConfirmInlineKeyboard() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Підтвердити', callback_data: 'Подтвердить' }],
      ],
    },
  };
}

bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  if (data === 'Подтвердить') {
    if (gig) {
      bot.sendMessage(chatId, `Ви обрали клас: ${gig}`);
    } else {
      bot.sendMessage(chatId, 'Спочтку оберіть клас');
    }
  } else {
    gig = data;
    const confirmKeyboard = createConfirmInlineKeyboard();
    await bot.sendMessage(chatId, `Ви обрали клас: ${gig}\nПідтвердіть вибір:`, confirmKeyboard);
    await bot.sendMessage(chatId, "Наступні 2 повідомлення будуть стравами");
  }
});


let savedMessages = [];

bot.on('text', async msg => {
  try {
    var chatId = msg.from.id;
    global.msgd = msg
    if (msg.text.startsWith('/start')) {
      
      if (!savedMessages) {
        savedMessages = [];
      }
      await bot.sendMessage(chatId, `Меню бота`, {
        reply_markup: {
          keyboard: [
            ['Створити Вибір їжі']
          ]
        }
      });
    } else if (msg.text == "Створити Вибір їжі") {
       
      const classKeyboard = createClassInlineKeyboard();
      bot.sendMessage(chatId, 'Выберите класс:', classKeyboard)

      let isReadingText = true; 

      bot.on('text', async (nextMsg) => {

        if (isReadingText) {
          if (!savedMessages) {
            savedMessages = [];
          }
          savedMessages.push(nextMsg.text);
      
          if (savedMessages.length >= 2) {
            isReadingText = false; 
            await bot.sendMessage(chatId, 'Страви збережені відправка на сервер...');
      
            let data = {
              "class": gig,
              "eat1": savedMessages[0],
              "eat2": savedMessages[1],
              "za": 0,
              "nine": 0,
              "tg":msg.chat.id
            };
      
            checkAndUpdateData(data.class, data)
              .then(() => {
                sned(data);
              })
              .catch(async error => {
                await bot.sendMessage(chatId, 'Сталася помилка прошу повідомити організатору');
                console.log("Помилка ~_~ :", error);
              });
      

            savedMessages = [];
          }
        }
      });
      
    } else {
      
    }
  } catch (error) {
    console.log(error);
  }
});


async function get(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Произошла ошибка:', error);
    throw error; 
  }
 }

async function checkAndUpdateData(targetClass, dataToUpdate) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const existingData = await response.json();
      const targetObject = existingData.find(item => item.class === targetClass);

      if (targetObject) {
        console.log("Обєкт знайлено оновлення...");
        await updateData(targetObject.id, dataToUpdate);
      } else {
        console.log("Обєкт не знайдено");
        await createData(dataToUpdate);
      }
    } else {
      console.error("Помилка запиттання на api помилка :( : ", response.status);
    }
  } catch (error) {
    console.error("Помилка :( :", error);
  }
}

bot.on('polling_error', (error) => {
  console.error(error);
});

async function updateData(itemId, newData) {
  const response = await fetch(`${url}/${itemId}`, {
    method: "PUT",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Данні оновлені");
  } else {
    console.error("Посилка надсилання даних :", response.status);
  }
}

async function createData(newData) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("Новий обєкт створено");
  } else {
    console.error("Помилка при надсиланні даних :", response.status);
  }
}

function sned(d) {

  let g = {
    class:d.class,
    state:true
  }
  private.push(g)
  setTimeout(async () => {

    
const foundObject = private.find(obj => obj.class === d.class);

if (foundObject) {
  foundObject.state = false
}
else {
 console.log(1241111111)
}

get(url).then(async (dd) => {
  let dіd = dd.find(obj => obj.class === d.class);
  console.log(dіd);
  let v;
  console.log(d);
  console.log(dd);

  if (dіd.za > dіd.nine) {
    v = 1;
    console.log("Вийграла перша страва");
    await bot.sendMessage(dіd.tg, `Вийграла ${v} страва ${dіd.za}`);
  } else if (dіd.za < dіd.nine) { 
    v = 2;
    console.log("Вийграла перша страва");
    await bot.sendMessage(dіd.tg, `Вийграла ${v} страва ${dіd.nine}`);
  } else {
    console.log(123123123);
  }
});


  
 
  }, 0.3 * 60 * 1000);
}

server.listen(PORT, function () {
  console.log("start server on", PORT);
});
