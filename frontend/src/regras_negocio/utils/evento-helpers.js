exports.getProximosEventos = (eventos) => {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zera horário para comparar apenas data

  return eventos
    .filter(({ data }) => {
      const dataEvento = new Date(data);
      return dataEvento >= hoje;
    })
    .sort((a, b) => new Date(a.data) - new Date(b.data));
};
