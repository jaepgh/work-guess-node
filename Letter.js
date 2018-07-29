var Letter = function(pcharacter){
    this.character = pcharacter;
    this.guessed = false;

    this.guessLetter = function(pcharacter){
        if (character.toUpperCase() === pcharacter.toUpperCase()) {
            this.guessed = true;
        }
    }

    this.showCharacter = function(){
        if (this.guessed) {
            return this.character;
        } else {
            return '_';
        }
    }
}

module.exports = Letter;