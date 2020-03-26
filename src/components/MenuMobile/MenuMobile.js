import React from 'react'
import './MenuMobile.scss'
import { NavLink as Link, useLocation, } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import CatFlag from 'assets/icons/ic_flag_catalonia.svg'
import EspFlag from 'assets/icons/ic_flag_spain.svg'
import Arrow from 'assets/icons/ic_arrow_down_blue.svg'

const MenuMobile = (i18n, changeLanguage) => {

  const toggleMenu = () => {

  }
  return (
    <div className='menu-mobile__container'>
      <div className="menu-mobile__box">
        <ul className="menu">
          <li>
            <Link exact to="/">{i18n.t('menu.home')}</Link>
          </li>
          <li>
            <Link to="/empresa">{i18n.t('menu.company')}</Link>
          </li>
          <li>
            <div
              onClick={() => toggleMenu(true)}
            >
              {i18n.t('menu.service')}
            </div>
          </li>
          <li>
            <Link to="/projectos">{i18n.t('menu.project')}</Link>
          </li>
          <li>
            <Link to="/contact">{i18n.t('menu.contact')}</Link>
          </li>
        </ul>
        <div className="menu-mobile__flags">
          <div onClick={() => changeLanguage('ca-ES')} className="menuFlag__box">

            <img src={CatFlag} alt="cat" />
            <p>CAT</p>

          </div>
          <div onClick={() => changeLanguage('es-ES')} className="menuFlag__box">

            <img src={EspFlag} alt="cat" />
            <p>ESP</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(MenuMobile)
