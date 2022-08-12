import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import { Numbers } from "./numbers"
import { SideActions } from "./sideActions"
import { UpperActions } from "./upperActions"

type Props = {
  onDigitChange: (digit: string) => void
  onClear: () => void
  onEqual: () => void
}

const Buttons: React.FC<Props> = ({ onDigitChange, onClear, onEqual }) => {
  return (
    <Container>
      <Grid container direction="row" columns={{ md: 12 }}>
        <Grid item md={10}>
          <UpperActions onClear={onClear} onAdd={onDigitChange} />
          <Numbers onAdd={onDigitChange} />
        </Grid>
        <Grid item md={2}>
          <SideActions onAdd={onDigitChange} onEqual={onEqual} />
        </Grid>
      </Grid>
    </Container>
  )
}

export { Buttons }
