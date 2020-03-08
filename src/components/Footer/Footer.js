import _ from 'lodash'
import React from 'react'
import { Grid, Container } from '@material-ui/core';
import { withTranslation, useTranslation } from 'react-i18next';
import './Footer.scss'
import { Logo } from "components";
import { NavLink as Link } from "react-router-dom";


const Footer = ({ i18n }) => {
  const { t } = useTranslation();
  const year = _.toString(new Date().getFullYear())
  console.log(year)
  return (
    <div className="footer__container">
      <Container>
        <Grid
          container
          className="footer__box"
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}>

          <Grid
            container
            style={{ height: '100%' }}
            direction="column"
            justify="space-between"
            alignItems="flex-start"
            item xs={6} sm={6}>
            <Logo dark />
            <div className="footer__address">
              <p className="footer__address--text">Pol. Ind. Can Verdalet · C/A Nau A2 · 08490 Tordera · Barcelona  <br />
                Tel: 93 764 20 82 - Fax: 93 764 20 78</p>
              <p>{t('home.footer.copyright', { year })}</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={3} alignItems="flex-start">
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
          </Grid>
          <Grid item xs={6} sm={3} alignItems="flex-start">
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
          </Grid>
        </Grid>
      </Container>
    </div>

  )
}

export default withTranslation()(Footer)
