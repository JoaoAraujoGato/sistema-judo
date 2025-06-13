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

exports.getEvolucaoMensalAlunos = (alunos) => {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth(); // 0-based (jan = 0)

  return meses.slice(0, mesAtual + 1).map((mesNome, index) => {
    const fimDoMes = new Date(anoAtual, index + 1, 0); // último dia do mês

    const cadastrados = alunos.filter((aluno) => {
      const dataCadastro = new Date(aluno.data_cadastro);
      return dataCadastro <= fimDoMes;
    });

    const ativos = cadastrados.filter((aluno) => aluno.matricula_ativa === 1);

    return {
      mes: mesNome,
      alunos: cadastrados.length,
      ativos: ativos.length,
    };
  });
};
