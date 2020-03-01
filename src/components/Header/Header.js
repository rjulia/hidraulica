import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import { Logo } from "../index";
import './Header.scss'
import {
  NavLink as Link
} from "react-router-dom";
const Header = () => {

  const { i18n, t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="container__fluid">
      <div className="container container_menu">
        <Logo />
        <ul className="menu">
          <li>
            <Link exact to="/">{t('menu.home')}</Link>
          </li>
          <li>
            <Link to="/empresa">{t('menu.company')}</Link>
          </li>
          <li>
            <Link to="/servicios">{t('menu.service')}</Link>
          </li>
          <li>
            <Link to="/projectos">{t('menu.project')}</Link>
          </li>
          <li>
            <Link to="/contact">{t('menu.contact')}</Link>
          </li>
        </ul>
        <ul>
          <li onClick={() => changeLanguage('es-ES')}>ES</li>
          <li onClick={() => changeLanguage('ca-ES')}>CAT</li>
        </ul>
      </div>
    </div>
  )
}


export default withTranslation()(Header)
