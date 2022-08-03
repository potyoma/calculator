export type Number = {
  name: string
  value: number
}

export type Action = {
  name: string
  symbol: string
  func: (num1: number, num2: number) => number
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

// TODO: Implement digit-by-digit fucntions
const divide = (num1: number, num2: number) => {
    if (num2 === 0) return Infinity
    return num1 / num2
}

const multiply = (num1: number, num2: number) => num1 * num2

const ACTIONS: Action[] = [
  { name: "clear", symbol: "AC", func: (num1, num2) => 0 },
  { name: "divide", symbol: "/", func: divide },
  { name: "multiply", symbol: "x", func: multiply },
]

export { NUMBERS, ACTIONS }
