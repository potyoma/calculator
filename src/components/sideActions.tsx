import Button from "./button"

type Props = {
  onAdd: (sign: string) => void
  onEqual: () => void
}

const SideActions: React.FC<Props> = ({ onAdd, onEqual }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-5 gap-3">
      <div>
        <Button color="bg-blue-400" onClick={() => onAdd("x")}>
          x
        </Button>
      </div>
      <div>
        <Button color="bg-blue-400" onClick={() => onAdd("-")}>
          -
        </Button>
      </div>
      <div>
        <Button color="bg-blue-400" onClick={() => onAdd("+")}>
          +
        </Button>
      </div>
      <div className="row-span-2">
        <Button color="bg-purple-500" onClick={() => onEqual()}>
          =
        </Button>
      </div>
    </div>
  )
}

export { SideActions }
