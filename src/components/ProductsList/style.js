import styled from 'styled-components';

export const ListProducts = styled.ul`
	display: flex;
	width: 100%;
	height: 50%;
	overflow: scroll;
	padding: 0;
	margin-left: 0;
	@media (min-width: 768px) {
		margin-left: 50px;
		width: 50%;
		height: 700px;
		flex-wrap: wrap;
		overflow: hidden;
	}
`;
