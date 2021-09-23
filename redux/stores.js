import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import sessionStorage from "redux-persist/lib/storage";
//import sessionStorage from 'redux-persist/lib/storage/session'
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const config = { key: "primary", storage: sessionStorage };
const reducer = persistCombineReducers(config, rootReducer);

//console.log("ENV: ", process.env.NODE_ENV);

let composeEnhancers = null;
let store = null;

if (process.env.NODE_ENV == "development") {
	composeEnhancers = composeWithDevTools({
		// Specify name here, actionsBlacklist, actionsCreators and other options if needed
	});
	store = createStore(
		reducer,
		/* preloadedState, */ composeEnhancers(
			compose(applyMiddleware(thunk, logger))
			// other store enhancers if any
		)
	);
} else {
	store = createStore(reducer, /* preloadedState, */ compose(applyMiddleware(thunk)));
}

//const store = createStore(reducer, undefined, compose(applyMiddleware(thunk, logger)));

persistStore(store, null, () => {
	store.getState(); // if you want to get restoredState
});

export function initializeStore() {
	return store;
}
