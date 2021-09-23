import React from 'react'
class HomeAbout extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<div className="home-about">
				<div className="container">
					<div className="row about-bg-color">
						<div className="col-xl-5 item-middle">
							<div className="home-about-left">
								{
									data.heading.length > 0 && (<h6>{data.heading}</h6>)
								}
								<h1>{data.title}</h1>
							</div>
						</div>
						<div className="col-xl-7">
							<div className="home-about-right">
								<div
									dangerouslySetInnerHTML={{
										__html: data.content
									}}
								/>

								<div className="btn-link">
									<a href={data.btnUrl} className="btn btn-customlink">
										{data.btnText}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeAbout;
