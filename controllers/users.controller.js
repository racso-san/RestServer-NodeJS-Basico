// response = Desesctructuro para poder usar => res.algo
const { response, request } = require("express");

const usersGET = (req = request, res = response) => {
  const { id = "No ID", name = "No name", page = "No page" } = req.query;

  res.json({
    id,
    name,
    page,
    msg: "GET API - Controlador",
  });
};

const usersPUT = (req, res = response) => {
  const { id } = req.params;

  res.json({
    id,
    msg: "PUT API - Controlador",
  });
};

const usersPOST = (req, res = response) => {
  // Desestructuro el body de los datos que vienen del req solicitado
  const { nombre, edad } = req.body;

  res.json({
    msg: "POST API - Controlador",
    nombre,
    edad,
  });
};

const usersDELETE = (req, res = response) => {
  res.json({
    msg: "DELETE API - Controlador",
  });
};

module.exports = {
  usersGET,
  usersPUT,
  usersPOST,
  usersDELETE,
};
