// rps.js
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result-text");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost...`;
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `Your ${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function startTournament() {
    const player1 = { name: document.getElementById('player1-name').value, getHand: getHand };
    const player2 = { name: document.getElementById('player2-name').value, getHand: getHand };
    const player3 = { name: document.getElementById('player3-name').value, getHand: getHand };
    const player4 = { name: document.getElementById('player4-name').value, getHand: getHand };

    // Call your playTournament function with these players
    playTournament(player1, player2, player3, player4, 3);
}
