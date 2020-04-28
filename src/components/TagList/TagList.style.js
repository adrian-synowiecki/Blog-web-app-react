import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const TagListContainer = styled.div``;

export const Tag = styled(Link)`
	text-align: center;
	background-color: ${({ theme }) => theme.colors.blue2};
	border-radius: 1rem;
    padding: 0.5rem 1rem;
	font-weight: 300;
	color: white;
	display: inline-block;
    font-size: 1.1rem;
	text-decoration: none;
	margin-top: 0.2rem;
	margin-right: 0.2rem;
	&:hover {
		opacity: 0.9;
		cursor: pointer;
	}
`;
