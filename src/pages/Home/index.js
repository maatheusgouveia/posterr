import * as Yup from 'yup';
import { Formik } from 'formik';

import Card from '../../components/Card';

import { Container, Textarea, Form, CharCount } from './styles';

export default function Home() {
	const initialValues = { content: '' };

	const validationSchema = Yup.object().shape({
		content: Yup.string().max(777).required(),
	});

	function handleSubmit(values) {
		console.log(values);
	}

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
				<Card key={post} />
			))}
		</Container>
	);
}
