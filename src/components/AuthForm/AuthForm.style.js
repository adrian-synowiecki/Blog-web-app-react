import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from 'components/Button/Button';

export const AuthFormContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 3rem 2rem;
`;

export const Title = styled.h1`font-weight: 400;`;

export const LinkToAuth = styled(Link)`
	font-size: 1.4rem;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.blue2};
    &:hover {
        text-decoration: underline;
    }
`;

export const SignUpAndLogInButton = styled(Button)`
	margin-top: 2rem;
	width: 100%;
`;
