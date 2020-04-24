import styled from 'styled-components/macro';

export const ArticleListContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	@media (min-width: 770px) {
		order: 1;
		width: 70%;
	}
`;

export const ArticlesList = styled.div`
	display: flex;
	flex-direction: column;
`;
