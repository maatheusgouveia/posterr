import { Container, List } from './styles';

export default function SideMenu() {
	function handleProfile() {
		console.log('profile');
	}

	return (
		<Container>
			<List>
				<li onClick={handleProfile}>Matheus Gouveia</li>
				<li>My Profile</li>
				<li>Followers</li>
				<li>My posts</li>
			</List>
		</Container>
	);
}
