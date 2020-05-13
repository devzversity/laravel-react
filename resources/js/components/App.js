import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Example from './Example';
import Header from './Header';
import ReactDOM from 'react-dom';

export default class App extends Component {
    render() {
        return (
        <Router>

            <Link to="/">test</Link>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Example} />
        <Route exact path="/Header" component={Header} />

      </Switch>
        
      </div>
      </Router>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}