const {Client, RichEmbed}= require('discord.js');//requerimos a discord
const client = new Client();//requerimos Discord client que esl bot
//EL TOKEN ES EL QUE TE DA en la pagina
client.login('NTgwNjA3NjkzMjgzMTMxMzkz.XOTNBA.g-VX7ZlOuKdg5c8pL8-Uu4Z9zzw');
client.on('ready',() =>{//aqui escuchas lo que te esta diciendo y mandas mensaje que todo bien
    console.log(`Bot is ready as .. ${client.user.tag}`);
    client.user.setStatus('dnd');//aqui tu manejas el stado del bot online dnd ofline

    console.log(client.user.presence.status);//imprimes el estado dle bot

   // const testChannel =client.channels.find(channel => channel.name === 'test');
   // console.log(testChannel); //sabes el status del canal y sus propiedes
})

client.on('message',async message =>{
    //recibiendo mensaje
    console.log(message.content);
    if(message.content === 'ping'){
        message.reply('pong')
    }

    if (message.content === 'hello'){
        message.channel.send(`hello sabrotso ${message.author}`)
    }
    if (message.content.includes('!test')){
        message.channel.send('happy for you human');
        message.delete();
    }

    if (message.content === '!cherrybit'){
        message.channel.send('https://cherrybit.com.mx');
        message.channel.send('https://www.facebook.com/cherrybitweb');
    }

    if(message.content === '!pretty'){
        const embed = new RichEmbed()//son mensajes concatenado bonitos
            .setTitle('Pretty Message')//pones el mensaje esto muestras
            .setColor('#f46611')//este el color 
            .setAuthor('Cherryman','https://www.pngfind.com/pngs/m/142-1428832_homero-png-homer-wearing-a-dress-transparent-png.png')
        //    .addField('Visit de Url ','https://cherrybit.com.mx')
        //    .addField('Sommethin one','lorem Ipsum')
        //    .addField('Sommethin one','lorem Ipsum')
        message.channel.send(embed);
    }
    if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('message deleted')
    }
})