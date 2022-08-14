import produce from 'immer';

const INITIAL_STATE = {
	profile: {
		id: 1,
		name: 'Matheus Gouveia',
		username: 'maatheusgouveia',
		created_at: '2022-05-10T04:18:38.387Z',
	},
	following_list: [],
	following_count: 0,
};

export default function user(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@auth/SIGN_IN_SUCCESS':
				draft.profile = action.payload.user;
				break;
			case '@user/UPDATE_PROFILE_SUCCESS': {
				draft.profile = action.payload.profile;
				break;
			}
			case '@auth/SIGN_OUT': {
				draft.profile = null;
				break;
			}
			default:
		}
	});
}
