const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, joinedPosition} = require("../../functions.js");
const moment = require("moment");

module.exports = {
    name : "whois",
    aliases : [ 'userinfo', 'user', 'who' ],
    category: "info",
    description : "Return User Information",
    usage: "[username | id | mention]",

    run : async(client, message, args) => {
      const member = getMember(message, args.join(" "));
      const position = joinedPosition(message, member)
       
        //Member Variable
        const joined = moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        const roles = member.roles.cache
          .filter(r => r.id !== message.guild.id)
          .map(r => r.name)
          .join(", ") || "none";

        var permissions = [];
        var acknowledgements = "Member";

        if (member.hasPermission("KICK_MEMBERS")) {
          permissions.push("Kick Members");
        }
      
        if (member.hasPermission("BAN_MEMBERS")) {
          permissions.push("Ban Members");
        }
      
        if (member.hasPermission("ADMINISTRATOR")) {
          permissions.push("Administrator");
        }
      
        if (member.hasPermission("MANAGE_MESSAGES")) {
          permissions.push("Manage Messages");
        }
      
        if (member.hasPermission("MANAGE_CHANNELS")) {
          permissions.push("Manage Channels");
        }
      
        if (member.hasPermission("MENTION_EVERYONE")) {
          permissions.push("Mention Everyone");
        }
      
        if (member.hasPermission("MANAGE_NICKNAMES")) {
          permissions.push("Manage Nicknames");
        }
      
        if (member.hasPermission("MANAGE_ROLES")) {
          permissions.push("Manage Roles");
        }
      
        if (member.hasPermission("MANAGE_WEBHOOKS")) {
          permissions.push("Manage Webhooks");
        }
      
        if (member.hasPermission("MANAGE_EMOJIS")) {
          permissions.push("Manage Emojis");
        }
      
        if (permissions.length == 0) {
          permissions.push("No Key Permissions Found");
        }
        if (member.hasPermission("KICK_MEMBERS")){
            acknowledgements = "Server Admin";
          }
      
        if (member.user.id == message.guild.owner.id) {
          acknowledgements = "Server Owner";
        }

        // User variable
        const created = moment(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");

        const embed = new MessageEmbed()
          .setFooter(client.user.username, client.user.displayAvatarURL( {dynamic: true} ))
          .setThumbnail(member.user.displayAvatarURL( {dynamic: true} ))
          .setColor(member.displayHexColor === "#000000" ? "#ffffff" : member.displayHexColor)

          .addField('Member Information', stripIndents `> Display name: \`${member.displayName}\`
          > Joined at: \`${joined}\`
          > Joined Position: \`${position}\`
          > Acknowledgements: \`${acknowledgements}\``,true)

          .addField('Member Roles & Permissions', stripIndents `> Roles: \`${roles}\`
          > Permissions: \`${permissions.join(", ")}\``,true) //

          .addField('User Information', stripIndents`> ID: \`${member.user.id}\` 
          > Username: \`${member.user.username}\`
          > Discord tag: \`${member.user.tag}\`
          > Created at: \`${created}\``,true)

          .setTimestamp()

        if(member.user.presence.game)
           embed.addField(`Currently playing`, `> Name: ${member.user.presence.game.name}`);

        message.channel.send(embed);
    }
};