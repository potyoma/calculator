import Button from "./button"

type Props = {
  onAdd: (action: string) => void
  onClear: () => void
}

const UpperActions: React.FC<Props> = ({ onClear, onAdd }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <Button color="bg-red-600" onClick={() => onClear()}>
          AC
        </Button>
      </div>
      <div>
        <Button color="bg-blue-400" onClick={() => onAdd("/")}>
          /
        </Button>
      </div>
    </div>
  )
}

export { UpperActions }
