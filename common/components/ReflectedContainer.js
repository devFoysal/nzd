export default ({ children }) => {
	return (
		<div className="reflection-container">
			{[...Array(100).keys()].map((i, k) => {
				return <span key={k} className={`reflection-grid-cell reflection-grid-cell-${i + 1}`}></span>;
			})}
			<div className="reflection-content">{children}</div>
		</div>
	);
};
