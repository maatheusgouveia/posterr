import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { FaShareSquare, FaPaperPlane } from 'react-icons/fa';

import { createCommentRequest } from '../../store/modules/comment/actions';

import Comment from '../Comment';
import PostModal from '../PostModal';

import {
	Form,
	CardBody,
	CardFooter,
	CardHeader,
	Container,
	PostDate,
	AuthorName,
	UserContainer,
	ActionArea,
	Textarea,
	SubmitButton,
	ActionButton,
	Comments,
	ToggleCommentsButton,
	ToggleCommentsContainer,
	RepostArea,
} from './styles';

export default function Card({ post, width }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const field_name = `content-${post.id}`;

	const { threads } = useSelector(state => state.comment);

	const [commentsVisible, setCommentsVisible] = useState(false);
	const [postModalVisible, setPostModalVisible] = useState(false);

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

	const { content, author, created_at, original_post = {} } = post;

	const {
		content: original_post_content,
		author: original_post_author,
		created_at: original_post_created_at,
	} = original_post;

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

	function handleShare() {
		setPostModalVisible(true);
	}

	function handleProfile(username) {
		navigate(`?page=profile&username=${username}`);
	}

	const is_repost = !!original_post?.id;

	const has_comment = is_repost && content;

	let main_content = content;

	if (is_repost && !has_comment) {
		main_content = original_post_content;
	}

	const original_author =
		is_repost && !has_comment ? original_post_author : author;

	return (
		<Container width={width}>
			<CardHeader>
				{is_repost && !has_comment && <p>reposted by {author}</p>}

				<UserContainer onClick={() => handleProfile(original_author)}>
					<AuthorName>{original_author}</AuthorName>
				</UserContainer>

				<PostDate>
					{formatDistanceToNow(new Date(created_at), {
						addSuffix: true,
					})}
				</PostDate>
			</CardHeader>

			<CardBody>{main_content}</CardBody>

			{is_repost && has_comment && (
				<RepostArea>
					<UserContainer
						onClick={() => handleProfile(original_post_author)}
					>
						<AuthorName>{original_post_author}</AuthorName>
					</UserContainer>

					<PostDate>
						{formatDistanceToNow(
							new Date(original_post_created_at),
							{
								addSuffix: true,
							}
						)}
					</PostDate>

					<CardBody>{original_post_content}</CardBody>
				</RepostArea>
			)}

			<CardFooter>
				<ActionArea>
					<ActionButton onClick={handleShare}>
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

			<PostModal
				isOpen={postModalVisible}
				onDismiss={() => setPostModalVisible(false)}
				post={!has_comment && is_repost ? original_post : post}
			/>
		</Container>
	);
}
