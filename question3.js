const data = require("./dados.json");

let menorValor = data[1].valor, maiorValor = data[1].valor, countDays = 0, diasMedia = 0, soma = 0;

data.forEach(day => {
  if (day.valor > 0) {
    countDays++;
    soma += day.valor;

    if (day.valor > maiorValor) {
      maiorValor = day.valor;
    }
    if (day.valor < menorValor) {
      menorValor = day.valor;
    }
  }
})

const media = soma / countDays;

data.forEach(day => {
  if (day.valor > media) {
    diasMedia++;
  }
})

console.log(`
  Menor Valor: ${menorValor}
  Maior Valor: ${maiorValor}
  Número de dias em que o faturamento foi maior que a média: ${diasMedia}

`);