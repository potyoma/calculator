type Props = {
  current: string
  expression: string[]
}

const Display: React.FC<Props> = ({ current, expression }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-md bg-slate-200">
      <div>
        <span className="text-3xl">{expression.join("")}</span>
      </div>
      <div>
        <span className="text-3xl" id="display">
          {current}
        </span>
      </div>
    </div>
  )
}

export { Display }
