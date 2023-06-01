import React, { useState } from "react"
import { CustomButton } from "components/CustomButton"
import { Dialog } from "@headlessui/react"
import { Navbar } from "components/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export const CatalogModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <CustomButton
        title={"Catalog of goods"}
        onClick={openModal}
        size={"-large"}
        color={"-green"}
        icon={["fas", "folder"]}
        style={{ marginBottom: "12px" }}
      />
      <Dialog open={isOpen} onClose={closeModal}>
        <Dialog.Panel className="catalog-modal">
          <Dialog.Title className="catalog-modal__footer">
            <span className="catalog-modal__footer__title">Catalog of goods</span>
            <button className="catalog-modal__footer__close-btn" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </Dialog.Title>
          <div className="catalog-modal__body">
            <Navbar handlerCloseModal={closeModal} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
