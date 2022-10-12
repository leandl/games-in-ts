export type TypeInputJokenpo = "SCISSOR" | "PAPER" | "STONE";

type LastJokenpoGame = [TypeInputJokenpo, TypeInputJokenpo];

type GameInformation = {
  victories: number; 
  draws: number;
  defeats: number; 
}

type InputsJokenpoGame = {
  [key in TypeInputJokenpo]: {
    image: string;
    description: string
  }
}

export class Game {
  private information: GameInformation;
  static inputs: InputsJokenpoGame = {
    "PAPER": {
      image: "./assets/images/hand_1.png",
      description: ""
    },
    "STONE": {
      image: "./assets/images/hand_3.png",
      description: ""
    },
    "SCISSOR": {
      image: "./assets/images/hand_2.png",
      description: ""
    }
  }

  constructor() {
    this.information = {
      victories: 0,
      defeats: 0,
      draws: 0
    }
  }

  setWinner(
    playerOne: TypeInputJokenpo,
    playerTwo: TypeInputJokenpo
  ) {
    if (playerOne === playerTwo) {
      this.information.draws += 1;
      return;
    }

    if (
      (playerOne === "SCISSOR" && playerTwo === "PAPER") ||
      (playerOne === "PAPER" && playerTwo === "STONE") ||
      (playerOne === "STONE" && playerTwo === "SCISSOR")
    ) {
      this.information.victories += 1;
    } else {
      this.information.defeats += 1;
    }
  }

  toString() {
    const { victories, defeats, draws } = this.information;
    return `Victories: ${victories}, Draws: ${draws}, Defeats: ${defeats}`;
  }
}