import React from "react"
import { images } from "utils/images"

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <img src={images.loading.src} alt={images.loading.alt} />
    </div>
  )
}
