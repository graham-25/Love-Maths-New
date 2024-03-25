//wait for the DOM to finish loading before running the game
//get the button element 
//This is our DOM content loaded event listener that is first ran as the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/**
 * The main game "loop", called when the game is first loaded
 * and after the user's answer has been processed 
 */
function runGame(gameType) {

    //creates two random numbers between 1 - 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * checks the answer agaist the first element in
 * the returned calculatedCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hay! you got it right! :D")
        incrementScore();
    } else {
        alert(`Awwwww...... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * gets the operand (the number) and the operator (plus, minus ect)
 * directly from the DOM, and returns the correct answer.
 */
function calculateCorrectAnswer() {
    //To read from the dom and store in local varibles
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return[operand1 + operand2, "addition"];
    } else {
        alert(`unimplamented operator ${operator}`);
        throw `unimplamented operator ${operator}. aborting!`;
    }

}

/**
 * gets the current score from the DOM and increments by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * gets the current tally of incorrect answer from the DOM and increments by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivideQuestion() {

}