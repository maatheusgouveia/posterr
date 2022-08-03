import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { getPostsSuccess, getPostsFailure } from './actions';

export function* getPosts() {
	try {
		const response = yield call(api.get, 'posts');

		yield put(getPostsSuccess(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔');
		yield put(getPostsFailure());
	}
}

export default all([takeLatest('@feed/GET_POSTS_REQUEST', getPosts)]);
