import styled from 'styled-components';

export const HeaderProducts = styled.header`
	margin: 0;
	@media (min-width: 768px) {
		justify-content: space-around;
		align-items: center;
		flex-direction: row;
		display: flex;
		gap: 35vw;
		background-color: #e0e0e0;
	}
`;
export const CardLogo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	height: 50px;
	@media (min-width: 768px) {
		justify-content: flex-start;
		margin: 10px;
	}
`;

export const TittleBurger = styled.h1``;
export const TittleKenzie = styled.h2`
	color: #eb5757;
	font-size: 20px;
`;
export const CardInputAndBnt = styled.div`
	display: flex;
	@media (min-width: 768px) {
		justify-content: flex-end;
		width: 30%;
		margin-right: 40px;
		margin-top: 0px;
	}
`;
export const InputCard = styled.input`
	border-radius: 8px 0 0 8px;
	border: none;
	background-color: #e0e0e0;
	width: 80%;
	height: 40px;
	@media (min-width: 768px) {
		width: 100%;
		background-color: white;
	}
`;
export const ButtonSearch = styled.button`
	background-color: #27ae60;
	color: white;
	border-radius: 0 8px 8px 0;
	border: none;
	width: 100px;
	height: 42px;
	cursor: pointer;
	&:hover {
		background-color: white;
		color: #27ae60;
		border: 1px solid #27ae60;
	}
`;
