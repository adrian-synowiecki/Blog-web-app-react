import styled from 'styled-components/macro';
import { Form, Field } from 'formik';

import Button from 'components/Button/Button';

export const CommentForm = styled(Form)`	
	background-color: rgba(180, 185, 194, 0.4); 
	border: 1px solid rgba(0,0,0,0.01); 
`;

export const CommentFormField = styled(Field)`
	border: none;
	padding: 3rem;
	resize: vertical;
	max-height: 30rem;
	width: 100%;
	&:focus {
		outline-width: 0;
	}
	&::placeholder {
		opacity: 0.7;
		font-weight: 400;
	}
`;

export const CommentFormButton = styled(Button)`
	margin: 1rem 1rem 1rem auto; 
	display: block;
`;
