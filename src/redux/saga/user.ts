import { takeEvery } from 'redux-saga/effects';
import { logIn } from 'redux/action/user';

export function* watchForLogIn() {
	yield takeEvery(logIn, function*({ payload: { username, password } }) {
		console.log('HI');
		yield console.log({ username, password });
	});
}
