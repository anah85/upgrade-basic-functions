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
  function removeDuplicates(array){
  const noRepe =[];
  for(const palabra of array){
  if(noRepe.indexOf(palabra) === -1){
    noRepe.push(palabra);
  }
}
return noRepe
};

console.log(removeDuplicates(duplicates));
