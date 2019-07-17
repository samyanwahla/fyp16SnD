import { createStore } from 'redux';
import rootReducers from '../reducers/index';

// Creation of Store
const store = createStore(rootReducers);
export default store;
