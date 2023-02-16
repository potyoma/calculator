import Button from "./button"

type Props = {
  onAdd: (digit: string) => void
}

const Numbers: React.FC<Props> = ({ onAdd }) => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-3">
      <div>
        <Button onClick={() => onAdd("7")}>7</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("8")}>8</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("9")}>9</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("4")}>4</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("5")}>5</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("6")}>6</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("1")}>1</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("2")}>2</Button>
      </div>
      <div>
        <Button onClick={() => onAdd("3")}>3</Button>
      </div>
      <div className="col-span-2">
        <Button onClick={() => onAdd("0")}>0</Button>
      </div>
      <div>
        <Button onClick={() => onAdd(".")}>.</Button>
      </div>
    </div>
  )
}

export { Numbers }
