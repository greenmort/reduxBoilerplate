import { combineReducers } from 'redux';
import valueReducer from './value_reducer';

const rootReducer = combineReducers({
    value: valueReducer
});

export default rootReducer;