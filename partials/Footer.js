import React from 'react'
import variables from "./../common/variables";
import { Link } from "../common/components";
import { getRequest } from "../common/API";
import { connect } from "react-redux";
import { loadFooter } from "../redux/reducers/common/index.actions";

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			main: [],
			info: [],
			social: [],
			bottom: [],
			loading: false
		};
	}

	componentDidMount() {
		this._loadData();
	}

	_loadData() {
		if (variables.shouldRefetch(this.props.footer.createdAt)) {
			getRequest(variables.apiUrls.getFooter).then((data) => {
				// console.log(data);
				let obj = {
					data: data,
					createdAt: new Date().getTime()
				};
				//alert(obj);
				this.props.dispatch(loadFooter(obj));
				this.setState({
					loading: false,
					main: data.main || [],
					info: data.info || [],
					social: data.social || [],
					bottom: data.bottom || []
				});
			});
		} else {
			// console.log(this.props.footer);
			this.setState({
				main: this.props.footer.data.main || [],
				info: this.props.footer.data.info || [],
				social: this.props.footer.data.social || [],
				bottom: this.props.footer.data.bottom || [],
				loading: false
			});
		}
	}

	render() {
		const { main, info, social, bottom } = this.state;

		const renderMain =
			main &&
			main.length > 0 &&
			main.map((i, k) => {
				return (
					<div className="col-xl-3" key={k}>
						<ul className="list-unstyled">
							<li>
								<Link slug={i.slug} route={i.type}>
									<a>{i.title}</a>
								</Link>
							</li>
							{i.children &&
								i.children.map((j, l) => {
									return (
										<li key={l}>
											<Link slug={j.slug} route={j.type}>
												<a>{j.title}</a>
											</Link>
										</li>
									);
								})}
						</ul>
					</div>
				);
			});

		const renderInfo =
			info &&
			info.length > 0 &&
			info.map((i, k) => {
				return <p key={k}>{i.title}</p>;
			});

		const renderSocial =
			social &&
			social.length > 0 &&
			social.map((i, k) => {
				return (
					<li className="list-inline-item" key={k}>
						<a
							href={i.slug}
							target="_blank"
							dangerouslySetInnerHTML={{
								__html: i.title
							}}
						/>
					</li>
				);
			});

		const renderBottom =
			bottom &&
			bottom.length > 0 &&
			bottom.map((i, k) => {
				return <p key={k}>{i.title}</p>;
			});

		return (
			<footer>
				<div className="big-footer">
					<div className="container">
						<div className="row">
							{renderMain}
							<div className="col-xl-3" key={4000}>
								<div>
									<address style={{ marginTop: "40px" }}>{renderInfo}</address>
									<ul className="list-inline l-item l-i">{renderSocial}</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="small-footer">{renderBottom}</div>
			</footer>
		);
	}
}

function mapStateToProps(state) {
	return {
		footer: state.common.footer
	};
}

export default connect(mapStateToProps)(Footer);
