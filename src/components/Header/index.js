import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next';

import {
  Link
} from "react-router-dom";
const Header = () => {

  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      <ul>
        <li onClick={() => changeLanguage('es-ES')}>
          ES
      </li>
        <li onClick={() => changeLanguage('ca-ES')}>

          CAT
      </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Inici</Link>
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
    </div>
  )
}


export default withTranslation()(Header)
