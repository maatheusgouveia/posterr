import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import feed from './feed/reducer';
import post from './post/reducer';
import comment from './comment/reducer';
import follow from './follow/reducer';

export default combineReducers({
	auth,
	user,
	feed,
	post,
	comment,
	follow,
});
