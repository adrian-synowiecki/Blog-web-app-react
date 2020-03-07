import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import colors from '../../utils/colors';

export const ArticlesContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	@media (min-width: 770px) {
		order: 1;
		width: 70%;
	}
 	/* margin-top: -0.2rem;  */

`;



export const ArticlesList = styled.div`
	display: flex;
	flex-direction: column;
/* 	margin-top: 1rem; */
`;
