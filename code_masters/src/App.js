import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Battle from './components/Battle'
import Main from './components/Main'

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/battle" component={Battle}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
