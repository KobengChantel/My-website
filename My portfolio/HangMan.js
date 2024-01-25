// let words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake",
// ]

// let word = words[Math.floor(Math.random() * words.length)];

// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// let remainingLetters = word.length;
// let guess;
// while (remainingLetters > 0) {
//     alert("Your progress:" + answerArray.join(" "));

//     guess = prompt("Please enter a single letter, or click cancel to Exit");
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("Please enter a single letter.");
//     } else {
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }

// }
// if (guess === null) {
//     alert("Sorry to see you leave. The answer was " + word);
// } else {
//     alert("Your Final Results:" + answerArray.join(" "));
//     alert("Good Job!");
// }


// ************PROGRAM CHALLENGE**********

let words = [
    "fast",
    "flower",
    "tail",
    "caribean"
]
let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
let guessesAllowed = word.length * 2;
while (remainingLetters > 0 && guessesAllowed > 0) {
    alert("Your progress: " + answerArray.join(" "));
    alert("You have " + guessesAllowed + " left. ");
    guess = prompt("Please enter a single letter, or click cancel to Exit");

    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        guessesAllowed--;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have already guessed that letter" + guess);
                    break;
                }
            }
        }
    }

}
if (guess === null) {
    alert("Sorry to see you leave. The answer was " + word);
} else if (remainingLetters === 0) {
    alert("Your Final Results:" + answerArray.join(" "));
    alert("Perfect!");
} else if (guessesAllowed === 0) {
    alert("Sorry you have ran out of guess allowed");
} else {
    alert("something went wrong!!!");
}






