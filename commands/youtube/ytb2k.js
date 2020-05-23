const Discord = require("discord.js");
const db = require("quick.db");
const Parser = require('rss-parser');


module.exports = {
    name : "ytb2k",
    category: "youtube",
    description : "Send a Youtube notification of channel Born2Kill",

    run : async(client, message, args) => {

        if(message.member.id !== "491887552626819102") return message.channel.send("\`\`\`You don't have a permission!\`\`\`").catch(console.error);;
        
        async function handleUploads() {
            const config = {
                channel_id : process.env.B2K,
                messageTemplate : process.env.MESSAGETEMPLATE,
            };
            if (db.fetch(`b2kVideos`) === null) db.set(`b2kVideos`, []);
            
            let parser = new Parser();
            let feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${config.channel_id}`);
            
            if (db.fetch(`b2kVideos`).includes(feed.items[0].link)) return;
            else {
                db.set(`b2kvideoData`, feed.items[0]);
                db.push("b2kVideos", feed.items[0].link);
                let parsed = db.fetch(`b2kvideoData`);
                let channel = client.channels.cache.get("713767967195922498");
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