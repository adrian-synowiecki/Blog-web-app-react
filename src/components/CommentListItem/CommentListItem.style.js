import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ReactComponent as TrashCan } from 'assets/trash.svg';

export const CommentListItemContainer = styled(motion.li)`
	border: 1px solid rgba(0, 0, 0, 0.01);
	width: 100%;
`;

export const Text = styled.div`padding: 5rem 2rem;`;

export const Wrapper = styled.section`
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
	color: var(--blue-2);
	font-size: 1.2rem;
	font-weight: 600;
	margin-left: 1rem;
`;

export const CreatedAt = styled.time`
	color: gray;
	font-size: 0.9rem;
	margin-left: 1rem;
	display: block;
`;

export const TrashCanIcon = motion.custom(styled(TrashCan)`
	width: 2rem;
	height: 2rem;
	margin-left: auto;
	cursor: pointer;
	fill: #d12449;
	&:hover {
		filter: brightness(90%);
	}
`);
