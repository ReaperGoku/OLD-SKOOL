const { Client, Collection} = require("discord.js"); // import discord.js module
const fs = require("fs"); // import fs module

const client = new Client(); //The main hub for interacting with the Discord API, and the starting point for any bot.
require('dotenv-flow').config();

client.categories = fs.readdirSync("./commands/");

const config = {
    token : process.env.TOKEN,
};

["commands", "aliases","details"].forEach(x => client[x] = new Collection()); // a new map for commands

["command", "event", "detail"].forEach(handler => {require(`./handler/${handler}`)(client)});

client.queue = new Map();

client.login(config.token);