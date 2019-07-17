const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '',
    commandPrefix: '>'
});

bot.registry.registerGroup('command', 'Main Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('');

//Message Commands
    //message.reply("You rolled a " + roll);
    //message.say('text');
