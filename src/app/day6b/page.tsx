type input = {
  allowedTime: number,
  recordDistance: number,
}[]

const sampleInput: input = [
  { allowedTime: 71530, recordDistance: 940200 },
]

const puzzleInput: input = [
  { allowedTime: 45988373, recordDistance: 295173412781210 },
]

const { sqrt, floor } = Math

export default function Page() {

  const input = puzzleInput
  let product = 0

  for (const record of input) {

    const t = record.allowedTime

    var b = (-(t - 1) * t) / (1 - t)
    var a = t - 1 - b

    console.log(`a: ${a}, b: ${b}`)

    const d = record.recordDistance
    var a = -1
    var b = t
    var c = -d

    const x1 = (-t + sqrt(b * b - 4 * a * c)) / (2 * a)
    const x2 = (-t - sqrt(b * b - 4 * a * c)) / (2 * a)

    const lower = x1 + 1

    const diff = (x2 === parseInt(x2.toString()) ? floor(x2) - 1 : floor(x2)) - floor(x1)

    console.log(`diff: ${diff}`)
    if (!product) product = diff
    else product *= diff

    console.log('\n')
  }


  console.log(product)
  return product
}




type map = {
  min: number,
  max: number,
  translateAmount: number
}