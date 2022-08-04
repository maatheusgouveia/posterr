export function getPostsRequest(data) {
	return {
		type: '@feed/GET_POSTS_REQUEST',
		payload: { data },
	};
}

export function getPostsSuccess(data) {
	return {
		type: '@feed/GET_POSTS_SUCCESS',
		payload: { data },
	};
}

export function getPostsFailure() {
	return {
		type: '@feed/GET_POSTS_FAILURE',
	};
}

export function appendToFeed(data) {
	return {
		type: '@feed/APPEND_TO_FEED',
		payload: { data },
	};
}

export function setFollowingPosts(data) {
	return {
		type: '@feed/SET_FOLLOWING_POSTS',
		payload: { data },
	};
}
