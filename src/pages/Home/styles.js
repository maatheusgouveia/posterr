import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	flex-direction: row;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 780px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
