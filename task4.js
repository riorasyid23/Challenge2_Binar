function validatePassword(elementValue){      
    var passwordPattern = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;

    if (!passwordPattern.test(elementValue)){
        return "Password should contain atleast :\n-One uppercase letter\n-One number\n-Minimum 8 characters";
    }else if (passwordPattern.test(elementValue) == 0 || passwordPattern.test(elementValue) == null){
        return "ERROR : Please Input Password correctly";
    }
    return "Password is VALID";
}
console.log(validatePassword('iorasyid23'));