// third-party
import {combineReducers} from "redux";

// project import
import menu from "./menu";
import loginReducer from "../../pages/authentication/auth-forms/reducer/loginReducer";
import customizationReducer from "./customizationReducer";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  loginReducer,
  customization: customizationReducer
});

export default reducers;
