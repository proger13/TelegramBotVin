// const TelegramBot = require('node-telegram-bot-api');
// const chrome = require('selenium-webdriver/chrome');
const nhtsa = require('nhtsa');

(async () => {
    const { data } = await nhtsa.decodeVin('WUAAU34248N006164');


    console.log (r(12,data) );
    

  })(); 

function r (eeeeeeeeee,data){
    return data.Results.find(item => item.VariableId  == eeeeeeeeee)
}





//const token = "5741596751:AAFJSJofIE934NOL_-TkSwpryd3UW9_nM6k"
