import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { addArticleToFavoritesRequest, removeArticleFromFavoritesRequest } from 'redux/articleList/articleList.actions';

import * as S from './ArticlePreview.style';

import ArticleMeta from 'components/ArticleMeta/ArticleMeta';
import TagList from 'components/TagList/TagList';

function ArticlePreview({
	articleData,
	isAuth,
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
	getTagName,
	fetchArticlesByTagRequest,
	push
}) {
	const { favorited, slug, title, description, favoritesCount, tagList } = articleData;
	const handleAddingToFavorite = () => {
		if (isAuth) {
			if (favorited) {
				removeArticleFromFavoritesRequest(slug);
			} else addArticleToFavoritesRequest(slug);
		} else push('/signUp');
	};

	return (
		<S.ArticlePreviewContainer>
			<ArticleMeta articleData={articleData} />
			<S.PreviewWrapper>
				<S.PreviewTitle to={`/article/${slug}`}>{title}</S.PreviewTitle>
				<S.PreviewText to={`/article/${slug}`}>{description}</S.PreviewText>
				<S.PreviewReadMore to={`/article/${slug}`}>Read more...</S.PreviewReadMore>
			</S.PreviewWrapper>
			<TagList tagList={tagList} getTagName={getTagName} fetchArticlesByTagRequest={fetchArticlesByTagRequest} />
			<S.PreviewAddToFavoriteWrapper favorited={favorited} onClick={handleAddingToFavorite}>
				<S.PreviewHeartIcon favorited={favorited} />
				<S.PreviewFavoriteAddedCount favorited={favorited}>{favoritesCount}</S.PreviewFavoriteAddedCount>
			</S.PreviewAddToFavoriteWrapper>
		</S.ArticlePreviewContainer>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.user.isAuth
});

const mapDispatchToProps = (dispatch) => ({
	addArticleToFavoritesRequest: (articleSlug) => dispatch(addArticleToFavoritesRequest(articleSlug)),
	removeArticleFromFavoritesRequest: (articleSlug) => dispatch(removeArticleFromFavoritesRequest(articleSlug)),
	push: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePreview);
