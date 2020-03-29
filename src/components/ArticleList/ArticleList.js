import React from 'react';

import { ArticlesContainer } from './ArticleList.style';

import ArticlePreview from '../ArticlePreview/ArticlePreview';

function ArticleList({ articleList, addArticleToFavoritesRequest, removeArticleFromFavoritesRequest }) {
	return (
		<ArticlesContainer>
			{articleList.map((articleData) => (
				<ArticlePreview
					articleData={articleData}
					addArticleToFavoritesRequest={addArticleToFavoritesRequest}
					removeArticleFromFavoritesRequest={removeArticleFromFavoritesRequest}
					key={articleData.slug}
				/>
			))}
		</ArticlesContainer>
	);
}

export default ArticleList;
