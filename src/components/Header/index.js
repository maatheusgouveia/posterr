import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaClock, FaTwitter, FaUserFriends } from 'react-icons/fa';

import {
	Container,
	Content,
	LogoContainer,
	ToggleFeed,
	ToggleFeedButton,
} from './styles';

export default function Header() {
	const FOLLOWING = 'FOLLOWING';
	const CHRONOLOGICAL = 'CHRONOLOGICAL';

	const navigate = useNavigate();

	const [feedType, setFeedType] = useState(CHRONOLOGICAL);
	const [searchParams] = useSearchParams();

	function handleGoToMain() {
		navigate('/');
	}

	function handleFeed(filter_by) {
		navigate(`?feed=${filter_by}`);
	}

	useEffect(() => {
		const feed = searchParams.get('feed');

		if (feed) {
			setFeedType(feed);
		}
	}, [searchParams]);

	return (
		<Container>
			<Content>
				<LogoContainer>
					<span onClick={handleGoToMain}>
						<FaTwitter size={54} color="#fff" />

						<h1>Posterr</h1>
					</span>
				</LogoContainer>

				<input
					type="search"
					placeholder="Find out what others are talking about"
				/>

				<ToggleFeed>
					<ToggleFeedButton
						selected={feedType === FOLLOWING}
						onClick={() => handleFeed(FOLLOWING)}
					>
						<FaUserFriends size={54} color="#fff" />
					</ToggleFeedButton>

					<ToggleFeedButton
						selected={feedType === CHRONOLOGICAL}
						onClick={() => handleFeed(CHRONOLOGICAL)}
					>
						<FaClock size={54} color="#fff" />
					</ToggleFeedButton>
				</ToggleFeed>
			</Content>
		</Container>
	);
}
