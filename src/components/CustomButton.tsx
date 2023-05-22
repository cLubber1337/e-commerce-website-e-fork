import React from "react"
type Props = {
  title: string
  onClick: () => void
  size: "-small" | "-medium" | "-large"
  purpose?: "-search" | "-cart"
  color: "-green" | "-grey"
}

export const CustomButton = ({ title, onClick, size, purpose, color }: Props) => {
  return (
    <button onClick={onClick} className={`button button${size} button${purpose} button${color}`}>
      {title}
    </button>
  )
}
