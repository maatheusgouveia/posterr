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

export default function Card({ post }) {
	function handleSubmit(values) {
		console.log(values);
	}

	const initialValues = {
		[`content-${post.id}`]: '',
	};

	const validationSchema = Yup.object().shape({
		[`content-${post.id}`]: Yup.string().required(),
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
