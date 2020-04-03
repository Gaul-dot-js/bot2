const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk1NDU4NjQ0NTE0NTcwMjYw.Xoae5Q.uIvhj5bXF8tEfmAFQ2w09dsMDM8';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg =>{
    if(msg.content === "T.ping"){
        msg.reply('Pong!');
    }
})

bot.login(token);