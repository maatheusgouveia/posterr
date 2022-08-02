import produce from 'immer';

const INITIAL_STATE = {
	profile: {
		id: 'b4dce57f-20f9-4c16-9811-332a587b7a6a',
		name: 'Matheus Gouveia',
		username: 'maatheusgouveia',
	},
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
