import React, { useState } from 'react'
import HeaderContext from "./Header-context";

function HeaderProvider({ children }) {

  const [isOpen, setisOpen] = useState(false)

  const toggleMenu = () => {
    setisOpen(!isOpen)
  }
  const contextValue = {
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
