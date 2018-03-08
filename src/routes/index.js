import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetailPage from './pages/WorkDetailPage';
import Contact from './pages/Contact';

// Css
import '../Assets/css/styles.min.css';
import '../Assets/css/custom.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/work" component={Work}/>
      <Route exact path="/contact" component={Contact}/>
      <Route path="/work/:id" component={WorkDetailPage} />
    </div>
  </Router>
);
