import { Box } from "@mui/material"

type Props = {
  current: string
  expression: string[]
}

const Display: React.FC<Props> = ({ current, expression }) => {
  return (
    <Box
      sx={{
        m: "10%",
        width: "90%",
        display: "grid",
        gridTemplateRows: "repeat(2, 1fr)",
      }}
    >
      <div>{expression.join(" ")}</div>
      <div>{current}</div>
    </Box>
  )
}

export { Display }
