import ProductSlider from "./ProductSlider";
import ProductContent from "./ProductContent";
import ReleatedArticles from "./ReleatedArticles";
const Index = ({ item }) => {
	// console.log(item);
	return (
		<div>
			<ProductSlider data={item.data.sections.custom.brandSlides} />
			<ProductContent item={item} />
			<ReleatedArticles
				productName={item.title} //
				articles={item.data.sections.custom.relatedArticles}
			/>
		</div>
	);
};
export default Index;
