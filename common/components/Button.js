import Link from "./Link";

const Button = ({ type = "button", variant = "secondary", route = "page", slug, buttonType = "button", children }) => {
	let btn = "btn";
	if (variant == "primary") {
		btn = "btn bt-primary";
	} else if (variant == "secondary") {
		btn = "btn bt-secondary";
	}

	let content = null;

	if (type == "button") {
		content = (
			<button type={buttonType} className={btn}>
				{children}
			</button>
		);
	} else if (type == "link") {
		content = <a className={btn}>{children}</a>;
	}

	return (
		<Link route={route} slug={slug}>
			{content}
		</Link>
	);
};

export default Button;
