const { MessageEmbed } = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
        name: 'messageCreate',
        async execute(client, message, ) {

            if (message.author.bot) return
            if (message.channel.type == "DM") return;

            const args = message.content.slice(prefix.length).trim().split(' ')
            const commandName = args.shift().toLowerCase();
            const command = client.commands.get(commandName)
    
            if (!message.content.startsWith(prefix) || message.author.bot) return;
            if (!command) return
    

            try {
                command.execute(client, message, args);
                
                } catch (error) {
                     message.channel.send('**Üzgünüm ama kod yürütülürken bir hata oluştu** thetomentosa#6442 ile iletişime geçin')
                };
            }
        }