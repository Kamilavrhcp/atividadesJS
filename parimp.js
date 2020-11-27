/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado" */

let numbers = [7, 4, 5];
let resultado = 0;


//Descubra quantos valores impares existam no array:

for(let index=0; index < numbers.length;index += 1){
if(numbers[index] %2==1){
resultado +=1     
} 
}
if(resultado > 0){
  console.log(resultado)
} else{
  console.log("Nenhum valor foi encontrado")
}