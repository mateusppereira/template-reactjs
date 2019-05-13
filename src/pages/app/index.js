import Footer from "components/footer";
import Header from "components/header";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import history from "routes/history";
import Main from "./components/main";

const App = () => (
  <Router history={history}>
    <>
      <Header />
      <Switch>
        <Route exact path="/app" render={() => <Redirect to="/app/main" />} />
        <Route path="/app/main" component={Main} />
      </Switch>
      <Footer />
    </>
  </Router>
);

export default App;
