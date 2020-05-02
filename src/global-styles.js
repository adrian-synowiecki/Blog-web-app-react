import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Roboto", sans-serif, BlinkMacSystemFont, "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
		"Droid Sans", "Helvetica Neue";
}

html {
	font-size: 62.5%;
	/* height: 100%;
	overflow:auto; */
}

body {
	background-color: #fcfafa;
/* 	height: 100%;  */
	color: '#061539';
	font-size: 1.6rem;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
`;
