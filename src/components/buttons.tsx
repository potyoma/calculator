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
    <div className="flex justify-center px-4">
      <div className="grid grid-cols-4 gap-3 w-60">
        <div className="col-span-3">
          <div className="grid grid-row-2 gap-3">
            <UpperActions onClear={onClear} onAdd={onDigitChange} />
            <Numbers onAdd={onDigitChange} />
          </div>
        </div>
        <div className="col-span-1">
          <SideActions onAdd={onDigitChange} onEqual={onEqual} />
        </div>
      </div>
    </div>
  )
}

export { Buttons }
