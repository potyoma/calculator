import { Button, Grid } from "@mui/material"

type Props = {
  onAdd: (digit: string) => void
}

const Numbers: React.FC<Props> = ({ onAdd }) => {
  return (
    <Grid container spacing={2} columns={{ sm: 12 }}>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="seven"
          onClick={() => onAdd("7")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          7
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="eight"
          onClick={() => onAdd("8")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          8
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="nine"
          onClick={() => onAdd("9")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          9
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="four"
          onClick={() => onAdd("4")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          4
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="five"
          onClick={() => onAdd("5")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          5
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="six"
          onClick={() => onAdd("6")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          6
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="one"
          onClick={() => onAdd("1")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          1
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="two"
          onClick={() => onAdd("2")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          2
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="three"
          onClick={() => onAdd("3")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          3
        </Button>
      </Grid>
      <Grid item sm={8}>
        <Button
          color="primary"
          id="zero"
          onClick={() => onAdd("0")}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          0
        </Button>
      </Grid>
      <Grid item sm={4}>
        <Button
          color="primary"
          id="decimal"
          onClick={() => {}}
          size="large"
          variant="contained"
          fullWidth={true}
        >
          .
        </Button>
      </Grid>
    </Grid>
  )
}

export { Numbers }
