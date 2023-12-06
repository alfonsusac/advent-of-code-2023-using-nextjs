type input = {
  allowedTime: number,
  recordDistance: number,
}[]

const sampleInput: input = [
  { allowedTime: 7, recordDistance: 9 },
  { allowedTime: 15, recordDistance: 40 },
  { allowedTime: 30, recordDistance: 200 },
]

const puzzleInput: input = [
  { allowedTime: 45, recordDistance: 295 },
  { allowedTime: 98, recordDistance: 1734 },
  { allowedTime: 83, recordDistance: 1278 },
  { allowedTime: 73, recordDistance: 1210 },
]

const { sqrt, floor } = Math

export default function Page() {

  const input = puzzleInput
  let product = 0

  for (const record of input) {
    // step 1: find quadratic formula
    //  minimum of 2 coordinates is needed to find quadratic formula
    //  C is always 0 because pressing button for 0 second will always produce distance of 0
    //  when button is pressed for allowedTime, distance is always 0 -> therefore we have (allowedTime, 0)

    // From  [y = ax^2 + bx + c]   when y = 0 & x = 0
    //      0 = a(0)^2 + b(0) + c
    //      c = 0
    // therefore [y = ax^2 + bx].

    // When x1 = 1,
    //  y1 = a + b
    //   a = y1 - b    <- I
    //   b = -ax_2

    // When y2 = 0,
    //        0 = ax2^2 + bx2
    //      bx2 = -ax2^2         
    //        b = -ax2            substitute I
    //        b = -(y1-b)x2
    //  b(1-x2) = -y1x2
    //        b = (-y1 x2) / (1-x2)

    // let t = allowedTime
    // y1 = t - 1                because when x (button pressed duration) = 1, y (distance) is always allowedTime - 1. because it is running 1m/s and there is t-1 second left.
    // x2 = t                    because when x (button pressed duration) is pressed until the end, 0 metre distance is traveled. Therefore y (distance) = 0 

    //        b = (-(t-1)t) / (1-t)
    //        a = t - 1 - b

    const t = record.allowedTime

    var b = (-(t - 1) * t) / (1 - t)
    var a = t - 1 - b

    console.log(`a: ${a}, b: ${b}`)

    // It is inferred that the b = t (if t !== 1)
    // which then a will always be -1 (a = -1)

    // Therefore, the quadratic equation is y = -x^2 + tx (+ 0)
    // we can use the quadratic formula to find the two intersecting values at (y = distance)
    //    d = -x^2 + tx
    //    0 = -x^2 + tx - d   -> a = -1   b = t    c = -d

    const d = record.recordDistance
    var a = -1
    var b = t
    var c = -d

    const x1 = (-t + sqrt(b * b - 4 * a * c)) / (2 * a)
    const x2 = (-t - sqrt(b * b - 4 * a * c)) / (2 * a)

    const diff = ( x2 === parseInt(x2.toString()) ? floor(x2) - 1 : floor(x2) ) - floor(x1)

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