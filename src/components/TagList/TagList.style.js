import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const TagListContainer = styled.div``;

export const Tag = styled(Link)`
	text-align: center;
	background-color: ${({ theme }) => theme.colors.blue2};
	border-radius: 1rem;
    padding: 0.5rem 1rem;
	color: #fff;
	display: inline-block;
    font-size: 1.1rem;
	text-decoration: none;
	margin-top: 0.2rem;
	margin-right: 0.2rem;
	&:hover {
		background-color: #23335c;
		cursor: pointer;
		transition: 0.2s;
	}
	&:active {
		transform: scale(0.95);
		transition-duration: 0.2s;
	}

`;
