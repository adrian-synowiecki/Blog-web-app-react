import styled from 'styled-components/macro';

import { Form } from 'formik';

import { TextField } from 'formik-material-ui';

import Button from '../Button/Button';

export const ArticleFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledForm = styled(Form)`
    width: 90%;
`;

export const StyledTextField = styled(TextField)`
    width: 100%;  
    label { 
      font-size: 1.4rem;     
    }
    .MuiOutlinedInput-root {
        fieldset {
        border-color: #BDC3C7;
    }
    &:hover fieldset {
        border-color: #3e8e41;
    }
    &.Mui-focused fieldset {
        border: 1px solid #3e8e41;
    }
  }
    label.Mui-focused {
      color: #3e8e41;
  }
`;

export const StyledButton = styled(Button)`
    margin-left: auto;
`;
