import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loginUser, fetchQuote, fetchSecretQuote } from '../actions'
import Login from './Login'
import Navbar from './Navbar'
import Quotes from './Quotes'


class App extends Component {
    render() {
        const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
        return (
            <div>
                <Navbar
                    isAuthenticated={isAuthenticated}
                    errorMessage={errorMessage}
                    dispatch={dispatch}
                />
                <div className="container">
                    <Quotes
                        onQuoteClick={() => dispatch(fetchQuote())}
                        onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
                        isAuthenticated={isAuthenticated}
                        quote={quote}
                        isSecretQuote={isSecretQuote}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { quotes, auth } = state;
    const { quote, authenticated } = quotes;
    const { isAuthenticated, errorMessage } = auth;

    return {
        quote,
        isSecretQuote: authenticated,
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapStateToProps)(App);

