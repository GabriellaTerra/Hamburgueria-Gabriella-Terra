import styled from 'styled-components';

export const CardProductsCart = styled.div`
	background-color: white;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	margin: 15px;
	margin-left: 0;
	justify-content: space-around;
	width: 100%;
	height: 90px;
`;

export const CardDivImage = styled.div`
	background-color: #e0e0e0;
	display: flex;
	width: 25%;
	height: 90%;
	justify-content: center;
	border-radius: 5px;
`;

export const CardDivDescription = styled.div`
	display: flex;
	justify-content: center;

	flex-direction: column;
`;

export const ImagesProductsCart = styled.img`
	width: 100%;
`;

export const TittleProductCart = styled.h5`
	font-size: 18px;
`;

export const ProductCategoryCart = styled.p`
	color: #828282;
	font-weight: 400;
`;

export const CardDivPriceAndBnt = styled.div`
	display: flex;

	flex-direction: column;
	justify-content: space-between;
`;

export const PriceDescriptionCart = styled.p`
	color: #828282;
	font-weight: 600;
`;

export const BntAddCart = styled.button`
	background-color: #e0e0e0;
	color: white;
	border: none;
	border-radius: 5px;
	height: 25px;
	cursor: pointer;
`;
