import { input } from "../day2/page"

const sample = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

export default async function Day2Part2() {
  const games = input.split('\n')
  let sum = 0

  for (const game of games) {
    const id = parseInt(game.split(': ')[0].split(' ')[1])
    const sets = game.split(': ')[1].split('; ')
    console.log(id + ' ' + sets.length)

    let invalid = false

    let highestRed = 0
    let highestGreen = 0
    let highestBlue = 0

    for (const set of sets) {
      const colors = set.split(', ')

      for (const color of colors) {
        let colorValue = color.split(' ')[1]
        let colorCount = parseInt(color.split(' ')[0])
        if (colorValue === 'red' && colorCount > highestRed) {
          highestRed = colorCount
        }
        if (colorValue === 'green' && colorCount > highestGreen) {
          highestGreen = colorCount
        }
        if (colorValue === 'blue' && colorCount > highestBlue) {
          highestBlue = colorCount
        }
      }
    }
    console.log("Red:" + highestRed + ' ' + highestGreen + ' ' + highestBlue)
    sum += (highestRed * highestGreen * highestBlue)
  }

  console.log(sum)
}