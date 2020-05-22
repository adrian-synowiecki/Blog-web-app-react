import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { motion } from "framer-motion";
import Button from '@material-ui/core/Button';

import { ReactComponent as TrashCan } from 'assets/trash.svg';
import { ReactComponent as Modify } from 'assets/modify.svg';

import HeaderComponent from 'components/Header/Header';
import CommentFormComponent from 'components/CommentForm/CommentForm';


export const Header = styled(HeaderComponent)`
	background-color: ${({ theme }) => theme.colors.blue2};
	min-height: 16rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 2rem 2rem;
`;

export const Title = styled(motion.h1)`
	color: #edede8;
	letter-spacing: 0.1rem;
	font-weight: 400;
	overflow-wrap: break-word;
	margin-bottom: 2rem;
`;

export const Wrapper = styled(motion.div)`
	display: flex;
	align-items: center;
`;

const buttonStyles = css`
	display: flex;
	align-items: center;
	border: none;
	outline: none;
	border-radius: 8rem;
	cursor: pointer;
	color: #e6eced;
	padding: 0.3rem 0.5rem;
	font-size: 1.1rem;
	&:hover {
		filter: brightness(97%);
	}
	&:active {
		filter: brightness(90%);
	}
`;

export const DeleteButton = styled.button`
	${buttonStyles};
	background-color: #d12449;
`;

export const ModifyButton = styled.button`
	${buttonStyles};
	background-color: #e3af34;
	margin-right: 3rem;
`;

/* export const DeleteButtonInDialog = styled(Button)`
	&& {
		background-color: #d12449;
		color: #e6eced;
		&:hover {
			filter: brightness(95%);
			background-color: #d12449;
		}
		
	}	
`;

export const CancelButtonInDialog = styled(Button)`
	&& {
		background-color: #3cba77;
		color: #e6eced;
		&:hover {
			filter: brightness(95%);
			background-color: #3cba77;
		}
	}
`; */

export const IconsWrapper = styled.div`display: flex;`;

export const IconWrapper = styled.div`
	background-color: white;
	padding: ${({ includePadding }) => includePadding && '0.6rem'};
	border-radius: 8rem;
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
`;

export const TrashCanIcon = styled(TrashCan)`
	width: 1.8rem;
	height: 1.8rem;
	background-color: white;
	border-radius: 8rem;
	fill: #ba3f3f;
`;

export const ModifyIcon = styled(Modify)`
	width: 3rem;
	height: 3rem;
	background-color: white;
	border-radius: 8rem;
	fill: #55abb5;
`;

export const MainWrapper = styled(motion.div)`margin: 3rem 2rem;`;

export const Text = styled.p`
	margin-bottom: 3rem;
	overflow-wrap: break-word;
	line-height: 1.5;
`;

export const CommentForm = styled(CommentFormComponent)`
	margin: 3rem 0;
`;

export const AuthInvite = styled.p`
	margin-top: 5rem;
	margin-bottom: 3rem;
	font-size: 1.4rem;
`;

export const AuthInviteSpan = styled(Link)`
	color: ${({ theme }) => theme.colors.blue2};
    font-weight: 500;
    text-decoration: none;
`;
