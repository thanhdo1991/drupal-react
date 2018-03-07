import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';

// Css
import '../Assets/css/styles.min.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/work" component={Work}/>
    </div>
  </Router>
);
