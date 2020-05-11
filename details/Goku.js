const { MessageEmbed } = require("discord.js");

module.exports = {
    name : "goku",
    run : async(client, message) => {
        let goku = new MessageEmbed()
        .setTitle("Rєαpєr☁GoKυ")
        .setColor("00FFFF")
        .setThumbnail(
          "https://cdn.glitch.com/0ec14a2e-93d3-4983-b3a3-5c3145474747%2Fimages%20(7).jpeg?v=1579426165147"
        )
        .addField("IGN:", "Rєαpєr☁GoKυ", true)
        .addField("UID:", "22224011", true)
        .addField("Guild:", "Âкατsuкi", true)
        .addField("Favorite Weapon:", "Famas & M1887", true);
    
      message.channel.send(goku);
    }
};