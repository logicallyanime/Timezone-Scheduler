require('dotenv').config();

const { Client, Channel } = require('discord.js');
const can = require('canvas');
const Discord = require('discord.js');
const fs = require('fs');
const Flashcards = require('./commands/FlashcardGame');

const client = new Client();

const PREFIX = "$";

client.commands = new Discord.Collection();


//Initialize Usable Commands 
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

  });

  


client.on('message', (message) => {
    console.log(`${message.author.tag} sent ${message.content}`);
    if (message.author.bot) return;

    //Parse user command and arguments
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        
        

        console.log("Command: " + CMD_NAME);

        let userID = message.author.id;

        if (CMD_NAME === 'slap'){
            var slappee = args[0];
            if(args.length > 2){
                for (let index = 1; index < args.length - 1; index++) slappee += ', ' + args[index];
                slappee += ', and ' + args[args.length-1];
            } else if(args.length == 2){
                slappee += ' and ' + args[1];
                console.log("ACTIVATED")
            }
            
            message.channel.send(`${message.author} slapped ${slappee}! :0`);
        }
        // else if (CMD_NAME === 'flashcard' || CMD_NAME === 'fc') {
        //     client.commands.get('flashcards').execute(message,args);
        // } 
        
        // else if (CMD_NAME === 'change') {
        //     if(user.has(userID)){
        //         let Game = user.get(userID);
        //         let sec = '';
        //         if (args[0].length != 0){
        //             args.forEach(arg => {
        //                 sec += arg + " ";
        //             });
        //             sec.length -= 1;

        //             Game.cng(sec);
        //             message.channel.send(`${message.author}'s special text has been created!\nYour :sparkles:special text:sparkles: is now \`${Game.show()}\`!`)
        //         } 
        //         else {
        //             message.channel.send(`To change your text place some text after $change`);
        //         }
        //     } 
            
            
        //     else {
        //         message.channel.send(`${message.author} you dont have a game running have a game running!`)
        //     }
            
        // }
        
        
        
        else {
            console.log(eval(CMD_NAME));
        }
            
    }
});


function parseUserCMD(params) {
  
}


client.login(process.env.BOT_TOKEN);