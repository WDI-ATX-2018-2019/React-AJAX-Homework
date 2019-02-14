import React, { Component } from 'react';
import Login from './Login/Login'
import MainContainer from './MainContainer/MainContainer'
import './App.css';

export default class App extends Component {
  state = {
    logged: false,
    username: '',
  }

  login = (username) => {
    
    //validate the user name else where!!!  For now, an extremely simple one
    if (username !== '') {
    this.setState({
      logged: true,
      username: username
    })
  }

  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} /> }
      </div>
    );
  }
}


