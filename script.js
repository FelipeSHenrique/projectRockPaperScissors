const prob = ["Rock", "Paper", "scissors"];
let player = prompt("Digite sua escolha camarada");

function computerPlay() {
    return prob[Math.floor(Math.random() * prob.length)];
}

function playRound() {
    playerSelection = player.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        return "value invalid";
    }

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return playerSelection + " ganha de " + computerSelection;
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return playerSelection + " perde de " + computerSelection;
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        return playerSelection + " ganha de " + computerSelection;
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        return playerSelection + " perde de " + computerSelection;
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        return playerSelection + " ganha de " + computerSelection;
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        return playerSelection + " perde de " + computerSelection;
    }
    if (playerSelection == computerSelection) {
        return "draw!!!";
    }
}


console.log(playRound());



