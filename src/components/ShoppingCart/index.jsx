import CardCart from '../CardCart';
import TotalMoney from '../TotalMoney';
import { CardShoppingCard, StyleGreenPart, DivMain } from './style';

function ShoppingCart({
	currentSale,
	setCartTotal,
	cartTotal,
	setCurrentSale,
}) {
	return (
		<DivMain>
			<StyleGreenPart>Carrinho de compras</StyleGreenPart>
			<CardShoppingCard>
				<CardCart setCurrentSale={setCurrentSale} currentSale={currentSale} />
			</CardShoppingCard>
			<TotalMoney
				currentSale={currentSale}
				setCartTotal={setCartTotal}
				cartTotal={cartTotal}
			/>
		</DivMain>
	);
}
export default ShoppingCart;
