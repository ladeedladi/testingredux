import { createStore } from "redux";
import { allReducer } from "./reducer/combinedReducer";
import { applyMiddleware } from "redux";
import reduxSaga from "redux-saga"
export const store =createStore(allReducer,applyMiddleware(reduxSaga))









// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import rootReducer, { initialState } from '../reducers/index'
// import { rootSaga } from '../saga/index'

// const sagaMiddleware = createSagaMiddleware();

// let isSagaIntitialized = false;

// const bindMiddleware = (middleware) => {
//     if (process.env.NODE_ENV !== 'production') {
//         const { composeWithDevTools } = require('redux-devtools-extension')
//         return composeWithDevTools(applyMiddleware(...middleware))
//     }
//     return applyMiddleware(...middleware)
// }

// function configureStore() {
//     const store = createStore(
//         rootReducer,
//         initialState,
//         bindMiddleware([sagaMiddleware])
//     )

//     store.runSagaTask = () => {
//         store.sagaTask = sagaMiddleware.run(rootSaga);
//         isSagaIntitialized = true;
//     }
//     store.runSagaTask();
//     // !isSagaIntitialized ? store.runSagaTask() : '';

//     return store
// }

// export default configureStore   
