import * as Yup from 'yup';
import Modal from 'react-modal';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { FaPaperPlane } from 'react-icons/fa';

import { createPostRequest } from '../../store/modules/post/actions';

import {
	ModalBody,
	ModalHeader,
	Form,
	Textarea,
	SubmitButton,
	PostContent,
	TextareaContainer,
} from './styles';

export default function PostModal({ post = {}, isOpen, onDismiss = () => {} }) {
	const { content } = post;

	const dispatch = useDispatch();

	function handleSubmit(values, { resetForm }) {
		const data = {
			content: values.repost_content,
			original_post: post,
		};

		dispatch(createPostRequest(data));

		resetForm();
		onDismiss();
	}

	const initialValues = {
		repost_content: '',
	};

	const validationSchema = Yup.object().shape({
		repost_content: Yup.string(),
	});

	return (
		<Modal
			isOpen={isOpen}
			ariaHideApp={false}
			style={{
				content: {
					background: '#18191a',
				},
			}}
			onRequestClose={onDismiss}
		>
			<ModalHeader>
				<button onClick={onDismiss}>X</button>
			</ModalHeader>

			<ModalBody>
				<Formik
					enableReinitialize
					onSubmit={handleSubmit}
					validateOnChange={false}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					{({ values, handleChange }) => (
						<Form>
							<TextareaContainer>
								<Textarea
									id="repost_content"
									onChange={handleChange}
									value={values.repost_content}
									placeholder="Say something cool about this post"
								/>

								<SubmitButton type="submit">
									<FaPaperPlane />
								</SubmitButton>
							</TextareaContainer>

							<PostContent>{content}</PostContent>
						</Form>
					)}
				</Formik>
			</ModalBody>
		</Modal>
	);
}
