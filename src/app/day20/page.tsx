const sample = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`

const sample2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`

const puzzle = `%lh -> mj
%nd -> qf
&pn -> dh, dk, bg, qs, rp, bk, gs
%bk -> rs
%nh -> lh
%hc -> jg, ks
%pt -> gv, jg
&dh -> jz
%jq -> nd
%gv -> jg, mr
%gm -> jv
&zt -> jq, rn, nd, bt, jh, gm
%mz -> dc, zt
%nf -> dm, pn
%bg -> bk
%qt -> qx, xk
%dc -> zt, db
%rc -> gz, jg
%kx -> pn, gj
%mj -> zm
%rs -> pn, dk
%lv -> tb, jg
&mk -> jz
%bt -> pv, zt
%cg -> mz, zt
%pk -> qx
%jd -> lv, jg
%jv -> jh, zt
%ks -> jg, jd
%gs -> bg
broadcaster -> bt, rc, qs, qt
%dm -> rm, pn
%pv -> jq, zt
%db -> zt
%dv -> sl, qx
%qs -> rp, pn
%sr -> hf
%qf -> gm, zt
&jz -> rx
&vf -> jz
%gz -> vj, jg
%mr -> jg
%dk -> kx
&jg -> rc, mk, vj
%qh -> hc, jg
%vj -> qh
%tb -> pt, jg
%rm -> pn
%gj -> pn, nf
%rp -> gs
%xk -> td, qx
%hf -> nh
&rn -> jz
&qx -> lh, vf, hf, nh, sr, mj, qt
%td -> sr, qx
%sl -> pk, qx
%jh -> cg
%zm -> dv, qx`

const { log } = console

let map: { [key: string]: [string, string[], any] } = {}
export default function Page() {
  map = {}
  // const input = sample.split('\n')
  // const input = sample2.split('\n')
  const input = puzzle.split('\n')

  //                prev    next    isHighPow
  const initStack: [string, boolean][] = []

  let conjs = []
  for (const modul of input) {
    const [lhs, rhs] = modul.split(' -> ')
    const dests = rhs.split(', ')
    if (lhs === "broadcaster") {
      dests.forEach(dest => initStack.push([dest, false]))
      continue
    }
    const src = lhs.slice(1)
    const val = [lhs[0], dests, lhs[0] === '%' ? false : {} as any]
    map[src] = val as any
    if (lhs[0] === '&') {
      conjs.push(src)
    }
  }

  for (const conj of conjs) {
    // log(conj)
    // log(map[conj])
    for (const modul in map) {
      if (modul === conj) continue
      if (map[modul][1].includes(conj)) {
        // log(map[modul])
        map[conj][2][modul] = false
      }
    }
  }

  let i = 0
  let j = 0
  let low = 0
  let high = 0

  while (j++ < 1000000000) {

    if (Date.now() % 500 === 0) {
      console.clear()
      console.log("Button Pressed", j + 1)
    }

    const stack = [...initStack]
    low++

    let rxfound = false

    while (stack.length) {
      // log(pulses)
      const [src, isHigh] = stack.shift()!
      // log([prev, src, isHigh])
      if (isHigh) high++
      if (!isHigh) low++

      if (src === "rx" && !isHigh) {
        // console.log(prev, src, isHigh)
        console.log("RX Found", j, isHigh)
        rxfound = true
        break;
      }

      const [op, dests, data] = map[src] ?? []
      if (!op) continue


      if (op === '%') {
        if (!isHigh) {
          // log(map[src])
          map[src][2] = !data
          // log(map[src])
          dests.forEach(d => {
            stack.push([d, !data])
            if (map[d][0] === '&') {
              map[d][2][src] = !data
            }
            // log(src, !data ? "high" : "low", d, `(${map[src][2]}) (switched)`, '->', !data ? "high" : "low", d)
          })
        }
        // else { // biggest mistake in my aoc
        //   dests.forEach(d => {
        //     log(src, "high" ? "high" : "low", d, `(${map[src][2]}) (stayed)`, '->', "high", d)
        //     stack.push([src, d, true])
        //     if (map[d][0] === '&') {
        //       map[d][2][src] = true
        //     }
        //   })
        // }
      }
      if (op === '&') {
        // log(src)
        // log(map[src])
        // data[src] = true
        // log(map[src])
        if (Object.values<boolean>(data).every(e => e === true)) {
          dests.forEach(d => {
            // log(src, `(${Object.entries(data).map(([key, val]) => `${val ? "H" : "L"}`)})`, '->', d)

            // log(src, "low", d, `(${Object.entries(data).map(([key, val]) => `${key} ${val}`)})`, '->', "low", d)
            stack.push([d, false])
            if (map[d]?.[0] === '&') {
              map[d][2][src] = false
            }
            // if (d === "rx") {
            //   console.log("Found RX", `(${Object.entries(data).map(([key, val]) => `${key} ${val}`)})`)
            // }
          })

        } else {
          dests.forEach(d => {
            // log(src, `(${Object.entries(data).map(([key, val]) => `${val ? "H" : "L"}`)})`, '->', d)

            // log(src, "high", d, `(${Object.entries(data).map(([key, val]) => `${key} ${val}`)})`, '->', "high", d)
            stack.push([d, true])
            if (map[d]?.[0] === '&') {
              map[d][2][src] = true
            }
            
            // if (d === "rx") {
            //   console.log("Found RX", `(${Object.entries(data).map(([key, val]) => `${key} ${val}`)})`)
            // }
          })
        }
      }
    }

    if (rxfound) {
      break;
    }


    // pulses.forEach((v1, v2, set) => {
    //   if (v1.split(',')[2] === "false") {
    //     low++
    //   } else {
    //     high++
    //   }
    // })
    // console.log("Low", low, "High", high)
  }
  console.log("Res", low * high)

  console.log("Button Pressed", j)
  log("✔️  Finished\n\n\n")
  return
}
