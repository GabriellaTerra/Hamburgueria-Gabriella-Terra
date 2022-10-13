import { CardTotalMoney, TittleTotalMoney, ValueDescription } from './style';

function TotalMoney({ currentSale, setCartTotal, cartTotal }) {
	const precos = currentSale.map((produto) => produto.price);

	const valores = precos.reduce(
		(previousValue, currentValue) => previousValue + currentValue,

		0
	);
	setCartTotal(valores.toFixed(2));
	console.log(cartTotal);

	return (
		<CardTotalMoney>
			<TittleTotalMoney>Total :</TittleTotalMoney>
			<ValueDescription>R$ {cartTotal} </ValueDescription>
		</CardTotalMoney>
	);
}
export default TotalMoney;
