const { getMember } = require("../../functions.js");

module.exports = {
    name : "flipcoin",
    aliases : ["toss"],
    category: "fun",
    description : "Heads or Tails",

    run : (client, message, args) => {

        const permission = message.channel.permissionsFor(message.client.user)
        if(!permission.has("MANAGE_MESSAGES")){
            return message.reply("\`\`\`Don't have the permissions to send Embed Links!\`\`\`");
        } else {
        message.delete({ timeout: 3000} );

        var flipcoin = ["Heads", "Tails"];

        var randomIndex = Math.floor(Math.random() * flipcoin.length); 

        message.channel.send(`\`\`\`${flipcoin[randomIndex]}\`\`\``);
        }
    }
};