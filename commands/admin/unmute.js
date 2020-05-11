module.exports = {
    name : "unmute",
    aliases : ["un"],
    category: "admin",
    description : "Unmute a mentioned member",
    usage: "<Member>",

    run : async(client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

        const permission = message.channel.permissionsFor(message.client.user);
        if(!permission.has("MANAGE_ROLES")){
            return message.reply("\`\`\`Don't have the permissions to Manage Roles!\`\`\`");
        }

        //!tempmute @user 1s/m/h/d
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!tomute) return message.reply("\`\`\`Couldn't find user.\`\`\`");
        if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("\`\`\`Can't mute them!\`\`\`");
        let muterole = message.guild.roles.cache.find(role => role.name === "Muted" );

        try{
            tomute.roles.remove(muterole.id);
            message.channel.send(`\*\*\*${tomute.displayName} has been unmuted!\*\*\*`);
        } catch {
            console.log(error);
        }
    }
};