import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import LinkForm from './Components/LinkForm'
import Header from './Components/Header'
import Admin from './Components/Admin'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
            <Route exact path="/" component={LinkForm} />
            <Route exact path="/admin" component={Admin} />
            <Route render={()=> <h1>404</h1>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
