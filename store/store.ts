import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index'

const Store =  createStore(reducers, applyMiddleware(thunkMiddleware))

//const Store = createStore<reducers.All>(reducers, devtools);
export default Store;