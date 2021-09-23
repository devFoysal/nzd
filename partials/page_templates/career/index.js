import { PageBanner, Link } from "../../../common/components";

export default function Index({ item }) {
	const custom = item.data.sections.custom;
	const featureList = item.data.sections.featureList;
	const whyJoin = item.data.sections.whyJoin;
	return (
		<>
			<div className="about-baner" style={{ backgroundImage: `url(${item.image})`, height: "400px", backgroundSize: "cover" }}>
				<div className="ct-width-data">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<div
									className="about-baner-left"
									style={{
										paddingTop: "25%"
									}}
								>
									<h1>{item.title}</h1>
									<Link route={custom.jobsBtnUrl}>
										<a className="btn-customlink b-li sm-show">{custom.jobsBtnText}</a>
									</Link>
								</div>
							</div>
							<div className="col-xl-6 sm-none">
								<div
									className="about-baner-left nobaner-left"
									style={{
										paddingTop: "25%"
									}}
								>
									<Link route={custom.jobsBtnUrl}>
										<a className="btn-customlink b-li">{custom.jobsBtnText}</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="life-geenex">
				<div className="container">
					<div className="row">
						<div className="c-header">
							<h3
								dangerouslySetInnerHTML={{
									__html: custom.title
								}}
							/>
							<h4>{custom.headline}</h4>
							<div
								dangerouslySetInnerHTML={{
									__html: custom.aboutText
								}}
							/>
						</div>
					</div>
					<div className="row">
						{featureList.data.map((i, k) => {
							return (
								<div className="col-md-4" key={k}>
									<div className="overview-image">
										<img src={i.icon} />
									</div>
									<div className="overview-head">
										<h3>{i.title}</h3>
									</div>
									<div className="overview-text">
										<p>{i.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			{/* <div className="cr-section">
				<div className="container">
					<div className="row">
						<div className="c-header">
							<h3
								dangerouslySetInnerHTML={{
									__html: whyJoin.title
								}}
							/>
						</div>
					</div>
					<div className="row r">
						{whyJoin.data.map((i, k) => {
							return (
								<div className="col-xl-3" key={k}>
									<div className="t-r text-center">
										<img src={i.icon} width="65px" />
										<p>{i.headline}</p>
										<h3>{i.title}</h3>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div> */}
		</>
	);
}
