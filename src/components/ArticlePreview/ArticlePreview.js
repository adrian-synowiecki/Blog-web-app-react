import React from 'react';
import { connect } from 'react-redux';

import {
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
	fetchArticlesByTagRequest,
	fetchArticlesByMostRecentRequest
} from '../../redux/articleList/articleList.actions'

import ArticleMeta from '../ArticleMeta/ArticleMeta';
import Tags from '../Tags/Tags';

import * as S from './ArticlePreview.style';

function ArticlePreview({
	articleData,
	addArticleToFavoritesRequest,
	removeArticleFromFavoritesRequest,
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
				{/* {tagList.length > 0 && (
					<S.ArticleTags>
						{tagList.map((tag) => (
							<S.Tag key={tag} onClick={() => fetchArticlesByTagRequest(tag)}>
								{tag}
							</S.Tag>
						))}
					</S.ArticleTags>
				)} */}
			</S.ArticleRightSide>
		</S.ArticlePreviewContainer>
	);
}

const mapDispatchToProps = (dispatch) => ({
	addArticleToFavoritesRequest: (slug) => dispatch(addArticleToFavoritesRequest(slug)),
	removeArticleFromFavoritesRequest: (slug) => dispatch(removeArticleFromFavoritesRequest(slug)),
	fetchArticlesByTagRequest: (tag) => dispatch(fetchArticlesByTagRequest(tag)),
	fetchArticlesByMostRecentRequest: (offset) => dispatch(fetchArticlesByMostRecentRequest(offset))
});

export default connect(null, mapDispatchToProps)(ArticlePreview);
