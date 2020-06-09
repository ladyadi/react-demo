import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Animals from "./components/animals/Animals"

const App = withRouter(({location, history}) => {
  return (
    <div className="App-grid">
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Switch>
          <Route path="/cats" component={Animals} />
          <Route path="/dogs" component={Animals} />
        </Switch>
      </div>
      <div className="App-footer"></div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Icon name="file alternate" size="large"></Icon>
    //   </header>
    // </div>
  );
});

export default App;
