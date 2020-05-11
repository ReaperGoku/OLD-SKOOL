const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name : "purge",
    aliases : ["clear","clean"],
    category: "admin",
    description : "Clear a number of message",
    usage: "[Number]",

    run : async(client, message, args) => {

        const deleteCount = parseInt(args[0], 10);
        const permission = message.channel.permissionsFor(message.client.user)

      try{
         // get the delete count, as an actual number.
        if(!message.member.hasPermission("KICK_MEMBERS")){
          return message.channel.send("\`\`\`You don't have the permissions to use this command!\`\`\`");
        } else if(!permission.has("MANAGE_MESSAGES")) {
          return message.reply("\`\`\`Don't have the permissions to Manage Messages!\`\`\`");
        } else {        
         // Ooooh nice, combined conditions. <3
         if(!deleteCount || deleteCount < 2 || deleteCount > 100)
         return message.channel.send("\`\`\`Please provide a number between 2 and 100 for the number of messages to delete\`\`\`");
              
         message.delete();
         const fetched = await message.channel.messages.fetch({limit: deleteCount});
         message.channel.bulkDelete(fetched).catch(error => message.reply(`\`\`\`Couldn't delete messages because of: ${error}\`\`\``));
  
         message.channel.send(`\`\`\`${message.member.displayName} has deleted ${deleteCount} messages\`\`\``)
        }
      } catch(err) {
        console.error(err);
      }
    }
}; 