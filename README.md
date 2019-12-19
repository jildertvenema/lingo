# lingo
simple lingo app in node.js 


usage:

const { Lingo } = require('lingo-app')

const wordLength = 6
const lingo = new Lingo(wordLength)

console.log(lingo.getFirstLetter()) // 'a'

const preview = lingo.guess('afdruk')


if (preview.result){
  const res = preview.result.split('')
  let print = ''
  res.forEach((c, index) => {
    const letter = readLine.charAt(index)
    if (c === '#') {
      print += letter.green
    } else if (c === '*') {
      print += letter.cyan
    } else {
      print += letter
    }
  })
  console.log(print) // in colors: 'af___k'
} else {
  console.log(preview.error.red)
}

console.log(lingo.preview.join(''))

