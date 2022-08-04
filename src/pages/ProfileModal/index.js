import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Card from '../../components/Card';
import avatar from '../../assets/avatar.jpg';

import {
	ModalHeader,
	ModalBody,
	Profile,
	Avatar,
	AboutSection,
	Name,
	Username,
	Followers,
} from './styles';

export function ProfileModal({ visible, onDismiss = () => {} }) {
	const FOLLOWING = 'FOLLOWING';

	const { name, username } = useSelector(state => state.user.profile);
	const { chronological, following } = useSelector(state => state.feed);

	const [searchParams] = useSearchParams();

	const feed =
		searchParams.get('feed') === FOLLOWING ? following : chronological;

	return (
		<Modal
			isOpen={visible}
			ariaHideApp={false}
			style={{
				content: {
					background: '#18191a',
				},
			}}
			onRequestClose={onDismiss}
		>
			<ModalHeader>
				<button onClick={onDismiss}>X</button>
			</ModalHeader>

			<ModalBody>
				<Profile>
					<Avatar src={avatar} />

					<AboutSection>
						<Name>{name}</Name>
						<Username>@{username}</Username>
						<Followers>123 followers</Followers>
					</AboutSection>
				</Profile>

				{feed.map(post => (
					<Card key={post.id} post={post} />
				))}
			</ModalBody>
		</Modal>
	);
}
