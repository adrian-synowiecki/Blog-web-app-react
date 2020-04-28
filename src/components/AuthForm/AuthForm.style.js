import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from 'components/Button/Button'

export const AuthFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const AuthFormTitle = styled.h1`font-weight: 400;`;

export const LinkToAuth = styled(Link)`
	margin-top: -1.5rem;
	font-size: 1.4rem;
	text-decoration: none;
	color: ${({theme}) => theme.colors.blue2};
    &:hover {
        text-decoration: underline;
    }
`;

export const AuthForm = styled(Form)`
	width: 90%;
`;

export const AuthFormTextField = styled(TextField)`
    width: 100%;
`;

export const AuthFormButton = styled(Button)`
	margin-top: 2rem;
	width: 100%;
`