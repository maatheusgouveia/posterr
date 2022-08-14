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
	selected_profile: {},
	list: [
		{
			id: 1,
			name: 'Matheus Gouveia',
			username: 'maatheusgouveia',
			created_at: '2022-05-10T04:18:38.387Z',
			followers: 32,
			following: 14,
		},
		{
			id: 2,
			name: 'John Doe',
			username: 'johndoe',
			created_at: '2022-04-01T04:18:38.387Z',
			followers: 22,
			following: 56,
		},
		{
			id: 3,
			name: 'Fatima Voestaa',
			username: 'fatimavoestaa',
			created_at: '2022-07-12T04:18:38.387Z',
			followers: 33,
			following: 64,
		},
		{
			id: 4,
			name: 'Glaphyra Maiken',
			username: 'glaphyramaiken',
			created_at: '2022-07-30T04:18:38.387Z',
			followers: 99,
			following: 5,
		},
	],
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
