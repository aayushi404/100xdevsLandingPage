import * as React from "react"

type buttonProps = {
    className?: string,
    children:React.ReactNode
}
const Button = ({
    className,
    children
}:buttonProps) => {
  return (
      <button className={`${className} cursor-pointer bg-secondary/40 h-[60px] border-[0.5px] border-gray-800 rounded-3xl px-4 py-2 text-sm hover:border-gray-500`}>{ children}</button>
  )
}

export default Button