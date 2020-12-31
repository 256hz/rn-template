import { combineReducers } from 'redux';
import * as reducers from './reducer';

export const reducer = combineReducers(reducers);

export const rootReducer = (state, action) => reducer(state, action);
