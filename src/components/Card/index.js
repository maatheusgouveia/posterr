import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaShareSquare, FaPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { createCommentRequest } from '../../store/modules/comment/actions';

import Comment from '../Comment';

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
	Comments,
	ToggleCommentsButton,
	ToggleCommentsContainer,
} from './styles';

export default function Card({ post }) {
	const dispatch = useDispatch();
	const field_name = `content-${post.id}`;

	const { threads } = useSelector(state => state.comment);

	const [commentsVisible, setCommentsVisible] = useState(false);

	const comments = threads[post.id] || [];

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

	function handleCommentsVisibility(value) {
		setCommentsVisible(value);
	}

	function renderComments(visible) {
		if (!comments.length) return null;

		if (!visible)
			return (
				<ToggleCommentsContainer>
					<ToggleCommentsButton
						onClick={() => handleCommentsVisibility(true)}
					>
						show comments
					</ToggleCommentsButton>
				</ToggleCommentsContainer>
			);

		const commentsList = comments.map(comment => (
			<Comment key={comment.id} comment={comment} />
		));

		commentsList.push(
			<ToggleCommentsContainer>
				<ToggleCommentsButton
					onClick={() => handleCommentsVisibility(false)}
				>
					hide comments
				</ToggleCommentsButton>
			</ToggleCommentsContainer>
		);

		return commentsList;
	}

	return (
		<Container>
			<CardHeader>
				<UserContainer>
					<AuthorName>{author}</AuthorName>
					<FollowButton>follow</FollowButton>
				</UserContainer>

				<PostDate>
					{formatDistanceToNow(new Date(created_at), {
						addSuffix: true,
					})}
				</PostDate>
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
					{({ values, handleChange }) => (
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

				<Comments>{renderComments(commentsVisible)}</Comments>
			</CardFooter>
		</Container>
	);
}
