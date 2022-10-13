import styled from 'styled-components';

export const CardProducts = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	gap: 0px;
	height: 241px;
	margin: 30px;
	@media (min-width: 768px) {
		width: 20%;
	}
`;

export const ImagesProducts = styled.img`
	width: 100%;
	height: fit-content;
	margin: 0 auto;
	@media (min-width: 768px) {
		background-color: #f5f5f5;
	}
`;

export const TittleProduct = styled.h5``;

export const ProductCategory = styled.h5`
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	margin: 0;
`;

export const PriceDescription = styled.p`
	color: #27ae60;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
`;

export const BntAdd = styled.button`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	background-color: #27ae60;
	color: white;
	border-radius: 8px;
	border: none;
	height: 40px;
	width: 106px;
	cursor: pointer;
	&:hover {
		background-color: white;
		color: #27ae60;
		border: 1px solid #27ae60;
	}
	@media (min-width: 768px) {
		border-radius: 3px;
		width: 90px;
	}
`;
