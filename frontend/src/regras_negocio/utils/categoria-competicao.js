const { categorias_peso } = require("../constants/categoria-competicao");

exports.classificarIdade = (idade) => {
  if (idade <= 4) {
    return {label: 'Festival', classe: 'Festival'};
  } else if (idade >= 5 && idade <= 6) {
    return {label: 'Festival Sub 07', classe: 'Sub-07'};
  } else if (idade >= 7 && idade <= 8) {
    return {label: 'Festival Sub 09', classe: 'Sub-09'};
  } else if (idade >= 9 && idade <= 10) {
    return {label: 'Festival Sub 11', classe: 'Sub-11'};
  } else if (idade >= 11 && idade <= 12) {
    return {label: 'Sub 13', classe: 'Sub-13'};
  } else if (idade >= 13 && idade <= 14) {
    return {label: 'Sub 15', classe: 'Sub-15'};
  } else if (idade >= 15 && idade <= 17) {
    return {label: 'Sub 18', classe: 'Sub-18'};
  } else if (idade >= 18 && idade <= 20) {
    return {label: 'Sub 21', classe: 'Sub-21'};
  } else if (idade >= 21 && idade <= 29) {
    return {label: 'Sênior', classe: 'Sênior'};
  } else if (idade >= 30 && idade <= 34) {
    return {label: 'Veteranos 1', classe: 'Master'};
  } else if (idade >= 35 && idade <= 39) {
    return {label: 'Veteranos 2', classe: 'Master'};
  } else if (idade >= 40 && idade <= 44) {
    return {label: 'Veteranos 3', classe: 'Master'};
  } else if (idade >= 45 && idade <= 49) {
    return {label: 'Veteranos 4', classe: 'Master'};
  } else if (idade >= 50 && idade <= 54) {
    return {label: 'Veteranos 5', classe: 'Master'};
  } else if (idade >= 55 && idade <= 59) {
    return {label: 'Veteranos 6', classe: 'Master'};
  } else if (idade >= 60 && idade <= 64) {
    return {label: 'Veteranos 7', classe: 'Master'};
  } else if (idade >= 65 && idade <= 69) {
    return {label: 'Veteranos 8', classe: 'Master'};
  } else if (idade >= 70 && idade <= 74) {
    return {label: 'Veteranos 9', classe: 'Master'};
  } else if (idade >= 75) {
    return {label: 'Veteranos 10', classe: 'Master'};
  } else {
    return 'Idade inválida';
  }
}

exports.classificarPeso = (peso, sexo, categoria) => {
  const grupo = categorias_peso[sexo?.toLowerCase()];
  if (!grupo || !grupo[categoria]) {
    return 'Categoria ou sexo inválido';
  }

  const lista = grupo[categoria];
  for (const cat of lista) {
    if (peso <= cat.limite) {
      return cat.nome;
    }
  }

  return 'Categoria não encontrada';
}
