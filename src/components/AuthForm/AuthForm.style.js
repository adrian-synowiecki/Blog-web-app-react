import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from 'components/Button/Button'

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h1`font-weight: 400;`;

export const LinkExtended = styled(Link)`
	margin-top: -1.5rem;
	font-size: 1.4rem;
	text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export const FormExtended = styled(Form)`
	width: 90%;
`;

export const TextFieldExtended = styled(TextField)`
    width: 100%;
`;

export const ButtonExtended = styled(Button)`
	margin-top: 2rem;
	width: 100%;
`