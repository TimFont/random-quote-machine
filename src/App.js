import React, { Component } from 'react';
import logo from './logo.svg';
import QuoteBox from './components/QuoteBox';


class App extends Component {
  render() {
    return (
      <div className="App" 
           style={ 
             {
               height:'100vh',
               backgroundColor: '#334f4b'
              } 
        }>
        <nav className="navbar navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
              Random Quote Machine
          </a>
        </nav>
        <div className="container-fluid h-100" >
          <div class="row justify-content-center h-100">
            <QuoteBox />
          </div>
        </div>
        
      </div>
        );
      }
    }
    
    export default App;
