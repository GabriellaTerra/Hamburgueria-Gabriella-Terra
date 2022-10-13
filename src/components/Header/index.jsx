import { useState } from 'react';
import {
	HeaderProducts,
	CardLogo,
	TittleBurger,
	TittleKenzie,
	CardInputAndBnt,
	InputCard,
	ButtonSearch,
} from './style';

function Header({ products, setFilteredProducts }) {
	const [inputValue, setInputValue] = useState('');

	function showProducts() {
		const produtosFiltrados = products.filter((product) =>
			product.name.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredProducts(produtosFiltrados);
		console.log(produtosFiltrados);
	}

	return (
		<HeaderProducts>
			<CardLogo>
				<TittleBurger>Burger</TittleBurger>
				<TittleKenzie> Kenzie</TittleKenzie>
			</CardLogo>
			<CardInputAndBnt>
				<InputCard
					id="myImput"
					className="searchItem"
					type="text"
					placeholder="Digitar Pesquisa"
					onChange={(event) => setInputValue(event.target.value)}
				/>
				<ButtonSearch onClick={showProducts}>Pesquisar</ButtonSearch>
			</CardInputAndBnt>
		</HeaderProducts>
	);
}
export default Header;
