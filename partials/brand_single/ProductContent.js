import React from 'react'
import Modal from "./modal";
import Modalprice from "./modalprice";
import { ReflectedContainer } from "../../common/components";

const data = [
	{
		title: "Buy from Chaldal",
		logo: "/static/images/chaldal-logo.png",
		url: "https://chaldal.com/"
	},
	{
		title: "Buy from evaly",
		logo: "/static/images/evaly-logo.svg",
		url: "https://evaly.com.bd/"
	},
	{
		title: "Buy from Daraz",
		logo: "/static/images/daraz-logo.png",
		url: "https://www.daraz.com.bd/"
	}
];
class ProductContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			opens: false
		};
	}

	modalOpen = () => {
		this.setState({
			open: true
		});
	};
	handleClose = () => {
		this.setState({
			open: false
		});
	};
	modalOpen1 = () => {
		this.setState({
			opens: true
		});
	};
	handleClose1 = () => {
		this.setState({
			opens: false
		});
	};
	render() {
		const { headline, title, content, thumb } = this.props.item;

		const brandColor = this.props.item.data.sections.custom.brandColor;
		const nutritionImage = this.props.item.data.sections.custom.nutritionFacts;
		const buyOnlineUrl = this.props.item.data.sections.custom.buyOnlineUrl;
		const facebookUrl = this.props.item.data.sections.custom.facebookUrl;
		const youtubeUrl = this.props.item.data.sections.custom.youtubeUrl;
		const tagline = this.props.item.data.sections.custom.tagline || null;
		return (
			<div
				className="bg-color-green mr-t-2"
				style={{
					background: brandColor
				}}
			>
				<div className="container">
					<div className="row">
						<div className="product-content">
							<div className="media">
								<ReflectedContainer>
									<img className="mr-3" src={`${thumb}`} alt={title} />
								</ReflectedContainer>

								<div className="media-body col-12">
									<h3>{title}</h3>
									<h6 style={{ marginBottom: 0 }}>{tagline}</h6>

									<div className="item-green">
										<div
											dangerouslySetInnerHTML={{
												__html: content
											}}
										/>
										<div>
											{/* {features.length > 0 && (
												<ul className="o-time-class">
													{features.map((ele, index) => (
														<li key={index}>{ele.title}</li>
													))}
												</ul>
											)}
											{skus.length > 0 && (
												<ul className="list-inline li-item-content">
													<li className="list-inline-item">SQUS:</li>
													{skus.map((ele, index) => (
														<li className="list-inline-item" key={index}>
															{ele.title}
														</li>
													))}
												</ul>
											)} */}
										</div>
										<ul className="list-inline list-btn-group">
											<li className="list-inline-item">
												<a href="javascript:void(0)" className="btn btn-border" onClick={this.modalOpen}>
													Nutrition Facts
												</a>
											</li>
											{buyOnlineUrl && (
												<li className="list-inline-item">
													<a
														// onClick={this.modalOpen1}
														href={buyOnlineUrl}
														className="btn btn-border bg-button"
														style={{
															color: brandColor
														}}
														target="_blank"
													>
														Buy Online
													</a>
												</li>
											)}
										</ul>
										<ul className="list-inline l-item">
											{facebookUrl && (
												<li className="list-inline-item">
													<a href={facebookUrl} target="_blank">
														<i className="fa fa-facebook-f" />
													</a>
												</li>
											)}
											{youtubeUrl && (
												<li className="list-inline-item">
													<a href={youtubeUrl} target="_blank">
														<i className="fa fa-youtube" />
													</a>
												</li>
											)}

											{/* <li className="list-inline-item">
												<a href="javascript:void(0)">
												<i className="fa fa-youtube"></i>
												</a>
											</li> */}
											{/* <li className="list-inline-item">
												<a href="javascript:void(0)">
													<i className="fa fa-twitter" />
												</a>
											</li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Modal image={nutritionImage} open={this.state.open} onClose={this.handleClose} />
				{/* <Modalprice image={nutritionImage} open={this.state.opens} onClose={this.handleClose1} data={data} /> */}
			</div>
		);
	}
}

export default ProductContent;
