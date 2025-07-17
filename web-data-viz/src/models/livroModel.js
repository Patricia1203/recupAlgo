var database = require("../database/config");

function publicar(titulo, autor, precoCompra, precoVenda, quantidade, genero) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, autor, precoCompra, precoVenda, quantidade, genero);
    var instrucaoSql = `
        INSERT INTO livro (titulo, autor, precoCompra, precoVenda, quantidade, fkGenero) VALUES ('${titulo}', '${autor}', '${precoCompra}', '${precoVenda}', '${quantidade}', ${genero});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            l.id AS idLivro,
            l.titulo,
            l.autor,
            l.precoCompra,
            l.precoVenda,
            l.quantidade,
            g.nome
        FROM livro l JOIN genero g ON g.id = l.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoPreço, novaQuantidade, idLivro) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoPreço, novaQuantidade, idLivro);
    var instrucaoSql = `
        UPDATE livro SET precoCompra = '${novoPreço}', quantidade = '${novaQuantidade}' WHERE id = ${idLivro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    publicar,
    listar, 
    editar
}