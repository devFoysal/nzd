import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "../../common/components";
import { postRequest } from "../../common/API";
import variables from "../../common/variables";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Zoom {...props} />;
});

const popularQueries = [
	{
		title: "Calci Pro",
		slug: "calci-pro",
		itemType: "brands"
	},
	{
		title: "Detos",
		slug: "detos",
		itemType: "brands"
	},
	{
		title: "Diploma",
		slug: "diploma",
		itemType: "brands"
	},
	{
		title: "Shape Up",
		slug: "shape-up",
		itemType: "brands"
	}
];

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: "",
			results: [],
			loading: false
		};
	}

	_handleInput = (event) => {
		event && event.preventDefault();
		this.setState(
			{
				[event.target.name]: event.target.value
			},
			() => {
				if (this.state.query && this.state.query.length > 2) {
					this.getInfo();
				} else {
					this.setState({
						results: []
					});
				}
			}
		);
	};

	getInfo = () => {
		postRequest(variables.apiUrls.search(this.state.query)).then((data) => {
			// console.log(data);
			this.setState({
				results: data
			});
		});
	};

	render() {
		const { locale, classes, onClose, fullScreen, selectedValue, ...other } = this.props;

		return (
			<Dialog
				TransitionComponent={Transition} //
				open={this.props.open}
				keepMounted
				onClose={this.props.onClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div className="modal modal-search-store" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
					<div className="c-modal-color">
						<div className="">
							<div className="form-group ph-width nopadding-bottom">
								<label className="h6small" />
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">
											<svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M19.7142 18.2942L16.0342 14.6142C17.4689 12.8167 18.161 10.5381 17.9684 8.24625C17.7758 5.95443 16.7131 3.8233 14.9985 2.29043C13.2839 0.757552 11.0475 -0.0607544 8.74849 0.00351862C6.44949 0.0677916 4.26232 1.00977 2.63604 2.63604C1.00977 4.26232 0.0677916 6.44949 0.00351862 8.74849C-0.0607544 11.0475 0.757552 13.2839 2.29043 14.9985C3.8233 16.7131 5.95443 17.7758 8.24625 17.9684C10.5381 18.161 12.8167 17.4689 14.6142 16.0342L18.2942 19.7142C18.3872 19.808 18.4978 19.8824 18.6197 19.9331C18.7415 19.9839 18.8722 20.01 19.0042 20.01C19.1362 20.01 19.267 19.9839 19.3888 19.9331C19.5107 19.8824 19.6213 19.808 19.7142 19.7142C19.808 19.6213 19.8824 19.5107 19.9331 19.3888C19.9839 19.267 20.01 19.1362 20.01 19.0042C20.01 18.8722 19.9839 18.7415 19.9331 18.6197C19.8824 18.4978 19.808 18.3872 19.7142 18.2942ZM2.00423 9.00424C2.00933 7.85743 2.2961 6.72944 2.83935 5.71945C3.38259 4.70947 4.16566 3.84842 5.11969 3.21202C6.07373 2.57562 7.16952 2.18337 8.31069 2.06976C9.45186 1.95615 10.6035 2.12465 11.6643 2.56046C12.725 2.99626 13.6625 3.68602 14.3942 4.56908C15.1259 5.45213 15.6295 6.50144 15.8606 7.62473C16.0917 8.74802 16.0432 9.91088 15.7196 11.0111C15.3959 12.1113 14.8068 13.1151 14.0042 13.9342C13.0212 14.9095 11.771 15.5713 10.4118 15.8359C9.05265 16.1005 7.6455 15.956 6.36842 15.4208C5.09133 14.8856 4.00168 13.9836 3.2373 12.829C2.47293 11.6743 2.06817 10.3189 2.07423 8.93424L2.00423 9.00424Z"
													fill="black"
												/>
											</svg>
										</span>
									</div>
									<input
										autoFocus={true} //
										className="form-control"
										placeholder="Enter Your Keyword"
										name="query"
										valu={this.state.value}
										onChange={this._handleInput}
									/>
									<a href="javascript:void(0)" className="input-group-append" data-dismiss="modal">
										<span className="input-group-text" onClick={this.props.onClose}>
											<svg width={13} height={13} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M13.5512 0.448971C13.8832 0.780917 13.8832 1.31911 13.5512 1.65105L1.65124 13.5511C1.31929 13.883 0.7811 13.883 0.449155 13.5511C0.117209 13.2191 0.117209 12.6809 0.449155 12.349L12.3492 0.448971C12.6811 0.117026 13.2193 0.117026 13.5512 0.448971Z"
													fill="black"
													fillOpacity="0.4"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M0.449155 0.448971C0.7811 0.117026 1.31929 0.117026 1.65124 0.448971L13.5512 12.349C13.8832 12.6809 13.8832 13.2191 13.5512 13.5511C13.2193 13.883 12.6811 13.883 12.3492 13.5511L0.449155 1.65105C0.117209 1.31911 0.117209 0.780917 0.449155 0.448971Z"
													fill="black"
													fillOpacity="0.4"
												/>
											</svg>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="dropdown-search-list">
						<ul className="list-unstyled">
							{this.state.query.length > 0 && this.state.results.length > 0
								? this.state.results.map((item, key) => {
										return (
											<li key={key} onClick={this.props.onClose}>
												<Link route={item.itemType} slug={item.slug}>
													<a>
														{item.title}{" "}
														<span className="badge badge-light" style={{ float: "right", fontWeight: 400 }}>
															{item.itemType}
														</span>
													</a>
												</Link>
											</li>
										);
								  })
								: popularQueries.map((item, key) => {
										return (
											<li key={key} onClick={this.props.onClose}>
												<Link route={item.itemType} slug={item.slug}>
													<a>{item.title}</a>
												</Link>
											</li>
										);
								  })}
						</ul>
					</div>
				</div>
			</Dialog>
		);
	}
}

export default Search;
