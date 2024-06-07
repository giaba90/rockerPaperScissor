var youPoint = 0;
var computerPoint = 0;

function playGame(choice) {
    var gameChoice = ["rock", "paper", "scissor"];
    const youChoiceDiv = document.getElementsByClassName("you")[0];
    const computerChoiceDiv = document.getElementsByClassName("computer")[0];
    const winner = document.getElementsByClassName("win")[0];
    const loser = document.getElementsByClassName("lose")[0];
    const pair = document.getElementsByClassName("pair")[0];
    const youPointInput = document.getElementsByName("your-point")[0];
    const computerPointInput = document.getElementsByName("computer-point")[0];

    var youChoice = choice;
    var computerChoice = gameChoice[Math.floor(Math.random() * 3)];
    //reset winner
    winner.classList.remove("show");
    loser.classList.remove("show");
    pair.classList.remove("show");

    youChoiceDiv.innerHTML = "<b>Your choice: </b>" + choice;
    computerChoiceDiv.innerHTML = "<b>Computer choice: </b>" + computerChoice;

    if (youChoice == computerChoice) {
        pair.classList.add("show");
        youPoint += 1;
        computerPoint += 1;
    } else {
        switch (youChoice) {
            case "rock":
                if (computerChoice == "scissor") {
                    winner.classList.add("show");
                    youPoint += 1;
                } else {
                    loser.classList.add("show");
                    computerPoint += 1;
                }
                break;
            case "paper":
                if (computerChoice == "rock") {
                    winner.classList.add("show");
                    youPoint += 1;
                } else {
                    loser.classList.add("show");
                    computerPoint += 1;
                }
                break;
            case "scissor":
                if (computerChoice == "paper") {
                    winner.classList.add("show");
                    youPoint += 1;
                } else {
                    loser.classList.add("show");
                    computerPoint += 1;
                }
                break;
            default:
        }
    }

    youPointInput.value = youPoint;
    computerPointInput.value = computerPoint;
}
