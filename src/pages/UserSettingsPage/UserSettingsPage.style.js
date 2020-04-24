import styled from 'styled-components/macro';
import { Form } from 'formik';
import { TextField } from 'formik-material-ui';

import Button from 'components/Button/Button';

export const UserSettingsContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blue2};
  letter-spacing: 0.2rem;
  
`;

export const FormExtended = styled(Form)`
    width: 90%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 600px) {
      width: 45rem;    
    }
`;

export const TextFieldExtended = styled(TextField)`
    width: 100%;
    & .MuiInputBase-input {
    height: ${({ height }) => height && '10rem'};
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
  width: 100%;
  margin-top: 2rem;
`;
