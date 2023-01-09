const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(param) {
    let masLetras = "0";

    for(i=0; i < param.length; i++){
        if(param[i].length >= masLetras.length){
            masLetras = param[i]
        }
    }
    console.log(masLetras);
        return masLetras;
    }

    findLongestWord(avengers);