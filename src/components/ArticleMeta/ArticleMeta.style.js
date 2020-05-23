import styled from 'styled-components/macro';

export const ArticleMetaContainer = styled.div`display: flex;`;

export const ImageProfile = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 8rem;
	&:hover {
		transform: scale(1.03);
		transition: 0.1s;
	}
`;

export const Wrapper = styled.section`
	margin-top: -0.1rem;
	margin-left: 0.4rem;
`;

export const AuthorName = styled.p`
	max-width: 20rem;
	font-weight: 500;
	color: ${({ articleOverviewPage }) => (articleOverviewPage ? 'var(--white)' : 'var(--blue-1)')};
	&:hover {
		text-decoration: underline;
	}
`;

export const DateCreated = styled.time`
	opacity: 0.8;
	font-size: 1rem;
	display: block;
	color: ${({ articleOverviewPage, isParentHovered }) =>
		(articleOverviewPage && 'var(--gray)') || (isParentHovered && 'var(--hover-color)') || 'var(--blue-3)'};
	transition: 0.2s;
`;
