import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import colors from '../../utils/colors';

export const ArticlePageLinksContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	@media (min-width: 770px) {
		order: 3;
	}
`;

export const PageLinkExtended = styled(NavLink)`
    background: white;
    padding: .5rem 1rem; 
    color: ${colors.green};
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;
