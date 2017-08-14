import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' // <-- добавили redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk, logger)
        )) // <-- добавили его в цепочку перед logger'ом

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = rootReducer
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}