import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

import Header from 'components/Header/Header';
import TagList from 'components/TagList/TagList';
import ArticleMeta from 'components/ArticleMeta/ArticleMeta';

const horizontalMargins = css`
	margin-left: 3rem;
	margin-right: 3rem;
`;

export const HeaderContentWrapper = styled.div`${horizontalMargins};`;

export const HeaderExtended = styled(Header)`
	background-color: ${({ theme }) => theme.colors.blue2};
`;

export const ArticleTitle = styled.h1`
	color: #edede8;
	letter-spacing: 0.1rem;
	font-weight: 400;
`;

export const ArticleMetaExtended = styled(ArticleMeta)`
	margin-top: 4rem;
	margin-left: 0;
	position: static;
`;

/* export const ArticleMetaWrapper = styled.div`margin-top: 4rem;`;
 */
export const FullArticleText = styled.p`${horizontalMargins};`;

export const TagListExtended = styled(TagList)`${horizontalMargins};`;

export const Paragraph = styled.p`
	margin-top: 5rem;
	font-size: 1.4rem;
	${horizontalMargins};
`;

export const BlueSpanExtended = styled(Link)`
	color: ${({ theme }) => theme.colors.blue2};
	display: inline-block;
    font-weight: 500;
    text-decoration: none;
`;
