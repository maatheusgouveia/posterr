import { useNavigate } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';

import { Container, Content, LogoContainer } from './styles';

export default function Header() {
	const navigate = useNavigate();

	function handleGoToMain() {
		navigate('/');
	}

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
			</Content>
		</Container>
	);
}
