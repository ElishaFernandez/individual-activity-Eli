function runCleaningTasks() {
let tasks = [
"MAG HUGAS NA NG PLATO",
"MAG LABA",
"MAG PALIGO SA ASO",
"MAG TAPON NG BASURA"
];


let result = "";
for (let i = 0; i < tasks.length; i++) {
result += `Task ${i + 1}: ${tasks[i]}\n`;
}
document.getElementById("outputCleaning").textContent = result;
}


function checkHunger() {
let hunger = document.getElementById("hungerSelect").value;
let message = "";
switch (hunger) {
case "full":
message = "BUSOG PA. MAMAYA NA LANG KAIN.";
break;
case "hungry":
message = "GUTOM KA NA. KUMAIN KA NA!";
break;
case "starving":
message = "GUTOM NA GUTOM NA! PENGE NA NG JOLLIBEE!";
break;
default:
message = "Unknown hunger level.";
}
document.getElementById("outputHunger").textContent = message;
}


function checkAge() {
let age = Number(document.getElementById("ageInput").value);
let message = "";


if (age >= 18) {
message = "You are an adult.";
} else if (age >= 13) {
message = "You are a teenager.";
} else {
message = "You are a child.";
}


document.getElementById("outputIfElse").textContent = message;
}