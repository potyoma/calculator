import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import * as math from "mathjs"
import { useState } from "react"
import { Buttons } from "./buttons"
import { Display } from "./display"

const Panel: React.FC = () => {
  const defaultValue = "0"
  const actions = ["/", "x", "+", "-"]

  const [expression, setExpression] = useState([defaultValue])
  const [evaluated, setEvaluated] = useState(false)

  const clear = () => {
    setExpression([defaultValue])
    setEvaluated(false)
  }

  const handleAddDigit = (digit: string) => {
    const isNumber = !isNaN(parseInt(digit))
    const copy = evaluated
      ? [
          actions.includes(digit)
            ? expression.at(-1) || defaultValue
            : defaultValue,
        ]
      : Array.from(expression)
    const currentValue = copy.at(-1) || defaultValue
    const currentIsAction = isNaN(parseFloat(currentValue))

    evaluated && setEvaluated(false)

    if (isNumber) {
      if (currentIsAction) {
        setExpression([...copy, digit])
        return
      }

      copy[copy.length - 1] =
        currentValue === "0" ? digit : currentValue + digit
      setExpression(copy)
      return
    }

    if (actions.includes(digit)) {
      digit = digit === "x" ? "*" : digit
      const needsReplacing =
        (currentIsAction && digit !== "-") ||
        (digit === "-" && currentValue === "-" && copy.at(-2) === "-")

      if (needsReplacing) {
        const prevValue = copy
          .slice()
          .reverse()
          .findIndex((v) => !isNaN(parseFloat(v)))
        setExpression([...copy.slice(0, -prevValue), digit])
        return
      }

      setExpression([...copy, digit])
      return
    }

    if (digit === ".") {
      copy[copy.length - 1] = currentValue.includes(digit)
        ? currentValue
        : currentValue + digit
      setExpression(copy)
      return
    }
  }

  const handleEvaluate = () => {
    const result = math.evaluate(expression.join(""))
    setEvaluated(true)
    setExpression([...expression, "=", result.toString()])
  }

  return (
    <Paper elevation={3}>
      <Container maxWidth="md" sx={{ padding: "3vh" }}>
        <Display current={expression.at(-1) || ""} expression={expression} />
        <Buttons
          onDigitChange={handleAddDigit}
          onClear={clear}
          onEqual={handleEvaluate}
        />
      </Container>
    </Paper>
  )
}

export { Panel }
