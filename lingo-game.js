
const words = require('./words.json')
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const getRandomFromArray = xs => xs[Math.floor(Math.random() * xs.length)]
var colors = require('colors');

class Lingo {
  constructor(wordLength) {
    this.wordLength = wordLength
    this.currentWord = this.getRandomWord()
    this.guessed = []
    this.preview = []

    this.getRandomWord.bind(this)
    this.guess.bind(this)
    this.getPreview.bind(this)
    this.getFirstLetter.bind(this)
  }

  getRandomWord() {
    const LETTER = getRandomFromArray(alphabet)
    const word = getRandomFromArray(words[LETTER].filter(w => w.length === this.wordLength))
    return word
  }

  getFirstLetter() {
    return this.currentWord.charAt(0)
  }

  guess(word) {
    this.guessed.push(word)

    if (word.length !== this.wordLength) {
      return {
        error: 'Incorrect length'
      }
    }

    if (words[this.currentWord.charAt(0)].indexOf(word) === -1) {
      return {
        error: 'Word does not exist'
      }
    }
    
    return {
      result: this.getPreview()
    }
  }

  // *    =  good but wrong position
  // _    =  empty letter
  // #  =  correct and good position
  getPreview() {
    const lastGuess = this.guessed[this.guessed.length - 1]
    const letters = lastGuess.split('')
    let result = ''
    letters.forEach((letter, index) => {
      if (this.currentWord.charAt(index) === letter) {
        this.preview[index] = letter
        result += '#'
      } else if (this.currentWord.indexOf(letter) !== -1) {
        result += '*'
      } else {
        result += '_'
      }
      if (!this.preview[index]) {
        this.preview[index] = '_'
      }
    })
    return result
  }
}

module.exports = { Lingo }
