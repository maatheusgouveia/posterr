import * as Yup from 'yup';
import { Formik } from 'formik';
import { formatDistanceToNow } from 'date-fns';
import { FaShareSquare, FaPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import {
	Form,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	PostDate,
	AuthorName,
	UserContainer,
	FollowButton,
	ActionArea,
	Textarea,
	SubmitButton,
	ActionButton,
} from './styles';
import { createCommentRequest } from '../../store/modules/comment/actions';

export default function Card({ post }) {
	const dispatch = useDispatch();
	const field_name = `content-${post.id}`;

	function handleSubmit(values, { resetForm }) {
		const data = {
			post_id: post.id,
			content: values[field_name],
		};

		dispatch(createCommentRequest(data));
		resetForm();
	}

	const initialValues = {
		[field_name]: '',
	};

	const validationSchema = Yup.object().shape({
		[field_name]: Yup.string().required(),
	});

	const { content, author, created_at } = post;

	return (
		<Container>
			<CardHeader>
				<UserContainer>
					<AuthorName>{author}</AuthorName>
					<FollowButton>follow</FollowButton>
				</UserContainer>

				<PostDate>{formatDistanceToNow(new Date(created_at))}</PostDate>
			</CardHeader>

			<CardBody>{content}</CardBody>

			<CardFooter>
				<ActionArea>
					<ActionButton>
						<FaShareSquare />
					</ActionButton>
				</ActionArea>

				<Formik
					enableReinitialize
					onSubmit={handleSubmit}
					validateOnChange={false}
					initialValues={initialValues}
					validationSchema={validationSchema}
				>
					{({ values, errors, handleChange }) => (
						<Form>
							<Textarea
								id={`content-${post.id}`}
								onChange={handleChange}
								placeholder="Say something cool about it"
								value={values[field_name]}
							/>

							<SubmitButton type="submit">
								<FaPaperPlane />
							</SubmitButton>
						</Form>
					)}
				</Formik>
			</CardFooter>
		</Container>
	);
}
