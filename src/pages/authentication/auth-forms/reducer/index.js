// third-party
import { combineReducers } from 'redux';

// project import
import loginReducer from './loginReducer';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({loginReducer});

export default reducers;
