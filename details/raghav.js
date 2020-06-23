const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "raghav",
    run : async(client, message) => {
        const member = message.guild.members.cache.get("637689734646333471");

        var RAGHAV = new MessageEmbed()
        .setTitle("RAGHAV")
        .setColor("00FFFF")
        .setThumbnail(member.user.avatarURL({ format: 'png', dynamic: true }))
        .addField("IGN:", "OS RAGHAV_OP", true)
        .addField("UID:", "745988475", true)
        .addField("Guild:", "O𝙻𝙳•𝚂𝙺𝙾𝙾𝙻", true)
        .addField("Favorite Weapon:", "SCAR", true);
    
      message.channel.send(RAGHAV);
    }
};