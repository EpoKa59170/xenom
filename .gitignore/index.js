const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "..";

client.on("ready", () => {
       client.user.setPresence({ game: { name: 'Développement | ..help', type: 0}});
       console.log("Bot !")
})
client.login("NDg0NjkyNDI0MjU4NDg2Mjcy.DzinPQ.Se_5mZekuoktubYiSjqETgdOCd4");

 client.on('message', async message => {

    if(message.content === "118"){
        message.reply("218 !");
        console.log('189');
    }

    if(message.content === prefix + "help") {
      var gembed = new Discord.RichEmbed()
      .setColor('#CEF6F5')
      .setTitle(`Commandes Informations`)
      .setDescription(`BOT Xenom`)
      .addField("..help", "Affiche les commandes")
      .addField("..info", "Affiche les infos du bot/serveur")
      .addField("..helpinfo", "Affiche les commandes (Informations)")
      .addField("..helpadmin", "Affiche les commandes (Administration)")
      .addField("..helpfun", "Affiche les commandes (Fun)")
      .setFooter("Help Informations - Xenom BOT/Made By EpoKa")
    
      var aembed = new Discord.RichEmbed()
      .setColor('#CEF6F5')
      .setTitle(`Commandes Administration`)
      .setDescription(`BOT Xenom`)
      .addField("..echo", "Permet de faire parlé le bot")
      .addField("..kick", "Kick une personne")
      .addField("..ban", "Ban une personne")
      .addField("..mute", "Mute une personne")
      .addField("..unmute","UnMute une personne")
      .addField("..clear", "Effacer des messages")
      .addField("..warn", "Warn une personne")
      .addField("..viewwarns", "Voir le(s) warn(s) des personnes")
      .addField("..deletewarns", "Effacer le(s) warn(s) des personnes ")
      .setFooter("Help Administration - Xenom BOT/Made By EpoKa")

      var fembed = new Discord.RichEmbed()
      .setColor('#CEF6F5')
      .setTitle(`Commandes Fun`)
      .setDescription(`BOT Xenom`)
      .addField("..neko", "Des images/gifs de NEEEKKKKOOOOOOOO!!")
      .addField("..kill", "Permet de tué une personne que tu n'aime pas :3")
      .addField("..dance", "Permet de dancé !")
      .addField("..slap", "Permet de fracasser quelqu'un !")
      .addField("..hentai", "Permet de donné du plaisir à quelqu'un :3")
      .setFooter("Help Fun - Xenom BOT/Made By EpoKa")
      message.channel.send(gembed);
      message.channel.send(aembed)
      message.channel.send(fembed)
    }
    if(message.content === prefix + "hinfo") {
      var gembed = new Discord.RichEmbed()
      .setColor('#CEF6F5')
      .setTitle(`Commandes Informations`)
      .setDescription(`BOT Xenom`)
      .addField("..help", "Affiche les commandes")
      .addField("..info", "Affiche les infos du bot/serveur")
      .addField("..helpinfo", "Affiche les commandes (Informations)")
      .addField("..helpadmin", "Affiche les commandes (Administration)")
      .addField("..helpfun", "Affiche les commandes (Fun)")
      .setFooter("Help Informations - Xenom BOT/Made By EpoKa")
      message.channel.send(gembed);
    }
    if(message.content === prefix + "hadmin") {
      var aembed = new Discord.RichEmbed()
      .setColor('#CEF6F5')
      .setTitle(`Commandes Administration`)
      .setDescription(`BOT Xenom`)
      .addField("..say", "Permet de faire parlé le bot")
      .addField("..kick", "Kick une personne")
      .addField("..ban", "Ban une personne")
      .addField("..mute", "Mute une personne")
      .addField("..unmute","UnMute une personne")
      .addField("..clear", "Effacer des messages")
      .addField("..warn", "Warn une personne")
      .addField("..viewwarns", "Voir le(s) warn(s) des personnes")
      .addField("..deletewarns", "Effacer le(s) warn(s) des personnes ")
      .setFooter("Help Administration - Xenom BOT/Made By EpoKa")
      message.channel.send(aembed)
    }
    if(message.content === prefix + "hfun") {
      var fembed = new Discord.RichEmbed()
      .setColor('#CEF6F5')
      .setTitle(`Commandes Fun`)
      .setDescription(`BOT Xenom`)
      .addField("..neko", "Des images/gifs de NEEEKKKKOOOOOOOO!!")
      .addField("..kill", "Permet de tué une personne que tu n'aime pas :3")
      .addField("..dance", "Permet de dancé !")
      .addField("..slap", "Permet de fracasser quelqu'un !")
      .addField("..hentai", "Permet de donné du plaisir à quelqu'un :3")
      .setFooter("Help Fun - Xenom BOT/Made By EpoKa")
      message.channel.send(fembed);
    }
    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#CEF6F5")
        .setTitle("INFO")
        .setDescription("BOT Xenom")
        .addField("Nom du créateur de XENOM: ", " EpoKa" )
        .addField("Nom du discord: ", message.guild.name)
        .addField("Serveur crée le : ", message.guild.createdAt)
        .addField("Serveur rejoin le : ", message.guild.joinedAt)
        .addField("Nom du BOT:", `${client.user.tag}`, true)
        .addField("ID", `${client.user.id}`)
        .addField("Nombre de membres au total ", message.guild.members.size)
        .addField("Nombre de rôles",message.guild.roles.size)
        .addField("Nombre de catégories/salons", message.guild.channels.size)
        .setFooter("Informations - Xenom BOT/Made By EpoKa")
        message.channel.sendMessage(info_embed)
        console.log("command ..info éffectuès")
    }

    if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Ta éssayer de kick qui ? Tu n'a pas la command !");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Ta oublier de mentionner la personne ! - KICK ")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Personne existante ou pas ? - KICK")
        }
    
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'est pas cette command - KICK");
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} a étais kick par ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Ta éssayer de ban qui ? Tu n'a pas la command !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Ta oublier de mentionner la personne ! - BAN");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Personne existante ou pas ? - BAN");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'est pas cette command - BAN");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} a étais ban par ${message.author.username} !`)
        });
        
    }

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Ta éssayer de clear ou je rêve ? Ta pas la commande !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu n'a pas dit le nombre de message à supprimes ?")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages suprimés`);
      });

    }
       if(message.content.startsWith(prefix + "mute")) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Ta éssayer de mute qui ? Tu n'a pas la command !");

            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.sendMessage("Ta oublier de mentionner la personne ! - MUTE");
         
            let role = message.guild.roles.find(r => r.name === "Muted");
            if(!role) {
                try {
                    role = await message.guild.createRole({
                        name: "Muted",
                        color: "#ff0000",
                        permissions: []
          });

          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false
    });
  });
                } catch(e) {
                    console.log(e.stack);
                }
              }

              if(toMute.roles.has(role.id)) return message.channel.sendMessage("Ce membre est déjà mute!");

              await toMute.addRole(role);
              message.channel.send("Ce membre est bien Mute !")
            
            }

           if(message.content.startsWith(prefix + "unmute")) {
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Ta éssayer de unmute qui ? Tu n'a pas la command !");

            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.sendMessage("Ta oublier de mentionner la personne ! - UNMUTE");

              let role = message.guild.roles.find(r => r.name === "Muted");

              if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Ce membre est déjà unmute!")

              await toMute.removeRole(role);
              message.channel.sendMessage("Ce membre est bien UnMute !");

              return;
           }

    var fs = require('fs');
 
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));
 
if (message.content.startsWith(prefix + "warn")){
 
if (message.channel.type === "dm") return;
 
var mentionned = message.mentions.users.first();
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("Ta éssayer de warn qui ? Tu n'a pas la command !");
 
if(message.mentions.users.size === 0) {
 
  return message.channel.send("Ta oublier de mentionner la personne ! - WARN");
 
}else{
 
    const args = message.content.split(' ').slice(1);
 
    const mentioned = message.mentions.users.first();
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          if (args.slice(1).length != 0) {
 
            const date = new Date().toUTCString();
 
            if (warns[message.guild.id] === undefined)
 
              warns[message.guild.id] = {};
 
            if (warns[message.guild.id][mentioned.id] === undefined)
 
              warns[message.guild.id][mentioned.id] = {};
 
            const warnumber = Object.keys(warns[message.guild.id][mentioned.id]).length;
 
            if (warns[message.guild.id][mentioned.id][warnumber] === undefined){
 
              warns[message.guild.id][mentioned.id]["1"] = {"raison": args.slice(1).join(' '), time: date, user: message.author.id};
 
            } else {
 
              warns[message.guild.id][mentioned.id][warnumber+1] = {"raison": args.slice(1).join(' '),
 
                time: date,
 
                user: message.author.id};
 
            }
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.delete();
 
            message.channel.send(''+mentionned.tag+' a étais warn');
 
            message.mentions.users.first().send(`Warn dans le serveur ${message.guild.name} par ${message.author.username}\n\n\nRaison: ` + args.slice(1).join(' '))
 
          } else {
 
            message.channel.send("Tu la mal utiliser: "+prefix+"warn <user> <raison>");
 
          }
 
        } else {
 
          message.channel.send("Tu la mal utiliser "+prefix+"warn <user> <raison>");
 
        }
 
      } else {
 
        message.channel.send("Tu la mal utiliser "+prefix+"warn <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("Ta éssayer de warn qui ? Tu n'a pas la command !");
 
    }
 
  }
 
}
 
 
 
  if (message.content.startsWith(prefix+"viewwarns")||message.content===prefix+"viewwarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("Ta éssayer de voir qui avez des warns ? Tu n'a pas la command !")
 
    const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size !== 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">") {
 
          try {
 
            if (warns[message.guild.id][mentioned.id] === undefined||Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              message.channel.send("**"+mentioned.tag+" n'a pas de warn**");
 
              return;
 
            }
 
          } catch (err) {
 
            message.channel.send(""+mentioned.tag+" n'a pas de warn ");
 
            return;
 
          }
 
          let arr = [];
 
          arr.push(`${mentioned.tag} a `+Object.keys(warns[message.guild.id][mentioned.id]).length+" warn(s)");
 
          for (var warn in warns[message.guild.id][mentioned.id]) {
 
            arr.push(`${warn} - "`+warns[message.guild.id][mentioned.id][warn].raison+
 
            "\" warn fait par "+message.guild.members.find("id", warns[message.guild.id][mentioned.id][warn].user).user.tag+" le "+warns[message.guild.id][mentioned.id][warn].time+"");
 
          }
 
          message.channel.send(arr.join('\n'));
 
        } else {
 
          message.channel.send("Tu la mal utiliser "+prefix+"viewwarns <user> <raison>");
 
          console.log(args);
 
        }
 
      } else {
 
        message.channel.send("Tu la mal utiliser "+prefix+"viewwarns <user> <raison>");
 
      }
 
    } else {
 
      message.channel.send("Ta éssayer de voir qui avez des warns ? Tu n'a pas la command !");
 
    }
 
  }
 
 
 
 
 
  if (message.content.startsWith(prefix+"deletewarns")||message.content===prefix+"deletewarns") {
 
if (message.channel.type === "dm") return;
 
if(!message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return message.reply("Ta éssayer d'enlever un warns à qui ? Tu n'a pas la command !")
 
   const mentioned = message.mentions.users.first();
 
    const args = message.content.split(' ').slice(1);
 
    const arg2 = Number(args[1]);
 
    if (message.member.hasPermission('MANAGE_GUILD')){
 
      if (message.mentions.users.size != 0) {
 
        if (args[0] === "<@!"+mentioned.id+">"||args[0] === "<@"+mentioned.id+">"){
 
          if (!isNaN(arg2)) {
 
            if (warns[message.guild.id][mentioned.id] === undefined) {
 
              message.channel.send(mentioned.tag+" n'a pas de warns");
 
              return;
 
            } if (warns[message.guild.id][mentioned.id][arg2] === undefined) {
 
              message.channel.send("Je ne pense pas que ce warn existe");
 
              return;
 
            }
 
            delete warns[message.guild.id][mentioned.id][arg2];
 
            var i = 1;
 
            Object.keys(warns[message.guild.id][mentioned.id]).forEach(function(key){
 
              var val=warns[message.guild.id][mentioned.id][key];
 
              delete warns[message.guild.id][mentioned.id][key];
 
              key = i;
 
              warns[message.guild.id][mentioned.id][key]=val;
 
              i++;
 
            });
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            if (Object.keys(warns[message.guild.id][mentioned.id]).length === 0) {
 
              delete warns[message.guild.id][mentioned.id];
 
            }
 
            message.channel.send(`Le warn de ${mentioned.tag}\': ${args[1]} a été enlevé`);
 
            return;
 
          } if (args[1] === "tout") {
 
            delete warns[message.guild.id][mentioned.id];
 
            fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {if (err) console.error(err);});
 
            message.channel.send(`Les warns de ${mentioned.tag} on été enlevé`);
 
            return;
 
          } else {
 
            message.channel.send("Tu la mal utiliser "+prefix+"deletewarns <utilisateur> <nombre>");
 
          }
 
        } else {
 
          message.channel.send("Tu la mal utiliser "+prefix+"deletewarns <utilisateur> <nombre>");
 
        }
 
      } else {
 
       message.channel.send("Tu la mal utiliser "+prefix+"deletewarns <utilisateur> <nombre>");
 
      }
 
    } else {
 
      message.channel.send("Ta éssayer d'enlever un warns à qui ? Tu n'a pas la command !");
    }
  }
 
if(message.content.startsWith(prefix + "echo")) {  
  if(message.member.hasPermission("ADMINISTRATOR")) {
   message.delete();
   let args = message.content.split(" ").slice(1);
   let thingToEcho = args.join (" ")
   message.channel.sendMessage(thingToEcho)
} else {
     message.reply(`Tu n'as pas cette commande`)}

}
if(message.content.startsWith(prefix + "neko")) {  
var neko = ["https://media.giphy.com/media/M5yyzCim2A6li/giphy.gif",
            "https://media.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif",
            "https://media.giphy.com/media/JDeE5kYMFtAs0/giphy.gif",
            "https://media.giphy.com/media/Zmb48nW1EZg5i/giphy.gif",
            "https://media.giphy.com/media/jCaU8WfesJfH2/giphy.gif",
            "https://media.giphy.com/media/l8vODjlQrm2YM/giphy.gif",
            "https://media.giphy.com/media/svAVUj69hK5a0/giphy.gif",
            "https://media.giphy.com/media/gFkljwfw3QVQQ/giphy.gif",
            "https://media.giphy.com/media/J30ocYVafRiyQ/giphy.gif",
            "https://media.giphy.com/media/W2JiHcUyeev5u/giphy.gif",
            "https://media.giphy.com/media/Y3UOGsjBqmAi4/giphy.gif",
            "https://media.giphy.com/media/o8Q1h4ckTDCzS/giphy.gif",
            "https://media.giphy.com/media/Ibly3UwJdLXP2/giphy.gif",
            "https://media.giphy.com/media/eenSsRGbw8C4g/giphy.gif",
            "https://media.giphy.com/media/qWAvh9GmlryEg/giphy.gif",
            "https://media.giphy.com/media/j0SAkJD6RchKE/giphy.gif",
            "https://media.giphy.com/media/ucqXlgoXVr4re/giphy.gif",
            "https://media.giphy.com/media/gUGJ2DebtOuQg/giphy.gif",
            "https://media.giphy.com/media/7ANQ6Qy1kkAqA/giphy.gif",
            "https://media.giphy.com/media/QdmIXmKOX3TOM/giphy.gif"]
var pic = Math.floor((Math.random() * neko.length))
const nembed = new Discord.RichEmbed()
.setDescription(message.author.username + " :heart_eyes_cat: **voila ton NEKKKOOOOO !!!**:heart_eyes_cat: ")
.setImage(neko[pic])
.setFooter("NEKO - Xenom BOT/Made By EpoKa")
.setColor("#CEF6F5")
message.channel.send(nembed)
}
if(message.content.startsWith(prefix + "kill")) {  
  var kill = ["https://media.giphy.com/media/yRMK47EIu9D3i/giphy.gif",
             "https://media.giphy.com/media/a5OCMAro7MGQg/giphy.gif",
             "https://media.giphy.com/media/O8rrDuTnN51WE/giphy.gif",
             "https://media.giphy.com/media/fVTNeOZnsv2Ao/giphy.gif",
             "https://media.giphy.com/media/28p7K4xfPHK8w/giphy.gif",
             "https://media.giphy.com/media/10ZuedtImbopos/giphy.gif",
             "https://media.giphy.com/media/kHSPEiBbJB2Pm/giphy.gif",
             "https://media.giphy.com/media/EAx0koLIKHEre/giphy.gif",
             "https://media.giphy.com/media/6lUOc7sL4dmSs/giphy.gif",
             "https://media.giphy.com/media/znPZLc1uqP4uA/giphy.gif",
             "https://media.giphy.com/media/kQm9fx1SCOn7y/giphy.gif",
             "https://media.giphy.com/media/ALsrZ3Eb5us0g/giphy.gif",
             "https://media.giphy.com/media/36QJOXxK9lFPq/giphy.gif",
             "https://media.giphy.com/media/MhpTnbIzPGCuA/giphy.gif",
             "https://media.giphy.com/media/QPWpTO3s6dVwA/giphy.gif",
             "https://media.giphy.com/media/IxXlMcwPGzse4/giphy.gif",
             "https://media.giphy.com/media/Do5GRTYRIhSFy/giphy.gif"]
  var pic = Math.floor((Math.random() * kill.length))
  let user = message.mentions.users.first()
  const gembed = new Discord.RichEmbed()
  .setDescription(message.author.username + " **a tué** " + user.username + " :boom: :gun:")
  .setImage(kill[pic])
  .setFooter("KILL - Xenom BOT/Made By EpoKa")
  .setColor("#CEF6F5")
  message.channel.send(gembed)
}
if(message.content.startsWith(prefix + "dance")) {  
  var dance = ["https://media.giphy.com/media/aY1HMl4E1Ju1y/giphy.gif",
               "https://media.giphy.com/media/4DcwveaRKklY4/giphy.gif",
               "https://media.giphy.com/media/P01um4PmdEAog/giphy.gif", 
               "https://media.giphy.com/media/oKD23yrxQvWlq/giphy.gif",
               "https://media.giphy.com/media/HZboJ5Pkti9k4/giphy.gif",
               "https://media.giphy.com/media/aRjlzL31lrWDe/giphy.gif",
               "https://media.giphy.com/media/kDXOM0P65LrrO/giphy.gif",
               "https://media.giphy.com/media/vJ4zy8o1beB1e/giphy.gif",
               "https://media.giphy.com/media/rpHo0ea4issOQ/giphy.gif",
               "https://media.giphy.com/media/7tKsrvZdsKuWc/giphy.gif",
               "https://media.giphy.com/media/z9rBJtwrpG3vi/giphy.gif",
               "https://media.giphy.com/media/ca4P1H8VLyl1K/giphy.gif",
               "https://media.giphy.com/media/lEpX0W6F804p2/giphy.gif",
               "https://media.giphy.com/media/7NnYthDdJMk7e/giphy.gif",
               "https://media.giphy.com/media/2QLAnWyCncjwA/giphy.gif",
               "https://media.giphy.com/media/FHYnJWBzcYV9K/giphy.gif",
               "https://media.giphy.com/media/v4e6ysxdFnlKg/giphy.gif",
               "https://media.giphy.com/media/FvnVdDi01U0E/giphy.gif",
               "https://media.giphy.com/media/13mmPbESdtOFC8/giphy.gif",
               "https://media.giphy.com/media/UJpc9TfO85Kc8/giphy.gif",
               "https://media.giphy.com/media/CbKx4uoTrKotW/giphy.gif",
               "https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif"]
  var pic = Math.floor((Math.random() * dance.length))
  let user = message.mentions.users.first()
  const dembed = new Discord.RichEmbed()
  .setDescription(message.author.username + " **dance** :dancer: :dancers: :man_dancing: ")
  .setImage(dance[pic])
  .setFooter("DANCE - Xenom BOT/Made By EpoKa")
  .setColor("#CEF6F5")
  message.channel.send(dembed)
}
if(message.content.startsWith(prefix + "slap")) {  
  var slap = ["https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
              "https://media.giphy.com/media/bYr4BOkAUjCkE/giphy.gif",
              "https://media.giphy.com/media/CieZMxqlhDvOM/giphy.gif",
              "https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
              "https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif",
              "https://media.giphy.com/media/tj22j8LTzb05i/giphy.gif",
              "https://media.giphy.com/media/upEkeeUzrZZzG/giphy.gif",
              "https://media.giphy.com/media/OvrgAOgFYJuq4/giphy.gif",
              "https://media.giphy.com/media/DNS0hAWutpn3y/giphy.gif",
              "https://media.giphy.com/media/l0IyiWcrQzwNerC8g/giphy.gif",
              "https://media.giphy.com/media/OtOZ5YbSaxXqM/giphy.gif",
              "https://media.giphy.com/media/FEp7xOSw81BTy/giphy.gif",
              "https://media.giphy.com/media/YsaRYvSg7lWOQ/giphy.gif",
              "https://media.giphy.com/media/3aHYvf5xxfp5K/giphy.gif",
              "https://media.giphy.com/media/iWurR4G4z657W/giphy.gif",
              "https://media.giphy.com/media/vtuUxg1qBgG6k/giphy.gif",
              "https://media.giphy.com/media/2uVXegXmgi2v6/giphy.gif",
              "https://media.giphy.com/media/K9rQXtu1XdsCQ/giphy.gif",
              "https://media.giphy.com/media/1S5zDKW1VFAUU/giphy.gif"]
  var pic = Math.floor((Math.random() * slap.length))
  let user = message.mentions.users.first()
  const sembed = new Discord.RichEmbed()
  .setDescription(message.author.username + " **a fracasser ** " + user.username + ":boom: :punch:  ")
  .setImage(slap[pic])
  .setFooter("SLAP - Xenom BOT/Made By EpoKa")
  .setColor("#CEF6F5")
  message.channel.send(sembed)
}
if(message.content.startsWith(prefix + "hentai")) {  
  var hentai = ["http://ahegao.online/wp-content/uploads/2017/03/ezgif-1-7db59108d7.gif",
              "https://i.pinimg.com/originals/89/9a/cd/899acdca23d3ba70d81ab4d8f4ce4f0f.gif",
              "https://ahegao.online/wp-content/uploads/2017/02/fa8fb86c6f20982034e54da8c51cbe33.gif",
              "https://i1.yuki.la/2/15/83c8eea206116def8ead2c587fe8a47d50b95f9ed1caab6991ee8044458a0152.gif",
              "http://ahegao.online/wp-content/uploads/2016/07/tumblr_oafoxa1a9S1v2hfg0o1_1280.gif",
              "https://media.8ch.net/file_store/d8653941ff5d81740627f774e851ea8975ddc8a30c3d60867a79660805d1cbcf.gif",
              "http://ahegao.online/wp-content/uploads/2016/07/tumblr_ob69t1wuND1vzttmyo1_500.gif",
              "https://media.8ch.net/oneshota/src/1412975635198.gif",
              "http://4.bp.blogspot.com/-Cgsm9CbiZUk/Uac_FjAjccI/AAAAAAAADdQ/TzHsCh3otjg/s1600/My-Lovely-Lover-Hentai-GIF-6.gif",
              "https://i1.yuki.la/3/18/c06941c1c865a143a24b149c385fd39b4bf18d689e4449210711ab7675db1183.gif",
              "https://i2.yuki.la/a/db/08f820198888e97ef80787fb5629c89560153fc9f5173ac271e185c7f6d6edba.gif",
              "http://lolhentaiporn.com/wp-content/uploads/2018/06/2518304-League_of_Legends-animated-kindred-lamb.gif",
              "http://scarlet.paheal.net/_images/ea85f83b393f5a70b71035f962d3494d/2324657%20-%20Bulma_Briefs%20Dragon_Ball%20YamamotoDoujin%20animated.gif",
              "https://i1.yuki.la/7/fd/d9862eda50ef4ac4cfa27d52dd404da22b5b9e702e01fe07255e94c165a03fd7.gif",
              "https://7chan.org/d/src/13700335082.gif",
              "https://s2.desu-usergeneratedcontent.xyz/gif/image/1510/65/1510658771570.gif",
              "https://media.8ch.net/file_store/9f471f0a70246dfbddf86dce70ea3ce736b7e70b14e1729a0ac81b630b172968.gif",
              "https://cdnio.luscious.net/slywalker_96/288/lusciousnet_lusciousnet_mai-shiranui_wwwpervifycom_050_1984584166.gif",
              "https://thebarchive.com/data/b/image/1463/90/1463900390921.gif",
              "http://ivy.paheal.net/_images/3677d2bfb728ea8e9826648d032c2404/2202630%20-%20Bulma_Briefs%20Dragon_Ball%20YamamotoDoujin%20animated.gif",
              "https://cdn2.sh-cdn.com/images/v2/vertical/thumb/2018-05/Album/94704/5664086.gif",
              "https://i2.yuki.la/8/07/9ed7c968b9cee2665dd4f51643dbd5800491a9c7d910dc0f86eb2432aed7b078.gif",
              "http://3.bp.blogspot.com/-ADrzcfkGpkI/Vi5uTKc66eI/AAAAAAAAAlM/U_u75hJuEns/s1600/db10149cb7267e61266667eea055d084.gif",
              "https://static.hentai-gifs.com/upload/20161031/19/38137/1.gif",
              "https://s2.desu-usergeneratedcontent.xyz/gif/image/1509/75/1509756502091.gif",
              "http://scarlet.paheal.net/_images/8ab794064cd6be55656b8f176222dce6/1898965%20-%20Liru%20Magipoka%20animated%20seismic.gif",
              "https://i1.yuki.la/7/13/1ac24ede53f25110c080478e9b0d6a563dd8416a7d7f3dfa0d73fa35b5807137.gif",
              "http://3.bp.blogspot.com/-zsD6vc8pUJE/VMBc-yrpT4I/AAAAAAAASZ4/pH-yxEF21ZU/s1600/Kanu-Unchou-Yabusame-Ikkitousen-Animated-Hentai-2.gif",
              "http://clover.paheal.net/_images/21c9d617e8645a5c948f102ec71ebbe4/2492929%20-%20Bulma_Briefs%20Dragon_Ball%20Tambourine%20YamamotoDoujin%20animated.gif",
              "https://hentaiporns.net/wp-content/uploads/2016/09/xjulie112x-Baku-Ane-003632a89aeb89bf616bad97831d1bcc8caa.gif",
              "http://ivy.paheal.net/_images/77ccd3031e387e0396b310a2db94166d/1438532%20-%20Hinata_Hyuuga%20Naruto%20animated%20pinoytoons.gif",
              "https://media.8ch.net/file_store/64ef6f35b78a5fef0d2ea5b6eedf98fa084a8a7ec9fb0b8abf5340c99e25bfa2.gif",
              "https://i7a8a9b6.ssl.hwcdn.net/toons-empire.com/upload/mediums/16/5/2/1652fac3076742c48b3e5d28f30a2fbc.gif",
              "https://i1.yuki.la/7/c1/4985ac6be6f2fbb03d5b1ead8a2ff0d4321b0c09f914cfb9a7c69ac5ec355c17.gif",
              "http://66.media.tumblr.com/13231653f652e1eb8341b70d624bd3b4/tumblr_nsv2t6x8511tlyoz0o4_1280.gif",
              "http://lolhentaiporn.com/wp-content/uploads/2018/06/2537561-League_of_Legends-animated-kindred-lamb.gif"]
  var pic = Math.floor((Math.random() * hentai.length))
  let user = message.mentions.users.first()
  const hembed = new Discord.RichEmbed()
  .setDescription(":point_right: :ok_hand: "+message.author.username + " **baise avec** " + user.username + ":ok_hand: :point_left: ")
  .setImage(hentai[pic])
  .setFooter("HENTAI - Xenom BOT/Made By EpoKa")
  .setColor("#CEF6F5")
  message.channel.send(hembed)
}
 })

