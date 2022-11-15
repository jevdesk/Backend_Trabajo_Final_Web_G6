const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./database");
//Configuracion
app.set("port", process.env.PORT || 3000);
//Middlewares
//app.use(express.json());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);
app.use(cors({ origin: "*" }));
//Rutas
app.use("/api/usuarios", require("./routes/usuarios.route"));
app.use("/api/afiliados", require("./routes/afiliados.route"));
app.use("/api/servicios", require("./routes/servicios.route"));
app.use("/api/novedades", require("./routes/novedades.route"));
app.use("/api/pagos", require("./routes/pagos.route"));
app.use("/api/noticias", require("./routes/noticias.route"));
//Inicio
app.listen(app.get("port"), () => {
  console.log("Server iniciado en puerto ", app.get("port"));
});
