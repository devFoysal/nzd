import React from 'react'
import { PageBanner, Link, VideoBanner } from "../../common/components";

const data = [
	{
		title: "Facebook",
		color: "#29487d",
		icon: "fa-facebook-f",
		url: (url, title = null) => {
			return `https://www.facebook.com/sharer.php?u=${url}`;
		}
	},
	{
		title: "Twitter",
		color: "#4dabf7",
		icon: "fa fa-twitter",
		url: (url, title) => {
			return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
		}
	}
];
class Index extends React.Component {
	state = {
		currentUrl: ""
	};

	componentDidMount() {
		this.setState({
			currentUrl: window.location.href
		});
	}

	render() {
		const { item } = this.props;

		let isVideo = false;

		if (item.categories && (item.categories[0].slug == "recipes" || item.categories[0].slug == "tvc")) {
			isVideo = true;
		}
		return isVideo ? (
			<VideoBanner title={item.title} youtubeId={item.headline} headline={item.categories[0].title} />
		) : (
			<>
				<PageBanner title={item.title} image={item.image} headline={item.categories[0].title} />
				<div className="blog-container-single">
					<div className="container">
						<div className="row blog-container-row">
							<div className="col-xl-12">
								<div
									className="row bg-border"
									style={{
										marginBottom: 20
									}}
								>
									<div className="col-xl-6">
										<h5>{item.headline}</h5>
									</div>
									<div className="col-xl-6">
										<div className="btn-right">
											<Link route={"/blogs"}>
												<a className="btn btn-custom">Back to all articles</a>
											</Link>
										</div>
									</div>
								</div>
								<div className="col-xl-12 no-padding">
									<div
										dangerouslySetInnerHTML={{
											__html: item.content
										}}
									/>

									<ul className="share-btn-list list-inline">
										{data.map((i, k) => {
											return (
												<li key={k} className="list-inline-item">
													<a
														target="_blank"
														href={i.url(this.state.currentUrl, item.title)}
														className="btn btn-fblink"
														style={{
															backgroundColor: `${i.color}`
														}}
													>
														<i className={`fa ${i.icon}`} />
														{i.title}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Index;
