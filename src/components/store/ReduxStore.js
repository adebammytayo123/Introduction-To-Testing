import {createStore} from 'redux';
import {reducer} from './reduxReducer';

const store = createStore(reducer)

export {store}