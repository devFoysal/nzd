export const LOAD_NAVIGATION = "LOAD_NAVIGATION";
export const LOAD_FOOTER = "LOAD_FOOTER";

export const loadNavigation = (data) => {
	return { type: LOAD_NAVIGATION, navigation: data };
};

export const loadFooter = (data) => {
	return { type: LOAD_FOOTER, footer: data };
};
