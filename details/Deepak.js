const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "deepak",
    run : async(client, message) => {
        const member = message.guild.members.cache.cache.get("452357258710351873");

        var deepak = new MessageEmbed()
        .setTitle("Deepak")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "ᴬᴷ★Dᴇᴇᴩᴀᴋ࿐ ★♬", true)
        .addField("UID:", "54032086", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "SCAR & MP40", true);
    
      message.channel.send(deepak);
    }
};