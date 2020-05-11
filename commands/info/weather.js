const { MessageEmbed } = require("discord.js");
const weather = require("weather-js");

module.exports = {
    name : "weather",
    category: "info",
    description : "Return weather Information",
    usage: "<City Name>",

    run : async(client, message, args) => {

      const permission = message.channel.permissionsFor(message.client.user);

      if(!permission.has("EMBED_LINKS"))
      return message.reply("\`\`\`Don't have the permissions to send Embed Links!\`\`\`");
      if(args.length < 1)
      return message.reply("\`\`\`Missing search input!\`\`\`");

      weather.find({ search: args.join(" "), degreeType: "C" }, function(err, result) {

        if (err) message.channel.send(err);
        if (!result.length) return message.reply(`\`\`\`City not found\`\`\``)

        var current = result[0].current;
        var location = result[0].location;
        
        const weatherReport = new MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("00FFFF")
        .addField("Timezone", `UTC${location.timezone}`, true)
        .addField("Degree Type", location.degreetype, true)
        .addField("Temperature", `${current.temperature} Degrees`, true)
        .addField("Feels Like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true);

        message.channel.send(weatherReport);
      });
    }
  };