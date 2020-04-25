import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const TagListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

export const TagList = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	margin-top: -1rem;
`;

export const TagExtended = styled(Link)`
	text-align: center;
	border: 0;
	background-color: ${({ theme }) => theme.colors.blue2};
	border-radius: 1rem;
    padding: 0.5rem 1rem;
	font-weight: 300;
	color: white;
    font-size: 1.1rem;
	line-height: 1.8rem;
    text-decoration: none;
    margin-top: .5rem;
	&:not(:first-of-type) {
		margin-left: 0.5rem;
	}
	&:hover {
		background-color: ${({ theme }) => theme.colors.blue3};
		cursor: pointer;
	}
`;
