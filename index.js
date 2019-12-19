const { Lingo } = require('./lingo-game')

const wordLength = 6
const lingo = new Lingo(wordLength)

var stdin = process.openStdin();

console.log(lingo.getFirstLetter())

stdin.addListener("data", function(d) {
  const readLine = d.toString().trim()
  const preview = lingo.guess(readLine)
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
    console.log(print)
  } else {
    console.log(preview.error.red)
  }

  console.log(lingo.preview.join(''))

});
