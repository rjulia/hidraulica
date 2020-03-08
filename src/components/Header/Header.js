import _ from 'lodash'
import React, { useState } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import { Logo, MenuFlag } from "../index";
import CatFlag from 'assets/icons/ic_flag_catalonia.svg'
import EspFlag from 'assets/icons/ic_flag_spain.svg'
import './Header.scss'
import { NavLink as Link } from "react-router-dom";
import Arrow from 'assets/icons/ic_arrow_down_blue.svg'
const Header = ({ handelMenu, isOpen }) => {
  console.log(isOpen)
  const { i18n, t } = useTranslation();
  const [isMenuFlagOpen, setisMenuFlagOpen] = useState(false)
  const changeLanguage = lng => {
    setisMenuFlagOpen(!isMenuFlagOpen)
    i18n.changeLanguage(lng);
  };
  const flag = () => {
    if (_.get(i18n, 'languages[1]') === 'ca') {
      return CatFlag
    } else {
      return EspFlag
    }
  }

  const handelMenuFlag = () => {
    setisMenuFlagOpen(!isMenuFlagOpen)
  }
  const handelMenuEvent = (e) => {
    console.log(isOpen)
    if (isOpen) {
      handelMenu()
    }
  }

  return (
    <div className="container__fluid">
      <div className="container container_menu">
        <Logo />
        <ul className="menu">
          <li>
            <Link exact to="/">{t('menu.home')}</Link>
          </li>
          <li>
            <Link
              onClick={(e) => handelMenuEvent(e)}
              to="/empresa">{t('menu.company')}</Link>
          </li>
          <li>
            <Link to='services' onClick={() => handelMenu()}>{t('menu.service')}</Link>
          </li>
          <li>
            <Link to="/projectos">{t('menu.project')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('menu.contact')}</Link>
          </li>
        </ul>
        <ul className="menu--flags" onClick={() => handelMenuFlag()}>
          <img src={flag()} alt="flag" />
          <img src={Arrow} alt="arrow" />

          {
            isMenuFlagOpen && (<MenuFlag changeLanguage={changeLanguage} />)
          }

        </ul>
      </div>
    </div>
  )
}


export default withTranslation()(Header)
