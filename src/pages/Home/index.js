import * as Yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import { getPostsRequest } from '../../store/modules/feed/actions';
import { createPostRequest } from '../../store/modules/post/actions';
import { getCommentsRequest } from '../../store/modules/comment/actions';
import {
	getFollowersListRequest,
	getFollowingListRequest,
} from '../../store/modules/follow/actions';

import { ProfileModal } from '../ProfileModal';

import { Container, Textarea, Form, CharCount } from './styles';

export default function Home() {
	const FOLLOWING = 'FOLLOWING';
	const PROFILE_PAGE = 'profile';

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { chronological, following } = useSelector(state => state.feed);

	const [page, setPage] = useState();
	const [searchParams] = useSearchParams();

	const initialValues = { content: '' };

	const validationSchema = Yup.object().shape({
		content: Yup.string().max(777).required(),
	});

	function handleSubmit(values, { resetForm }) {
		dispatch(createPostRequest(values));
		resetForm();
	}

	function handleDismissProfile() {
		navigate('/');
	}

	useEffect(() => {
		const page = searchParams.get('page');

		setPage(page);
	}, [searchParams]);

	useEffect(() => {
		dispatch(getFollowersListRequest());
		dispatch(getFollowingListRequest());

		dispatch(getPostsRequest());
		dispatch(getCommentsRequest());
	}, [dispatch]);

	const feed =
		searchParams.get('feed') === FOLLOWING ? following : chronological;

	return (
		<Container>
			<Formik
				onSubmit={handleSubmit}
				validateOnChange={false}
				initialValues={initialValues}
				validationSchema={validationSchema}
			>
				{({ values, handleChange }) => (
					<Form>
						<Textarea
							rows={4}
							name="content"
							maxLength={777}
							value={values.content}
							onChange={handleChange}
							placeholder="what's going on?"
						/>
						<CharCount>
							{values.content.length} of 777 characters
						</CharCount>

						<button type="submit">Send</button>
					</Form>
				)}
			</Formik>

			{feed?.map(post => (
				<Card key={post.id} post={post} />
			))}

			<ProfileModal
				visible={page === PROFILE_PAGE}
				onDismiss={handleDismissProfile}
			/>
		</Container>
	);
}
