import _ from 'lodash'
import React from 'react'
import { withTranslation, useTranslation } from 'react-i18next';
import './Footer.scss'
import { Logo } from "components";
import { NavLink as Link } from "react-router-dom";


const Footer = ({ i18n }) => {
  const { t } = useTranslation();
  const year = _.toString(new Date().getFullYear())

  return (
    <div className="footer__container">
      <div className='footer__box container'>
        <div className="row">
          <div className='col-md-6 col-12'>
            <Logo className='logo_footer' dark />
            <div className="footer__address d-none d-md-block">
              <p className="footer__address--text">Pol. Ind. Can Verdalet · C/A Nau A2 · 08490 Tordera · Barcelona  <br />
                Tel: 93 764 20 82 - Fax: 93 764 20 78</p>
              <p>{t('home.footer.copyright', { year })}</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <nav className="menu__footer">
              <h4>{t('home.footer.menu_button.title')}</h4>
              <ul >
                <li>
                  <Link exact to="/">{t('home.footer.menu_button.home')}</Link>
                </li>
                <li>
                  <Link to="/empresa">{t('home.footer.menu_button.company')}</Link>
                </li>
                <li>
                  <Link to="/servicios">{t('home.footer.menu_button.services')}</Link>
                </li>
                <li>
                  <Link to="/projectos">{t('home.footer.menu_button.projects')}</Link>
                </li>
                <li>
                  <Link to="/contact">{t('home.footer.menu_button.contact')}</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-6 col-md-3'>
            <nav className="menu__footer">
              <h4>{t('home.footer.legal_button.title')}</h4>
              <ul >
                <li>
                  <Link to="/terms">{t('home.footer.legal_button.terms_conditions')}</Link>
                </li>
                <li>
                  <Link to="/privacity">{t('home.footer.legal_button.policy')}</Link>
                </li>
                <li>
                  <Link to="/cookies">{t('home.footer.legal_button.cookies')}</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__address p-3 d-sm-none">
            <p className="footer__address--text">Pol. Ind. Can Verdalet · C/A Nau A2 · 08490 Tordera · Barcelona  <br />
                Tel: 93 764 20 82 - Fax: 93 764 20 78</p>
            <p className='copyright'>{t('home.footer.copyright', { year })}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default withTranslation()(Footer)
