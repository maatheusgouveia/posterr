import Header from '../../Header';
import SideMenu from '../../SideMenu';

import { Container, Content } from './styles';

export default function DefaultLayout({ children }) {
	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />

				{children}
			</Content>
		</Container>
	);
}
