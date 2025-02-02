let cursos = [
  {
    "id": "01",
    "nome": "Informática",
    "alunoAtual": 0,
  },
  {
    "id": "02",
    "nome": "Mecânica",
    "alunoAtual": 0,
  },
  {
    "id": "03",
    "nome": "Refrigeração",
    "alunoAtual": 0,
  },
  {
    "id": "04",
    "nome": "Manut. e Sup.",
    "alunoAtual": 0,
  },
];

let alunos = [
  {
    "matricula": 20220201, 
    "nome": "Maria Oliveira",
    "curso": cursos[1].nome,
    "turno": "Vespertino",
    "periodo": "4º"
  },
  {
    "matricula": 20250401, 
    "nome": "Carlos Souza",
    "curso": cursos[3].nome,
    "turno": "Matutino",
    "periodo": "1º"
  },
  {
    "matricula": 20250102,
    "nome": "Ana Costa",
    "curso": cursos[0].nome,
    "turno": "Matutino",
    "periodo": "1º"
  },
  {
    "matricula": 20230203,
    "nome": "Pedro Lima",
    "curso": cursos[1].nome,
    "turno": "Vespertino",
    "periodo": "3º"
  },
  {
    "matricula": 20240104,
    "nome": "Juliana Mendes",
    "curso": cursos[3].nome,
    "turno": "Matutino",
    "periodo": "4º"
  },
  {
    "matricula": 20250202, 
    "nome": "Rafael Almeida",
    "curso": cursos[0].nome,
    "turno": "Matutino",
    "periodo": "2º"
  },
  {
    "matricula": 20240301,
    "nome": "Fernanda Rocha",
    "curso": cursos[1].nome,
    "turno": "Vespertino",
    "periodo": "1º"
  },
  {
    "matricula": 20250301,
    "nome": "Ricardo Gomes",
    "curso": cursos[3].nome,
    "turno": "Matutino",
    "periodo": "3º"
  },
  {
    "matricula": 20250404,
    "nome": "Isabela Pereira",
    "curso": cursos[3].nome,
    "turno": "Vespertino",
    "periodo": "1º"
  }
];

cursos[0].alunoAtual = alunos.filter(aluno => aluno.curso === cursos[0].nome).length;
cursos[1].alunoAtual = alunos.filter(aluno => aluno.curso === cursos[1].nome).length;
cursos[2].alunoAtual = 1; // Foi inserido direto no html
cursos[3].alunoAtual = alunos.filter(aluno => aluno.curso === cursos[3].nome).length;


const table = document.querySelector('#tabela_alunos');

alunos.map(aluno => {
    let linha = table.insertRow(-1);
    let coluna1 = linha.insertCell(0);
    let coluna2 = linha.insertCell(1);
    let coluna3 = linha.insertCell(2);
    let coluna4 = linha.insertCell(3);
    let coluna5 = linha.insertCell(4);

    coluna1.textContent = aluno.matricula;
    coluna2.textContent = aluno.nome;
    coluna3.textContent = aluno.curso;
    coluna4.textContent = aluno.turno;
    coluna5.textContent = aluno.periodo;
})