import styled from 'styled-components';

export const DivMain = styled.div`
	@media (min-width: 768px) {
		position: fixed;
		right: 90px;
		top: 20vh;
		width: 30vw;
		height: 50vh;
	}
`;

export const StyleGreenPart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 700;
	font-size: 16px;
	background-color: #27ae60;
	height: 40px;
	border-radius: 8px 8px 0 0;
	@media (min-width: 768px) {
		width: 100%;
		height: 20%;
	}
`;

export const CardShoppingCard = styled.div`
	display: flex;
	flex-direction: column;
	height: 180px;
	width: 100%;
	overflow: scroll;
	@media (min-width: 768px) {
		width: 100%;
		height: 60%;
		overflow-x: hidden;
	}
`;
