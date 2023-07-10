const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.userPath = "/api/users";

    /*misddlewares = funciones
    - Controla el acceso y validacion de datos
    - Se usa entre la ruta y el controlador
    - Next() = Controla la salida del middleware hacia el controlador 
    */
    this.middlewares();

    // RUTAS DE MI APP
    this.routes();
  }

  middlewares() {
    //CORS = PROTEGER EL SERVIDOR
    this.app.use(cors());

    // Lectura y Parceo del body
    // Recibir un mensaje y Parsear a JSON
    this.app.use(express.json());

    // DIRECTORIO PUBLICO
    this.app.use(express.static("public"));
  }

  routes() {
    // Creo un PATH de la ruta donde quiero que se llame
    this.app.use(this.userPath, require("../routes/users.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el PUERTO : ${this.port}`);
    });
  }
}

module.exports = Server;
