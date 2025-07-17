var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.post("/publicar", function (req, res) {
    livroController.publicar(req, res);
});

router.get("/listar", function (req, res) {
    livroController.listar(req, res);
});

router.put("/editar/:idLivro", function (req, res) {
    avisoController.editar(req, res);
});

module.exports = router;