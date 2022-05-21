const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak bilet türünü seçin.')
					.addOptions([
						{
							label: '❤️ | Ortak',
							description: 'Bir ortaklık bileti açın.',
							value: 'ortaklık',
						},
						{
							label: '😠 | Şikayet',
							description: 'Şikayet bileti aç ',
							value: 'şikayet',
						},
                        {
							label: '🆘 | Yetkili Alım',
							description: 'Yetkili alım başvurusunda bulunmak için bir bilet açın',
							value: 'yetkili',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__Bir Bilet Nasıl Açılır :__**\nLütfen açmak istediğiniz bilet türünü seçin.',
                color: "RED",
                footer: {text: 'TheTomenTosaDev. Ticket'}
            }],
            components: [row]
        })
    }
}
