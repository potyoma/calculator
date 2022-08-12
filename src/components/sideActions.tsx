import { Button, Grid } from "@mui/material"

type Props = {
  onAdd: (sign: string) => void
  onEqual: () => void
}

const SideActions: React.FC<Props> = ({ onAdd, onEqual }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      spacing={2}
      ml={1}
      columns={{ sm: 12 }}
    >
      <Grid item>
        <Button
          color="info"
          id="multiply"
          onClick={() => onAdd("x")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          x
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="info"
          id="subtract"
          onClick={() => onAdd("-")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          -
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="info"
          id="add"
          onClick={() => onAdd("+")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          +
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          id="equals"
          onClick={() => onEqual()}
          size="large"
          variant="contained"
          fullWidth={true}
          sx={{
            height: "10vh",
          }}
        >
          =
        </Button>
      </Grid>
    </Grid>
  )
}

export { SideActions }
