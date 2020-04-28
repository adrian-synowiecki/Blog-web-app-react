import React from 'react';
import { connect } from 'react-redux';

import { removeCommentFromArticleRequest } from 'redux/comments/comments.actions';

import * as S from './CommentListItem.style';

function CommentListItem({ commentData, currentUserData, removeCommentFromArticleRequest, articleSlug }) {
	const { id, body, createdAt, author: { image, username } } = commentData;
	const createdAtDate = new Date(createdAt).toDateString();
	return (
		<S.CommentListItemContainer key={id}>
			<S.CommentText>{body}</S.CommentText>
			<S.CommentFooterWrapper>
				<S.CommentImage src={image} />
				<S.CommentUsername>{username}</S.CommentUsername>
				<S.CommentCreatedAt>{createdAtDate}</S.CommentCreatedAt>
				{currentUserData.username === username && (
					<S.RemoveCommentIcon onClick={() => removeCommentFromArticleRequest(articleSlug, id)} />
				)}
			</S.CommentFooterWrapper>
		</S.CommentListItemContainer>
	);
}

const mapStateToProps = (state) => ({
	currentUserData: state.user.currentUserData
});

const mapDispatchToProps = (dispatch) => ({
	removeCommentFromArticleRequest: (articleSlug, commentToDeleteId) =>
		dispatch(removeCommentFromArticleRequest(articleSlug, commentToDeleteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentListItem);
