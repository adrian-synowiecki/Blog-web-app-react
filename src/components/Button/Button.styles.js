import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonContainer = styled(motion.button)`
	border-radius: 0.5rem;
	border: none;
	text-decoration: none;
	background-color: var(--blue-2);
	color: var(--white);
	padding: 1rem 2rem;
	font-size: 1.6rem;
	text-align: center;
	cursor: pointer;
	outline: 0;
	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.6;
			cursor: not-allowed;
		`};
	&:hover {
		background-color: var(--hover-color);
		transition: 0.3s;
	}
	&:active {
		transform: scale(0.95);
		transition: 0.2s;
	}


`;
