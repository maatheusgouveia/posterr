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
			max-width: 50%;

			h1 {
				display: none;
			}
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
	min-width: 200px;
	/* min-width: 50%; */
`;

export const ToggleFeedButton = styled.button`
	border: none;
	background: ${({ selected }) => (selected ? '#18191A' : 'none')};
	width: 50%;
`;
