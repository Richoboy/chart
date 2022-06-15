// let userStatus = confirm(
//     "Are you a new user? if YES, click 'okay'; if NO, click 'cancel'
// );

// if (userStatus === true) {
//     let visitorsName = prompt("Hi! input your name");
//     window.localStorage.setItem("name", visitorsName);
// } else {
//     alert('Welcome back $(window.localStorage.getItem("name"))');
// }

let r = "Your discounted fee is ";
let s = "NGN";
let age;
let price = 1500;
let newPrice;
let discount;
// let button = document.getElementById("button");
let fee;

const ticket = document.getElementById("ticket")
ticket.addEventListener("click",function() {
    age = document.getElementById("to").value;
    price = 1500;
    
    if (age < 10) {
        discount = 100 / 100;
        newPrice = price - (price * discount);
    } else if (age < 18 && age >= 10) {
        discount = 50 / 100;
        newPrice = price - (1500 * discount);
    } else if (age < 27 && age >= 18) {
        discount = 20 / 100;
        newPrice = price - (1500 * discount);
    } else if (age < 46 && age >= 27) {
        discount = 5 / 100;
        newPrice = price - (1500 * discount);
    } else if (age < 65 && age >= 46) {
        discount = 60 / 100;
        newPrice = price - (1500 * discount);
    } else if (age == 65) {
        discount = 70 / 100;
        newPrice = price - (1500 * discount);
    } else {
        discount = 100 / 100;
        newPrice = ("Go home");
    }
    fee = document.getElementById("fee")
    fee.innerHTML = (newPrice);
    // alert(newPrice);
}
)



