var wordBank = ["Acnestis", "Grommet", "Meldrop", "Octothorpe", "Nauseant", "Augend", "Addend", "Obelus", "Obelus", "Amatorculist", "Peristeronic", "Hirquiticke", "Whippersnapper", "Ragamuffin", "Gobbledygook", "Poppycock", "Poppycock", "Poppycock", "Curmudgeon", "Lackadaisical", "Woebegone", "Lollygag", "Frankenfood", "remonstrate", "credulity", "effete", "enervate"]
var ranWord = wordBank[Math.floor(Math.random() * Math.floor(wordBank.length))].toLowerCase();
var corLet = [];
var inLet = [];
var changed = "";
var guessLeft = 6;
wins = 0;
losses = 0;


function printGuesses(left) {
    $("#guess-left").empty();
    $("#guess-left").text(left);
}
function printWord() {
    $("#word-container").empty()
    changed = '';
    for (i = 0; i < ranWord.length; i++) {
        option = corLet.indexOf(ranWord[i]);
        console.log(option)
        if (option >= 0) {
            changed += ranWord[i];
            console.log(changed);
        } else {
            changed += "_ "
        };
    }
    $("#word-container").text(changed)

}
function gameReset() {
    ranWord = wordBank[Math.floor(Math.random() * Math.floor(wordBank.length))].toLowerCase();
    corLet = [];
    inLet = [];
    guessLeft = 6;
    printCor();
    printFalse();
    printWord();
}
function printCor() {
    $("#correct-letters").empty();
    $("#correct-letters").text(corLet);
}
function printFalse() {
    $("#missed-letters").empty();
    $("#missed-letters").text(inLet);
}
function retryPlease(letter) {
    alert("You already chose: " + letter + " Please try again.");
}

function gameWin() {

}
function startGame() {
    printWord();
    printGuesses(guessLeft);
}


$(document).on("click", ".letter-button", function () {
    curLetter = this.value
    isWord = ranWord.indexOf(curLetter);
    isCor = corLet.indexOf(curLetter);
    isIn = inLet.indexOf(curLetter);
    if ((isCor < 0) && (isIn < 0)) {
        if (isWord > -1) {
            corLet.push(curLetter);
            printCor();
            printWord();
        } else {
            inLet.push(curLetter);
            guessLeft -= 1
            printGuesses(guessLeft)
            printFalse();

        }
    } else if (isCor > -1) {
        retryPlease(curLetter)
    } else if (isIn > -1) {
        retryPlease(curLetter)
    }
    if (guessLeft == 0) {
        alert("You Lost!");
        losses += 1;
        $("#losses").empty();
        $("#losses").text(losses);
        gameReset();
    }
    winCon = changed.indexOf("_");
    if (winCon == -1) {
        alert("Great Job, you won the game!")
        wins += 1;
        $("#wins").empty();
        $("#wins").text(wins);
        gameReset();
    }
    console.log(ranWord, curLetter, isWord, isCor, isIn)
})


startGame();