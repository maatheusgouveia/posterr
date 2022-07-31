import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Content = styled.div`
	width: 100%;
	margin-top: 40px;
	min-height: 300px;
	padding-left: 30px;

	display: grid;
	flex-direction: row;
	grid-template-columns: 20% 1fr;
`;
