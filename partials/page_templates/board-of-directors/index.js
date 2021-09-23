import React from 'react'
import { PageBanner, Link } from "../../../common/components";
import Modal from "./modal";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			title: null,
			content: null
		};
	}

	modalOpen = (title, content) => {
		this.setState({
			open: true,
			content,
			title
		});
	};
	handleClose = () => {
		this.setState({
			open: false,
			content: null,
			title: null
		});
	};

	render() {
		const { item } = this.props;
		return (
			<div>
				{item.image ? (
					<PageBanner
						image={item.image} //
						title={item.title}
						headline={item.short_content}
					/>
				) : null}
				<div className="sliderimage-carosual director-data">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="t-slider-item">
									<h1>Board of Directors</h1>
									{/* <ul className="list-inline board-item">
									<li className="list-inline-item active">
										<a href="">ALL</a>
									</li>
									<li className="list-inline-item">
										<a href="">Chairman</a>
									</li>
									<li className="list-inline-item">
										<a href="">Director</a>
									</li>
									<li className="list-inline-item">
										<a href="">Managing Director</a>
									</li>
								</ul> */}
									<div className="row">
										{item.data.items.map((item, index) => {
											return (
												<div className="col-xl-6" key={index}>
													<div className="media">
														<img height={118} className="align-self-start mr-3" src={`${item.thumb}`} alt={item.title} />
														<div className="media-body align-self-start">
															<h5 className="mt-0">{item.title}</h5>
															<h6>{item.categories[0].title}</h6>
															<Link route="director.show" slug={item.slug}>
																<a>
																	<button
																		type="button"
																		className="btn btn-border"
																		onClick={() => {
																			//this.modalOpen(item.title, item.content)
																		}}
																	>
																		Read More
																	</button>
																</a>
															</Link>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<Modal title={this.state.title} content={this.state.content} open={this.state.open} onClose={this.handleClose} />
				</div>
			</div>
		);
	}
}

export default Index;
