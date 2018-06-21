import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = function () {
  return <div>Loading...</div>
};

const App = Loadable({
  loader: () => import ('../pages/App/App'),
  loading: Loading
});

const Index = Loadable({
  loader: () => import ('../pages/Index/Index'),
  loading: Loading
});

const Login = Loadable({
  loader: () => import ('../pages/Login/Login'),
  loading: Loading
});

const context = {}
const getRouter = () => (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/app" component={App}></Route>
        <Route path="/" component={Index}></Route>
      </Switch>
    </Router>
);

export default getRouter;