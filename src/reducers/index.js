import {combineReducers} from 'redux';
import reducerOne from './reducer-1';
import reducerTwo from './reducer-2';

export default combineReducers({
    reducerOne,
    reducerTwo
})
