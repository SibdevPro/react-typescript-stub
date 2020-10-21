import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from 'views/About';
import Home from 'views/Home';
import Topics from 'views/Topics';
import { Paths } from './constants';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Paths.home} component={Home} />
        <Route exact path={Paths.about} component={About} />
        <Route exact path={Paths.topics} component={Topics} />
        <Route component={() => <>404: Page not found</>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
