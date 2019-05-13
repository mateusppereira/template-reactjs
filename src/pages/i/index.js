import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from 'routes/history';
import Main from './components/main';

const I = () => (
  <Router history={history}>
    <>
      <Header />
      <Switch>
        <Route exact path="/i/" render={() => <Redirect to="/i/main" />} />
        <Route path="/i/main" component={Main} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default I;
