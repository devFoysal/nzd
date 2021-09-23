import React from 'react'
import Dialog from "@material-ui/core/Dialog";

class Modal extends React.Component {
	render() {
		const { image, classes, onClose, fullScreen, ...other } = this.props;

		return (
			<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other} open={this.props.open}>
				<div className="modal-image-section">
					<div className="menusclose" onClick={this.props.onClose}>
						<a className="close-section">
							<i className="fa fa-times-circle" />
						</a>
					</div>
					<h3>Nutrition Facts</h3>
					<div className="image-full-width">
						<img src={image} />
					</div>
				</div>
			</Dialog>
		);
	}
}

export default Modal;
