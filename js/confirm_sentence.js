export{select_button};

let select_button = document.getElementById("select_button");
let sentence_cont = document.getElementById("sentence_cont");
let points_container = document.getElementById("points_container");

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
    points_container.style.display = "block";
}

select_button.addEventListener("click", confirm_sentence);