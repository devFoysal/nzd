// Export your functions here
export const validateUrl = (str) => {
	let tarea = str;
	if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
		return true;
	} else {
		return false;
	}
};

export const validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
