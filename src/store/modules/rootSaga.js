import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import feed from './feed/sagas';
import post from './post/sagas';
import comment from './comment/sagas';

export default function* rootSaga() {
	return yield all([auth, user, feed, post, comment]);
}
