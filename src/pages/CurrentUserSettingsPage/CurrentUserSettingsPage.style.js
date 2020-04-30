import styled from 'styled-components/macro';
import { Form as FormComponent } from 'formik';
import { TextField as TextFieldComponent } from 'formik-material-ui';

import Button from 'components/Button/Button';

export const UserSettingsPageContainer = styled.div`
	display: flex;
	align-items: center;
  flex-direction: column;
  margin: 3rem 2rem;
`;

export const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blue2};
	letter-spacing: 0.2rem;
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

export const LogoutButton = styled(Button)`
  background-color: white;
  border: 1px solid #b85c5c;
  color: #b85c5c;
  &:hover {
    background-color: #b85c5c;
    color: white;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 2rem;
`;
