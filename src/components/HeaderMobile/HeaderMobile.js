import React from 'react'
import './HeaderMobile.scss'
import { Logo } from "components";
import Close from "assets/icons/ic_menu_mobile_close.svg";
import Open from "assets/icons/ic_menu_mobile.svg";


const HeaderMobile = ({ onToggleMenuMobile, isOpenMenu }) => {
  return (
    <div className='header-mobile__container'>
      <Logo className={'logo'} />
      <div>
        <img
          onClick={(e) => onToggleMenuMobile(e)}
          src={!isOpenMenu ? Open : Close}
          alt="open-close menu"
        />
      </div>
    </div>
  )
}

export default HeaderMobile
