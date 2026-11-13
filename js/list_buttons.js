import {select_button} from "./confirm_sentence.js";

let turns = [1, 2, 3, 4, 5, "Other"];
let players = [1, 2, 3, 4, 5, "Other"];
let points = [1, 0.5, -0.5, -1];

let turns_container = document.getElementById("turns_cont");
let player_container = document.getElementById("players_btn_cont");
let points_container = document.getElementById("points_container");

function list_buttons(btn_name, array, container) {
    for (let element of array) {
        let button = document.createElement("button");
        button.name = btn_name;
        button.value = element;
        button.textContent = element;
        container.appendChild(button);
    }
}

list_buttons("turns", turns, turns_container);
list_buttons("players", players, player_container);

select_button.addEventListener("click", list_buttons("points", points, points_container));