const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "sandy",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("526652626142756894");

        var sandy = new MessageEmbed()
        .setTitle("Sandy")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Ꮇꮢ-Տᴀɴᴅʏ-♪", true)
        .addField("UID:", 88027587, true)
        .addField("Guild:", "O𝙻𝙳•𝚂𝙺𝙾𝙾𝙻", true)
        .addField("Favorite Weapon:", "SCAR & M1014", true)
        .setFooter("M marathi hu");
    
      message.channel.send(sandy);
    }
};