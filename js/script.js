const threeLettersWords = [
    "the",
    "and",
    "one", 
    "are", 
    "but",
    "you",
    "age",
    "two",
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
const typeWord = document.querySelector('input');
const correctOrNot = document.getElementById('correctOrNotWord');


let level = 1;
let score = 0;
let attempts = 0;
let originalWord;

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
function displayReset(){
    levelDisplay = level;
    scoreDisplay = score;
    attemptsDisplay = attempts;
}

function displayUpdate(){
    levelDisplay.innerText = level;
    scoreDisplay.innerText = score;
    attemptsDisplay.innerText = attempts;
}

//Check word if it is correct or not
function checkWord(){
    let tempWord = typeWord.value;
    if(tempWord === originalWord){
    correctOrNot.innerText = "Correct";
    typeWord.value="";
    level += 1;
    score += 1;
    gameLevel();
    displayUpdate();
    }
    else {
    correctOrNot.innerText = "Wrong"; 
    typeWord.value="";   
    attempts += 1;
    displayUpdate();
    }
}

submitBtn.addEventListener('click',checkWord);

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
resetBtn.addEventListener('click',displayReset);