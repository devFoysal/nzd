import Link from "./Link";

const VideoBanner = ({ youtubeId = "", title = "", headline = "" }) => {
	return (
		<div
			style={{
				// backgroundImage: `url(${image})`, //
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundColor: "#262626",
				// backgroundColor: "#101010",
				paddingTop: 40,
				paddingBottom: 40
			}}
		>
			<div style={{ width: "100%" }}>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe
									className="embed-responsive-item"
									// src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
									src={`https://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&loop=1&autoplay=1`}
									frameborder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							</div>
						</div>

						<div className="col-xl-8">
							<h3
								style={{
									color: "#fff"
								}}
							>
								{title}
							</h3>
							<h4
								style={{
									color: "#fff"
								}}
							>
								{headline}
							</h4>
						</div>
						<div className="col-xl-4">
							<div className="btn-right" style={{ marginTop: 30 }}>
								<Link route={"/blogs"}>
									<a
										style={{
											color: "#fff", //
											border: "1px solid #fff"
										}}
										className="btn btn-custom"
									>
										Back to all articles
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoBanner;
