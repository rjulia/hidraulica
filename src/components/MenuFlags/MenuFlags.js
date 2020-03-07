import React from 'react'
import "./ManuFlags.scss";
import CatFlag from 'assets/icons/ic_flag_catalonia.svg'
import EspFlag from 'assets/icons/ic_flag_spain.svg'
import Arrow from 'assets/icons/ic_arrow_down_blue.svg'

const MenuFlags = ({ changeLanguage }) => {
  return (
    <div className="menuFlag__container">
      <div onClick={() => changeLanguage('ca-ES')} className="menuFlag__box">
        <div>
          <img src={CatFlag} alt="cat" />
          <p>CAT</p>
        </div>
        <img src={Arrow} alt="" />
      </div>
      <div onClick={() => changeLanguage('es-ES')} className="menuFlag__box">
        <div>
          <img src={EspFlag} alt="cat" />
          <p>ESP</p>
        </div>
      </div>
    </div>
  )
}

export default MenuFlags
