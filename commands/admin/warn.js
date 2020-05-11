const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "warn",
    aliases : ["w"],
    category: "admin",
    description : "Warn a mentioned member",
    usage: "<Member & reason>",

    run : async(client, message, args) => {
        try{

         if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have premission to do that!");
         let reason = args.slice(1).join(' ');
         let user = message.mentions.users.first();
         if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.');
         if (reason.length < 1) return message.reply('You must have a reason for the warning.');
      
         let dmsEmbed = new MessageEmbed()
         .setTitle("Warn")
         .setColor("#00ff00")
         .setDescription(`You have been warned on \`${message.guild.name}\``)
         .addField("Reason", reason);
      
         user.send(dmsEmbed);
      
         message.delete();
        
         message.channel.send(`\*\*\*${message.mentions.members.first()} has been warned\*\*\*`)
        
        } catch(err) {
            console.log(err);
        }
    }
};