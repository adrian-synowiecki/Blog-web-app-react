import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const PaginationContainer = styled.nav``;

export const PageLink = styled(NavLink)`
    padding: 0.5rem 1rem; 
    border: 1px solid rgba(0,0,0,0.1);
    color: var(--blue-2);
    text-decoration: none;
    display: inline-block;
    border: none;
    &:hover {
        background-color: #dcdcdb;
    }
    &.active {
        background-color: var(--blue-2);
        color: var(--white);
        &:hover {
            background-color: var(--hover-color);
        }
	}
`;
