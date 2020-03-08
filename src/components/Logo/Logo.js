import React from 'react'
import "./Logo.scss"
import LogoImgWhite from 'assets/icons/ic_logo_white.svg'
import LogoImgBlack from 'assets/icons/ic_logo_black.svg'

const Logo = ({ dark }) => {

  return (
    <div>
      <img src={dark ? LogoImgBlack : LogoImgWhite} alt="" />
    </div>
  )
}

export default Logo
