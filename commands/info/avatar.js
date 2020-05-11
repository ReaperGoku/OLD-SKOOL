const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
    name : "avatar",
    aliases : ["av", "dp"],
    category: "info",
    description : "Display the Profile Photo of the User",
    usage: "[username | id | mention]",

    run : async(client, message, args) => {

      const permission = message.channel.permissionsFor(message.client.user);
      
      if(!permission.has("EMBED_LINKS")){
        return message.reply("\`\`\`Don't have the permissions to send Embed Links!\`\`\`");
      } else {
        const member = getMember(message, args.join(" "));
        var avatar = new MessageEmbed()
        .setTitle("Hi Beautiful")
        .setImage(member.user.avatarURL({ format: 'png', dynamic: true , size : 1024 }))
        .setFooter(member.user.tag)
        .setColor("00FFFF");
      
       message.channel.send(avatar).then(async embedMessage => {
        try{
          await embedMessage.react("👍");
          await embedMessage.react("😱");
          await embedMessage.react("❤");
          await embedMessage.react("😡");
        } catch(error) {
          console.log(error);
        }
      });
    }
    }
  };