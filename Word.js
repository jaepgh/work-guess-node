var Letter = require('./Letter');

var Word = function (wordToBeGuessed) {
    this.word = wordC(wordToBeGuessed);

    this.guessWord = function (pcharacter) {
        this.word.forEach(element => {
            element.guessLetter(pcharacter);
        });
    }

    this.showWord = function () {
        var auxiliar = [];
        this.word.forEach(element => {
            auxiliar.push(element.showCharacter());
        });

        return auxiliar;
    }
}

function wordC(wordToBeGuessed) {
    var auxiliar = [];
    for (let index = 0; index < wordToBeGuessed.length; index++) {
        auxiliar.push(new Letter(wordToBeGuessed.charAt(index)));
    }
    return auxiliar;
};

module.exports = Word;