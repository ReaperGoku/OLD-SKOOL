const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require("moment");
const{checkBots, checkMembers, checkOnlineUsers} = require("../../functions.js")

module.exports = {
    name : "serverinfo",
    category: "info",
    description : "Return server Information",

    run : async(client, message, args) => {

        const permission = message.channel.permissionsFor(message.client.user);
      
        if(!permission.has("EMBED_LINKS"))
          return message.reply("\`\`\`Don't have the permissions to send Embed Links!\`\`\`");

            const created = moment(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
            
            let serverembed = new MessageEmbed()
            .setAuthor(`${message.guild.name}`, message.guild.iconURL)
            .setColor("#15f153")
            .setThumbnail(message.guild.iconURL)
            .addField('Server Information', stripIndents `> Server owner: \`${message.guild.owner.displayName}\` 
            > Server region: \`${message.guild.region}\`
            > Server Name: \`${message.guild.name}\`
            > Verification level: \`${message.guild.verificationLevel}\`
            > Channel count: \`${message.guild.channels.size}\`
            > Total member count: \`${message.guild.memberCount}\`
            > Humans: \`${checkMembers(message)}\`
            > Bots: \`${checkBots(message)}\`
            > Online: \`${checkOnlineUsers(message)}\``,true)
            .setFooter(`Guild created at: ${created}`);
            return message.channel.send(serverembed);
        }
    };