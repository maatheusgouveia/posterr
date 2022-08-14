import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
	padding-bottom: 10%;
`;

export const Form = styled(FormikForm)`
	width: 500px;
	margin: 30px;
	display: flex;
	align-items: flex-end;
	flex-direction: column;

	button {
		color: #fff;
		width: 100px;
		margin-top: 5px;
		background-color: #1d9bf0;
		border: 1px solid #1d9bf0;
	}
`;

export const Textarea = styled.textarea`
	width: 500px;
	overflow: auto;
`;

export const CharCount = styled.p`
	margin-top: 5px;
`;
