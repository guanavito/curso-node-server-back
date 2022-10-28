const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/users";

    //Middlewares
    this.midlewares();

    //Rutas de mi apolcacion
    this.routes();
  }

  midlewares() {
    //Cors
    this.app.use(cors());

    //Parseo y lectura del body
    this.app.use(express.json());

    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto: ", this.port);
    });
  }
}

module.exports = { Server };
