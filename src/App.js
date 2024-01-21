import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Coffees from './components/Coffees';
import Desserts from './components/Desserts';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Homepage />
        <Coffees />
        <Desserts />
      </div>
    </Router>
  );
}
export default App;
