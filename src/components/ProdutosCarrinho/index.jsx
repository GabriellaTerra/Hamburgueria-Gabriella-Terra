import {
	CardProductsCart,
	CardDivImage,
	ImagesProductsCart,
	CardDivDescription,
	TittleProductCart,
	ProductCategoryCart,
	PriceDescriptionCart,
	BntAddCart,
	CardDivPriceAndBnt,
} from './style.js';

function ProdutosCarrinho({
	name,
	category,
	price,
	img,
	buttonText,
	onClick,
	product,
}) {
	return (
		<CardProductsCart>
			<CardDivImage>
				<ImagesProductsCart src={img} alt="hamburger-img" />
			</CardDivImage>
			<CardDivDescription>
				<TittleProductCart>{name}</TittleProductCart>
				<ProductCategoryCart>{category}</ProductCategoryCart>
			</CardDivDescription>
			<CardDivPriceAndBnt>
				<PriceDescriptionCart>R${price.toFixed(2)}</PriceDescriptionCart>
				<BntAddCart onClick={() => onClick(product)}>{buttonText}</BntAddCart>
			</CardDivPriceAndBnt>
		</CardProductsCart>
	);
}

export default ProdutosCarrinho;
