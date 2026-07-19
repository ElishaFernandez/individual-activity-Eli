const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let age;


mySubmit.onclick = function() {
     age = myText.value;
     age = Number(age);

     if (age < 18){
        myResult.textContent = `You must be 18+ to enter this site!`;
     }

     else if (age >= 18 && age < 21){
        myResult.textContent = `You can enter this site, but you cannot purchase alcohol!`;
     }

     else {
        myResult.textContent = `You can enter this site and purchase alcohol!`;

     }

     if (age < 0){
        myResult.textContent = `Please enter a valid age!`;
     }
}