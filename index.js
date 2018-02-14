const Discord = require('discord.js');
const fs = require("fs-extra");
let cookie = JSON.parse(fs.readFileSync("./cookie.json", "utf8"));

var bot = new Discord.Client();
var PREFIX = "/";
var randnum = 0
var mention = "<@384735804452241418>";

bot.login(process.env.TOKEN);

bot.on('ready',function() {
    console.log("Je suis en ligne !");
    bot.user.setGame('Prefix / chercher à manger')
});

bot.on('message', message => {
    if (message.content.startsWith(PREFIX + "setgame")) {
        if(!message.member.roles.has('392095225033654285')) return message.channel.send("Cette commande est réservée au créateur du bot!");
            var game = message.content.split(" ").slice(1).join(" ");
             message.delete(message.author)
            client.user.setPresence({game: {name : game, type :0}});
             message.channel.send("Statut changer avec succée :ok_hand:")
        }
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/bienvenue") {
            message.channel.send('bienvenue sur le serveur !');
        }
    }
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/king") {
            message.reply('tu es le king de se serveur !');
        }
    }
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/queen") {
            message.reply('tu es la queen de se serveur !');
        }
    }
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/enzo") {
            message.channel.send('Enzo est peut-être pas le king de ce serveur mais il est le king dans le coeur de quelqu un :kissing_heart: et de lui même ! :joy:');
        }
    }
});

bot.on('message', message => {
    if(message.content.startsWith(PREFIX + "avatar")) {
        if(message.channel.type === "dm") return message.channel.send("Désolé mais les commandes sont désactivées en message privé.")
        if (message.channel.type === 'dm') return;
        if(message.mentions.members.size === 0) {
             message.channel.sendMessage("Vous n'avez mentionnée aucun utilisateur !")
             return 
           }
           var avatar = message.mentions.users.first().avatarURL
           var icon = message.author.avatarURL;
           var name = message.author.username;
           var avatar_embed = new Discord.RichEmbed()
               .setColor(15105570)
               .setDescription(`:camera_with_flash: Avatar de ${message.mentions.users.first().username}`)
               .setImage(`${avatar}`)
               .setFooter("Par la team des quatre pommes", bot.user.displayAvatarURL);
           message.channel.sendEmbed(avatar_embed)
    }
});

bot.on('message', message => {
    
    if(message.author.bot) return;
    const args = message.content.split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if(message.content[0] === PREFIX) {
        if (command === '/erreur') {
            message.channel.send('Skyfox.exe a cessé de fonctionner :x:');
    }
    
    if(message.content[0] === PREFIX) {
        if (command === '/say') {
            message.channel.send(args.join(' '));
            message.delete();
    }
}}});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/help") {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                    name: bot.user.username,
                    icon_url: bot.user.avatarURL
                },
                title: 'Skyfox Bot',
                description: 'Bonjour tout le monde !',
                fields: [{
                    name: 'Voici les commandes du bot Skyfox',
                    value: '/help pour afficher toute les commandes du bot Skyfox'
                },
                {
                    name: '/bienvenue',
                    value: 'pour souhaiter la bienvenue au nouveaux'
                },
                {
                    name: '/avatar',
                    value: 'le bot vous donne l image de votre avatar'
                },
                {
                    name: '/king',
                    value: 'pour faire de toi le king du serveur'
                },
                {
                    name:'/queen',
                    value: 'pour faire de toi la queen du serveur'
                },
                {
                    name: '/ping',
                    value: 'le bot vous repond pong!'
                },
                {
                    name: '/say',
                    value: 'pour écrire en tant que bot'
                },
                {
                    name: '/cookie',
                    value: 'pour donner un cookie à la personne que tu souhaite'
                },
                {
                    name: '/erreur',
                    value: 'le bot vous repond Skyfox.exe a cessé de fonctionner :x:'
                }],
                timestamp: new Date(),
                footer: {
                    icon_url: bot.user.avatarURL,
                    text: 'Par La team des quatre pommes'
                }
            }});
        }
    }
});

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === "/Comment vas-tu Skyfox?") {
            random();

            if (randnum == 0){
                message.channel.send("Merci ça va bien !");
            }

            if (randnum == 1){
                message.channel.send("Merci je vais très bien !");
            }

            if (randnum == 2){
                message.channel.send("Bof bof aujourd'hui je suis malade...");
            }

            if (randnum == 3){
                message.channel.send("Je ne vais pas très bien merci de te soucier de moi !");
            }
        }
    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}

bot.on('message', message => {
    var msgc = message.content
    if (message.content.startsWith(PREFIX + "ping")) {
        message.channel.send("pong");
    };
    if (msgc.startsWith(PREFIX + "stats")) {
        message.channel.send("", {
            embed: {
                color: 0xE15306,
                author:  message.author.name,

                title: 'Statistiques du bot',
                description: '',
                fields: [
                    {
                        name: '**Salons textuels au total**',
                        value: bot.channels.size,
                        inline: true
    }, {
                        name: '**Nombre d\'utilisateurs**',
                        value: bot.users.size,
                        inline: true
    }, {
                        name: '**Nombre de serveurs**',
                        value: bot.guilds.size,
                        inline: true
                   }],
                thumbnail: {
                    url: message.author.iconURL
                },
                timestamp: new Date(),
                footer: {
                    text: 'Par La team des quatre pommes',
                }
            }
        });
    };
    if (msgc.startsWith(PREFIX + "info")) {
        message.channel.send("", {
            embed: {
                color: 0xE15306,
                author: message.author.name,

                title: 'Informations sur le serveur',
                description: '',
                fields: [
                    {
                        name: '**Nom**',
                        value: message.guild.name,
                        inline: true
    }, {
                        name: '**Membres**',
                        value: message.guild.memberCount,
                        inline: true
    }, {
                        name: '**Propriétaire**',
                        value: message.guild.owner.user.tag,
                        inline: true
    }, {
                        name: '**Région**',
                        value: message.guild.region,
                        inline: true
    }, {
                        name: '**ID**',
                        value: message.guild.id,
                        inline: true
                   }],
                thumbnail: {
                    url: message.guild.iconURL
                },
                timestamp: new Date(),
                footer: {
                    text: 'Par La team des quatre pommes',
                }
            }
        });
    };
    if (msgc.startsWith(PREFIX + "cookie")) {
        var mentionned = message.mentions.users.first();
        if (!mentionned) return;
        if (!cookie[mentionned.id]) {
           cookie[mentionned.id] = {
              cookies: "1"
           }
           fs.writeFile("./cookie.json", JSON.stringify(cookie), (err) => {
                 if (err) console.error(err)
                 });
           message.channel.send("Vous avez donné un cookie à **" + mentionned.username + "**");    
        } else {
           cookie[mentionned.id].cookies++;
            fs.writeFile("./cookie.json", JSON.stringify(cookie), (err) => {
                 if (err) console.error(err)
                 });
           message.channel.send("Vous avez donné un cookie à **" + mentionned.username + "**");       
        }
    }
});
