function generatePassword(length, includeLowercase, includeUppercase, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    console.log(allowedChars);

    if(length <= 0 ){
        return `(password must be atleast 1)`;
    }

    if(allowedChars.length === 0){
        return `(atleast 1 set of characters needs to be selected)`
    }
    
     for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex]
     }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeSymbols)

console.log(`Generated Password: ${password}`);