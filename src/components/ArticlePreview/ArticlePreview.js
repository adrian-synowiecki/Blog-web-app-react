import React from 'react';
import { connect } from 'react-redux';

import { addArticleToFavoritesRequest, removeArticleFromFavoritesRequest } from 'redux/articleList/articleList.actions';

import * as S from './ArticlePreview.style';

import ArticleMeta from '../ArticleMeta/ArticleMeta';
import TagList from 'components/TagList/TagList';

function ArticlePreview({
	articleData,
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
	getTagName,
	fetchArticlesByTagRequest
}) {
	const { favorited, slug, title, description, favoritesCount, tagList } = articleData;
	const handleAddingToFavorite = () => {
		if (favorited) {
			removeArticleFromFavoritesRequest(slug);
		} else {
			addArticleToFavoritesRequest(slug);
		}
	};
	return (
		<S.ArticlePreviewContainer>
			<S.ArticleLeftSide>
				<ArticleMeta articleData={articleData} absolute />
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

const mapDispatchToProps = (dispatch) => ({
	addArticleToFavoritesRequest: (articleSlug) => dispatch(addArticleToFavoritesRequest(articleSlug)),
	removeArticleFromFavoritesRequest: (articleSlug) => dispatch(removeArticleFromFavoritesRequest(articleSlug))
});

export default connect(null, mapDispatchToProps)(ArticlePreview);
