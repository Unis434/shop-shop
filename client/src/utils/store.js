import { reducer as rootReducer } from './reducers';
import { createStore } from 'redux';

export const store = createStore(rootReducer);