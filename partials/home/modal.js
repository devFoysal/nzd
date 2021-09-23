import React from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const styles = {
	new: {
		//background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 3,
		border: 0,
		color: "white",
		// height: window.height,
		padding: 0,
		backgroundColor: "#ffffffe6"
		// opacity: 0.6
	}
};

class ModalVideo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props);
		return (
			<Dialog
				open={this.props.open}
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.76)"
				}}
				keepMounted
				onClose={this.props.onClose}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
			>
				<div className="padding-modal">
					<button type="button" className="close close-icon" onClick={this.props.onClose}>
						<span aria-hidden="true">&times;</span>
					</button>
					<iframe id="videotest" className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM?" frameBorder="0" scrolling="no" allow="autoplay" />
				</div>
			</Dialog>
		);
	}
}

export default withStyles(styles)(ModalVideo);
