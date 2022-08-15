import styled, { css } from 'styled-components';
import { Form as FormikForm } from 'formik';

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
	height: 80%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Form = styled(FormikForm)`
	display: flex;
	width: 500px;
	max-width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const Textarea = styled.textarea`
	width: 100%;
	color: #fff;
	background-color: #18191a;
`;

export const SubmitButton = styled.button`
	${({ round }) =>
		round
			? css`
					width: 2.5em;
					height: 2.5em;
					border-radius: 50%;
			  `
			: ''}

	font-weight: bold;
	color: #fff;
	margin-left: 10px;
	background-color: #1d9bf0;
	border: 1px solid #1d9bf0;
`;

export const PostContent = styled.div`
	width: 500px;
	padding: 5px;
	max-width: 80%;
	border-radius: 5px;
	border: 1px solid #fff;
`;

export const TextareaContainer = styled.div`
	width: 500px;
	max-width: 80%;
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
