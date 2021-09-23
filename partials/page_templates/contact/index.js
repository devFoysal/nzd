import { PageBanner } from "../../../common/components";
import Form from "./form";
function Contacts({ item }) {
	const officeInfo = item.data.sections.officeInfo;

	return (
		<div>
			{item.image && (
				<PageBanner
					image={item.image} //
					title={item.title}
					// headline={item.short_content}
				/>
			)}
			<div
				// className={this.props.Headoffice == true ? `sliderimage-carosual head-data` : `sliderimage-carosual head-data contact-data factoty-data`}
				className={`sliderimage-carosual head-data`}
			>
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							{officeInfo.data.map((item, key) => {
								const officeData = [
									{
										title: item.address,
										img: "location.svg"
									},
									{
										title: item.email,
										img: "message.svg"
									},
									{
										title: item.phoneNumber,
										img: "phone-call.svg"
									},
									{
										title: item.faxNumber,
										img: "scanner.svg"
									}
								];
								return (
									<div className="t-slider-item" key={key}>
										<h3>{item.officeType}</h3>
										<div className="row">
											{key % 2 == 0 ? (
												<>
													<div className="col-xl-6">
														{officeData.map((item, index) => {
															return (
																<div className="media">
																	<img className="align-self-start mr-3" src={`/static/images/${item.img}`} alt="Generic placeholder image" width="40px" />
																	<div className="media-body">
																		<p>{item.title}</p>
																	</div>
																</div>
															);
														})}
													</div>
													<div className="col-xl-6">
														<iframe
															className="mar-top"
															src={item.mapEmbedUrl} //
															width={600}
															height={450}
															frameBorder={0}
															style={{ border: 0 }}
															allowFullScreen
														/>
													</div>
												</>
											) : (
												<>
													<div className="col-xl-6">
														<iframe
															
															src={item.mapEmbedUrl} //
															width={600}
															height={450}
															frameBorder={0}
															style={{ border: 0 }}
															allowFullScreen
														/>
													</div>
													<div className="col-xl-6 m-l">
														{officeData.map((item, index) => {
															return (
																<div className="media ">
																	<img className="align-self-start mr-3" src={`/static/images/${item.img}`} alt="Generic placeholder image" width="40px" />
																	<div className="media-body">
																		<p>{item.title}</p>
																	</div>
																</div>
															);
														})}
													</div>
												</>
											)}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{officeInfo.showForm == "yes" && <Form />}
		</div>
	);
}
export default Contacts;
