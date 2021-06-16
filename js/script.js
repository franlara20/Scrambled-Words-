const threeLettersWords = [
    "the",
    "and",
    "one", 
    "are", 
    "but",
    "you",
    "age",
    "two",
    "can",
    "any",
    "new",
    "old"
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

const sixLettersWords = [
    "should",
    "before",
    "people",
    "little",
    "during",
    "number",
    "system",
    "states",
    "social"
]

const sevenLettersWords = [
    "justify",
    "example",
    "project",
    "citizen",
    "subject",
    "quality",
    "exactly",
    "complex",
    "analyze",
    "horizon"
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
let nextLevel = 0;
let originalWord;

// Function to start the game when we click on Start the Game
function start(){
    screenGame.classList.remove("hidden");
    this.style.display="none";
    }
function resetGame(){
    level = 1;
    score = 0;
    attempts = 0;
    levelDisplay.innerText = level;
    scoreDisplay.innerText = score;
    attemptsDisplay.innerText = attempts;
    gameLevel();
    //wordRandom.innerText = "";
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
    //console.log(temp);
    let scrambledFinalWord = temp.join("");
    //console.log(scrambledFinalWord);
    return scrambledFinalWord;
    }

// Update display after reset or losing a game
/*
function displayReset(){
    levelDisplay = level;
    scoreDisplay = score;
    attemptsDisplay = attempts;
}
*/
function displayUpdate(){
    levelDisplay.innerText = level;
    scoreDisplay.innerText = score;
    //attemptsDisplay.innerText = attempts;
}

//Check word if it is correct or not
function checkWord(){
    let tempWord = typeWord.value;
    if(attempts == 2){
        
        resetGame();
    }
    if(tempWord === originalWord){
    correctOrNot.innerText = "Correct";
    typeWord.value="";
    level += 1;
    //console.log(level)
    score += 1;
    gameLevel();
    displayUpdate();
    }
   
    else {
    correctOrNot.innerText = "Wrong"; 
    typeWord.value="";   
    attempts += 1;
    attemptsDisplay.innerText = attempts;
    }
}

submitBtn.addEventListener('click',checkWord);

function gameLevel() {
    if (level == 1 || level == 2) {
        originalRandomWord(threeLettersWords);
    }
    else if (level == 3 |  level == 4) {
        originalRandomWord(fourLettersWords);
    } 
    else if (level == 5 |  level == 6) {
        originalRandomWord(fiveLettersWords);
    }
    else if (level == 7 | level == 8){
        originalRandomWord(sixLettersWords);
    }
    else if (level == 9 | level == 10){
        originalRandomWord(sevenLettersWords);
    }
    wordRandom.innerText = scrambledWord(originalWord);

  }
  gameLevel();

// DOM reset botton
resetBtn.addEventListener('click',resetGame);

