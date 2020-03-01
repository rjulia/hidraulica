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



function App({ t, i18n }) {
  return (

    <Router>
      <Header />
      <Suspense fallback="loading">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/empresa" component={Company} />
          <Route path="/servicios" component={Services} />
          <Route path="/projectos" component={() => <Projects i18n={i18n} />} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>

  );
}

export default withTranslation()(App);
