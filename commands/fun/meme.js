const { MessageEmbed } = require("discord.js");
const randomPuppy = require ("random-puppy");

module.exports = {
    name : "meme",
    category: "fun",
    description : "meme command",

    run : async(client, message, args) => {

      const permission = message.channel.permissionsFor(message.client.user);

      try{

        if(!permission.has("MANAGE_MESSAGES")) {
          return message.reply("\`\`\`Don't have the permissions to Manage Messages!\`\`\`");
        } else if(!permission.has("EMBED_LINKS")){
          return message.reply("\`\`\`Don't have the permissions to send Embed Links!\`\`\`");
        } else {

        const subReddits = ["denkmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
        .setColor("random")
        .setImage(img)
        .setURL(`http://reddit.com/r/${random}`)
        
        message.delete();
        message.channel.send(embed);
        };

      } catch(err) {
        console.log(err);
      }
    }
};