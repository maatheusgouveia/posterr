import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Container = styled.div`
	color: #fff;
	margin: 30px;
	padding: 15px;
	width: 500px;
	max-width: 80%;
	border-radius: 5px;
	background-color: #242526;
`;

export const UserContainer = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
`;

export const AuthorName = styled.p`
	font-weight: bold;
	margin-bottom: 3px;
`;

export const CardHeader = styled.div`
	margin-bottom: 10px;
`;

export const PostDate = styled.p`
	font-size: 0.8em;
	margin-bottom: 3px;
`;

export const CardBody = styled.div``;

export const RepostArea = styled.div`
	margin-top: 10px;
	border: 1px solid #fff;
	border-radius: 4px;
	padding: 10px;
`;

export const CardFooter = styled.div``;

export const ActionArea = styled.div`
	display: flex;
	margin: 10px 0;
	justify-content: flex-end;
`;

export const Form = styled(FormikForm)`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Textarea = styled.textarea`
	width: 100%;
	color: #fff;
	background-color: #18191a;
`;

export const SubmitButton = styled.button`
	width: 2.5em;
	height: 2.5em;
	margin-left: 10px;
	border-radius: 50%;
	background-color: #1d9bf0;
	border: 1px solid #1d9bf0;
`;

export const ActionButton = styled.button`
	width: 2.5em;
	height: 2.5em;
	background: none;
	border-radius: 50%;
	border: 1px solid #fff;

	&:hover {
		background-color: #18191a;
	}

	svg {
		font-size: 1.4em;
	}
`;

export const Comments = styled.div``;

export const ToggleCommentsContainer = styled.div`
	display: flex;
	margin-top: 20px;
	justify-content: center;
`;

export const ToggleCommentsButton = styled.button`
	border: none;
	background: none;
	color: #fff;
	text-decoration: underline;
`;
