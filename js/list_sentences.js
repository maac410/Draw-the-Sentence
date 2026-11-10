import {dice,dice_roll} from "./roll_dice.js";

let sentences = null;

async function init() {
  let response = await fetch('/db/sentences.json');
  sentences = await response.json();

  main(sentences, dice_roll);
}

function main(sentences, roll) {
  let pool = [...sentences];

  for (let i = pool.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  let lucky_sentences = pool.slice(0, roll);

  console.log(roll);
  console.log(lucky_sentences);
}

dice.addEventListener("click",init);