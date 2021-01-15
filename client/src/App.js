import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pets from './pages/Pets';
import About from './pages/About';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pets' component={Pets} />
          <Route exact path='/about' component={About} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
