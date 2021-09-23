import React from 'react'
import { validateEmail } from "../../../common/helpers";

const INITIAL_DATA = {
	name: "",
	email: "",
	message: "",
	loading: false,
	validationError: true,
	errors: {
		name: "",
		email: "",
		message: ""
	}
};

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			...INITIAL_DATA
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			errors: {},
			validationError: false
		});
	};

	handleSubmit = (e) => {
		e && e.preventDefault();

		let name = this.state.name;
		let email = this.state.email;
		let message = this.state.message;

		let errors = {};
		let validationError = false;

		if (name.length < 3) {
			errors.name = "Your name can not be less than 3 characters";
			validationError = true;
		}

		if (!validateEmail(email)) {
			errors.email = "Your email address is invalid";
			validationError = true;
		}

		if (message.length < 10) {
			errors.message = "Your message can not be less than 10 characters";
			validationError = true;
		}

		this.setState(
			{
				errors,
				validationError
			},
			() => {
				//
				//
			}
		);
	};

	render() {
		return (
			<div className="form-section f-s">
				<div className="container">
					<div className="row bg-row">
						<div className="col-xl-6">
							<div className="form-img-left">
								<img src="/static/images/imgleft.png" />
							</div>
						</div>
						<div className="col-xl-6">
							<form onSubmit={this.handleSubmit}>
								<h3 style={{ marginBottom: "20px" }}>Send us a message</h3>

								<div className="form-group">
									<input
										name="name"
										type="text" //
										className="form-control"
										placeholder="Your Name"
										value={this.state.name}
										onChange={this.handleChange}
										required
									/>
									{this.state.validationError && (
										<div className="invalid-feedback" style={{ display: "block" }}>
											{this.state.errors["name"]}
										</div>
									)}
								</div>
								<div className="form-group">
									<input
										name="email"
										type="email" //
										className="form-control"
										placeholder="Enter email"
										value={this.state.email}
										onChange={this.handleChange}
										required
									/>
									{this.state.validationError && (
										<div className="invalid-feedback" style={{ display: "block" }}>
											{this.state.errors["email"]}
										</div>
									)}
								</div>
								<div className="form-group">
									<textarea
										name="message" //
										className="form-control"
										placeholder="Your message"
										value={this.state.message}
										onChange={this.handleChange}
									/>
									{this.state.validationError && (
										<div className="invalid-feedback" style={{ display: "block" }}>
											{this.state.errors["message"]}
										</div>
									)}
								</div>
								<button type="submit" className="btn btn-all" onClick={this.handleSubmit}>
									Send
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
