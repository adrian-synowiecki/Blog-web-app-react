import React from 'react';

import * as S from './ArticlePreview.style';

import ArticleMeta from '../ArticleMeta/ArticleMeta';
import TagList from 'components/TagList/TagList'

function ArticlePreview({
	articleData,
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
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
				<ArticleMeta articleData={articleData} />
				<S.ArticleContent>
					<S.ArticleTitleExtended to={`/article/${slug}`}>{title}</S.ArticleTitleExtended>
					<S.ArticleTextPreviewExtended to={`/article/${slug}`}>{description}</S.ArticleTextPreviewExtended>
					<S.SpanExtended to={`/article/${slug}`}>Read more...</S.SpanExtended>
				</S.ArticleContent>
			</S.ArticleLeftSide>
			<S.ArticleRightSide>
				<S.AddToFavorite favorited={favorited} onClick={handleAddingToFavorite}>
					<S.HeartIcon favorited={favorited} />
					<S.FavoriteAddedCount favorited={favorited}>{favoritesCount}</S.FavoriteAddedCount>
				</S.AddToFavorite>
				<TagList tagList={tagList} isArticlePreviewTags />
			</S.ArticleRightSide>
		</S.ArticlePreviewContainer>
	);
}


export default ArticlePreview;
