import React, { Suspense, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header, Footer, MenuServices } from "./components";
import { Home, Projects, Services, Company, Contact, Service } from "./pages";
import { withTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App({ t, i18n }) {

  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const handelMenu = () => {
    if (isOpenMenu) {
      document.body.classList.add('show');
    } else {
      document.body.classList.remove('show');
    }
    setIsOpenMenu(!isOpenMenu)
  }
  console.log(setIsOpenMenu)
  return (

    <Router>
      <Header handelMenu={handelMenu} isOpen={isOpenMenu} />
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/empresa" component={Company} />
          <Route exact path="/servicios" component={Services} />
          <Route exact path="/servicios/:slug" component={Service} />
          <Route exact path="/projectos" component={() => <Projects i18n={i18n} />} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Suspense>
      <Footer />
      <MenuServices handelMenu={handelMenu} isOpen={isOpenMenu} />
    </Router>

  );
}

export default withTranslation()(App);
