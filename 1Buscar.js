function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        console.log('El más alto es '+numberOne)
        return numberOne;
    }
    else {
        console.log('El más alto es '+numberTwo)
        return numberTwo;
    }
}

console.log(sum(9,3));
