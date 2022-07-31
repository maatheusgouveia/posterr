import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistReducers = reducers => {
	const persistedReducer = persistReducer(
		{
			key: 'posterr',
			storage,
			whitelist: ['auth', 'user'],
		},
		reducers
	);
	return persistedReducer;
};

export default persistReducers;
