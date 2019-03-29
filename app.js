let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("Piedra");
const paper_div = document.getElementById("Papel");
const scissors_div = document.getElementById("Tijeras");

(function main() {
     rock_div.addEventListener('click', () => game("Piedra"));
     paper_div.addEventListener('click', () => game("Papel"));
     scissors_div.addEventListener('click', () => game("Tijeras"));
})();

function game(userChoice) {
     const computerChoice = getComputerChoice();
     switch (userChoice + computerChoice) {
          case "PiedraTijeras":
          case "PapelPiedra":
          case "TijerasPapel":
               win(userChoice, computerChoice);
               break;
          case "PiedraPapel":
          case "PapelTijeras":
          case "TijerasPiedra":
               lose(userChoice, computerChoice);
               break;
          case "PiedraPiedra":
          case "PapelPapel":
          case "TijerasTijeras":
               draw(userChoice, computerChoice);
               break;
     }
}

function getComputerChoice() {
     const choices = ['Piedra', 'Papel', 'Tijeras'];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
}

function win(userChoice, computerChoice) {
     const userChoice_div = document.getElementById(userChoice);
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `👤👉${userChoice}  VS  💻👉${computerChoice}. Ganaste¡¡ 🔥`;
     userChoice_div.classList.add('green-glow');
     setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
     const userChoice_div = document.getElementById(userChoice);
     computerScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = `👤👉${userChoice}  VS  💻👉${computerChoice}. Perdiste¡¡💩`;
     userChoice_div.classList.add('red-glow');
     setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
     const smallUserWord = "user".fontsize(3).sub();
     const smallCompWord = "comp".fontsize(3).sub();
     const userChoice_div = document.getElementById(userChoice);
     result_p.innerHTML = `👤👉${userChoice}  VS  💻👉${computerChoice}. Empataste¡¡🤝`;
     userChoice_div.classList.add('gray-glow');
     setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}