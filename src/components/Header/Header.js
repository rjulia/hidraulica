import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import { Logo } from "../index";
import './Header.scss'
import {
  NavLink as Link
} from "react-router-dom";
const Header = () => {

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="container__fluid">
      <div className="container container_menu">


        <Logo />

        <ul className="menu">
          <li>
            <Link exact to="/">Inici</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/servicios">Services</Link>
          </li>
          <li>
            <Link to="/projectos">Projectes</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
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
