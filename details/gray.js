const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "gray",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("454708192245710858");

        var gray = new MessageEmbed()
        .setTitle("MITESH")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "GRAVEWALKER", true)
        .addField("Guild:", "ESL IND", true)
        .addField("Favorite Weapon:", "AK47 & DEAGLE", true);
    
      message.channel.send(gray);
    }
};