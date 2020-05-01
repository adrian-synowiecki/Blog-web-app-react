import styled from 'styled-components/macro';
import { TextField as TextFieldComponent } from 'formik-material-ui';

export const TextFieldContainer = styled(TextFieldComponent)`
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
