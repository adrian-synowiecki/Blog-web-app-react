import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ReactComponent as Heart } from 'assets/iconmonstr-favorite-1.svg';

export const ArticlePreviewContainer = styled(motion.li)`
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
	color: var(--blue-1);
	font-size: 1.9rem;
	font-weight: 500;
	overflow-wrap: break-word;
`;

export const Text = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;  
	margin-top: 0.2rem;
	margin-bottom: 1rem;
	color: var(--blue-2);
	overflow-wrap: break-word;
`;

export const ReadMore = styled(Link)`
	text-decoration: none;
	margin-bottom: 1rem;
	font-size: 1.1rem;  
	color: var(--blue-3);
`;

export const HeartIcon = styled(Heart)`
	fill: ${({ favorited }) => (favorited ? 'var(--white)' : 'var(--blue-1)')};
	width: 1.2rem;
 `;

export const FavoriteAddedCount = styled.span`
	color: ${({ favorited }) => (favorited ? 'var(--white)' : 'var(--blue-1)')};
	margin-left: 0.2rem;
`;

export const UpdateFavoriteArticles = styled(motion.button)`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	right: 0;
	background-color: var(--white);
	padding: 0rem 0.4rem;
	outline: 0;
	border: 1px solid var(--blue-3);
	border-radius: 0.4rem;
	cursor: pointer;
	background-color: ${({ theme, favorited }) => favorited && theme.colors.blue1};
	&:hover {
		background-color: ${({ theme }) => theme.colors.blue1};
		transition: 0.3s;
		${HeartIcon} {
			fill: var(--white);
			transition: 0.3s;
		}
		${FavoriteAddedCount} {
			color: var(--white);
			transition: 0.3s;
		}
	}
	&:active {
		transform: scale(0.90);
		transition: 0.2s;
	}
`;
