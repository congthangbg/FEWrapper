// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import loginReducer from '../../pages/authentication/auth-forms/reducer/loginReducer';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu,loginReducer });

export default reducers;
