CREATE DATABASE livraria;

USE livraria;

CREATE TABLE genero(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20)
);

CREATE TABLE livro(
id INT PRIMARY KEY  AUTO_INCREMENT,
fkGenero INT,
titulo VARCHAR(35),
autor VARCHAR(45),
quantidade INT,
precoCompra DECIMAL(5,2),
precoVenda DECIMAL(5,2),
CONSTRAINT fkLivroGenero FOREIGN KEY (fkGenero) REFERENCES genero(id)
);

INSERT INTO genero VALUES 
(DEFAULT, 'horror'),
(DEFAULT, 'romance'),
(DEFAULT, 'poesia'),
(DEFAULT, 'fantasia');