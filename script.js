const passwordBox = document.getElementById("password");
const length = 14;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
const lowerCase = "abcdefghijklmnopqrstuvwxyz";  
const digits= "0123456789";   
const symbols = "!@#$%^&*<>?";  
const allChar = upperCase+lowerCase+digits+symbols ;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    window.alert("Password Copied !")
}