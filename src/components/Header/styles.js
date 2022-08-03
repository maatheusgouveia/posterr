import styled from 'styled-components';

export const Container = styled.div`
	background-color: #242526;
	min-height: 80px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px 30px;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	input {
		height: 40px;
		margin-left: 30px;
		width: 300px;
	}

	@media (max-width: 780px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const LogoContainer = styled.div`
	color: #fff;

	@media (max-width: 780px) {
		width: 100%;
	}

	span {
		display: flex;
		cursor: pointer;
		align-items: center;

		@media (max-width: 780px) {
			justify-content: center;
			width: 100%;
		}
	}

	h1 {
		margin-left: 10px;
	}
`;

export const ToggleFeed = styled.div`
	display: flex;
	justify-content: space-around;
	margin-left: 50px;
	border-radius: 5px;
	/* border: 1px solid #fff; */
	width: 200px;
`;

export const ToggleFeedButton = styled.button`
	border: none;
	background: ${({ selected }) => (selected ? '#18191A' : 'none')};
	width: 50%;
`;
