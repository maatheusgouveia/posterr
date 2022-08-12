import produce from 'immer';

const INITIAL_STATE = {
	following_list: [],
	followers_list: [],
	loading: false,
	error: false,
};

export default function follow(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@follow/ADD_FOLLOW_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@follow/ADD_FOLLOW_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@follow/ADD_FOLLOW_SUCCESS': {
				draft.following_list = [
					action.payload.data,
					...draft.following_list,
				];
				draft.loading = false;
				draft.error = false;
				break;
			}
			case '@follow/REMOVE_FOLLOW_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@follow/REMOVE_FOLLOW_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@follow/REMOVE_FOLLOW_SUCCESS': {
				draft.following_list = draft.following_list.filter(
					follow => follow !== action.payload.data
				);
				draft.loading = false;
				draft.error = false;
				break;
			}
			case '@follow/GET_FOLLOWING_LIST_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@follow/GET_FOLLOWING_LIST_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@follow/GET_FOLLOWING_LIST_SUCCESS': {
				draft.following_list = action.payload.data;
				draft.loading = false;
				draft.error = false;
				break;
			}
			case '@follow/GET_FOLLOWERS_LIST_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@follow/GET_FOLLOWERS_LIST_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@follow/GET_FOLLOWERS_LIST_SUCCESS': {
				draft.followers_list = action.payload.data;
				draft.loading = false;
				draft.error = false;
				break;
			}
			default:
		}
	});
}
