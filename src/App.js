import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Coffees from './components/Coffees';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Homepage />
        <Coffees />
      </div>
    </Router>
  );
}
export default App;
