import {dice_button, select_button} from "./getElementById.js";
export {dice_roll,change_value};


let numbers = [1,2,3,4,5,6]
let dice_roll = 0;

function change_value(){
    let random_index = Math.floor(Math.random() * numbers.length);
    let random_value = numbers[random_index]

    dice_roll = random_value;
    dice_button.value = random_value;
    dice_button.innerText = random_value;
    dice_button.disabled = "disabled";
    select_button.disabled = false;
}

dice_button.addEventListener("click", change_value);