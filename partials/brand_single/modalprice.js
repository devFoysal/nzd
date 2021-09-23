import React from 'react'
import Dialog from "@material-ui/core/Dialog";

class Modal extends React.Component {
	render() {
		const { image, classes, onClose, fullScreen, data, ...other } = this.props;
		// console.log(data);
		return (
			<Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other} open={this.props.open}>
				<div className="modal-image-section modal-pad">
					<div className="menusclose" onClick={this.props.onClose}>
						<a className="close-section">
							<i className="fa fa-times-circle" />
						</a>
					</div>
					<div className="f-height">
						<div className="container">
							<div className="row">
								{data.map((item, index) => {
									return (
										<div className="col-xl-4" key={index}>
											<a href="#" className="i-sell">
												<img src={item.logo} />
												<p>{item.title}</p>
											</a>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</Dialog>
		);
	}
}

export default Modal;
