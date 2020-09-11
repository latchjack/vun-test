import React from 'react';
import 'bulma'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Scan from './components/Scan'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/scan" component={Scan} />
          </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
