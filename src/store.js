import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import risklevel from './reducers/main'
import resp from './reducers/responsive'
import userPort from './reducers/userPortfolio'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(history, initialState) {

    const reducer = combineReducers({
        resp,
        risklevel,
        userPort,
        routing: routerReducer
    })
    
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                routerMiddleware(history)
            )
        )
    )

    return store
}
