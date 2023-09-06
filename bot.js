require('dotenv').config();
const { Client, Intents, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const Discord = require("discord.js");
// const client = new Discord.Client();
console.log(process.env.bot_token)
const prefix = "!"; // Customize your bot's command prefix

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "ping") {
      message.reply("Pong!");
    } else {
      // Handle unknown command with an error message
      message.reply(`Unknown command. Use '${prefix}ping' to ping.`);
    }
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

client.on("message", (message) => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "randomcolor") {
      const color = getRandomColor();
      message.channel.send(`Random Color: ${color}`);
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix)) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "luckynumber") {
      const luckyNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
      message.channel.send(`Your Lucky Number: ${luckyNumber}`);
    }
  }
});

function getCurrentTime() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

setInterval(() => {
  const currentTime = getCurrentTime();
  if (currentTime.endsWith(":00")) {
    // Announce time every hour
    const channel = client.channels.cache.get("1148356677129748500");
    if (channel) {
      channel.send(`It's ${currentTime}!`);
    }
  }
}, 60 * 1000); // Check every minute

// const token =  "MTE0ODM1NjY3NzEyOTc0ODUwMA.GYr37H.3x9S-ZjX8FcKHqoOdqBsuQrioZkFF6PWvrkOfk"; // Replace with your bot's token
const token =  process.env.bot_token; // Replace with your bot's token
client.login(token);
