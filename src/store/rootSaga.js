import loginSaga from 'pages/authentication/auth-forms/reducer/loginSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([loginSaga()]);
}