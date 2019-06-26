const commando = require('discord.js-commando');

class ZachJokeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            group: 'command',
            memberName: 'joke',
            description: 'Makes a joke that Zach would make'
        });

    }

    async run(message, args) {
        
        var jokeSelect = Math.floor(Math.random() * 10);
        var jokeList = [
            'Joke1',
            'Joke2',
            'Joke3',
            'Joke4',
            'Joke5',
            'Joke6',
            'Joke7',
            'Joke8',
            'Joke9',
            'Joke10'
        ];

        message.say(jokeList[jokeSelect]);
        
    }
}

module.exports = ZachJokeCommand;