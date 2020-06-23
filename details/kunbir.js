const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "kunbir",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("480388084186218507");

        var kunbir = new MessageEmbed()
        .setTitle("Kunbir")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "OS KUNBIR", true)
        .addField("UID:", "218004519", true)
        .addField("Guild:", "O𝙻𝙳•𝚂𝙺𝙾𝙾𝙻", true)
        .addField("Favorite Weapon:", "AN94 & MP40", true);
    
        message.channel.send(kunbir);
    }
};