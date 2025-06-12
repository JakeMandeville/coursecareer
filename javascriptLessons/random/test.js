function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let num = randomNum(1,100);
let numGuesses = 0

function reset() {
        num = randomNum(1,100);
        numGuesses = 0;
}

function makeGuess() {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);
    guessInput.value = "";
    const feedback = document.getElementById("feedback")

    numGuesses++;
    document.getElementById("num-guesses").innerHTML = numGuesses


    if (guess === num) {
        feedback.innerHTML = `${guess} was the 
            correct Number!!! you got it in ${numGuesses} tries!`;
        reset()
    } else if (guess > num) {
        feedback.innerHTML = `${guess} was the 
            wrong number... that is too high`;
    } else {
        feedback.innerHTML = `${guess} was the 
            wrong number... that is too low`;
    }
}
