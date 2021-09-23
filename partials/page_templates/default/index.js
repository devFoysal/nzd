import React from 'react'
import { PageBanner } from "../../../common/components";

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { item } = this.props;
		return (
			<div className="wrapper-single">
				{item.image ? (
					<PageBanner
						image={item.image} //
						title={item.title}
						headline={item.short_content}
					/>
				) : null}

				<div className="content-company" style={{ height: "auto" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-12">
								<div className="content-data" dangerouslySetInnerHTML={{ __html: item.content }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Index;
