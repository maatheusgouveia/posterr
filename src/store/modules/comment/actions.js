export function getCommentsRequest() {
	return {
		type: '@comment/GET_COMMENTS_REQUEST',
	};
}

export function getCommentsSuccess(data) {
	return {
		type: '@comment/GET_COMMENTS_SUCCESS',
		payload: { data },
	};
}

export function getCommentsFailure() {
	return {
		type: '@comment/GET_COMMENTS_FAILURE',
	};
}

export function createCommentRequest(data) {
	return {
		type: '@comment/CREATE_COMMENT_REQUEST',
		payload: { data },
	};
}

export function createCommentSuccess(data) {
	return {
		type: '@comment/CREATE_COMMENT_SUCCESS',
		payload: { data },
	};
}

export function createCommentFailure() {
	return {
		type: '@comment/CREATE_COMMENT_FAILURE',
	};
}
