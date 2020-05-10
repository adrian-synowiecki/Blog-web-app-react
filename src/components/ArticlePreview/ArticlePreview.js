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
	const { favorited, slug, title, description, favoritesCount, tagList } = articleData || {};
	const handleAddingToFavorite = () => {
		if (isAuth) {
			if (favorited) {
				removeArticleFromFavoritesRequest(slug, false, favoritesCount - 1);
			} else addArticleToFavoritesRequest(slug, true, favoritesCount + 1);
		} else push('/signUp');
	};

	return (
		<S.ArticlePreviewContainer>
			<ArticleMeta articleData={articleData} />
			<S.Wrapper>
				<S.Title to={`/article/${slug}`}>{title}</S.Title>
				<S.Text to={`/article/${slug}`}>{description}</S.Text>
				<S.ReadMore to={`/article/${slug}`}>Read more...</S.ReadMore>
			</S.Wrapper>
			<TagList tagList={tagList} getTagName={getTagName} fetchArticlesByTagRequest={fetchArticlesByTagRequest} />
			<S.AddToFavoriteWrapper favorited={favorited} onClick={handleAddingToFavorite}>
				<S.HeartIcon favorited={favorited} />
				<S.FavoriteAddedCount favorited={favorited}>{favoritesCount}</S.FavoriteAddedCount>
			</S.AddToFavoriteWrapper>
		</S.ArticlePreviewContainer>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.user.isAuth
});

const mapDispatchToProps = (dispatch) => ({
	addArticleToFavoritesRequest: (articleSlug, isFavorited, favoritesCount) =>
		dispatch(addArticleToFavoritesRequest(articleSlug, isFavorited, favoritesCount)),
	removeArticleFromFavoritesRequest: (articleSlug, isFavorited, favoritesCount) =>
		dispatch(removeArticleFromFavoritesRequest(articleSlug, isFavorited, favoritesCount)),
	push: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePreview);
