import produce from 'immer';

const INITIAL_STATE = {
	list: [],
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
				draft.list = action.payload.data;

				draft.loading = false;
				draft.error = false;
				break;
			}
			default:
		}
	});
}
