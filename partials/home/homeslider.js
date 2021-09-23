import React from 'react'
import Slider from "react-slick";

const divStyle = {
	fill: "#ff0000"
};

export default class Simpleslider extends React.Component {
	constructor(props) {
		super(props);
		this.state = { height: 0 };
	}
	componentDidMount() {
		this.setState({ height: window.innerHeight - 75 });
		window.addEventListener("resize", this.updateDimensions);
		if (screen.width <= 600) {
			// alert("hi");
			this.setState({
				height: window.innerHeight
			});
		}
	}
	updateDimensions = () => {
		this.setState({
			height: window.innerHeight - 75
		});
	};
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}
	render() {
		const { data = [] } = this.props;

		let dotLength = "";
		let dataSlide = data.map((item, index) => {
			dotLength = index + 1;
			return (
				<div key={index} className="bgs">
					<div className="img-relative">
						<img src={item.image} />
						<h3>{item.title}</h3>
					</div>
				</div>
			);
		});
		let totalWidth = 100 / dotLength;
		// console.log(totalWidth);

		const settings = {
			dots: true,
			infinite: true,
			prevArrow: false,
			nextArrow: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			// fade: true,
			autoplaySpeed: 8000,
			afterChange: (current) => {
				// console.log("shiam", current)
			}
		};

		return (
			<div className="slider-wrapper">
				<Slider {...settings}>{dataSlide}</Slider>
				<style global jsx>{`
					.slider-wrapper .slick-dots li {
						width: ${totalWidth}%!important;
					}
				`}</style>
			</div>
		);
	}
}
