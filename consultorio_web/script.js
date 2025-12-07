function carregarPacientes() {
    return JSON.parse(localStorage.getItem("pacientes") || "[]");
}

function salvarPacientes(pacientes) {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    mostrarPacientes();
    carregarSelectPacientes();
}

function cadastrarPaciente() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const telefone = document.getElementById("telefone").value;

    if (!nome || !idade || !telefone) {
        alert("Preencha todos os campos!");
        return;
    }

    const pacientes = carregarPacientes();
    pacientes.push({ id: Date.now(), nome, idade, telefone });
    salvarPacientes(pacientes);

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("telefone").value = "";
}

function mostrarPacientes() {
    const pacientes = carregarPacientes();
    const lista = document.getElementById("listaPacientes");
    lista.innerHTML = "";

    pacientes.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.nome} - ${p.idade} anos - ${p.telefone}`;
        lista.appendChild(li);
    });
}

function carregarSelectPacientes() {
    const pacientes = carregarPacientes();
    const select = document.getElementById("pacienteSelect");

    select.innerHTML = "";
    pacientes.forEach(p => {
        const option = document.createElement("option");
        option.value = p.id;
        option.textContent = p.nome;
        select.appendChild(option);
    });
}

function carregarConsultas() {
    return JSON.parse(localStorage.getItem("consultas") || "[]");
}

function salvarConsultas(consultas) {
    localStorage.setItem("consultas", JSON.stringify(consultas));
    mostrarConsultas();
}

function agendarConsulta() {
    const pacienteId = document.getElementById("pacienteSelect").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!pacienteId || !data || !hora) {
        alert("Preencha todos os campos!");
        return;
    }

    const consultas = carregarConsultas();
    consultas.push({ pacienteId, data, hora });
    salvarConsultas(consultas);
}

function mostrarConsultas() {
    const consultas = carregarConsultas();
    const pacientes = carregarPacientes();
    const lista = document.getElementById("listaConsultas");

    lista.innerHTML = "";

    consultas.forEach(c => {
        const paciente = pacientes.find(p => p.id == c.pacienteId);
        const li = document.createElement("li");
        li.textContent = `${paciente.nome} — ${c.data} às ${c.hora}`;
        lista.appendChild(li);
    });
}

mostrarPacientes();
carregarSelectPacientes();
mostrarConsultas();
