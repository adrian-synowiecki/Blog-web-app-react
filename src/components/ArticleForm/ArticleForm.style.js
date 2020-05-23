import styled from 'styled-components/macro';
import { motion } from "framer-motion";

import Button from 'components/Button/Button';

export const ArticleFormContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: var(--container-margin);
`;

export const Title = styled.h1`
	font-weight: 500;
	color: var(--blue-2);
	letter-spacing: 0.2rem;
`;

export const CreateAndEditArticleButton = styled(Button)`
    margin-top: 2rem;
    width: 100%;
`;
