import React from 'react';

import * as S from './ErrorList.style';

function ErrorList({ error, className }) {
	return (
		<S.ErrorMessageContainer className={className}>
			{Object.keys(error).map((errorKey) =>
				error[errorKey].map((errorMessage) => (
					<S.ErrorMessage>
						{errorKey} {errorMessage}
					</S.ErrorMessage>
				))
			)}
		</S.ErrorMessageContainer>
	);
}

export default ErrorList;
