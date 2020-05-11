const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "kunbir",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("480388084186218507");

        var kunbir = new MessageEmbed()
        .setTitle("Kunbir")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "AK KUNBIR", true)
        .addField("UID:", "218004519", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "AK47 & MP40", true);
    
        message.channel.send(kunbir);
    }
};