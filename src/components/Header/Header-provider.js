import React, { useState } from 'react'
import HeaderContext from "./Header-context";

function HeaderProvider({ children }) {

  const [isOpen, setisOpen] = useState(false)
  const [services, setServices] = useState(false)


  const toggleMenu = () => {
    setisOpen(!isOpen)
  }
  const getServicesCtx = (services) => {
    setServices(services)
  }
  const contextValue = {
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
