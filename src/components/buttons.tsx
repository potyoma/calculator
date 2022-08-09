import { Box, Button } from "@mui/material"
import { Container } from "@mui/system"
import { Numbers } from "./numbers"
import { UpperActions } from "./upperActions"

type Props = {
  onNumberChange: (digit: number) => void
  onClear: () => void
  onAddAction: (action: string) => void
}

const Buttons: React.FC<Props> = ({ onNumberChange, onClear, onAddAction }) => {
  return (
    <Container>
      <UpperActions onClear={onClear} onAdd={onAddAction} />
      <Numbers onAdd={onNumberChange} />
    </Container>
  )
}

export { Buttons }
