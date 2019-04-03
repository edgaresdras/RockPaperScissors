let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result>p");
const badge2 = document.querySelector(".badge2");
const rock_div = document.getElementById("Piedra");
const paper_div = document.getElementById("Papel");
const scissors_div = document.getElementById("Tijeras");
const rock_div2 = document.getElementById("Piedra2");
const paper_div2 = document.getElementById("Papel2");
const scissors_div2 = document.getElementById("Tijeras2");
const selectGame = document.getElementById("selectGame");
const userChoice1 = document.getElementById("userChoice1");
const msg = document.getElementById("action-message");
var gameSelected = "p1vspc";
let secondChoice;
let player2 = "pc";

(function versus() {
     console.log(selectGame.typeOfGame.value);
     selectGame.addEventListener('click', () => {
          gameSelected = selectGame.typeOfGame.value
          console.log(gameSelected);
          userScore = 0;
          computerScore = 0;
          userScore_span.innerHTML = userScore;
          computerScore_span.innerHTML = computerScore;
          if (gameSelected === "p1vsp2") {
               badge2.innerHTML = "p2";
               player2 = "p2";
          } else {
               again();
               badge2.innerHTML = "pc";
               userChoice2.classList.add('hidden');
          };
     });
})();

(function p1() {
     console.log(gameSelected);
     rock_div.addEventListener('click', () => game("Piedra"));
     paper_div.addEventListener('click', () => game("Papel"));
     scissors_div.addEventListener('click', () => game("Tijeras"));
})();

function getComputerChoice() {
     let choices = ['Piedra', 'Papel', 'Tijeras'];
     let randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
}

function game(userChoice) {
     console.log(gameSelected);
     if (gameSelected === "p1vspc") {
          secondChoice = getComputerChoice();
          console.log(userChoice + secondChoice);
          combinations(userChoice, secondChoice);
     } else {
          userChoice1.classList.add('hidden');
          userChoice2.classList.remove('hidden');
          secondChoice = new Promise((resolve, reject) => {
                    rock_div2.addEventListener('click', () => {
                         resolve("Piedra")
                    });
                    paper_div2.addEventListener('click', () => {
                         resolve("Papel")
                    });
                    scissors_div2.addEventListener('click', () => {
                         resolve("Tijeras")
                    });
               })
               .then(secondChoice => {
                    console.log(userChoice + secondChoice);
                    combinations(userChoice, secondChoice);
               });
     }
}

function combinations(userChoice, secondChoice) {
     switch (userChoice + secondChoice) {
          case "PiedraTijeras":
          case "PapelPiedra":
          case "TijerasPapel":
               win(userChoice, secondChoice);
               break;
          case "PiedraPapel":
          case "PapelTijeras":
          case "TijerasPiedra":
               lose(userChoice, secondChoice);
               break;
          case "PiedraPiedra":
          case "PapelPapel":
          case "TijerasTijeras":
               draw(userChoice, secondChoice);
               break;
     }
};

function win(userChoice, computerChoice) {
     const userChoice_div = document.getElementById(userChoice);
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `p1👉${userChoice} VS ${player2}👉${computerChoice}. Gana p1¡¡ 🔥`;
     userChoice_div.classList.add('green-glow');
     setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
     again();
}

function lose(userChoice, computerChoice) {
     const userChoice_div = document.getElementById(userChoice);
     computerScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `p1👉${userChoice} VS ${player2}👉${computerChoice}. gana ${player2}¡¡💩`;
     userChoice_div.classList.add('red-glow');
     setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
     again();
}

function draw(userChoice, computerChoice) {
     const userChoice_div = document.getElementById(userChoice);
     result_p.innerHTML = `p1👉${userChoice} VS ${player2}👉${computerChoice}. Empate¡¡🤝`;
     userChoice_div.classList.add('gray-glow');
     setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
     again();
}

function again() {
     userChoice1.classList.remove('hidden');
     userChoice2.classList.add('hidden');
}