// TODO: Clear all of this shit and start from scratch.
// TODO: Probably use Redux.

export type CalcAction = Number | Action

export type Number = {
  name: string
  value: number
}

export type Action = {
  name: string
  symbol: string
}

const NUMBERS: Number[] = [
  { name: "zero", value: 0 },
  { name: "one", value: 1 },
  { name: "two", value: 2 },
  { name: "three", value: 3 },
  { name: "four", value: 4 },
  { name: "five", value: 5 },
  { name: "six", value: 6 },
  { name: "seven", value: 7 },
  { name: "eight", value: 8 },
  { name: "nine", value: 9 },
]

const ACTIONS: Action[] = [
  { name: "clear", symbol: "AC" },
  { name: "divide", symbol: "/" },
  { name: "multiply", symbol: "x" },
  { name: "add", symbol: "+" },
]

export { NUMBERS, ACTIONS }
