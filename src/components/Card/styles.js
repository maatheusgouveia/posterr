import styled from 'styled-components';

export const Container = styled.div`
	color: #fff;
	margin: 30px;
	padding: 15px;
	max-width: 50%;
	border-radius: 5px;
	background-color: #242526;
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const FollowButton = styled.button`
	border: none;
	background: none;
	color: #fff;

	&:hover {
		font-weight: bold;
	}
`;

export const AuthorName = styled.p`
	font-weight: bold;
`;

export const CardHeader = styled.div`
	margin-bottom: 10px;
`;

export const PostDate = styled.p`
	font-size: 0.8em;
`;

export const CardBody = styled.div``;

export const CardFooter = styled.div``;
