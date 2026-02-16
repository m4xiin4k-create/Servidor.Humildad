const { Client, GatewayIntentBits } = require('discord.js');
const { spawn } = require('child_process');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

client.once('clientReady', () => {
  console.log(`Bot listo como ${client.user.tag}`);
});

client.on('messageCreate', msg => {

  if (msg.content === "!startmc") {

    msg.reply("Arrancando servidor...");

    // Crafty
    spawn("bash", ["/workspaces/Servidor.Humildad/minecraft/run_crafty.sh"], {
      detached: true,
      stdio: "ignore"
    }).unref();

    // playit
    spawn("playit", [], {
      detached: true,
      stdio: "ignore"
    }).unref();

    // keep alive
    spawn("bash", ["-c", "while true; do echo activo; sleep 60; done"], {
      detached: true,
      stdio: "ignore"
    }).unref();

    msg.reply("Servidor iniciado 🚀");
  }

});
client.login(TOKEN);
