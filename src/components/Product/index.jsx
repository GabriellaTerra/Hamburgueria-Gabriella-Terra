import {
	CardProducts,
	ImagesProducts,
	TittleProduct,
	ProductCategory,
	PriceDescription,
	BntAdd,
} from './style.js';

function Product({ name, category, price, img, buttonText, product, onClick }) {
	return (
		<CardProducts>
			<ImagesProducts src={img} alt="hamburger-img" />
			<TittleProduct>{name}</TittleProduct>
			<ProductCategory>{category}</ProductCategory>
			<PriceDescription>R${price.toFixed(2)}</PriceDescription>
			<BntAdd onClick={() => onClick(product)}>{buttonText}</BntAdd>
		</CardProducts>
	);
}

export default Product;
