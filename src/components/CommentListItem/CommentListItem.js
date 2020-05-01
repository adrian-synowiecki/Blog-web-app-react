import React from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { removeCommentFromArticleRequest } from 'redux/comments/comments.actions';

import * as S from './CommentListItem.style';

function CommentListItem({ commentData, currentUserData, removeCommentFromArticleRequest, articleSlug }) {
	const { id, body, createdAt, author: { image, username } } = commentData || {};
	const createdAtDate = new Date(createdAt).toDateString();
	const canDeleteComment =
		!isEmpty(commentData) && !isEmpty(currentUserData) && username === currentUserData.username;

	return (
		<S.CommentListItemContainer key={id}>
			<S.Text>{body}</S.Text>
			<S.FooterWrapper>
				<S.AuthorImage src={image} />
				<S.Username>{username}</S.Username>
				<S.CreatedAt>{createdAtDate}</S.CreatedAt>
				{canDeleteComment && (
					<S.TrashCanIcon onClick={() => removeCommentFromArticleRequest(articleSlug, id)} />
				)}
			</S.FooterWrapper>
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
