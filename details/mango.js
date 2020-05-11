const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "mango",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("580063296925728770");

        var MANGO = new MessageEmbed()
        .setTitle("MANGO")
        .setColor("00FFFF")
        .addField("IGN:", "Rσsé◇Ɗɪᴠᴀ", true)
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("UID:", 576843121, true)
        .addField("Guild:", "The◇Ɗɪᴠᴀѕ", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true)
        .setFooter("CUTEST GIRL");
    
      message.channel.send(MANGO);
    }
};