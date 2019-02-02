import React, { Component } from 'react';
import logo from './logo.svg';
import QuoteBox from './components/QuoteBox';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: {},
      url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      allQuotes: null
    }

    this.fetchQuotes = this.fetchQuotes.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount(){
    this.getNewQuote();
  }

  async fetchQuotes(){
    const response = await fetch(this.state.url, {
      method:'get'
    });

    const data = await response.json();
    //this.state.allQuotes = [...data.quotes];
    this.setState(state => ({allQuotes : [...data.quotes]}));

  }

  async getNewQuote(){
    if(!this.state.allQuotes){
      await this.fetchQuotes();
    }
    const quotesLength = this.state.allQuotes.length
    const randomIndex = Math.floor((Math.random() * quotesLength));
    const randomQuote = this.state.allQuotes[randomIndex];
    this.setState( state => ({quote : randomQuote}));

  }

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
          <div className="row justify-content-center h-100">
            <QuoteBox getNewQuote={this.getNewQuote} quote={this.state.quote} />
          </div>
        </div>
      </div>
        );
      }
    }
    
    export default App;
