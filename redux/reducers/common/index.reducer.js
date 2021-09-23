import { LOAD_NAVIGATION, LOAD_FOOTER } from "./index.actions";

const initialState = {
	mainNavigation: {
		data: [],
		createdAt: 0
	},
	topNavigation: {
		data: [],
		createdAt: 0
	},
	footer: {
		data: {
			main: [],
			info: [],
			social: [],
			bottom: []
		},
		createdAt: 0
	}
};

export default function testKey(state = initialState, action) {
	switch (action.type) {
		case LOAD_NAVIGATION:
			return {
				...state,
				// topNavigation: action.navigation.topNavigation,
				mainNavigation: action.navigation
			};
		case LOAD_FOOTER:
			return {
				...state,
				footer: action.footer
			};
		default:
			return state;
	}
}
