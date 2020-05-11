const ms = require("ms");

module.exports = {
    name : "mute",
    aliases : ["m"],
    category: "admin",
    description : "Mute a mentioned member",
    usage: "<Member & Time(s,m,h,d)>",

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

        //start of create role
        if(!muterole){
            try{
                muterole = await message.guild.roles.create({
                    data:{
                        name: "Muted",
                        color: "#000000",
                        permissions:[]
                    }
                })
                message.guild.channels.cache.each(  async channel => {    
                    await channel.overwritePermissions([
                        {
                           id: muterole.id,
                           deny: ['SEND_MESSAGES','ADD_REACTIONS'],
                        },
                      ]);
                });
            } catch(e) {
                console.log(e.stack);
            }
        }
        //end of create role
        let mutetime = args[1];
        if(!mutetime) return message.reply("\`\`\`You didn't specify a time!\`\`\`");
        if(!mutetime.match(/^\d/)) return message.reply("\`\`\`You didn't specify a time!\`\`\`");
        await(tomute.roles.add(muterole.id));
        message.reply(`\*\*\*${tomute.displayName} has been muted for ${ms(ms(mutetime))}\*\*\*`);
        setTimeout(function(){
            tomute.roles.remove(muterole.id);
            message.channel.send(`\*\*\*${tomute.displayName} has been unmuted!\*\*\*`);
        }, ms(mutetime));
    }
};