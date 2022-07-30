
/** PADRÃO PARA LEITURA DE ENTRADA */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/** PERGUNTA QUE DESEJA FAZER */

rl.question("Qual o seu Nome?\n", (name = '') => {
  main(name);
  rl.close();
});


/** FUNÇÃO PRINCIPAL */

const main = (input = '') => {
  console.log("Seu nome é " + input);
}
