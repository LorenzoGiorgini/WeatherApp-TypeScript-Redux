import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cityReducer from "../reducers/cityReducer";


const persistConfig = {
  key: "root",
  storage,
};

const mainReducer = combineReducers({
  city: cityReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default  store;