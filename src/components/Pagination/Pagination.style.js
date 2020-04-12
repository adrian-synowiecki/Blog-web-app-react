import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';


export const ArticlePageLinksContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-wrap: wrap;
	@media (min-width: 770px) {
		order: 3;
	}
`;

const activeClassName = 'active';
export const PageLinkExtended = styled(NavLink).attrs({
	activeClassName: activeClassName
})`
    padding: .5rem 1rem; 
    border: 1px solid rgba(0,0,0,0.1);
    color: ${({ theme }) => theme.colors.blue2};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &.${activeClassName} {
        background: ${({ theme }) => theme.colors.blue2};
	}
`;
