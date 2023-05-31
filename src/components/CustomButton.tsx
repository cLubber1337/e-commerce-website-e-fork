import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconName } from "@fortawesome/fontawesome-common-types"
import { IconPrefix } from "@fortawesome/fontawesome-svg-core"
import { faTrash, faCartPlus, faFolder, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
library.add(faTrash, faCartPlus, faCartArrowDown, faFolder)

type Props = {
  title: string
  onClick: () => void
  size: "-small" | "-medium" | "-large"
  purpose?: "-search" | "-cart"
  color: "-base-color" | "-grey" | "-green"
  icon?: [IconPrefix, IconName]
  style?: React.CSSProperties
}

export const CustomButton = ({ title, onClick, size, purpose, color, icon, style }: Props) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`button button${size} button${purpose} button${color}`}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </button>
  )
}
