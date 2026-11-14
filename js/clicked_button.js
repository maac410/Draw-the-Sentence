export {selected_title, turns_play, players_play, current_score};
import {list_text_inputs} from "./list_text_inputs.js";

let selected_title = "";
let turns_play = 0;
let players_play = 0;
let current_score = 0;

function clicked_button(btn_name, callback) {
    let previous_button = null;

    document.addEventListener("click", (event) => {
        if (event.target.name !== btn_name) return;{

            let value = parseFloat(event.target.value);
            callback(value);
            
            previous_button?.removeAttribute("disabled");
            event.target.disabled = true;
            previous_button = event.target;
        }
    });
}

clicked_button("titles", (value) => selected_title = value);
clicked_button("players", (value) => list_text_inputs("player_name", value, "players_text_cont", "Player Name"));
clicked_button("players", (value) => players_play = value);
clicked_button("turns", (value) => turns_play = value);
clicked_button("points", (value) => current_score = value);
