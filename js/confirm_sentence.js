import {select_button, sentence_cont, points_cont} from "./getElementById.js";

function confirm_sentence() {
    let element = document.getElementsByName("sentences");

    for (let i = 0; i < element.length; i++) {
        if (element[i].checked){
            let spanText = element[i].nextElementSibling.textContent;
            
            select_button.innerHTML = "Sentence: " + spanText;
            console.log("Sentence: " + spanText);
            break;
        }
    }
    sentence_cont.style.display = "none";
    select_button.disabled = true;
    points_cont.style.display = "block";
}

select_button.addEventListener("click", confirm_sentence);