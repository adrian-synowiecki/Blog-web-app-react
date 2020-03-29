import React from 'react';

import * as S from './ArticlePreview.style';

import ArticleMeta from '../ArticleMeta/ArticleMeta';
import Tags from 'components/TagList/TagList'

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
					<S.ArticleTitle to={`/article/${slug}`}>{title}</S.ArticleTitle>
					<S.ArticleTextPreview to={`/article/${slug}`}>{description}</S.ArticleTextPreview>
					<S.Span to={`/article/${slug}`}>Read more...</S.Span>
				</S.ArticleContent>
			</S.ArticleLeftSide>
			<S.ArticleRightSide>
				<S.AddToFavorite favorited={favorited} onClick={handleAddingToFavorite}>
					<S.HeartIcon favorited={favorited} />
					<S.FavoriteAddedCount favorited={favorited}>{favoritesCount}</S.FavoriteAddedCount>
				</S.AddToFavorite>
				{<Tags tagList={tagList} isArticlePreviewTags />}
			</S.ArticleRightSide>
		</S.ArticlePreviewContainer>
	);
}


export default ArticlePreview;
