import produce from 'immer';

const INITIAL_STATE = {
	logged_user_is_author: [],
	posts_by_user: [],
	chronological: [],
	following: [],
	loading: false,
	error: false,
};

export default function feed(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@feed/GET_POSTS_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@feed/GET_POSTS_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@feed/GET_POSTS_SUCCESS': {
				const ordered_by_creation_date = action.payload.data.sort(
					(current, next) => {
						if (current.created_at < next.created_at) return 1;
						if (current.created_at > next.created_at) return -1;
						return 0;
					}
				);

				draft.chronological = ordered_by_creation_date;

				draft.loading = false;
				draft.error = false;
				break;
			}
			case '@feed/SET_FOLLOWING_POSTS': {
				draft.following = action.payload.data;

				break;
			}

			case '@feed/SET_LOGGED_USER_POSTS': {
				draft.logged_user_is_author = action.payload.data;

				break;
			}
			case '@feed/APPEND_TO_FEED': {
				draft.chronological = [
					action.payload.data,
					...draft.chronological,
				];
				break;
			}
			default:
		}
	});
}
