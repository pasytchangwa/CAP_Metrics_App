import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import companiesReducer from './companies/index';
import stockmarketReducer from './markets';

const reducers = combineReducers({ stockmarketReducer, companiesReducer });

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
