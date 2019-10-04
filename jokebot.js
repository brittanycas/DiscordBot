const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();

let text;

//Called on bot ready
client.on('ready', () => {
    console.log('Connected as ' + client.user.tag);

    client.user.setActivity("YouTube", {type: "WATCHING"});

})

//Called every message
client.on('message', (receivedMessage) => {
    //check if the message was not sent by the bot
    if (receivedMessage.author == client.user){
        return
    }   

    if(receivedMessage.content.startsWith("!")){
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage){
    //remove ! char
    let command = receivedMessage.content.substr(1);
    if(command.toLowerCase() == "joke"){
        receivedMessage.react("😄")
        
        //API call
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'User-Agent': 'Jokebot - https://github.com/brittanycas',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(body => receivedMessage.channel.send(body.joke))
    } 
}

//Add your Bot login here
client.login("")