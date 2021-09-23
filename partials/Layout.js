import Head from "../partials/Head";
import Footer from "../partials/Footer";
import Navigation from "../partials/navigation";

const Layout = (props) => (
	<div className="wrapper">
		<Head title={props.title || ""} />
		<Navigation title={props.title} />
		{props.children}
		<Footer isHome={props.isHome} />
	</div>
);

export default Layout;
