import { createContext } from "react";
const MenuContext = createContext({
  services: [],
  getServicesCtx: (services) => { },
  isOpen: false,
  toggleMenu: () => { },
  onServicesMenu: () => { }
})


export default MenuContext
