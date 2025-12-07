-- Tabela de Pacientes
CREATE TABLE pacientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INTEGER NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

-- Tabela de Consultas
CREATE TABLE consultas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_id INTEGER NOT NULL,
    data_consulta DATE NOT NULL,
    hora_consulta TIME NOT NULL,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id)
);

-- Inserindo dados de exemplo
INSERT INTO pacientes (nome, idade, telefone) VALUES
('Maria Santos', 30, '1199999-0000'),
('João Pereira', 45, '1198888-1111');

INSERT INTO consultas (paciente_id, data_consulta, hora_consulta) VALUES
(1, '2025-01-15', '14:00'),
(2, '2025-01-16', '09:30');
