import React from 'react';
import DialogContainer from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import * as S from './Dialog.style';

function Dialog({ isOpen, toggleDialog, slug, id, deleteRequest, commentDialog, children }) {
	const handleDialogClose = () => {
		if (commentDialog) {
			toggleDialog(0);
		} else toggleDialog(false);
	};
	const handleDeleteRequest = () => {
		handleDialogClose();
		if (commentDialog) {
			deleteRequest(slug, id);
		} else {
			deleteRequest(slug);
		}
	};

	return (
		<DialogContainer open={isOpen} onClose={handleDialogClose}>
			<DialogContent>
				<DialogContentText style={{ fontSize: '1.6rem', color: '#d12449' }}>{children}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<S.CancelButtonInDialog onClick={handleDialogClose} variant="contained">
					Cancel
				</S.CancelButtonInDialog>
				<S.DeleteButtonInDialog onClick={handleDeleteRequest} variant="contained">
					Delete
				</S.DeleteButtonInDialog>
			</DialogActions>
		</DialogContainer>
	);
}

export default Dialog;
