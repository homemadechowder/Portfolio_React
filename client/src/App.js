import React ,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />     
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
