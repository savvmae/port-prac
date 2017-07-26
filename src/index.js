import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from './components/Layout';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Home from './components/Home';
import Savannah from './components/Savannah';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/" component={Savannah} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
