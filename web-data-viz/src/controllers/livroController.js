var livroModel = require("../models/livroModel");

function publicar(req, res) {
    var titulo = req.body.titulo;
    var autor = req.body.autor;
    var precoCompra = req.body.precoCompra;
    var precoVenda = req.precoVenda;
    var quantidade = req.body.quantidade;
    var genero = req.body.genero;
    var autor = req.body.autor;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (autor == undefined) {
        res.status(400).send("O autor está indefinido!");
    } else if (precoCompra == undefined) {
        res.status(400).send("O preço de compra está indefinido!");
    } else if (precoVenda == undefined) {
        res.status(400).send("O preço de compra está indefinido!");
    } else if (quantidade == undefined) {
        res.status(400).send("A quantidade está indefinido!");
    } else if (genero == undefined) {
        res.status(400).send("O gênero está indefinido!");
    } else {
        livroModel.publicar(titulo, autor, precoCompra, precoVenda, quantidade, genero)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    livroModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os livros: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    publicar
}