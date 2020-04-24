import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import * as S from './ArticleOverviewPage.style';
import { fetchArticleRequest, unloadArticle, deleteArticleRequest } from 'redux/article/article.actions';
import {
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest
} from 'redux/comments/comments.actions';

import NotFound from 'components/NotFound/NotFound';
import Header from 'components/Header/Header';
import CommentForm from 'components/CommentForm/CommentForm';
import CommentList from 'components/CommentList/CommentList';
import TagList from 'components/TagList/TagList';
import Button from 'components/Button/Button';

function ArticleOverviewPage({
	articleData,
	currentUserData,
	commentList,
	fetchArticleRequest,
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	removeCommentFromArticleRequest,
	unloadArticle,
	deleteArticleRequest,
	isFetchingArticle,
	error,
	push
}) {
	const { articleSlug } = useParams();
	const { body, tagList, author, title } = articleData || {};

	useEffect(() => {
		fetchArticleRequest(articleSlug);
		fetchCommentsFromArticleRequest(articleSlug);
		return () => {
			unloadArticle();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	console.log(articleData);
	const canModify =
		!isEmpty(currentUserData) && !isEmpty(articleData) && currentUserData.username === author.username;

	return (
		<Fragment>
			{error && <NotFound>404 Page Not Found</NotFound>}
			{!isEmpty(articleData) && (
				<Fragment>
					<S.HeaderExtended>
						<S.HeaderContentWrapper>
							<S.ArticleTitle>{title}</S.ArticleTitle>
							<S.ArticleMetaExtended articleData={articleData} articleOverviewPage />
						</S.HeaderContentWrapper>
					</S.HeaderExtended>
					<S.FullArticleText>{body}</S.FullArticleText>
					<S.TagListExtended tagList={tagList} />
					{isEmpty(currentUserData) ? (
						<S.Paragraph>
							<S.BlueSpanExtended to={'/login'}>Log in</S.BlueSpanExtended> or {''}
							<S.BlueSpanExtended to={'/signUp'}>sign up</S.BlueSpanExtended> to add comments on this
							article
						</S.Paragraph>
					) : (
						<CommentForm addCommentToArticleRequest={addCommentToArticleRequest} />
					)}
					<S.CommentListExtended
						currentUserData={currentUserData}
						commentList={commentList}
						removeCommentFromArticleRequest={removeCommentFromArticleRequest}
					/>
				</Fragment>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => {
	const { isFetchingArticle, articleData, error } = state.article;
	const { currentUserData } = state.user;
	const { commentList } = state.comments;
	return {
		articleData,
		isFetchingArticle,
		error,
		currentUserData,
		commentList
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug)),
	unloadArticle: () => dispatch(unloadArticle()),
	fetchCommentsFromArticleRequest: (articleSlug) => dispatch(fetchCommentsFromArticleRequest(articleSlug)),
	addCommentToArticleRequest: (commentObj, slug) => dispatch(addCommentToArticleRequest(commentObj, slug)),
	removeCommentFromArticleRequest: (articleSlug, commentToDeleteId) =>
		dispatch(removeCommentFromArticleRequest(articleSlug, commentToDeleteId)),
	deleteArticleRequest: (articleSlug) => dispatch(deleteArticleRequest(articleSlug)),
	push: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverviewPage);
