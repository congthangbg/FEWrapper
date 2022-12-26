import { takeLatest, call, put } from 'redux-saga/effects';
import { login, loginFailed, loginSuccess } from './loginReducer';
import request from 'utils/request';
import { MessageCode, REQUEST_METHOD } from 'utils/constants';


// eslint-disable-next-line require-yield
export function* callLogin(action) {
	
			const url = `http://localhost:9005/integrated/login`;
			try {
				const response = yield call(request, url, {
					method: REQUEST_METHOD.POST,
					body: JSON.stringify(action.payload),
				});
				if (response.status == MessageCode.OK) {
					yield put(loginSuccess(response));
				}else{
					yield put(loginFailed(response));
				}
			} catch (error) {
				yield put(loginFailed(error));
			}
}
export default function* loginSaga() {
  yield takeLatest(login.toString(), callLogin);

}
