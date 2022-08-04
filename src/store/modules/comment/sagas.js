import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import {
	createCommentSuccess,
	createCommentFailure,
	getCommentsSuccess,
	getCommentsFailure,
} from './actions';

export function* getComments({ payload }) {
	try {
		const response = yield call(api.get, 'comments');

		yield put(getCommentsSuccess(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔', { type: 'error' });
		yield put(getCommentsFailure());
	}
}

export function* createComment({ payload }) {
	const { content, post_id } = payload.data;

	try {
		const data = {
			post_id,
			content,
			author: 'Matheus Gouveia',
			created_at: new Date().toISOString(),
		};

		const response = yield call(api.post, 'comments', data);

		yield put(createCommentSuccess(response.data));
	} catch (err) {
		toast.error('Unexpected error 🤔', { type: 'error' });
		yield put(createCommentFailure());
	}
}

export default all([
	takeLatest('@comment/CREATE_COMMENT_REQUEST', createComment),
	takeLatest('@comment/GET_COMMENTS_REQUEST', getComments),
]);
