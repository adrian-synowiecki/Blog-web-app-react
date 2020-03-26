import React from 'react';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { ArticlesContainer } from './ArticleList.style';

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
