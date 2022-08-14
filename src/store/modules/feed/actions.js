export function getPostsRequest() {
	return {
		type: '@feed/GET_POSTS_REQUEST',
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

export function setCurrentUserPosts(data) {
	return {
		type: '@feed/SET_LOGGED_USER_POSTS',
		payload: { data },
	};
}

export function getPostsByUserRequest(name) {
	return {
		type: '@feed/GET_POSTS_BY_USER_REQUEST',
		payload: { name },
	};
}

export function getPostsByUserSuccess(data) {
	return {
		type: '@feed/GET_POSTS_BY_USER_SUCCESS',
		payload: { data },
	};
}

export function getPostsByUserFailure() {
	return {
		type: '@feed/GET_POSTS_BY_USER_FAILURE',
	};
}
