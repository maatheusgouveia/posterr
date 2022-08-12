import Modal from 'react-modal';
import { useSelector } from 'react-redux';

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
	const { name, username } = useSelector(state => state.user.profile);
	const { logged_user_is_author } = useSelector(state => state.feed);
	const { profile } = useSelector(state => state.user);

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

				{logged_user_is_author?.map(post => (
					<Card key={post.id} post={post} width={500} />
				))}
			</ModalBody>
		</Modal>
	);
}
