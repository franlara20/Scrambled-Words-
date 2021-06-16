const threeLettersWords = [
    "the",
    "and",
    "for", 
    "are", 
    "but", 
    "not",
    "you",
    "all",
    "any",
    "can"
]

const fourLettersWords = [
    "that",
    "with", 
    "have", 
    "this", 
    "will", 
    "your", 
    "from", 
    "they", 
    "know", 
    "want"
]

const fiveLettersWords = [
    "quick",
    "crazy",
    "check",
    "enjoy",
    "judge",
    "quote",
    "happy",
    "heavy",
    "again",
    "party"
]

const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
const playBtn = document.getElementById("play");
const levelDisplay = document.getElementById("level");
const scoreDisplay = document.getElementById("score");
const attemptsDisplay = document.getElementById("attempts");
const wordRandom = document.getElementById("randomWord-container");


let level = 3;
let score = 0;
let attempts = 0;
let correctWord = 0;
let originalWord;

// Function to reset all the values and start the game again.
function reset(){
level = 1;
score = 0;
attempts = 0;
correctWord = 0;
displayUpdate();
}
// Function to start the game when we click on Start the Game
function start(){
    screenGame.classList.remove("hidden");
    this.style.display="none";
    }

// Execute function start when click the btn
playBtn.addEventListener('click',start);

//Function to get a random word and scramble the word

function originalRandomWord(word){
    originalWord = word[Math.floor(Math.random() * word.length + 1) - 1];
    console.log(originalWord);
    return originalWord;
  }

function scrambledWord(originalWord){
    let temp = originalWord.split("");
    temp.sort();
    console.log(temp);
    let scrambledFinalWord = temp.join("");
    console.log(scrambledFinalWord);
    return scrambledFinalWord;
    }

// Update display after reset or losing a game
function displayUpdate(){
    levelDisplay = level;
    scoreDisplay = score;
    attemptsDisplay = attempts;
}

//Check word if it is correct or not
function checkWord(){

//Check if correct is 2, then next level
if(correct == 2){
    level += 1;
    correct = 0;
}
//Check if attempts is 3, then reset the game
if (attempts == 3){
    console.log()
    reset();
}
}
function gameLevel() {
    if (level == 1) {
        originalRandomWord(threeLettersWords);
    }
    else if (level == 2) {
        originalRandomWord(fourLettersWords);
    } 
    else if (level == 3) {
        originalRandomWord(fiveLettersWords);
    }
    wordRandom.innerText = scrambledWord(originalWord);

  }

  gameLevel();

// DOM reset botton
/* resetBtn.addEventListener('click',function()
reset();
)
*/