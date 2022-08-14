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
	const { logged_user_is_author } = useSelector(state => state.feed);
	const { name, username } = useSelector(state => state.user.profile);
	const { following_list, followers_list } = useSelector(
		state => state.follow
	);

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
						<Followers>
							{`${followers_list.length} followers • ${following_list.length} following`}
						</Followers>
					</AboutSection>
				</Profile>

				{logged_user_is_author?.map(post => (
					<Card key={post.id} post={post} />
				))}
			</ModalBody>
		</Modal>
	);
}
