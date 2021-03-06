/* Função anônima */
const subtrai = function (a, b){
  return a - b;
}


let resul = subtrai(10,2);
console.log(resul);

/* Arrow function */
const testazero = function (x){
  if (x == 0){
    return 1;
  }
  else{
    return 2;
  }
}

let resultado = testazero(0);
if(resultado == 1){
  console.log("É ZERO!");
}
else {
  console.log("NÃO É ZERO!");
}
/* Função testa sinal */
const testasinal = function (c, d){

  if(c < 0 && d > 0){
  console.log("Subtração entre números de sinais diferentes");
}
  else{
    console.log("Subtração entre números de sinais iguais");
  } 

  let ts = subtrai(c,d);
  console.log(ts);
  if(ts == 0){
      console.log("Resultado da subtração é zero");
  }
  console.log("fim");
}
testasinal(12, 2);







