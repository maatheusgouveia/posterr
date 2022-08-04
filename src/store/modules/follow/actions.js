export function addFollowRequest(data) {
	return {
		type: '@follow/ADD_FOLLOW_REQUEST',
		payload: { data },
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
