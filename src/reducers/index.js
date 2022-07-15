import counterReducer from './counter';
import itemsReducer from './itemS';
import currencyReducer from './currency';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    itemS: itemsReducer,
    currency: currencyReducer
});

export default allReducers;