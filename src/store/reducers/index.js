// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import customizationReducer from './customizationReducer';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu,
  customization: customizationReducer });


export default reducers;
