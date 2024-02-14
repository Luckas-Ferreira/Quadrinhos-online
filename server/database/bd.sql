CREATE TABLE quadrinho(
    quadrinho_id INT AUTO_INCREMENT,
    nome VARCHAR(50),
    valor INT,
    quantDispo INT,
    descricao VARCHAR(255),
    tipo VARCHAR(20),
    quantPaginas INT,
    foto VARCHAR(255),
    PRIMARY KEY (quadrinho_id)
);

CREATE TABLE usuario(
    usuario_id INT AUTO_INCREMENT,
    valor INT,
    nome VARCHAR(50),
    senha VARCHAR(11),
    PRIMARY KEY (usuario_id)
);

CREATE TABLE alugados(
    alugado_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    quadrinho_id INT,
    data_aluguel DATE,
    data_devolucao DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id),
    FOREIGN KEY (quadrinho_id) REFERENCES quadrinho(quadrinho_id)
);
