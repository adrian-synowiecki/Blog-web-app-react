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

export const Wrapper = styled.div`
	margin-top: -0.1rem;
	margin-left: 0.4rem;
`;

export const AuthorName = styled.p`
	width: 20rem;
	font-weight: 500;
	color: ${({ articleOverviewPage }) => (articleOverviewPage ? 'var(--white)' : 'var(--blue-1)')};
	&:hover {
		text-decoration: underline;
	}
`;

export const DateCreated = styled.p`
	opacity: 0.8;
	font-size: 1rem;
	color: ${({ articleOverviewPage }) => (articleOverviewPage ? 'var(--gray)' : 'var(--blue-3)')};
`;
