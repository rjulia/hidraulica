import { createContext } from "react";
const MenuContext = createContext({
  isOpen: false,
  toggleMenu: () => { }
})


export default MenuContext
