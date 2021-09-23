const PageBanner = ({ image, title = "", headline = "" }) => {
	return (
		<div
			className="about-baner"
			style={{
				backgroundImage: `url(${image})`, //
				height: 400,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundColor: "#0060AF"
			}}
		>
			<div className="ct-width-data">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-sm-12">
							<div
								className="about-baner-left"
								// style={{
								// 	width: 600
								// }}
							>
								<h1>{title}</h1>
								<p>{headline}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageBanner;
