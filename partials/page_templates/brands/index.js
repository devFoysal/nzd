import React from 'react'
import { Link, PageBanner, ReflectedContainer } from "../../../common/components";

class Index extends React.Component {
	__renderItem = (item, index) => {
		// console.log(item);
		return (
			<div className={index % 2 == 0 ? "its-imageleft flex-center cts-width  bgt" : "its-imageleft cts-width flex-center "} key={index}>
				<div className={index % 2 == 0 ? `col-md-6 col-12 col-sm-12 order-1` : `col-md-6 col-12 col-sm-12 order-0`}>
					<div className="i-img">
						<ReflectedContainer>
							<img src={item.thumb} width="351" />
						</ReflectedContainer>
					</div>
				</div>
				<div className="col-md-6 col-12 col-sm-12 its-imageleft__contents">
					<div className="title">
						<h2>{item.title}</h2>
					</div>
					<div className="title">
						<h2
							style={{
								fontSize: 22,
								marginTop: 10
							}}
						>
							{item.headline}
						</h2>
					</div>
					<div className="copy">
						<p>{item.short_content}</p>
					</div>
					<div className="duration-link ">
						<Link route="brand.show" slug={item.slug}>
							<a className="uppercase-link">Learn more</a>
						</Link>
					</div>
				</div>
			</div>
		);
	};

	render() {
		const { item } = this.props;
		return (
			<>
				{item.image && (
					<PageBanner
						image={item.image} //
						title={item.title}
						headline={item.short_content}
					/>
				)}

				<div className="market-catagory">
					<div>
						{item.data.items.map((i, k) => {
							return this.__renderItem(i, k);
						})}
					</div>
				</div>
			</>
		);
	}
}

export default Index;
