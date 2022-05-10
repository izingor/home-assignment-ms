import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { photoReducer } from './reducers/photoReducer';



const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    photoModule: photoReducer
});


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
