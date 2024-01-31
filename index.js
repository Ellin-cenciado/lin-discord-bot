//cosas que requieren cosas
const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require('./botconfig.json');
const prefix = require('./botconfig.json');
const token = require('./botconfig.json');

//Cuando se inicie que lo diga en la consola
client.once('ready', () => {
	console.log('Listo');
});

//Esperando mensajes
client.on('message', message => {
    let user = message.author;

//Comando Ping

  if (message.content === botconfig.prefix + "ping") {
    message.channel.send('pong ' + client.ws.ping + 'ms');
	console.log(user.username + ": " + message.content);
  }

});

client.login(botconfig.token);
