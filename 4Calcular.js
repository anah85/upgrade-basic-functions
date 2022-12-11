/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/ 

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
var len = numbers.length;
var suma = 0;
for(i=0; i<len; i++){
  suma+=numbers[i];
}
  return suma/len;

}
console.log(average(numbers));
