
let secretNumber = Math.floor(Math.random() * 20) + 1;

let guess;

while (true) {
    let answer = prompt("Please guess the secretNumber(1-20)");
    guess = parseInt(answer);

    if (guess < secretNumber) {
        alert("Incorrect! Your guess is too low.");
    } else if (guess === secretNumber) {
        alert("Well done, Correct guess!");
        break;
    } else if (guess > secretNumber) {
        alert("Incorrect! Your  is too high.");
    }
}
