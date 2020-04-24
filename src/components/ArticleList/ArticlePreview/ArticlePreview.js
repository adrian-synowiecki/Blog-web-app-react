import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { addArticleToFavoritesRequest, removeArticleFromFavoritesRequest } from 'redux/articleList/articleList.actions';

import * as S from './ArticlePreview.style';

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
			<S.ArticleLeftSide>
				<S.ArticleMetaExtended articleData={articleData} />
				<S.ArticleContent>
					<S.ArticleTitleExtended to={`/article/${slug}`}>{title}</S.ArticleTitleExtended>
					<S.ArticleTextPreviewExtended to={`/article/${slug}`}>{description}</S.ArticleTextPreviewExtended>
					<S.ReadMoreExtended to={`/article/${slug}`}>Read more...</S.ReadMoreExtended>
				</S.ArticleContent>
			</S.ArticleLeftSide>
			<S.ArticleRightSide>
				<S.AddToFavorite favorited={favorited} onClick={handleAddingToFavorite}>
					<S.HeartIcon favorited={favorited} />
					<S.FavoriteAddedCount favorited={favorited}>{favoritesCount}</S.FavoriteAddedCount>
				</S.AddToFavorite>
				<TagList
					tagList={tagList}
					getTagName={getTagName}
					fetchArticlesByTagRequest={fetchArticlesByTagRequest}
				/>
			</S.ArticleRightSide>
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
