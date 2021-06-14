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
const 

let level = 1;
let score = 0;
let attempts = 0;


// Function to reset all the values and start the game again.
function reset(){
level = 1;
score = 0;
attempts = 0;
}

// DOM reset botton
resetBtn.addEventListener('click',function()
reset();
)

function scramble(string){
let newWord = string.split(""),

}