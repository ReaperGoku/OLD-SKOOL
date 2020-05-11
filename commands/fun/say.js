
module.exports = {
    name : "say",
    aliases : ["sy"],
    category: "fun",
    description : "Send a given message",
    usage: "<Message>",

    run : async(client, message, args) => {
        try{
        const permission = message.channel.permissionsFor(message.client.user)

        if(!permission.has("MANAGE_MESSAGES")){
            return message.reply("\`\`\`Don't have the permissions to Manage Messages!\`\`\`");
        }
        if(!args[0]){
            return message.reply("\`\`\`Please specify input\`\`\`").then(m => m.delete(10000));          
        } else {
            message.delete(); 
            message.channel.send(args.join(" "));      
        };
    } catch(error) {
        console.log(error);
    }
        
    }
};