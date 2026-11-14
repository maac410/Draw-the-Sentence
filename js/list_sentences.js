import {dice_roll} from "./roll_dice.js";
import {dice_button, sentence_cont} from "./getElementById.js";

async function init() {
  let response = await fetch('/db/sentences.json');
  let sentences = await response.json();

  main(sentences, dice_roll);
}

function main(sentences, roll) {
  let pool = [...sentences];

  for (let i = pool.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  let lucky_sentences = pool.slice(0, roll);

  for (let element of lucky_sentences) {    
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "sentences";

    let text = document.createElement("span");
    text.textContent = element["en"] + " ";
    text.dataset.lang = "en";

    let label = document.createElement("label");
    label.append(radio, text);

    let translate_button = document.createElement("input");
    translate_button.type = "button";
    translate_button.value = "🕮";
    translate_button.name = "translate";
    translate_button.addEventListener("click", () => translate_sentence(text, element));

    sentence_cont.append(label, translate_button);
  }
  console.log(roll);
  console.log(lucky_sentences);
}

function translate_sentence(text, element) {
  if (text.dataset.lang === "en") {
    text.textContent = element["es"] + " ";
    text.dataset.lang = "es";
  } else {
    text.textContent = element["en"] + " ";
    text.dataset.lang = "en";
  }
}

dice_button.addEventListener("click",init);