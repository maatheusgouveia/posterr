import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
	color: #fff;
	padding-right: 10px;

	li {
		height: 40px;
		display: flex;
		align-items: center;
		font-weight: bold;
		padding: 5px;
		border-radius: 5px;
		cursor: pointer;

		&:hover {
			background-color: #242526;
		}
	}
`;
