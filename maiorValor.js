/*Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16": */

let fruits = [3, 4, 0, 1, 2];
let valor = 0;

for(let index=0; index < fruits.length; index +=1){
  valor += fruits[index];
}

if(valor > 15){
  console.log ("Valor maior que 15");
} else{
  console.log ("Valor menor que 15")
}