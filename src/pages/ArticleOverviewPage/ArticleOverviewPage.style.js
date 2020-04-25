import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

import Header from 'components/Header/Header';
import TagList from 'components/TagList/TagList';
import ArticleMeta from 'components/ArticleMeta/ArticleMeta';
import CommentList from 'components/CommentList/CommentList';

const horizontalMargins = css`
	margin-left: 3rem;
	margin-right: 3rem;
`;

export const PageNotFoundWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PageNotFound = styled.h2`color: ${({ theme }) => theme.colors.blue2};`;

export const HeaderContentWrapper = styled.div`
	${horizontalMargins};
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-around;
`;

export const HeaderExtended = styled(Header)`
	background-color: ${({ theme }) => theme.colors.blue2};
	height: 16rem;
`;

export const ArticleTitle = styled.h1`
	color: #edede8;
	letter-spacing: 0.1rem;
	font-weight: 400;
	overflow-wrap: break-word;
	margin: 0;
`;

export const ArticleMetaExtended = styled(ArticleMeta)`

`;

export const FullArticleText = styled.p`
	${horizontalMargins};
	margin-top: 3rem;
	margin-bottom: 3rem;
	overflow-wrap: break-word;
`;

export const TagListExtended = styled(TagList)`${horizontalMargins};`;

export const Paragraph = styled.p`
	margin-top: 5rem;
	font-size: 1.4rem;
	${horizontalMargins};
`;

export const CommentListExtended = styled(CommentList)`
	margin-bottom: 1rem; 
`;

export const BlueSpanExtended = styled(Link)`
	color: ${({ theme }) => theme.colors.blue2};
	display: inline-block;
    font-weight: 500;
    text-decoration: none;
`;
