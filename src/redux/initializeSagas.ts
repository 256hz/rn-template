import * as sagas from './saga';

export const initSagas = (sagaMiddleware) => {
	Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
