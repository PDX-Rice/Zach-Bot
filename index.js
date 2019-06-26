const commando = require('discord.js-commando');
const bot = new commando.Client({
    owner: '238870721638432768',
    commandPrefix: '>'
});

bot.registry.registerGroup('command', 'Main Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('process.env.BOT_TOKEN');
