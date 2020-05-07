import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { useParams, Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import * as S from './ArticleOverviewPage.style';
import { fetchArticleRequest, unloadArticle, deleteArticleRequest } from 'redux/article/article.actions';
import { fetchCommentsFromArticleRequest, addCommentToArticleRequest } from 'redux/comments/comments.actions';

import NotFound from 'components/NotFound/NotFound';
import ArticleMeta from 'components/ArticleMeta/ArticleMeta';
import TagList from 'components/TagList/TagList';
import CommentList from 'components/CommentList/CommentList';

function ArticleOverviewPage({
	articleData,
	isAuth,
	currentUserData,
	commentList,
	fetchArticleRequest,
	unloadArticle,
	fetchCommentsFromArticleRequest,
	addCommentToArticleRequest,
	error
}) {
	const { articleSlug } = useParams();
	const { body, tagList, title } = articleData || {};

	useEffect(() => {
		fetchArticleRequest(articleSlug);
		fetchCommentsFromArticleRequest(articleSlug);
		return () => {
			unloadArticle();
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	const canModifyArticle =
		articleData.author && currentUserData.username && articleData.author.username === currentUserData.username;

	return (
		<Fragment>
			{error && <NotFound />}
			{!isEmpty(articleData) && (
				<Fragment>
					<S.Header>
						<S.Title>{title}</S.Title>
						<S.Wrapper>
							<ArticleMeta articleData={articleData} articleOverviewPage />
							<S.IconsWrapper>
								{canModifyArticle && (
									<Fragment>
										<Link to="/editArticle/:articleSlug" style={{ textDecoration: 'none' }}>
											<S.ModifyButton>
												<S.IconWrapper>
													<S.ModifyIcon />
												</S.IconWrapper>
												Modify article
											</S.ModifyButton>
										</Link>
										<Link style={{ textDecoration: 'none' }}>
											<S.DeleteButton>
												<S.IconWrapper includePadding>
													<S.TrashCanIcon />
												</S.IconWrapper>
												Delete article
											</S.DeleteButton>
										</Link>
									</Fragment>
								)}
							</S.IconsWrapper>
						</S.Wrapper>
					</S.Header>
					<S.MainWrapper>
						<S.Text>{body}</S.Text>
						<TagList tagList={tagList} />
						{isAuth ? (
							<S.CommentForm addCommentToArticleRequest={addCommentToArticleRequest} />
						) : (
							<S.AuthInvite>
								<S.AuthInviteSpan to={'/login'}>Log in</S.AuthInviteSpan> or {''}
								<S.AuthInviteSpan to={'/signUp'}>sign up</S.AuthInviteSpan> to add comments on this
								article
							</S.AuthInvite>
						)}

						<CommentList commentList={commentList} />
					</S.MainWrapper>
				</Fragment>
			)}
		</Fragment>
	);
}

const mapStateToProps = (state) => {
	const { articleData, error } = state.article;
	const { currentUserData, isAuth } = state.user;
	const { commentList } = state.comments;
	return {
		articleData,
		error,
		currentUserData,
		commentList,
		isAuth
	};
};

const mapDispatchToProps = (dispatch) => ({
	fetchArticleRequest: (articleSlug) => dispatch(fetchArticleRequest(articleSlug)),
	unloadArticle: () => dispatch(unloadArticle()),
	fetchCommentsFromArticleRequest: (articleSlug) => dispatch(fetchCommentsFromArticleRequest(articleSlug)),
	addCommentToArticleRequest: (commentObj, slug) => dispatch(addCommentToArticleRequest(commentObj, slug)),
	/* 	deleteArticleRequest: (articleSlug) => dispatch(deleteArticleRequest(articleSlug)), */
	push: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleOverviewPage);
