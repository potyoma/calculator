import { Button, Grid } from "@mui/material"

type Props = {
  onAdd: (action: string) => void
  onClear: () => void
}

const UpperActions: React.FC<Props> = ({ onClear, onAdd }) => {
  return (
    <Grid container marginBottom={2} spacing={2} columns={{ sm: 12 }}>
      <Grid item sm={8}>
        <Button
          color="primary"
          id="clear"
          onClick={() => onClear()}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          AC
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="divide"
          onClick={() => onAdd("/")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          /
        </Button>
      </Grid>
    </Grid>
  )
}

export { UpperActions }
