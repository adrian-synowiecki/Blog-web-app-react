import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { AnimatePresence } from 'framer-motion';

import { removeCommentFromArticleRequest } from 'redux/comments/comments.actions';
import { toggleCommentDialog } from 'redux/common/common.actions';

import Dialog from 'components/Dialog/Dialog';

import * as S from './CommentListItem.style';

function CommentListItem({
	commentData,
	currentUserData,
	dialogID,
	removeCommentFromArticleRequest,
	articleSlug,
	toggleCommentDialog,
	index
}) {
	const { id, body, createdAt, author: { image, username } } = commentData;
	const createdAtDate = new Date(createdAt).toDateString();
	const canDeleteComment =
		!isEmpty(commentData) && !isEmpty(currentUserData) && username === currentUserData.username;

	const variants = {
		initial: {
			opacity: 0
		},
		animate: (index) => ({
			opacity: 1,
			transition: {
				delay: index * 0.1
			}
		}),
		exit: {
			opacity: 0,
			transition: {
				delay: 0.1
			}
		}
	};

	return (
		<S.CommentListItemContainer
			key={id}
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			custom={index}
		>
			<S.Text>{body}</S.Text>
			<S.FooterWrapper>
				<S.AuthorImage src={image ? image : 'https://static.productionready.io/images/smiley-cyrus.jpg'} />
				<S.Username>{username}</S.Username>
				<S.CreatedAt>{createdAtDate}</S.CreatedAt>
				{canDeleteComment && (
					<S.TrashCanIcon
						whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
						whileTap={{ scale: 0.99, transition: { duration: 0.2 } }}
						onClick={() => toggleCommentDialog(id)}
					/>
				)}
			</S.FooterWrapper>
			<Dialog
				isOpen={dialogID === id}
				toggleDialog={toggleCommentDialog}
				deleteRequest={removeCommentFromArticleRequest}
				slug={articleSlug}
				id={id}
				commentDialog
			>
				Are you sure you want to delete this comment?
			</Dialog>
		</S.CommentListItemContainer>
	);
}

const mapStateToProps = (state) => ({
	currentUserData: state.user.currentUserData,
	dialogID: state.common.dialogID
});

const mapDispatchToProps = (dispatch) => ({
	removeCommentFromArticleRequest: (articleSlug, commentToDeleteId) =>
		dispatch(removeCommentFromArticleRequest(articleSlug, commentToDeleteId)),
	toggleCommentDialog: (dialogID) => dispatch(toggleCommentDialog(dialogID))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListItem);
