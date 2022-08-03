import produce from 'immer';

const INITIAL_STATE = {
	list: [],
	loading: false,
	error: false,
};

export default function post(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@post/CREATE_POST_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@post/CREATE_POST_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@post/CREATE_POST_SUCCESS': {
				draft.list = action.payload.data;

				draft.loading = false;
				draft.error = false;
				break;
			}
			default:
		}
	});
}
