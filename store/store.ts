import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares:any = [ applyMiddleware(thunkMiddleware)] 
const Store =  createStore(reducers,composeWithDevTools(
   ))

//const Store = createStore<reducers.All>(reducers, devtools);
export default Store;