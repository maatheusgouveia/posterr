import * as Yup from 'yup';
import { Formik } from 'formik';
import { useMemo, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaShareSquare, FaPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFollowRequest } from '../../store/modules/follow/actions';
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
	RepostArea,
} from './styles';

export default function Card({ post, width }) {
	const dispatch = useDispatch();
	const field_name = `content-${post.id}`;

	const { threads } = useSelector(state => state.comment);
	const { name: user_name } = useSelector(state => state.user.profile);
	const { following_list } = useSelector(state => state.follow);

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

	function handleFollow(author_id) {
		dispatch(toggleFollowRequest(author_id));
	}

	function handleShare() {}

	const is_repost = !!original_post?.id;

	const has_comment = is_repost && content;

	let main_content = content;

	if (is_repost && has_comment) {
		main_content = content;
	}

	if (is_repost && !has_comment) {
		main_content = original_post_content;
	}

	const original_author =
		is_repost && !has_comment ? original_post_author : author;

	const is_following = useMemo(
		() => following_list.some(name => name === original_author),
		[following_list, original_author]
	);

	return (
		<Container width={width}>
			<CardHeader>
				{is_repost && !has_comment && <p>reposted by {author}</p>}

				<UserContainer>
					<AuthorName>{original_author}</AuthorName>

					{original_author !== user_name && (
						<FollowButton
							onClick={() => handleFollow(original_author)}
						>
							{is_following ? 'unfollow' : 'follow'}
						</FollowButton>
					)}
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
					<UserContainer>
						<AuthorName>{original_post_author}</AuthorName>

						{original_post_author !== user_name && (
							<FollowButton
								onClick={() =>
									handleFollow(original_post_author)
								}
							>
								{is_following ? 'unfollow' : 'follow'}
							</FollowButton>
						)}
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
		</Container>
	);
}
