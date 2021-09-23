import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#ff0000",
			main: "#ff0000",
			dark: "#212121"
		},
		secondary: {
			light: "#757575",
			main: "#757575",
			dark: "#212121"
		}
	}
});

export default theme;
