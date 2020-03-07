import React from 'react';
import { connect } from 'react-redux';

import {
	articleFavoritedRequested,
	articleUnfavoritedRequested,
	fetchArticlesByTagRequested,
	fetchArticlesByMostRecentRequested
} from '../../redux/actions/articles';


import ArticleMeta from '../ArticleMeta/ArticleMeta';
import Tags from '../Tags/Tags'

import * as S from './ArticlePreview.style';

function ArticlePreview({
	articleContent,
	articleFavoritedRequested,
	articleUnfavoritedRequested,
	fetchArticlesByTagRequested
}) {
	const { favorited, slug, title, description, favoritesCount, tagList } = articleContent;
	const handleAddingToFavorite = () => {
		if (favorited) {
			articleUnfavoritedRequested(slug);
		} else {
			articleFavoritedRequested(slug);
		}
	};
	return (
		<S.ArticlePreviewContainer>
			<S.ArticleLeftSide>
				<ArticleMeta articleContent={articleContent} />
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
				<Tags tagList={tagList} isArticlePreviewTags  />
				{/* {tagList.length > 0 && (
					<S.ArticleTags>
						{tagList.map((tag) => (
							<S.Tag key={tag} onClick={() => fetchArticlesByTagRequested(tag)}>
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
	articleFavoritedRequested: (slug) => dispatch(articleFavoritedRequested(slug)),
	articleUnfavoritedRequested: (slug) => dispatch(articleUnfavoritedRequested(slug)),
	fetchArticlesByTagRequested: (tag) => dispatch(fetchArticlesByTagRequested(tag)),
	fetchArticlesByMostRecentRequested: (offset) => dispatch(fetchArticlesByMostRecentRequested(offset))
});

export default connect(null, mapDispatchToProps)(ArticlePreview);
