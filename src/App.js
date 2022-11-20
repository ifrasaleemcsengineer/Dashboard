import React, { Component } from 'react';
import fire from "./components/config/fire";
import Login from './Login.js';
import './App.css';
import Dashboard from './dashboard';
import Superadmin from './components/superadmin';
import { Route } from 'react-router-dom';
// import {Routes, Route, useNavigate} from 'react-router-dom';


class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: null,
  //   };

  //   this.authListener = this.authListener.bind(this);
  // }

  // componentDidMount() {
  //   this.authListener();
  // }

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   })
  // }

  render() {
    return (
      <div >
        
         <Login /> 
       </div>

    );
  }
}

export default App;