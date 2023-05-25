import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconName } from "@fortawesome/fontawesome-common-types"
import { IconPrefix } from "@fortawesome/fontawesome-svg-core"
import { faTrash, faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(faTrash, faCartPlus)

type Props = {
  title: string
  onClick: () => void
  size: "-small" | "-medium" | "-large"
  purpose?: "-search" | "-cart"
  color: "-green" | "-grey"
  icon?: [IconPrefix, IconName]
}

export const CustomButton = ({ title, onClick, size, purpose, color, icon }: Props) => {
  return (
    <button onClick={onClick} className={`button button${size} button${purpose} button${color}`}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </button>
  )
}
