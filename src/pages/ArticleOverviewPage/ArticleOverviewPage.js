import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import variants from 'utils/variants';
import * as S from './ArticleOverviewPage.style';
import {
	fetchArticleRequest,
	unloadArticle,
	deleteArticleRequest,
	clearArticleError
} from 'redux/article/article.actions';
import { fetchCommentsFromArticleRequest, addCommentToArticleRequest } from 'redux/comments/comments.actions';
import { toggleArticleDialog } from 'redux/common/common.actions';

import NotFound from 'components/NotFound/NotFound';
import ArticleMeta from 'components/ArticleMeta/ArticleMeta';
import TagList from 'components/TagList/TagList';
import CommentList from 'components/CommentList/CommentList';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import Dialog from 'components/Dialog/Dialog';

function ArticleOverviewPage({
	articleData,
	isAuth,
	currentUserData,
	commentList,
	isOpenArticleDialog,
	toggleArticleDialog,
	isFetchingArticleData,
	fetchArticleRequest,
	clearArticleError,
	unloadArticle,
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	deleteArticleRequest,
	error
}) {
	const { articleSlug } = useParams();
	const { body, tagList, title, slug } = articleData;
	useEffect(
		() => {
			fetchArticleRequest(articleSlug);
			fetchCommentsFromArticleRequest(articleSlug);
			return () => {
				unloadArticle();
				clearArticleError();
			};
		},
		[ articleSlug ] // eslint-disable-line react-hooks/exhaustive-deps
	);
	const canModifyArticle =
		!isEmpty(articleData) && !isEmpty(currentUserData) && articleData.author.username === currentUserData.username;

	window.onbeforeunload = function() {
		unloadArticle();
	};

	
	return (
		<S.ArticleOverviewPageContainer>
			{error && <NotFound>404 Article Not Found</NotFound>}
			{isFetchingArticleData && isEmpty(articleData) && <LoadingSpinner center />}
			{!isEmpty(articleData) && (
				<Fragment>
					<S.Header>
						<S.Title initial="initial" animate="animate" variants={variants}>
							{title}
						</S.Title>
						<S.Wrapper initial="initial" animate="animate" variants={variants}>
							<ArticleMeta articleData={articleData} articleOverviewPage />
							<S.MultipleIconsWrapper>
								{canModifyArticle && (
									<Fragment>
										<Link to={`/editArticle/${slug}`} style={{ textDecoration: 'none' }}>
											<S.ModifyButton>
												<S.IconWrapper>
													<S.ModifyIcon />
												</S.IconWrapper>
												Modify article
											</S.ModifyButton>
										</Link>
										<S.DeleteButton onClick={() => toggleArticleDialog(true)}>
											<S.IconWrapper includePadding>
												<S.TrashCanIcon />
											</S.IconWrapper>
											Delete article
										</S.DeleteButton>
										<Dialog
											isOpen={isOpenArticleDialog}
											slug={slug}
											toggleDialog={toggleArticleDialog}
											deleteRequest={deleteArticleRequest}
										>
											Are you sure you want to delete this article?
										</Dialog>
									</Fragment>
								)}
							</S.MultipleIconsWrapper>
						</S.Wrapper>
					</S.Header>
					<S.MainWrapper initial="initial" animate="animate" variants={variants}>
						<S.Text>{body}</S.Text>
						<TagList tagList={tagList} />
						{isAuth ? (
							<S.CommentForm addCommentToArticleRequest={addCommentToArticleRequest} />
						) : (
							<S.AuthInvite>
								<S.AuthInviteSpan to="/login">Log in</S.AuthInviteSpan> or {''}
								<S.AuthInviteSpan to="/signUp">sign up</S.AuthInviteSpan> to add comments on this
								article
							</S.AuthInvite>
						)}
						<CommentList commentList={commentList} />
					</S.MainWrapper>
				</Fragment>
			)}
		</S.ArticleOverviewPageContainer>
	);
}

const mapStateToProps = (state) => {
	const { articleData, isFetchingArticleData, error } = state.article;
	const { currentUserData, isAuth } = state.user;
	const { commentList } = state.comments;
	const { isOpenArticleDialog } = state.common;
	return {
		articleData,
		isFetchingArticleData,
		error,
		currentUserData,
		commentList,
		isAuth,
		isOpenArticleDialog
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug)),
	unloadArticle: () => dispatch(unloadArticle()),
	fetchCommentsFromArticleRequest: (articleSlug) => dispatch(fetchCommentsFromArticleRequest(articleSlug)),
	addCommentToArticleRequest: (commentObj, slug) => dispatch(addCommentToArticleRequest(commentObj, slug)),
	deleteArticleRequest: (articleSlug) => dispatch(deleteArticleRequest(articleSlug)),
	clearArticleError: (isOpenSnackbar) => dispatch(clearArticleError(isOpenSnackbar)),
	toggleArticleDialog: (isOpenDeletionArticleDialog) => dispatch(toggleArticleDialog(isOpenDeletionArticleDialog))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverviewPage);
