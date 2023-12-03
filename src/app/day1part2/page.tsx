import { puzzleinput } from "../day1/page"

function replaceWordToDigitFunction(word: string) {
  word = word.replaceAll('one', '1')
  word = word.replaceAll('two', '2')
  word = word.replaceAll('three', '3')
  word = word.replaceAll('four', '4')
  word = word.replaceAll('five', '5')
  word = word.replaceAll('six', '6')
  word = word.replaceAll('seven', '7')
  word = word.replaceAll('eight', '8')
  word = word.replaceAll('nine', '9')
  return word
}

const sampleInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

export default async function Page2() {
  const words = puzzleinput.split('\n')
  let sum = 0
  for (let word of words) {
    const prevword = word

    let left = 0
    let leftDigit

    while (left <= word.length - 1) {
      if (word.slice(0, left).match(/one|two|three|four|five|six|seven|eight|nine/)) {
        let leftword = replaceWordToDigitFunction(word.slice(0, left))
        leftDigit = leftword.at(leftword.length - 1)
        break
      }

      if (word.at(left)?.match(/\d/)) {
        console.log()
        leftDigit = word.at(left)
        break
      }
      left++
    }

    let right = word.length - 1
    let rightDigit

    while (right >= 0) {
      if (word.slice(right, word.length).match(/one|two|three|four|five|six|seven|eight|nine/)) {
        let rightword = replaceWordToDigitFunction(word.slice(right, word.length))
        rightDigit = rightword.at(0)
        break;
      }
      if (word.at(right)?.match(/\d/)) {
        rightDigit = word.at(right)
        break
      }
      right--
    }
    console.log(`${prevword} => ${word} | left: ${leftDigit} , right: ${rightDigit}`)
    const value = parseInt(leftDigit!) * 10 + parseInt(rightDigit!)
    sum += value
  }

  console.log(sum)

  return "Day 1 Part 2"
}