import { Paper } from "@mui/material"
import { Container } from "@mui/system"
import { Buttons } from "./buttons"
import { Display } from "./display"

const Panel: React.FC = () => {
  return (
    <Paper elevation={3}>
      <Container maxWidth="md">
        <Display />
        <Buttons />
      </Container>
    </Paper>
  )
}

export { Panel }
