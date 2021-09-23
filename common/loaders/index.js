import ContentLoader from "react-content-loader";

export const List = () => {
	return (
		<div>
			<ContentLoader uniquekey={Math.random()} speed={1} style={{ padding: 20, width: "100%" }} preserveAspectRatio="none">
				<circle cx="10" cy="20" r="8" />
				<rect x="25" y="15" rx="5" ry="5" width="100%" height="10" />
				<circle cx="10" cy="50" r="8" />
				<rect x="25" y="45" rx="5" ry="5" width="80%" height="10" />
				<circle cx="10" cy="80" r="8" />
				<rect x="25" y="75" rx="5" ry="5" width="100%" height="10" />
				<circle cx="10" cy="110" r="8" />
				<rect x="25" y="105" rx="5" ry="5" width="60%" height="10" />
			</ContentLoader>
		</div>
	);
};

export const Image = ({ height }) => {
	return (
		<div>
			<ContentLoader uniquekey={Math.random()} height={height} speed={1} style={{ padding: 0, width: "100%", height: height }} preserveAspectRatio="none">
				<rect x="0" y="0" width="100%" height={height} />
			</ContentLoader>
		</div>
	);
};

export const Stack = ({ width = 600, height = 300, padding = 10 }) => {
	return (
		<ContentLoader uniquekey={Math.random()} width={"100%"} height={height} speed={2} style={{ padding: 0, width: "100%", height: height }}>
			<rect x="0" y="0" rx={padding / 2} ry={padding / 2} width={width / 2 - padding * 2} height={height} />
			<rect x={width / 2 - padding} y="0" rx={padding / 2} ry={padding / 2} width={width / 4 - padding} height={height / 2 - padding} />
			<rect x={width / 2 + width / 4 - padding} y="0" rx={padding / 2} ry={padding / 2} width={width / 4 - padding} height={height / 2 - padding} />
			<rect x={width / 2 - padding} y={height / 2} rx={padding / 2} ry={padding / 2} width={width / 2 - padding} height={height / 2} />
		</ContentLoader>
	);
};
