import React from 'react'
import { Link } from "../../common/components";
import DrawerNew from "./Drawer";
import Search from "./seachbar";
import variables from "../../common/variables";
import { getRequest } from "../../common/API";
import { connect } from "react-redux";
import { loadNavigation } from "../../redux/reducers/common/index.actions";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			opens: false,
			width: 500,
			currentMainMenu: [],
			loading: false
		};
	}

	componentDidMount() {
		this._loadData();
	}

	_loadData() {
		// console.log(this.props.mainNavigation.createdAt);
		this.setState({ loading: true }, () => {
			if (variables.shouldRefetch(this.props.mainNavigation.createdAt) || this.props.mainNavigation.data.length == 0) {
				getRequest(variables.apiUrls.getNavigation).then((data) => {
					// console.log(data);
					let obj = {
						data: data,
						createdAt: new Date().getTime()
					};
					this.props.dispatch(loadNavigation(obj));
					this.setState(
						{
							loading: false
						},
						() => {
							this._loadMenu();
						}
					);
				});
			} else {
				this.setState(
					{
						loading: false
					},
					() => {
						this._loadMenu();
					}
				);
			}
		});
	}

	_loadMenu = () => {
		const { mainNavigation } = this.props;
		const menu1 = mainNavigation.data;
		this.setState({
			currentMainMenu: menu1 ? menu1 : []
		});
	};

	toggleDrawer = () => {
		this.setState({ open: !this.state.open });
	};
	handleClose = () => {
		this.setState({ opens: false });
	};

	handleClickOpen = () => {
		this.setState({
			opens: true
		});
	};

	render() {
		let smallnavData=this.props.mainNavigation.data;
		let currentMainMenu = this.state.currentMainMenu;
	
		return (
			<nav className="navbar navbar-expand-lg navbar-light navbar-menu">
				<div className="container">
					<Link route="/">
						<a className="navbar-brand">
							<img width="115" src="/static/images/logo.png" />
						</a>
					</Link>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={this.toggleMenu}
					>
						<i className="fa fa-bars" onClick={this.toggleDrawer} />
						<DrawerNew smallnavData={smallnavData}   open={this.state.open} width={this.state.width} toggleDrawer={this.toggleDrawer} />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						{currentMainMenu && currentMainMenu.length > 0 && (
							<ul className="navbar-nav ml-auto">
								{currentMainMenu.map((item, index) => {
									let hasMenu = item.children && item.children.length > 0;
									// let hasMenuseconnd = item.children.children && item.children.children.length > 0;

									return (
										<li key={index} className={`nav-item ${hasMenu && "dropdown dr-menu"}`}>
											<Link route={item.type} slug={item.slug}>
												<a className={`nav-link ${hasMenu && "dropdown-toggle"}`}>
													{item.title}
													{hasMenu && (
														<span>
															<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path
																	d="M0.189223 5.89754C0.32584 6.03415 0.547842 6.03415 0.684459 5.89754L5.03911 1.53435L9.4023 5.89754C9.53892 6.03415 9.76092 6.03415 9.89754 5.89754C10.0342 5.76092 10.0342 5.53892 9.89754 5.4023L5.29527 0.800033C5.22696 0.731725 5.14157 0.697571 5.04765 0.697571C4.96226 0.697571 4.86834 0.731725 4.80003 0.800033L0.197762 5.4023C0.0526075 5.53892 0.0526075 5.76092 0.189223 5.89754Z"
																	fill="#E90E8B"
																/>
															</svg>
														</span>
													)}
												</a>
											</Link>
											{hasMenu && (
												<div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">
													<div className="container-fluid">
														<div className="row">
															<div className="col-xl-4 no-padding">
																<div className="b-c">
																	<h3>{item.title}</h3>

																	<Link route={item.type} slug={item.slug}>
																		<a>View More</a>
																	</Link>
																</div>
															</div>
															<div className="col-xl-8 no-padding">
																<div className=" p-padding menu-item-third">
																	{item.children.map((menu, menuIndex) => (
																		<div key={menuIndex}>
																			<div className="m-left-menu">
																				<div className="menu-second-dr">
																					<p className="menu-position-relatives">
																						<Link route={menu.type} slug={menu.slug}>
																							<a>{menu.title}
																							{/* {
																								JSON.stringify(menu)
																							} */}
																							{menu.children && (
																									<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.395508 11.9375L5.18717 7.14587L0.395508 2.35421L1.85384 0.895874L8.10384 7.14587L1.85384 13.3959L0.395508 11.9375Z" fill="#238059"></path></svg>
																								)}
																							
																							</a>
																						</Link>
																						<ul className="list-unstyled position-changed">
																						{menu.children &&
																							menu.children.map((menuChild, menuChildIndex) => (
																								<li key={menuChildIndex}>
																									<Link route={menuChild.type} slug={menuChild.slug}>
																										<a>{menuChild.title}</a>
																									</Link>
																								</li>
																							))}
																					</ul>
																					</p>
																					{/* <ul className="list-unstyled">
																						{menu.children &&
																							menu.children.map((menuChild, menuChildIndex) => (
																								<li key={menuChildIndex}>
																									<Link route={menuChild.type} slug={menuChild.slug}>
																										<a>{menuChild.title}</a>
																									</Link>
																								</li>
																							))}
																					</ul> */}
																				</div>
																			</div>
																		</div>
																	))}
																</div>
															</div>
														</div>
													</div>
												</div>
											)}
										</li>
									);
								})}

								<li className="nav-item " onClick={this.handleClickOpen}>
									<a href="javascript:void(0)" className="nav-link">
										<svg xmlns="http://www.w3.org/2000/svg" width="20.275" height="21" viewBox="0 0 20.275 21">
											<path
												id="search"
												d="M20.95,19.128l-5-5.2a8.475,8.475,0,1,0-6.49,3.028,8.388,8.388,0,0,0,4.858-1.534l5.036,5.238a1.106,1.106,0,1,0,1.594-1.533ZM9.463,2.212A6.267,6.267,0,1,1,3.2,8.479,6.274,6.274,0,0,1,9.463,2.212Z"
												transform="translate(-0.984)"
												fill="#299568"
											/>
										</svg>
									</a>
								</li>
								<Search open={this.state.opens} onClose={this.handleClose} />
							</ul>
						)}
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		mainNavigation: state.common.mainNavigation
	};
}

export default connect(mapStateToProps)(Navigation);
