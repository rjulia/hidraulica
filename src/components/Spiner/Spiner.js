import React from 'react'
import './Spiner.scss'
import Logo from 'assets/icons/ic_impulsor_white.svg'

const Spiner = () => {
  return (
    <div className="container__spinner">
      <span><img src={Logo} alt="" /></span>
    </div>
  )
}

export default Spiner
