import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  ROUTE_HOME,
  ROUTE_SASS_ONLY,
  ROUTE_STYLED_COMP,
} from '../constants/routeNames';

import Header from './Header';

import Home from './Home';
import SassOnly from './SassOnly';
import StyledComp from './StyledComp';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path={ROUTE_STYLED_COMP} component={StyledComp} />
          <Route path={ROUTE_SASS_ONLY} component={SassOnly} />
          <Route path={ROUTE_HOME} component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
