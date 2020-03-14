import React from 'react';

import ArticlePreview from '../ArticlePreview/ArticlePreview';
import { ArticlesContainer, ArticlesList } from './Articles.style';



function Articles({ articleList }) {

	return (
		<ArticlesContainer>
			{articleList.map((articleData) => (
				<ArticlePreview key={articleData.slug} articleData={articleData} />
			))}
		</ArticlesContainer>
	);
}

export default Articles;
