import {
    combineReducers
} from 'redux'
import index from './reducers/index';
import auth from './reducers/auth';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

let reducer = combineReducers({
    auth,
    index,
})

export default reducer;