import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Badges from './../pages/Badges';  
import BadgeNew from './../pages/BadgeNew';
import BadgeEdit from './../pages/BadgeEdit';
import BadgeDetails from './../pages/BadgeDetails';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Personajes from '../pages/Personajes';

function App () { 
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId" component={BadgeDetails} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/personajes" component={Personajes} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
