import { Box, Grid } from "@mui/material"

type Props = {
  current: string
  expression: string[]
}

const Display: React.FC<Props> = ({ current, expression }) => {
  return (
    <Grid container direction="column" mb={3} spacing={3}>
      <Grid item>
        <Box sx={{ fontSize: "4vh" }}>{expression.join("")}</Box>
      </Grid>
      <Grid item>
        <Box id="display" sx={{ fontSize: "4vh" }}>
          {current}
        </Box>
      </Grid>
    </Grid>
  )
}

export { Display }
