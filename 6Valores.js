/*Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que 
existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(duplicates) {
    for (i = 0; i < duplicates.length; i++) {
      const duplicado = duplicates[i];
      console.log('Está repetido  '+ duplicado);
      let palabra = false;
    for(j=0; j< duplicates.length; j++){
      const repetido = duplicates[j];
      if(duplicado==repetido && i!==j){
      palabra = true;
      }
    }
  console.log(palabra.indexof === true);
  }
}
  removeDuplicates(duplicates);