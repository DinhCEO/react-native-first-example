import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState());

export default store;
