const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "pain",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("487525353875832842");

        var pain = new MessageEmbed()
        .setTitle("Pain")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "ＰＡＩＮ", true)
        .addField("UID:", 42921744, true)
        .addField("Guild:", "NOT DECIDED YET", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true)
        .addField("WHATSAPP NO:", "8527815913", true)
        .setFooter("ALMIGHTY PUSH");
    
      message.channel.send(pain);
    }
};