import {title_cont, turns_cont, player_btn_cont, points_cont, select_button } from "./getElementById.js";

let titles = ["Draw the Word!", "Draw The Sentence!", "Form the Sentence!"];
let turns = [1, 2, 3, 4, 5, "Other"];
let players = [1, 2, 3, 4, 5, "Other"];
let points = [1, 0.5, -0.5, -1];

function list_buttons(btn_name, array, container) {
    for (let element of array) {
        let button = document.createElement("button");

        button.name = btn_name;
        button.value = element;
        button.textContent = element;
        container.appendChild(button);
    }
}

list_buttons("titles", titles, title_cont);
list_buttons("turns", turns, turns_cont);
list_buttons("players", players, player_btn_cont);

select_button.addEventListener("click", list_buttons("points", points, points_cont));