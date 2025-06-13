const { TURMAS } = require("../constants/turma");

exports.getAlunosPorTurma = (alunos) => {
  const contagem = alunos.reduce((acc, { turma }) => {
    if (Object.values(TURMAS).includes(turma)) {
      acc[turma] = (acc[turma] || 0) + 1;
    }
    return acc;
  }, {
    [TURMAS.INFANTIL]: 0,
    [TURMAS.INTERMEDIARIO]: 0,
    [TURMAS.ADULTO]: 0,
  });

  return Object.entries(contagem).map(([turma, quantidade]) => ({
    turma,
    quantidade
  }));
};

exports.getAlunosPorGenero = (alunos) => {
  const contagem = alunos.reduce((acc, { sexo }) => {
    if (sexo === "Masculino" || sexo === "Feminino") {
      acc[sexo] = (acc[sexo] || 0) + 1;
    }
    return acc;
  }, { Masculino: 0, Feminino: 0 });

  return Object.entries(contagem).map(([name, value]) => ({ name, value }));
};
