import styled from 'styled-components';

import { ReactComponent as TrashCan } from 'assets/trash.svg';

export const CommentListItemContainer = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.01);
	width: 100%;
`;

export const Text = styled.div`padding: 5rem 2rem;`;

export const FooterWrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: rgba(180, 185, 194, 0.4);
	padding: 2rem;
`;
export const AuthorImage = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 8rem;
`;

export const Username = styled.p`
	color: ${({ theme }) => theme.colors.blue2};
	font-size: 1.2rem;
	font-weight: 600;
	margin-left: 1rem;
`;

export const CreatedAt = styled.p`
	color: gray;
	font-size: 0.9rem;
	margin-left: 1rem;
`;

export const RemoveCommentIcon = styled(TrashCan)`
	width: 2rem;
	height: 2rem;
	margin-left: auto;
	cursor: pointer;
	fill: ${({ theme }) => theme.colors.blue2};
	&:hover {
		fill: ${({ theme }) => theme.colors.blue3};
	}
`;
