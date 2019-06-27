const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '238870721638432768',
    commandPrefix: '>'
});

bot.registry.registerGroup('command', 'Main Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NTg2Njk3MTI3Nzc5MTA2ODUx.XRL8Vw.zMgIqNl7yAseBjaYV_vekees690');

//Message Commands
    //message.reply("You rolled a " + roll);
    //message.say('text');