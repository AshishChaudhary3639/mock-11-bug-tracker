import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import thunk from "redux-thunk"

import {reducer as appReducer} from "../redux/appReducer/reducer"
import {reducer as authReducer} from "../redux/authReducer/reducer"
const rootReducer=combineReducers({appReducer,authReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;

const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export {store}