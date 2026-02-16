const http = require("http");
const { spawn } = require("child_process");

http.createServer((req, res) => {

  if (req.url === "/start") {

    console.log("Encendiendo servidor...");

    spawn("bash", ["/workspaces/Servidor.Humildad/minecraft/run_crafty.sh"], {
      detached: true,
      stdio: "ignore"
    }).unref();

    spawn("playit", [], {
      detached: true,
      stdio: "ignore"
    }).unref();

    spawn("bash", ["-c", "while true; do echo activo; sleep 60; done"], {
      detached: true,
      stdio: "ignore"
    }).unref();

    res.end("Servidor iniciado");
    return;
  }

  res.end("Servidor listo");
}).listen(3000, () => console.log("Receiver activo"));
