import React from 'react';
import { Field } from 'formik';

import * as S from './Input.style';

function Input({ name, label, type, inputProps, autocomplete, handleFocus, multiline, rows }) {
	return (
		<Field
			name={name}
			label={label}
			type={type}
			inputProps={inputProps}
			onFocus={handleFocus}
			autocomplete={autocomplete}
			multiline={multiline}
			rows={rows}
			component={S.TextFieldContainer}
			margin="normal"
			variant="outlined"
		/>
	);
}

export default Input;
