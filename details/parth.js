const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "parth",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("597708889609469979");

        var parth = new MessageEmbed()
        .setTitle("PARTH")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "OS PARTH_420", true)
        .addField("UID:", "403624037", true)
        .addField("Guild:", "O𝙻𝙳•𝚂𝙺𝙾𝙾𝙻", true)
        .addField("Favorite Weapon:", "XM8 & M1887", true);
    
      message.channel.send(parth);
    }
};