import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ReactComponent as Heart } from 'assets/iconmonstr-favorite-1.svg';

export const ArticlePreviewContainer = styled.div`
	margin-top: 2rem;
	position: relative;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.2rem;
`;

export const Title = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.blue1};
	font-size: 1.9rem;
	font-weight: 500;
	overflow-wrap: break-word;
`;

export const Text = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;  
	margin-top: 0.2rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.blue2};
	overflow-wrap: break-word;
	
`;

export const ReadMore = styled(Link)`
	text-decoration: none;
	margin-bottom: 1rem;
	font-size: 1.1rem;  
	color: ${({ theme }) => theme.colors.blue3};
/* 	overflow-wrap: break-word; */
`;

export const HeartIcon = styled(Heart)`
	fill: ${({ favorited, theme }) => (favorited ? 'white' : `${theme.colors.blue1}`)};
	width: 1.2rem;
 `;

export const FavoriteAddedCount = styled.span`
	color: ${({ favorited }) => (favorited ? 'white' : `green`)}; // fix green color
	margin-left: 0.2rem;
`;

export const AddToFavoriteWrapper = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	right: 0;
	background-color: white;
	width: 3rem;
	border: ${({ theme }) => `1px solid ${theme.colors.blue3}`};
	border-radius: 0.5rem;
	cursor: pointer;
	background-color: ${({ theme, favorited }) => favorited && theme.colors.blue1};
	&:hover {
		background-color: ${({ theme }) => theme.colors.blue1};
		${HeartIcon} {
			fill: white;
		}
		${FavoriteAddedCount} {
			color: white;
		}
	}
`;
