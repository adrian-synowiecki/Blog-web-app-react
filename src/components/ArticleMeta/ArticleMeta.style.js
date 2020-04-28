import styled from 'styled-components/macro';

export const ArticleMetaContainer = styled.div`display: flex;`;

export const ArticleMetaImageProfile = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 8rem;
`;

export const ArticleMetaWrapper = styled.div`
	margin-top: -0.4rem;
	margin-left: 0.4rem;
`;

export const ArticleMetaAuthorName = styled.p`
	width: 27rem;
	margin: 0;
	font-weight: 500;
	color: ${({ theme, articleOverviewPage }) => (articleOverviewPage ? '#e6e6e1' : theme.colors.blue1)};
	&:hover {
		text-decoration: underline;
	}
`;

export const ArticleMetaDateCreated = styled.p`
	color: gray;
	opacity: 0.8;
	font-size: 1rem;
	margin: 0;
	color: ${({ theme, articleOverviewPage }) => (articleOverviewPage ? '#e8e7e3' : theme.colors.blue3)};
`;
