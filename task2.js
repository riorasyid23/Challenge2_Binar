function checkTypeNumber(num){
    if (num % 2 == 0){
        return "Bilangan Genap";
    }
    else if (num % 2 == !0){
        return "Bilangan Ganjil";
    }
    else{
        return "Error Invalid data type";
    }
}
console.log(checkTypeNumber(20));
console.log(checkTypeNumber(17));
console.log(checkTypeNumber("wrong"));
console.log(checkTypeNumber('nope'));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());