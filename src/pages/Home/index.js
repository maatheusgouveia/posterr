import * as Yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Card from '../../components/Card';

import { Container, Textarea, Form, CharCount } from './styles';
import { ProfileModal } from '../ProfileModal';

export default function Home() {
	const PROFILE_PAGE = 'profile';

	const navigate = useNavigate();

	const [page, setPage] = useState();
	const [searchParams] = useSearchParams();

	const initialValues = { content: '' };

	const validationSchema = Yup.object().shape({
		content: Yup.string().max(777).required(),
	});

	function handleSubmit(values) {
		console.log(values);
	}

	function handleDismissProfile() {
		navigate('/');
	}

	useEffect(() => {
		setPage(searchParams.get('page'));
	}, [searchParams]);

	return (
		<Container>
			<Formik
				onSubmit={handleSubmit}
				validateOnChange={false}
				initialValues={initialValues}
				validationSchema={validationSchema}
			>
				{({ values, errors, handleChange }) => (
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

						<button type="submit">Comment</button>
					</Form>
				)}
			</Formik>

			{[1, 2, 3, 4, 5, 6].map(post => (
				<Card key={post} post_id={post} />
			))}

			<ProfileModal
				visible={page === PROFILE_PAGE}
				onDismiss={handleDismissProfile}
			/>
		</Container>
	);
}
