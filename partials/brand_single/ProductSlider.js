import React from 'react'
import Slider from "react-slick";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: "block", fontSize: "30px" }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style, display: "block", fontSize: "30px" }} onClick={onClick} />;
}

class Baner extends React.Component {
	constructor(props) {
		super(props);
		this.state = { height: 0, tabSize: false };
	}
	componentDidMount() {
		this.setState({ height: window.innerHeight });
		window.addEventListener("resize", this.updateDimensions);
		if (screen.width <= 600) {
			this.setState({
				height: window.innerHeight
			});
		}
		if (screen.width <= 768) {
			this.setState({
				tabSize: true
			});
		}
	}
	updateDimensions = () => {
		this.setState({
			height: window.innerHeight
		});
	};
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	render() {
		const settings = {
			dots: false,
			height: 380,
			infinite: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			// fade: true,
			autoplaySpeed: 3000
		};
		return (
			<div className="bare-baner">
				<div className="no-arrow arr">
					<Slider {...settings}>
						{this.props.data.map((ele, index) => (
							<div className="bgs" key={index}>
								<div className="img-relative">
									{this.state.tabSize ? (
										<React.Fragment>
											<div
												className="slider-image"
												id="demo"
												style={{
													backgroundImage: `url('${ele}')`,
													height: 600
												}}
											>
												<div className="ht-overlay" />
											</div>
										</React.Fragment>
									) : (
										<React.Fragment>
											<img src={ele} />
											<div className="ht-overlay1" />
										</React.Fragment>
									)}
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		);
	}
}

export default Baner;
