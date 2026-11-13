export {dice,dice_roll,change_value};

let numbers = [1,2,3,4,5,6]
let dice_roll = 0;
let dice = document.getElementById("dice");

let select_button = document.getElementById("select_button");

function change_value(){
    let random_index = Math.floor(Math.random() * numbers.length);
    let random_value = numbers[random_index]

    dice_roll = random_value;
    dice.value = random_value;
    dice.innerText = random_value;
    dice.disabled = "disabled";
    select_button.disabled = false;
}

dice.addEventListener("click", change_value);