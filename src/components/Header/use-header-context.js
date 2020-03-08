import { useContext } from "react";
import MenuContext from "./Header-context";

const useMenu = () => {
  const context = useContext(MenuContext)
  return context
}

export default useMenu