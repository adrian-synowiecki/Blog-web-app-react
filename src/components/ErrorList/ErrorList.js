import React from 'react';

import * as S from './ErrorList.style';

function ErrorList({ error }) {
	return (
		<S.ErrorMessageWrapper>
			{Object.keys(error).map((errorKey) =>
				error[errorKey].map((errorMessage) => (
					<S.ErrorMessage>
						{errorKey} {errorMessage}
					</S.ErrorMessage>
				))
			)}
		</S.ErrorMessageWrapper>
	);
}

export default ErrorList;
