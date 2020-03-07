import styled from 'styled-components/macro';
import colors from '../../utils/colors';



export const ArticleMetaContainer = styled.div`
	display: flex;
	/*     margin-top: 2rem; */
	margin-top: ${({ singleArticleMeta }) => (singleArticleMeta ? '-5rem' : '3rem')};
	margin-left: ${({ singleArticleMeta }) => singleArticleMeta && '2rem'};
	position: absolute;
`;

export const ImageProfile = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	margin-top: -0.4rem;
`;

export const FlexWrapperCol = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0.5rem;
	margin-top: -0.3rem;
`;

export const AuthorName = styled.p`
	margin-top: -0.7rem;
	color: ${({ singleArticleMeta }) => (singleArticleMeta ? 'white' : colors.green)};
	text-decoration: none;
`;

export const DateCreated = styled.p`
	margin-top: -1.7rem;
	color: gray;
	opacity: 0.8;
	font-size: 1rem;
	color: ${({ singleArticleMeta }) => (singleArticleMeta ? 'white' : 'gray')};
`;
