let humanWins = 0
let computerWins = 0
let ties = 0

function determineWins(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        // console.log("Tie, no winner")
        ties++
    } 

    else if (
         (humanChoice == "Rock" && computerChoice == "Scissors") ||
         (humanChoice == "Paper" && computerChoice == "Rock" ) ||
        (humanChoice == "Scissors" && computerChoice == "Paper")
       ) {
        humanWins++
    } else {
        computerWins++
    } 

}

function displayResults(humanWins,computerWins, ties) {
    document.getElementById("HumanWins").textContent = "Human Wins: " + humanWins
    document.getElementById("ComputerWins").textContent = "Computer Wins: " + computerWins
    document.getElementById("Ties").textContent = "Ties: " + ties
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    // console.log(choices [Math.floor(Math.random() * 3)])
    compChoice = choices [Math.floor(Math.random() * 3)]
    document.getElementById("comp").textContent = "Computer picks: " + compChoice
    return compChoice
}
    
function processRock() {
    compChoice = getComputerChoice()
    humanChoice = "Rock"
    determineWins(humanChoice, compChoice)
    displayResults(humanWins, computerWins, ties)
}

function processPaper() {
    compChoice = getComputerChoice()
    humanChoice = "Paper"
    determineWins(humanChoice, compChoice)
    displayResults(humanWins, computerWins, ties)
}

function processScissors() {
    compChoice = getComputerChoice()
    humanChoice = "Scissors"
    determineWins(humanChoice, compChoice)
    displayResults(humanWins, computerWins, ties)
}
    


