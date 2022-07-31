import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	*:focus {
		outline: 0;
	}

	html, body, #root {
		height: 100%;
		background-color: #18191A;
	}

	body {
		-webkit-font-smoothing: antialiased;
	}

	body, input, button, textarea, select {
		font: 14px 'Roboto', sans-serif;
	}

	input, button, textarea, select {
		background-color: #f5f5f5;
		border-radius: 10px;
		min-height: 36px;
		padding: 5px
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;
