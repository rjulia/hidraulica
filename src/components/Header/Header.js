import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import { Logo, MenuFlag } from "../index";
import CatFlag from 'assets/icons/ic_flag_catalonia.svg'
import EspFlag from 'assets/icons/ic_flag_spain.svg'
import './Header.scss'
import { NavLink as Link, useLocation, } from "react-router-dom";
import Arrow from 'assets/icons/ic_arrow_down_blue.svg'
import useMenu from './use-header-context';


const Header = (props) => {
  let location = useLocation()
  const [isInServices, setIsInServices] = useState(false)

  const { i18n, t } = useTranslation();
  const [isMenuFlagOpen, setisMenuFlagOpen] = useState(false)


  const { toggleMenu, isOpen, isOpenMenuServices } = useMenu()
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
  useEffect(() => {
    if (_.startsWith(location.pathname, '/servicios')) {

      setIsInServices(true)
    } else {
      setIsInServices(false)

    }
  }, [location])

  const handelMenuEvent = () => {
    if (isOpen) {
      toggleMenu()
    }
  }

  const handelLeave = () => {
    console.log(isOpenMenuServices)
    setTimeout(() => {
      if (!isOpenMenuServices) {

        toggleMenu(false)
      }
    }, 800);
  }

  return (
    <div className="container__fluid">
      <div className="container container_menu">
        <Link
          onClick={() => handelMenuEvent()}
          exact to="/">    <Logo />
        </Link>

        <ul className="menu">
          <li>
            <Link
              onClick={() => handelMenuEvent()}
              exact to="/">{t('menu.home')}</Link>
          </li>
          <li>
            <Link
              onClick={() => handelMenuEvent()}
              to="/empresa">{t('menu.company')}</Link>
          </li>
          <li>
            <div
              onMouseEnter={() => toggleMenu(true)}
              onMouseLeave={() => handelLeave()}
              className={isInServices ? "active pointer" : 'pointer'}>
              {t('menu.service')}
            </div>
          </li>
          <li>
            <Link onClick={() => handelMenuEvent()}
              to="/projectos">{t('menu.project')}</Link>
          </li>
          <li>
            <Link onClick={() => handelMenuEvent()}
              to="/contact">{t('menu.contact')}</Link>
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
