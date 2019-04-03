let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("Piedra");
const paper_div = document.getElementById("Papel");
const scissors_div = document.getElementById("Tijeras");
const selectGame = document.getElementById("selectGame");
const msg = document.getElementById("action-message");
var gameSelected ="p1vspc";
let secondChoice;

(function versus() {
     console.log(selectGame.typeOfGame.value);
     selectGame.addEventListener('click', () => {
          gameSelected = selectGame.typeOfGame.value
          console.log(gameSelected);
          userScore = 0;
          computerScore = 0;
     });
})();

(function p1() {
    console.log(gameSelected);
    msg.innerHTML = `p1 plays`;
     rock_div.addEventListener('click', () => game("Piedra"));
     paper_div.addEventListener('click', () => game("Papel"));
     scissors_div.addEventListener('click', () => game("Tijeras"));
})();

function p2() {
    msg.innerHTML = `p2 plays`;
    return 'holaEdgar'
    // rock_div.addEventListener('click', () => {return "Piedra"});
    // paper_div.addEventListener('click', () => {return "Papel"});
    // scissors_div.addEventListener('click', () => {return "Tijeras"});
};

function game(userChoice) {
    console.log(gameSelected);
    if (gameSelected === "p1vspc") {
        secondChoice = getComputerChoice();   
        console.log(userChoice+secondChoice);
        combinations(userChoice, secondChoice)
    } else {
        msg.innerHTML = `p2 plays`;
        secondChoice = new Promise((resolve, reject) => {
            rock_div.addEventListener('click', () => {resolve("Piedra")});
            paper_div.addEventListener('click', () => {resolve("Papel")});
            scissors_div.addEventListener('click', () => {resolve("Tijeras")});
        })
        .then(secondChoice => {
            console.log(userChoice+secondChoice);
            combinations(userChoice, secondChoice)
        })
    }
}

function getComputerChoice() {
     let choices = ['Piedra', 'Papel', 'Tijeras'];
     let randomNumber = Math.floor(Math.random() * 3);
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
     const userChoice_div = document.getElementById(userChoice);
     result_p.innerHTML = `👤👉${userChoice}  VS  💻👉${computerChoice}. Empataste¡¡🤝`;
     userChoice_div.classList.add('gray-glow');
     setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
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


