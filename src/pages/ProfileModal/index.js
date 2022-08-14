import Modal from 'react-modal';
import { format } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Card from '../../components/Card';
import avatar from '../../assets/avatar.jpg';
import { getPostsByUserRequest } from '../../store/modules/feed/actions';
import { toggleFollowRequest } from '../../store/modules/follow/actions';

import {
	ModalHeader,
	ModalBody,
	Profile,
	Avatar,
	AboutSection,
	Name,
	Username,
	Followers,
	FollowButton,
	UserNameSection,
} from './styles';

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

	function handleFollow(author_id) {
		dispatch(toggleFollowRequest(author_id));
	}

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

	const is_following = useMemo(
		() =>
			following_list.some(name => {
				if (!currentProfile) return false;

				return name === currentProfile.name;
			}),
		[following_list, currentProfile]
	);

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
						<UserNameSection>
							<Name>{currentProfile?.name}</Name>

							{currentProfile?.name !== profile?.name && (
								<FollowButton
									onClick={() =>
										handleFollow(currentProfile?.name)
									}
								>
									{is_following ? 'unfollow' : 'follow'}
								</FollowButton>
							)}
						</UserNameSection>

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
