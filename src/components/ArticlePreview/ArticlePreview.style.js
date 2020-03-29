import styled from 'styled-components/macro';
import colors from '../../utils/colors';
import { ReactComponent as Heart } from '../../assets/iconmonstr-favorite-1.svg';
import { Link } from 'react-router-dom';

export const ArticlePreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid rgba(0, 0, 0, .2);
	border-bottom: 1px solid rgba(0, 0, 0, .2);


`;

export const ArticleLeftSide = styled.div``;

export const ArticleContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ArticleTitle = styled(Link)`
	text-decoration: none;
	color: #061539;
/* 	color:black; */
	font-size: 1.9rem;
	font-weight: 500;
	margin-top: 6rem;
`;

export const ArticleTextPreview = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem; 
	color: gray; 
	color: #061539;
`;

export const Span = styled(Link)`
	text-decoration: none;
  	margin-top: 1.5rem;
	font-size: 1.2rem;  
	color: gray;
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
	fill: ${({favorited}) => favorited ? 'white' : `${colors.green}` };
/* 	fill: ${colors.green}; */
	width: 1.2rem;

 `;

export const FavoriteAddedCount = styled.span`
	color: ${({favorited}) => favorited ? 'white' : `${colors.green}`};
	/* color: ${colors.green}; */
	margin-top: 0.5rem;
	margin-left: 0.1rem;
	
`;

export const AddToFavorite = styled.button`
/* 	background-color: white; */
	background-color: ${({favorited}) => favorited ? `${colors.green}` : 'white'};
	border: 1px solid ${colors.green};
	border-radius: 0.3rem;
	height: 2.7rem;
	/* 	width: 4.0rem;  */
	display: flex;
	justify-content: center;
	margin-top: -1.5rem;
	cursor: pointer;

	&:hover {
		background-color: ${colors.green};
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

export const Tag = styled.button`
	margin-top: 1rem;
	border: 0;
	background-color: white;
	border: 1px solid #aaa;
	border-radius: 1rem;
	/* 	width: 5rem; */
	margin-right: 0.5rem;
	height: 2rem;
	font-weight: 300;
	color: #aaa;
	line-height: 1.8rem;
	cursor: pointer;
	
`;
