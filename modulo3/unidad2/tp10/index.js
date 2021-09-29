"use strict";
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/public/"));
app.use(express.urlencoded({ extended: true }));
app.post("/procesar", function (req, res) {
  let html = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registro completo</title>
  </head>
  <body>
    <h1>Registro completo</h1>
    <p>
      Te has registrado con los siguientes datos. Comprueba que sean correctos o
      <a href="/">prueba de nuevo</a>
    </p>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Teléfono celular</th>
          <th>País de nacimiento</th>
          <th>País de residencia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${req.body.firstname}</td>
          <td>${req.body.lastname}</td>
          <td>${req.body.age}</td>
          <td>${req.body.phonenumber}</td>
          <td>${req.body.nacionalidad}</td>
          <td>${req.body.residencia}</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`;
  res.send(html);
});
app.listen(3000, function () {
  console.log("Servidor escuchando peticiones en el puerto 3000.");
});
