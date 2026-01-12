import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`🤖 Bot online come ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase() === "ciao") {
    message.reply("Ciao! 👋");
  }

  if (message.content.toLowerCase() === "feglia") {
    message.reply("Purtroppo è morto :emote_gls_112:");
  }
});

client.login(process.env.DISCORD_TOKEN);
