import React, { Suspense } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components";
import { Home, Projects, Services, Company, Contact } from "./pages";
import { withTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App({ t, i18n }) {
  return (

    <Router>
      <Header />
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/empresa" component={Company} />
          <Route exact path="/servicios" component={Services} />
          <Route exact path="/projectos" component={() => <Projects i18n={i18n} />} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>

  );
}

export default withTranslation()(App);
