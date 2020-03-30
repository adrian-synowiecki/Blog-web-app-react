import React from 'react';

import * as S from './ArticleList.style';

import ArticlePreview from '../ArticlePreview/ArticlePreview';

function ArticleList({ articleList, addArticleToFavoritesRequest, removeArticleFromFavoritesRequest }) {
	return (
		<S.ArticlesContainer>
			{articleList.map((articleData) => (
				<ArticlePreview
					articleData={articleData}
					addArticleToFavoritesRequest={addArticleToFavoritesRequest}
					removeArticleFromFavoritesRequest={removeArticleFromFavoritesRequest}
					key={articleData.slug}
				/>
			))}
		</S.ArticlesContainer>
	);
}

export default ArticleList;
