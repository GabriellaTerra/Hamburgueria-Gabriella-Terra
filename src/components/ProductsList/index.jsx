import Product from '../Product';
import { ListProducts } from './style';

function ProductsList({ products, setCurrentSale, currentSale }) {
	function addCart(produto) {
		if (!currentSale.includes(produto)) {
			setCurrentSale([...currentSale, produto]);
		}
	}
	return (
		<ListProducts>
			{products.map((item) => (
				<Product
					buttonText={'Adicionar'}
					onClick={addCart}
					currentSale={currentSale}
					setCurrentSale={setCurrentSale}
					product={item}
					key={item.id}
					img={item.img}
					name={item.name}
					category={item.category}
					price={item.price}
				/>
			))}
		</ListProducts>
	);
}
export default ProductsList;
