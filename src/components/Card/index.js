import * as Yup from 'yup';
import { Formik } from 'formik';
import { formatDistanceToNow } from 'date-fns';
import { FaShareSquare, FaPaperPlane } from 'react-icons/fa';

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

export default function Card({ post_id }) {
	function handleSubmit(values) {
		console.log(values);
	}

	const initialValues = {
		[`content-${post_id}`]: '',
	};

	const validationSchema = Yup.object().shape({
		[`content-${post_id}`]: Yup.string().required(),
	});

	return (
		<Container>
			<CardHeader>
				<UserContainer>
					<AuthorName>Matheus Gouveia</AuthorName>
					<FollowButton>follow</FollowButton>
				</UserContainer>

				<PostDate>{formatDistanceToNow(new Date())}</PostDate>
			</CardHeader>

			<CardBody>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat
				nulla pariatur. Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum.
			</CardBody>

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
								id={`content-${post_id}`}
								onChange={handleChange}
								placeholder="Say something cool about it"
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
