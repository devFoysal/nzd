import React from 'react'
import PropTypes from "prop-types";
// import Link from "next/link";
import { Link } from "../../common/components";

import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import variables from "../../common/variables";
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
	drawerWidth: {
		width: 500
	}
};

class SwipeableTemporaryDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navItems: [],
			open: false
		};
	}

	handleClose = () => {
		this.setState({ opens: false });
	};
	render() {
		const { classes } = this.props;

		return (
			<div>
				<SwipeableDrawer anchor="right" open={this.props.open} onClose={this.props.toggleDrawer} onOpen={this.props.toggleDrawer}>
					<div className="drawerWidth">
						<div className="drawer-body">
							<div className="drawer-sub-heading">
								<button type="button" className="btn btn-transparent" onClick={this.props.toggleDrawer}>
									<i className="fa fa-times-circle" />
								</button>
							</div>
							<div className="drawer-menu-holder list-unstyled">
								{this.props.smallnavData.map((ele, index) => {
									// console.log(ele);
									// let hasMenu = ele.menus.length > 0;
									let hasMenu = ele.children && ele.children.length > 0;

									// console.log(ele.children);
									return (
										<li key={index} className={`nav-item ${hasMenu && "dz"}`}>
											<Link route={ele.type} slug={ele.slug}>
												<a className={`nav-link ${hasMenu && "drop"}`} onClick={this.props.toggleDrawer}>
													{ele.title}
												</a>
											</Link>
											{hasMenu && (
												<div className="mg" aria-labelledby="navbarDropdown">
													{ele.children.map((menu, menuIndex) => {
														let hasMenu1 = menu.children && menu.children.length > 0;
														return (
															<div key={menuIndex}>
																<div className="m-left-menu">
																	<div className="menu-second-dr d">
																		<Link route={menu.type} slug={menu.slug}>
																			<a onClick={this.props.toggleDrawer}>{menu.title}</a>
																		</Link>

																		{/* <ul className="list-unstyled a">
																			{ele.children.map((menuChild, menuChildIndex) => (
																				<li key={menuChildIndex} className="abcd">
																					<Link href={menuChild.url}>
																						<a onClick={this.props.toggleDrawer}>{menuChild.title}</a>
																					</Link>
																				</li>
																			))}
																		</ul> */}
																	</div>
																	{
																		<ul className="list-unstyled second-child-data">
																			{hasMenu1 &&
																				menu.children.map((menuChilds, menuChildIndexs) => (
																					<li key={menuChildIndexs}>
																						<Link route={menuChilds.type} slug={menuChilds.slug}>
																							<a className="newclass" onClick={this.props.toggleDrawer}>
																								{menuChilds.title}
																							</a>
																						</Link>
																					</li>
																				))}
																		</ul>
																	}
																</div>
															</div>
														);
													})}
												</div>
											)}
										</li>
									);
								})}
							</div>
						</div>
					</div>
				</SwipeableDrawer>
			</div>
		);
	}
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
