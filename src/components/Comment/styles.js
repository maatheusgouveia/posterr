import styled from 'styled-components';

export const Container = styled.div`
	margin: 10px;
	padding: 10px;
	background-color: #18191a;
	border-radius: 5px;

	&:first-child {
		margin-top: 30px;
	}
`;

export const Author = styled.div`
	font-weight: bold;
`;

export const CommentDate = styled.div`
	font-size: 0.8em;
`;

export const Content = styled.div`
	margin-top: 5px;
`;
