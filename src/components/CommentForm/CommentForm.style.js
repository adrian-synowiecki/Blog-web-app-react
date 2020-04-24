import styled from 'styled-components/macro';
import { Form, Field } from 'formik';

import Button from 'components/Button/Button';

export const CommentContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const FormExtended = styled(Form)`	
	width: 90%;
	display: flex;
	flex-direction: column;
	background-color: rgba(180, 185, 194, 0.4); 
	border: 1px solid rgba(0,0,0,0.01); 
`;

export const FieldExtended = styled(Field)`
	border: none;
	padding: 3rem;
	resize: vertical;
	max-height: 30rem;
	&:focus {
		outline-width: 0;
	}
	&::placeholder {
		opacity: 0.8;
		font-weight: 400;
	}
`;

export const ButtonExtended = styled(Button)`
	margin: 1rem 1rem 1rem 0rem;
	align-self: flex-end;
`;
