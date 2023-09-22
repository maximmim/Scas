const TelegramBot = require('node-telegram-bot-api');
const API_KEY_BOT = '5312847705:AAE0ii_TUhEeuNPRV52iiFmB0bsEInhANt4';
const sned = require("./server")
const bot = new TelegramBot(API_KEY_BOT, {

    polling: true
    
});

function botd(url) {

    let savedMessages = [];

bot.on('text', async msg => {
    try {

        if(msg.text.startsWith('/start')) {
             await bot.sendMessage(msg.chat.id, `Меню бота`, {

        reply_markup: {

            keyboard: [

                ['Створити Вибір їжі', "Вибрати клас"]

            ]

        }
        

    })

        }
else if (msg.text == "Створити Вибір їжі") {
var chatId =msg.chat.id
    await bot.sendMessage(chatId, "Наступні 2 повідомлення будуть стравами");
    bot.on('text', async (nextMsg) => {
        savedMessages.push(nextMsg.text);
  
        if (savedMessages.length < 2) {

          
        } else {

            await bot.sendMessage(chatId, 'Страви збережені відправка на сервер...');
          savedMessages.forEach( async (message, index) => {
            await bot.sendMessage(chatId, `${index + 1}: ${message}`);
          });
      let data = {
        "class":"7_M",
        "eat1":savedMessages[0],
        "eat2":savedMessages[1],
        "za":0,
        "nine":0
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(()=>{
sned();
      })
        .catch(error => {
          console.log("Помилка ~_~ :", error);
        });
        
          savedMessages = [];
        }
      });



}
        else {


        }

    }
    catch(error) {

        console.log(error);

    }

})
}
module.exports = botd