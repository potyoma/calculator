import { Paper } from "@mui/material"
import { Container } from "@mui/system"
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

  const handleAddDigit = (digit: number) =>
    setCurrent(current === "0" ? digit.toString() : current + digit)

  const handleAddAction = (action: string) => {}

  return (
    <Paper elevation={3}>
      <Container maxWidth="md" sx={{ padding: "5vh" }}>
        <Display current={current} expression={expression} />
        <Buttons
          onNumberChange={handleAddDigit}
          onClear={clear}
          onAddAction={handleAddAction}
        />
      </Container>
    </Paper>
  )
}

export { Panel }
