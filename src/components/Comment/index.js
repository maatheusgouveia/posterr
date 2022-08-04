import { formatDistanceToNow } from 'date-fns';

import { Container, Author, CommentDate, Content } from './styles';

export default function Comment({ comment }) {
	const { content, author, created_at } = comment;
	return (
		<Container>
			<Author>{author}</Author>
			<CommentDate>
				{formatDistanceToNow(new Date(created_at), {
					addSuffix: true,
				})}
			</CommentDate>
			<Content>{content}</Content>
		</Container>
	);
}
