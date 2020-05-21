import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';

export const DeleteButtonInDialog = styled(Button)`
	&& {
		background-color: #d12449;
		color: #e6eced;
		&:hover {
			filter: brightness(95%);
			background-color: #d12449;
		}
		
	}	
`;

export const CancelButtonInDialog = styled(Button)`
	&& {
		background-color: #3cba77;
		color: #e6eced;
		&:hover {
			filter: brightness(95%);
			background-color: #3cba77;
		}
	}
`;