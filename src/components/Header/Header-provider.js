import React, { useState } from 'react'
import HeaderContext from "./Header-context";

function HeaderProvider({ children }) {

  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMenuServices, setIsOpenMenuServices] = useState(false)
  const [services, setServices] = useState(false)


  const toggleMenu = (value) => {
    setIsOpen(value)
  }
  const onServicesMenu = (value) => {
    setIsOpenMenuServices(value)
  }
  const getServicesCtx = (services) => {
    setServices(services)
  }
  const contextValue = {
    isOpenMenuServices,
    onServicesMenu,
    services,
    getServicesCtx,
    isOpen,
    toggleMenu
  }
  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider
