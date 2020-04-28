import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const PaginationContainer = styled.div``;

export const PageLink = styled(NavLink)`
    padding: .5rem 1rem; 
    border: 1px solid rgba(0,0,0,0.1);
    color: ${({ theme }) => theme.colors.blue2};
    text-decoration: none;
    display: inline-block;
    &:hover {
        text-decoration: underline;
    }
    &.active {
        background: ${({ theme }) => theme.colors.blue2};
        color: white;
	}
`;
