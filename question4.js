const sp = 67836.43, rj = 36678.66, mg = 29229.88, es = 27165.48, outros = 19849.53;

const total = sp + rj + mg + es + outros;

const porcentagemSP = (sp * 100) / total;
const porcentagemRJ = (rj * 100) / total;
const porcentagemMG = (mg * 100) / total;
const porcentagemES = (es * 100) / total;
const porcentagemOutros = (outros * 100) / total;

console.log(`
  Porcentagem SP: ${porcentagemSP.toFixed(2)}%
  Porcentagem RJ: ${porcentagemRJ.toFixed(2)}%
  Porcentagem MG: ${porcentagemMG.toFixed(2)}%
  Porcentagem ES: ${porcentagemES.toFixed(2)}%
  Porcentagem Outros: ${porcentagemOutros.toFixed(2)}%
`);