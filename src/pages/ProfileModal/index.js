import Modal from 'react-modal';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getPostsByUserRequest } from '../../store/modules/feed/actions';

export function ProfileModal({ visible, onDismiss = () => {} }) {
	const dispatch = useDispatch();

	const { list, profile } = useSelector(state => state.user);

	const { posts_by_user } = useSelector(state => state.feed);

	const { following_list, followers_list } = useSelector(
		state => state.follow
	);

	const [searchParams] = useSearchParams();
	const [usernameUrl, setUsernameUrl] = useState();
	const [currentProfile, setCurrentProfile] = useState(profile);

	useEffect(() => {
		const user = searchParams.get('username');

		if (user) {
			setUsernameUrl(user);
		}
	}, [searchParams]);

	useEffect(() => {
		setCurrentProfile(list.find(user => user.name === usernameUrl));
	}, [usernameUrl, list]);

	useEffect(() => {
		currentProfile && dispatch(getPostsByUserRequest(currentProfile.name));
	}, [dispatch, currentProfile]);

	let followers_count = followers_list.length;
	let following_count = following_list.length;

	if (currentProfile && profile) {
		if (currentProfile.name !== profile.name) {
			followers_count = currentProfile.followers;
			following_count = currentProfile.following;
		}
	}

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
						<Name>{currentProfile?.name}</Name>

						<Username>@{currentProfile?.username}</Username>

						<Followers>
							{`${followers_count} followers • ${following_count} following`}
						</Followers>

						<div>{`Joined on ${format(
							new Date(currentProfile?.created_at || null),
							'MMMM dd, yyyy'
						)}`}</div>
					</AboutSection>
				</Profile>

				{posts_by_user?.map(post => (
					<Card key={post.id} post={post} />
				))}
			</ModalBody>
		</Modal>
	);
}
