const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const http = require('http');
const fs = require('fs');
const expressIP = require('express-ip');
const app = express();
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const bodyParser = require('body-parser');

const { MongoClient, ObjectId } = require('mongodb');



const uri = "mongodb+srv://fwa:lozamaxim123@ida.qgq6c9a.mongodb.net/?retryWrites=true&w=majority";



const dbName = 'wd'; 
const collectionName = 'ad';



app.use(bodyParser.json());






const path = require('path');

app.use('/service-worker.js', express.static(path.join(__dirname, 'service-worker.js')));

app.get('/service-worker.js', (req, res) => {
  res.set('Service-Worker-Allowed', '/');
  res.sendFile(path.join(__dirname, 'service-worker.js'));
});


const DataTime = 1  ;
app.set("port", PORT);

// ОСНОВНИЙ БОТ 2056524233:AAGuWmoiRAAIEGVPGdxXqQYCqeS8rR2gxiI
// БОТ ДЛЯ ТЕСТУВАННЯ 5312847705:AAE0ii_TUhEeuNPRV52iiFmB0bsEInhANt4


var API_KEY_BOT = '6458492028:AAE53VvJfvLziVeP6O7ke1i4qJRSUKFqUd0';

let private = [];
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


async function getAllData() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);


    const result = await collection.find({}).toArray();


    return result;
  } catch (error) {
    console.error(error);
    throw error; 
  } finally {
    await client.close();
  }
}


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

app.get('/get_db', async (req, res) => {
  try {
    const data = await getAllData();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

app.post('/New', async (req, res) => {
  console.log(123123)
  await bot.sendMessage(req.body.idtg, `Учень ${req.body.nick} зареєструвався`);
});


app.put('/put_db/:id', async (req, res) => {
  const id = req.params.id;
  let updatedData = req.body;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);
    if (updatedData._id) {
          delete updatedData._id;
    }


    await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedData });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error});
  } finally {
    await client.close();
  }
});



app.post('/push_db', async (req, res) => {
  try {
    const database = client.db(dbName);
    const collection = database.collection(collectionName); 
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const result = await collection.insertOne(req.body);
    res.status(200).json({ message: 'Дані успішно збережено в MongoDB', insertedId: result.insertedId });
    }
    catch (error) {
    console.error('Помилка при збереженні даних в MongoDB:', error);
    res.status(500).json({ message: 'Виникла помилка при збереженні даних' });
    }
    finally {
    client.close();
  }
});


async function push_db(data) {
    const database = client.db(dbName);
    const collection = database.collection(collectionName); 
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    await collection.insertOne(data);
}


app.get("/state", (req, res) => {
  res.json(private)
});
app.get("/getips", (req, res) => {
  res.json(JSON.stringify(ips));
});
app.post('/addValue', async (req, res) => {
  const usercli = req.body.user;
  ips.push(req.body.value);
  await bot.sendMessage(req.body.tgid, `Учень ${req.body.nick} проголосував за ${usercli} страву`);
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



let d = false

setInterval(() => {
const tr = new Date();

  if (!d && tr.getHours()==6 && tr.getMinutes()==0) {
    d = true
  console.log('Повідомлення вчителям відправлено ')
  getAllData().then(async users=>{
    users.map(async s=>{
    await bot.sendMessage(s.tg, `👩‍🏫 Дорогі вчителі, нагадую вам про голосування за обід у шкільній столовій! 🍽️`);
 setTimeout(()=>{
  d = false
 },60000)
    })
  })}
}, 1);






function gen() {
  return Math.floor(100000 + Math.random() * 900000);
}



let gig = '';

function c() {
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

function sc() {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Підтвердити', callback_data: 'Підтвердити' }],
      ],
    },
  };
}
const butthons =             

[
  'Створити Вибір їжі🥗',
  'Дізнатись мій class id🆔',
  'Показати учнів у моєму класі👨🏼‍🏫',
  'Ручне керування🔧'
]



const butthonss = [
  [butthons[0]],
  [butthons[1]],
  [butthons[2]],
  [butthons[3]]

  
];
bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  if (data === 'Підтвердити') {
    if (gig) {
      const f = gen();
      bot.sendMessage(chatId, `Ви обрали клас: ${gig}`);
      


              
        await createData({
          "class": gig,
          "eat1": "",
          "eat2": "",
          "za": 0,
          "nine": 0,
          "tg": chatId,
          "classid": f,
          "users": []
        });
      

      await bot.sendMessage(chatId, `Ваш class id:`);
      await bot.sendMessage(chatId, f);

      await bot.sendMessage(chatId, `Меню бота`, {
        reply_markup: {
          keyboard: butthonss,
          resize_keyboard: true,
        }
      });
    } else {
      await bot.sendMessage(chatId, 'Спочатку оберіть клас');
    }
  } else {
    gig = data;
    const confirmKeyboard = sc();
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

async function getUserClass(tgId) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const result = await collection.findOne({ tg: tgId });

    return result;
  } catch (error) {
    console.error('Помилка при отриманні класу з MongoDB:', error);
    throw error;
  } finally {
    await client.close();
  }
}

let sm = [];
bot.on('text', async (nextMsg) => {
  try {
    var chatId = nextMsg.from.id;
    global.msgd = nextMsg;
    let e = true; 

    if (nextMsg.text.startsWith('/start')) {
      const data = await getAllData();

      var existingUser = data.find(da => da.tg === nextMsg.from.id);

      if (!existingUser) {
        const classKeyboard = c();
        await bot.sendMessage(chatId, 'Виберіть клас, яким ви керуєте:', classKeyboard);
      } else {
        await bot.sendMessage(chatId, 'Ви вже зареєстровані');
      }
      
      await bot.setMyCommands(commands);
    } else if (nextMsg.text == "/menu") {        
      await bot.setMyCommands(commands);
      await bot.sendMessage(chatId, `Меню бота`, {
        reply_markup: {
          keyboard: butthonss,
          resize_keyboard: true, 
        }
      });
    } else if (nextMsg.text == "Дізнатись мій class id🆔") {
      const userClass = await getUserClass(nextMsg.chat.id);

      if (userClass) {
        await bot.sendMessage(nextMsg.chat.id, userClass.classid);
      } else {
        console.log("Помилка 404");
      }
    } else if (nextMsg.text == "Показати учнів у моєму класі👨🏼‍🏫") {
      const userClass = await getUserClass(nextMsg.chat.id);

      if (userClass) {
        userClass.users.forEach(async (d) => {
          await bot.sendMessage(nextMsg.chat.id, d.name);
        });

        if (userClass.users.length == 0) {
          await bot.sendMessage(nextMsg.chat.id, `В даний момент у вас немає учнів😭`);
        }
      } else {
        console.log("Помилка 404");
      }
    }
    else if (nextMsg.text == butthons[3]) {
    
getAllData().then(async (all)=>{
let z = all.find(h=>h.tg==nextMsg.chat.id)



})

      let wa = reply_markup = {
        inline_keyboard: [
          { text: '5-О', callback_data: '5-О' }
        ]}

      await bot.sendMessage(nextMsg.chat.id, `Ручне керування:`,wa);


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

            let g = "";
            const dat = await getAllData();
            const userClass = dat.find(o => o.tg === nextMsg.chat.id);

            if (userClass) {
              g = userClass.class;

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
    getAllData().then(async data=>{

       const to = data.find(item => item.class == tc);

    if (to) {
      
      await updateData(to._id, dt);
    } 
  
  
  })
  } catch (error) {
    console.error('Помилка при перевірці та оновленні/створенні запису в MongoDB:', error);
  } 
}


bot.on('polling_error', (error) => {
  console.error(error);
});


async function updateData(itemId, newData) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    await collection.updateOne({ _id: itemId }, { $set: newData });

  } catch (error) {
    console.error('Помилка при надсиланні даних в MongoDB:', error);
  } finally {
    await client.close();
  }
}



async function createData(newData) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const result = await collection.insertOne(newData);


  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}


async function sned(d) {

    let g = {
      class:d.class,
      state:true
    }


    private.push(g)



    setTimeout(async () => {
    ips = [];    
    const fo = private.find(o => o.class == d.class);
    
    if (fo) {
      fo.state = false
    }
    else {
     console.log(1241111111)
    }
    private = []
    getAllData().then(async (dd) => {
      let did = dd.find(o => o.class === d.class);
    
    
      await bot.sendMessage(did.tg, `
      За "${did.eat1}" прогулусували ${did.za}
      \nза "${did.eat2}" прогулусували ${did.nine}
      \nусьго порцій: ${did.za+did.nine}`
      );
     
    })
   }, DataTime * 60 * 1000)
 
 }    
    
    



server.listen(PORT, function () {
  console.log("start server on", PORT);
});
