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

export const FormExtended = styled(Form)`
    display: flex;
    flex-direction: column;
/*     align-items: space-between;   */
    width: 90%;
    height: 13rem;
    border: 1px solid rgba(0,0,0,0.1); 
    background-color: rgba(180, 185, 194, 0.4); 

`;

export const FieldExtended = styled(Field)`
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

export const ButtonExtended = styled(Button)`
    padding: 0.4rem;
    margin-left: auto;
    margin-right: 2rem;
    
`;

