import login_Reducer from './login';
import register_Reducer from './Register';
import item_Reducer from './List_item';
import PackagesReducer from './PackagesReducer'
import account_Reducer from './account_Reducer'
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    item_Reducer,
  login_Reducer,
  register_Reducer,
  PackagesReducer,
  account_Reducer
});

export default rootReducer;
