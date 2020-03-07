import styled from 'styled-components/macro';

import { Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { ReactComponent as TrashCan } from '../../assets/trash.svg'

import colors from '../../utils/colors';
import Button from '../Button/Button';

export const CommentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
/*     align-items: space-between;   */
    width: 90%;
    height: 13rem;
    border: 1px solid rgba(0,0,0,0.1); 
    background-color: rgba(180, 185, 194, 0.4); 

`;

export const StyledField = styled(Field)`
	height: 3rem;
	border: none;
	padding: 3rem;

	&::placeholder {
		color: rgba(0, 0, 0, 0.5);
		font-weight: 500;
	}
	&:focus {
		outline-width: 0;
	}
`;

export const StyledButton = styled(Button)`
    padding: 0.4rem;
    margin-left: auto;
    margin-right: 2rem;
    
`;

export const CommentContent = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.2);
	width: 90%;
	margin-top: 1rem;
`;

export const CommentBlock = styled.div`padding: 2rem;`;

export const CommentFooter = styled.div`
/* 	margin-top: 3rem; */
	display: flex;
	margin-left: 2rem;
	align-items: center;
	
`;
export const CommentImage = styled.img``;

export const CommentUsername = styled.p`
	color: ${colors.green};
	font-size: 1rem;
`;

export const CommentCreatedAt = styled.p`
	padding-left: 1rem;
	color: gray;
	font-size: 1rem;
	/* margin-top: 1.3rem; */
`;

export const DeleteComment = styled(TrashCan)`
	width: 2rem;
	height: 2rem;
	margin-top: -1rem;
	margin-left: auto;
	margin-right: 2rem;
	cursor: pointer;
`
