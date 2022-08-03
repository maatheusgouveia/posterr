export function createPostRequest(data) {
	return {
		type: '@post/CREATE_POST_REQUEST',
		payload: { data },
	};
}

export function createPostSuccess(data) {
	return {
		type: '@post/CREATE_POST_SUCCESS',
		payload: { data },
	};
}

export function createPostFailure() {
	return {
		type: '@post/CREATE_POST_FAILURE',
	};
}
