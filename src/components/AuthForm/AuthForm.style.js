import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { TextField as TextFieldComponent } from 'formik-material-ui';

import Button from 'components/Button/Button';

export const AuthFormContainer = styled.div`
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

export const TextField = styled(TextFieldComponent)`
	width: 100%;
	& .MuiInputBase-input {
       height: ${({ bio }) => bio && '10rem'};
    }
    .MuiOutlinedInput-root {
        fieldset {
        border-color: #BDC3C7;
    }
    &:hover fieldset {
        border-color: ${({ theme }) => theme.colors.blue2}
    }
    &.Mui-focused fieldset {
        border: ${({ theme }) => `2px solid ${theme.colors.blue2}`}
    }
  }
    label.Mui-focused {
      color: ${({ theme }) => theme.colors.blue2}
  }
`;

export const SignUpAndLogInButton = styled(Button)`
	margin-top: 2rem;
	width: 100%;
`;


