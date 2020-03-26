import React from 'react'
import './HeaderMobile.scss'
import { Logo } from "components";
import Icon from "assets/icons/ic_arrow_down_black.svg";
const HeaderMobile = ({ onToggleMenuMobile }) => {
  return (
    <div className='header-mobile__container'>
      <Logo className={'logo'} />
      <img onClick={(e) => onToggleMenuMobile(e)} src={Icon} alt="" />
    </div>
  )
}

export default HeaderMobile
