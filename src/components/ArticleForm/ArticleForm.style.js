import styled from 'styled-components/macro'

import {  Form } from 'formik';



import { TextField } from 'formik-material-ui';

import Button from '../Button/Button'

export const ArticleFormContainer = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center; 
`

export const StyledForm = styled(Form)`
    width: 90%;
`

export const StyledTextField = styled(TextField)`
    width: 100%;
`

export const StyledButton = styled(Button)`
    margin-left: auto;
`