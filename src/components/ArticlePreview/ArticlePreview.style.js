import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ReactComponent as Heart } from 'assets/iconmonstr-favorite-1.svg';

export const ArticlePreviewContainer = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, .1);
	margin-top: 3rem;
	position: relative;
`;

export const PreviewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
`;

export const PreviewTitle = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.blue1};
	font-size: 1.9rem;
	font-weight: 500;
`;

export const PreviewText = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;  
	margin-top: 0.2rem;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.blue2};
`;

export const PreviewReadMore = styled(Link)`
	text-decoration: none;
	margin-bottom: 1rem;
	font-size: 1.1rem;  
	color: ${({ theme }) => theme.colors.blue3};
`;

export const PreviewHeartIcon = styled(Heart)`
	fill: ${({ favorited, theme }) => (favorited ? 'white' : `${theme.colors.blue1}`)};
	width: 1.2rem;
 `;

export const PreviewFavoriteAddedCount = styled.span`
	color: ${({ favorited }) => (favorited ? 'white' : `green`)}; // fix green color
	margin-left: 0.2rem;
`;

export const PreviewAddToFavoriteWrapper = styled.button`
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
		${PreviewHeartIcon} {
			fill: white;
		}
		${PreviewFavoriteAddedCount} {
			color: white;
		}
	}
`;
