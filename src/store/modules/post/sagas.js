import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { appendToFeed } from '../feed/actions';

import { createPostSuccess, createPostFailure } from './actions';

export function* createPost({ payload }) {
	const { content } = payload.data;

	try {
		const data = {
			content,
			author: 'Matheus Gouveia',
			created_at: new Date().toISOString(),
		};

		if (payload.data.original_post) {
			data.original_post = payload.data.original_post;
		}

		const response = yield call(api.post, 'posts', data);

		yield put(createPostSuccess(response.data));
		yield put(appendToFeed(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔', { type: 'error' });
		yield put(createPostFailure());
	}
}

export default all([takeLatest('@post/CREATE_POST_REQUEST', createPost)]);
