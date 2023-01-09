/*Crea una función que nos devuelva el número de veces que se repite cada una 
de las palabras que lo conforma.  Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(array) {
    const repetido =[];

  for(const words of counterWords){
    console.log(counterWords);
    repetido[words] = repetido[words] + 1 || 1;
    console.log(repetido);
  }

  }
  repeatCounter(counterWords);
    