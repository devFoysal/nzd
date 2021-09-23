import React from 'react'
import { PageBanner, Link } from "../../../common/components";

const INITIAL_STATE = {
	name: "",
	qualification: "",
	phone_number: "",
	email: "",
	current_salary: "",
	expected_salary: "",
	cv: null,
	error_messages: []
};

export default class Index extends React.Component {
	state = {
		modalopen: false,
		currentJob: {
			title: null,
			slug: null
		},
		loading: false,
		success: null,
		...INITIAL_STATE
	};
	modalopen = ({ title, slug }) => {
		this.setState({
			modalopen: true,
			currentJob: {
				title: title,
				slug: slug
			}
		});
	};
	modalClose = () => {
		this.setState({
			modalopen: false
		});
	};

	daysDiff = (YourDate) => {
		var TYear = new Date().getFullYear();
		var TDay = new Date(YourDate);
		TDay.getFullYear(TYear);
		var DayCount = (TDay - new Date()) / (1000 * 60 * 60 * 24);
		DayCount = Math.round(DayCount);
		return DayCount;
	};

	handleSubmit = () => {
		const { name, qualification, phone_number, email, current_salary, expected_salary, cv } = this.state;

		let error_messages = [];

		if (name.length == 0) {
			error_messages.push("Provide your name");
		}

		// if (qualification.length == 0) {
		// 	error_messages.push("Provide your qualification");
		// }
		if (phone_number.length !== 11) {
			error_messages.push("Provide your phone number in 11 digits");
		}
		if (email.length == 0) {
			error_messages.push("Provide your email");
		}

		if (!cv) {
			error_messages.push("Provide your CV");
		}

		if (error_messages.length > 0) {
			this.setState({
				success: false,
				error_messages: error_messages
			});
		} else {
			this.setState(
				{
					loading: true
				},
				() => {
					setTimeout(() => {
						this.setState({
							loading: false,
							success: true,
							...INITIAL_STATE
						});
					}, 3000);
				}
			);
		}
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	_handleFileChange = (e) => {
		let reader = new FileReader();
		let file = e.target.files[0];
		reader.onloadend = () => {
			this.setState(
				{
					cv: file
				},
				() => {
					// console.log(this.state.file);
					// console.log(this.state.imagePreviewUrl);
				}
			);
		};
		reader.readAsDataURL(file);
	};

	render() {
		const { item } = this.props;
		return (
			<>
				{/* <PageBanner
					title={item.title} //
					image={item.image}
				/> */}
				<div className="blog-container-single">
					<div className="container">
						<div className="row blog-container-row">
							<div className="col-xl-12">
								<div className="row bg-border">
									<div className="col-xl-12">
										<h5>All Available Jobs</h5>
									</div>
								</div>
								{item.data.items.map((i, k) => {
									return (
										<div className="job-item border-all" key={k}>
											<div className="job-header media">
												<img src={i.thumb} width={115} />
												<div className="media-body media-sp">
													<h4>{i.title}</h4>
													<h5>{this.daysDiff(i.publish_at)} days left</h5>
													<ul className="list-inline l-i-job">
														<li className="list-inline-item">
															<i className="fa fa-file-text-o" />
															<span>{i.categories[0].title}</span>
														</li>
														<li className="list-inline-item">
															<i className="fa fa-map-marker" />
															<span>{i.headline}</span>
														</li>
													</ul>
												</div>
												<div className="media-body">
													<Link route="job.show" slug={i.slug}>
														<a className="btn-customlink k-link" style={{ marginTop: 37 }}>
															View Details
														</a>
													</Link>
												</div>
											</div>

											{/* <div
												dangerouslySetInnerHTML={{
													__html: i.content
												}}
											/> */}

											{/* <div className="text-center clearfix m-t-3"> */}
											{/* <a
													href="javascript:void(0)"
													className="btn-customlink"
													style={{ marginTop: 20 }}
													onClick={() =>
														this.modalopen({
															title: i.title,
															slug: i.slug
														})
													}
												>
													Apply job
												</a> */}
											{/* <Link route="job.show" slug={i.slug}>
													<a className="btn-customlink" style={{ marginTop: 20 }}>
														View Details
													</a>
												</Link> */}
											{/* </div> */}
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="m-open-id">
						<div
							className={this.state.modalopen == true ? "modal fade show m-show" : "modal fade"}
							id="exampleModalCenter"
							tabIndex={-1}
							role="dialog"
							aria-labelledby="exampleModalCenterTitle"
							aria-hidden="true"
						>
							<div className="modal-dialog m-id-center" role="document">
								<div className="modal-content">
									<div className="modal-body">
										<h3>Apply Now</h3>
										{/* <p>Apply for this job with application form</p> */}
										<p>{this.state.currentJob.title}</p>
										<form onSubmit={this.handleSubmit} className="form-apply row">
											<div className="col-xl-6">
												<div className="form-group">
													<input
														type="text" //
														className="form-control"
														placeholder="Your Name"
														name="name"
														onChange={this.handleChange}
														value={this.state.name}
														readOnly={this.state.loading}
													/>
												</div>
											</div>
											{/* <div className="col-xl-6">
												<div className="form-group">
													<select className="form-control" id="sel1" disabled={true}>
														<option>{this.state.currentJob.title}</option>
													</select>
												</div>
											</div> */}
											{/* <div className="col-xl-4">
												<div className="form-group">
													<input
														type="text" //
														className="form-control"
														placeholder="Recent academic qualification"
														name="qualification"
														onChange={this.handleChange}
														value={this.state.qualification}
														readOnly={this.state.loading}
													/>
												</div>
											</div> */}
											<div className="col-xl-6">
												<div className="form-group">
													<input
														type="text" //
														className="form-control"
														placeholder="Phone number"
														name="phone_number"
														onChange={this.handleChange}
														value={this.state.phone_number}
														readOnly={this.state.loading}
													/>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group">
													<input
														type="email" //
														className="form-control"
														placeholder="Email"
														name="email"
														onChange={this.handleChange}
														value={this.state.email}
														readOnly={this.state.loading}
													/>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group">
													<input
														type="text" //
														className="form-control"
														placeholder="Current Salary"
														name="current_salary"
														onChange={this.handleChange}
														value={this.state.current_salary}
														readOnly={this.state.loading}
													/>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group">
													<input
														type="text" //
														className="form-control"
														placeholder="Expected Salary"
														name="expected_salary"
														onChange={this.handleChange}
														value={this.state.expected_salary}
														readOnly={this.state.loading}
													/>
												</div>
											</div>
											{/* <div className="col-xl-12">
												<div className="form-group">
													<textarea className="form-control" name id placeholder="residence" defaultValue={""} />
												</div>
											</div> */}
											<div className="col-xl-12">
												<div className="form-group">
													<label>Your CV</label>
													<input
														type="file" //
														className="form-control-file"
														id="exampleFormControlFile1"
														onChange={(e) => this._handleFileChange(e)}
														readOnly={this.state.loading}
													/>
												</div>
											</div>
										</form>
									</div>
									{this.state.success ? (
										<div className="alert alert-primary" role="alert">
											Thank you for submitting. We will contact you soon.
										</div>
									) : (
										this.state.error_messages.length > 0 && (
											<div className="row">
												<div className="col-md-6" style={{ margin: "0 auto" }}>
													<div className="alert alert-danger">
														<strong>Sorry!</strong> Please check the following errors to proceed:
														<br />
														<br />
														<ul>
															{this.state.error_messages.map((i, k) => {
																return <li key={k}>{i}</li>;
															})}
														</ul>
													</div>
												</div>
											</div>
										)
									)}

									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" onClick={this.modalClose}>
											Close
										</button>
										<button onClick={this.handleSubmit} type="button" className="btn btn-primary">
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
