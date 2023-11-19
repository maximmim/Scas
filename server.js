const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const http = require('http');
const fs = require('fs');
const expressIP = require('express-ip');
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
app.set("port", PORT);
const path = require('path');

app.use('/service-worker.js', express.static(path.join(__dirname, 'service-worker.js')));

app.get('/service-worker.js', (req, res) => {
  res.set('Service-Worker-Allowed', '/');
  res.sendFile(path.join(__dirname, 'service-worker.js'));
});



// ОСНОВНИЙ БОТ 2056524233:AAGuWmoiRAAIEGVPGdxXqQYCqeS8rR2gxiI
// БОТ ДЛЯ ТЕСТУВАННЯ 5312847705:AAE0ii_TUhEeuNPRV52iiFmB0bsEInhANt4


let private = [];
var API_KEY_BOT = '6458492028:AAE53VvJfvLziVeP6O7ke1i4qJRSUKFqUd0';

if (process.env.PORT) {
  API_KEY_BOT = "6458492028:AAE53VvJfvLziVeP6O7ke1i4qJRSUKFqUd0"
} else {
  API_KEY_BOT = "5312847705:AAE0ii_TUhEeuNPRV52iiFmB0bsEInhANt4"
}
const bot = new TelegramBot(API_KEY_BOT, {
  polling: true 
});


let ips = [];

app.use(express.json());

const url = "https://644ab0e4a8370fb32155be44.mockapi.io/Class";

app.use("/web", express.static(__dirname + "/web"));
app.use(expressIP().getIpInfoMiddleware);
app.get("/", (req, res) => {
  res.redirect("/web/html/menu.html");
});

app.get("/p", (req, res) => {
  const userIP = req.ipInfo.ip;

  res.json({
    "ip": userIP
  });
});

app.get("/state", (req, res) => {
  res.json(private)
});
app.get("/getips", (req, res) => {
  res.json(JSON.stringify(ips));
});
app.post('/addValue', async (req, res) => {
  const usercli = req.body.user;
  ips.push(req.body.value);
  await bot.sendMessage(req.body.tgid, `Учень ${req.body.nick} проголусував за ${usercli} страву`);
});
app.post('/newuser', async (req, res) => {
  await bot.sendMessage(req.body.idtg, `Учень ${req.body.nick} зареєструвався`);
});
app.get("*", (req, res) => {
  const filePath = req.url.substr(1);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.status(404).send("Сторінка не знайдена!");
    } else {
      if (stats.isDirectory()) {
        res.status(404).send("Сторінка не знайдена!");
      } else {
        fs.createReadStream(filePath).pipe(res);
      }
    }
  });
});


function gen() {
  return Math.floor(100000 + Math.random() * 900000);
}



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

function c() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Підтвердити', callback_data: 'Підтвердити' }],
      ],
    },
  };
}


bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  if (data === 'Підтвердити') {
    if (gig) {
      const f =gen()
      bot.sendMessage(chatId, `Ви обрали клас: ${gig}`);
      createData({
        "class": gig,
        "eat1": "",
        "eat2": "",
        "za": 0,
        "nine": 0,
        "tg":global.msgd.chat.id,
        "classid":f
      });
      await bot.sendMessage(chatId, `Ващ class id:`);
      await bot.sendMessage(chatId, f);



      await bot.sendMessage(chatId, `Меню бота`, {
        reply_markup: {
          keyboard: [
            ['Створити Вибір їжі🥗',
            'Дізнатись мій class id🆔']
          ]
        }
      });
      
    } else {
      await bot.sendMessage(chatId, 'Спочтку оберіть клас');
    }
  } else {
    gig = data;
    const confirmKeyboard = c();
    await bot.sendMessage(chatId, `Ви обрали клас: ${gig}\nПідтвердіть вибір:`, confirmKeyboard);
    
  }
});

async function get(url) {                                              
  try {                                              
    const response = await fetch(url);                                               
    if (!response.ok) {                                              
      throw new Error(response.status);                                              
    }                                              
    const data = await response.json();                                              
    return data;                                               
  } catch (error) {                                              
    console.error(error);                                               
    throw error;                                               
  }                                              
 } 

 
const commands = [

  {

      command: "menu",
      description: "Показти меню"

  }
]

let sm = [];
bot.on('text', async (nextMsg) => {
  try {
    var chatId = nextMsg.from.id;
    global.msgd = nextMsg;
    let e = true; 

    if (nextMsg.text.startsWith('/start')) {
      get(url).then(async (data)=>{
        var h = data.find(da=>da.tg===nextMsg.from.id)

        if (!h) {
      const classKeyboard = createClassInlineKeyboard();
      await bot.sendMessage(chatId, 'Виберіть клас, яким ви керуєте:', classKeyboard)
        }
        else {
          await bot.sendMessage(chatId, 'Ви вже зарегестровані')
        }
      })

      await bot.setMyCommands(commands);
    }     else if (nextMsg.text == "/menu") {        
      await bot.setMyCommands(commands);
      await bot.sendMessage(chatId, `Меню бота`, {
        reply_markup: {
          keyboard: [
            ['Створити Вибір їжі🥗',
            'Дізнатись мій class id🆔']
          ]
        }
      });
      }
      else if (nextMsg.text == "Дізнатись мій class id🆔") {
        get(url).then(async clas => {
          const n = clas.find(g=>nextMsg.chat.id==g.tg)
        
          if (n) {
            await bot.sendMessage(nextMsg.chat.id, n.classid);
          }
          else {
            console.log("Помилка 404")
          }
        })
      }
       else if (nextMsg.text == "Створити Вибір їжі🥗") {

      await bot.sendMessage(nextMsg.chat.id, "Наступні 2 повідомлення будуть стравами");
      bot.on('text', async (w) => {
        if (e) {

          sm.push(w.text);

          if (sm.length >= 2) {
            e = false;
            await bot.sendMessage(chatId, 'Страви збережені відправка на сервер...');
  let fd = {
                  "class": "",
                  "eat1": sm[0],
                  "eat2": sm[1],
                  "za": 0,
                  "nine": 0,
                  "tg": nextMsg.chat.id
                };
            let g = ""
            get(url).then((dat) => {
              let h = dat.find(o => o.tg === nextMsg.chat.id)
              if (h) {
                g = h.class;
                
                fd.class = g;

                check(fd.class, fd)
                  .then(() => {
                    sned(fd);
                  })
                  .catch(async error => {
                    await bot.sendMessage(chatId, 'Сталася помилка прошу повідомити організатору');
                    console.log(error);
                  });
              }
            });

            sm = [];
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});




async function check(tc, dt) {
  try {
    const res = await fetch(url);

    if (res.ok) {
      const ex = await res.json();
      const to = ex.find(item => item.class === tc);

      if (to) {
        await updateData(to.id, dt);
      } else {
        await createData(dt);
      }
    } else {
      console.error(res.status);
    }
  } catch (error) {
    console.error(error);
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
    console.error("Помилка при надсиланні даних:  ", response.status);
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
ips = []
if (foundObject) {
  foundObject.state = false
}
else {
 console.log(1241111111)
}
private = []
get(url).then(async (dd) => {
  let did = dd.find(obj => obj.class === d.class);


  await bot.sendMessage(did.tg, `
  За "${did.eat1}" прогулусували ${did.za}
  \nза "${did.eat2}" прогулусували ${did.nine}
  \nусьго порцій: ${did.za+did.nine}`
  );
 
});
 
 
  }, 0.5 * 60 * 1000);
}

server.listen(PORT, function () {
  console.log("start server on", PORT);
});
