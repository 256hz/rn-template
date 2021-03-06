import {
	createStore,
	applyMiddleware,
	StoreEnhancer,
	compose,
} from 'redux';
import {
	createMigrate,
	persistReducer,
	persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './combineReducers';
import { initSagas } from './initializeSagas';

// HACK overcome typing error for window.__REDUX_DEVTOOLS_EXTENSION__
declare let window: any;
if (typeof window !== 'object') {
	window = {};
}

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: [ 'modal', 'vehicleRouter', 'vehicleState' ],
	version: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
	const sagaMiddleware = createSagaMiddleware();
	const middleWares = [ sagaMiddleware ];
	const composables = [ applyMiddleware(...middleWares) ];
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = composeEnhancers(...composables) as StoreEnhancer;

	const store = createStore(
		persistedReducer,
		enhancer,
	);

	const persistor = () => persistStore(store, {}, () => {
		initSagas(sagaMiddleware);
		// store.dispatch(storeIsReady());
	});

	return { store, persistor };
};
