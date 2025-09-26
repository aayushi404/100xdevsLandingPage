import * as React from "react"

type linkProps = {
    className?: string,
    children:React.ReactNode
}
const Link = ({
    className,
    children
}:linkProps) => {
  return (
      <a className={`${className}  cursor-pointer hover:underline hover:text-blue-500`}>{ children}</a>
  )
}

export default Link