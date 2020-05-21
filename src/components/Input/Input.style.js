import styled from 'styled-components/macro';
import { TextField as TextField } from 'formik-material-ui';

export const TextFieldContainer = styled(TextField)`
    width: 100%;  
    
    label { 
       font-size: 1.4rem;    
       background-color: white;
       padding-right: 1rem;
    }
    .MuiOutlinedInput-root {
        fieldset {
        border-color: #BDC3C7;
    }
    &:hover fieldset {
        border-color: ${({ theme }) => theme.colors.blue2}
    }
    &.Mui-focused fieldset {
        border: ${({ theme }) => `2px solid ${theme.colors.blue2}`};
    }
  }
    label.Mui-focused {
      color: ${({ theme }) => theme.colors.blue2}
  }
`;
