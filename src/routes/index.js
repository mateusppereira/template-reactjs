import { ConnectedRouter, push } from "connected-react-router";
import App from "pages/app";
import I from "pages/i";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { store } from "store";
import { Actions as UserActions } from "store/ducks/user";
import PrivateRoute from "./components/PrivateRoute";
import history from "./history";

class Routes extends Component {
  componentDidMount() {
    const stUser = sessionStorage.getItem("userLogged");
    if (stUser) {
      const user = JSON.parse(stUser);
      this.props.UserActions.setUserLogged(user);
      store.dispatch(push("/app"));
    }
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/i" />} />
          <Route path="/i" component={I} />
          <PrivateRoute path="/app" component={App} />
          <Route path="*" component={() => "Not found"} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  UserActions: bindActionCreators(UserActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
