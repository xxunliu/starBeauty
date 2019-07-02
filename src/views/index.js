import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Film = Loadable({
  loader: () => import('./film'),
  loading: () => <div>加载中</div>
});
const Cinema = Loadable({
  loader: () => import('./cinema'),
  loading: () => <div>加载中</div>
});
const Mine = Loadable({
  loader: () => import('./mine'),
  loading: () => <div>加载中</div>
});
const Navbar = Loadable({
  loader: () => import('./navbar'),
  loading: () => <div>加载中</div>
});

function Movie() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/film" component={Film} />
        <Route path="/cinema" component={Cinema} />
        <Route path="/mine" component={Mine} />
        <Redirect to="/film" />
      </Switch>
      <Navbar />
    </React.Fragment>
  );
}

Movie.propTypes = {
};

export default connect()(Movie);