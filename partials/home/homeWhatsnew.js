import React from 'react'
// import ModalVideo from "../home/modal";
import { Link } from "../../common/components";

class Homewhatsnew extends React.Component {
	state = {
		play: false,
		play1: false,
		open: false
	};
	onPlay = () => {
		let a = document.getElementById("video");
		a.src += "&autoplay=1";
		this.setState({
			play: true
		});
	};
	onPlay1 = () => {
		let a = document.getElementById("video1");
		a.src += "&autoplay=1";
		this.setState({
			play1: true
		});
	};
	handleClick = () => {
		this.setState({
			open: !this.state.open
		});
	};

	/**
	 * @param {object}	item		Article object
	 * @param {integer}	index		Article Index
	 * @param {string}	size		String can be "big", "medium", "small"
	 * @param {boolean}	showImage	Boolean can be true or false
	 * @param {boolean}	isLikeVideo	Can be video or article
	 */
	__renderBlock = (item, index, size = "medium", showImage = true, isLikeVideo = false) => {
		let wrapperClass = "col-xl-3 col-sm-3";

		if (size == "big") {
			wrapperClass = "col-xl-12 col-sm-3";
		} else if (size == "medium") {
			wrapperClass = "col-xl-6 col-sm-3";
		} else if (size == "small") {
			wrapperClass = "col-xl-3 col-sm-3";
		}

		let height = 400;

		let isVideo = item.isVideo ? item.isVideo : isLikeVideo;

		return (
			<div className={`${wrapperClass} no-padding`} key={index}>
				{isVideo ? (
					<div
						className="position-relative phone-height-test"
						style={{
							height: height
						}}
					>
						{/* <div
							className={this.state.play1 ? "whatsnew-video-type videoplay" : "whatsnew-video-type"}
							style={{
								height: height
							}}
						>
							<div className="overlay-height">
								<iframe
									id="video1"
									style={{
										height: height
									}}
									className="embed-responsive-item"
									src="https://www.youtube.com/embed/vlDzYIIOYmM?"
									frameBorder="0"
									scrolling="no"
									allow="autoplay"
								/>
							</div>
						</div> */}
						<Link route="article.show" slug={item.slug}>
							<a
								className="whatsnew-smallimg-type po-absolute phone-height-test"
								style={{
									backgroundImage: `url(https://img.youtube.com/vi/${item.headline}/hqdefault.jpg)`,
									height: height,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover"
								}}
							>
								<div className="overlay-height">
									<div
										className="flext-item width-hundread"
										style={{
											justifyContent: "normal"
										}}
									>
										<h3>{item.title}</h3>
										<button onClick={this.handleClick}>
											<img src="/static/images/play.png" />
										</button>
									</div>
								</div>
							</a>
						</Link>
					</div>
				) : size == "small" ? (
					showImage ? (
						<Link route="article.show" slug={item.slug}>
							<a
								className="whatsnew-smallimg-type phone-height-test"
								style={{
									backgroundImage: "url(" + item.thumb + ")",
									height: 400,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover"
								}}
							>
								<div className="overlay-height">
									<div className="flext-item width-hundread">
										<h3>{item.title}</h3>
										<a href="javascript:void(0)" className="btn btn-custom-blog bg-white">
											View More
										</a>
									</div>
								</div>
							</a>
						</Link>
					) : (
						<div
							className="whatsnewTexttype phone-height-test"
							style={{
								height: 400
							}}
						>
							<div className="flext-item-text">
								<h3>{item.title}</h3>
								<p>{item.short_content && item.short_content.length > 190 ? item.short_content.substring(0, 190) + "..." : item.short_content}</p>
								<Link route="article.show" slug={item.slug}>
									<a className="btn btn-custom-blog bg-greens">View More</a>
								</Link>
							</div>
						</div>
					)
				) : (
					<div
						className="whatsnew-bigimg-type phone-height-test"
						style={{
							backgroundImage: "url(" + item.thumb + ")",
							height: 400,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover"
						}}
					>
						<div className="overlay-height">
							<div className="flext-item">
								<h3>{item.title}</h3>
								<Link route="article.show" slug={item.slug}>
									<a className="btn btn-custom-blog bg-white">View More</a>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	};

	render() {
		const { data } = this.props;

		const post_data = [
			//
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: true
			},
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: false
			},
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: false
			},
			//
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: false
			},
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: false
			},
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: false
			},
			//
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: true
			},
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: true
			},
			{
				id: 0,
				title: "Adjusting to life with your new baby",
				thumb: "/static/images/2.png",
				isVideo: false
			}
			//
			// {
			// 	id: 0,
			// 	title: "Adjusting to life with your new baby",
			// 	thumb: "/static/images/2.png",
			// 	isVideo: false
			// },
			// {
			// 	id: 0,
			// 	title: "Adjusting to life with your new baby",
			// 	thumb: "/static/images/2.png",
			// 	isVideo: false
			// },
			// {
			// 	id: 0,
			// 	title: "Adjusting to life with your new baby",
			// 	thumb: "/static/images/2.png",
			// 	isVideo: false
			// }
			//
		];

		const SIZE_POOL = [
			{ size: "small", showImage: true, isVideo: true },
			{ size: "small", showImage: false, isVideo: false },
			{ size: "medium", showImage: true, isVideo: false }, //
			{ size: "medium", showImage: true, isVideo: false },
			{ size: "small", showImage: false, isVideo: false },
			{ size: "small", showImage: true, isVideo: true }, //
			{ size: "small", showImage: true, isVideo: true },
			{ size: "medium", showImage: true, isVideo: true },
			{ size: "small", showImage: false, isVideo: false }, //
			{ size: "medium", showImage: true, isVideo: false },
			{ size: "small", showImage: false, isVideo: false },
			{ size: "small", showImage: true, isVideo: false } //
		];
		return (
			<div className={`whatsnew`}>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="t-center-whatsnew">
								<h6>{data.heading}</h6>
								<h3>{data.title}</h3>
							</div>
						</div>
					</div>

					<div className="row row-shadow">
						{data.posts.map((i, k) => {
							return this.__renderBlock(i, k, SIZE_POOL[k].size, SIZE_POOL[k].showImage, SIZE_POOL[k].isVideo);
						})}
					</div>
					<div className="btn-link text-center">
						<Link route={data.btnUrl}>
							<a className="btn btn-customlink">{data.btnText}</a>
						</Link>
					</div>
					{/* <ModalVideo open={this.state.open} onClose={this.handleClick} /> */}

					{/* <div className="row row-shadow" style={{ display: "none" }}>
						<div className="col-xl-3 col-sm-3 no-padding">
							<div className="position-relative">
								<div
									className={this.state.play1 ? "whatsnew-video-type videoplay" : "whatsnew-video-type"}
									style={{
										height: 400
									}}
								>
									<div className="overlay-height">
										<iframe
											id="video1"
											style={{
												height: 400
											}}
											className="embed-responsive-item"
											src="https://www.youtube.com/embed/vlDzYIIOYmM?"
											frameBorder="0"
											scrolling="no"
											allow="autoplay"
										/>
									</div>
								</div>
								<a
									className="whatsnew-smallimg-type po-absolute"
									style={{
										backgroundImage: "url(" + "/static/images/1.png" + ")",
										height: 400,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover"
									}}
								>
									<div className="overlay-height">
										<div
											className="flext-item width-hundread"
											style={{
												justifyContent: "normal"
											}}
										>
											<h3>Adjusting to life with</h3>
											<button>
												<img src="/static/images/play.png" />
											</button>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-xl-3 col-sm-3 no-padding">
							<div
								className="whatsnewTexttype"
								style={{
									height: 400
								}}
							>
								<div className="flext-item-text">
									<h3>Mindful Parenting</h3>
									<p>Sometimes it's important to slow down, be aware of the present moment and try and do one thing at a time.</p>
									<a href="javascript:void(0)" className="btn btn-custom-blog bg-greens">
										View More
									</a>
								</div>
							</div>
						</div>

						<div className="col-xl-6 col-sm-6 no-padding">
							<div
								className="whatsnew-bigimg-type"
								style={{
									backgroundImage: "url(" + "/static/images/im.jpg" + ")",
									height: 400,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover"
								}}
							>
								<div className="overlay-height">
									<div className="flext-item">
										<h3>Gain Double Strength With Shape Up</h3>
										<a href="javascript:void(0)" className="btn btn-custom-blog bg-white">
											View More
										</a>
									</div>
								</div>
							</div>
						</div> */}

					{/* <div className="col-xl-6 col-sm-6 no-padding">
							<div
								href=""
								className="whatsnew-bigimg-type"
								style={{
									backgroundImage: "url(" + "/static/images/cbc-tile-bg.jpg" + ")",
									height: 400,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover"
								}}
							>
								<div className="flext-item-text">
									<img src="/static/images/connect.png" />
									<a href="javascript:void(0)" className="btn btn-custom-blog bg-white mx-auto">
										View More
									</a>
								</div>
							</div>
						</div> */}

					{/* <div className="col-xl-6 col-sm-6 no-padding">
							<div
								className="whatsnew-bigimg-type"
								style={{
									backgroundImage: "url(" + "/static/images/im.jpg" + ")",
									height: 400,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover"
								}}
							>
								<div className="overlay-height">
									<div className="flext-item">
										<h3>Gain Double Strength With Shape Up</h3>
										<a href="javascript:void(0)" className="btn btn-custom-blog bg-white">
											View More
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-3 no-padding">
							<div
								className="whatsnewTexttype"
								style={{
									height: 400
								}}
							>
								<div className="flext-item-text">
									<h3>Mindful Parenting</h3>
									<p>Sometimes it's important to slow down, be aware of the present moment and try and do one thing at a time.</p>
									<a href="javascript:void(0)" className="btn btn-custom-blog bg-greens">
										View More
									</a>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-sm-3 no-padding">
							<a
								className="whatsnew-smallimg-type"
								style={{
									backgroundImage: "url(" + "/static/images/baby.jpg" + ")",
									height: 400,
									backgroundRepeat: "no-repeat",
									backgroundSize: "cover"
								}}
							>
								<div className="overlay-height">
									<div className="flext-item width-hundread">
										<h3>Gain Double Strength With Shape Up</h3>
										<a href="javascript:void(0)" className="btn btn-custom-blog bg-white">
											View More
										</a>
									</div>
								</div>
							</a>
						</div>

						<div className="col-xl-3 col-sm-3 no-padding">
							<div className="position-relative">
								<div
									className={this.state.play1 ? "whatsnew-video-type videoplay" : "whatsnew-video-type"}
									style={{
										height: 400
									}}
								>
									<div className="overlay-height">
										<iframe
											id="video1"
											style={{
												height: 400
											}}
											className="embed-responsive-item"
											src="https://www.youtube.com/embed/vlDzYIIOYmM?"
											frameBorder="0"
											scrolling="no"
											allow="autoplay"
										/>
									</div>
								</div>
								<a
									className="whatsnew-smallimg-type po-absolute"
									style={{
										backgroundImage: "url(" + "/static/images/1.png" + ")",
										height: 400,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover"
									}}
								>
									<div className="overlay-height">
										<div
											className="flext-item width-hundread"
											style={{
												justifyContent: "normal"
											}}
										>
											<h3>Adjusting to life with</h3>
											<button>
												<img src="/static/images/play.png" />
											</button>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-xl-6 col-sm-6 no-padding">
							<div className="position-relative">
								<div
									className={this.state.play ? "whatsnew-video-type videoplay" : "whatsnew-video-type"}
									style={{
										height: 400
									}}
								>
									<div className="overlay-height">
										<iframe
											id="video"
											style={{
												height: 400
											}}
											className="embed-responsive-item"
											src="https://www.youtube.com/embed/vlDzYIIOYmM?"
											frameBorder="0"
											scrolling="no"
											allow="autoplay"
										/>
									</div>
								</div>
								<a
									className="whatsnew-smallimg-type po-absolute"
									style={{
										backgroundImage: "url(" + "/static/images/2.png" + ")",
										height: 400,
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover"
									}}
								>
									<div className="overlay-height">
										<div
											className="flext-item width-hundread"
											style={{
												justifyContent: "normal"
											}}
										>
											<h3>Adjusting to life with your new baby Adjusting to life with your new baby new baby</h3>
											<button>
												<img src="/static/images/play.png" />
											</button>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="col-xl-3 col-sm-3 no-padding">
							<div
								className="whatsnewTexttype"
								style={{
									height: 400
								}}
							>
								<div className="flext-item-text">
									<h3>Mindful Parenting</h3>
									<p>Sometimes it's important to slow down, be aware of the present moment and try and do one thing at a time.</p>
									<a href="javascript:void(0)" className="btn btn-custom-blog bg-greens">
										View More
									</a>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		);
	}
}

export default Homewhatsnew;
