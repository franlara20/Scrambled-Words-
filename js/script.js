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
const levelDisplay = document.getElementById("level");
const scoreDisplay = document.getElementById("score");
const attemptsDisplay = document.getElementById("attempts");


let level = 1;
let score = 0;
let attempts = 0;
let correctWord = 0;

// Function to reset all the values and start the game again.
function reset(){
level = 1;
score = 0;
attempts = 0;
correctWord = 0;
displayUpdate();
}

// DOM reset botton
resetBtn.addEventListener('click',function()
reset();
)

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
