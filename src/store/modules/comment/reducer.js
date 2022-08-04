import produce from 'immer';

const INITIAL_STATE = {
	threads: {},
	loading: false,
	error: false,
};

export default function comment(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@comment/GET_COMMENTS_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@comment/GET_COMMENTS_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@comment/GET_COMMENTS_SUCCESS': {
				const temp = {};
				const list = action.payload.data;

				list.forEach(comment => {
					temp[comment.post_id] = [
						comment,
						...(temp[comment.post_id] || []),
					];
				});

				draft.threads = temp;

				draft.loading = false;
				draft.error = false;
				break;
			}
			case '@comment/CREATE_COMMENT_REQUEST': {
				draft.loading = true;
				draft.error = false;
				break;
			}
			case '@comment/CREATE_COMMENT_FAILURE': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			case '@comment/CREATE_COMMENT_SUCCESS': {
				const { post_id } = action.payload.data;

				draft.threads[post_id] = [
					action.payload.data,
					...(draft.threads[post_id] || []),
				];

				draft.loading = false;
				draft.error = false;
				break;
			}
			default:
		}
	});
}
