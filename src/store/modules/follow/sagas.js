import { toast } from 'react-toastify';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '../../../services/api';

import {
	getFollowersListSuccess,
	getFollowersListFailure,
	getFollowingListSuccess,
	getFollowingListFailure,
} from './actions';

export function* getFollowersList({ payload }) {
	const state = yield select();
	const { profile } = state.user;
	const { user_id = profile.name } = payload;

	try {
		const response = yield call(api.get, `following?following=${user_id}`);

		yield put(getFollowersListSuccess(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔');
		yield put(getFollowersListFailure());
	}
}

export function* getFollowingList({ payload }) {
	const state = yield select();
	const { profile } = state.user;
	const { user_id = profile.name } = payload;

	try {
		const response = yield call(api.get, `following?user_id=${user_id}`);

		yield put(getFollowingListSuccess(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔');
		yield put(getFollowingListFailure());
	}
}

export default all([
	takeLatest('@follow/GET_FOLLOWERS_LIST_REQUEST', getFollowersList),
	takeLatest('@follow/GET_FOLLOWING_LIST_REQUEST', getFollowingList),
]);
