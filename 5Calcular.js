/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo 
contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let resultado = 0;
    let palabras;
    for(let el of param){
      if(typeof el === 'string'){
        palabras = el.length;
        resultado += palabras;
      }else{
        resultado += el;
      }
    }
  return resultado;
}
console.log(averageWord(mixedElements));