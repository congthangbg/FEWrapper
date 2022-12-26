// third-party
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// project import
import reducers from './reducers';
import rootSaga from './rootSaga';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }).concat(sagaMiddleware),
});

const { dispatch } = store;
export { store, dispatch };
sagaMiddleware.run(rootSaga);
export const  AppDispatch = typeof store.dispatch;
export const RootState =  store.getState;



