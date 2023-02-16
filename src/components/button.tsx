import clsx from "clsx"

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: string | JSX.Element | JSX.Element[]
  color?: string
}

const Button: React.FC<Props> = ({ onClick, children, color }) => (
  <button
    className={clsx("text-white h-full w-full rounded-md p-2", color || "bg-blue-500")}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
