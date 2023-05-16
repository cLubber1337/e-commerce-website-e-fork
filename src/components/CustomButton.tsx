import React from "react"
type Props = {
  title: string
  onClick: () => void
  size: "-small" | "-medium" | "-large"
  border?: "-search"
  color: "-green" | "-grey"
}

export const CustomButton = ({ title, onClick, size, border, color }: Props) => {
  return (
    <button onClick={onClick} className={`button button${size} button${border} button${color}`}>
      {title}
    </button>
  )
}
