const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const gcashBtn = document.getElementById("gcashBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const warningChange = document.getElementById("warningChange");

mySubmit.onclick = function () {
    if (myCheckbox.checked) {
        subResult.textContent = `You are Subscribed!`;
    }
    else {
        subResult.textContent = `You are NOT Subscribed!`;
    }

    if (visaBtn.checked){
        paymentResult.textContent = `You payed with Visa!`;
    }
    else if (gcashBtn.checked){
        paymentResult.textContent = `You payed with Gcash!`;
    }
    else if (paypalBtn.checked){
        paymentResult.textContent = `You payed with PayPal!`;
    }
  
    else {
        paymentResult.textContent = `You did not choose a payment method!`;
    }
}

