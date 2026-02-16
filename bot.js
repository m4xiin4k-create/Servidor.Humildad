const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

// URL de tu servidor (la pondremos después)
const SERVER_ENDPOINT = "URL_DE_TU_ENDPOINT";

client.once('clientReady', () => {
  console.log(`Bot listo como ${client.user.tag}`);
});

client.on('messageCreate', async msg => {

  if (msg.content === "!startmc") {

    msg.reply("Enviando señal para arrancar servidor...");

    try {
      await fetch(`${SERVER_ENDPOINT}/start`);
      msg.reply("Servidor iniciado 🚀");
    } catch (err) {
      console.error(err);
      msg.reply("Error al iniciar servidor ❌");
    }
  }

});

client.login(TOKEN);
