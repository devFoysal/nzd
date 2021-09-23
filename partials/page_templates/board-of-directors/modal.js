import React from 'react'
import Dialog from "@material-ui/core/Dialog";

class Modalimage extends React.Component {
	render() {
		const { title = "", content = "", classes, onClose, fullScreen, ...other } = this.props;

		return (
			<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other} open={this.props.open}>
				<div className="modal-image-section">
					<div className="menusclose" onClick={this.props.onClose}>
						<a className="close-section">
							<i className="fa fa-times-circle" />
						</a>
					</div>
					<h3>{title}</h3>
					<hr />
					<div
						className="image-full-width"
						dangerouslySetInnerHTML={{
							__html: content
						}}
					/>
				</div>
			</Dialog>
		);
	}
}

export default Modalimage;
