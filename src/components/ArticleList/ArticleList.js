import React from 'react';

import * as S from './ArticleList.style';

import ArticlePreview from '../ArticlePreview/ArticlePreview';

function ArticleList({ articleList }) {
	return (
		<S.ArticlesContainer>
			{articleList.map((articleData) => <ArticlePreview articleData={articleData} key={articleData.slug} />)}
		</S.ArticlesContainer>
	);
}

export default ArticleList;
