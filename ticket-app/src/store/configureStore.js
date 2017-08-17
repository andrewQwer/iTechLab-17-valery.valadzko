import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../RootReducer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' // <-- добавили redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk, logger)
        ));

    return store
}