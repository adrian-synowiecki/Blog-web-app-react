import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from 'components/Button/Button';

export const AuthFormContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: var(--container-margin);
	margin-top: 300px;
	@media (min-width: 768px) {
		width: 600px;
		margin: 0 auto;
		margin-top: 300px;
	}
`;

export const Title = styled.h1`font-weight: 400;`;

export const LinkToAuth = styled(Link)`
	font-size: 1.4rem;
	text-decoration: none;
	color: var(--blue-2);
    &:hover {
        text-decoration: underline;
    }
`;

export const SignUpAndLogInButton = styled(Button)`
	margin-top: 2rem;
	width: 100%;
`;
