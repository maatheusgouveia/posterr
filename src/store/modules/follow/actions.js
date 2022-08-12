export function toggleFollowRequest(follow_user_id) {
	return {
		type: '@follow/TOGGLE_FOLLOW_REQUEST',
		payload: { follow_user_id },
	};
}

export function addFollowRequest({ user_id, follow_user_id }) {
	return {
		type: '@follow/ADD_FOLLOW_REQUEST',
		payload: { user_id, follow_user_id },
	};
}

export function addFollowSuccess(data) {
	return {
		type: '@follow/ADD_FOLLOW_SUCCESS',
		payload: { data },
	};
}

export function addFollowFailure() {
	return {
		type: '@follow/ADD_FOLLOW_FAILURE',
	};
}

export function removeFollowRequest({ user_id, follow_user_id }) {
	return {
		type: '@follow/REMOVE_FOLLOW_REQUEST',
		payload: { user_id, follow_user_id },
	};
}

export function removeFollowSuccess(data) {
	return {
		type: '@follow/REMOVE_FOLLOW_SUCCESS',
		payload: { data },
	};
}

export function removeFollowFailure() {
	return {
		type: '@follow/REMOVE_FOLLOW_FAILURE',
	};
}

export function getFollowingListRequest(user_id) {
	return {
		type: '@follow/GET_FOLLOWING_LIST_REQUEST',
		payload: { user_id },
	};
}

export function getFollowingListSuccess(data) {
	return {
		type: '@follow/GET_FOLLOWING_LIST_SUCCESS',
		payload: { data },
	};
}

export function getFollowingListFailure() {
	return {
		type: '@follow/GET_FOLLOWING_LIST_FAILURE',
	};
}

export function getFollowersListRequest(user_id) {
	return {
		type: '@follow/GET_FOLLOWERS_LIST_REQUEST',
		payload: { user_id },
	};
}

export function getFollowersListSuccess(data) {
	return {
		type: '@follow/GET_FOLLOWERS_LIST_SUCCESS',
		payload: { data },
	};
}

export function getFollowersListFailure() {
	return {
		type: '@follow/GET_FOLLOWERS_LIST_FAILURE',
	};
}
