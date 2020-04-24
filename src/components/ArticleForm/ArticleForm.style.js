import styled from 'styled-components/macro';
import { Form } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from 'components/Button/Button'

export const ArticleFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CreateArticle = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blue2};
	letter-spacing: 0.2rem;
`;

export const FormExtended = styled(Form)`
    width: 90%;
`;

export const TextFieldExtended = styled(TextField)`
    width: 100%;  
    label { 
      font-size: 1.4rem;     
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

export const ButtonExtended = styled(Button)`
    margin-top: 2rem;
    width: 100%;
`;
