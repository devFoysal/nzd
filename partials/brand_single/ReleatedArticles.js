import React from 'react'
import Slider from "react-slick";
import { Link } from "../../common/components";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div id="one" className={className} style={{ ...style, display: "block" }} onClick={onClick}>
			<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0.609492 1.05634C0.415324 1.25051 0.415324 1.56603 0.609492 1.7602L6.81072 7.94929L0.609493 14.1505C0.415325 14.3447 0.415325 14.6602 0.609493 14.8544C0.803661 15.0485 1.11918 15.0485 1.31335 14.8544L7.85437 8.31335C7.95146 8.21627 8 8.09491 8 7.96142C8 7.84007 7.95146 7.70658 7.85437 7.60949L1.31335 1.06847C1.11918 0.862171 0.803659 0.86217 0.609492 1.05634Z"
					fill="#007142"
				/>
			</svg>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div id="two" className={className} style={{ ...style, display: "block" }} onClick={onClick}>
			<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.39051 13.9437C7.58467 13.7495 7.58467 13.434 7.39051 13.2398L1.18928 7.05071L7.39051 0.849483C7.58467 0.655316 7.58467 0.339793 7.39051 0.145626C7.19634 -0.0485419 6.88082 -0.0485419 6.68665 0.145626L0.145628 6.68665C0.048544 6.78373 2.46653e-06 6.90509 2.46812e-06 7.03858C2.46957e-06 7.15993 0.048544 7.29342 0.145628 7.3905L6.68665 13.9315C6.88082 14.1378 7.19634 14.1378 7.39051 13.9437Z"
					fill="#007142"
				/>
			</svg>
		</div>
	);
}

class Index extends React.Component {
	_renderBlock = (item, index, width = null) => {
		// console.log(item);
		let content = null;

		if (!item.thumb || item.thumb == "http://nzd-api.web.mahfuj.xyz/" || item.thumb == "https://api.newzealanddairybd.com/") {
			if (item.categories[0] && (item.categories[0].slug == "tvc" || item.categories[0].slug == "recipes")) {
				content = (
					<div key={index}>
						<div
							className="position-relative m-type"
							style={{
								backgroundImage: `url(https://img.youtube.com/vi/${item.headline}/hqdefault.jpg)`, //
								height: 260,
								backgroundSize: "cover",
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundColor: "#000",
								...{ width: width }
							}}
						>
							<Link route="article.show" slug={item.slug}>
								<a className="whatsnew-smallimg-type po-absolute">
									<div className="overlay-height">
										<div className="flext-item width-hundread" style={{ justifyContent: "normal" }}>
											<h3>{item.title}</h3>
											<button>
												<img src="/static/images/play.png" />
											</button>
										</div>
									</div>
								</a>
							</Link>
						</div>
					</div>
				);
			} else {
				content = (
					<div key={index}>
						<div className="whatsnewTexttype m-type">
							<div className="flext-item-text" style={{ height: 260, ...{ width: width } }}>
								<h3>{item.title}</h3>
								<p>{item.short_content}</p>
								<Link route="article.show" slug={item.slug}>
									<a className="btn btn-custom-blog bg-greens">Learn More</a>
								</Link>
							</div>
						</div>
					</div>
				);
			}
		} else {
			content = (
				<div key={index}>
					<div
						className="whatsnew-bigimg-type m-type"
						style={{
							backgroundImage: `url("${item.thumb}")`, //
							height: 260,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
							backgroundColor: "#000",
							...{ width: width }
						}}
					>
						<div className="overlay-height">
							<div className="flext-item">
								<h3>{item.title}</h3>
								<Link route="article.show" slug={item.slug}>
									<a className="btn btn-custom-blog bg-white">Learn More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		}

		return content;
	};

	render() {
		const settings = {
			autoplay: true,
			height: 260,
			dots: false,
			// infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: false,
						dots: true
					}
				}
			]
		};
		let { productName } = this.props;
		return (
			this.props.articles.length > 0 &&
			this.props.articles[0] && (
				<div className="sliderimage-carosual">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="t-slider-item">
									<h3>Know more about {productName}</h3>
									{this.props.articles.length > 2 ? (
										<Slider {...settings}>
											{this.props.articles.map((item, index) => {
												return item && this._renderBlock(item, index);
											})}
										</Slider>
									) : (
										this.props.articles.map((item, index) => {
											return item && this._renderBlock(item, index, 325);
										})
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		);
	}
}

export default Index;
