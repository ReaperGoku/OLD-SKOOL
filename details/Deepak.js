const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "deepak",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("452357258710351873");

        var deepak = new MessageEmbed()
        .setTitle("Deepak")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "OS DEEPAK", true)
        .addField("UID:", "54032086", true)
        .addField("Guild:", "O𝙻𝙳•𝚂𝙺𝙾𝙾𝙻", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(deepak);
    }
};