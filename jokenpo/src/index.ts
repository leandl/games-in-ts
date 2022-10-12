import { Game, TypeInputJokenpo } from "./Game";

const $divsInputJokenpo = document.querySelectorAll<HTMLDivElement>("div.box-input");

const $imgPlayer = document.querySelector<HTMLImageElement>("img#player");
const $imgCPU = document.querySelector<HTMLImageElement>("img#cpu");
const $divHistoric = document.querySelector('div.historic');
const $divRenderResult = document.querySelector('div.render');

const game = new Game();

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateInputJokenpoCPU(): TypeInputJokenpo {
  const options = ["PAPER", "SCISSOR", "STONE"];
  const indexOption = randomIntFromInterval(0, 2);
  return options[indexOption] as TypeInputJokenpo;
}

$divsInputJokenpo.forEach($divInputJokenpo => {
  $divInputJokenpo.addEventListener("click", function() {
    const inputPlayerOne = this.dataset.inputJokenpo as TypeInputJokenpo;
    const inputCPU = generateInputJokenpoCPU();

    game.setWinner(inputPlayerOne, inputCPU);

    $imgPlayer.src = Game.inputs[inputPlayerOne].image;
    $imgPlayer.alt = Game.inputs[inputPlayerOne].description;
    $imgCPU.src = Game.inputs[inputCPU].image;
    $imgCPU.alt = Game.inputs[inputCPU].description;

    $divHistoric.innerHTML = game.toString();
    $divRenderResult.classList.add("open");
  })
});