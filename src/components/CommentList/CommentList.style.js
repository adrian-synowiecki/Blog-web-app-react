import styled from 'styled-components/macro';

import { ReactComponent as TrashCan } from 'assets/trash.svg'

export const CommentListContainer = styled.ul`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 0;
`;

export const CommentContent = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.01);
	width: 90%;
	margin-top: 1rem;
`;

export const CommentText = styled.div`padding: 3rem;`;

export const CommentFooter = styled.div`
	display: flex;
	align-items: center;
	background-color: rgba(180, 185, 194, 0.4);
`;
export const CommentImage = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 8rem;
	margin-left: 3rem;
`;

export const CommentUsername = styled.p`
	color: ${({ theme }) => theme.colors.blue2};
	font-size: 1.2rem;
	margin-left: 2rem;
	font-weight: 600;
`;

export const CommentCreatedAt = styled.p`
	padding-left: 1rem;
	color: gray;
	font-size: 0.9rem;
	margin-top: 1.1rem;
`;

export const DeleteCommentIcon = styled(TrashCan)`
	width: 2rem;
	height: 2rem;
	margin-left: auto;
	margin-right: 3rem;
	cursor: pointer;
	fill: ${({ theme }) => theme.colors.blue2};
	&:hover {
		fill: ${({ theme }) => theme.colors.blue3};
	}
`;
