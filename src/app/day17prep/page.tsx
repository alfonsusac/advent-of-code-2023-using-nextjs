export default function Page() {
  // let num = fact1(5) // 120
  // let num2           // 120
  // fact2(5, v => num2 = v)
  // let num3 = fact3(5)
  // console.log(num3)
  
  // let node = makeTree1(20) 
  // console.log(count(node)) // 2097151
  let node2
  makeTree2(3, (y) => node2 = y) 
  console.log(node2)
  console.log(count(node2!))

  // let node3 = makeTree3(3)
  // let res
  // console.log(node3)
  // count2(node3, y => res = y)
  // console.log(res)
}

// Factorial
// - regular recursion
function fact1(n: number): number {
  if (n === 0) return 1
  else return n * fact1(n - 1)
}
// - CPS/no return recursion
function fact2(n: number, k: (y: number) => number) {
  if (n === 0) k(1)
  else fact2(n - 1, y => k(n * y))
}
// - Convert to iteration
function fact3(n: number) {
  let res
  const stack = [[n, (v: number) => res = v, 1] as const]
  while (stack.length) {
    let [n, k, loc] = stack.pop()!
    switch (loc) {
      case 1:
        if (n === 0) k(1)
        else stack.push([n - 1, y => k(y * n), 1])
    }
  }
  return res
}

// Make Tree
// - recursion
function makeTree1(d: number) {
  const node: node = { depth: d }
  if (d > 0) {
    node.left = makeTree1(d - 1)
    node.right = makeTree1(d - 1)
  }
  return node
}
// - CPS
function makeTree2(d: number, k: (d: node) => node) {
  const node: node = { depth: d }
  if (d > 0) {
    makeTree2(d - 1, y => node.left = y)
    makeTree2(d - 1, y => node.right = y)
  }
  k(node)
}
// - iteration
function makeTree3(d: number) {
  let res: node
  const stack = [[{ depth: d } as node, d, (y: node) => res = y, 1 as number] as const]
  while (stack.length) {
    let [node, d, k, loc] = stack.pop()!
    switch (loc) {
      case 1:
        stack.push([node, d, k, 2])
        if (d > 0) {
          stack.push([{ depth: d - 1 } as node, d - 1, y => node.right = k(y), 1])
          stack.push([{ depth: d - 1 } as node, d - 1, y => node.left = k(y), 1])
        }
        break
      case 2:
        k(node)
        break
    }
  }
  return res!
}

// Count Nodes of a tree
// - recursion
function count(node: node) {
  let n = 1
  if (node.left) n += count(node.left)
  if (node.right) n += count(node.right)
  return n
}

// - CPS recursion
function count2(node: node, k: (node: number) => number) {
  let n = 1
  if (node.left) count2(node.left, y => n += y)
  if (node.right) count2(node.right, y => n += y)
  k(n)
}

// https://theincredibleholk.org/blog/2018/03/16/how-to-convert-recursion-to-iteration/
function makeTree(depth: number) {
  let stack: node[] = []
  const options = [
    function pushLeaf() {
      stack.push({ depth: 0 })
    },
    function reduceLeaf() {
      const child = stack.pop()!
      stack.push({ depth: 1 + child.depth, left: child })
    },
    function reduceRight() {
      const child = stack.pop()!
      stack.push({ depth: 1 + child.depth, right: child })
    },
    function reduceLeftRight() {
      const left = stack.pop()!
      const right = stack.pop()!
      stack.push({ depth: 1 + Math.max(left.depth, right.depth), left, right })
    }
  ]
  while (true) {
    const minOption = stack.length < depth ? 0 : 1
    let numOptions = 1

    if (stack.length >= 1) numOptions += 2
    if (stack.length >= 2) numOptions += 1

    let choice = minOption + Math.floor(Math.random() * (numOptions - minOption))
    options[choice]()

    if (stack[stack.length - 1].depth >= depth)
      return stack.pop()
  }
}

type node = {
  depth: number,
  left?: node,
  right?: node,
}
