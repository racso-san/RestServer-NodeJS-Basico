const {
  usersGET,
  usersPUT,
  usersPOST,
  usersDELETE,
} = require("../controllers/users.controller");
const { Router } = require("express");

// Al desestructurar ROUTER me permite usar la funcion
const router = Router();

router.get("/", usersGET);

// PUT = PARA ACTUALIZAR DATOS
router.put("/:id", usersPUT);

// POST = CREAR NUEVOS DATOS
router.post("/", usersPOST);

router.delete("/", usersDELETE);

module.exports = router;
