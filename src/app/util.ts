export function has(a: string, b: string): boolean
export function has(a: any, b: any): any {
  if (typeof a === "string") {
    return a.includes(b)
  }
}

export function int(a: string) {
  return parseInt(a)
}
export class Range {
  get len() {
    return this.max- this.min + 1
  }
  readonly interval: number
  constructor(readonly min: number, readonly max: number) {
    this.interval = max - min
  }
  get str() {
    return `[${this.min} ${this.max}]`
  }
  cross(rn: Range) {
    const res: Range[] = []
    const points: [number, "S" | "E"][] = []
    points.push([this.min, "S"])
    points.push([this.max, "E"])
    points.push([rn.min, "S"])
    points.push([rn.max, "E"])
    points.sort((a, b) => a[0] - b[0])
    let prevStart
    for (const p of points) {
      if (!prevStart && p[1] === "S") prevStart = p[0]
      if (prevStart && p[1] === "S") {
        res.push(new Range(prevStart, p[0]))
        prevStart = p[0]
      }
      if (prevStart && p[1] === "E") {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      }
    }

    return res
  }
}