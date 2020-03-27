import React, { Suspense, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HeaderProvider from "components/Header/Header-provider";
import { Header, Footer, MenuServices, MenuMobile, HeaderMobile } from "./components";
import { Home, Projects, ServicesPages, Company, Contact, Service } from "./pages";
import { withTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App({ t, i18n }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const toggleMenuMobile = (e) => {
    e.preventDefault()
    if (!isOpenMenu) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open');
    }
    setIsOpenMenu(!isOpenMenu)
  }

  const changeLanguage = (language) => {

  }

  return (
    <HeaderProvider>
      <Router>
        <HeaderMobile isOpenMenu={isOpenMenu} onToggleMenuMobile={toggleMenuMobile} />
        <MenuMobile isOpenMenu={isOpenMenu} changeLanguage={changeLanguage} onToggleMenuMobile={toggleMenuMobile} />
        <Header />
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/empresa" component={Company} />
            <Route exact path="/servicios/:slug" component={Service} />
            <Route exact path="/projectos" component={() => <Projects i18n={i18n} />} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Suspense>
        <Footer />
        <MenuServices />
      </Router>
    </HeaderProvider>

  );
}

export default withTranslation()(App);
