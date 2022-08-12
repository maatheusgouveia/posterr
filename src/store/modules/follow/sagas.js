import { toast } from 'react-toastify';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '../../../services/api';

import {
	getFollowersListSuccess,
	getFollowersListFailure,
	getFollowingListSuccess,
	getFollowingListFailure,
	addFollowRequest,
	removeFollowRequest,
	addFollowFailure,
	addFollowSuccess,
	removeFollowSuccess,
	removeFollowFailure,
} from './actions';

export function* getFollowersList({ payload }) {
	const state = yield select();
	const { profile } = state.user;
	const { user_id = profile.name } = payload;

	try {
		const response = yield call(api.get, `following?following=${user_id}`);

		const formatted_list = response.data.map(follow => follow.user_id);

		yield put(getFollowersListSuccess(formatted_list));
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

		const formatted_list = response.data.map(follow => follow.following);

		yield put(getFollowingListSuccess(formatted_list));
	} catch (err) {
		toast.error('Unexpected error 🤔');
		yield put(getFollowingListFailure());
	}
}

export function* toggleFollow({ payload }) {
	const state = yield select();

	const { follow_user_id } = payload;
	const { name: user_id } = state.user.profile;
	const { following_list } = state.follow;

	const user_is_following = following_list.some(id => id === follow_user_id);

	console.log('toggleFollow');

	if (user_is_following) {
		yield put(removeFollowRequest({ user_id, follow_user_id }));
	} else {
		yield put(addFollowRequest({ user_id, follow_user_id }));
	}
}

export function* addFollow({ payload }) {
	const { user_id, follow_user_id } = payload;

	const data = {
		user_id,
		following: follow_user_id,
		created_at: new Date().toISOString(),
	};

	try {
		const response = yield call(api.post, `following`, data);

		yield put(addFollowSuccess(response.data.following));
	} catch (err) {
		toast.error('Unexpected error 🤔');
		yield put(addFollowFailure());
	}
}

export function* removeFollow({ payload }) {
	const { user_id, follow_user_id } = payload;
	console.log('removeFollow');

	try {
		const response = yield call(
			api.get,
			`following?user_id=${user_id}&following=${follow_user_id}`
		);

		const { id } = response.data[0];

		yield call(api.delete, `following/${id}`);

		yield put(removeFollowSuccess(follow_user_id));
	} catch (err) {
		toast.error('Unexpected error 🤔');
		yield put(removeFollowFailure());
	}
}

export default all([
	takeLatest('@follow/ADD_FOLLOW_REQUEST', addFollow),
	takeLatest('@follow/REMOVE_FOLLOW_REQUEST', removeFollow),
	takeLatest('@follow/TOGGLE_FOLLOW_REQUEST', toggleFollow),
	takeLatest('@follow/GET_FOLLOWERS_LIST_REQUEST', getFollowersList),
	takeLatest('@follow/GET_FOLLOWING_LIST_REQUEST', getFollowingList),
]);
