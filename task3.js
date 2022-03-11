function validateEmail(elementValue){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(elementValue) == true){
        return "VALID";
    }else if (emailPattern.test(elementValue) == !true){
        return "INVALID";
    }
    return "ERROR";
     

} 
console.log(validateEmail('rio.rasyid23@gmail.com'));
console.log(validateEmail('rio.rasyid23@gmail.co.id'));
console.log(validateEmail('rio.r?asy@/id23@gmail.com'));
console.log(validateEmail('riorasyid'));
