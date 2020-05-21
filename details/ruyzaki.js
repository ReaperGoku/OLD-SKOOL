const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "ryuzaki",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("458860388553981955");

        var ryuzaki = new MessageEmbed()
        .setTitle("Ryuzaki")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "〔Ꮮ〕", true)
        .addField("UID:", 273893088, true)
        .addField("Guild:", "TᴀꜱᴋFᴏʀᴄᴇ", true)
        .addField("Favorite Weapon:", "M500", true);
    
        message.channel.send(ryuzaki);
    }
};