import { createContext } from "react";
const MenuContext = createContext({
  services: [],
  getServicesCtx: (services) => { },
  isOpen: false,
  toggleMenu: () => { }
})


export default MenuContext
