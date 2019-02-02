import React, { Component } from 'react';

export default class QuoteBox extends Component {
    render() {
        return (
            <div className="col-xs-12 col-md-6 align-self-center p-5 bg-light"  >
                <blockquote className="blockquote">
                    <p className="mb-0">{this.props.quote.quote}</p>
                    <footer className="blockquote-footer"><cite title="Source Title">{this.props.quote.author}</cite></footer>
                </blockquote>
                <div className="d-flex mt-5">
                    <button type="button" className="btn btn-primary mr-2 p-2">Tweet</button>
                    <button type="button" className="btn btn-primary mr-auto p-2">Tumblr</button>
                    <button type="button" onClick={this.props.getNewQuote} className="btn btn-primary align-self-end p-2">New quote</button>
                </div>
            </div>
        );
    }
}


