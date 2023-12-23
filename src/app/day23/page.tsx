import { log } from "console"

const sample = `#.#####################
#.......#########...###
#######.#########.#.###
###.....#.>.>.###.#.###
###v#####.#v#.###.#.###
###.>...#.#.#.....#...#
###v###.#.#.#########.#
###...#.#.#.......#...#
#####.#.#.#######.#.###
#.....#.#.#.......#...#
#.#####.#.#.#########v#
#.#...#...#...###...>.#
#.#.#v#######v###.###v#
#...#.>.#...>.>.#.###.#
#####v#.#.###v#.#.###.#
#.....#...#...#.#.#...#
#.#########.###.#.#.###
#...###...#...#...#.###
###.###.#.###v#####v###
#...#...#.#.>.>.#.>.###
#.###.###.#.###.#.#v###
#.....###...###...#...#
#####################.#`

const puzzle = ``

const map: { [key: string]: string } = {}

function key(...p: any[]) {
  return JSON.stringify(p)
}

export default function Page() {
  const input = sample

  let maxX = 0
  let maxY = 0

  let y = 0
  for (const rows of input.split('\n')) {
    let x = 0
    for (const char of rows) {
      map[key(y, x)] = char
      x++
      maxX = x
    }
    y++
    maxY = y
  }

  log(maxY, maxX)

  //             y       x        cost
  const stack: [[number, number], number][] = []
  stack.push([[0, 1], 0])
  const visited = new Set<string>()

  while (stack.length) {
    const [[y, x], cost] = stack.shift()!

    if (map[key(y, x)] === '#') continue


    if (visited.has(key(y, x))) {
      continue
    }
    visited.add(key(y, x))

    // Check if current is a slope :/
    if (map[key(y, x)] === '>') stack.push([[y, x + 1], cost])
    else if (map[key(y, x)] === '<') stack.push([[y, x - 1], cost])
    else if (map[key(y, x)] === '^') stack.push([[y - 1, x], cost])
    else if (map[key(y, x)] === 'V') stack.push([[y + 1, x], cost])
    else {
      // Only if current tile is '.', can he be travelling all the available tiles.
      const next = [[0, 1], [0, -1], [1, 0], [-1, 0]]
      for (const n of next) {
        stack.push([[y + n[0], x + n[1]], cost + 1])
      }
    }

    // Sort before next shift
    stack.sort((a, b) => a[1] - b[1])
  }





  console.log("Finished")
  return
}