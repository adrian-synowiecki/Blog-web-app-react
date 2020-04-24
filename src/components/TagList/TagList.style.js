import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';

/* fix to TagListContaienr */
export const TagListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
/* 	margin-top: 3rem;
	margin-left: 1rem;
	margin-bottom: 3rem; */
/* 	background: ${({ theme }) => theme.colors.blue3}; */
/* 	margin-bottom: ${({ arePopularTags }) => arePopularTags && '3rem'}; */
	/* margin-bottom: 3rem; */
/* 	margin-right: 3rem; */
/* 	@media (min-width: 770px) {zzz
		justify-content: flex-start;
		width: 20%;
		order: 2;
	} */
`;

/* export const PopularTags = styled.p`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.blue1};
	letter-spacing: 0.1rem;
`; */

export const TagList = styled.div`
	display: inline-flex;
	flex-wrap: wrap;
	margin-top: -1rem;
`;

export const TagExtended = styled(Link)`
	/* margin-left: 0.5rem; */
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
