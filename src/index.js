import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "react-apollo";
import ApolloClient from "apollo-boost";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({uri: 'https://api.crystallize.digital/graphql'});

const app = (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
