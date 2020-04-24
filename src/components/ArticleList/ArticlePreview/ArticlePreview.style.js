import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ReactComponent as Heart } from 'assets/iconmonstr-favorite-1.svg';
import ArticleMeta from 'components/ArticleMeta/ArticleMeta';

export const ArticlePreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid rgba(0, 0, 0, .1);
	border-bottom: 1px solid rgba(0, 0, 0, .1);
	position: relative;
	margin-left: 2rem;
	margin-right: 2rem;
`;

export const ArticleLeftSide = styled.div``;

export const ArticleMetaExtended = styled(ArticleMeta)`
	margin-top: 3rem; 
 	position: absolute; 
`;

export const ArticleContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 30rem;
`;

export const ArticleTitleExtended = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.blue1};
	font-size: 1.9rem;
	font-weight: 500;
	margin-top: 6rem;
`;

export const ArticleTextPreviewExtended = styled(Link)`
	margin-top: 0.2rem;
	text-decoration: none;
	font-size: 1.2rem;  
	color: ${({ theme }) => theme.colors.blue2};
`;

export const ReadMoreExtended = styled(Link)`
	text-decoration: none;
  	margin-top: 1.5rem;
	font-size: 1.1rem;  
	color: ${({ theme }) => theme.colors.blue3};
	margin-bottom: 2rem;
`;

export const ArticleRightSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-around;
	margin-right: 1rem;
`;

export const HeartIcon = styled(Heart)`
	fill: ${({ favorited, theme }) => (favorited ? 'white' : `${theme.colors.blue1}`)};
	width: 1.2rem;
 `;

export const FavoriteAddedCount = styled.span`
	color: ${({ favorited }) => (favorited ? 'white' : `green`)}; // fix green color
	margin-top: 0.5rem;
	margin-left: 0.1rem;
`;

export const AddToFavorite = styled.button`
	background-color: white;
	border: ${({ theme }) => `1px solid ${theme.colors.blue3}`};
	border-radius: 0.3rem;
	height: 2.7rem;
	display: flex;
	justify-content: center;
	cursor: pointer;
	margin-top: 1.5rem;
	background-color: ${({ theme, favorited }) => favorited && theme.colors.blue1};
	&:hover {
		background-color: ${({ theme }) => theme.colors.blue1};
	}
	&:hover ${HeartIcon} {
		fill: white;
	}
	&:hover ${FavoriteAddedCount} {
		color: white;
	}
`;

export const ArticleTags = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
