import { Button } from "@mui/material"
import { CalcAction } from "../constants"

type Props = {
  value: CalcAction
}

const CalcButton: React.FC<Props> = ({ value }) => {
  const handleClick = () => {}

  return (<Button onClick={handleClick}>
    {value.name}
  </Button>)
}

export { CalcButton }
