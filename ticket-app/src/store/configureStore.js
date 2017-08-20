import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../RootReducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    const logger = createLogger();
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk, logger)
        ));
}