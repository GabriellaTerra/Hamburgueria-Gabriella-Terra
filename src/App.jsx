import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		setTimeout(5000);
		fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
			.then((response) => response.json())
			.then((json) => {
				setProducts(json);
				setFilteredProducts(json);
			});
	}, []);

	console.log(currentSale);

	return (
		<div className="App">
			<Header
				products={products}
				setFilteredProducts={setFilteredProducts}
			></Header>
			<ProductsList
				products={filteredProducts}
				setCurrentSale={setCurrentSale}
				currentSale={currentSale}
			/>
			<ShoppingCart
				currentSale={currentSale}
				setCurrentSale={setCurrentSale}
				setCartTotal={setCartTotal}
				cartTotal={cartTotal}
			/>
		</div>
	);
}

export default App;
