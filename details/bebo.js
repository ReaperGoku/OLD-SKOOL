const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "bebo",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("636186537931046932");

        var bebo = new MessageEmbed()
        .setTitle("Bebo")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "Supergirl", true)
        .addField("UID:", "559460306", true)
        .addField("Guild:", "NOT IN GUILD", true)
        .addField("Favorite Weapon:", "Jisase enemy mar jaye", true);
    
      message.channel.send(bebo);
    }
};