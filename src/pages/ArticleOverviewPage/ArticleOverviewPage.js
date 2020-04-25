import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import * as S from './ArticleOverviewPage.style';
import { fetchArticleRequest, unloadArticle, deleteArticleRequest } from 'redux/article/article.actions';
import { fetchCommentsFromArticleRequest, addCommentToArticleRequest } from 'redux/comments/comments.actions';

import NotFound from 'components/NotFound/NotFound';
import CommentForm from 'components/CommentForm/CommentForm';
import ArticleMeta from 'components/ArticleMeta/ArticleMeta';

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

	return (
		<Fragment>
			{error && <NotFound>404 Page Not Found</NotFound>}
			{!isEmpty(articleData) && (
				<Fragment>
					<S.HeaderExtended>
						<S.HeaderContentWrapper>
							<S.ArticleTitle>{title}</S.ArticleTitle>
							<ArticleMeta articleData={articleData} articleOverviewPage />
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
					<S.CommentListExtended commentList={commentList} />
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
	deleteArticleRequest: (articleSlug) => dispatch(deleteArticleRequest(articleSlug)),
	push: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverviewPage);
