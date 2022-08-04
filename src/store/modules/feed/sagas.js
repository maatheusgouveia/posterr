import { toast } from 'react-toastify';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPostsSuccess, getPostsFailure, setFollowingPosts } from './actions';

export function* getPosts() {
	try {
		const response = yield call(api.get, 'posts');

		yield put(getPostsSuccess(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔', { type: 'error' });
		yield put(getPostsFailure());
	}
}

export function* filterFollowingPosts() {
	try {
		const state = yield select();

		const { name } = state.user.profile;
		const { chronological } = state.feed;

		const response = yield call(api.get, `following?user_id=${name}`);

		const following_list = response.data.map(follow => follow.following);

		const following_posts = chronological.filter(post =>
			following_list.includes(post.author)
		);

		yield put(setFollowingPosts(following_posts));
	} catch (err) {
		toast.error('Unexpected error 🤔', { type: 'error' });
	}
}

export default all([
	takeLatest('@feed/GET_POSTS_REQUEST', getPosts),
	takeLatest('@feed/GET_POSTS_SUCCESS', filterFollowingPosts),
]);
