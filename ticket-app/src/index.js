import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'Store/configureStore'
import App from './App'
import '../styles/app.css'
import { AppContainer } from 'react-hot-loader'

const state = configureStore();

render(
    <AppContainer><Provider store={state}>{App}</Provider></AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(
            <AppContainer><Provider store={state}>{NextApp}</Provider></AppContainer>,
            document.getElementById('root')
        );
    });
}