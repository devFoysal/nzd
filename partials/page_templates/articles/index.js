import React from 'react'
import { PageBanner, Link } from "../../../common/components";
import { Router } from "../../../routes";

export default class Index extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			category: null
		};
	}

	setCategory = () => {
		if (Router.query.category) {
			this.setState({
				category: Router.query.category
			});
		} else {
			this.setState({
				category: null
			});
		}
	};

	componentDidMount() {
		this.setCategory();
	}

	componentWillReceiveProps() {
		this.setCategory();
	}

	componentDidUpdate() {
		// console.log("componentDidUpdate");
	}

	renderBlock = (item, index) => {
		let backgroundImage = null;
		let playIcon = false;
		let styles = null;

		if (item.categories && (item.categories[0].slug == "recipes" || item.categories[0].slug == "tvc")) {
			backgroundImage = `https://img.youtube.com/vi/${item.headline}/hqdefault.jpg`;
			playIcon = true;
			styles = {
				height: 300,
				backgroundImage: `url("${backgroundImage}")`, //
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundColor: "#000",
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			};
		} else {
			backgroundImage = item.thumb;
			styles = {
				backgroundImage: `url("${backgroundImage}")`, //
				backgroundSize: "cover",
				height: 300,
				display: "block"
			};
		}
		return (
			<article
				style={
					{
						// minHeight: 600
					}
				}
				className="carditem col-xl-4 col-sm-12"
				key={index}
			>
				<Link route="article.show" slug={item.slug}>
					<a
						style={{
							display: "block",
							color: "black",
							height: "100%"
						}}
					>
						<picture className="" style={styles}>
							{playIcon && (
								<>
									<img
										style={{
											// position: "absolute",
											// left: "50%",
											// right: "50%",
											// top: "50%",
											// bottom: "50%",
											width: 60
										}}
										src="/static/images/play.png"
									/>
									{/* <div
										style={{
											position: "absolute",
											bottom: 30,
											left: 30
										}}
									>
										<h5 style={{ color: "#fff" }}>{item.categories[0].title}</h5>
										<h3 style={{ color: "#fff" }}>{item.title}</h3>
									</div> */}
								</>
							)}
						</picture>
						{
							<div className="card-content">
								<h5>{item.categories[0].title}</h5>
								<h3>{item.title}</h3>
								<p>{item.short_content && item.short_content.length > 190 ? item.short_content.substring(0, 190) + "..." : item.short_content}</p>
								<div className="duration-link customlink">
									<Link route="article.show" slug={item.slug}>
										<a className="uppercase-link">Learn more</a>
									</Link>
								</div>
							</div>
						}
					</a>
				</Link>
			</article>
		);
	};

	render() {
		const { item } = this.props;

		// console.log(item);
		return (
			<div>
				<PageBanner title={item.title} image={item.image} />
				<div className="market-catagory m-cat">
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<ul className="nav justify-content-center content-tab">
									<li className={`nav-item ${!this.state.category && "active"}`}>
										<Link route="/blogs">
											<a className="nav-link">All</a>
										</Link>
									</li>

									{item.data.categories.map((i, k) => {
										return (
											<li className={`nav-item ${this.state.category == i.slug && "active"}`} key={k}>
												<Link route="page" slug="blogs" params={{ category: i.slug }}>
													<a className="nav-link">{i.title}</a>
												</Link>
											</li>
										);
									})}
								</ul>
							</div>
						</div>

						<div className="row">
							<div className="col-xl-12">
								<section className="cards">
									{item.data.items.map((i, k) => {
										return this.renderBlock(i, k);
									})}
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
