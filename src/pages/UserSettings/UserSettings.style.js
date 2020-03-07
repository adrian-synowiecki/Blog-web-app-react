import React from 'react';

import styled from 'styled-components/macro';

import { Form } from 'formik';

import { TextField } from 'formik-material-ui';
 
/*  import TextField from '@material-ui/core/TextField';  */

export const UserSettingsContainer = styled.div`
	display: flex;
	align-items: center;
  justify-content: center;
	flex-direction: column;
`;

export const Title = styled.h1`font-weight: 400;`;

export const StyledForm = styled(Form)`
    width: 90%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;

    @media (min-width: 600px) {
      width: 45rem;    
    }
`;


export const StyledTextField = styled(({ height, ...other }) => <TextField {...other} />)`
    width: 100%;


  & .MuiInputBase-input {
    height: ${({ height }) => height && '10rem'};
  }
`;
 