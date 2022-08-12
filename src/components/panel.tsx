import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import * as math from "mathjs"
import { useState } from "react"
import { Buttons } from "./buttons"
import { Display } from "./display"

const Panel: React.FC = () => {
  const [expression, setExpression] = useState<string[]>([])
  const [current, setCurrent] = useState("0")

  const clear = () => {
    setCurrent("0")
    setExpression([])
  }

  const handleAddDigit = (digit: number) => {
    if (
      expression.length > 1 &&
      isNaN(parseFloat(expression[expression.length - 1])) &&
      isNaN(parseFloat(current))
    ) {
      setCurrent(digit.toString())
    } else setCurrent(current === "0" ? digit.toString() : current + digit)
  }

  const handleAddAction = (action: string) => {
    if (action === "-" && expression[expression.length - 1] === "-") return
    if ((action === "." && current.includes(".")) || isNaN(parseFloat(current)))
      return

    setExpression([...expression, current, action])
    setCurrent(action)
    setCurrentyyyyyy
  }

  const handleEvaluate = () => {
    if (expression[expression.length - 1] !== current)
      setExpression([...expression, current])
    const result = math.evaluate(expression.join("")).toString()
    setCurrent(result)
    setExpression([...expression, "=", result])
  }

  return (
    <Paper elevation={3}>
      <Container maxWidth="md" sx={{ padding: "5vh" }}>
        <Display current={current} expression={expression} />
        <Buttons
          onNumberChange={handleAddDigit}
          onClear={clear}
          onAddAction={handleAddAction}
          onEqual={handleEvaluate}
        />
      </Container>
    </Paper>
  )
}

export { Panel }
