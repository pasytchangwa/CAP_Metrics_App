import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAllMarkets } from './store/markets';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMarkets());
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
