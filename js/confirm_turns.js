import {confirm_game_button} from "./getElementById.js";
import {turns_play} from "./clicked_button.js";

function confirm_turns() {
    console.log(turns_play);
}

confirm_game_button.addEventListener("click", confirm_turns);
