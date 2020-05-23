import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
	font-size: 62.5%;
	--main-text-color: #061539;
	--hover-color: #23335c;
	--blue-1: #162955;
	--blue-2: #2E4272;
	--blue-3: #7887AB;
	--white: #fff;
	--gray: #e8e7e3;
	--container-margin: 3rem 2rem;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Roboto", sans-serif, BlinkMacSystemFont, "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
		"Droid Sans", "Helvetica Neue";
}


body {
	color: var(--main-text-color);
	font-size: 1.6rem;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

ol, ul {
	list-style-type: none;
}
`;
