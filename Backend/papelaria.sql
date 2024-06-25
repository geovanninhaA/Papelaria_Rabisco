CREATE DATABASE Papelaria;

USE Papelaria;

CREATE TABLE Produto (
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL, -- VARCHAR vai ate 65000 caracteres
    descricao TEXT NOT NULL,
    preco DECIMAL (10,2) NOT NULL, -- VLOR DE 10 NÚMEROS E NO MAXIMO 2 CASAS DECIMAIS
    quantidade INT NOT NULL
    );
    
SELECT * FROM Produto;

-- APAGAR CONTEÚDO DA TABELA
TRUNCATE TABLE produto;