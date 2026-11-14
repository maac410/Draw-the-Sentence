import { confirm_game_button, game_rules_cont, game_cont, confirm_error } from "./getElementById.js";
import { turns_play, players_play } from "./clicked_button.js";
import { players_names } from "./getElementByName.js";

function confirm_game() {
    let names = Array.from(players_names).map((input) => input.value.trim());

    if (players_play === 0) {
        confirm_error.textContent = "Select the number of Players";
        return;
    }
    if (names.includes("")) {
        confirm_error.textContent = "Write All the Players Names";
        return;
    }
    if (turns_play === 0) {
        confirm_error.textContent = "Select the number of Turns";
        return;
    }

    confirm_error.textContent = "";
    game_rules_cont.style.display = "none";
    game_cont.style.display = "block";
}

confirm_game_button.addEventListener("click", confirm_game);