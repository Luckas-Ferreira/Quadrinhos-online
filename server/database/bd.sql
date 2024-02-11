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

CREATE TABLE alugar_quadrinho(
    alugar_id INT AUTO_INCREMENT,
    quantSelect INT,
    quadrinho_id INT,
    usuario_id INT,
    PRIMARY KEY (alugar_id)
);

CREATE TABLE usuario(
    usuario_id INT AUTO_INCREMENT,
    valor INT,
    PRIMARY KEY (usuario_id)
);