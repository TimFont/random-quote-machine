import React, { Component } from 'react';

export default class QuoteBox extends Component {
    render() {
        const encodeQuote = encodeURIComponent(`"${this.props.quote.quote}" - ${this.props.quote.author}`);
        const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeQuote}`;
        return (
            <div id="quote-box" className="col-xs-12 col-md-6 align-self-center p-5 bg-light"  >
                <blockquote className="blockquote">
                    <p id="text" className="mb-0">{this.props.quote.quote}</p>
                    <footer className="blockquote-footer"><cite id="author" title="Source Title">{this.props.quote.author}</cite></footer>
                </blockquote>
                <div className="d-flex mt-5">
                    <a role="button" href={tweetLink} id="tweet-quote" className="btn btn-primary mr-2 p-2" target="_blank" rel="noopener noreferrer">Tweet</a>
                    <button type="button" className="btn btn-primary mr-auto p-2">Tumblr</button>
                    <button type="button" id="new-quote" onClick={this.props.getNewQuote} className="btn btn-primary align-self-end p-2">New quote</button>
                </div>
            </div>
        );
    }
}


