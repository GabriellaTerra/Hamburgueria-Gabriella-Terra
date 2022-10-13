import ProdutosCarrinho from '../ProdutosCarrinho';

function CardCart({ setCurrentSale, currentSale }) {
	function removeProduct(produto) {
		const filteredProducts = currentSale.filter(
			(item) => item.id !== produto.id
		);
		setCurrentSale(filteredProducts);
	}

	return (
		<div>
			{currentSale.map((item) => (
				<ProdutosCarrinho
					buttonText={'Remover'}
					onClick={removeProduct}
					currentSale={currentSale}
					setCurrentSale={setCurrentSale}
					product={item}
					key={item.id}
					img={item.img}
					name={item.name}
					category={item.category}
					price={item.price}
				></ProdutosCarrinho>
			))}
		</div>
	);
}
export default CardCart;
