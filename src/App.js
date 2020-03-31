import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './layout/Header'
import LoginStart from './components/LoginStart'
import AccountLogin from './components/AccountLogin'
import GetStarted from './components/GetStarted'
import logo from './logo.svg'
import footerwave from './footerwave.svg'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <img className="logo" src={logo} alt="logo" />
              <LoginStart />
              <img className="footerwave" src={footerwave} alt="footer" />
            </React.Fragment>
          )} />
          <Route path="/GetStarted" component={GetStarted} />
          <Route path="/AccountLogin" component={AccountLogin} />
          
        </div>
      </Router>
     
    )
  }
}

export default App
