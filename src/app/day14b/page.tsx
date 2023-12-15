const sample =
  `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`

// 136

const puzzle = `..O.O....O...O...O...O.#O#.#.#O#O..#.#O....O...#..#O#...............#O..#.#..O..O.##.#O#..O...#.....
.#O.#.#O.##..O..#.......###...#.O#.##....#O#O.OO..##...#..O.O...#O.......O.O.OO##...#.##OOO.O.#..#.O
#.##..O.O.....#.OO....O#..OOO..OO..O....#..#...O..#..O..O.O#O.....O...O.#.O.O......O..OO..O...O...OO
O.....#.O...#....#.#O.#.O.........O...O..#.O.O...O#..O.OO......O.#O......O#.OO.#.##..OO.O#O.O.#.....
#O...#..........#..#......O..O..#......#O..OO...#O.O.............O..O.......#....O.OO#..OO#....O#.O.
##O.O.....OOO..OO..O...O.OO...#.O.O...#..O...OO...O..O.#OO.#........O........O.O....O...O...........
O..O...#.O.##.....OO.O#.......OO...OOO.#..#OO....#..O#...O.....O..O.#####..........O#..........O#...
OO......OO.O...#.#......#.#....OO###...O####OO..#...........##..O#O...#.........#..#....#OO.O.#....O
.##..O.#...O.#.O#..#.O.#...OO##O.....O.O.......O...........##...O....#OOO.....#...O.....O.O##.O###OO
O..O...O.O...O#O.OOOO.O.O......O#...O...#.#.......O#.O...#..#O.....#........O#...O..O..O.#.#.#O#OOO.
O#......#.#.O...OO#..#.#.#.O#.O#.......O#...O.O..O..........O........#.#O....#..OO..#..O..#.O..##...
OOO.#.OO.O..OO.OO..O....O...OO..#..#OO.O...#....#.OO.#..O.O#.O.#OO.O.....O......#.O..O#O...OO##.#...
.O#O..#OOOO#.O##.........OO#O#.#.O#..#..OO.....O.##.#..O.O....#...#..O....O.#.O#..O....O.O.....O.O..
..O#.OO..........#OO...O..O...#.####.#...#.......#####O.#.##..#O...O...O.....O......#.O.....O.......
.O........#.O.###OO..............#.......O...O.....OO#...#.O...#.O.O.O.O.......#.O..#O....##..#..O.#
.#.O#..#....O...#..O.#.O....O#......#...#...OO.O....#.O.O..#.......##OO..O.....OO...OO#...OO...###..
.#O.#.#...O.#..#.......#....#O.O.#....OO.O##.O.#..OO.O......##.....OO...O#..O.O.OO.#.O.O....#.......
O..O.OO.O.....O..O..#....O.......O.##O#...O.....O#OO#.....O..O.....O..#..O...............##.....#O..
....O..#OO#..#.#.O.#.#.OOO.OO#....OOO#....#.........O..O.#....#....OO.O.##...##O.O..#.O..#....O..O#.
#O.O.O.O.#O##...O..O##.O#....#......O...#.O..O.O....O.##O....O..#...O....##.#O.O#O...#.O#.#...O..O..
#..O.O..O##.O..O....O..OO#.OO........O#....O....O............O#.#.OO..#.#O.#....##.....OO..O...O...O
.O..OO.OOOO.#.#.O.#.O..O##....##O..##..O.#O.O#.#...#....#.....#OO..O#O......O........O...O........#.
...OO.O###.O.###.......#O#..O..#.#O...O#...O...O#..##..OO.O...O......O....#.#....OO.O.O#...OO...##O#
#..OO.....#.O.OOO.#...O.......O......#O...##...#O##..OO.#.O.........O.O...O...O..##...O..#..O#.....O
...O.#.#.O....##O...#O#...O....O..OO..#O.O....#O..#...O.OO.....OO.OOO.O.O.#.....OO#O.##..#..#.O#...O
..O#.O......##O#.OO..........#......#.OOOOO...#.O##......O...O.#OOO.O#O..#..O....#...O....#O..O.O...
...#...##O.O......#O...O#O...##OO.O......O..#O#..O.....#.OOO..#.O.O#..###.O....O.O.OOO....OO#O....#.
O#O..##..#O.#..........OO...O.O..###.O..O#.O.O.O.#.#.O.#.O...O.OO....#.#.....##..OOO#..OO......O#.##
O..O#O..#.#O.OO...#.OO.OO.##.O....#.....##O..O#..O.O.OO##.O#O.O#.O.#O..O.#.O....O#.#.O....#..OO....O
.O..##O#OO...O...O.....O....O.O.O........O........##O#OO.O.OO.O.##...##......O....#.O.O....O#.O...#.
.O.......#.#...O.....O...#........O#....O#.OO....#...O#.#O...#..##.#....##.OOO.#......#..O...OOO.#.O
......#O..##........##O#.......###.....O..OOO.......#.OO.#.....#...#.##.#..O......#O...O.O..O.....O.
.OOO#..#.....#.....#......O#O#....O.OOOO###.....O....OO.#O#...#.OO......O.O........#OO#.O..O........
#O#.#.OOO###...O..OO.O...#.#........#.#.#......OO#.....O...O....O.#....#..#..##.#.OOO#....#.#.O....O
#O#.#.##....#.O....##.....##.O.O.OO#.....#O...O#.....#..O.....#.#......#O..O...O.....#..O....#...#..
.O.......#.....O.O#.#.O.....##..#OO.#OO.O.O.#O.O.#O##OO.#..#O.O.....#......O#........#.#O...#.#.O...
#..O.##......O...O.O#..OO#...#..O..#OO.#O.O#....O#..#....O....O..#O..#.#......O...#..OO#....O.O....O
.#......#.#......#O............#OOO......#.OO..O#.O#.......#....#....##.O.......#...O.O#...O...#O..#
O...OO..O#......#.O........#.#....OO.#......O....O##..........O#..#....#O...O#.O..#....OOO..O....#O#
O...O...#.O.O.O.OOO..OO.##.O....O......#.#O...#...O...O#....O.#...#.......#.##....#.#.O.OOO..O...O.O
.#.O#...##O#.O..O....O.#.....#O.....#.O.....#...O#.O.O..#....O#OO..OOO..#O.OO.O...OO.OOO.#...##.O..#
........O#O#...#..OOO#...#O.O#..#.O.....O.OO.O#O..##.O.....O.#OO.........O.#OO.....OOO.....O.O.O.#..
.#....OO.#............O#..#.....OO....O.O.#..#...OO..#....#...#.#O....##..O....#O..#OO..O.....O....#
O..#.....O.O...O........O....#.#O...#......O....O......O......O..#.OO......#O...#..O.##......O#....O
...O.###..#...#.#..O.#.............#OO.#...#...##.#.O#.........O..##.##.#....O.....O.......O..O...O.
.O##....O...#....OO.##.#...O......OO..........#.O.......OO#.O.#..#.OO...#......OO#O.......#..#...#..
.#.O..#..#.OO.....O..O#.O..O....#.....O#O.OO.#.OOOO.##.O..O...O.O..#....O.....O.#...O.#...#.....O..#
.#.#O..#....#O..O.OO..O.....O....###..#...O.#....O#O...#....##...##.O.##..O...OOO.#..#O.....OOO#.O..
O..#O....#..............O.O.O..O.O.#..........O.....O#.O#.O..O.#.......O.OO...#.....##.#..O.#.#.#..#
#O..O..#.O.O..O#.OO....#O..#.....O..#..OO.#..##O.........#...O.#.....#..#.OO..O.##...#...#O.#O##..OO
#.........O...#..O.##O......#.O..##..#O..........#.#O#O........##....O....O....#..#...#O......O#.O.#
#.#..O.O.O.#.OO#.#..O....O#O.O.O.O..#....#..#.....#..O......O#...O.O.O....OOO##O.###.....O.O#.#..#.#
O...#OO..#...O..O..#..OOO.#....#..#.##...#..#....OO.O.O............#.#O#O#OO.OO...O.##O.##O#O....OOO
O..O.......O.#OO.O#........O###...O........O..#.O.OO.O...OO..OO.#O.O.#O.OO.O....OOO#.#.O.......O.O.O
#O..#O.......#..##.#....O.O#O#O.O#OO..O...O.O.O.OO.#..O#.......OO.O.##.O....O...#O......O....#O.O...
#..O........#..#..#O.OO##..OO...#..O#.O##....#.#.#.#...#....O.....O.....O...OO#O...#..O....#..##..O.
..O.....O.OOO#O....#.#.......#.OO....O.....OO#..O.O#.#.O...#...#..#.#OO..O.....#.O.....#...O...#.O#.
#.....#.....#O.#.O#O.O....#.....O#O#O#OO...O.....O#.........O..#....O.....O.......O.O#OO##....O#....
OO....#..O.#.O#....O#.O..#.#....#.#..#...#....#..OO......OO.O..###O....OOO.O..OOO#.#.O...#.OO.#..O#.
.##.#O...#......####......#...#..#.O.......O#..#.#...O#...O..O.........O##.#....O#OO..OO......O..##.
...O..#.O.O..#O..#O............#O#O..#.#...O..#......O..O...O##....#.#.............O..#...#......#..
#.#..#...##....#O....O.O.O.....#...#O..O.#..#.#O.O.#OOO.....#..#..#OO..O#........#.#.O..........O...
...#.O#......#...O...OO..#.#O.O..###O#O#...#.#..#....O#..O.#OO...#...O.##O...#.O..O#..#.O.#..#..OO..
...#....O...#.#.......OO#..OO.O..####.....##O.#...#.O....O......#......O#...#..#.O..O.OOO.O......#..
#..##..O..O....O..#O.O.O..O#.#.#..O..#.#...O.......OO#.OO...O..#.O#..O...OOO..O...O#..O....#....O...
.#.#...#.O.O..O..#..O........O....O#.#...O.O...#...O.O##O....#.#.O...#.O..#OOO..O.....#.O....##..##.
.......#OO..O..#.#....O.....O#.OO.O....O.........##.....OO......O...O#.....##..O#...#....OOO...##...
..#O...O.....O.O.##O..O.....O...O#O......#.........O..OO.....O.#.#OO..#....O.#...O..#.....#..O...O#.
.....O.O...#O.##.#O#..#.OO#.O..#O.O.#.OO.#OO...OO#O.##.O.#.O.##.#..#.#.............O.O.#.O..O..#...#
...O.#.....#.#.#..OO.O.O..#.O.....#.##......OO.#....OO.#.#O..#.O.....#.....##..O.#O#..OO.........#..
.O.#O.........#O....O.O....#.O.O..#.O#O..O.#.OO......O#....O#O.O.............O..#...O.OO#...O..O...O
.......#...#....#.....O......O.OO.O....O#.O...#....#...........#.O#..#..OOO.#O..#.O...O#..##.....O.#
........#....##...O..O.............#.O...O..#..#...O.##.#...O...#...#.O..#....###.#O.#.O.O..O....O.O
O.#....OOO..O.O.##.........O...O...OO#.....#O..OO..#.....#O..O#.O#.#O.#OO#...O#O....O...O...O......O
.O..........##.O.#..OO....#.O..........O.#....#.O...O.O.....OO.#..O...O....##...#OO..#...OO#.O#O.#..
O......O#O....#.##O.##OO.#....OO.....O.O.OO..O#.....#..OO.O..OO......#..O.OO..OO..O...#..O...#O.....
.###....O.....#O..#O....O.....#.OO..##....#.....O.#......#.....O##O...OO...O##O#....O#.........O#O#.
OO.#O##....#O.#...O........OO.....#..O...O..#.O#.#.#..OO#O.##.....#.....O.O....OO.....O.O....#...O#.
....O#OO..OO......#O.....#.O...OOO..OOO.#O....O..#.#.###..O..O..O#..........#..OOO...OO.O#O.#.#..#O.
O....#O.O.O.......#......O.......O.O...O...O....##O..O.OO#O....O.#............O..#O.##...O..........
O.......O....O##....#......OO..##.O....#O..##..O......O.O.......O#.#...###..#.....##..##.....O......
.O..O###O.........#.O.....OO..O.#.O.O...#O#.O.O..##..O..O...O..#...#O.#..#..O..#....O..O.O#.O#.O.OO.
..#.........O#..#OO......O.O#..O#.........O.#OOOO.....O..#O..#..#..OO.OO...OO...#..OO#...##..O...#..
..OO..#....O..O.O..OOO..#O#O##..#...O#O...#....O..O..#.O.OO..O.O......#O........#.....O.#...O#O...OO
..#......O##O.....OO...##......O...OO#....O..#OO#..#.O..O.#.......#..O.#.O#....#....#.OOO.#.....#...
..#.O.O.O.#....#.#.O.##.....#.O#.OO..OOO..O......O.........#....O..#..O.###.#..##O#...O#.O.O.O.#...#
#..O..O..#.#.O...#O#..O.....#O.O.....#............O..#.O#.....O....O..O.OO.O..#....OO.....###..#....
.O.O.#.....O#O##...#..#...#........#..O#.....O..#..O...O.#.....OO..O.#.##....OO#.#.....O..O....O.O..
........O..O.#..O#O...#........O.#O#...O#O##......O..#....#...O...O..O.O..##.OO....#.....#.O...#O...
.O.O..##O..O...OO...O..O.O#O...OOOO..O....O........O#...O..O#....O...O#OOO.O##....##..O.....OO.O#..#
.....#O.#..O......O...OO.O..#..#O....O....O....O#....O.O..O...#O.#....##......##..#..#O..#..OO...O.O
...#O.#.#..OO..O..........##..O#.#OO.......#...#O###.#O..O#O...O...#..O....O#O#O.#.....O.O.O#...O..#
##..#......O##..O.#...O....OOOO.....#....O.#...#.........#..O.#..O.....#...O...O.......O#......O#O..
.....O......O..##O#.....#O#...#O....O..O..O.......O#O##....OOOO..##...O.O#...OOOO...#OOOO##O..##....
#...O.O.O#..OOO...#O..O##.....#.#..#O...O###OO...O.OO.......O.O..#...###...........O..#....#.##...OO
O.OO......#....#........O#.#.#O.....#..........O#.#..##O...#..OO...#OO.#..O.#O..#........O.O..O#.O##
#.##...O.#.....OO...O..#.#.O.O.O.#.#O...#....#.#......#...#...#.O.#O#..#..O...#.OOO..#OO##..OO...#.#
O.....#.....#.O.O...O#.#...OO..OOO..O..O.O.#...O..#....O.#..OOO.O.O#O..OO#O..OO.O...O.........##.O..
..#....O........#.#O....O..#....O.###OO..#.#O.O..O.....###..OO.O..##...#.#..#O..O.....O.#.#O...O....
.O.OO..O#........O#..O..##...#O.......#..#.....#.........OO..#.O..OO#O..#....#OO......O............O`

function isSameArray(L: number[], R: number[]) {
  return L.every((el, i) => el === R[i])
}

let store = new Map<string, any>()
export default function Page() {
  store = new Map<string, any>()
  const input = puzzle
  const rows = input.split('\n')
  const map = new Array(rows.length).fill([]).map((row, i) => rows[i].split(''))
  printMap(map)
  let load = 0
  let tempMap = map
  const loadHistory = []
  let patternFound = false
  let startinPoint = -1
  let pattern: number[] = []
  for (let i = 0; i < 1000000000 && !patternFound; i++) {
    const nres = doCycle(tempMap)
    tempMap = structuredClone(nres.map)
    console.log(` After ${i + 1} cycles load = ${nres.load}`)
    loadHistory.push(nres.load)
    // console.log(loadHistory)
    let winsize = 1
    // console.log(loadHistory.length)
    // console.log(loadHistory.length / 3)
    for (winsize = 1; winsize <= loadHistory.length / 3 && patternFound === false; winsize++) {
      const win = loadHistory.slice(loadHistory.length - winsize)
      // console.log(win)
      // console.log(winsize)
      let allSame = true
      for (let y = loadHistory.length - winsize - winsize; y >= 0; y -= winsize) {
        // console.log(y + ' ' + loadHistory.slice(y, y + winsize) + ' against ' + win)
        if (!isSameArray(loadHistory.slice(y, y + winsize), win)) {
          allSame = false
          break
        }
        startinPoint = y
      }
      if (allSame) {
        patternFound = true
        pattern = win
        console.log("Pattern Found!! " + startinPoint + ' ' + win)
      }
    }
    // printMap(tempMap)
  }
  const res = (1000_000_000 - (startinPoint)) % (pattern.length) - 1
  console.log("Result")
  console.log(res)
  console.log(pattern[res]) 

  // 90200 <- TOO HIGH
  // 90176

  // doCycle(map)
  // printMap(map)
  // doCycle(map)
  // printMap(map)
  // let load = tiltNorth(map)
  // console.log(load.load)
  console.log(load)
  console.log('\n\n\n')
}

const doCycle = (map: string[][]) => {
  // console.log("Prev")
  // printMap(map)
  const n = tiltNorth(map)
  const w = tiltWest(n.map)
  const s = tiltSouth(w.map)
  let load = tiltEast(s.map)
  // printMap(map)
  return { map: load.map, load: load.load }
}

const tiltNorth = cache((map: string[][]) => {
  let load = 0
  for (let x = 0; x < map[0].length; x++) {
    let gap = 0
    for (let y = 0; y < map.length; y++) {
      if (map[y][x] === '.') gap++
      if (map[y][x] === '#') gap = 0
      if (map[y][x] === 'O') {
        if (gap > 0) {
          map[y - gap][x] = 'O'
          map[y][x] = '.'
        }
        load += map.length - (y - gap)
      }
    }
  }
  // console.log("North")
  // printMap(map)
  return { map, load }
})

const tiltWest = cache((map: string[][]) => {
  let load = 0
  for (let y = 0; y < map.length; y++) {
    let gap = 0
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === '.') gap++
      if (map[y][x] === '#') gap = 0
      if (map[y][x] === 'O') {
        if (gap > 0) {
          map[y][x - gap] = 'O'
          map[y][x] = '.'
        }
        load += map.length - (y)
      }
    }
  }
  // console.log("West")
  // printMap(map)
  return { map, load }
})

const tiltSouth = cache((map: string[][]) => {
  let load = 0
  for (let x = 0; x < map[0].length; x++) {
    let gap = 0
    for (let y = map.length - 1; y >= 0; y--) {
      if (map[y][x] === '.') gap++
      if (map[y][x] === '#') gap = 0
      if (map[y][x] === 'O') {
        if (gap > 0) {
          map[y + gap][x] = 'O'
          map[y][x] = '.'
        }
        load += map.length - (y + gap)
      }
    }
  }
  // console.log("South")
  // printMap(map)
  return { map, load }
})

const tiltEast = cache((map: string[][]) => {
  let load = 0
  for (let y = 0; y < map.length; y++) {
    let gap = 0
    for (let x = map[0].length - 1; x >= 0; x--) {
      if (map[y][x] === '.') gap++
      if (map[y][x] === '#') gap = 0
      if (map[y][x] === 'O') {
        if (gap > 0) {
          map[y][x + gap] = 'O'
          map[y][x] = '.'
        }
        load += map.length - (y)
      }
    }
  }
  // console.log("East")
  // printMap(map)
  return { map, load }
})


function cache<P extends any[], R extends any>(cb: (...arg: P) => R) {
  return (...arg: P) => {
    // console.log('\n' + arg.toString())
    // try {
    //   const cachedRes = JSON.parse(store.get(`${cb.toString()}-${arg.toString()}`))
    //   // console.log("Cache HIT")
    //   // console.log(cachedRes)
    //   if (cachedRes) return cachedRes as R
    // } catch (error) {
    // }
    // // console.log("Cache MISS")
    // const prevArg = structuredClone(arg)
    const res = cb(...arg)
    // store.set(`${cb.toString()}-${prevArg.toString()}`, JSON.stringify(res))
    return res
  }
}



function printMap(map: string[][]) {
  console.log(map.map(r => r.join('')).join('\n'))
  console.log()
}