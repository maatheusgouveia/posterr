import styled from 'styled-components';

export const ModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;

	button {
		color: #fff;
		background: none;
		width: 2.3em;
		height: 2.3em;
		font-size: 1.4em;
		border-radius: 50%;
		border: 1px solid #fff;

		&:hover {
			background-color: #242526;
		}
	}
`;

export const ModalBody = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Profile = styled.div`
	display: flex;
	justify-content: flex-start;

	@media (max-width: 780px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const Avatar = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin-right: 30px;

	@media (max-width: 780px) {
		margin-bottom: 10px;
	}
`;

export const AboutSection = styled.div``;

export const Name = styled.h1`
	font-size: 2em;
	margin-bottom: 5px;
`;

export const Username = styled.h2`
	font-size: 1em;
	margin-bottom: 3px;
`;

export const Followers = styled.p`
	margin-top: 15px;
	margin-bottom: 3px;
`;

export const FollowButton = styled.button`
	border: none;
	background: none;
	color: #fff;
	margin-bottom: 3px;

	&:hover {
		font-weight: bold;
	}
`;

export const UserNameSection = styled.div`
	display: flex;
`;
