import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container, List } from './styles';

export default function SideMenu() {
	const navigate = useNavigate();

	const { username } = useSelector(state => state.user.profile);
	const { signed } = useSelector(state => state.auth);

	function handleProfile() {
		navigate(`?page=profile&username=${username}`);
	}

	return (
		<Container>
			<List>
				{signed && <li onClick={handleProfile}>Matheus Gouveia</li>}
				<li>Following</li>
				<li>Followers</li>
			</List>
		</Container>
	);
}
