const Discord = require("discord.js");
const db = require("quick.db");
const Parser = require('rss-parser');


module.exports = {
    name : "ytsooneeta",
    category: "youtube",
    description : "Send a Youtube notification of channel sooneeta",

    run : async(client, message, args) => {

        if(message.member.id !== "491887552626819102") return message.channel.send("\`\`\`You don't have a permission!\`\`\`").catch(console.error);;
        
        async function handleUploads() {
            const config = {
                channel_id : process.env.SOONEETA,
                messageTemplate : process.env.MESSAGETEMPLATE,
            };
            if (db.fetch(`gokuVideos`) === null) db.set(`gokuVideos`, []);
            
            let parser = new Parser();
            let feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${config.channel_id}`);
            
            if (db.fetch(`gokuVideos`).includes(feed.items[0].link)) return;
            else {
                db.set(`gokuvideoData`, feed.items[0]);
                db.push("gokuVideos", feed.items[0].link);
                let parsed = db.fetch(`gokuvideoData`);
                let channel = client.channels.cache.get("710000703673860126");
                if (!channel) return;
                let message = config.messageTemplate
                .replace(/{author}/g, parsed.author)
                .replace(/{title}/g, Discord.Util.escapeMarkdown(parsed.title))
                .replace(/{url}/g, parsed.link);
                channel.send(message);
            }
            setInterval( handleUploads, 30000);
        };
        handleUploads();
        message.channel.send("Executed");
    } 
}