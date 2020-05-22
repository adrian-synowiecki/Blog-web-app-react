import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

import Button from 'components/Button/Button';

export const UserSettingsPageContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin: 3rem 2rem;
	
`;

export const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blue2};
	letter-spacing: 0.2rem;
`;

export const LogoutButton = styled(Button)`
	--logout-button-color: #b85c5c;
  	--white: #fff;
 	 background-color: var(--white);
 	 border: 1px solid var(--logout-button-color);
 	 color: var(--logout-button-color);
  	&:hover {
    	background-color:var(--logout-button-color);
   		color: var(--white);
	}
  	&:focus {
		background-color: var(--logout-button-color);
   		color: var(--white);;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;
