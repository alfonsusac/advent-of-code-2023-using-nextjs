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
  const input = puzzle.split('\n')
  const initStack: [string, boolean][] = []
  let conjs = []
  // Initialize Module
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
  // Initialize conjunctions
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

  let j = 0

  while (j++ < 1000000000) {
    if (Date.now() % 500 === 0) {
      console.clear()
      console.log("Button Pressed", j + 1)
    }
    const stack = [...initStack]
    let rxfound = false

    while (stack.length) {
      const [src, isHigh] = stack.shift()!

      if (src === "rx" && !isHigh) {
        console.log("RX Found", j, isHigh)
        rxfound = true
        break
      }

      const [op, dests, data] = map[src] ?? []
      if (!op) continue

      if (op === '%') {
        if (!isHigh) {
          map[src][2] = !data
          dests.forEach(d => {
            stack.push([d, !data])
            if (map[d][0] === '&') {
              map[d][2][src] = !data
            }
          })
        }
      }
      if (op === '&') {
        if (Object.values<boolean>(data).every(e => e === true)) {
          dests.forEach(d => {
            stack.push([d, false])
            if (map[d]?.[0] === '&') {
              map[d][2][src] = false
            }

          })

        } else {
          dests.forEach(d => {
            stack.push([d, true])
            if (map[d]?.[0] === '&') {
              map[d][2][src] = true
            }
          })
        }
      }
    }

    if (rxfound) {
      break
    }
  }

}