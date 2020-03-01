import React, { Suspense } from 'react';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components";
import { Home, Projects, Services, Company, Contact } from "./pages";
import { withTranslation } from 'react-i18next';

const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE,
});

function App({ t, i18n }) {

  return (
    <ContentfulProvider locale={i18n.language} client={contentfulClient}>
      <Router>
        <Header />
        <Suspense fallback="loading">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/empresa" component={Company} />
            <Route path="/servicios" component={Services} />
            <Route path="/projectos" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    </ContentfulProvider>
  );
}

export default withTranslation()(App);
