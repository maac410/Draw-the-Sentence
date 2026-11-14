import {confirm_game_button} from "./getElementById.js";
import {players_names} from "./getElementByName.js";
export {players_names_values};

let players_names_values = [];

function confirm_players() {
    players_names_values.splice(0,players_names_values.length)
    
    for(var i = 0; i < players_names.length; i++) {
        players_names_values.push(players_names[i].value);
    }
    console.log(players_names_values);
}

confirm_game_button.addEventListener("click", confirm_players);
