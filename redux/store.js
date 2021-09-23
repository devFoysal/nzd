import { persistStore, persistCombineReducers } from "redux-persist";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
// import sessionStorage from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";

const logger = createLogger();

const config = {
	key: "root",
	storage: storage
	// transforms: [encryptor]
};

let reducer = persistCombineReducers(config, rootReducer);

const store = createStore(reducer, undefined, compose(applyMiddleware(thunk, logger)));

persistStore(store, null, () => {
	store.getState(); // if you want to get restoredState
});

export default store;
