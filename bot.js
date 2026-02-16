const { Client, GatewayIntentBits } = require('discord.js');

// ===== SERVIDOR WEB FALSO PARA RENDER =====
require("http")
  .createServer((req, res) => res.end("Bot activo"))
  .listen(process.env.PORT || 3000);

// ===== CONFIG DISCORD =====
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

// 🔴 PONÉ ACA TU URL DEL SERVIDOR QUE ARRANCA MINECRAFT
const SERVER_ENDPOINT = "URL_DE_TU_ENDPOINT";

// ===== BOT READY =====
client.once('clientReady', () => {
  console.log(`Bot listo como ${client.user.tag}`);
});

// ===== COMANDOS =====
client.on('messageCreate', async msg => {

  if (msg.content === "!startmc") {

    await msg.reply("Enviando señal para arrancar servidor...");

    try {
      await fetch(`${SERVER_ENDPOINT}/start`);
      await msg.reply("Servidor iniciado 🚀");
    } catch (err) {
      console.error(err);
      await msg.reply("Error al iniciar servidor ❌");
    }
  }

});

// ===== LOGIN =====
client.login(TOKEN);
